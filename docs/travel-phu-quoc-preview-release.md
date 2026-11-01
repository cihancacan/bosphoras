# Phu Quoc #73 — protected luxury editorial Preview release

Date: 1 November 2026. Branch: `feature/luxury-travel-seo-destinations-20261012`. Do not merge to `main` or promote to production without express owner approval.

## Integrated destination #73
- 73 premium editorial guides in the existing 88-slug catalogue; previous 72 destinations preserved.
- Original 5,871-character French and 5,333-character English destination editorial, four verified real hotel operators, five practical destination sectors, five island experiences, eight travel checks per language, and eight original factual FAQ questions in each language.
- Hotel selection: Regent Phu Quoc, JW Marriott Phu Quoc Emerald Bay, Premier Village Phu Quoc Resort (Accor), and La Veranda Resort Phu Quoc (MGallery). The hotel set differentiates actual location, pool privacy, room categories, family suitability, transfers, and operator-specific limits rather than implying availability.
- La Veranda's latest October 2025 resort factsheet shows 73 rooms; older sources stated 74. Source: https://laverandaresorts.com/wp-content/uploads/2025/10/LVR-Resort-Factsheet-2025.pdf .
- Nine actual Phu Quoc geography photographs and exactly three genuine, individually visually reviewed photographs per chosen hotel. Two visually off-topic destination photos were replaced with authentic Phu Quoc Southern Islands and Phu Quoc Beach views; two source URLs for JW Marriott that returned errors were also rejected and replaced.
- Photo manifesto `data/travel/phuQuocMediaCandidates.json`: credited original URLs, real SHA-256 hashes and pixel fingerprints, dimensions, actual visual checks, Commons licensing, and independent commercial rights flags. All twelve hotel photographs are **private noindex Preview only** pending commercial republication permission; no rights are claimed as cleared. Seven-plus other areas include proper CC licence credits.
- FR/EN pages include actual destination panoramas, individual hotel galleries, best-for summaries, travel logistics, destination metadata and WebPage/BreadcrumbList/Article/ItemList/FAQPage JSON-LD. Hotel-photo URLs remain excluded from schema image lists, and every premium destination stays `noindex,follow` until expressly approved.

## Completed local checks before release
- `npm run typecheck` — passed following correction to FAQ slug narrowing.
- `node scripts/check-travel-photo-standards.cjs data/travel/phuQuocMediaCandidates.json` — passed with 9 landscapes and 12 genuine hotel photographs.
- `node scripts/check-travel-catalogue.mjs` — passed.
- Local Next.js dev server returned HTTP **200** for each of:
  - `/travel/destinations/phu-quoc`
  - `/en/travel/destinations/phu-quoc`
  - `/travel/hotels/phu-quoc`
  - `/en/travel/hotels/phu-quoc`
  Every page rendered Regent Phu Quoc as part of the actual selection.
- The specific `scripts/check-phu-quoc-final.cjs` was committed as a repeatable strict gate; rerun on latest head before declaring the Preview fully QA approved. The isolated Vercel sandbox was stopped during the final regression sequence, so don't claim that uncompleted run passed.

## Final remote release gates
Wait for the tagged **single** Preview build to enter Vercel `READY`; then verify all four protected Preview routes with authenticated Vercel HTTP fetch (200 status, correct page titles and noindex). Produce `_vercel_share` links because the project enforces Vercel SSO and bare URLs may fail for users. Never use the production hostname for preview testing. No real-time hotel availability, supplier booking rights, payments or refunds are asserted.

No images were invented or generated; only actual real photographic files and their provenance are used. Commercial photo rights require separate approval prior to public indexing or promotion.
