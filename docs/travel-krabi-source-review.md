# Bosphoras Travel · Krabi — destination premium #61 (dossier de travail)

**30 octobre 2026 · Branche `feature/luxury-travel-seo-destinations-20261012` · Brouillon non intégré au registre actif.**

## Périmètre, géographie et positionnement

Krabi est la première destination non enrichie dans le catalogue originel de **88 destinations** ; les **60 guides premium existants restent inchangés**. Un brouillon ne doit pas être compté comme « destination achevée » et ne doit pas provoquer un build Vercel autonome.

Le guide FR/EN évite le mélange fréquent entre **Railay / la péninsule de Phra Nang**, accessible seulement par bateau, **Nong Thale / Phulay Bay**, **Tubkaek Beach**, **Klong Muang**, et le **port de départ d'Ao Nang**. Les côtes, l'accès et les conditions de baignade sont réellement différents. Les îles Hong sont une excursion à soumettre aux règles de parc et à la météo, pas une « plage privée » incluse.

## Quatre hôtels réels vérifiés sur les sites officiels (30/10/2026)

1. **Rayavadee** — Phra Nang / Railay, arrivée maritime après un transfert routier. Sources : https://rayavadee.com/en/ et https://www.rayavadee.com/en/getting-here.php . La page officielle signale des travaux de rénovation et fermeture du court de tennis jusqu'au **31 octobre 2026** (à revérifier selon les dates du voyage). Ne pas promettre de transfert exclusivement privé ; le bateau partagé reste possible.
2. **Phulay Bay, a Ritz-Carlton Reserve** — Nong Thale, pavillons et villas de catégories distinctes, avec accompagnement personnalisé. Site officiel : https://www.ritzcarlton.com/en/hotels/kbvrz-phulay-bay-a-ritz-carlton-reserve/overview/ . Ne pas supposer qu'une piscine ou une vue illustrée appartient à chaque pavillon.
3. **Banyan Tree Krabi** — Tubkaek Beach, 72 suites/villas avec piscines privées d'après la marque ; catégories avec vues jardin, partiellement sur mer et océan. Sources : https://www.banyantree.com/thailand/krabi et https://www.banyantree.com/thailand/krabi/accommodation . Vérifier les limites d'occupation familiale, explicitement différentes selon les catégories.
4. **The Tubkaak Krabi Boutique Resort** — Tubkaek Beach, chambres jardin et suites / villas distinctes ; seules certaines catégories ont piscine privée ou vue mer. Sources : https://www.tubkaakresort.com/ et https://www.tubkaakresort.com/faq/ . L'adresse de l'établissement est confirmée à 123 Moo 3, Nong Thale, Krabi.

### Autres références

- Service public thaïlandais, fermeture saisonnière de parcs en 2026 : https://thailand.prd.go.th/en/content/category/detail/id/2078/iid/468202
- Autorité touristique thaïlandaise, fiche hôtel The Tubkaak : https://www.thailandtravel.or.jp/the-tubkaak-krabi-boutique-resort/
- Pour un dîner chez Rayavadee, l'existence d'un restaurant ne signifie pas un transfert gratuit ni une réservation garantie : https://www.rayavadee.com/en/the-grotto.php

## Brouillons effectivement ajoutés

- `data/travel/krabiDraftGuide.ts` — original FR/EN, **4 hôtels**, **5 secteurs**, **5 expériences**, conseils et avertissements, sans prix ni inventaire inventés.
- `data/travel/krabiDraftFaq.ts` — **8 questions/réponses distinctes par langue**, notamment bateaux, marées, familles et réservation.

Le dossier reste volontairement **hors `featuredCityGuides.ts`**, sans `krabiGuide.ts`, afin de ne pas servir de destination prétendument complète avant validation des images. Les 60 guides existants et le catalogue géographique des 88 slugs doivent rester inchangés.

## 21 photographies à rechercher, vérifier et licencier

**Neuf vues locales différentes**, pas de substitutions d'autres îles thaïlandaises :

1. Railay West, falaises et plage (héro, cadre diurne dégagé).
2. Phra Nang, formations calcaires, emplacement identifiable.
3. Tubkaek Beach avec îles Hong à l'horizon.
4. Klong Muang, vraie plage et paysage côtier.
5. Ao Nang, départ réel des bateaux, sans publicité ni foule dominante.
6. Péninsule de Railay, vue d'ensemble depuis un point identifié.
7. Hong Islands, formations karstiques ou lagon (accès actuel à confirmer).
8. Sentier forestier ou belvédère réel de la région de Krabi (site précis exigé).
9. Côte de Nong Thale au coucher du soleil, origine géographique documentée.

