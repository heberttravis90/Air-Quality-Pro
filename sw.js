const CACHE='air-quality-pro-v05-navfix';
const STATIC=['./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(STATIC)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
    const windows=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    for(const client of windows){try{await client.navigate(client.url)}catch(e){}}
  })());
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  const isPage=event.request.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('/');
  if(isPage){
    event.respondWith((async()=>{
      try{
        const fresh=await fetch(event.request,{cache:'no-store'});
        const cache=await caches.open(CACHE);
        cache.put('./index.html',fresh.clone());
        return fresh;
      }catch(e){
        return (await caches.match('./index.html')) || Response.error();
      }
    })());
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(resp=>{
    if(resp && resp.ok && url.origin===self.location.origin){
      const copy=resp.clone(); caches.open(CACHE).then(cache=>cache.put(event.request,copy));
    }
    return resp;
  })));
});
