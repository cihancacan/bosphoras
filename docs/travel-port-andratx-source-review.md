# Port d’Andratx · Bosphoras Luxury Stays editorial source ledger

**Created:** 27 October 2026. **Status:** fully drafted bilingual FR/EN guide integrated into the existing GitHub feature branch, pending GitHub-only photo commit and noindex preview visual QA. Do not release to production.

## Exact identity and locations
Port d'Andratx is the fishing and leisure harbour in the Andratx municipality of southwest Mallorca, *not* the same place as neighbouring Camp de Mar. The destination page covers both areas **transparently** for luxury traveller choice. No customer may be led to believe a Camp de Mar property is on Port d'Andratx's promenade.

### Four hotels and their own current websites
1. **Mon Port Hotel & Spa** — Port d'Andratx, Cala d'Egos / Finca la Noria. Official: https://www.hotelmonport.com/en . Choice of doubles, family rooms, junior suites and suites; spa access described as included, individual treatments and age conditions reconfirmed. Genuine property imagery from official `/intranet/images/thumbs/` endpoints.
2. **La Pérgola Aparthotel** — Port d'Andratx, Avinguda s'Almudaina 16. Official: https://www.hotelpergolamallorca.com/en . Four-star aparthotel approximately 700 metres from the harbour, with apartments and family facilities; not represented as a five-star palace or directly beachfront. Genuine property photographs from `/images/thumbs/`.
3. **Zafiro Palace Andratx** — actually **Camp de Mar**, next to Golf de Andratx. Official: https://www.zafirohotels.com/en/zafiro-palace-andratx/ . 304 suites in varied categories; certain Private Pool / Penthouse suites have private plunge pools but standard junior suites do not. Children's club seasons and All Inclusive Redefined / free-transfer conditions must be checked separately. Direct hotel photography from `/data/webp/`.
4. **THE CAMP DE MAR Hotel & Resort** — actually **Camp de Mar**, Calle Taula 2. Official: https://www.hotel-campdemar.com/en/home . This current operating brand supersedes old Steigenberger listings. Near sandy Camp de Mar beach, spa, golf, rooms with garden/pool/sea outlooks. Official room guidelines: https://hotel-campdemar.com/en/accommodation/overview and family policy https://hotel-campdemar.com/en/hotel/faq . Source media from the hotel's `/assets/images/` and `/files/usr/pages/index/cms/` paths.

### Coastal and protected island research
- Municipality on the real fishing port, sailing club, waterfront, La Llotja and nearby coves: https://andratx.es/es/puerto-de-andratx
- Municipality beaches: https://visit-andratx.com/en/beaches/
- Official regional guide to rocky Cala Llamp and stair access: https://www.illesbalears.travel/en/mallorca/cove-llamp
- Sa Dragonera Natural Park, boat access via Sant Elm and published seasonal opening hours: https://dragonera.conselldemallorca.es/en/visit-the-park

## Photography 12 + 9
- 3 verified-origin photographs per named hotel from those four official publishers, showing property interiors, pools, spaces or suite **specific to that hotel**.
- 9 real Wikimedia Commons photos of Port d'Andratx harbour, fishing boats, Cala d'Egos, Cala Llamp, Camp de Mar beach, protected Sa Dragonera and Sant Elm.
- `data/travel/portAndratxMediaCandidates.json`: immutable 21 source URLs, photographer/publisher credits, copyright evidence, original and WebP dimensions, SHA256 fingerprints, unique local paths and captions in FR/EN.
- `scripts/collect-port-andratx-media.py`: download, validate minimum size and source licence, convert while preserving aspect ratio and EXIF orientation; never pass off photos from Camp de Mar as photos of Port d'Andratx.
- Hotel photo commercial use is authorised **by the operator's general assertion**, with individual original photographer agreements *not independently inspected*. Commons sources retain the original Creative Commons attribution and licensing URLs. These distinctions must not be erased.

## Structural and publication controls
- Existing 88-item `data/travel/destinations.ts` preserved without changing location lists.
- Data: `data/travel/portAndratxDraftGuide.ts`, `portAndratxDraftFaq.ts`, `portAndratxGuide.ts`, `portAndratxPremiumEditorial.ts`.
- Registry and components: `featuredCityGuides.ts`, `FeaturedCityGuide.tsx`, `TravelPages.tsx`. Serve in French and English (other locales retain existing fallback).
- Editorial source excludes pricing promises, live distribution, confirmed yachts, beach-club access, free spa services or conditional transfer inclusions.
- Metadata robots remain **noindex**; JSON-LD uses fact-based Article, Hotel item lists, Breadcrumb and FAQ and only eligible image assets.
- Keep **one Preview deployment per 10 destinations**, no deployment for this single page; no modification to Wink, CRM, production or existing hotel inventory.
- Before go-live: individual mobile and desktop browser preview, real-image CDN checks and verified supplier commercial rights / inventories.

**Batch:** Formentera, Deià, Port d'Andratx = 3 of 10. 