**Douze photos d'hôtels** : 3 compositions différentes par hôtel, représentant obligatoirement un extérieur ou une arrivée, une catégorie de chambre identifiable, et un espace réel (piscine/spa/restaurant). Éviter les doublons retouchés, les photos de suites attribuées à un autre hôtel et les vues génériques. Chaque vignette doit correspondre à son véritable établissement.

### Critères obligatoires avant intégration

Pour chacun des 21 fichiers WebP : URL originale, page source, hôtel/lieu exact, crédit/photographe si connu, droits et preuve, dimensions, poids, SHA-256, empreinte visuelle, emplacement local, légende FR/EN, alt text factuel, revue individuelle et statut de licence. **Les pages officielles des hôtels ne donnent pas automatiquement le droit de republier les images commercialement.** Tout média non licencié doit rester hors publication et hors données structurées publiques ; ne jamais déclarer `commercialRightsCleared: true` par déduction.

Après approbation, intégrer le guide dans le composant mutualisé et le registre, garder `approvedDestinationSlugs` vide et `noindex` ; exécuter TypeScript, catalogue 88, unicité/QA photographique, FR/EN, structured data, SSR et responsive. Ne demander **qu'une Preview Vercel coordonnée au terme du lot**, via le marqueur existant `[travel-batch-ready]` et jamais depuis ces commits de brouillon.

**Statut actuel : contenu éditorial initial rédigé, vérification iconographique NON commencée. Destination NON terminée. Production non modifiée.**


## Mise à jour de reprise — 30 octobre 2026, intégration technique

Cette section remplace les indications de brouillon « pas encore intégré » ci-dessus.

- **Krabi #61 est désormais intégrée sur la branche interne** dans `featuredCityGuides.ts`, `FeaturedCityGuide.tsx` et `TravelPages.tsx`. Les 88 slugs historiques sont maintenus. Routes prévues : `/travel/destinations/krabi`, `/en/travel/destinations/krabi`, `/travel/hotels/krabi` et `/en/travel/hotels/krabi`.
- **Guide bilingue** avec cinq secteurs, cinq expériences, quatre vraies maisons de luxe et huit FAQ FR/EN ; métadonnées, liens canoniques FR/EN, FAQ JSON-LD et filtres image communs.
- **21 photographies collectées**, dont neuf paysages Wikimedia Commons avec licence et 12 photos provenant des galeries officielles des quatre hôtels. Les 12 photos d’hôtels sont **uniquement pour revue privée**, avec droits commerciaux distincts non acquis. L’indexation reste interdite ; aucun inventaire ou tarif n’a été activé.
- **20/21 images contrôlées visuellement à ce stade**. Le paysage `scene-4` (Koh Kwang / Klong Muang) a été rejeté comme trop terne et reste techniquement masqué. Ne pas déclarer cette destination complète avant remplacement effectif.
- Une **planche de neuf alternatives exactes** est sauvegardée dans `docs/travel-krabi-klong-muang-contact-sheet.jpg`. Le visuel retenu est `Beach at Koh Kwang (4464119684).jpg`, © Caitriana Nicholson, **CC BY-SA 2.0**, véritable côte de Klong Muang, palmiers et mer. Le workflow GitHub `travel-krabi-final-photo.yml` a été soumis pour remplacer uniquement `scene-4.webp` sans toucher aux 20 autres photos. **La soumission n’est pas une preuve que le workflow a terminé.**
- Le test `scripts/check-krabi-draft.cjs` vérifie les 61 guides, les 88 slugs, la provenance et les hachages des 21 images, la structure bilingue, le refus de la scène non validée, les licences et la conservation du `noindex`. L’exécution GitHub Actions est sollicitée, mais une exécution en file d’attente n’est pas une réussite.
- La mise en page conserve le thème luxe existant, ajoute un hero texturé contrasté, deux vues paysagères et leurs crédits CC, sans créer un nouveau framework.
- **Aucun nouveau déploiement Vercel de Krabi autorisé avant le prochain lot complet** ; les tentatives de déploiement ordinaires de la branche apparaissent CANCELED comme prévu. Production `main`, CRM, immobilier, transferts et API hôtelières inchangés.

**Porte de sortie :** attendre le commit de remplacement réellement écrit, contrôler 21/21 images et la conclusion **SUCCESS** du workflow TypeScript. Seulement après, qualifier **Krabi terminée sur la branche interne**, sans confondre avec une mise en ligne Preview ou production.
