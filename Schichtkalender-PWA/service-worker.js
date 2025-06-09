const CACHE_NAME = 'schichtkalender-v1'; // Wenn du Änderungen am Cache machst, erhöhe diese Version!
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
    '/images/motherson-logo-full.png', // Lokaler Pfad für das Haupt-Logo im HTML
    // Alle Icon-Pfade aus der manifest.json
    './ios/16.png',
    './ios/20.png',
    './ios/29.png',
    './ios/32.png',
    './ios/40.png',
    './ios/50.png',
    './ios/57.png',
    './ios/58.png',
    './ios/60.png',
    './ios/64.png',
    './ios/72.png',
    './ios/76.png',
    './ios/80.png',
    './ios/87.png',
    './ios/100.png',
    './ios/114.png',
    './ios/120.png',
    './ios/128.png',
    './ios/144.png',
    './ios/152.png',
    './ios/167.png',
    './ios/180.png',
    './ios/192.png',
    './ios/256.png',
    './ios/512.png',
    './ios/1024.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                // If not in cache, fetch from network
                return fetch(event.request).then(
                    response => {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        // IMPORTANT: Clone the response. A response is a stream
                        // and can only be consumed once. We must clone it so that
                        // the browser can consume one and we can consume the other.
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
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
                        console.log('Service Worker: Deleting old cache', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
