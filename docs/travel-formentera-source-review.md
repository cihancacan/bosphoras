# Formentera — source-backed luxury guide (27 October 2026)

## Delivery & visual corrections — 27 October 2026

**GitHub content and 21 WebP images ready on feature branch.** The 88-destination catalogue is unchanged; the Formentera guide is wired to FR/EN destination and hotels routes. Confirmed per-file metadata and no-duplicate automated photo checks: 12 property images (3 each) and 9 real destination scenes. Source record: `data/travel/formenteraMediaCandidates.json`, binary assets under `public/images/travel/formentera-premium/`.

The manual contact-sheet check rejected and replaced three misleading/poor scenes:
- Five Flowers view-3: decorative portrait replaced with the **official hotel gallery guest-room photograph** (`460-dscf8196-copiabaja.jpg`).
- Migjorn scene-3: close-up submerged stones replaced with an **actual wide sandy Migjorn beach scene**, source Commons `Formentera - panoramio (15).jpg`.
- La Savina scene-8: weak grey shoreline replaced with an **actual harbour and marina photo**, source Commons `LaSavina2004.jpg`. This Commons file is dated 2004; it is evidence of port geography, not a claim about current infrastructure.

The photo collector and GitHub-only CI passed: https://github.com/cihancacan/bosphoras/actions/runs/40467908968 . The gallery uses only approved asset hashes and preserves captions, photographer links and applicable Commons licenses. Commercial rights for official hotel imagery are operator-attested, *not independently contract-verified*. Current rates, inventory, hotel affiliation and room availability are **not** claimed. Teranka's 12+ minimum age, as described by SLH, is disclosed with a reconfirmation recommendation.

**Still to validate before production:** authenticated Vercel Preview HTTP responses, browser visual/mobile QA, and formal go-live approval for indexing. Do not trigger Preview before the agreed ten-destination batch; production `main` and Wink remain untouched.


**Status:** editorial FR/EN registered and 21 provenance-checked WebP files committed to the feature branch. The 88-destination catalogue remains intact. Public Preview and indexing remain gated.

## Real accommodation and official sources
1. **Five Flowers Hotel Formentera Meliá Collection**, Es Pujols: https://fiveflowershotel.com/en/ . The official hotel states ~150 m to Es Pujols beach, 79 rooms, rooftop Sky space, a spa restricted to guests aged 16+; room outlooks vary.
2. **Gecko Hotel & Beach Club**, Ca Marí / Playa de Migjorn: https://geckobeachclub.com/en/ and https://geckobeachclub.com/en/contact/ . Boutique seafront hotel, separate beach-club and restaurant experience; do not imply complimentary loungers.
3. **Teranka**, near Es Arenals, eastern Migjorn: https://www.teranka.com/ . The hotel states 35 rooms and suites (Mar, Tierra, Cielo), artwork and wellbeing; individual room views and programmes vary.
4. **Hotel Cala Saona & Spa**, west coast: https://www.hotelcalasaona.com/en and https://www.hotelcalasaona.com/en/rooms . Distinct Garden, Pine, Pool, Sea, Junior Suite and family/connecting configurations, plus spa and dining.

## Official island information
- No airport, Ibiza–La Savina ferry and current connections: https://www.formentera.es/en/transport
- Official catalogue of beaches including Ses Illetes, Migjorn, Es Arenals, Es Caló and Es Pujols: https://www.formentera.es/en/beaches
- Cala Saona geography: https://www.formentera.es/en/explore/beaches/cala-saona/
- Vehicle authorisation policy: https://formentera.eco/ . Island tourism guidance states 1 June–30 September; recheck in each operating season.

## Implemented photography — 21 distinct WebP originals
- **12 hotel photographs:** 3 official-source property photographs for each of Five Flowers, Gecko, Teranka and Hotel Cala Saona; category attribution reviewed.
- **9 location photographs:** real Ses Illetes, Es Pujols, Ca Marí/Migjorn, Es Arenals, Cala Saona, La Mola, Es Caló, La Savina and Cap de Barbaria.
- Each photo now has source URL, photographer or official-publisher credit, rights basis, FR/EN captions, local file, checked location and unique file fingerprint. Gallery contact sheets were reviewed for obvious mismatches; responsive browser QA remains pending.
- General operator photo-use authorization has been stated. Asset-level original rights and hotel attribution remain **unverified** until separately documented.
- Preserve fail-closed filtering: `visuallyVerified=false`, `commercialRightsCleared=false` and `approvedForCommercialPublication=false` for every unreviewed slot. Do not publish placeholder galleries or pretend images exist.

## Technical continuation
- Drafts: `data/travel/formenteraDraftGuide.ts` and `formenteraDraftFaq.ts` (4 properties, 5 areas, 5 experiences, 7 FAQs in each language).
- Photographic work queue: `data/travel/formenteraMediaCandidates.json`.
- Wrapper and editorial modules, featured-city registry, display widgets, SEO/FAQ schema and noindex safeguards are integrated; photo/no-duplicate tests passed. Run TypeScript CI on branch before signing off.
- **One Preview only once the ten-destination lot passes individual QA.** Do not change production/main, Wink, CRM, transfers, existing destinations, unrelated files or secrets.
