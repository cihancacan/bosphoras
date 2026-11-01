# Bosphoras Luxury Stays — standard obligatoire de validation des photographies

Édition : 1 novembre 2026. **La présence d’une photo sur le site officiel n’est pas une validation visuelle.** Le contrôle automatique des URL, de leur taille et de leur hash ne remplace pas l’examen de ce que montre réellement le fichier.

## Avant de valider chaque photo d’hôtel

1. **Télécharger et regarder la photo elle-même**, dans une planche-contact légendée, pas seulement lire son URL, son `alt` ou sa légende. Une photo non ouverte visuellement est `visuallyVerified=false`.
2. **Authentifier le bon hôtel** : chambre de l’établissement et de la catégorie exacte, façade identifiable, vraie piscine, jardin, spa ou espace réel de la propriété. Confirmer les liens source/identité. Une vue générale de destination n’est pas une photo de l’hôtel.
3. **Écarter systématiquement** les pictogrammes de voyage, globe, valise, carte touristique, affiche promotionnelle, collage, rendu 3D non identifié comme tel, chambre d’un hôtel différent, groupe sur bateau, plat isolé, photo générique de stock, vue historique hors contexte. Les photos d’excursion vont dans la rubrique expériences, jamais dans la galerie d’un hôtel.
4. **Choix esthétique** : trois angles différents au maximum par établissement ; privilégier vraie façade/piscine, belle chambre ou villa, jardin/spa authentique. Lumière naturelle lisible, sujet net, proportions adaptées. Pas de répétition, cadrage trompeur ni visuel uniquement décoratif.
5. **Qualité technique** : contrôler résolution d’origine, chargement HTTP, crop réel, hash SHA-256 et empreinte de pixels. Une image très basse résolution doit être réservée à une vignette ou remplacée avant publication publique.
6. **Traçabilité et droits** : URL originale, page source, auteur/crédit, hôtel exact, légende FR/EN, date de revue, droits, distinction entre validation visuelle privée et réutilisation commerciale. Un accord avec un établissement ne saurait être inventé.
7. **Ne jamais approuver silencieusement** : marquer `previewVisualApproved=true` uniquement après la revue de l’image réelle ; maintenir `publicUseApproved=false` jusqu’à validation distincte des licences, identité, résolution et autorisations.
8. **QA de régression** : vérifier 3 photos individuelles maximum par hôtel, aucun doublon de SHA/pixels, indexation inchangée, contrôle FR/EN et aperçu Vercel avant toute livraison.

## Correctif du 1 novembre 2026 · Vĩnh Hy Bay

Planche-contact des 12 photos hôtelières effectivement examinées. Quatre photos modifiées :
- `casa-1` : **rejet** de `trang-chu-163.jpg`, un globe et une valise illustrés bien que présents sur le domaine officiel. **Remplacé** par vraie façade et piscine Casa Maya, avec enseigne visible, source PheTravel créditée ; droits tiers non validés.
- `swiss-1` : photo générique de paysage marin remplacée par le vrai salon de Garden Villa.
- `swiss-2` : pelouse/parcours de golf peu représentatif remplacé par le vrai salon-cuisine d’une villa Lake View trois chambres.
- `vinhhy-3` : groupe en excursion en bateau remplacé par la vraie chambre Deluxe de Vinh Hy Resort.

Les 12 **photos hôtelières** ont été examinées visuellement. Les neuf paysages de destination conservent leur statut séparé de revue et les droits de republication commerciale de photos d'hôtel restent non confirmés ; **Preview privée non indexée uniquement**. Des sources Amanoi/Vinh Hy ont une définition modeste et restent à améliorer avant une mise en ligne publique.
