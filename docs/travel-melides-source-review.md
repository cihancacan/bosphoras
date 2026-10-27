# Melides — Bosphoras Luxury Stays source ledger (27 October 2026)

**Branch:** `feature/luxury-travel-seo-destinations-20261012` of `cihancacan/bosphoras`. Fifth destination in new ten-destination batch, following Formentera, Deià, Port d'Andratx and Comporta. The original 88-item catalogue is preserved. This is a non-indexed editorial release, not live hotel inventory.

## Four accurately described stays in Melides
1. **Vermelho Melides** — village centre, Christian Louboutin's 13 individually designed rooms, restaurant Xtian and wellness: https://www.vermelhohotel.com/ and https://www.vermelhohotel.com/fr . Rooms and facilities vary. Restaurant and treatment bookings are separate.
2. **Pa.te.os** — four entire architect-designed private houses by Manuel Aires Mateus within a large agricultural estate. Ocean views from countryside, **not** direct beach; about 2 km of unpaved access and recommended SUV/4x4: https://pateos.pt/ . House capacity and pool vary. Not a conventional hotel room or an included private-transport contract.
3. **Quinta Amala** — opened in May 2026 near the rice fields outside the village; independent wooden cabanas, rooms with terrace or balcony, larger villa apartment and nature-oriented facilities: https://quintaamala.com/ and https://quintaamala.com/our-rooms/ . Category-specific outdoor areas, dining, family capacity and pool access.
4. **CASAVADIA Melides** — three **independent self-catering rural houses**, roughly 150 metres apart in the Boa Vista countryside, not a staffed hotel; the owners link to third-party experiences but do not imply they are included: https://casavadia.pt/en/ and https://casavadia.pt/en/casas/ .

**Do not** confuse Melides with the separate Comporta destination to its north, or Santo André lagoon farther to the south. Similarly do not list `Spatia Melides`' newly announced development as confirmed bookable hotel inventory without independent operating-status verification. `Vermelho Lagoa` opening rumours are not a confirmed ready-to-book offering.

## Destination references
- Praia de Melides and Lagoa de Melides: https://www.visitportugal.com/en/search/site/Melides
- Local destination tourism: https://www.visitgrandola.com/
- The Melides coastal lagoon is a protected habitat; Atlantic waves and lifeguard flags matter for young children, and dune access must be respected.
- Nine original location photographs are held in the source manifest: Melides lagoon, its beach, nearby Galé and one explicitly named neighbouring `Lagoa de Santo André` scene. No claims of new private beach access.

## Deliverables in GitHub
- `data/travel/melidesDraftGuide.ts`: extensive bilingual luxury editorial, 4 accurately differentiated properties, 5 local districts, 5 experiences, precautions.
- `data/travel/melidesDraftFaq.ts`: 7 grounded French and 7 English FAQs.
- `data/travel/melidesGuide.ts`, `data/travel/melidesPremiumEditorial.ts`: existing typed guide/gallery shape; fail-closed media filters.
- `data/travel/melidesMediaCandidates.json`: 12 authentic official hotel/house photographs plus 9 Wikimedia Commons landscapes, source pages, licensing/credits, FR/EN captions, file path and SHA-256, without repeats.
- `public/images/travel/melides-premium/`: 21 WebP originals converted with correct orientation and no generated scenery.
- `scripts/collect-melides-media.py`, `scripts/check-melides-draft.mjs`, `.github/workflows/travel-melides-media.yml`: source retrieval, photographic QC, integrity gate and GitHub-only commits.
- `data/travel/featuredCityGuides.ts`, `components/travel/FeaturedCityGuide.tsx`, `components/travel/TravelPages.tsx`: existing destination renderer extended for French/English hotel, area, image and FAQ modules; no other catalogue page removed.

## Rights and publication conditions
Property images come from the four actual operators' official websites. The project operator states overall authorization to use images, **but individual photographer licensing agreements were not independently supplied or checked**. Wikimedia Commons landscape credits and open licences are retained for each file in the manifest. Follow per-asset attribution requirements before commercial publication.

`approvedForCommercialPublication=false` and the empty approved SEO destination set maintain **noindex** until later go-live. HTML and image rendering still needs authenticated Preview browser testing on desktop/mobile after the agreed ten destinations. Do not manually publish a Vercel Preview for this single location. No Wink API, CRM, secrets or production/main changes.

**Batch progress:** 5/10 once photo and TypeScript CI complete; the next catalogue slug after `melides` is `tivat`.
