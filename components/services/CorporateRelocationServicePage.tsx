import Link from 'next/link';
import Image from 'next/image';
import { corporateRelocationEditorial } from '@/data/corporateRelocationEditorial';
import { mobilityDetails } from '@/data/businessMobilityDetails';
import { getSlugForPage } from '@/data/pages/types';
import { getLocalePath } from '@/lib/routes';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import type { Locale } from '@/lib/i18n';
import { organizationSchema, breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo';
import { siteUrl } from '@/lib/routes';
import { withAssessmentContext } from '@/lib/assessmentContext';

const paths: Record<Locale, string> = {
  fr: '/relocation-corporate-turquie',
  en: '/en/corporate-relocation-turkey',
  ru: '/ru/korporativnyy-relokeyshn-v-turtsiyu',
  ar: '/ar/الانتقال-المؤسسي-إلى-تركيا',
};

type Copy = {
  metaTitle: string;
  title: string;
  eyebrow: string;
  description: string;
  hero: string;
  cta: string;
  toc: string;
  directTitle: string;
  directText: string;
  scopeTitle: string;
  scopeIntro: string;
  cardTitles: string[];
  before: string[];
  arrival: string[];
  immigration: string[];
  family: string[];
  permitTitle: string;
  permitText: string;
  permitItems: string[];
  officialTitle: string;
  officialText: string;
  hrTitle: string;
  hrText: string;
  hrItems: string[];
  housingTitle: string;
  housingText: string;
  housingItems: string[];
  processTitle: string;
  steps: Array<{ title: string; text: string }>;
  citiesTitle: string;
  cities: Array<{ name: string; text: string }>;
  privateOffice: string;
  privateText: string;
  tags: string[];
  related: string;
  faqTitle: string;
  finalTitle: string;
  finalText: string;
  finalCta: string;
  confidential: string;
  faq: Array<[string, string]>;
};

const content: Record<Locale, Copy> = {
  fr: {
    metaTitle: "Relocation Turquie & Istanbul | Entreprises, RH | Bosphoras",
    title: 'Relocation en Turquie : entreprises, cadres et salariés expatriés',
    eyebrow: 'Bosphoras · Bureau Privé · Corporate Relocation',
    description: "Agence de relocation en Turquie et à Istanbul : permis de travail, logement, écoles, mobilité des cadres et salariés. Accompagnement RH de A à Z.",
    hero: 'Votre agence de relocation en Turquie pour entreprises, cadres et salariés. Bosphoras coordonne l’installation d’un collaborateur en Turquie comme un projet unique : statut d’entrée, permis de travail ou résidence selon le dossier, logement, famille, assurance, banque, mobilité et mise en place pratique. L’entreprise garde un interlocuteur local unique, tandis que les actes réglementés sont traités par les professionnels compétents.',
    cta: 'Organiser une relocation',
    toc: 'Sur cette page',
    directTitle: 'Corporate relocation en Turquie : que prend réellement en charge Bosphoras ?',
    directText: 'Nous cadrons le dossier avec l’entreprise ou les RH, préparons le parcours du salarié et de sa famille, coordonnons les prestataires et professionnels utiles, puis suivons l’installation avant l’arrivée et après la prise de poste. Le but n’est pas d’empiler des services, mais de réduire les points de friction qui peuvent ralentir une mobilité internationale.',
    scopeTitle: 'Un accompagnement avant, pendant et après l’arrivée',
    scopeIntro: 'Le périmètre est défini selon la mission, le statut du collaborateur, la ville, la famille et les obligations de l’employeur.',
    cardTitles: ['Avant l’arrivée', 'Arrivée & logement', 'Immigration & conformité', 'Famille & settling-in'],
    before: ['brief RH, direction et collaborateur', 'calendrier de mobilité et date de prise de poste', 'analyse du besoin visa / travail / résidence avec les professionnels concernés', 'check-list documentaire', 'budget logement et quartiers', 'besoins conjoint, enfants et école'],
    arrival: ['hébergement temporaire si nécessaire', 'house hunting et présélection de quartiers', 'visites et coordination du bail', 'mise en place internet et services essentiels', 'mobilité, transfert aéroport et chauffeur', 'rendez-vous administratifs et onboarding local'],
    immigration: ['coordination permis de travail avec partenaire compétent', 'titre de séjour / ikamet lorsque pertinent', 'assurance santé selon le dossier', 'adresse et changements administratifs', 'renouvellements et suivi documentaire', 'coordination avocat, comptable ou conseil fiscal si nécessaire'],
    family: ['écoles internationales ou locales', 'quartiers adaptés au mode de vie familial', 'médecins, assurance et santé', 'mobilité familiale', 'support conjoint', 'activités, quotidien et premiers repères locaux'],
    permitTitle: 'Permis de travail, visa et résidence : ne pas mélanger les procédures',
    permitText: 'Pour un salarié étranger, le bon parcours dépend notamment de sa nationalité, de sa situation en Turquie, de l’employeur et de la nature de la mission. Un titre de séjour n’est pas, à lui seul, une autorisation de travailler. Bosphoras prépare la séquence et coordonne les professionnels compétents ; la décision appartient aux autorités.',
    permitItems: ['déterminer si la mission nécessite un permis de travail ou peut relever d’un régime spécifique', 'vérifier si la demande doit être préparée depuis l’étranger ou peut suivre une procédure intérieure', 'aligner contrat, employeur, documents et calendrier d’arrivée', 'éviter de lancer logement, école ou déménagement sur un calendrier administratif irréaliste'],
    officialTitle: 'Références officielles',
    officialText: 'Pour les sujets d’immigration et de travail, nous privilégions les sources publiques turques et les professionnels habilités. Les règles peuvent évoluer : la vérification se fait au moment du dossier.',
    hrTitle: 'Ce que le service RH ou la direction reçoit',
    hrText: 'La relocation doit être lisible pour l’entreprise autant que pour le salarié. Bosphoras peut structurer la mission autour d’un calendrier commun, d’un responsable local et d’un suivi clair des dépendances.',
    hrItems: ['brief consolidé salarié + famille', 'check-list des documents et responsabilités', 'planning des étapes avant et après arrivée', 'coordination logement, mobilité et prestataires', 'points de blocage et décisions à prendre', 'suivi post-installation et besoins récurrents'],
    housingTitle: 'House hunting et installation : le logement fait partie du risque de mission',
    housingText: 'Le choix du quartier dépend du bureau, du rythme de déplacement, des écoles, du budget, de la circulation et du mode de vie. Nous évitons une recherche de logement déconnectée du reste du projet.',
    housingItems: ['présélection de quartiers selon le lieu de travail', 'logement temporaire ou bail long terme', 'visites ciblées et comparaison pratique', 'coordination du bail et des vérifications nécessaires', 'internet, services essentiels et installation', 'solutions de mobilité pendant la phase d’arrivée'],
    processTitle: 'Un process corporate en 6 étapes',
    steps: [
      { title: 'Brief entreprise', text: 'Objectif de mission, date cible, responsabilités internes, budget et niveau de service.' },
      { title: 'Profil collaborateur', text: 'Nationalité, situation familiale, documents, contraintes scolaires et besoins personnels.' },
      { title: 'Plan de relocation', text: 'Séquence immigration, logement, école, assurance, banque, mobilité et arrivée.' },
      { title: 'Préparation', text: 'Documents, partenaires, visites, logement temporaire et calendrier des rendez-vous.' },
      { title: 'Arrivée en Turquie', text: 'Accueil, visites, installation, démarches prioritaires et accompagnement terrain.' },
      { title: 'Suivi post-arrivée', text: 'Clôture des points ouverts, renouvellements, famille et besoins récurrents de l’entreprise.' },
    ],
    citiesTitle: 'Où accompagnons-nous les collaborateurs ? Partout en Turquie.',
    cities: [
      { name: 'Toute la Turquie', text: 'Bosphoras peut coordonner une relocation corporate dans toute la Turquie, y compris lorsque le collaborateur rejoint une usine, un site industriel, une filiale, un chantier ou une implantation régionale.' },
      { name: 'Grands pôles économiques', text: 'Istanbul, Ankara, Izmir, Bursa, Kocaeli, Antalya et autres grands bassins d’emploi : logement, mobilité, famille et coordination administrative sont adaptés à la mission.' },
      { name: 'Sites industriels & régions', text: 'Pour les groupes dont les usines ou opérations sont implantées hors des métropoles, nous construisons le dispositif local selon le site, les déplacements, le logement disponible et les besoins de la famille.' },
    ],
    privateOffice: 'Un bureau privé local, pas un empilement de prestataires',
    privateText: 'Bosphoras ne remplace ni l’avocat, ni le fiscaliste, ni l’administration. Nous coordonnons le dossier, sélectionnons les interlocuteurs utiles et gardons une vue d’ensemble pour l’entreprise et le collaborateur.',
    tags: ['Interlocuteur local unique', 'RH & directions', 'Cadres dirigeants', 'Salariés expatriés', 'Familles internationales', 'Confidentialité'],
    related: 'À préparer également pour une mobilité en Turquie',
    faqTitle: 'Questions fréquentes sur la relocation corporate en Turquie',
    finalTitle: 'Vous préparez la mobilité d’un collaborateur en Turquie ?',
    finalText: 'Envoyez-nous la ville, la date d’arrivée, le profil du salarié et le périmètre attendu. Nous cadrons ensuite les étapes et les interlocuteurs à mobiliser.',
    finalCta: 'Présenter la mission',
    confidential: 'Échange confidentiel · Sans engagement',
    faq: [
      ['Qu’est-ce qu’un service de corporate relocation en Turquie ?', 'C’est la coordination de l’installation d’un salarié ou dirigeant envoyé en Turquie : immigration et droit au travail selon le dossier, logement, famille, école, assurance, banque, mobilité, démarches locales et suivi après l’arrivée.'],
      ['Quelle différence entre relocation corporate et simple recherche de logement ?', 'La recherche de logement n’est qu’une partie du parcours. Une relocation corporate relie le calendrier d’arrivée, le statut administratif, le lieu de travail, la famille, l’école, la mobilité et les obligations de l’entreprise.'],
      ['Un titre de séjour permet-il automatiquement de travailler en Turquie ?', 'Non. Le droit de séjour et le droit de travailler relèvent de procédures distinctes. Le parcours doit être vérifié selon le statut du salarié, l’employeur et les règles applicables au moment de la demande.'],
      ['Bosphoras dépose-t-il directement les permis de travail et demandes juridiques ?', 'Bosphoras coordonne le dossier et les intervenants. Les actes réglementés, conseils juridiques et procédures nécessitant un professionnel habilité sont réalisés par les partenaires compétents et les décisions restent celles des autorités.'],
      ['Pouvez-vous organiser le logement d’un cadre supérieur à Istanbul ?', 'Oui. Nous pouvons coordonner logement temporaire, sélection de quartiers, house hunting, visites, négociation pratique, bail et installation des services essentiels selon le périmètre retenu.'],
      ['La relocation peut-elle inclure le conjoint et les enfants ?', 'Oui. École, logement familial, assurance, santé, mobilité, activités et support conjoint font souvent partie du succès réel de la mission internationale.'],
      ['Travaillez-vous directement avec les services RH ?', 'Oui. Le brief peut être piloté par les RH, la direction, un mobility manager, un family office ou directement par le collaborateur, avec un périmètre et des responsabilités définis au départ.'],
      ['Quelles villes couvrez-vous en Turquie ?', 'Bosphoras intervient en priorité à Istanbul, Bodrum et Antalya. D’autres villes peuvent être étudiées selon la mission et le réseau disponible.'],
    ],
  },
  en: {
    metaTitle: "Corporate Relocation Turkey: Executives & HR | Bosphoras",
    title: 'Corporate relocation in Turkey for executives, expatriate employees and international families',
    eyebrow: 'Bosphoras · Private Office · Corporate Relocation',
    description: "Move your executives and employees to Türkiye: work permits, housing, schooling, family support and HR coordination with one local point of contact.",
    hero: 'Bosphoras coordinates an employee’s move to Turkey as one project: entry status, work permit or residence depending on the case, housing, family, insurance, banking, mobility and practical setup. The company keeps one local point of contact while regulated matters are handled by qualified professionals.',
    cta: 'Plan a relocation',
    toc: 'On this page',
    directTitle: 'Corporate relocation in Turkey: what does Bosphoras actually coordinate?',
    directText: 'We frame the assignment with the company or HR team, prepare the employee and family journey, coordinate the relevant providers and professionals, and follow the move before arrival and after the employee starts work. The goal is not to stack services but to remove the friction that can delay an international assignment.',
    scopeTitle: 'Support before, during and after arrival',
    scopeIntro: 'The scope is defined around the assignment, employee status, city, family and employer obligations.',
    cardTitles: ['Before arrival', 'Arrival & housing', 'Immigration & compliance', 'Family & settling-in'],
    before: ['HR, management and employee brief', 'mobility timeline and target start date', 'visa / work / residence pathway review with the relevant professionals', 'document checklist', 'housing budget and districts', 'spouse, children and school needs'],
    arrival: ['temporary accommodation when needed', 'house hunting and district shortlist', 'viewings and lease coordination', 'internet and essential utilities setup', 'airport transfer, chauffeur and mobility', 'administrative appointments and local onboarding'],
    immigration: ['work permit coordination with qualified partner', 'residence permit / ikamet when relevant', 'health insurance depending on the case', 'address and administrative changes', 'renewals and document follow-up', 'lawyer, accountant or tax adviser coordination when required'],
    family: ['international or local schools', 'family-friendly districts', 'doctors, insurance and healthcare', 'family mobility', 'spouse support', 'activities, daily life and first local references'],
    permitTitle: 'Work permit, visa and residence: keep the procedures distinct',
    permitText: 'For a foreign employee, the correct route depends on nationality, current status in Turkey, employer and assignment type. A residence permit alone is not a work authorisation. Bosphoras structures the sequence and coordinates qualified professionals; official decisions remain with the authorities.',
    permitItems: ['determine whether the assignment requires a work permit or may fall under a specific regime', 'confirm whether the application starts abroad or can follow a domestic route', 'align employment contract, employer, documents and arrival timeline', 'avoid committing to housing, school or shipment on an unrealistic administrative schedule'],
    officialTitle: 'Official references',
    officialText: 'For immigration and employment matters, we prioritise Turkish public sources and qualified professionals. Rules can change, so the file is checked at the time of the assignment.',
    hrTitle: 'What HR or management receives',
    hrText: 'Relocation needs to be clear for the company as well as the employee. Bosphoras can structure the assignment around one timeline, one local owner and clear dependencies.',
    hrItems: ['consolidated employee + family brief', 'document and responsibility checklist', 'timeline before and after arrival', 'housing, mobility and provider coordination', 'blockers and decisions requiring attention', 'post-arrival follow-up and recurring needs'],
    housingTitle: 'House hunting and settling-in: housing is part of assignment risk',
    housingText: 'The right district depends on the office, commute, schools, budget, traffic and lifestyle. We avoid treating housing as a search disconnected from the rest of the assignment.',
    housingItems: ['district shortlist based on workplace', 'temporary housing or long-term lease', 'targeted viewings and practical comparison', 'lease coordination and required checks', 'internet, utilities and essential setup', 'mobility solutions during the arrival phase'],
    processTitle: 'A 6-step corporate process',
    steps: [
      { title: 'Company brief', text: 'Assignment objective, target date, internal responsibilities, budget and service level.' },
      { title: 'Employee profile', text: 'Nationality, family, documents, schooling constraints and personal needs.' },
      { title: 'Relocation plan', text: 'Sequence for immigration, housing, school, insurance, banking, mobility and arrival.' },
      { title: 'Preparation', text: 'Documents, partners, viewings, temporary housing and appointment timeline.' },
      { title: 'Arrival in Turkey', text: 'Welcome, viewings, settling-in, priority formalities and field support.' },
      { title: 'Post-arrival follow-up', text: 'Close open points, renewals, family support and recurring company needs.' },
    ],
    citiesTitle: 'Where do we support employees? Across Turkey.',
    cities: [
      { name: 'Across Turkey', text: 'Bosphoras can coordinate corporate relocation anywhere in Turkey, including assignments linked to factories, industrial sites, regional subsidiaries, construction projects or local operations.' },
      { name: 'Major business hubs', text: 'Istanbul, Ankara, Izmir, Bursa, Kocaeli, Antalya and other employment centres: housing, mobility, family support and local coordination are adapted to the assignment.' },
      { name: 'Industrial & regional sites', text: 'When a group operates outside the main metropolitan areas, we build the local relocation setup around the site, commute, housing availability and family needs.' },
    ],
    privateOffice: 'A local private office, not a stack of providers',
    privateText: 'Bosphoras does not replace lawyers, tax advisers or authorities. We coordinate the file, select the right contacts and keep the full picture visible for both company and employee.',
    tags: ['One local point of contact', 'HR & management', 'Senior executives', 'Expatriate employees', 'International families', 'Confidentiality'],
    related: 'Also prepare for a move to Turkey',
    faqTitle: 'Corporate relocation Turkey FAQ',
    finalTitle: 'Preparing an employee move to Turkey?',
    finalText: 'Send us the city, target arrival date, employee profile and expected scope. We then frame the steps and the professionals to involve.',
    finalCta: 'Present the assignment',
    confidential: 'Confidential exchange · No commitment',
    faq: [
      ['What is a corporate relocation service in Turkey?', 'It is the coordinated setup of an employee or executive moving to Turkey: immigration and right-to-work pathway, housing, family, school, insurance, banking, mobility, local formalities and post-arrival follow-up.'],
      ['How is corporate relocation different from house hunting?', 'Housing is only one part. Corporate relocation connects the arrival timeline, administrative status, workplace, family, schooling, mobility and the employer’s responsibilities.'],
      ['Does a Turkish residence permit automatically allow an employee to work?', 'No. Residence and the right to work are separate matters. The correct route must be checked against the employee’s status, employer and current rules.'],
      ['Does Bosphoras directly file work permits and provide legal advice?', 'Bosphoras coordinates the file and the relevant providers. Regulated legal work and procedures requiring qualified professionals are handled by competent partners, while official decisions remain with the authorities.'],
      ['Can you organise executive housing in Istanbul?', 'Yes. We can coordinate temporary housing, district selection, house hunting, viewings, practical lease support and essential utilities within the agreed scope.'],
      ['Can the service include spouse and children?', 'Yes. School, family housing, insurance, healthcare, mobility, activities and spouse support are often critical to a successful international assignment.'],
      ['Do you work directly with HR teams?', 'Yes. The brief can be led by HR, management, a mobility manager, family office or the employee, with scope and responsibilities defined at the start.'],
      ['Which cities do you cover?', 'Bosphoras focuses on Istanbul, Bodrum and Antalya. Other Turkish cities can be assessed depending on the assignment and available network.'],
    ],
  },
  ru: {
    metaTitle: "Релокация сотрудников и руководителей в Турцию | Bosphoras",
    title: 'Корпоративный релокейшн в Турцию для руководителей, сотрудников-экспатов и международных семей',
    eyebrow: 'Bosphoras · Частный офис · Corporate Relocation',
    description: "Корпоративная релокация в Турцию: разрешение на работу, жильё, школы, семья и координация с HR. Единый локальный контакт Bosphoras.",
    hero: 'Bosphoras координирует переезд сотрудника в Турцию как единый проект: въезд, разрешение на работу или ВНЖ в зависимости от ситуации, жильё, семья, страхование, банк, мобильность и бытовая адаптация. У компании остаётся один локальный контакт, а регулируемые вопросы ведут квалифицированные специалисты.',
    cta: 'Организовать релокейшн',
    toc: 'На этой странице',
    directTitle: 'Корпоративный релокейшн в Турцию: что именно координирует Bosphoras?',
    directText: 'Мы формируем задачу вместе с компанией или HR, готовим маршрут сотрудника и семьи, координируем нужных поставщиков и специалистов и сопровождаем переезд до приезда и после выхода на работу.',
    scopeTitle: 'Сопровождение до, во время и после приезда',
    scopeIntro: 'Объём услуги определяется по миссии, статусу сотрудника, городу, семейной ситуации и обязанностям работодателя.',
    cardTitles: ['До приезда', 'Прибытие и жильё', 'Иммиграция и compliance', 'Семья и адаптация'],
    before: ['бриф HR, руководства и сотрудника', 'календарь мобильности и дата выхода', 'проверка visa / work / residence маршрута со специалистами', 'список документов', 'бюджет жилья и районы', 'потребности супруга, детей и школы'],
    arrival: ['временное жильё при необходимости', 'house hunting и выбор районов', 'просмотры и координация аренды', 'интернет и базовые услуги', 'аэропорт, водитель и мобильность', 'административные встречи и локальный onboarding'],
    immigration: ['координация разрешения на работу', 'ВНЖ / ikamet когда применимо', 'медицинская страховка', 'адрес и административные изменения', 'продления и документы', 'юрист, бухгалтер или налоговый консультант при необходимости'],
    family: ['международные и местные школы', 'районы для семьи', 'врачи, страхование и медицина', 'семейная мобильность', 'поддержка супруга', 'повседневная адаптация'],
    permitTitle: 'Разрешение на работу, виза и ВНЖ — это разные процедуры',
    permitText: 'Маршрут иностранного сотрудника зависит от гражданства, текущего статуса в Турции, работодателя и характера миссии. Сам по себе ВНЖ не является разрешением на работу. Bosphoras координирует последовательность и специалистов; решение принимают государственные органы.',
    permitItems: ['определить, требуется ли разрешение на работу или применяется специальный режим', 'проверить, начинается ли процедура за рубежом или возможна внутри Турции', 'согласовать контракт, работодателя, документы и дату приезда', 'не привязывать жильё, школу и переезд к нереалистичному административному графику'],
    officialTitle: 'Официальные источники',
    officialText: 'По вопросам иммиграции и занятости мы опираемся на государственные источники Турции и квалифицированных специалистов. Правила проверяются на момент конкретного дела.',
    hrTitle: 'Что получает HR или руководство',
    hrText: 'Релокейшн должен быть понятен и компании, и сотруднику. Мы можем выстроить единый календарь, одного локального ответственного и прозрачные зависимости.',
    hrItems: ['единый бриф сотрудник + семья', 'список документов и ответственности', 'календарь до и после приезда', 'координация жилья, мобильности и поставщиков', 'блокеры и решения', 'поддержка после приезда'],
    housingTitle: 'House hunting и установка: жильё — часть риска миссии',
    housingText: 'Район выбирается с учётом офиса, поездок, школ, бюджета, трафика и образа жизни. Жильё нельзя рассматривать отдельно от всего проекта.',
    housingItems: ['районы с учётом места работы', 'временное жильё или долгосрочная аренда', 'целевые просмотры', 'координация договора и проверок', 'интернет и базовые сервисы', 'мобильность на период приезда'],
    processTitle: 'Корпоративный процесс в 6 этапов',
    steps: [
      { title: 'Бриф компании', text: 'Цель миссии, дата, внутренние ответственные, бюджет и уровень сервиса.' },
      { title: 'Профиль сотрудника', text: 'Гражданство, семья, документы, школа и личные ограничения.' },
      { title: 'План релокации', text: 'Последовательность иммиграции, жилья, школы, страховки, банка и мобильности.' },
      { title: 'Подготовка', text: 'Документы, партнёры, просмотры, временное жильё и встречи.' },
      { title: 'Приезд в Турцию', text: 'Встреча, просмотры, установка, приоритетные процедуры и сопровождение.' },
      { title: 'После приезда', text: 'Закрытие открытых вопросов, продления, семья и повторяющиеся запросы компании.' },
    ],
    citiesTitle: 'Где мы сопровождаем сотрудников? По всей Турции.',
    cities: [
      { name: 'Вся Турция', text: 'Bosphoras может координировать корпоративный релокейшн по всей Турции, в том числе для сотрудников, направленных на заводы, промышленные площадки, региональные филиалы, стройки и локальные объекты.' },
      { name: 'Крупные деловые центры', text: 'Istanbul, Ankara, Izmir, Bursa, Kocaeli, Antalya и другие центры занятости: жильё, мобильность, семья и локальная координация адаптируются под миссию.' },
      { name: 'Промышленные и региональные площадки', text: 'Если предприятие находится за пределами мегаполиса, мы строим локальную схему с учётом места работы, поездок, доступного жилья и потребностей семьи.' },
    ],
    privateOffice: 'Локальный частный офис, а не набор несвязанных подрядчиков',
    privateText: 'Bosphoras не заменяет юриста, налогового консультанта или государственные органы. Мы координируем dossier, выбираем нужных специалистов и сохраняем полную картину для компании и сотрудника.',
    tags: ['Один локальный контакт', 'HR и руководство', 'Руководители', 'Сотрудники-экспаты', 'Международные семьи', 'Конфиденциальность'],
    related: 'Что ещё подготовить для переезда в Турцию',
    faqTitle: 'FAQ по корпоративному релокейшну в Турцию',
    finalTitle: 'Готовите переезд сотрудника в Турцию?',
    finalText: 'Пришлите город, дату приезда, профиль сотрудника и ожидаемый объём. Мы структурируем этапы и нужных специалистов.',
    finalCta: 'Представить миссию',
    confidential: 'Конфиденциально · Без обязательств',
    faq: [
      ['Что такое corporate relocation в Турцию?', 'Это координация переезда сотрудника или руководителя: иммиграционный и рабочий статус, жильё, семья, школа, страхование, банк, мобильность и сопровождение после приезда.'],
      ['Чем relocation отличается от простого поиска квартиры?', 'Жильё — только часть процесса. Relocation связывает дату приезда, административный статус, офис, семью, школу, мобильность и обязанности работодателя.'],
      ['ВНЖ автоматически даёт право работать в Турции?', 'Нет. Право проживания и право работы — разные вопросы. Маршрут нужно проверять по статусу сотрудника, работодателю и актуальным правилам.'],
      ['Bosphoras сам подаёт разрешение на работу и даёт юридические советы?', 'Bosphoras координирует dossier и специалистов. Регулируемые юридические услуги выполняют квалифицированные партнёры, а решения принимают государственные органы.'],
      ['Можно организовать жильё для senior executive в Istanbul?', 'Да. Мы можем координировать временное жильё, районы, house hunting, просмотры, договор аренды и базовую установку.'],
      ['Можно включить супруга и детей?', 'Да. Школа, семейное жильё, страхование, медицина, мобильность и поддержка супруга часто критичны для успешной миссии.'],
      ['Вы работаете напрямую с HR?', 'Да. Бриф может идти от HR, руководства, mobility manager, family office или самого сотрудника.'],
      ['Какие города вы покрываете?', 'В приоритете Istanbul, Bodrum и Antalya. Другие города можно рассмотреть в зависимости от миссии и доступного network.'],
    ],
  },
  ar: {
    metaTitle: "الانتقال المؤسسي إلى تركيا للمديرين والموظفين | Bosphoras",
    title: 'الانتقال المؤسسي إلى تركيا للمديرين التنفيذيين والموظفين المغتربين والعائلات الدولية',
    eyebrow: 'Bosphoras · مكتب خاص · Corporate Relocation',
    description: "انتقال المديرين والموظفين إلى تركيا: تصاريح العمل والسكن والمدارس والأسرة والتنسيق مع الموارد البشرية عبر جهة اتصال محلية واحدة.",
    hero: 'ينسق Bosphoras انتقال الموظف إلى تركيا كمشروع واحد: وضع الدخول، تصريح العمل أو الإقامة حسب الحالة، السكن، العائلة، التأمين، البنك، التنقل والاستقرار العملي. تحتفظ الشركة بنقطة اتصال محلية واحدة بينما يتولى المهنيون المؤهلون المسائل المنظمة.',
    cta: 'تنظيم انتقال موظف',
    toc: 'في هذه الصفحة',
    directTitle: 'الانتقال المؤسسي إلى تركيا: ماذا ينسق Bosphoras فعلياً؟',
    directText: 'نحدد المهمة مع الشركة أو HR، ونجهز مسار الموظف والعائلة، وننسق مقدمي الخدمات والمهنيين المناسبين، ثم نتابع الانتقال قبل الوصول وبعد بدء العمل.',
    scopeTitle: 'مرافقة قبل الوصول وأثناءه وبعده',
    scopeIntro: 'يُحدد نطاق الخدمة حسب المهمة ووضع الموظف والمدينة والعائلة والتزامات صاحب العمل.',
    cardTitles: ['قبل الوصول', 'الوصول والسكن', 'الهجرة والامتثال', 'العائلة والاستقرار'],
    before: ['brief مع HR والإدارة والموظف', 'جدول الانتقال وتاريخ بدء العمل', 'مراجعة مسار visa / work / residence مع المختصين', 'قائمة الوثائق', 'ميزانية السكن والأحياء', 'احتياجات الزوج والأطفال والمدرسة'],
    arrival: ['سكن مؤقت عند الحاجة', 'house hunting واختيار الأحياء', 'الزيارات وتنسيق عقد الإيجار', 'الإنترنت والخدمات الأساسية', 'المطار والسائق والتنقل', 'المواعيد الإدارية وonboarding محلي'],
    immigration: ['تنسيق تصريح العمل مع شريك مختص', 'الإقامة / ikamet عند الحاجة', 'التأمين الصحي', 'العنوان والتغييرات الإدارية', 'التجديد ومتابعة الوثائق', 'تنسيق محامٍ أو محاسب أو مستشار ضريبي عند الحاجة'],
    family: ['مدارس دولية أو محلية', 'أحياء مناسبة للعائلة', 'أطباء وتأمين وصحة', 'تنقل العائلة', 'دعم الزوج أو الزوجة', 'الحياة اليومية والتأقلم'],
    permitTitle: 'تصريح العمل والتأشيرة والإقامة إجراءات مختلفة',
    permitText: 'يعتمد المسار الصحيح للموظف الأجنبي على الجنسية والوضع الحالي في تركيا وصاحب العمل وطبيعة المهمة. الإقامة وحدها ليست تصريح عمل. ينسق Bosphoras التسلسل والمهنيين المؤهلين، بينما تبقى القرارات للسلطات.',
    permitItems: ['تحديد ما إذا كانت المهمة تحتاج إلى تصريح عمل أو نظام خاص', 'التحقق مما إذا كانت الإجراءات تبدأ من الخارج أو يمكن تنفيذها من داخل تركيا', 'مواءمة العقد وصاحب العمل والوثائق وتاريخ الوصول', 'تجنب ربط السكن والمدرسة والانتقال بجدول إداري غير واقعي'],
    officialTitle: 'مراجع رسمية',
    officialText: 'في مسائل الهجرة والعمل نعتمد على المصادر الحكومية التركية والمهنيين المؤهلين. يتم التحقق من القواعد وقت كل ملف.',
    hrTitle: 'ما الذي يحصل عليه HR أو الإدارة',
    hrText: 'يجب أن تكون عملية الانتقال واضحة للشركة وللموظف. يمكن لـ Bosphoras تنظيم المهمة حول جدول واحد ومسؤول محلي واحد واعتماديات واضحة.',
    hrItems: ['brief موحد للموظف والعائلة', 'قائمة الوثائق والمسؤوليات', 'جدول قبل الوصول وبعده', 'تنسيق السكن والتنقل ومقدمي الخدمات', 'العوائق والقرارات المطلوبة', 'متابعة بعد الوصول'],
    housingTitle: 'البحث عن السكن والاستقرار: السكن جزء من مخاطر المهمة',
    housingText: 'يعتمد الحي المناسب على المكتب والتنقل والمدارس والميزانية وحركة المرور ونمط الحياة. لذلك لا نعالج السكن بشكل منفصل عن المشروع.',
    housingItems: ['اختيار الأحياء حسب مكان العمل', 'سكن مؤقت أو عقد طويل', 'زيارات مستهدفة ومقارنة عملية', 'تنسيق العقد والفحوص المطلوبة', 'الإنترنت والخدمات الأساسية', 'حلول تنقل خلال مرحلة الوصول'],
    processTitle: 'عملية مؤسسية في 6 مراحل',
    steps: [
      { title: 'Brief الشركة', text: 'هدف المهمة والتاريخ والمسؤوليات الداخلية والميزانية ومستوى الخدمة.' },
      { title: 'ملف الموظف', text: 'الجنسية والعائلة والوثائق والمدرسة والاحتياجات الشخصية.' },
      { title: 'خطة الانتقال', text: 'تسلسل الهجرة والسكن والمدرسة والتأمين والبنك والتنقل.' },
      { title: 'التحضير', text: 'الوثائق والشركاء والزيارات والسكن المؤقت والمواعيد.' },
      { title: 'الوصول إلى تركيا', text: 'الاستقبال والزيارات والاستقرار والإجراءات ذات الأولوية والدعم الميداني.' },
      { title: 'المتابعة', text: 'إغلاق النقاط المفتوحة والتجديدات والعائلة واحتياجات الشركة المتكررة.' },
    ],
    citiesTitle: 'أين نرافق الموظفين؟ في جميع أنحاء تركيا.',
    cities: [
      { name: 'جميع أنحاء تركيا', text: 'يمكن لـ Bosphoras تنسيق الانتقال المؤسسي في جميع أنحاء تركيا، بما في ذلك الموظفون المنتقلون إلى المصانع والمواقع الصناعية والفروع الإقليمية والمشاريع ومواقع التشغيل المحلية.' },
      { name: 'المراكز الاقتصادية الرئيسية', text: 'Istanbul وAnkara وIzmir وBursa وKocaeli وAntalya وغيرها من مراكز العمل: يتم تكييف السكن والتنقل ودعم العائلة والتنسيق المحلي حسب المهمة.' },
      { name: 'المواقع الصناعية والإقليمية', text: 'عندما تكون عمليات المجموعة خارج المدن الكبرى، نبني خطة الانتقال المحلية وفق موقع العمل والتنقل وتوفر السكن واحتياجات العائلة.' },
    ],
    privateOffice: 'مكتب خاص محلي وليس مجموعة مقدمي خدمات منفصلين',
    privateText: 'لا يحل Bosphoras محل المحامي أو المستشار الضريبي أو السلطات. نحن ننسق الملف ونختار المختصين المناسبين ونحافظ على رؤية كاملة للشركة والموظف.',
    tags: ['نقطة اتصال محلية واحدة', 'HR والإدارة', 'مديرون تنفيذيون', 'موظفون مغتربون', 'عائلات دولية', 'سرية'],
    related: 'مواضيع أخرى للتحضير للانتقال إلى تركيا',
    faqTitle: 'أسئلة شائعة حول الانتقال المؤسسي إلى تركيا',
    finalTitle: 'هل تحضرون انتقال موظف إلى تركيا؟',
    finalText: 'أرسلوا المدينة وتاريخ الوصول وملف الموظف ونطاق الخدمة المتوقع، ثم ننظم المراحل والمهنيين المطلوبين.',
    finalCta: 'عرض المهمة',
    confidential: 'تبادل سري · دون التزام',
    faq: [
      ['ما هي خدمة corporate relocation في تركيا؟', 'هي تنسيق انتقال موظف أو مدير إلى تركيا: وضع الهجرة والعمل، السكن، العائلة، المدرسة، التأمين، البنك، التنقل والمتابعة بعد الوصول.'],
      ['ما الفرق بين relocation والبحث عن شقة فقط؟', 'السكن جزء واحد فقط. Relocation يربط تاريخ الوصول والوضع الإداري ومكان العمل والعائلة والمدرسة والتنقل والتزامات صاحب العمل.'],
      ['هل الإقامة التركية تمنح حق العمل تلقائياً؟', 'لا. الإقامة وحق العمل موضوعان مختلفان ويجب التحقق من المسار حسب وضع الموظف وصاحب العمل والقواعد الحالية.'],
      ['هل يقدم Bosphoras الطلبات القانونية مباشرة؟', 'ينسق Bosphoras الملف والمتخصصين. الأعمال القانونية المنظمة يتولاها شركاء مؤهلون، بينما تبقى القرارات للسلطات الرسمية.'],
      ['هل يمكن تنظيم سكن مدير تنفيذي في إسطنبول؟', 'نعم. يمكننا تنسيق السكن المؤقت واختيار الأحياء وhouse hunting والزيارات والعقد والخدمات الأساسية.'],
      ['هل يمكن أن تشمل الخدمة الزوج والأطفال؟', 'نعم. المدرسة والسكن العائلي والتأمين والصحة والتنقل ودعم الزوج أو الزوجة عناصر مهمة لنجاح المهمة.'],
      ['هل تعملون مباشرة مع HR؟', 'نعم. يمكن أن يأتي brief من HR أو الإدارة أو mobility manager أو family office أو الموظف نفسه.'],
      ['ما المدن التي تغطونها؟', 'نركز على Istanbul وBodrum وAntalya، ويمكن دراسة مدن أخرى حسب المهمة والشبكة المتاحة.'],
    ],
  },
};

const relatedLinks: Record<Locale, Array<[string, string]>> = {
  fr: [
    ['/visa-travail-turquie', 'Visa & travail en Turquie'],
    ['/titre-sejour-turquie', 'Titre de séjour Turquie'],
    ['/services/installation-en-turquie', 'Installation en Turquie'],
    ['/services/sante-assurance', 'Santé & assurance'],
    ['/immobilier-turquie', 'Immobilier en Turquie'],
    ['/transfert-aeroport-istanbul', 'Transfert & chauffeur'],
    ['/creation-entreprise-turquie', 'Création d’entreprise'],
    ['/services/conseil-juridique-fiscal', 'Juridique & fiscal'],
  ],
  en: [
    ['/en/turkey-work-visa', 'Turkey work visa'],
    ['/en/turkey-residence-permit', 'Turkey residence permit'],
    ['/en/services/relocate-to-turkey', 'Relocate to Turkey'],
    ['/en/services/health-insurance', 'Health & insurance'],
    ['/en/property-turkey', 'Property in Turkey'],
    ['/en/istanbul-airport-transfer', 'Transfer & chauffeur'],
    ['/en/services/business-setup', 'Company setup'],
    ['/en/services/legal-tax-advisory', 'Legal & tax'],
  ],
  ru: [
    ['/ru/uslugi/pereezd-v-turtsiyu', 'Переезд в Турцию'],
    ['/ru/uslugi/zdorove-strakhovanie', 'Здоровье и страхование'],
    ['/ru/nedvizhimost-v-turtsii', 'Недвижимость в Турции'],
    ['/ru/transfer-aeroport-stambul', 'Трансфер и водитель'],
    ['/ru/uslugi/sozdanie-kompanii', 'Создание компании'],
    ['/ru/uslugi/yuridicheskie-nalogovye-konsultatsii', 'Право и налоги'],
  ],
  ar: [
    ['/ar/خدمات/الانتقال-إلى-تركيا', 'الانتقال إلى تركيا'],
    ['/ar/خدمات/الصحة-والتأمين', 'الصحة والتأمين'],
    ['/ar/عقارات-تركيا', 'العقار في تركيا'],
    ['/ar/istanbul-airport-transfer', 'النقل والسائق'],
    ['/ar/خدمات/تأسيس-الشركات', 'تأسيس الشركات'],
    ['/ar/خدمات/استشارات-قانونية-ضريبية', 'القانون والضرائب'],
  ],
};

const assessmentPaths: Record<Locale, string> = {
  fr: '/diagnostic-prive',
  en: '/en/private-assessment',
  ru: '/ru/chastnaya-konsultatsiya',
  ar: '/ar/تقييم-خاص',
};

const serviceCards = [
  { key: 'before' as const, icon: Plane },
  { key: 'arrival' as const, icon: Home },
  { key: 'immigration' as const, icon: Landmark },
  { key: 'family' as const, icon: Users },
];

export function getCorporateRelocationMetadata(locale: Locale): Metadata {
  const c = content[locale];
  const canonical = siteUrl + paths[locale];
  return {
    title: { absolute: c.metaTitle },
    metadataBase: new URL(siteUrl),
    description: c.description,
    alternates: {
      canonical,
      languages: {
        fr: siteUrl + paths.fr,
        en: siteUrl + paths.en,
        ru: siteUrl + paths.ru,
        ar: siteUrl + paths.ar,
        'x-default': siteUrl + paths.fr,
      },
    },
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
      title: c.metaTitle,
      description: c.description,
      url: canonical,
      siteName: 'Bosphoras',
      type: 'website',
      images: [{ url: '/images/travel/istanbul/city/nisantasi-abdi-ipekci.webp', width: 1200, height: 630, alt: c.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.metaTitle,
      description: c.description,
      images: ['/images/travel/istanbul/city/nisantasi-abdi-ipekci.webp'],
    },
  };
}


const relocationSources=[
 ['Ministry of Labour — work permit criteria','https://www.csgb.gov.tr/uigm/en/calisma-izni/calisma-izni-degerlendirme-kriterleri/'],
 ['Ministry of Labour — application and review','https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/'],
 ['Ministry of Labour — application documents','https://www.csgb.gov.tr/uigm/en/general-information/information-and-documents-required-in-the-work-permit-evaluation-process/'],
 ['Ministry of Labour — fees','https://csgb.gov.tr/uigm/en/general-information/harc-ve-degerli-k%C3%A2git-bedelinin-odenmesi/'],
 ['Migration Management — residence permits','https://en.goc.gov.tr/residence-permit-types'],
 ['IICS — admissions','https://www.iics.k12.tr/admissions/']
];
function RelocationTable({headers,rows}:{headers:string[],rows:string[][]}){return <div className="overflow-x-auto border-y border-[#d9e0e2]"><table className="w-full min-w-[520px] text-sm md:text-base"><thead className="bg-[#193344] text-white"><tr>{headers.map(h=><th key={h} scope="col" className="p-4 text-start font-medium">{h}</th>)}</tr></thead><tbody>{rows.map((r,i)=><tr key={i} className="border-b border-[#d9e0e2]">{r.map((x,j)=>j===0?<th key={j} scope="row" className="p-4 text-start align-top font-medium">{x}</th>:<td key={j} className="p-4 align-top">{x}</td>)}</tr>)}</tbody></table></div>}
export function CorporateRelocationServicePage({locale}:{locale:Locale}){
 const c=corporateRelocationEditorial[locale],d=mobilityDetails[locale].relocation,previous=content[locale];
 const path=paths[locale],url=siteUrl+path;
 const contact=withAssessmentContext(assessmentPaths[locale],path,c.title,'corporate-relocation');
 const company=getLocalePath(locale,getSlugForPage('business-setup',locale)||'/');
 const questions=Array.from(new Map([...d.answers,...previous.faq].map(a=>[a[0],a])).values());
 const btn=<Link href={contact} className="inline-flex min-h-[48px] items-center bg-[#193344] text-white px-7 py-4 font-medium hover:bg-[#25485e]">{c.cta}</Link>;
 const img=(src:string,index:number,priority=false)=><figure><div className="relative aspect-[4/3] overflow-hidden bg-[#e6ebed]"><Image src={src} alt={c.photos[index]} fill priority={priority} sizes="(max-width:1024px) 100vw,50vw" className="object-cover"/></div><figcaption className="mt-2 text-xs">{c.photos[index]}</figcaption></figure>;
 return <main lang={locale} dir={locale==='ar'?'rtl':'ltr'} className="min-h-screen bg-[#faf9f6] text-[#193344]">
 <Header locale={locale} currentPath={path}/>
 <StructuredData data={organizationSchema()}/><StructuredData data={serviceSchema({name:c.title,description:previous.description,url})}/><StructuredData data={faqSchema(questions.map(([question,answer])=>({question,answer})))}/><StructuredData data={breadcrumbSchema([{name:'Bosphoras',url:siteUrl},{name:c.title,url}])}/>
 <section className="pt-32 md:pt-40 pb-12"><div className="container-editorial grid gap-10 lg:grid-cols-2 lg:items-center"><div><h1 className="font-serif text-4xl md:text-6xl leading-tight">{c.title}</h1><p className="mt-6 text-lg leading-8">{c.intro}</p><div className="mt-7 flex flex-wrap items-center gap-5">{btn}<a href="tel:+905467699996" className="underline underline-offset-4" dir="ltr">+90 546 769 99 96</a></div></div>{img('/images/travel/istanbul/city/nisantasi-abdi-ipekci.webp',0,true)}</div></section>
 <div className="border-y border-[#d9e0e2]"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-5 py-6">{c.trust.map(x=><p key={x} className="text-sm font-medium">{x}</p>)}</div></div>
 <nav className="container-editorial flex flex-wrap gap-x-6 gap-y-3 py-7 text-sm" aria-label={previous.toc}>{['services','hr','permits','housing','budget','faq'].map((id,i)=><a key={id} href={'#'+id} className="underline underline-offset-4">{c.nav[i]}</a>)}</nav>
 <div className="container-editorial space-y-20 pb-20">
 <section><h2 className="font-serif text-3xl md:text-4xl">{c.why}</h2><p className="mt-5 max-w-4xl text-lg leading-8">{c.whyText}</p><h2 className="mt-10 font-serif text-3xl">{c.profilesTitle}</h2><div className="grid md:grid-cols-2 gap-x-12 gap-y-7 mt-7">{c.profiles.map(([h,p])=><article key={h} className="border-t border-[#b9c5ca] pt-5"><h3 className="font-serif text-2xl">{h}</h3><p className="mt-3 leading-8">{p}</p></article>)}</div></section>
 <section id="services" className="scroll-mt-32"><h2 className="font-serif text-3xl md:text-4xl">{c.serviceTitle}</h2><div className="mt-8 grid md:grid-cols-2 gap-x-12 gap-y-7">{c.services.map(([h,p])=><article key={h} className="border-t border-[#b9c5ca] pt-5"><h3 className="font-serif text-2xl">{h}</h3><p className="mt-3 leading-8">{p}</p></article>)}</div><div className="mt-8">{btn}</div></section>
 <section id="hr" className="scroll-mt-32 space-y-7"><h2 className="font-serif text-3xl md:text-4xl">{c.hrTitle}</h2><p className="max-w-4xl leading-8 text-lg">{c.hrIntro}</p><RelocationTable headers={c.hrHeaders} rows={c.hrRows}/><p className="text-sm leading-7 max-w-4xl">{c.privacy}</p><h3 className="font-serif text-3xl pt-3">{c.timelineTitle}</h3><ol className="grid gap-4 md:grid-cols-3">{c.timelineLabels.map((h,i)=><li key={h} className="border-t-2 border-[#193344] pt-4"><h4 className="font-medium">{h}</h4><p className="mt-2 text-sm leading-7">{d.steps[i]}</p></li>)}</ol><p className="text-sm leading-7">{c.timelineNote}</p></section>
 <section id="permits" className="scroll-mt-32 space-y-7"><h2 className="font-serif text-3xl md:text-4xl">{c.permitTitle}</h2><p className="max-w-4xl leading-8 text-lg">{c.permitLead}</p><div className="bg-[#193344] text-white p-7 md:p-10"><p className="font-serif text-5xl">{c.timing}</p><p className="mt-4 leading-8">{c.timingLabel}</p></div><RelocationTable headers={d.headers} rows={d.rows}/><p className="leading-8 max-w-4xl">{d.note}</p><figure className="max-w-4xl border border-[#d9e0e2] bg-white p-6 md:p-9"><figcaption className="font-serif text-2xl">{c.payTitle}</figcaption><div className="mt-6 space-y-5">{[5,4,3,2,1].map((n,i)=><div key={n}><div className="flex justify-between gap-4 mb-2"><span>{c.payLabels[i]}</span><strong dir="ltr">{(33030*n).toLocaleString(locale)} TRY</strong></div><div className="bg-[#e6ebed] h-3" aria-hidden="true"><div className="bg-[#193344] h-3" style={{width:n/5*100+'%'}}/></div></div>)}</div><p className="mt-5 text-sm leading-7">{c.payNote}</p></figure><div>{btn}</div></section>
 <section id="housing" className="scroll-mt-32"><h2 className="font-serif text-3xl md:text-4xl">{c.housingTitle}</h2><p className="mt-4 leading-8 max-w-4xl">{c.housingIntro}</p><div className="grid gap-9 mt-7 lg:grid-cols-2">{img('/images/travel/istanbul/raffles/raffles-03-suite.webp',1)}<div className="space-y-5">{c.neighborhoods.map(([h,p])=><article key={h}><h3 className="font-serif text-2xl">{h}</h3><p className="mt-2 leading-7">{p}</p></article>)}</div></div><div className="mt-12 grid gap-9 lg:grid-cols-2 lg:items-center"><div><h2 className="font-serif text-3xl md:text-4xl">{c.schoolTitle}</h2><p className="mt-4 leading-8">{c.schoolText}</p></div>{img('/images/travel/istanbul/city/ortakoy-bosphorus.webp',2)}</div></section>
 <section className="grid gap-9 lg:grid-cols-2 lg:items-center">{img('/images/home.driver.jpg',3)}<div><h2 className="font-serif text-3xl md:text-4xl">{c.coverageTitle}</h2><p className="mt-4 leading-8">{c.coverage}</p></div></section>
 <section id="budget" className="scroll-mt-32 space-y-7"><h2 className="font-serif text-3xl md:text-4xl">{c.budgetTitle}</h2><p className="max-w-4xl leading-8 text-lg">{c.budgetIntro}</p><RelocationTable headers={c.budgetHeaders} rows={c.budgetRows}/><p className="max-w-4xl leading-8">{d.answers[2][1]}</p><div>{btn}</div></section>
 <section className="border-y border-[#b9c5ca] py-9"><h2 className="font-serif text-3xl md:text-4xl">{c.taxTitle}</h2><p className="mt-4 leading-8 max-w-4xl">{c.taxText}</p><Link href={company} className="inline-block mt-5 underline underline-offset-4">{c.companyLink}</Link></section>
 <section id="faq" className="scroll-mt-32"><h2 className="font-serif text-3xl md:text-4xl">{c.faqTitle}</h2><div className="mt-7 divide-y divide-[#d9e0e2]">{questions.map(([q,a])=><details key={q} className="py-5"><summary className="cursor-pointer font-medium text-lg">{q}</summary><p className="mt-4 leading-8 max-w-4xl">{a}</p></details>)}</div></section>
 <section className="border-t border-[#d9e0e2] pt-7"><h2 className="font-serif text-xl">{c.sources}</h2><div className="mt-3 flex flex-wrap gap-x-6 gap-y-3 text-sm">{relocationSources.map(([label,href])=><a key={href} href={href} target="_blank" rel="noreferrer" className="underline underline-offset-4">{label}</a>)}</div><div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">{relatedLinks[locale].map(([href,label])=><Link key={href} href={href} className="underline underline-offset-4">{label}</Link>)}</div></section>
 <section className="bg-[#193344] text-white p-8 md:p-12"><h2 className="font-serif text-3xl md:text-4xl">{c.endTitle}</h2><p className="mt-5 max-w-3xl leading-8">{c.endText}</p><Link href={contact} className="inline-flex mt-7 bg-white text-[#193344] px-7 py-4 font-medium">{c.cta}</Link></section>
 </div><Footer locale={locale}/></main>
}
export { paths as corporateRelocationPaths, content as corporateRelocationContent };
