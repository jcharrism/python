addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    const url = new URL(request.url)
    const width = parseInt(url.searchParams.get('width')) || 800
    const height = parseInt(url.searchParams.get('height')) || 600
  
    const imageURL = 'https://example.com' + url.pathname  // Cambia esto por la URL de tu imagen base
  
    const response = await fetch(imageURL, {
      cf: {
        image: {
          fit: 'cover',
          width: width,
          height: height
        }
      }
    })
  
    const cache = caches.default
    const cachedResponse = await cache.match(request)
    if (cachedResponse) {
      return cachedResponse
    } else {
      await cache.put(request, response.clone())
      return response
    }
  }
  