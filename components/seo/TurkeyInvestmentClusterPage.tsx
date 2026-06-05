import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Landmark, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import type { Locale } from '@/lib/i18n';

export type TaxClusterKey =
  | 'taxStrategy'
  | 'twentyYearExemption'
  | 'istanbulFinanceCenter'
  | 'transitTrade'
  | 'qualifiedServiceCenters'
  | 'familyOfficeTurkey'
  | 'manufacturingTax'
  | 'turkeyVsDubai';

export const taxClusterKeys: TaxClusterKey[] = ['taxStrategy','twentyYearExemption','istanbulFinanceCenter','transitTrade','qualifiedServiceCenters','familyOfficeTurkey','manufacturingTax','turkeyVsDubai'];

const updatedAt = '2026-06-05';

const slugs: Record<TaxClusterKey, Record<Locale, string>> = {
  taxStrategy: { fr: '/strategie-fiscale-turquie-investisseurs-etrangers', en: '/en/turkey-tax-strategy-foreign-investors', ru: '/ru/nalogovaya-strategiya-turtsii-inostrannye-investory', ar: '/ar/turkey-tax-strategy-foreign-investors' },
  twentyYearExemption: { fr: '/exoneration-fiscale-turquie-20-ans-nouveaux-residents', en: '/en/turkey-20-year-tax-exemption-new-residents', ru: '/ru/turtsiya-20-let-nalogovaya-lgota-novye-rezidenty', ar: '/ar/turkey-20-year-tax-exemption-new-residents' },
  istanbulFinanceCenter: { fr: '/istanbul-finance-center-avantages-fiscaux-investisseurs', en: '/en/istanbul-finance-center-tax-benefits-investors', ru: '/ru/istanbul-finance-center-nalogovye-lgoty-investory', ar: '/ar/istanbul-finance-center-tax-benefits-investors' },
  transitTrade: { fr: '/societe-turquie-transit-trade-commerce-international', en: '/en/turkey-company-transit-trade-international-commerce', ru: '/ru/kompaniya-turtsiya-tranzitnaya-torgovlya', ar: '/ar/turkey-company-transit-trade-international-commerce' },
  qualifiedServiceCenters: { fr: '/centres-services-qualifies-turquie-avantages-fiscaux', en: '/en/qualified-service-centers-turkey-tax-benefits', ru: '/ru/kvalifitsirovannye-servisnye-tsentry-turtsiya', ar: '/ar/qualified-service-centers-turkey-tax-benefits' },
  familyOfficeTurkey: { fr: '/family-office-turquie-istanbul', en: '/en/family-office-turkey-istanbul', ru: '/ru/family-office-turtsiya-stambul', ar: '/ar/family-office-turkey-istanbul' },
  manufacturingTax: { fr: '/industrie-fabrication-turquie-impot-societe-12-5', en: '/en/turkey-manufacturing-corporate-tax-12-5', ru: '/ru/proizvodstvo-turtsiya-nalog-na-pribyl-12-5', ar: '/ar/turkey-manufacturing-corporate-tax-12-5' },
  turkeyVsDubai: { fr: '/turquie-vs-dubai-investisseurs-fiscalite', en: '/en/turkey-vs-dubai-investors-tax', ru: '/ru/turtsiya-vs-dubai-investory-nalogi', ar: '/ar/turkey-vs-dubai-investors-tax' },
};

