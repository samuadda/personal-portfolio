# صِدّيق موسى — Personal Portfolio

A bilingual (العربية / English), RTL-first personal portfolio for **Siddiq Mousa (صِدّيق موسى)**, a tech & AI content creator. Built with **Next.js (App Router)** on top of the **Siddiq Mousa design system** — same tokens, typefaces, logo, and components.

## Highlights
- **Next.js App Router + SSG.** Each language is its own statically-rendered route (`/ar`, `/en`) — great for crawlers and instant loads. React 19, TypeScript.
- **SEO, done properly.** Per-locale `<html lang dir>`, `metadata` (title, description, keywords), canonical + `hreflang` alternates (`ar` / `en` / `x-default`), Open Graph + Twitter cards with a branded `og.png`, JSON-LD `Person` schema, `sitemap.xml`, and `robots.txt`. Middleware redirects `/` to the best locale from `Accept-Language` (Arabic-first).
- **Light & dark theme.** A no-flash inline script sets the theme before paint from `localStorage` or the OS preference; a header toggle (sun/moon) flips and persists it. Honors `prefers-color-scheme` when there's no saved choice.
- **The real brand.** Ink & bone warm neutrals, emerald accent, the three Thmanyah faces (self-hosted via `next/font/local`), the stacked صِدّيق / موسى wordmark, and the podcast waveform + tech CLI motifs. Identity panels stay dark in both themes (the logo's primary treatment).
- **Modern & smooth.** Scroll reveals, animated hero swash, condensing sticky header, topics marquee, live waveform — all on the system's motion tokens, with full `prefers-reduced-motion` support.

## Run it
```bash
npm ci
npm run dev      # http://localhost:3000  (redirects to /ar or /en)
# validation:
npm run lint
# production:
npm run build && npm run start
```

ESLint uses the recommended JavaScript, TypeScript, and React Hooks rules, with warnings treated as failures. The Next.js-specific PostCSS override keeps its pinned transitive dependency on a patched release; revisit it when upgrading Next.js.

## Structure
```
app/
  [locale]/
    layout.tsx        # <html lang dir>, fonts, no-flash theme script, metadata, static params
    page.tsx          # the portfolio sections + JSON-LD
  styles/             # design-system tokens (colors/typography/spacing) + theme.css + site.css
  globals.css         # imports the above, in order
  fonts.ts            # Thmanyah faces via next/font/local
  sitemap.ts · robots.ts · icon.svg
components/
  Header.tsx · Footer.tsx · Wordmark.tsx · Icons.tsx   # server
  Interactions.tsx    # 'use client' — reveals, menu, theme toggle, waveform, form
lib/
  site.ts             # locales, dir(), SITE_URL, socials
  content.ts          # the ar / en dictionaries (all copy lives here)
middleware.ts         # locale redirect for /
assets/fonts/         # Thmanyah .woff2  ·  public/og.png
```

## Editing content
All copy is in **`lib/content.ts`** — one typed `Dict` per locale (`ar`, `en`). Edit the matching field in both blocks. The numbers, project cards, podcast episodes, and social links are tasteful placeholders — swap them for the real ones (socials live in `lib/site.ts`).

Set your production domain via `NEXT_PUBLIC_SITE_URL` (used for canonical URLs, OG, and the sitemap); it defaults to `https://siddiqmousa.com`.

---
Built with the صِدّيق موسى design system.
