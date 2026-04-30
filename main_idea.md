# 🏡 Chaclacayo — Premium Real Estate Landing Page

> **Proyecto:** Sitio web de venta directa de propiedad en Chaclacayo, Lima, Perú
> **Propietario / Contacto:** Carlos Carpio — carloscarpio82@hotmail.com
> **Idiomas:** Español 🇪🇸 / English 🇬🇧
> **Objetivo:** Convertir visitantes en leads calificados mediante contacto directo con el dueño
> **Mantras:** *Sin intermediarios · Storytelling primero · Mobile-first · Compartible · Convertible*

---

## 1. Visión del Proyecto

Crear una **landing page inmobiliaria de alto nivel** que transmita confianza, profesionalismo y urgencia. El sitio elimina intermediarios: el visitante habla directamente con Carlos Carpio, propietario de la propiedad.

> No es un anuncio inmobiliario más. Es una **historia de hogar** contada por su dueño, diseñada para ser vista en TikTok, compartida por WhatsApp y cerrada por correo.

### Principios rectores

| Principio | Descripción |
|---|---|
| **Confianza inmediata** | Contacto del dueño visible en todo momento |
| **Claridad** | Información organizada, sin ruido visual |
| **Persuasión** | Copywriting orientado a inversión y oportunidad |
| **Velocidad** | Comunicación rápida vía email, WhatsApp y formulario |
| **Bilingüe** | Español e inglés para captar inversores internacionales |
| **Compartible** | Cada sección es un asset listo para redes sociales |
| **Storytelling** | El lugar tiene alma; el dueño tiene rostro |

---

## 2. Marca, Voz & Storytelling (Brand DNA)

> Antes de diseñar, definimos **cómo se siente** el sitio. Esta es la guía emocional para todo copy y dirección visual.

### 2.1 Posicionamiento en una frase

> **"El refugio de Chaclacayo: un valle templado a 40 minutos de Lima, vendido directamente por su dueño."**

### 2.2 Tono de voz

| Es | No es |
|---|---|
| Cálido, cercano, en primera persona | Frío, corporativo, "nosotros impersonal" |
| Honesto sobre lo bueno y los datos duros | Hiperbólico, vacío, "el mejor del mundo" |
| Aspiracional pero accesible | Pretencioso o de élite cerrada |
| Bilingüe natural (no traducción literal) | Spanglish forzado |

### 2.3 Arco narrativo de la página

El visitante recorre una **historia en 4 actos**:

1. **Descubrimiento** (Hero) — "Existe un lugar así, a 40 min de Lima"
2. **Inmersión** (Galería + Lifestyle) — "Esto es lo que se siente vivir aquí"
3. **Razón** (Detalles + Inversión + ROI) — "Y además, los números cierran"
4. **Acción** (Owner Letter + Contacto) — "Habla directo conmigo, soy el dueño"

### 2.4 Carta del propietario (Owner Letter) — *gancho emocional viral*

Bloque corto firmado por Carlos, con foto opcional, ubicado entre §6 y §7:

```
"Hola, soy Carlos. Esta propiedad ha sido parte de mi vida durante [X] años.
Hoy abro la puerta directamente, sin agencias ni comisiones, porque creo 
que el próximo dueño merece conocerla como yo la conocí: con honestidad, 
con todos sus detalles, y con tiempo para preguntar lo que sea.
Llámame, escríbeme, ven a visitarla. — Carlos"
```

> *Este bloque es el "momento humano" que se comparte por WhatsApp. Es el corazón viral del sitio.*

---

## 3. Público Objetivo

### Segmentos
- **Familias Limeñas** — Buscan tranquilidad, casa de campo / retiro
- **Inversores Nacionales** — Rentabilidad a largo plazo, crecimiento de Chaclacayo
- **Inversores Internacionales** — Peruanos en el exterior, extranjeros buscando Latam
- **Emprendedores** — Proyectos eco-turísticos, hospedajes / Airbnb
- **Nómadas digitales / Remote workers** — Clima cálido + cerca de Lima + buen internet
- **Adultos mayores / Retiro** — Salud, clima, naturaleza

### Perfil demográfico
- **Edad:** 30–60 años
- **Nivel socioeconómico:** A/B
- **Motivación:** Inversión, segunda vivienda, retiro, emprendimiento
- **Canales:** Google, Instagram, TikTok, Facebook Marketplace, portales inmobiliarios, WhatsApp, boca a boca

### Personas (3 arquetipos)

| Persona | Edad | Driver | Objeción principal |
|---|---|---|---|
| **María — Inversora limeña** | 45 | "¿Qué ROI saco?" | Confianza en el precio |
| **John — Peruano en Miami** | 38 | "Volver con mi familia" | No puede visitar fácil → necesita virtual tour |
| **Pierre — Jubilado europeo** | 62 | "Clima + tranquilidad" | Trámites legales para extranjeros |

> El sitio debe responder a **las 3 objeciones** sin que el usuario tenga que preguntar.

---

## 4. Arquitectura de Información (Sitemap)

El sitio es una **single-page application (SPA)** con scroll suave entre secciones:

```
┌─────────────────────────────────────────────┐
│  HEADER (sticky, glass)                     │
│  Logo · Nav · Idioma (ES/EN) · CTA Contacto │
├─────────────────────────────────────────────┤
│  §1  HERO + video loop background           │
│      Headline + dual CTA + scroll cue       │
├─────────────────────────────────────────────┤
│  §2  PROPUESTA DE VALOR (4 cards)           │
├─────────────────────────────────────────────┤
│  §3  GALERÍA + VIDEO TOUR                   │
│      Lightbox · video · drone reel · 360°   │
├─────────────────────────────────────────────┤
│  §4  LIFESTYLE — "Un día en Chaclacayo"     │
│      Storytelling visual + microcopy        │
├─────────────────────────────────────────────┤
│  §5  DETALLES DE LA PROPIEDAD               │
│      Specs · Floor plan · Servicios         │
├─────────────────────────────────────────────┤
│  §6  UBICACIÓN & ENTORNO                    │
│      Mapa · Distancias · Puntos de interés  │
├─────────────────────────────────────────────┤
│  §7  INVERSIÓN & POTENCIAL (interactivo)    │
│      ROI calculator · Comparables · Datos   │
├─────────────────────────────────────────────┤
│  §8  OWNER LETTER — Carta de Carlos         │
│      Foto · firma · video opcional          │
├─────────────────────────────────────────────┤
│  §9  TESTIMONIOS / SOCIAL PROOF             │
│      Vecinos · Visitantes · Activity feed   │
├─────────────────────────────────────────────┤
│  §10 FAQ — Preguntas frecuentes             │
│      Acordeón · objeciones resueltas        │
├─────────────────────────────────────────────┤
│  §11 LEAD MAGNET                            │
│      Descargar dossier PDF (email gate)     │
├─────────────────────────────────────────────┤
│  §12 CONTACTO DIRECTO                       │
│      Form · mailto · WhatsApp · scheduler   │
├─────────────────────────────────────────────┤
│  §13 CIERRE DE VENTA — urgencia + CTA       │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
│  Contacto · Legal · Privacy · Créditos      │
├─────────────────────────────────────────────┤
│  WhatsApp flotante (always-on)              │
│  Share-bar lateral (always-on en desktop)   │
└─────────────────────────────────────────────┘
```

