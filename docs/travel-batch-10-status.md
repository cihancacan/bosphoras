# Bosphoras Luxury Stays — lot des dix destinations

**État au 15 octobre 2026 : un seul déploiement Preview Vercel demandé pour la vérification visuelle finale, production inchangée.**

## Livraison technique

- **10 guides destination FR/EN intégrés** : Mustique ; Courchevel 1850 ; St. Moritz ; Aspen ; Niseko ; Megève ; Jackson Hole ; Big Sky ; Val d'Isère ; Verbier.
- Les **88 entrées de destination** du catalogue principal sont préservées. Huit nouveaux guides alpins contiennent quatre vrais hôtels chacun ; Mustique distingue son hôtel et ses villas.
- Chaque guide a des secteurs réellement différenciés, des descriptions hôtelières propres à chaque adresse, des expériences, des conseils et des FAQ FR/EN.
- **210 fichiers WebP candidats présents physiquement sur 210 emplacements prévus** : 12 images par hébergement et 9 vues locales *par destination* — soit **3 par adresse et 9 par destination**. Le nombre de fichiers ne certifie pas leur qualité.
- **155 photographies des huit nouveaux guides alpins ont été inspectées et sont autorisées pour leurs galeries internes**. Tous les guides alpins ont deux images d'en-tête approuvées et au moins une image valide de chacun des quatre hôtels. Les images mal attribuées, publicités Marriott, photographies en doublon ou hors sujet restent masquées. Les 42 fichiers préexistants Mustique et Courchevel conservent leur propre validation éditoriale/visuelle à confirmer avant publication grand public.
- Les droits d'utilisation ont été **confirmés par l'exploitant Bosphoras** le 15 octobre 2026 ; source et attribution de chaque photo restent documentées dans les manifestes.
- Le **Laisinant** contient encore un visuel de carte, et non une photographie de paysage : son avertissement QA bloque explicitement son affichage tant qu'une vue réellement pertinente n'est pas sélectionnée.

## Sécurité et référencement

- Robots **noindex** tant que le contenu n'est pas officiellement approuvé pour le référencement ; `approvedDestinationSlugs` et `approvedCategorySlugs` restent vides.
- Aucun stock, tarif, disponibilité Wink ou lien de réservation fictif n'est annoncé pour les établissements sélectionnés.
- Les fichiers sans validation visuelle n'apparaissent ni dans les galeries finales de la branche ni dans l'image JSON-LD correspondante.
- Production `main`, immobilier, transferts, CRM, API Wink et secrets Vercel non modifiés par ce lot.
- Le contrôle de branche interdit une Preview si une destination manque de photos authentiques ou utilise un en-tête non validé.

## Vérifications CI réalisées

- `npm run typecheck` : **OK**.
- `node scripts/check-travel-catalogue.mjs` : **OK** (catalogue 88 préservé).
- `node scripts/check-next-alpine-drafts.mjs` : **OK**.
- `node scripts/check-third-alpine-drafts.mjs` : **OK**.
- `node scripts/check-mountain-ten-batch-drafts.mjs` : **OK**.
- `node scripts/check-travel-batch-preview.mjs` : **OK** (210 sources, images d'en-tête, 4 hôtels/guide, noindex).
- Workflow GitHub : https://github.com/cihancacan/bosphoras/actions/runs/38760666112

## Contrôle visuel

- Contact sheets des huit destinations alpines : [galeries de contrôle](travel-photo-contact-sheets/README.md).
- Sources, crédits et statuts photographiques : `data/travel/*MediaCandidates.json`.
- Les photographies signalées sont exclues ; ne pas activer `visuallyVerified` globalement.
- **Une seule Preview Vercel** pour vérifier le rendu réel, les galeries, l'UX responsive et le SEO avant toute décision de publication. Cette Preview est distincte de la production et ne vaut pas autorisation d'indexer le contenu.
- Pour la mise en production et l'indexation future : corriger les images exclues et éventuellement enrichir les galeries les plus légères, contrôler visuellement la Preview et vérifier la disponibilité Wink par fournisseur.

## Correctif de prévisualisation — 16 octobre 2026

Le premier déploiement Preview avait l'état Vercel `READY`, **mais les pages avaient des erreurs SSR** `TypeError: Cannot read properties of undefined (reading 'src')`. Le rendu échouait lorsqu'un guide référençait une scène d'en-tête ajoutée dans son manifeste plus tard que dans l'objet `Guide.ts`. Une Preview READY **n'est donc pas une preuve suffisante de bon fonctionnement**.

Correctifs appliqués :
- Ajout des nouvelles scènes réellement vérifiées aux métadonnées `Guide.ts`, notamment `scene-2` à Verbier et `scene-8` à Megève.
- `FeaturedCityGuide` : protection contre les références photos manquantes, sélection de repli parmi les photos réellement approuvées, sinon fond neutre.
- `TravelPages` : ne plus lire `.src` quand une photo d'en-tête est absente ; exclusion de son URL du JSON-LD.
- `scripts/check-travel-batch-preview.mjs` : contrôle systématique de la présence des scènes approuvées dans les pages, et des clés hero/secondary.
- CI TypeScript et qualité de l'ensemble des dix destinations : https://github.com/cihancacan/bosphoras/actions/runs/38875842252

**Une unique Preview de correction supplémentaire** est nécessaire parce que la première avait un défaut de rendu. Aucune publication en production, aucune activation de l'indexation et aucune modification des API Wink/immobilier/CRM.

## Corrections photographiques supplémentaires — 17 octobre 2026

Les corrections précises demandées après revue des dix pages sont consignées dans `docs/travel-image-corrections-2026-10-17.md`. La version précédente des planches et des captures Vercel peut contenir des doublons et visuels retirés ; la branche `feature/luxury-travel-seo-destinations-20261012` contient les nouvelles images, leurs sources et le blocage de publication des photos non approuvées.

**IMPORTANT** : les 210 fichiers WebP physiquement présents ne représentent pas 210 photographies toutes approuvées. Certains ont été remplacés, d'autres restent masqués. Le déploiement Vercel Preview le plus récent affichant les corrections du 17 octobre reste à préparer et tester ; production intacte.

## Préparation de la Preview unique — 17 octobre 2026

- **GitHub Actions** : typecheck, catalogue 88, huit guides alpins, 210 fichiers, héros, FAQ et filtrage photo tous OK après corrections. https://github.com/cihancacan/bosphoras/actions/runs/39028898847
- **155/168 photographies alpines approuvées visuellement**, **13 encore volontairement masquées** : hôtel ou secteur non identifiable, doublon, ancien visuel, mauvaise attribution ou présentation incompatible avec notre site de luxe. Les 42 photographies existantes de Mustique/Courchevel ne sont pas dans ce nombre.
- **Les dix destinations ont une page FR** située à `/travel/destinations/{slug}` et une page EN à `/en/travel/destinations/{slug}`. Pas de préfixe `/fr` en français.
- Les sources et les crédits des images restent conservés. Usage des photos autorisé par l'opérateur Bosphoras.
- **Preview seulement** : en attente de confirmation de statuts HTTP et de qualité SSR. La production reste inchangée, les pages `noindex`, les réservations Wink non inventées.
- Les clichés rejetés sont énumérés dans `docs/travel-final-preview-qa-2026-10-17.md`.

Déploiement autorisé par le commit dédié de Preview ; aucun nouveau build inutile ne doit être déclenché ensuite.
