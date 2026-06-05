import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, FileText, ShieldCheck, Sparkles } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import type { Locale } from '@/lib/i18n';
import { type BosphorasProgrammaticSeoPage } from '@/data/bosphorasProgrammaticSeoPages';

const labels: Record<Locale, { guide: string; updated: string; why: string; verify: string; scenarios: string; faq: string; cta: string; warning: string }> = {
  fr: { guide: 'Guide privé Bosphoras', updated: 'Mis à jour le 5 juin 2026', why: 'Pourquoi ce sujet devient stratégique', verify: 'Points à vérifier avant d’agir', scenarios: 'Profils concernés', faq: 'Questions fréquentes', cta: 'Demander une analyse privée', warning: 'Les éléments fiscaux, juridiques, bancaires et de résidence doivent être confirmés au cas par cas avec des professionnels qualifiés. Bosphoras coordonne l’analyse, mais ne remplace pas un avocat fiscaliste, une banque ou une autorité administrative.' },
  en: { guide: 'Bosphoras private guide', updated: 'Updated on June 5, 2026', why: 'Why this topic is becoming strategic', verify: 'Points to verify before acting', scenarios: 'Relevant profiles', faq: 'FAQ', cta: 'Request a private assessment', warning: 'Tax, legal, banking and residence matters must be confirmed case by case with qualified professionals. Bosphoras coordinates the assessment, but does not replace a tax lawyer, a bank or an administrative authority.' },
  ru: { guide: 'Частный гид Bosphoras', updated: 'Обновлено 5 июня 2026', why: 'Почему эта тема важна', verify: 'Что проверить до решения', scenarios: 'Кому это подходит', faq: 'Частые вопросы', cta: 'Запросить частный анализ', warning: 'Налоговые, юридические, банковские вопросы и вопросы резиденции нужно проверять индивидуально с квалифицированными специалистами. Bosphoras координирует анализ, но не заменяет налогового юриста, банк или государственный орган.' },
  ar: { guide: 'دليل Bosphoras الخاص', updated: 'تم التحديث في 5 يونيو 2026', why: 'لماذا يصبح هذا الموضوع مهماً', verify: 'ما يجب التحقق منه قبل القرار', scenarios: 'الملفات المعنية', faq: 'الأسئلة الشائعة', cta: 'طلب تحليل خاص', warning: 'يجب تأكيد الجوانب الضريبية والقانونية والبنكية والإقامة حالة بحالة مع مختصين مؤهلين. ينسق Bosphoras التحليل ولا يحل محل محام ضريبي أو بنك أو جهة إدارية.' },
};

