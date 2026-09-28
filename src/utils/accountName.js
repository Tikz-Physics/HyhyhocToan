export function cleanAccountName(value) {
  return String(value || '').normalize('NFKC').trim().replace(/\s+/g, ' ');
}

export function getAccountNameKey(value) {
  return cleanAccountName(value).toLocaleLowerCase('vi-VN');
}

export function isDuplicateAccountName(name, accounts = [], ignoredId = null) {
  const key = getAccountNameKey(name);
  if (!key) return false;
  return accounts.some((account) => (
    account?.id !== ignoredId && getAccountNameKey(account?.name) === key
  ));
}