---

## 5. Design System

### 5.1 Paleta de Colores

| Token | Valor | Uso |
|---|---|---|
| `--color-primary` | `#1B4332` | Verde bosque — naturaleza, Chaclacayo |
| `--color-primary-light` | `#2D6A4F` | Hover states, bordes |
| `--color-accent` | `#D4A843` | Dorado — lujo, inversión, CTAs |
| `--color-accent-hover` | `#C09530` | Hover del dorado |
| `--color-bg-dark` | `#0A0F0D` | Fondo principal (dark mode) |
| `--color-bg-card` | `#111A15` | Fondo de tarjetas |
| `--color-bg-glass` | `rgba(27,67,50,0.15)` | Glassmorphism panels |
| `--color-text` | `#F1F1F1` | Texto principal |
| `--color-text-muted` | `#A3B8A8` | Texto secundario |
| `--color-white` | `#FFFFFF` | Acentos, iconos |
| `--color-danger` | `#E63946` | Errores de formulario |
| `--color-success` | `#52B788` | Confirmaciones |

### 5.2 Tipografía

| Rol | Fuente | Peso | Tamaño |
|---|---|---|---|
| Headings | **Playfair Display** | 700 | 2.5rem – 4rem |
| Body | **Inter** | 400/500 | 1rem – 1.125rem |
| Accent / Labels | **Inter** | 600 | 0.75rem – 0.875rem |
| CTA buttons | **Inter** | 700 | 1rem |

### 5.3 Espaciado & Layout

- **Grid:** 12 columnas, max-width `1280px`, padding `1.5rem`
- **Spacing scale:** `4px · 8px · 12px · 16px · 24px · 32px · 48px · 64px · 96px`
- **Border radius:** `8px` (cards), `12px` (modals), `50%` (avatars), `999px` (pills)
- **Breakpoints:**
  - Mobile: `< 640px`
  - Tablet: `640px – 1024px`
  - Desktop: `> 1024px`

### 5.4 Efectos Visuales

| Efecto | CSS |
|---|---|
| **Glassmorphism** | `backdrop-filter: blur(16px); background: var(--color-bg-glass); border: 1px solid rgba(255,255,255,0.08);` |
| **Card shadow** | `box-shadow: 0 8px 32px rgba(0,0,0,0.3);` |
| **Glow accent** | `box-shadow: 0 0 20px rgba(212,168,67,0.3);` |
| **Text gradient** | `background: linear-gradient(135deg, var(--color-accent), #F0D68A); -webkit-background-clip: text;` |
| **Hover lift** | `transform: translateY(-4px); transition: all 0.3s ease;` |
| **Fade-in on scroll** | `IntersectionObserver` + CSS `opacity/transform` transitions |
| **Parallax sutil** | `transform: translateY()` on scroll en imágenes hero |
| **Cursor follower** | Light dot que sigue cursor en desktop (opcional, premium feel) |

---

## 6. Contenido por Sección

### §1 HERO

> El Hero es el primer impacto. Debe comunicar: qué es, dónde está, y cómo contactar en menos de 3 segundos.

**Español:**
```
Headline:    "Tu Oasis en Chaclacayo"
Subheadline: "Propiedad exclusiva con vistas al valle — Inversión con potencial único"
Sublínea:    "Venta directa por su dueño · A 40 min de Lima · Clima cálido todo el año"
CTA:         [ Contactar a Carlos ] [ Ver galería ↓ ]
```

**English:**
```
Headline:    "Your Oasis in Chaclacayo"
Subheadline: "Exclusive property with valley views — A unique investment opportunity"
Subline:     "Sold directly by the owner · 40 min from Lima · Warm climate year-round"
CTA:         [ Contact Carlos ] [ View gallery ↓ ]
```

- **Fondo:** Video loop silencioso (mp4, <2 MB, poster WebP) o imagen principal a pantalla completa con overlay gradient oscuro `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)`
- **Badge superior:** "Venta Directa — Sin Intermediarios" / "Direct Sale — No Middlemen"
- **Trust ribbon inferior:** "✓ Propietario verificado · ✓ Documentos en regla · ✓ Visitas con cita"
- **Scroll indicator** animado al pie del hero

---

### §2 PROPUESTA DE VALOR (Value Proposition)

4 tarjetas con iconos animados + microcopy:

| # | ES (titular + bajada) | EN (title + sub) | Icono |
|---|---|---|---|
| 1 | **Ubicación privilegiada** — A 40 min de Lima, en el corazón del valle | **Prime location** — 40 min from Lima, in the heart of the valley | 📍 |
| 2 | **Contacto directo con el dueño** — Sin intermediarios, sin comisiones | **Direct owner contact** — No middlemen, no commissions | 🤝 |
| 3 | **Alto potencial de inversión** — Zona en crecimiento, ROI verificable | **High investment potential** — Growing area, verifiable ROI | 📈 |
| 4 | **Entorno natural único** — Clima cálido, aire limpio, valle verde | **Unique natural setting** — Warm climate, clean air, green valley | 🌿 |

---

### §3 GALERÍA DE FOTOS & VIDEO

**Assets disponibles:**

