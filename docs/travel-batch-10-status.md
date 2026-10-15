# Bosphoras Luxury Stays — point d'avancement du lot de 10
**Actualisé le 15 octobre 2026 après intégration des dix guides en branche.** Branche `feature/luxury-travel-seo-destinations-20261012`, dépôt `cihancacan/bosphoras`.

## Couverture honnête
- **88 destinations** existent dans le catalogue principal ; ce nombre ne signifie pas 88 guides finis.
- **10 destinations** possèdent chacune un contenu éditorial FR/EN original, des zones de séjour, quatre adresses vérifiables, des conseils et des FAQ.
- **10 guides FR/EN intégrés techniquement sur la branche** : Mustique, Courchevel 1850, St. Moritz, Aspen, Niseko, Megève, Jackson Hole, Big Sky, Val d'Isère et Verbier.
- **Aucun des dix n'est approuvé pour publication finale** : droits de réutilisation et validation visuelle des médias à confirmer.
- **Garde photo stricte :** autorisation confirmée par le propriétaire du projet **et** photo visuellement contrôlée avant affichage ; les données structurées n'exposent pas d'image écartée.
- Aucun hôtel ne bénéficie d'une disponibilité de réservation garantie via Wink du seul fait d'être cité dans les guides.

## Sources photographiques : candidats téléchargés, pas droits validés

| Destination | Établissements | Photos hôtels | Scènes locales | Total WebP candidats | État |
|---|---:|---:|---:|---:|---|
| Mustique | 1 hôtel + 3 villas réelles | 12/12 | 9/9 | 21/21 | Intégré, droits/visuel à confirmer |
| Courchevel 1850 | 4 palaces | 12/12 | 9/9 | 21/21 | Intégré, droits/visuel à confirmer |
| St. Moritz | 4 hôtels | 12/12 | 9/9 | 21/21 | Intégré, alertes de photos |
| Aspen | 4 hôtels | 12/12 | 9/9 | 21/21 | Intégré, alertes de photos |
| Niseko | 4 hôtels | 12/12 | 9/9 | 21/21 | Intégré, alertes de photos |
| Megève | 4 hôtels | 9/12 | 7/9 | 16/21 | Intégré en branche, médias incomplets |
| Jackson Hole | 4 hôtels | 9/12 | 6/9 | 15/21 | Intégré en branche, médias incomplets |
| Big Sky | 4 hôtels | 8/12 | 5/9 | 13/21 | Intégré en branche, photos exclues |
| Val d'Isère | 4 hôtels | 12/12 | 5/9 | 17/21 | Intégré en branche, saisons à vérifier |
| Verbier | 4 hôtels | 12/12 | 3/9 | 15/21 | Intégré en branche, doublon exclu |
| **Total** | | **110/120** | **71/90** | **181/210** | **29 dossiers photo encore manquants, tous droits/visuels à contrôler** |

**Droits d'utilisation confirmés par l'exploitant Bosphoras le 15 octobre 2026.** 83 clichés des huit guides alpins ont ensuite passé une première revue visuelle sur planches photo ; les autres restent hors affichage. Les **181 fichiers candidats** ne sont **pas 181 photographies toutes visuellement approuvées**. Certains fichiers téléchargés ont une alerte qui les exclut de l'affichage envisagé. L'ensemble doit encore passer une revue d'identité, de qualité esthétique, de provenance et des droits d'utilisation commerciale.