const names: Record<TaxClusterKey, Record<Locale, string>> = {
  taxStrategy: { fr: 'Stratégie fiscale Turquie 2026 pour investisseurs étrangers', en: 'Turkey tax strategy 2026 for foreign investors', ru: 'Налоговая стратегия Турции 2026 для иностранных инвесторов', ar: 'استراتيجية الضرائب في تركيا 2026 للمستثمرين الأجانب' },
  twentyYearExemption: { fr: 'Exonération fiscale Turquie 20 ans pour nouveaux résidents', en: 'Turkey 20-year tax exemption for new residents', ru: '20-летняя налоговая льгота Турции для новых резидентов', ar: 'الإعفاء الضريبي في تركيا 20 سنة للمقيمين الجدد' },
  istanbulFinanceCenter: { fr: 'Istanbul Finance Center : avantages fiscaux pour investisseurs', en: 'Istanbul Finance Center tax benefits for investors', ru: 'Istanbul Finance Center: налоговые льготы для инвесторов', ar: 'Istanbul Finance Center: مزايا ضريبية للمستثمرين' },
  transitTrade: { fr: 'Créer une société en Turquie pour le transit trade', en: 'Create a Turkey company for transit trade', ru: 'Компания в Турции для транзитной торговли', ar: 'تأسيس شركة في تركيا للتجارة العابرة' },
  qualifiedServiceCenters: { fr: 'Centres de services qualifiés en Turquie', en: 'Qualified service centers in Turkey', ru: 'Квалифицированные сервисные центры в Турции', ar: 'مراكز الخدمات المؤهلة في تركيا' },
  familyOfficeTurkey: { fr: 'Family office en Turquie à Istanbul', en: 'Family office in Turkey and Istanbul', ru: 'Family office в Турции и Стамбуле', ar: 'Family office في تركيا وإسطنبول' },
  manufacturingTax: { fr: 'Industrie en Turquie : impôt société 12,5 % pour fabricants', en: 'Manufacturing in Turkey: 12.5% corporate tax', ru: 'Производство в Турции: налог на прибыль 12,5%', ar: 'الصناعة في تركيا: ضريبة شركات 12.5%' },
  turkeyVsDubai: { fr: 'Turquie vs Dubaï pour investisseurs et fiscalité', en: 'Turkey vs Dubai for investors and tax', ru: 'Турция vs Дубай для инвесторов и налогов', ar: 'تركيا vs دبي للمستثمرين والضرائب' },
};

const labels = {
  fr: { guide: 'Guide privé · Fiscalité Turquie 2026', updated: 'Mis à jour le 5 juin 2026', what: 'Ce que cette page explique', who: 'Qui est concerné ?', verify: 'À vérifier avant décision', faq: 'Questions fréquentes', cta: 'Demander une analyse privée', tax: 'Voir l’accompagnement fiscal' },
  en: { guide: 'Private guide · Turkey Tax 2026', updated: 'Updated on June 5, 2026', what: 'What this page explains', who: 'Who is concerned?', verify: 'What to verify before deciding', faq: 'FAQ', cta: 'Request a private assessment', tax: 'View tax support' },
  ru: { guide: 'Частный гид · Налоги Турции 2026', updated: 'Обновлено 5 июня 2026', what: 'Что объясняет страница', who: 'Кого это касается?', verify: 'Что проверить до решения', faq: 'Частые вопросы', cta: 'Запросить частный анализ', tax: 'Налоговое сопровождение' },
  ar: { guide: 'دليل خاص · ضرائب تركيا 2026', updated: 'تم التحديث في 5 يونيو 2026', what: 'ما الذي تشرحه الصفحة', who: 'من المعني؟', verify: 'ما يجب التحقق منه قبل القرار', faq: 'الأسئلة الشائعة', cta: 'طلب تحليل خاص', tax: 'عرض الدعم الضريبي' },
};

const genericIntro: Record<Locale, string> = {
  fr: 'La loi turque n°7582 publiée au Resmî Gazete n°33270 du 4 juin 2026 confirme une stratégie fiscale plus large : résidence, capitaux, revenus étrangers, transit trade, centres de services qualifiés, industrie, startups et Istanbul Finance Center. Chaque page doit être analysée selon le profil, les revenus, la substance réelle et les textes d’application.',
  en: 'Turkey Law No. 7582, published in Official Gazette No. 33270 on June 4, 2026, confirms a broader tax strategy: residence, capital, foreign income, transit trade, qualified service centers, manufacturing, startups and Istanbul Finance Center. Each page must be reviewed according to profile, income, real substance and implementation guidance.',
  ru: 'Закон Турции №7582, опубликованный в Resmî Gazete №33270 от 4 июня 2026 года, подтверждает более широкую налоговую стратегию: резиденция, капитал, иностранные доходы, transit trade, сервисные центры, производство, стартапы и Istanbul Finance Center. Каждый вопрос должен анализироваться по профилю, доходам, substance и правилам применения.',
  ar: 'القانون التركي رقم 7582 المنشور في Resmî Gazete رقم 33270 بتاريخ 4 يونيو 2026 يؤكد استراتيجية ضريبية أوسع: الإقامة، رأس المال، الدخل الأجنبي، التجارة العابرة، مراكز الخدمات المؤهلة، الصناعة، الشركات الناشئة و Istanbul Finance Center. يجب تحليل كل ملف حسب الوضع والدخل والوجود الحقيقي وقواعد التطبيق.',
};

