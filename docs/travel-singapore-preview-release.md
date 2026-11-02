# Singapore #74 — premium bilingual private Preview release

Date: 2 November 2026. Branch: `feature/luxury-travel-seo-destinations-20261012`. Never promote or merge to production without the owner's explicit approval.

## Delivered

- **74 integrated premium guides out of 88 catalogue destinations**, previous work retained.
- Original detailed French (6,380 characters) and English (5,556 characters) editorial, four actual operating hotels, five real city districts, five distinct experiences and 16 original bilingual FAQ answers.
- Hotels: [Marina Bay Sands](https://www.marinabaysands.com/hotel.html) for distinct Sands and Paiza collections and the SkyPark, [Raffles Singapore](https://www.raffles.com/singapore/) for heritage and suite categories, [The Fullerton Bay Hotel](https://www.fullertonhotels.com/fullerton-bay-hotel-singapore) for intimate waterfront (NOT The Fullerton Hotel), [The Singapore EDITION](https://www.editionhotels.com/singapore/) for Orchard/Tanglin design.
- Nine authentic, CC-licensed Wikimedia Singapore scenes and three unique, visually inspected property photographs per hotel (12 total). Sixteen images were directly reviewed on contact sheets; all 21 image source files were inspected in the nine-scene and twelve-hotel collections and provenance was reconciled with the original sources. Two unsuitable night city-scene replacements were also independently previewed and changed for daytime photographs of Chinatown and Gardens by the Bay.
- Exact source photo URLs, dimensions, SHA-256s, 80x80 pixel fingerprints, photographer/source credits, Commons licenses, photo captions, individual flags and publishing status recorded in `data/travel/singaporeMediaCandidates.json`. No hotel image is licensed for public commercial republication merely by being accessible: **hotel photos remain restricted to owner Preview, under `noindex,follow`, pending separate written permission**. All hotel photos excluded from JSON-LD image sets.
- Original metadata (FR/EN title, description, canonicals), live page FAQ and schema `WebPage`, `BreadcrumbList`, `Article`, `ItemList`, `FAQPage`; full premium imagery and 9-figure location landscape section with proper captions/credits.
- No unsupported hotel API or real-time room inventory, price or service guarantees, and no confusing Singapore city hotels with future destination Sentosa #75.

## QA passed on 2 November 2026

- `npm run typecheck` passed.
- `node -r ./scripts/register-ts.cjs scripts/check-singapore-final.cjs`: `SINGAPORE_74_QA_SUCCESS`, 74 integrated guides and 88 catalogue slugs.
- `node scripts/check-travel-photo-standards.cjs data/travel/singaporeMediaCandidates.json`: `TRAVEL_PHOTO_STANDARDS_PRIVATE_PREVIEW_PASS`, 9 credited city scenes and 12 individual real hotel photographs.
- Regression: Phu Quoc #73, Hoi An #72 and `node scripts/check-travel-catalogue.mjs` all passed.
- Actual local Next.js server returned HTTP **200** for all four routes; every route contained the names of all four hotels, robots `noindex` and **8 JSON-LD FAQ questions**:
  - `/travel/destinations/singapore`
  - `/en/travel/destinations/singapore`
  - `/travel/hotels/singapore`
  - `/en/travel/hotels/singapore`

## Preview release only

This commit triggers the single Vercel Preview deployment using the established `[travel-batch-ready]` marker; previous intermediate commits have `[skip ci]`. Release is not considered complete until the deployment is **READY** and authenticated Vercel fetch confirms HTTP 200 for the same four paths, correct FR/EN metadata, matching hotels, noindex and 8 FAQ each. Because Vercel Preview enforces SSO, provide protected `_vercel_share` links, not raw unshared paths.

Production and the project main branch are left unchanged.
