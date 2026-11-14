# Bosphoras Investment — Portail opérationnel

## Accès
- Investisseur FR : /investissement/acces/investisseur et /investissement/espace/investisseur
- Entrepreneur FR : /investissement/acces/entrepreneur et /investissement/espace/entrepreneur
- Administration distincte : /investissement/admin (compte admin Bosphoras actif)
- Formulaires de demande directe sans compte : /investissement/demande/<code-projet> (également /en/investment/request/<code>)
- CRM des demandes reçues et financements confirmés : tables `investment_leads`, `investment_positions`, `investment_payments`, `investment_documents`, `investment_crm_notes`, `investment_crm_tasks`

## Flux
1. Depuis chaque fiche publique, l'investisseur indique le projet, montant envisagé et coordonnées. Formulaire public non contraignant, insertion immédiate dans le CRM et notification par le circuit e-mail existant quand configuré.
2. L'admin accède à la demande dans « CRM demandes », ajoute les notes, crée des relances, prépare un e-mail de transmission au destinataire compétent puis consigne le statut « Transmise » après l'envoi réel.
3. L'entrepreneur crée un dossier, saisit le modèle économique, charge ses justificatifs dans un bucket privé, demande une étude. L'admin peut voir le dossier et les documents avec statut.
4. Un investissement n'est inscrit dans `investment_positions` **qu'après confirmation réelle** par un opérateur et ajout manuel de la référence de transaction. Les positions de démonstration ne sont jamais stockées dans le registre.
5. Une échéance est créée dans `investment_payments` par l'admin. Le statut « paid » exige date et confirmation d'exécution. Le tableau de bord distingue revenus encaissés et échéances futures.

## Sécurité / exploitation
- Auth Supabase existante, rôles distincts. L'admin actif dans `profiles` est autorisé par les RLS et peut voir les deux espaces en lecture/démonstration.
- Documents dans `storage.buckets: investment-dossiers`, bucket privé, liste MIME, limite 15 Mo. Téléchargement par URL signée 60 secondes et politiques storage RLS.
- Seuls les admins écrivent dans positions, paiements, tâches, journal CRM et changement de statut; les investisseurs ne peuvent pas créer de fausses participations.
- E-mails clients envoyés via /api/forms quand configuration SMTP active, mais la création CRM n'en dépend pas. Sans SMTP, le CRM conserve la demande, à traiter manuellement.
- Le CRM affiche 500 dernières lignes / table (1 000 paiements); ajouter pagination serveur pour production à forte volumétrie.
- Le système n'effectue ni paiement, ni KYC/AML, ni souscription, ni distribution de titres. Avant l'ouverture de ces fonctions, connecter un opérateur financier habilité et prévoir import/synchronisation vérifiables.
- Les fichiers reçus n'ont pas d'analyse antivirus intégrée. Prévoir un scanner avant l'acceptation de documents sensibles et une procédure RGPD de suppression/conservation.
- Formulaire public : honeypot, validation des données, même origine, limitation sommaire à cinq demandes par e-mail/heure au niveau Postgres. Prévoir CAPTCHA/WAF/IP throttling et prévention des bots avant acquisition publicitaire à grande échelle.
- Accès Vercel Preview actuellement protégé par connexion Vercel (SSO), distinct de Bosphoras. Ne pas déployer en production sans QA navigateur et validation des accès.

## Tests QA avant activation commerciale
- Ouvrir deux vrais comptes de test distincts, un investisseur et un entrepreneur, dans le même environnement d'authentification.
- Tester insertion d'une demande publique non connectée, puis vérifier visibilité/admin et notification de messagerie.
- Tester navigation projet spécifique, redirection, localisation FR/EN, inscription email, connexion et déconnexion.
- Tester RLS : un utilisateur A ne doit pas lire le dossier, les fichiers ou les positions de l'utilisateur B; un visiteur anon ne doit pas lister les demandes CRM.
- Créer un dossier test, charger et télécharger un PDF non sensible, supprimer; vérifier accès admin et absence d'URL publique.
- Créer une position de test uniquement avec un compte test et une référence explicitement fictive en environnement de test, puis la retirer avant toute production publique; ne pas injecter de fausses données dans les vrais portefeuilles.
- Vérifier l'encaissement des flux uniquement en rapprochant les exports de l'opérateur avec les lignes du registre, ou importer automatiquement par API authentifiée lorsque disponible.
