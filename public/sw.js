const CACHE_NAME = 'hyhyhoctoan-cache-v2.2.1';

// Tài nguyên thiết yếu
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './version.json',
  './favicon.svg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('Pre-cache error (non-fatal):', err);
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((keys) => {
        return Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
          })
        );
      }),
      self.clients.claim()
    ])
  );
});

// Lắng nghe lệnh cập nhật ngay lập tức từ giao diện web
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Network-First cho version.json và index.html để luôn phát hiện bản mới
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Không can thiệp API ngoài hoặc TTS
  if (url.pathname.includes('/api/')) {
    return;
  }

  // version.json: luôn fetch mạng mới nhất
  if (url.pathname.endsWith('version.json')) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' }).catch(() => caches.match(event.request))
    );
    return;
  }

  // HTML page: Network-First để luôn nhận phiên bản mới nhất
  if (event.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname === '/') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request).then((res) => res || caches.match('./index.html')))
    );
    return;
  }

  // Các tài nguyên khác (JS, CSS, Ảnh, Audio): Cache First với fallback Network
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Tải ngầm cập nhật tài nguyên nếu có
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
            }
          })
          .catch(() => {});
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        return networkResponse;
      });
    })
  );
});
