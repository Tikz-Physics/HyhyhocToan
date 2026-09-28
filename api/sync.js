import fs from 'fs';
import path from 'path';
import os from 'os';

// Cloud Persistence ID on RESTful API backend (shared across all Vercel instances & devices)
// Chỉ bật persistence ngoài khi máy chủ được cấu hình riêng. Không hard-code
// kho công khai trong mã nguồn hoặc cho trình duyệt ghi trực tiếp vào đó.
const RESTFUL_API_URL = process.env.SYNC_STORE_URL || '';
const DEFAULT_ROOM = 'HYHY_VIP_CHAMPIONS_2026';
const TMP_FILE = path.join(os.tmpdir(), 'hyhy_sync_store_2026.json');
const MAX_BODY_BYTES = 32 * 1024;
const ALLOWED_ORIGIN = process.env.SYNC_ALLOWED_ORIGIN || '';
const ADMIN_TOKEN = process.env.SYNC_ADMIN_TOKEN || '';

let inMemoryStore = {};
let lastRemoteFetchTime = 0;
const requestBuckets = new Map();

function isRateLimited(req) {
  const forwarded = String(req.headers?.['x-forwarded-for'] || '').split(',')[0].trim();
  const key = forwarded || req.socket?.remoteAddress || 'local';
  const now = Date.now();
  const bucket = requestBuckets.get(key);
  if (!bucket || now - bucket.startedAt >= 60000) {
    requestBuckets.set(key, { startedAt: now, count: 1 });
    return false;
  }
  bucket.count += 1;
  return bucket.count > 60;
}

// Read local disk cache if available
function readDiskCache() {
  try {
    if (fs.existsSync(TMP_FILE)) {
      const raw = fs.readFileSync(TMP_FILE, 'utf8');
      return JSON.parse(raw) || {};
    }
  } catch {}
  return {};
}

// Write local disk cache
function writeDiskCache(store) {
  try {
    fs.writeFileSync(TMP_FILE, JSON.stringify(store), 'utf8');
  } catch {}
}

// Fetch latest data from persistent cloud REST backend
async function fetchRemoteCloudStore() {
  if (!RESTFUL_API_URL) return null;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(RESTFUL_API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'HyhyMathSync/1.0',
      },
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      if (json && json.data && json.data.students) {
        return json.data.students.map(toPublicStudent).filter(Boolean);
      }
    }
  } catch (err) {
    console.warn('[Sync API] Remote cloud fetch error:', err.message);
  }
  return null;
}

// Save data to persistent cloud REST backend
async function saveRemoteCloudStore(students) {
  if (!RESTFUL_API_URL) return;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    await fetch(RESTFUL_API_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'HyhyMathSync/1.0',
      },
      body: JSON.stringify({
        name: DEFAULT_ROOM,
        data: {
          room: DEFAULT_ROOM,
          updatedAt: Date.now(),
          students: students || [],
        },
      }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
  } catch (err) {
    console.warn('[Sync API] Remote cloud save error:', err.message);
  }
}

function toPublicStudent(student) {
  if (!student || typeof student.id !== 'string') return null;
  return {
    id: student.id.slice(0, 128),
    name: String(student.name || 'Người học').slice(0, 80),
    avatar: String(student.avatar || '🦁').slice(0, 16),
    grade: Math.min(5, Math.max(1, Number(student.grade) || 1)),
    stars: Math.max(0, Math.min(1000000, Number(student.stars) || 0)),
    completedTasksCount: Math.max(0, Math.min(10000, Number(student.completedTasksCount) || 0)),
    userMedalsCount: Math.max(0, Math.min(1000, Number(student.userMedalsCount) || 0)),
    highestTimoScore: Math.max(0, Math.min(100, Number(student.highestTimoScore) || 0)),
    lastActive: Number(student.lastActive) || Date.now(),
    lastUpdated: Number(student.lastUpdated) || Date.now(),
  };
}

