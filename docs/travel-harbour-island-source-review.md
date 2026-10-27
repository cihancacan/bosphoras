# Harbour Island — Bosphoras Luxury Stays final ten-destination release candidate

**October 27, 2026 · branch** `feature/luxury-travel-seo-destinations-20261012`. Tenth destination of the new 10-destination batch (Formentera, Deià, Port d’Andratx, Comporta, Melides, Tivat, The Hamptons, Palm Beach, Nantucket and Harbour Island), **88 original destination slugs preserved**.

## Four verified accommodations on Harbour Island
- **The Dunmore** — 19-room hotel on Pink Sands Beach, intimate cottages and larger residences with materially different amenities, some independent private pools. Official https://www.dunmorebeach.com/ ; Clubhouse dining separate. Do not promise a villa pool for a standard cottage.
- **Coral Sands Inn & Cottages** — Inn, Briland House, cottages and multi-bedroom King's Beach Homes with different floor plans and kitchens; beaches and pools on the Atlantic side. Official https://www.coralsands.com/ and https://www.coralsands.com/stay . No conflation of homes and ordinary Inn rooms.
- **Pink Sands Resort** — cottages, villas, larger homes, Malcolm 51 and Blue Bar & Kitchen on the eastern Atlantic coast. Official https://pinksandsresort.com/ . Dining not included without supplier verification.
- **The Landing** — **13 rooms** in a historic house dating to 1800 with India Hicks-inspired interiors, overlooking **Dunmore Town harbour** on the west, **not oceanfront**; hotel advertises approximately five-minute walk to Pink Sands Beach and guest chairs/umbrellas. Official https://harbourislandlanding.com/ and https://harbourislandlanding.com/our-rooms/ .

## Practical facts
- Arrival via North Eleuthera Airport **ELH**, land taxi to **Three Island Dock**, then **water taxi** or prearranged legal private launch across; **there is no road bridge**.
- Pink Sands Beach faces the Atlantic and varies naturally in degree of blush; water is not guaranteed calm or lifeguarded. Children's maritime safety and golf cart eligibility should be verified with local providers.
- Atlantic hurricane season typically **June–November**; no guaranteed ferry, golf cart, charter, room or dining table.
- Dunmore Town and western sheltered harbour contrast with exposed eastern Pink Sands Beach, plus northern and southern coastline zones.
- Scene images include **explicitly labelled historical 1989 archives** from Wikimedia Commons; do not present them as current streetscapes.

## Deliverables and source ledger
- `data/travel/harbourIslandDraftGuide.ts`: 4 substantial French and English hotel narratives, 5 areas, 5 experiences, high-depth destination narrative and family/logistics cautions.
- `data/travel/harbourIslandDraftFaq.ts`: 7 full FAQs in each language.
- `data/travel/harbourIslandGuide.ts`, `data/travel/harbourIslandPremiumEditorial.ts`, `data/travel/harbourIslandMediaCandidates.json`: typed premium guide and fail-closed provenance-backed photo filters, credits, licence URLs and captions.
- `public/images/travel/harbour-island-premium/`: 3 authentic photos per actual hotel, downloaded from **that establishment's own original site**, plus 9 Wikimedia Commons coastal/town images; all WebP with SHA-256 and source/licence metadata.
- `scripts/collect-harbour-island-media.py`, `scripts/check-harbour-island-draft.mjs`, `.github/workflows/travel-harbour-island-media.yml`: photo CI and 88-catalogue check.
- Existing `data/travel/featuredCityGuides.ts`, `components/travel/FeaturedCityGuide.tsx`, `components/travel/TravelPages.tsx` extended; zero deletions or remodelling of earlier pages.

## Rights, publication and Preview
- Project operator attested general permission to use hotel property photographs; **individual third-party photographer licences remain independently unverified**. Hotel image “commercialRightsCleared” in manifest is operator attestation **not** a legal clearance opinion.
- Historical destination images have Wikimedia Commons credit and open licence URL per individual file; comply with any Creative Commons share-alike attribution obligations and clearly mark archive dates.
- **Noindex**: `approvedForCommercialPublication=false`; do not switch the empty SEO approved-slugs list or promote to production without further approval.
- Once the ten guides' TS, image and catalogue CI checks succeed, make **one** Vercel **Preview** Git deployment of exactly the latest reviewed feature-branch SHA, not production/main. Verify mobile/desktop and all gallery URLs. A protected preview may require Vercel login; do not equate `READY` with independently verified visible HTML.
