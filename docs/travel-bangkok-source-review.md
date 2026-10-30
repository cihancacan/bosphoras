# Bangkok #63 — premium destination production research and review

**30 October 2026 · branch `feature/luxury-travel-seo-destinations-20261012` · independent luxury editorial, no confirmed supplier inventory**

## Four distinct verified hotels

1. **Mandarin Oriental, Bangkok** — 48 Oriental Avenue, Bang Rak, historic riverfront, distinct Authors' Wing and River Wing. The branded Author's Suite is listed within the River Wing; do not ascribe all accommodation to the historical façade. Official https://www.mandarinoriental.com/en/bangkok/chao-phraya-river ; gallery https://www.mandarinoriental.com/en/bangkok/chao-phraya-river/gallery .
2. **Capella Bangkok** — 300/2 Charoen Krung Road, Yannawa, Sathorn. Low-rise Chao Phraya location, 101 rooms/suites/villas; seven special riverside villas with outdoor plunge jacuzzis, not every room. Official https://capellahotels.com/en/capella-bangkok .
3. **The Siam Bangkok** — Dusit river estate with Art Deco interiors, antique collections, suites and actual courtyard/riverside pool villas. Not close on foot to Siam's central shopping area. Shuttle boat to Sathorn advertised by hotel, subject to operating timetable. Official https://www.thesiamhotel.com/ ; precise types https://www.thesiamhotel.com/riverside-pool-villa/ and https://www.thesiamhotel.com/courtyard-pool-villa/ .
4. **Aman Nai Lert Bangkok** — 1 Soi Somkid, Lumphini, Pathum Wan, Nai Lert Park; opened 2 April 2025. City-centre garden and 52 suites, not a riverfront hotel; substantial wellness facilities. Official https://www.aman.com/hotels/aman-nai-lert-bangkok and https://www.aman.com/hotels/aman-nai-lert-bangkok/gallery .

## Places, differentiated experiences, responsible claims

- **Bang Rak / Oriental Avenue**: historic river hotels, piers, galleries
- **Charoen Krung**: creative riverfront and historic city streets
- **Dusit**: upriver estate and calmer heritage setting
- **Pathum Wan / Wireless Road**: Nai Lert garden, central wellness retreat
- **Thonburi / Wat Arun**: temples, ferries and canals; public city sightseeing, not automatically a hotel room view

Editorial promises must remain precise: Bangkok traffic is variable; public river ferries, private hotel shuttles and cruises have distinct schedules; swimming pools and outdoor plunge jacuzzis depend on the exact room class; no invented live price, reservation, availability or BOSPHORAS hotel after-sales.

## Deliverables and visual gate

- `data/travel/bangkokDraftGuide.ts`: original separate French/English long-form, 5 contrasting sectors, 5 experiences and 4 independently researched premium hotels
- `data/travel/bangkokDraftFaq.ts`: 8 useful questions in each language on wings, pools, boat travel, neighborhoods and true distribution rights
- `scripts/collect-bangkok-media.py`: Wikimedia Commons source discovery for **9 city-specific scenes** and 3 genuine hotel publisher photos per each of four real hotels (**12 hotel pictures**).
- `.github/workflows/travel-bangkok-media.yml`: private download/provenance/compression and contact sheet with SHA-256 and visual identity flags, avoids Vercel builds.
- `data/travel/bangkokMediaCandidates.json` is to record originals, local paths, artist, licence and photographer when available, dimensions, screenshot-independent photo review and accurate captions.

**Source publisher ≠ commercial republication licence.** Every hotel photo remains `commercialRightsCleared: false`, and every pending image `visuallyVerified: false`. No public production, indexing or structured hotel photo publishing before a separate photo-rights clearance. Wikimedia may be reused only with proper applicable licences, attribution and modifications disclosure. Never copy unsourced stock or synthetic image into the real hotel galleries.

**Completion gate:** inspect contact sheet, remove logos/irrelevant scenes, confirm 9+12 source files and 21 nonduplicate image identities, caption each in FR/EN, integrate into 62 existing pages without touching current `main`, add noindex/SEO/FAQ checks, pass GitHub TypeScript regression, then deploy ONE Preview for Bangkok; copy exact Vercel URL only after READY and inspect routes if authentication allows.
