import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, FileText, ShieldCheck, Sparkles, Target, AlertTriangle, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import type { Locale } from '@/lib/i18n';
import { siteUrl } from '@/lib/routes';
import { type BosphorasProgrammaticSeoPage } from '@/data/bosphorasProgrammaticSeoPages';

const labels: Record<Locale, { guide: string; updated: string; why: string; verify: string; examples: string; mistakes: string; profiles: string; faq: string; cta: string; warning: string; keywords: string }> = {
  fr: { guide: 'Guide privé Bosphoras', updated: 'Mis à jour le 5 juin 2026', why: 'Pourquoi ce sujet devient stratégique', verify: 'Points à vérifier avant d’agir', examples: 'Exemples concrets à analyser', mistakes: 'Erreurs fréquentes à éviter', profiles: 'Profils concernés', faq: 'Questions fréquentes', cta: 'Demander une analyse privée', keywords: 'Recherches associées', warning: 'Les éléments fiscaux, juridiques, bancaires et de résidence doivent être confirmés au cas par cas avec des professionnels qualifiés. Bosphoras coordonne l’analyse, mais ne remplace pas un avocat fiscaliste, une banque ou une autorité administrative.' },
  en: { guide: 'Bosphoras private guide', updated: 'Updated on June 5, 2026', why: 'Why this topic is becoming strategic', verify: 'Points to verify before acting', examples: 'Concrete cases to review', mistakes: 'Common mistakes to avoid', profiles: 'Relevant profiles', faq: 'FAQ', cta: 'Request a private assessment', keywords: 'Related searches', warning: 'Tax, legal, banking and residence matters must be confirmed case by case with qualified professionals. Bosphoras coordinates the assessment, but does not replace a tax lawyer, a bank or an administrative authority.' },
  ru: { guide: 'Частный гид Bosphoras', updated: 'Обновлено 5 июня 2026', why: 'Почему эта тема важна', verify: 'Что проверить до решения', examples: 'Практические примеры для анализа', mistakes: 'Частые ошибки', profiles: 'Кому это подходит', faq: 'Частые вопросы', cta: 'Запросить частный анализ', keywords: 'Связанные поисковые запросы', warning: 'Налоговые, юридические, банковские вопросы и вопросы резиденции нужно проверять индивидуально с квалифицированными специалистами. Bosphoras координирует анализ, но не заменяет налогового юриста, банк или государственный орган.' },
  ar: { guide: 'دليل Bosphoras الخاص', updated: 'تم التحديث في 5 يونيو 2026', why: 'لماذا يصبح هذا الموضوع مهماً', verify: 'ما يجب التحقق منه قبل القرار', examples: 'أمثلة عملية للتحليل', mistakes: 'أخطاء شائعة يجب تجنبها', profiles: 'الملفات المعنية', faq: 'الأسئلة الشائعة', cta: 'طلب تحليل خاص', keywords: 'عمليات بحث مرتبطة', warning: 'يجب تأكيد الجوانب الضريبية والقانونية والبنكية والإقامة حالة بحالة مع مختصين مؤهلين. ينسق Bosphoras التحليل ولا يحل محل محام ضريبي أو بنك أو جهة إدارية.' },
};