const categoryIntro: Record<string, Record<Locale, string>> = {
  tax: {
    fr: 'La Turquie attire de plus en plus d’investisseurs, d’entrepreneurs, de familles patrimoniales, d’expatriés et de profils mobiles. Depuis la réforme publiée au Resmî Gazete le 4 juin 2026, l’intérêt pour la résidence fiscale turque, les revenus étrangers et l’exonération potentielle de 20 ans doit être analysé avec précision.',
    en: 'Turkey is increasingly attracting investors, entrepreneurs, wealth families, expats and mobile profiles. Since the reform published in the Official Gazette on June 4, 2026, interest in Turkish tax residence, foreign income and the potential 20-year exemption must be reviewed carefully.',
    ru: 'Турция всё чаще интересует инвесторов, предпринимателей, состоятельные семьи, экспатов и мобильные профили. После реформы, опубликованной 4 июня 2026 года, вопросы налоговой резиденции, иностранных доходов и возможной 20-летней льготы нужно анализировать внимательно.',
    ar: 'تجذب تركيا بشكل متزايد المستثمرين ورواد الأعمال والعائلات الثرية والمغتربين والملفات المتنقلة. بعد الإصلاح المنشور في 4 يونيو 2026، يجب تحليل الإقامة الضريبية والدخل الأجنبي والإعفاء المحتمل لمدة 20 سنة بدقة.',
  },
  comparison: {
    fr: 'Comparer la Turquie à d’autres juridictions permet d’évaluer fiscalité, résidence réelle, famille, banque, coût de vie, mobilité, substance et image internationale. La bonne réponse dépend toujours du profil et du pays d’origine.',
    en: 'Comparing Turkey with other jurisdictions helps assess tax, real residence, family, banking, cost of living, mobility, substance and international positioning. The right answer always depends on the profile and country of origin.',
    ru: 'Сравнение Турции с другими юрисдикциями помогает оценить налоги, реальную резиденцию, семью, банк, стоимость жизни, мобильность, substance и международный имидж. Ответ всегда зависит от профиля и страны происхождения.',
    ar: 'مقارنة تركيا بولايات أخرى تساعد على تقييم الضرائب والإقامة الحقيقية والعائلة والبنك وتكلفة الحياة والتنقل والوجود الفعلي والصورة الدولية. الجواب الصحيح يعتمد دائماً على الملف وبلد الأصل.',
  },
  relocation: {
    fr: 'S’installer en Turquie ne se résume pas à louer un appartement. Il faut coordonner résidence, fiscalité, banque, santé, assurance, école, transport, famille, immobilier et réseau local.',
    en: 'Moving to Turkey is not just renting an apartment. Residence, tax, banking, healthcare, insurance, school, transport, family, property and local network must be coordinated.',
    ru: 'Переезд в Турцию — это не только аренда квартиры. Нужно координировать резиденцию, налоги, банк, медицину, страховку, школу, транспорт, семью, недвижимость и локальную сеть.',
    ar: 'الانتقال إلى تركيا ليس مجرد استئجار شقة. يجب تنسيق الإقامة والضرائب والبنك والصحة والتأمين والمدرسة والنقل والعائلة والعقار والشبكة المحلية.',
  },
  business: {
    fr: 'Créer une entreprise en Turquie peut ouvrir une base opérationnelle régionale, mais la structure doit être lisible : activité, banque, comptabilité, contrats, employés, adresse, fiscalité et gouvernance.',
    en: 'Creating a company in Turkey can open a regional operating base, but the structure must be clear: activity, bank, accounting, contracts, employees, address, tax and governance.',
    ru: 'Открытие компании в Турции может дать региональную операционную базу, но структура должна быть понятной: деятельность, банк, бухгалтерия, договоры, сотрудники, адрес, налоги и управление.',
    ar: 'تأسيس شركة في تركيا يمكن أن يفتح قاعدة تشغيل إقليمية، لكن الهيكل يجب أن يكون واضحاً: النشاط، البنك، المحاسبة، العقود، الموظفون، العنوان، الضرائب والإدارة.',
  },
  property: {
    fr: 'L’immobilier en Turquie peut être une porte d’entrée vers l’installation, mais l’achat ou la location doit être relié au projet familial, fiscal, bancaire et patrimonial.',
    en: 'Property in Turkey can be an entry point to relocation, but buying or renting must be connected to the family, tax, banking and wealth plan.',
    ru: 'Недвижимость в Турции может быть входом к переезду, но покупка или аренда должны быть связаны с семейным, налоговым, банковским и имущественным планом.',
    ar: 'العقار في تركيا يمكن أن يكون مدخلاً للانتقال، لكن الشراء أو الإيجار يجب أن يرتبط بالخطة العائلية والضريبية والبنكية والمالية.',
  },
  privateDesk: {
    fr: 'Un investisseur international veut rarement gérer dix interlocuteurs. Le rôle d’un private desk est de coordonner installation, fiscalité, juridique, immobilier, banque, transport et conciergerie avec un seul point de contact.',
    en: 'An international investor rarely wants to manage ten separate contacts. A private desk coordinates relocation, tax, legal, property, banking, transport and concierge through one point of contact.',
    ru: 'Международный инвестор редко хочет управлять десятью контактами. Private desk координирует переезд, налоги, юридические вопросы, недвижимость, банк, транспорт и консьерж-сервис через одну точку контакта.',
    ar: 'المستثمر الدولي لا يريد غالباً إدارة عشرة أطراف. يقوم private desk بتنسيق الانتقال والضرائب والقانون والعقار والبنك والنقل والكونسيرج من خلال نقطة اتصال واحدة.',
  },
  trade: {
    fr: 'Le commerce international depuis la Turquie doit être structuré avec documents, contrats, banque, transport, douane, assurance, conformité et substance commerciale.',
    en: 'International trade from Turkey must be structured with documents, contracts, banking, transport, customs, insurance, compliance and commercial substance.',
    ru: 'Международная торговля из Турции должна быть оформлена через документы, договоры, банк, транспорт, таможню, страхование, compliance и коммерческую substance.',
    ar: 'التجارة الدولية من تركيا يجب أن تُنظم من خلال الوثائق والعقود والبنك والنقل والجمارك والتأمين والامتثال والوجود التجاري.',
  },
};

