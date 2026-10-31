# Bosphoras Luxury Stays — Sumba #65 · original editorial source review

**31 October 2026 — owner-protected Preview only, no production/SEO indexing**

Sumba is the 65th integrated premium guide on the existing branch, not a new site or a duplicate geographical destination. Original catalogue still contains 88 location slugs. Bangkok (#63) and Chiang Mai (#64) are unchanged.

## Four independent properties, verified against current hotel sites

- **NIHI Sumba** — Hoba Wawi, Wanokaka, West Sumba. According to [the official villa inventory](https://nihi.com/sumba/villas/), 31 distinct villas and estates along Nihiwatu Beach, with materially different capacities and outlooks. Do not confuse the challenging Occy's Left break with beginner surfing.
- **Cap Karoso** — Karoso Beach, Kodi, Southwest Sumba, [official site](https://capkaroso.com/en/). Official [Studios](https://capkaroso.com/en/rooms-and-villas/studios/) are 42 sqm ocean-view balcony rooms, not automatically pool villas. Farming, art and chef residencies are date-dependent.
- **The Sanubari** — Kerewe, Lamboya, West Sumba, [official site](https://www.thesanubari.com/) and [villa categories](https://www.thesanubari.com/stay). Its 100-hectare reserve and two-kilometre coastline offer separate Garden Pool, Beachfront Studio Pool and larger beachfront villas; all are different room products.
- **Alamayah Boutique Retreat** — Patiala Bawa, Lamboya, near Kerewe. [Official property](https://alamayah.com/) with six distinct suites, spa and wellness approach; its horse experience image is captioned as an activity, not as a photograph of the hotel building. Do not infer private-pool facilities from spa photographs.

### Geographic differentiation

Kodi/Karoso; Southwest Weekuri–Mandorak–Ratenggaro; Wanokaka/Nihiwatu; Lamboya/Kerewe; East Sumba Wairinding–Walakiri. East Sumba requires a separate road/airport strategy. Tambolaka (TMC) versus Waingapu (WGP) depends on itinerary. Exposed Indian Ocean beaches require a local safety assessment. Respect living Marapu communities and do not promise fixed Pasola dates.

### Source and visual controls

Source collector `scripts/collect-sumba-media.py` uses **nine named, real Wikimedia Commons files**, checked individually for CC BY/SA or CC0 and photographic pixel dimensions, and has **three distinct authentic images per hotel** from the official hotel publishers:

1. Danau Weekuri, Sumba Barat Daya.jpg
2. Kampung Adat Ratenggaro - Sumba Barat Daya.jpg
3. Bukit Wairinding-Sumba Timur.jpg
4. Pantai Walakiri, Sumba Timur, Nusa Tenggara Timur 20170610.jpg
5. Air Terjun Lapopu, Sumba Barat.jpg
6. Tanggedu Waterfall.jpg
7. Ratenggaro Beach.jpg
8. KodiEastcoastSumba.JPG
9. The Magnificent Sunset from Sumba Island.jpg

**Each image must be reviewed against the contact sheet** for geographic accuracy, absence of logos and actual property identity. Manifest should retain source URL, artist, licence, sha256, pixel fingerprint, sizes and correct FR/EN captions. Commons attribution and indication of resizing remain mandatory. Hotel publisher images are **not commercially licensed simply because they are displayed on an official site**: private protected owner Preview only and `noindex`, not public. Do not include uncleared hotel publisher photos in JSON-LD imagery. No claims of live bookable inventory, price, supplier after-sales or affiliation.

### Integration and QA gate

- `data/travel/sumbaDraftGuide.ts` — original FR/EN longform, 4 hotel comparisons, 5 sectors, 5 experiences and practical checks.
- `data/travel/sumbaDraftFaq.ts` — 8 contextual FAQs per language.
- `data/travel/sumbaMediaCandidates.json` and `docs/travel-sumba-contact-sheet.jpg` now contain **21 actual images reviewed individually**: 9 licensed Commons island scenes and 12 authentic property/experience pictures, with all source URLs, credits, copyrights, byte hashes and captions. Status `INTERNAL_21_OF_21_PHOTO_IDENTITY_VERIFIED_PRIVATE_NOT_PUBLIC_LICENSED`. No commercial hotel-publisher republication permission has been inferred.
- `sumbaGuide.ts`, `sumbaPremiumEditorial.ts`, `featuredCityGuides.ts`, `FeaturedCityGuide.tsx` and `TravelPages.tsx` have now been integrated in the existing site on the feature branch; registered count 65, catalogue 88.
- Run TypeScript, photographic integrity, SEO FAQ and all prior premium destination regressions. Build one owner-protected Vercel Preview **after** successful validation, using controlled marker `[travel-batch-ready]`. Do not deploy to `main` or production.

## Image sourcing exception documented

Lelewatu was investigated initially, but its public image URLs produced HTTP 404 in the actual GitHub runner from both non-www and www origins. The team did **not** use stock replacements or falsely label other hotel photographs as Lelewatu. The independently identifiable and photographically verifiable **Alamayah Boutique Retreat** replaced it; its own public official site supplied three actual images. All four reviewed properties are represented by three different photographs, including a clearly labelled horse experience at Alamayah. 

## QA status

Run the existing TypeScript pipeline plus `scripts/check-sumba-final.cjs` (65 premium / 88 geographic, 21 distinct WebP binaries). Use noindex and do not claim that unlicensed publisher photos are eligible for a production public site. Preview only after CI is successful.