const introOverrides: Partial<Record<TaxClusterKey, Record<Locale, string>>> = {
  taxStrategy: {
    fr: 'La stratégie fiscale turque 2026 n’est plus seulement une annonce : la loi n°7582 publiée au Resmî Gazete n°33270 du 4 juin 2026 crée un cadre d’attractivité pour nouveaux résidents, revenus étrangers, héritage, centres de services qualifiés, transit trade, industrie et Istanbul Finance Center. Pour les investisseurs étrangers, l’enjeu est de transformer ce texte en stratégie structurée, conforme et documentée.',
    en: 'Turkey’s 2026 tax strategy is no longer just an announcement: Law No. 7582, published in Official Gazette No. 33270 on June 4, 2026, creates an attractiveness framework for new residents, foreign income, inheritance, qualified service centers, transit trade, manufacturing and Istanbul Finance Center. For foreign investors, the challenge is to turn the text into a structured, compliant and documented strategy.',
    ru: 'Налоговая стратегия Турции 2026 уже не является простой новостью: Закон №7582, опубликованный в Resmî Gazete №33270 от 4 июня 2026 года, создает рамку привлекательности для новых резидентов, иностранных доходов, наследования, сервисных центров, transit trade, производства и Istanbul Finance Center. Для иностранных инвесторов задача — превратить текст в структурированную и документированную стратегию.',
    ar: 'استراتيجية الضرائب في تركيا 2026 لم تعد مجرد إعلان: القانون رقم 7582 المنشور في Resmî Gazete رقم 33270 بتاريخ 4 يونيو 2026 يخلق إطار جذب للمقيمين الجدد والدخل الأجنبي والميراث ومراكز الخدمات المؤهلة والتجارة العابرة والصناعة و Istanbul Finance Center. بالنسبة للمستثمرين الأجانب، المهم هو تحويل النص إلى استراتيجية منظمة وموثقة ومتوافقة.',
  },
  twentyYearExemption: {
    fr: 'La loi n°7582 publiée au Resmî Gazete n°33270 du 4 juin 2026 introduit l’article Mükerrer 20/D dans le Gelir Vergisi Kanunu. Le texte prévoit, sous conditions, une exonération d’impôt sur certains revenus et gains étrangers pendant vingt ans pour des personnes physiques considérées comme installées en Turquie. Cette page analyse le dispositif pour les nouveaux résidents sans le présenter comme automatique.',
    en: 'Law No. 7582, published in Official Gazette No. 33270 on June 4, 2026, introduces Repeated Article 20/D into the Turkish Income Tax Law. Subject to conditions, the text provides a twenty-year income tax exemption for certain foreign income and gains of individuals considered settled in Turkey. This page reviews the regime for new residents without presenting it as automatic.',
    ru: 'Закон №7582, опубликованный в Resmî Gazete №33270 от 4 июня 2026 года, вводит Mükerrer Madde 20/D в Закон о подоходном налоге. При соблюдении условий текст предусматривает 20-летнее освобождение от налога на отдельные иностранные доходы и прибыль физических лиц, считающихся поселившимися в Турции. Эта страница анализирует режим для новых резидентов без представления его как автоматического.',
    ar: 'القانون رقم 7582 المنشور في Resmî Gazete رقم 33270 بتاريخ 4 يونيو 2026 يضيف المادة المتكررة Mükerrer Madde 20/D إلى قانون ضريبة الدخل التركي. وبشروط محددة، ينص النص على إعفاء لمدة عشرين سنة لبعض الدخل والأرباح الأجنبية للأشخاص الطبيعيين الذين يعتبرون مقيمين في تركيا. هذه الصفحة تحلل النظام للمقيمين الجدد دون تقديمه كإعفاء تلقائي.',
  },
  istanbulFinanceCenter: {
    fr: 'La loi n°7582 publiée au Resmî Gazete n°33270 renforce l’Istanbul Finance Center dans la stratégie fiscale turque 2026. Le texte prolonge l’horizon de certains avantages jusqu’en 2047, remplace une durée de cinq ans par vingt ans et connecte l’IFM aux centres de services qualifiés, au transit trade et aux revenus internationaux. Cette page explique les opportunités à analyser pour investisseurs, groupes et family offices.',
    en: 'Law No. 7582 published in Official Gazette No. 33270 strengthens Istanbul Finance Center within Turkey’s 2026 tax strategy. The text extends the horizon of certain advantages to 2047, replaces a five-year period with twenty years and connects IFC with qualified service centers, transit trade and international income. This page explains the opportunities to review for investors, groups and family offices.',
    ru: 'Закон №7582, опубликованный в Resmî Gazete №33270, усиливает Istanbul Finance Center в налоговой стратегии Турции 2026. Текст продлевает горизонт отдельных преимуществ до 2047 года, заменяет срок пять лет на двадцать лет и связывает IFM с сервисными центрами, transit trade и международными доходами. Эта страница объясняет возможности для инвесторов, групп и family offices.',
    ar: 'القانون رقم 7582 المنشور في Resmî Gazete رقم 33270 يعزز Istanbul Finance Center ضمن استراتيجية الضرائب التركية 2026. يمدد النص أفق بعض المزايا إلى 2047، ويستبدل مدة خمس سنوات بعشرين سنة، ويربط IFM بمراكز الخدمات المؤهلة والتجارة العابرة والدخل الدولي. تشرح هذه الصفحة الفرص التي يجب تحليلها للمستثمرين والمجموعات و family offices.',
  },
  transitTrade: {
    fr: 'La loi n°7582 modifie le traitement de certaines opérations de commerce international et de transit trade. Le texte vise les gains issus de marchandises achetées à l’étranger et revendues à l’étranger sans introduction en Turquie, ou certaines opérations d’intermédiation internationale. L’analyse doit vérifier le transfert du gain en Turquie, le lieu du vendeur et de l’acheteur, la documentation, la banque et la substance réelle.',
    en: 'Law No. 7582 amends the treatment of certain international commerce and transit trade operations. The text targets gains from goods purchased abroad and sold abroad without entry into Turkey, or certain international intermediary operations. The review must verify transfer of gain to Turkey, seller and buyer location, documentation, banking and real substance.',
    ru: 'Закон №7582 меняет режим отдельных операций международной торговли и transit trade. Текст касается прибыли от товаров, купленных за рубежом и проданных за рубежом без ввоза в Турцию, или отдельных посреднических операций. Анализ должен проверить перевод прибыли в Турцию, место продавца и покупателя, документы, банк и substance.',
    ar: 'يعدل القانون رقم 7582 معالجة بعض عمليات التجارة الدولية والتجارة العابرة. يستهدف النص أرباح بضائع تشترى في الخارج وتباع في الخارج دون إدخالها إلى تركيا، أو بعض عمليات الوساطة الدولية. يجب فحص تحويل الربح إلى تركيا، ومكان البائع والمشتري، والتوثيق، والبنك، والوجود الحقيقي.',
  },
};

