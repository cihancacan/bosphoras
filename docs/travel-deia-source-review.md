# Bosphoras Luxury Stays — Deià, Mallorca (27 October 2026)

## Destination status
- Native catalogue slug: `deia`. The full catalogue remains 88 destinations.
- Next after Formentera; previously existing catalogue metadata preserved without deletion.
- FR/EN premium guide: `data/travel/deiaDraftGuide.ts`, four real hotel references, five local areas, five experiences, cautions and arrival logistics.
- FAQ: `data/travel/deiaDraftFaq.ts` (seven questions in French and seven in English).
- Hotel editorial and image selections: `data/travel/deiaPremiumEditorial.ts`, city map `deiaGuide.ts`.
- Image manifest: `data/travel/deiaMediaCandidates.json`, 12 hotel photographs + 9 geographically identified Commons photographs, WebP in `public/images/travel/deia-premium/`.
- Collect originals and validate without invoking Vercel: `scripts/collect-deia-media.py`, `scripts/check-deia-draft.mjs` and `.github/workflows/travel-deia-media.yml`.

## Verified official sources
- La Residencia, A Belmond Hotel: https://www.belmond.com/en/hotels/europe/spain/la-residencia-mallorca (art studios, garden, pools, 67 units including Villa Robert Graves; room categories differ).
- Es Molí: https://esmoli.com/en/ and **Cala Muleta conditions** https://esmoli.com/en/muleta — advance booking mandatory even for guests; limited-capacity, paid day packages and associated shuttle. It is not freely accessible beach-front hotel stock.
- Sa Pedrissa: https://www.sapedrissa.com/en/ and https://www.sapedrissa.com/en/rooms — adults-only; only selected Grand Suite categories have private pools.
- Hoposa Costa d'Or: https://www.hoposa.es/hotels/costa-dor — adults-only retreat above Llucalcari, room categories and actual views differ.
- Council of Mallorca destination guide: https://fundaciomallorcaturisme.net/en/destinations/serra-de-tramuntana/deia/ — narrow winding Ma-10 road, limited parking and rocky Cala Deià.
- Official Cala Deià hike: https://caminsdepedra.conselldemallorca.es/en/-/la-cala-de-deia — 4.123 km, about 1h24, unsuitable for pushchairs.
- Son Marroig / Sa Foradada official route: https://www.illesbalears.travel/en/mallorca/son-marroig-and-sa-foradada-route — around 2h30 for the return hike.

## Photographic QA findings
- Four named source galleries only for hotel media; three per hotel, no cross-property photos. Hotel commercial permission is owner/operator attested; individual photographer contracts not independently inspected.
- Commons landscape photos include photo-page source, licence and photographer attribution, checked as exact geographic subject and not illustrative stock.
- First board rejected inaccurate shots: scene-2 showed ground surface, scene-8 an interior, scene-6 was incorrectly called a mountain path. Corrected to a photographed Deià lane, hillside village houses and accurate Llucalcari coastal-rock caption. Es Molí and Hoposa captions revised to what is visible. Son Marroig caption narrowed to a historical estate building.
- The gallery must preserve source and photo credits and exclude anything missing the manifest quality flags.

## Release gates
- Image collection and technical QA run in GitHub Actions only.
- TypeScript and 88-catalogue validation via existing GitHub editorial checks.
- **Keep robots noindex** and no supplier inventory / contract claims until independent post-batch Preview and commercial checks.
- **Do not trigger Vercel Preview here**: continue until the agreed batch of ten complete destinations; do not alter production, API Wink, hotel contracts or CRM.
