import fs from 'fs';
import path from 'path';
import os from 'os';

// Cloud Persistence ID on RESTful API backend (shared across all Vercel instances & devices)
const RESTFUL_API_URL = 'https://api.restful-api.dev/objects/ff808181a09d98f701a0e641dd802adb';
const DEFAULT_ROOM = 'HYHY_VIP_CHAMPIONS_2026';
const TMP_FILE = path.join(os.tmpdir(), 'hyhy_sync_store_2026.json');

let inMemoryStore = {};
let lastRemoteFetchTime = 0;

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
        return json.data.students;
      }
    }
  } catch (err) {
    console.warn('[Sync API] Remote cloud fetch error:', err.message);
  }
  return null;
}

// Save data to persistent cloud REST backend
async function saveRemoteCloudStore(students) {
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

  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const room = (req.query?.room || (req.body && req.body.room) || DEFAULT_ROOM).toUpperCase();
  const store = await getStore(room);

  if (req.method === 'DELETE') {
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
    const data = store[room] || [];
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

      if (!student || !student.id) {
        return res.status(400).json({ error: 'Missing student data or id' });
      }

      if (!store[room]) {
        store[room] = [];
      }

      const existingIndex = store[room].findIndex((s) => s.id === student.id);
      const updatedStudent = {
        ...student,
        lastUpdated: Date.now(),
      };

      if (existingIndex >= 0) {
        store[room][existingIndex] = {
          ...store[room][existingIndex],
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
        saveRemoteCloudStore(store[room]);
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
