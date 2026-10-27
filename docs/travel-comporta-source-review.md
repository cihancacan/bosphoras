# Comporta — premium destination source and QA ledger (27 October 2026)

**Project:** Bosphoras Luxury Stays `cihancacan/bosphoras` — branch `feature/luxury-travel-seo-destinations-20261012`. Fourth destination of the ongoing ten-destination batch (Formentera, Deià, Port d'Andratx, Comporta). The original **88 destination** catalogue is unchanged.

## Real hotels, four distinct geographical settings
1. Sublime Comporta, **Muda / pine-wood inland estate**: https://www.sublimehotels.pt/en/stay/sublime-comporta/the-resort/ and https://www.sublimehotels.pt/en/stay/sublime-comporta/accommodations/ . Official website confirms a 68-hectare estate, Sand and Terracotta wings, different pool access and adults-only restriction for the Terracotta Spa Room Queen category; beach club separate from hotel suites.
2. Quinta da Comporta – Wellness Boutique Resort, **Carvalhal rice fields**: https://www.quintadacomporta.com/ . Official site lists solar-heated 40-m infinity pool, Oryza Spa, Inari, distinct rooms/suites/town houses and Pool Villas, not direct beach frontage.
3. Spatia Comporta, **Bicas / Muda countryside**: https://www.spatiacomporta.com/ . Official site lists independent rooms, cabanas, villas and estates, plus guest-only courts and on-site dining, not directly on the beach.
4. AlmaLusa Comporta, **village centre**: https://www.almalusahotels.com/comporta/ and https://www.almalusahotels.com/comporta/m/hotel-directions . Official site lists 53 rooms including 31 suites, seasonal rooftop, pool, approx 1 km / 15 minute walk to Praia da Comporta, not on the sand.

## Destination sources
- National tourism authority beach listing: https://www.visitportugal.com/en/content/praia-da-comporta (protected dunes, sand, Atlantic surf).
- Comporta parish tourism: https://www.jfcomporta.pt/territorio/visitar (rice museum, Comporta wineries, Carrasqueira stilt pier).
- Alcácer do Sal municipality routes, updated April 2026: https://cm-alcacerdosal.pt/itinerarios-turisticos/ (estuary heritage, Palafitic Pier).
- Local road / ferry logistics: https://www.almalusahotels.com/comporta/m/hotel-directions with ferry links to https://www.atlanticferries.pt/ ; always recheck season and vehicle capacity.

## Files created
- `data/travel/comportaDraftGuide.ts` : detailed premium French and English, four hotels, five neighbourhoods, five experiences, six practical cautions per language, no rates/contracted stock promised.
- `data/travel/comportaDraftFaq.ts` : seven FAQs per language, grounded in official hotel and geographic facts.
- `data/travel/comportaGuide.ts`, `data/travel/comportaPremiumEditorial.ts` : strong typed wrappers, source-checked galleries.
- `data/travel/comportaMediaCandidates.json`: 12 official source photos (3/hotel) and 9 original Wikimedia Commons destination photos, source pages, image URLs, captions in FR/EN, authors, explicit rights basis, distinct SHA-256 hashes.
- `public/images/travel/comporta-premium/` : 21 local WebPs, original source retained and resized without synthetic content changes. Image collector `scripts/collect-comporta-media.py` and gate `scripts/check-comporta-draft.mjs`.
- `data/travel/featuredCityGuides.ts`, `components/travel/FeaturedCityGuide.tsx` and `components/travel/TravelPages.tsx`: existing core components extended; SEO metadata, JSON-LD FAQ/Hotel/Article and image safety gating reused rather than replaced.

## Image QA
- Asset photography is from **four current official hotel websites**, so photos of Melides hotels must not be used on the Comporta page.
- Commons source files include Comporta Beach, Praia do Pego, Carvalhal coastline, Carrasqueira stilt pier, Tróia and Sado mouth. Preserve attribution and source page for each.
- The hotel photos have project operator's asserted right to use; **individual original photographer releases have not been independently audited**, and this must not be concealed.
- Contact-sheet review compares hotel sources and scenes; technical gate validates source URLs, unique hashes, local dimensions, local files and captions. Future unverified assets are excluded by default.

## Release safety
- 88 destinations preserved, earlier pages not deleted.
- Comporta remains **noindex** and does not imply booking availability or a supplier contract.
- **No manual Vercel Preview deployment for this single destination.** Wait for one tested ten-destination batch Preview and browser QA, then enable public indexing only after separately approved go-live.
- Wink, CRM, main production branch and existing inventory untouched.
