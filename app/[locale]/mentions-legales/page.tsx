import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { LegalContentPage, type LegalSection } from '@/components/LegalContentPage';

type SupportedLocale = 'en' | 'ru' | 'ar';
const supportedLocales: SupportedLocale[] = ['en', 'ru', 'ar'];
type PageCopy = { path: string; title: string; description: string; eyebrow: string; h1: string; intro: string; updatedAt: string; sections: LegalSection[] };

const common = {
  en: ['Brand: Bosphoras.', 'Operating company: Panorama Grup.', 'Publication director: Panorama Grup.', 'Registered office: 88 Avenue des Ternes, 75017 Paris, France.', 'SIRET: 80962988400036.', 'Telephone: +33 1 88 84 22 22.', 'Email: contact@bosphoras.com.'],
  ru: ['Бренд: Bosphoras.', 'Оператор: Panorama Grup.', 'Директор публикации: Panorama Grup.', 'Юридический адрес: 88 Avenue des Ternes, 75017 Paris, France.', 'SIRET: 80962988400036.', 'Телефон: +33 1 88 84 22 22.', 'Email: contact@bosphoras.com.'],
  ar: ['العلامة التجارية: Bosphoras.', 'الشركة المشغلة: Panorama Grup.', 'مدير النشر: Panorama Grup.', 'المقر: 88 Avenue des Ternes, 75017 Paris, France.', 'SIRET: 80962988400036.', 'الهاتف: +33 1 88 84 22 22.', 'البريد الإلكتروني: contact@bosphoras.com.'],
};

