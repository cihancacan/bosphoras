# Tivat, Montenegro — source and photo audit (27 October 2026)

**Repo:** cihancacan/bosphoras, branch `feature/luxury-travel-seo-destinations-20261012`. Sixth destination of the current ten-destination batch. The original **88-destination catalogue remains intact**.

## Hotel and operator checks
1. **The Quince Porto Montenegro**, previously **Regent Porto Montenegro**, waterfront hotel in the Porto Montenegro marina. The official operator now uses The Quince and identifies its 2026 entry into Kerzner International's Rare Finds family: https://www.thequince.com/ and https://portomontenegro.com/accommodation/hotels/ and https://portomontenegro.com/me/careers-the-quince-hotel/ . Some IHG pages continue the Regent branding https://www.ihg.com/regent/hotels/gb/en/porto-montenegro/tivpm/hoteldetail , but they describe the same historic hotel property. **Do not duplicate the inventory** or claim the former restaurants operate unchanged. Historical hotel photographs on the marina operator site remain labelled as taken under the former Regent identity.
2. **SIRO Porto Montenegro**, Boka Place, active lifestyle with Fitness Lab, Recovery Lab, nutritious dining and rooms/apartments, not a private Luštica beach hotel. https://www.sirohotels.com/montenegro/porto-montenegro and official marina listing https://portomontenegro.com/accommodation/hotels/ . Training, guided experiences and recovery treatments require confirmation.
3. **The Chedi Luštica Bay**, in **Radovići**, separate Luštica Bay marina in Trašte Bay, rather than the Porto Montenegro waterfront. Official: https://www.chedilusticabay.com/ and https://www.chedihotels.com/lustica-bay/ . 111 rooms/suites with differing views and child capacities. Operator's current published indoor pool policy: children aged <=12 from **09:00–17:00**, adults only from **17:00–21:00** (reconfirm before stay). Beach service varies by season.
4. **La Roche Boutique Hotel**, Tivat waterfront; nine rooms; distinct 34m² Prestige Mountain, sea-facing categories and 62–73m² two-bedroom suites. https://larochehotel.me/ . Do not imply all categories have sea views or year-round rooftop/beach-club service.

## Tivat-specific geography
- Porto Montenegro and central promenade are marina and urban waterfront, not equivalent to a sandy beach. Yacht charters are not included in a room.
- Tivat town waterfront, Donja Lastva and hilltop Gornja Lastva, Luštica Peninsula and Solila protected bird reserve are five distinct experiences/geographies. Luštica beaches require a road journey from central Tivat.
- Nine source-linked Wikimedia Commons photographs have 9 different image hashes and their author, licence URL and location caption retained. Scenes of Porto Montenegro, sunset in Boka Bay, Gornja Lastva stone hamlet, Solila reserve are not interchangeable.
- Four properties supply 12 hotel photographs (three each) from current or historically connected **official** sources (Porto Montenegro site, Chedi brand website, La Roche official site). Hotel photographs require individually documented publication rights before public indexing; the project's operator previously stated blanket photo permission, but independent photographer contracts have not been inspected. No photo from a competing property is assigned to another hotel.

## Implemented source and QA structure
- `data/travel/tivatDraftGuide.ts`: 4 hotel descriptions, 5 local areas, 5 experiences, six practical checks per language and comprehensive FR/EN narrative.
- `data/travel/tivatDraftFaq.ts`: 7 grounded FAQs each in FR and EN, including 2026 hotel branding and pool hours.
- `data/travel/tivatGuide.ts`, `data/travel/tivatPremiumEditorial.ts`, `data/travel/tivatMediaCandidates.json`: source-linked photo gating and editorial.
- `public/images/travel/tivat-premium/`: 21 WebPs downloaded, orientation-corrected, aspect-preserved, deduplicated; 12 hotel + 9 real locality.
- `scripts/collect-tivat-media.py`, `scripts/check-tivat-draft.mjs`, `.github/workflows/travel-tivat-media.yml`: repeatable GitHub-only media collection and local-file integrity tests.
- `data/travel/featuredCityGuides.ts`, `components/travel/FeaturedCityGuide.tsx`, `components/travel/TravelPages.tsx`: existing page generator extended without deleting previous destinations.

## Production and SEO controls
- Hotel availability, price, room inclusions, spa treatments, yacht charter or transfers are **not** claimed.
- `approvedForCommercialPublication=false`; destination indexing stays gated. JSON-LD and FR/EN metadata use the existing components, no fabricated review or rate schema.
- TypeScript and 88-catalogue check in GitHub, no Vercel Preview while the 10-destination batch is incomplete, no production/main mutation.
- **Remaining before commercial launch:** authenticated Vercel Preview review on desktop/mobile, independent photo licensing signoff and real supplier stock verification.

Batch: Formentera, Deià, Port d'Andratx, Comporta, Melides, Tivat = **6/10** after QA pass.