## Où contrôler les galeries
- Première collection : `docs/travel-alpine-photo-review-index.md` (St. Moritz, Aspen, Niseko).
- Sous-lot montagne : `docs/travel-mountain-photo-review-index.md` (Megève, Jackson Hole, Big Sky).
- Dernières destinations : `docs/travel-final-two-photo-review-index.md` (Val d'Isère, Verbier).
- Revue des clichés rejetés : `docs/travel-alpine-first-visual-review.md` et `docs/travel-mountain-editorial-blockers.md`.

## Prochaine phase bloquante avant Preview
1. Compléter les 29 photographies manquantes en respectant l'hôtel et le lieu précis ; remplacer les clichés sources inaptes.
2. Contrôler **chaque** droit de réutilisation et attribution, particulièrement galeries propriétaires et licences CC BY-SA.
3. Vérifier visuellement chaque image, créer des légendes FR/EN fidèles et supprimer les doublons; seule une photo réellement approuvée peut apparaître.
4. **Terminé sur la branche :** les cinq derniers guides sont raccordés au site, aux FAQ et aux schémas SEO Article/ItemList/FAQPage. Leurs médias non validés sont masqués et les pages restent `noindex`.
5. **Contrôles GitHub validés :** TypeScript, intégrité des 88 destinations et des dix guides (run 38747492834). Il reste la QA photographique et juridique avant **une unique Preview Vercel** ; production et services immobiliers inchangés.

**Économie Vercel :** les commits de la branche ont été ignorés pour les builds complets ; un statut Vercel `CANCELED` ne signifie pas un build payant terminé.

## Blocages média détaillés du premier lot

| Destination | Photos hôtels absentes | Scènes locales absentes | Total |
|---|---|---|---:|
| Megève | Four Seasons ×3 | Cote 2000 ; Megève l'été | 5 |
| Jackson Hole | Four Seasons ×3 | Faune ; chalets enneigés ; rue western | 6 |
| Big Sky | One&Only Moonlight Basin ×3 ; Summit Hotel ×1 | Ski nordique ; équitation ; forêt ; chalet d'hiver | 8 |
| Val d'Isère | Aucune | Bellevarde ; Laisinant ; Manchet ; Prariond | 4 |
| Verbier | Aucune | Place Blanche ; Place Centrale ; Savoleyres ; Les Esserts ; Les Creux ; après-ski | 6 |
| **Total** | **10** | **19** | **29** |

Les 29 fichiers manquants ne comprennent pas les images déjà téléchargées mais jugées peu pertinentes ou géographiquement douteuses.

Les dix pages disposent maintenant d'une structure FR/EN sur la branche, avec FAQ. Les huit guides alpins récents ne présentent aucune image tant que les deux approbations photo requises ne sont pas explicitement confirmées. Les deux autres guides (Mustique et Courchevel 1850) restent aussi soumis à vérification finale.

Contrôles réussis : https://github.com/cihancacan/bosphoras/actions/runs/38747492834

**Pas de lancement Preview :** ne jamais ajouter le marqueur [travel-batch-ready] tant que les dix destinations n'ont pas passé la QA photographique et juridique.

## Revue photographique concrète — 15 octobre 2026

Le propriétaire du projet a confirmé disposer des droits d'utilisation des photographies. Cette affirmation est consignée dans chaque manifeste média (`ownerRightsAuthorization`) et les crédits et liens de source sont préservés. Les contrôles restants portent sur la **correspondance réelle hôtel/photo, le cadrage, la saison et l'absence de doublons**, pas sur une nouvelle demande d'autorisation utilisateur.

**83 images des huit nouvelles destinations ont passé une première revue visuelle manuelle** : St. Moritz 10, Aspen 16, Niseko 11, Megève 8, Jackson Hole 11, Big Sky 8, Val d'Isère 10, Verbier 9. Ces images sont proposées seulement dans la branche de travail ; toutes les pages sont toujours noindex et non déployées.

Problèmes concrets exclus : carte de crédit Marriott Bonvoy/Visa abusivement associée à W Verbier, photos identiques de plusieurs hôtels, vue à travers un train présentée comme Experimental Chalet, clichés de montagnes associés incorrectement à un hôtel, vues estivales annoncées comme hivernales, intérieur d'église décrit comme une place de village.

Pour les 29 emplacements encore vides, certaines galeries officielles Four Seasons renvoient **403 Forbidden** aux robots de téléchargement ; la médiathèque One&Only exige également une méthode d'accès différente. **Ne pas contourner ces protections.** Si les photos officielles autorisées sont fournies directement, elles pourront être intégrées sans changer les adresses ni les textes. Les planches de contrôle sont disponibles dans `docs/travel-photo-contact-sheets/README.md`.
