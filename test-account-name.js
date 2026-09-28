import assert from 'node:assert/strict';
import {
  cleanAccountName,
  getAccountNameKey,
  isDuplicateAccountName,
} from './src/utils/accountName.js';

assert.equal(cleanAccountName('  Minh   Anh  '), 'Minh Anh');
assert.equal(cleanAccountName('Mèo Mun 🐈‍⬛'), 'Mèo Mun 🐈‍⬛');
assert.equal(getAccountNameKey('  HỒNG   ANH '), getAccountNameKey('hồng anh'));

const accounts = [
  { id: '1', name: 'Minh Anh' },
  { id: '2', name: 'Mèo Mun 🐈‍⬛' },
];

assert.equal(isDuplicateAccountName(' minh   anh ', accounts), true);
assert.equal(isDuplicateAccountName('MINH ANH', accounts), true);
assert.equal(isDuplicateAccountName('Minh Anh', accounts, '1'), false);
assert.equal(isDuplicateAccountName('Nam', accounts), false);

console.log('✓ Tên tài khoản được giữ nguyên, không tự thêm tiền tố');
console.log('✓ Chặn tên trùng không phân biệt hoa/thường và khoảng trắng');
