import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Bell,
  Building2,
  Globe,
  Home,
  KeyRound,
  Lock,
  MapPin,
  Scale,
  Shield,
  ShieldCheck,
} from 'lucide-react';
import { locales, localeDir } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { buildMetadata, faqSchema, organizationSchema, websiteSchema } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { getLocalePath } from '@/lib/routes';
import { getSlugForPage } from '@/data/pages/types';

const supportedLocales: Locale[] = ['en', 'ru', 'ar'];

type HomeCopy = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  membershipCta: string;
  privateDesk: string;
  deskTitle: string;
  deskText: string;
  trustQuote: string;
  differenceEyebrow: string;
  differenceTitle: string;
  differenceParagraphs: string[];
  accessEyebrow: string;
  accessTitle: string;
  accessText: string;
  admission: string;
  retainer: string;
  admissionPrice: string;
  retainerPrice: string;
  accessNote: string;
  requestMembership: string;
  classicRequest: string;
  deskAlternative: string;
  deskAlternativeText: string;
  servicesEyebrow: string;
  servicesTitle: string;
  destinationsEyebrow: string;
  destinationsTitle: string;
  trustEyebrow: string;
  trustTitle: string;
  faqEyebrow: string;
  faqTitle: string;
  methodEyebrow: string;
  methodTitle: string;
  finalTitle: string;
  finalText: string;
  confidentiality: string;
};

