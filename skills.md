# Skills — Chaclacayo Real Estate Project

> Reusable skill definitions that give AI coding agents specialized capabilities
> for building and maintaining this real estate landing page.
> Reference: [AGENTS.md](./AGENTS.md) | [rules.md](./rules.md) | [main_idea.md](./main_idea.md)

---

## Skill: create_section

**Description:** Create a new HTML section for the landing page following project conventions.

**Instructions:**
1. Add a `<section>` element with a unique `id` attribute inside `<main>` in `index.html`
2. Use semantic HTML: headings (`<h2>`), paragraphs, lists, etc.
3. All visible text must use `data-i18n="section_keyname"` attributes
4. Add corresponding translation keys to both `es` and `en` objects in `js/i18n.js`
5. Style the section in `css/styles.css` using BEM-inspired class names (e.g., `.section-name__element`)
6. Use only CSS custom properties for colors, fonts, and spacing
7. Add scroll-reveal animation class `.reveal` to animatable elements
8. Ensure responsive layout works at 320px, 640px, and 1024px+
9. If the section contains a CTA, link it to `mailto:carloscarpio82@hotmail.com`

**Files touched:** `index.html`, `css/styles.css`, `js/i18n.js`

---

## Skill: add_translation

**Description:** Add or update bilingual text content across the site.

**Instructions:**
1. Open `js/i18n.js` and locate the `translations` object
2. Add a new key under both `es: {}` and `en: {}` with the translated text
3. In `index.html`, find or create the target element and add `data-i18n="your_key"` attribute
4. Key naming convention: `section_element` (e.g., `hero_headline`, `contact_submit_btn`)
5. For HTML content (with tags inside), use `data-i18n-html="key"` instead
6. Test by toggling the language switcher — both languages must display correctly
7. Verify no untranslated text remains visible in either language

**Files touched:** `js/i18n.js`, `index.html`

---

## Skill: build_gallery

**Description:** Build or modify the photo gallery and lightbox component.

**Instructions:**
1. Gallery images come from the `FOTOS/` directory — use relative paths
2. Available photos (in order):
   - `FOTOS/WhatsApp Image 2026-04-27 at 15.54.13.jpeg` (exterior front)
   - `FOTOS/WhatsApp Image 2026-04-27 at 15.54.49.jpeg` (interior courtyard)
   - `FOTOS/WhatsApp Image 2026-04-27 at 15.55.14.jpeg` (entrance area)
   - `FOTOS/WhatsApp Image 2026-04-27 at 15.55.28.jpeg` (garden/patio)
   - `FOTOS/WhatsApp Image 2026-04-27 at 15.55.46.jpeg` (building view)
3. Video: `FOTOS/WhatsApp Video 2026-04-27 at 15.53.37.mp4`
4. Implement carousel with prev/next arrow navigation
5. Add thumbnail strip below the main image
6. Lightbox: click image to open fullscreen overlay with close button
7. Add touch/swipe support for mobile using `touchstart`/`touchend` events
8. Use `loading="lazy"` on all gallery images
9. All gallery logic goes in `js/gallery.js`
10. Ensure lightbox is keyboard-accessible (Escape to close, arrows to navigate)

**Files touched:** `index.html`, `css/styles.css`, `js/gallery.js`

---

## Skill: add_cta_button

**Description:** Add a call-to-action button that links to the owner's contact.

**Instructions:**
1. Create an `<a>` element with `href="mailto:carloscarpio82@hotmail.com"`
2. Apply the `.btn--primary` or `.btn--accent` class for gold styling
3. Add `data-i18n` attribute with bilingual button text
4. Add corresponding keys to `js/i18n.js` (ES and EN)
5. Style with hover effect: `translateY(-2px)` lift + gold glow shadow
6. Ensure minimum touch target: `44px × 44px` for mobile
7. CTA buttons must appear in at least 3 locations: hero, mid-page, closing section
8. For WhatsApp CTA, use: `https://wa.me/XXXXXXXXXXX?text=...`

**Files touched:** `index.html`, `css/styles.css`, `js/i18n.js`

---

## Skill: setup_design_system

**Description:** Initialize or update the CSS design system with all tokens and utilities.

**Instructions:**
1. Define all custom properties in `:root` block of `css/styles.css`:
   ```css
   :root {
     --color-primary: #1B4332;
     --color-primary-light: #2D6A4F;
     --color-accent: #D4A843;
     --color-accent-hover: #C09530;
     --color-bg-dark: #0A0F0D;
     --color-bg-card: #111A15;
     --color-bg-glass: rgba(27,67,50,0.15);
     --color-text: #F1F1F1;
     --color-text-muted: #A3B8A8;
     --color-white: #FFFFFF;
     --color-danger: #E63946;
     --color-success: #52B788;
     --font-heading: 'Playfair Display', Georgia, serif;
     --font-body: 'Inter', -apple-system, sans-serif;
     --radius-sm: 8px;
     --radius-md: 12px;
     --radius-full: 999px;
     --shadow-card: 0 8px 32px rgba(0,0,0,0.3);
     --shadow-glow: 0 0 20px rgba(212,168,67,0.3);
     --transition: all 0.3s ease;
     --max-width: 1280px;
   }
   ```
2. Add CSS reset/normalize styles
3. Add base typography styles for headings (h1–h4) and body
4. Add utility classes: `.container`, `.btn`, `.btn--primary`, `.btn--accent`, `.reveal`
5. Add responsive breakpoint media queries at `640px` and `1024px`
6. Add `prefers-reduced-motion` query to disable animations
7. Import Google Fonts in `index.html` `<head>` with `display=swap`

**Files touched:** `css/styles.css`, `index.html`

---

## Skill: implement_i18n

