import type { MainPageContent } from './types';

export const frPages: MainPageContent[] = [
  {
    id: 'home',
    locale: 'fr',
    slug: '/',
    title: 'Bosphoras — Bureau privé en Turquie | Bosphoras',
    h1: "Un bureau privé pour s'établir en Turquie, en toute discrétion",
    metaDescription:
      "Bosphoras accompagne familles, investisseurs et entrepreneurs internationaux dans leur installation en Turquie. Conseil sur mesure, réseau de confiance, discrétion absolue.",
    shortIntro:
      "Bosphoras est un bureau privé dédié aux clients internationaux qui envisagent de vivre, investir ou entreprendre en Turquie. Nous proposons un accompagnement sur mesure, structuré autour d'un réseau de confiance et d'une exigence absolue de discrétion. Chaque dossier est traité avec attention, sans promesse hâtive.",
    sections: [
      {
        heading: 'Un accompagnement pensé pour les profils exigeants',
        body: "Nous travaillons avec des familles, des entrepreneurs, des dirigeants et des investisseurs dont les projets en Turquie demandent rigueur, confidentialité et coordination internationale. Notre rôle consiste à clarifier vos options, sélectionner les bons partenaires, et veiller à ce que chaque étape avance avec méthode.",
        bullets: [
          "Cadrage personnalisé du projet d'installation ou d'investissement",
          "Coordination des avocats, fiscalistes et experts immobiliers du réseau",
          "Suivi confidentiel de bout en bout, avec un interlocuteur dédié",
        ],
      },
      {
        heading: 'Une approche fondée sur la discrétion et la prudence',
        body: "Nous ne promettons ni résidence, ni citoyenneté, ni rendement. Nous présentons les cadres légaux applicables, les délais réalistes et les conditions à remplir, puis nous vous mettons en relation avec les professionnels les mieux placés pour instruire votre dossier. La transparence est au cœur de notre relation.",
      },
      {
        heading: 'Istanbul, Bodrum, Antalya : des ancrages choisis',
        body: "Nos équipes connaissent finement les spécificités d'Istanbul, de Bodrum et d'Antalya. Quartiers, écoles, services de santé, environnement professionnel : nous partageons une lecture précise de chaque destination pour aider chaque famille à trouver le bon ancrage.",
      },
    ],
    faqs: [
      {
        question: "Bosphoras est-il un cabinet d'avocats ?",
        answer:
          "Non. Bosphoras est un bureau privé d'accompagnement. Nous coordonnons les démarches et mobilisons un réseau d'avocats, de fiscalistes et d'experts indépendants, chacun intervenant dans son champ de compétence réglementé.",
      },
      {
        question: "Pouvez-vous garantir l'obtention d'une résidence ou d'une citoyenneté ?",
        answer:
          "Aucune garantie ne peut être donnée sur ces sujets. Les autorités turques restent souveraines. Nous expliquons les voies possibles, les conditions et les risques, puis nous accompagnons les démarches avec sérieux.",
      },
      {
        question: 'Comment débute une relation avec Bosphoras ?',
        answer:
          "Par un diagnostic privé confidentiel. Nous écoutons votre situation, identifions vos priorités et vous indiquons honnêtement si nous sommes le bon interlocuteur pour votre projet.",
      },
    ],
    cta: { label: 'Demander un diagnostic privé', href: '/diagnostic-prive' },
    jsonLdType: 'WebSite',
    internalLinks: [
      { pageId: 'about', label: 'À propos de Bosphoras' },
      { pageId: 'services', label: "Découvrir l'accompagnement" },
      { pageId: 'private-assessment', label: 'Demander un diagnostic privé' },
    ],
  },
  {
    id: 'about',
    locale: 'fr',
    slug: '/a-propos',
    title: 'À propos — Bureau privé en Turquie | Bosphoras',
    h1: "Bosphoras, un bureau privé au service d'une clientèle internationale",
    metaDescription:
      "Découvrez la philosophie de Bosphoras : un bureau privé en Turquie qui place la discrétion, la prudence et le sur mesure au cœur de chaque accompagnement.",
    shortIntro:
      "Bosphoras a été pensé pour répondre aux attentes d'une clientèle internationale qui ne cherche pas un prestataire, mais un interlocuteur de confiance. Notre approche conjugue rigueur juridique, sensibilité culturelle et discrétion. Nous travaillons en cercle restreint, au plus près de chaque dossier.",
    sections: [
      {
        heading: 'Notre vocation',
        body: "Faciliter la vie en Turquie pour les familles et les dirigeants étrangers, sans simplifier à outrance. Chaque pays a ses subtilités ; chaque profil a ses contraintes. Notre travail consiste à composer des solutions adaptées, en s'appuyant sur des partenaires éprouvés.",
      },
      {
        heading: 'Nos valeurs',
        body: "Nous défendons une posture conservatrice : conseiller plutôt que vendre, expliquer plutôt que promettre, documenter plutôt qu'improviser. La confidentialité est une exigence absolue ; la conformité, un préalable.",
        bullets: [
          'Discrétion : aucune communication publique sur les dossiers traités',
          'Prudence : aucune promesse hors du cadre légal applicable',
          'Sur mesure : chaque accompagnement est conçu individuellement',
        ],
      },
      {
        heading: 'Notre méthode',
        body: "Nous commençons toujours par un diagnostic privé. Cette première étape, sans engagement, nous permet d'évaluer la pertinence d'une collaboration et de présenter, le cas échéant, une feuille de route honnête, calibrée et compréhensible.",
      },
    ],
    faqs: [
      {
        question: "Quelle est l'histoire de Bosphoras ?",
        answer:
          "Bosphoras est né de la volonté de proposer en Turquie un standard d'accompagnement comparable aux meilleures pratiques européennes en matière de family office et de conseil aux dirigeants.",
      },
      {
        question: 'Travaillez-vous avec tous les profils ?',
        answer:
          "Non. Nous sélectionnons nos clients, comme nous sélectionnons nos partenaires. Cette discipline garantit la qualité de service et la cohérence de notre cercle.",
      },
    ],
    cta: { label: 'Échanger en toute confidentialité', href: '/diagnostic-prive' },
    jsonLdType: 'AboutPage',
    internalLinks: [
      { pageId: 'compliance', label: 'Conformité et confiance' },
      { pageId: 'partners', label: 'Partenaires et réseau' },
      { pageId: 'private-assessment', label: 'Demander un diagnostic privé' },
    ],
  },
  {
    id: 'services',
    locale: 'fr',
    slug: '/services',
    title: 'Services — Accompagnement sur mesure en Turquie | Bosphoras',
    h1: 'Un éventail de services pensés pour les clients internationaux',
    metaDescription:
      "Installation, conseil juridique, immobilier, santé, transport, bureaux : découvrez l'accompagnement sur mesure proposé par le bureau privé Bosphoras en Turquie.",
    shortIntro:
      "Nos services couvrent l'ensemble des sujets qui jalonnent une installation ou une présence durable en Turquie. Chaque mission est cadrée précisément, en cohérence avec votre situation personnelle, professionnelle et patrimoniale. Le bureau privé reste votre point d'entrée unique.",
    sections: [
      {
        heading: 'Une lecture intégrée de votre projet',
        body: "Nous abordons chaque demande dans sa globalité : famille, fiscalité, entreprise, immobilier, santé, mobilité. Cette vision intégrée évite les angles morts et permet d'aligner les décisions entre elles.",
      },
      {
        heading: "Des expertises mobilisées à la demande",
        body: "Selon vos besoins, nous activons les bons interlocuteurs au sein de notre réseau de confiance.",
        bullets: [
          "Installation en Turquie et accompagnement administratif",
          'Conseil juridique et fiscal coordonné',
          'Création et structuration de société',
          'Recherche immobilière confidentielle',
          'Santé, assurance, transport VIP, bureaux privés',
        ],
      },
      {
        heading: "Un point d'entrée unique",
        body: "Vous gardez un interlocuteur dédié pour l'ensemble de la mission. Cette continuité simplifie la prise de décision et préserve la cohérence d'ensemble, en France comme en Turquie.",
      },
    ],
    faqs: [
      {
        question: 'Peut-on solliciter un seul service ?',
        answer:
          "Oui. Chaque service peut être mobilisé séparément, dès lors que la mission est compatible avec nos exigences de qualité et de conformité.",
      },
      {
        question: 'Quels sont vos délais habituels ?',
        answer:
          "Ils dépendent de la nature du dossier et des autorités impliquées. Nous communiquons des délais réalistes dès le diagnostic, sans surpromesse.",
      },
    ],
    cta: { label: 'Cadrer un projet sur mesure', href: '/diagnostic-prive' },
    jsonLdType: 'CollectionPage',
    internalLinks: [
      { pageId: 'relocate', label: 'Installation en Turquie' },
      { pageId: 'legal-tax', label: 'Conseil juridique et fiscal' },
      { pageId: 'private-assessment', label: 'Diagnostic privé' },
    ],
  },
  {
    id: 'relocate',
    locale: 'fr',
    slug: '/services/installation-en-turquie',
    title: "S'installer en Turquie — Accompagnement privé | Bosphoras",
    h1: "S'installer en Turquie avec méthode et sérénité",
    metaDescription:
      "Préparer une installation en Turquie demande méthode et discrétion. Bosphoras coordonne chaque étape de votre projet familial ou professionnel, sans promesse hâtive.",
    shortIntro:
      "Une installation réussie ne s'improvise pas. Elle se prépare, se documente, se séquence. Bosphoras coordonne l'ensemble des démarches, depuis l'analyse préalable jusqu'à votre arrivée effective, en s'appuyant sur des partenaires sélectionnés et un cadre administratif clair.",
    sections: [
      {
        heading: 'Un cadrage en amont',
        body: "Avant toute démarche, nous prenons le temps de comprendre votre projet : motivations, calendrier, contraintes professionnelles, scolarité, fiscalité d'origine. Ce cadrage permet d'éviter les fausses pistes et de bâtir un plan d'action réaliste.",
      },
      {
        heading: 'Les démarches concrètes',
        body: "Nous accompagnons l'ensemble des étapes administratives via les bons interlocuteurs locaux.",
        bullets: [
          "Recherche de logement et baux sécurisés",
          'Démarches de résidence selon le cadre applicable',
          'Numéro fiscal, comptes bancaires, services essentiels',
          "Inscription scolaire et appui à l'intégration familiale",
        ],
      },
      {
        heading: "Un suivi après l'arrivée",
        body: "L'installation ne s'arrête pas au déménagement. Nous restons disponibles pendant les premiers mois pour répondre aux questions courantes et orienter vers les bons interlocuteurs au quotidien.",
      },
    ],
    faqs: [
      {
        question: "Combien de temps prend une installation ?",
        answer:
          "Selon les profils, un projet d'installation se prépare en général sur trois à neuf mois. Nous proposons un calendrier détaillé après le diagnostic privé.",
      },
      {
        question: "Garantissez-vous l'obtention d'un titre de séjour ?",
        answer:
          "Non. Aucun professionnel sérieux ne peut le garantir. Nous expliquons les voies possibles, préparons soigneusement les dossiers et travaillons avec des avocats locaux compétents.",
      },
    ],
    cta: { label: 'Préparer mon installation', href: '/diagnostic-prive' },
    jsonLdType: 'Service',
    internalLinks: [
      { pageId: 'legal-tax', label: 'Conseil juridique et fiscal' },
      { pageId: 'property', label: 'Immobilier et relocation' },
      { pageId: 'istanbul', label: "S'établir à Istanbul" },
    ],
  },
  {
    id: 'istanbul',
    locale: 'fr',
    slug: '/destinations/istanbul',
    title: 'Istanbul — Vivre et investir avec discernement | Bosphoras',
    h1: 'Istanbul, une métropole à appréhender avec méthode',
    metaDescription:
      "Istanbul offre une diversité rare. Le bureau privé Bosphoras vous aide à choisir le bon quartier, la bonne adresse et le bon cadre pour votre famille ou votre activité.",
    shortIntro:
      "Istanbul est plurielle. Choisir d'y vivre ou d'y investir suppose de comprendre ses quartiers, ses dynamiques économiques et ses subtilités administratives. Bosphoras partage une lecture documentée de la ville, au service de décisions mûries.",
    sections: [
      {
        heading: "Lire la ville avant d'y vivre",
        body: "De Bebek à Etiler, de Nişantaşı à Zekeriyaköy, chaque quartier répond à un mode de vie différent. Nous présentons les options en fonction de votre situation familiale, de vos déplacements et de vos exigences personnelles.",
      },
      {
        heading: 'Une infrastructure de premier plan',
        body: "Écoles internationales, cliniques de référence, services dédiés aux dirigeants : Istanbul concentre une offre de haute qualité.",
        bullets: [
          'Lycées français, britanniques et américains reconnus',
          'Hôpitaux privés aux standards internationaux',
          'Réseau aérien dense et hub mondial',
        ],
      },
      {
        heading: 'Un environnement professionnel mature',
        body: "Pour les entrepreneurs, Istanbul offre un tissu d'affaires riche et international. Nous orientons vers les écosystèmes les plus pertinents selon votre secteur.",
      },
    ],
    faqs: [
      {
        question: "Quel quartier conseillez-vous pour une famille ?",
        answer:
          "Cela dépend de l'école, du lieu de travail et du style de vie souhaité. Plusieurs quartiers de la rive européenne et asiatique conviennent à des profils internationaux ; nous les présentons au cas par cas.",
      },
      {
        question: "L'immobilier istanbouliote est-il un bon investissement ?",
        answer:
          "Aucun marché ne peut être qualifié de bon ou mauvais investissement dans l'absolu. Nous présentons les paramètres clés, les risques et les coûts, sans promesse de rendement.",
      },
    ],
    cta: { label: 'Étudier mon installation à Istanbul', href: '/diagnostic-prive' },
    jsonLdType: 'Place',
    internalLinks: [
      { pageId: 'relocate', label: 'Installation en Turquie' },
      { pageId: 'property', label: 'Recherche immobilière confidentielle' },
      { pageId: 'offices', label: 'Bureaux privés à Istanbul' },
    ],
  },
  {
    id: 'bodrum',
    locale: 'fr',
    slug: '/destinations/bodrum',
    title: 'Bodrum — Cadre de vie privilégié en Égée | Bosphoras',
    h1: 'Bodrum, un art de vivre en bord de mer Égée',
    metaDescription:
      "Bodrum séduit familles et investisseurs en quête d'un cadre de vie raffiné. Bosphoras accompagne votre projet résidentiel ou patrimonial avec discrétion.",
    shortIntro:
      "Bodrum est devenue, en quelques années, l'une des destinations préférées d'une clientèle internationale en recherche de calme, de soleil et d'un cadre de vie raffiné. Nous accompagnons les familles dans leur projet, en saison comme à l'année.",
    sections: [
      {
        heading: 'Un littoral aux multiples visages',
        body: "Yalıkavak, Türkbükü, Göltürkbükü, Bodrum centre : chaque baie a ses particularités. Notre rôle consiste à présenter les options adaptées à vos attentes en termes d'intimité, d'animation et de services.",
      },
      {
        heading: 'Une offre résidentielle exigeante',
        body: "La région compte un parc résidentiel haut de gamme, parfois confidentiel.",
        bullets: [
          'Villas avec vue mer et services privés',
          "Résidences sécurisées dans le respect de l'environnement",
          'Marinas réputées et écoles internationales saisonnières',
        ],
      },
      {
        heading: 'Une logistique pensée pour les longs séjours',
        body: "Pour celles et ceux qui souhaitent passer plusieurs mois par an à Bodrum, nous coordonnons l'intendance, le transport et les services nécessaires à une présence prolongée.",
      },
    ],
    faqs: [
      {
        question: "Bodrum convient-il à une vie à l'année ?",
        answer:
          "Oui pour certains profils, à condition d'anticiper la saisonnalité, la scolarité et l'accès aux services médicaux. Nous présentons les arbitrages en toute transparence.",
      },
      {
        question: 'Peut-on combiner résidence à Istanbul et maison à Bodrum ?',
        answer:
          "C'est une configuration fréquente parmi nos clients. Elle demande une organisation rigoureuse, que nous structurons sur mesure.",
      },
    ],
    cta: { label: 'Construire mon projet à Bodrum', href: '/diagnostic-prive' },
    jsonLdType: 'Place',
    internalLinks: [
      { pageId: 'property', label: 'Recherche immobilière confidentielle' },
      { pageId: 'transport', label: 'Transport VIP et logistique' },
      { pageId: 'private-assessment', label: 'Diagnostic privé' },
    ],
  },
  {
    id: 'antalya',
    locale: 'fr',
    slug: '/destinations/antalya',
    title: 'Antalya — Méditerranée, climat et discrétion | Bosphoras',
    h1: 'Antalya, un littoral méditerranéen à découvrir avec mesure',
    metaDescription:
      "Antalya combine climat doux, infrastructures modernes et art de vivre. Bosphoras accompagne familles et investisseurs avec discrétion et exigence.",
    shortIntro:
      "Antalya s'impose comme une destination majeure de la Méditerranée orientale. Climat clément, infrastructures modernes et accessibilité internationale en font une option pertinente pour de nombreuses familles. Nous présentons les options avec lucidité.",
    sections: [
      {
        heading: 'Une géographie variée',
        body: "Du centre-ville aux collines de Lara, en passant par Kalkan et Kaş, la province d'Antalya offre des cadres très différents. Chaque option mérite une visite documentée.",
      },
      {
        heading: 'Un écosystème de services qui se structure',
        body: "Antalya bénéficie d'une offre médicale et éducative en croissance.",
        bullets: [
          'Hôpitaux privés reconnus à Antalya',
          'Écoles internationales et programmes étrangers',
          "Aéroport international et liaisons régulières vers l'Europe",
        ],
      },
      {
        heading: 'Un patrimoine résidentiel sélectif',
        body: "Le marché résidentiel haut de gamme demande à être lu avec prudence. Nous mobilisons nos partenaires pour vous présenter des biens conformes à vos critères, sans précipitation.",
      },
    ],
    faqs: [
      {
        question: 'Antalya est-elle adaptée à une présence permanente ?',
        answer:
          "Pour certains profils, oui. Pour d'autres, une présence saisonnière conviendra mieux. Le diagnostic privé permet de poser les bons critères.",
      },
      {
        question: "Quelle est la différence entre Antalya et Bodrum ?",
        answer:
          "Antalya est plus urbaine, mieux desservie à l'année, et propose un littoral très différent. Bodrum reste plus confidentielle. Nous expliquons les nuances en détail lors d'un échange.",
      },
    ],
    cta: { label: 'Évaluer Antalya pour mon projet', href: '/diagnostic-prive' },
    jsonLdType: 'Place',
    internalLinks: [
      { pageId: 'relocate', label: 'Installation en Turquie' },
      { pageId: 'health-insurance', label: 'Santé et assurance' },
      { pageId: 'property', label: 'Immobilier et relocation' },
    ],
  },
  {
    id: 'legal-tax',
    locale: 'fr',
    slug: '/services/conseil-juridique-fiscal',
    title: 'Conseil juridique et fiscal en Turquie | Bosphoras',
    h1: 'Un conseil juridique et fiscal coordonné, sans approximation',
    metaDescription:
      "Bosphoras coordonne avocats et fiscalistes pour clarifier votre cadre juridique et fiscal en Turquie. Discrétion, prudence et rigueur à chaque étape.",
    shortIntro:
      "Le cadre juridique et fiscal turc présente des spécificités qu'il convient de comprendre avant de prendre des décisions structurantes. Bosphoras coordonne avocats et fiscalistes du réseau, dans le strict respect des règles applicables en Turquie comme dans votre pays d'origine.",
    sections: [
      {
        heading: 'Un cadre clarifié, une décision éclairée',
        body: "Nous ne nous substituons pas aux avocats : nous orchestrons leur intervention. Notre rôle est de poser les bonnes questions, de préparer les bons documents et de coordonner les expertises afin que vous disposiez d'une vision claire avant tout choix.",
      },
      {
        heading: 'Sujets fréquemment traités',
        body: "Notre réseau intervient sur les thématiques juridiques et fiscales les plus courantes pour une clientèle internationale.",
        bullets: [
          'Statut de résidence et conséquences fiscales',
          'Conventions fiscales bilatérales',
          'Structuration patrimoniale et successorale',
          'Acquisition et détention immobilière',
        ],
      },
      {
        heading: 'Une approche conservatrice',
        body: "Nous privilégions toujours les solutions stables, documentées et conformes. La prudence est, à long terme, le meilleur conseil que nous puissions donner.",
      },
    ],
    faqs: [
      {
        question: 'Êtes-vous habilités à donner des conseils juridiques ?',
        answer:
          "Non. Les conseils juridiques sont délivrés par les avocats du réseau, dûment habilités. Bosphoras coordonne et structure la mission, sans empiéter sur leurs prérogatives.",
      },
      {
        question: 'Travaillez-vous avec mes avocats actuels ?',
        answer:
          "Volontiers. Nous savons collaborer avec les conseils en place dans votre pays d'origine pour assurer la cohérence d'ensemble.",
      },
    ],
    cta: { label: 'Cadrer mon projet juridique', href: '/diagnostic-prive' },
    jsonLdType: 'Service',
    internalLinks: [
      { pageId: 'business-setup', label: "Création d'entreprise" },
      { pageId: 'compliance', label: 'Conformité et confiance' },
      { pageId: 'private-assessment', label: 'Diagnostic privé' },
    ],
  },
  {
    id: 'business-setup',
    locale: 'fr',
    slug: '/services/creation-entreprise',
    title: "Création d'entreprise en Turquie — Accompagnement | Bosphoras",
    h1: 'Créer une société en Turquie, étape par étape',
    metaDescription:
      "Bosphoras accompagne la création de société en Turquie : structuration, démarches, comptabilité et conformité, avec rigueur et discrétion.",
    shortIntro:
      "Créer une société en Turquie peut s'envisager de plusieurs manières, selon votre activité, votre fiscalité et vos partenaires. Notre accompagnement vise à choisir la bonne structure, à préparer un dossier solide et à mettre en place les outils opérationnels nécessaires.",
    sections: [
      {
        heading: 'Choisir la bonne forme juridique',
        body: "Société à responsabilité limitée, société anonyme, succursale ou bureau de liaison : chaque option a ses implications. Le choix se fait avec les avocats du réseau, en cohérence avec votre activité réelle et votre exposition fiscale internationale.",
      },
      {
        heading: 'Mettre en place les fondamentaux',
        body: "Au-delà de l'enregistrement, l'opérationnel exige rigueur et constance.",
        bullets: [
          'Comptabilité, paie, déclarations fiscales et sociales',
          'Banques, signatures, signatures circulaires',
          'Protection des marques et contrats',
        ],
      },
      {
        heading: 'Une discipline de conformité',
        body: "La conformité n'est pas une formalité. Nous insistons sur la qualité du dispositif comptable et sur la documentation des flux, afin de protéger durablement votre projet.",
      },
    ],
    faqs: [
      {
        question: "Une création de société donne-t-elle automatiquement un titre de séjour ?",
        answer:
          "Non. La création d'une société et l'obtention d'un titre de séjour relèvent de cadres distincts. Nous expliquons les conditions au cas par cas.",
      },
      {
        question: 'Quels secteurs accompagnez-vous ?',
        answer:
          "Nous accompagnons en priorité des projets relevant des services, du conseil, de la tech, du négoce et du holding patrimonial. Certains secteurs réglementés appellent des expertises spécifiques.",
      },
    ],
    cta: { label: 'Étudier ma création de société', href: '/diagnostic-prive' },
    jsonLdType: 'Service',
    internalLinks: [
      { pageId: 'legal-tax', label: 'Conseil juridique et fiscal' },
      { pageId: 'offices', label: 'Bureaux privés' },
      { pageId: 'compliance', label: 'Conformité et confiance' },
    ],
  },
  {
    id: 'health-insurance',
    locale: 'fr',
    slug: '/services/sante-assurance',
    title: 'Santé et assurance en Turquie — Accompagnement | Bosphoras',
    h1: 'Santé et assurance : un cadre solide pour votre famille',
    metaDescription:
      "Bosphoras vous accompagne pour structurer votre couverture santé en Turquie, avec discrétion et exigence. Hôpitaux de référence, contrats internationaux, suivi continu.",
    shortIntro:
      "L'accès à des soins de qualité et à une couverture solide est un sujet central pour les familles internationales. Nous coordonnons les bons interlocuteurs pour vous proposer un dispositif lisible, conforme et durable.",
    sections: [
      {
        heading: 'Un écosystème médical de premier plan',
        body: "La Turquie compte plusieurs hôpitaux privés réputés, notamment à Istanbul, Ankara et Antalya. Nous orientons vers les établissements adaptés à vos besoins, sans engagement commercial avec eux.",
      },
      {
        heading: 'Une couverture pensée à long terme',
        body: "Selon votre profil, plusieurs options sont envisageables.",
        bullets: [
          'Assurance santé internationale ou locale',
          'Médecins traitants et bilans préventifs',
          'Coordination en cas de soins à létranger',
        ],
      },
      {
        heading: 'Un accompagnement continu',
        body: "Au-delà de la souscription, nous restons disponibles pour aider à la prise de rendez-vous, à la coordination des intervenants ou à la gestion d'imprévus.",
      },
    ],
    faqs: [
      {
        question: 'Êtes-vous courtier en assurance ?',
        answer:
          "Non. Nous orientons vers des courtiers et compagnies sélectionnés, sans intermédiation rémunérée occulte. Notre indépendance est essentielle.",
      },
      {
        question: 'Comment gérer un suivi médical commencé en Europe ?',
        answer:
          "Nous facilitons la transmission des dossiers et la coordination avec les équipes médicales locales, dans le respect du secret médical.",
      },
    ],
    cta: { label: 'Structurer ma couverture santé', href: '/diagnostic-prive' },
    jsonLdType: 'Service',
    internalLinks: [
      { pageId: 'relocate', label: 'Installation en Turquie' },
      { pageId: 'istanbul', label: 'Vivre à Istanbul' },
      { pageId: 'private-assessment', label: 'Diagnostic privé' },
    ],
  },
  {
    id: 'property',
    locale: 'fr',
    slug: '/services/immobilier-relocation',
    title: 'Immobilier et relocation en Turquie | Bosphoras',
    h1: 'Une recherche immobilière confidentielle et méthodique',
    metaDescription:
      "Recherche immobilière sur mesure, visites confidentielles, accompagnement notarial : Bosphoras structure votre projet résidentiel ou patrimonial en Turquie.",
    shortIntro:
      "Trouver le bon bien en Turquie demande du temps, du discernement et un réseau fiable. Nous menons des recherches discrètes, proposons des visites cadrées et coordonnons les étapes jusqu'à la signature, en lien avec avocats et notaires.",
    sections: [
      {
        heading: 'Un cahier des charges, pas un catalogue',
        body: "Plutôt que de vous présenter un catalogue, nous partons de vos critères réels : usage, environnement, fiscalité, perspectives. Cette discipline évite les choix précipités.",
      },
      {
        heading: 'Une coordination de bout en bout',
        body: "Nous orchestrons l'ensemble des intervenants nécessaires.",
        bullets: [
          'Recherche off-market et visites confidentielles',
          'Diligence juridique et vérifications cadastrales',
          'Coordination notariale et signature sécurisée',
        ],
      },
      {
        heading: 'Une relocation pensée comme un projet',
        body: "Au-delà du bien, la relocation englobe le déménagement, l'aménagement et l'installation des familles. Nous coordonnons cette phase avec des prestataires de confiance.",
      },
    ],
    faqs: [
      {
        question: 'Touchez-vous des commissions auprès des vendeurs ?',
        answer:
          "Non. Notre rémunération est convenue avec vous, en toute transparence. Cette indépendance garantit l'objectivité de nos recommandations.",
      },
      {
        question: "Travaillez-vous sur le marché secondaire et le neuf ?",
        answer:
          "Oui, sur les deux marchés. Nous présentons les avantages et les limites de chaque option, en tenant compte de vos objectifs.",
      },
    ],
    cta: { label: 'Lancer une recherche confidentielle', href: '/diagnostic-prive' },
    jsonLdType: 'Service',
    internalLinks: [
      { pageId: 'istanbul', label: 'Istanbul' },
      { pageId: 'bodrum', label: 'Bodrum' },
      { pageId: 'antalya', label: 'Antalya' },
    ],
  },
  {
    id: 'offices',
    locale: 'fr',
    slug: '/services/bureaux',
    title: 'Bureaux privés en Turquie — Adresses sélectionnées | Bosphoras',
    h1: "Des bureaux privés à la hauteur de vos exigences",
    metaDescription:
      "Bureaux privés, espaces dédiés ou domiciliations confidentielles à Istanbul et au-delà : Bosphoras sélectionne des adresses conformes à vos exigences.",
    shortIntro:
      "Une adresse professionnelle de qualité reste un signal fort. Nous identifions les bureaux privés et les espaces dédiés correspondant à votre activité, à vos collaborateurs et aux normes de sécurité que vous attendez.",
    sections: [
      {
        heading: 'Un cadre de travail soigné',
        body: "Nous privilégions des adresses reconnues, des prestations professionnelles et un environnement compatible avec une clientèle exigeante.",
      },
      {
        heading: 'Plusieurs formats possibles',
        body: "Selon votre besoin, nous proposons des configurations variées.",
        bullets: [
          "Bureau privé fermé avec services dédiés",
          "Plateau de plusieurs postes pour équipes",
          "Domiciliation confidentielle et salles de réunion à la demande",
        ],
      },
      {
        heading: 'Confidentialité et conformité',
        body: "Chaque solution proposée respecte les exigences de confidentialité et les obligations de conformité applicables, en lien avec les avocats du réseau.",
      },
    ],
    faqs: [
      {
        question: 'Proposez-vous des adresses hors Istanbul ?',
        answer:
          "Oui, à Bodrum, Antalya et Ankara selon les besoins. Toutes les adresses sont validées en amont par nos équipes.",
      },
      {
        question: 'Une domiciliation peut-elle suffire au démarrage ?',
        answer:
          "Dans certains cas, oui. Le choix dépend toutefois de votre activité réelle et des exigences réglementaires. Nous étudions chaque situation.",
      },
    ],
    cta: { label: "Trouver mon bureau privé", href: '/diagnostic-prive' },
    jsonLdType: 'Service',
    internalLinks: [
      { pageId: 'business-setup', label: "Création d'entreprise" },
      { pageId: 'istanbul', label: 'Istanbul' },
      { pageId: 'private-assessment', label: 'Diagnostic privé' },
    ],
  },
  {
    id: 'transport',
    locale: 'fr',
    slug: '/services/transport-vip',
    title: 'Transport VIP en Turquie — Mobilité discrète | Bosphoras',
    h1: 'Une mobilité haut de gamme, en toute discrétion',
    metaDescription:
      "Transport VIP, chauffeurs privés, sécurité et logistique : Bosphoras coordonne votre mobilité en Turquie avec discrétion et exigence.",
    shortIntro:
      "La mobilité d'une famille ou d'un dirigeant en déplacement appelle un dispositif fiable, ponctuel et discret. Nous coordonnons des solutions de transport adaptées, sans ostentation, et toujours conformes aux normes de sécurité attendues.",
    sections: [
      {
        heading: 'Une logistique anticipée',
        body: "Nous préparons en amont les itinéraires, les horaires et les options de repli, afin que chaque déplacement se déroule sans accroc.",
      },
      {
        heading: 'Des solutions modulables',
        body: "Plusieurs configurations sont possibles selon le besoin.",
        bullets: [
          'Chauffeur privé dédié ponctuel ou récurrent',
          'Transferts aéroport et liaisons inter-villes',
          'Coordination avec services de sécurité agréés',
        ],
      },
      {
        heading: 'Discrétion et conformité',
        body: "Nous travaillons exclusivement avec des prestataires régulièrement enregistrés et professionnellement assurés. Aucune solution informelle.",
      },
    ],
    faqs: [
      {
        question: 'Proposez-vous des services de sécurité armée ?',
        answer:
          "Selon les juridictions et les profils, des solutions agréées peuvent être étudiées en lien avec les autorités compétentes. Nous orientons vers des partenaires qualifiés.",
      },
      {
        question: "Peut-on solliciter un transport ponctuel ?",
        answer:
          "Oui, après un cadrage minimal pour assurer la qualité du service.",
      },
    ],
    cta: { label: 'Organiser ma mobilité', href: '/diagnostic-prive' },
    jsonLdType: 'Service',
    internalLinks: [
      { pageId: 'private-club', label: 'Cercle privé' },
      { pageId: 'offices', label: 'Bureaux privés' },
      { pageId: 'private-assessment', label: 'Diagnostic privé' },
    ],
  },
  {
    id: 'private-club',
    locale: 'fr',
    slug: '/cercle-prive',
    title: 'Cercle privé Bosphoras — Accès confidentiel | Bosphoras',
    h1: "Un cercle privé pour des relations choisies",
    metaDescription:
      "Le cercle privé Bosphoras réunit familles, dirigeants et investisseurs internationaux dans un cadre discret. Adhésion sur cooptation, gouvernance exigeante.",
    shortIntro:
      "Le cercle privé Bosphoras réunit, dans un cadre confidentiel, des familles et des dirigeants partageant les mêmes exigences de discrétion et de qualité. L'adhésion se fait sur cooptation et après un entretien préalable.",
    sections: [
      {
        heading: 'Une logique de cercle, pas de club commercial',
        body: "Nous ne cherchons pas le volume. Le cercle est volontairement restreint pour préserver la qualité des échanges et la confidentialité des relations.",
      },
      {
        heading: 'Ce que le cercle apporte',
        body: "Au-delà des services, le cercle est un espace de mise en relation et d'échanges entre pairs.",
        bullets: [
          "Rencontres privées et tables choisies",
          "Accès à des partenaires sélectionnés du réseau",
          "Veille discrète sur les sujets juridiques et patrimoniaux",
        ],
      },
      {
        heading: 'Une gouvernance exigeante',
        body: "Chaque candidature est étudiée avec attention. Nous nous réservons le droit de ne pas y donner suite, sans avoir à justifier notre décision.",
      },
    ],
    faqs: [
      {
        question: 'Comment rejoindre le cercle ?',
        answer:
          "Par cooptation d'un membre, ou par recommandation d'un partenaire de confiance. Un entretien préalable est systématique.",
      },
      {
        question: "Quels sont les engagements des membres ?",
        answer:
          "Discrétion, courtoisie et respect de la charte interne. Aucun engagement commercial n'est attendu.",
      },
    ],
    cta: { label: 'Approcher le cercle', href: '/diagnostic-prive' },
    jsonLdType: 'Service',
    internalLinks: [
      { pageId: 'membership-card', label: 'Carte de membre' },
      { pageId: 'premium-cardholders', label: 'Membres premium' },
      { pageId: 'partners', label: 'Partenaires et réseau' },
    ],
  },
  {
    id: 'membership-card',
    locale: 'fr',
    slug: '/adhesion/carte-membre',
    title: 'Carte de membre Bosphoras — Adhésion sur mesure | Bosphoras',
    h1: 'Une carte de membre, pour un accompagnement continu',
    metaDescription:
      "La carte de membre Bosphoras donne accès à un accompagnement continu, à des services réservés et au cercle privé. Adhésion confidentielle, sur dossier.",
    shortIntro:
      "La carte de membre formalise votre relation avec Bosphoras. Elle ouvre l'accès à un accompagnement continu et à des services réservés, dans le respect des règles internes du bureau privé.",
    sections: [
      {
        heading: 'Un cadre clair',
        body: "L'adhésion s'effectue après un diagnostic privé et la validation de votre dossier. Les conditions et les contreparties vous sont présentées avec transparence.",
      },
      {
        heading: 'Ce que la carte permet',
        body: "Selon le niveau d'adhésion, plusieurs services peuvent être mobilisés.",
        bullets: [
          "Interlocuteur dédié et joignable",
          "Coordination prioritaire avec le réseau",
          "Accès aux événements internes du cercle",
        ],
      },
      {
        heading: 'Une relation construite dans la durée',
        body: "La carte n'est pas un produit promotionnel. C'est l'expression d'une confiance mutuelle, renouvelable annuellement.",
      },
    ],
    faqs: [
      {
        question: "La carte est-elle ouverte à tous ?",
        answer:
          "Non. Elle est délivrée après diagnostic et validation par le bureau privé. Toutes les candidatures ne donnent pas lieu à une adhésion.",
      },
      {
        question: 'La carte donne-t-elle des avantages auprès de tiers ?',
        answer:
          "Certains partenaires du réseau réservent des conditions à nos membres. Nous communiquons ces avantages en interne, sans publicité externe.",
      },
    ],
    cta: { label: 'Étudier mon adhésion', href: '/diagnostic-prive' },
    jsonLdType: 'Service',
    internalLinks: [
      { pageId: 'private-club', label: 'Cercle privé' },
      { pageId: 'premium-cardholders', label: 'Membres premium' },
      { pageId: 'private-assessment', label: 'Diagnostic privé' },
    ],
  },
  {
    id: 'premium-cardholders',
    locale: 'fr',
    slug: '/adhesion/membres-premium',
    title: 'Membres premium — Accompagnement renforcé | Bosphoras',
    h1: 'Membres premium : un accompagnement renforcé et continu',
    metaDescription:
      "Le statut de membre premium ouvre droit à un accompagnement renforcé du bureau privé Bosphoras. Engagement de service, disponibilité élargie, suivi régulier.",
    shortIntro:
      "Le statut premium s'adresse aux clients dont les besoins demandent une attention plus soutenue dans la durée. Il se traduit par un cadre de service renforcé, une disponibilité élargie et un suivi régulier de votre dossier.",
    sections: [
      {
        heading: 'Un engagement de service',
        body: "Le statut premium repose sur un engagement réciproque : disponibilité étendue de notre côté, transparence et anticipation du vôtre. Cette discipline conditionne la qualité de la relation.",
      },
      {
        heading: 'Des services renforcés',
        body: "Selon les missions confiées, plusieurs services peuvent être étendus.",
        bullets: [
          "Suivi pluri-annuel de votre situation",
          "Coordination élargie avec vos conseils internationaux",
          "Accès renforcé aux événements et à la veille",
        ],
      },
      {
        heading: 'Une sélection rigoureuse',
        body: "Le statut premium n'est pas distribué à grande échelle. Il s'adresse à des profils dont les besoins justifient cette continuité, et dont la posture est compatible avec nos exigences.",
      },
    ],
    faqs: [
      {
        question: 'Comment passe-t-on en statut premium ?',
        answer:
          "Sur proposition du bureau privé, après une période d'accompagnement. Nous évoquons cette évolution lorsque le dossier le justifie.",
      },
      {
        question: "Le statut premium est-il à durée indéterminée ?",
        answer:
          "Non. Il est renouvelable annuellement et peut être ajusté selon l'évolution de la mission.",
      },
    ],
    cta: { label: 'Échanger sur le statut premium', href: '/diagnostic-prive' },
    jsonLdType: 'Service',
    internalLinks: [
      { pageId: 'membership-card', label: 'Carte de membre' },
      { pageId: 'private-club', label: 'Cercle privé' },
      { pageId: 'compliance', label: 'Conformité et confiance' },
    ],
  },
  {
    id: 'compliance',
    locale: 'fr',
    slug: '/conformite-confiance',
    title: 'Conformité et confiance — Notre cadre | Bosphoras',
    h1: 'Conformité et confiance, deux exigences indissociables',
    metaDescription:
      "Bosphoras s'inscrit dans un cadre rigoureux de conformité et de confiance. Découvrez notre approche en matière de KYC, AML, confidentialité et déontologie.",
    shortIntro:
      "La conformité n'est pas une contrainte que nous subissons, mais un cadre que nous revendiquons. Elle protège nos clients, nos partenaires et notre maison. Voici comment nous l'appliquons concrètement.",
    sections: [
      {
        heading: 'Une discipline KYC et AML',
        body: "Avant toute mission, nous procédons aux vérifications attendues sur l'identité de nos clients, l'origine des fonds et la cohérence du projet. Cette étape, parfois exigeante, conditionne notre intervention.",
      },
      {
        heading: 'Une protection des données',
        body: "Nous appliquons des standards élevés en matière de confidentialité.",
        bullets: [
          "Accès aux dossiers strictement limité",
          "Outils de communication chiffrés",
          "Conservation maîtrisée et conforme",
        ],
      },
      {
        heading: 'Une déontologie revendiquée',
        body: "Nous refusons les missions qui ne respecteraient pas ce cadre. Cette exigence, parfois exigeante à court terme, est le fondement de notre crédibilité dans la durée.",
      },
    ],
    faqs: [
      {
        question: "Pourquoi vos diligences sont-elles parfois longues ?",
        answer:
          "Parce que la qualité d'un accompagnement de long terme dépend de la solidité des vérifications initiales. Nous préférons un démarrage rigoureux à une accélération imprudente.",
      },
      {
        question: 'Vos données clients sont-elles partagées ?',
        answer:
          "Non, sauf obligation légale ou autorisation expresse. Le secret des relations est un principe que nous appliquons strictement.",
      },
    ],
    cta: { label: 'Comprendre notre cadre', href: '/diagnostic-prive' },
    jsonLdType: 'AboutPage',
    internalLinks: [
      { pageId: 'about', label: 'À propos de Bosphoras' },
      { pageId: 'partners', label: 'Partenaires et réseau' },
      { pageId: 'legal-tax', label: 'Conseil juridique et fiscal' },
    ],
  },
  {
    id: 'partners',
    locale: 'fr',
    slug: '/partenaires-reseau',
    title: 'Partenaires et réseau — Cercle de confiance | Bosphoras',
    h1: "Un réseau de confiance, soigneusement constitué",
    metaDescription:
      "Avocats, fiscalistes, notaires, médecins, courtiers : Bosphoras s'appuie sur un réseau de partenaires sélectionnés, indépendants et reconnus.",
    shortIntro:
      "La force d'un bureau privé tient à la qualité de son réseau. Le nôtre s'est constitué dans la durée, sur la base de relations professionnelles éprouvées et d'un alignement strict sur nos exigences de discrétion et de conformité.",
    sections: [
      {
        heading: 'Une sélection exigeante',
        body: "Chaque partenaire est choisi pour ses compétences, sa réputation et sa rigueur. Nous évaluons régulièrement la qualité du service rendu et n'hésitons pas à faire évoluer notre cercle si nécessaire.",
      },
      {
        heading: 'Des expertises complémentaires',
        body: "Notre réseau couvre l'essentiel des sujets soulevés par une clientèle internationale.",
        bullets: [
          "Avocats spécialisés en droit des affaires, immobilier et famille",
          "Fiscalistes et experts-comptables internationaux",
          "Médecins, courtiers en assurance, gestionnaires de patrimoine",
        ],
      },
      {
        heading: 'Une indépendance préservée',
        body: "Bosphoras ne perçoit pas de commissions occultes auprès de ses partenaires. Cette indépendance économique garantit l'objectivité de nos recommandations.",
      },
    ],
    faqs: [
      {
        question: "Puis-je travailler directement avec vos partenaires ?",
        answer:
          "Oui, dès lors que la mission relève de leur champ d'intervention. Nous facilitons cette mise en relation lorsque c'est pertinent pour vous.",
      },
      {
        question: "Êtes-vous présents dans d'autres pays ?",
        answer:
          "Notre cercle de partenaires couvre plusieurs juridictions, ce qui permet une coordination fluide pour les clients à dimension internationale.",
      },
    ],
    cta: { label: 'Découvrir notre réseau', href: '/diagnostic-prive' },
    jsonLdType: 'AboutPage',
    internalLinks: [
      { pageId: 'about', label: 'À propos de Bosphoras' },
      { pageId: 'compliance', label: 'Conformité et confiance' },
      { pageId: 'services', label: "L'éventail des services" },
    ],
  },
  {
    id: 'faq',
    locale: 'fr',
    slug: '/questions-frequentes',
    title: 'Questions fréquentes — Bureau privé Bosphoras | Bosphoras',
    h1: 'Questions fréquentes sur Bosphoras et la Turquie',
    metaDescription:
      "Réponses aux questions les plus fréquentes sur Bosphoras : accompagnement, conformité, résidence, fiscalité, immobilier et fonctionnement du bureau privé.",
    shortIntro:
      "Voici les questions que nos interlocuteurs nous posent le plus souvent. Si une question vous est propre, nous l'aborderons en détail lors d'un diagnostic privé, en toute confidentialité.",
    sections: [
      {
        heading: 'Comprendre notre positionnement',
        body: "Bosphoras est un bureau privé d'accompagnement, et non un cabinet d'avocats, un agent immobilier ou un courtier. Notre rôle est d'orchestrer, de cadrer et de coordonner ; jamais de promettre.",
      },
      {
        heading: 'Comprendre notre méthode',
        body: "Nous travaillons sur cooptation et sur dossier. Chaque mission commence par un diagnostic, se poursuit par une feuille de route et s'achève par un suivi documenté.",
      },
      {
        heading: 'Aller plus loin',
        body: "Si vous souhaitez approfondir un sujet en particulier, le diagnostic privé reste la meilleure porte d'entrée. Vous y obtiendrez des réponses précises, adaptées à votre situation.",
      },
    ],
    faqs: [
      {
        question: "Quelle est la différence entre Bosphoras et un cabinet d'avocats ?",
        answer:
          "Un cabinet d'avocats délivre des conseils juridiques. Bosphoras coordonne avocats, fiscalistes et autres experts pour vous offrir une prise en charge intégrée. Nous ne nous substituons pas à eux.",
      },
      {
        question: "Pouvez-vous garantir un titre de séjour ou une citoyenneté ?",
        answer:
          "Non. Aucun professionnel sérieux ne peut le garantir. Nous expliquons les voies possibles, préparons les dossiers et travaillons avec des avocats compétents.",
      },
      {
        question: 'Comment est facturé votre accompagnement ?',
        answer:
          "Notre rémunération est convenue à l'avance, en toute transparence. Elle dépend de la nature et de la durée de la mission. Aucune commission cachée.",
      },
      {
        question: 'Travaillez-vous en français, en anglais et en russe ?',
        answer:
          "Oui. Nos équipes accompagnent une clientèle internationale et adaptent leur langue de travail à chaque interlocuteur.",
      },
      {
        question: 'Combien de temps prend un diagnostic privé ?',
        answer:
          "Comptez environ une heure pour un premier échange, suivi le cas échéant d'une seconde rencontre plus approfondie.",
      },
      {
        question: 'Acceptez-vous tous les profils ?',
        answer:
          "Non. Nous nous réservons le droit de ne pas donner suite à une demande, en particulier lorsque les vérifications de conformité ne nous semblent pas réunies.",
      },
    ],
    cta: { label: 'Poser ma question en privé', href: '/diagnostic-prive' },
    jsonLdType: 'FAQPage',
    internalLinks: [
      { pageId: 'about', label: 'À propos de Bosphoras' },
      { pageId: 'compliance', label: 'Conformité et confiance' },
      { pageId: 'private-assessment', label: 'Diagnostic privé' },
    ],
  },
  {
    id: 'private-assessment',
    locale: 'fr',
    slug: '/diagnostic-prive',
    title: 'Diagnostic privé — Premier échange confidentiel | Bosphoras',
    h1: 'Demander un diagnostic privé, en toute confidentialité',
    metaDescription:
      "Le diagnostic privé est la porte d'entrée de Bosphoras. Premier échange confidentiel, sans engagement, pour évaluer la pertinence d'une collaboration.",
    shortIntro:
      "Le diagnostic privé est notre point de départ avec chaque nouvel interlocuteur. Il s'agit d'un échange confidentiel, sans engagement, qui permet de comprendre votre projet, de répondre à vos premières questions et d'évaluer la pertinence d'une collaboration.",
    sections: [
      {
        heading: 'Un cadre clair',
        body: "Nous échangeons par téléphone, en visioconférence ou sur place, selon votre préférence. La discussion est tenue à un haut niveau de confidentialité dès le premier contact.",
      },
      {
        heading: 'Ce que nous abordons',
        body: "Le diagnostic est structuré pour être utile dès la première heure d'échange.",
        bullets: [
          "Présentation de votre situation et de vos objectifs",
          "Éclairage sur les options applicables",
          "Première lecture des délais, conditions et risques",
        ],
      },
      {
        heading: 'Ce qui suit le diagnostic',
        body: "Si une collaboration est envisageable, nous formalisons une feuille de route. Sinon, nous vous le disons honnêtement, et nous orientons éventuellement vers un autre interlocuteur du réseau.",
      },
    ],
    faqs: [
      {
        question: 'Le diagnostic privé est-il payant ?',
        answer:
          "Selon les cas, un premier échange de prise de contact peut être offert. Toute analyse approfondie fait l'objet d'un cadrage tarifaire transparent, communiqué avant tout démarrage.",
      },
      {
        question: 'Quelles informations préparer avant le rendez-vous ?',
        answer:
          "Une description simple de votre projet, vos contraintes calendaires et, si possible, les principales données de votre situation patrimoniale et fiscale.",
      },
      {
        question: 'La discussion est-elle confidentielle ?',
        answer:
          "Oui, intégralement. Aucun élément n'est partagé en dehors de notre cercle interne, sauf accord explicite et besoin opérationnel.",
      },
    ],
    cta: { label: 'Demander un diagnostic privé', href: '/diagnostic-prive' },
    jsonLdType: 'ContactPage',
    internalLinks: [
      { pageId: 'about', label: 'À propos de Bosphoras' },
      { pageId: 'services', label: "Découvrir l'éventail des services" },
      { pageId: 'compliance', label: 'Conformité et confiance' },
    ],
  },
];
