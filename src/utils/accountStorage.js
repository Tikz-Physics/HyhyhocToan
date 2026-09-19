// Quản lý lưu trữ tài khoản đa người dùng đồng bộ và an toàn 100%
const STORAGE_KEY_ACCOUNTS = 'hyhyhoctoan_accounts';
const STORAGE_KEY_ACTIVE_ID = 'hyhyhoctoan_active_account_id';
const LEGACY_KEY_ACCOUNTS = 'toan_lop1_accounts';
const LEGACY_KEY_ACTIVE_ID = 'toan_lop1_current_account_id';

export function loadAccounts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ACCOUNTS) || localStorage.getItem(LEGACY_KEY_ACCOUNTS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Lỗi khi đọc tài khoản:', err);
  }

  // Khôi phục từ dữ liệu cũ nếu có
  let existingStars = 10;
  try {
    const s = localStorage.getItem('toan_lop1_stars');
    if (s !== null) existingStars = Number(s);
  } catch {}

  let existingTasks = [];
  try {
    const t = localStorage.getItem('toan_lop1_completed');
    if (t) existingTasks = JSON.parse(t);
  } catch {}

  let existingMedals = [];
  try {
    const m = localStorage.getItem('toan_lop1_medals');
    if (m) existingMedals = JSON.parse(m);
  } catch {}

  const defaultAccount = {
    id: 'default_child',
    name: 'Bé Yêu 🎈',
    avatar: '🦁',
    stars: existingStars,
    completedTasks: existingTasks,
    userMedals: existingMedals,
    unlockedPets: ['dino'],
    activePet: 'dino',
    createdAt: Date.now(),
  };

  saveAccounts([defaultAccount]);
  return [defaultAccount];
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
  return accounts[0]?.id || 'default_child';
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
