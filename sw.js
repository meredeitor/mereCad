const CACHE='merecad-v2.3';
const ASSETS=['./','./index.html','./styles.css','./cad-controls.css','./cad-ribbon.css','./cad-ribbon-extra.css','./compact-layout.css','./cad-navigation.css','./shape-library.css','./floor-symbols.css','./firebase-ui.css','./firebase-init.js','./app.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)))});
self.addEventListener('activate',event=>event.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))])));
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(response=>response||fetch(event.request))));
