# Bosphoras Travel — Punakha #82

Created 2026-11-11, following Tangalle #80 and Paro #81. Existing destination cards remain unchanged.

- FR pages: `/travel/destinations/punakha`, `/travel/hotels/punakha`.
- EN pages: `/en/travel/destinations/punakha`, `/en/travel/hotels/punakha`. Existing English destination route was missing; new route wrapper reuses the existing TravelPages renderer and translation content, without changing old guide data.
- Four first-party white-label property match IDs, checked live 2026-11-11 with hotel name, Punakha/Bhutan country and address: **Pemako Punakha** `lp656dbea8` (Lhabesa), **Dhensa Resort** `lp96bb0` (Wolakha; boutique name variant), **RKPO Green Resort** `lpa1200` (Lobesa), **Zhingkham Resort** `lpa412e` (Guma). Deep links use existing `/travel/search?hotel={id}` handoff and Nuitée `/hotels/{id}` room page. No direct official hotel booking links, guessed ID, live pricing or inventory claim.
- Nine geographically identified Wikimedia Commons photographs, properly credited with CC licenses, optimized WebP. Twelve property-specific hotel photographs, three per property, sourced from the hotel's own website, an authorized hotel gallery, or confirmed hotel-focused partner gallery. Site owner expressly authorized publication 2026-11-11; photo source pages and hashes are in `punakhaMediaCandidates.json`.
- Hotel positioning is honest: Pemako luxury villas, Dhensa boutique 4-star, RKPO 4-star countryside resort, Zhingkham 3-star viewpoint. No claim that all four are ultra-luxury.
- Guides: substantial independent French and English editorial, six areas, five experiences, nine Q&As per language, travel formalities and responsible after-sales disclosure. SEO titles, canonical URLs and FAQ schema use the existing renderer.
- QA: `node scripts/check-punakha-82.cjs`, `npm run typecheck`, HTTP 200 and direct hotel-ID assertions for all four pages. Existing favicon is inherited unchanged.

All photography is included as source-controlled WebP assets. Do not retain a dependency on the temporary import address after the photo-import action has committed the files.
