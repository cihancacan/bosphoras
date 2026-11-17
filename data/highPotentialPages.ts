import type { Locale } from '@/lib/i18n';
import { taxReformEditorialGuides, taxCertificateSupplement } from './taxReformEditorialGuides';
import { globalInvestorEditorialGuides } from './globalInvestorEditorialGuides';
import { remoteWorkEditorialGuides } from './remoteWorkEditorialGuides';
import { personalWealthEditorialGuides } from './personalWealthEditorialGuides';
import { corporateEditorialGuides } from './corporateEditorialGuides';
import { bankingEditorialGuides } from './bankingEditorialGuides';
import { internationalComparisonGuides } from './internationalComparisonGuides';
import { bosphorasProgrammaticSeoPages } from './bosphorasProgrammaticSeoPages';
import { bosphorasAdditionalSeoPages } from './bosphorasAdditionalSeoPages';
import { visaEditorialGuides as earlierVisaEditorialGuides } from './visaEditorialGuides';
import { citizenshipEditorialGuides } from './citizenshipEditorialGuides';
import { countryVisaEditorialGuides } from './countryVisaEditorialGuides';
import { visaTypeEditorialGuides, longTermResidenceSupplement } from './visaTypeEditorialGuides';
import { bosphorasVisaTypeSeoPages } from './bosphorasVisaTypeSeoPages';
import { bosphorasCountryVisaSeoPages } from './bosphorasCountryVisaSeoPages';
import { bosphorasVisaResidenceSeoPages } from './bosphorasVisaResidenceSeoPages';
import { editorialGuides, editorialGuideUpdatedAt, type EditorialSection } from './highPotentialEditorialGuides';

export type GuideTheme = 'tax' | 'relocation' | 'city' | 'health' | 'business' | 'investor' | 'concierge' | 'property';
export type GuideFaq = { question: string; answer: string };
export type GuideInternalLink = { label: string; href: string };

export type HighPotentialGuide = {
  id: string;
  locale: Locale;
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  shortAnswer: string;
  theme: GuideTheme;
  cityFocus: string;
  serviceFocus: string;
  updatedAt: string;
  legalCaution: string;
  bosphorasHelp: string;
  faqs: GuideFaq[];
  internalLinks: GuideInternalLink[];
  sections?: EditorialSection[];
  sources?: GuideInternalLink[];
  publishedAt?: string;
};

type TopicCopy = { title: string; meta: string; h1: string; subtitle: string; answer: string; city: string; service: string };
type Topic = { id: string; theme: GuideTheme; slugs: Record<Locale, string>; copy: Record<Locale, TopicCopy> };

const updatedAt = '2026-04-28';
const prefix = (locale: Locale) => (locale === 'fr' ? '' : `/${locale}`);

const labels: Record<Locale, Record<string, string>> = {
  fr: { assessment: 'Diagnostic privé', services: 'Services', istanbul: 'Istanbul', bodrum: 'Bodrum', antalya: 'Antalya', club: 'Private Access Club' },
  en: { assessment: 'Private Assessment', services: 'Services', istanbul: 'Istanbul', bodrum: 'Bodrum', antalya: 'Antalya', club: 'Private Access Club' },
  ru: { assessment: 'Частная консультация', services: 'Услуги', istanbul: 'Стамбул', bodrum: 'Бодрум', antalya: 'Анталья', club: 'Private Access Club' },
  ar: { assessment: 'تقييم خاص', services: 'الخدمات', istanbul: 'إسطنبول', bodrum: 'بودروم', antalya: 'أنطاليا', club: 'Private Access Club' },
};

const cautions: Record<Locale, Record<GuideTheme, string>> = {
  fr: {
    tax: 'Cette page ne constitue pas un conseil fiscal. Les règles de résidence fiscale, d’exonération, de convention fiscale et de déclaration doivent être vérifiées avec un fiscaliste ou un avocat qualifié en Turquie et dans votre pays de résidence.',
    relocation: 'Les règles de résidence, de visa, d’assurance, de fiscalité et d’installation peuvent évoluer. Bosphoras coordonne l’accès à des professionnels sélectionnés, mais les décisions doivent être confirmées par les autorités ou les experts compétents.',
    city: 'Le choix d’une ville doit être validé selon votre famille, votre fiscalité, votre santé, votre budget, votre sécurité et votre style de vie. Bosphoras aide à structurer la décision sans promettre de résultat administratif.',
    health: 'Bosphoras ne donne pas d’avis médical. Les décisions médicales et d’assurance doivent être confirmées directement avec des médecins, cliniques, courtiers ou assureurs qualifiés.',
    business: 'La création d’entreprise, la banque, la comptabilité et la fiscalité doivent être confirmées par des professionnels qualifiés. Bosphoras coordonne, mais ne remplace pas les avocats, fiscalistes ou comptables.',
    investor: 'Cette page ne constitue pas un conseil d’investissement. Les décisions immobilières, fiscales, bancaires ou patrimoniales doivent être confirmées avec des professionnels qualifiés.',
    concierge: 'Bosphoras peut filtrer, coordonner et présenter des options, mais ne garantit pas l’accès final à un établissement, un club, un événement, un transport privé ou un prestataire.',
    property: 'Toute location ou acquisition immobilière doit faire l’objet d’une vérification juridique, fiscale, technique et documentaire. Bosphoras coordonne les professionnels, sans se substituer à eux.',
  },
  en: {
    tax: 'This page is not tax advice. Tax residence, exemption, double-tax treaty and reporting rules must be verified with qualified tax or legal professionals in Turkey and in your country of residence.',
    relocation: 'Residence, visa, insurance, tax and relocation rules may change. Bosphoras coordinates access to selected professionals, but decisions must be confirmed by competent authorities or experts.',
    city: 'The choice of city must be assessed according to family, tax, health, budget, security and lifestyle needs. Bosphoras structures the decision without promising administrative outcomes.',
    health: 'Bosphoras does not provide medical advice. Medical and insurance decisions must be confirmed directly with qualified doctors, clinics, brokers or insurers.',
    business: 'Company formation, banking, accounting and tax decisions must be confirmed by qualified professionals. Bosphoras coordinates but does not replace lawyers, tax advisors or accountants.',
    investor: 'This page is not investment advice. Property, tax, banking and wealth decisions must be confirmed with qualified professionals.',
    concierge: 'Bosphoras may filter, coordinate and present options, but does not guarantee final access to any venue, club, event, private transport or provider.',
    property: 'Any rental or property acquisition requires legal, tax, technical and documentary due diligence. Bosphoras coordinates professionals without replacing them.',
  },
  ru: {
    tax: 'Эта страница не является налоговой консультацией. Налоговая резиденция, льготы, налоговые соглашения и отчетность должны проверяться с квалифицированными специалистами в Турции и стране вашей резиденции.',
    relocation: 'Правила резиденции, виз, страхования, налогов и переезда могут меняться. Bosphoras координирует доступ к выбранным специалистам, но решения должны подтверждаться компетентными органами или экспертами.',
    city: 'Выбор города должен оцениваться с учетом семьи, налогов, здоровья, бюджета, безопасности и образа жизни. Bosphoras структурирует решение, не обещая административного результата.',
    health: 'Bosphoras не дает медицинских советов. Медицинские и страховые решения должны подтверждаться врачами, клиниками, брокерами или страховщиками.',
    business: 'Создание компании, банковские вопросы, бухгалтерия и налоги должны подтверждаться квалифицированными специалистами. Bosphoras координирует, но не заменяет юристов и бухгалтеров.',
    investor: 'Эта страница не является инвестиционной рекомендацией. Решения по недвижимости, налогам, банкам и капиталу должны подтверждаться специалистами.',
    concierge: 'Bosphoras может фильтровать, координировать и предлагать варианты, но не гарантирует окончательный доступ к заведению, клубу, событию, транспорту или поставщику.',
    property: 'Аренда или покупка недвижимости требует юридической, налоговой, технической и документальной проверки. Bosphoras координирует специалистов, но не заменяет их.',
  },
  ar: {
    tax: 'هذه الصفحة ليست استشارة ضريبية. يجب التحقق من الإقامة الضريبية والإعفاءات والاتفاقيات الضريبية والتصاريح مع مهنيين مؤهلين في تركيا وبلد إقامتكم.',
    relocation: 'قواعد الإقامة والتأشيرات والتأمين والضرائب والانتقال قد تتغير. ينسق Bosphoras الوصول إلى مهنيين مختارين، لكن القرارات يجب تأكيدها مع الجهات أو الخبراء المختصين.',
    city: 'اختيار المدينة يجب أن يتم حسب العائلة والضرائب والصحة والميزانية والأمن ونمط الحياة. يساعد Bosphoras على تنظيم القرار دون ضمان نتيجة إدارية.',
    health: 'Bosphoras لا يقدم نصيحة طبية. القرارات الطبية والتأمينية يجب تأكيدها مباشرة مع أطباء أو عيادات أو وسطاء أو شركات تأمين مؤهلة.',
    business: 'تأسيس الشركة والبنوك والمحاسبة والضرائب يجب تأكيدها مع مهنيين مؤهلين. Bosphoras ينسق ولا يحل محل المحامين أو المستشارين أو المحاسبين.',
    investor: 'هذه الصفحة ليست نصيحة استثمارية. القرارات العقارية والضريبية والمصرفية والمالية يجب تأكيدها مع مهنيين مؤهلين.',
    concierge: 'يمكن لـ Bosphoras الترشيح والتنسيق وتقديم خيارات، لكنه لا يضمن الوصول النهائي إلى أي مؤسسة أو نادٍ أو فعالية أو نقل خاص أو مزود خدمة.',
    property: 'أي إيجار أو شراء عقار يتطلب تدقيقاً قانونياً وضريبياً وتقنياً ووثائقياً. Bosphoras ينسق المهنيين ولا يحل محلهم.',
  },
};