const copy: Record<Locale, HomeCopy> = {
  fr: {
    metaTitle: 'Bosphoras | Bureau privé en Turquie, Istanbul, Bodrum, Antalya',
    metaDescription:
      'Bosphoras est votre bureau privé en Turquie : avocat, fiscalité, société, comptabilité, santé, assurance, immobilier, bureaux, transport VIP, hôtels, événements et accès privé.',
    h1: 'Votre bureau privé en Turquie',
    subtitle:
      'Un seul interlocuteur pour organiser votre installation, vos affaires et votre vie privée : avocat, fiscalité, société, comptabilité, santé, assurance, immobilier, bureaux, transport VIP, hôtels, événements et accès privé à Istanbul, Bodrum et Antalya.',
    primaryCta: 'Recevoir mon diagnostic privé',
    secondaryCta: 'Découvrir nos services',
    membershipCta: 'Bosphoras Private Access · Demander une adhésion privée',
    privateDesk: 'Bosphoras Private Desk',
    deskTitle: 'One trusted desk. Everything Turkey.',
    deskText:
      'Pas de bruit. Pas d’improvisation. Un bureau privé pour filtrer, coordonner et sécuriser les bonnes personnes au bon moment.',
    trustQuote:
      'En Turquie, la vraie difficulté n’est pas de trouver un service. C’est de savoir à qui faire confiance.',
    differenceEyebrow: 'Notre différence',
    differenceTitle: 'Pas une agence. Un bureau privé.',
    differenceParagraphs: [
      'Un investisseur sérieux ne commence pas par acheter un appartement. Il commence par comprendre où vivre, comment structurer sa résidence, quelle fiscalité vérifier, quel avocat consulter, quelle assurance choisir, quel médecin contacter, quel bureau utiliser et qui peut réellement exécuter sur place.',
      'Bosphoras rend la Turquie lisible, sûre et actionnable : un seul interlocuteur, un réseau sélectionné, une logique de confidentialité et une coordination locale entre Paris, Istanbul, Londres, Almaty, Moscou et Dubai.',
    ],
    accessEyebrow: 'Bosphoras Private Access',
    accessTitle: 'Une seule adhésion. Un seul niveau de service.',
    accessText:
      'Pour certains clients, la Turquie ne se gère pas demande par demande. Elle se gère avec un accès permanent à un bureau privé, capable de filtrer, coordonner et activer les bons interlocuteurs avec discrétion.',
    admission: 'Admission annuelle',
    retainer: 'Retainer mensuel',
    admissionPrice: '10 000 USD',
    retainerPrice: '1 000 USD',
    accessNote:
      'Sur parrainage, recommandation ou validation du profil. Cycle de 12 mois à compter de la validation. Conditions révisables chaque année.',
    requestMembership: 'Demander une adhésion',
    classicRequest: 'Demande classique',
    deskAlternative: 'Bosphoras Private Desk reste disponible pour les demandes classiques.',
    deskAlternativeText:
      'Pour les clients qui souhaitent un accompagnement sans accès membre, le Private Desk démarre à partir de 6 000 USD / an ou sur devis personnalisé selon la mission.',
    servicesEyebrow: 'Nos expertises',
    servicesTitle: 'Une approche globale. Une exécution locale.',
    destinationsEyebrow: 'Nos destinations',
    destinationsTitle: 'Trois villes. Un même niveau d’exigence.',
    trustEyebrow: 'Confiance',
    trustTitle: 'Le vrai luxe, c’est de protéger le client.',
    faqEyebrow: 'Questions fréquentes',
    faqTitle: 'Avant de venir en Turquie.',
    methodEyebrow: 'Méthode',
    methodTitle: 'Une exécution calme, claire, confidentielle.',
    finalTitle: 'Parlons de vos projets en toute confidentialité.',
    finalText: 'Un entretien privé pour comprendre vos besoins et vous proposer des solutions sur mesure.',
    confidentiality: 'Confidentialité absolue garantie',
  },
  en: {
    metaTitle: 'Bosphoras | Private Desk in Turkey, Istanbul, Bodrum, Antalya',
    metaDescription:
      'Bosphoras is your private desk in Turkey: legal, tax, company setup, accounting, healthcare, insurance, property, offices, VIP transport, hotels, events and private access.',
    h1: 'Your private desk in Turkey',
    subtitle:
      'One trusted point of contact to organize your relocation, business and private life: legal, tax, company setup, accounting, healthcare, insurance, property, offices, VIP transport, hotels, events and private access in Istanbul, Bodrum and Antalya.',
    primaryCta: 'Request my private assessment',
    secondaryCta: 'Explore our services',
    membershipCta: 'Bosphoras Private Access · Apply for membership',
    privateDesk: 'Bosphoras Private Desk',
    deskTitle: 'One trusted desk. Everything Turkey.',
    deskText:
      'No noise. No improvisation. A private desk to filter, coordinate and secure the right people at the right time.',
    trustQuote: 'In Turkey, the real challenge is not finding a service. It is knowing who to trust.',
    differenceEyebrow: 'Our difference',
    differenceTitle: 'Not an agency. A private desk.',
    differenceParagraphs: [
      'A serious investor does not start by buying an apartment. They first understand where to live, how to structure residence, which tax points to verify, which lawyer to consult, which insurance to choose, which doctor to contact, which office to use and who can actually execute locally.',
      'Bosphoras makes Turkey readable, safe and actionable: one point of contact, a selected network, a logic of confidentiality and local coordination between Paris, Istanbul, London, Almaty, Moscow and Dubai.',
    ],
    accessEyebrow: 'Bosphoras Private Access',
    accessTitle: 'One membership. One level of service.',
    accessText:
      'For selected clients, Turkey is not managed request by request. It is managed through permanent access to a private desk able to filter, coordinate and activate the right people with discretion.',
    admission: 'Annual admission',
    retainer: 'Monthly retainer',
    admissionPrice: '10,000 USD',
    retainerPrice: '1,000 USD',
    accessNote:
      'By sponsorship, recommendation or profile validation. Twelve-month cycle from approval. Terms may be reviewed annually.',
    requestMembership: 'Apply for membership',
    classicRequest: 'Classic request',
    deskAlternative: 'Bosphoras Private Desk remains available for classic requests.',
    deskAlternativeText:
      'For clients seeking support without member access, Private Desk starts from 6,000 USD per year or on a tailored quotation depending on the mission.',
    servicesEyebrow: 'Our expertise',
    servicesTitle: 'Global thinking. Local execution.',
    destinationsEyebrow: 'Destinations',
    destinationsTitle: 'Three cities. One standard of excellence.',
    trustEyebrow: 'Trust',
    trustTitle: 'True luxury is protecting the client.',
    faqEyebrow: 'FAQ',
    faqTitle: 'Before coming to Turkey.',
    methodEyebrow: 'Method',
    methodTitle: 'Calm, clear, confidential execution.',
    finalTitle: 'Let us discuss your plans confidentially.',
    finalText: 'A private conversation to understand your needs and propose tailored solutions.',
    confidentiality: 'Absolute confidentiality guaranteed',
  },
  ru: {
    metaTitle: 'Bosphoras | Частный офис в Турции, Стамбул, Бодрум, Анталья',
    metaDescription:
      'Bosphoras — ваш частный офис в Турции: юристы, налоги, компания, бухгалтерия, медицина, страхование, недвижимость, офисы, VIP-транспорт, отели, мероприятия и private access.',
    h1: 'Ваш частный офис в Турции',
    subtitle:
      'Один доверенный контакт для организации переезда, бизнеса и частной жизни: юристы, налоги, компания, бухгалтерия, медицина, страхование, недвижимость, офисы, VIP-транспорт, отели, мероприятия и private access в Стамбуле, Бодруме и Анталье.',
    primaryCta: 'Получить частную консультацию',
    secondaryCta: 'Посмотреть услуги',
    membershipCta: 'Bosphoras Private Access · Подать заявку на членство',
    privateDesk: 'Bosphoras Private Desk',
    deskTitle: 'One trusted desk. Everything Turkey.',
    deskText:
      'Без шума. Без импровизации. Частный офис, который фильтрует, координирует и подключает нужных людей в нужный момент.',
    trustQuote: 'В Турции настоящая сложность — не найти услугу, а понять, кому можно доверять.',
    differenceEyebrow: 'Наше отличие',
    differenceTitle: 'Не агентство. Частный офис.',
    differenceParagraphs: [
      'Серьёзный инвестор не начинает с покупки квартиры. Сначала он понимает, где жить, как структурировать резиденцию, какие налоговые вопросы проверить, к какому юристу обратиться, какую страховку выбрать, какого врача найти, какой офис использовать и кто реально может выполнить задачу на месте.',
      'Bosphoras делает Турцию понятной, безопасной и практичной: один контакт, отобранная сеть, конфиденциальность и локальная координация между Парижем, Стамбулом, Лондоном, Алматы, Москвой и Дубаем.',
    ],
    accessEyebrow: 'Bosphoras Private Access',
    accessTitle: 'Одно членство. Один уровень сервиса.',
    accessText:
      'Для некоторых клиентов Турция не управляется отдельными запросами. Нужен постоянный доступ к частному офису, который умеет фильтровать, координировать и подключать нужных людей конфиденциально.',
    admission: 'Ежегодный вступительный взнос',
    retainer: 'Ежемесячный retainer',
    admissionPrice: '10 000 USD',
    retainerPrice: '1 000 USD',
    accessNote:
      'По рекомендации, поручительству или после проверки профиля. Цикл 12 месяцев с момента утверждения. Условия могут пересматриваться ежегодно.',
    requestMembership: 'Подать заявку',
    classicRequest: 'Обычный запрос',
    deskAlternative: 'Bosphoras Private Desk доступен для классических запросов.',
    deskAlternativeText:
      'Для клиентов без статуса члена Private Desk начинается от 6 000 USD в год или рассчитывается индивидуально по миссии.',
    servicesEyebrow: 'Экспертиза',
    servicesTitle: 'Глобальный подход. Локальное исполнение.',
    destinationsEyebrow: 'Направления',
    destinationsTitle: 'Три города. Один стандарт качества.',
    trustEyebrow: 'Доверие',
    trustTitle: 'Настоящая роскошь — защищать клиента.',
    faqEyebrow: 'Вопросы',
    faqTitle: 'Перед приездом в Турцию.',
    methodEyebrow: 'Метод',
    methodTitle: 'Спокойное, понятное и конфиденциальное исполнение.',
    finalTitle: 'Обсудим ваш проект конфиденциально.',
    finalText: 'Частная консультация, чтобы понять ваши цели и предложить индивидуальные решения.',
    confidentiality: 'Абсолютная конфиденциальность',
  },
  ar: {
    metaTitle: 'Bosphoras | مكتب خاص في تركيا، إسطنبول، بودروم، أنطاليا',
    metaDescription:
      'بوسفوراس هو مكتبكم الخاص في تركيا: قانون، ضرائب، تأسيس شركة، محاسبة، صحة، تأمين، عقارات، مكاتب، نقل VIP، فنادق، فعاليات ووصول خاص.',
    h1: 'مكتبكم الخاص في تركيا',
    subtitle:
      'نقطة اتصال واحدة موثوقة لتنظيم الإقامة والأعمال والحياة الخاصة: القانون، الضرائب، تأسيس الشركات، المحاسبة، الصحة، التأمين، العقارات، المكاتب، النقل الفاخر، الفنادق، الفعاليات والوصول الخاص في إسطنبول وبودروم وأنطاليا.',
    primaryCta: 'طلب تقييم خاص',
    secondaryCta: 'استكشاف خدماتنا',
    membershipCta: 'Bosphoras Private Access · طلب عضوية خاصة',
    privateDesk: 'Bosphoras Private Desk',
    deskTitle: 'One trusted desk. Everything Turkey.',
    deskText:
      'لا ضجيج. لا ارتجال. مكتب خاص يرشّح وينسّق ويؤمّن الأشخاص المناسبين في الوقت المناسب.',
    trustQuote: 'في تركيا، التحدي الحقيقي ليس العثور على خدمة، بل معرفة من يمكن الوثوق به.',
    differenceEyebrow: 'ما يميزنا',
    differenceTitle: 'لسنا وكالة. نحن مكتب خاص.',
    differenceParagraphs: [
      'المستثمر الجاد لا يبدأ بشراء عقار. يبدأ بفهم مكان العيش، كيفية تنظيم الإقامة، النقاط الضريبية، المحامي المناسب، التأمين، الطبيب، المكتب، ومن يستطيع التنفيذ فعلاً على الأرض.',
      'يجعل Bosphoras تركيا واضحة وآمنة وقابلة للتنفيذ: نقطة اتصال واحدة، شبكة مختارة، منطق السرية والتنسيق المحلي بين باريس وإسطنبول ولندن وألماتي وموسكو ودبي.',
    ],
    accessEyebrow: 'Bosphoras Private Access',
    accessTitle: 'عضوية واحدة. مستوى خدمة واحد.',
    accessText:
      'لبعض العملاء، لا تُدار تركيا طلباً بعد طلب. بل تُدار من خلال وصول دائم إلى مكتب خاص قادر على الترشيح والتنسيق وتفعيل الأشخاص المناسبين بسرية.',
    admission: 'رسوم قبول سنوية',
    retainer: 'رسوم شهرية ثابتة',
    admissionPrice: '10,000 USD',
    retainerPrice: '1,000 USD',
    accessNote:
      'عن طريق التزكية أو التوصية أو اعتماد الملف. دورة 12 شهراً من تاريخ القبول. الشروط قابلة للمراجعة سنوياً.',
    requestMembership: 'طلب عضوية',
    classicRequest: 'طلب عادي',
    deskAlternative: 'يبقى Bosphoras Private Desk متاحاً للطلبات الكلاسيكية.',
    deskAlternativeText:
      'للعملاء الذين يرغبون في مرافقة دون عضوية، يبدأ Private Desk من 6,000 USD سنوياً أو وفق عرض مخصص حسب المهمة.',
    servicesEyebrow: 'خبراتنا',
    servicesTitle: 'رؤية شاملة. تنفيذ محلي.',
    destinationsEyebrow: 'الوجهات',
    destinationsTitle: 'ثلاث مدن. نفس مستوى التميز.',
    trustEyebrow: 'الثقة',
    trustTitle: 'الترف الحقيقي هو حماية العميل.',
    faqEyebrow: 'أسئلة شائعة',
    faqTitle: 'قبل القدوم إلى تركيا.',
    methodEyebrow: 'المنهجية',
    methodTitle: 'تنفيذ هادئ، واضح وسري.',
    finalTitle: 'لنتحدث عن مشاريعكم بسرية.',
    finalText: 'محادثة خاصة لفهم احتياجاتكم واقتراح حلول مخصصة.',
    confidentiality: 'سرية كاملة مضمونة',
  },
};

