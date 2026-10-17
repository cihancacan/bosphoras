# Contrôle final pré-Preview — Bosphoras Luxury Stays (17 octobre 2026)

**Périmètre :** dix destinations FR/EN, production et indexation inchangées. Les droits d'usage des images ont été confirmés par l'opérateur Bosphoras ; la source, le photographe et la licence restent attachés aux images.

## Quatre images vérifiées supplémentaires

- **stMoritz / destination / scene-1** : Lac de Saint-Moritz et village en automne, panorama sur l’Engadine. Paysage réel identifié dans la source Wikimedia ; saison automnale explicitement mentionnée.
- **stMoritz / destination / scene-6** : Celerina et les prairies de la vallée de l’Engadine en été. Photo ancienne authentique de Celerina ; cadrage paysage, saison estivale explicite.
- **megeve / destination / scene-7** : Front de neige du Mont d’Arbois à Megève, fin de saison hivernale. Image 2025 de Mont d'Arbois identifiée par le nom du fichier Commons; neige discontinue clairement mentionnée.
- **valDisere / airelles-val-disere / view-1** : Façade en bois et pierre de l’hôtel Airelles Val d’Isère, arrivée au front de neige. Façade officielle de l’hôtel, enseigne Airelles visible et lieu conforme à la page source.

## Six faux positifs explicitement rejetés

- stMoritz / kulm-hotel / view-3 : REJET VÉRIFIÉ : la photographie représente un portrait historique, pas une vue d'hôtel, chambre ou équipement. Ne pas afficher sur la fiche Kulm.
- bigSky / oneonly-moonlight / view-1 : REJET : fichier original désigné « mock_up_bedroom » ; il s'agit d'une représentation promotionnelle/conceptuelle, pas d'une chambre photographiée et vérifiée. Éviter de la présenter comme photo authentique.
- valDisere / airelles-val-disere / view-3 : REJET VÉRIFIÉ : panorama de Val d'Isère sans Airelles identifiable ; pourrait illustrer la destination mais ne doit pas être une photo d'hôtel.
- valDisere / le-k2-chogori / view-3 : REJET VÉRIFIÉ : photo d'un plat de restaurant seul. Ne constitue pas une troisième photographie de l'hôtel/suite demandée.
- verbier / experimental-chalet / view-1 : REJET VÉRIFIÉ : fenêtre d'un train flou, non identifiable comme Experimental Chalet Verbier.
- valDisere / destination / scene-5 : REJET VÉRIFIÉ : visuel de carte et d'itinéraire Le Laisinant/Le Fornet. Pour un bloc paysage, demander une photographie du hameau plutôt qu'une carte.

## Conditions Preview

- Les images signalées restent masquées dans les galeries et dans le JSON-LD (via `visuallyVerified`, `commercialRightsCleared` et `visualQaWarning`).
- Un titre, un WebP téléchargé ou une photo issue du site officiel ne prouvent pas à eux seuls que la scène correspond à l'établissement.
- Une Preview est un environnement **de contrôle**, pas une publication définitive. Les images écartées peuvent laisser des galeries plus courtes, c'est intentionnel.
- Vérifier les 10 routes FR et EN, leurs statuts HTTP et leurs contenus, avant de donner un feu vert à la production.
- Vérifier les appels Wink indépendamment : guides éditoriaux ne signifient ni prix, ni chambres disponibles.

## Chemins à tester

- /fr/travel/destinations/mustique
- /fr/travel/destinations/courchevel-1850
- /fr/travel/destinations/st-moritz
- /fr/travel/destinations/aspen
- /fr/travel/destinations/niseko
- /fr/travel/destinations/megeve
- /fr/travel/destinations/jackson-hole
- /fr/travel/destinations/big-sky
- /fr/travel/destinations/val-disere
- /fr/travel/destinations/verbier