const help: Record<Locale, string> = {
  fr: 'Bosphoras peut analyser votre besoin, organiser un diagnostic privé, sélectionner les bons professionnels indépendants, coordonner les rendez-vous, filtrer les informations sensibles et suivre l’exécution locale. L’accompagnement Private Desk commence à partir de 6 000 USD pour une année. Private Access est réservé aux membres sélectionnés : 10 000 USD d’admission annuelle + 1 000 USD de retainer mensuel.',
  en: 'Bosphoras can assess your need, organize a private assessment, select the right independent professionals, coordinate appointments, filter sensitive information and follow local execution. Private Desk support starts from 6,000 USD for one year. Private Access is reserved for selected members: 10,000 USD annual admission + 1,000 USD monthly retainer.',
  ru: 'Bosphoras может проанализировать ваш запрос, организовать частную консультацию, подобрать независимых специалистов, координировать встречи, фильтровать чувствительную информацию и сопровождать локальное исполнение. Private Desk начинается от 6 000 USD за один год. Private Access предназначен для выбранных участников: 10 000 USD ежегодный взнос + 1 000 USD ежемесячный retainer.',
  ar: 'يمكن لـ Bosphoras تحليل احتياجاتكم، تنظيم تقييم خاص، اختيار المهنيين المستقلين المناسبين، تنسيق المواعيد، تصفية المعلومات الحساسة ومتابعة التنفيذ المحلي. يبدأ دعم Private Desk من 6,000 USD لمدة سنة. Private Access مخصص للأعضاء المختارين: 10,000 USD قبول سنوي + 1,000 USD retainer شهري.',
};

function internalLinks(locale: Locale): GuideInternalLink[] {
  const p = prefix(locale);
  const l = labels[locale];
  return [
    { label: l.assessment, href: `${p}/private-assessment` },
    { label: l.services, href: `${p}/services` },
    { label: l.istanbul, href: `${p}${locale === 'ru' ? '/napravleniya/stambul' : '/destinations/istanbul'}` },
    { label: l.bodrum, href: `${p}${locale === 'ru' ? '/napravleniya/bodrum' : '/destinations/bodrum'}` },
    { label: l.antalya, href: `${p}${locale === 'ru' ? '/napravleniya/antaliya' : '/destinations/antalya'}` },
    { label: l.club, href: `${p}/private-access-club` },
  ];
}

function guideFaqs(locale: Locale, subject: string): GuideFaq[] {
  const data: Record<Locale, GuideFaq[]> = {
    fr: [
      { question: `${subject} concerne-t-il tous les étrangers ?`, answer: 'Non. La réponse dépend de la nationalité, de la résidence, du statut familial, du projet, des documents et des règles applicables au moment de la décision.' },
      { question: 'Bosphoras donne-t-il un conseil juridique ou fiscal ?', answer: 'Non. Bosphoras coordonne l’accès à des professionnels qualifiés. Les décisions juridiques, fiscales, médicales, bancaires ou d’assurance doivent être confirmées directement avec eux.' },
      { question: 'Quel est le premier pas ?', answer: 'Le plus prudent est de commencer par un diagnostic privé pour clarifier la situation, les priorités et les professionnels à mobiliser.' },
      { question: 'Combien coûte l’accompagnement Bosphoras ?', answer: 'L’accompagnement Private Desk commence à partir de 6 000 USD pour une année. Private Access est réservé aux membres sélectionnés avec 10 000 USD d’admission annuelle + 1 000 USD par mois.' },
    ],
    en: [
      { question: `Does ${subject} apply to all foreigners?`, answer: 'No. The answer depends on nationality, residence, family status, project, documents and the rules applicable at the time of the decision.' },
      { question: 'Does Bosphoras provide legal or tax advice?', answer: 'No. Bosphoras coordinates access to qualified professionals. Legal, tax, medical, banking or insurance decisions must be confirmed directly with them.' },
      { question: 'What is the first step?', answer: 'The safest first step is a private assessment to clarify your situation, priorities and the professionals to involve.' },
      { question: 'How much does Bosphoras support cost?', answer: 'Private Desk support starts from 6,000 USD for one year. Private Access is reserved for selected members with 10,000 USD annual admission + 1,000 USD per month.' },
    ],
    ru: [
      { question: `Какие условия нужно учитывать: ${subject}?`, answer: 'Условия зависят от гражданства, места проживания, семейных обстоятельств, целей, документов и действующих правил.' },
      { question: 'Bosphoras дает юридическую или налоговую консультацию?', answer: 'Нет. Bosphoras координирует доступ к квалифицированным специалистам. Юридические, налоговые, медицинские, банковские или страховые решения должны подтверждаться напрямую с ними.' },
      { question: 'Какой первый шаг?', answer: 'Самый безопасный первый шаг — частная консультация, чтобы прояснить ситуацию, приоритеты и нужных специалистов.' },
      { question: 'Сколько стоит сопровождение Bosphoras?', answer: 'Private Desk начинается от 6 000 USD за один год. Private Access для выбранных участников: 10 000 USD ежегодный взнос + 1 000 USD в месяц.' },
    ],
    ar: [
      { question: `ما الشروط التي ينبغي مراعاتها بشأن ${subject}؟`, answer: 'تختلف الشروط باختلاف الجنسية ومكان الإقامة والوضع العائلي والهدف والمستندات والقواعد السارية.' },
      { question: 'هل يقدم Bosphoras استشارة قانونية أو ضريبية؟', answer: 'لا. ينسق Bosphoras الوصول إلى مهنيين مؤهلين. القرارات القانونية والضريبية والطبية والمصرفية والتأمينية يجب تأكيدها مباشرة معهم.' },
      { question: 'ما هي الخطوة الأولى؟', answer: 'الخطوة الأكثر أماناً هي تقييم خاص لتوضيح الوضع والأولويات والمهنيين المطلوبين.' },
      { question: 'كم تكلفة مرافقة Bosphoras؟', answer: 'يبدأ دعم Private Desk من 6,000 USD لمدة سنة. Private Access للأعضاء المختارين: 10,000 USD قبول سنوي + 1,000 USD شهرياً.' },
    ],
  };
  return data[locale];
}