const expertises: Record<Locale, Array<{ icon: typeof Scale; title: string; text: string }>> = {
  fr: [],
  en: [
    { icon: Scale, title: 'Legal & Tax', text: 'Tailored legal and tax coordination for individuals and companies. Compliance, structure and protection of your interests.' },
    { icon: Building2, title: 'Business Setup', text: 'Company formation, licenses and operational structuring for your projects in Turkey.' },
    { icon: Shield, title: 'Health & Insurance', text: 'International healthcare insurance, private medical access and tailored protection for your family.' },
    { icon: Home, title: 'Property & Relocation', text: 'Property, residence, relocation and turnkey installation for you and your family.' },
    { icon: Bell, title: 'VIP Hospitality', text: 'Private transfers, exceptional hotels, 24/7 concierge and tailored events.' },
    { icon: KeyRound, title: 'Private Access', text: 'Selected membership, priority desk access, qualified introductions, private events and continuous coordination in Turkey.' },
  ],
  ru: [
    { icon: Scale, title: 'Legal & Tax', text: 'Координация юридических и налоговых вопросов для частных лиц и компаний: структура, комплаенс и защита интересов.' },
    { icon: Building2, title: 'Business Setup', text: 'Создание компании, лицензии, операционная структура и сопровождение проектов в Турции.' },
    { icon: Shield, title: 'Health & Insurance', text: 'Международное медицинское страхование, частная медицина и индивидуальная защита семьи.' },
    { icon: Home, title: 'Property & Relocation', text: 'Недвижимость, резиденция, relocation и организация переезда под ключ.' },
    { icon: Bell, title: 'VIP Hospitality', text: 'Частные трансферы, отели высокого уровня, консьерж 24/7 и мероприятия.' },
    { icon: KeyRound, title: 'Private Access', text: 'Членство по отбору, приоритетный доступ к desk, качественные интродукции и постоянная координация в Турции.' },
  ],
  ar: [
    { icon: Scale, title: 'Legal & Tax', text: 'تنسيق قانوني وضريبي مخصص للأفراد والشركات مع مراعاة الامتثال وحماية المصالح.' },
    { icon: Building2, title: 'Business Setup', text: 'تأسيس الشركات، التراخيص، الهيكلة التشغيلية ومرافقة المشاريع في تركيا.' },
    { icon: Shield, title: 'Health & Insurance', text: 'تأمين صحي دولي، وصول إلى رعاية خاصة وحلول حماية مخصصة للعائلة.' },
    { icon: Home, title: 'Property & Relocation', text: 'عقارات، إقامة، انتقال وتنظيم كامل للاستقرار لكم ولعائلتكم.' },
    { icon: Bell, title: 'VIP Hospitality', text: 'تنقلات خاصة، فنادق فاخرة، كونسيرج 24/7 وفعاليات مخصصة.' },
    { icon: KeyRound, title: 'Private Access', text: 'عضوية مختارة، أولوية في المكتب، تعارفات مؤهلة، فعاليات خاصة وتنسيق مستمر في تركيا.' },
  ],
};