function getNameKey(value) {
  return String(value || '').normalize('NFKC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('vi-VN');
}

async function getStore(room = DEFAULT_ROOM) {
  if (Object.keys(inMemoryStore).length === 0) {
    inMemoryStore = readDiskCache();
  }

  // Periodic refresh from persistent cloud (every 20s or if empty)
  const now = Date.now();
  if (room === DEFAULT_ROOM && (!inMemoryStore[room] || inMemoryStore[room].length === 0 || now - lastRemoteFetchTime > 20000)) {
    const remoteStudents = await fetchRemoteCloudStore();
    if (remoteStudents && Array.isArray(remoteStudents)) {
      // Merge remote students with local store to avoid data loss
      const mergedMap = new Map();
      (remoteStudents || []).forEach((s) => mergedMap.set(s.id, s));
      (inMemoryStore[room] || []).forEach((s) => {
        const remote = mergedMap.get(s.id);
        if (remote) {
          mergedMap.set(s.id, {
            ...remote,
            ...s,
            stars: Math.max(s.stars || 0, remote.stars || 0),
          });
        } else {
          mergedMap.set(s.id, s);
        }
      });

      inMemoryStore[room] = Array.from(mergedMap.values()).sort(
        (a, b) => (b.stars || 0) - (a.stars || 0)
      );
      lastRemoteFetchTime = now;
      writeDiskCache(inMemoryStore);
    }
  }

  return inMemoryStore;
}

export default async function handler(req, res) {
  if (!res.status) {
    res.status = function (code) {
      this.statusCode = code;
      return this;
    };
  }
  if (!res.json) {
    res.json = function (data) {
      this.setHeader('Content-Type', 'application/json');
      this.end(JSON.stringify(data));
      return this;
    };
  }

  if (!req.query && req.url) {
    try {
      const parsedUrl = new URL(req.url, 'http://localhost');
      req.query = Object.fromEntries(parsedUrl.searchParams.entries());
    } catch {
      req.query = {};
    }
  }

  const bodyText = typeof req.body === 'string' ? req.body : JSON.stringify(req.body || {});
  if (Buffer.byteLength(bodyText, 'utf8') > MAX_BODY_BYTES) {
    return res.status(413).json({ error: 'Payload too large' });
  }

  if (isRateLimited(req)) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  const requestOrigin = req.headers?.origin;
  if (ALLOWED_ORIGIN && requestOrigin && requestOrigin !== ALLOWED_ORIGIN) {
    return res.status(403).json({ error: 'Origin is not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'false');
  if (ALLOWED_ORIGIN) res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const requestedRoom = String(req.query?.room || (req.body && req.body.room) || DEFAULT_ROOM);
  const room = requestedRoom.replace(/[^A-Z0-9_-]/gi, '').slice(0, 64).toUpperCase() || DEFAULT_ROOM;
  const store = await getStore(room);

  if (req.method === 'DELETE') {
    if (!ADMIN_TOKEN || req.headers?.['x-sync-admin-token'] !== ADMIN_TOKEN) {
      return res.status(403).json({ error: 'Room reset is not available without administrator authorization' });
    }
    store[room] = [];
    writeDiskCache(store);
    if (room === DEFAULT_ROOM) {
      await saveRemoteCloudStore([]);
    }
    return res.status(200).json({
      success: true,
      message: `Đã làm sạch dữ liệu phòng ${room}`,
      room,
      students: [],
    });
  }

  if (req.method === 'GET') {
    const data = (store[room] || []).map(toPublicStudent).filter(Boolean);
    return res.status(200).json({
      success: true,
      room,
      updatedAt: Date.now(),
      students: data,
    });
  }

  if (req.method === 'POST') {
    try {
      const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const student = payload?.student;

      if (!student || !student.id || typeof student.id !== 'string' || student.id.length > 128) {
        return res.status(400).json({ error: 'Missing student data or id' });
      }

      // Never persist credentials or detailed child progress in the public room.
      const safeStudent = {
        id: student.id,
        name: String(student.name || 'Người học').normalize('NFKC').trim().replace(/\s+/g, ' ').slice(0, 80),
        avatar: String(student.avatar || '🦁').slice(0, 16),
        grade: Math.min(5, Math.max(1, Number(student.grade) || 1)),
        stars: Math.max(0, Math.min(1000000, Number(student.stars) || 0)),
        completedTasksCount: Math.max(0, Math.min(10000, Number(student.completedTasksCount) || 0)),
        userMedalsCount: Math.max(0, Math.min(1000, Number(student.userMedalsCount) || 0)),
        highestTimoScore: Math.max(0, Math.min(100, Number(student.highestTimoScore) || 0)),
        lastActive: Date.now(),
      };

      if (!store[room]) {
        store[room] = [];
      }

      const duplicateName = store[room].some(
        (item) => item.id !== safeStudent.id && getNameKey(item.name) === getNameKey(safeStudent.name)
      );
      if (duplicateName) {
        return res.status(409).json({ error: 'Account name already exists in this room' });
      }

      const existingIndex = store[room].findIndex((s) => s.id === safeStudent.id);
      const updatedStudent = {
        ...safeStudent,
        lastUpdated: Date.now(),
      };

      if (existingIndex >= 0) {
        store[room][existingIndex] = {
          ...updatedStudent,
          stars: Math.max(store[room][existingIndex].stars || 0, updatedStudent.stars || 0),
        };
      } else {
        store[room].push(updatedStudent);
      }

      // Sort by stars descending for leaderboard
      store[room].sort((a, b) => (b.stars || 0) - (a.stars || 0));
      writeDiskCache(store);

      // Persist to remote cloud in background / async
      if (room === DEFAULT_ROOM) {
        saveRemoteCloudStore(store[room].map(toPublicStudent).filter(Boolean));
      }

      return res.status(200).json({
        success: true,
        room,
        updatedAt: Date.now(),
        students: store[room],
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
