# Chaclacayo — Premium Real Estate Landing

Sitio web bilingüe (ES/EN) de venta directa de la propiedad ubicada en
**Cooperativa Alfonso Cobián, Mz B Lt 25, Chaclacayo, Lima, Perú** — propietario: Carlos Carpio.

## Stack

Vanilla HTML5 + CSS (custom properties) + JavaScript ES6+. **Cero dependencias**, pensado para hosting estático (Netlify, Vercel, GitHub Pages).

## Estructura

```
chaclacayo/
├── index.html              # Página principal (SPA con todas las secciones)
├── css/
│   └── styles.css          # Design system + estilos por sección
├── js/
│   ├── i18n.js             # Sistema bilingüe ES/EN
│   ├── gallery.js          # Carrusel + lightbox + swipe móvil
│   └── main.js             # Reveals, FAQ, ROI, formularios, sticky nav
├── FOTOS/                  # Fotos y video originales
├── assets/                 # (preparado para activos optimizados)
│   ├── images/
│   ├── video/
│   ├── og/
│   ├── icons/
│   └── docs/
├── manifest.json           # PWA
├── robots.txt
├── sitemap.xml
├── main_idea.md            # Brief completo del proyecto
└── README.md               # Este archivo
```

## Cómo correrlo localmente

Cualquier servidor estático sirve. Las opciones más simples:

```bash
# Python 3
python -m http.server 5500

# Node (si tienes npx)
npx serve .

# VSCode / Cursor
# Click derecho en index.html → "Open with Live Server"
```

Luego abre <http://localhost:5500> (o el puerto que indique tu herramienta).

## Datos pendientes

Antes del lanzamiento hay que completar valores marcados con `—` o `A consultar` en `index.html` y `js/i18n.js`:

- Áreas, habitaciones, baños, estacionamientos, año de construcción, precio
- Coordenadas GPS exactas para refinar el pin de Google Maps
- Número de WhatsApp en formato internacional (`https://wa.me/51XXXXXXXXX`)
- Foto profesional del propietario (sustituir el avatar `CC` en `§8`)
- Video tour optimizado (actualmente 15 MB; idealmente comprimir a <8 MB)

## Características clave

- **Bilingüe ES/EN** con persistencia en `localStorage` y detección automática
- **Galería interactiva** con miniaturas, lightbox, swipe móvil y atajos de teclado
- **Calculadora de ROI** en tiempo real (Airbnb / alquiler corto)
- **FAQ acordeón** con 10 preguntas que matan objeciones
- **Mapa de Google embebido** + botón "Cómo llegar"
- **Owner Letter** — bloque humano para conversión
- **Schema.org** `RealEstateListing` para SEO
- **Open Graph + Twitter Card** para compartir bonito en redes
- **WhatsApp flotante** + botones de email directo
- **Accesible**: skip-link, focus visible, `prefers-reduced-motion`, contraste WCAG AA
- **PWA-ready** (`manifest.json` + theme color)
- **Responsive** desde 320px hasta desktop

## Despliegue

### Netlify / Vercel (recomendado)

```bash
# Solo subir el folder, sin build step
# Configurar dominio personalizado y SSL automático
```

### GitHub Pages

```bash
git init && git add -A && git commit -m "Launch site"
# Push a la rama main del repo y habilitar Pages en Settings
```

Antes de desplegar, reemplazar `chaclacayo.example.com` por el dominio real en:

- `index.html` (canonical, JSON-LD)
- `sitemap.xml`
- `robots.txt`

## Brief detallado

El documento completo del proyecto vive en [`main_idea.md`](./main_idea.md): visión,
público objetivo, design system, arquitectura, contenido por sección, estrategia
de conversión, viralidad, SEO, performance, legal y roadmap.

---

© 2026 Carlos Carpio · Venta directa · Sin intermediarios