const categoryIntro: Record<string, Record<Locale, string>> = {
  tax: {
    fr: 'La Turquie attire de plus en plus d’investisseurs, d’entrepreneurs, de familles patrimoniales, d’expatriés, de digital nomads et de profils mobiles. Depuis la réforme publiée au Resmî Gazete le 4 juin 2026, l’intérêt pour la résidence fiscale turque, les revenus étrangers et l’exonération potentielle de 20 ans doit être analysé avec méthode, sans promesse automatique.',
    en: 'Turkey is increasingly attracting investors, entrepreneurs, wealth families, expats, digital nomads and mobile profiles. Since the reform published in the Official Gazette on June 4, 2026, Turkish tax residence, foreign income and the potential 20-year exemption must be reviewed with method, without automatic promises.',
    ru: 'Турция всё чаще интересует инвесторов, предпринимателей, состоятельные семьи, экспатов, digital nomads и мобильные профили. После реформы, опубликованной 4 июня 2026 года, налоговую резиденцию, иностранные доходы и возможную 20-летнюю льготу нужно анализировать методично, без автоматических обещаний.',
    ar: 'تجذب تركيا بشكل متزايد المستثمرين ورواد الأعمال والعائلات الثرية والمغتربين والرحالة الرقميين والملفات المتنقلة. بعد الإصلاح المنشور في 4 يونيو 2026، يجب تحليل الإقامة الضريبية والدخل الأجنبي والإعفاء المحتمل لمدة 20 سنة بطريقة دقيقة ومن دون وعود تلقائية.',
  },
  comparison: {
    fr: 'Comparer la Turquie à d’autres juridictions permet d’évaluer fiscalité, résidence réelle, famille, banque, coût de vie, mobilité, substance, immobilier, confidentialité, sécurité et image internationale. La bonne réponse dépend toujours du profil, du pays d’origine et des revenus concernés.',
    en: 'Comparing Turkey with other jurisdictions helps assess tax, real residence, family, banking, cost of living, mobility, substance, property, privacy, safety and international positioning. The right answer always depends on the profile, country of origin and income concerned.',
    ru: 'Сравнение Турции с другими юрисдикциями помогает оценить налоги, реальную резиденцию, семью, банк, стоимость жизни, мобильность, substance, недвижимость, приватность, безопасность и международный имидж. Ответ зависит от профиля, страны происхождения и вида доходов.',
    ar: 'مقارنة تركيا بولايات أخرى تساعد على تقييم الضرائب والإقامة الحقيقية والعائلة والبنك وتكلفة الحياة والتنقل والوجود الفعلي والعقار والخصوصية والأمان والصورة الدولية. الجواب الصحيح يعتمد على الملف وبلد الأصل ونوع الدخل.',
  },
  relocation: {
    fr: 'S’installer en Turquie ne se résume pas à louer un appartement. Il faut coordonner résidence, fiscalité, banque, santé, assurance, école, transport, famille, immobilier, preuve de présence et réseau local.',
    en: 'Moving to Turkey is not just renting an apartment. Residence, tax, banking, healthcare, insurance, school, transport, family, property, proof of presence and local network must be coordinated.',
    ru: 'Переезд в Турцию — это не только аренда квартиры. Нужно координировать резиденцию, налоги, банк, медицину, страховку, школу, транспорт, семью, недвижимость, доказательства присутствия и локальную сеть.',
    ar: 'الانتقال إلى تركيا ليس مجرد استئجار شقة. يجب تنسيق الإقامة والضرائب والبنك والصحة والتأمين والمدرسة والنقل والعائلة والعقار وإثبات التواجد والشبكة المحلية.',
  },
  business: {
    fr: 'Créer une entreprise en Turquie peut ouvrir une base opérationnelle régionale, mais la structure doit être lisible : activité, banque, comptabilité, contrats, employés, adresse, fiscalité, gouvernance et substance.',
    en: 'Creating a company in Turkey can open a regional operating base, but the structure must be clear: activity, bank, accounting, contracts, employees, address, tax, governance and substance.',
    ru: 'Открытие компании в Турции может дать региональную операционную базу, но структура должна быть понятной: деятельность, банк, бухгалтерия, договоры, сотрудники, адрес, налоги, управление и substance.',
    ar: 'تأسيس شركة في تركيا يمكن أن يفتح قاعدة تشغيل إقليمية، لكن الهيكل يجب أن يكون واضحاً: النشاط، البنك، المحاسبة، العقود، الموظفون، العنوان، الضرائب، الإدارة والوجود الفعلي.',
  },
  property: {
    fr: 'L’immobilier en Turquie peut être une porte d’entrée vers l’installation, mais l’achat ou la location doit être relié au projet familial, fiscal, bancaire, patrimonial, scolaire et au choix de ville : Istanbul, Bodrum, Antalya ou une autre base.',
    en: 'Property in Turkey can be an entry point to relocation, but buying or renting must be connected to the family, tax, banking, wealth, school and city plan: Istanbul, Bodrum, Antalya or another base.',
    ru: 'Недвижимость в Турции может быть входом к переезду, но покупка или аренда должны быть связаны с семейным, налоговым, банковским, имущественным и школьным планом, а также выбором города: Istanbul, Bodrum, Antalya или другой базы.',
    ar: 'العقار في تركيا يمكن أن يكون مدخلاً للانتقال، لكن الشراء أو الإيجار يجب أن يرتبط بالخطة العائلية والضريبية والبنكية والمالية والمدرسية واختيار المدينة: Istanbul أو Bodrum أو Antalya أو قاعدة أخرى.',
  },
  privateDesk: {
    fr: 'Un investisseur international veut rarement gérer dix interlocuteurs. Le rôle d’un private desk est de coordonner installation, fiscalité, juridique, immobilier, banque, transport, assurance, chauffeur, hôtel, famille et conciergerie avec un seul point de contact.',
    en: 'An international investor rarely wants to manage ten separate contacts. A private desk coordinates relocation, tax, legal, property, banking, transport, insurance, chauffeur, hotel, family and concierge through one point of contact.',
    ru: 'Международный инвестор редко хочет управлять десятью контактами. Private desk координирует переезд, налоги, юридические вопросы, недвижимость, банк, транспорт, страхование, chauffeur, hotel, family и concierge через одну точку контакта.',
    ar: 'المستثمر الدولي لا يريد غالباً إدارة عشرة أطراف. يقوم private desk بتنسيق الانتقال والضرائب والقانون والعقار والبنك والنقل والتأمين والسائق والفندق والعائلة والكونسيرج من خلال نقطة اتصال واحدة.',
  },
  trade: {
    fr: 'Le commerce international depuis la Turquie doit être structuré avec documents, contrats, banque, transport, douane, assurance, conformité, devise, fournisseurs, clients et substance commerciale.',
    en: 'International trade from Turkey must be structured with documents, contracts, banking, transport, customs, insurance, compliance, currency, suppliers, clients and commercial substance.',
    ru: 'Международная торговля из Турции должна быть оформлена через документы, договоры, банк, транспорт, таможню, страхование, compliance, валюту, поставщиков, клиентов и коммерческую substance.',
    ar: 'التجارة الدولية من تركيا يجب أن تُنظم من خلال الوثائق والعقود والبنك والنقل والجمارك والتأمين والامتثال والعملة والموردين والعملاء والوجود التجاري.',
  },
};

