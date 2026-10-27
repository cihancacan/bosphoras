# Okavango Delta — research and implementation checkpoint (2026-10-27)
Status: **8th destination editorial implementation complete for restricted, noindexed Preview; commercial photo-rights and batch deployment gates remain open**. Do not enable indexing or claim bookability.
Branch: `feature/luxury-travel-seo-destinations-20261012`. Avoid main/production changes.

## Independently checked sources
- UNESCO World Heritage Okavango Delta: https://whc.unesco.org/en/list/1432 — inland endorheic system, upstream flood pulse during dry season, ecology.
- Wilderness Mombo operator: https://www.wildernessdestinations.com/africa/botswana/okavango-delta/mombo-camp — Chief's Island, accommodations, Maun air connection.
- Wilderness Mombo 21 August 2026 announcement: https://www.wildernessdestinations.com/press-room/wilderness-mombo-expands-its-safari-offering — new night and water safari programme, dates and local regulations subject to reconfirmation.
- Jao Reserve operator: https://jaoreserve.com/jao-camp/ — five suites, two villas, water/land activities seasonally.
- &Beyond Sandibe operator: https://www.andbeyond.com/our-lodges/africa/botswana/okavango-delta/andbeyond-sandibe-okavango-safari-lodge/ — 12 suites, Chitabe, pools, children and game drives.
- Belmond Eagle Island operator: https://www.belmond.com/en/lodges/africa/botswana/eagle-island-lodge-okavango-delta — Xaxaba Island, 12 rooms, plunge pools, advertised activities.

## Editing rules
Four distinct operating lodges, no fake independently branded sub-properties. French and English editorial drafts in data/travel/okavangoDeltaDraftGuide.ts and seven FAQs per language in okavangoDeltaDraftFaq.ts. No supplier API, booking rates, guaranteed sightings, or unconfirmed transfers.
**Photographic status:** 12 lodge-labelled publisher images (three per property) and 9 Commons landscapes are imported as local WebP; contact-sheet reviewed. Wikimedia Commons licence metadata is preserved. **Public-commercial usage of lodge photos is NOT authorized by verified photographer rights**. Keep noindex and release gate closed. Do not deploy until the current 10-destination batch is complete. The original 88-slug catalogue is unchanged.
## Completion checklist
[x] 12 named lodge candidate photos and metadata (commercial licences pending), [x] 9 CC-licensed delta landscapes, [x] visual contact-sheet QA / 21 unique hashes, [x] source manifest, [x] editorial integration, [x] hotel profiles and 14 FR/EN FAQs, [x] TypeScript and legacy catalogue tests in Actions, [x] existing noindex guard, [ ] independently cleared public-commercial lodge photo licences, [ ] first owner Preview after 10-destination batch (2 destinations to complete).
## Imported into feature branch
- 21 distinct, source-labelled local WebP images (12 correctly named lodges, nine Commons landscapes); SHA and simple image difference comparison checked in GitHub Actions run 40580689131.
- Contact sheet: `docs/travel-okavango-delta-contact-sheet.jpg`; 21-image sheet visually inspected and reviewed on 27 October 2026. Hotel image source and visual identity recorded; commercial reuse rights still pending.
- Wikimedia landscape licenses retained individually in manifest, including creator and license link.
- 12 lodge-source images are NOT cleared for commercial/public publication; this is an owner-only nonindexed preview pipeline, not an asserted operator permission.
- Guide wired for FR/EN destination and hotel editorial routes with FAQ, sources, no live inventory, no indexable production routes.
