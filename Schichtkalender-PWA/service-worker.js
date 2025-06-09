const CACHE_NAME = 'schichtkalender-v1.1'; // Cache-Version erhöht, damit der Service Worker aktualisiert wird
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
    'https://motherson.com/sites/all/themes/motherson/logo.png', // Externe URL des Haupt-Logos
    // Alle Icon-Pfade aus der manifest.json - Stelle sicher, dass diese Dateien im Ordner 'ios/' existieren!
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
                return cache.addAll(urlsToCache).catch(error => {
                    console.error('Service Worker: Failed to cache some URLs:', error);
                    throw error;
                });
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
                    response => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        const responseToCache = response.clone();
                        // Nur den externen Link oder lokale PWA-Assets cachen, die in urlsToCache sind
                        // Wenn die Anfrage in urlsToCache ist, füge sie zum Cache hinzu.
                        // Andernfalls, wenn es ein dynamisches Asset ist, nicht cachen (es sei denn, spezifisch benötigt).
                        if (urlsToCache.includes(event.request.url.replace(self.location.origin, '.')) || event.request.url.startsWith('https://cdnjs.cloudflare.com/') || event.request.url === 'https://motherson.com/sites/all/themes/motherson/logo.png') {
                             caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, responseToCache);
                                });
                        }
                        return response;
                    }
                ).catch(error => {
                    console.error('Fetch failed for:', event.request.url, error);
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
                        console.log('Service Worker: Deleting old cache', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