export const highPotentialTopics: Topic[] = [
  { id: 'tax-exemption-20-years', theme: 'tax', slugs: { fr: '/exoneration-fiscale-turquie-20-ans-etrangers', en: '/turkey-20-year-tax-exemption-foreigners', ru: '/nalogovaya-lgota-turtsiya-20-let-inostrantsy', ar: '/turkey-20-year-tax-exemption-foreigners' }, copy: { fr: { title: 'Exonération fiscale Turquie 20 ans pour étrangers | Bosphoras', meta: 'Guide prudent sur le projet d’exonération fiscale en Turquie pour étrangers : points à vérifier, risques, villes et accompagnement Bosphoras.', h1: 'Exonération fiscale en Turquie pendant 20 ans pour les étrangers : ce qu’il faut vérifier', subtitle: 'Une mesure à suivre avec prudence, fiscalistes et avocats qualifiés.', answer: 'Il ne faut pas considérer l’exonération fiscale de 20 ans comme définitivement acquise sans validation juridique et fiscale. Bosphoras suit les évolutions avec des professionnels indépendants en Turquie.', city: 'Istanbul concentre les fiscalistes et banques, Bodrum et Antalya concernent surtout les profils résidence et famille.', service: 'l’exonération fiscale potentielle en Turquie' }, en: { title: 'Turkey 20-year tax exemption for foreigners | Bosphoras', meta: 'Careful guide to the potential 20-year tax exemption in Turkey for foreigners: what to verify, risks, cities and Bosphoras support.', h1: 'Turkey 20-year tax exemption for foreigners: what must be verified', subtitle: 'A measure to follow carefully with qualified tax and legal professionals.', answer: 'The 20-year tax exemption should not be treated as definitively in force without legal and tax confirmation. Bosphoras follows developments with independent professionals in Turkey.', city: 'Istanbul concentrates tax advisors and banks, while Bodrum and Antalya often concern residence and family profiles.', service: 'the potential tax exemption in Turkey' }, ru: { title: '20-летняя налоговая льгота в Турции для иностранцев | Bosphoras', meta: 'Возможная 20-летняя налоговая льгота в Турции: условия, риски, выбор города и помощь Bosphoras в поиске специалистов.', h1: '20-летняя налоговая льгота в Турции для иностранцев: что проверить', subtitle: 'Условия применения необходимо уточнять у налоговых и юридических специалистов.', answer: 'Не следует считать 20-летнюю налоговую льготу автоматически применимой без правовой и налоговой проверки. Bosphoras следит за изменениями вместе с независимыми специалистами в Турции.', city: 'В Стамбуле сосредоточены налоговые консультанты и банки; при выборе Бодрума или Антальи особенно важны вопросы проживания и семьи.', service: 'возможная налоговая льгота в Турции' }, ar: { title: 'الإعفاء الضريبي لمدة 20 عاماً في تركيا للأجانب | Bosphoras', meta: 'دليل الإعفاء الضريبي المحتمل لمدة 20 عاماً في تركيا للأجانب: الشروط والمخاطر واختيار المدينة والتنسيق مع المختصين.', h1: 'الإعفاء الضريبي لمدة 20 عاماً في تركيا للأجانب: ما الذي ينبغي التحقق منه؟', subtitle: 'من الضروري مراجعة شروط الاستفادة مع مختصين في القانون والضرائب.', answer: 'لا ينبغي افتراض سريان الإعفاء الضريبي لمدة 20 عاماً على كل حالة من دون التحقق القانوني والضريبي. تتابع Bosphoras المستجدات بالتعاون مع مختصين مستقلين في تركيا.', city: 'تتركز خدمات الاستشارات الضريبية والبنوك في إسطنبول، بينما تبرز اعتبارات السكن والحياة الأسرية في بودروم وأنطاليا.', service: 'الإعفاء الضريبي المحتمل في تركيا' } } },
  { id: 'relocate-turkey-cities', theme: 'relocation', slugs: { fr: '/comment-s-installer-en-turquie-istanbul-bodrum-antalya', en: '/relocate-to-turkey-istanbul-bodrum-antalya', ru: '/kak-pereehat-v-turtsiyu-stambul-bodrum-antalia', ar: '/relocate-to-turkey-istanbul-bodrum-antalya' }, copy: { fr: { title: 'Comment s’installer en Turquie : Istanbul, Bodrum ou Antalya | Bosphoras', meta: 'Guide pour s’installer en Turquie : comparer Istanbul, Bodrum et Antalya, résidence, fiscalité, santé, famille et accompagnement Bosphoras.', h1: 'Comment s’installer en Turquie : Istanbul, Bodrum ou Antalya ?', subtitle: 'Comparer les villes avant de choisir votre base privée.', answer: 'Le bon choix dépend de votre profil : Istanbul pour le business, Bodrum pour le lifestyle discret, Antalya pour la famille, la santé et une vie plus stable à l’année.', city: 'Istanbul, Bodrum et Antalya répondent à des besoins très différents.', service: 'l’installation en Turquie' }, en: { title: 'How to relocate to Turkey: Istanbul, Bodrum or Antalya | Bosphoras', meta: 'Guide to relocating to Turkey: compare Istanbul, Bodrum and Antalya, residence, tax, healthcare, family and Bosphoras support.', h1: 'How to relocate to Turkey: Istanbul, Bodrum or Antalya?', subtitle: 'Compare the cities before choosing your private base.', answer: 'The right choice depends on your profile: Istanbul for business, Bodrum for discreet lifestyle, Antalya for family, healthcare and more stable year-round living.', city: 'Istanbul, Bodrum and Antalya answer very different needs.', service: 'relocation to Turkey' }, ru: { title: 'Переезд в Турцию: Стамбул, Бодрум или Анталья | Bosphoras', meta: 'Сравните Стамбул, Бодрум и Анталью для переезда в Турцию: проживание, налоги, медицина и условия для семьи.', h1: 'Как переехать в Турцию: Стамбул, Бодрум или Анталья?', subtitle: 'Сравните города, прежде чем выбирать место для жизни.', answer: 'Выбор зависит от ваших целей: Стамбул подходит для бизнеса, Бодрум — для спокойной жизни у моря, Анталья — для семей, которым важны медицина и комфорт круглый год.', city: 'У каждого из трёх городов свои преимущества и особенности повседневной жизни.', service: 'переезд в Турцию' }, ar: { title: 'الانتقال للعيش في تركيا: إسطنبول أم بودروم أم أنطاليا؟ | Bosphoras', meta: 'مقارنة إسطنبول وبودروم وأنطاليا للراغبين في الانتقال إلى تركيا: الإقامة والضرائب والرعاية الصحية والحياة الأسرية.', h1: 'كيف تختار مدينة للعيش في تركيا: إسطنبول أم بودروم أم أنطاليا؟', subtitle: 'قارن بين المدن قبل تحديد المكان الأنسب للاستقرار.', answer: 'يتوقف الاختيار على احتياجاتك: إسطنبول للأعمال، وبودروم لحياة هادئة قرب البحر، وأنطاليا للعائلات التي تهتم بالرعاية الصحية والراحة على مدار العام.', city: 'لكل مدينة مزاياها وظروفها المعيشية الخاصة.', service: 'الانتقال إلى تركيا' } } },
  { id: 'moving-istanbul', theme: 'city', slugs: { fr: '/s-installer-a-istanbul-en-tant-qu-etranger', en: '/moving-to-istanbul-as-a-foreigner', ru: '/pereezd-v-stambul-dlya-inostrantsev', ar: '/moving-to-istanbul-as-a-foreigner' }, copy: { fr: { title: 'S’installer à Istanbul en tant qu’étranger | Bosphoras', meta: 'Guide pour s’installer à Istanbul : quartiers, business, santé, écoles, fiscalité, immobilier, transport et accompagnement Bosphoras.', h1: 'S’installer à Istanbul en tant qu’étranger', subtitle: 'Business, famille, santé privée, immobilier et vie quotidienne.', answer: 'Istanbul convient aux étrangers qui veulent une base business, bancaire, juridique, médicale et internationale, à condition de choisir le bon quartier et les bons professionnels.', city: 'Istanbul est la base la plus complète pour les profils business et internationaux.', service: 'l’installation à Istanbul' }, en: { title: 'Moving to Istanbul as a foreigner | Bosphoras', meta: 'Guide to moving to Istanbul: neighborhoods, business, healthcare, schools, tax, property, transport and Bosphoras support.', h1: 'Moving to Istanbul as a foreigner', subtitle: 'Business, family, private healthcare, property and daily life.', answer: 'Istanbul suits foreigners who need a business, banking, legal, medical and international base, provided the right neighborhood and professionals are selected.', city: 'Istanbul is the most complete base for business and international profiles.', service: 'moving to Istanbul' }, ru: { title: 'Переезд в Стамбул для иностранцев | Bosphoras', meta: 'Как организовать переезд в Стамбул: районы, школы, медицина, бизнес, налоги, недвижимость и транспорт.', h1: 'Переезд в Стамбул для иностранцев', subtitle: 'Работа, семья, частная медицина, жильё и повседневная жизнь.', answer: 'Стамбул подходит иностранцам, которым необходим доступ к деловой среде, банкам, юридическим и медицинским услугам и международным связям. Важно заранее выбрать район и надёжных специалистов.', city: 'Стамбул объединяет широкий выбор деловых и международных услуг.', service: 'переезд в Стамбул' }, ar: { title: 'الانتقال للعيش في إسطنبول للأجانب | Bosphoras', meta: 'دليل الانتقال إلى إسطنبول للأجانب: الأحياء والسكن والمدارس والرعاية الصحية والأعمال والضرائب والمواصلات.', h1: 'الانتقال للعيش في إسطنبول للأجانب', subtitle: 'الأعمال والأسرة والرعاية الصحية الخاصة والسكن والحياة اليومية.', answer: 'تناسب إسطنبول الأجانب الذين يحتاجون إلى بيئة أعمال دولية وخدمات مصرفية وقانونية وطبية. ومن المهم اختيار الحي والمختصين بعناية قبل الانتقال.', city: 'تتميز إسطنبول بتنوع خدمات الأعمال والروابط الدولية.', service: 'الانتقال إلى إسطنبول' } } },
  { id: 'moving-bodrum', theme: 'city', slugs: { fr: '/s-installer-a-bodrum-familles-investisseurs', en: '/moving-to-bodrum-families-investors', ru: '/pereezd-v-bodrum-semi-investory', ar: '/moving-to-bodrum-families-investors' }, copy: { fr: { title: 'S’installer à Bodrum pour familles et investisseurs | Bosphoras', meta: 'Guide Bodrum pour familles et investisseurs : villas, marina, yachts, santé, saisonnalité, sécurité et accompagnement Bosphoras.', h1: 'S’installer à Bodrum pour familles et investisseurs', subtitle: 'Villas, marina, yachts, discrétion et vie méditerranéenne.', answer: 'Bodrum peut être idéal pour une résidence secondaire, une vie méditerranéenne discrète ou un projet familial premium, mais il faut comprendre la saisonnalité avant d’acheter.', city: 'Bodrum est une destination lifestyle, villas et marina.', service: 'l’installation à Bodrum' }, en: { title: 'Moving to Bodrum for families and investors | Bosphoras', meta: 'Bodrum guide for families and investors: villas, marina, yachts, healthcare, seasonality, security and Bosphoras support.', h1: 'Moving to Bodrum for families and investors', subtitle: 'Villas, marina, yachts, discretion and Mediterranean living.', answer: 'Bodrum may be ideal for a second residence, discreet Mediterranean living or premium family project, but seasonality must be understood before buying.', city: 'Bodrum is a lifestyle, villa and marina destination.', service: 'moving to Bodrum' }, ru: { title: 'Переезд в Бодрум для семей и инвесторов | Bosphoras', meta: 'Жизнь в Бодруме для семей и инвесторов: виллы, яхтенные гавани, медицина, безопасность и особенности сезонов.', h1: 'Переезд в Бодрум для семей и инвесторов', subtitle: 'Виллы, яхтенные гавани, приватность и жизнь на побережье.', answer: 'Бодрум может подойти для второго дома, спокойной жизни у моря или семейного проекта высокого уровня. Перед покупкой стоит оценить условия проживания в разные сезоны.', city: 'Бодрум известен виллами, яхтенными гаванями и прибрежным образом жизни.', service: 'переезд в Бодрум' }, ar: { title: 'الانتقال إلى بودروم للعائلات والمستثمرين | Bosphoras', meta: 'دليل العيش في بودروم للعائلات والمستثمرين: الفيلات ومراسي اليخوت والرعاية الصحية والأمان واختلاف المواسم.', h1: 'الانتقال إلى بودروم للعائلات والمستثمرين', subtitle: 'فيلات ومراسي يخوت وخصوصية وحياة على ساحل المتوسط.', answer: 'قد تكون بودروم مناسبة لمن يبحث عن منزل ثانٍ أو حياة هادئة على الساحل أو مشروع عائلي راقٍ. ويُستحسن تقييم ظروف العيش في مختلف المواسم قبل الشراء.', city: 'تشتهر بودروم بفيلاتها ومراسي اليخوت ونمط الحياة الساحلي.', service: 'الانتقال إلى بودروم' } } },
  { id: 'tax-residency', theme: 'tax', slugs: { fr: '/residence-fiscale-turquie-etrangers', en: '/turkey-tax-residency-foreigners', ru: '/nalogovoe-rezidentstvo-turtsii-inostrantsy', ar: '/turkey-tax-residency-foreigners' }, copy: { fr: { title: 'Résidence fiscale en Turquie pour étrangers | Bosphoras', meta: 'Guide prudent sur la résidence fiscale en Turquie pour étrangers : présence, intérêts économiques, conventions fiscales et coordination Bosphoras.', h1: 'Résidence fiscale en Turquie pour étrangers', subtitle: 'Comprendre les critères avant de structurer une installation.', answer: 'La résidence fiscale dépend des faits : présence, centre des intérêts, conventions fiscales, revenus, famille et activité. Elle doit être confirmée par un fiscaliste qualifié.', city: 'Istanbul attire les profils business, Bodrum et Antalya les profils résidence et famille.', service: 'la résidence fiscale en Turquie' }, en: { title: 'Turkey tax residency for foreigners | Bosphoras', meta: 'Careful guide to tax residency in Turkey for foreigners: presence, economic interests, tax treaties and Bosphoras coordination.', h1: 'Turkey tax residency for foreigners', subtitle: 'Understand the criteria before structuring a move.', answer: 'Tax residency depends on facts: presence, center of interests, tax treaties, income, family and activity. It must be confirmed by a qualified tax advisor.', city: 'Istanbul attracts business profiles, while Bodrum and Antalya often attract residence and family profiles.', service: 'tax residency in Turkey' }, ru: { title: 'Налоговое резидентство Турции для иностранцев | Bosphoras', meta: 'Налоговое резидентство в Турции: фактическое проживание, центр интересов, международные соглашения и консультации специалистов.', h1: 'Налоговое резидентство Турции для иностранцев', subtitle: 'Разберитесь в критериях до переезда и изменения налогового статуса.', answer: 'При определении налогового резидентства учитываются фактическое присутствие, центр интересов, применимые соглашения, доходы, семейные обстоятельства и деятельность. Ваш статус должен подтвердить квалифицированный налоговый консультант.', city: 'Стамбул привлекает предпринимателей, а Бодрум и Анталья — семьи, выбирающие место проживания.', service: 'налоговое резидентство Турции' }, ar: { title: 'الإقامة الضريبية في تركيا للأجانب | Bosphoras', meta: 'دليل الإقامة الضريبية في تركيا للأجانب: الحضور الفعلي ومركز المصالح والاتفاقيات الدولية والاستعانة بالمختصين.', h1: 'الإقامة الضريبية في تركيا للأجانب', subtitle: 'تعرّف إلى المعايير قبل الانتقال وتغيير وضعك الضريبي.', answer: 'يتوقف تحديد الإقامة الضريبية على ظروف كل حالة، بما فيها الحضور الفعلي ومركز المصالح والاتفاقيات المطبقة والدخل والأسرة والنشاط المهني. ويجب تأكيد الوضع مع مستشار ضريبي مؤهل.', city: 'تجذب إسطنبول أصحاب الأعمال، بينما تستقطب بودروم وأنطاليا العائلات الباحثة عن مكان للعيش.', service: 'الإقامة الضريبية في تركيا' } } },
  { id: 'health-insurance-expats', theme: 'health', slugs: { fr: '/assurance-sante-turquie-expatries', en: '/health-insurance-turkey-expats', ru: '/meditsinskaya-strahovka-turtsiya-expaty', ar: '/health-insurance-turkey-expats' }, copy: { fr: { title: 'Assurance santé en Turquie pour expatriés | Bosphoras', meta: 'Guide assurance santé en Turquie pour expatriés : couverture locale, internationale, famille, cliniques privées et accompagnement Bosphoras.', h1: 'Assurance santé en Turquie pour expatriés', subtitle: 'Protéger la famille avant, pendant et après l’installation.', answer: 'Le bon choix dépend du statut de résidence, de l’âge, de la famille, du niveau de couverture, du pays d’origine et des besoins médicaux. Un courtier ou assureur qualifié doit confirmer.', city: 'Istanbul concentre les hôpitaux privés, Antalya est attractive pour la santé familiale, Bodrum pour la résidence premium.', service: 'l’assurance santé en Turquie' }, en: { title: 'Health insurance in Turkey for expats | Bosphoras', meta: 'Health insurance guide in Turkey for expats: local coverage, international plans, family, private clinics and Bosphoras support.', h1: 'Health insurance in Turkey for expats', subtitle: 'Protect the family before, during and after relocation.', answer: 'The right choice depends on residence status, age, family, coverage level, country of origin and medical needs. A qualified broker or insurer must confirm.', city: 'Istanbul concentrates private hospitals, Antalya is attractive for family healthcare, Bodrum for premium residence.', service: 'health insurance in Turkey' }, ru: { title: 'Медицинская страховка в Турции для экспатов | Bosphoras', meta: 'Гид по медицинской страховке в Турции для экспатов: местное покрытие, международные планы, семья, частные клиники и Bosphoras.', h1: 'Медицинская страховка в Турции для экспатов', subtitle: 'Защитить семью до, во время и после переезда.', answer: 'Правильный выбор зависит от статуса резиденции, возраста, семьи, уровня покрытия, страны происхождения и медицинских потребностей. Это должен подтвердить брокер или страховщик.', city: 'Стамбул концентрирует частные больницы, Анталья привлекательна для семьи и здоровья, Бодрум — для premium residence.', service: 'медицинская страховка в Турции' }, ar: { title: 'التأمين الصحي في تركيا للمغتربين | Bosphoras', meta: 'دليل التأمين الصحي في تركيا للمغتربين: تغطية محلية، خطط دولية، عائلة، عيادات خاصة ودعم Bosphoras.', h1: 'التأمين الصحي في تركيا للمغتربين', subtitle: 'حماية العائلة قبل الانتقال وأثناءه وبعده.', answer: 'يعتمد الاختيار الصحيح على وضع الإقامة، العمر، العائلة، مستوى التغطية، بلد الأصل والحاجات الطبية. يجب تأكيده مع وسيط أو شركة تأمين مؤهلة.', city: 'تركز إسطنبول المستشفيات الخاصة، أنطاليا جذابة للصحة العائلية، وبودروم للإقامة الراقية.', service: 'التأمين الصحي في تركيا' } } },
  { id: 'company-setup-foreigner', theme: 'business', slugs: { fr: '/creer-entreprise-turquie-etranger', en: '/company-setup-turkey-foreigner', ru: '/otkryt-kompaniyu-v-turtsii-inostrantsu', ar: '/company-setup-turkey-foreigner' }, copy: { fr: { title: 'Créer une entreprise en Turquie en tant qu’étranger | Bosphoras', meta: 'Guide création d’entreprise en Turquie pour étrangers : structure, comptabilité, banque, bureaux, fiscalité et accompagnement Bosphoras.', h1: 'Créer une entreprise en Turquie en tant qu’étranger', subtitle: 'Structurer correctement avant d’immatriculer.', answer: 'Un étranger peut souvent créer une société en Turquie, mais la structure, la banque, la comptabilité, la fiscalité et l’activité doivent être validées par des professionnels qualifiés.', city: 'Istanbul est souvent la base business, Bodrum et Antalya peuvent convenir à des activités lifestyle, immobilier, services ou famille.', service: 'la création d’entreprise en Turquie' }, en: { title: 'Company setup in Turkey as a foreigner | Bosphoras', meta: 'Company setup guide in Turkey for foreigners: structure, accounting, banking, offices, tax and Bosphoras support.', h1: 'Company setup in Turkey as a foreigner', subtitle: 'Structure properly before incorporation.', answer: 'A foreigner can often create a company in Turkey, but structure, banking, accounting, tax and activity must be validated by qualified professionals.', city: 'Istanbul is often the business base, while Bodrum and Antalya may suit lifestyle, property, services or family activities.', service: 'company setup in Turkey' }, ru: { title: 'Открыть компанию в Турции иностранцу | Bosphoras', meta: 'Гид по созданию компании в Турции для иностранцев: структура, бухгалтерия, банк, офисы, налоги и Bosphoras.', h1: 'Открыть компанию в Турции иностранцу', subtitle: 'Сначала структура, затем регистрация.', answer: 'Иностранец часто может создать компанию в Турции, но структура, банк, бухгалтерия, налоги и деятельность должны быть подтверждены специалистами.', city: 'Стамбул часто является бизнес-базой, Бодрум и Анталья подходят для lifestyle, недвижимости, сервисов или семьи.', service: 'создание компании в Турции' }, ar: { title: 'تأسيس شركة في تركيا للأجانب | Bosphoras', meta: 'دليل تأسيس شركة في تركيا للأجانب: الهيكلة، المحاسبة، البنوك، المكاتب، الضرائب ودعم Bosphoras.', h1: 'تأسيس شركة في تركيا للأجانب', subtitle: 'الهيكلة الصحيحة قبل التسجيل.', answer: 'يمكن للأجنبي غالباً تأسيس شركة في تركيا، لكن الهيكل والبنك والمحاسبة والضرائب والنشاط يجب أن تؤكد مع مهنيين مؤهلين.', city: 'إسطنبول غالباً قاعدة الأعمال، بينما قد تناسب بودروم وأنطاليا أنشطة lifestyle أو العقارات أو الخدمات أو العائلة.', service: 'تأسيس شركة في تركيا' } } },
  { id: 'dubai-investors-turkey', theme: 'investor', slugs: { fr: '/investisseurs-dubai-pourquoi-regarder-turquie', en: '/dubai-investors-why-look-at-turkey', ru: '/investory-dubaya-pochemu-turtsiya', ar: '/dubai-investors-why-look-at-turkey' }, copy: { fr: { title: 'Investisseurs Dubai : pourquoi regarder la Turquie | Bosphoras', meta: 'Pourquoi les investisseurs basés à Dubai regardent la Turquie : Istanbul, Bodrum, Antalya, diversification, famille, santé et Private Desk.', h1: 'Investisseurs Dubai : pourquoi regarder la Turquie', subtitle: 'Une base complémentaire, pas une opposition à Dubai.', answer: 'La Turquie peut intéresser les investisseurs de Dubai comme seconde base : Istanbul pour business, Bodrum pour lifestyle, Antalya pour famille, santé et coût de vie plus rationnel.', city: 'Istanbul, Bodrum et Antalya offrent trois logiques complémentaires à Dubai.', service: 'la diversification Turquie pour investisseurs Dubai' }, en: { title: 'Dubai investors: why look at Turkey | Bosphoras', meta: 'Why Dubai-based investors look at Turkey: Istanbul, Bodrum, Antalya, diversification, family, healthcare and Private Desk.', h1: 'Dubai investors: why look at Turkey', subtitle: 'A complementary base, not an opposition to Dubai.', answer: 'Turkey may interest Dubai investors as a second base: Istanbul for business, Bodrum for lifestyle, Antalya for family, healthcare and more rational living costs.', city: 'Istanbul, Bodrum and Antalya offer three complementary logics to Dubai.', service: 'Turkey diversification for Dubai investors' }, ru: { title: 'Инвесторы Дубая: почему Турция | Bosphoras', meta: 'Почему инвесторы из Дубая смотрят на Турцию: Стамбул, Бодрум, Анталья, диверсификация, семья, здоровье и Private Desk.', h1: 'Инвесторы Дубая: почему стоит смотреть на Турцию', subtitle: 'Дополнительная база, а не противопоставление Дубаю.', answer: 'Турция может интересовать инвесторов из Дубая как вторая база: Стамбул для бизнеса, Бодрум для lifestyle, Анталья для семьи, здоровья и более рациональной стоимости жизни.', city: 'Стамбул, Бодрум и Анталья предлагают три логики, дополняющие Дубай.', service: 'диверсификация в Турцию для инвесторов Дубая' }, ar: { title: 'مستثمرو دبي: لماذا النظر إلى تركيا | Bosphoras', meta: 'لماذا ينظر مستثمرو دبي إلى تركيا: إسطنبول، بودروم، أنطاليا، تنويع، عائلة، صحة وPrivate Desk.', h1: 'مستثمرو دبي: لماذا النظر إلى تركيا', subtitle: 'قاعدة مكملة وليست منافسة لدبي.', answer: 'قد تهم تركيا مستثمري دبي كقاعدة ثانية: إسطنبول للأعمال، بودروم لنمط الحياة، أنطاليا للعائلة والصحة وتكلفة معيشة أكثر عقلانية.', city: 'إسطنبول وبودروم وأنطاليا تقدم ثلاث منطق مكملة لدبي.', service: 'تنويع تركيا لمستثمري دبي' } } },
  { id: 'private-concierge-istanbul', theme: 'concierge', slugs: { fr: '/conciergerie-privee-istanbul-investisseurs-internationaux', en: '/private-concierge-istanbul-international-investors', ru: '/chastnyy-konsyerzh-stambul-investory', ar: '/private-concierge-istanbul-international-investors' }, copy: { fr: { title: 'Conciergerie privée à Istanbul pour investisseurs internationaux | Bosphoras', meta: 'Conciergerie privée à Istanbul : chauffeurs, restaurants, clubs, hôtels, jets, hélicoptères, yachts, shopping luxe et Bosphoras Private Access.', h1: 'Conciergerie privée à Istanbul pour investisseurs internationaux', subtitle: 'Accès, discrétion, coordination et sélection.', answer: 'La conciergerie privée utile à Istanbul ne consiste pas à tout demander, mais à filtrer les bons accès : chauffeurs, tables, hôtels, clubs, événements, jets, hélicoptères, yachts et rendez-vous sensibles.', city: 'Istanbul est le centre naturel du concierge business, lifestyle et diplomatique.', service: 'la conciergerie privée à Istanbul' }, en: { title: 'Private concierge in Istanbul for international investors | Bosphoras', meta: 'Private concierge in Istanbul: drivers, restaurants, clubs, hotels, jets, helicopters, yachts, luxury shopping and Bosphoras Private Access.', h1: 'Private concierge in Istanbul for international investors', subtitle: 'Access, discretion, coordination and selection.', answer: 'Useful private concierge in Istanbul is not about asking for everything, but filtering the right access: drivers, tables, hotels, clubs, events, jets, helicopters, yachts and sensitive appointments.', city: 'Istanbul is the natural center of business, lifestyle and diplomatic concierge.', service: 'private concierge in Istanbul' }, ru: { title: 'Частный консьерж в Стамбуле для инвесторов | Bosphoras', meta: 'Частный консьерж в Стамбуле: водители, рестораны, клубы, отели, джеты, вертолеты, яхты, luxury shopping и Bosphoras Private Access.', h1: 'Частный консьерж в Стамбуле для международных инвесторов', subtitle: 'Доступ, дискретность, координация и отбор.', answer: 'Полезный частный консьерж в Стамбуле — это не просьба обо всем, а фильтрация правильного доступа: водители, рестораны, отели, клубы, events, джеты, вертолеты, яхты и чувствительные встречи.', city: 'Стамбул — естественный центр business, lifestyle и diplomatic concierge.', service: 'частный консьерж в Стамбуле' }, ar: { title: 'كونسيرج خاص في إسطنبول للمستثمرين الدوليين | Bosphoras', meta: 'كونسيرج خاص في إسطنبول: سائقون، مطاعم، نوادٍ، فنادق، طائرات، مروحيات، يخوت، تسوق فاخر وBosphoras Private Access.', h1: 'كونسيرج خاص في إسطنبول للمستثمرين الدوليين', subtitle: 'وصول، سرية، تنسيق وانتقاء.', answer: 'الكونسيرج الخاص المفيد في إسطنبول لا يعني طلب كل شيء، بل ترشيح الوصول الصحيح: السائقون، الطاولات، الفنادق، النوادي، الفعاليات، الطائرات، المروحيات، اليخوت والمواعيد الحساسة.', city: 'إسطنبول هي المركز الطبيعي للكونسيرج التجاري والفاخر والدبلوماسي.', service: 'الكونسيرج الخاص في إسطنبول' } } },
  { id: 'rent-or-buy-before-relocating', theme: 'property', slugs: { fr: '/louer-ou-acheter-en-turquie-avant-s-installer', en: '/rent-or-buy-in-turkey-before-relocating', ru: '/arendovat-ili-pokupat-v-turtsii', ar: '/rent-or-buy-in-turkey-before-relocating' }, copy: { fr: { title: 'Louer ou acheter en Turquie avant de s’installer | Bosphoras', meta: 'Guide louer ou acheter en Turquie avant de s’installer : Istanbul, Bodrum, Antalya, due diligence, famille, fiscalité et Bosphoras.', h1: 'Louer ou acheter en Turquie avant de s’installer ?', subtitle: 'Pourquoi louer d’abord peut parfois protéger la décision.', answer: 'Dans beaucoup de cas, louer avant d’acheter permet de tester un quartier, une ville, une saison et une organisation familiale avant une décision immobilière définitive.', city: 'Istanbul exige une lecture quartier par quartier, Bodrum une lecture saisonnière, Antalya une lecture famille et santé.', service: 'louer ou acheter avant de s’installer en Turquie' }, en: { title: 'Rent or buy in Turkey before relocating | Bosphoras', meta: 'Guide to renting or buying in Turkey before relocating: Istanbul, Bodrum, Antalya, due diligence, family, tax and Bosphoras.', h1: 'Rent or buy in Turkey before relocating?', subtitle: 'Why renting first may sometimes protect the decision.', answer: 'In many cases, renting before buying helps test a neighborhood, city, season and family organization before a final property decision.', city: 'Istanbul requires neighborhood-level reading, Bodrum seasonal reading, Antalya family and healthcare reading.', service: 'renting or buying before relocating to Turkey' }, ru: { title: 'Арендовать или покупать в Турции перед переездом | Bosphoras', meta: 'Гид арендовать или покупать в Турции перед переездом: Стамбул, Бодрум, Анталья, due diligence, семья, налоги и Bosphoras.', h1: 'Арендовать или покупать в Турции перед переездом?', subtitle: 'Почему аренда сначала иногда защищает решение.', answer: 'Во многих случаях аренда до покупки помогает протестировать район, город, сезон и семейную организацию до окончательного решения по недвижимости.', city: 'Стамбул требует анализа районов, Бодрум — сезонности, Анталья — семьи и здоровья.', service: 'аренда или покупка перед переездом в Турцию' }, ar: { title: 'الاستئجار أو الشراء في تركيا قبل الانتقال | Bosphoras', meta: 'دليل الاستئجار أو الشراء في تركيا قبل الانتقال: إسطنبول، بودروم، أنطاليا، due diligence، العائلة، الضرائب وBosphoras.', h1: 'الاستئجار أو الشراء في تركيا قبل الانتقال؟', subtitle: 'لماذا قد يحمي الاستئجار أولاً القرار.', answer: 'في كثير من الحالات، يساعد الاستئجار قبل الشراء على اختبار الحي والمدينة والموسم والتنظيم العائلي قبل قرار عقاري نهائي.', city: 'إسطنبول تتطلب قراءة كل حي، بودروم قراءة موسمية، أنطاليا قراءة عائلية وصحية.', service: 'الاستئجار أو الشراء قبل الانتقال إلى تركيا' } } },
];

