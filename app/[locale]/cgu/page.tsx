import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { LegalContentPage, type LegalSection } from '@/components/LegalContentPage';

type SupportedLocale = 'en' | 'ru' | 'ar';

const supportedLocales: SupportedLocale[] = ['en', 'ru', 'ar'];

const copy: Record<SupportedLocale, {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
}> = {
  en: {
    path: '/en/cgu',
    title: 'Terms of Use | Bosphoras',
    description: 'Terms of use for the Bosphoras website: access, permitted use, forms, confidentiality, liability, intellectual property and third-party professionals.',
    eyebrow: 'Bosphoras · Terms of use',
    h1: 'Terms of Use',
    intro: 'Rules applicable to access, browsing and use of the Bosphoras website.',
    updatedAt: '28 April 2026',
    sections: [
      { title: 'Purpose', paragraphs: ['These Terms of Use govern access to and use of the Bosphoras website, published by Panorama Grup.', 'The website presents the Bosphoras private desk, coordination, concierge and introduction services for international clients in Turkey and abroad.', 'Browsing the website implies acceptance of these terms.'] },
      { title: 'Website access', paragraphs: ['The website is available to users with internet access. Connection and equipment costs remain the user’s responsibility.', 'Panorama Grup may modify, suspend or interrupt all or part of the website for maintenance, security, updates or force majeure.', 'Panorama Grup does not guarantee continuous, permanent or error-free access.'] },
      { title: 'Permitted use', paragraphs: ['Users agree to use the website lawfully, fairly and reasonably, in line with its purpose.'], bullets: ['Unauthorized access to systems, files, databases or private areas is prohibited.', 'Automated extraction, scraping, bulk copying or unauthorized reuse of the website content is prohibited.', 'Fraudulent, misleading, unlawful, defamatory, abusive or confidentiality-breaching content is prohibited.'] },
      { title: 'Forms and information submitted', paragraphs: ['The website may allow users to submit contact, private assessment or information requests.', 'Users warrant that all information submitted is accurate, sincere, up to date and does not infringe third-party rights.', 'Bosphoras may refuse, suspend or ignore incomplete, inconsistent, abusive, fraudulent or non-compliant requests.'] },
      { title: 'No automatic contract', paragraphs: ['Use of the website, sending a form or contacting Bosphoras does not automatically create a contractual relationship with Panorama Grup.', 'Any effective service must be validated through an exchange, quotation, written agreement, engagement letter or specific commercial terms.'] },
      { title: 'Informational content', paragraphs: ['Website content is provided for general information and presents the Bosphoras universe, services and coordination areas.', 'It does not constitute personalized legal, tax, medical, financial, banking, wealth, insurance or real estate advice.', 'Users must consult qualified professionals before making any binding decision.'] },
      { title: 'Third-party professionals', paragraphs: ['Bosphoras may introduce users to lawyers, tax advisors, accountants, doctors, insurers, offices, hotels, transport providers, real estate agents or other third parties.', 'Each third party remains solely responsible for its advice, services, authorizations, obligations, quotes, contracts and insurance.', 'Unless otherwise agreed in writing, Bosphoras acts as a coordinator, facilitator or relationship introducer.'] },
      { title: 'Intellectual property', paragraphs: ['Texts, visuals, pages, designs, editorial structures, trademarks, distinctive signs and databases are protected.', 'Any reproduction, extraction, distribution, modification or reuse without prior written authorization from Panorama Grup is prohibited.'] },
      { title: 'Confidentiality', paragraphs: ['Users may transmit confidential information through a request. Bosphoras applies a discretion-first approach and limits access to sensitive information.', 'Users also agree not to disclose confidential information, proposals, contacts, conditions, introductions or documents shared by Bosphoras without prior consent.'] },
      { title: 'Liability', paragraphs: ['Users remain responsible for their use of the website, information submitted and decisions made based on the content.', 'Panorama Grup strives to keep the website available and reliable but cannot guarantee the absence of errors, omissions, interruptions or outdated information.', 'Panorama Grup is not liable for decisions taken without professional validation, indirect damage, lost opportunities or outcomes depending on third parties.'] },
      { title: 'Changes and governing law', paragraphs: ['Panorama Grup may amend these Terms of Use at any time to reflect changes to the website, services, regulation or organization.', 'These terms are governed by French law, subject to mandatory rules that may apply depending on the user’s residence or place of service.', 'In case of difficulty, the parties will first seek an amicable resolution.'] },
      { title: 'Legal validation', paragraphs: ['These terms are a legal working basis for the Bosphoras website. Review by a legal professional is recommended before definitive publication or contractual use.'] },
    ],
  },
  ru: {
    path: '/ru/cgu',
    title: 'Условия использования | Bosphoras',
    description: 'Условия использования сайта Bosphoras: доступ, разрешенное использование, формы, конфиденциальность, ответственность, интеллектуальная собственность и третьи специалисты.',
    eyebrow: 'Bosphoras · Условия использования',
    h1: 'Условия использования',
    intro: 'Правила доступа, просмотра и использования сайта Bosphoras.',
    updatedAt: '28 апреля 2026',
    sections: [
      { title: 'Назначение', paragraphs: ['Настоящие Условия использования регулируют доступ к сайту Bosphoras и его использование. Сайт издается Panorama Grup.', 'Сайт представляет услуги Bosphoras как частного офиса, координатора, concierge-сервиса и посредника по установлению контактов для международных клиентов в Турции и за ее пределами.', 'Использование сайта означает принятие настоящих условий.'] },
      { title: 'Доступ к сайту', paragraphs: ['Сайт доступен пользователям, имеющим доступ к интернету. Расходы на подключение и оборудование несет пользователь.', 'Panorama Grup может изменять, приостанавливать или прекращать доступ ко всему сайту или его части по причинам обслуживания, безопасности, обновлений или форс-мажора.', 'Panorama Grup не гарантирует непрерывный, постоянный или безошибочный доступ.'] },
      { title: 'Разрешенное использование', paragraphs: ['Пользователь обязуется использовать сайт законно, добросовестно, разумно и в соответствии с его назначением.'], bullets: ['Запрещены попытки несанкционированного доступа к системам, файлам, базам данных или закрытым разделам.', 'Запрещены автоматизированное извлечение, scraping, массовое копирование или несанкционированное повторное использование контента.', 'Запрещено распространять мошеннический, вводящий в заблуждение, незаконный, клеветнический, оскорбительный или нарушающий конфиденциальность контент.'] },
      { title: 'Формы и передаваемая информация', paragraphs: ['Сайт может позволять пользователю направлять запросы на контакт, частную консультацию, оценку или информацию.', 'Пользователь гарантирует точность, достоверность и актуальность переданных данных и отсутствие нарушения прав третьих лиц.', 'Bosphoras может отказать, приостановить или не обрабатывать неполный, противоречивый, злоупотребительный, мошеннический или несоответствующий стандартам комплаенса запрос.'] },
      { title: 'Отсутствие автоматического договора', paragraphs: ['Использование сайта, отправка формы или контакт с Bosphoras не создают автоматически договорных отношений с Panorama Grup.', 'Любая услуга Bosphoras должна быть подтверждена обменом, сметой, письменным соглашением, письмом о миссии или специальными коммерческими условиями.'] },
      { title: 'Информационный характер контента', paragraphs: ['Контент сайта предоставляется для общей информации и представляет подход, услуги и области координации Bosphoras.', 'Он не является персональной юридической, налоговой, медицинской, финансовой, банковской, имущественной, страховой или недвижимой консультацией.', 'Перед любым обязательным решением пользователь должен обратиться к уполномоченным специалистам.'] },
      { title: 'Третьи специалисты', paragraphs: ['Bosphoras может знакомить пользователя с юристами, налоговыми консультантами, бухгалтерами, врачами, страховщиками, офисами, отелями, транспортными компаниями, агентами недвижимости и другими специалистами.', 'Каждый третий специалист самостоятельно отвечает за свои советы, услуги, разрешения, обязанности, сметы, договоры и страхование.', 'Если письменно не согласовано иное, Bosphoras действует как координатор, фасилитатор или посредник по установлению контакта.'] },
      { title: 'Интеллектуальная собственность', paragraphs: ['Тексты, визуальные элементы, страницы, дизайн, редакционная структура, торговые марки, отличительные знаки и базы данных защищены.', 'Любое воспроизведение, извлечение, распространение, изменение или повторное использование без предварительного письменного разрешения Panorama Grup запрещено.'] },
      { title: 'Конфиденциальность', paragraphs: ['Пользователь может передавать конфиденциальную информацию в рамках запроса. Bosphoras применяет подход строгой дискретности и ограничивает доступ к чувствительной информации.', 'Пользователь также обязуется не раскрывать без предварительного согласия конфиденциальные сведения, предложения, контакты, условия, интродукции или документы, переданные Bosphoras.'] },
      { title: 'Ответственность', paragraphs: ['Пользователь несет ответственность за использование сайта, переданную информацию и решения, принятые на основании просмотренного контента.', 'Panorama Grup стремится обеспечивать доступность и надежность сайта, но не гарантирует отсутствие ошибок, пропусков, прерываний или устаревшей информации.', 'Panorama Grup не несет ответственности за решения без профессиональной проверки, косвенный ущерб, упущенные возможности или результаты, зависящие от третьих лиц.'] },
      { title: 'Изменения и применимое право', paragraphs: ['Panorama Grup может изменить настоящие условия в любое время, чтобы адаптировать их к развитию сайта, услуг, законодательства или организации.', 'Настоящие условия регулируются французским правом с учетом обязательных норм, применимых по месту проживания пользователя или месту оказания услуг.', 'В случае затруднений стороны сначала стремятся к мирному урегулированию.'] },
      { title: 'Юридическая проверка', paragraphs: ['Настоящие условия являются юридической рабочей базой для сайта Bosphoras. Перед окончательной публикацией или договорным использованием рекомендуется проверка юристом.'] },
    ],
  },
  ar: {
    path: '/ar/cgu',
    title: 'شروط الاستخدام | Bosphoras',
    description: 'شروط استخدام موقع Bosphoras: الوصول، الاستخدام المسموح، النماذج، السرية، المسؤولية، الملكية الفكرية والمهنيون الخارجيون.',
    eyebrow: 'Bosphoras · شروط الاستخدام',
    h1: 'شروط الاستخدام',
    intro: 'القواعد المطبقة على الوصول إلى موقع Bosphoras وتصفحه واستخدامه.',
    updatedAt: '28 أبريل 2026',
    sections: [
      { title: 'الغرض', paragraphs: ['تنظم شروط الاستخدام هذه الوصول إلى موقع Bosphoras واستخدامه، وهو موقع تديره Panorama Grup.', 'يعرض الموقع خدمات Bosphoras كمكتب خاص للتنسيق والكونسيرج والتعريف بالمتخصصين للعملاء الدوليين في تركيا وخارجها.', 'يعني تصفح الموقع قبول هذه الشروط.'] },
      { title: 'الوصول إلى الموقع', paragraphs: ['الموقع متاح لكل مستخدم لديه اتصال بالإنترنت، وتبقى تكاليف الاتصال والمعدات على عاتق المستخدم.', 'يجوز لـ Panorama Grup تعديل أو تعليق أو إيقاف الوصول إلى الموقع كله أو جزء منه لأسباب الصيانة أو الأمن أو التحديث أو القوة القاهرة.', 'لا تضمن Panorama Grup وصولاً مستمراً أو دائماً أو خالياً من الأخطاء.'] },
      { title: 'الاستخدام المسموح', paragraphs: ['يتعهد المستخدم باستخدام الموقع بطريقة قانونية ونزيهة ومعقولة ومطابقة لغرضه.'], bullets: ['يحظر أي وصول غير مصرح به إلى الأنظمة أو الملفات أو قواعد البيانات أو المساحات الخاصة.', 'يحظر الاستخراج الآلي أو النسخ الجماعي أو إعادة استخدام محتوى الموقع دون إذن.', 'يحظر نشر محتوى احتيالي أو مضلل أو غير قانوني أو مسيء أو مخالف للسرية.'] },
      { title: 'النماذج والمعلومات المرسلة', paragraphs: ['قد يتيح الموقع للمستخدم إرسال طلب اتصال أو تقييم خاص أو معلومات.', 'يضمن المستخدم أن المعلومات المرسلة صحيحة وصادقة ومحدثة ولا تنتهك حقوق الغير.', 'يجوز لـ Bosphoras رفض أو تعليق أو عدم معالجة أي طلب ناقص أو متناقض أو احتيالي أو مخالف لمعايير الامتثال.'] },
      { title: 'عدم وجود عقد تلقائي', paragraphs: ['استخدام الموقع أو إرسال نموذج أو التواصل مع Bosphoras لا ينشئ تلقائياً علاقة تعاقدية مع Panorama Grup.', 'أي خدمة فعلية يجب أن تخضع لتأكيد أو عرض سعر أو اتفاق مكتوب أو خطاب مهمة أو شروط تجارية خاصة.'] },
      { title: 'طبيعة المحتوى الإعلامية', paragraphs: ['المحتوى المنشور على الموقع يقدم معلومات عامة عن عالم Bosphoras وخدماته ومجالات التنسيق.', 'لا يشكل المحتوى نصيحة قانونية أو ضريبية أو طبية أو مالية أو مصرفية أو عقارية أو تأمينية شخصية.', 'يجب على المستخدم استشارة المهنيين المؤهلين قبل أي قرار ملزم.'] },
      { title: 'المهنيون الخارجيون', paragraphs: ['قد يعرّف Bosphoras المستخدم على محامين أو مستشارين ضريبيين أو محاسبين أو أطباء أو شركات تأمين أو مكاتب أو فنادق أو ناقلين أو وكلاء عقارات أو غيرهم.', 'يبقى كل مهني خارجي مسؤولاً وحده عن نصائحه وخدماته وتراخيصه والتزاماته وعروضه وعقوده وتأميناته.', 'ما لم ينص اتفاق مكتوب على خلاف ذلك، يعمل Bosphoras كمنسق أو ميسر أو معرّف بالعلاقات.'] },
      { title: 'الملكية الفكرية', paragraphs: ['النصوص والصور والصفحات والتصاميم والهياكل التحريرية والعلامات والرموز المميزة وقواعد البيانات محمية.', 'يحظر أي نسخ أو استخراج أو نشر أو تعديل أو إعادة استخدام دون إذن كتابي مسبق من Panorama Grup.'] },
      { title: 'السرية', paragraphs: ['قد يرسل المستخدم معلومات سرية ضمن طلبه. يعتمد Bosphoras منطق السرية وتقييد الوصول إلى المعلومات الحساسة.', 'يتعهد المستخدم أيضاً بعدم إفشاء المعلومات أو العروض أو الاتصالات أو الشروط أو التعريفات أو المستندات السرية المقدمة من Bosphoras دون موافقة مسبقة.'] },
      { title: 'المسؤولية', paragraphs: ['المستخدم مسؤول عن استخدامه للموقع وعن المعلومات التي يرسلها وعن القرارات المتخذة بناءً على المحتوى.', 'تسعى Panorama Grup إلى ضمان توفر الموقع وموثوقيته دون ضمان خلوه من الأخطاء أو الانقطاعات أو المعلومات القديمة.', 'لا تتحمل Panorama Grup مسؤولية القرارات المتخذة دون تحقق مهني أو الأضرار غير المباشرة أو ضياع الفرص أو النتائج التي تعتمد على الغير.'] },
      { title: 'التعديلات والقانون المطبق', paragraphs: ['يجوز لـ Panorama Grup تعديل هذه الشروط في أي وقت لتكييفها مع تطور الموقع أو الخدمات أو التشريعات أو التنظيم الداخلي.', 'تخضع هذه الشروط للقانون الفرنسي، مع مراعاة القواعد الإلزامية المطبقة حسب إقامة المستخدم أو مكان تنفيذ الخدمات.', 'في حال وجود صعوبة، تسعى الأطراف أولاً إلى حل ودي.'] },
      { title: 'المراجعة القانونية', paragraphs: ['تشكل هذه الشروط قاعدة عمل قانونية لموقع Bosphoras. يوصى بمراجعتها من قبل مختص قانوني قبل النشر النهائي أو الاستخدام التعاقدي.'] },
    ],
  },
};

function isSupportedLocale(value: string): value is SupportedLocale {
  return supportedLocales.includes(value as SupportedLocale);
}

interface PageProps {
  params: { locale: string };
}

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!isSupportedLocale(params.locale)) return {};
  const c = copy[params.locale];
  return buildMetadata({ locale: params.locale, path: '/cgu', title: c.title, description: c.description });
}

export default function TermsOfUsePage({ params }: PageProps) {
  if (!isSupportedLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = copy[locale];

  return (
    <LegalContentPage
      locale={locale as Locale}
      currentPath={c.path}
      eyebrow={c.eyebrow}
      title={c.h1}
      intro={c.intro}
      updatedAt={c.updatedAt}
      sections={c.sections}
    />
  );
}
