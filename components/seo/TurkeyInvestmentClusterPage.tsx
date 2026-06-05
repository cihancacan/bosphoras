import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Landmark, ShieldCheck, Sparkles, Users } from 'lucide-react';
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

const fallbackIntro: Record<Locale, string> = {
  fr: 'La loi turque n°7582 publiée au Resmî Gazete n°33270 du 4 juin 2026 confirme une stratégie fiscale plus large : résidence, capitaux, revenus étrangers, transit trade, centres de services qualifiés, industrie, startups et Istanbul Finance Center. Chaque page doit être analysée selon le profil, les revenus, la substance réelle et les textes d’application.',
  en: 'Turkey Law No. 7582, published in Official Gazette No. 33270 on June 4, 2026, confirms a broader tax strategy: residence, capital, foreign income, transit trade, qualified service centers, manufacturing, startups and Istanbul Finance Center. Each page must be reviewed according to profile, income, real substance and implementation guidance.',
  ru: 'Закон Турции №7582, опубликованный в Resmî Gazete №33270 от 4 июня 2026 года, подтверждает более широкую налоговую стратегию: резиденция, капитал, иностранные доходы, transit trade, сервисные центры, производство, стартапы и Istanbul Finance Center. Каждый вопрос должен анализироваться по профилю, доходам, substance и правилам применения.',
  ar: 'القانون التركي رقم 7582 المنشور في Resmî Gazete رقم 33270 بتاريخ 4 يونيو 2026 يؤكد استراتيجية ضريبية أوسع: الإقامة، رأس المال، الدخل الأجنبي، التجارة العابرة، مراكز الخدمات المؤهلة، الصناعة، الشركات الناشئة و Istanbul Finance Center. يجب تحليل كل ملف حسب الوضع والدخل والوجود الحقيقي وقواعد التطبيق.',
};

function pageIntro(key: TaxClusterKey, locale: Locale) {
  if (key === 'taxStrategy') {
    const text: Record<Locale, string> = {
      fr: 'La stratégie fiscale turque 2026 n’est plus seulement une annonce : la loi n°7582 publiée au Resmî Gazete n°33270 du 4 juin 2026 crée un cadre d’attractivité pour nouveaux résidents, revenus étrangers, héritage, centres de services qualifiés, transit trade, industrie et Istanbul Finance Center. Pour les investisseurs étrangers, l’enjeu est de transformer ce texte en stratégie structurée, conforme et documentée.',
      en: 'Turkey’s 2026 tax strategy is no longer just an announcement: Law No. 7582, published in Official Gazette No. 33270 on June 4, 2026, creates an attractiveness framework for new residents, foreign income, inheritance, qualified service centers, transit trade, manufacturing and Istanbul Finance Center. For foreign investors, the challenge is to turn the text into a structured, compliant and documented strategy.',
      ru: 'Налоговая стратегия Турции 2026 уже не является простой новостью: Закон №7582, опубликованный в Resmî Gazete №33270 от 4 июня 2026 года, создает рамку привлекательности для новых резидентов, иностранных доходов, наследования, сервисных центров, transit trade, производства и Istanbul Finance Center. Для иностранных инвесторов задача — превратить текст в структурированную и документированную стратегию.',
      ar: 'استراتيجية الضرائب في تركيا 2026 لم تعد مجرد إعلان: القانون رقم 7582 المنشور في Resmî Gazete رقم 33270 بتاريخ 4 يونيو 2026 يخلق إطار جذب للمقيمين الجدد والدخل الأجنبي والميراث ومراكز الخدمات المؤهلة والتجارة العابرة والصناعة و Istanbul Finance Center. بالنسبة للمستثمرين الأجانب، المهم هو تحويل النص إلى استراتيجية منظمة وموثقة ومتوافقة.',
    };
    return text[locale];
  }
  if (key === 'twentyYearExemption') {
    const text: Record<Locale, string> = {
      fr: 'La loi n°7582 publiée au Resmî Gazete n°33270 du 4 juin 2026 introduit l’article Mükerrer 20/D dans le Gelir Vergisi Kanunu. Le texte prévoit, sous conditions, une exonération d’impôt sur certains revenus et gains étrangers pendant vingt ans pour des personnes physiques considérées comme installées en Turquie. Cette page analyse le dispositif pour les nouveaux résidents sans le présenter comme automatique.',
      en: 'Law No. 7582, published in Official Gazette No. 33270 on June 4, 2026, introduces Repeated Article 20/D into the Turkish Income Tax Law. Subject to conditions, the text provides a twenty-year income tax exemption for certain foreign income and gains of individuals considered settled in Turkey. This page reviews the regime for new residents without presenting it as automatic.',
      ru: 'Закон №7582, опубликованный в Resmî Gazete №33270 от 4 июня 2026 года, вводит Mükerrer Madde 20/D в Закон о подоходном налоге. При соблюдении условий текст предусматривает 20-летнее освобождение от налога на отдельные иностранные доходы и прибыль физических лиц, считающихся поселившимися в Турции. Эта страница анализирует режим для новых резидентов без представления его как автоматического.',
      ar: 'القانون رقم 7582 المنشور في Resmî Gazete رقم 33270 بتاريخ 4 يونيو 2026 يضيف المادة المتكررة Mükerrer Madde 20/D إلى قانون ضريبة الدخل التركي. وبشروط محددة، ينص النص على إعفاء لمدة عشرين سنة لبعض الدخل والأرباح الأجنبية للأشخاص الطبيعيين الذين يعتبرون مقيمين في تركيا. هذه الصفحة تحلل النظام للمقيمين الجدد دون تقديمه كإعفاء تلقائي.',
    };
    return text[locale];
  }
  return fallbackIntro[locale];
}

