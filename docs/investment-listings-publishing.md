# Bosphoras Investment — Mise en ligne d'une annonce

## Entreprise
1. Ouvrir l'espace Entrepreneur, créer un dossier et enregistrer le descriptif de l'entreprise.
2. Sous « Documents », sélectionner le dossier puis déposer les photos dans « Photos et identité visuelle » : couverture, logo, galerie.
3. Formats JPG, PNG ou WebP (10 Mo max/image). Les fichiers reçus restent privés dans le coffre entrepreneur.
4. Les pièces comptables et PDF sont gérées séparément dans le coffre documentaire privé.

## Administration Investment
1. Connecté avec un compte admin actif, ouvrir /investissement/admin, puis « Annonces & projets ».
2. Choisir AQMA, Cliniqeo, Medsestra.kz, LoveLockParis, Qenerzy ou Bosphoras Luxury Stays.
3. Onglet « Présentation » : saisir le titre, accroche, description courte et longue, arguments, secteur, localisation, société porteuse (FR et EN).
4. Onglet « Financement » : saisir le montant cible, ticket minimum, type d'instrument, devise, durée, taux éventuellement contractuel, premier paiement, fréquence, sortie, usage des fonds et risques.
5. Onglet « Photos et médias » : importer directement une image ou examiner les photos proposées depuis les comptes entrepreneurs. Sélectionner la destination, approuver les photos autorisées, désigner la couverture et ordonner la galerie.
6. Sauvegarder puis, dans « Publication », contrôler toutes les informations et cliquer « Publier ». **Les fiches de projet existantes restent visibles sous leur présentation éditoriale avant cette action, mais aucun montant ni taux de financement non validé n'est affiché.**
7. Cliquer « Retirer de la publication » pour masquer immédiatement les conditions financières et revenir à la vitrine éditoriale, tout en conservant le dossier administratif.
8. Les liens « Voir le projet », « Demander un placement » et « Demander accès » renvoient aux formulaires/CRM Investment existants.

## AQMA
Le brouillon administratif AQMA a été prérempli avec les hypothèses communiquées : objectif 150 000 EUR, ticket 1 000 EUR, taux proposé 10 % annuel, durée 36 mois, premier versement envisagé au sixième mois et affectation marketing Île-de-France. Aucune publication de ces conditions n'a été effectuée ; la fréquence et les modalités exactes de remboursement doivent être confirmées.

## Notes d'exploitation
- Les images proposées par un entrepreneur nécessitent une validation admin. Les documents originaux restent dans le bucket privé.
- La version publique copie uniquement une image approuvée vers un bucket média distinct. Il faut disposer des droits de reproduction.
- Les opérations financières sont uniquement des présentations et demandes d'intérêt. Le module n'exécute pas d'ordres et ne collecte pas de fonds.
- Les projets actuellement enregistrés sont les six opportunités existantes. L'ajout autonome de nouveaux projets hors catalogue nécessitera une extension des clés métier et des routes.
- **Ne pas contourner l'alerte « site trompeur » sur les domaines temporaires Vercel.** Corriger la classification de sécurité et configurer un sous-domaine officiel sûr avant de tester des connexions réelles.
- Tests restants : parcours complet navigateur connecté entrepreneur -> image -> admin -> publication -> fiche publique, sécurité des fichiers et du domaine, validation de production. Le build Vercel seul ne remplace pas ces tests.