| Archivo | Tipo | Tamaño |
|---|---|---|
| `WhatsApp Image 2026-04-27 at 15.54.13.jpeg` | Foto | 238 KB |
| `WhatsApp Image 2026-04-27 at 15.54.49.jpeg` | Foto | 196 KB |
| `WhatsApp Image 2026-04-27 at 15.55.14.jpeg` | Foto | 139 KB |
| `WhatsApp Image 2026-04-27 at 15.55.28.jpeg` | Foto | 234 KB |
| `WhatsApp Image 2026-04-27 at 15.55.46.jpeg` | Foto | 193 KB |
| `WhatsApp Video 2026-04-27 at 15.53.37.mp4` | Video | 15.3 MB |

**Implementación:**
- Carrusel con thumbnails y lightbox (click para ampliar)
- Video tour embebido con controles nativos y poster frame
- Navegación con flechas + swipe en móvil
- Lazy loading + responsive `srcset`
- **Pendientes recomendados** para nivel viral:
  - 🎥 **Drone reel** 30 s vertical (TikTok/Reels-ready)
  - 🌅 **Golden hour shots** — atardecer en el valle
  - 📐 **Tour 360° / Matterport** o, mínimo, video walkthrough sin cortes
  - 🛏️ **Detail shots** de texturas (madera, piedra, plantas) — contenido pinneable

---

### §4 LIFESTYLE — "Un día en Chaclacayo" *(nueva sección viral)*

> Esta sección **no vende la casa, vende la vida**. Es lo que se comparte en redes.

**Layout:** Storyboard horizontal (scroll-snap) o grid de 6 momentos del día:

| Hora | Imagen | Microcopy ES | Microcopy EN |
|---|---|---|---|
| 06:30 | Amanecer sobre el valle | "El sol calienta antes que en Lima" | "Sun rises warmer than in Lima" |
| 09:00 | Café en la terraza | "Aire limpio, sin tráfico, sin ruido" | "Clean air, no traffic, no noise" |
| 13:00 | Almuerzo bajo árboles | "Restaurantes campestres a minutos" | "Country restaurants minutes away" |
| 16:00 | Caminata cerca del río | "El Rímac y los cerros, tu patio" | "The Rímac river and hills, your backyard" |
| 19:00 | Atardecer dorado | "El cielo se enciende todos los días" | "The sky lights up every single day" |
| 21:00 | Estrellas visibles | "Cielo despejado lejos de la ciudad" | "Clear skies far from the city" |

> *Pinneable, instagrammeable, share-by-design.*

---

### §5 DETALLES DE LA PROPIEDAD

**Layout:** Grid de 2 columnas con iconos + tabs (`Resumen` · `Servicios` · `Plano`)

| Dato | Placeholder | Icono |
|---|---|---|
| Área total | `XXX m²` | 📐 |
| Área construida | `XXX m²` | 🏠 |
| Habitaciones | `X` | 🛏️ |
| Baños | `X` | 🚿 |
| Estacionamiento | `X vehículos` | 🚗 |
| Año construcción | `XXXX` | 📅 |
| Tipo de propiedad | Casa / Terreno / Otro | 🏷️ |
| Precio | `USD $XXX,XXX` / `S/. XXX,XXX` / `€ XXX,XXX` | 💰 |

**Servicios incluidos** (chips):
`Agua potable` · `Electricidad` · `Internet fibra` · `Alcantarillado` · `Áreas verdes` · `Frutales` · `Cisterna` · `Seguridad`

**Floor plan:** SVG o PNG con zoom (Lightbox). *Recomendado contratar plano arquitectónico en Fiverr (~$30) si no existe.*

**Documentación legal disponible** (badges):
`✓ Título de propiedad` · `✓ HR / PU al día` · `✓ Sin gravámenes` · `✓ Inscrita en SUNARP`

---

### §6 UBICACIÓN & ENTORNO

#### 6.1 Dirección exacta

> **Cooperativa Alfonso Cobián, Mz. B Lt. 25 — Chaclacayo, Lima, Perú** 📍

La Cooperativa Alfonso Cobián es una urbanización residencial consolidada de Chaclacayo, con acceso directo desde la **Carretera Central**, en el corazón del valle templado de Lima Este.

#### 6.2 Mapa interactivo (Google Maps embed)

Embed responsivo con la dirección pre-cargada. El usuario puede hacer zoom, ver Street View, abrir direcciones desde su ubicación y guardarla en su Google Maps personal.

```html
<div class="map-wrapper">
  <iframe
    src="https://www.google.com/maps?q=Cooperativa+Alfonso+Cobian+Mz+B+Lote+25+Chaclacayo+Lima+Peru&output=embed"
    width="100%"
    height="450"
    style="border:0; border-radius:12px;"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    allowfullscreen
    title="Ubicación de la propiedad en Chaclacayo">
  </iframe>
</div>

<a class="btn-secondary"
   href="https://www.google.com/maps/dir/?api=1&destination=Cooperativa+Alfonso+Cobian+Mz+B+Lote+25+Chaclacayo+Lima+Peru"
   target="_blank" rel="noopener">
  🧭 Cómo llegar / Get directions
</a>
```

> 💡 **Recomendado:** una vez confirmadas las coordenadas exactas (lat/long de la Mz B Lt 25), reemplazar el query string por `q=LAT,LONG` para que el pin caiga **exactamente** sobre la propiedad y no sobre la Cooperativa en general.

#### 6.3 Distancias clave (chips horizontales)

> Tiempos estimados en auto desde la propiedad. *A confirmar/ajustar con Google Maps cuando se carguen las coordenadas exactas.*

| 📍 Destino | ⏱ Tiempo aprox. | 📏 Distancia |
|---|---|---|
| 🛫 **Aeropuerto Jorge Chávez** (Callao) | ~60 min | ~45 km |
| 🏛️ **Centro de Lima** (Plaza Mayor) | ~40 min | ~28 km |
| 🛣️ **Carretera Central** (acceso directo) | <5 min | <2 km |
| 🎓 **Universidad Peruana Unión (UPeU)** — Ñaña | ~10 min | ~6 km |
| 🏥 **Hospital de Chaclacayo (EsSalud)** | ~5 min | ~2 km |
| 🏥 **Clínica Good Hope** (Carretera Central) | ~15 min | ~10 km |
| 🛒 **Plaza Vea Chaclacayo / mercado central** | ~8 min | ~3 km |
| 🍗 **La Granja Azul** (restaurante icónico) | ~10 min | ~5 km |
| 🏞️ **Centro Vacacional Huampaní** | ~7 min | ~4 km |
| 🚂 **Chosica** (centro distrital vecino) | ~15 min | ~8 km |
| 🌄 **Río Rímac** (orilla más cercana) | ~3 min | <1 km |