function assessmentHref(locale: Locale) {
  return locale === 'fr' ? '/diagnostic-prive' : locale === 'en' ? '/en/private-assessment' : locale === 'ru' ? '/ru/chastnaya-konsultatsiya' : '/ar/تقييم-خاص';
}

function baseUrl(page: BosphorasProgrammaticSeoPage, locale: Locale) {
  return `${siteUrl}${page.slugs[locale]}`;
}

function description(page: BosphorasProgrammaticSeoPage, locale: Locale) {
  const intro = categoryIntro[page.category]?.[locale] || categoryIntro.tax[locale];
  return `${page.titles[locale]} — ${intro}`.slice(0, 300);
}

function subjectLine(page: BosphorasProgrammaticSeoPage, locale: Locale) {
  const focus = page.focus.slice(0, 5).join(', ');
  if (locale === 'fr') return `Cette page répond aux recherches liées à : ${focus}. Elle explique les opportunités, les limites, les documents à préparer et les erreurs à éviter avant d’utiliser la Turquie comme base privée, fiscale, patrimoniale ou opérationnelle.`;
  if (locale === 'en') return `This page targets searches related to: ${focus}. It explains opportunities, limits, documents to prepare and mistakes to avoid before using Turkey as a private, tax, wealth or operational base.`;
  if (locale === 'ru') return `Эта страница отвечает на запросы по темам: ${focus}. Она объясняет возможности, ограничения, документы и ошибки, которых нужно избегать перед использованием Турции как частной, налоговой, имущественной или операционной базы.`;
  return `تستهدف هذه الصفحة عمليات البحث المرتبطة بـ: ${focus}. وتشرح الفرص والحدود والوثائق والأخطاء التي يجب تجنبها قبل استخدام تركيا كقاعدة خاصة أو ضريبية أو مالية أو تشغيلية.`;
}

