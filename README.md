# catherine-mcmillan.com

Personal website for Catherine McMillan — Founding Director of Operations at The AI Collective.

**Live site:** https://catherine-mcmillan.com

## Tech Stack

- **Framework:** [Astro](https://astro.build/) v5 — static site generator using `.astro` components
- **Language:** TypeScript
- **Styling:** Vanilla CSS with custom properties (no Tailwind, no CSS framework). Design tokens in `src/styles/variables.css`
- **Fonts:** [Cormorant Garamond](https://fontsource.org/fonts/cormorant-garamond) (display) + [DM Sans](https://fontsource.org/fonts/dm-sans) (body), self-hosted via Fontsource
- **Build output:** Static HTML (`output: 'static'`), except one serverless API route

## Infrastructure & Services

| Service | Purpose | Notes |
|---------|---------|-------|
| **Vercel** | Hosting & deployment | Auto-deploys from `main`. Uses `@astrojs/vercel` adapter. Static site + one serverless function for the contact form |
| **Squarespace** | Domain registrar | Domain `catherine-mcmillan.com` purchased here; DNS points to Vercel |
| **Resend** | Transactional email | Powers the "Work With Me" intake form. Sends from `form@catherine-mcmillan.com`. API key stored as `RESEND_API_KEY` env var on Vercel |
| **Medium** | Blog content | Articles pulled at build time via RSS feed using `rss-parser`. No CMS — the writing page updates on each deploy |
| **Luma** | Events calendar | Embedded via iframe on the `/events` page |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, trust bar, pathway cards, about preview, writing preview, closing CTA |
| `/about` | Bio, philosophy, milestones |
| `/work-with-me` | Service offerings + intake form (sends email via Resend API) |
| `/writing` | Medium articles fetched from RSS at build time |
| `/events` | Luma calendar embed |
| `/api/contact` | Serverless POST endpoint — validates, rate-limits, and emails form submissions |

## Project Structure

```
src/
├── assets/images/       # Images processed & optimized by Astro at build time
├── components/
│   ├── common/          # Reusable UI (CTAButton, CTALink, SectionLabel)
│   ├── home/            # Homepage sections (Hero, TrustBar, PathwayCard, etc.)
│   ├── about/           # About page sections (Philosophy, Milestones)
│   ├── nav/             # Nav + MobileMenu
│   ├── shared/          # Cross-page components (EventCard, WritingEntry)
│   └── work/            # IntakeForm
├── layouts/
│   └── BaseLayout.astro # Shared HTML shell (head, nav, footer, dark mode script)
├── pages/
│   ├── api/contact.ts   # Serverless endpoint — Resend email + rate limiting
│   └── *.astro          # Page routes
├── styles/
│   ├── variables.css    # Design tokens (colors, spacing, typography)
│   ├── reset.css        # CSS reset
│   └── global.css       # Global styles
└── utils/
    └── rateLimit.ts     # Rate limiting helper
public/
└── favicon.svg          # SVG favicon with dark mode support
```

## Environment Variables

| Variable | Where to set | Description |
|----------|--------------|-------------|
| `RESEND_API_KEY` | Vercel project settings | Resend API key for sending contact form emails |

## Development

```bash
npm install          # Install dependencies
npm run dev          # Dev server at localhost:4321
npm run build        # Production build to ./dist/
npm run preview      # Preview production build locally
```

## Key Architecture Notes

- **No JS framework** — pure Astro components with zero client-side JS bundles. Only inline scripts for dark mode persistence
- **Dark mode** — CSS custom properties toggled via `[data-theme="dark"]` attribute, persisted in `localStorage`, respects system preference
- **View Transitions** — Astro's built-in `ViewTransitions` for smooth page-to-page navigation
- **Contact form** — the only server-side route (`prerender = false`). In-memory rate limiting at 5 submissions per IP per hour
- **Image optimization** — handled by Astro at build time; Vercel's per-request image service is disabled
- **Sitemap** — auto-generated via `@astrojs/sitemap`
- **SEO** — canonical URLs, Open Graph, and Twitter Card meta tags configured in `BaseLayout.astro`
