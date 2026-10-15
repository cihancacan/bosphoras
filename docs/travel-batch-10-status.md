# Bosphoras Luxury Stays — point d'avancement du lot de 10
**Actualisé le 15 octobre 2026.** Branche `feature/luxury-travel-seo-destinations-20261012`, dépôt `cihancacan/bosphoras`.

## Couverture honnête
- **88 destinations** existent dans le catalogue principal ; ce nombre ne signifie pas 88 guides finis.
- **10 destinations** possèdent chacune un contenu éditorial FR/EN original, des zones de séjour, quatre adresses vérifiables, des conseils et des FAQ.
- **2 guides techniquement préparés** : Mustique et Courchevel 1850.
- **3 autres guides intégrés sur la branche** : St. Moritz, Aspen, Niseko, avec photos à masquer si identité/qualité incertaine.
- **5 guides en brouillon, pas encore enregistrés comme pages premium prêtes** : Megève, Jackson Hole, Big Sky, Val d'Isère, Verbier.
- Aucun hôtel ne bénéficie d'une disponibilité de réservation garantie via Wink du seul fait d'être cité dans les guides.

## Sources photographiques : candidats téléchargés, pas droits validés

| Destination | Établissements | Photos hôtels | Scènes locales | Total WebP candidats | État |
|---|---:|---:|---:|---:|---|
| Mustique | 1 hôtel + 3 villas réelles | 12/12 | 9/9 | 21/21 | Intégré, droits/visuel à confirmer |
| Courchevel 1850 | 4 palaces | 12/12 | 9/9 | 21/21 | Intégré, droits/visuel à confirmer |
| St. Moritz | 4 hôtels | 12/12 | 9/9 | 21/21 | Intégré, alertes de photos |
| Aspen | 4 hôtels | 12/12 | 9/9 | 21/21 | Intégré, alertes de photos |
| Niseko | 4 hôtels | 12/12 | 9/9 | 21/21 | Intégré, alertes de photos |
| Megève | 4 hôtels | 9/12 | 7/9 | 16/21 | Brouillon, sources manquantes |
| Jackson Hole | 4 hôtels | 9/12 | 6/9 | 15/21 | Brouillon, sources manquantes |
| Big Sky | 4 hôtels | 8/12 | 5/9 | 13/21 | Brouillon, erreurs photo exclues |
| Val d'Isère | 4 hôtels | 12/12 | 5/9 | 17/21 | Brouillon, saisons à vérifier |
| Verbier | 4 hôtels | 12/12 | 3/9 | 15/21 | Brouillon, doublon Savoleyres exclu |
| **Total** | | **110/120** | **71/90** | **181/210** | **29 dossiers photo encore manquants, tous droits/visuels à contrôler** |

Les **181 fichiers candidats** ne sont **pas 181 photographies approuvées**. Certains fichiers téléchargés ont une alerte qui les exclut de l'affichage envisagé. L'ensemble doit encore passer une revue d'identité, de qualité esthétique, de provenance et des droits d'utilisation commerciale.

## Où contrôler les galeries
- Première collection : `docs/travel-alpine-photo-review-index.md` (St. Moritz, Aspen, Niseko).
- Sous-lot montagne : `docs/travel-mountain-photo-review-index.md` (Megève, Jackson Hole, Big Sky).
- Dernières destinations : `docs/travel-final-two-photo-review-index.md` (Val d'Isère, Verbier).
- Revue des clichés rejetés : `docs/travel-alpine-first-visual-review.md` et `docs/travel-mountain-editorial-blockers.md`.

## Prochaine phase bloquante avant Preview
1. Compléter les 29 photographies manquantes en respectant l'hôtel et le lieu précis ; remplacer les clichés sources inaptes.
2. Contrôler **chaque** droit de réutilisation et attribution, particulièrement galeries propriétaires et licences CC BY-SA.
3. Vérifier visuellement chaque image, créer des légendes FR/EN fidèles et supprimer les doublons; seule une photo réellement approuvée peut apparaître.
4. Intégrer les cinq brouillons aux pages premium avec FAQ, galeries, SEO Article/ItemList/FAQPage et robots noindex jusqu'à décision.
5. Lancer `npm run typecheck` et les scripts de cohérence, puis **une unique Preview Vercel** pour le lot de dix lorsque celui-ci est réellement prêt ; la production et les pages immobilières sont inchangées.

**Économie Vercel :** les commits de la branche ont été ignorés pour les builds complets ; un statut Vercel `CANCELED` ne signifie pas un build payant terminé.
