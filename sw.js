// Air Quality Pro v1.0 development worker retirement / network-only guard.
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('air-quality-pro-')).map(k => caches.delete(k)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({type:'window', includeUncontrolled:true});
    for (const client of clients) client.navigate(client.url);
  })());
});
self.addEventListener('fetch', event => event.respondWith(fetch(event.request, {cache:'no-store'})));
