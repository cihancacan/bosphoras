import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Home, Landmark, Plane, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import type { Locale } from '@/lib/i18n';
import { siteUrl } from '@/lib/routes';

const paths: Record<Locale, string> = {
  fr: '/relocation-corporate-turquie',
  en: '/en/corporate-relocation-turkey',
  ru: '/ru/korporativnyy-relokeyshn-v-turtsiyu',
  ar: '/ar/الانتقال-المؤسسي-إلى-تركيا',
};

const content = {
  fr: {
    title: 'Relocation corporate en Turquie pour cadres dirigeants, salariés expatriés et familles internationales',
    eyebrow: 'Bosphoras Services · Corporate Relocation Desk',
    description: 'Service premium de relocation corporate en Turquie pour entreprises, cadres dirigeants, salariés expatriés et familles : logement, titre de séjour, immigration, installation, école, assurance, banque et accompagnement local.',
    hero: 'Quand une entreprise envoie un cadre supérieur, un salarié clé ou une famille expatriée en Turquie, le sujet ne se limite pas à trouver un logement. Il faut sécuriser l’entrée, le titre de séjour, l’adresse, l’assurance, l’école, la banque, les démarches locales, la logistique d’arrivée et l’intégration quotidienne. Bosphoras agit comme bureau privé local avec un interlocuteur unique.',
    cta: 'Organiser l’installation d’un collaborateur', advisor: 'Parler à un advisor',
    why: 'Pourquoi les grandes entreprises externalisent l’installation de leurs expatriés',
    promise: 'Un cadre mal installé est un cadre moins disponible pour sa mission. Une relocation corporate bien organisée protège le collaborateur, sa famille et la performance de l’entreprise.',
    services: 'Un accompagnement complet avant, pendant et après l’arrivée',
    privateOffice: 'Un bureau privé, pas une simple agence de relocation',
    privateText: 'Bosphoras coordonne l’installation comme un projet global : immigration, logement, famille, banque, assurance, chauffeur, bureaux, immobilier, fiscalité et support local. Le service s’adresse aux directions, RH, family offices, groupes internationaux, investisseurs et dirigeants qui veulent un seul point de contact en Turquie.',
    process: 'Process corporate en 6 étapes', related: 'Pages utiles liées à la relocation corporate', faqTitle: 'Questions fréquentes',
    problems: ['Un cadre mal installé perd du temps avant même de commencer sa mission.', 'Le service RH ne peut pas gérer seul logement, titre de séjour, banque, assurance, école et démarches locales dans un autre pays.', 'Un mauvais quartier, un bail mal négocié ou un dossier de résidence incomplet peut fragiliser toute la mission.', 'Le conjoint et les enfants ont souvent besoin d’autant d’accompagnement que le salarié muté.'],
    before: ['brief entreprise et profil collaborateur', 'analyse visa, résidence, permis de travail ou ikamet', 'liste des documents à préparer', 'calendrier d’arrivée', 'budget logement', 'quartiers recommandés', 'besoins famille et école'],
    arrival: ['accueil aéroport VIP', 'hébergement temporaire', 'visites logements', 'aide à la signature du bail', 'installation internet et utilities', 'numéro fiscal', 'adresse locale', 'rendez-vous administratifs'],
    immigration: ['titre de séjour / ikamet', 'coordination avocat si nécessaire', 'assurance santé', 'renouvellement', 'changement d’adresse', 'suivi du dossier', 'permis de travail via partenaires compétents'],
    family: ['écoles internationales ou locales', 'quartier adapté à la famille', 'médecin et assurance', 'chauffeur et mobilité', 'activités enfants', 'support conjoint', 'installation quotidienne'],
    cardTitles: ['Avant l’arrivée', 'Arrivée & installation', 'Immigration & résidence', 'Famille & settling-in'],
    steps: ['Brief RH ou direction', 'Profil collaborateur et famille', 'Plan d’installation', 'Préparation immigration et logement', 'Arrivée et accompagnement terrain', 'Suivi post-installation'],
    stepText: 'Chaque étape réduit les erreurs, clarifie les responsabilités et donne au collaborateur un parcours d’arrivée fluide, discret et compréhensible.',
    tags: ['Interlocuteur unique', 'Istanbul, Bodrum, Antalya', 'Coordination juridique si nécessaire', 'Logement premium et house hunting', 'Support famille et école', 'Discrétion et niveau exécutif'],
    faq: [
      ['À qui font appel les grandes entreprises pour installer leurs expatriés en Turquie ?', 'Elles font appel à un bureau de relocation local capable de coordonner immigration, logement, installation familiale, assurance, banque, école, chauffeur et support administratif. Bosphoras se positionne comme interlocuteur privé unique pour ce type de mission.'],
      ['Bosphoras peut-il s’occuper du logement d’un cadre supérieur ?', 'Oui. Bosphoras peut organiser house hunting, logement temporaire, sélection de quartiers, visites, négociation du bail, vérification pratique du logement et installation des services essentiels.'],
      ['Bosphoras gère-t-il le titre de séjour des salariés expatriés ?', 'Bosphoras coordonne la préparation du dossier de résidence / ikamet avec les partenaires juridiques et administratifs adaptés. Pour permis de travail ou sujets juridiques sensibles, le dossier est traité avec des partenaires compétents.'],
      ['Le service couvre-t-il la famille du salarié ?', 'Oui. La relocation corporate doit souvent inclure conjoint, enfants, école, assurance santé, logement familial, quartiers, mobilité et adaptation quotidienne.'],
      ['Dans quelles villes Bosphoras peut-il accompagner ?', 'Priorité à Istanbul, Bodrum et Antalya, avec un niveau de service adapté aux cadres, dirigeants, familles d’expatriés, investisseurs et entreprises internationales.'],
    ],
  },
  en: {
    title: 'Corporate relocation in Turkey for executives, expatriate employees and international families', eyebrow: 'Bosphoras Services · Corporate Relocation Desk',
    description: 'Premium corporate relocation service in Turkey for companies, executives, expatriate employees and families: housing, residence permit, immigration, settling-in, schools, insurance, banking and local support.',
    hero: 'When a company sends a senior executive, key employee or expatriate family to Turkey, the subject is not only housing. Entry, residence permit, address, insurance, school, banking, local formalities, arrival logistics and daily integration must be coordinated. Bosphoras acts as a private local desk with one point of contact.',
    cta: 'Organise an employee relocation', advisor: 'Speak with an advisor', why: 'Why large companies outsource expatriate relocation',
    promise: 'A poorly settled executive is less available for the mission. A well-managed corporate relocation protects the employee, the family and the company’s performance.',
    services: 'Complete support before, during and after arrival', privateOffice: 'A private desk, not a simple relocation agency',
    privateText: 'Bosphoras coordinates relocation as a complete project: immigration, housing, family, banking, insurance, chauffeur, offices, property, tax and local support. The service is designed for management teams, HR departments, family offices, international groups, investors and executives who want one point of contact in Turkey.',
    process: 'Corporate process in 6 steps', related: 'Useful pages linked to corporate relocation', faqTitle: 'FAQ',
    problems: ['A poorly settled executive loses time before the mission even starts.', 'HR cannot manage housing, residence permit, banking, insurance, schooling and local formalities alone in another country.', 'A wrong district, weak lease or incomplete residence file can put the whole assignment at risk.', 'Spouses and children often need as much support as the relocated employee.'],
    before: ['company brief and employee profile', 'visa, residence, work permit or ikamet analysis', 'document checklist', 'arrival calendar', 'housing budget', 'recommended districts', 'family and school needs'],
    arrival: ['VIP airport welcome', 'temporary accommodation', 'housing visits', 'lease signature assistance', 'internet and utilities setup', 'tax number', 'local address', 'administrative appointments'],
    immigration: ['residence permit / ikamet', 'lawyer coordination when needed', 'health insurance', 'renewal', 'address change', 'file monitoring', 'work permit through qualified partners'],
    family: ['international or local schools', 'family-friendly district', 'doctor and insurance', 'chauffeur and mobility', 'children activities', 'spouse support', 'daily settling-in'],
    cardTitles: ['Before arrival', 'Arrival & settling-in', 'Immigration & residence', 'Family & settling-in'],
    steps: ['HR or management brief', 'Employee and family profile', 'Relocation plan', 'Immigration and housing preparation', 'Arrival and field support', 'Post-arrival follow-up'],
    stepText: 'Each step reduces mistakes, clarifies responsibilities and gives the employee a smooth, discreet and understandable arrival path.',
    tags: ['Single point of contact', 'Istanbul, Bodrum, Antalya', 'Legal coordination when needed', 'Premium housing and house hunting', 'Family and school support', 'Discreet executive level'],
    faq: [['Who do large companies use to relocate expatriates in Turkey?', 'They use a local relocation desk able to coordinate immigration, housing, family settling-in, insurance, banking, schooling, chauffeur and administrative support. Bosphoras acts as one private point of contact.'], ['Can Bosphoras handle housing for a senior executive?', 'Yes. Bosphoras can organise house hunting, temporary accommodation, district selection, visits, lease negotiation, practical housing checks and essential setup.'], ['Can Bosphoras manage residence permits for expatriate employees?', 'Bosphoras coordinates the preparation of residence / ikamet files with suitable legal and administrative partners. Work permits and sensitive legal matters are handled with qualified partners.'], ['Does the service cover the employee’s family?', 'Yes. Corporate relocation often includes spouse, children, school, health insurance, family housing, districts, mobility and daily adaptation.'], ['Which cities are covered?', 'Priority cities are Istanbul, Bodrum and Antalya, with a service level adapted to executives, expatriate families, investors and international companies.']],
  },
  ru: {
    title: 'Корпоративный релокейшн в Турцию для руководителей, экспатов и семей', eyebrow: 'Bosphoras Services · Corporate Relocation Desk',
    description: 'Премиальный корпоративный релокейшн в Турции для компаний, руководителей, сотрудников-экспатов и семей: жилье, ВНЖ, immigration, установка, школы, страховка, банк и локальная поддержка.',
    hero: 'Когда компания отправляет руководителя, ключевого сотрудника или семью экспата в Турцию, вопрос не ограничивается жильем. Нужно организовать въезд, ВНЖ, адрес, страховку, школу, банк, местные процедуры, логистику прибытия и ежедневную адаптацию. Bosphoras работает как частный локальный desk с одним контактным лицом.',
    cta: 'Организовать релокацию сотрудника', advisor: 'Поговорить с advisor', why: 'Почему крупные компании отдают релокацию экспатов на аутсорсинг',
    promise: 'Плохо устроенный руководитель меньше сосредоточен на миссии. Правильная корпоративная релокация защищает сотрудника, семью и результат компании.',
    services: 'Полное сопровождение до, во время и после приезда', privateOffice: 'Частный desk, а не простое relocation agency',
    privateText: 'Bosphoras координирует переезд как единый проект: immigration, жилье, семья, банк, страховка, водитель, офисы, недвижимость, налоги и локальная поддержка. Услуга подходит для HR, руководства, family offices, международных групп, инвесторов и executives, которым нужен один контакт в Турции.',
    process: 'Корпоративный процесс в 6 этапов', related: 'Полезные страницы по корпоративной релокации', faqTitle: 'Частые вопросы',
    problems: ['Плохо устроенный руководитель теряет время еще до начала миссии.', 'HR не может один управлять жильем, ВНЖ, банком, страховкой, школой и местными процедурами в другой стране.', 'Неправильный район, слабый договор аренды или неполный dossier по ВНЖ могут поставить миссию под риск.', 'Супруг/супруга и дети часто нуждаются в такой же поддержке, как и сотрудник.'],
    before: ['бриф компании и профиль сотрудника', 'анализ visa, residence, work permit или ikamet', 'список документов', 'календарь приезда', 'бюджет жилья', 'рекомендованные районы', 'потребности семьи и школы'],
    arrival: ['VIP встреча в аэропорту', 'временное жилье', 'просмотры жилья', 'помощь с арендой', 'интернет и utilities', 'налоговый номер', 'локальный адрес', 'административные встречи'],
    immigration: ['ВНЖ / ikamet', 'координация юриста при необходимости', 'медицинская страховка', 'продление', 'смена адреса', 'сопровождение dossier', 'work permit через компетентных партнеров'],
    family: ['международные или локальные школы', 'район для семьи', 'врач и страховка', 'водитель и mobility', 'активности для детей', 'поддержка супруга', 'ежедневная адаптация'],
    cardTitles: ['До приезда', 'Прибытие и установка', 'Immigration и residence', 'Семья и settling-in'],
    steps: ['Бриф HR или руководства', 'Профиль сотрудника и семьи', 'План релокации', 'Подготовка immigration и жилья', 'Прибытие и сопровождение на месте', 'Поддержка после приезда'],
    stepText: 'Каждый этап снижает ошибки, уточняет ответственность и дает сотруднику понятный, дискретный и плавный путь приезда.',
    tags: ['Один контакт', 'Istanbul, Bodrum, Antalya', 'Юридическая координация', 'Премиальное жилье и house hunting', 'Поддержка семьи и школы', 'Дискретный executive level'],
    faq: [['К кому обращаются крупные компании для релокации экспатов в Турции?', 'Они обращаются к локальному relocation desk, который координирует immigration, жилье, семью, страховку, банк, школу, водителя и административную поддержку. Bosphoras становится единым private contact.'], ['Может ли Bosphoras найти жилье для senior executive?', 'Да. Bosphoras организует house hunting, временное жилье, выбор районов, просмотры, переговоры по аренде и установку базовых сервисов.'], ['Bosphoras сопровождает ВНЖ сотрудников?', 'Bosphoras координирует подготовку residence / ikamet dossier с подходящими юридическими и административными партнерами. Work permit и чувствительные юридические вопросы ведут компетентные партнеры.'], ['Услуга включает семью сотрудника?', 'Да. Corporate relocation часто включает супруга, детей, школу, страховку, семейное жилье, районы, mobility и ежедневную адаптацию.'], ['Какие города покрываются?', 'Приоритет — Istanbul, Bodrum и Antalya, с уровнем сервиса для руководителей, семей экспатов, инвесторов и международных компаний.']],
  },
  ar: {
    title: 'الانتقال المؤسسي إلى تركيا للمديرين التنفيذيين والموظفين المغتربين والعائلات الدولية', eyebrow: 'Bosphoras Services · Corporate Relocation Desk',
    description: 'خدمة انتقال مؤسسي فاخرة في تركيا للشركات والمديرين والموظفين المغتربين والعائلات: السكن، الإقامة، الهجرة، الاستقرار، المدارس، التأمين، البنك والدعم المحلي.',
    hero: 'عندما ترسل شركة مديراً تنفيذياً أو موظفاً رئيسياً أو عائلة مغتربة إلى تركيا، لا يقتصر الموضوع على إيجاد سكن. يجب تنسيق الدخول، الإقامة، العنوان، التأمين، المدرسة، البنك، الإجراءات المحلية، لوجستيات الوصول والتأقلم اليومي. يعمل Bosphoras كمكتب محلي خاص بنقطة اتصال واحدة.',
    cta: 'تنظيم انتقال موظف', advisor: 'التحدث مع advisor', why: 'لماذا تستعين الشركات الكبرى بخدمة relocation للموظفين المغتربين',
    promise: 'المدير غير المستقر جيداً يكون أقل تركيزاً على مهمته. relocation مؤسسي منظم يحمي الموظف والعائلة وأداء الشركة.',
    services: 'مرافقة كاملة قبل الوصول وأثناءه وبعده', privateOffice: 'مكتب خاص وليس وكالة relocation عادية',
    privateText: 'ينسق Bosphoras الانتقال كمشروع كامل: الهجرة، السكن، العائلة، البنك، التأمين، السائق، المكاتب، العقار، الضرائب والدعم المحلي. الخدمة موجهة للإدارات وHR وfamily offices والمجموعات الدولية والمستثمرين والمديرين الذين يريدون نقطة اتصال واحدة في تركيا.',
    process: 'عملية مؤسسية في 6 مراحل', related: 'صفحات مفيدة مرتبطة بالانتقال المؤسسي', faqTitle: 'الأسئلة الشائعة',
    problems: ['المدير غير المستقر جيداً يخسر وقتاً قبل بداية مهمته.', 'قسم HR لا يستطيع وحده إدارة السكن والإقامة والبنك والتأمين والمدرسة والإجراءات المحلية في بلد آخر.', 'حي غير مناسب أو عقد إيجار ضعيف أو ملف إقامة ناقص قد يضع المهمة كلها تحت الخطر.', 'الزوج/الزوجة والأطفال يحتاجون غالباً إلى نفس مستوى الدعم مثل الموظف المنتقل.'],
    before: ['brief الشركة وملف الموظف', 'تحليل visa وresidence وwork permit أو ikamet', 'قائمة الوثائق', 'جدول الوصول', 'ميزانية السكن', 'الأحياء الموصى بها', 'احتياجات العائلة والمدرسة'],
    arrival: ['استقبال VIP في المطار', 'سكن مؤقت', 'زيارات السكن', 'مساعدة في عقد الإيجار', 'الإنترنت والخدمات', 'الرقم الضريبي', 'عنوان محلي', 'مواعيد إدارية'],
    immigration: ['تصريح الإقامة / ikamet', 'تنسيق المحامي عند الحاجة', 'التأمين الصحي', 'التجديد', 'تغيير العنوان', 'متابعة الملف', 'work permit عبر شركاء مختصين'],
    family: ['مدارس دولية أو محلية', 'حي مناسب للعائلة', 'طبيب وتأمين', 'سائق وتنقل', 'أنشطة للأطفال', 'دعم الزوج/الزوجة', 'الاستقرار اليومي'],
    cardTitles: ['قبل الوصول', 'الوصول والاستقرار', 'الهجرة والإقامة', 'العائلة والاستقرار'],
    steps: ['Brief HR أو الإدارة', 'ملف الموظف والعائلة', 'خطة الانتقال', 'تحضير الهجرة والسكن', 'الوصول والدعم الميداني', 'متابعة بعد الوصول'],
    stepText: 'كل مرحلة تقلل الأخطاء وتوضح المسؤوليات وتمنح الموظف مسار وصول سلساً وسرياً ومفهوماً.',
    tags: ['نقطة اتصال واحدة', 'Istanbul, Bodrum, Antalya', 'تنسيق قانوني عند الحاجة', 'سكن فاخر وhouse hunting', 'دعم العائلة والمدرسة', 'مستوى تنفيذي سري'],
    faq: [['بمن تستعين الشركات الكبرى لترتيب انتقال المغتربين إلى تركيا؟', 'تستعين بمكتب relocation محلي قادر على تنسيق الهجرة والسكن واستقرار العائلة والتأمين والبنك والمدرسة والسائق والدعم الإداري. يعمل Bosphoras كنقطة اتصال خاصة واحدة.'], ['هل يستطيع Bosphoras إيجاد سكن لمدير تنفيذي؟', 'نعم. يمكن لـ Bosphoras تنظيم house hunting، السكن المؤقت، اختيار الأحياء، الزيارات، التفاوض على الإيجار والتحقق العملي من السكن.'], ['هل يرافق Bosphoras ملفات الإقامة للموظفين المغتربين؟', 'ينسق Bosphoras تحضير ملفات residence / ikamet مع الشركاء القانونيين والإداريين المناسبين. تصاريح العمل والمواضيع القانونية الحساسة تتم مع شركاء مختصين.'], ['هل تشمل الخدمة عائلة الموظف؟', 'نعم. relocation المؤسسي يشمل غالباً الزوج/الزوجة، الأطفال، المدرسة، التأمين الصحي، السكن العائلي، الأحياء، التنقل والتأقلم اليومي.'], ['ما المدن التي تغطيها الخدمة؟', 'الأولوية لـ Istanbul وBodrum وAntalya، بمستوى خدمة مناسب للمديرين والعائلات المغتربة والمستثمرين والشركات الدولية.']],
  },
};

