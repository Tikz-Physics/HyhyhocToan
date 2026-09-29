// Quản lý đồng bộ tiến trình học tập và bảng vàng thi đua đám mây giữa các thiết bị
// Giúp nhiều bé học trên nhiều máy tính/điện thoại/máy tính bảng khác nhau có thể thi đua với nhau!

const STORAGE_ROOM_KEY = 'hyhy_sync_room_code';
const STORAGE_LEADERBOARD_CACHE = 'hyhy_cloud_leaderboard_cache';
const DEFAULT_ROOM = 'HYHY_VIP_CHAMPIONS_2026';
// GitHub Pages is a static host, so /api/sync is unavailable there. Keep the
// store configurable for deployments with their own API and retain the
// existing public leaderboard store as a compatibility fallback.
const DIRECT_CLOUD_STORE_URL =
  import.meta.env?.VITE_SYNC_STORE_URL ||
  'https://api.restful-api.dev/objects/ff808181a09d98f701a0e641dd802adb';

// Kênh BroadcastChannel đồng bộ tức thì giữa các tab/cửa sổ trên cùng máy
let broadcastChannel = null;
try {
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    broadcastChannel = new BroadcastChannel('hyhy_student_sync_channel');
  }
} catch (e) {
  console.warn('BroadcastChannel not supported:', e);
}

export function getSyncRoomCode() {
  try {
    const val = localStorage.getItem(STORAGE_ROOM_KEY);
    if (!val || val === 'HYHY_VIP_CHAMPIONS') {
      localStorage.setItem(STORAGE_ROOM_KEY, DEFAULT_ROOM);
      return DEFAULT_ROOM;
    }
    return val;
  } catch {
    return DEFAULT_ROOM;
  }
}

export function setSyncRoomCode(code) {
  const cleanCode = (code || DEFAULT_ROOM).trim().toUpperCase();
  try {
    localStorage.setItem(STORAGE_ROOM_KEY, cleanCode);
  } catch {}
  return cleanCode;
}

// Lưu trữ bộ nhớ đệm bảng xếp hạng
export function getCachedLeaderboard() {
  try {
    const raw = localStorage.getItem(STORAGE_LEADERBOARD_CACHE);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {}
  return [];
}

export function setCachedLeaderboard(list) {
  try {
    if (Array.isArray(list)) {
      localStorage.setItem(STORAGE_LEADERBOARD_CACHE, JSON.stringify(list));
    }
  } catch {}
}

function sanitizeLeaderboardStudent(student) {
  if (!student || typeof student.id !== 'string' || !student.id) return null;
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
    deviceInfo: String(student.deviceInfo || 'Thiết bị').slice(0, 80),
  };
}

// Merge by stable account id so a device with a partial cache can never
// overwrite students that were already published by another device.
export function mergeLeaderboardStudents(...lists) {
  const merged = new Map();
  lists.flatMap((list) => (Array.isArray(list) ? list : [])).forEach((rawStudent) => {
    const student = sanitizeLeaderboardStudent(rawStudent);
    if (!student) return;
    const previous = merged.get(student.id);
    merged.set(student.id, {
      ...(previous || {}),
      ...student,
      stars: Math.max(previous?.stars || 0, student.stars || 0),
    });
  });
  return Array.from(merged.values()).sort((a, b) => (b.stars || 0) - (a.stars || 0));
}