const locations: Record<Locale, string[]> = {
  fr: ['Paris', 'Istanbul', 'Londres', 'Almaty', 'Moscou', 'Dubai'],
  en: ['Paris', 'Istanbul', 'London', 'Almaty', 'Moscow', 'Dubai'],
  ru: ['Париж', 'Стамбул', 'Лондон', 'Алматы', 'Москва', 'Дубай'],
  ar: ['باريس', 'إسطنبول', 'لندن', 'ألماتي', 'موسكو', 'دبي'],
};

const cities: Record<Locale, Array<{ title: string; subtitle: string; text: string }>> = {
  fr: [],
  en: [
    { title: 'Istanbul', subtitle: 'Business · Law · Tax · Private healthcare', text: 'Turkey’s economic and legal heart: banks, premium offices, private hospitals, international districts and business networks.' },
    { title: 'Bodrum', subtitle: 'Villas · Yachts · Discreet lifestyle', text: 'A confidential lifestyle and patrimonial destination for second homes, marinas, private stays and Mediterranean living.' },
    { title: 'Antalya', subtitle: 'Family · Healthcare · Quality of life', text: 'A rational living base for families: climate, sea, private healthcare, international communities and long-term relocation.' },
  ],
  ru: [
    { title: 'Стамбул', subtitle: 'Бизнес · Право · Налоги · Частная медицина', text: 'Экономический и юридический центр Турции: банки, премиальные офисы, частные клиники, международные районы и деловые сети.' },
    { title: 'Бодрум', subtitle: 'Виллы · Яхты · Дискретный lifestyle', text: 'Конфиденциальное направление для вторых резиденций, марин, частных пребываний и средиземноморского образа жизни.' },
    { title: 'Анталья', subtitle: 'Семья · Медицина · Качество жизни', text: 'Рациональная база для семей: климат, море, частная медицина, международные сообщества и долгосрочное проживание.' },
  ],
  ar: [
    { title: 'إسطنبول', subtitle: 'أعمال · قانون · ضرائب · صحة خاصة', text: 'القلب الاقتصادي والقانوني لتركيا: بنوك، مكاتب ممتازة، مستشفيات خاصة، أحياء دولية وشبكات أعمال.' },
    { title: 'بودروم', subtitle: 'فيلات · يخوت · أسلوب حياة هادئ', text: 'وجهة سرية وراقية للإقامات الثانية، المارينات، الإقامات الخاصة وفن العيش المتوسطي.' },
    { title: 'أنطاليا', subtitle: 'عائلة · صحة · جودة حياة', text: 'قاعدة معيشية عملية للعائلات: مناخ، بحر، صحة خاصة، مجتمعات دولية واستقرار طويل الأمد.' },
  ],
};

