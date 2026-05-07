import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import type { Locale } from '@/lib/i18n';

export type SecondWaveKey = 'agribusiness' | 'startup' | 'fintech' | 'importExport' | 'holding' | 'residenceProperty' | 'turkeyVsPortugal' | 'turkeyVsMonaco' | 'turkeyVsSingapore';
export const secondWaveKeys: SecondWaveKey[] = ['agribusiness','startup','fintech','importExport','holding','residenceProperty','turkeyVsPortugal','turkeyVsMonaco','turkeyVsSingapore'];

const slugs: Record<SecondWaveKey, Record<Locale, string>> = {
  agribusiness: { fr: '/agro-industrie-turquie-investissement-fiscalite', en: '/en/agribusiness-turkey-investment-tax', ru: '/ru/agropromyshlennost-turtsiya-investitsii-nalogi', ar: '/ar/agribusiness-turkey-investment-tax' },
  startup: { fr: '/startup-turquie-avantages-fiscaux-investisseurs', en: '/en/startup-turkey-tax-benefits-investors', ru: '/ru/startup-turtsiya-nalogovye-lgoty-investory', ar: '/ar/startup-turkey-tax-benefits-investors' },
  fintech: { fr: '/finance-fintech-turquie-istanbul-finance-center', en: '/en/finance-fintech-turkey-istanbul-finance-center', ru: '/ru/finansy-fintech-turtsiya-istanbul-finance-center', ar: '/ar/finance-fintech-turkey-istanbul-finance-center' },
  importExport: { fr: '/import-export-turquie-transit-trade', en: '/en/import-export-turkey-transit-trade', ru: '/ru/import-export-turtsiya-tranzitnaya-torgovlya', ar: '/ar/import-export-turkey-transit-trade' },
  holding: { fr: '/holding-siege-regional-turquie', en: '/en/holding-regional-headquarters-turkey', ru: '/ru/holding-regionalnyy-ofis-turtsiya', ar: '/ar/holding-regional-headquarters-turkey' },
  residenceProperty: { fr: '/residence-fiscale-turquie-immobilier-investisseurs', en: '/en/turkey-tax-residence-property-investors', ru: '/ru/nalogovaya-rezidentsiya-turtsiya-nedvizhimost-investory', ar: '/ar/turkey-tax-residence-property-investors' },
  turkeyVsPortugal: { fr: '/turquie-vs-portugal-residence-fiscale-investisseurs', en: '/en/turkey-vs-portugal-tax-residence-investors', ru: '/ru/turtsiya-vs-portugaliya-nalogovaya-rezidentsiya', ar: '/ar/turkey-vs-portugal-tax-residence-investors' },
  turkeyVsMonaco: { fr: '/turquie-vs-monaco-family-office-residence', en: '/en/turkey-vs-monaco-family-office-residence', ru: '/ru/turtsiya-vs-monako-family-office-rezidentsiya', ar: '/ar/turkey-vs-monaco-family-office-residence' },
  turkeyVsSingapore: { fr: '/turquie-singapour-hong-kong-transit-trade', en: '/en/turkey-singapore-hong-kong-transit-trade', ru: '/ru/turtsiya-singapur-gonkong-tranzitnaya-torgovlya', ar: '/ar/turkey-singapore-hong-kong-transit-trade' },
};

