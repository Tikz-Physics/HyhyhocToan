import fs from 'fs';
import path from 'path';
import os from 'os';

let inMemoryStore = {};
const TMP_FILE = path.join(os.tmpdir(), 'hyhy_sync_store_2026.json');

function getStore() {
  if (Object.keys(inMemoryStore).length === 0) {
    try {
      if (fs.existsSync(TMP_FILE)) {
        const raw = fs.readFileSync(TMP_FILE, 'utf8');
        inMemoryStore = JSON.parse(raw) || {};
      }
    } catch {}
  }
  return inMemoryStore;
}

function persistStore() {
  try {
    fs.writeFileSync(TMP_FILE, JSON.stringify(inMemoryStore), 'utf8');
  } catch {}
}

export default async function handler(req, res) {
  // Helper for environments where res.status or res.json is missing
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

  // Parse query if not provided
  if (!req.query && req.url) {
    try {
      const parsedUrl = new URL(req.url, 'http://localhost');
      req.query = Object.fromEntries(parsedUrl.searchParams.entries());
    } catch {
      req.query = {};
    }
  }

  // Enable CORS
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

  const store = getStore();
  const room = (req.query?.room || (req.body && req.body.room) || 'HYHY_VIP_CHAMPIONS_2026').toUpperCase();

  if (req.method === 'DELETE') {
    store[room] = [];
    persistStore();
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
      const student = payload.student;

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
        store[room][existingIndex] = updatedStudent;
      } else {
        store[room].push(updatedStudent);
      }

      // Sort by stars descending for leaderboard
      store[room].sort((a, b) => (b.stars || 0) - (a.stars || 0));
      persistStore();

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