const relatedLinks = [
  ['/visa-travail-turquie', 'Visa travail Turquie'],
  ['/titre-sejour-turquie', 'Titre de séjour Turquie'],
  ['/ikamet-turquie', 'Ikamet Turquie'],
  ['/residence-courte-duree-turquie', 'Résidence courte durée'],
  ['/visa-business-turquie', 'Visa business Turquie'],
  ['/residence-turquie-investisseur', 'Résidence investisseur'],
  ['/residence-turquie-achat-immobilier', 'Résidence achat immobilier'],
  ['/transferts-istanbul', 'Transferts & chauffeur'],
];

function ServiceCard({ title, items, type }: { title: string; items: string[]; type: 'plane' | 'home' | 'landmark' | 'users' }) {
  const Icon = type === 'plane' ? Plane : type === 'home' ? Home : type === 'landmark' ? Landmark : Users;
  return <article className="border border-[#d8c7a1] bg-white p-7"><div className="flex items-center gap-3"><Icon className="h-7 w-7 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{title}</h3></div><div className="mt-6 grid gap-3">{items.map((item) => <p key={item} className="flex gap-3 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</p>)}</div></article>;
}

export function CorporateRelocationServicePage({ locale }: { locale: Locale }) {
  const c = content[locale];
  const canonical = `${siteUrl}${paths[locale]}`;
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  return <>
    <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Service', name: 'Corporate Relocation Desk Turkey', description: c.description, provider: { '@type': 'Organization', name: 'Bosphoras', url: siteUrl }, areaServed: ['Istanbul', 'Bodrum', 'Antalya', 'Turkey'], serviceType: ['Corporate relocation', 'Expatriate relocation', 'Residence permit coordination', 'House hunting'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
    <Header locale={locale} currentPath={paths[locale]} />
    <main dir={dir} className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1300px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">{c.eyebrow}</p><h1 className="mt-6 max-w-6xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">{c.title}</h1><p className="mt-8 max-w-4xl text-lg leading-9 text-white/80">{c.hero}</p><div className="mt-10 flex flex-wrap gap-4"><Link href={locale === 'fr' ? '/diagnostic-prive' : locale === 'en' ? '/en/private-assessment' : locale === 'ru' ? '/ru/chastnaya-konsultatsiya' : '/ar/تقييم-خاص'} className="inline-flex items-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">{c.cta}<ArrowRight size={16} /></Link><Link href="/contact" className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white">{c.advisor}</Link></div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="max-w-4xl font-serif text-4xl tracking-[-0.03em] md:text-5xl">{c.why}</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{c.problems.map((item) => <div key={item} className="border border-[#d8c7a1] bg-white p-6 text-base leading-8 text-[#3e4857]"><CheckCircle2 className="mb-4 h-5 w-5 text-[#8a6728]" />{item}</div>)}</div><p className="mt-10 border-l-4 border-[#8a6728] bg-white p-7 text-xl font-semibold leading-9 text-[#121826]">{c.promise}</p></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="font-serif text-4xl tracking-[-0.03em] md:text-5xl">{c.services}</h2><div className="mt-10 grid gap-6 md:grid-cols-2"><ServiceCard title={c.cardTitles[0]} items={c.before} type="plane" /><ServiceCard title={c.cardTitles[1]} items={c.arrival} type="home" /><ServiceCard title={c.cardTitles[2]} items={c.immigration} type="landmark" /><ServiceCard title={c.cardTitles[3]} items={c.family} type="users" /></div></div></section>
      <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><BriefcaseBusiness className="h-9 w-9 text-[#d2a863]" /><h2 className="mt-6 max-w-4xl font-serif text-4xl tracking-[-0.03em] md:text-5xl">{c.privateOffice}</h2><p className="mt-8 max-w-4xl text-lg leading-9 text-white/75">{c.privateText}</p><div className="mt-10 grid gap-4 md:grid-cols-3">{c.tags.map((item) => <div key={item} className="border border-white/15 bg-white/5 p-5 text-sm font-semibold uppercase tracking-[0.12em] text-white/80">{item}</div>)}</div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="font-serif text-4xl tracking-[-0.03em] md:text-5xl">{c.process}</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{c.steps.map((step, index) => <article key={step} className="border border-[#d8c7a1] bg-white p-7"><span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a6728]">0{index + 1}</span><h3 className="mt-4 font-serif text-2xl">{step}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{c.stepText}</p></article>)}</div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="font-serif text-4xl tracking-[-0.03em] md:text-5xl">{c.related}</h2><div className="mt-10 grid gap-3 md:grid-cols-4">{relatedLinks.map(([href, label]) => <Link key={href} href={href} className="border border-[#d8c7a1] bg-white p-5 text-sm font-semibold leading-7 text-[#121826] hover:bg-[#f8f1e7]">{label}</Link>)}</div></div></section>
      <section className="px-5 pb-20 md:px-8 md:pb-28"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em] md:text-5xl">{c.faqTitle}</h2><div className="mt-10 grid gap-px bg-[#d8c7a1]">{c.faq.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
    </main>
    <Footer locale={locale} />
  </>;
}

export { paths as corporateRelocationPaths, content as corporateRelocationContent };