#### 6.4 Puntos de interés cercanos (Highlights del entorno)

> Cards visuales con icono + nombre + descripción corta + distancia. Refuerza el lifestyle: *"todo lo que necesitas, a minutos"*.

**🎓 Educación**
- **Universidad Peruana Unión (UPeU)** — campus universitario más importante de Lima Este, ~10 min
- **Colegio Unión** — colegio adventista bilingüe (ES/EN), ~10 min
- **Colegio Particular Adventista de Chaclacayo** — ~5 min
- **Diversos colegios públicos y particulares** dentro del distrito

**🏥 Salud**
- **Hospital de Chaclacayo (EsSalud)** — atención de complejidad media, ~5 min
- **Centro de Salud Chaclacayo (MINSA)** — atención primaria, ~5 min
- **Clínica Good Hope** — clínica privada de referencia en Carretera Central, ~15 min
- **Farmacias 24h** y **boticas Inkafarma / MiFarma** dentro del distrito

**🛒 Compras & Servicios**
- **Plaza Vea Chaclacayo** — supermercado completo, ~8 min
- **Mercado Central de Chaclacayo** — productos frescos diarios, ~8 min
- **Bancos** (BCP, Interbank, BBVA) y agentes en la Carretera Central
- **Gimnasios, peluquerías, lavanderías** locales

**🍽️ Gastronomía (Chaclacayo es famoso por sus campestres)**
- **La Granja Azul** — leyenda del pollo a la brasa peruano, ~10 min
- **El Rancho** — parrillas y comida criolla campestre
- **Restaurantes campestres** con piscina y áreas verdes
- **Cafeterías y panaderías locales** dentro del distrito

**🌳 Naturaleza & Recreación**
- **Río Rímac** — caminatas y vistas al valle, <1 km
- **Cerros de Chaclacayo** — trekking ligero y senderos
- **Centro Vacacional Huampaní** — piscinas, áreas deportivas, eventos
- **Plaza de Armas de Chaclacayo** — corazón del distrito, ferias dominicales
- **Áreas verdes** y parques internos de la cooperativa

**🚗 Conectividad**
- **Carretera Central** — vía nacional Lima ↔ sierra central, acceso directo
- **Líneas de buses y combis** frecuentes hacia Lima centro y Chosica
- **Servicios de taxi/Uber/InDriver** disponibles
- **Aeropuerto internacional Jorge Chávez** — ~60 min en auto

#### 6.5 Ventajas de la zona

| ES | EN |
|---|---|
| A 40 min de Lima centro por la Carretera Central | 40 min from downtown Lima via the Carretera Central |
| Clima tropical cálido todo el año (incluso en invierno) | Warm tropical climate year-round (even in winter) |
| Ideal para salud y bienestar (alergias, adultos mayores, extra vitamina D) | Ideal for health and wellness (allergies, seniors, extra Vitamin D) |
| Rodeado de naturaleza, junto al río Rímac y los cerros | Surrounded by nature, along the Rímac river and the hills |
| Zona consolidada en crecimiento sostenido | Established area with sustained growth |
| Acceso a servicios básicos: agua, luz, internet de fibra | Access to essentials: water, electricity, fiber internet |
| Cooperativa Alfonso Cobián: comunidad establecida y segura | Cooperativa Alfonso Cobián: established, secure community |
| Cerca de universidades, hospitales y comercios | Close to universities, hospitals and shops |
| Famoso por sus restaurantes campestres tradicionales | Famous for its traditional country restaurants |

---

### §7 INVERSIÓN & POTENCIAL — *interactivo*

**Contenido persuasivo orientado a inversores:**

| ES | EN |
|---|---|
| Chaclacayo: el nuevo polo de desarrollo de Lima Este | Chaclacayo: Lima East's new development hub |
| Valorización constante del m² | Consistent price-per-sqm appreciation |
| Ideal para Airbnb, hospedaje rural o proyecto eco-turístico | Perfect for Airbnb, rural lodging, or eco-tourism |
| Inversión segura en bienes raíces | Safe real estate investment |

#### 7.1 Calculadora de ROI (interactiva)

> Mini-widget en JS vanilla. El usuario juega con los números y se queda más tiempo (engagement = SEO).

```
Inputs:    Tarifa por noche (USD)  · Ocupación (%)  · Meses operativos
Output:    Ingreso anual estimado · ROI bruto · Payback en años
```

#### 7.2 Comparables de la zona

Tabla simple con 3–5 propiedades similares vendidas/listadas en Chaclacayo y precio por m². Refuerza que el precio es justo.

#### 7.3 Opciones de pago

- ✅ Pago al contado (USD / PEN / EUR)
- ✅ Financiamiento bancario (BBVA, Interbank, BCP)
- ✅ Pago directo en cuotas (negociable con propietario)
- ✅ Crypto (BTC / USDT) — *opcional, atractivo para inversores millennials*

---

### §8 OWNER LETTER — Carta del Propietario

**Layout:** 2 columnas. Izq: foto B/N de Carlos + firma manuscrita. Der: carta corta.

**Español:**
```
"Soy Carlos Carpio.

Esta propiedad ha sido parte de mi vida. Hoy decido venderla 
directamente, sin intermediarios, porque creo en hablar de tú a tú 
con quien será su próximo dueño.

Pregunta lo que quieras. Visítala con calma. Toma la decisión 
informada que merece una compra de este tamaño.

Te respondo personalmente."

— Carlos
📧 carloscarpio82@hotmail.com
```

**English:**
```
"I'm Carlos Carpio.

This property has been part of my life. Today I'm selling it 
directly, with no middlemen, because I believe in speaking face 
to face with whoever its next owner will be.

Ask anything. Visit at your own pace. Make the informed decision 
a purchase of this size deserves.

I'll reply to you personally."

— Carlos
📧 carloscarpio82@hotmail.com
```

> **Bonus viral:** video corto (60 s, vertical) de Carlos en la propiedad presentándose. Es el activo #1 para WhatsApp y TikTok.

---

### §9 TESTIMONIOS & SOCIAL PROOF

**Componentes:**

1. **Quotes de vecinos / visitas previas** — 2-3 testimonios cortos con foto + nombre + rol
2. **Activity feed** (sutil, no invasivo):
   ```
   🟢 12 personas vieron esta propiedad hoy
   📩 3 consultas en las últimas 48h
   📍 Carlos respondió en menos de 2h en promedio
   ```
