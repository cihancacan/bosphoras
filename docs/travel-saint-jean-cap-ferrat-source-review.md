# Saint-Jean-Cap-Ferrat · premium travel editorial & photo QA

**19 October 2026 · Bosphoras Luxury Stays · feature branch. Draft FR/EN, noindex, no confirmed supplier inventory.**

## Source-verified four-property selection

The local market does **not** contain four equivalent five-star palaces. Bosphoras must not invent them.

- [Grand-Hôtel du Cap-Ferrat, A Four Seasons Hotel](https://www.fourseasons.com/capferrat/) — real palace at the headland; Club Dauphin, suites, private grounds. The [Four Seasons press facts](https://press.fourseasons.com/capferrat/hotel-facts/) and [2026 operating notice](https://press.fourseasons.com/content/fourseasons_pressroom/printView.html?pageToPrint=%2Fcontent%2Ffourseasons_pressroom%2Fen%2Fnews%2Fcapferrat%2F2026%2Fspring_programming) support identity and reopening (6 March 2026); reconfirm future dates.
- [Royal-Riviera](https://www.royal-riviera.com/) — five-star hotel on Baie des Fourmis, not at the tip; local tourist office documents [its 94-room category and dates](https://cotedazurfrance.fr/offres/hotel-royal-riviera-saint-jean-cap-ferrat-fr-2827785/).
- [La Villa Cap Ferrat Hôtel & Spa](https://villacapferrat.fr/) — genuine four-star, 22-room independent boutique hotel; small pool and wellness, **no elevator**; roof level, sea outlook and parking require specific checks.
- [Hôtel Brise Marine](https://www.hotel-brisemarine.com/) — 16-room **three-star** family-run historic Italian-style villa. Offer privacy and local charm, not grand-palace facilities. Published winter closure must be rechecked.

## Five precise areas and authentic local experiences

1. Headland, Grand-Hôtel and lighthouse;
2. Village harbour and Cros deï Pin;
3. Pointe Saint-Hospice and Paloma beach;
4. Baie des Fourmis and Maurice Rouvier promenade;
5. Passable and Villefranche Bay, Ephrussi gardens.

[Official tourist-office walking trails](https://www.saintjeancapferrat-tourisme.fr/decouvrir-saint-jean-cap-ferrat/balades/): the Maurice Rouvier promenade is relatively accessible, whereas the Cap-Ferrat headland path can be closed between lighthouse and Passable for stabilisation works. Confirm status on the day, do not encourage bypassing barriers. [Official beach information](https://www.saintjeancapferrat-tourisme.fr/plages/) distinguishes east-facing Paloma from west-facing Passable and their seasonal private services. **Villa Ephrussi is a museum, never imply hotel rooms for sale there.**

## Photo production, zero fraud

- 12 genuinely different real hotel frames (3 each) plus 9 independently located peninsula landscapes.
- Do not use any Monaco image under a Cap-Ferrat filename. This occurred in the first collector attempt because an inherited direct-image dictionary overrode geographic queries. All 9 contaminated media candidates were rejected and the module-specific tables disabled. Orphan image bytes, if still in GitHub, are excluded from gallery manifests and must not be served.
- First six true hotel images inspected: only La Villa's clear aerial hotel image passed Bosphoras premium quality. Underexposed pool portraits, cheap plastic furniture, dark low-grade spa interiors, and sea panoramas masquerading as hotel exteriors were rejected.
- 21 slots remain in `data/travel/saintJeanCapFerratMediaCandidates.json`. A candidate becomes displayable **only** if `visuallyVerified`, `commercialRightsCleared`, `localPath`, source page, exact geographic identity and appropriate FR/EN captions are valid with no QA warning.
- Operator confirms general project photo rights; do not invent individual photographer credits or falsely assert hotel-specific written licences. Record each identified source and attribution.
- Scripts: `scripts/collect-saint-jean-cap-ferrat-media.py` reuses source/provenance/photo-dhash machinery but clears all Monaco-specific URL sources, `.github/workflows/travel-cap-ferrat-media.yml` triggers candidate acquisition, `scripts/check-cap-ferrat-draft.mjs` validates editorial/asset constraints.
- French and English destinations and hotel-category pages are registered on feature branch. **They are not production live and stay noindex; do not trigger extra Vercel previews until the next 10-destination review**.
- Current booking integrations do not establish live availability. No invented rates, direct hotel partnerships, yacht bookings or transfer ETA.

## Work state

Original source-based FR+EN destination guide and 14 FAQ answers staged in GitHub. Four real hotels and five authentic sectors registered. First image QA approved 1 of 21; all remaining gallery images fail closed until reviewed. No indexation or production deployment.