export const highPotentialGuides: HighPotentialGuide[] = highPotentialTopics.flatMap((topic) =>
  (['fr', 'en', 'ru', 'ar'] as Locale[]).map((locale) => ({
    id: topic.id,
    locale,
    slug: topic.slugs[locale],
    title: topic.copy[locale].title,
    metaDescription: topic.copy[locale].meta,
    h1: topic.copy[locale].h1,
    subtitle: topic.copy[locale].subtitle,
    shortAnswer: topic.copy[locale].answer,
    theme: topic.theme,
    cityFocus: topic.copy[locale].city,
    serviceFocus: topic.copy[locale].service,
    updatedAt,
    legalCaution: cautions[locale][topic.theme],
    bosphorasHelp: help[locale],
    faqs: guideFaqs(locale, topic.copy[locale].service),
    internalLinks: internalLinks(locale),
    ...(editorialGuides[topic.id]?.[locale] ? {
      ...editorialGuides[topic.id]![locale],
      ...(topic.id === 'tax-exemption-20-years' ? { sections: [...editorialGuides[topic.id]![locale].sections, { id: 'certificate-deadline-2026-2027', ...taxCertificateSupplement[locale] }], sources: [...editorialGuides[topic.id]![locale].sources, ...taxReformEditorialGuides['reform-tax-2026-foreigners']![locale].sources.filter(s => !editorialGuides[topic.id]![locale].sources.some(other => other.href === s.href))] } : {}),
      h1: editorialGuides[topic.id]![locale].title,
      subtitle: editorialGuides[topic.id]![locale].metaDescription,
      updatedAt: editorialGuideUpdatedAt,
      publishedAt: updatedAt,
      internalLinks: [
        ...highPotentialTopics.filter((other) => other.id !== topic.id && editorialGuides[other.id]).map((other) => ({ label: editorialGuides[other.id]![locale].title, href: `${prefix(locale)}${other.slugs[locale]}` })),
      ],
    } : {}),
  }))
);

