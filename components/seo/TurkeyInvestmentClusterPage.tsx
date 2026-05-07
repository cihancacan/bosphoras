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

const intro: Record<Locale, string> = {
  fr: 'La Turquie prépare une stratégie d’attractivité qui dépasse la simple réduction fiscale : résidence, capitaux, talents, entreprises, transit trade, centres de services, industrie, startups et Istanbul Finance Center. Cette page aide les investisseurs à comprendre les opportunités, les limites et les points à vérifier avant d’agir.',
  en: 'Turkey is preparing an attractiveness strategy that goes beyond a simple tax reduction: residence, capital, talent, companies, transit trade, service centers, manufacturing, startups and Istanbul Finance Center. This page helps investors understand opportunities, limits and points to verify before acting.',
  ru: 'Турция готовит стратегию привлекательности, выходящую за рамки простой налоговой скидки: резиденция, капитал, таланты, компании, transit trade, сервисные центры, производство, стартапы и Istanbul Finance Center. Эта страница помогает инвесторам понять возможности, ограничения и проверки до действий.',
  ar: 'تعد تركيا استراتيجية جذب تتجاوز التخفيض الضريبي البسيط: الإقامة، رأس المال، المواهب، الشركات، التجارة العابرة، مراكز الخدمات، الصناعة، الشركات الناشئة و Istanbul Finance Center. تساعد هذه الصفحة المستثمرين على فهم الفرص والحدود وما يجب التحقق منه قبل التحرك.',
};

const labels = {
  fr: { guide: 'Guide privé · SEO investisseurs', what: 'Ce que cette page explique', who: 'Qui est concerné ?', concrete: 'Applications concrètes', verify: 'À vérifier avant décision', faq: 'Questions fréquentes', cta: 'Demander une analyse privée', tax: 'Voir l’accompagnement fiscal' },
  en: { guide: 'Private guide · Investor SEO', what: 'What this page explains', who: 'Who is concerned?', concrete: 'Concrete applications', verify: 'What to verify before deciding', faq: 'FAQ', cta: 'Request a private assessment', tax: 'View tax support' },
  ru: { guide: 'Частный гид · SEO инвесторов', what: 'Что объясняет страница', who: 'Кого это касается?', concrete: 'Практические сценарии', verify: 'Что проверить до решения', faq: 'Частые вопросы', cta: 'Запросить частный анализ', tax: 'Налоговое сопровождение' },
  ar: { guide: 'دليل خاص · SEO للمستثمرين', what: 'ما الذي تشرحه الصفحة', who: 'من المعني؟', concrete: 'تطبيقات عملية', verify: 'ما يجب التحقق منه قبل القرار', faq: 'الأسئلة الشائعة', cta: 'طلب تحليل خاص', tax: 'عرض الدعم الضريبي' },
};

