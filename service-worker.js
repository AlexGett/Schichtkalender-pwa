const CACHE_NAME = 'schichtkalender-v1.8'; // Versionsnummer erhöht, um Update zu erzwingen
const urlsToCache = [
    './', // Startseite des Scopes
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
    'https://images.seeklogo.com/logo-png/54/2/motherson-logo-png_seeklogo-544537.png',
    // Korrigierte Pfade für die Icons im 'ios' Unterordner:
    './ios/16.png',
    './ios/32.png',
    './ios/60.png',
    './ios/76.png',
    './ios/120.png',
    './ios/152.png',
    './ios/167.png',
    './ios/180.png',
    './ios/192.png',
    './ios/512.png'
];

// Install event: Caching static assets
self.addEventListener('install', event => {
    console.log('[Service Worker] Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[Service Worker] Caching app shell');
                // Verwende Promise.all mit cache.add, um individuelle Fehler zu loggen
                return Promise.all(urlsToCache.map(url => {
                    return cache.add(url).catch(error => {
                        console.error(`[Service Worker] Failed to cache ${url}:`, error);
                        // Optional: Wenn ein Asset nicht gecached werden kann, soll der Install NICHT fehlschlagen
                        // return Promise.resolve();
                        // Wenn der Install fehlschlagen soll, um Problem zu signalisieren:
                        throw error; // Wichtig: lässt den Install fehlschlagen, wenn ein URL-Problem vorliegt
                    });
                }));
            })
            .then(() => self.skipWaiting()) // Erzwingt, dass der neue SW sofort aktiviert wird
            .catch(error => {
                console.error('[Service Worker] Installation failed:', error);
            })
    );
});

// Activate event: Cleaning up old caches
self.addEventListener('activate', event => {
    console.log('[Service Worker] Activating...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME && cacheName.startsWith('schichtkalender')) { // Nur eigene Caches löschen
                        console.log('[Service Worker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
        .then(() => clients.claim()) // Übernimmt die Kontrolle über alle offenen Clients
        .catch(error => {
            console.error('[Service Worker] Activation failed:', error);
        })
    );
});

// Fetch event: Serve from cache, then fall back to network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    // console.log(`[Service Worker] Serving from cache: ${event.request.url}`);
                    return response;
                }
                // If not in cache, fetch from network
                return fetch(event.request).then(
                    function(response) {
                        // Check if we received a valid response
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            // console.log(`[Service Worker] Not caching response for ${event.request.url} (status: ${response ? response.status : 'N/A'})`);
                            return response;
                        }

                        // IMPORTANT: Clone the response. A response is a stream
                        // and can only be consumed once. We must clone it so that
                        // both the browser and the cache can consume the response.
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                // console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
                                cache.put(event.request, responseToCache);
                            })
                            .catch(error => {
                                console.error(`[Service Worker] Failed to add ${event.request.url} to cache:`, error);
                            });

                        return response;
                    }
                );
            })
            // Füge einen catch-Block hinzu, um Netzwerkfehler während des Fetches abzufangen
            .catch(error => {
                console.error(`[Service Worker] Fetch failed for ${event.request.url}:`, error);
                // Optional: Eine Fallback-Antwort für Offline-Szenarien
                // return caches.match('/offline.html'); // Wenn du eine Offline-Seite hast
                // Oder eine generische Fehlermeldung
                return new Response('Offline: Resource not available and no network.', {
                    status: 503,
                    statusText: 'Service Unavailable'
                });
            })
    );
});