function assessmentHref(locale: Locale) {
  return locale === 'fr' ? '/diagnostic-prive' : locale === 'en' ? '/en/private-assessment' : locale === 'ru' ? '/ru/chastnaya-konsultatsiya' : '/ar/تقييم-خاص';
}

function baseUrl(page: BosphorasProgrammaticSeoPage, locale: Locale) {
  return `https://bosphoras.com${page.slugs[locale]}`;
}

function h1(page: BosphorasProgrammaticSeoPage, locale: Locale) {
  return page.titles[locale];
}

function description(page: BosphorasProgrammaticSeoPage, locale: Locale) {
  const intro = categoryIntro[page.category]?.[locale] || categoryIntro.tax[locale];
  return `${page.titles[locale]} — ${intro}`.slice(0, 300);
}

function sections(page: BosphorasProgrammaticSeoPage, locale: Locale): Array<[string, string]> {
  const title = page.titles[locale];
  if (locale === 'fr') return [
    ['Ce que cette page permet de comprendre', `${title} doit être lu comme un point de départ stratégique. L’objectif est d’identifier les opportunités, les risques, les conditions d’accès, les documents nécessaires et les professionnels à coordonner avant toute décision.`],
    ['Pourquoi la Turquie revient dans les radars', 'La Turquie combine position géographique, villes premium comme Istanbul, Bodrum et Antalya, tissu entrepreneurial, banques, immobilier, logistique, services et ambition d’attirer investisseurs, familles et entreprises internationales.'],
    ['Le point fiscal à traiter avec prudence', 'La réforme publiée le 4 juin 2026 ouvre un sujet important autour des nouveaux résidents, des revenus étrangers et d’une exonération potentielle sur vingt ans. Mais le régime dépend de conditions précises et ne doit jamais être présenté comme automatique.'],
    ['La méthode Bosphoras', 'Bosphoras prépare une lecture privée du dossier, puis coordonne fiscalistes, avocats, comptables, banques, assureurs, immobilier, transport, bureaux et partenaires locaux pour éviter les décisions isolées.'],
  ];
  if (locale === 'en') return [
    ['What this page helps clarify', `${title} should be read as a strategic starting point. The goal is to identify opportunities, risks, access conditions, required documents and professionals to coordinate before any decision.`],
    ['Why Turkey is back on the radar', 'Turkey combines geography, premium cities such as Istanbul, Bodrum and Antalya, entrepreneurship, banks, property, logistics, services and the ambition to attract international investors, families and companies.'],
    ['The tax point to handle carefully', 'The reform published on June 4, 2026 creates an important topic around new residents, foreign income and a potential twenty-year exemption. But the regime depends on precise conditions and should never be presented as automatic.'],
    ['The Bosphoras method', 'Bosphoras prepares a private reading of the file, then coordinates tax advisors, lawyers, accountants, banks, insurance, property, transport, offices and local partners to avoid isolated decisions.'],
  ];
  if (locale === 'ru') return [
    ['Что помогает понять эта страница', `${title} — это стратегическая отправная точка. Цель — понять возможности, риски, условия, документы и специалистов, которых нужно координировать до решения.`],
    ['Почему Турция снова интересна', 'Турция сочетает географию, премиальные города Istanbul, Bodrum и Antalya, предпринимательство, банки, недвижимость, логистику, услуги и желание привлекать международных инвесторов, семьи и компании.'],
    ['Налоговый пункт требует осторожности', 'Реформа от 4 июня 2026 года создает важную тему для новых резидентов, иностранных доходов и возможной двадцатилетней льготы. Но режим зависит от условий и не является автоматическим.'],
    ['Метод Bosphoras', 'Bosphoras готовит частный разбор файла и координирует налоговых специалистов, юристов, бухгалтеров, банки, страхование, недвижимость, транспорт, офисы и локальных партнеров.'],
  ];
  return [
    ['ما الذي توضحه هذه الصفحة', `${title} هي نقطة بداية استراتيجية. الهدف هو تحديد الفرص والمخاطر والشروط والوثائق والمهنيين الذين يجب تنسيقهم قبل أي قرار.`],
    ['لماذا تعود تركيا إلى اهتمام المستثمرين', 'تجمع تركيا بين الموقع الجغرافي، مدن مثل Istanbul وBodrum وAntalya، ريادة الأعمال، البنوك، العقار، اللوجستيك، الخدمات وطموح جذب المستثمرين والعائلات والشركات الدولية.'],
    ['النقطة الضريبية تحتاج إلى حذر', 'الإصلاح المنشور في 4 يونيو 2026 يفتح موضوعاً مهماً حول المقيمين الجدد والدخل الأجنبي وإعفاء محتمل لمدة عشرين سنة. لكنه مشروط وليس تلقائياً.'],
    ['منهجية Bosphoras', 'يقوم Bosphoras بإعداد قراءة خاصة للملف ثم تنسيق المستشارين الضريبيين والمحامين والمحاسبين والبنوك والتأمين والعقار والنقل والمكاتب والشركاء المحليين.'],
  ];
}

