// Zunfthaus-Rechner: Offline-Speicher
// Nach dem ersten Öffnen kommt alles aus dem Speicher auf dem Gerät.
// Die App funktioniert dann auch ohne Internet und auch, wenn die Webseite
// nicht mehr erreichbar ist (404, privat, gelöscht).
const CACHE = "zunfthaus-rechner-v6";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./icon.svg"];

self.addEventListener("install", e => {
  // Nur wenn ALLE Dateien sauber geladen werden, wird diese Version installiert.
  // Sonst bleibt die bisherige Version unverändert aktiv.
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(FILES.map(u => new Request(u, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k.startsWith("zunfthaus-rechner-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function good(res) { return res && (res.ok || res.type === "opaque"); }

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  // Die App-Seite selbst: immer aus dem Speicher, nie eine Fehlerseite vom Server.
  if (req.mode === "navigate") {
    e.respondWith(
      caches.match("./index.html").then(hit => hit || fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put("./index.html", copy)); }
        return res;
      }))
    );
    return;
  }

  // Alles andere (Icons, Schriften): Speicher zuerst, Fehlerantworten nie speichern.
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        if (good(res)) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => new Response("", { status: 504 }));
    })
  );
});