const visaEditorialGuides = { ...earlierVisaEditorialGuides, ...citizenshipEditorialGuides, ...countryVisaEditorialGuides, ...visaTypeEditorialGuides };
const editorialVisaPages = [...bosphorasVisaResidenceSeoPages, ...bosphorasCountryVisaSeoPages, ...bosphorasVisaTypeSeoPages].filter((page) => visaEditorialGuides[page.key]);
const visaLocales: Locale[] = ['fr', 'en', 'ru', 'ar'];
const visaSlug = (slug: string) => slug.replace(/^\/(en|ru|ar)(?=\/)/, '');
for (const page of editorialVisaPages) {
  for (const locale of visaLocales) {
    const copy = visaEditorialGuides[page.key]![locale];
    highPotentialGuides.push({
      id: page.key, locale, slug: visaSlug(page.slugs[locale]),
      ...copy, h1: copy.title, subtitle: copy.metaDescription,
      ...(page.key === 'turkey-residence-foreign-owner' && locale === 'fr' ? { metaDescription: 'Propriétaire étranger en Turquie : conditions du titre de séjour, seuil de 200 000 USD, adresse, justificatifs et renouvellement.' } : {}),
      ...(page.key === 'turkey-long-term-residence' ? { sections: [...(copy.sections ?? []), { id: 'long-term-calculation-and-absence-2026', ...longTermResidenceSupplement[locale] }] } : {}),
      theme: 'relocation', cityFocus: '', serviceFocus: copy.title,
      updatedAt: editorialGuideUpdatedAt, publishedAt: '2026-06-05', legalCaution: cautions[locale].relocation,
      internalLinks: [
        ...editorialVisaPages.filter((other) => other.key !== page.key).map((other) => ({ label: visaEditorialGuides[other.key]![locale].title, href: other.slugs[locale] })),
        ...highPotentialGuides.filter((guide) => guide.locale === locale && ['relocate-turkey-cities', 'health-insurance-expats'].includes(guide.id)).map((guide) => ({ label: guide.title, href: prefix(locale) + guide.slug })),
      ],
    });
  }
}

