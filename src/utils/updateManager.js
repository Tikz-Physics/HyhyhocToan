// Quản lý kiểm tra và cập nhật tự động cho ứng dụng HyhyhocToan
export const CURRENT_APP_VERSION = '2.2.5';
export const CURRENT_BUILD_TIMESTAMP = 1790655400000;

let deferredInstallPrompt = null;
let updateListeners = [];
let installPromptListeners = [];

// Đăng ký Service Worker an toàn
export function registerServiceWorker() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  // Đăng ký sw.js với scope tương đối
  const swUrl = './sw.js';
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      // Định kỳ kiểm tra bản mới mỗi 5 phút hoặc khi tab hoạt động trở lại
      setInterval(() => {
        try {
          registration.update();
        } catch {}
      }, 5 * 60 * 1000);

      registration.addEventListener('updatefound', () => {
        const installingWorker = registration.installing;
        if (!installingWorker) return;

        installingWorker.addEventListener('statechange', () => {
          if (
            installingWorker.state === 'installed' &&
            navigator.serviceWorker.controller
          ) {
            notifyUpdateListeners({
              hasUpdate: true,
              version: 'Bản mới nhất',
              isImmediate: true,
            });
          }
        });
      });
    })
    .catch((err) => {
      console.warn('Service Worker registration skipped or failed:', err);
    });

  // Lắng nghe sự kiện cài đặt PWA (Tải về màn hình chính)
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    notifyInstallPromptListeners(true);
  });

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    notifyInstallPromptListeners(false);
  });

  // Tự động kiểm tra khi cửa sổ lấy lại tiêu điểm (focus) hoặc có mạng trở lại
  window.addEventListener('focus', () => {
    checkForAppUpdate();
  });
  window.addEventListener('online', () => {
    checkForAppUpdate();
  });
}

// Kiểm tra bản cập nhật mới nhất từ version.json trên máy chủ
export async function checkForAppUpdate() {
  try {
    const res = await fetch(`./version.json?t=${Date.now()}`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
      },
    });

    if (res.ok) {
      const data = await res.json();
      const serverVersion = data.version;
      const serverBuild = Number(data.buildTime) || 0;

      const hasUpdate =
        (serverVersion && serverVersion !== CURRENT_APP_VERSION) ||
        serverBuild > CURRENT_BUILD_TIMESTAMP;

      if (hasUpdate) {
        notifyUpdateListeners({
          hasUpdate: true,
          version: serverVersion || 'Mới nhất',
          changelog: data.changelog,
          buildTime: data.buildTime,
        });
        return { hasUpdate: true, version: serverVersion, changelog: data.changelog };
      }
    }
  } catch (err) {
    console.warn('Kiểm tra cập nhật máy chủ không thành công (có thể đang offline):', err);
  }

  return { hasUpdate: false, version: CURRENT_APP_VERSION };
}

// Thực thi cập nhật ngay lập tức: Xóa cache cũ, kích hoạt SW mới, làm mới trang
export async function applyAppUpdate() {
  try {
    // 1. Gửi lệnh SKIP_WAITING tới service worker
    if ('serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.getRegistration();
      if (reg) {
        if (reg.waiting) {
          reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
        await reg.update();
      }
    }

    // 2. Xóa toàn bộ CacheStorage cũ
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map((name) => caches.delete(name)));
    }
  } catch (err) {
    console.error('Lỗi khi dọn dẹp cache:', err);
  }

  // 3. Tải lại trang với query tham số mới để phá cache trình duyệt
  const cleanUrl = window.location.href.split('?')[0].split('#')[0];
  window.location.href = `${cleanUrl}?v=${Date.now()}`;
}

// Kích hoạt hộp thoại cài đặt ứng dụng vào máy (PWA Install)
export async function promptInstallApp() {
  if (!deferredInstallPrompt) {
    return false;
  }
  deferredInstallPrompt.prompt();
  const choiceResult = await deferredInstallPrompt.userChoice;
  if (choiceResult.outcome === 'accepted') {
    deferredInstallPrompt = null;
    notifyInstallPromptListeners(false);
    return true;
  }
  return false;
}

export function canInstallApp() {
  return Boolean(deferredInstallPrompt);
}

// Kiểm tra xem ứng dụng có đang chạy độc lập (Standalone PWA) không
export function isRunningStandalone() {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
  );
}

// Đăng ký nhận thông báo cập nhật
export function onUpdateAvailable(listener) {
  updateListeners.push(listener);
  return () => {
    updateListeners = updateListeners.filter((l) => l !== listener);
  };
}

function notifyUpdateListeners(info) {
  updateListeners.forEach((l) => {
    try {
      l(info);
    } catch {}
  });
}

// Đăng ký nhận trạng thái cài đặt App
export function onInstallPromptChange(listener) {
  installPromptListeners.push(listener);
  return () => {
    installPromptListeners = installPromptListeners.filter((l) => l !== listener);
  };
}

function notifyInstallPromptListeners(canInstall) {
  installPromptListeners.forEach((l) => {
    try {
      l(canInstall);
    } catch {}
  });
}