const labels = {
  fr: { guide: 'Guide privé · Fiscalité Turquie 2026', updated: 'Mis à jour le 5 juin 2026', what: 'Ce que cette page explique', who: 'Qui est concerné ?', concrete: 'Applications concrètes', verify: 'À vérifier avant décision', faq: 'Questions fréquentes', cta: 'Demander une analyse privée', tax: 'Voir l’accompagnement fiscal' },
  en: { guide: 'Private guide · Turkey Tax 2026', updated: 'Updated on June 5, 2026', what: 'What this page explains', who: 'Who is concerned?', concrete: 'Concrete applications', verify: 'What to verify before deciding', faq: 'FAQ', cta: 'Request a private assessment', tax: 'View tax support' },
  ru: { guide: 'Частный гид · Налоги Турции 2026', updated: 'Обновлено 5 июня 2026', what: 'Что объясняет страница', who: 'Кого это касается?', concrete: 'Практические сценарии', verify: 'Что проверить до решения', faq: 'Частые вопросы', cta: 'Запросить частный анализ', tax: 'Налоговое сопровождение' },
  ar: { guide: 'دليل خاص · ضرائب تركيا 2026', updated: 'تم التحديث في 5 يونيو 2026', what: 'ما الذي تشرحه الصفحة', who: 'من المعني؟', concrete: 'تطبيقات عملية', verify: 'ما يجب التحقق منه قبل القرار', faq: 'الأسئلة الشائعة', cta: 'طلب تحليل خاص', tax: 'عرض الدعم الضريبي' },
};