async function fetchDirectCloudStudents() {
  if (!DIRECT_CLOUD_STORE_URL) return [];
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);
  try {
    const response = await fetch(DIRECT_CLOUD_STORE_URL, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });
    if (!response.ok) return [];
    const json = await response.json();
    return Array.isArray(json?.data?.students)
      ? json.data.students.map(sanitizeLeaderboardStudent).filter(Boolean)
      : [];
  } catch (err) {
    console.warn('Không thể đọc Direct Cloud Store:', err);
    return [];
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * Đẩy thông tin tài khoản bé lên Đám Mây để thi đua
 */
export async function syncAccountToCloud(account, customRoom = null) {
  if (!account || !account.id) return null;

  const room = customRoom || getSyncRoomCode();

  // Chuẩn bị hồ sơ thi đua và đồng bộ liên máy
  // Chỉ đồng bộ dữ liệu bảng xếp hạng tối thiểu. PIN và tiến trình chi tiết
  // phải ở local/server riêng, không được phát tán trong leaderboard công khai.
  const payloadStudent = {
    id: account.id,
    name: account.name || 'Người học',
    avatar: account.avatar || '🦁',
    grade: account.grade || 1,
    stars: account.stars || 0,
    completedTasksCount: (account.completedTasks || []).length,
    userMedalsCount: (account.userMedals || []).length,
    highestTimoScore: account.highestTimoScore || 0,
    lastActive: Date.now(),
    deviceInfo: getDevicePlatform(),
  };

  // 1. Phát sóng qua BroadcastChannel cho các tab khác trên máy này
  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage({ type: 'ACCOUNT_UPDATED', student: payloadStudent });
    } catch {}
  }

  // 2. Cập nhật vào cache cục bộ
  const cached = getCachedLeaderboard();
  let updatedList = mergeLeaderboardStudents(cached, [payloadStudent]);
  setCachedLeaderboard(updatedList);

  // 3. Gửi lên máy chủ /api/sync
  try {
    const res = await fetch(`/api/sync?room=${encodeURIComponent(room)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        room,
        student: payloadStudent,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.students && Array.isArray(data.students)) {
        setCachedLeaderboard(data.students);
        return data.students;
      }
    }
  } catch (err) {
    console.warn('Lưu đám mây qua /api/sync thất bại, chuyển sang direct cloud store:', err);
  }

  // Static deployments (for example GitHub Pages) cannot execute /api/sync.
  // Only the already-sanitized public leaderboard projection is sent here.
  if (room === DEFAULT_ROOM && DIRECT_CLOUD_STORE_URL) {
    try {
      // Read-before-write is required for static hosting: the fallback store
      // has no per-student PATCH endpoint, so PUT must preserve other devices.
      const remoteStudents = await fetchDirectCloudStudents();
      updatedList = mergeLeaderboardStudents(remoteStudents, updatedList);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);
      const directRes = await fetch(DIRECT_CLOUD_STORE_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: DEFAULT_ROOM,
          data: { room: DEFAULT_ROOM, updatedAt: Date.now(), students: updatedList },
        }),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      if (directRes.ok) {
        setCachedLeaderboard(updatedList);
        return updatedList;
      }
    } catch (err) {
      console.warn('Direct cloud store update error:', err);
    }
  }

  return updatedList;
}

/** Remove one local account from the public fallback leaderboard. */
export async function removeAccountFromCloud(accountId, customRoom = null) {
  if (!accountId) return false;
  const room = customRoom || getSyncRoomCode();
  if (room !== DEFAULT_ROOM || !DIRECT_CLOUD_STORE_URL) return false;

  try {
    const remoteStudents = await fetchDirectCloudStudents();
    const remaining = mergeLeaderboardStudents(remoteStudents).filter(
      (student) => student.id !== accountId
    );
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);
    const response = await fetch(DIRECT_CLOUD_STORE_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: DEFAULT_ROOM,
        data: { room: DEFAULT_ROOM, updatedAt: Date.now(), students: remaining },
      }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    if (response.ok) {
      setCachedLeaderboard(remaining);
      return true;
    }
  } catch (err) {
    console.warn('Không thể xóa tài khoản khỏi Bảng Vàng:', err);
  }
  return false;
}

/**
 * Tải bảng xếp hạng thi đua mới nhất từ đám mây (Hỗ trợ đa tầng: API -> Direct Cloud -> Cache)
 */
export async function fetchCloudLeaderboard(customRoom = null) {
  const room = customRoom || getSyncRoomCode();

  // Tầng 1: Gọi /api/sync
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(`/api/sync?room=${encodeURIComponent(room)}&t=${Date.now()}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.students && Array.isArray(data.students) && data.students.length > 0) {
        setCachedLeaderboard(data.students);
        return {
          success: true,
          students: data.students,
          room: data.room || room,
          updatedAt: data.updatedAt || Date.now(),
        };
      }
    }
  } catch (err) {
    console.warn('Không thể kết nối /api/sync, thử tầng 2 Direct Cloud Store:', err);
  }

  if (room === DEFAULT_ROOM && DIRECT_CLOUD_STORE_URL) {
    try {
      const remoteList = await fetchDirectCloudStudents();
      if (remoteList.length > 0) {
        const sorted = mergeLeaderboardStudents(remoteList);
        setCachedLeaderboard(sorted);
        return {
          success: true,
          students: sorted,
          room,
          updatedAt: Date.now(),
        };
      }
    } catch (err) {
      console.warn('Không thể kết nối Direct Cloud Store, dùng bộ nhớ đệm:', err);
    }
  }

  // Fallback về cache khi backend không sẵn sàng.
  const cached = getCachedLeaderboard();
  return {
    success: cached.length > 0,
    students: cached,
    room,
    isCached: true,
  };
}

/**
 * Nhận diện thiết bị người dùng (để bé biết bạn học đang dùng máy nào)
 */
function getDevicePlatform() {
  if (typeof navigator === 'undefined') return 'Máy tính';
  const ua = navigator.userAgent;
  if (/iPad|Tablet/i.test(ua)) return 'Máy tính bảng 📱';
  if (/iPhone|Android/i.test(ua) && /Mobile/i.test(ua)) return 'Điện thoại 📱';
  if (/Mac/i.test(ua)) return 'MacBook 💻';
  if (/Windows/i.test(ua)) return 'Máy tính Windows 💻';
  return 'Trình duyệt Web 🌐';
}

/**
 * Đăng ký lắng nghe sự kiện đồng bộ từ các máy/tab khác
 */
export function onCloudSyncEvent(callback) {
  if (!broadcastChannel) return () => {};

  const handler = (event) => {
    if (event.data && typeof callback === 'function') {
      callback(event.data);
    }
  };

  broadcastChannel.addEventListener('message', handler);
  return () => {
    broadcastChannel.removeEventListener('message', handler);
  };
}

/**
 * Tạo mã chia sẻ sao lưu toàn bộ tài khoản (Backup Sync Code)
 */
export function generateSyncExportCode(accounts) {
  try {
    const payload = {
      app: 'HyhyhocToan',
      version: 2,
      createdAt: Date.now(),
      accounts: accounts || [],
    };
    return btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
  } catch (err) {
    console.error('Lỗi mã hóa code:', err);
    return null;
  }
}

/**
 * Nhập tài khoản từ mã sao lưu chia sẻ
 */
export function importSyncExportCode(codeStr) {
  try {
    const jsonStr = decodeURIComponent(escape(atob(codeStr.trim())));
    const parsed = JSON.parse(jsonStr);
    if (parsed && Array.isArray(parsed.accounts)) {
      return parsed.accounts;
    }
  } catch (err) {
    console.error('Mã sao lưu không hợp lệ:', err);
  }
  return null;
}
