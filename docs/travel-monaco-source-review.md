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

## Final 21-photo QA — 19 October 2026

- **21/21 source-backed WebP files individually inspected and approved**: 12 hotel images (3 distinct frames per named hotel) and 9 geographically identified Monaco views. Approved asset metadata is persisted at `data/travel/monacoMediaCandidates.json` with original links, credit, image hash, WebP path, flags and precise FR/EN captions.
- Photo slots include: Hôtel de Paris exterior, Diamond Suite Garnier terrace, Bar Américain; Hermitage exterior, Diamond Suite, glass-domed Jardin d’Hiver; Hôtel Métropole planted courtyard, suite living room, Odyssey pool; Monte-Carlo Bay sand-bottom lagoon, gardens/sea outlook, resort pools and coast.
- Destination slots include: Casino façade and mirror fountain; Port Hercule during **Monaco Yacht Show 2017**; the Prince’s Palace; Larvotto beachfront; Fontvieille marina; Casino gardens; Japanese Garden; Oceanographic Museum; Mareterra shoreline.
- All selected imagery is location-specific and visually different. Rejected earlier photographs (construction cranes, outdated archival Casino view, crowded seafront, hotel couples blocking property views, lifestyle close-ups, duplicates) remain out of the active manifest and site.
- **Age/provenance caveats:** Port Hercule photograph is specifically from the 2017 Yacht Show, not a view of 2026 permanent berthing; Casino Square landscaping may have changed since the selected source photograph. Do not claim either photo shows exact current arrangements. General Bosphoras operator photo authorization is recorded; underlying originator credits and source pages remain attached.
- Branch-only internal FR/EN guide registration: `data/travel/monacoGuide.ts` and `data/travel/monacoPremiumEditorial.ts` with photo whitelist and `components/travel/TravelPages.tsx` FAQ/Article JSON-LD. Image approvals do **not** authorize indexing or promotion by themselves: `approvedDestinationSlugs` remains empty and the route remains **noindex**.
- Next step: pass Monaco final GitHub Actions TypeScript/editorial/media QA, then include the staged destination in one coordinated ten-destination Preview. **Do not trigger a standalone Monaco Vercel build or promote production.**

## Monaco terminée — validation du 19 octobre 2026

**Statut : TERMINÉE pour le lot éditorial et technique sur la branche de développement.** Ce statut ne signifie pas mise en production, disponibilité hôtel confirmée ou autorisation d'indexation.

- **21/21 photographies validées** : 12 photographies distinctes pour les 4 hôtels (3/hôtel), et 9 vues réelles et identifiées de Monaco. Chaque image possède le WebP local, la source, le crédit, les dimensions, le SHA-256, l'empreinte perceptuelle, la légende FR/EN et un contrôle d'identité photographique.
- **Qualité sans doublons** : 21 URL sources distinctes et 21 empreintes visuelles distinctes. Le contrôle renforcé `scripts/check-monaco-draft.mjs` exige désormais les 21 photographies approuvées, les crédits et les revues individuelles, et refuse les clichés quasi identiques.
- **Pages FR/EN intégrées**, galeries d'hôtels, cinq secteurs, cinq expériences et 7 FAQ par langue : `data/travel/monacoGuide.ts`, `data/travel/monacoPremiumEditorial.ts`, `data/travel/featuredCityGuides.ts`, `components/travel/FeaturedCityGuide.tsx`, `components/travel/TravelPages.tsx`.
- **CI GitHub Actions réussie** après compilation TypeScript, QA Monaco et audit du catalogue historique des 88 destinations. Preuve générée seulement après réussite : `docs/travel-monaco-qa-result.json`, run commit `da870d3018caa5cd8497f612f324372f404ea5bc`, commit de rapport `51bf0b68bd7b152bde64a3d81df0b7d2566fea27`.
- **Aucun build Vercel demandé pour Monaco** : les derniers déploiements de la branche apparaissent **CANCELED** (ignored build) ; `main` et la production inchangés. **Noindex conservé** et aucun inventaire/tarif Wink inventé.
- Prochaine étape prévue par notre méthode : regrouper les destinations suivantes et vérifier les rendus en **une seule Preview Vercel**, après validation de tout le lot. Un statut GitHub QA PASS ne prouve pas le rendu HTTP de la future Preview.

**CONCLUSION : MONACO TERMINÉE — branche interne, 21/21 photos, QA réussie ; Preview/production reportées au déploiement groupé.**
