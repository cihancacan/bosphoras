# Sentosa #75 — private luxury editorial Vercel Preview release

Date: 2 November 2026. GitHub branch: `feature/luxury-travel-seo-destinations-20261012` — never merge or promote to production without explicit owner permission.

## Delivered
- 75 real destination guides integrated in the existing 88-slug catalogue, with all previous content preserved.
- Original, substantial bilingual Sentosa island editorial (French 7,699 and English 7,285 characters), deliberately separate from Singapore urban guide #74.
- Four genuine operator-confirmed Sentosa hotels: Capella Singapore (113 rooms/suites/villas/manors, forest estate), Raffles Sentosa Singapore (62 private-pool villas, never confuse with downtown Raffles), The Barracks Hotel Sentosa (40 heritage rooms in 1904 former military barracks), W Singapore - Sentosa Cove (240 refreshed rooms, marina, NOT Siloso beachfront). All linked to official provider websites.
- Five real island areas: Palawan/Tanjong Beaches, Siloso/Fort Siloso, Capella woodlands, Gunner Lane/Imbiah, Sentosa Cove.
- Five island experiences and 16 original, strictly factual FAQ in FR and EN.
- Nine authentic, license-attributed Sentosa geographical images, and **exactly three** actual property photographs per listed resort (12 total). Each image downloaded and visually examined in a named contact sheet. Replaced dark/off-topic views and one Commons photograph lacking the CC license with genuine daylight and verifiably CC-licensed scenes; replaced two Raffles nighttime images with daylight resort photographs. Image dimensions, source URLs, rights evidence, SHA-256 and pixel fingerprints saved in `data/travel/sentosaMediaCandidates.json`.
- All hotel photographs have **no commercial republication rights approval**: owner Preview only, `noindex,follow`; none in JSON-LD image lists. All nine landscape images have Creative Commons licenses and named source/credit. No pricing, room availability or booking API guarantees are fabricated.
- Four actual Next.js routes:
  `/travel/destinations/sentosa`, `/en/travel/destinations/sentosa`,
  `/travel/hotels/sentosa`, `/en/travel/hotels/sentosa`.

## Tests passed prior to single Preview deployment
- `npm run typecheck`.
- `node -r ./scripts/register-ts.cjs scripts/check-sentosa-final.cjs` — Sentosa #75 QA passed, 75 unique guides, 88 destination slugs.
- `node scripts/check-travel-photo-standards.cjs data/travel/sentosaMediaCandidates.json` — 9 CC pictures and 12 checked property images.
- Repeatable regression tests for Singapore #74, Phu Quoc #73 and Hoi An #72 all passed.
- `node scripts/check-travel-catalogue.mjs` passed.
- All four actual local routes: **HTTP 200**, all four selected property names, **8 FAQ schema questions**, `noindex`.

## Release rules
Commit with `[travel-batch-ready]` to trigger one Vercel Preview, with all intermediary commits `[skip ci]`. Confirm Vercel deployment `READY`, verify all four URLs by authenticated Vercel fetch, and create temporary Vercel `_vercel_share` URLs for the user. No production deploy or merge.

Next editorial destination after Sentosa: the existing catalogue order must be checked before making changes.
