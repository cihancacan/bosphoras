# Los Angeles — Bosphoras luxury destination #58: sourcing and owner Preview ledger

**Prepared:** 30 October 2026
**Branch:** `feature/luxury-travel-seo-destinations-20261012`
**Production:** DO NOT MODIFY. All 88 original catalogue destinations intact. Featured premium destinations extend from #57 Miami to #58 Los Angeles, not a replacement.
**Release gate:** Private noindex owner Preview until manual photograph rights and visual confirmation.

## Editorial treatment and verified reference properties

Four actual hotel references and geographical areas, verified against operators:

1. **Hotel Bel-Air**, 701 Stone Canyon Road, Bel-Air. Official: https://www.dorchestercollection.com/los-angeles/hotel-bel-air — leafy retreat and gardens. Individual patio, jacuzzi and suites are room-specific.
2. **The Beverly Hills Hotel**, 9641 Sunset Boulevard, Beverly Hills. Official: https://www.dorchestercollection.com/los-angeles/the-beverly-hills-hotel — main hotel vs bungalows, historic Pink Palace, Polo Lounge. Never assume all rooms are bungalows or have private pools.
3. **Sunset Tower Hotel**, Sunset Boulevard, West Hollywood. Official: https://www.sunsettowerhotel.com/rooms-suites — historic Art Deco tower, skyline suites, social spaces. Exact floor, view and event schedule matter.
4. **Shutters on the Beach**, 1 Pico Boulevard, Santa Monica. Official: https://www.shuttersonthebeach.com/accommodations/ — directly seaside; Ocean Front differs from Ocean View, Partial Ocean View and standard room categories.

Five areas: Bel-Air / Brentwood, Beverly Hills / Rodeo Drive, West Hollywood / Sunset Strip, Santa Monica / Pacific Coast, Hollywood Hills / Griffith Park. Getty Center and Malibu are distinct excursions, not hotel-adjacent amenities. Road travel is affected by traffic; no time, room view, rate, included transfer, hotel contract or guaranteed pool access invented.

Original `data/travel/losAngelesDraftGuide.ts` contains substantive French/English editorial, 5 experiences, 7 travel and booking checks in each language, 4 hotel profiles and 5 geographical area profiles.
`data/travel/losAngelesDraftFaq.ts` includes 8 distinct sourced practical FAQ questions in each language.

## Photography & permissions
`scripts/collect-los-angeles-media.py` obtains only locally stored, attributed Wikimedia Commons images for the nine destination landscape slots. Each candidate must identify its actual site: Griffith, Getty, Beverly Hills, Sunset Strip, Santa Monica, Hollywood hills, Downtown, Malibu and Venice. No stock placeholders or reusing other cities.

Hotel images are collected from the named hotel's own pages. Three genuinely distinct source-labelled property images per hotel are required for the release gate. Keep the following fields per image: local WebP path, file dimensions and hash, source page URL, original image URL, photographer/publisher, rights status, FR+EN captions. **Copyright/rights caveat:** publisher photograph ≠ commercial-use permission. Private owner review and `noindex` are not proof of reuse permission. Never send these to live indexed production without proper licensing approval.

`data/travel/losAngelesMediaCandidates.json` owns source evidence. Render only assets passing individual source and file gates. In JSON-LD, publisher hotel media is excluded until the requisite rights are independently confirmed.

## Technical, SEO, verification
- Public geographical catalogue unchanged at 88, `approvedDestinationSlugs` empty; noindex remains.
- `data/travel/featuredCityGuides.ts` registers Los Angeles #58, preserving Miami, New York and Istanbul.
- Shared `FeaturedCityGuide.tsx`: original LA hero with legibility overlay, four hotel photo galleries, five distinct area landscape cards, dedicated two-picture Pacific/canals essay `#panoramas-los-angeles`, complete bilingual FAQs.
- `TravelPages.tsx`: FR/EN metadata, schema-safe photographic rights guard, ItemList/Article/FAQ JSON-LD, featured navigation.
- QA script `scripts/check-los-angeles-destination-final.mjs` targets nine unique legitimate city photos, 12 hotel photos (3 each), 58 premium guides, 88 unchanged geographical slugs, source-hash integrity, 16 FAQs, mobile-friendly shared design and safe indexing policy.
- Preview targets: `/travel/destinations/los-angeles` and `/en/travel/destinations/los-angeles`; hotel variant also available. Verify GitHub Actions success then trigger a single Vercel Preview release commit `[travel-batch-ready]`.

## 30 October 2026 — pre-release QA, all 21 images and page checks passed

- Los Angeles is featured premium destination **#58**. Original 88 geographical slugs, Miami #57, New York #56 and Istanbul unchanged.
- Nine real local Wikimedia landscapes with per-file credit, license, image URL and hash; 12 property photos from four correctly named hotels, three per hotel. All are local WebP with bilingual captions and explicit property identifiers.
- Initial collector found eight landscapes and six hotel photos. Incremental [GitHub Actions run 41058661449](https://github.com/cihancacan/bosphoras/actions/runs/41058661449) obtained the missing CC-licensed Malibu panorama and six independently attributable Hotel Bel-Air / Beverly Hills Hotel photos, and removed an accidental resized Shutters duplicate.
- Final [GitHub Actions run 41058845442](https://github.com/cihancacan/bosphoras/actions/runs/41058845442): **SUCCESS** on TypeScript, catalogue, Miami and New York regressions, all other retained destination tests, and `scripts/check-los-angeles-destination-final.mjs` covering 58 featured guides and 21 individual photo files.
- Rights reminder: Dorchester, MICHELIN Guide, Town & Country, Arcadia and other hotel publisher images are strictly owner-only Preview, **not commercially licensed** by this evidence.
- Trigger one intentional owner-only Vercel Preview build with `[travel-batch-ready]`; keep production `main`, actual payment systems, live indexing and all other site functions untouched.