function pageIntro(key: TaxClusterKey, locale: Locale) { return introOverrides[key]?.[locale] ?? genericIntro[locale]; }

function ctaHref(locale: Locale) { return locale === 'fr' ? '/diagnostic-prive' : locale === 'en' ? '/en/private-assessment' : locale === 'ru' ? '/ru/chastnaya-konsultatsiya' : '/ar/تقييم-خاص'; }
function taxHref(locale: Locale) { return locale === 'fr' ? '/services/conseil-juridique-fiscal' : locale === 'en' ? '/en/services/legal-tax-advisory' : locale === 'ru' ? '/ru/uslugi/yuridicheskie-nalogovye-konsultatsii' : '/ar/خدمات/استشارات-قانونية-ضريبية'; }

function topicBullets(key: TaxClusterKey, locale: Locale): Array<[string,string]> {
  const common: Record<TaxClusterKey, Array<[string,string]>> = {
    taxStrategy: [['Cadre officiel','Loi n°7582, Resmî Gazete n°33270, revenus étrangers, IFM, services qualifiés, transit trade et industrie.'],['Approche par profil','Résidence, revenus, banque, substance, pays d’origine, famille et preuves doivent être étudiés ensemble.'],['Cas investisseurs','Family office, holding opérationnelle, service hub, IFM, industrie exportatrice ou résidence privée.'],['Dossier documenté','Preuves de résidence, origine des fonds, contrats, actifs, sociétés, fiscalité et calendrier.']],
    twentyYearExemption: [['Article 20/D','Exonération possible de certains revenus et gains étrangers pendant vingt ans, sous conditions.'],['Trois années précédentes','Absence de domicile et d’assujettissement fiscal en Turquie à vérifier.'],['Déclaration et limites','Revenus exonérés, frais, revenus turcs et impôts étrangers doivent être distingués.'],['Entrée en vigueur','Application aux personnes installées à partir du 1er janvier 2026, selon les règles.']],
    istanbulFinanceCenter: [['Horizon 2047','Le cadre IFM est renforcé avec un horizon plus long.'],['Durée vingt ans','La réforme renforce les stratégies de long terme autour de l’IFM.'],['Services qualifiés','Finance, compliance, juridique, data, RH et fonctions de siège.'],['Hub régional','Istanbul vise Europe, Golfe, Asie centrale et capitaux internationaux.']],
    transitTrade: [['Marchandises hors Turquie','Achats à l’étranger, revente à l’étranger et absence d’introduction en Turquie doivent être documentés.'],['Intermédiation internationale','La société turque peut coordonner des opérations entre pays tiers si le dossier est cohérent.'],['Déduction à analyser','Le texte prévoit une déduction importante, avec des cas renforcés selon la zone ou l’IFM.'],['Preuves essentielles','Contrats, factures, paiements, banque, transport, assurance, vendeur, acheteur et substance réelle.']],
    qualifiedServiceCenters: [['Fonctions de siège','Finance, juridique, RH, data, IT, audit, conseil, support et supply chain.'],['Revenus étrangers','Services rendus à des entités étrangères et groupe multi-pays.'],['Substance locale','Bureaux, salariés, contrats, facturation et preuves réelles.'],['Coordination','Analyse fiscale, sociale, bancaire et opérationnelle.']],
    familyOfficeTurkey: [['Base privée','Résidence, banque, assurance, santé, immobilier et fiscalité depuis Istanbul.'],['Patrimoine','Transmission, revenus étrangers, actifs et confidentialité.'],['Coordination','Avocats, fiscalistes, banques, assurances et immobilier.'],['Comparaison','Istanbul, Dubaï, Monaco, Londres ou Lisbonne.']],
    manufacturingTax: [['12,5 % fabricants','Taux réduit à analyser pour certains revenus de production.'],['Export et production','Textile, agro-industrie, machines, packaging et transformation.'],['Projet complet','Société, permis, terrain, fiscalité, SGK et environnement.'],['Investissement direct','Usines, lignes de production et exportateurs.']],
    turkeyVsDubai: [['Deux modèles','Dubaï reste un hub ; la Turquie ajoute industrie, famille, santé, IFM et coût de vie.'],['Résidence','Choix selon revenus, substance, pays d’origine et famille.'],['Business concret','Transit trade, production, services qualifiés et immobilier.'],['Double présence','Dubaï + Turquie selon fonctions et objectifs.']],
  };
  return common[key];
}

