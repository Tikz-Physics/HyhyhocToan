// Quản lý đồng bộ tiến trình học tập và bảng vàng thi đua đám mây giữa các thiết bị
// Giúp nhiều bé học trên nhiều máy tính/điện thoại/máy tính bảng khác nhau có thể thi đua với nhau!

const STORAGE_ROOM_KEY = 'hyhy_sync_room_code';
const STORAGE_LEADERBOARD_CACHE = 'hyhy_cloud_leaderboard_cache';
const DEFAULT_ROOM = 'HYHY_VIP_CHAMPIONS_2026';
const DIRECT_CLOUD_STORE_URL = 'https://api.restful-api.dev/objects/ff808181a09d98f701a0e641dd802adb';

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

export async function wipeCloudRoomData(targetRoom = null) {
  const room = targetRoom || getSyncRoomCode();
  try {
    setCachedLeaderboard([]);
    await fetch(`/api/sync?room=${encodeURIComponent(room)}`, {
      method: 'DELETE',
    });
  } catch (e) {
    console.warn('Lỗi khi xóa bảng vàng đám mây qua /api/sync:', e);
  }

  // Also wipe direct cloud fallback if default room
  if (room === DEFAULT_ROOM) {
    try {
      await fetch(DIRECT_CLOUD_STORE_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: DEFAULT_ROOM,
          data: { room: DEFAULT_ROOM, updatedAt: Date.now(), students: [] },
        }),
      });
    } catch {}
  }
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

/**
 * Đẩy thông tin tài khoản bé lên Đám Mây để thi đua
 */
export async function syncAccountToCloud(account, customRoom = null) {
  if (!account || !account.id) return null;

  const room = customRoom || getSyncRoomCode();

  // Chuẩn bị hồ sơ thi đua và đồng bộ liên máy
  const payloadStudent = {
    id: account.id,
    name: account.name || 'Bé Yêu',
    avatar: account.avatar || '🦁',
    pin: account.pin || '1234',
    grade: account.grade || 1,
    stars: account.stars || 0,
    completedTasks: account.completedTasks || [],
    completedTasksCount: (account.completedTasks || []).length,
    userMedals: account.userMedals || [],
    userMedalsCount: (account.userMedals || []).length,
    unlockedPets: account.unlockedPets || ['dino'],
    activePet: account.activePet || 'dino',
    redeemedRewards: account.redeemedRewards || [],
    usedRewardHistory: account.usedRewardHistory || [],
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
  const existingIdx = cached.findIndex((s) => s.id === payloadStudent.id);
  let updatedList;
  if (existingIdx >= 0) {
    updatedList = [...cached];
    updatedList[existingIdx] = {
      ...updatedList[existingIdx],
      ...payloadStudent,
      stars: Math.max(updatedList[existingIdx].stars || 0, payloadStudent.stars || 0),
    };
  } else {
    updatedList = [...cached, payloadStudent];
  }
  updatedList.sort((a, b) => (b.stars || 0) - (a.stars || 0));
  setCachedLeaderboard(updatedList);

  // 3. Gửi lên máy chủ /api/sync
  let apiSuccess = false;
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
        apiSuccess = true;
        return data.students;
      }
    }
  } catch (err) {
    console.warn('Lưu đám mây qua /api/sync thất bại, chuyển sang direct cloud store:', err);
  }

  // 4. Nếu /api/sync không thành công hoặc chạy static không có backend, gọi trực tiếp direct cloud store
  if (!apiSuccess && room === DEFAULT_ROOM) {
    try {
      const directRes = await fetch(DIRECT_CLOUD_STORE_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: DEFAULT_ROOM,
          data: {
            room: DEFAULT_ROOM,
            updatedAt: Date.now(),
            students: updatedList,
          },
        }),
      });
      if (directRes.ok) {
        return updatedList;
      }
    } catch (e) {
      console.warn('Direct cloud store update error:', e);
    }
  }

  return updatedList;
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

  // Tầng 2: Gọi Direct Cloud Store (nếu là phòng mặc định)
  if (room === DEFAULT_ROOM) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const directRes = await fetch(DIRECT_CLOUD_STORE_URL, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (directRes.ok) {
        const json = await directRes.json();
        if (json && json.data && Array.isArray(json.data.students) && json.data.students.length > 0) {
          const remoteList = json.data.students.sort((a, b) => (b.stars || 0) - (a.stars || 0));
          setCachedLeaderboard(remoteList);
          return {
            success: true,
            students: remoteList,
            room,
            updatedAt: json.data.updatedAt || Date.now(),
          };
        }
      }
    } catch (e) {
      console.warn('Không thể kết nối Direct Cloud Store, dùng bộ nhớ đệm:', e);
    }
  }

  // Tầng 3: Fallback về cache
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