const allTaxEditorialGuides = { ...taxReformEditorialGuides, ...internationalComparisonGuides, ...bankingEditorialGuides, ...corporateEditorialGuides, ...personalWealthEditorialGuides, ...remoteWorkEditorialGuides, ...globalInvestorEditorialGuides };
const editorialTaxPages = [...bosphorasAdditionalSeoPages, ...bosphorasProgrammaticSeoPages].filter(page => allTaxEditorialGuides[page.key]);
for (const page of editorialTaxPages) {
  for (const locale of visaLocales) {
    const copy = allTaxEditorialGuides[page.key]![locale];
    highPotentialGuides.push({
      id: page.key, locale, slug: visaSlug(page.slugs[locale]), ...copy,
      h1: copy.title, subtitle: copy.metaDescription, theme: 'tax', cityFocus: '', serviceFocus: copy.title,
      updatedAt: '2026-11-17', publishedAt: '2026-06-05', legalCaution: cautions[locale].tax,
      internalLinks: [
        ...editorialTaxPages.filter(other => other.key !== page.key).map(other => ({ label: allTaxEditorialGuides[other.key]![locale].title, href: other.slugs[locale] })),
        ...highPotentialGuides.filter(guide => guide.locale === locale && ['tax-exemption-20-years', 'tax-residency', 'relocate-turkey-cities', 'company-setup-foreigner'].includes(guide.id)).map(guide => ({ label: guide.title, href: prefix(locale) + guide.slug })),
      ],
    });
  }
}
export function getHighPotentialGuideBySlug(locale: Locale, slug: string): HighPotentialGuide | undefined {
  const normalized = slug.startsWith('/') ? slug : `/${slug}`;
  return highPotentialGuides.find((guide) => guide.locale === locale && guide.slug === normalized);
}