const titles: Record<SecondWaveKey, Record<Locale, string>> = {
  agribusiness: { fr: 'Agro-industrie en Turquie : investissement, fiscalité et export', en: 'Agribusiness in Turkey: investment, tax and export', ru: 'Агроиндустрия в Турции: инвестиции, налоги и экспорт', ar: 'الصناعات الغذائية في تركيا: الاستثمار والضرائب والتصدير' },
  startup: { fr: 'Startups en Turquie : fiscalité, stock-options et investisseurs', en: 'Startups in Turkey: tax, stock options and investors', ru: 'Стартапы в Турции: налоги, опционы и инвесторы', ar: 'الشركات الناشئة في تركيا: الضرائب وخيارات الأسهم والمستثمرون' },
  fintech: { fr: 'Finance et fintech en Turquie : Istanbul Finance Center', en: 'Finance and fintech in Turkey: Istanbul Finance Center', ru: 'Финансы и fintech в Турции: Istanbul Finance Center', ar: 'المالية و fintech في تركيا: Istanbul Finance Center' },
  importExport: { fr: 'Import-export en Turquie : transit trade et commerce international', en: 'Import-export in Turkey: transit trade and international commerce', ru: 'Импорт-экспорт в Турции: transit trade и международная торговля', ar: 'الاستيراد والتصدير في تركيا: التجارة العابرة والتجارة الدولية' },
  holding: { fr: 'Holding et siège régional en Turquie', en: 'Holding and regional headquarters in Turkey', ru: 'Холдинг и региональный офис в Турции', ar: 'الهولدينغ والمقر الإقليمي في تركيا' },
  residenceProperty: { fr: 'Résidence fiscale, immobilier et investisseurs en Turquie', en: 'Tax residence, property and investors in Turkey', ru: 'Налоговая резиденция, недвижимость и инвесторы в Турции', ar: 'الإقامة الضريبية والعقار والمستثمرون في تركيا' },
  turkeyVsPortugal: { fr: 'Turquie vs Portugal : résidence fiscale pour investisseurs', en: 'Turkey vs Portugal: tax residence for investors', ru: 'Турция vs Португалия: налоговая резиденция для инвесторов', ar: 'تركيا vs البرتغال: الإقامة الضريبية للمستثمرين' },
  turkeyVsMonaco: { fr: 'Turquie vs Monaco : family office et résidence privée', en: 'Turkey vs Monaco: family office and private residence', ru: 'Турция vs Монако: family office и частная резиденция', ar: 'تركيا vs موناكو: family office والإقامة الخاصة' },
  turkeyVsSingapore: { fr: 'Turquie, Singapour, Hong Kong : transit trade et hubs commerciaux', en: 'Turkey, Singapore, Hong Kong: transit trade and commercial hubs', ru: 'Турция, Сингапур, Гонконг: transit trade и торговые хабы', ar: 'تركيا وسنغافورة وهونغ كونغ: التجارة العابرة والمراكز التجارية' },
};

const labels = {
  fr: { guide: 'Guide privé · Deuxième vague SEO', intro: 'Cette page fait partie du cluster Bosphoras sur la nouvelle stratégie turque d’attractivité : fiscalité, résidence, entreprises, capitaux, talents, industrie et commerce international.', what: 'Pourquoi ce sujet devient stratégique', who: 'Profils concernés', verify: 'Points à vérifier', cta: 'Demander une analyse privée', faq: 'Questions fréquentes' },
  en: { guide: 'Private guide · Second SEO wave', intro: 'This page is part of the Bosphoras cluster on Turkey’s new attractiveness strategy: tax, residence, companies, capital, talent, manufacturing and international trade.', what: 'Why this topic is becoming strategic', who: 'Relevant profiles', verify: 'Points to verify', cta: 'Request a private assessment', faq: 'FAQ' },
  ru: { guide: 'Частный гид · Вторая SEO-волна', intro: 'Эта страница входит в кластер Bosphoras о новой стратегии привлекательности Турции: налоги, резиденция, компании, капитал, таланты, производство и международная торговля.', what: 'Почему тема становится стратегической', who: 'Кого это касается', verify: 'Что проверить', cta: 'Запросить частный анализ', faq: 'Частые вопросы' },
  ar: { guide: 'دليل خاص · موجة SEO الثانية', intro: 'هذه الصفحة جزء من مجموعة Bosphoras حول استراتيجية الجذب الجديدة في تركيا: الضرائب، الإقامة، الشركات، رأس المال، المواهب، الصناعة والتجارة الدولية.', what: 'لماذا يصبح هذا الموضوع استراتيجياً', who: 'الملفات المعنية', verify: 'ما يجب التحقق منه', cta: 'طلب تحليل خاص', faq: 'الأسئلة الشائعة' },
};

