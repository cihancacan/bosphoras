# Udaipur #76 — protected Vercel Preview release

Date: 2 November 2026. Feature branch `feature/luxury-travel-seo-destinations-20261012`; no production promotion/merge without owner approval.

## Completed
- 76 fully integrated premium bilingual guides in the existing 88-destination catalogue.
- Two original detailed 7,444-character French and 6,822-character English destination guides; four genuine named hotels with correct geography; five distinct location areas; five experiences; eight original factual questions in each language.
- Hotels: [Taj Lake Palace, Udaipur](https://www.tajhotels.com/en-in/hotels/taj-lake-palace-udaipur) (Jag Niwas island, 65 rooms + 18 suites; boat transfers to confirm), [The Oberoi Udaivilas](https://www.oberoihotels.com/hotels-in-udaipur-udaivilas-resort/) (landscaped Lake Pichola shore), [The Leela Palace](https://www.theleela.com/the-leela-palace-udaipur) (Pichola shore, 88 keys per operator disclosure), [Raffles Udaipur](https://www.raffles.com/udaipur/) (**Lake Udaisagar**, 137 rooms in two distinct settings: 101 island + 36 Lakeshore). All lake-island and category differences expressly explained.
- Nine original geographically correct Creative Commons Udaipur photos and twelve real hotel photographs, exactly three per verified property. Actual downloaded image files manually inspected in contact sheets; missing Taj sources, substandard Leela image dimensions, inappropriate dark Udaipur assets replaced. Manifest `data/travel/udaipurMediaCandidates.json` records original public URLs, license/credit, 21 unique SHA256 and pixel hashes, dimensions, image-by-image approval, and separate commercial rights state.
- Hotel photos are private **noindex Preview only**, without confirmed commercial republishing rights; never include hotel photographs in structured image schema. CC landscape images have proper attribution. Availability, tariffs, transport inclusions and supplier relationships are not invented.
- Bilingual canonical/meta tags, actual hotel editorial and geographic panorama gallery, destination and hotel FAQ schema, Article, WebPage, BreadcrumbList, ItemList, strict `noindex,follow` gating.

## Tests passed on actual latest branch
- `npm run typecheck` green.
- `node -r ./scripts/register-ts.cjs scripts/check-udaipur-final.cjs` — `UDAIPUR_76_QA_SUCCESS`.
- `node scripts/check-travel-photo-standards.cjs data/travel/udaipurMediaCandidates.json` — 9 licensed city views + 12 original matched hotel images.
- Regression gates Sentosa #75, Singapore #74, Phu Quoc #73 and Hoi An #72 green, and `node scripts/check-travel-catalogue.mjs` green.
- Actual Next.js local HTTP **200**, 4 hotels, robots noindex, **8 FAQ schema questions** for all 4:
  - `/travel/destinations/udaipur`
  - `/en/travel/destinations/udaipur`
  - `/travel/hotels/udaipur`
  - `/en/travel/hotels/udaipur`

## Release
One single feature-branch Preview build tagged `[travel-batch-ready]`, all intermediate commits tagged `[skip ci]`, no production modifications. Verify deployed Vercel `READY`, actual HTTP 200 for the four routes, correct titles and noindex, and generate **temporary `_vercel_share` links** before reporting complete because Vercel Preview SSO blocks ordinary links.

Next planned destination in the existing catalogue is Jaipur #77, but do not start before Udaipur's deployed QA completes.


## Local WebP optimization completed — 2 November 2026

- **21 physical WebP files committed to GitHub**, not merely `.webp` paths or remotely hosted JPEGs.
- Nine licensed landscape files and exactly three locally optimized real-property photos per four hotels in `public/images/travel/udaipur-premium/`.
- Original downloaded images total **5,079,728 bytes**; 21 optimized WebP images total **2,395,170 bytes**, **53% smaller overall** at quality 76, maximum 1280 × 850, original color/crop composition preserved. See `data/travel/udaipurWebpOptimization.json` for individual dimensions, SHA-256 and visual similarity proof.
- Actual sources in `udaipurGuide.ts` and `udaipurPremiumEditorial.ts` now reference **local `/images/travel/udaipur-premium/...webp`** in both the photo galleries and credit/rights registry. `next.config.js` retains `images: { unoptimized: true }`; this is why physically stored WebP files are necessary and why the original external photos were not truly WebP.
- Automated GitHub Actions image-import workflow `.github/workflows/travel-udaipur-webp.yml` completed successfully, storing real files in the feature branch with a no-build intermediate commit. Photo rights remain private noindex Preview only, commercial hotel permissions not independently confirmed.
- Latest QA: `npm run typecheck` PASS; `node -r ./scripts/register-ts.cjs scripts/check-udaipur-local-webp.cjs` PASS with 21 physical RIFF/WEBP files and source/hash checks; `scripts/check-udaipur-final.cjs` PASS; `scripts/check-travel-catalogue.mjs` PASS.
- Trigger a single new Preview deployment now. Validate all four routes return HTTP 200 and all 21 local images return actual Content-Type `image/webp` before declaring complete. Do not touch production.