export function getEquivalentHighPotentialSlug(currentPath: string, targetLocale: Locale): string | undefined {
  const withoutLocale = currentPath.replace(/^\/(en|ru|ar)/, '') || '/';
  const guide = highPotentialGuides.find((g) => g.slug === withoutLocale);
  return guide ? highPotentialGuides.find((g) => g.id === guide.id && g.locale === targetLocale)?.slug : undefined;
}

// Static SEO routes generated at build time must use the same editorial content and canonical URL.
const editorialSeoKeyMap: Record<string, string> = {
  'tax-residence-foreign-income': 'tax-residency',
  'non-dom-turkey': 'tax-exemption-20-years',
  'french-expat-tax': 'fiscal-expatriation-france-turkey',
  'settle-istanbul-foreigner': 'moving-istanbul',
  'turkey-worldwide-income-foreigners': 'tax-residency',
  'travel-turkey-national-id': 'turkey-id-card-entry',
  'turkey-passport-or-id-card': 'travel-turkey-without-passport',
  'twenty-year-exemption-foreigners': 'tax-exemption-20-years',
  'settle-in-turkey': 'relocate-turkey-cities',
  'settle-bodrum-families-investors': 'moving-bodrum',
  'tax-residence-foreigners': 'tax-residency',
  'health-insurance-expats': 'health-insurance-expats',
  'create-company-foreigner': 'company-setup-foreigner',
  'dubai-investors-look-turkey': 'dubai-investors-turkey',
  'private-concierge-istanbul-investors': 'private-concierge-istanbul',
  'rent-or-buy-before-moving': 'rent-or-buy-before-relocating',
  'countries-id-card-turkey': 'countries-enter-turkey-id-card',
  'turkey-long-term-residence-main': 'turkey-long-term-residence',
};

