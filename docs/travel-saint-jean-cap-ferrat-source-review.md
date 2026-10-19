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

Original source-based FR+EN destination guide and 14 FAQ answers staged in GitHub. Four real hotels and five authentic sectors registered. Latest verified manifest state: 4 of 21 authentic photographs approved (La Villa view-1, Brise Marine view-1, Villa Ephrussi scene-4, Maurice Rouvier promenade scene-8); 6 downloaded candidates still require review and 11 slots remain missing. The Grand-Hôtel Four Seasons collector now prioritizes its official Club Dauphin photograph and exact accommodation pages as **unapproved candidates**, never as automatically approved images. All incomplete gallery items remain fail-closed. No indexation or production deployment.

## QA remediation — 19 October 2026

- Fixed the TypeScript union over hotel and destination photo records so absent optional `localPath` fields are typed as `Candidate[]`; previously the Cap-Ferrat GitHub QA failed TS2339 on `.localPath` when a scene was still missing.
- Added an official Four Seasons Club Dauphin photo candidate from the exact restaurant/pool page and targeted the actual Four Seasons Palace Sea-View Suite gallery for hotel image recovery. Download success is **not** asserted; workflow execution and subsequent visual inspection must establish it.
- Candidate collector still requires real local WebP bytes and never sets `visuallyVerified` or `commercialRightsCleared`. Production, Vercel deployments and Wink are unaffected by these file edits.

## Verified follow-up — 19 October 2026, GitHub Actions

- Cap-Ferrat media collector run **39302640222**: SUCCESS; ten source-backed downloaded WebP candidates exist (four approved + six not approved), eleven slots missing. Two new photo candidates were downloaded: La Villa Cap Ferrat room view-2 and Paloma Beach scene-3. No automatic approvals.
- Cap-Ferrat TypeScript and editorial QA run **39302640239**: SUCCESS on commit `5661b5cea2587309b346c4c1535a7e3cbf5bf599`. Explicit noindex and candidate safety checks continue to pass; this does **not** assert image collection is complete.
- Four Seasons upstream `www.fourseasons.com` returns HTTP 403 for its official pages and even for the exact official Club Dauphin image in GitHub Actions. All three Grand-Hôtel photo slots remain empty; never reassign another hotel's photo or assert these were downloaded.
- Royal-Riviera `/en/rooms-suites/` returned 404; replace with a verified official gallery URL before the next dedicated collection. Existing Royal-Riviera hotel view-1 is a candidate, not approved.
- Vercel ignored and cancelled branch deployments on recent commits; no new Preview or production deployment. The older ten-destination Preview is `bosphoras-dpe0fz7uf-cihans-projects-effb03c3.vercel.app`, commit `4f1c59ae...`, not the current branch content.

## 21 / 21 actual downloads — October 19 follow-up (latest state)

- The second sourcing pass recovered every Cap-Ferrat image slot: **12/12 hotel and 9/9 destination WebP files**, all with individual source URLs, credits, checksums, visual fingerprints and local image paths. This supersedes the earlier counts and the old Four Seasons missing-photo statements above.
- Grand-Hôtel images came from identifiable Condé Nast Traveler, Forbes Travel Guide and published Grand-Hôtel Club Dauphin photo sources while direct Four Seasons requests still returned HTTP 403. That limitation does not justify borrowing another hotel's images.
- The earlier mistaken harbour candidate from Hôtel La Voile d'Or was excluded and replaced with Tangopaso's geographically identified Commons photograph **Port de Saint-Jean Cap-Ferrat**. Distinct locally identified Cap-Ferrat aerial and Grand-Hôtel coastline views replaced two absent scenes.
- **These are downloads, not 21 approvals. Exactly 4 are already individually visually approved and 17 remain gated pending visual review** as of this note. Do not turn on indexing or announce 21 verified images yet.
- An internal **21-tile contact sheet** is generated by the existing GitHub-only photo review workflow at `docs/travel-photo-contact-sheets/saint-jean-cap-ferrat.md` and `saint-jean-cap-ferrat.jpg`. Do not publish that QA sheet as a consumer-facing website page.
- The Cap Ferrat QA script now checks existence, attributed source URLs, hashes, and the 21 local WebPs, while retaining per-image approval and noindex requirements. The central Alpine QA's previous refusal of operator rights dated 19 October was corrected; prior checks only allowed the 15th and 17th.
