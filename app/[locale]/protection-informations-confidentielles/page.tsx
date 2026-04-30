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
    path: '/en/protection-informations-confidentielles', title: 'Protection of Confidential Information | Bosphoras', description: 'Bosphoras confidentiality framework for private, business, family, patrimonial and strategic information.', eyebrow: 'Bosphoras · Confidentiality', h1: 'Protection of Confidential Information', intro: 'A discretion-first framework for sensitive information shared with Bosphoras.', updatedAt: '28 April 2026',
    sections: [
      { title: 'Purpose', paragraphs: ['Bosphoras may receive sensitive, private, patrimonial, family, professional, financial, legal, tax, medical or strategic information.', 'This page explains the confidentiality principles applied when such information is shared with Bosphoras.'] },
      { title: 'Information concerned', paragraphs: ['Confidential information may include identity, residence, nationality, family situation, assets, income, investments, source of funds, business projects, tax situation, legal context, health context, travel preferences, security requirements, addresses, private contacts and documents.'] },
      { title: 'Access limitation', paragraphs: ['Access to confidential information is limited to persons who need it to analyze, coordinate or execute the relevant request.', 'Bosphoras avoids unnecessary disclosure and applies a need-to-know approach with internal members, partners and third-party professionals.'] },
      { title: 'Sharing with third parties', paragraphs: ['When a request requires the intervention of a lawyer, tax advisor, accountant, insurer, doctor, banker, real estate agent, transport provider or other professional, only the information required for the mission is shared.', 'Where appropriate, sensitive introductions are made progressively and with discretion.'] },
      { title: 'Client obligations', paragraphs: ['The client agrees not to disclose confidential information received from Bosphoras, including contacts, proposals, prices, strategies, introductions, documents, partner names and private access conditions, without prior authorization.'] },
      { title: 'Security precautions', paragraphs: ['Bosphoras uses reasonable organizational measures to reduce access to sensitive information, separate discussions when relevant and avoid unnecessary circulation of documents.', 'Digital communications may involve risks. Highly sensitive documents should be transmitted using the safest channel agreed between the parties.'] },
      { title: 'No public disclosure', paragraphs: ['Bosphoras does not publicly disclose client projects, private memberships, introductions, residence matters, transactions or sensitive situations without prior consent, unless legally required.'] },
      { title: 'Legal limits', paragraphs: ['Confidentiality may be limited by legal obligations, compliance checks, anti-money laundering rules, court orders, administrative requests or the need to protect Bosphoras, its partners or third parties.'] },
      { title: 'Legal validation', paragraphs: ['This page is a confidentiality working framework. Review by a legal professional is recommended before definitive contractual use.'] },
    ],
  },
  ru: {
    path: '/ru/protection-informations-confidentielles', title: 'Защита конфиденциальной информации | Bosphoras', description: 'Рамка конфиденциальности Bosphoras для частной, деловой, семейной, имущественной и стратегической информации.', eyebrow: 'Bosphoras · Конфиденциальность', h1: 'Защита конфиденциальной информации', intro: 'Принцип строгой дискретности для чувствительной информации, переданной Bosphoras.', updatedAt: '28 апреля 2026',
    sections: [
      { title: 'Назначение', paragraphs: ['Bosphoras может получать чувствительную, частную, имущественную, семейную, профессиональную, финансовую, юридическую, налоговую, медицинскую или стратегическую информацию.', 'Эта страница описывает принципы конфиденциальности, применяемые при передаче такой информации Bosphoras.'] },
      { title: 'Затрагиваемая информация', paragraphs: ['Конфиденциальная информация может включать личность, резиденцию, гражданство, семейное положение, активы, доходы, инвестиции, происхождение средств, бизнес-проекты, налоговую ситуацию, юридический контекст, здоровье, предпочтения в поездках, требования безопасности, адреса, частные контакты и документы.'] },
      { title: 'Ограничение доступа', paragraphs: ['Доступ к конфиденциальной информации ограничивается лицами, которым она необходима для анализа, координации или выполнения соответствующего запроса.', 'Bosphoras избегает ненужного раскрытия и применяет принцип need-to-know для команды, партнеров и третьих специалистов.'] },
      { title: 'Передача третьим лицам', paragraphs: ['Если запрос требует участия юриста, налогового консультанта, бухгалтера, страховщика, врача, банкира, агента недвижимости, перевозчика или другого специалиста, передается только информация, необходимая для миссии.', 'При необходимости чувствительные интродукции осуществляются постепенно и с максимальной дискретностью.'] },
      { title: 'Обязанности клиента', paragraphs: ['Клиент обязуется не раскрывать без предварительного разрешения конфиденциальную информацию, полученную от Bosphoras, включая контакты, предложения, цены, стратегии, интродукции, документы, имена партнеров и условия private access.'] },
      { title: 'Меры безопасности', paragraphs: ['Bosphoras применяет разумные организационные меры для ограничения доступа к чувствительной информации, разделения обсуждений при необходимости и предотвращения ненужного оборота документов.', 'Цифровые коммуникации могут содержать риски. Особо чувствительные документы следует передавать через наиболее безопасный канал, согласованный сторонами.'] },
      { title: 'Отсутствие публичного раскрытия', paragraphs: ['Bosphoras не раскрывает публично проекты клиентов, частные членства, интродукции, вопросы резиденции, сделки или чувствительные ситуации без предварительного согласия, кроме случаев юридической обязанности.'] },
      { title: 'Юридические пределы', paragraphs: ['Конфиденциальность может быть ограничена юридическими обязанностями, комплаенс-проверками, правилами борьбы с отмыванием денег, судебными решениями, административными запросами или необходимостью защиты Bosphoras, партнеров или третьих лиц.'] },
      { title: 'Юридическая проверка', paragraphs: ['Эта страница является рабочей рамкой конфиденциальности. Перед договорным использованием рекомендуется проверка юристом.'] },
    ],
  },
  ar: {
    path: '/ar/protection-informations-confidentielles', title: 'حماية المعلومات السرية | Bosphoras', description: 'إطار سرية Bosphoras للمعلومات الخاصة والتجارية والعائلية والمالية والاستراتيجية.', eyebrow: 'Bosphoras · السرية', h1: 'حماية المعلومات السرية', intro: 'إطار يقوم على السرية أولاً للمعلومات الحساسة المقدمة إلى Bosphoras.', updatedAt: '28 أبريل 2026',
    sections: [
      { title: 'الغرض', paragraphs: ['قد يتلقى Bosphoras معلومات حساسة أو خاصة أو عائلية أو مهنية أو مالية أو قانونية أو ضريبية أو طبية أو استراتيجية.', 'توضح هذه الصفحة مبادئ السرية المطبقة عند مشاركة هذه المعلومات مع Bosphoras.'] },
      { title: 'المعلومات المعنية', paragraphs: ['قد تشمل المعلومات السرية الهوية، الإقامة، الجنسية، الوضع العائلي، الأصول، الدخل، الاستثمارات، مصدر الأموال، المشاريع التجارية، الوضع الضريبي، السياق القانوني، السياق الصحي، تفضيلات السفر، متطلبات الأمن، العناوين، جهات الاتصال الخاصة والمستندات.'] },
      { title: 'تقييد الوصول', paragraphs: ['يقتصر الوصول إلى المعلومات السرية على الأشخاص الذين يحتاجون إليها لتحليل أو تنسيق أو تنفيذ الطلب المعني.', 'يتجنب Bosphoras أي إفشاء غير ضروري ويطبق مبدأ الحاجة إلى المعرفة مع الفريق والشركاء والمهنيين الخارجيين.'] },
      { title: 'المشاركة مع الغير', paragraphs: ['عندما يتطلب الطلب تدخل محامٍ أو مستشار ضريبي أو محاسب أو شركة تأمين أو طبيب أو مصرفي أو وكيل عقاري أو مزود نقل أو غيرهم، لا تتم مشاركة إلا المعلومات اللازمة للمهمة.', 'عند الاقتضاء، تتم التعارفات الحساسة تدريجياً وبسرية.'] },
      { title: 'التزامات العميل', paragraphs: ['يتعهد العميل بعدم إفشاء المعلومات السرية التي يتلقاها من Bosphoras، بما في ذلك جهات الاتصال والعروض والأسعار والاستراتيجيات والتعارفات والمستندات وأسماء الشركاء وشروط الوصول الخاص، دون إذن مسبق.'] },
      { title: 'احتياطات الأمن', paragraphs: ['يستخدم Bosphoras تدابير تنظيمية معقولة للحد من الوصول إلى المعلومات الحساسة، وفصل النقاشات عند الحاجة، وتجنب التداول غير الضروري للمستندات.', 'قد تنطوي الاتصالات الرقمية على مخاطر. يجب إرسال المستندات شديدة الحساسية عبر القناة الأكثر أماناً المتفق عليها بين الأطراف.'] },
      { title: 'عدم الإفصاح العام', paragraphs: ['لا يفصح Bosphoras علناً عن مشاريع العملاء أو العضويات الخاصة أو التعارفات أو مسائل الإقامة أو المعاملات أو الحالات الحساسة دون موافقة مسبقة، إلا عند وجود التزام قانوني.'] },
      { title: 'الحدود القانونية', paragraphs: ['قد تكون السرية محدودة بالالتزامات القانونية أو فحوص الامتثال أو قواعد مكافحة غسل الأموال أو أوامر المحاكم أو الطلبات الإدارية أو ضرورة حماية Bosphoras أو شركائه أو الغير.'] },
      { title: 'المراجعة القانونية', paragraphs: ['تشكل هذه الصفحة إطار عمل للسرية. يوصى بمراجعتها من قبل مختص قانوني قبل الاستخدام التعاقدي النهائي.'] },
    ],
  },
};

function isSupportedLocale(value: string): value is SupportedLocale { return supportedLocales.includes(value as SupportedLocale); }
interface PageProps { params: { locale: string } }
export function generateStaticParams() { return supportedLocales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { if (!isSupportedLocale(params.locale)) return {}; const c = copy[params.locale]; return buildMetadata({ locale: params.locale, path: '/protection-informations-confidentielles', title: c.title, description: c.description }); }
export default function ConfidentialInfoPage({ params }: PageProps) { if (!isSupportedLocale(params.locale)) notFound(); const locale = params.locale; const c = copy[locale]; return <LegalContentPage locale={locale as Locale} currentPath={c.path} eyebrow={c.eyebrow} title={c.h1} intro={c.intro} updatedAt={c.updatedAt} sections={c.sections} />; }
