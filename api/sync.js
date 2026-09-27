// API Serverless Đồng Bộ Đám Mây & Bảng Vàng Thi Đua Liên Máy
// Hỗ trợ lưu trữ, cập nhật và đồng bộ tài khoản giữa tất cả các máy đăng nhập

let inMemoryStore = {};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
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

  const room = (req.query.room || (req.body && req.body.room) || 'HYHY_VIP_CHAMPIONS_2026').toUpperCase();

  if (req.method === 'DELETE') {
    inMemoryStore[room] = [];
    return res.status(200).json({
      success: true,
      message: `Đã làm sạch dữ liệu phòng ${room}`,
      room,
      students: [],
    });
  }

  if (req.method === 'GET') {
    const data = inMemoryStore[room] || [];
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

      if (!inMemoryStore[room]) {
        inMemoryStore[room] = [];
      }

      const existingIndex = inMemoryStore[room].findIndex((s) => s.id === student.id);
      const updatedStudent = {
        ...student,
        lastUpdated: Date.now(),
      };

      if (existingIndex >= 0) {
        inMemoryStore[room][existingIndex] = updatedStudent;
      } else {
        inMemoryStore[room].push(updatedStudent);
      }

      // Sort by stars descending for leaderboard
      inMemoryStore[room].sort((a, b) => (b.stars || 0) - (a.stars || 0));

      return res.status(200).json({
        success: true,
        room,
        updatedAt: Date.now(),
        students: inMemoryStore[room],
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
