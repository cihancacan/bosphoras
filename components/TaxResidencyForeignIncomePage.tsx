import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { faqSchema, organizationSchema, websiteSchema } from '@/lib/seo';

export const taxResidencyForeignIncomePaths: Record<Locale, string> = {
  fr: '/fiscalite-turquie-resident-etranger-20-ans',
  en: '/turkey-tax-residency-foreign-income-20-years',
  ru: '/nalogovoe-rezidentstvo-turtsii-inostrannye-dohody-20-let',
  ar: '/turkey-tax-residency-foreign-income-20-years',
};

export const taxResidencyForeignIncomeUrls: Record<Locale, string> = {
  fr: 'https://bosphoras.com/fiscalite-turquie-resident-etranger-20-ans',
  en: 'https://bosphoras.com/en/turkey-tax-residency-foreign-income-20-years',
  ru: 'https://bosphoras.com/ru/nalogovoe-rezidentstvo-turtsii-inostrannye-dohody-20-let',
  ar: 'https://bosphoras.com/ar/turkey-tax-residency-foreign-income-20-years',
};

export const taxResidencyForeignIncomeAlternates: Record<string, string> = {
  fr: taxResidencyForeignIncomeUrls.fr,
  en: taxResidencyForeignIncomeUrls.en,
  ru: taxResidencyForeignIncomeUrls.ru,
  ar: taxResidencyForeignIncomeUrls.ar,
  'x-default': taxResidencyForeignIncomeUrls.en,
};

export const taxResidencyForeignIncomeSeo: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: 'Fiscalité Turquie résident étranger : revenus étrangers exonérés 20 ans | Bosphoras',
    description:
      'Projet fiscal 2026 en Turquie : exonération potentielle de 20 ans sur certains revenus étrangers pour nouveaux résidents. Conditions, profils concernés et diagnostic privé Bosphoras.',
  },
  en: {
    title: 'Turkey tax residency: 20-year foreign income exemption | Bosphoras',
    description:
      'Turkey 2026 tax proposal: a potential 20-year exemption on certain foreign income for new residents. Conditions, eligible profiles and private assessment by Bosphoras.',
  },
  ru: {
    title: 'Налоговое резидентство Турции: льгота 20 лет на иностранные доходы | Bosphoras',
    description:
      'Налоговый проект Турции 2026: потенциальная 20-летняя льгота на отдельные иностранные доходы для новых резидентов. Условия, профили и частная консультация Bosphoras.',
  },
  ar: {
    title: 'الإقامة الضريبية في تركيا: إعفاء 20 سنة على الدخل الأجنبي | Bosphoras',
    description:
      'مشروع ضريبي تركي 2026: إعفاء محتمل لمدة 20 سنة على بعض الدخل الأجنبي للمقيمين الجدد. الشروط والفئات المعنية وتقييم خاص من Bosphoras.',
  },
};

type PageCopy = {
  badge: string;
  h1: string;
  intro: string;
  shortLabel: string;
  shortAnswer: string;
  note: string;
  sections: Array<{ title: string; body: string; bullets: string[] }>;
  strategyTitle: string;
  strategyBody: string;
  steps: string[];
  concernedTitle: string;
  concerned: string[];
  notForTitle: string;
  notFor: string[];
  ctaTitle: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  relatedTitle: string;
  relatedText: string;
  relatedHref: string;
  relatedLabel: string;
};

const assessmentHref: Record<Locale, string> = {
  fr: '/diagnostic-prive',
  en: '/en/private-assessment',
  ru: '/ru/chastnaya-konsultatsiya',
  ar: '/ar/تقييم-خاص',
};

const servicesHref: Record<Locale, string> = {
  fr: '/services',
  en: '/en/services',
  ru: '/ru/uslugi',
  ar: '/ar/خدمات',
};

const oldTaxPageHref: Record<Locale, string> = {
  fr: '/exoneration-fiscale-turquie-20-ans-etrangers',
  en: '/en/turkey-20-year-tax-exemption-foreigners',
  ru: '/ru/nalogovaya-lgota-turtsiya-20-let-inostrantsy',
  ar: '/ar/turkey-20-year-tax-exemption-foreigners',
};

