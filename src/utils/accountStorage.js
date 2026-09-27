// Quản lý lưu trữ tài khoản đa người dùng đồng bộ và an toàn 100%
const STORAGE_KEY_ACCOUNTS = 'hyhyhoctoan_accounts';
const STORAGE_KEY_ACTIVE_ID = 'hyhyhoctoan_active_account_id';
const LEGACY_KEY_ACCOUNTS = 'toan_lop1_accounts';
const LEGACY_KEY_ACTIVE_ID = 'toan_lop1_current_account_id';
const SYSTEM_RESET_KEY = 'hyhy_system_reset_v3_pin_mandatory_2026';

export function wipeAllAccountsAndReset() {
  try {
    localStorage.removeItem(STORAGE_KEY_ACCOUNTS);
    localStorage.removeItem(STORAGE_KEY_ACTIVE_ID);
    localStorage.removeItem(LEGACY_KEY_ACCOUNTS);
    localStorage.removeItem(LEGACY_KEY_ACTIVE_ID);
    localStorage.removeItem('toan_lop1_stars');
    localStorage.removeItem('toan_lop1_completed');
    localStorage.removeItem('toan_lop1_medals');
    localStorage.removeItem('hyhy_cloud_leaderboard_cache');
    localStorage.setItem(SYSTEM_RESET_KEY, 'v3_pin_2026');
  } catch (e) {
    console.error('Lỗi khi xóa tài khoản:', e);
  }
}

export function loadAccounts() {
  try {
    // 1. Kiểm tra xem thiết bị đã được chuyển đổi sang cơ chế mới chưa
    const isReset = localStorage.getItem(SYSTEM_RESET_KEY);
    if (!isReset) {
      // Xóa toàn bộ tài khoản cũ trên thiết bị này để yêu cầu lập tài khoản mới
      wipeAllAccountsAndReset();
      return [];
    }

    const raw = localStorage.getItem(STORAGE_KEY_ACCOUNTS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((acc) => ({
          ...acc,
          pin: acc.pin ? String(acc.pin).slice(0, 4) : '1234',
        }));
      }
    }
  } catch (err) {
    console.error('Lỗi khi đọc tài khoản:', err);
  }

  // Không tự ý tạo tài khoản ảo 'Bé Yêu' nữa, trả về mảng rỗng để yêu cầu người dùng lập tài khoản mới
  return [];
}

export function loadActiveAccountId(accounts) {
  try {
    const id = localStorage.getItem(STORAGE_KEY_ACTIVE_ID) || localStorage.getItem(LEGACY_KEY_ACTIVE_ID);
    if (id && accounts.some((a) => a.id === id)) {
      return id;
    }
  } catch (err) {
    console.error('Lỗi khi đọc active ID:', err);
  }
  return accounts[0]?.id || null;
}

export function saveAccounts(accounts) {
  try {
    const data = JSON.stringify(accounts);
    localStorage.setItem(STORAGE_KEY_ACCOUNTS, data);
    localStorage.setItem(LEGACY_KEY_ACCOUNTS, data);
  } catch (err) {
    console.error('Lỗi khi lưu tài khoản:', err);
  }
}

export function saveActiveAccountId(id) {
  try {
    localStorage.setItem(STORAGE_KEY_ACTIVE_ID, id);
    localStorage.setItem(LEGACY_KEY_ACTIVE_ID, id);
  } catch (err) {
    console.error('Lỗi khi lưu active ID:', err);
  }
}