function taxStrategyBullets(locale: Locale): Array<[string,string]> {
  const data: Record<Locale, Array<[string,string]>> = {
    fr: [['Un cadre fiscal officiellement publié','La loi n°7582 introduit l’article 20/D sur certains revenus étrangers, mais aussi des mesures sur héritage, centres de services, transit trade, production et Istanbul Finance Center.'],['Une stratégie par profil, pas une promesse automatique','Un investisseur étranger doit vérifier résidence fiscale, source des revenus, trois années précédentes, conventions fiscales, banque, substance réelle et pays d’origine.'],['Des cas concrets pour investisseurs','Résidence privée, family office, holding opérationnelle, centre régional, transit trade, industrie exportatrice ou base Istanbul Finance Center peuvent être étudiés séparément.'],['Un dossier à documenter','La bonne approche consiste à préparer preuves de résidence, origine des fonds, structure de revenus, sociétés, actifs, famille, succession et calendrier d’installation.']],
    en: [['An officially published tax framework','Law No. 7582 introduces Article 20/D on certain foreign income, together with measures on inheritance, service centers, transit trade, manufacturing and Istanbul Finance Center.'],['A profile-based strategy, not an automatic promise','A foreign investor must verify tax residence, income source, previous three years, tax treaties, banking, real substance and country of origin.'],['Concrete investor cases','Private residence, family office, operating holding, regional center, transit trade, export manufacturing or an Istanbul Finance Center base can be reviewed separately.'],['A file to document','The correct approach is to prepare residence evidence, source of funds, income structure, companies, assets, family, succession and relocation timeline.']],
    ru: [['Официально опубликованная налоговая рамка','Закон №7582 вводит статью 20/D по отдельным иностранным доходам, а также меры по наследованию, сервисным центрам, transit trade, производству и Istanbul Finance Center.'],['Стратегия по профилю, не автоматическое обещание','Иностранный инвестор должен проверить налоговую резиденцию, источник доходов, три предыдущих года, налоговые соглашения, банк, substance и страну происхождения.'],['Практические сценарии для инвесторов','Частная резиденция, family office, операционный холдинг, региональный центр, transit trade, экспортное производство или база Istanbul Finance Center анализируются отдельно.'],['Досье нужно документировать','Правильный подход — подготовить доказательства резиденции, источник средств, структуру доходов, компании, активы, семью, наследование и график переезда.']],
    ar: [['إطار ضريبي منشور رسمياً','القانون رقم 7582 يضيف المادة 20/D حول بعض الدخل الأجنبي، مع تدابير حول الميراث ومراكز الخدمات والتجارة العابرة والصناعة و Istanbul Finance Center.'],['استراتيجية حسب الملف، لا وعد تلقائي','يجب على المستثمر الأجنبي فحص الإقامة الضريبية، مصدر الدخل، السنوات الثلاث السابقة، الاتفاقيات الضريبية، البنك، الوجود الحقيقي وبلد الأصل.'],['حالات عملية للمستثمرين','الإقامة الخاصة، family office، الهولدينغ التشغيلي، المركز الإقليمي، التجارة العابرة، الصناعة التصديرية أو قاعدة Istanbul Finance Center يمكن دراستها كل على حدة.'],['ملف يجب توثيقه','النهج الصحيح هو تحضير إثبات الإقامة، مصدر الأموال، بنية الدخل، الشركات، الأصول، العائلة، الميراث وجدول الانتقال.']],
  };
  return data[locale];
}

