# Corrections image demandées — statut réel (17 octobre 2026)

La liste ci-dessous reprend les demandes de contrôle visualisées en Preview. **L'autorisation d'utilisation des photos est confirmée par l'exploitant.** La sélection reste basée sur l'identité de l'hôtel, la qualité, la localisation et la non-répétition des images.

## Corrections effectivement intégrées sur la branche

- **Mustique, Lagoon Bay et chemins de l'île** : l'illustration de tortue (non photographique) est remplacée dans la carte du secteur par une **vraie photographie aérienne des criques et du littoral de Mustique** déjà présente dans `island-6.webp` et sourcée sur le site officiel. La légende indique explicitement que la baie exacte n'est pas certifiée (ne pas déclarer Lagoon Bay précis sans preuve).
- **St. Moritz, zone 3 / Suvretta** : ouverture de la photographie de paysage `scene-4` (véritable Via Suvretta).
- **St. Moritz, zone 5 / Pontresina** : ouverture de `scene-7` (panorama du village / paysage d'été), localisation documentaire correspondante.
- **Niseko, Kutchan / arrivée et logistique** : `scene-6` validée ; photo **de la gare de Kutchan**, pas d'un paysage skiable.
- **Aspen, St. Regis** : vue extérieure authentique `view-1` utilisable en tant que **photo estivale**, pas une scène hivernale.
- **Niseko, Ritz-Carlton Reserve** : `view-2` bloquée car trop proche de `view-1` (éviter un faux second cliché).

## Images encore à finaliser, sans tricher sur l'identité du sujet

### St. Moritz
- Paysages zones 1 (vieux village) et 2 (St. Moritz Bad) : fichiers actuellement historiques / bâtiment, qualité insuffisante pour un panorama luxe.
- Kulm Hotel : deux photos additionnelles réellement distinctes de l'établissement ; entrée banale et pelouse restent masquées.

### Aspen et Niseko
- Hotel Jerome : 1 photo réellement liée à l'hôtel, pas une télécabine.
- Ritz-Carlton Reserve : 1 photo unique de chambre / salon, pas un second recadrage du lobby.
- Setsu Niseko : 2 images immobilières de l'établissement ; paysage Yōtei et soin de visage ne doivent pas servir de chambres.

### Megève / Jackson Hole / Big Sky / Val d'Isère / Verbier
- Conserver le détail de la demande originale : Megève hôtels 2/3/4 et paysages 1/4/5 ; The Wort 2, Hotel Jackson 1, paysages Jackson 1/5 ; Montage 2, One&Only 1, paysages Big Sky 2/3/4/5 ; Airelles 2, K2 Chogori 1, La Mourra 1, Blizzard 2, paysages Val d'Isère 3/4 ; W Verbier 2, Chalet d'Adrien 1, Experimental Chalet 2, Médran 1.
- En priorité choisir une **photo du bon hôtel**, physiquement distincte, et des **photos de lieux correctement identifiés**, sans affichage automatique des doublons.
- Ne pas forcer `visuallyVerified=true` pour un visuel incorrect, même avec droits d'utilisation.

## Consignes de publication

Ce lot reste **sur la branche de travail**, `main` / production non touchés. Confirmer les tests de cohérence avant une nouvelle Preview Vercel, et ne pas marquer les zones incomplètes comme terminées.
