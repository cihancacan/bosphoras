# Miami — 57th Bosphoras luxury flagship, source and release ledger

Prepared: 30 October 2026. Feature branch: `feature/luxury-travel-seo-destinations-20261012`.
Previous New York #56, Istanbul #55 and all 88 original geographical catalog slugs preserved. Never merge or promote public indexing without the owner's approval.

## Independent editorial selection — FR and EN
- South Beach and Collins Avenue: The Setai, Miami Beach — https://www.thesetaihotel.com/
- Mid-Beach and Faena District: Faena Hotel Miami Beach — https://www.faena.com/miami-beach
- Mid-Beach: The Miami Beach EDITION — https://www.editionhotels.com/miami-beach/
- Surfside: Four Seasons Hotel at The Surf Club — https://www.fourseasons.com/surfside/
- Five real area profiles: South Beach, Mid-Beach, Surfside/Bal Harbour, Brickell/Biscayne Bay, Wynwood/Design District. All have separate suitable landscape image slots; no cross-city photos.
- Five experiences, seven booking checkpoints, eight distinct factual FAQ answers in each of French and English.
- The Setai suites and the Surf Club residences are distinct product types. No specific room view, private plunge pool, event, availability or spa inclusion is assumed.
- The Atlantic hurricane season spans June-November. No fixed airport transfer times or booking promises.

## Photo sourcing, review and publication restrictions
- Nine `destination/scene-{1..9}.webp` local Miami photographs sourced from individual Wikimedia Commons File pages. Individual author, permitted CC BY/CC BY-SA version, local conversion metadata, photo hash, original page URL, download URL and FR/EN captions tracked in `data/travel/miamiMediaCandidates.json`.
- Twelve property photographs targeted, three independently identifiable source-labelled media files per named hotel. Hotel photographs are only for **non-indexed, owner review**, not proven commercially licensed.
- When the official hotel website returns HTTP 403 in GitHub Actions, source-specific hospitality publisher or local destination bureau image links may be used only with the original publisher URL, hotel identity, rights-unverified flag and visible photo attribution. These are **not authorised public-commerical-image permissions**.
- If any hotel lacks sufficient credible imagery, do not show images from unrelated hotels or assert the destination fully finished. Never replace photos with generic unsourced stock.
- Public structured-data `image` may reference attributed Wikimedia city photos only, never publisher hotel photos that are not independently licensed.
- All pages remain noindex until explicit owner content and image-rights review.

## Implementation / QA
- Source: `data/travel/miamiDraftGuide.ts`, `miamiDraftFaq.ts`, `miamiGuide.ts`, `miamiPremiumEditorial.ts`, `miamiMediaCandidates.json`; `components/travel/FeaturedCityGuide.tsx` and `TravelPages.tsx`.
- Real local WebP collection via `scripts/collect-miami-media.py` and GitHub Action `travel-miami-media.yml`. Individual photo source names are verified against original pages. Commercial rights still not cleared.
- Dedicated Miami large scenic hero with readable translucent copy panel, white headline/drop shadow, hero gradient preserving right panorama, five photograph-rich neighbourhood cards and two further scenic images in `#panoramas-miami`.
- Bilingual guide: `/travel/destinations/miami` and `/en/travel/destinations/miami`; hotels variant has the same curated properties, gallery and noindex safeguards.
- Automated QA `scripts/check-miami-destination-final.mjs` checks 57 premium guides, 88 original slugs, all 21 unique local WebP/rights records, exact 3 per hotel and 16 bilingual FAQs. GitHub-only workflow runs TypeScript and regression scripts.
- One final Vercel Preview using release marker `[travel-batch-ready]` after passing CI only. Protected preview cannot be assumed independently browser-verified; production stays intact.

## 30 October 2026 — private owner Preview ready to deploy
- Featured-city guide **#57** is integrated; original catalogue **88/88** preserved. No changes to production `main`.
- Final collector run `41053086267` recovered nine locally stored Wikimedia CC photographs and 11 sourced hotel photos. Incremental Surf Club image run `41055569099` added the 12th hotel image from the Four Seasons Surf Club-specific Five Star Alliance gallery, without overwriting other files.
- Final metadata: **nine** distinct landscape photographs and **12** original locally held property photographs, exactly three images for each of four properties. All 21 source URLs and hashes are recorded. Hotel image creator reuse rights and manual visual review remain pending; never reclassify these as commercial rights cleared.
- The destination and hotel-page layouts have a legible oceanfront hero, five area images, two additional photo-essay landscapes, editorial hotel galleries, practical booking notes, and eight FAQs in each language.
- Typecheck and **all** editorial regressions passed in [GitHub Actions #41056078735](https://github.com/cihancacan/bosphoras/actions/runs/41056078735), including Miami-specific 21-image check, New York, Istanbul and 88 destination catalogue test.
- This commit triggers the intentional single Vercel Preview build for private owner review. Website indexing and production promotion **not** approved.