const method: Record<Locale, string[]> = {
  fr: [],
  en: [
    'Confidential assessment of profile, residence country, family, budget and priorities.',
    'City selection, residence/tax strategy, choice between rental, purchase, company setup or private presence.',
    'Coordination of professionals: lawyer, tax advisor, accountant, insurer, doctor, clinic, office, bank, hotel or transport.',
    'Local execution: appointments, visits, transfers, documents, translations, reservations, negotiation and follow-up.',
    'Continuous support: private membership, client preferences, priority access, events, qualified relationships and recurring services.',
  ],
  ru: [
    'Конфиденциальная оценка профиля, страны резиденции, семьи, бюджета и приоритетов.',
    'Выбор города, стратегия резиденции/налогов, аренда, покупка, компания или частное присутствие.',
    'Координация специалистов: юрист, налоговый консультант, бухгалтер, страховщик, врач, клиника, офис, банк, отель или транспорт.',
    'Локальное исполнение: встречи, визиты, трансферы, документы, переводы, бронирования, переговоры и сопровождение.',
    'Постоянная поддержка: private membership, предпочтения клиента, приоритетный доступ, мероприятия, качественные связи и регулярные услуги.',
  ],
  ar: [
    'تقييم سري للملف، بلد الإقامة، العائلة، الميزانية والأولويات.',
    'اختيار المدينة، استراتيجية الإقامة والضرائب، المفاضلة بين الإيجار، الشراء، الشركة أو الحضور الخاص.',
    'تنسيق المهنيين: محامٍ، مستشار ضريبي، محاسب، شركة تأمين، طبيب، عيادة، مكتب، بنك، فندق أو نقل.',
    'تنفيذ محلي: مواعيد، زيارات، تنقلات، مستندات، ترجمات، حجوزات، تفاوض ومتابعة.',
    'دعم مستمر: عضوية خاصة، تفضيلات العميل، وصول أولوية، فعاليات، علاقات مؤهلة وخدمات متكررة.',
  ],
};

const faqItems: Record<Locale, Array<{ question: string; answer: string }>> = {
  fr: [],
  en: [
    { question: 'Is Bosphoras a real estate agency in Turkey?', answer: 'No. Bosphoras is an international private desk. Property can be part of the journey, but only after strategy: city, residence, tax, lawyer, health, insurance, bank, company, offices and lifestyle.' },
    { question: 'Does Bosphoras support foreign investors in Istanbul, Bodrum and Antalya?', answer: 'Yes. Bosphoras coordinates relocation, formalities, private services and selected professionals in Istanbul, Bodrum and Antalya for investors, entrepreneurs, families and international clients.' },
    { question: 'Can you coordinate lawyers, tax, accounting and company setup in Turkey?', answer: 'Yes. Bosphoras organizes access to independent professionals. Legal and tax decisions remain validated by qualified professionals.' },
    { question: 'Is Bosphoras Private Access a discount card?', answer: 'No. Bosphoras Private Access is private access to the Bosphoras desk, qualified introductions, priority handling and confidential coordination of requests in Turkey.' },
  ],
  ru: [
    { question: 'Bosphoras — это агентство недвижимости в Турции?', answer: 'Нет. Bosphoras — международный частный офис. Недвижимость может быть частью пути, но только после стратегии: город, резиденция, налоги, юрист, здоровье, страхование, банк, компания, офисы и образ жизни.' },
    { question: 'Bosphoras сопровождает иностранных инвесторов в Стамбуле, Бодруме и Анталье?', answer: 'Да. Bosphoras координирует релокацию, формальности, частные услуги и выбранных специалистов для инвесторов, предпринимателей, семей и международных клиентов.' },
    { question: 'Можете ли вы координировать юристов, налоги, бухгалтерию и создание компании?', answer: 'Да. Bosphoras организует доступ к независимым специалистам. Юридические и налоговые решения подтверждаются уполномоченными профессионалами.' },
    { question: 'Bosphoras Private Access — это дисконтная карта?', answer: 'Нет. Bosphoras Private Access — это частный доступ к desk Bosphoras, качественные интродукции, приоритетная обработка и конфиденциальная координация запросов в Турции.' },
  ],
  ar: [
    { question: 'هل Bosphoras وكالة عقارية في تركيا؟', answer: 'لا. Bosphoras مكتب خاص دولي. قد تكون العقارات جزءاً من المسار، لكن بعد الاستراتيجية: المدينة، الإقامة، الضرائب، المحامي، الصحة، التأمين، البنك، الشركة، المكاتب ونمط الحياة.' },
    { question: 'هل يرافق Bosphoras المستثمرين الأجانب في إسطنبول وبودروم وأنطاليا؟', answer: 'نعم. ينسق Bosphoras الاستقرار، الإجراءات، الخدمات الخاصة والمهنيين المختارين للمستثمرين ورواد الأعمال والعائلات والعملاء الدوليين.' },
    { question: 'هل يمكنكم تنسيق المحامي والضرائب والمحاسبة وتأسيس الشركة؟', answer: 'نعم. ينظم Bosphoras الوصول إلى مهنيين مستقلين. تبقى القرارات القانونية والضريبية من اختصاص المهنيين المؤهلين.' },
    { question: 'هل Bosphoras Private Access بطاقة خصم؟', answer: 'لا. Bosphoras Private Access هو وصول خاص إلى مكتب Bosphoras، تعارفات مؤهلة، أولوية في المعالجة وتنسيق سري للطلبات في تركيا.' },
  ],
};

function isSupportedLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale);
}

interface PageProps {
  params: { locale: string };
}

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!isSupportedLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: '/',
    title: copy[locale].metaTitle,
    description: copy[locale].metaDescription,
  });
}

export default function LocaleHomePage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!isSupportedLocale(locale)) notFound();

  const c = copy[locale];
  const isRtl = localeDir[locale] === 'rtl';
  const privateAssessmentHref = getLocalePath(locale, getSlugForPage('private-assessment', locale) ?? '/private-assessment');
  const servicesHref = getLocalePath(locale, getSlugForPage('services', locale) ?? '/services');
  const membershipHref = getLocalePath(locale, getSlugForPage('membership-application', locale) ?? '/membership/application');
  const questions = faqItems[locale];

  return (
    <>
      <StructuredData data={organizationSchema()} />
      <StructuredData data={websiteSchema()} />
      <StructuredData data={faqSchema(questions)} />

      <Header locale={locale} currentPath="/" />

      <main className="bg-[#f8f1e7] text-[#101827]" dir={isRtl ? 'rtl' : 'ltr'}>
        <section className="relative min-h-[92vh] overflow-hidden bg-[radial-gradient(circle_at_78%_16%,rgba(196,151,84,0.22),transparent_27%),radial-gradient(circle_at_12%_70%,rgba(10,20,35,0.08),transparent_25%),linear-gradient(135deg,#f8f1e7_0%,#fffaf0_48%,#efe4d2_100%)] pt-24 md:pt-32">
          <div className="absolute inset-x-8 top-28 hidden h-[calc(100%-8rem)] border border-[#d8c7a1] lg:block" />
          <div className="absolute inset-0 opacity-[0.28]" style={{ backgroundImage: 'linear-gradient(#d8c7a1 1px, transparent 1px), linear-gradient(90deg, #d8c7a1 1px, transparent 1px)', backgroundSize: '72px 72px' }} />

          <div className="container-editorial relative z-10 grid min-h-[calc(92vh-7rem)] items-center gap-10 pb-12 pt-2 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-16 lg:pt-0">
            <div>
              <h1 className="max-w-4xl font-serif text-4xl leading-[1.02] tracking-[-0.045em] text-[#121826] md:text-6xl lg:text-7xl">
                {c.h1}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#3e4857] md:mt-8 md:text-xl md:leading-10">
                {c.subtitle}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
                <Link href={privateAssessmentHref} className="inline-flex items-center justify-center bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#263246]">
                  {c.primaryCta}
                </Link>
                <Link href={servicesHref} className="inline-flex items-center justify-center border border-[#a77a35] bg-[#fffaf0]/50 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#8a6728] transition hover:bg-[#fffaf0]">
                  {c.secondaryCta}
                </Link>
              </div>

              <Link href={membershipHref} className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8a6728] transition hover:text-[#121826]">
                {c.membershipCta}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12">
                <div className="border border-[#d8c7a1] bg-[#fffaf0]/80 p-5 shadow-[0_18px_45px_rgba(16,24,39,0.04)]">
                  <MapPin className="mb-4 h-5 w-5 text-[#b0813e]" />
                  <p className="text-[0.62rem] uppercase leading-6 tracking-[0.16em] text-[#5c6676]">
                    {locations[locale].join(' · ')}
                  </p>
                </div>
                <div className="border border-[#d8c7a1] bg-[#fffaf0]/80 p-5 shadow-[0_18px_45px_rgba(16,24,39,0.04)]">
                  <Globe className="mb-4 h-5 w-5 text-[#b0813e]" />
                  <p className="text-[0.62rem] uppercase leading-6 tracking-[0.16em] text-[#5c6676]">
                    Français · English · Русский · العربية
                  </p>
                </div>
              </div>
            </div>

            <aside className="relative hidden md:block">
              <div className="absolute -inset-4 border border-[#d8c7a1]" />
              <div className="relative border border-[#d8c7a1] bg-[#121826] p-8 text-[#fffaf0] shadow-[0_40px_120px_rgba(16,24,39,0.22)] md:p-10">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#d2a863]">{c.privateDesk}</p>
                <p className="mt-10 font-serif text-4xl leading-tight tracking-[-0.03em] md:text-5xl">{c.deskTitle}</p>
                <p className="mt-8 text-base leading-8 text-[#d8cfbf]">{c.deskText}</p>
                <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#d2a863] to-transparent" />
                <div className="grid gap-4 text-sm leading-7 text-[#d8cfbf] sm:grid-cols-2">
                  <p>Legal · Tax · Company · Accounting</p>
                  <p>Health · Insurance · Property · Offices</p>
                  <p>Driver · Hotels · Yachts · Events</p>
                  <p>Private Access · Long-term relation</p>
                </div>
              </div>
              <div className="relative mt-8 border border-[#d8c7a1] bg-[#fffaf0] px-8 py-7 shadow-[0_22px_70px_rgba(16,24,39,0.10)]">
                <p className="font-serif text-2xl leading-snug text-[#121826]">“{c.trustQuote}”</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-y border-[#d8c7a1] bg-[#fffaf0] py-8">
          <div className="container-editorial grid gap-4 md:grid-cols-6">
            {locations[locale].map((location) => (
              <div key={location} className="text-center text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#8a6728]">{location}</div>
            ))}
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">{c.differenceEyebrow}</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">{c.differenceTitle}</h2>
            </div>
            <div className="space-y-7 text-lg leading-9 text-[#3e4857]">
              {c.differenceParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf0] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
              <div className="border border-[#d8c7a1] bg-[#121826] p-8 text-[#fffaf0] shadow-[0_40px_120px_rgba(16,24,39,0.18)] md:p-10">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#d2a863]">{c.accessEyebrow}</p>
                <h2 className="mt-8 font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">{c.accessTitle}</h2>
                <p className="mt-7 text-base leading-8 text-[#d8cfbf]">{c.accessText}</p>
                <div className="my-9 h-px bg-gradient-to-r from-transparent via-[#d2a863] to-transparent" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div><p className="text-[0.62rem] uppercase tracking-[0.22em] text-[#d2a863]">{c.admission}</p><p className="mt-2 font-serif text-4xl text-white">{c.admissionPrice}</p></div>
                  <div><p className="text-[0.62rem] uppercase tracking-[0.22em] text-[#d2a863]">{c.retainer}</p><p className="mt-2 font-serif text-4xl text-white">{c.retainerPrice}</p></div>
                </div>
                <p className="mt-7 text-sm leading-7 text-[#d8cfbf]">{c.accessNote}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href={membershipHref} className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827] transition hover:bg-[#e0bc78]">{c.requestMembership}<ArrowRight size={15} /></Link>
                  <Link href={privateAssessmentHref} className="inline-flex items-center justify-center border border-[#d2a863]/70 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863] transition hover:bg-white/5">{c.classicRequest}</Link>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { title: locale === 'en' ? 'Priority access' : locale === 'ru' ? 'Приоритетный доступ' : 'وصول أولوية', text: locale === 'en' ? 'Member requests are handled with priority by the Bosphoras desk.' : locale === 'ru' ? 'Запросы участников обрабатываются в приоритетном порядке.' : 'تتم معالجة طلبات الأعضاء بأولوية من مكتب Bosphoras.' },
                  { title: locale === 'en' ? 'Qualified introductions' : locale === 'ru' ? 'Качественные интродукции' : 'تعارفات مؤهلة', text: locale === 'en' ? 'Lawyers, tax advisors, insurers, doctors, offices, hotels, drivers and selected partners.' : locale === 'ru' ? 'Юристы, налоговые консультанты, страховщики, врачи, офисы, отели, водители и выбранные партнёры.' : 'محامون، مستشارون ضريبيون، تأمين، أطباء، مكاتب، فنادق، سائقون وشركاء مختارون.' },
                  { title: locale === 'en' ? 'Enhanced confidentiality' : locale === 'ru' ? 'Усиленная конфиденциальность' : 'سرية معززة', text: locale === 'en' ? 'A discreet framework for private, family, patrimonial or professional requests.' : locale === 'ru' ? 'Дискретная рамка для частных, семейных, имущественных и профессиональных запросов.' : 'إطار سري للطلبات الخاصة والعائلية والمالية والمهنية.' },
                  { title: locale === 'en' ? 'Continuous coordination' : locale === 'ru' ? 'Постоянная координация' : 'تنسيق مستمر', text: locale === 'en' ? 'An active relationship with the Bosphoras desk throughout the year.' : locale === 'ru' ? 'Активная связь с desk Bosphoras в течение всего года.' : 'علاقة مستمرة مع مكتب Bosphoras طوال العام.' },
                ].map((item) => (
                  <article key={item.title} className="border border-[#d8c7a1] bg-white p-7 shadow-[0_18px_55px_rgba(16,24,39,0.045)]">
                    <KeyRound className="h-7 w-7 text-[#8a6728]" strokeWidth={1.4} />
                    <h3 className="mt-8 font-serif text-3xl text-[#121826]">{item.title}</h3>
                    <p className="mt-5 text-sm leading-7 text-[#3e4857]">{item.text}</p>
                  </article>
                ))}
                <article className="border border-[#d8c7a1] bg-[#f8f1e7] p-7 md:col-span-2">
                  <p className="font-serif text-3xl leading-tight text-[#121826]">{c.deskAlternative}</p>
                  <p className="mt-5 text-sm leading-7 text-[#3e4857]">{c.deskAlternativeText}</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#121826] px-5 py-20 text-[#fffaf0] md:px-8 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d2a863]">{c.servicesEyebrow}</p>
              <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] md:text-6xl">{c.servicesTitle}</h2>
            </div>
            <div className="grid gap-px bg-[#d2a863]/25 md:grid-cols-2 xl:grid-cols-6">
              {expertises[locale].map((item) => {
                const Icon = item.icon;
                return <article key={item.title} className="bg-[#121826] p-7 transition hover:bg-[#192237]"><Icon className="h-8 w-8 text-[#d2a863]" strokeWidth={1.45} /><h3 className="mt-8 font-serif text-3xl text-[#fffaf0]">{item.title}</h3><p className="mt-5 text-sm leading-7 text-[#d8cfbf]">{item.text}</p></article>;
              })}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 text-center"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6728]">{c.destinationsEyebrow}</p><h2 className="mt-4 font-serif text-3xl tracking-[-0.025em] text-[#172032] md:text-5xl">{c.destinationsTitle}</h2></div>
            <div className="grid gap-4 lg:grid-cols-3">
              {cities[locale].map((item, index) => <article key={item.title} className="border border-[#d8c7a1] bg-[#fffaf0] p-8 shadow-[0_18px_55px_rgba(16,24,39,0.05)]"><p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-[#8a6728]">0{index + 1}</p><h3 className="mt-10 font-serif text-5xl tracking-[-0.04em] text-[#172032]">{item.title}</h3><p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#4a5260]">{item.subtitle}</p><p className="mt-6 text-base leading-8 text-[#3e4857]">{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf0] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">{c.trustEyebrow}</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">{c.trustTitle}</h2></div>
            <div className="grid gap-4 text-base leading-8 text-[#3e4857] md:grid-cols-2">
              {[
                locale === 'en' ? 'Enhanced confidentiality and limited access to sensitive information.' : locale === 'ru' ? 'Усиленная конфиденциальность и ограниченный доступ к чувствительной информации.' : 'سرية معززة وتقييد الوصول إلى المعلومات الحساسة.',
                locale === 'en' ? 'KYC, source of funds, documents and private preferences handled with prudence.' : locale === 'ru' ? 'KYC, происхождение средств, документы и личные предпочтения обрабатываются с осторожностью.' : 'معالجة KYC ومصدر الأموال والمستندات والتفضيلات الخاصة بحذر.',
                locale === 'en' ? 'Coordination with qualified lawyers, tax advisors, accountants, insurers, doctors and providers.' : locale === 'ru' ? 'Координация с юристами, налоговыми консультантами, бухгалтерами, страховщиками, врачами и поставщиками.' : 'تنسيق مع محامين ومستشارين ضريبيين ومحاسبين وشركات تأمين وأطباء ومقدمي خدمات مؤهلين.',
                locale === 'en' ? 'No promise of tax, legal, administrative, medical or financial result.' : locale === 'ru' ? 'Без обещаний налогового, юридического, административного, медицинского или финансового результата.' : 'لا وعود بنتائج ضريبية أو قانونية أو إدارية أو طبية أو مالية.',
                locale === 'en' ? 'Private introductions only with mutual consent.' : locale === 'ru' ? 'Частные интродукции только по взаимному согласию.' : 'التعارفات الخاصة تتم فقط بموافقة متبادلة.',
                locale === 'en' ? 'Bosphoras coordinates and filters without replacing regulated professionals.' : locale === 'ru' ? 'Bosphoras координирует и фильтрует, не заменяя регулируемые профессии.' : 'ينسق Bosphoras ويرشح دون أن يحل محل المهنيين المنظمين.',
              ].map((item) => <div key={item} className="border border-[#d8c7a1] bg-white p-6"><ShieldCheck className="mb-5 text-[#8a6728]" size={24} strokeWidth={1.3} /><p>{item}</p></div>)}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
            <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">{c.faqEyebrow}</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">{c.faqTitle}</h2></div>
            <div className="grid gap-px bg-[#d8c7a1]">{questions.map((faq) => <article key={faq.question} className="bg-[#f8f1e7] p-8"><h3 className="font-serif text-3xl leading-snug text-[#121826]">{faq.question}</h3><p className="mt-4 text-base leading-8 text-[#3e4857]">{faq.answer}</p></article>)}</div>
          </div>
        </section>

        <section className="bg-[#121826] px-5 py-20 text-[#fffaf0] md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d2a863]">{c.methodEyebrow}</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">{c.methodTitle}</h2></div>
            <div className="border-l border-[#d2a863]/25">{method[locale].map((step, index) => <div key={step} className="grid grid-cols-[5rem_1fr] border-b border-[#d2a863]/15 py-7 last:border-b-0"><span className="font-serif text-3xl text-[#d2a863]">0{index + 1}</span><p className="text-base leading-8 text-[#d8cfbf]">{step}</p></div>)}</div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1500px] border border-[#24334a] bg-[linear-gradient(90deg,#121826_0%,#1d2940_45%,#121826_100%)] p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div className="text-white"><p className="font-serif text-3xl tracking-[-0.025em] md:text-5xl">{c.finalTitle}</p><p className="mt-4 max-w-xl text-base leading-8 text-white/80">{c.finalText}</p></div>
              <div className="flex flex-col gap-3 md:items-end"><Link href={privateAssessmentHref} className="inline-flex items-center justify-center bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#101827] transition hover:bg-[#e0bc78]">{c.primaryCta}</Link><Link href={membershipHref} className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#d2a863] transition hover:bg-white/5">{c.requestMembership}</Link><div className="mt-3 inline-flex items-center gap-2 text-sm text-white/80"><Lock className="h-4 w-4 text-[#d2a863]" />{c.confidentiality}</div></div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
