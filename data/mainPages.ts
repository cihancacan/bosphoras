import type { Locale } from '@/lib/i18n';

export interface PageMeta {
  slug: string;
  titles: Record<Locale, string>;
  descriptions: Record<Locale, string>;
  h1s: Record<Locale, string>;
}

export const mainPages: PageMeta[] = [
  {
    slug: '/',
    titles: {
      fr: 'Bosphoras — Bureau Privé en Turquie pour Investisseurs Internationaux',
      en: 'Bosphoras — Private Office in Turkey for International Investors',
      ru: 'Bosphoras — Частный офис в Турции для международных инвесторов',
      ar: 'بوسفوراس — مكتب خاص في تركيا للمستثمرين الدوليين',
    },
    descriptions: {
      fr: "Bosphoras accompagne les investisseurs, familles et entrepreneurs internationaux dans leur relocation, leurs investissements et leur vie privée en Turquie. Istanbul, Bodrum, Antalya.",
      en: 'Bosphoras guides international investors, families and entrepreneurs through relocation, investment and private life in Turkey. Istanbul, Bodrum, Antalya.',
      ru: 'Bosphoras сопровождает международных инвесторов, семьи и предпринимателей в переезде, инвестициях и частной жизни в Турции. Стамбул, Бодрум, Анталья.',
      ar: 'ترشد بوسفوراس المستثمرين الدوليين والعائلات ورجال الأعمال في الانتقال والاستثمار والحياة الخاصة في تركيا. إسطنبول وبودروم وأنطاليا.',
    },
    h1s: {
      fr: "Votre bureau privé en Turquie",
      en: 'Your private office in Turkey',
      ru: 'Ваш частный офис в Турции',
      ar: 'مكتبكم الخاص في تركيا',
    },
  },
  {
    slug: '/services',
    titles: {
      fr: 'Services — Bosphoras Bureau Privé en Turquie',
      en: 'Services — Bosphoras Private Office in Turkey',
      ru: 'Услуги — Bosphoras Частный офис в Турции',
      ar: 'الخدمات — بوسفوراس مكتب خاص في تركيا',
    },
    descriptions: {
      fr: "Relocation, conseil juridique et fiscal, création d'entreprise, immobilier, investissement, santé, conciergerie et bureaux. Découvrez tous nos services en Turquie.",
      en: 'Relocation, legal and tax advisory, company formation, property, investment, healthcare, concierge and offices. Discover all our services in Turkey.',
      ru: 'Переезд, юридические и налоговые консультации, создание компании, недвижимость, инвестиции, здравоохранение, консьерж и офисы. Откройте все наши услуги в Турции.',
      ar: 'الانتقال، الاستشارات القانونية والضريبية، تأسيس الشركات، العقارات، الاستثمار، الرعاية الصحية، الكونسيرج والمكاتب. اكتشفوا جميع خدماتنا في تركيا.',
    },
    h1s: {
      fr: 'Nos services en Turquie',
      en: 'Our services in Turkey',
      ru: 'Наши услуги в Турции',
      ar: 'خدماتنا في تركيا',
    },
  },
  {
    slug: '/destinations',
    titles: {
      fr: 'Destinations — Istanbul, Bodrum, Antalya | Bosphoras',
      en: 'Destinations — Istanbul, Bodrum, Antalya | Bosphoras',
      ru: 'Направления — Стамбул, Бодрум, Анталья | Bosphoras',
      ar: 'الوجهات — إسطنبول، بودروم، أنطاليا | بوسفوراس',
    },
    descriptions: {
      fr: "Présence permanente à Istanbul, Bodrum et Antalya. Découvrez nos trois destinations d'excellence pour vivre et investir en Turquie.",
      en: 'Permanent presence in Istanbul, Bodrum and Antalya. Discover our three destinations of excellence for living and investing in Turkey.',
      ru: 'Постоянное присутствие в Стамбуле, Бодруме и Анталье. Откройте три наших направления превосходства для жизни и инвестиций в Турции.',
      ar: 'حضور دائم في إسطنبول وبودروم وأنطاليا. اكتشفوا وجهاتنا الثلاث المتميزة للعيش والاستثمار في تركيا.',
    },
    h1s: {
      fr: 'Nos destinations en Turquie',
      en: 'Our destinations in Turkey',
      ru: 'Наши направления в Турции',
      ar: 'وجهاتنا في تركيا',
    },
  },
  {
    slug: '/adhesion',
    titles: {
      fr: 'Adhésion Privée — Cercle Bosphoras',
      en: 'Private Membership — Bosphoras Circle',
      ru: 'Частное членство — Круг Bosphoras',
      ar: 'العضوية الخاصة — دائرة بوسفوراس',
    },
    descriptions: {
      fr: "Le cercle Bosphoras : un programme d'adhésion privé pour les clients exigeants. Accès prioritaire, gestionnaire dédié et événements exclusifs en Turquie.",
      en: 'The Bosphoras circle: a private membership programme for discerning clients. Priority access, dedicated manager and exclusive events in Turkey.',
      ru: 'Круг Bosphoras: частная членская программа для взыскательных клиентов. Приоритетный доступ, выделенный менеджер и эксклюзивные мероприятия в Турции.',
      ar: 'دائرة بوسفوراس: برنامج عضوية خاص للعملاء المميزين. وصول ذو أولوية ومدير مخصص وفعاليات حصرية في تركيا.',
    },
    h1s: {
      fr: 'Le cercle Bosphoras',
      en: 'The Bosphoras circle',
      ru: 'Круг Bosphoras',
      ar: 'دائرة بوسفوراس',
    },
  },
  {
    slug: '/evaluation',
    titles: {
      fr: 'Évaluation Privée — Bosphoras',
      en: 'Private Assessment — Bosphoras',
      ru: 'Частная консультация — Bosphoras',
      ar: 'التقييم الخاص — بوسفوراس',
    },
    descriptions: {
      fr: "Planifiez votre entretien confidentiel avec l'équipe Bosphoras. Partagez vos projets en Turquie et recevez une évaluation sur mesure.",
      en: 'Schedule your confidential consultation with the Bosphoras team. Share your projects in Turkey and receive a bespoke assessment.',
      ru: 'Запланируйте конфиденциальную консультацию с командой Bosphoras. Поделитесь своими проектами в Турции и получите индивидуальную оценку.',
      ar: 'احجزوا استشارتكم السرية مع فريق بوسفوراس. شاركوا مشاريعكم في تركيا واحصلوا على تقييم مخصص.',
    },
    h1s: {
      fr: 'Demander une évaluation privée',
      en: 'Request a private assessment',
      ru: 'Запросить частную консультацию',
      ar: 'طلب تقييم خاص',
    },
  },
];
