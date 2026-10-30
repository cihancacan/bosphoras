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
