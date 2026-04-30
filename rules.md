# Rules — Chaclacayo Real Estate Project

> Mandatory rules that all coding agents MUST follow when working on this project.
> Violations of these rules will result in rejected changes.

---

## 1. Technology Constraints

### MUST USE
- **HTML5** semantic markup only
- **Vanilla CSS** with custom properties (design tokens from `css/styles.css`)
- **Vanilla JavaScript** (ES6+) — no TypeScript
- **Google Fonts** for typography (Playfair Display + Inter)
- Relative paths for all local assets

### MUST NOT USE
- ❌ No CSS frameworks (Tailwind, Bootstrap, etc.)
- ❌ No JavaScript frameworks (React, Vue, Angular, Svelte, etc.)
- ❌ No build tools (Webpack, Vite, Rollup, etc.)
- ❌ No package managers required to run (npm install should NOT be needed)
- ❌ No TypeScript
- ❌ No SASS/LESS preprocessors
- ❌ No CDN dependencies for core functionality (fonts are the only CDN exception)
- ❌ No jQuery

---

## 2. Design Rules

### Colors
- ALWAYS use CSS custom properties defined in `:root` of `styles.css`
- NEVER hardcode hex/rgb values directly in component styles
- Primary palette: forest green (`#1B4332`) + gold accent (`#D4A843`)
- Background is dark mode — `#0A0F0D` base

### Typography
- Headings: `Playfair Display` (Google Fonts), weight 700
- Body text: `Inter` (Google Fonts), weights 400/500/600/700
- NEVER use system default fonts without the Google Fonts fallback chain
- Minimum body text size: `1rem` (16px)

### Layout
- Mobile-first responsive design
- Max content width: `1280px`, centered with auto margins
- Minimum supported width: `320px`
- Breakpoints: `640px`, `1024px` — no others

### Visual Effects
- Use glassmorphism sparingly (cards, header)
- All animations must respect `prefers-reduced-motion: reduce`
- Transitions: max `0.3s ease` — nothing slower
- No auto-playing videos with sound

---

## 3. Content & Business Rules

### Contact Information (CRITICAL)
- Carlos Carpio's name and email MUST be visible at ALL times
- Email `carloscarpio82@hotmail.com` must be a clickable `mailto:` link
- Contact CTAs must appear in: **Hero**, **Mid-page**, **Contact section**, **Closing**
- WhatsApp floating button must be present and always visible

### Bilingual Content (CRITICAL)
- ALL user-facing text must exist in both Spanish and English
- Use `data-i18n` attributes on every translatable element
- Translation keys must be defined in `js/i18n.js`
- Default language: Spanish (`es`)
- Language preference persists via `localStorage`
- Browser language detection on first visit (`navigator.language`)

### Images & Media
- Use ONLY the real property photos from `FOTOS/` directory
- NEVER replace real photos with stock images or AI-generated images
- All images must have descriptive `alt` text
- Use `loading="lazy"` for images below the fold
- Video: `preload="metadata"`, never autoplay with sound

### SEO
- Single `<h1>` per page
- Proper heading hierarchy (h1 → h2 → h3, no skipping)
- `<title>` and `<meta description>` must be present
- Open Graph tags for social sharing
- `<html lang="es">` with dynamic update on language switch

---

## 4. Accessibility Rules (WCAG 2.1 AA)

- Color contrast ratio: minimum `4.5:1` for normal text
- All interactive elements must have visible `:focus` states
- Icon-only buttons must have `aria-label`
- Form fields must have associated `<label>` elements
- Skip-to-content link at the top of the page
- All images must have `alt` text
- Keyboard navigation must work for gallery, forms, and menus

---

## 5. Performance Rules

- Total page weight target: `< 3 MB`
- No render-blocking JavaScript in `<head>`
- CSS loaded in `<head>`, JS loaded with `defer` at end of `<body>`
- Fonts loaded with `display: swap`
- Images: use `srcset` and `sizes` for responsive loading where possible
- Lighthouse Performance score target: `> 90`

---

## 6. File Organization Rules

- `index.html` — single HTML file for the entire SPA
- `css/styles.css` — single stylesheet with all design tokens and styles
- `js/main.js` — core application logic
- `js/i18n.js` — translation system and all translation strings
- `js/gallery.js` — gallery, carousel, and lightbox logic
- NO additional HTML pages — this is a single-page site
- NO inline `<style>` blocks (except critical above-the-fold CSS if needed)
- NO inline `onclick` handlers — use `addEventListener` in JS files

---

## 7. Security Rules

- No API keys or secrets in any committed file
- Form submissions via `mailto:` or third-party service (Formspree/EmailJS)
- No server-side code — this is a static site
- Sanitize any user input before display (XSS prevention)
- External links must have `rel="noopener noreferrer"`

---

## 8. Deployment Rules

- Site must work when opened directly as `file://` (for local preview)
- Site must also work on static hosting (GitHub Pages, Netlify, Vercel)
- No server-side rendering required
- Include `robots.txt` and `sitemap.xml` for production