3. **Press / Featured in** *(si aplica más adelante)* — logos de portales/medios donde apareció
4. **Verified badges** — "Propietario verificado", "Documentos en regla", "Inscrita en SUNARP"

> ⚠️ **Ética:** los contadores deben ser **reales** (con analytics) o claramente honestos. Nada de fake counters; arruina la confianza.

---

### §10 FAQ — Preguntas Frecuentes

> Resuelve las **objeciones antes de que el usuario las pregunte**. Acordeón con animación suave.

| ES | EN |
|---|---|
| ¿Por qué se vende directamente sin agencia? | Why is it sold directly without an agency? |
| ¿La propiedad tiene los papeles en regla? | Are all property documents in order? |
| ¿Aceptan pago en dólares / soles / euros? | Do you accept USD / PEN / EUR? |
| ¿Puedo agendar una visita? ¿Cómo? | Can I schedule a visit? How? |
| ¿Hay opción de financiamiento? | Is financing available? |
| ¿Qué servicios incluye? (luz, agua, internet) | What services are included? |
| ¿Es seguro Chaclacayo? | Is Chaclacayo safe? |
| ¿Soy extranjero, puedo comprar en Perú? | I'm a foreigner, can I buy in Peru? |
| ¿Cuál es el precio final? ¿Negociable? | What's the final price? Is it negotiable? |
| ¿Cuándo se puede entregar? | When can it be handed over? |

---

### §11 LEAD MAGNET — Descarga el Dossier *(captura de email)*

> Antes del CTA final, ofrecer valor por email. Convierte visitantes pasivos en leads suaves.

**Layout:** Banner horizontal con preview del PDF + formulario corto.

```
Título ES:  "Descarga el dossier completo de la propiedad"
Bajada ES:  "Plano, fotos en alta, documentación legal y datos de inversión 
             en un PDF listo para imprimir o compartir."

Formulario: [ Nombre ] [ Email ]  → [ Enviar dossier ]

Trigger:    POST a Formspree/EmailJS + auto-responder con PDF adjunto
Tracking:   evento `lead_magnet_download` en GA4 + Meta Pixel
```

**English:**
```
Title:   "Download the full property dossier"
Sub:     "Floor plan, high-res photos, legal documentation and 
          investment data in a print-ready, share-ready PDF."
```

> *El PDF se diseña una vez y trabaja para siempre. Es contenido que sobrevive al sitio.*

---

### §12 CONTACTO DIRECTO

> Esta es la sección más crítica para la conversión. Debe ser clara, directa y sin fricción.

**Layout:** 2 columnas — Info de contacto (izq) + Formulario (der). En móvil, apilado.

#### Columna izquierda — Información

**Español:**
```
Título:  "Contáctanos directamente"
Texto:   "Para más información o agendar una visita, 
          comunícate directamente con el propietario."

👤 Carlos Carpio
📧 carloscarpio82@hotmail.com
📱 WhatsApp: [número si disponible]
📅 Agenda una visita: [link Calendly]

[ 📧 Enviar correo ]  →  mailto:carloscarpio82@hotmail.com
[ 💬 WhatsApp ]        →  https://wa.me/XXXXXXXXXXX
[ 📅 Agendar visita ]  →  https://calendly.com/carloscarpio/visita
```

**English:**
```
Title:   "Contact directly"
Text:    "For more information or to schedule a visit, 
          contact the owner directly."

[ 📧 Send email ] · [ 💬 WhatsApp ] · [ 📅 Book a visit ]
```

#### Columna derecha — Formulario de Leads

| Campo | Tipo | Requerido |
|---|---|---|
| Nombre / Name | `text` | ✅ |
| Teléfono / Phone | `tel` (con `intl-tel-input`) | ❌ |
| Email | `email` | ✅ |
| ¿Cuándo te gustaría visitarla? / When? | `date` | ❌ |
| Mensaje / Message | `textarea` | ❌ |
| Origen / Source | `hidden` (UTM tracking) | auto |

**On submit:**
- Validación client-side
- Anti-spam: honeypot + reCAPTCHA v3 invisible
- Mostrar toast: *"Gracias, Carlos se pondrá en contacto contigo."* / *"Thank you, Carlos will get in touch with you."*
- Enviar datos por `mailto:` link pre-formateado o servicio como Formspree/EmailJS
- Disparar evento `lead_form_submit` en GA4 + Meta Pixel `Lead`

---

### §13 CIERRE DE VENTA (Closing)

**Español:**
```
Headline: "Oportunidad única en Chaclacayo"
Texto:    "Propiedades con estas características y potencial 
           no aparecen con frecuencia. Contáctanos hoy mismo."
CTA:      [ Contactar a Carlos ahora ]  [ 💬 WhatsApp ]
```

**English:**
```
Headline: "Unique opportunity in Chaclacayo"
Text:     "Properties with these features and potential 
           don't come along often. Contact us today."
CTA:      [ Contact Carlos now ]  [ 💬 WhatsApp ]
```

**Refuerzos de urgencia (sin manipulación):**
- "Atendido directamente por el propietario — respuesta en <24h"
- "Visitas con cita previa los fines de semana"

---

## 7. Estrategia de Conversión

### 7.1 Puntos de contacto (CTA Placement)

7 puntos de conversión a lo largo de la página:
1. **Header sticky CTA** — siempre visible
2. **Hero CTA** — primera impresión
3. **Mid-page CTA** — después de galería + lifestyle
4. **ROI calculator CTA** — "¿Quieres los números reales? Pregúntale a Carlos"
5. **Owner letter CTA** — micro-CTA bajo la firma
6. **Lead magnet** — captura suave (email-only)
7. **Formulario + Cierre + WhatsApp flotante** — conversión dura

> El usuario SIEMPRE tiene un CTA visible en pantalla.

### 7.2 Elementos de confianza

| Elemento | Propósito |
|---|---|
| "Venta directa — sin intermediarios" | Elimina fricción |
| Nombre y email siempre visibles | Transparencia total |
| Fotos reales de la propiedad | Autenticidad |
| Video tour + drone reel | Inmersión |
| Owner letter + foto + firma | Conexión humana |
| Badge "Propietario verificado" | Credibilidad |
| Documentación legal listada | Seriedad jurídica |
| FAQ honesta | Reduce objeciones |
| Comparables de la zona | Justifica precio |
| Activity feed real (analytics) | Prueba de demanda |

