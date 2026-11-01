# Casa Maya Resort — examen visuel du 1 novembre 2026

**Anomalie prouvée :** `casa-1` utilisait `https://casamayaresort.vn/wp-content/uploads/2025/11/trang-chu-163.jpg`. En téléchargeant réellement l'image et en l'affichant avec les deux autres, on constate un pictogramme 3D de globe/valise sur fond noir ; il ne représente absolument pas la propriété. Les autres images `trang-chu-163-1/-2/-3` également téléchargées étaient des montages de voyage et ont été rejetées.

**Photo approuvée pour Preview privée à la place :** `https://phetravel.com/uploads/khach-san-casa-maya-ninh-thuan-be-boi-2.jpg.webp`, source `https://phetravel.com/khach-san-casa-maya-vi-tri-tien-ich-kinh-nghiem-dat-phong-don-vi-uy-tin`. L'image a été téléchargée et inspectée : façade blanche du véritable Casa Maya avec nom sur la devanture et piscine au premier plan, lumière du jour. **Photo tiers dont la licence de republication commerciale doit encore être obtenue.**

**Autres photos conservées :** `casa-2`, vraie chambre familiale vue mer ; `casa-3`, vraie chambre Deluxe double vue mer. Toutes deux visibles sur la page de catégories `https://casamayaresort.vn/khach-san`.

**Correction supplémentaire :** deux vues Swiss-Belvillas génériques remplacées par les vraies pièces des villas Garden/Lake View ; la photo de groupe en bateau de `vinhhy-3` remplacée par une vraie chambre Deluxe, après contrôle visuel des quatre nouvelles photos.

## Critères d'acceptation
- Aucun globe, valise, stock, collage, hôtel différent ou excursion en mer sous une carte d'hôtel.
- 12/12 photos hôtelières de Vĩnh Hy Bay visualisées et classées ; galeries de 3 vues exactes par établissement.
- Garde-fou fail-closed : composants n'affichent que photos `visuallyVerified && previewVisualApproved`, test anti-regression Casa Maya + contrôle 21 identités uniques.
- Images publisher limitées à l'aperçu Vercel non indexé ; pas de déploiement production.

## Restant avant mise en production
- Droits de la photo tierce Casa Maya et de toutes photos hôtelières.
- Résolution des images Amanoi et Vinh Hy de moyenne qualité à améliorer pour les grands écrans.
- Revue artistique séparée des neuf paysages locaux, puis décision globale de publication.