**Description:** Set up or extend the client-side internationalization system.

**Instructions:**
1. In `js/i18n.js`, export a `translations` object with `es` and `en` sub-objects
2. Each key maps to a string value for that language
3. Create a `setLanguage(lang)` function that:
   - Queries all `[data-i18n]` elements and sets their `textContent`
   - Queries all `[data-i18n-html]` elements and sets their `innerHTML`
   - Queries all `[data-i18n-placeholder]` elements and sets their `placeholder`
   - Updates `<html lang="">` attribute
   - Saves to `localStorage.setItem('lang', lang)`
   - Updates the active state of the language toggle UI
4. On page load, detect language: `localStorage.getItem('lang')` → `navigator.language` → default `'es'`
5. Language toggle in header: two buttons or a switch labeled `ES | EN`
6. Ensure smooth transition when switching (no page reload)

**Files touched:** `js/i18n.js`, `index.html`

---

## Skill: build_contact_form

**Description:** Create the contact/lead capture form with validation.

**Instructions:**
1. Create a `<form>` element inside the contact section with fields:
   - Name (`text`, required)
   - Phone (`tel`, optional)
   - Email (`email`, required)
   - Message (`textarea`, optional)
2. All labels and placeholders use `data-i18n` / `data-i18n-placeholder`
3. Client-side validation:
   - Name: non-empty, min 2 characters
   - Email: valid email format (regex or `type="email"`)
   - Show inline error messages in current language
4. On valid submit:
   - Show success toast: "Gracias, Carlos se pondrá en contacto contigo." / "Thank you, Carlos will get in touch with you."
   - Option A: Open `mailto:` with pre-filled subject and body
   - Option B: Submit to Formspree/EmailJS endpoint
5. Style form with glassmorphism card background
6. Ensure all fields have associated `<label>` elements for accessibility

**Files touched:** `index.html`, `css/styles.css`, `js/main.js`, `js/i18n.js`

---

## Skill: add_scroll_animations

**Description:** Add scroll-triggered reveal animations to page sections.

**Instructions:**
1. In `js/main.js`, create an `IntersectionObserver` instance:
   ```javascript
   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('revealed');
         observer.unobserve(entry.target);
       }
     });
   }, { threshold: 0.1 });
   ```
2. Query all `.reveal` elements and observe them
3. In CSS, define the hidden and revealed states:
   ```css
   .reveal { opacity: 0; transform: translateY(30px); transition: var(--transition); }
   .reveal.revealed { opacity: 1; transform: translateY(0); }
   ```
4. Add `prefers-reduced-motion` override:
   ```css
   @media (prefers-reduced-motion: reduce) {
     .reveal { opacity: 1; transform: none; transition: none; }
   }
   ```
5. Apply `.reveal` class to section headings, cards, gallery, and form elements

**Files touched:** `js/main.js`, `css/styles.css`, `index.html`

---

## Skill: setup_whatsapp_button

**Description:** Add the floating WhatsApp contact button.

**Instructions:**
1. Add a fixed-position `<a>` element at the bottom-right of the viewport
2. Use the WhatsApp brand green (`#25D366`) as background
3. Include the WhatsApp SVG icon (inline SVG, not an image file)
4. Link: `https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20la%20propiedad%20en%20Chaclacayo`
5. Add `target="_blank"` and `rel="noopener noreferrer"`
6. Add `aria-label` with bilingual text via `data-i18n`
7. Add pulse animation to draw attention
8. Position: `bottom: 24px; right: 24px;` with `z-index: 1000`
9. Tooltip on hover: "Escríbenos por WhatsApp" / "Message us on WhatsApp"
10. Must be visible on all screen sizes

**Files touched:** `index.html`, `css/styles.css`, `js/i18n.js`

---

## Skill: optimize_for_seo

**Description:** Add SEO meta tags, structured data, and social sharing tags.

**Instructions:**
1. In `<head>` of `index.html`, add:
   - `<title>` with bilingual support (update via i18n)
   - `<meta name="description" content="...">` 
   - `<meta name="keywords" content="chaclacayo, lima, property, real estate, venta...">`
   - `<link rel="canonical" href="...">`
2. Add Open Graph tags:
   - `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
3. Add Twitter Card tags:
   - `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
4. Add Schema.org structured data (JSON-LD):
   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "RealEstateListing",
     "name": "Propiedad en Chaclacayo",
     "url": "...",
     "description": "...",
     "address": { "@type": "PostalAddress", "addressLocality": "Chaclacayo", "addressRegion": "Lima", "addressCountry": "PE" }
   }
   </script>
   ```
5. Create `robots.txt` allowing all crawlers
6. Create `sitemap.xml` with the single page URL

**Files touched:** `index.html`, `robots.txt` (new), `sitemap.xml` (new)

---

## Skill: responsive_testing

**Description:** Verify and fix responsive layout at all breakpoints.

**Instructions:**
1. Test at these widths: `320px`, `375px`, `414px`, `640px`, `768px`, `1024px`, `1280px`, `1440px`
2. Check that:
   - Header nav collapses to hamburger menu on mobile (< 640px)
   - Gallery carousel is swipeable on touch devices
   - Cards stack vertically on mobile, grid on desktop
   - Contact form is single-column on mobile, two-column on desktop
   - Font sizes scale appropriately (use `clamp()` where helpful)
   - No horizontal overflow at any breakpoint
   - Touch targets are minimum 44×44px
3. Fix any overflow, wrapping, or alignment issues
4. Verify the WhatsApp button doesn't overlap important content on small screens

**Files touched:** `css/styles.css`

---

*Skills version: 1.0 — April 30, 2026*
*Project: Chaclacayo Real Estate Landing Page*