function pageBullets(key: SecondWaveKey, locale: Locale): Array<[string,string]> {
  const fr: Record<SecondWaveKey, Array<[string,string]>> = {
    agribusiness: [['Production et transformation','La Turquie peut attirer transformation alimentaire, conditionnement, stockage, logistique froide, export et marques régionales.'],['Taux fabricants','Le taux annoncé à 12,5 % pour certains fabricants renforce l’intérêt des projets agro-industriels.'],['Accès régional','Europe, Golfe, Afrique et Asie centrale créent une base naturelle pour exporter.'],['Dossier investisseur','Terrain, permis, environnement, fiscalité, banque et partenaires locaux doivent être coordonnés.']],
    startup: [['Digital company','La Turquie veut rendre les processus de création plus digitaux et flexibles.'],['Stock-options','L’amélioration des mécanismes d’intéressement peut attirer talents tech et équipes produit.'],['Dette convertible','La facilitation des financements convertibles parle aux startups et fonds early-stage.'],['Terminal Istanbul','Le projet renforce le message d’un hub startup plus visible.']],
    fintech: [['IFM comme vitrine','L’Istanbul Finance Center devient un outil pour attirer finance, fintech, banques, assurance et gestion d’actifs.'],['Talents financiers','Les mesures peuvent attirer compliance, risque, data, paiement, juridique et gestion.'],['Accès régional','Istanbul sert de pont entre Europe, Golfe, Asie centrale et marchés émergents.'],['Réglementation','Licence, conformité, substance, banque et partenaires doivent être vérifiés.']],
    importExport: [['Base de commerce','La Turquie peut servir de plateforme entre fournisseurs et clients situés dans plusieurs pays.'],['Transit trade','Le dispositif annoncé renforce l’intérêt du négoce international depuis une société turque.'],['Banque et documents','Contrats, factures, paiements, transport, assurance et KYC doivent être alignés.'],['Secteurs actifs','Textile, alimentaire, machines, matériaux, construction, cosmétique et pièces industrielles.']],
    holding: [['Siège régional','Une holding turque peut coordonner management, finance, juridique, RH, data et stratégie.'],['Services qualifiés','Les centres de services qualifiés créent une logique pour groupes multi-pays.'],['Substance','Bureaux, équipe, contrats, facturation et gouvernance doivent être réels.'],['Comparaison','La Turquie peut être comparée à Dubaï, Lisbonne, Londres ou Pays-Bas selon l’activité.']],
    residenceProperty: [['Résidence réelle','Immobilier, famille, temps passé, banque et centre d’intérêts doivent être cohérents.'],['Fiscalité personnelle','Revenus étrangers, revenus turcs, conventions fiscales et obligations déclaratives doivent être vérifiés.'],['Immobilier stratégique','Istanbul, Bodrum et Antalya répondent à des objectifs différents.'],['Installation 360°','Assurance, santé, école, transport, compte bancaire et statut de résidence sont liés.']],
    turkeyVsPortugal: [['Après les régimes européens','La Turquie peut devenir une alternative pour certains profils après la réduction de régimes attractifs en Europe.'],['Coût et qualité de vie','Comparer logement, fiscalité, famille, santé, sécurité et accès international.'],['Business réel','Industrie, import-export, transit trade et services régionaux renforcent la Turquie.'],['Analyse pays par pays','La nationalité, le pays d’origine et les conventions fiscales changent le résultat.']],
    turkeyVsMonaco: [['Base privée premium','Monaco reste ultra-premium ; la Turquie peut offrir une base plus opérationnelle, familiale et régionale.'],['Family office','Istanbul permet de coordonner patrimoine, santé, immobilier, fiscalité et accès privé.'],['Coûts et substance','Comparer coûts, résidence réelle, image, banque, sécurité et mobilité.'],['Double stratégie','Certaines familles peuvent comparer ou combiner plusieurs bases privées.']],
    turkeyVsSingapore: [['Ambition officielle','La Turquie veut se rapprocher des hubs de transit trade comme Singapour, Hong Kong et les Pays-Bas.'],['Position géographique','Elle connecte Europe, Golfe, Afrique, Caucase et Asie centrale.'],['IFM et transit trade','Certaines exemptions annoncées renforcent l’attractivité de l’Istanbul Finance Center.'],['Substance commerciale','Le choix dépend des flux, banques, partenaires, conformité et documents.']],
  };
  const base = fr[key];
  if (locale === 'fr') return base;
  if (locale === 'en') return base.map(([a,b]) => [a, b]);
  if (locale === 'ru') return base.map(([a,b]) => [a, b]);
  return base.map(([a,b]) => [a, b]);
}

