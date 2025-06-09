const CACHE_NAME = 'schichtkalender-cache-v1'; // Angepasster Cache-Name
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
    'https://images.seeklogo.com/logo-png/54/2/motherson-logo-png_seeklogo-544537.png',
    // iOS Icons - stelle sicher, dass diese Pfade korrekt sind
    '/ios/16.png',
    '/ios/32.png',
    '/ios/60.png',
    '/ios/76.png',
    '/ios/120.png',
    '/ios/152.png',
    '/ios/167.png',
    '/ios/180.png',
    '/ios/192.png',
    '/ios/512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache geöffnet und Dateien hinzugefügt');
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
                // Cache Hit - gib die Antwort zurück
                if (response) {
                    return response;
                }
                // Wenn nicht im Cache, versuche, vom Netzwerk abzurufen
                return fetch(event.request).then(
                    networkResponse => {
                        // Überprüfe, ob die Antwort gültig ist
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        // Klone die Antwort, da sie nur einmal gelesen werden kann
                        const responseToCache = networkResponse.clone();
                        
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        return networkResponse;
                    }
                ).catch(() => {
                    // Falls sowohl Cache als auch Netzwerk fehlschlagen, könntest du eine Offline-Seite zurückgeben
                    // Zum Beispiel: return caches.match('/offline.html');
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
                        // Lösche alte Caches
                        console.log('Alten Cache löschen:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
