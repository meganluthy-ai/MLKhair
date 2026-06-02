# MLK Hair

Website for MLK Hair, the clinical trichology and salon practice of Megan Luthy in Idaho Falls and Rexburg, Idaho.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with CSS-variable design tokens (`app/globals.css`)
- Fonts: Fraunces (display) + Inter Tight (body) via `next/font`
- Resend for quiz + contact email
- Sanity for the blog (P1, not yet wired)
- Hosting: Vercel. Booking stays on Acuity (`MeganKeckHair.as.me`).

## Develop
```bash
npm install
cp .env.local.example .env.local   # fill in values
npm run dev
```

## Build
```bash
npm run build
```

## Design system
- Palette: evergreen `#2E4A3D`, cream `#F6F2EA`, clay `#C26B4A`, ink `#1F1D1A`, taupe `#8A8175`. See `app/globals.css`.
- Voice: science-backed, warm, unpretentious. No em-dashes, no hype, no AI-tell vocabulary.
- Imagery: real, warm-graded documentary photos only. `components/PhotoSlot.tsx` marks every spot a real photo belongs until Megan's shoot happens.

## SEO / AEO
- Per-page title + description, one H1 per page, FAQ schema on Home / Hair Loss / Approach / Trichology / Services.
- `LocalBusiness` + `Person` schema in `lib/schema.ts`.
- `app/sitemap.ts`, `app/robots.ts` (AI crawlers allowed), `public/llms.txt`.
- Redirect `/services-4` -> `/hair-loss` in `next.config.mjs`.

## Open items before launch (from the build brief, search the code for `OPEN`)
- Real photos (replace every `PhotoSlot`).
- Confirm palette + fonts against Megan's Canva assets.
- Salon service list + pricing decision.
- Port the real Hair & Scalp Quiz questions into `lib/quiz.ts`.
- NAP: exact addresses, public phone, hours.
- Carry over the full Google site-verification token.
- Choose the email/newsletter tool; wire `RESEND_*` env vars.
- Paste the original Wix Trichology Q&A copy over the drafts where hers is stronger.
- P1: Sanity blog, Results gallery, full Shop.