const copy: Record<SupportedLocale, PageCopy> = {
  en: {
    path: '/en/mentions-legales', title: 'Legal Notice | Bosphoras', description: 'Legal notice for the Bosphoras website: publisher, hosting, intellectual property, liability and contact information.', eyebrow: 'Bosphoras · Legal notice', h1: 'Legal Notice', intro: 'Legal information relating to the Bosphoras website and its publisher.', updatedAt: '28 April 2026',
    sections: [
      { title: 'Website publisher', paragraphs: common.en },
      { title: 'Hosting', paragraphs: ['The website is hosted by Vercel Inc.', 'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States.', 'Website: vercel.com.', 'Hosting information may be updated depending on technical changes to the website infrastructure.'] },
      { title: 'Website purpose', paragraphs: ['The website presents the Bosphoras private desk, coordination, concierge, relocation, business, legal-tax coordination, real estate, health, insurance, hospitality and private access services.', 'The information provided on the website is general and does not constitute personalized legal, tax, medical, financial, banking, insurance or real estate advice.'] },
      { title: 'Intellectual property', paragraphs: ['All content on the website, including texts, structure, visuals, design, pages, logos, names, editorial choices and databases, is protected by intellectual property rights.', 'Any reproduction, extraction, distribution, modification or reuse without prior written authorization from Panorama Grup is prohibited.'] },
      { title: 'Responsibility', paragraphs: ['Panorama Grup makes reasonable efforts to provide reliable information but cannot guarantee that all information is always complete, accurate or up to date.', 'The user remains responsible for decisions made on the basis of the website and must consult qualified professionals before any binding decision.'] },
      { title: 'External links and third parties', paragraphs: ['The website may contain references to third-party professionals, partners or external services. These third parties remain responsible for their own services, advice, contracts, terms and obligations.', 'Panorama Grup cannot be held responsible for third-party websites or services.'] },
      { title: 'Contact', paragraphs: ['For any question regarding the website or legal information: contact@bosphoras.com.'] },
      { title: 'Legal validation', paragraphs: ['This legal notice is a working legal basis. Review by a legal professional is recommended before definitive publication.'] },
    ],
  },
  ru: {
    path: '/ru/mentions-legales', title: 'Правовая информация | Bosphoras', description: 'Правовая информация сайта Bosphoras: издатель, хостинг, интеллектуальная собственность, ответственность и контакты.', eyebrow: 'Bosphoras · Правовая информация', h1: 'Правовая информация', intro: 'Юридическая информация о сайте Bosphoras и его издателе.', updatedAt: '28 апреля 2026',
    sections: [
      { title: 'Издатель сайта', paragraphs: common.ru },
      { title: 'Хостинг', paragraphs: ['Сайт размещен у Vercel Inc.', 'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States.', 'Сайт: vercel.com.', 'Информация о хостинге может обновляться в зависимости от технических изменений инфраструктуры сайта.'] },
      { title: 'Назначение сайта', paragraphs: ['Сайт представляет услуги Bosphoras: private desk, координация, concierge, relocation, бизнес, юридико-налоговая координация, недвижимость, здоровье, страхование, hospitality и private access.', 'Информация на сайте имеет общий характер и не является персональной юридической, налоговой, медицинской, финансовой, банковской, страховой или недвижимой консультацией.'] },
      { title: 'Интеллектуальная собственность', paragraphs: ['Весь контент сайта, включая тексты, структуру, визуальные элементы, дизайн, страницы, логотипы, названия, редакционные решения и базы данных, защищен правами интеллектуальной собственности.', 'Любое воспроизведение, извлечение, распространение, изменение или повторное использование без предварительного письменного разрешения Panorama Grup запрещено.'] },
      { title: 'Ответственность', paragraphs: ['Panorama Grup предпринимает разумные усилия для предоставления надежной информации, но не гарантирует ее постоянную полноту, точность или актуальность.', 'Пользователь несет ответственность за решения, принятые на основании сайта, и должен консультироваться с квалифицированными специалистами перед любым обязательным решением.'] },
      { title: 'Внешние ссылки и третьи лица', paragraphs: ['Сайт может содержать ссылки или упоминания третьих специалистов, партнеров или внешних услуг. Эти третьи лица самостоятельно отвечают за свои услуги, советы, договоры, условия и обязательства.', 'Panorama Grup не несет ответственности за сторонние сайты или услуги.'] },
      { title: 'Контакт', paragraphs: ['По любым вопросам о сайте или юридической информации: contact@bosphoras.com.'] },
      { title: 'Юридическая проверка', paragraphs: ['Настоящая правовая информация является юридической рабочей базой. Перед окончательной публикацией рекомендуется проверка юристом.'] },
    ],
  },
  ar: {
    path: '/ar/mentions-legales', title: 'الإشعارات القانونية | Bosphoras', description: 'الإشعارات القانونية لموقع Bosphoras: الناشر، الاستضافة، الملكية الفكرية، المسؤولية وبيانات الاتصال.', eyebrow: 'Bosphoras · الإشعارات القانونية', h1: 'الإشعارات القانونية', intro: 'معلومات قانونية حول موقع Bosphoras والجهة الناشرة له.', updatedAt: '28 أبريل 2026',
    sections: [
      { title: 'ناشر الموقع', paragraphs: common.ar },
      { title: 'الاستضافة', paragraphs: ['الموقع مستضاف لدى Vercel Inc.', 'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States.', 'الموقع: vercel.com.', 'قد يتم تحديث معلومات الاستضافة حسب التغييرات التقنية في بنية الموقع.'] },
      { title: 'غرض الموقع', paragraphs: ['يعرض الموقع خدمات Bosphoras: المكتب الخاص، التنسيق، الكونسيرج، الانتقال، الأعمال، التنسيق القانوني والضريبي، العقارات، الصحة، التأمين، hospitality والوصول الخاص.', 'المعلومات المنشورة على الموقع عامة ولا تشكل نصيحة قانونية أو ضريبية أو طبية أو مالية أو مصرفية أو تأمينية أو عقارية شخصية.'] },
      { title: 'الملكية الفكرية', paragraphs: ['كل محتوى الموقع، بما في ذلك النصوص والبنية والعناصر المرئية والتصميم والصفحات والشعارات والأسماء والاختيارات التحريرية وقواعد البيانات، محمي بحقوق الملكية الفكرية.', 'يحظر أي نسخ أو استخراج أو نشر أو تعديل أو إعادة استخدام دون إذن كتابي مسبق من Panorama Grup.'] },
      { title: 'المسؤولية', paragraphs: ['تبذل Panorama Grup جهوداً معقولة لتقديم معلومات موثوقة، لكنها لا تضمن أن تكون المعلومات كاملة أو دقيقة أو محدثة دائماً.', 'يبقى المستخدم مسؤولاً عن القرارات المتخذة بناءً على الموقع ويجب عليه استشارة مهنيين مؤهلين قبل أي قرار ملزم.'] },
      { title: 'الروابط الخارجية والغير', paragraphs: ['قد يحتوي الموقع على إشارات إلى مهنيين أو شركاء أو خدمات خارجية. يبقى هؤلاء مسؤولين عن خدماتهم ونصائحهم وعقودهم وشروطهم والتزاماتهم.', 'لا تتحمل Panorama Grup مسؤولية المواقع أو الخدمات الخارجية.'] },
      { title: 'التواصل', paragraphs: ['لأي سؤال حول الموقع أو المعلومات القانونية: contact@bosphoras.com.'] },
      { title: 'المراجعة القانونية', paragraphs: ['تشكل هذه الإشعارات القانونية قاعدة عمل قانونية. يوصى بمراجعتها من قبل مختص قانوني قبل النشر النهائي.'] },
    ],
  },
};

function isSupportedLocale(value: string): value is SupportedLocale { return supportedLocales.includes(value as SupportedLocale); }
interface PageProps { params: { locale: string } }
export function generateStaticParams() { return supportedLocales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { if (!isSupportedLocale(params.locale)) return {}; const c = copy[params.locale]; return buildMetadata({ locale: params.locale, path: '/mentions-legales', title: c.title, description: c.description }); }
export default function LegalNoticePage({ params }: PageProps) { if (!isSupportedLocale(params.locale)) notFound(); const locale = params.locale; const c = copy[locale]; return <LegalContentPage locale={locale as Locale} currentPath={c.path} eyebrow={c.eyebrow} title={c.h1} intro={c.intro} updatedAt={c.updatedAt} sections={c.sections} />; }