function sections(page: BosphorasProgrammaticSeoPage, locale: Locale): Array<[string, string]> {
  const title = page.titles[locale];
  if (locale === 'fr') return [
    ['Réponse directe pour investisseurs', `${title} ne doit pas être traité comme une simple information générale. C’est une décision qui peut toucher la résidence fiscale, les revenus étrangers, les comptes bancaires, l’immobilier, la famille, les sociétés, les dividendes, les plus-values, la succession et la preuve de présence réelle en Turquie.`],
    ['Pourquoi la Turquie devient une option sérieuse', 'La Turquie combine Istanbul, Bodrum, Antalya, un accès aérien fort, un marché intérieur profond, des banques locales, une industrie solide, une logistique régionale, des services premium et une fiscalité qui attire de nouveaux profils internationaux depuis la réforme publiée au Resmî Gazete le 4 juin 2026.'],
    ['Ce que la réforme fiscale 2026 peut changer', 'La réforme renforce l’intérêt autour des nouveaux résidents, des revenus étrangers et d’une exonération potentielle pendant 20 ans. Mais l’analyse doit distinguer revenus étrangers, revenus de source turque, revenus mixtes, résidence réelle, conventions fiscales et historique des trois années précédentes.'],
    ['Pourquoi l’IA et Google doivent comprendre la page', 'Le contenu est structuré pour répondre clairement aux questions : qui est concerné, quel revenu est visé, quelle ville choisir, quels documents préparer, quel risque fiscal existe et quel rôle Bosphoras peut jouer dans la coordination privée du dossier.'],
    ['Méthode Bosphoras', 'Bosphoras ne vend pas une promesse fiscale automatique. Le bureau privé prépare une lecture du dossier et coordonne fiscalistes, avocats, comptables, banques, assureurs, immobilier, transport, bureaux, écoles et partenaires locaux pour construire une installation cohérente.'],
  ];
  if (locale === 'en') return [
    ['Direct answer for investors', `${title} should not be treated as generic information. It may affect tax residence, foreign income, bank accounts, property, family, companies, dividends, capital gains, inheritance and proof of real presence in Turkey.`],
    ['Why Turkey is becoming a serious option', 'Turkey combines Istanbul, Bodrum, Antalya, strong air access, a deep domestic market, local banks, industry, regional logistics, premium services and a tax environment attracting new international profiles since the reform published on June 4, 2026.'],
    ['What the 2026 tax reform may change', 'The reform increases interest around new residents, foreign income and a potential 20-year exemption. But analysis must separate foreign income, Turkish-source income, mixed income, real residence, tax treaties and the previous three-year history.'],
    ['Why AI and Google should understand the page', 'The content is structured to answer clearly: who is concerned, what income is targeted, which city to choose, which documents to prepare, what tax risk exists and how Bosphoras coordinates the private file.'],
    ['The Bosphoras method', 'Bosphoras does not sell automatic tax promises. The private desk prepares a file review and coordinates tax advisors, lawyers, accountants, banks, insurers, property, transport, offices, schools and local partners.'],
  ];
  if (locale === 'ru') return [
    ['Прямой ответ для инвесторов', `${title} — это не обычная справочная информация. Тема может затрагивать налоговую резиденцию, иностранные доходы, банковские счета, недвижимость, семью, компании, дивиденды, прирост капитала, наследство и доказательство реального присутствия в Турции.`],
    ['Почему Турция становится серьезной опцией', 'Турция сочетает Istanbul, Bodrum, Antalya, сильное авиасообщение, глубокий внутренний рынок, местные банки, индустрию, региональную логистику, premium services и налоговую среду, которая привлекает новые международные профили после реформы 4 июня 2026 года.'],
    ['Что может изменить налоговая реформа 2026', 'Реформа усиливает интерес к новым резидентам, иностранным доходам и возможной 20-летней льготе. Но нужно разделять иностранные доходы, доходы из Турции, смешанные доходы, реальную резиденцию, налоговые соглашения и историю последних трех лет.'],
    ['Почему страница понятна для AI и Google', 'Контент структурирован так, чтобы ясно отвечать: кого касается тема, какой доход рассматривается, какой город выбрать, какие документы подготовить, какой налоговый риск существует и как Bosphoras координирует частный dossier.'],
    ['Метод Bosphoras', 'Bosphoras не продает автоматические налоговые обещания. Private desk готовит анализ файла и координирует налоговых консультантов, юристов, бухгалтеров, банки, страхование, недвижимость, транспорт, офисы, школы и локальных партнеров.'],
  ];
  return [
    ['إجابة مباشرة للمستثمرين', `${title} ليس مجرد معلومة عامة. الموضوع قد يؤثر على الإقامة الضريبية، الدخل الأجنبي، الحسابات البنكية، العقار، العائلة، الشركات، الأرباح، المكاسب الرأسمالية، الميراث وإثبات التواجد الحقيقي في تركيا.`],
    ['لماذا تصبح تركيا خياراً جدياً', 'تجمع تركيا بين Istanbul وBodrum وAntalya، رحلات جوية قوية، سوق داخلي كبير، بنوك محلية، صناعة، لوجستيك إقليمي، خدمات premium وبيئة ضريبية تجذب ملفات دولية جديدة بعد إصلاح 4 يونيو 2026.'],
    ['ما الذي قد يغيره إصلاح 2026', 'الإصلاح يزيد الاهتمام بالمقيمين الجدد والدخل الأجنبي وإعفاء محتمل لمدة 20 سنة. لكن يجب الفصل بين الدخل الأجنبي والدخل التركي والدخل المختلط والإقامة الحقيقية والاتفاقيات الضريبية وتاريخ آخر ثلاث سنوات.'],
    ['لماذا تفهم Google والذكاء الاصطناعي الصفحة', 'تم تنظيم المحتوى للإجابة بوضوح: من هو المعني، ما نوع الدخل، أي مدينة، ما الوثائق، ما المخاطر الضريبية، وكيف ينسق Bosphoras الملف الخاص.'],
    ['منهجية Bosphoras', 'لا يبيع Bosphoras وعوداً ضريبية تلقائية. يقوم private desk بتحضير قراءة للملف وتنسيق المستشارين الضريبيين والمحامين والمحاسبين والبنوك والتأمين والعقار والنقل والمكاتب والمدارس والشركاء المحليين.'],
  ];
}