function checklist(locale: Locale) {
  if (locale === 'fr') return ['résidence fiscale actuelle et pays d’origine','historique des trois dernières années en Turquie','revenus étrangers, revenus turcs et revenus mixtes','banque, source des fonds et conformité','sociétés, immobilier, dividendes et plus-values','famille, durée de séjour et centre des intérêts','conventions fiscales applicables','preuves documentaires avant installation'];
  if (locale === 'en') return ['current tax residence and country of origin','last three-year history in Turkey','foreign income, Turkish income and mixed income','banking, source of funds and compliance','companies, property, dividends and capital gains','family, time spent and center of interests','applicable tax treaties','documentary evidence before moving'];
  if (locale === 'ru') return ['текущая налоговая резиденция и страна происхождения','история последних трех лет в Турции','иностранные доходы, турецкие доходы и смешанные доходы','банк, источник средств и compliance','компании, недвижимость, дивиденды и прирост капитала','семья, время пребывания и центр интересов','применимые налоговые соглашения','документы до переезда'];
  return ['الإقامة الضريبية الحالية وبلد الأصل','تاريخ آخر ثلاث سنوات في تركيا','الدخل الأجنبي والدخل التركي والدخل المختلط','البنك ومصدر الأموال والامتثال','الشركات والعقار والأرباح والت gains','العائلة ومدة الإقامة ومركز المصالح','الاتفاقيات الضريبية المطبقة','الأدلة الوثائقية قبل الانتقال'];
}