const copy: Record<Locale, PageCopy> = {
  fr: {
    badge: 'Fiscalité Turquie · nouveaux résidents étrangers',
    h1: 'Fiscalité en Turquie pour résident étranger : comprendre l’exonération potentielle de 20 ans sur les revenus étrangers',
    intro:
      'La Turquie prépare une mesure fiscale capable de changer son attractivité auprès des investisseurs, entrepreneurs, familles patrimoniales et dirigeants internationaux : une exonération potentielle de 20 ans sur certains revenus obtenus hors de Turquie pour les personnes physiques qui deviennent résidentes en Turquie sous conditions.',
    shortLabel: 'Réponse courte',
    shortAnswer:
      'Le projet vise les personnes physiques qui deviennent résidentes en Turquie à partir du 1er janvier 2026, sans résidence ni assujettissement fiscal en Turquie durant les 3 années civiles précédentes. Sous conditions, certains revenus étrangers pourraient être exclus de l’impôt sur le revenu turc pendant 20 ans.',
    note:
      'Important : il s’agit d’un projet de loi en cours d’adoption. Toute décision doit être confirmée après publication officielle, textes d’application et analyse par un avocat fiscaliste qualifié.',
    sections: [
      {
        title: 'Ce que prévoit le projet',
        body: 'Le dispositif vise les revenus et gains obtenus hors de Turquie par certains nouveaux résidents fiscaux. L’objectif annoncé est d’encourager l’arrivée de capitaux, talents, familles et profils internationaux en Turquie.',
        bullets: [
          'Exonération potentielle de 20 ans sur certains revenus étrangers.',
          'Condition centrale : ne pas avoir eu de domicile ni de statut fiscal en Turquie durant les 3 années civiles précédentes.',
          'Application annoncée pour les personnes devenant résidentes en Turquie à partir du 1er janvier 2026.',
          'Les revenus étrangers exonérés ne seraient pas inclus dans la déclaration annuelle turque.',
        ],
      },
      {
        title: 'Pourquoi cela peut intéresser les investisseurs',
        body: 'La mesure peut placer la Turquie entre plusieurs mondes : proximité Europe, accès à Istanbul, coûts de vie plus rationnels que certaines places premium, système bancaire local, immobilier, santé privée et réseau régional vers le Golfe, l’Asie centrale et l’Europe.',
        bullets: [
          'Entrepreneurs avec dividendes ou revenus d’activités hors Turquie.',
          'Consultants internationaux avec revenus facturés à l’étranger.',
          'Familles patrimoniales cherchant une base de résidence structurée.',
          'Investisseurs qui comparent Istanbul, Dubaï, Lisbonne, Monaco ou Londres.',
        ],
      },
      {
        title: 'Ce qu’il faut vérifier avant de s’installer',
        body: 'L’enjeu n’est pas seulement de venir vivre en Turquie. Il faut vérifier la résidence fiscale, le pays d’origine, les conventions fiscales, la nature des revenus, les obligations déclaratives, la banque, la famille, la succession et le niveau de conformité attendu.',
        bullets: [
          'La nature exacte des revenus étrangers : dividendes, intérêts, plus-values, honoraires, revenus immobiliers, revenus de société.',
          'Le statut fiscal dans le pays de départ et les éventuelles conventions fiscales.',
          'La preuve de non-résidence fiscale en Turquie pendant les 3 années précédentes.',
          'Les règles de transfert, de banque, de patrimoine familial et de succession.',
        ],
      },
    ],
    strategyTitle: 'La stratégie Bosphoras : transformer une opportunité fiscale en décision structurée',
    strategyBody:
      'Bosphoras ne vend pas une promesse fiscale. Bosphoras organise une analyse privée, coordonne les bons professionnels et aide le client à prendre une décision lisible : venir, attendre, structurer, créer une société, choisir Istanbul, Bodrum ou Antalya, ou renoncer si le profil n’est pas adapté.',
    steps: [
      'Analyse confidentielle du profil : nationalité, résidence actuelle, famille, revenus, société, actifs et objectifs.',
      'Pré-diagnostic des points à vérifier avec avocat fiscaliste, comptable, banque, assurance et conseil patrimonial.',
      'Comparaison des options : résidence privée, société, centre de services, immobilier, santé, scolarité, banque et lifestyle.',
      'Coordination locale à Istanbul, Bodrum ou Antalya avec un interlocuteur unique.',
      'Suivi post-installation : documents, rendez-vous, transferts, conformité, vie privée et services récurrents.',
    ],
    concernedTitle: 'Profils directement concernés',
    concerned: [
      'Investisseurs privés avec revenus financiers ou patrimoniaux hors Turquie.',
      'Entrepreneurs et dirigeants avec sociétés à l’étranger.',
      'Consultants, experts, créateurs et profils internationaux facturant hors Turquie.',
      'Familles fortunées souhaitant une base de résidence entre Europe, Golfe et Asie centrale.',
      'Clients de banque privée qui veulent comparer la Turquie à Dubaï, Londres, Lisbonne ou Monaco.',
      'Diaspora ou étrangers n’ayant pas été résidents fiscaux en Turquie récemment.',
    ],
    notForTitle: 'Profils à analyser avec prudence',
    notFor: [
      'Personnes ayant déjà une résidence ou une présence fiscale récente en Turquie.',
      'Profils dont l’essentiel des revenus est généré en Turquie.',
      'Clients avec situation bancaire, déclarative ou successorale complexe non documentée.',
      'Personnes recherchant une promesse fiscale sans analyse professionnelle.',
    ],
    ctaTitle: 'Demander une analyse privée de votre éligibilité',
    ctaBody:
      'Avant de prendre une décision d’installation, Bosphoras peut organiser un diagnostic privé de votre situation et coordonner les bons professionnels pour vérifier les conditions, les risques et la stratégie la plus adaptée.',
    ctaPrimary: 'Demander mon diagnostic privé',
    ctaSecondary: 'Voir les services Bosphoras',
    faqTitle: 'Questions fréquentes',
    faqs: [
      {
        question: 'La Turquie offre-t-elle déjà 20 ans d’exonération fiscale aux étrangers ?',
        answer:
          'Le texte est présenté comme un projet de loi. Il faut attendre l’adoption définitive, la publication officielle et les règles d’application avant de traiter la mesure comme pleinement applicable.',
      },
      {
        question: 'Quels revenus seraient concernés ?',
        answer:
          'Le projet vise les gains et revenus obtenus hors de Turquie par certaines personnes devenant résidentes en Turquie. La qualification exacte doit être validée par un fiscaliste selon la nature des revenus.',
      },
      {
        question: 'Les revenus turcs sont-ils exonérés ?',
        answer:
          'Non, le cœur du dispositif concerne les revenus étrangers. Les revenus générés en Turquie doivent être analysés séparément selon les règles fiscales turques.',
      },
      {
        question: 'Puis-je déménager immédiatement pour profiter du dispositif ?',
        answer:
          'Il est déconseillé de décider uniquement sur une annonce. Il faut vérifier votre pays de départ, vos revenus, les conventions fiscales, votre famille, vos documents et le calendrier juridique.',
      },
      {
        question: 'Quel est le rôle de Bosphoras ?',
        answer:
          'Bosphoras coordonne une analyse privée, filtre les interlocuteurs et organise le parcours avec des professionnels qualifiés. Bosphoras ne remplace pas les avocats, fiscalistes, banques ou autorités.',
      },
    ],
    relatedTitle: 'À lire aussi',
    relatedText: 'Nous avons aussi publié une première page dédiée à l’exonération fiscale de 20 ans pour les étrangers en Turquie.',
    relatedHref: oldTaxPageHref.fr,
    relatedLabel: 'Lire la première analyse',
  },
  en: {
    badge: 'Turkey tax · new foreign residents',
    h1: 'Turkey tax residency for foreigners: understanding the potential 20-year exemption on foreign income',
    intro:
      'Turkey is preparing a tax measure that could reshape its appeal for investors, entrepreneurs, wealthy families and internationally mobile executives: a potential 20-year exemption on certain foreign-source income for individuals becoming tax residents in Turkey under specific conditions.',
    shortLabel: 'Short answer',
    shortAnswer:
      'The proposal targets individuals becoming residents in Turkey from 1 January 2026, provided they had no residence and no tax liability in Turkey during the previous 3 calendar years. Under conditions, certain foreign-source income could be excluded from Turkish income tax for 20 years.',
    note:
      'Important: this is a draft law under review. Any decision must be confirmed after final adoption, official publication, implementing rules and analysis by a qualified tax lawyer.',
    sections: [
      {
        title: 'What the proposal provides',
        body: 'The measure targets foreign-source income and gains earned by certain new tax residents. The stated objective is to encourage the arrival of capital, talent, families and international profiles in Turkey.',
        bullets: [
          'Potential 20-year exemption on certain foreign-source income.',
          'Key condition: no residence and no tax status in Turkey during the previous 3 calendar years.',
          'Announced application for individuals becoming residents in Turkey from 1 January 2026.',
          'Exempt foreign income would not be included in the annual Turkish income tax return.',
        ],
      },
      {
        title: 'Why this matters for investors',
        body: 'The measure could position Turkey between several worlds: proximity to Europe, access to Istanbul, more rational living costs than some premium jurisdictions, local banking, property, private healthcare and a regional bridge to the Gulf, Central Asia and Europe.',
        bullets: [
          'Entrepreneurs with dividends or business income outside Turkey.',
          'International consultants with foreign-billed revenue.',
          'Wealthy families seeking a structured residence base.',
          'Investors comparing Istanbul with Dubai, Lisbon, Monaco or London.',
        ],
      },
      {
        title: 'What must be checked before relocating',
        body: 'The issue is not simply moving to Turkey. Tax residence, country of departure, tax treaties, income nature, reporting obligations, banking, family situation, succession and expected compliance level must all be reviewed.',
        bullets: [
          'The exact nature of foreign income: dividends, interest, capital gains, fees, property income, company income.',
          'Tax status in the country of departure and applicable tax treaties.',
          'Evidence of no Turkish tax residence during the previous 3 years.',
          'Transfer, banking, family wealth and succession rules.',
        ],
      },
    ],
    strategyTitle: 'The Bosphoras strategy: turning a tax opportunity into a structured decision',
    strategyBody:
      'Bosphoras does not sell a tax promise. Bosphoras organizes a private assessment, coordinates the right professionals and helps the client make a clear decision: relocate, wait, structure, create a company, choose Istanbul, Bodrum or Antalya, or step back if the profile is not suitable.',
    steps: [
      'Confidential profile review: nationality, current residence, family, income, companies, assets and objectives.',
      'Pre-assessment of points to verify with a tax lawyer, accountant, bank, insurance advisor and wealth specialist.',
      'Comparison of options: private residence, company, service center, property, healthcare, schooling, banking and lifestyle.',
      'Local coordination in Istanbul, Bodrum or Antalya through one private contact point.',
      'Post-relocation follow-up: documents, appointments, transfers, compliance, privacy and recurring services.',
    ],
    concernedTitle: 'Profiles directly concerned',
    concerned: [
      'Private investors with financial or wealth income outside Turkey.',
      'Entrepreneurs and executives with companies abroad.',
      'Consultants, experts, creators and international profiles billing outside Turkey.',
      'Wealthy families seeking a residence base between Europe, the Gulf and Central Asia.',
      'Private banking clients comparing Turkey with Dubai, London, Lisbon or Monaco.',
      'Diaspora or foreigners who have not recently been Turkish tax residents.',
    ],
    notForTitle: 'Profiles requiring caution',
    notFor: [
      'People with recent residence or tax presence in Turkey.',
      'Profiles whose main income is generated in Turkey.',
      'Clients with complex banking, reporting or succession situations without documentation.',
      'Anyone seeking a tax promise without professional analysis.',
    ],
    ctaTitle: 'Request a private eligibility assessment',
    ctaBody:
      'Before making a relocation decision, Bosphoras can organize a private assessment of your situation and coordinate the right professionals to verify the conditions, risks and most suitable strategy.',
    ctaPrimary: 'Request my private assessment',
    ctaSecondary: 'View Bosphoras services',
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        question: 'Is Turkey already offering a 20-year tax exemption to foreigners?',
        answer:
          'The measure is presented as a draft law. Final adoption, official publication and implementing rules are required before treating it as fully applicable.',
      },
      {
        question: 'Which income would be concerned?',
        answer:
          'The proposal concerns foreign-source gains and income earned by certain individuals becoming residents in Turkey. Exact qualification must be confirmed by a tax professional.',
      },
      {
        question: 'Is Turkish-source income exempt?',
        answer:
          'No. The core of the measure concerns foreign-source income. Income generated in Turkey must be reviewed separately under Turkish tax rules.',
      },
      {
        question: 'Can I relocate immediately to benefit from it?',
        answer:
          'A decision should not be based only on an announcement. Your country of departure, income, tax treaties, family, documents and legal timeline must be reviewed.',
      },
      {
        question: 'What is Bosphoras’ role?',
        answer:
          'Bosphoras coordinates a private assessment, filters the right contacts and organizes the process with qualified professionals. Bosphoras does not replace lawyers, tax advisors, banks or authorities.',
      },
    ],
    relatedTitle: 'Related reading',
    relatedText: 'We have also published an initial page dedicated to the 20-year tax exemption for foreigners in Turkey.',
    relatedHref: oldTaxPageHref.en,
    relatedLabel: 'Read the first analysis',
  },
  ru: {
    badge: 'Налоги Турции · новые иностранные резиденты',
    h1: 'Налоговое резидентство Турции для иностранцев: как понять потенциальную 20-летнюю льготу на иностранные доходы',
    intro:
      'Турция готовит налоговую меру, которая может усилить ее привлекательность для инвесторов, предпринимателей, состоятельных семей и международных руководителей: потенциальное освобождение на 20 лет для отдельных доходов, полученных за пределами Турции, для физических лиц, становящихся налоговыми резидентами Турции при соблюдении условий.',
    shortLabel: 'Короткий ответ',
    shortAnswer:
      'Проект касается физических лиц, которые становятся резидентами Турции с 1 января 2026 года, при условии отсутствия проживания и налогового статуса в Турции в течение предыдущих 3 календарных лет. При соблюдении условий отдельные иностранные доходы могут не облагаться подоходным налогом в Турции в течение 20 лет.',
    note:
      'Важно: речь идет о законопроекте на стадии рассмотрения. Любое решение должно подтверждаться после окончательного принятия, официальной публикации, правил применения и анализа квалифицированным налоговым юристом.',
    sections: [
      {
        title: 'Что предусматривает проект',
        body: 'Мера направлена на иностранные доходы и прирост капитала отдельных новых налоговых резидентов. Заявленная цель — привлечь капитал, таланты, семьи и международные профили в Турцию.',
        bullets: [
          'Потенциальное освобождение на 20 лет для отдельных иностранных доходов.',
          'Ключевое условие: отсутствие проживания и налогового статуса в Турции за предыдущие 3 календарных года.',
          'Заявленное применение для лиц, становящихся резидентами Турции с 1 января 2026 года.',
          'Освобожденные иностранные доходы не должны включаться в годовую декларацию в Турции.',
        ],
      },
      {
        title: 'Почему это важно для инвесторов',
        body: 'Мера может усилить позицию Турции между Европой, Ближним Востоком и Центральной Азией: близость к Европе, доступ к Стамбулу, более рациональные расходы, банковская система, недвижимость, частная медицина и региональный деловой мост.',
        bullets: [
          'Предприниматели с дивидендами или доходами бизнеса за пределами Турции.',
          'Международные консультанты с доходами, выставляемыми иностранным клиентам.',
          'Состоятельные семьи, ищущие структурированную базу резиденции.',
          'Инвесторы, сравнивающие Стамбул с Дубаем, Лиссабоном, Монако или Лондоном.',
        ],
      },
      {
        title: 'Что нужно проверить перед переездом',
        body: 'Вопрос не только в переезде в Турцию. Нужно проверить налоговое резидентство, страну выезда, налоговые соглашения, характер доходов, обязанности по отчетности, банки, семью, наследование и уровень комплаенса.',
        bullets: [
          'Точная природа иностранных доходов: дивиденды, проценты, прирост капитала, гонорары, недвижимость, доходы компании.',
          'Налоговый статус в стране выезда и применимые налоговые соглашения.',
          'Доказательства отсутствия налогового резидентства в Турции за предыдущие 3 года.',
          'Правила перевода средств, банка, семейного капитала и наследования.',
        ],
      },
    ],
    strategyTitle: 'Стратегия Bosphoras: превратить налоговую возможность в структурированное решение',
    strategyBody:
      'Bosphoras не продает налоговое обещание. Bosphoras организует частный анализ, координирует нужных специалистов и помогает клиенту принять понятное решение: переехать, подождать, структурировать активы, создать компанию, выбрать Стамбул, Бодрум или Анталью, либо отказаться, если профиль не подходит.',
    steps: [
      'Конфиденциальный анализ профиля: гражданство, текущая резиденция, семья, доходы, компании, активы и цели.',
      'Предварительная проверка вопросов с налоговым юристом, бухгалтером, банком, страхованием и специалистом по капиталу.',
      'Сравнение вариантов: частная резиденция, компания, сервисный центр, недвижимость, медицина, школа, банк и lifestyle.',
      'Локальная координация в Стамбуле, Бодруме или Анталье через одного частного координатора.',
      'Сопровождение после переезда: документы, встречи, переводы, комплаенс, конфиденциальность и регулярные сервисы.',
    ],
    concernedTitle: 'Кого это может напрямую касаться',
    concerned: [
      'Частные инвесторы с финансовыми или имущественными доходами за пределами Турции.',
      'Предприниматели и руководители с компаниями за рубежом.',
      'Консультанты, эксперты, создатели контента и международные профили, выставляющие счета за пределами Турции.',
      'Состоятельные семьи, ищущие базу резиденции между Европой, Персидским заливом и Центральной Азией.',
      'Клиенты private banking, сравнивающие Турцию с Дубаем, Лондоном, Лиссабоном или Монако.',
      'Диаспора или иностранцы, которые недавно не были налоговыми резидентами Турции.',
    ],
    notForTitle: 'Профили, требующие осторожности',
    notFor: [
      'Лица с недавним проживанием или налоговым присутствием в Турции.',
      'Профили, чей основной доход генерируется в Турции.',
      'Клиенты со сложной банковской, декларационной или наследственной ситуацией без документов.',
      'Лица, ищущие налоговую гарантию без профессионального анализа.',
    ],
    ctaTitle: 'Запросить частную оценку вашей применимости',
    ctaBody:
      'Перед решением о переезде Bosphoras может организовать частный анализ вашей ситуации и координировать нужных специалистов для проверки условий, рисков и оптимальной стратегии.',
    ctaPrimary: 'Запросить частную консультацию',
    ctaSecondary: 'Посмотреть услуги Bosphoras',
    faqTitle: 'Частые вопросы',
    faqs: [
      {
        question: 'Турция уже предоставляет иностранцам налоговую льготу на 20 лет?',
        answer:
          'Мера представлена как законопроект. Нужно дождаться окончательного принятия, официальной публикации и правил применения, прежде чем рассматривать ее как полностью действующую.',
      },
      {
        question: 'Какие доходы могут быть затронуты?',
        answer:
          'Проект касается иностранных доходов и прироста капитала отдельных лиц, становящихся резидентами Турции. Точная квалификация должна подтверждаться налоговым специалистом.',
      },
      {
        question: 'Доходы из Турции освобождаются?',
        answer:
          'Нет. Основной механизм касается иностранных доходов. Доходы, полученные в Турции, должны анализироваться отдельно по турецким налоговым правилам.',
      },
      {
        question: 'Можно ли переезжать сразу, чтобы воспользоваться мерой?',
        answer:
          'Не стоит принимать решение только на основе новости. Нужно проверить страну выезда, доходы, налоговые соглашения, семью, документы и юридический календарь.',
      },
      {
        question: 'Какова роль Bosphoras?',
        answer:
          'Bosphoras координирует частный анализ, отбирает нужных контактов и организует процесс с квалифицированными специалистами. Bosphoras не заменяет юристов, налоговых консультантов, банки или органы власти.',
      },
    ],
    relatedTitle: 'Также читать',
    relatedText: 'Мы также опубликовали первую страницу о 20-летней налоговой льготе для иностранцев в Турции.',
    relatedHref: oldTaxPageHref.ru,
    relatedLabel: 'Читать первый анализ',
  },
  ar: {
    badge: 'ضرائب تركيا · المقيمون الأجانب الجدد',
    h1: 'الإقامة الضريبية في تركيا للأجانب: فهم الإعفاء المحتمل لمدة 20 سنة على الدخل الأجنبي',
    intro:
      'تستعد تركيا لإجراء ضريبي قد يغيّر جاذبيتها للمستثمرين ورواد الأعمال والعائلات الثرية والمديرين الدوليين: إعفاء محتمل لمدة 20 سنة على بعض الدخل المتحقق خارج تركيا للأشخاص الطبيعيين الذين يصبحون مقيمين ضريبياً في تركيا وفق شروط محددة.',
    shortLabel: 'الجواب المختصر',
    shortAnswer:
      'يستهدف المشروع الأشخاص الطبيعيين الذين يصبحون مقيمين في تركيا اعتباراً من 1 يناير 2026، بشرط عدم وجود إقامة أو صفة ضريبية في تركيا خلال السنوات التقويمية الثلاث السابقة. وفق الشروط، قد يتم استبعاد بعض الدخل الأجنبي من ضريبة الدخل التركية لمدة 20 سنة.',
    note:
      'مهم: هذا مشروع قانون قيد المراجعة. يجب تأكيد أي قرار بعد الاعتماد النهائي والنشر الرسمي وصدور قواعد التطبيق وتحليل محامٍ ضريبي مؤهل.',
    sections: [
      {
        title: 'ما الذي ينص عليه المشروع',
        body: 'يستهدف الإجراء الدخل والأرباح الأجنبية لبعض المقيمين الضريبيين الجدد. الهدف المعلن هو تشجيع دخول رؤوس الأموال والمواهب والعائلات والملفات الدولية إلى تركيا.',
        bullets: [
          'إعفاء محتمل لمدة 20 سنة على بعض الدخل الأجنبي.',
          'شرط أساسي: عدم وجود إقامة أو وضع ضريبي في تركيا خلال السنوات التقويمية الثلاث السابقة.',
          'تطبيق معلن للأشخاص الذين يصبحون مقيمين في تركيا اعتباراً من 1 يناير 2026.',
          'الدخل الأجنبي المعفى لن يتم إدراجه في الإقرار السنوي التركي.',
        ],
      },
      {
        title: 'لماذا يهم ذلك المستثمرين',
        body: 'قد يضع هذا الإجراء تركيا بين عدة عوالم: القرب من أوروبا، الوصول إلى إسطنبول، تكاليف حياة أكثر عقلانية من بعض الوجهات الراقية، البنوك المحلية، العقارات، الصحة الخاصة والجسر الإقليمي نحو الخليج وآسيا الوسطى وأوروبا.',
        bullets: [
          'رواد أعمال لديهم توزيعات أرباح أو دخل أعمال خارج تركيا.',
          'استشاريون دوليون يحققون إيرادات مفوترة خارج تركيا.',
          'عائلات ثرية تبحث عن قاعدة إقامة منظمة.',
          'مستثمرون يقارنون إسطنبول بدبي ولشبونة وموناكو ولندن.',
        ],
      },
      {
        title: 'ما يجب التحقق منه قبل الانتقال',
        body: 'المسألة ليست مجرد الانتقال إلى تركيا. يجب مراجعة الإقامة الضريبية، بلد المغادرة، الاتفاقيات الضريبية، طبيعة الدخل، الالتزامات التصريحية، البنوك، العائلة، الإرث ومستوى الامتثال المطلوب.',
        bullets: [
          'الطبيعة الدقيقة للدخل الأجنبي: أرباح، فوائد، مكاسب رأسمالية، أتعاب، دخل عقاري، دخل شركة.',
          'الوضع الضريبي في بلد المغادرة والاتفاقيات الضريبية المطبقة.',
          'إثبات عدم الإقامة الضريبية في تركيا خلال السنوات الثلاث السابقة.',
          'قواعد التحويل والبنوك والثروة العائلية والإرث.',
        ],
      },
    ],
    strategyTitle: 'استراتيجية Bosphoras: تحويل الفرصة الضريبية إلى قرار منظم',
    strategyBody:
      'Bosphoras لا يبيع وعداً ضريبياً. ينظم Bosphoras تقييماً خاصاً، ينسق المهنيين المناسبين ويساعد العميل على اتخاذ قرار واضح: الانتقال، الانتظار، الهيكلة، تأسيس شركة، اختيار إسطنبول أو بودروم أو أنطاليا، أو التراجع إذا لم يكن الملف مناسباً.',
    steps: [
      'تحليل سري للملف: الجنسية، الإقامة الحالية، العائلة، الدخل، الشركات، الأصول والأهداف.',
      'تقييم أولي للنقاط التي يجب التحقق منها مع محامٍ ضريبي، محاسب، بنك، تأمين ومستشار ثروة.',
      'مقارنة الخيارات: إقامة خاصة، شركة، مركز خدمات، عقار، صحة، تعليم، بنك ونمط حياة.',
      'تنسيق محلي في إسطنبول أو بودروم أو أنطاليا عبر جهة اتصال خاصة واحدة.',
      'متابعة بعد الانتقال: وثائق، مواعيد، تحويلات، امتثال، خصوصية وخدمات متكررة.',
    ],
    concernedTitle: 'الفئات المعنية مباشرة',
    concerned: [
      'مستثمرون خاصون لديهم دخل مالي أو ثروة خارج تركيا.',
      'رواد أعمال ومديرون لديهم شركات في الخارج.',
      'استشاريون وخبراء ومبدعون وملفات دولية تفوتر خارج تركيا.',
      'عائلات ثرية تبحث عن قاعدة إقامة بين أوروبا والخليج وآسيا الوسطى.',
      'عملاء الخدمات المصرفية الخاصة الذين يقارنون تركيا بدبي ولندن ولشبونة وموناكو.',
      'أفراد من الجاليات أو أجانب لم يكونوا مقيمين ضريبياً في تركيا مؤخراً.',
    ],
    notForTitle: 'فئات يجب تحليلها بحذر',
    notFor: [
      'أشخاص لديهم إقامة أو وجود ضريبي حديث في تركيا.',
      'ملفات يكون معظم دخلها متحققاً داخل تركيا.',
      'عملاء لديهم أوضاع مصرفية أو تصريحية أو إرثية معقدة دون وثائق.',
      'أشخاص يبحثون عن وعد ضريبي دون تحليل مهني.',
    ],
    ctaTitle: 'اطلبوا تقييماً خاصاً لمدى انطباق الشروط عليكم',
    ctaBody:
      'قبل اتخاذ قرار الانتقال، يمكن لـ Bosphoras تنظيم تقييم خاص لوضعكم وتنسيق المهنيين المناسبين للتحقق من الشروط والمخاطر والاستراتيجية الأنسب.',
    ctaPrimary: 'اطلبوا التقييم الخاص',
    ctaSecondary: 'عرض خدمات Bosphoras',
    faqTitle: 'الأسئلة الشائعة',
    faqs: [
      {
        question: 'هل تقدم تركيا بالفعل إعفاءً ضريبياً لمدة 20 سنة للأجانب؟',
        answer:
          'الإجراء مقدم كمشروع قانون. يجب انتظار الاعتماد النهائي والنشر الرسمي وقواعد التطبيق قبل اعتباره مطبقاً بالكامل.',
      },
      {
        question: 'ما هي أنواع الدخل المعنية؟',
        answer:
          'يتعلق المشروع بالدخل والأرباح المتحققة خارج تركيا لبعض الأشخاص الذين يصبحون مقيمين في تركيا. يجب تأكيد التصنيف الدقيق مع متخصص ضريبي.',
      },
      {
        question: 'هل الدخل المتحقق في تركيا معفى؟',
        answer:
          'لا. جوهر الإجراء يتعلق بالدخل الأجنبي. الدخل المتحقق في تركيا يجب تحليله بشكل منفصل وفق القواعد الضريبية التركية.',
      },
      {
        question: 'هل يمكنني الانتقال فوراً للاستفادة من الإجراء؟',
        answer:
          'لا ينبغي اتخاذ قرار بناءً على خبر فقط. يجب مراجعة بلد المغادرة، الدخل، الاتفاقيات الضريبية، العائلة، الوثائق والجدول القانوني.',
      },
      {
        question: 'ما دور Bosphoras؟',
        answer:
          'ينسق Bosphoras تقييماً خاصاً، يرشح الجهات المناسبة وينظم المسار مع مهنيين مؤهلين. Bosphoras لا يحل محل المحامين أو المستشارين الضريبيين أو البنوك أو السلطات.',
      },
    ],
    relatedTitle: 'قراءة ذات صلة',
    relatedText: 'نشرنا أيضاً صفحة أولى مخصصة للإعفاء الضريبي لمدة 20 سنة للأجانب في تركيا.',
    relatedHref: oldTaxPageHref.ar,
    relatedLabel: 'قراءة التحليل الأول',
  },
};