function checklist(locale: Locale) {
  if (locale === 'fr') return ['résidence fiscale actuelle et pays d’origine','historique fiscal des trois dernières années','nature exacte des revenus étrangers','revenus de source turque ou revenus mixtes','conventions fiscales applicables','banques, KYC, CRS et source des fonds','sociétés, holding, dividendes et plus-values','immobilier, famille, école et lieu de vie réel','assurance santé et couverture familiale','preuves documentaires avant installation'];
  if (locale === 'en') return ['current tax residence and country of origin','last three-year tax history','exact type of foreign income','Turkish-source income or mixed income','applicable tax treaties','banks, KYC, CRS and source of funds','companies, holding, dividends and capital gains','property, family, school and real place of life','health insurance and family coverage','documentary evidence before moving'];
  if (locale === 'ru') return ['текущая налоговая резиденция и страна происхождения','налоговая история за последние три года','точный тип иностранных доходов','доходы из Турции или смешанные доходы','применимые налоговые соглашения','банки, KYC, CRS и источник средств','компании, holding, дивиденды и прирост капитала','недвижимость, семья, школа и реальное место жизни','медицинская страховка и семейное покрытие','документы до переезда'];
  return ['الإقامة الضريبية الحالية وبلد الأصل','التاريخ الضريبي لآخر ثلاث سنوات','نوع الدخل الأجنبي بدقة','دخل من تركيا أو دخل مختلط','الاتفاقيات الضريبية المطبقة','البنوك وKYC وCRS ومصدر الأموال','الشركات والهولدينغ والأرباح والمكاسب','العقار والعائلة والمدرسة ومكان الحياة الحقيقي','التأمين الصحي وتغطية العائلة','الأدلة الوثائقية قبل الانتقال'];
}