export function getEditorialGuideForSeoKey(key: string, locale: Locale): HighPotentialGuide | undefined {
  const id = editorialSeoKeyMap[key] ?? (visaEditorialGuides[key] || allTaxEditorialGuides[key] ? key : undefined);
  return id ? highPotentialGuides.find((guide) => guide.id === id && guide.locale === locale && Boolean(guide.sections)) : undefined;
}


// Related guides: keep navigation useful and canonical instead of linking every guide to every other guide.
const registryTopics = [...bosphorasProgrammaticSeoPages, ...bosphorasAdditionalSeoPages, ...bosphorasVisaResidenceSeoPages, ...bosphorasCountryVisaSeoPages, ...bosphorasVisaTypeSeoPages];
const topicByKey = new Map(registryTopics.map(page => [page.key, page]));
const guideTokens = (id: string) => new Set([id, ...(topicByKey.get(id)?.focus ?? [])].join(' ').toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length > 2 && !['turkey','turkiye','foreigners','foreign','guide','tax','visa','residence','citizens','2026','investors','income'].includes(w)));
const guideTokenMap = new Map(highPotentialGuides.map(guide => [guide.id, guideTokens(guide.id)]));
const visaTopicIds = new Set(editorialVisaPages.map(page => page.key));
const relatedScore = (a: HighPotentialGuide, b: HighPotentialGuide) => {
  const at = guideTokenMap.get(a.id), bt = guideTokenMap.get(b.id);
  const common = at && bt ? [...at].filter(token => bt.has(token)).length : 0;
  const ac = topicByKey.get(a.id)?.category, bc = topicByKey.get(b.id)?.category;
  return common * 5 + (ac && ac === bc ? 3 : 0) + (a.theme === b.theme ? 2 : 0);
};
for (const guide of highPotentialGuides) {
  if (!guide.sections) continue;
  const candidates = highPotentialGuides.filter(other => other.locale === guide.locale && other.id !== guide.id && other.slug !== guide.slug && other.sections);
  const isVisa = visaTopicIds.has(guide.id);
  const hubs = isVisa ? ['turkey-visa-types-hub','turkey-ikamet-main','relocate-turkey-cities'] : ['tax-exemption-20-years','tax-residency','company-setup-foreigner'];
  const preferred = candidates.filter(other => hubs.includes(other.id));
  const ranked = candidates.filter(other => !hubs.includes(other.id)).map(other => ({other, score: relatedScore(guide, other)})).filter(item => item.score > 0).sort((a,b) => b.score-a.score || a.other.id.localeCompare(b.other.id));
  const selected = [...ranked.slice(0, 7).map(item => item.other), ...preferred];
  const seen = new Set<string>();
  guide.internalLinks = selected.flatMap(other => {
    const href = prefix(other.locale) + other.slug;
    if (seen.has(href)) return [];
    seen.add(href);
    return [{label: other.title, href}];
  }).slice(0, 10);
}

export function getGuideAlternateUrls(guide: HighPotentialGuide): Record<string, string> {
  const languages = Object.fromEntries(highPotentialGuides.filter(item => item.id === guide.id).map(item => [item.locale, `https://www.bosphoras.com${prefix(item.locale)}${item.slug}`]));
  return languages.fr ? { ...languages, 'x-default': languages.fr } : languages;
}