function twentyYearBullets(locale: Locale): Array<[string,string]> {
  const data: Record<Locale, Array<[string,string]>> = {
    fr: [['Article 20/D : revenus étrangers','Le cœur du dispositif vise certains gains et revenus obtenus hors de Turquie par des personnes physiques considérées comme installées en Turquie.'],['Condition des trois années précédentes','Le texte exige notamment l’absence de domicile et d’assujettissement fiscal en Turquie pendant les trois années civiles précédentes.'],['Déclaration annuelle et limites','Les revenus entrant dans l’exonération ne sont pas déclarés annuellement en Turquie, mais les frais, crédits d’impôt étrangers et revenus turcs doivent être traités séparément.'],['Entrée en vigueur et héritage','L’article 4 s’applique aux personnes installées à partir du 1er janvier 2026 ; le texte comporte aussi un angle successoral avec un taux de 1 % dans certains cas.']],
    en: [['Article 20/D: foreign income','The core regime targets certain income and gains obtained outside Turkey by individuals considered settled in Turkey.'],['Previous three calendar years','The text notably requires no Turkish domicile and no Turkish tax liability during the previous three calendar years.'],['Annual return and limits','Income within the exemption is not declared annually in Turkey, but expenses, foreign tax credits and Turkish-source income must be handled separately.'],['Effective date and inheritance','Article 4 applies to persons settled in Turkey as from January 1, 2026; the text also includes an inheritance angle with a 1% rate in certain cases.']],
    ru: [['Статья 20/D: иностранные доходы','Основной режим касается отдельных доходов и прибыли, полученных за пределами Турции физическими лицами, считающимися поселившимися в Турции.'],['Три предыдущих календарных года','Текст требует, в частности, отсутствия места жительства и налоговой обязанности в Турции в течение трех предыдущих календарных лет.'],['Декларация и ограничения','Доходы в рамках льготы не декларируются ежегодно в Турции, но расходы, иностранные налоги и доходы турецкого источника анализируются отдельно.'],['Дата применения и наследование','Статья 4 применяется к лицам, поселившимся в Турции с 1 января 2026 года; текст также содержит наследственный аспект со ставкой 1% в отдельных случаях.']],
    ar: [['المادة 20/D: الدخل الأجنبي','يركز النظام على بعض الدخل والأرباح المحققة خارج تركيا من قبل أشخاص طبيعيين يعتبرون مقيمين في تركيا.'],['السنوات التقويمية الثلاث السابقة','يشترط النص خاصة عدم وجود محل إقامة وعدم وجود مسؤولية ضريبية في تركيا خلال السنوات التقويمية الثلاث السابقة.'],['التصريح السنوي والحدود','الدخل ضمن الإعفاء لا يصرح سنوياً في تركيا، لكن المصاريف والضرائب الأجنبية والدخل التركي يجب تحليلها بشكل منفصل.'],['تاريخ التطبيق والميراث','تطبق المادة 4 على الأشخاص المقيمين في تركيا ابتداءً من 1 يناير 2026؛ كما يتضمن النص جانباً متعلقاً بالميراث بنسبة 1% في بعض الحالات.']],
  };
  return data[locale];
}

function topicBullets(key: TaxClusterKey, locale: Locale): Array<[string,string]> {
  if (key === 'taxStrategy') return taxStrategyBullets(locale);
  if (key === 'twentyYearExemption') return twentyYearBullets(locale);
  const fr: Record<TaxClusterKey, Array<[string,string]>> = {
    taxStrategy: taxStrategyBullets('fr'),
    twentyYearExemption: twentyYearBullets('fr'),
    istanbulFinanceCenter: [['IFM jusqu’en 2047','Les avantages prolongés donnent de la visibilité aux acteurs financiers.'],['Transit trade à 100 %','Certaines opérations dans l’IFM peuvent être plus avantageuses que hors IFM.'],['Talents internationaux','La Turquie veut attirer des profils finance, compliance, juridique, stratégie et gestion.'],['Hub régional','Istanbul se positionne entre Europe, Golfe et Asie centrale.']],
    transitTrade: [['Commerce entre pays tiers','La société turque peut devenir une base de coordination commerciale internationale.'],['95 % / 100 %','Le texte prévoit des déductions importantes pour certaines opérations.'],['Banque et documents','Contrats, factures, KYC, paiements, transport et assurance doivent être cohérents.'],['Hubs concurrents','La Turquie veut rejoindre la logique Singapour, Hong Kong, Pays-Bas.']],
    qualifiedServiceCenters: [['Fonctions de siège','Finance, juridique, RH, data, IT, audit, conseil, support et supply chain.'],['Revenus étrangers','Les services rendus à des entités étrangères sont au cœur de la logique.'],['Substance locale','Bureaux, salariés, contrats, facturation et preuves doivent être réels.'],['Groupes multi-pays','Le sujet vise les sociétés actives dans plusieurs pays.']],
    familyOfficeTurkey: [['Base privée','Résidence, banque, assurance, santé, immobilier et fiscalité coordonnés depuis Istanbul.'],['Familles patrimoniales','Transmission, revenus étrangers, actifs et confidentialité doivent être alignés.'],['Bosphoras Private Desk','Un seul interlocuteur coordonne avocats, fiscalistes, banques, assurances et immobilier.'],['Comparaison internationale','Istanbul peut être comparé à Dubaï, Monaco, Londres ou Lisbonne.']],
    manufacturingTax: [['12,5 % fabricants','La loi prévoit un taux réduit pour certains revenus de production.'],['Export et production','Textile, agro-industrie, machines, packaging, matériaux et transformation sont concernés.'],['One-stop office','Les grands projets peuvent toucher société, permis, terrain, fiscalité, SGK et environnement.'],['Investissement direct','La Turquie veut encourager usines, lignes de production et exportateurs.']],
    turkeyVsDubai: [['Deux modèles différents','Dubaï reste un hub mondial ; la Turquie ajoute industrie, famille, santé, IFM et coût de vie.'],['Résidence et fiscalité','Le choix dépend des revenus, de la substance, du pays d’origine et de la famille.'],['Business concret','Transit trade, production, services qualifiés et immobilier peuvent favoriser la Turquie.'],['Double présence','Certains profils peuvent structurer Dubaï + Turquie selon fonctions et objectifs.']],
  };
  return fr[key];
}