function topicBullets(key: TaxClusterKey, locale: Locale): Array<[string,string]> {
  const fr: Record<TaxClusterKey, Array<[string,string]>> = {
    taxStrategy: [['Une stratégie de positionnement','La Turquie cherche à devenir une plateforme régionale pour capitaux, talents, commerce, industrie et services.'],['Exonération 20 ans','Certains revenus étrangers de nouveaux résidents pourraient bénéficier d’une fenêtre fiscale longue, sous conditions.'],['IFM, transit trade et services','L’Istanbul Finance Center, les centres de services qualifiés et le transit trade créent un axe B2B fort.'],['Industrie et startups','Le taux fabricants à 12,5 %, les stock-options et la dette convertible renforcent le message pro-business.']],
    twentyYearExemption: [['Revenus étrangers','L’objectif annoncé est de distinguer revenus étrangers et revenus de source turque.'],['Condition des 3 ans','Le profil doit notamment vérifier l’absence de résidence ou assujettissement fiscal turc récent.'],['Patrimoine','Le taux de 1 % sur certaines transmissions rend le sujet familial et patrimonial.'],['Diagnostic','Il faut cartographier pays de résidence, revenus, actifs, conventions fiscales et preuves.']],
    istanbulFinanceCenter: [['IFM jusqu’en 2047','Les avantages prolongés donnent de la visibilité aux acteurs financiers.'],['Transit trade à 100 %','Certaines opérations dans l’IFM pourraient être plus avantageuses que hors IFM.'],['Talents internationaux','La Turquie veut attirer des profils finance, compliance, juridique, stratégie et gestion.'],['Hub régional','Istanbul se positionne entre Europe, Golfe et Asie centrale.']],
    transitTrade: [['Commerce entre pays tiers','La société turque peut devenir une base de coordination commerciale internationale.'],['95 % / 100 %','La présentation évoque 95 % hors IFM et 100 % dans l’IFM pour certaines opérations.'],['Banque et documents','Contrats, factures, KYC, paiements, transport et assurance doivent être cohérents.'],['Hubs concurrents','La Turquie veut rejoindre la logique Singapour, Hong Kong, Pays-Bas.']],
    qualifiedServiceCenters: [['Fonctions de siège','Finance, juridique, RH, data, IT, audit, conseil, support et supply chain.'],['Revenus étrangers','Les services rendus à des entités étrangères sont au cœur de la logique.'],['Substance locale','Bureaux, salariés, contrats, facturation et preuves doivent être réels.'],['Groupes multi-pays','Le sujet vise les sociétés actives dans plusieurs pays.']],
    familyOfficeTurkey: [['Base privée','Résidence, banque, assurance, santé, immobilier et fiscalité coordonnés depuis Istanbul.'],['Familles patrimoniales','Transmission, revenus étrangers, actifs et confidentialité doivent être alignés.'],['Bosphoras Private Desk','Un seul interlocuteur coordonne avocats, fiscalistes, banques, assurances et immobilier.'],['Comparaison internationale','Istanbul peut être comparé à Dubaï, Monaco, Londres ou Lisbonne.']],
    manufacturingTax: [['12,5 % fabricants','La présentation affiche un taux réduit pour certains fabricants, industrie et agriculture.'],['Export et production','Textile, agro-industrie, machines, packaging, matériaux et transformation sont concernés.'],['One-stop office','Les grands projets peuvent toucher société, permis, terrain, fiscalité, SGK et environnement.'],['Investissement direct','La Turquie veut encourager des usines, lignes de production et exportateurs.']],
    turkeyVsDubai: [['Deux modèles différents','Dubaï reste un hub mondial ; la Turquie ajoute industrie, famille, santé, IFM et coût de vie.'],['Résidence et fiscalité','Le choix dépend des revenus, de la substance, du pays d’origine et de la famille.'],['Business concret','Transit trade, production, services qualifiés et immobilier peuvent favoriser la Turquie.'],['Double présence','Certains profils peuvent structurer Dubaï + Turquie selon fonctions et objectifs.']],
  };
  if (locale === 'fr') return fr[key];
  const fallback = fr[key];
  return fallback.map(([a,b]) => [a, b]);
}

function ctaHref(locale: Locale) { return locale === 'fr' ? '/diagnostic-prive' : locale === 'en' ? '/en/private-assessment' : locale === 'ru' ? '/ru/chastnaya-konsultatsiya' : '/ar/تقييم-خاص'; }
function taxHref(locale: Locale) { return locale === 'fr' ? '/services/conseil-juridique-fiscal' : locale === 'en' ? '/en/services/legal-tax-advisory' : locale === 'ru' ? '/ru/uslugi/yuridicheskie-nalogovye-konsultatsii' : '/ar/خدمات/استشارات-قانونية-ضريبية'; }

