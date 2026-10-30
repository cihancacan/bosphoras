# Bosphoras Travel · Mayakoba — luxury destination #59 (2026)

## Source, accuracy and rights
Current Mayakoba destination operator: https://mayakoba.com/hotels-overview/
Official Mayakoba FAQ: https://mayakoba.com/faq/
Hyatt official Alila opening, **12 February 2026**: https://newsroom.hyatt.com/alilamayakoba

The original 88 geographic destinations must remain unchanged. Premium Mayakoba is **#59**, following Los Angeles #58 and Miami #57. Keep all preceding editorial work and user-authorised visual styling.

The **four operating brands** in Mayakoba in October 2026 are:
1. **Rosewood Mayakoba**, https://www.rosewoodhotels.com/en/mayakoba-riviera-maya, private lagoon suites, personalised service, plunge pools and beach clubs.
2. **Banyan Tree Mayakoba**, https://www.banyantree.com/mexico/mayakoba, private-pool villas, Asia-inspired hospitality, mangroves and spa.
3. **Fairmont Mayakoba**, https://www.fairmont-mayakoba.com/, larger resort, many casita categories, Maykana beach club, and sometimes separately priced all-inclusive packages.
4. **Alila Mayakoba**, https://www.hyatt.com/en-US/hotel/mexico/alila-mayakoba/cunam, **opened as Alila in February 2026 after the renovation of former Andaz**. NEVER list Andaz as an additional open operating resort. Some Mayakoba subpages still mention an outdated opening year; prefer the exact Hyatt 12 Feb 2026 opening release and destination's current brand inventory.

## Original premium editorial
`data/travel/mayakobaDraftGuide.ts` writes distinct substantive French and English copy, five landscapes—lagoon/canals, Caribbean beachfront, mangrove trails, El Pueblito cultural village, El Camaleón golf—and four factual hotel capsules, five experiences, eight practical checks in both languages. Individual resorts' private pools, room views, inclusions and amenities must never be represented as generally included.

`data/travel/mayakobaDraftFaq.ts` has eight FR and eight EN questions covering 2026 rebrand, all-inclusive confusion, internal transports, family room policies and third-party booking limitations.

## Private owner image collection, with explicit rights risk
`scripts/collect-mayakoba-media.py` downloads locally resized WebP from official `mayakoba.com` destination photos and each of its individually named hotel-gallery subpages; target nine authentic destination images and three real photos for each of four actual hotels. `data/travel/mayakobaMediaCandidates.json` records original image URLs, official source pages, distinct media hashes, publisher credit, bilingual descriptions and legal status.

**Copyright:** official publisher photograph does NOT establish permission for commercial republication. All Mayakoba destination AND hotel photography has `commercialRightsCleared=false`; preview is owner-only `noindex`, and none may appear in public schema until licensed. Human visual review still required.

## Build and release gates
`data/travel/featuredCityGuides.ts` registers #59. Shared `FeaturedCityGuide.tsx` preserves existing layout and integrates source-gated hotel photo galleries, five area images, a separate two-photo landscape essay and Mayakoba FAQ. `TravelPages.tsx` adds bilingual metadata, FAQ and ItemList structured data and reserves a zero-image JSON-LD rights set for Mayakoba. None of the features update production `main`.

Strict validation `scripts/check-mayakoba-destination-final.mjs`: 88 unchanged geographic slugs, 59 premium entries, 21 distinct sourced local photos, exact resort names and 2026 rebranding, complete bilingual editorial and safe noindex. No Preview release until CI passes. Deploy once only with explicit commit token `[travel-batch-ready]`, then verify Vercel READY and supply French and English URLs.

## Trip logistics / reservation boundaries
Mayakoba uses electric boats, bikes and golf carts within the community, with schedules and usage conditions. Dining across hotels can carry individual costs or require reservations. Cancún airport transfer time cannot be guaranteed. Confirm family occupancy, tropical-weather conditions, beach access, seasonal sargassum and specific resort charges. A link to a hotel's official site is not a direct booking/payment/SAV partnership.

## 30 October 2026 — final private Preview verification

- Mayakoba is **premium destination #59 of 88**, preserving all prior editorial destinations, their pages and the production branch.
- **Nine distinct Mayakoba destination landscapes** from official `mayakoba.com` pages plus **12 independently sourced hotel photos** from the four real current brands (three for Rosewood, Banyan Tree, Fairmont and Alila). All 21 local WebP files pass file-size, hash and destination/hotel source validation.
- The image collection run [41066310662](https://github.com/cihancacan/bosphoras/actions/runs/41066310662) succeeded. A second compressed/proxied version of Banyan Tree's aerial photo was caught during media review and replaced with an entirely separate official beachfront-pool-suite photo in successful run [41066832875](https://github.com/cihancacan/bosphoras/actions/runs/41066832875).
- The strict [GitHub Actions typecheck + editorial regression run 41067294475](https://github.com/cihancacan/bosphoras/actions/runs/41067294475) completed **SUCCESS**: the new Mayakoba-specific integrity QA, 59 featured-slug count, full TypeScript typecheck, all previous premium-city QA, 88 base catalogue geography, and private noindex checks pass.
- The four current operator names were verified against the official resort overview. Hyatt formally announced the **Alila Mayakoba opening on 12 February 2026**, replacing the old Andaz.
- These official operator/publisher images are **not independently licensed for commercial publication**. This deployment is private-owner Preview only, not a production or public-indexing approval; all hotel image records explicitly keep `commercialRightsCleared=false` and Mayakoba hotel images are excluded from JSON-LD.
- The single authorised Vercel Preview build is triggered by this commit with the existing `[travel-batch-ready]` marker, without pushing to `main`.