function ctaHref(locale: Locale) { return locale === 'fr' ? '/diagnostic-prive' : locale === 'en' ? '/en/private-assessment' : locale === 'ru' ? '/ru/chastnaya-konsultatsiya' : '/ar/تقييم-خاص'; }
function taxHref(locale: Locale) { return locale === 'fr' ? '/services/conseil-juridique-fiscal' : locale === 'en' ? '/en/services/legal-tax-advisory' : locale === 'ru' ? '/ru/uslugi/yuridicheskie-nalogovye-konsultatsii' : '/ar/خدمات/استشارات-قانونية-ضريبية'; }

export function getTaxClusterMetadata(pageKey: TaxClusterKey, locale: Locale): Metadata {
  const canonical = `https://bosphoras.com${slugs[pageKey][locale]}`;
  const title = `${names[pageKey][locale]} | Bosphoras`;
  const description = pageIntro(pageKey, locale);
  return { title, description, alternates: { canonical, languages: { fr: `https://bosphoras.com${slugs[pageKey].fr}`, en: `https://bosphoras.com${slugs[pageKey].en}`, ru: `https://bosphoras.com${slugs[pageKey].ru}`, ar: `https://bosphoras.com${slugs[pageKey].ar}`, 'x-default': `https://bosphoras.com${slugs[pageKey].fr}` } }, openGraph: { title, description, url: canonical, siteName: 'Bosphoras', locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : locale === 'ru' ? 'ru_RU' : 'ar_AR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };
}

export function getTurkeyInvestmentClusterLinks(locale: Locale) { return taxClusterKeys.map((key) => ({ href: slugs[key][locale], label: names[key][locale] })); }
export function getTurkeyInvestmentClusterUrls() { return taxClusterKeys.flatMap((key) => Object.values(slugs[key]).map((slug) => `https://bosphoras.com${slug}`)); }

function pageFaq(pageKey: TaxClusterKey, locale: Locale) {
  if (pageKey === 'twentyYearExemption') {
    return [
      [locale === 'fr' ? 'L’exonération de 20 ans est-elle automatique ?' : locale === 'en' ? 'Is the 20-year exemption automatic?' : locale === 'ru' ? '20-летняя льгота автоматическая?' : 'هل الإعفاء لمدة 20 سنة تلقائي؟', locale === 'fr' ? 'Non. La loi n°7582 crée le cadre, mais l’éligibilité dépend notamment des trois années précédentes, de la résidence réelle, de la source des revenus et des règles d’application.' : locale === 'en' ? 'No. Law No. 7582 creates the framework, but eligibility depends in particular on the previous three years, effective residence, income source and implementation rules.' : locale === 'ru' ? 'Нет. Закон №7582 создает рамку, но право на льготу зависит от трех предыдущих лет, фактической резиденции, источника доходов и правил применения.' : 'لا. القانون رقم 7582 يخلق الإطار، لكن الأهلية تعتمد خصوصاً على السنوات الثلاث السابقة والإقامة الفعلية ومصدر الدخل وقواعد التطبيق.'],
      [locale === 'fr' ? 'Quels revenus sont concernés ?' : locale === 'en' ? 'Which income is concerned?' : locale === 'ru' ? 'Какие доходы затронуты?' : 'ما الدخل المعني؟', locale === 'fr' ? 'Le texte vise certains gains et revenus obtenus hors de Turquie. Les revenus turcs, l’activité locale, les sociétés turques, les frais et les crédits d’impôt étrangers doivent être analysés séparément.' : locale === 'en' ? 'The text concerns certain income and gains obtained outside Turkey. Turkish income, local activity, Turkish companies, expenses and foreign tax credits must be reviewed separately.' : locale === 'ru' ? 'Текст касается отдельных доходов и прибыли, полученных за пределами Турции. Турецкие доходы, местная деятельность, турецкие компании, расходы и иностранные налоги анализируются отдельно.' : 'النص يتعلق ببعض الدخل والأرباح المحققة خارج تركيا. الدخل التركي والنشاط المحلي والشركات التركية والمصاريف والضرائب الأجنبية يجب تحليلها بشكل منفصل.'],
    ];
  }
  return [
    [locale === 'fr' ? 'La stratégie fiscale Turquie 2026 est-elle officielle ?' : locale === 'en' ? 'Is Turkey’s 2026 tax strategy official?' : locale === 'ru' ? 'Налоговая стратегия Турции 2026 официальна?' : 'هل استراتيجية الضرائب في تركيا 2026 رسمية؟', locale === 'fr' ? 'Oui, plusieurs mesures sont désormais portées par la loi n°7582 publiée au Resmî Gazete n°33270 du 4 juin 2026. L’application dépend toutefois du profil, des revenus, de la résidence et des règles d’exécution.' : locale === 'en' ? 'Yes, several measures are now included in Law No. 7582 published in Official Gazette No. 33270 on June 4, 2026. Application still depends on the profile, income, residence and implementation rules.' : locale === 'ru' ? 'Да, ряд мер включен в Закон №7582, опубликованный в Resmî Gazete №33270 от 4 июня 2026 года. Применение зависит от профиля, доходов, резиденции и правил применения.' : 'نعم، عدة تدابير أصبحت ضمن القانون رقم 7582 المنشور في Resmî Gazete رقم 33270 بتاريخ 4 يونيو 2026. لكن التطبيق يعتمد على الملف والدخل والإقامة وقواعد التنفيذ.'],
    [locale === 'fr' ? 'Pourquoi passer par Bosphoras ?' : locale === 'en' ? 'Why use Bosphoras?' : locale === 'ru' ? 'Почему Bosphoras?' : 'لماذا Bosphoras؟', locale === 'fr' ? 'Bosphoras structure le diagnostic privé et coordonne avocats, fiscalistes, banques, comptables, assurances, immobilier et démarches privées en Turquie, sans se substituer aux professionnels réglementés.' : locale === 'en' ? 'Bosphoras structures the private assessment and coordinates lawyers, tax advisors, banks, accountants, insurance, property and private steps in Turkey, without replacing regulated professionals.' : locale === 'ru' ? 'Bosphoras структурирует частный анализ и координирует юристов, налоговых специалистов, банки, бухгалтеров, страхование, недвижимость и частные шаги в Турции, не заменяя регулируемых специалистов.' : 'ينظم Bosphoras التحليل الخاص وينسق المحامين والمستشارين الضريبيين والبنوك والمحاسبين والتأمين والعقار والخطوات الخاصة في تركيا، دون أن يحل محل المهنيين المنظمين.'],
  ];
}

export function TurkeyInvestmentClusterPage({ pageKey, locale }: { pageKey: TaxClusterKey; locale: Locale }) {
  const l = labels[locale];
  const title = names[pageKey][locale];
  const url = `https://bosphoras.com${slugs[pageKey][locale]}`;
  const intro = pageIntro(pageKey, locale);
  const bullets = topicBullets(pageKey, locale);
  const faq = pageFaq(pageKey, locale);
  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description: intro, inLanguage: locale, datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Law 7582', 'Resmî Gazete 33270', 'Turkey tax strategy', 'foreign investors', 'Istanbul Finance Center', 'Article 20/D'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
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
