# Formentera — source-backed luxury guide preparation (27 October 2026)

**Status:** editorial FR/EN complete in GitHub; photographic validation pending. The existing 88-destination catalogue remains intact. No Premium guide registration, Vercel deployment or indexing is authorized by this draft.

## Real accommodation and official sources
1. **Five Flowers Hotel Formentera Meliá Collection**, Es Pujols: https://fiveflowershotel.com/en/ . The official hotel states ~150 m to Es Pujols beach, 79 rooms, rooftop Sky space, a spa restricted to guests aged 16+; room outlooks vary.
2. **Gecko Hotel & Beach Club**, Ca Marí / Playa de Migjorn: https://geckobeachclub.com/en/ and https://geckobeachclub.com/en/contact/ . Boutique seafront hotel, separate beach-club and restaurant experience; do not imply complimentary loungers.
3. **Teranka**, near Es Arenals, eastern Migjorn: https://www.teranka.com/ . The hotel states 35 rooms and suites (Mar, Tierra, Cielo), artwork and wellbeing; individual room views and programmes vary.
4. **Hotel Cala Saona & Spa**, west coast: https://www.hotelcalasaona.com/en and https://www.hotelcalasaona.com/en/rooms . Distinct Garden, Pine, Pool, Sea, Junior Suite and family/connecting configurations, plus spa and dining.

## Official island information
- No airport, Ibiza–La Savina ferry and current connections: https://www.formentera.es/en/transport
- Official catalogue of beaches including Ses Illetes, Migjorn, Es Arenals, Es Caló and Es Pujols: https://www.formentera.es/en/beaches
- Cala Saona geography: https://www.formentera.es/en/explore/beaches/cala-saona/
- Vehicle authorisation policy: https://formentera.eco/ . Island tourism guidance states 1 June–30 September; recheck in each operating season.

## Photographic requirements — 21 distinct WebP originals
- **12 hotel photographs:** 3 confirmed original property photographs for each of Five Flowers, Gecko, Teranka and Hotel Cala Saona; avoid category and hotel mismatches.
- **9 location photographs:** real Ses Illetes, Es Pujols, Ca Marí/Migjorn, Es Arenals, Cala Saona, La Mola, Es Caló, La Savina and Cap de Barbaria.
- Each photo requires exact source link, credited photographer or official publisher, rights basis, FR/EN descriptive captions, no watermark, file existence, location confirmation, no repeated image or crop of same shot, and manual visual QA.
- General operator photo-use authorization has been stated. Asset-level original rights and hotel attribution remain **unverified** until separately documented.
- Preserve fail-closed filtering: `visuallyVerified=false`, `commercialRightsCleared=false` and `approvedForCommercialPublication=false` for every unreviewed slot. Do not publish placeholder galleries or pretend images exist.

## Technical continuation
- Drafts: `data/travel/formenteraDraftGuide.ts` and `formenteraDraftFaq.ts` (4 properties, 5 areas, 5 experiences, 7 FAQs in each language).
- Photographic work queue: `data/travel/formenteraMediaCandidates.json`.
- After verified photographs: add wrapper and editorial modules, register featured-city guide, attach display widgets, SEO/FAQ schema and noindex safeguards, run TypeScript + image/no-duplicate tests.
- **One Preview only once the ten-destination lot passes individual QA.** Do not change production/main, Wink, CRM, transfers, existing destinations, unrelated files or secrets.
