var doCache = false;

var CACHE_NAME = 'pwa-app-cache';

const urlsToCache = [
  '/',
  '/css/default.css',
  '/css/font.css',
  '/css/layout.css',
  '/css/magnific-popup.css',
  '/css/media-queries.css',
  '/images/header-background.jpg',
  '/images/loader.gif',
  '/images/overlay-bg.png',
  '/images/portfolio/**.jpg',
  '/js/init.js',
  '/js/jquery-1.10.2.min.js',
  '/js/jquery.fittext.js',
  '/js/jquery.flexslider.js',
  '/js/magnific-popup.js',
  '/js/modernizr.js',
  '/js/maypoints.js'
];

self.addEventListener('activate', event => {
  const currentCachelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if (!currentCachelist.includes(key)) {
            return caches.delete(key);
          }
        }))
      )
  );
});

// This triggers when user starts the app
self.addEventListener('install', function(event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          fetch('asset-manifest.json')
            .then(response => {
              response.json();
            })
            .then(assets => {
              cache.addAll(urlsToCache);
            })
        })
    );
  }
});

self.addEventListener('fetch', function(event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  }
});