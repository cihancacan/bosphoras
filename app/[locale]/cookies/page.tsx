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
    path: '/en/cookies', title: 'Cookies Policy | Bosphoras', description: 'Cookies policy for the Bosphoras website: technical cookies, analytics, consent, settings and user rights.', eyebrow: 'Bosphoras · Cookies', h1: 'Cookies Policy', intro: 'Information about cookies and similar technologies used on the Bosphoras website.', updatedAt: '28 April 2026',
    sections: [
      { title: 'What is a cookie?', paragraphs: ['A cookie is a small file stored on your device when visiting a website. It can help the website function, remember preferences, measure audience or improve the browsing experience.'] },
      { title: 'Cookies used', paragraphs: ['Bosphoras may use technical cookies necessary for the proper functioning of the website, preference cookies, audience measurement cookies and, where applicable, third-party service cookies used for security, analytics, forms or hosting.'] },
      { title: 'Strictly necessary cookies', paragraphs: ['These cookies are required to make the website work properly, secure navigation, remember essential preferences and display pages correctly. They generally do not require consent.'] },
      { title: 'Analytics and performance cookies', paragraphs: ['Audience measurement cookies may be used to understand how visitors use the website, which pages are viewed and how the experience can be improved.', 'Where required, these cookies are used only with consent.'] },
      { title: 'Third-party cookies', paragraphs: ['Some pages may rely on third-party technologies for hosting, security, analytics, forms, maps, videos or external services.', 'These providers may process information under their own policies. Bosphoras does not control all third-party cookies.'] },
      { title: 'Consent and settings', paragraphs: ['When required, you may accept, refuse or configure non-essential cookies through the consent banner or browser settings.', 'You can also delete cookies directly from your browser. Refusing certain cookies may affect some website features.'] },
      { title: 'Retention period', paragraphs: ['Cookies are retained for a limited period depending on their purpose, technical configuration and legal requirements.'] },
      { title: 'Contact', paragraphs: ['For questions about cookies, contact Bosphoras at contact@bosphoras.com.'] },
      { title: 'Legal validation', paragraphs: ['This cookies policy is a working legal basis. Review by a data protection professional is recommended before definitive publication.'] },
    ],
  },
  ru: {
    path: '/ru/cookies', title: 'Политика cookies | Bosphoras', description: 'Политика cookies сайта Bosphoras: технические cookies, аналитика, согласие, настройки и права пользователя.', eyebrow: 'Bosphoras · Cookies', h1: 'Политика cookies', intro: 'Информация о cookies и аналогичных технологиях, используемых на сайте Bosphoras.', updatedAt: '28 апреля 2026',
    sections: [
      { title: 'Что такое cookie?', paragraphs: ['Cookie — это небольшой файл, сохраняемый на устройстве при посещении сайта. Он помогает сайту работать, запоминать настройки, измерять аудиторию или улучшать навигацию.'] },
      { title: 'Используемые cookies', paragraphs: ['Bosphoras может использовать технические cookies, необходимые для работы сайта, cookies предпочтений, cookies измерения аудитории и, при необходимости, cookies сторонних сервисов для безопасности, аналитики, форм или хостинга.'] },
      { title: 'Строго необходимые cookies', paragraphs: ['Эти cookies нужны для корректной работы сайта, безопасности навигации, сохранения важных настроек и правильного отображения страниц. Обычно они не требуют согласия.'] },
      { title: 'Аналитические cookies', paragraphs: ['Cookies измерения аудитории могут использоваться для понимания посещаемости сайта, просматриваемых страниц и улучшения опыта пользователя.', 'Когда это требуется, такие cookies используются только с согласия пользователя.'] },
      { title: 'Сторонние cookies', paragraphs: ['Некоторые страницы могут использовать сторонние технологии для хостинга, безопасности, аналитики, форм, карт, видео или внешних сервисов.', 'Такие поставщики могут обрабатывать информацию в соответствии со своими правилами. Bosphoras не контролирует все сторонние cookies.'] },
      { title: 'Согласие и настройки', paragraphs: ['Когда это требуется, вы можете принять, отказаться или настроить необязательные cookies через баннер согласия или настройки браузера.', 'Вы также можете удалить cookies напрямую в браузере. Отказ от некоторых cookies может повлиять на работу отдельных функций сайта.'] },
      { title: 'Срок хранения', paragraphs: ['Cookies хранятся ограниченное время в зависимости от их цели, технической конфигурации и правовых требований.'] },
      { title: 'Контакт', paragraphs: ['По вопросам cookies можно связаться с Bosphoras: contact@bosphoras.com.'] },
      { title: 'Юридическая проверка', paragraphs: ['Настоящая политика cookies является юридической рабочей базой. Перед окончательной публикацией рекомендуется проверка специалистом по защите данных.'] },
    ],
  },
  ar: {
    path: '/ar/cookies', title: 'سياسة ملفات تعريف الارتباط | Bosphoras', description: 'سياسة ملفات تعريف الارتباط لموقع Bosphoras: ملفات تقنية، تحليلات، موافقة، إعدادات وحقوق المستخدم.', eyebrow: 'Bosphoras · Cookies', h1: 'سياسة ملفات تعريف الارتباط', intro: 'معلومات حول ملفات تعريف الارتباط والتقنيات المشابهة المستخدمة على موقع Bosphoras.', updatedAt: '28 أبريل 2026',
    sections: [
      { title: 'ما هو ملف تعريف الارتباط؟', paragraphs: ['ملف تعريف الارتباط هو ملف صغير يتم تخزينه على جهازكم عند زيارة موقع إلكتروني. يساعد في تشغيل الموقع، حفظ التفضيلات، قياس الجمهور أو تحسين تجربة التصفح.'] },
      { title: 'الملفات المستخدمة', paragraphs: ['قد يستخدم Bosphoras ملفات تقنية ضرورية لعمل الموقع، ملفات تفضيلات، ملفات قياس الجمهور، وعند الاقتضاء ملفات لخدمات خارجية للأمن أو التحليلات أو النماذج أو الاستضافة.'] },
      { title: 'الملفات الضرورية', paragraphs: ['هذه الملفات ضرورية لعمل الموقع بشكل صحيح، وتأمين التصفح، وحفظ التفضيلات الأساسية وعرض الصفحات بطريقة سليمة. غالباً لا تتطلب موافقة.'] },
      { title: 'ملفات التحليل والأداء', paragraphs: ['قد تستخدم ملفات قياس الجمهور لفهم كيفية استخدام الزوار للموقع والصفحات التي تتم زيارتها وكيفية تحسين التجربة.', 'عندما يتطلب القانون ذلك، لا تستخدم هذه الملفات إلا بالموافقة.'] },
      { title: 'ملفات الأطراف الثالثة', paragraphs: ['قد تعتمد بعض الصفحات على تقنيات خارجية للاستضافة أو الأمن أو التحليلات أو النماذج أو الخرائط أو الفيديو أو الخدمات الخارجية.', 'قد يعالج هؤلاء المزودون المعلومات وفقاً لسياساتهم الخاصة. لا يتحكم Bosphoras في جميع ملفات الأطراف الثالثة.'] },
      { title: 'الموافقة والإعدادات', paragraphs: ['عند الحاجة، يمكنكم قبول أو رفض أو إعداد الملفات غير الضرورية عبر لافتة الموافقة أو إعدادات المتصفح.', 'يمكنكم أيضاً حذف الملفات من المتصفح. قد يؤثر رفض بعض الملفات على بعض وظائف الموقع.'] },
      { title: 'مدة الاحتفاظ', paragraphs: ['تُحتفظ ملفات تعريف الارتباط لمدة محدودة حسب الغرض منها والتكوين التقني والمتطلبات القانونية.'] },
      { title: 'التواصل', paragraphs: ['لأي سؤال حول ملفات تعريف الارتباط: contact@bosphoras.com.'] },
      { title: 'المراجعة القانونية', paragraphs: ['تشكل هذه السياسة قاعدة عمل قانونية. يوصى بمراجعتها من قبل مختص في حماية البيانات قبل النشر النهائي.'] },
    ],
  },
};

function isSupportedLocale(value: string): value is SupportedLocale { return supportedLocales.includes(value as SupportedLocale); }
interface PageProps { params: { locale: string } }
export function generateStaticParams() { return supportedLocales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { if (!isSupportedLocale(params.locale)) return {}; const c = copy[params.locale]; return buildMetadata({ locale: params.locale, path: '/cookies', title: c.title, description: c.description }); }
export default function CookiesPage({ params }: PageProps) { if (!isSupportedLocale(params.locale)) notFound(); const locale = params.locale; const c = copy[locale]; return <LegalContentPage locale={locale as Locale} currentPath={c.path} eyebrow={c.eyebrow} title={c.h1} intro={c.intro} updatedAt={c.updatedAt} sections={c.sections} />; }
