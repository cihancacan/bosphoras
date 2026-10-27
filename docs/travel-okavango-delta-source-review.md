# Okavango Delta — research and implementation checkpoint (2026-10-27)
Status: **editorial draft only / 8th destination in 10-destination travel batch**. Do not label complete or enable indexing.
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
**Photographs not yet cleared:** 12 individually identified lodge images (three per property) plus 9 geographically accurate delta scenes, local WebP with provenance, photographer / commercial rights, visual non-duplication QA. Do not mark complete, do not wire guide into live page, and do not launch a Vercel preview until this is accomplished and a batch deploy is due. Existing 88-slug catalogue remains unchanged.
## Completion checklist
[ ] 12 correct licensed lodge photos, [ ] 9 licensed delta scenes, [ ] visual QA / no duplicates, [ ] source manifest, [ ] editorial integration, [ ] venue cards and FAQ wired, [ ] TypeScript/build test, [ ] canonical/hreflang/noindex, [ ] Preview as part of the 10-destination lot.