function pageFaq(pageKey: TaxClusterKey, locale: Locale) {
  if (pageKey === 'transitTrade') {
    return [
      [locale === 'fr' ? 'Le transit trade bénéficie-t-il automatiquement de la déduction ?' : locale === 'en' ? 'Does transit trade automatically benefit from the deduction?' : locale === 'ru' ? 'Transit trade автоматически получает вычет?' : 'هل تستفيد التجارة العابرة تلقائياً؟', locale === 'fr' ? 'Non. Le cadre existe, mais il faut vérifier l’opération, les flux, le transfert du gain en Turquie, la documentation, la banque et la substance réelle.' : locale === 'en' ? 'No. The framework exists, but the operation, flows, transfer of gain to Turkey, documentation, banking and real substance must be reviewed.' : locale === 'ru' ? 'Нет. Рамка существует, но нужно проверить операцию, потоки, перевод прибыли в Турцию, документы, банк и substance.' : 'لا. الإطار موجود، لكن يجب فحص العملية والتدفقات وتحويل الربح إلى تركيا والتوثيق والبنك والوجود الحقيقي.'],
      [locale === 'fr' ? 'Quel est le rôle de Bosphoras ?' : locale === 'en' ? 'What is Bosphoras’ role?' : locale === 'ru' ? 'Какова роль Bosphoras?' : 'ما هو دور Bosphoras؟', locale === 'fr' ? 'Bosphoras coordonne l’analyse privée avec avocat, fiscaliste, comptable, banque et interlocuteurs opérationnels, sans se substituer aux professionnels réglementés.' : locale === 'en' ? 'Bosphoras coordinates the private review with lawyers, tax advisors, accountants, banks and operational contacts, without replacing regulated professionals.' : locale === 'ru' ? 'Bosphoras координирует частный анализ с юристом, налоговым специалистом, бухгалтером, банком и операционными контактами, не заменяя регулируемых специалистов.' : 'ينسق Bosphoras التحليل الخاص مع المحامي والمستشار الضريبي والمحاسب والبنك والجهات العملية، دون أن يحل محل المهنيين المنظمين.'],
    ];
  }
  return [
    [locale === 'fr' ? 'La mesure est-elle automatique ?' : locale === 'en' ? 'Is the measure automatic?' : locale === 'ru' ? 'Мера автоматическая?' : 'هل الإجراء تلقائي؟', locale === 'fr' ? 'Non. La loi n°7582 crée un cadre, mais chaque application dépend du profil, de l’activité, de la documentation et des règles d’exécution.' : locale === 'en' ? 'No. Law No. 7582 creates a framework, but each application depends on profile, activity, documentation and implementation rules.' : locale === 'ru' ? 'Нет. Закон №7582 создает рамку, но применение зависит от профиля, деятельности, документов и правил применения.' : 'لا. القانون رقم 7582 يخلق إطاراً، لكن التطبيق يعتمد على الملف والنشاط والتوثيق وقواعد التنفيذ.'],
    [locale === 'fr' ? 'Pourquoi passer par Bosphoras ?' : locale === 'en' ? 'Why use Bosphoras?' : locale === 'ru' ? 'Почему Bosphoras?' : 'لماذا Bosphoras؟', locale === 'fr' ? 'Bosphoras structure le diagnostic privé et coordonne avocats, fiscalistes, banques, comptables, assurances, immobilier et démarches privées en Turquie.' : locale === 'en' ? 'Bosphoras structures the private assessment and coordinates lawyers, tax advisors, banks, accountants, insurance, property and private steps in Turkey.' : locale === 'ru' ? 'Bosphoras структурирует частный анализ и координирует юристов, налоговых специалистов, банки, бухгалтеров, страхование, недвижимость и частные шаги в Турции.' : 'ينظم Bosphoras التحليل الخاص وينسق المحامين والمستشارين الضريبيين والبنوك والمحاسبين والتأمين والعقار والخطوات الخاصة في تركيا.'],
  ];
}

