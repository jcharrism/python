
Crear un Cloudflare Worker para Redimensionar y Almacenar en Caché Imágenes


Descripción del Script
addEventListener('fetch', event => ...): Escucha las solicitudes HTTP entrantes.
handleRequest(request): Función principal que maneja las solicitudes.
url.href: Obtiene la URL completa de la solicitud original.
resizedImageUrl: Construye la URL para el servicio de redimensionamiento de imágenes, especificando el nuevo ancho deseado.
fetch(resizedImageUrl): Realiza una solicitud para obtener la imagen redimensionada.
response.ok: Verifica si la solicitud fue exitosa.
newResponse.headers.set('Cache-Control', 'public, max-age=31536000'): Establece los encabezados de control de caché para almacenar la imagen en caché durante un año.
Implementación en Cloudflare
Inicia sesión en Cloudflare.
Navega a la sección de Workers.
Crea un nuevo Worker y pega el script anterior en el editor.
Configura las rutas para que el Worker maneje las solicitudes de imágenes.
Guarda y despliega el Worker.
Este Cloudflare Worker redimensionará las imágenes a un ancho de 800 píxeles y almacenará en caché las imágenes redimensionadas para mejorar el rendimiento de la aplicación. Si necesitas ajustar el ancho o realizar más configuraciones, puedes modificar el valor de width y la URL del servicio de redimensionamiento según tus necesidades.
