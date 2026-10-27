# Palm Beach — source ledger & publication gates (27 October 2026)

**Project:** Bosphoras Luxury Stays, branch `feature/luxury-travel-seo-destinations-20261012`. New lot **8/10** after Formentera, Deià, Port d'Andratx, Comporta, Melides, Tivat, The Hamptons. Existing catalogue **88 distinct destinations**, no deletions.

## Four genuinely distinct properties on Palm Beach island
1. **The Breakers Palm Beach**, 1 South County Road / oceanfront, historic Italian Renaissance resort and private beach, four pools including **Active Pool (family-friendly)** and **Adult Pool reserved for ages 21+**. Official: https://www.thebreakers.com/ and https://www.thebreakers.com/activities/pools-beach/ . Poolside bungalows and some activities are booked separately. Rooms and suites with varying views; do not promise oceanfront for all.
2. **The Brazilian Court Hotel**, 301 Australian Avenue, historic Spanish Colonial **80-room** courtyard retreat near Worth Avenue with Café Boulud and salon, **not beachfront**. Official: https://www.thebraziliancourt.com/ and https://www.thebraziliancourt.com/amenities . Official website advertises an included **two-hour BC ONE yacht cruise** for stays, but eligibility, weather and scheduling require explicit written confirmation; never promise an unconditional yacht charter.
3. **The Colony Hotel Palm Beach**, 155 Hammon Avenue, characteristic pink boutique property near Worth Avenue and municipal beach, with restaurant Swifty's and tropical pool; **not a grand private beachfront resort**. Official: https://thecolonypalmbeach.com/ . Room, suite and residence categories and buggy/beach chair arrangements subject to confirmation.
4. **Palm House Palm Beach**, 160 Royal Palm Way; rebuilt former Heart of Palm Hotel, **reopened November 2024**, **79 rooms and suites**, temperature-controlled pool, vibrant interiors, dining, and charged overnight valet parking. Not directly on the Atlantic sand. Official: https://www.palmhouse.com/ ; https://www.palmhouse.com/about-us/ ; https://www.palmhouse.com/faqs/ .

## Geographic and safety facts
- Palm Beach **island** separated from mainland West Palm Beach by Lake Worth Lagoon. West Palm Beach is not another neighbourhood on Palm Beach island.
- Distinct local sections: North Ocean Boulevard / Breakers; Worth Avenue and Via Mizner; Royal Palm Way; Flagler Museum, Bethesda-by-the-Sea and Lake Trail; south-island public Atlantic beach access.
- Nine genuine public-licensed Wikimedia Commons photos of Clock Tower / Worth Avenue, the Breakers, Whitehall Flagler Museum, Bethesda-by-the-Sea, Via Mizner and north Palm Beach Inlet / Lake Worth. All captions match the original locality.
- Atlantic coastal conditions include rip currents; June-November Atlantic hurricane season warrants official National Hurricane Center alerts and cancellation flexibility.

## Deliverables
- `data/travel/palmBeachDraftGuide.ts` — extensive editorial in French and English, 4 hotels, 5 geographic sectors, 5 experiences and practical disclaimers.
- `data/travel/palmBeachDraftFaq.ts` — 7 detailed FAQs per language.
- `data/travel/palmBeachGuide.ts`, `palmBeachPremiumEditorial.ts` and `palmBeachMediaCandidates.json` — typed gallery linked to real local WebPs and fail-closed safety filter.
- `public/images/travel/palm-beach-premium/` — 12 original hotel-publisher photographs and 9 Commons geographic landscapes, all WebP with unique SHA-256, FR/EN captions, attribution and licence URLs.
- `scripts/collect-palm-beach-media.py`, `scripts/check-palm-beach-draft.mjs`, `.github/workflows/travel-palm-beach-media.yml` — reproducible photo download, quality, 88-catalogue and GitHub-only commit gates.
- `data/travel/featuredCityGuides.ts`, `components/travel/FeaturedCityGuide.tsx`, `components/travel/TravelPages.tsx` extended, without rewriting prior destination pages or integrations.

## Image rights and release
- Hotel source photos are hosted by **the four correct hotel publishers** and not interchangeable. Project operator declares global photo use permission, **but the original photographer agreements have not been independently inspected**. Rights state is operator attestation, not proven licence; check before commercial release.
- Wikimedia Commons source filenames, authors and licence URLs stored per source photo (some BY-SA licences require attribution and share-alike compliance).
- `approvedForCommercialPublication=false` and site robots policy remain **noindex**.
- **No new Vercel Preview** for this single destination: wait until 10/10, then audit all pages at the single Preview release, check every image and validate rights/prices/supplier availability.
- No changes to Vercel production, secrets, Wink, CRM or existing 88-destination baseline.
