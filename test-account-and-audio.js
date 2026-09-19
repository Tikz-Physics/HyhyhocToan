// Test Account Persistence and Audio Separation
import assert from 'assert';

// Mock localStorage for Node.js environment
const store = {};
global.localStorage = {
  getItem: (key) => (key in store ? store[key] : null),
  setItem: (key, val) => {
    store[key] = String(val);
  },
  removeItem: (key) => {
    delete store[key];
  },
  clear: () => {
    for (const k in store) delete store[k];
  },
};

// 1. Test accountStorage.js
console.log('--- 1. Testing accountStorage.js ---');
const {
  loadAccounts,
  saveAccounts,
  loadActiveAccountId,
  saveActiveAccountId,
} = await import('./src/utils/accountStorage.js');

// Default when empty
const defaultAccs = loadAccounts();
assert.strictEqual(defaultAccs.length, 1);
assert.strictEqual(defaultAccs[0].id, 'default_child');
console.log('✓ Initial account loaded correctly');

// Create multiple accounts and save
const acc1 = { ...defaultAccs[0], stars: 25 };
const acc2 = {
  id: 'acc_sam',
  name: 'Bé Sam',
  avatar: '🐰',
  stars: 50,
  completedTasks: ['task1', 'task2'],
  userMedals: ['medal_gold'],
  unlockedPets: ['dino', 'cat'],
  activePet: 'cat',
  createdAt: Date.now(),
};

saveAccounts([acc1, acc2]);
saveActiveAccountId('acc_sam');

// Verify stored keys in localStorage
assert.strictEqual(
  localStorage.getItem('hyhyhoctoan_active_account_id'),
  'acc_sam'
);
assert.strictEqual(
  localStorage.getItem('toan_lop1_current_account_id'),
  'acc_sam'
);

// Reload accounts as if page reloaded
const reloadedAccs = loadAccounts();
assert.strictEqual(reloadedAccs.length, 2);
assert.strictEqual(reloadedAccs[1].name, 'Bé Sam');
assert.strictEqual(reloadedAccs[1].stars, 50);

const activeId = loadActiveAccountId(reloadedAccs);
assert.strictEqual(activeId, 'acc_sam');
console.log('✓ Account persistence across page reload verified 100%');

// 2. Test SoundManager Independent Controls
console.log('\n--- 2. Testing soundManager independent controls ---');
const { soundManager } = await import('./src/utils/soundManager.js');

// Initial defaults
assert.strictEqual(soundManager.soundEnabled, true);
assert.strictEqual(soundManager.voiceEnabled, true);

// Turn off sound only
soundManager.toggleSound();
assert.strictEqual(soundManager.soundEnabled, false, 'Sound should be disabled');
assert.strictEqual(soundManager.voiceEnabled, true, 'Voice should remain enabled');
assert.strictEqual(localStorage.getItem('hyhyhoctoan_sound_enabled'), 'false');
assert.strictEqual(localStorage.getItem('hyhyhoctoan_voice_enabled'), 'true');
console.log('✓ Toggling sound does not affect voice');

// Turn off voice only
soundManager.toggleVoice();
assert.strictEqual(soundManager.soundEnabled, false, 'Sound should still be disabled');
assert.strictEqual(soundManager.voiceEnabled, false, 'Voice should now be disabled');
assert.strictEqual(localStorage.getItem('hyhyhoctoan_voice_enabled'), 'false');
console.log('✓ Toggling voice works independently');

// Turn sound back on
soundManager.toggleSound();
assert.strictEqual(soundManager.soundEnabled, true, 'Sound should be re-enabled');
assert.strictEqual(soundManager.voiceEnabled, false, 'Voice should stay disabled');
console.log('✓ Sound re-enabled while voice stays disabled');

console.log('\n===================================================');
console.log('🎉 TẤT CẢ KIỂM TRA LƯU TÀI KHOẢN & TÁCH ÂM THANH / GIỌNG NÓI THÀNH CÔNG RỰC RỠ!');
console.log('===================================================');
