const CACHE='merecad-v2.2';
const ASSETS=['./','./index.html','./styles.css','./cad-controls.css','./cad-ribbon.css','./cad-ribbon-extra.css','./compact-layout.css','./cad-navigation.css','./shape-library.css','./floor-symbols.css','./firebase-ui.css','./firebase-init.js','./app.js','./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))));
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(response=>response||fetch(event.request))));
