# Hoi An #72 — protected luxury editorial Preview release

Date: 1 November 2026. Branch: `feature/luxury-travel-seo-destinations-20261012`. Never merge to `main` or production without explicit owner approval.

## Integrated deliverables

- **72 premium editorial destination guides** integrated across a catalogue of **88 distinct slugs**, with all earlier destinations preserved.
- Original French and English long-form content, **four verified operating hotels**, five real geographic areas, five distinct experiences, eight original FAQ in each language.
- Hotels: [Four Seasons Resort The Nam Hai](https://www.fourseasons.com/hoian/) — 100 villas at Ha My Beach; [Namia River Retreat](https://namiariverretreat.com/) — 60 private pool villas on Con Ba Xa river islet; [Anantara Hoi An Resort](https://www.anantara.com/en/hoi-an) — 92 rooms and suites under 1 km from UNESCO Old Town; [NHAAN Resort & Spa Hoi An, Tapestry Collection by Hilton](https://www.hilton.com/en/hotels/dadhaup-nhaan-resort-and-spa-hoi-an/) — 174 rooms and suites in Cam Thanh, confirmed opening 6 August 2026, designed by Vo Trong Nghia.
- Four hotel galleries with **three actual, individually inspected images per property** plus **nine individually inspected CC-licensed Wikimedia photos** of Old Town, Thu Bon river, rice-farming, and nipa basket boats. Hashes, pixel fingerprints, image dimensions, provenance, credit and licence recorded in `data/travel/hoiAnMediaCandidates.json`. No stock, pictogram or off-property hotel photos knowingly selected.
- Photographic QA uses fail-closed `visuallyVerified && previewVisualApproved`. Nine Commons licences identified; **all 12 hotel/press/travel publisher pictures are restricted to a noindex owner Preview** because independent public commercial republication rights have not been established. Original publisher URLs are used for the Preview; WebP copies generated in isolated sandbox were **not committed as GitHub binaries**. `scripts/collect-hoi-an-local-media.py` can reproduce the local archive.
- Hero title gradient for readability, panorama section, hotel-gallery captions, original FR/EN metadata and Article/ItemList/FAQPage JSON-LD. External media excluded from structured image listings.
- No live inventory, price promises, direct booking authorisation, payments or after-sales agreements assumed.

## Verified QA

`npm run typecheck` passed; `scripts/check-travel-photo-standards.cjs` passed for 12 visually validated hotel photos; `scripts/check-hoi-an-final.cjs` passed with 72 guides / 88 slugs. Regression scripts Da Nang, Vinh Hy, Hakone, Kyoto, Tokyo and the travel catalogue all passed.

Four actual local Next.js routes returned **HTTP 200**, with correct hotels and page titles, robots `noindex,follow`, schema `WebPage,BreadcrumbList,Article,ItemList,FAQPage` and **8 FAQ items on each page**:

- `/travel/destinations/hoi-an`
- `/en/travel/destinations/hoi-an`
- `/travel/hotels/hoi-an`
- `/en/travel/hotels/hoi-an`

Do not label the new Vercel Preview finished until the final deployment state is `READY`. Owner should independently check final visual quality and hotel photo redistribution rights before any public release.