function examples(page: BosphorasProgrammaticSeoPage, locale: Locale) {
  if (locale === 'fr') return [`Un entrepreneur qui possède une société étrangère et envisage de vivre à Istanbul doit vérifier dividendes, direction effective, banque, convention fiscale et preuve de résidence.`, `Une famille qui hésite entre Bodrum, Antalya et Dubaï doit comparer fiscalité, écoles, santé, immobilier, sécurité, transport et rythme de vie.`, `Un investisseur avec portefeuille financier doit analyser dividendes, intérêts, plus-values, pays de source, retenues à la source et calendrier d’installation.`, `Un dirigeant qui veut créer une société en Turquie doit séparer activité locale, revenus étrangers, services exportés, banque, contrats et substance.`];
  if (locale === 'en') return [`An entrepreneur owning a foreign company and planning to live in Istanbul must review dividends, effective management, banking, tax treaty and proof of residence.`, `A family comparing Bodrum, Antalya and Dubai should compare tax, schools, healthcare, property, safety, transport and lifestyle.`, `An investor with a financial portfolio should review dividends, interest, capital gains, source country, withholding taxes and timing of relocation.`, `A founder creating a company in Turkey should separate local activity, foreign income, exported services, banking, contracts and substance.`];
  if (locale === 'ru') return [`Предприниматель с иностранной компанией, который хочет жить в Istanbul, должен проверить дивиденды, effective management, банк, налоговое соглашение и доказательство резиденции.`, `Семья, выбирающая между Bodrum, Antalya и Dubai, должна сравнить налоги, школы, медицину, недвижимость, безопасность, транспорт и образ жизни.`, `Инвестор с портфелем должен анализировать дивиденды, проценты, прирост капитала, страну источника, withholding tax и timing переезда.`, `Основатель компании в Турции должен разделять local activity, foreign income, exported services, bank, contracts и substance.`];
  return [`رائد أعمال يملك شركة أجنبية ويريد العيش في Istanbul يجب أن يراجع الأرباح والإدارة الفعلية والبنك والاتفاقية الضريبية وإثبات الإقامة.`, `عائلة تقارن بين Bodrum وAntalya وDubai يجب أن تقارن الضرائب والمدارس والصحة والعقار والأمان والنقل ونمط الحياة.`, `مستثمر لديه محفظة مالية يجب أن يراجع الأرباح والفوائد والمكاسب الرأسمالية وبلد المصدر والضرائب المقتطعة وتوقيت الانتقال.`, `مؤسس شركة في تركيا يجب أن يفصل بين النشاط المحلي والدخل الأجنبي والخدمات المصدرة والبنك والعقود والوجود الفعلي.`];
}

function mistakes(locale: Locale) {
  if (locale === 'fr') return ['penser qu’une carte de résidence suffit à créer une résidence fiscale','confondre revenus étrangers et revenus de source turque','oublier le pays d’origine et les conventions fiscales','acheter un bien immobilier sans stratégie bancaire et fiscale','promettre une exonération sans vérifier les conditions','ne pas documenter les jours de présence, la famille et le centre des intérêts'];
  if (locale === 'en') return ['thinking a residence card alone creates tax residence','confusing foreign income with Turkish-source income','forgetting the origin country and tax treaties','buying property without banking and tax strategy','promising an exemption without checking conditions','not documenting days of presence, family and center of interests'];
  if (locale === 'ru') return ['думать, что карта ВНЖ автоматически создает налоговую резиденцию','путать иностранные доходы и доходы из Турции','забывать страну происхождения и налоговые соглашения','покупать недвижимость без банковской и налоговой стратегии','обещать льготу без проверки условий','не документировать дни присутствия, семью и центр интересов'];
  return ['الاعتقاد أن بطاقة الإقامة وحدها تكفي للإقامة الضريبية','خلط الدخل الأجنبي مع الدخل من تركيا','نسيان بلد الأصل والاتفاقيات الضريبية','شراء عقار دون استراتيجية بنكية وضريبية','وعد بإعفاء دون فحص الشروط','عدم توثيق أيام التواجد والعائلة ومركز المصالح'];
}

