import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { LegalContentPage, type LegalSection } from '@/components/LegalContentPage';

type SupportedLocale = 'en' | 'ru' | 'ar';
const supportedLocales: SupportedLocale[] = ['en', 'ru', 'ar'];

type PageCopy = { path: string; title: string; description: string; eyebrow: string; h1: string; intro: string; updatedAt: string; sections: LegalSection[] };

const copy: Record<SupportedLocale, PageCopy> = {
  en: {
    path: '/en/confidentialite',
    title: 'Privacy Policy | Bosphoras',
    description: 'Bosphoras privacy policy: personal data, forms, confidentiality, retention, security, rights and contact details.',
    eyebrow: 'Bosphoras · Privacy',
    h1: 'Privacy Policy',
    intro: 'How Bosphoras processes personal data submitted through the website and during private desk requests.',
    updatedAt: '28 April 2026',
    sections: [
      { title: 'Data controller', paragraphs: ['Bosphoras is a brand operated by Panorama Grup, 88 Avenue des Ternes, 75017 Paris, France, SIRET 80962988400036.', 'For questions regarding personal data, contact: contact@bosphoras.com.'] },
      { title: 'Data collected', paragraphs: ['Depending on your request, Bosphoras may collect identification data, contact details, country of residence, nationality, professional situation, family context, project information, budget range, preferences and documents voluntarily submitted by you.', 'Sensitive information may be transmitted only when strictly necessary for understanding or coordinating a request.'] },
      { title: 'Purposes', paragraphs: ['Personal data is processed to answer requests, prepare private assessments, coordinate Bosphoras services, organize introductions, manage client relationships, improve the website, ensure security, comply with legal obligations and protect legitimate interests.'] },
      { title: 'Legal bases', paragraphs: ['Processing may rely on pre-contractual steps, performance of a contract, legal obligations, legitimate interest, consent where required and the client’s explicit initiative when submitting sensitive information.'] },
      { title: 'Recipients', paragraphs: ['Data may be accessed by authorized Bosphoras team members and, where necessary, selected partners or independent professionals such as lawyers, tax advisors, accountants, insurers, doctors, banks, real estate agents, transport providers or hospitality providers.', 'Only the information necessary for the relevant purpose is shared.'] },
      { title: 'International context', paragraphs: ['Bosphoras may coordinate requests involving France, Turkey and other countries. Some information may therefore be processed or transmitted internationally when required for the requested service, subject to appropriate confidentiality precautions.'] },
      { title: 'Retention', paragraphs: ['Data is retained only for as long as necessary for the purpose pursued, client relationship management, legal obligations, evidence, accounting or dispute prevention.', 'Incomplete prospect requests may be deleted or archived after a reasonable period.'] },
      { title: 'Security and confidentiality', paragraphs: ['Bosphoras applies a discretion-first approach, limits access to sensitive information and uses organizational measures intended to protect confidentiality.', 'No digital transmission can be guaranteed absolutely secure, but Bosphoras strives to apply reasonable safeguards.'] },
      { title: 'Your rights', paragraphs: ['Subject to applicable law, you may request access, rectification, erasure, restriction, portability or objection to the processing of your data.', 'You may contact Bosphoras at contact@bosphoras.com. You may also contact the competent data protection authority where applicable.'] },
      { title: 'Legal validation', paragraphs: ['This privacy policy is a working legal basis. Review by a data protection professional is recommended before definitive publication.'] },
    ],
  },
  ru: {
    path: '/ru/confidentialite',
    title: 'Политика конфиденциальности | Bosphoras',
    description: 'Политика конфиденциальности Bosphoras: персональные данные, формы, секретность, хранение, безопасность, права и контакт.',
    eyebrow: 'Bosphoras · Конфиденциальность',
    h1: 'Политика конфиденциальности',
    intro: 'Как Bosphoras обрабатывает персональные данные, переданные через сайт и в рамках запросов Private Desk.',
    updatedAt: '28 апреля 2026',
    sections: [
      { title: 'Ответственный за обработку', paragraphs: ['Bosphoras — бренд, эксплуатируемый Panorama Grup, 88 Avenue des Ternes, 75017 Paris, France, SIRET 80962988400036.', 'По вопросам персональных данных: contact@bosphoras.com.'] },
      { title: 'Собираемые данные', paragraphs: ['В зависимости от запроса Bosphoras может собирать идентификационные данные, контакты, страну проживания, гражданство, профессиональную ситуацию, семейный контекст, сведения о проекте, бюджет, предпочтения и документы, добровольно переданные пользователем.', 'Чувствительная информация передается только если это строго необходимо для понимания или координации запроса.'] },
      { title: 'Цели обработки', paragraphs: ['Данные обрабатываются для ответа на запросы, подготовки частной консультации, координации услуг Bosphoras, организации интродукций, управления клиентскими отношениями, улучшения сайта, безопасности, соблюдения юридических обязанностей и защиты законных интересов.'] },
      { title: 'Правовые основания', paragraphs: ['Обработка может основываться на преддоговорных действиях, исполнении договора, юридических обязанностях, законном интересе, согласии при необходимости и явной инициативе клиента при передаче чувствительной информации.'] },
      { title: 'Получатели', paragraphs: ['Доступ к данным могут иметь уполномоченные сотрудники Bosphoras и, при необходимости, выбранные партнеры или независимые специалисты: юристы, налоговые консультанты, бухгалтеры, страховщики, врачи, банки, агенты недвижимости, перевозчики или hospitality-провайдеры.', 'Передается только информация, необходимая для соответствующей цели.'] },
      { title: 'Международный контекст', paragraphs: ['Bosphoras может координировать запросы, связанные с Францией, Турцией и другими странами. Некоторые данные могут обрабатываться или передаваться международно, если это нужно для услуги, с соблюдением мер конфиденциальности.'] },
      { title: 'Срок хранения', paragraphs: ['Данные хранятся только столько, сколько необходимо для цели обработки, управления клиентскими отношениями, юридических обязанностей, доказательств, бухгалтерии или предотвращения споров.', 'Неполные запросы потенциальных клиентов могут удаляться или архивироваться через разумный срок.'] },
      { title: 'Безопасность и конфиденциальность', paragraphs: ['Bosphoras применяет подход строгой дискретности, ограничивает доступ к чувствительной информации и использует организационные меры защиты конфиденциальности.', 'Ни одна цифровая передача не может быть абсолютно безопасной, однако Bosphoras стремится применять разумные меры защиты.'] },
      { title: 'Ваши права', paragraphs: ['В соответствии с применимым правом вы можете запросить доступ, исправление, удаление, ограничение, переносимость или возражение против обработки данных.', 'Вы можете связаться с Bosphoras по адресу contact@bosphoras.com, а также с компетентным органом по защите данных при необходимости.'] },
      { title: 'Юридическая проверка', paragraphs: ['Настоящая политика является юридической рабочей базой. Перед окончательной публикацией рекомендуется проверка специалистом по защите данных.'] },
    ],
  },
  ar: {
    path: '/ar/confidentialite',
    title: 'سياسة الخصوصية | Bosphoras',
    description: 'سياسة خصوصية Bosphoras: البيانات الشخصية، النماذج، السرية، مدة الاحتفاظ، الأمن، الحقوق ووسائل الاتصال.',
    eyebrow: 'Bosphoras · الخصوصية',
    h1: 'سياسة الخصوصية',
    intro: 'كيف يعالج Bosphoras البيانات الشخصية المرسلة عبر الموقع وخلال طلبات المكتب الخاص.',
    updatedAt: '28 أبريل 2026',
    sections: [
      { title: 'مسؤول المعالجة', paragraphs: ['Bosphoras علامة تجارية تديرها Panorama Grup، العنوان: 88 Avenue des Ternes, 75017 Paris, France، SIRET 80962988400036.', 'لأي سؤال حول البيانات الشخصية: contact@bosphoras.com.'] },
      { title: 'البيانات التي يتم جمعها', paragraphs: ['حسب الطلب، قد يجمع Bosphoras بيانات الهوية والاتصال وبلد الإقامة والجنسية والوضع المهني والسياق العائلي ومعلومات المشروع ونطاق الميزانية والتفضيلات والمستندات المقدمة طوعاً.', 'لا تُرسل المعلومات الحساسة إلا عندما تكون ضرورية لفهم الطلب أو تنسيقه.'] },
      { title: 'الأغراض', paragraphs: ['تعالج البيانات للرد على الطلبات، إعداد تقييم خاص، تنسيق خدمات Bosphoras، تنظيم التعارفات، إدارة العلاقة مع العميل، تحسين الموقع، ضمان الأمن، الامتثال للالتزامات القانونية وحماية المصالح المشروعة.'] },
      { title: 'الأسس القانونية', paragraphs: ['قد تستند المعالجة إلى خطوات ما قبل التعاقد، تنفيذ عقد، التزامات قانونية، مصلحة مشروعة، موافقة عند الحاجة، أو مبادرة صريحة من العميل عند إرسال معلومات حساسة.'] },
      { title: 'المستلمون', paragraphs: ['قد يطلع على البيانات أعضاء Bosphoras المخولون، وعند الحاجة شركاء مختارون أو مهنيون مستقلون مثل المحامين والمستشارين الضريبيين والمحاسبين وشركات التأمين والأطباء والبنوك ووكلاء العقارات والنقل والفنادق.', 'لا تتم مشاركة إلا المعلومات اللازمة للغرض المعني.'] },
      { title: 'السياق الدولي', paragraphs: ['قد ينسق Bosphoras طلبات مرتبطة بفرنسا وتركيا ودول أخرى. لذلك قد تتم معالجة أو نقل بعض المعلومات دولياً عندما يكون ذلك ضرورياً للخدمة المطلوبة مع اتخاذ احتياطات السرية المناسبة.'] },
      { title: 'مدة الاحتفاظ', paragraphs: ['تُحتفظ البيانات فقط للمدة اللازمة للغرض المقصود، أو لإدارة العلاقة، أو الالتزامات القانونية، أو الإثبات، أو المحاسبة، أو منع النزاعات.', 'يمكن حذف أو أرشفة الطلبات غير المكتملة بعد مدة معقولة.'] },
      { title: 'الأمن والسرية', paragraphs: ['يعتمد Bosphoras نهج السرية أولاً ويحد من الوصول إلى المعلومات الحساسة ويستخدم تدابير تنظيمية لحماية السرية.', 'لا يمكن ضمان أي نقل رقمي بشكل مطلق، لكن Bosphoras يسعى إلى تطبيق وسائل حماية معقولة.'] },
      { title: 'حقوقكم', paragraphs: ['وفقاً للقانون المطبق، يمكنكم طلب الوصول أو التصحيح أو الحذف أو التقييد أو النقل أو الاعتراض على معالجة بياناتكم.', 'يمكن التواصل مع Bosphoras عبر contact@bosphoras.com، ومع السلطة المختصة بحماية البيانات عند الاقتضاء.'] },
      { title: 'المراجعة القانونية', paragraphs: ['تشكل هذه السياسة قاعدة عمل قانونية. يوصى بمراجعتها من قبل مختص في حماية البيانات قبل النشر النهائي.'] },
    ],
  },
};

function isSupportedLocale(value: string): value is SupportedLocale { return supportedLocales.includes(value as SupportedLocale); }
interface PageProps { params: { locale: string } }
export function generateStaticParams() { return supportedLocales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { if (!isSupportedLocale(params.locale)) return {}; const c = copy[params.locale]; return buildMetadata({ locale: params.locale, path: '/confidentialite', title: c.title, description: c.description }); }
export default function PrivacyPage({ params }: PageProps) { if (!isSupportedLocale(params.locale)) notFound(); const locale = params.locale; const c = copy[locale]; return <LegalContentPage locale={locale as Locale} currentPath={c.path} eyebrow={c.eyebrow} title={c.h1} intro={c.intro} updatedAt={c.updatedAt} sections={c.sections} />; }
