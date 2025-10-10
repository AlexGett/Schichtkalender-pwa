const CACHE_NAME = 'schichtkalender-cache-v16.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
    'https://images.seeklogo.com/logo-png/54/2/motherson-logo-png_seeklogo-544537.png',
    '/ios/16.png',
    '/ios/32.png',
    '/ios/60.png',
    '/ios/76.png',
    '/ios/120.png',
    '/ios/152.png',
    '/ios/167.png',
    '/ios/180.png',
    '/ios/192.png',
    '/ios/512.png',
    // Hier können weitere spezifische Info-Dateien hinzugefügt werden,
    // wenn du möchtest, dass sie sofort gecacht werden.
    // Ansonsten werden sie bei der ersten Anfrage gecacht.
    // Beispiel: '/info_data/mein_info_bild.png',
    // '/info_data/wichtige_infos.pdf'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache);
        })
        .catch(error => {
            console.error('Fehler beim Caching der Dateien:', error);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if (response) {
                return response;
            }
            return fetch(event.request).then(
                networkResponse => {
                    if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                        return networkResponse;
                    }
                    
                    const responseToCache = networkResponse.clone();
                    
                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });
                    return networkResponse;
                }
            ).catch(() => {
                console.log('Fetch fehlgeschlagen für:', event.request.url);
            });
        })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