### 7.3 WhatsApp flotante

- Botón fijo en esquina inferior derecha
- Icono WhatsApp animado (pulse)
- Tooltip: "Escríbenos por WhatsApp" / "Message us on WhatsApp"
- Enlace: `https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20la%20propiedad%20en%20Chaclacayo`
- **Variante en móvil:** botón completo "💬 WhatsApp · Carlos" expandido

### 7.4 Share bar (desktop, lateral)

> *Convierte cada visitante en un canal de distribución.*

Botones flotantes verticales con conteo opcional:
- WhatsApp (share del link)
- Facebook
- X / Twitter
- Pinterest (con imagen pre-seleccionada — esto importa para tráfico orgánico)
- Email
- Copiar link (con toast)

---

## 8. Estrategia Viral & Redes Sociales

> *El sitio web es el destino. Las redes son el camino. Diseñamos los dos.*

### 8.1 Content kit — assets reutilizables

Cada vez que se crea un asset, se exporta en **3 formatos**:

| Formato | Uso |
|---|---|
| 16:9 — 1920×1080 | YouTube, sitio web, hero |
| 9:16 — 1080×1920 | TikTok, Reels, Stories |
| 1:1 — 1080×1080 | Instagram feed, LinkedIn |

### 8.2 Calendario de contenidos (4 semanas pre-launch + ongoing)

| Semana | Contenido | Plataforma |
|---|---|---|
| 1 | Teaser drone (15 s) — "Algo se vende en Chaclacayo" | TikTok, Reels |
| 1 | Carrusel "Por qué Chaclacayo" (10 slides) | Instagram, LinkedIn |
| 2 | Owner intro video — Carlos hablando | TikTok, Reels, Web |
| 2 | "Un día en Chaclacayo" — vlog estilo | YouTube, TikTok |
| 3 | Tour completo de la propiedad | YouTube, Web |
| 3 | Comparativa "Lima vs. Chaclacayo" | Twitter/X, LinkedIn |
| 4 | Lanzamiento del sitio + lead magnet | Todas |
| Ongoing | Atardeceres, detalles, testimonios | Stories diarias |

### 8.3 Hashtags & SEO social

```
#Chaclacayo #VentaCasaLima #PropiedadPeru #InversionInmobiliaria
#CasaDeCampo #LimaEste #RealEstatePeru #InvestInPeru
```

### 8.4 Open Graph + Twitter Card optimizados

> Cada link compartido **debe** verse hermoso en WhatsApp, iMessage, X, LinkedIn.

```html
<meta property="og:title" content="Tu Oasis en Chaclacayo — Venta Directa">
<meta property="og:description" content="Propiedad exclusiva con vistas al valle. A 40 min de Lima. Contacto directo con el propietario.">
<meta property="og:image" content="/assets/og/og-cover.jpg"> <!-- 1200×630, <300 KB, con texto sobrepuesto -->
<meta property="og:type" content="website">
<meta property="og:locale" content="es_PE">
<meta property="og:locale:alternate" content="en_US">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="/assets/og/twitter-card.jpg">
```

### 8.5 Press / Media kit (página oculta `/press`)

- Logo en SVG/PNG
- Bio corta de Carlos en ES/EN
- Fotos hi-res de la propiedad (carpeta zip)
- Boilerplate del proyecto
- Datos de contacto para prensa

---

## 9. Implementación del Bilingüe (ES/EN)

### Estrategia: Client-side i18n con JS vanilla + hreflang para SEO

```javascript
const translations = {
  es: {
    hero_headline: "Tu Oasis en Chaclacayo",
    hero_sub: "Propiedad exclusiva con vistas al valle...",
    contact_title: "Contáctanos directamente",
    // ...
  },
  en: {
    hero_headline: "Your Oasis in Chaclacayo",
    hero_sub: "Exclusive property with valley views...",
    contact_title: "Contact directly",
    // ...
  }
};
```

- Toggle visible en header: `ES | EN` (con bandera sutil)
- Persistencia con `localStorage`
- Detección automática con `navigator.language`
- Elementos HTML con `data-i18n="key"` attributes
- **SEO bilingüe:** rutas `/` (ES default) y `/en/` con `<link rel="alternate" hreflang="...">` para Google
- **`<html lang="…">`** se actualiza dinámicamente al cambiar idioma

---

## 10. Tech Stack

| Capa | Tecnología |
|---|---|
| **Markup** | HTML5 semántico |
| **Estilos** | Vanilla CSS con custom properties (design tokens) |
| **Lógica** | Vanilla JavaScript (ES6+) |
| **Formulario** | Formspree o EmailJS (envío sin backend) |
| **Anti-spam** | reCAPTCHA v3 invisible + honeypot |
| **Mapa** | Google Maps Embed API o Leaflet.js |
| **Iconos** | Lucide Icons o Phosphor Icons (SVG) |
| **Fuentes** | Google Fonts (Playfair Display + Inter) |
| **Hosting** | Netlify o Vercel (gratis, SSL, CDN, edge) |
| **Imágenes** | WebP + AVIF fallback + lazy loading |
| **Video** | HTML5 `<video>` + CDN (Cloudflare Stream o Mux opcional) |
| **Scheduler** | Calendly (free tier) embebido |
| **PWA** | `manifest.json` + service worker básico (instalable) |
| **Animaciones** | CSS + IntersectionObserver (sin libs pesadas) |

> No se requiere framework (React, Vue, etc.) — una SPA vanilla es más rápida, más ligera y más fácil de mantener para un sitio de una sola propiedad.

---

## 11. Analytics, Pixels & Retargeting

> Sin medición no hay optimización. Cada interacción importante debe estar tracked.

| Herramienta | Propósito |
|---|---|
| **Google Analytics 4** | Pageviews, eventos, conversiones |
| **Google Tag Manager** | Orquestador de pixels (no tocar código) |
| **Meta Pixel (Facebook/Instagram)** | Retargeting + Lookalike audiences |
| **TikTok Pixel** | Retargeting de visitantes de redes |
| **Hotjar / Microsoft Clarity** | Heatmaps + session replay (Clarity es gratis) |
| **Search Console** | SEO orgánico + indexación |

### Eventos clave a trackear

