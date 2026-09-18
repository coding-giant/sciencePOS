// Minimal service worker so Chrome treats this page as an installable app.
// It doesn't cache anything special — just passes requests through.
self.addEventListener("install", function(event){
  self.skipWaiting();
});
self.addEventListener("activate", function(event){
  self.clients.claim();
});
self.addEventListener("fetch", function(event){
  event.respondWith(fetch(event.request));
});
