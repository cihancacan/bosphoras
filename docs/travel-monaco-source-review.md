# Monaco · source-verified editorial dossier and photo QA

**19 October 2026 · Feature branch · draft noindex, not live travel inventory**

## Identity

- **Monaco** is the next destination in the original travel catalogue after Zermatt, while Saint-Barthélemy, Porto Cervo and Mustique are already represented by their own guides.
- Original editorial text: `data/travel/monacoDraftGuide.ts`; FAQs: `data/travel/monacoDraftFaq.ts`, 7 per language.
- Four authentic Monaco addresses: Hôtel de Paris Monte-Carlo, Hôtel Hermitage Monte-Carlo, Hôtel Métropole Monte-Carlo, Monte-Carlo Bay Hotel & Resort.
- Five geographic sectors: Carré d'Or/Casino Square, Beaumarchais, Port Hercule/La Condamine, Larvotto, Monaco-Ville/Fontvieille.
- Five editorial experiences: quiet marina morning, formal casino/dinner, pool and spa comparison, Monaco-Ville walking, arrival logistics.

## Official research references

- SBM hotel collection: https://www.montecarlosbm-corporate.com/brands/hotels/
- Hôtel de Paris: https://www.montecarlosbm.com/en/hotel-monaco/hotel-paris-monte-carlo
- Hermitage: https://www.montecarlosbm.com/en/hotel-monaco/hotel-hermitage-monte-carlo
- Métropole: https://www.metropole.com/ and https://www.metropole.com/rooms-suites
- Bay resort: https://www.montecarlosbm.com/en/hotel-monaco/monte-carlo-bay-hotel-resort
- VisitMonaco official districts: https://www.visitmonaco.com/en/
- Monaco hotel press: https://www.montecarlosbm-corporate.com/press/press-kits/
- 2026 Métropole room renovation and hotel details: https://www.metropole.com/press

## Photography standard (not optional)

1. **Exactly four real hotels × 3 distinct authentic photo compositions = 12**. Unique exterior/arrival, suite/room and SPA/restaurant/lagoon variation per property, not a single exterior cropped three ways.
2. **Exactly nine local scenes**: Casino Square, Port Hercule, Monaco-Ville, Larvotto, Fontvieille, Beaumarchais, Japanese Garden, Oceanographic Museum and Mareterra. If original location cannot be established, leave blank.
3. Prefer clear sunlit premium framing, actual hotel interiors, varied seasons with accurate captions, no low-grade signage, crowds, posters, oversaturated imagery, logos or generic stock.
4. Preserve original URL, source page, author/credit, licensing and owner authorization statement, sha256, visual perceptual hash, image dimensions, FR/EN captions and location notes for every selected file.
5. **Operator confirms image usage authorization for Bosphoras.** Preserve provider photo credits and still check precise image identity; an official-site URL or operator general authorization does not permit inventing photographer identity or the hotel's specific commercial permission.
6. The collector `scripts/collect-monaco-media.py` can only save candidates with `visuallyVerified: false` and `commercialRightsCleared: false`. Approval follows individual inspection, not filename heuristics. No visual substitute from other cities or hotels.

## Rendering and SEO

- Use existing Next.js premium destination component, do not build a separate framework.
- Hotel photos and destination gallery exposed only when photo `visuallyVerified`, `commercialRightsCleared`, `localPath`, source and no warning are all true.
- Keep FR `/travel/destinations/monaco` and EN `/en/travel/destinations/monaco` **noindex**, with equivalent curated hotels routes.
- JSON-LD Article, ListItem hotel names and FAQ answers; no invented live Wink rates, bookable times or hotel distribution permission.
- Do not modify production, real estate CRM, transfers or Wink. No Preview until the next agreed batch passes QA.