```
hero_cta_click          gallery_open            video_play
lifestyle_scroll        roi_calculator_used     owner_letter_view
faq_open                lead_magnet_download    form_submit
whatsapp_click          calendly_open           share_button
language_toggle         scroll_depth_75
```

### Consent management

Banner de cookies GDPR/Ley peruana (Ley 29733) con opt-in granular: `Necesarias` · `Analytics` · `Marketing`. Implementar con [Cookie Consent](https://github.com/orestbida/cookieconsent) (open source, gratis, ligero).

---

## 12. SEO & Meta Tags

### 12.1 Meta básicos

```html
<!-- Español -->
<title>Propiedad en Venta en Chaclacayo, Lima — Venta Directa | Carlos Carpio</title>
<meta name="description" content="Propiedad exclusiva en Chaclacayo, Lima. 
  Contacto directo con el propietario. Sin intermediarios. 
  Ideal para inversión o vivienda.">

<!-- English -->
<title>Property for Sale in Chaclacayo, Lima — Direct Sale | Carlos Carpio</title>
<meta name="description" content="Exclusive property in Chaclacayo, Lima. 
  Direct contact with the owner. No middlemen. 
  Ideal for investment or living.">
```

### 12.2 Schema.org structured data

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "Propiedad en Chaclacayo",
  "url": "https://chaclacayo.example.com",
  "image": ["..."],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chaclacayo",
    "addressRegion": "Lima",
    "addressCountry": "PE"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "...", "longitude": "..." },
  "offers": {
    "@type": "Offer",
    "price": "XXXXXX",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Person",
      "name": "Carlos Carpio",
      "email": "carloscarpio82@hotmail.com"
    }
  },
  "numberOfRooms": "X",
  "floorSize": { "@type": "QuantitativeValue", "value": "XXX", "unitCode": "MTK" }
}
</script>
```

### 12.3 Checklist SEO

- [x] `<title>` descriptivo con keywords
- [x] `<meta description>` persuasivo
- [x] `<h1>` único por página
- [x] HTML5 semántico (`<header>`, `<main>`, `<section>`, `<footer>`)
- [x] Alt text descriptivo en todas las imágenes
- [x] Open Graph + Twitter Card tags
- [x] Schema.org `RealEstateListing` + `Person` + `Place`
- [x] `<html lang="es">` con soporte dinámico para `en`
- [x] **`hreflang`** entre ES/EN
- [x] Sitemap.xml y robots.txt
- [x] Canonical URL
- [x] Local SEO: ficha de Google Business Profile (si aplica)
- [x] Backlinks: portales inmobiliarios peruanos (Adondevivir, Urbania, Properati)

---

## 13. Performance & Accesibilidad

### Performance Targets

| Métrica | Objetivo |
|---|---|
| Lighthouse Performance | > 95 |
| Lighthouse SEO | 100 |
| Lighthouse Accessibility | > 95 |
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.0s |
| Cumulative Layout Shift | < 0.05 |
| Total Blocking Time | < 200ms |
| Total page weight | < 2.5 MB |

### Optimizaciones

- Imágenes en **AVIF** con `srcset` responsive + WebP fallback + JPEG fallback
- Video con `preload="metadata"` y poster WebP
- CSS crítico inline + lazy load del resto
- Font `display: swap` + preload de las fuentes principales
- Minificación de CSS/JS en build
- HTTP/2 + Brotli (provisto por Netlify/Vercel)
- Imágenes servidas desde CDN edge

### Accesibilidad (WCAG 2.1 AA)

- Contraste mínimo 4.5:1 en texto
- Focus states visibles en todos los interactivos
- `aria-label` en botones de icono
- Formulario con labels asociados + mensajes de error en `aria-live`
- Skip-to-content link
- Responsive desde 320px
- Soporte de `prefers-reduced-motion`
- Soporte de `prefers-color-scheme` (default dark, light opcional)
- Navegable 100% con teclado

---

## 14. Legal, Privacidad & Compliance

> Un sitio profesional **debe** tener su parte legal en orden, especialmente en bienes raíces.

| Documento | Ubicación |
|---|---|
| Política de Privacidad (ES/EN) | `/privacidad` · `/privacy` |
| Términos y Condiciones | `/terminos` · `/terms` |
| Política de Cookies | Banner + página `/cookies` |
| Aviso legal | Footer |
| Disclaimer inmobiliario | Cerca de precio: *"Precio referencial, sujeto a verificación. La compraventa se formaliza ante notario."* |

**Cumplimiento:**
- 🇵🇪 **Ley 29733** (Protección de Datos Personales — Perú) — registro ante ANPD si aplica
- 🇪🇺 **GDPR** (visitantes europeos) — cookie consent + derecho al olvido
- 🇺🇸 **CCPA** (visitantes California) — opt-out de venta de datos

---

## 15. Estructura de Archivos

```
chaclacayo/
├── index.html                  # Página principal ES
├── en/index.html               # Página EN (o ruteo dinámico)
├── press/index.html            # Media kit
├── privacidad.html             # Privacy ES
├── privacy.html                # Privacy EN
├── css/
│   └── styles.css              # Design system + estilos
├── js/
│   ├── main.js                 # Lógica principal
│   ├── i18n.js                 # Sistema de traducción
│   ├── gallery.js              # Carrusel + lightbox
│   ├── roi-calculator.js       # Widget ROI
│   ├── form.js                 # Validación + submit
│   └── analytics.js            # GA4 + pixels + eventos
├── assets/
│   ├── images/                 # Fotos optimizadas (AVIF/WebP)
│   ├── video/                  # Video tour + drone reel
│   ├── og/                     # Open Graph covers (1200×630)
│   ├── icons/                  # SVG icons
│   ├── docs/                   # PDF dossier (lead magnet)
│   └── fonts/                  # Web fonts (si self-hosted)
├── FOTOS/                      # Originales (no se sirven)
├── manifest.json               # PWA manifest
├── service-worker.js           # PWA cache básico
├── favicon.ico
├── apple-touch-icon.png
├── robots.txt
├── sitemap.xml
├── humans.txt                  # Créditos
├── main_idea.md                # Este documento
└── README.md                   # Instrucciones de setup
```

---

## 16. Roadmap de Implementación

### Fase 1 — Fundación (Día 1)
- [x] Crear estructura de archivos
- [x] Implementar design system en CSS (tokens, utilities)
- [x] Setup Google Fonts (Playfair Display + Inter)
- [x] Crear HTML base con todas las secciones
- [x] Setup Open Graph cover y favicon

### Fase 2 — Secciones Principales (Día 2)
- [x] Hero con video/imagen de fondo + overlay + CTA
- [x] Propuesta de valor (cards animadas)
- [x] Galería con carrusel + lightbox
- [x] Video tour embebido
- [x] Sección Lifestyle (storyboard)
- [x] Detalles de propiedad (grid de specs + tabs)

### Fase 3 — Conversión & Confianza (Día 3)
- [x] ROI calculator interactivo
- [x] Owner letter (con foto + firma)
- [x] Testimonios + activity feed
- [x] FAQ acordeón
- [x] Lead magnet (formulario + PDF)
- [x] Formulario principal con validación + reCAPTCHA
- [x] Botón WhatsApp flotante + share bar
- [x] Cierre de venta (urgencia + CTA final)
- [x] Calendly embed para visitas

### Fase 4 — Bilingüe & Polish (Día 4)
- [x] Sistema i18n (ES/EN toggle)
- [x] Traducciones completas
- [ ] Animaciones de scroll (IntersectionObserver)
- [ ] Micro-interacciones (hover, focus, transitions)
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] `prefers-reduced-motion` + accesibilidad

### Fase 5 — SEO, Analytics & Deploy (Día 5)
- [ ] Meta tags, Open Graph, Twitter Card
- [ ] Schema.org structured data (RealEstateListing)
- [ ] hreflang + sitemap + robots
- [ ] Optimización de imágenes (AVIF/WebP, srcset)
- [ ] PWA: manifest + service worker
- [ ] GA4 + Meta Pixel + Clarity + GTM
- [ ] Cookie consent banner
- [ ] Páginas legales (privacidad, términos, cookies)
- [ ] Lighthouse audit & fixes hasta >95
- [ ] Deploy a Netlify/Vercel
- [ ] Testing final en dispositivos reales

### Fase 6 — Pre-lanzamiento viral (Día 6+)
- [ ] Diseño del PDF dossier
- [ ] Sesión de fotos profesional + drone reel
- [ ] Video del owner letter (60 s vertical)
- [ ] Producir 6 piezas de "Un día en Chaclacayo"
- [ ] Programar calendario de contenidos en redes
- [ ] Listar en Adondevivir + Urbania + Properati con link al sitio
- [ ] Distribuir media kit a portales/blogs locales

---

## 17. Datos Pendientes del Propietario

> Los siguientes datos son necesarios para completar el sitio. Carlos debe proporcionarlos:

### Datos de la propiedad
| Dato | Estado |
|---|---|
| Área total del terreno (m²) | ⏳ Pendiente |
| Área construida (m²) | ⏳ Pendiente |
| Número de habitaciones | ⏳ Pendiente |
| Número de baños | ⏳ Pendiente |
| Estacionamientos | ⏳ Pendiente |
| Año de construcción | ⏳ Pendiente |
| Precio de venta (USD / Soles / EUR) | ⏳ Pendiente |
| Servicios disponibles (agua, luz, internet, fibra) | ⏳ Pendiente |
| Dirección exacta — *Cooperativa Alfonso Cobián, Mz B Lt 25, Chaclacayo* | ✅ Capturada |
| Coordenadas GPS exactas (lat/long) para precisión del pin en Maps | ⏳ Pendiente |
| Verificar tiempos reales en Google Maps (origen → destinos clave) | ⏳ Pendiente |
| Descripción detallada de la propiedad | ⏳ Pendiente |
| Plano arquitectónico (PDF / imagen) | ⏳ Pendiente |
| Documentos legales (HR, PU, partida SUNARP) | ⏳ Pendiente |

### Datos de contacto
| Dato | Estado |
|---|---|
| Número de WhatsApp (formato internacional `+51...`) | ⏳ Pendiente |
| Link de Calendly para agendar visitas | ⏳ Pendiente |
| Foto profesional de Carlos (B/N preferida) | ⏳ Pendiente |

### Assets de marketing (recomendados)
| Asset | Estado |
|---|---|
| Sesión profesional de fotos (interior + exterior + golden hour) | ⏳ Recomendado |
| Drone reel 30 s vertical | ⏳ Recomendado |
| Video tour 360° o walkthrough completo | ⏳ Recomendado |
| Video owner letter 60 s | ⏳ Recomendado |
| 2-3 testimonios escritos (vecinos / visitas) | ⏳ Recomendado |

---

## 18. Insight Profesional

### ¿Por qué el contacto directo convierte más?

Cuando el comprador habla directamente con el dueño:
- ✅ Se elimina la **desconfianza** hacia intermediarios
- ✅ Se reduce la **fricción** en la comunicación
- ✅ Se acelera la **toma de decisión**
- ✅ Se percibe **mayor transparencia** en el precio
- ✅ Se genera una **conexión personal** que cierra ventas

**Estadística:** Las propiedades con contacto directo del propietario tienen hasta un **30% más de tasa de conversión** que las listadas por agencias.

### ¿Por qué este sitio puede volverse viral?

1. **Storytelling humano** — la owner letter + video de Carlos es **share-by-design** en WhatsApp
2. **Lifestyle, no specs** — la sección "Un día en Chaclacayo" es contenido pinneable / reels-able
3. **Bilingüe + SEO local** — captura tanto Lima como diáspora peruana en EE.UU. y Europa
4. **Lead magnet** — el dossier PDF se reenvía solo entre amigos/familia
5. **Calculadora ROI** — los inversores comparten widgets útiles
6. **Open Graph hermoso** — cada link en WhatsApp se ve como una postal

### Métricas de éxito (KPIs)

| Métrica | Objetivo Mes 1 | Objetivo Mes 3 |
|---|---|---|
| Visitantes únicos | 1,000 | 5,000 |
| Tiempo promedio en sitio | > 2 min | > 3 min |
| Tasa de conversión a lead | > 3% | > 5% |
| Descargas del dossier | > 50 | > 200 |
| Conversaciones por WhatsApp | > 20 | > 80 |
| Visitas agendadas | > 5 | > 20 |
| Compartidos en redes | > 30 | > 150 |
| Posición en Google "venta casa Chaclacayo" | Top 20 | Top 5 |

---

*Documento creado: 30 de abril de 2026*
*Última actualización: 30 de abril de 2026 — v2 (viral & professional layer)*
*Autor: Antigravity AI — para Carlos Carpio*
