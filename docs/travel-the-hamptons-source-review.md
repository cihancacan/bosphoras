# The Hamptons — source-led premium travel guide (27 October 2026)

**Branch:** `feature/luxury-travel-seo-destinations-20261012` · **Catalogue:** 88 destinations, preserved. **New batch:** destination 7/10 following Formentera, Deià, Port d’Andratx, Comporta, Melides, Tivat. The four Alpine entries immediately after Tivat (St. Moritz, Aspen, Jackson Hole, Big Sky) already had developed pages and **were not rebuilt**.

## Four active hotels: deliberately different locations and positions
1. **Topping Rose House**, 1 Bridgehampton–Sag Harbor Turnpike, Bridgehampton. A historic inland mansion with 16 guestrooms + 6 one-bedroom suites, Jean-Georges restaurant, heated outdoor pool and seasonal beach shuttle. Not on the beach. Official: https://www.toppingrosehouse.com/
2. **The Maidstone**, 207 Main Street, East Hampton Village. Individually styled boutique rooms, heritage centre and on-site dining; Main Beach has independent seasonal municipal parking restrictions. Official: https://themaidstone.com/
3. **Marram Montauk**, Montauk oceanfront dunes. Official advertises 96 rooms, adjacent sand and surf character, loaner bikes and seasonal activities, with varying sea/dune room views. Official: https://www.marrammontauk.com/
4. **Gurney’s Montauk Resort & Seawater Spa**, 290 Old Montauk Highway, directly oceanfront with guest-only 2,000-ft beach; rooms, cottages and residences; indoor pool and major Seawater Spa. BathHouse and spa treatments are **18+**, BathHouse by 50-minute reservation and subject to capacity. The hotel website explicitly says **Beach Club closed until May 2027**. Official: https://www.gurneysresorts.com/montauk · beach: https://www.gurneysresorts.com/montauk/amenities/private-beach · spa: https://www.gurneysresorts.com/montauk/amenities/seawater-spa .

Cross-checked contemporary hotel coverage, 2026: https://www.cntraveler.com/gallery/best-hotels-in-the-hamptons and https://www.modernluxury.com/revealed-best-of-the-hamptons-2026/ .

## Destination geography and safety
- Hamptons are geographically spread along the South Fork, **not one compact walkable town**. Summer travel times, beach parking permits and seasonal restaurant operating periods vary.
- Bridgehampton and East Hampton historic villages are inland; Marram/Gurney's are Montauk oceanfront properties with different facilities and pricing; never substitute their photos or inventory.
- Five distinct local sections: Bridgehampton/Sagaponack, East Hampton/Main Beach, Amagansett dunes, Montauk ocean/surf, Montauk Point/Sag Harbor (a two-stop regional exploration, explicitly far apart).
- Protected dune vegetation, shore erosion and strong Atlantic surf require official access paths and beach lifeguard guidance, particularly with children.

## Files implemented
- `data/travel/theHamptonsDraftGuide.ts` — substantial luxury FR/EN narrative, 4 source-backed hotel descriptions, 5 local areas, 5 experiences, six practical checks per language.
- `data/travel/theHamptonsDraftFaq.ts` — seven French and seven English FAQs including spa adult age, Beach Club seasonal closure and parking.
- `data/travel/theHamptonsGuide.ts`, `data/travel/theHamptonsPremiumEditorial.ts`, `data/travel/theHamptonsMediaCandidates.json` — typed registry data, eligibility filtering, source/photographer/license metadata, 12 hotel photos and 9 Commons geolocated landscapes.
- `public/images/travel/the-hamptons-premium/`: **21 WebP files** with source pages, captions, hashes and credit information; 3 per hotel and 9 geographically identified beaches/heritage sites (Montauk Lighthouse, East Hampton Main Beach, Sag Harbor, Southampton Coopers Beach, Amagansett dunes, Montauk, Hither Hills).
- `scripts/collect-the-hamptons-media.py`, `scripts/check-the-hamptons-draft.mjs`, `.github/workflows/travel-the-hamptons-media.yml`: original photo download, aspect-preserving WebP, dimension/hash checks, source metadata, QA and GitHub-only writes.
- Existing `featuredCityGuides.ts`, `FeaturedCityGuide.tsx` and `TravelPages.tsx` extended; no other page rebuilt or removed. Existing SEO Article/Hotel list, FAQ and noindex safeguards reused.

## Photo quality and rights
- Official property website photography only, 3 independent image files per actual hotel; images of Marram never used as pictures of Gurney's and vice versa.
- Wikimedia Commons local landscape images each have author and open-license URL; never use copyright-restricted Getty/stock photos from general web image search as site assets.
- Project owner says image usage is authorised; **original individual commercial photographer agreements have not been independently verified**. Hotel sources are labelled as operator-attested rights, not falsely represented as independently licensed.
- A contact-sheet source QA was completed; authenticated real Preview desktop/mobile QA remains pending.

## Publication discipline
- Committed on GitHub feature branch only; **no new READY Vercel Preview** before the 10-destination batch.
- `approvedForCommercialPublication = false`; public indexing disabled and no hotel stock, room rates, restaurant tables, beach parking, airport transfers, charter or supplier agreement asserted.
- After 10 destinations, inspect authenticated Vercel Preview on laptop/mobile and verify all photo rights and live inventory before promotion/indexing.
