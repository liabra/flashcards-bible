// --- VERSIONING DU CACHE (changer le numéro force une mise à jour) ---
const CACHE_NAME = 'bible-flashcards-v5';

// --- LISTE DES FICHIERS À CACHER ---
const urlsToCache = [
  '/index.html',
  '/style.css',
  '/script-bible.js',
  '/bibleData.js',
  '/promisesData.js',
  '/manifest.json',
  '/sw.js',

  // ICONES PWA (si tu en ajoutes)
  '/assets/icon-192.png',
  '/assets/icon-512.png'
];

// --- INSTALLATION ---
self.addEventListener('install', event => {
  console.log('[SW] Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// --- ACTIVATION (NETTOYAGE ANCIENS CACHES) ---
self.addEventListener('activate', event => {
  console.log('[SW] Activate');
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Suppression ancien cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// --- FETCH STRATÉGIE: NETWORK FIRST + FALLBACK CACHE ---
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