function faq(page: BosphorasProgrammaticSeoPage, locale: Locale): Array<[string, string]> {
  if (locale === 'fr') return [
    [`${page.titles.fr} : est-ce automatique ?`, 'Non. Chaque situation dépend du pays d’origine, de la résidence réelle, de la nature des revenus, des documents, de la banque et des conventions fiscales applicables.'],
    ['La réforme turque de 2026 change-t-elle l’analyse ?', 'Oui, elle renforce l’intérêt de la Turquie pour certains profils, notamment sur les revenus étrangers et les nouveaux résidents. Mais les conditions doivent être vérifiées au cas par cas.'],
    ['Bosphoras donne-t-il un conseil fiscal ?', 'Non. Bosphoras coordonne une analyse privée avec des professionnels qualifiés : fiscalistes, avocats, comptables, banques et partenaires locaux.'],
  ];
  if (locale === 'en') return [
    [`${page.titles.en}: is it automatic?`, 'No. Each situation depends on country of origin, real residence, income type, documents, banking and applicable tax treaties.'],
    ['Does the 2026 Turkish reform change the analysis?', 'Yes. It increases Turkey’s attractiveness for certain profiles, especially around foreign income and new residents. But conditions must be verified case by case.'],
    ['Does Bosphoras provide tax advice?', 'No. Bosphoras coordinates a private assessment with qualified professionals: tax advisors, lawyers, accountants, banks and local partners.'],
  ];
  if (locale === 'ru') return [
    [`${page.titles.ru}: это автоматически?`, 'Нет. Все зависит от страны происхождения, реальной резиденции, вида доходов, документов, банка и применимых налоговых соглашений.'],
    ['Реформа Турции 2026 года меняет анализ?', 'Да, она повышает интерес к Турции для некоторых профилей, особенно по иностранным доходам и новым резидентам. Но условия нужно проверять индивидуально.'],
    ['Bosphoras дает налоговую консультацию?', 'Нет. Bosphoras координирует частный анализ с квалифицированными специалистами: налоговыми консультантами, юристами, бухгалтерами, банками и локальными партнерами.'],
  ];
  return [
    [`${page.titles.ar}: هل هو تلقائي؟`, 'لا. كل حالة تعتمد على بلد الأصل، الإقامة الحقيقية، نوع الدخل، الوثائق، البنك والاتفاقيات الضريبية المطبقة.'],
    ['هل يغير إصلاح تركيا 2026 التحليل؟', 'نعم، يزيد من جاذبية تركيا لبعض الملفات، خصوصاً حول الدخل الأجنبي والمقيمين الجدد. لكن الشروط يجب فحصها حالة بحالة.'],
    ['هل يقدم Bosphoras استشارة ضريبية؟', 'لا. ينسق Bosphoras تحليلاً خاصاً مع مختصين مؤهلين: مستشارين ضريبيين، محامين، محاسبين، بنوك وشركاء محليين.'],
  ];
}

export function getBosphorasProgrammaticSeoMetadata(page: BosphorasProgrammaticSeoPage, locale: Locale): Metadata {
  const canonical = baseUrl(page, locale);
  const title = `${page.titles[locale]} | Bosphoras`;
  const desc = description(page, locale);
  return { title, description: desc, alternates: { canonical, languages: { fr: baseUrl(page, 'fr'), en: baseUrl(page, 'en'), ru: baseUrl(page, 'ru'), ar: baseUrl(page, 'ar'), 'x-default': baseUrl(page, 'fr') } }, openGraph: { title, description: desc, url: canonical, siteName: 'Bosphoras', locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : locale === 'ru' ? 'ru_RU' : 'ar_AR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description: desc, images: ['/images/og-default.jpg'] } };
}

export function BosphorasProgrammaticSeoPage({ page, locale }: { page: BosphorasProgrammaticSeoPage; locale: Locale }) {
  const l = labels[locale];
  const title = h1(page, locale);
  const desc = description(page, locale);
  const pageSections = sections(page, locale);
  const pageChecklist = checklist(locale);
  const pageFaq = faq(page, locale);
  const canonical = baseUrl(page, locale);
  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description: desc, inLanguage: locale, datePublished: '2026-06-05', dateModified: '2026-06-05', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: canonical, keywords: page.focus.join(', ') }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: pageFaq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
      <Header locale={locale} currentPath={page.slugs[locale]} />
      <main dir={locale === 'ar' ? 'rtl' : 'ltr'} className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1300px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">{l.guide} · {l.updated}</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">{title}</h1><p className="mt-8 max-w-4xl text-lg leading-9 text-white/80">{categoryIntro[page.category]?.[locale] || categoryIntro.tax[locale]}</p><Link href={assessmentHref(locale)} className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">{l.cta}<ArrowRight size={16} /></Link></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1300px]"><Sparkles className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em] md:text-6xl">{l.why}</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{pageSections.map(([sectionTitle, body]) => <article key={sectionTitle} className="border border-[#d8c7a1] bg-white p-7"><h3 className="font-serif text-2xl text-[#121826]">{sectionTitle}</h3><p className="mt-4 text-sm leading-8 text-[#3e4857]">{body}</p></article>)}</div></div></section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><FileText className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em] md:text-6xl">{l.verify}</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{pageChecklist.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">{l.warning}</p></div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">{l.faq}</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{pageFaq.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
