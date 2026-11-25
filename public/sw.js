
const CACHE_NAME = 'rota-viva-aracaju-v3'

const APP_SHELL = [
  './',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './favicon.png'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  )

  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  )

  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  const url = new URL(event.request.url)

  if (url.origin !== self.location.origin) return

  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(event.request)

          if (response.ok) {
            const cache = await caches.open(CACHE_NAME)
            await cache.put('./', response.clone())
          }

          return response
        } catch {
          return await caches.match('./')
        }
      })()
    )

    return
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME)
      const cached = await cache.match(event.request)

      if (cached) return cached

      const response = await fetch(event.request)

      if (response.ok) {
        await cache.put(event.request, response.clone())
      }

      return response
    })()
  )
})