export function getTaxClusterMetadata(pageKey: TaxClusterKey, locale: Locale): Metadata {
  const canonical = `https://bosphoras.com${slugs[pageKey][locale]}`;
  const title = `${names[pageKey][locale]} | Bosphoras`;
  const description = intro[locale];
  return { title, description, alternates: { canonical, languages: { fr: `https://bosphoras.com${slugs[pageKey].fr}`, en: `https://bosphoras.com${slugs[pageKey].en}`, ru: `https://bosphoras.com${slugs[pageKey].ru}`, ar: `https://bosphoras.com${slugs[pageKey].ar}`, 'x-default': `https://bosphoras.com${slugs[pageKey].fr}` } }, openGraph: { title, description, url: canonical, siteName: 'Bosphoras', locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : locale === 'ru' ? 'ru_RU' : 'ar_AR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };
}

export function getTurkeyInvestmentClusterLinks(locale: Locale) { return taxClusterKeys.map((key) => ({ href: slugs[key][locale], label: names[key][locale] })); }
export function getTurkeyInvestmentClusterUrls() { return taxClusterKeys.flatMap((key) => Object.values(slugs[key]).map((slug) => `https://bosphoras.com${slug}`)); }

export function TurkeyInvestmentClusterPage({ pageKey, locale }: { pageKey: TaxClusterKey; locale: Locale }) {
  const l = labels[locale];
  const title = names[pageKey][locale];
  const url = `https://bosphoras.com${slugs[pageKey][locale]}`;
  const bullets = topicBullets(pageKey, locale);
  const faq = [
    [locale === 'fr' ? 'Cette mesure est-elle déjà définitive ?' : locale === 'en' ? 'Is this measure already final?' : locale === 'ru' ? 'Эта мера уже окончательная?' : 'هل هذا الإجراء نهائي بالفعل؟', locale === 'fr' ? 'Non. Il faut attendre les textes définitifs et les règles d’application, puis vérifier le profil avec un professionnel qualifié.' : locale === 'en' ? 'No. Final texts and implementation rules are required, then the profile must be reviewed with a qualified professional.' : locale === 'ru' ? 'Нет. Нужны финальные тексты и правила применения, затем анализ профиля специалистом.' : 'لا. يجب انتظار النصوص النهائية وقواعد التطبيق ثم مراجعة الملف مع متخصص مؤهل.'],
    [locale === 'fr' ? 'Pourquoi passer par Bosphoras ?' : locale === 'en' ? 'Why use Bosphoras?' : locale === 'ru' ? 'Почему Bosphoras?' : 'لماذا Bosphoras؟', locale === 'fr' ? 'Bosphoras structure le diagnostic, coordonne avocats, fiscalistes, banques, comptables, assurances, immobilier et démarches privées en Turquie.' : locale === 'en' ? 'Bosphoras structures the assessment and coordinates lawyers, tax advisors, banks, accountants, insurance, property and private steps in Turkey.' : locale === 'ru' ? 'Bosphoras структурирует анализ и координирует юристов, налоговых специалистов, банки, бухгалтеров, страхование, недвижимость и частные шаги в Турции.' : 'ينظم Bosphoras التحليل وينسق المحامين والمستشارين الضريبيين والبنوك والمحاسبين والتأمين والعقار والخطوات الخاصة في تركيا.'],
  ];
  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description: intro[locale], inLanguage: locale, datePublished: '2026-05-07', dateModified: '2026-05-07', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
      <Header locale={locale} currentPath={slugs[pageKey][locale]} />
      <main dir={locale === 'ar' ? 'rtl' : 'ltr'} className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">{l.guide}</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">{title}</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">{intro[locale]}</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href={ctaHref(locale)} className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">{l.cta}<ArrowRight size={16} /></Link><Link href={taxHref(locale)} className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">{l.tax}</Link></div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.85fr_1.15fr]"><aside className="border border-[#d8c7a1] bg-[#fffaf0] p-8"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-3xl">{l.what}</h2><p className="mt-5 leading-8 text-[#3e4857]">{intro[locale]}</p></aside><div className="grid gap-4 md:grid-cols-2">{bullets.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><Sparkles className="mb-5 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="font-serif text-4xl tracking-[-0.035em] md:text-6xl">{l.who}</h2><p className="mt-6 text-lg leading-9 text-[#3e4857]">{locale === 'fr' ? 'Cette page concerne les investisseurs, entrepreneurs, familles patrimoniales, dirigeants, groupes internationaux, sociétés de commerce, industriels et profils mobiles qui veulent comparer la Turquie avec Dubaï, Monaco, Lisbonne, Singapour ou les Pays-Bas.' : locale === 'en' ? 'This page concerns investors, entrepreneurs, wealth families, executives, international groups, trading companies, manufacturers and mobile profiles comparing Turkey with Dubai, Monaco, Lisbon, Singapore or the Netherlands.' : locale === 'ru' ? 'Эта страница для инвесторов, предпринимателей, состоятельных семей, руководителей, международных групп, торговых компаний, производителей и мобильных профилей, сравнивающих Турцию с Дубаем, Монако, Лиссабоном, Сингапуром или Нидерландами.' : 'هذه الصفحة تخص المستثمرين ورواد الأعمال والعائلات الثرية والمديرين والمجموعات الدولية وشركات التجارة والمصنعين والملفات المتنقلة التي تقارن تركيا بدبي وموناكو ولشبونة وسنغافورة وهولندا.'}</p></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="font-serif text-4xl tracking-[-0.035em] md:text-6xl">{l.verify}</h2><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">{locale === 'fr' ? 'Avant toute décision, il faut vérifier résidence fiscale actuelle, source des revenus, conventions fiscales, banque, substance réelle, société, actifs, famille, calendrier, coûts et preuves documentaires.' : locale === 'en' ? 'Before any decision, verify current tax residence, income source, tax treaties, banking, real substance, company, assets, family, timeline, costs and documentary evidence.' : locale === 'ru' ? 'Перед решением нужно проверить текущую налоговую резиденцию, источник доходов, соглашения, банк, substance, компанию, активы, семью, сроки, расходы и документы.' : 'قبل أي قرار يجب التحقق من الإقامة الضريبية الحالية ومصدر الدخل والاتفاقيات والبنك والوجود الحقيقي والشركة والأصول والعائلة والجدول الزمني والتكاليف والأدلة.'}</p></div></div></section>
        <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] md:text-6xl">{l.cta}</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">Bosphoras Private Desk — Turkey 360°.</p></div><Link href={ctaHref(locale)} className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">{l.cta}<ArrowRight size={16} /></Link></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">{l.faq}</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faq.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