function assessmentHref(locale: Locale) { return locale === 'fr' ? '/diagnostic-prive' : locale === 'en' ? '/en/private-assessment' : locale === 'ru' ? '/ru/chastnaya-konsultatsiya' : '/ar/تقييم-خاص'; }

export function getSecondWaveMetadata(pageKey: SecondWaveKey, locale: Locale): Metadata {
  const canonical = `https://bosphoras.com${slugs[pageKey][locale]}`;
  const title = `${titles[pageKey][locale]} | Bosphoras`;
  const description = `${titles[pageKey][locale]} — ${labels[locale].intro}`;
  return { title, description, alternates: { canonical, languages: { fr: `https://bosphoras.com${slugs[pageKey].fr}`, en: `https://bosphoras.com${slugs[pageKey].en}`, ru: `https://bosphoras.com${slugs[pageKey].ru}`, ar: `https://bosphoras.com${slugs[pageKey].ar}`, 'x-default': `https://bosphoras.com${slugs[pageKey].fr}` } }, openGraph: { title, description, url: canonical, siteName: 'Bosphoras', locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : locale === 'ru' ? 'ru_RU' : 'ar_AR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };
}

export const secondWaveFooterLinks: Record<Locale, Array<{ href: string; label: string }>> = {
  fr: secondWaveKeys.map((k) => ({ href: slugs[k].fr, label: titles[k].fr })),
  en: secondWaveKeys.map((k) => ({ href: slugs[k].en, label: titles[k].en })),
  ru: secondWaveKeys.map((k) => ({ href: slugs[k].ru, label: titles[k].ru })),
  ar: secondWaveKeys.map((k) => ({ href: slugs[k].ar, label: titles[k].ar })),
};
export const secondWaveLocalizedPaths = secondWaveKeys.map((k) => slugs[k]);
export const secondWaveSitemapUrls = secondWaveKeys.flatMap((k) => Object.values(slugs[k]).map((slug) => `https://bosphoras.com${slug}`));

export function TurkeySecondWaveSeoPage({ pageKey, locale }: { pageKey: SecondWaveKey; locale: Locale }) {
  const l = labels[locale];
  const title = titles[pageKey][locale];
  const bullets = pageBullets(pageKey, locale);
  const faq = [
    [locale === 'fr' ? 'Pourquoi cette page est-elle liée à la nouvelle stratégie turque ?' : locale === 'en' ? 'Why is this page linked to Turkey’s new strategy?' : locale === 'ru' ? 'Почему эта страница связана с новой стратегией Турции?' : 'لماذا ترتبط هذه الصفحة بالاستراتيجية التركية الجديدة؟', l.intro],
    [locale === 'fr' ? 'Bosphoras donne-t-il un conseil fiscal ?' : locale === 'en' ? 'Does Bosphoras provide tax advice?' : locale === 'ru' ? 'Bosphoras дает налоговую консультацию?' : 'هل يقدم Bosphoras استشارة ضريبية؟', locale === 'fr' ? 'Non. Bosphoras structure l’analyse privée et coordonne avocats, fiscalistes, banques, comptables, assurances et partenaires locaux.' : locale === 'en' ? 'No. Bosphoras structures the private assessment and coordinates lawyers, tax advisors, banks, accountants, insurance and local partners.' : locale === 'ru' ? 'Нет. Bosphoras структурирует частный анализ и координирует юристов, налоговых специалистов, банки, бухгалтеров, страхование и локальных партнеров.' : 'لا. ينظم Bosphoras التحليل الخاص وينسق المحامين والمستشارين الضريبيين والبنوك والمحاسبين والتأمين والشركاء المحليين.'],
  ];
  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description: l.intro, inLanguage: locale, datePublished: '2026-05-07', dateModified: '2026-05-07', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: `https://bosphoras.com${slugs[pageKey][locale]}` }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
      <Header locale={locale} currentPath={slugs[pageKey][locale]} />
      <main dir={locale === 'ar' ? 'rtl' : 'ltr'} className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">{l.guide}</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">{title}</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">{l.intro}</p><div className="mt-10"><Link href={assessmentHref(locale)} className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">{l.cta}<ArrowRight size={16} /></Link></div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><h2 className="font-serif text-4xl tracking-[-0.03em] md:text-6xl">{l.what}</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{bullets.map(([t,d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-7"><Sparkles className="mb-5 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><Users className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em] md:text-6xl">{l.who}</h2><p className="mt-6 text-lg leading-9 text-[#3e4857]">{locale === 'fr' ? 'Investisseurs étrangers, entrepreneurs, familles patrimoniales, groupes internationaux, dirigeants, industriels, import-exportateurs, startups, sociétés de services et profils mobiles doivent analyser ce sujet avant d’agir.' : locale === 'en' ? 'Foreign investors, entrepreneurs, wealth families, international groups, executives, manufacturers, import-export companies, startups, service companies and mobile profiles should review this topic before acting.' : locale === 'ru' ? 'Иностранные инвесторы, предприниматели, состоятельные семьи, международные группы, руководители, производители, import-export компании, стартапы, сервисные компании и мобильные профили должны изучить тему до действий.' : 'ينبغي للمستثمرين الأجانب ورواد الأعمال والعائلات الثرية والمجموعات الدولية والمديرين والمصنعين وشركات الاستيراد والتصدير والشركات الناشئة وشركات الخدمات والملفات المتنقلة دراسة هذا الموضوع قبل التحرك.'}</p></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><div className="border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">{l.verify}</h2><p className="mt-5 text-lg leading-9 text-[#3e4857]">{locale === 'fr' ? 'Avant toute décision, il faut vérifier la fiscalité personnelle, la société, la banque, les conventions fiscales, la substance locale, les obligations déclaratives, les coûts réels et les preuves documentaires.' : locale === 'en' ? 'Before any decision, verify personal tax, company structure, banking, tax treaties, local substance, reporting duties, real costs and documentary evidence.' : locale === 'ru' ? 'Перед решением нужно проверить личные налоги, структуру компании, банк, налоговые соглашения, local substance, декларации, реальные расходы и документы.' : 'قبل أي قرار يجب التحقق من الضرائب الشخصية، هيكل الشركة، البنك، الاتفاقيات الضريبية، الوجود المحلي، التصريحات، التكاليف الحقيقية والأدلة الوثائقية.'}</p></div></div></section>
        <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row md:items-center md:justify-between"><h2 className="font-serif text-4xl tracking-[-0.03em] md:text-6xl">Bosphoras Private Desk</h2><Link href={assessmentHref(locale)} className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">{l.cta}<ArrowRight size={16} /></Link></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">{l.faq}</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faq.map(([q,a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
