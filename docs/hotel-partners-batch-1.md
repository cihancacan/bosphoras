# Bosphoras Luxury Stays — lot fournisseurs 1

Décision du 27 octobre 2026 : Bosphoras reste un guide et un apporteur d’affaires. Aucun encaissement, contrat de vente de séjour ou SAV de séjour chez Bosphoras. Production interdite sans validation explicite.

## Architecture et périmètre

Projet existant Next.js 13 / App Router / React 18, routes françaises et anglaises. Branche `feature/luxury-travel-seo-destinations-20261012`, point de départ `8606c883233b6ce76e389295687c6260cc2e4fd7`. Projet Vercel `bosphoras`, équipe `cihans-projects-effb03c3`, identifiant `prj_ESIhl7acsPM8LTZgdAshCLScinKm`. La production inspectée vient de `main` ; elle reste inchangée.

Les hôtels, destinations, photographies et contenus SEO existants sont conservés. Les cartes Istanbul, fiches Istanbul et sélections des autres guides utilisent un bloc commun de redirection. Le registre `lib/travel/hotelPartners.ts` conserve chaque fournisseur en attente. Les liens officiels existants restent identifiés comme informations officielles, sans affiliation revendiquée.

Le registre n’accepte que le modèle `tracked-redirect` avec fournisseur marchand et six responsabilités explicitement validées : paiement, confirmation, modification, annulation, remboursement, support client. Une activation nécessite aussi identité du vendeur et contrat couvrant les six responsabilités pour chaque marque de réservation/annonceur, contrat réseau applicable, domaine exact autorisé, correspondance hôtel, lien profond testé, preuve d’attribution, conditions et contact SAV, date de vérification et échéance de revue. Aucun paramètre affilié n’est inventé ; l’URL fournie par le partenaire est conservée sans réécriture. Aucun appel de réservation, formulaire voyageur, prix ou disponibilité n’est ajouté.

## Wink existant

`lib/winkEnvironment.ts` sépare les hôtes et noms de variables staging/production sans repli de secrets. `lib/winkStaging.ts` et les routes `/api/wink/staging/*` servent au diagnostic. Les liens éventuels du laboratoire utilisent le moteur staging et sa personnalisation. Le document `docs/wink-production-readiness.md` décrit le contrôle du compte et du tracking restant à réaliser. Ces fichiers et les secrets sont préservés. Le nouveau registre ne réutilise ni leurs résultats de test ni leurs liens pour vendre des séjours.

