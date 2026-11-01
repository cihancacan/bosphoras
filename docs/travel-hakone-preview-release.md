# Hakone #69 — private owner-preview release

Date: 2026-11-01 · Git branch: `feature/luxury-travel-seo-destinations-20261012`. **Do not merge or deploy to `main`.**

## Integrated content

- 88 catalogue slugs preserved, **69 premium destination guides** now registered.
- French/English longform destination and hotel comparison, four genuine ryokans, five specific Hakone areas, five experiences and 8 original FAQs in each language.
- Four hotels: Gora Kadan (Imperial-villa grounds, Gora), Hakone Suishoen (23 rooms with private outdoor onsen, Kowakidani), Hakone Ginyu (Hayakawa gorge, Miyanoshita), Kinnotake Sengokuhara (adults-oriented, **minimum age 12**, private outdoor baths).
- Compositional distinction: Gora / Sounzan; Kowakidani / Hakone Open-Air Museum; Miyanoshita / Hayakawa gorge; Sengokuhara; Owakudani / Togendai / Lake Ashi. Onsen safety and age-specific restrictions; no guaranteed Mt Fuji views or ropeway operations.
- Shared guide, separate Kyoto-compatible hotel panels, Gora / Owakudani / Lake Ashi panoramic triptych, readable image overlay, official hotel links, distinct FR/EN metadata and Article/HotelList/FAQPage JSON-LD.
- Nine distinct Wikimedia Commons landscape scenes with licence and artist metadata; 12 first-party property photos (three per ryokan), each linked to the exact hotel. SHA-256, pixel fingerprints, original source URLs and captions recorded in `data/travel/hakoneMediaCandidates.json`.
- All 21 WebP image files were downloaded, resized and fingerprinted in a Vercel sandbox; they are **not committed as GitHub binary assets**. The owner Preview references remote source URLs. `scripts/collect-hakone-local-media.py` can reproduce local WebP archives.

## Verified technical QA

- `npm run typecheck` succeeded.
- `scripts/check-hakone-final.cjs` succeeded: 69 guides, 88 unique slugs, four property-specific galleries, 21 different image URLs/fingerprints, 16 FAQs, noindex.
- Kyoto #68, Tokyo #67, Palawan #66, Sumba #65 regression checks plus catalogue noindex checks all succeeded.
- FR and EN destination and hotel pages returned **HTTP 200** from the local Next.js dev environment with four hotel names, noindex, Article, ItemList and FAQPage with eight items each.
- Vercel Preview is a separate non-production deployment and must reach READY before sharing it as ready.

## Review paths

- `/travel/destinations/hakone`
- `/en/travel/destinations/hakone`
- `/travel/hotels/hakone`
- `/en/travel/hotels/hakone`

## Public publication and final photography are NOT cleared

The 12 publisher photos are owner-review-only with no independently confirmed redistribution rights. The nine Commons photos have source-identified CC rights but should retain attribution and license links. The 21 photos have unique fingerprints, but final manual contact-sheet identity/quality approval remains pending. External image hosting and permanence are not guaranteed. No public image licensing, room inventory, booking contracts, payment collection or after-sales agreement is implied by an editorial photo URL. All guide routes remain `noindex`.

