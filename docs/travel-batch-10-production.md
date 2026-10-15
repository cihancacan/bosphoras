# Bosphoras Luxury Stays — production éditoriale par lots de dix

## Règle de production
- Un **lot = exactement dix destinations nouvelles et réellement achevées**. Ne pas compter les 88 fiches du catalogue comme achevées.
- Recherche, rédaction FR et EN, géographie, identité hôtelière, vérification des propriétés, photographies et légendes originales : **destination par destination**.
- Travail et revue par **sous-lots de 2 à 3 destinations**. Ne jamais réduire le contenu ni copier les formulations pour atteindre le quota.
- Chaque photographie doit correspondre au site exact, avec son origine, crédit, statut WebP, état de la licence et une alt text factuelle. Toute photo non confirmée est masquée ; pas d'image générée présentée comme réelle.
- En cas de disponibilité photo insuffisante : marquer la destination **bloquée pour QA** ; la qualité prime sur le calendrier.
- Préserver tous les autres services Bosphoras (immobilier, transferts, CRM), les pages Travel précédentes et les 88 destinations listées.
- Aucun hébergement, prix, stock Wink, réservation, avis ou lien de paiement ne doit être inventé.

## Politique GitHub / Vercel
- Commits de développement sur `feature/luxury-travel-seo-destinations-20261012`, message ordinaire SANS marqueur de publication.
- GitHub Actions vérifie TypeScript, unicité des slugs, préservation du noindex et les fichiers de manifestes. Les imports WebP sont conservés avec leur provenance.
- Vercel a un **Ignored Build Step** de branche : les commits ordinaires de cette branche sautent la compilation. `main` et la production ne sont pas filtrés.
- **Un seul déploiement Preview au terme des dix destinations**, après QA approfondie : le seul commit d'autorisation portera `[travel-batch-ready]`. Vérifier l'absence de builds en cours et attendre le statut READY. Ne jamais publier en production automatiquement.
- Les dépôts GitHub, le typecheck et les imports photos **ne constituent pas un déploiement Vercel**. Un déploiement ignoré peut tout de même figurer dans le compteur Vercel.
- En cas d'échec QA, réparer les fichiers dans le même lot AVANT l'unique Preview ; si erreur de Preview finale, signaler l'exception sans multiplier les builds.

## Statut du lot ouvert
Commencé après Porto Cervo : Mustique (guide/galeries FR-EN) et Courchevel 1850 (guide/galeries FR-EN). Les huit prochaines destinations doivent suivre la feuille de route déjà décidée, être traitées par 2 ou 3 et ne seront considérées comme achevées qu'après examen individuel.

## Sécurité supplémentaire
- Si des sites protègent leur galerie (HTTP 403/429), utiliser des photos identifiées de cette propriété depuis des sources vérifiables ; ne jamais détourner les photos d’un autre hôtel.
- Les manifestes doivent consigner les téléchargements réussis ET les manquants ; le contrôle visuel et juridique reste indispensable, y compris après un résultat `downloaded`.

## Contrôle Courchevel 1850
- 4 hôtels réels × 3 photographies = 12 WebP ; 9 photographies de destination avec auteur/source consignés.
- Vérification technique GitHub complète avant toute Preview ; licences commerciales tierces toujours à confirmer avant publication publique.
- Vérifier les visuels par jugement éditorial humain avant la publication finale du lot de dix.

## Premier sous-lot (2 destinations)
- Mustique : un hôtel et trois villas (ne jamais les présenter comme quatre hôtels) ; photographies 12 + 9 ; images authentiques et provenance contrôlées techniquement.
- Courchevel 1850 : quatre palaces, cinq zones, descriptions et FAQ originales FR/EN ; photographies 12 + 9 ; réouverture Airelles le 04/12/2026 vérifiée auprès de la maison.
- QA de cohérence (types, manifestes, fichiers WebP physiques, routes, noindex) bloquant dans GitHub ; aucune Preview Vercel avant les huit autres destinations du lot.
- Statut juridique des photos tierces : *réutilisation commerciale indépendante à confirmer avant production*.

## Deuxième sous-lot — St. Moritz, Aspen, Niseko (15/10/2026)
- Brouillons originaux FR/EN, 5 secteurs, quatre établissements vérifiables et sept FAQ par langue, tests TypeScript et unicité des slugs.
- **63/63 photos WebP candidates** (12 adresses × 3 et 9 paysages par destination), avec planches de revue photographique dans `docs/travel-alpine-photo-review-index.md`.
- Premier examen visuel humain : plusieurs images peu premium ou mal adaptées à l'hébergement/la saison ; `docs/travel-alpine-first-visual-review.md` liste les remplacements exigés.
- Ces trois guides **ne sont pas comptés comme achevés** ni routés en pages premium. La validation juridique/visuelle et l'intégration demeurent des préalables. **Aucun build Vercel lancé.**

## Intégration en branche pour revue interne (15 octobre 2026)
- St. Moritz, Aspen et Niseko : guides éditoriaux distincts FR/EN intégrés au registre, FAQ et schémas Article / ItemList / FAQPage et métadonnées. Chaque guide décrit quatre adresses réellement identifiées et cinq secteurs locaux.
- 63/63 fichiers WebP sources conservés ; seules les photos **sans alerte éditoriale connue** sont proposées dans les galeries de la branche. Les images signalées (notamment la vue non-hôtelière de Setsu) restent masquées.
- **Ne pas compter ces trois destinations comme définitivement publiables** : audit détaillé des licences commerciales et vérification visuelle complète restent nécessaires. Les photos de galerie officielle ne sont pas nécessairement libres de réutilisation.
- TypeScript et garde noindex testés dans GitHub CI, sans déclencher de build Vercel. Uniquement une Preview Vercel quand les dix destinations auront passé la QA.