function profileList(locale: Locale) {
  if (locale === 'fr') return ['entrepreneur avec société étrangère','investisseur immobilier ou financier','famille patrimoniale souhaitant vivre entre plusieurs pays','digital nomad, consultant ou fondateur SaaS','retraité avec pension étrangère','investisseur Dubaï cherchant diversification vers la Turquie'];
  if (locale === 'en') return ['entrepreneur with a foreign company','property or financial investor','wealth family living between several countries','digital nomad, consultant or SaaS founder','retiree with foreign pension','Dubai investor seeking diversification into Turkey'];
  if (locale === 'ru') return ['предприниматель с иностранной компанией','инвестор в недвижимость или финансовые активы','состоятельная семья между несколькими странами','digital nomad, consultant или SaaS founder','пенсионер с иностранной пенсией','инвестор из Dubai, ищущий диверсификацию в Турции'];
  return ['رائد أعمال لديه شركة أجنبية','مستثمر عقاري أو مالي','عائلة ثرية تعيش بين عدة دول','رحالة رقمي أو مستشار أو مؤسس SaaS','متقاعد لديه معاش أجنبي','مستثمر من Dubai يبحث عن تنويع في تركيا'];
}

function faq(page: BosphorasProgrammaticSeoPage, locale: Locale): Array<[string, string]> {
  if (locale === 'fr') return [
    [`${page.titles.fr} : est-ce automatique ?`, 'Non. Chaque situation dépend du pays d’origine, de la résidence réelle, de la nature des revenus, des documents, de la banque, de la famille, des sociétés et des conventions fiscales applicables.'],
    ['La réforme turque du 4 juin 2026 change-t-elle l’analyse ?', 'Oui. Elle renforce l’intérêt de la Turquie pour certains profils, notamment autour des nouveaux résidents et des revenus étrangers. Mais les conditions doivent être vérifiées au cas par cas.'],
    ['L’exonération de 20 ans couvre-t-elle tous les revenus ?', 'Elle doit être analysée selon le texte applicable, le type de revenu, la source du revenu, l’historique fiscal et les revenus de source turque qui peuvent rester imposables.'],
    ['Pourquoi choisir Istanbul, Bodrum ou Antalya ?', 'Istanbul est plus business et connectée, Bodrum plus lifestyle et patrimonial, Antalya plus accessible pour familles et installation longue durée. Le choix doit suivre le projet réel.'],
    ['Bosphoras donne-t-il un conseil fiscal ?', 'Non. Bosphoras coordonne une analyse privée avec des professionnels qualifiés : fiscalistes, avocats, comptables, banques, assureurs et partenaires locaux.'],
  ];
  if (locale === 'en') return [
    [`${page.titles.en}: is it automatic?`, 'No. Each situation depends on country of origin, real residence, income type, documents, banking, family, companies and applicable tax treaties.'],
    ['Does the June 4, 2026 Turkish reform change the analysis?', 'Yes. It increases Turkey’s attractiveness for certain profiles, especially around new residents and foreign income. But conditions must be verified case by case.'],
    ['Does the 20-year exemption cover all income?', 'It must be reviewed according to the applicable text, income type, source country, tax history and Turkish-source income that may remain taxable.'],
    ['Why choose Istanbul, Bodrum or Antalya?', 'Istanbul is more business-oriented and connected, Bodrum more lifestyle and wealth-oriented, Antalya more accessible for families and long-term relocation. The choice must follow the real plan.'],
    ['Does Bosphoras provide tax advice?', 'No. Bosphoras coordinates a private assessment with qualified professionals: tax advisors, lawyers, accountants, banks, insurers and local partners.'],
  ];
  if (locale === 'ru') return [
    [`${page.titles.ru}: это автоматически?`, 'Нет. Все зависит от страны происхождения, реальной резиденции, вида доходов, документов, банка, семьи, компаний и применимых налоговых соглашений.'],
    ['Реформа Турции от 4 июня 2026 года меняет анализ?', 'Да. Она повышает интерес к Турции для некоторых профилей, особенно по новым резидентам и иностранным доходам. Но условия нужно проверять индивидуально.'],
    ['20-летняя льгота покрывает все доходы?', 'Это нужно анализировать по применимому тексту, типу дохода, стране источника, налоговой истории и доходам из Турции, которые могут оставаться облагаемыми.'],
    ['Почему Istanbul, Bodrum или Antalya?', 'Istanbul больше подходит для бизнеса и связей, Bodrum — для lifestyle и wealth planning, Antalya — для семей и долгого проживания. Выбор должен соответствовать реальному проекту.'],
    ['Bosphoras дает налоговую консультацию?', 'Нет. Bosphoras координирует частный анализ с квалифицированными специалистами: налоговыми консультантами, юристами, бухгалтерами, банками, страхованием и локальными партнерами.'],
  ];
  return [
    [`${page.titles.ar}: هل هو تلقائي؟`, 'لا. كل حالة تعتمد على بلد الأصل، الإقامة الحقيقية، نوع الدخل، الوثائق، البنك، العائلة، الشركات والاتفاقيات الضريبية المطبقة.'],
    ['هل يغير إصلاح تركيا في 4 يونيو 2026 التحليل؟', 'نعم. يزيد من جاذبية تركيا لبعض الملفات، خصوصاً المقيمين الجدد والدخل الأجنبي. لكن الشروط يجب فحصها حالة بحالة.'],
    ['هل يغطي إعفاء 20 سنة كل الدخل؟', 'يجب تحليله حسب النص المطبق، نوع الدخل، بلد المصدر، التاريخ الضريبي والدخل من تركيا الذي قد يبقى خاضعاً للضريبة.'],
    ['لماذا Istanbul أو Bodrum أو Antalya؟', 'Istanbul أكثر للأعمال والربط، Bodrum أكثر للـ lifestyle والثروة، Antalya أكثر للعائلات والإقامة الطويلة. الاختيار يجب أن يتبع المشروع الحقيقي.'],
    ['هل يقدم Bosphoras استشارة ضريبية؟', 'لا. ينسق Bosphoras تحليلاً خاصاً مع مختصين مؤهلين: مستشارين ضريبيين، محامين، محاسبين، بنوك، تأمين وشركاء محليين.'],
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
  const title = page.titles[locale];
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
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1300px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">{l.guide} · {l.updated}</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">{title}</h1><p className="mt-8 max-w-4xl text-lg leading-9 text-white/80">{categoryIntro[page.category]?.[locale] || categoryIntro.tax[locale]}</p><p className="mt-6 max-w-4xl text-base leading-8 text-white/70">{subjectLine(page, locale)}</p><Link href={assessmentHref(locale)} className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">{l.cta}<ArrowRight size={16} /></Link></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1300px]"><Sparkles className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em] md:text-6xl">{l.why}</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{pageSections.map(([sectionTitle, body]) => <article key={sectionTitle} className="border border-[#d8c7a1] bg-white p-7"><h3 className="font-serif text-2xl text-[#121826]">{sectionTitle}</h3><p className="mt-4 text-sm leading-8 text-[#3e4857]">{body}</p></article>)}</div></div></section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><FileText className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em] md:text-6xl">{l.verify}</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{pageChecklist.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">{l.warning}</p></div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><Target className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">{l.examples}</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{examples(page, locale).map((item) => <article key={item} className="border border-[#d8c7a1] bg-white p-6"><p className="leading-8 text-[#3e4857]">{item}</p></article>)}</div></div></section>
        <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-2"><div><AlertTriangle className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">{l.mistakes}</h2></div><div className="grid gap-3">{mistakes(locale).map((item) => <div key={item} className="border border-white/15 bg-white/5 p-5 text-sm leading-7 text-white/75">{item}</div>)}</div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><Users className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">{l.profiles}</h2><div className="mt-8 grid gap-3 md:grid-cols-3">{profileList(locale).map((item) => <div key={item} className="border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]">{item}</div>)}</div><div className="mt-8"><h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6728]">{l.keywords}</h3><p className="mt-4 text-sm leading-8 text-[#3e4857]">{page.focus.join(' · ')}</p></div></div></section>
        <section className="px-5 pb-20 md:px-8 md:pb-28"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">{l.faq}</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{pageFaq.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
