import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, FileText, Landmark, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import type { Locale } from '@/lib/i18n';

const paths: Record<Locale, string> = {
  fr: '/regime-non-dom-turquie-fiscalite',
  en: '/en/turkey-non-dom-tax-regime',
  ru: '/ru/turtsiya-non-dom-nalogovyy-rezhim',
  ar: '/ar/turkey-non-dom-tax-regime',
};

const assessmentHref: Record<Locale, string> = {
  fr: '/diagnostic-prive',
  en: '/en/private-assessment',
  ru: '/ru/chastnaya-konsultatsiya',
  ar: '/ar/تقييم-خاص',
};

type PageContent = {
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  hero: string;
  cta: string;
  asideTitle: string;
  finalTitle: string;
  finalText: string;
  faqTitle: string;
  checklist: string[];
  sections: Array<[string, string]>;
  faq: Array<[string, string]>;
};

const content: Record<Locale, PageContent> = {
  fr: {
    title: 'Régime non-dom Turquie : fiscalité des nouveaux résidents et revenus étrangers',
    metaTitle: 'Régime non-dom Turquie : fiscalité des nouveaux résidents 2026',
    description: 'La Turquie prépare un régime fiscal proche du non-dom : revenus étrangers, exonération potentielle de 20 ans, condition des 3 années précédentes, dividendes, plus-values et résidence fiscale.',
    eyebrow: 'Fiscalité internationale · Nouveaux résidents',
    hero: 'La Turquie prépare une mesure fiscale qui peut changer son positionnement international. Pour certains investisseurs, entrepreneurs, expatriés et familles patrimoniales, elle pourrait devenir une alternative sérieuse aux destinations habituellement étudiées pour une résidence privée ou patrimoniale.',
    cta: 'Demander une analyse privée',
    asideTitle: 'Avant d’envisager ce régime',
    finalTitle: 'Comparer un régime fiscal ne suffit pas : il faut vérifier votre situation réelle',
    finalText: 'Avant de choisir la Turquie comme nouvelle base privée ou fiscale, Bosphoras peut organiser une analyse personnalisée de votre résidence, de vos revenus étrangers, de vos sociétés, de vos actifs, de votre banque, de votre famille et de votre calendrier d’installation.',
    faqTitle: 'Questions fréquentes',
    checklist: ['Votre résidence fiscale actuelle', 'Votre historique fiscal en Turquie sur trois ans', 'Vos revenus étrangers par catégorie', 'Vos revenus de source turque éventuels', 'Vos sociétés et leur lieu de direction effective', 'Vos dividendes, plus-values et revenus financiers', 'Vos biens immobiliers hors Turquie', 'Votre famille, votre logement et votre calendrier d’installation'],
    sections: [
      ['Pourquoi le terme non-dom intéresse les investisseurs', 'Le terme non-dom est déjà connu dans le monde patrimonial. Il évoque des régimes étudiés par des entrepreneurs, investisseurs, familles internationales, dirigeants mobiles et clients de banque privée. L’idée générale est qu’une personne peut vivre dans un pays tout en bénéficiant, sous conditions, d’un traitement spécifique sur certains revenus générés à l’étranger. Si le régime turc final confirme une exonération longue sur les revenus étrangers, la Turquie pourrait devenir une destination beaucoup plus visible pour les profils qui comparent fiscalité, qualité de vie, banque, immobilier, santé, famille et accès international.'],
      ['Un régime proche du non-dom, mais à traiter avec prudence', 'Le mot non-dom n’est pas forcément le terme juridique officiel utilisé en Turquie. Il sert surtout à décrire la logique économique du dispositif annoncé : attirer des personnes vivant à l’étranger en leur proposant un cadre favorable sur certains revenus de source étrangère. Cette nuance est importante. Un régime de ce type ne signifie pas que tous les revenus sont exonérés, ni qu’un client peut ignorer les règles de son pays d’origine. Il faut vérifier l’éligibilité, la nature des revenus, les conventions fiscales et la réalité de l’installation.'],
      ['Ce que la Turquie cherche à construire', 'La Turquie veut attirer davantage de capitaux, de talents, d’entrepreneurs, de dirigeants et de familles internationales. Le futur dispositif s’inscrit dans une stratégie plus large : renforcer Istanbul comme hub financier, attirer des centres de services, encourager l’exportation de services, développer certains secteurs industriels et faire venir des personnes à forte valeur économique. Pour un investisseur, le sujet n’est donc pas uniquement fiscal. La vraie question est de savoir si la Turquie peut devenir une base de vie, de gestion, de banque, de patrimoine, de famille et de business.'],
      ['Qui peut être concerné ?', 'Plusieurs profils peuvent être concernés. Un entrepreneur international peut vivre en Turquie tout en conservant une société étrangère, des dividendes, des clients internationaux ou un portefeuille d’investissement hors Turquie. Une famille patrimoniale peut envisager Istanbul, Bodrum ou Antalya comme base privée, avec une réflexion sur résidence, immobilier, assurance santé, succession et organisation familiale. Un dirigeant, consultant ou digital nomad peut vouloir travailler depuis la Turquie pour des clients situés en Europe, au Golfe, en Asie centrale ou en Afrique.'],
      ['La condition clé : votre historique fiscal en Turquie', 'Avant toute réflexion, il faut vérifier l’historique fiscal. Le régime annoncé viserait les personnes qui n’ont pas été résidentes fiscales ou contribuables en Turquie pendant les trois années civiles précédant l’installation. Cette condition peut exclure certains profils déjà installés ou déjà fiscalement liés à la Turquie. Il faut donc vérifier si vous avez récemment vécu en Turquie, déclaré des revenus, possédé un bien locatif, créé une société locale, été enregistré fiscalement ou passé une partie importante de votre temps dans le pays.'],
      ['Les revenus étrangers doivent être analysés catégorie par catégorie', 'Le cœur du sujet est la notion de revenu étranger. Mais un revenu étranger peut prendre plusieurs formes. Les dividendes, plus-values, intérêts, revenus immobiliers, pensions, revenus professionnels, distributions de holding, assurances-vie, trusts ou ventes de société doivent être étudiés séparément. Chaque catégorie peut être imposée dans le pays de source, faire l’objet d’une retenue à la source ou être encadrée par une convention fiscale.'],
      ['Dividendes étrangers : le cas classique des entrepreneurs', 'Un entrepreneur peut recevoir des dividendes d’une société située hors de Turquie. Il faut vérifier où se trouve la société, où elle réalise ses bénéfices, où elle est effectivement dirigée, si une retenue à la source s’applique, quelle convention fiscale s’applique et si la distribution intervient avant ou après l’installation. Pour un actionnaire, la date de résidence fiscale et le calendrier de distribution peuvent avoir une importance majeure.'],
      ['Plus-values étrangères : la vente d’actifs doit être préparée', 'Un investisseur peut vendre des actions étrangères, des parts de société, un portefeuille financier, un bien immobilier hors Turquie ou une participation dans une holding. La date de vente, le pays où se situe l’actif, le lieu de dépôt des titres, le prix d’acquisition, les conventions fiscales et la résidence fiscale au moment de l’opération doivent être documentés. Un changement de résidence fiscale sans préparation peut créer des conséquences inattendues.'],
      ['Consultants, dirigeants et revenus professionnels étrangers', 'Un consultant, freelance, dirigeant ou digital nomad peut travailler depuis la Turquie pour des clients étrangers. Cette situation doit être examinée attentivement. Le client peut être étranger, mais l’activité est-elle réalisée depuis la Turquie ? Où se trouve la société ? Où sont signés les contrats ? Où se trouve la direction effective ? Où est le compte bancaire ? Ce sont ces éléments qui permettent de distinguer un revenu étranger d’une activité potentiellement rattachée à la Turquie.'],
      ['Ce qui ne doit pas être confondu avec le régime non-dom', 'Le régime ne doit pas être compris comme une exonération totale. Il faut distinguer revenus étrangers, revenus turcs, revenus mixtes, revenus d’activité exercée depuis la Turquie, revenus d’une société étrangère dirigée depuis la Turquie, revenus immobiliers hors Turquie et revenus immobiliers situés en Turquie. Un salaire payé par une société turque, un loyer d’un bien turc, une prestation facturée à un client turc ou les dividendes d’une société turque peuvent rester imposables en Turquie.'],
      ['Comparer la Turquie avec Dubaï, l’Italie, le Portugal ou Monaco', 'La Turquie ne doit pas être présentée comme meilleure de manière automatique. Dubaï reste très fort pour l’image internationale, la banque et la fiscalité. L’Italie est connue pour son régime des nouveaux résidents. Monaco reste une référence ultra-premium. Le Portugal a longtemps attiré les expatriés et retraités. La Turquie peut se différencier par une combinaison entre résidence, famille, immobilier, santé, coût de vie, business régional et fiscalité potentiellement compétitive. Le bon choix dépend du profil réel.'],
      ['Les erreurs à éviter', 'La première erreur serait de croire qu’un régime non-dom permet automatiquement de ne plus payer d’impôts nulle part. La deuxième serait de penser que quitter son pays suffit à perdre sa résidence fiscale. La troisième serait de transférer trop vite résidence, comptes ou sociétés sans audit. La quatrième serait de ne regarder que l’impôt, alors qu’une installation réussie inclut aussi banque, assurance santé, immobilier, famille, résidence, conformité, école, succession et mode de vie.'],
      ['Comment Bosphoras peut intervenir', 'Bosphoras intervient comme bureau privé de coordination. L’objectif n’est pas de remplacer un avocat fiscaliste ou de promettre un résultat fiscal. L’objectif est d’organiser un dossier complet avant la décision : analyse de résidence, préparation du dossier personnel, coordination avec fiscalistes et avocats, recherche bancaire, installation familiale, immobilier, assurance santé, création éventuelle de société et coordination comptable.'],
    ],
    faq: [
      ['Le régime non-dom Turquie existe-t-il déjà officiellement ?', 'Le terme non-dom sert surtout à décrire la logique du régime annoncé. Il faut attendre les textes définitifs et les règles d’application pour confirmer les conditions exactes.'],
      ['La Turquie pourrait-elle vraiment exonérer les revenus étrangers pendant 20 ans ?', 'C’est l’objectif annoncé pour certains nouveaux résidents, sous conditions. Le texte doit être confirmé dans sa forme finale et appliqué par les autorités compétentes.'],
      ['Les revenus turcs seraient-ils exonérés ?', 'Non. Les informations disponibles distinguent les revenus étrangers et les revenus de source turque. Les revenus générés en Turquie restent à traiter selon la fiscalité turque.'],
      ['Un entrepreneur peut-il vivre en Turquie avec une société étrangère ?', 'Potentiellement, mais il faut analyser la direction effective, les clients, la substance de la société, les dividendes, les conventions fiscales et le risque que l’activité soit considérée comme exercée depuis la Turquie.'],
      ['Un Français peut-il utiliser ce régime pour quitter la France ?', 'Pas automatiquement. Il faut analyser la résidence fiscale française, le foyer, les sociétés, l’immobilier, les revenus, les jours de présence et la convention fiscale France-Turquie.'],
      ['Est-ce comparable à Dubaï ?', 'La comparaison est possible, mais elle dépend du profil. Dubaï reste fort sur la fiscalité et l’image internationale. La Turquie peut être attractive pour la vie familiale, l’accès régional, l’immobilier, la santé, le business et une fiscalité potentiellement compétitive.'],
      ['Bosphoras donne-t-il un conseil fiscal ?', 'Non. Bosphoras coordonne l’analyse privée, prépare le dossier et met en relation avec les bons fiscalistes, avocats, banques, comptables et partenaires d’installation.'],
    ],
  },
  en: {
    title: 'Turkey non-dom regime: tax treatment for new residents and foreign income',
    metaTitle: 'Turkey non-dom regime: tax for new residents 2026',
    description: 'Turkey is preparing a tax framework close to a non-dom regime: foreign income, potential 20-year exemption, previous three-year condition, dividends, capital gains and tax residence.',
    eyebrow: 'International tax · New residents',
    hero: 'Turkey is preparing a tax measure that could change its international positioning. For some investors, entrepreneurs, expatriates and wealth families, it may become a serious alternative to the jurisdictions usually considered for private or wealth residence.',
    cta: 'Request a private assessment',
    asideTitle: 'Before considering this regime',
    finalTitle: 'Comparing a tax regime is not enough: your real situation must be reviewed',
    finalText: 'Before choosing Turkey as a new private or tax base, Bosphoras can organize a personalized review of your residence, foreign income, companies, assets, banking, family and relocation calendar.',
    faqTitle: 'Frequently asked questions',
    checklist: ['Your current tax residence', 'Your Turkish tax history over three years', 'Your foreign income by category', 'Any Turkish-source income', 'Your companies and effective management location', 'Your dividends, capital gains and financial income', 'Your real estate outside Turkey', 'Your family, housing and relocation calendar'],
    sections: [
      ['Why the non-dom concept matters to investors', 'The non-dom concept is well known in international wealth planning. It is often considered by entrepreneurs, investors, international families, mobile executives and private banking clients. The general idea is that a person may live in a country while receiving specific tax treatment on certain income generated abroad. If Turkey confirms a long-term exemption for foreign income, it could become much more visible for profiles comparing tax, lifestyle, banking, real estate, healthcare, family needs and international access.'],
      ['A non-dom-like regime, but to be handled carefully', 'Non-dom may not be the official legal term used in Turkey. It is mainly a practical way to describe the economic logic of the announced framework: attracting people living abroad by offering favorable treatment on certain foreign-source income. This distinction matters. Such a regime does not mean every type of income is exempt, and it does not allow someone to ignore the rules of the former country of residence. Eligibility, income type, treaties and real relocation evidence all matter.'],
      ['What Turkey is trying to build', 'Turkey wants to attract more capital, talent, entrepreneurs, executives and international families. The future regime is part of a wider strategy: strengthening Istanbul as a financial hub, attracting service centers, encouraging exported services, developing strategic industries and bringing in high-value individuals. For an investor, the question is not only tax. The real question is whether Turkey can become a base for life, management, banking, wealth, family and business.'],
      ['Who may be concerned?', 'Several profiles may be concerned. An international entrepreneur may live in Turkey while keeping a foreign company, dividends, international clients or an investment portfolio abroad. A wealth family may consider Istanbul, Bodrum or Antalya as a private base, with residence, real estate, health insurance, succession and family organization. A consultant, executive or digital nomad may want to work from Turkey for clients located in Europe, the Gulf, Central Asia or Africa.'],
      ['The key condition: your Turkish tax history', 'Before anything else, the tax history must be reviewed. The announced regime appears to target people who have not been Turkish tax residents or Turkish taxpayers during the three calendar years before relocation. This may exclude certain profiles already installed or already linked to Turkey for tax purposes. You should review whether you recently lived in Turkey, declared income, owned rental property, created a local company, had a tax registration or spent significant time in the country.'],
      ['Foreign income must be reviewed category by category', 'The heart of the regime is foreign income. But foreign income can take many forms. Dividends, capital gains, interest, rental income, pensions, professional income, holding distributions, life insurance, trusts or company sale proceeds must be reviewed separately. Each category may be taxed in the source country, be subject to withholding tax or be governed by a treaty.'],
      ['Foreign dividends: a classic case for entrepreneurs', 'An entrepreneur may receive dividends from a company located outside Turkey. The review must identify where the company is located, where it generates profits, where it is effectively managed, whether withholding tax applies, which treaty is relevant and whether the distribution occurs before or after relocation. For a shareholder, the date of tax residence and dividend calendar can be decisive.'],
      ['Foreign capital gains: asset sales should be prepared', 'An investor may sell foreign shares, company interests, a financial portfolio, property outside Turkey or a holding participation. The sale date, the country where the asset is located, the custodian, acquisition price, treaties and tax residence at the time of the transaction must be documented. A change of tax residence without planning can create unexpected consequences.'],
      ['Consultants, executives and foreign professional income', 'A consultant, freelancer, executive or digital nomad may work from Turkey for foreign clients. This situation requires close review. The client may be foreign, but is the activity actually performed from Turkey? Where is the company located? Where are contracts signed? Where is effective management located? Where is the bank account? These points help separate foreign income from activity potentially connected to Turkey.'],
      ['What should not be confused with the non-dom regime', 'The regime should not be understood as a total exemption. Foreign income, Turkish income, mixed income, activity performed from Turkey, income of a foreign company managed from Turkey, foreign real estate income and Turkish real estate income must be separated. Salary paid by a Turkish company, rent from Turkish property, fees billed to a Turkish client or dividends from a Turkish company may remain taxable in Turkey.'],
      ['Comparing Turkey with Dubai, Italy, Portugal or Monaco', 'Turkey should not be presented as automatically better. Dubai remains strong for international image, banking and taxation. Italy is known for its new-resident regime. Monaco remains an ultra-premium reference. Portugal long attracted expats and retirees. Turkey may differentiate itself through a combination of residence, family life, real estate, healthcare, cost of living, regional business and potentially competitive taxation. The right choice depends on the real profile.'],
      ['Mistakes to avoid', 'The first mistake would be believing that a non-dom regime automatically means paying tax nowhere. The second would be assuming that leaving a country is enough to lose tax residence there. The third would be moving residence, bank accounts or companies too quickly without a review. The fourth would be looking only at tax, while a successful relocation also includes banking, health insurance, real estate, family, residence, compliance, school, succession and lifestyle.'],
      ['How Bosphoras can help', 'Bosphoras acts as a private coordination desk. The goal is not to replace a tax lawyer or promise a tax result. The goal is to organize a complete file before the decision: residence analysis, personal file preparation, coordination with tax advisors and lawyers, banking search, family relocation, real estate, health insurance, possible company formation and accounting coordination.'],
    ],
    faq: [
      ['Does a Turkey non-dom regime officially exist?', 'Non-dom is mainly a practical way to describe the logic of the announced regime. Final texts and implementation rules must confirm the exact conditions.'],
      ['Could Turkey really exempt foreign income for 20 years?', 'That is the announced objective for certain new residents, subject to conditions. The final version and implementation by the competent authorities must be confirmed.'],
      ['Would Turkish income be exempt?', 'No. Available information distinguishes foreign income from Turkish-source income. Income generated in Turkey must be reviewed under Turkish tax rules.'],
      ['Can an entrepreneur live in Turkey with a foreign company?', 'Potentially, but effective management, clients, substance, dividends, tax treaties and the risk of activity being considered performed from Turkey must be reviewed.'],
      ['Can a foreign resident use this regime to leave their home country?', 'Not automatically. Former tax residence, home, companies, property, income, days of presence and applicable treaties must be reviewed.'],
      ['Is this comparable to Dubai?', 'A comparison is possible, but it depends on the profile. Dubai remains strong for tax and image. Turkey may be attractive for family life, regional access, real estate, healthcare, business and potentially competitive taxation.'],
      ['Does Bosphoras provide tax advice?', 'No. Bosphoras coordinates the private review, prepares the file and connects clients with suitable tax advisors, lawyers, banks, accountants and relocation partners.'],
    ],
  },
  ru: {
    title: 'Режим non-dom в Турции: налоги новых резидентов и иностранные доходы',
    metaTitle: 'Режим non-dom в Турции: налоги новых резидентов 2026',
    description: 'Турция готовит режим, близкий к non-dom: иностранные доходы, потенциальное освобождение на 20 лет, условие трех лет, дивиденды, прирост капитала и налоговая резиденция.',
    eyebrow: 'Международные налоги · Новые резиденты',
    hero: 'Турция готовит налоговую меру, которая может изменить ее международное позиционирование. Для некоторых инвесторов, предпринимателей, экспатов и состоятельных семей она может стать серьезной альтернативой юрисдикциям, которые обычно рассматриваются для частной или имущественной резиденции.',
    cta: 'Запросить частный анализ',
    asideTitle: 'Перед рассмотрением режима',
    finalTitle: 'Сравнить налоговый режим недостаточно: нужно проверить вашу реальную ситуацию',
    finalText: 'До выбора Турции как новой частной или налоговой базы Bosphoras может организовать персональный анализ вашей резиденции, иностранных доходов, компаний, активов, банков, семьи и календаря переезда.',
    faqTitle: 'Частые вопросы',
    checklist: ['Текущая налоговая резиденция', 'Налоговая история в Турции за три года', 'Иностранные доходы по категориям', 'Возможные доходы из турецкого источника', 'Компании и место фактического управления', 'Дивиденды, прирост капитала и финансовые доходы', 'Недвижимость за пределами Турции', 'Семья, жилье и календарь переезда'],
    sections: [
      ['Почему понятие non-dom интересно инвесторам', 'Понятие non-dom хорошо известно в международном планировании капитала. Его часто рассматривают предприниматели, инвесторы, международные семьи, мобильные руководители и клиенты private banking. Общая идея состоит в том, что человек может жить в стране и при определенных условиях получать особый налоговый режим для отдельных доходов, созданных за рубежом. Если Турция подтвердит долгосрочное освобождение иностранных доходов, она станет намного заметнее для тех, кто сравнивает налоги, качество жизни, банки, недвижимость, медицину, семью и международный доступ.'],
      ['Режим, похожий на non-dom, но требующий осторожности', 'Non-dom может не быть официальным юридическим термином в Турции. Это практичный способ описать экономическую логику объявленного режима: привлечь людей, живущих за рубежом, предложив им благоприятный режим для отдельных иностранных доходов. Это важно понимать. Такой режим не означает освобождение всех доходов и не позволяет игнорировать правила прежней страны резиденции. Важны право на режим, тип доходов, соглашения и доказательства реального переезда.'],
      ['Что Турция пытается построить', 'Турция хочет привлечь больше капитала, талантов, предпринимателей, руководителей и международных семей. Будущий режим вписывается в более широкую стратегию: усилить Стамбул как финансовый хаб, привлечь сервисные центры, развивать экспорт услуг, стратегические отрасли и людей с высокой экономической ценностью. Для инвестора вопрос не только в налогах. Вопрос в том, может ли Турция стать базой для жизни, управления, банков, капитала, семьи и бизнеса.'],
      ['Кого это может касаться?', 'Это может касаться нескольких профилей. Международный предприниматель может жить в Турции, сохраняя иностранную компанию, дивиденды, международных клиентов или инвестиционный портфель за пределами Турции. Состоятельная семья может рассматривать Стамбул, Бодрум или Анталью как частную базу с анализом резиденции, недвижимости, медицинского страхования, наследования и семейной организации. Консультант, руководитель или digital nomad может работать из Турции для клиентов в Европе, Заливе, Центральной Азии или Африке.'],
      ['Ключевое условие: ваша налоговая история в Турции', 'Прежде всего нужно проверить налоговую историю. Объявленный режим ориентирован на лиц, которые не были налоговыми резидентами или налогоплательщиками в Турции в течение трех календарных лет до переезда. Это может исключить некоторые профили, уже связанные с Турцией. Нужно проверить, жили ли вы недавно в Турции, декларировали ли доходы, владели ли арендной недвижимостью, создавали ли местную компанию, имели ли налоговую регистрацию или проводили много времени в стране.'],
      ['Иностранные доходы нужно анализировать по категориям', 'Суть режима — иностранные доходы. Но иностранные доходы бывают разными. Дивиденды, прирост капитала, проценты, аренда, пенсии, профессиональные доходы, распределения холдинга, страхование жизни, trusts или доход от продажи компании должны анализироваться отдельно. Каждая категория может облагаться в стране источника, иметь удержание у источника или регулироваться налоговым соглашением.'],
      ['Иностранные дивиденды: классический случай для предпринимателей', 'Предприниматель может получать дивиденды от компании за пределами Турции. Нужно понять, где находится компания, где она получает прибыль, где фактически управляется, применяется ли удержание у источника, какое соглашение релевантно и происходит ли распределение до или после переезда. Для акционера дата налоговой резиденции и календарь дивидендов могут быть решающими.'],
      ['Иностранный прирост капитала: продажу активов нужно готовить', 'Инвестор может продавать иностранные акции, доли компаний, финансовый портфель, недвижимость за пределами Турции или участие в холдинге. Дата продажи, страна актива, депозитарий, цена покупки, соглашения и налоговая резиденция в момент сделки должны быть документированы. Смена резиденции без подготовки может создать неожиданные последствия.'],
      ['Консультанты, руководители и профессиональные иностранные доходы', 'Консультант, фрилансер, руководитель или digital nomad может работать из Турции на иностранных клиентов. Это требует внимательного анализа. Клиент может быть иностранным, но выполняется ли работа из Турции? Где находится компания? Где подписаны договоры? Где фактическое управление? Где банковский счет? Эти вопросы помогают отличить иностранный доход от деятельности, потенциально связанной с Турцией.'],
      ['Что нельзя путать с режимом non-dom', 'Режим не должен восприниматься как полное освобождение. Нужно разделять иностранные доходы, турецкие доходы, смешанные доходы, деятельность из Турции, доход иностранной компании, управляемой из Турции, доходы от иностранной недвижимости и турецкой недвижимости. Зарплата от турецкой компании, аренда турецкого объекта, услуги турецкому клиенту или дивиденды турецкой компании могут оставаться облагаемыми.'],
      ['Сравнение Турции с Дубаем, Италией, Португалией или Монако', 'Турцию не нужно автоматически представлять как лучший вариант. Дубай силен по международному имиджу, банкам и налогам. Италия известна режимом новых резидентов. Монако остается ультра-премиальной точкой. Португалия долго привлекала экспатов и пенсионеров. Турция может отличаться сочетанием резиденции, семьи, недвижимости, медицины, стоимости жизни, регионального бизнеса и потенциально конкурентной налоговой системы.'],
      ['Ошибки, которых нужно избегать', 'Первая ошибка — считать, что режим non-dom автоматически означает отсутствие налогов где-либо. Вторая — думать, что выезд из страны автоматически прекращает налоговую резиденцию. Третья — слишком быстро переносить резиденцию, счета или компании без анализа. Четвертая — смотреть только на налог, хотя успешный переезд включает банк, медицинское страхование, недвижимость, семью, ВНЖ, compliance, школу, наследование и образ жизни.'],
      ['Как Bosphoras может помочь', 'Bosphoras работает как частный координационный офис. Цель не в том, чтобы заменить налогового юриста или обещать налоговый результат. Цель — организовать полный файл до решения: анализ резиденции, подготовка личного досье, координация с налоговыми специалистами и юристами, поиск банка, семейный переезд, недвижимость, медицинское страхование, возможное создание компании и бухгалтерская координация.'],
    ],
    faq: [
      ['Существует ли официально режим non-dom в Турции?', 'Non-dom — это практичное описание логики объявленного режима. Точные условия должны быть подтверждены финальными текстами и правилами применения.'],
      ['Может ли Турция действительно освобождать иностранные доходы 20 лет?', 'Это заявленная цель для отдельных новых резидентов при соблюдении условий. Финальная версия и применение компетентными органами должны быть подтверждены.'],
      ['Будут ли освобождены турецкие доходы?', 'Нет. Доступная информация разделяет иностранные доходы и доходы из турецкого источника. Доходы, созданные в Турции, анализируются по турецким правилам.'],
      ['Может ли предприниматель жить в Турции с иностранной компанией?', 'Потенциально да, но нужно анализировать фактическое управление, клиентов, substance, дивиденды, налоговые соглашения и риск признания деятельности осуществляемой из Турции.'],
      ['Можно ли использовать режим для выхода из прежней страны?', 'Не автоматически. Нужно анализировать прежнюю резиденцию, дом, компании, недвижимость, доходы, дни присутствия и применимые соглашения.'],
      ['Это сравнимо с Дубаем?', 'Сравнение возможно, но зависит от профиля. Дубай силен по налогам и имиджу. Турция может быть привлекательна для семьи, регионального доступа, недвижимости, медицины, бизнеса и потенциально конкурентной налоговой системы.'],
      ['Bosphoras дает налоговую консультацию?', 'Нет. Bosphoras координирует частный анализ, готовит досье и связывает клиента с подходящими налоговыми специалистами, юристами, банками, бухгалтерами и партнерами по переезду.'],
    ],
  },
  ar: {
    title: 'نظام non-dom في تركيا: ضرائب المقيمين الجدد والدخل الأجنبي',
    metaTitle: 'نظام non-dom في تركيا: ضرائب المقيمين الجدد 2026',
    description: 'تركيا تحضر إطاراً ضريبياً قريباً من نظام non-dom: الدخل الأجنبي، إعفاء محتمل لمدة 20 سنة، شرط السنوات الثلاث، الأرباح، المكاسب الرأسمالية والإقامة الضريبية.',
    eyebrow: 'ضرائب دولية · مقيمون جدد',
    hero: 'تحضر تركيا إجراءً ضريبياً قد يغير موقعها الدولي. بالنسبة لبعض المستثمرين ورواد الأعمال والمغتربين والعائلات ذات الثروة، قد تصبح بديلاً جدياً للوجهات التي تُدرس عادةً للإقامة الخاصة أو patrimoniale.',
    cta: 'طلب تحليل خاص',
    asideTitle: 'قبل دراسة هذا النظام',
    finalTitle: 'مقارنة نظام ضريبي لا تكفي: يجب مراجعة وضعك الحقيقي',
    finalText: 'قبل اختيار تركيا كقاعدة خاصة أو ضريبية جديدة، يمكن لـ Bosphoras تنظيم مراجعة شخصية لإقامتك، دخلك الأجنبي، شركاتك، أصولك، بنوكك، عائلتك وجدول انتقالك.',
    faqTitle: 'الأسئلة الشائعة',
    checklist: ['إقامتك الضريبية الحالية', 'تاريخك الضريبي في تركيا خلال ثلاث سنوات', 'دخلك الأجنبي حسب الفئة', 'أي دخل من مصدر تركي', 'شركاتك ومكان الإدارة الفعلية', 'الأرباح والمكاسب الرأسمالية والدخل المالي', 'عقاراتك خارج تركيا', 'عائلتك وسكنك وجدول الانتقال'],
    sections: [
      ['لماذا يهم مفهوم non-dom المستثمرين', 'مفهوم non-dom معروف في التخطيط الدولي للثروات. يدرسه عادةً رواد الأعمال والمستثمرون والعائلات الدولية والمديرون المتنقلون وعملاء البنوك الخاصة. الفكرة العامة هي أن الشخص قد يعيش في بلد ما، ومع ذلك يحصل وفق شروط على معاملة ضريبية خاصة لبعض الدخل المتولد في الخارج. إذا أكدت تركيا إعفاءً طويل الأجل للدخل الأجنبي، فقد تصبح أكثر وضوحاً للملفات التي تقارن الضرائب ونمط الحياة والبنوك والعقار والصحة والعائلة والوصول الدولي.'],
      ['نظام قريب من non-dom ولكن يجب التعامل معه بحذر', 'قد لا يكون non-dom هو المصطلح القانوني الرسمي في تركيا. إنه طريقة عملية لوصف المنطق الاقتصادي للإطار المعلن: جذب أشخاص يعيشون في الخارج من خلال معاملة ملائمة لبعض الدخل من مصدر أجنبي. هذا التمييز مهم. مثل هذا النظام لا يعني أن كل الدخل معفى، ولا يسمح بتجاهل قواعد بلد الإقامة السابق. الأهلية ونوع الدخل والاتفاقيات وأدلة الانتقال الحقيقي كلها مهمة.'],
      ['ما الذي تحاول تركيا بناءه', 'تريد تركيا جذب المزيد من رأس المال والمواهب ورواد الأعمال والمديرين والعائلات الدولية. النظام المستقبلي جزء من استراتيجية أوسع: تقوية إسطنبول كمركز مالي، جذب مراكز الخدمات، تشجيع الخدمات المصدرة، تطوير صناعات استراتيجية وجلب أفراد ذوي قيمة اقتصادية عالية. بالنسبة للمستثمر، السؤال ليس ضريبياً فقط. السؤال هو هل يمكن أن تصبح تركيا قاعدة للحياة والإدارة والبنوك والثروة والعائلة والعمل.'],
      ['من يمكن أن يكون معنياً؟', 'قد يتعلق الأمر بعدة ملفات. يمكن لرائد أعمال دولي أن يعيش في تركيا مع الاحتفاظ بشركة أجنبية وأرباح وعملاء دوليين أو محفظة استثمارية في الخارج. يمكن لعائلة ذات ثروة أن تدرس إسطنبول أو بودروم أو أنطاليا كقاعدة خاصة مع تحليل الإقامة والعقار والتأمين الصحي والإرث والتنظيم العائلي. يمكن لمستشار أو مدير أو digital nomad أن يعمل من تركيا لعملاء في أوروبا أو الخليج أو آسيا الوسطى أو إفريقيا.'],
      ['الشرط الرئيسي: تاريخك الضريبي في تركيا', 'قبل أي شيء يجب مراجعة التاريخ الضريبي. يبدو أن النظام المعلن يستهدف الأشخاص الذين لم يكونوا مقيمين ضريبياً أو مكلفين ضريبياً في تركيا خلال السنوات التقويمية الثلاث السابقة للانتقال. قد يستبعد ذلك بعض الملفات المرتبطة أصلاً بتركيا. يجب التحقق مما إذا كنت عشت مؤخراً في تركيا، صرحت بدخل، امتلكت عقاراً مؤجراً، أنشأت شركة محلية، كان لديك تسجيل ضريبي أو قضيت وقتاً مهماً في البلاد.'],
      ['يجب تحليل الدخل الأجنبي حسب الفئة', 'جوهر النظام هو الدخل الأجنبي. لكن الدخل الأجنبي يأخذ أشكالاً عديدة. الأرباح، المكاسب الرأسمالية، الفوائد، الإيجارات، المعاشات، الدخل المهني، توزيعات الهولدينغ، التأمين على الحياة، trusts أو عائد بيع شركة يجب تحليلها بشكل منفصل. كل فئة قد تخضع للضريبة في بلد المصدر، أو لضريبة مقتطعة، أو لاتفاقية ضريبية.'],
      ['الأرباح الأجنبية: الحالة الكلاسيكية لرواد الأعمال', 'قد يتلقى رائد أعمال أرباحاً من شركة خارج تركيا. يجب تحديد أين توجد الشركة، أين تحقق الأرباح، أين تدار فعلياً، هل توجد ضريبة مقتطعة، ما الاتفاقية المناسبة وهل يتم التوزيع قبل أو بعد الانتقال. بالنسبة لمساهم، تاريخ الإقامة الضريبية وجدول توزيع الأرباح قد يكونان حاسمين.'],
      ['المكاسب الرأسمالية الأجنبية: يجب تحضير بيع الأصول', 'قد يبيع المستثمر أسهماً أجنبية أو حصص شركات أو محفظة مالية أو عقاراً خارج تركيا أو مشاركة في holding. يجب توثيق تاريخ البيع، بلد الأصل، البنك الحافظ، سعر الشراء، الاتفاقيات والإقامة الضريبية وقت العملية. تغيير الإقامة الضريبية دون تخطيط قد يخلق نتائج غير متوقعة.'],
      ['المستشارون والمديرون والدخل المهني الأجنبي', 'قد يعمل مستشار أو فريلانسر أو مدير أو digital nomad من تركيا لعملاء أجانب. تحتاج هذه الحالة إلى مراجعة دقيقة. قد يكون العميل أجنبياً، لكن هل يتم تنفيذ النشاط فعلياً من تركيا؟ أين توجد الشركة؟ أين توقع العقود؟ أين الإدارة الفعلية؟ أين الحساب البنكي؟ هذه النقاط تساعد على فصل الدخل الأجنبي عن نشاط قد يرتبط بتركيا.'],
      ['ما لا يجب الخلط بينه وبين نظام non-dom', 'لا يجب فهم النظام كإعفاء كامل. يجب فصل الدخل الأجنبي والدخل التركي والدخل المختلط والنشاط المنفذ من تركيا ودخل شركة أجنبية تُدار من تركيا ودخل العقار الأجنبي ودخل العقار التركي. راتب من شركة تركية أو إيجار عقار تركي أو خدمات لعميل تركي أو أرباح شركة تركية قد تبقى خاضعة للضريبة في تركيا.'],
      ['مقارنة تركيا بدبي وإيطاليا والبرتغال وموناكو', 'لا يجب تقديم تركيا تلقائياً كخيار أفضل. دبي قوية في الصورة الدولية والبنوك والضرائب. إيطاليا معروفة بنظام المقيمين الجدد. موناكو تبقى مرجعاً فاخراً جداً. البرتغال جذبت لفترة طويلة المغتربين والمتقاعدين. قد تتميز تركيا بمزيج من الإقامة والحياة العائلية والعقار والصحة وتكلفة الحياة والعمل الإقليمي وضرائب قد تكون تنافسية.'],
      ['أخطاء يجب تجنبها', 'الخطأ الأول هو الاعتقاد بأن نظام non-dom يعني تلقائياً عدم دفع ضرائب في أي مكان. الثاني هو افتراض أن مغادرة بلد تكفي لفقدان الإقامة الضريبية فيه. الثالث هو نقل الإقامة أو الحسابات أو الشركات بسرعة دون مراجعة. الرابع هو النظر فقط إلى الضريبة، بينما الانتقال الناجح يشمل البنك والتأمين الصحي والعقار والعائلة والإقامة والامتثال والمدرسة والإرث ونمط الحياة.'],
      ['كيف يمكن أن يساعد Bosphoras', 'يعمل Bosphoras كمكتب تنسيق خاص. الهدف ليس استبدال المحامي الضريبي أو وعد بنتيجة ضريبية. الهدف هو تنظيم ملف كامل قبل القرار: تحليل الإقامة، إعداد الملف الشخصي، التنسيق مع المستشارين الضريبيين والمحامين، البحث البنكي، انتقال العائلة، العقار، التأمين الصحي، تأسيس شركة عند الحاجة والتنسيق المحاسبي.'],
    ],
    faq: [
      ['هل يوجد نظام non-dom تركي رسمياً؟', 'non-dom هو وصف عملي لمنطق النظام المعلن. يجب أن تؤكد النصوص النهائية وقواعد التطبيق الشروط الدقيقة.'],
      ['هل يمكن لتركيا فعلاً إعفاء الدخل الأجنبي لمدة 20 سنة؟', 'هذا هو الهدف المعلن لبعض المقيمين الجدد وفق شروط. يجب تأكيد النسخة النهائية وطريقة التطبيق من السلطات المختصة.'],
      ['هل يعفى الدخل التركي؟', 'لا. المعلومات المتاحة تميز بين الدخل الأجنبي والدخل من مصدر تركي. الدخل المتولد في تركيا يجب مراجعته وفق القواعد الضريبية التركية.'],
      ['هل يمكن لرائد أعمال العيش في تركيا مع شركة أجنبية؟', 'محتمل، لكن يجب مراجعة الإدارة الفعلية والعملاء والجوهر الاقتصادي والأرباح والاتفاقيات الضريبية وخطر اعتبار النشاط منفذاً من تركيا.'],
      ['هل يمكن استخدام هذا النظام لمغادرة البلد السابق؟', 'ليس تلقائياً. يجب مراجعة الإقامة السابقة والمنزل والشركات والعقار والدخل وأيام الحضور والاتفاقيات المطبقة.'],
      ['هل هو قابل للمقارنة مع دبي؟', 'المقارنة ممكنة لكنها تعتمد على الملف. دبي قوية في الضرائب والصورة. تركيا قد تكون جذابة للحياة العائلية والوصول الإقليمي والعقار والصحة والعمل وضرائب قد تكون تنافسية.'],
      ['هل يقدم Bosphoras استشارة ضريبية؟', 'لا. ينسق Bosphoras المراجعة الخاصة، يجهز الملف ويربط العملاء بالمستشارين الضريبيين والمحامين والبنوك والمحاسبين وشركاء الانتقال المناسبين.'],
    ],
  },
};