La documentation publique [Wink affiliation](https://wink.travel/resources/hotel-affiliate-programs/) présente l’hôtel comme marchand. Elle ne prouve pas que le SAV est intégralement pris en charge pour le compte Bosphoras. Wink reste en attente, sans CTA commercial ajouté.

## Examen des partenaires et priorité

### Expedia Travel Creator Program — priorité affiliation

Le [programme officiel](https://creator.expediagroup.com/) fournit des liens et outils d’affiliation. Les [conditions du programme, §3 et §12](https://creator.expediagroup.com/lp/b/creator/termsandconditions?locale=en-us) encadrent l’admission, les sites autorisés et l’usage du contenu. Les [conditions voyageur, §4–6](https://www.expedia.com/lp/b/terms-of-service) placent paiement et gestion du séjour dans le parcours Expedia/fournisseur ; la partie ayant encaissé effectue le remboursement selon le tarif. Privilégier les liens vers Expedia, pas Rapid ni une réservation intégrée Bosphoras. Admission du site, liens de compte, marchés autorisés, commissions et attribution restent à vérifier. Aucune commission présumée.

### Travelpayouts — priorité affiliation, annonceur par annonceur

L’[accord public](https://support.travelpayouts.com/hc/en-us/articles/203956053-Travelpayouts-Affiliate-Agreement-The-public-offer), version affichée après le 8 janvier 2026, décrit l’acquisition de trafic, l’identifiant partenaire et les conditions propres aux annonceurs. Le réseau n’est pas à lui seul le fournisseur hôtelier. Retenir uniquement un annonceur hôtelier approuvé pour Bosphoras, avec réservation et SAV sur son site. Ne pas présumer qu’Expedia ou une autre marque est accessible via ce compte. Vérifier les restrictions de trafic, marchés, cookie, annulations, commissions et outils dans l’espace partenaire.

### Nuitée Connect — plateforme hébergée à qualifier

La [documentation de plateforme hébergée](https://docs.liteapi.travel/docs/whitelabel-booking-site) décrit les paiements et opérations gérés par Nuitée ainsi qu’un support voyageur par défaut. La [configuration](https://docs.liteapi.travel/docs/configuring-your-liteapi-powered-white-label-booking-site) permet de remplacer ce support : il faut conserver celui de Nuitée. Le [guide de revenus](https://docs.liteapi.travel/docs/revenue-management-and-commission) distingue Nuitée marchand du partenaire marchand. Ces modalités techniques ne constituent pas un contrat complet de délégation de SAV.

Les [conditions Connect du 12 septembre 2025](https://liteapi.travel/terms/) limitent notamment la réutilisation, le stockage et le rapprochement de données avec des sources tierces. Obtenir une autorisation écrite pour relier notre sélection éditoriale aux propriétés du fournisseur avant tout rapprochement de données. Exiger contrat identifiant le vendeur, Nuitée comme marchand, confirmation, modifications, annulations, remboursements et SAV direct voyageur. Préférer une redirection vers son domaine de réservation identifié ; ne pas déployer de paiement SDK ni d’OTA intégrée dans ce lot.

### RateHawk — affiliation hébergée à qualifier

La [page officielle d’affiliation](https://www.ratehawk.com/lp/en-us/travel-related-websites/) propose liens de référencement, widgets et parcours hébergés, avec support et traitement des paiements. La [présentation historique des outils](https://blog.ratehawk.com/tools-for-affiliates/) explique la redirection vers ZenHotels ; confirmer le parcours actuel pour le compte. Les [conditions voyageur ZenHotels](https://www.zenhotels.com/legal/order/agreement/eti/33/) prévoient gestion des demandes et remboursement sous conditions ; vérifier la version et l’entité du marché retenu. L’[API Affiliate ETG](https://docs.emergingtravel.com/docs/affiliate-api/) comprend aussi réservation et opérations après réservation : son nom ne suffit pas à garantir le modèle voulu. Demander le contrat d’affiliation par lien, sans dépôt, revente, encaissement ou SAV Bosphoras. Commissions à confirmer dans le compte.

## Accès et inscriptions à préparer

Aucun justificatif d’accès partenaire n’a été trouvé dans la recherche ciblée des e-mails connectés ; cela ne prouve pas qu’aucun compte n’existe. Aucune inscription, acceptation de conditions, demande commerciale envoyée ou réservation n’a été effectuée.

| Partenaire | Parcours | Éléments précis nécessaires |
| --- | --- | --- |
| Nuitée | https://connect.nuitee.com/register/ | Le formulaire consulté demande prénom, nom, e-mail professionnel, mot de passe et acceptation des conditions. Puis compte validé, URL hébergée réelle, entité vendeuse, contact SAV Nuitée conservé, contrat couvrant les six responsabilités, autorisation de rapprochement, liens hôtels et attribution. |
| Expedia | https://creator.expediagroup.com/ → Sign up | Identité/entité du bénéficiaire, adresse professionnelle, site Bosphoras déclaré, admission et marchés, conditions applicables du compte, liens générés par l’outil officiel et accès au reporting. |
| Travelpayouts | https://www.travelpayouts.com/ | Compte partenaire, projet Bosphoras, identifiant/marker réel, admission distincte des annonceurs hôteliers choisis, conditions annonceur, liens profonds générés et reporting clics. |
| RateHawk | Page officielle affiliation → Join affiliate partnership | Profil sites/services en ligne, entité et e-mail professionnels, contrat d’affiliation, accès aux outils, domaine de destination et identifiant réels, confirmation du SAV direct voyageur et reporting. |

Identité juridique, pays, adresse du siège et coordonnées professionnelles doivent venir du propriétaire. Les informations fiscales/bancaires et secrets sont saisis directement dans les espaces partenaires sécurisés. Ne jamais transmettre de mot de passe ou clé dans le chat ou le dépôt. L’acceptation des conditions lors d’une inscription nécessite validation de l’utilisateur au moment de l’action.

## Procédure d’activation par hôtel

1. Vérifier le contrat du compte et documenter qui assume chaque responsabilité, avec contact voyageur direct et conditions applicables au marché.
2. Générer un lien dans l’outil du compte. Vérifier identité/adresse de l’hôtel et domaine de réservation, sur ordinateur et mobile ; ne pas transformer une recherche de destination en lien d’hôtel.
3. Ouvrir le lien et contrôler toute la chaîne de redirections, sans paiement. Confirmer dans le reporting partenaire que le clic est attribué au compte Bosphoras ; conserver la preuve privée et ne committer qu’une référence non sensible.
4. S’assurer que le fournisseur délivre confirmation et accès aux demandes de modification/annulation/remboursement/SAV ; simulation uniquement si sandbox explicitement gratuit et sûr. Aucune réservation réelle sans instruction supplémentaire.
5. Enregistrer la marque de réservation, l’hôte exact, les références et dates. Mettre le fournisseur approuvé et ajouter seulement les liens qualifiés. Le CTA garde l’information d’affiliation et les liens conditions/SAV.
6. Tester localement, publier au plus une Preview regroupée et vérifier les pages FR/EN. Attendre validation explicite avant production.

## Limite du lot

Ce lot livre une infrastructure de redirection verrouillée par défaut. Il ne revendique aucun partenaire actif, aucune couverture commerciale, aucun prix, aucune disponibilité et aucune attribution prouvée en l’absence d’accès au compte concerné. Les références publiques éclairent le choix ; les contrats privés Bosphoras restent nécessaires pour activer.

## Raccordement à la branche actualisée

Le travail concurrent Turks and Caicos a été conservé intégralement : le lot est raccordé au commit `0b9dcd9f81bf85f68a710b69fb7b2dc22822e5bd`. La fusion de `FeaturedCityGuide.tsx` ne change que les imports, le bloc partenaire et la formulation du parcours de réservation.

## Contrôles du lot

- Sept tests de règles fournisseurs : responsabilités du réseau et de chaque vendeur, domaine exact HTTPS, correspondance hôtel, preuve de tracking et échéance, rendu FR/EN sans CTA non vérifié.
- Catalogue : 88 destinations, unicité et protections noindex conservées.
- SEO : contrôle réparé pour attendre le sitemap asynchrone et reconnaître ses routes immobilières dynamiques ; aucun contenu SEO modifié. Résultat local : 4 203 URL, 470 liens de langues, 129 redirections.
- Revue React et lint ciblé : aucune erreur ; deux avertissements préexistants sur les images externes des galeries.
- Une seule Preview sera déclenchée par le commit regroupé portant le marqueur existant `[travel-batch-ready]`. Aucun déploiement manuel supplémentaire, aucune promotion en production.
