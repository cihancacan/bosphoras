# Bosphoras photo optimization remediation — destinations #73, #74 and #75

Date: 2026-11-02. Scope: `feature/luxury-travel-seo-destinations-20261012` only. **Never promote to production or change `main` without explicit approval.**

## Completed and saved to GitHub
- **Phu Quoc #73**: 9 genuine licensed island photos + 12 authentic resort photos, saved physically as 21 `.webp` files in `public/images/travel/phu-quoc-premium/`.
- **Singapore #74**: 9 licensed Singapore photographs + 12 hotel photographs in `public/images/travel/singapore-premium/`, three true hotel photos per property. The three former Marina Bay Sands images from a nonresponsive official image host were replaced with three distinct, manually inspected **Marina Bay Sands** images from a specifically attributed hospitality refurbishment article by **PEAK Singapore**. Identified actual property, refreshed descriptions, SHA/pixel hashes, source URL and commercial restrictions in `data/travel/singaporeMediaCandidates.json`. Source: https://www.thepeakmagazine.com.sg/lifestyle/marina-bay-sands-up-luxury-factor-with-more-suites-and-revamped-tech-enabled-rooms. Third-party republication rights **not** cleared.
- **Sentosa #75**: 9 licensed actual-island scenes and 12 actual-hotel photos, 21 physical WebP files in `public/images/travel/sentosa-premium/`. For CDN recompressed variants, compare strict original hash or the pinned 64-bit perceptual hash of an already visually checked source photograph, rejecting unrelated images. See `data/travel/reviewedPhotoDhash73-75.json`.
- Each of the six destination/gallery code files (`*Guide.ts`, `*PremiumEditorial.ts`) now references actual **local paths**, not external CDN URLs. Credits, FR/EN alt texts and license attribution preserved. Global Next.js `images: { unoptimized: true }` remains unchanged so existing site behavior is not modified; physical WebP files supply the efficiency.
- Verified source/image hashes and generated-file SHA-256s and per-photo dimensions in three `data/travel/*WebpOptimization.json` audit files. Exact visual/copyright gate preserved, all hotel photos remain private owner `noindex` Preview only and `publicUseApproved=false`.
- GitHub Actions workflow `.github/workflows/travel-73-75-webp.yml` imported the photos to the actual feature branch without redundant Vercel builds. The source conversion script is `scripts/generate-phuquoc-singapore-sentosa-webp.py`.

## Compression stats (source vs optimized)
- Phu Quoc: 16,708,015 -> 2,686,866 bytes (~84% reduction)
- Singapore: 7,170,660 -> 3,384,686 bytes (~53% reduction)
- Sentosa: 6,991,157 -> 2,826,964 bytes (~60% reduction)
- **Total: 30,869,832 -> 8,898,516 bytes = 71% lighter**, 63 validated files.

## QA passed 2026-11-02
- `npm run typecheck` PASS.
- `node -r ./scripts/register-ts.cjs scripts/check-travel-73-75-webp.cjs` PASS: verifies 63 physical RIFF/WEBP files, local source paths, 63 file SHA-256s and three hotel pictures/property.
- Regression tests for Phu Quoc #73, Singapore #74, Sentosa #75 and Udaipur #76 PASS.
- `node scripts/check-travel-catalogue.mjs` PASS: 88 catalog slugs intact, public index safeguards intact, previous guides preserved.
- `node scripts/check-travel-photo-standards.cjs data/travel/[phuQuoc|singapore|sentosa]MediaCandidates.json` PASS for each.
- 12 real local HTTP pages returned **200**, `noindex`, eight FAQs each, and referenced local `.webp` in the HTML:
  - `/travel/destinations/phu-quoc`, `/en/travel/destinations/phu-quoc`, `/travel/hotels/phu-quoc`, `/en/travel/hotels/phu-quoc`
  - `/travel/destinations/singapore`, `/en/travel/destinations/singapore`, `/travel/hotels/singapore`, `/en/travel/hotels/singapore`
  - `/travel/destinations/sentosa`, `/en/travel/destinations/sentosa`, `/travel/hotels/sentosa`, `/en/travel/hotels/sentosa`.
- Tested three local hotel files returned **HTTP 200 Content-Type: image/webp**.

## Final verification gate
This commit triggers **ONE** Vercel Preview using `[travel-batch-ready]`; previous intermediate commits used `[skip ci]`. Verify Preview **READY**; actual HTTP 200 and correct local `.webp` src for 12 routes; sample actual hosted image responses `image/webp`. Generate the protected `_vercel_share` links for user review. Production not modified. Commercial rights must be confirmed separately before any public indexing.