export function getNonDomTurkeyClientMetadata(locale: Locale): Metadata {
  const c = content[locale];
  const canonical = `https://bosphoras.com${paths[locale]}`;
  return {
    title: `${c.metaTitle} | Bosphoras`,
    description: c.description,
    alternates: {
      canonical,
      languages: {
        fr: 'https://bosphoras.com/regime-non-dom-turquie-fiscalite',
        en: 'https://bosphoras.com/en/turkey-non-dom-tax-regime',
        ru: 'https://bosphoras.com/ru/turtsiya-non-dom-nalogovyy-rezhim',
        ar: 'https://bosphoras.com/ar/turkey-non-dom-tax-regime',
        'x-default': 'https://bosphoras.com/regime-non-dom-turquie-fiscalite',
      },
    },
    openGraph: { title: c.title, description: c.description, url: canonical, siteName: 'Bosphoras', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: c.title }] },
    twitter: { card: 'summary_large_image', title: c.title, description: c.description, images: ['/images/og-default.jpg'] },
  };
}

export function NonDomTurkeyClientPage({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: c.title, description: c.description, inLanguage: locale, datePublished: '2026-05-11', dateModified: '2026-05-11', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: `https://bosphoras.com${paths[locale]}` }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
      <Header locale={locale} currentPath={paths[locale]} />
      <main dir={locale === 'ar' ? 'rtl' : 'ltr'} className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40">
          <div className="mx-auto max-w-[1400px]">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">{c.eyebrow}</p>
            <h1 className="mt-6 max-w-6xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">{c.title}</h1>
            <p className="mt-8 max-w-4xl text-lg leading-9 text-white/80">{c.hero}</p>
            <Link href={assessmentHref[locale]} className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">{c.cta}<ArrowRight size={16} /></Link>
          </div>
        </section>
        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="h-fit border border-[#d8c7a1] bg-[#fffaf0] p-8 lg:sticky lg:top-28">
              <Landmark className="h-8 w-8 text-[#8a6728]" />
              <h2 className="mt-6 font-serif text-3xl">{c.asideTitle}</h2>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-[#3e4857]">
                {c.checklist.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#8a6728]" />{item}</li>)}
              </ul>
            </aside>
            <div className="space-y-5">
              {c.sections.map(([sectionTitle, text], index) => (
                <article key={sectionTitle} className="border border-[#d8c7a1] bg-white p-7 md:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6728]">{String(index + 1).padStart(2, '0')}</p>
                  <h2 className="mt-4 font-serif text-3xl tracking-[-0.025em] text-[#121826] md:text-4xl">{sectionTitle}</h2>
                  <p className="mt-5 text-base leading-8 text-[#3e4857]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1100px]">
            <ShieldCheck className="h-8 w-8 text-[#8a6728]" />
            <h2 className="mt-6 font-serif text-4xl tracking-[-0.03em] md:text-6xl">{c.finalTitle}</h2>
            <p className="mt-6 text-lg leading-9 text-[#3e4857]">{c.finalText}</p>
            <Link href={assessmentHref[locale]} className="mt-8 inline-flex items-center justify-center gap-3 bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white">{c.cta}<ArrowRight size={16} /></Link>
          </div>
        </section>
        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1100px]">
            <FileText className="h-8 w-8 text-[#8a6728]" />
            <h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">{c.faqTitle}</h2>
            <div className="mt-8 grid gap-px bg-[#d8c7a1]">
              {c.faq.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
