const CACHE_NAME = 'maden-akademi-ota-v2.5';
self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});
// Network-first strategy so any update pushed to GitHub Pages immediately updates the APK and EXE!
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
