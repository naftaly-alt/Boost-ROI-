# Boost ROI — נפתלי כהן

Production Next.js (App Router + TypeScript + Tailwind CSS) build of the site designed in
`project/design_handoff_boostroi_site/Boost ROI Site v2.dc.html`.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Routes

- `/` — home
- `/managed` — Done For You (managed marketing for companies)
- `/self` — Do It Yourself (coaching for solo operators)
- `/about`
- `/results`
- `/contact`
- `/thank-you` — lead conversion page, fires the Meta Pixel `Lead` event once

`/LP/*` 301-redirects to `/managed` (see `next.config.mjs`), matching the old WordPress landing
page's replacement.

## Notable pieces

- `components/Boost.tsx` — the Boost mascot, ported from the prototype's `boost(mode, size)` SVG
  generator.
- `components/BoostCompanion.tsx` — the persistent scroll-quip companion + poke/"ouch" easter egg.
  Lives in the root layout so its state (which quips have been shown this session) survives
  client-side navigation between pages.
- `components/LeadForm.tsx` — shared lead form for `/managed`, `/self`, `/contact`. Posts to
  `https://formsubmit.co/ajax/naftaly@boostroi.co.il` (no credentials required) and redirects to
  `/thank-you?from=<origin>`.
- `lib/tracking.ts` — Meta Pixel + `dataLayer` event helpers, UTM capture/persistence.
- `lib/content.ts` — all copy/data driving the repeated blocks (stats, client logos, platform
  logos, proof screenshots, flow steps, etc).

## Known follow-ups

- **Lead delivery**: currently uses formsubmit.co (free, no setup) exactly as the approved
  prototype did. For a more robust production setup, swap `LEAD_ENDPOINT` in
  `components/LeadForm.tsx` for a `/api/lead` route backed by a transactional email provider
  (Resend/SendGrid/SES) once credentials are available.
- **Dependency audit**: `npm audit` reports 2 high-severity advisories in Next.js 14.2.x
  (Server Actions/postcss-related; this app uses neither Server Actions nor untrusted CSS input).
  Consider upgrading to Next 15/16 when there's room for the breaking API changes (e.g.
  `searchParams` becoming async).
- **GTM / GA4 / Google Ads** — not wired up (no IDs were provided). `window.dataLayer` is already
  populated by every tracked event, so a GTM container can be dropped in later without code
  changes.