function localeUrl(locale: Locale, path: string) {
  if (locale === 'fr') return path;
  return `/${locale}${path}`;
}

export function TaxResidencyForeignIncomePage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const currentPath = localeUrl(locale, taxResidencyForeignIncomePaths[locale]);
  const schema = [
    organizationSchema(),
    websiteSchema(),
    faqSchema(c.faqs),
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: taxResidencyForeignIncomeSeo[locale].title,
      description: taxResidencyForeignIncomeSeo[locale].description,
      author: { '@type': 'Organization', name: 'Bosphoras' },
      publisher: { '@type': 'Organization', name: 'Bosphoras', logo: { '@type': 'ImageObject', url: 'https://bosphoras.com/favicon.svg' } },
      mainEntityOfPage: taxResidencyForeignIncomeUrls[locale],
      datePublished: '2026-05-06',
      dateModified: '2026-05-06',
      inLanguage: locale,
      image: 'https://bosphoras.com/images/og-default.jpg',
    },
  ];

  return (
    <>
      <StructuredData data={schema} />
      <Header locale={locale} currentPath={currentPath} />
      <main dir={dir} className="bg-[#f8f1e7] text-[#101827]">
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_75%_10%,rgba(210,168,99,0.24),transparent_30%),linear-gradient(135deg,#121826_0%,#1c2740_55%,#0b1020_100%)] px-5 pb-20 pt-32 text-[#fffaf0] md:px-8 md:pb-28 md:pt-40">
          <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: 'linear-gradient(#d2a863 1px, transparent 1px), linear-gradient(90deg, #d2a863 1px, transparent 1px)', backgroundSize: '76px 76px' }} />
          <div className="container-editorial relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">{c.badge}</p>
              <h1 className="max-w-5xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-6xl lg:text-7xl">{c.h1}</h1>
              <p className="mt-8 max-w-3xl text-base leading-8 text-[#e7ddc9] md:text-xl md:leading-10">{c.intro}</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href={assessmentHref[locale]} className="inline-flex items-center justify-center bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827] transition hover:bg-[#e0bc78]">{c.ctaPrimary}</Link>
                <Link href={servicesHref[locale]} className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863] transition hover:bg-white/5">{c.ctaSecondary}</Link>
              </div>
            </div>
            <aside className="border border-[#d2a863]/35 bg-[#fffaf0] p-7 text-[#101827] shadow-[0_35px_100px_rgba(0,0,0,0.25)] md:p-9">
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.22em] text-[#8a6728]">{c.shortLabel}</p>
              <p className="mt-5 text-lg leading-8 text-[#243041]">{c.shortAnswer}</p>
              <div className="my-7 h-px bg-[#d8c7a1]" />
              <p className="text-sm leading-7 text-[#6b7280]">{c.note}</p>
            </aside>
          </div>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-3">
            {c.sections.map((section) => (
              <article key={section.title} className="border border-[#d8c7a1] bg-[#fffaf0] p-8 shadow-[0_18px_55px_rgba(16,24,39,0.045)]">
                <h2 className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#121826]">{section.title}</h2>
                <p className="mt-5 text-base leading-8 text-[#3e4857]">{section.body}</p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-[#3e4857]">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b0813e]" /> <span>{item}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]">Bosphoras Private Desk</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-6xl">{c.strategyTitle}</h2>
              <p className="mt-7 text-lg leading-9 text-[#3e4857]">{c.strategyBody}</p>
            </div>
            <div className="border-l border-[#d8c7a1]">
              {c.steps.map((step, index) => (
                <div key={step} className="grid grid-cols-[4.5rem_1fr] border-b border-[#d8c7a1] py-6 last:border-b-0">
                  <span className="font-serif text-3xl text-[#b0813e]">0{index + 1}</span>
                  <p className="text-base leading-8 text-[#3e4857]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-2">
            <article className="border border-[#d8c7a1] bg-[#121826] p-8 text-[#fffaf0] md:p-10">
              <h2 className="font-serif text-4xl tracking-[-0.035em]">{c.concernedTitle}</h2>
              <ul className="mt-8 grid gap-4 text-base leading-8 text-[#d8cfbf]">
                {c.concerned.map((item) => <li key={item} className="border-b border-white/10 pb-4 last:border-b-0">{item}</li>)}
              </ul>
            </article>
            <article className="border border-[#d8c7a1] bg-[#fffaf0] p-8 md:p-10">
              <h2 className="font-serif text-4xl tracking-[-0.035em] text-[#121826]">{c.notForTitle}</h2>
              <ul className="mt-8 grid gap-4 text-base leading-8 text-[#3e4857]">
                {c.notFor.map((item) => <li key={item} className="border-b border-[#d8c7a1] pb-4 last:border-b-0">{item}</li>)}
              </ul>
            </article>
          </div>
        </section>

        <section className="bg-[#121826] px-5 py-16 text-[#fffaf0] md:px-8 md:py-24">
          <div className="mx-auto max-w-[1200px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Private Assessment</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">{c.ctaTitle}</h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-[#d8cfbf]">{c.ctaBody}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href={assessmentHref[locale]} className="inline-flex items-center justify-center bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827] transition hover:bg-[#e0bc78]">{c.ctaPrimary}</Link>
              <Link href={servicesHref[locale]} className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863] transition hover:bg-white/5">{c.ctaSecondary}</Link>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]">FAQ</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-6xl">{c.faqTitle}</h2>
              <div className="mt-8 border border-[#d8c7a1] bg-[#fffaf0] p-6">
                <h3 className="font-serif text-2xl text-[#121826]">{c.relatedTitle}</h3>
                <p className="mt-4 text-sm leading-7 text-[#3e4857]">{c.relatedText}</p>
                <Link href={c.relatedHref} className="mt-5 inline-flex text-xs font-bold uppercase tracking-[0.16em] text-[#8a6728] hover:text-[#121826]">{c.relatedLabel}</Link>
              </div>
            </div>
            <div className="grid gap-px bg-[#d8c7a1]">
              {c.faqs.map((faq) => (
                <article key={faq.question} className="bg-[#f8f1e7] p-7">
                  <h3 className="font-serif text-2xl leading-snug text-[#121826]">{faq.question}</h3>
                  <p className="mt-4 text-base leading-8 text-[#3e4857]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
