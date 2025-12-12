const CACHE_NAME = 'solfege-quiz-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/sw.js',

  // ICONES PWA
  '/assets/icon-192.png',
  '/assets/icon-512.png',

  // AUTRES ASSETS
  '/assets/treble.svg',

  // AUDIOS
  '/Notes/do.mp3',
  '/Notes/re.mp3',
  '/Notes/mi.mp3',
  '/Notes/fa.mp3',
  '/Notes/sol.mp3',
  '/Notes/la.mp3',
  '/Notes/si.mp3'
];

// Installation: Mise en cache initiale des fichiers
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch: Servir le contenu depuis le cache si disponible
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si le fichier est dans le cache, on le retourne
        if (response) {
          return response;
        }
        // Sinon, on va le chercher sur le réseau
        return fetch(event.request);
      })
  );
});

// Activation: Nettoyer les anciens caches pour mettre à jour l'application
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