export function getTaxClusterMetadata(pageKey: TaxClusterKey, locale: Locale): Metadata {
  const canonical = `https://bosphoras.com${slugs[pageKey][locale]}`;
  const title = `${names[pageKey][locale]} | Bosphoras`;
  const description = pageIntro(pageKey, locale);
  return { title, description, alternates: { canonical, languages: { fr: `https://bosphoras.com${slugs[pageKey].fr}`, en: `https://bosphoras.com${slugs[pageKey].en}`, ru: `https://bosphoras.com${slugs[pageKey].ru}`, ar: `https://bosphoras.com${slugs[pageKey].ar}`, 'x-default': `https://bosphoras.com${slugs[pageKey].fr}` } }, openGraph: { title, description, url: canonical, siteName: 'Bosphoras', locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : locale === 'ru' ? 'ru_RU' : 'ar_AR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };
}

export function getTurkeyInvestmentClusterLinks(locale: Locale) { return taxClusterKeys.map((key) => ({ href: slugs[key][locale], label: names[key][locale] })); }
export function getTurkeyInvestmentClusterUrls() { return taxClusterKeys.flatMap((key) => Object.values(slugs[key]).map((slug) => `https://bosphoras.com${slug}`)); }

export function TurkeyInvestmentClusterPage({ pageKey, locale }: { pageKey: TaxClusterKey; locale: Locale }) {
  const l = labels[locale];
  const title = names[pageKey][locale];
  const url = `https://bosphoras.com${slugs[pageKey][locale]}`;
  const intro = pageIntro(pageKey, locale);
  const bullets = topicBullets(pageKey, locale);
  const faq = pageFaq(pageKey, locale);
  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description: intro, inLanguage: locale, datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Law 7582', 'Resmî Gazete 33270', 'Turkey tax strategy', 'foreign investors', 'Istanbul Finance Center', 'Article 20/D', 'transit trade'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
      <Header locale={locale} currentPath={slugs[pageKey][locale]} />
      <main dir={locale === 'ar' ? 'rtl' : 'ltr'} className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">{l.guide} · {l.updated}</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">{title}</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">{intro}</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href={ctaHref(locale)} className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">{l.cta}<ArrowRight size={16} /></Link><Link href={taxHref(locale)} className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">{l.tax}</Link></div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.85fr_1.15fr]"><aside className="border border-[#d8c7a1] bg-[#fffaf0] p-8"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-3xl">{l.what}</h2><p className="mt-5 leading-8 text-[#3e4857]">{intro}</p></aside><div className="grid gap-4 md:grid-cols-2">{bullets.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><Sparkles className="mb-5 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="font-serif text-4xl tracking-[-0.035em] md:text-6xl">{l.who}</h2><p className="mt-6 text-lg leading-9 text-[#3e4857]">{locale === 'fr' ? 'Cette page concerne les investisseurs, entrepreneurs, familles patrimoniales, dirigeants, groupes internationaux, sociétés de commerce, industriels et profils mobiles qui comparent la Turquie avec Dubaï, Monaco, Lisbonne, Singapour ou les Pays-Bas.' : locale === 'en' ? 'This page concerns investors, entrepreneurs, wealth families, executives, international groups, trading companies, manufacturers and mobile profiles comparing Turkey with Dubai, Monaco, Lisbon, Singapore or the Netherlands.' : locale === 'ru' ? 'Эта страница для инвесторов, предпринимателей, состоятельных семей, руководителей, международных групп, торговых компаний, производителей и мобильных профилей, сравнивающих Турцию с Дубаем, Монако, Лиссабоном, Сингапуром или Нидерландами.' : 'هذه الصفحة تخص المستثمرين ورواد الأعمال والعائلات الثرية والمديرين والمجموعات الدولية وشركات التجارة والمصنعين والملفات المتنقلة التي تقارن تركيا بدبي وموناكو ولشبونة وسنغافورة وهولندا.'}</p></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="font-serif text-4xl tracking-[-0.035em] md:text-6xl">{l.verify}</h2><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">{locale === 'fr' ? 'Avant toute décision, il faut vérifier résidence fiscale actuelle, source des revenus, conventions fiscales, banque, substance réelle, société, actifs, famille, calendrier, coûts et preuves documentaires.' : locale === 'en' ? 'Before any decision, verify current tax residence, income source, tax treaties, banking, real substance, company, assets, family, timeline, costs and documentary evidence.' : locale === 'ru' ? 'Перед решением нужно проверить текущую налоговую резиденцию, источник доходов, соглашения, банк, substance, компанию, активы, семью, сроки, расходы и документы.' : 'قبل أي قرار يجب التحقق من الإقامة الضريبية الحالية ومصدر الدخل والاتفاقيات والبنك والوجود الحقيقي والشركة والأصول والعائلة والجدول الزمني والتكاليف والأدلة.'}</p></div></div></section>
        <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] md:text-6xl">{l.cta}</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">Bosphoras coordonne une lecture privée du dossier : fiscalité, résidence, banque, société, immobilier, assurance, santé et feuille de route en Turquie.</p></div><Link href={ctaHref(locale)} className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">{l.cta}<ArrowRight size={16} /></Link></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">{l.faq}</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faq.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
