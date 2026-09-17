# Landing del Dr. Andrés Villar

Sitio estático portable, sin dependencias de GoHighLevel, frameworks o herramientas de compilación.

## Vista local

Sirve la carpeta `dist` con cualquier servidor de archivos estáticos. Por ejemplo:

```bash
python3 -m http.server 4173 --directory dist
```

Después abre `http://localhost:4173`.

## Configurar WhatsApp

Edita `SITE_CONFIG` al inicio de `dist/script.js`:

1. Cambia `demo` a `false`.
2. Coloca el número con lada y código de país en `whatsappNumber`, usando solo dígitos. Ejemplo: `522291234567`.
3. Ajusta `whatsappMessage` si se requiere otro mensaje inicial.

Mientras `demo` sea `true`, todos los botones muestran un aviso y no abren ningún contacto.

## Actualizar contenido provisional

- Las cédulas aparecen en la sección de trayectoria y en el pie de página de `dist/index.html`.
- El precio provisional está en la sección de preguntas.
- Los tres testimonios están marcados como contenido de muestra en `dist/index.html`.
- La dirección controla tanto el texto como el mapa y el enlace de indicaciones.

## Publicación

El directorio público es `dist`. Puede alojarse en cualquier servicio de hosting estático conservando su estructura completa.
