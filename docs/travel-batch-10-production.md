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
