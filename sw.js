const CACHE = "foto-v2";
const INDEX = "/foto/index.html";
const PRECACHE = [
  "/foto/index.html",
  "/foto/manifest.json",
  "/foto/icon-192.png",
  "/foto/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  event.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) caches.open(CACHE).then(c => c.put(req, res.clone()));
        return res;
      })
      .catch(() =>
        caches.match(req).then(cached =>
          cached || (req.mode === "navigate" ? caches.match(INDEX) : Promise.reject("offline"))
        )
      )
  );
});
