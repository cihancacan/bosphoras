# Bosphoras Luxury Stays · Chiang Mai #64 — dossier de sources

30 octobre 2026 · Branche `feature/luxury-travel-seo-destinations-20261012` · revue privée.

## Éditorial premium FR/EN

Le catalogue de **88 destinations** et les **63 guides antérieurs** ne doivent pas être modifiés ou supprimés. Chiang Mai est la première destination non enrichie. Le guide distingue cinq secteurs réels : vieille ville, Wat Gate, Chang Khlan et le Ping en ville, Mae Rim côté rivière, Mae Rim côté rizières. Doi Suthep est une excursion de montagne, pas une « chambre avec vue » promise. Le contenu ne doit pas confondre Mae Rim et le centre.

Quatre hôtels vérifiés à leurs sources officielles :

- **137 Pillars House**, maison historique restaurée à Wat Gate ; 30 suites. La piscine privée ne doit être promise qu'à la catégorie réelle Louis Leonowens, pas à toutes les chambres. https://137pillarshotels.com/en/chiangmai/ ; détails https://137pillarshotels.com/en/chiangmai/about/
- **Anantara Chiang Mai Resort**, rive urbaine du Ping à Chang Khlan ; chambres, suites et appartements/suites avec services distincts, piscine du resort commune ; maison patrimoniale et expériences fluviales selon conditions. https://www.anantara.com/en/chiang-mai
- **Raya Heritage**, refuge de 38 suites près du Ping à Mae Rim ; la Kraam Pool Suite a un véritable bassin de 3×7 m, contrairement aux autres catégories. L'établissement indique **ne pas accueillir les enfants de moins de 6 ans**. https://www.rayaheritage.com/en/ ; https://www.rayaheritage.com/en/accommodation.php ; https://www.rayaheritage.com/en/kramm-pool-suite.php
- **Four Seasons Resort Chiang Mai**, Mae Rim au milieu des rizières ; pavillons et villas à piscine distinctes, cooking school et spa ; paysage des champs soumis au cycle agricole. https://www.fourseasons.com/chiangmai/

La saison de fumées/particules fines de **février à avril**, souvent plus sévère en mars, fait partie du conseil sérieux. La visibilité depuis Doi Suthep n'est pas garantie : https://www.lonelyplanet.com/articles/best-time-to-visit-chiang-mai .

## Réalisations

- `data/travel/chiangMaiDraftGuide.ts` : article original long FR/EN, 4 hôtels réels, 5 secteurs détaillés, 5 expériences, conseils saisonniers et restrictions familiales.
- `data/travel/chiangMaiDraftFaq.ts` : 8 FAQ propres à chaque langue.
- `scripts/collect-chiang-mai-media.py` et workflow `.github/workflows/travel-chiang-mai-media.yml` : recherche d'authentiques scènes de Chiang Mai sur Wikimedia Commons (licence + auteur + source) et photos des quatre éditeurs hôteliers ; téléchargement WebP, empreintes, planche de revue visuelle et manifeste.
- Cible **9 paysages et 12 photos d'hôtels**, chacun unique, vérifié pour le bon hôtel ou lieu. Écarter les logos, photos génériques, images d'hôtels du mauvais pays, doublons, clichés sans droits identifiés.
- Les photos des sites officiels ne confèrent **aucune licence de republication commerciale**. Leurs éventuels fichiers restent en Preview privée et `noindex`, hors données structurées accessibles publiquement tant qu'un accord distinct n'est pas obtenu.

## Porte de publication

Ne qualifier Chiang Mai de destination complète que lorsque la collection comporte 21 vraies photos contrôlées et légendées FR/EN, que les galeries/FAQ/metadata sont intégrées aux composants partagés, que les 88 slugs et 63 guides historiques sont intacts, que TypeScript et les tests sont réussis et qu'un déploiement Vercel Preview est confirmé READY. Ne jamais promouvoir en production ni promettre inventaire hôtelier ou SAV de réservation non connecté.
