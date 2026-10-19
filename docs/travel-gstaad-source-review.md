# Gstaad — source dossier, 15 October 2026

**Status: bilingual original editorial DRAFT, not a rendered premium guide, not in the 10 completed destinations.**

## Audited primary and destination sources

- **Gstaad destination promenade** — Pedestrian village centre and distinct surroundings. https://www.gstaad.ch/en/winter/discover-explore/quintessentially-gstaad/our-chalet-villages/gstaad
- **Gstaad mountain sectors** — Eggli, Wispile, Wasserngrat differences. https://www.gstaad.ch/en/article/detail/which-mountain-is-best-for-you
- **Gstaad Palace official facts** — Winter 15 Dec 2026–7 Mar 2027, restaurants/dress codes. https://www.palace.ch/en/data-facts-and-figures
- **The Alpina Gstaad official** — 56 rooms, art, first Six Senses Spa in Switzerland. https://www.thealpinagstaad.ch/en/5-star-alpina-gstaad-hotel
- **Alpina seasons** — Winter 11 Dec 2026–7 Mar 2027. https://www.thealpinagstaad.ch/en/5-star-alpina-gstaad-hotel-switzerland/seasons
- **Le Grand Bellevue** — Winter 18 Dec 2026–29 Mar 2027, 3000 sqm 17-zone spa. https://bellevue-gstaad.ch/
- **Ultima Hotel Gstaad** — Chauffeured centre access, 3 chalet buildings. https://www.ultimacollection.com/our-collection/ultima-hotel-gstaad
- **Ultima accommodation** — 11 suites and 6 residences, detailed service inclusion. https://www.ultimacollection.com/our-collection/ultima-hotel-gstaad/accommodation

## 21-photo editorial production requirement

- Four exact hotels × 3 genuinely distinct branded photo assets = 12; 9 distinct local-area scenes = 9.
- Preserve original URL, source page, rights and photographer, alt text in FR/EN and hash for every physical WebP.
- Hotel photo on an official website is not an automatic licence for publication. Where reuse rights or factual image identity are unresolved, mark blocked and do not register as a visual on the live page.
- Choose season-accurate hotel or village scenes. Avoid artificially treating an address near a gondola as ski-in/ski-out.
- Verify dates and resort lift operations before live publication, and never claim Wink live booking inventory or rates without a provider confirmation.
- **Next step:** per-hotel image collection and authenticity review; once complete, register the guide, FAQ, source-filtered galleries, structured metadata and noindex guards on the feature branch.


## Execution resumed — 19 October 2026

**Selected next destination: Gstaad, followed by Zermatt in the original 88-destination catalogue.**

- Keep the pre-existing \`gstaadDraftGuide.ts\` and \`gstaadDraftFaq.ts\`. They contain original bilingual text, four distinct hotels, five local sectors and seven genuine FAQ answers in each language. No rewrite or generic copy.
- Hotel identities and current winter dates reviewed against hotel official pages: Gstaad Palace 15 Dec 2026 – 7 Mar 2027; The Alpina 11 Dec 2026 – 7 Mar 2027; Le Grand Bellevue 18 Dec 2026 – 29 Mar 2027; Ultima has eleven suites and six residences. Hotel dates are contextual information, not bookability.
- First Gstaad media manifest had **9/12 hotel candidates and 1/9 destination candidates**, not a publishable collection. Three missing Gstaad Palace frames and eight missing local photographs are being sourced.
- The original Ultima three image slots pointed to the **same original summer exterior image** with different crop query parameters. The collection script replaces the two duplicated candidates with true Ultima Gstaad suite or wellness images if verifiable; duplicate files must NOT count towards the distinct-photo target.
- The existing Eggli scene is titled after a chef at the mountain station and is not proof of a panoramic alpine landscape. Treat as a candidate requiring subject inspection.
- The script \`scripts/collect-gstaad-media.py\` scans exact official Gstaad Palace/Ultima property pages and Wikimedia Commons candidates for named Gstaad/Saanenland locations. GitHub workflow \`.github/workflows/travel-gstaad-media.yml\` runs source collection and records newly downloaded WebP files, URLs, dimensions, hashes and credits.
- **No automated visual verification.** Newly downloaded candidates are marked \`visuallyVerified: false\`, \`commercialRightsCleared: false\`; count only distinct sources as candidates. Source name alone does not establish an appropriate photo. Source attribution and image usage rights must be checked individually.
- \`scripts/check-gstaad-draft.mjs\` guards draft richness, FAQ, 88-destination preservation, noindex, real hotel identity, gallery uniqueness warnings, and prevents prematurely registering Gstaad as a premium route.
- Work stays on the existing feature branch; ordinary commits carry **[skip ci]**, Vercel Preview builds are ignored, and no production, Wink API, real-estate, transfer or CRM changes are made.
- **Gstaad remains a drafted second-batch destination, NOT a completed or deployed page.** Move to photo contact sheets, exact attribution, season-appropriate hero and QA after candidates finish. Only build a Preview after ten destinations in the next lot pass QA.
