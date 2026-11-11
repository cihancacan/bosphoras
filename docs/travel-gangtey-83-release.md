# Bosphoras Luxury Stays — Gangtey #83 (11 November 2026)

This continuation follows completed Punakha #82. The source project, all other destination guides and brand styles remain intact.

## Pages
- FR destination: `/travel/destinations/gangtey`
- FR hotels: `/travel/hotels/gangtey`
- EN destination: `/en/travel/destinations/gangtey`
- EN hotels: `/en/travel/hotels/gangtey`

## Supplier verification
The account-owned Nuitée WhiteLabel search-by-name and hotel details were checked for exact hotel title, Bhutan country (BT), supplier hotel ID, `mapped=true`, and `deletedAt=null`.

- Taj Gangtey Resort And Spa — `lp6588144d` — five-star supplier classification
- Gangtey Tent Resort — `lp65876ec5` — outdoor tent accommodation; Nuitée supplier has different star classification from Bhutan tourism records
- Kichu Resort Phobjikha — `lp233a35` — three-star supplier classification
- Gangtey Pinewood Resort — `lp65867f3e` — three-star supplier classification

The independent top-end hotels Gangtey Lodge, Six Senses Gangtey and Amankora Gangtey were not matched to exact active supplier properties and are not misrepresented with other hotel IDs.

The existing link resolver sends users to `/travel/search?hotel=<verified id>` (EN uses `/en/travel/search`) and immediately redirects to the matching Nuitée property page `/hotels/<verified id>`, with Bosphoras attribution. Availability and rates are supplied only by Nuitée.

## Photos
- Nine identifiable CC-licensed Wikimedia Commons images of the Phobjikha/Gangtey area, each with author, original Wikimedia source and license.
- Twelve manually inspected, property-specific photographs from the four exact Nuitée property photo galleries, three per hotel. The user expressly authorized photo publication.
- All 21 files optimized as local WebP; distinct SHA-256 hashes and source URLs are recorded in `data/travel/gangteyMediaCandidates.json`.

## Editorial and QA
- Independent FR/EN long-form guidance and hotel comparisons, six geographical areas, six experiences and 10 FAQs in each language.
- Country-specific visa/SDF notes, protected wildlife viewing cautions, realistic differentiation between five-star and regional hotels, no invented room inventory.
- Run `node scripts/check-gangtey-83.cjs`, `npm run typecheck`; confirm four pages return HTTP 200 and each hotel link redirects to the exact Nuitée property page. No changes to existing guides.

