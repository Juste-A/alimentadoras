# Alimentadoras de San Vicente del Raspeig 🐾

Website for the group of *alimentadoras* in San Vicente del Raspeig (Alicante) who feed, water and sterilise the town's stray cats at their own expense.

Instead of asking for money, the site points people to **one shared donation wishlist** (e.g. an Amazon wishlist) so cat food, shelters and supplies are shipped directly to the group, without exposing anyone's home address.

The site is bilingual (Spanish by default, English at `/en`) and aims for a bright, playful look.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | [Nuxt 3](https://nuxt.com) (Vue 3, `<script setup>`, TypeScript) |
| Styling | [Tailwind CSS](https://tailwindcss.nuxtjs.org) via `@nuxtjs/tailwindcss` |
| i18n | [`@nuxtjs/i18n`](https://i18n.nuxtjs.org): `es` (default) + `en`, `prefix_except_default` |
| Linting / formatting | `@nuxt/eslint` (flat config) + Prettier |

## Getting started

Requires Node.js 20+ (developed on Node 22).

```bash
npm install
cp .env.example .env   # then fill in the wishlist URL
npm run dev            # http://localhost:3000
```

> `.npmrc` sets `legacy-peer-deps=true` to work around an npm peer-resolution bug with the current Nuxt module versions.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build (server output in `.output/`) |
| `npm run generate` | Pre-render a fully static site, good for Netlify / Vercel / GitHub Pages |
| `npm run preview` | Preview the production build locally |
| `npm run lint` / `lint:fix` | Run ESLint / auto-fix |
| `npm run format` | Format everything with Prettier |

## Configuration

| Variable | Purpose |
| --- | --- |
| `NUXT_PUBLIC_WISHLIST_URL` | Public link to the shared donation wishlist, used by the main call-to-action button |

## Project structure

```
├── app.vue              # Root layout wrapper
├── pages/
│   └── index.vue        # Home page with hero + language switcher
├── i18n/locales/
│   ├── es.json          # Spanish strings (default)
│   └── en.json          # English strings
├── assets/css/main.css  # Tailwind entry
├── public/              # Static files (favicon, robots.txt)
└── nuxt.config.ts       # Modules, i18n and runtime config
```

## Adding translations

Every user-facing string lives in `i18n/locales/*.json`. Add the key to **both** `es.json` and `en.json`, then use it in templates with `$t('key.path')` or `t()` from `useI18n()`.

## Roadmap

- [ ] Link the shared donation wishlist
- [ ] "Who we are" section about the alimentadoras and the colonies they look after
- [ ] Explain how donations reach the group without sharing addresses
- [ ] Gallery of the cats
- [ ] Deploy and connect a domain
