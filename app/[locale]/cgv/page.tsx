import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { LegalContentPage, type LegalSection } from '@/components/LegalContentPage';

type SupportedLocale = 'en' | 'ru' | 'ar';
const supportedLocales: SupportedLocale[] = ['en', 'ru', 'ar'];

type PageCopy = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
};

const company = {
  en: ['Bosphoras is a brand operated by Panorama Grup.', 'Address: 88 Avenue des Ternes, 75017 Paris, France.', 'SIRET: 80962988400036.', 'Telephone: +33 1 88 84 22 22.', 'Email: contact@bosphoras.com.'],
  ru: ['Bosphoras — бренд, эксплуатируемый Panorama Grup.', 'Адрес: 88 Avenue des Ternes, 75017 Paris, France.', 'SIRET: 80962988400036.', 'Телефон: +33 1 88 84 22 22.', 'Email: contact@bosphoras.com.'],
  ar: ['Bosphoras علامة تجارية تديرها Panorama Grup.', 'العنوان: 88 Avenue des Ternes, 75017 Paris, France.', 'SIRET: 80962988400036.', 'الهاتف: +33 1 88 84 22 22.', 'البريد الإلكتروني: contact@bosphoras.com.'],
};

const copy: Record<SupportedLocale, PageCopy> = {
  en: {
    path: '/en/cgv',
    title: 'Terms of Sale | Bosphoras',
    description: 'Terms of sale for Bosphoras private desk, coordination, concierge, support and introduction services operated by Panorama Grup.',
    eyebrow: 'Bosphoras · Terms of sale',
    h1: 'Terms of Sale',
    intro: 'Commercial terms applicable to Bosphoras private desk, coordination, concierge, support and introduction services.',
    updatedAt: '28 April 2026',
    sections: [
      { title: 'Purpose', paragraphs: ['These Terms of Sale govern the conditions under which Panorama Grup, operating the Bosphoras brand, may provide private desk, coordination, concierge, operational support and introduction services.', 'They apply to services performed in France, Turkey or internationally, unless specific terms, quotation, agreement, engagement letter or written conditions are agreed with the client.'] },
      { title: 'Service provider identification', paragraphs: company.en },
      { title: 'Nature of services', paragraphs: ['Bosphoras acts as a private desk, coordinator, facilitator, concierge, operational advisor and relationship introducer depending on the client request.', 'Services may relate to relocation to Turkey, company setup, accounting, tax, insurance, healthcare, real estate, offices, VIP transport, hotels, events, lifestyle services and private access.', 'Bosphoras does not replace regulated professions and does not provide legal, tax, medical, financial, banking, insurance or regulated real estate advice where such advice belongs to authorized professionals.'] },
      { title: 'Quotation, proposal and acceptance', paragraphs: ['Any service may be subject to a quotation, commercial proposal, engagement letter, purchase order, email acceptance or specific terms depending on the nature and urgency of the request.', 'Acceptance may result from signature, written agreement, payment, deposit or any clear confirmation by the client.', 'No complex, sensitive or binding service shall be considered definitively accepted without written validation of scope, price, deadline, responsibilities and execution conditions.'] },
      { title: 'Fees and remuneration', paragraphs: ['Bosphoras services may be remunerated through fixed fees, packages, subscriptions, coordination fees, concierge fees, success fees, introduction commissions or a combination of several remuneration methods.', 'Prices may vary according to complexity, urgency, confidentiality, level of service requested, number of participants, city involved, country of residence and expenses incurred.', 'Unless otherwise stated, third-party costs, administrative fees and fees of lawyers, accountants, doctors, insurers, hotels, transport providers, real estate agents or other providers are not included in Bosphoras fees.'] },
      { title: 'Commissions and introductions', paragraphs: ['Bosphoras may receive a commission, business introduction fee, margin or coordination remuneration when introducing a provider or partner.', 'When necessary or appropriate, economic arrangements may be specified to the client or included in the commercial proposal.', 'Receiving a commission does not alter Bosphoras’ obligation to select participants seriously, prudently and consistently with the client’s interest.'] },
      { title: 'Payment and deposits', paragraphs: ['Payment terms are specified in the quotation, proposal, invoice or applicable written agreement.', 'Bosphoras may request a deposit, advance payment, retainer, full payment or guarantee before starting a mission or incurring expenses for the client.', 'Late payment may lead to suspension of the mission, suspension of certain steps or immediate payment of outstanding sums, without prejudice to Panorama Grup’s other rights.'] },
      { title: 'External costs and advances', paragraphs: ['Some services may require external costs such as transport, hotels, reservations, translations, formalities, deposits, professional fees, administrative fees, bank charges or third-party provider costs.', 'These costs may be paid directly by the client to the relevant provider or advanced by Bosphoras subject to prior written agreement.', 'Any advance by Bosphoras may be conditional upon a prior retainer paid by the client.'] },
      { title: 'Changes, cancellation and interruption', paragraphs: ['Any change in scope, urgency, number of people supported, destination, participants, service level or objectives may lead to revised fees and deadlines.', 'Additional requests not initially planned may require a supplementary quotation or separate written validation.', 'Cancellation or postponement conditions depend on the nature of the service, expenses already incurred and terms imposed by third-party providers.', 'Bosphoras may interrupt a mission in case of non-payment, lack of cooperation, false information, legal risk, inappropriate conduct, unlawful request or safety risk.'] },
      { title: 'Third-party providers', paragraphs: ['Third-party professionals and providers remain solely responsible for their services, advice, authorizations, insurance, terms, quotations, deadlines and regulatory obligations.', 'Bosphoras may coordinate, recommend, organize or facilitate the relationship without guaranteeing a third party’s final result or replacing its professional obligations.', 'The client must read, understand and accept each third party’s own terms before committing.'] },
      { title: 'No guarantee of result', paragraphs: ['Bosphoras undertakes to use reasonable, proportionate and professional efforts within the accepted mission.', 'Bosphoras does not guarantee any administrative, tax, legal, medical, financial, banking, real estate, consular, immigration, patrimonial or commercial result.', 'Results may depend on third parties, authorities, local rules, deadlines, documents, professional decisions, market conditions or elements outside Bosphoras’ control.'] },
      { title: 'Client obligations', paragraphs: ['The client undertakes to provide accurate, complete and up-to-date information and all documents required to analyze and execute the request.', 'The client undertakes to cooperate in good faith, respond within reasonable deadlines and inform Bosphoras of any important change in situation.', 'The client remains responsible for final decisions and for validating information with authorized professionals.'] },
      { title: 'Confidentiality and liability', paragraphs: ['Information exchanged during a mission may be confidential, sensitive, personal, patrimonial, tax, family or professional.', 'Bosphoras applies reinforced confidentiality. The client also undertakes not to disclose contacts, terms, documents, proposals, introductions or confidential information shared by Bosphoras without authorization.', 'Panorama Grup’s liability may only arise in case of proven fault directly attributable to Bosphoras in the performance of its mission.', 'Bosphoras cannot be held liable for client decisions, third-party acts or omissions, administrative decisions, regulatory changes, refusals, delays or unavailability attributable to third parties.'] },
      { title: 'Governing law and legal validation', paragraphs: ['These Terms of Sale are governed by French law, subject to mandatory rules applicable depending on the client’s status, country of residence or place of performance.', 'In case of dispute, the parties will first seek an amicable solution.', 'These terms are a legal working basis for the Bosphoras website. Review by a legal professional is recommended before definitive publication and contractual use.'] },
    ],
  },
  ru: {
    path: '/ru/cgv',
    title: 'Условия продажи | Bosphoras',
    description: 'Условия продажи услуг Bosphoras: частный офис, координация, concierge, сопровождение и интродукции, бренд Panorama Grup.',
    eyebrow: 'Bosphoras · Условия продажи',
    h1: 'Условия продажи',
    intro: 'Коммерческие условия, применимые к услугам Bosphoras: частный офис, координация, concierge, сопровождение и установление контактов.',
    updatedAt: '28 апреля 2026',
    sections: [
      { title: 'Назначение условий', paragraphs: ['Настоящие Условия продажи определяют условия, на которых Panorama Grup, эксплуатирующая бренд Bosphoras, может предоставлять услуги частного офиса, координации, concierge, операционного сопровождения и установления контактов.', 'Они применяются к услугам во Франции, Турции или международно, если иное не предусмотрено специальными условиями, сметой, договором, письмом о миссии или письменным соглашением с клиентом.'] },
      { title: 'Идентификация поставщика услуг', paragraphs: company.ru },
      { title: 'Характер услуг', paragraphs: ['Bosphoras действует как частный офис, координатор, фасилитатор, concierge, операционный советник и посредник по установлению контактов в зависимости от запроса клиента.', 'Услуги могут касаться переезда в Турцию, создания компании, бухгалтерии, налогов, страхования, здоровья, недвижимости, офисов, VIP-транспорта, отелей, мероприятий, lifestyle-услуг и private access.', 'Bosphoras не заменяет регулируемые профессии и не предоставляет юридические, налоговые, медицинские, финансовые, банковские, страховые или регулируемые недвижимые консультации, если они относятся к компетенции уполномоченных специалистов.'] },
      { title: 'Смета, предложение и акцепт', paragraphs: ['Любая услуга может оформляться сметой, коммерческим предложением, письмом о миссии, заказом, email-подтверждением или специальными условиями в зависимости от характера и срочности запроса.', 'Акцепт может следовать из подписи, письменного согласия, платежа, аванса или любого ясного подтверждения клиента.', 'Сложная, чувствительная или обязывающая услуга не считается окончательно принятой без письменного подтверждения существенных элементов: объема, цены, сроков, ответственности и условий исполнения.'] },
      { title: 'Гонорары и вознаграждение', paragraphs: ['Услуги Bosphoras могут оплачиваться фиксированными гонорарами, пакетами, подпиской, координационными сборами, concierge-сборами, success fee, комиссией за интродукцию или комбинацией нескольких моделей.', 'Цены могут меняться в зависимости от сложности, срочности, конфиденциальности, уровня сервиса, числа участников, города, страны проживания клиента и понесенных расходов.', 'Если не указано иное, расходы третьих лиц, административные сборы, гонорары юристов, бухгалтеров, врачей, страховщиков, отелей, перевозчиков, агентов недвижимости и других поставщиков не включены в гонорары Bosphoras.'] },
      { title: 'Комиссии и интродукции', paragraphs: ['Bosphoras может получать комиссию, вознаграждение за привлечение, маржу или координационное вознаграждение при знакомстве с поставщиком или партнером.', 'При необходимости или целесообразности экономические условия могут быть указаны клиенту или включены в коммерческое предложение.', 'Получение комиссии не изменяет обязанность Bosphoras выбирать участников серьезно, осторожно и в соответствии с интересами клиента.'] },
      { title: 'Оплата и аванс', paragraphs: ['Условия оплаты указываются в смете, предложении, счете или применимом письменном соглашении.', 'Bosphoras может запросить аванс, предварительную оплату, retainer, полную оплату или гарантию до начала миссии или несения расходов за клиента.', 'Просрочка оплаты может привести к приостановке миссии, отдельных действий или требованию немедленной оплаты причитающихся сумм без ущерба для иных прав Panorama Grup.'] },
      { title: 'Внешние расходы и изменения', paragraphs: ['Некоторые услуги могут требовать внешних расходов: транспорт, отели, бронирования, переводы, формальности, депозиты, профессиональные гонорары, административные сборы, банковские комиссии или расходы третьих поставщиков.', 'Эти расходы могут оплачиваться клиентом напрямую соответствующему поставщику или авансироваться Bosphoras при наличии предварительного письменного соглашения.', 'Любое изменение объема, срочности, числа сопровождаемых лиц, направления, участников, уровня сервиса или целей может повлечь пересмотр гонораров и сроков.'] },
      { title: 'Отмена, перенос и прекращение', paragraphs: ['Условия отмены или переноса зависят от характера услуги, уже понесенных расходов и условий, установленных третьими поставщиками.', 'Суммы за уже выполненные услуги, мобилизованное время, понесенные расходы, невозвратные бронирования или гонорары третьих лиц могут оставаться подлежащими оплате.', 'Bosphoras может прекратить миссию при неоплате, отсутствии сотрудничества, ложной информации, юридическом риске, недопустимом поведении, незаконном запросе или угрозе безопасности участников.'] },
      { title: 'Третьи поставщики и отсутствие гарантии результата', paragraphs: ['Третьи специалисты и поставщики самостоятельно отвечают за свои услуги, советы, разрешения, страхование, условия, сметы, сроки и нормативные обязанности.', 'Bosphoras может координировать, рекомендовать, организовывать или облегчать отношения, не гарантируя конечный результат третьего лица и не заменяя его профессиональные обязанности.', 'Bosphoras обязуется применять разумные, соразмерные и профессиональные средства в рамках принятой миссии, но не гарантирует административный, налоговый, юридический, медицинский, финансовый, банковский, недвижимый, консульский, миграционный, имущественный или коммерческий результат.'] },
      { title: 'Обязанности клиента', paragraphs: ['Клиент обязуется передавать точную, полную и актуальную информацию, а также документы, необходимые для анализа и исполнения запроса.', 'Клиент обязуется сотрудничать добросовестно, отвечать в разумные сроки и сообщать Bosphoras о любом существенном изменении ситуации.', 'Клиент несет ответственность за свои окончательные решения и за проверку информации у уполномоченных специалистов.'] },
      { title: 'Конфиденциальность и ответственность', paragraphs: ['Информация, передаваемая в рамках миссии, может быть конфиденциальной, чувствительной, личной, имущественной, налоговой, семейной или профессиональной.', 'Bosphoras применяет усиленную конфиденциальность. Клиент также обязуется не раскрывать без разрешения контакты, условия, документы, предложения, интродукции или конфиденциальные сведения, переданные Bosphoras.', 'Ответственность Panorama Grup может наступить только при доказанной ошибке, непосредственно относимой к Bosphoras при исполнении миссии.', 'Bosphoras не отвечает за решения клиента, действия или бездействие третьих поставщиков, административные решения, изменения законодательства, отказы, задержки или недоступность, относимые к третьим лицам.'] },
      { title: 'Применимое право и юридическая проверка', paragraphs: ['Настоящие Условия продажи регулируются французским правом с учетом обязательных норм, применимых в зависимости от статуса клиента, страны проживания или места оказания услуги.', 'В случае спора стороны сначала стремятся к мирному урегулированию.', 'Настоящие условия являются юридической рабочей базой для сайта Bosphoras. Перед окончательной публикацией и договорным использованием рекомендуется проверка юристом.'] },
    ],
  },
  ar: {
    path: '/ar/cgv',
    title: 'شروط البيع | Bosphoras',
    description: 'شروط بيع خدمات Bosphoras: المكتب الخاص، التنسيق، الكونسيرج، المرافقة والتعارف المهني، علامة Panorama Grup.',
    eyebrow: 'Bosphoras · شروط البيع',
    h1: 'شروط البيع',
    intro: 'الشروط التجارية المطبقة على خدمات Bosphoras للمكتب الخاص والتنسيق والكونسيرج والمرافقة والتعارف المهني.',
    updatedAt: '28 أبريل 2026',
    sections: [
      { title: 'الغرض', paragraphs: ['تنظم شروط البيع هذه الشروط التي يمكن بموجبها لـ Panorama Grup، المشغلة لعلامة Bosphoras، تقديم خدمات المكتب الخاص والتنسيق والكونسيرج والمرافقة التشغيلية والتعارف المهني.', 'تنطبق على الخدمات المقدمة في فرنسا أو تركيا أو دولياً، ما لم يتم الاتفاق على شروط خاصة أو عرض سعر أو عقد أو خطاب مهمة أو اتفاق مكتوب مع العميل.'] },
      { title: 'هوية مقدم الخدمة', paragraphs: company.ar },
      { title: 'طبيعة الخدمات', paragraphs: ['يعمل Bosphoras كمكتب خاص ومنسق وميسر وكونسيرج ومستشار تشغيلي ووسيط للتعارف بحسب طبيعة طلب العميل.', 'قد تتعلق الخدمات بالاستقرار في تركيا، تأسيس الشركات، المحاسبة، الضرائب، التأمين، الصحة، العقارات، المكاتب، النقل الفاخر، الفنادق، الفعاليات، خدمات نمط الحياة والوصول الخاص.', 'لا يحل Bosphoras محل المهن المنظمة ولا يقدم نصائح قانونية أو ضريبية أو طبية أو مالية أو مصرفية أو تأمينية أو عقارية منظمة عندما تكون من اختصاص مهنيين مؤهلين.'] },
      { title: 'العرض والقبول', paragraphs: ['قد تخضع كل خدمة لعرض سعر أو اقتراح تجاري أو خطاب مهمة أو أمر شراء أو موافقة عبر البريد الإلكتروني أو شروط خاصة حسب طبيعة الطلب ودرجة الاستعجال.', 'قد ينتج القبول عن توقيع أو موافقة مكتوبة أو دفع أو عربون أو أي تأكيد واضح من العميل.', 'لا تعتبر أي خدمة معقدة أو حساسة أو ملزمة مقبولة نهائياً دون تحقق كتابي من النطاق والسعر والمدة والمسؤوليات وشروط التنفيذ.'] },
      { title: 'الأتعاب والمقابل', paragraphs: ['يمكن أن تكون أتعاب Bosphoras على شكل أتعاب ثابتة أو باقات أو اشتراك أو رسوم تنسيق أو رسوم كونسيرج أو أتعاب نجاح أو عمولة تعارف أو مزيج من عدة نماذج.', 'قد تختلف الأسعار حسب التعقيد والاستعجال والسرية ومستوى الخدمة وعدد المتدخلين والمدينة المعنية وبلد إقامة العميل والمصاريف المتكبدة.', 'ما لم يذكر خلاف ذلك، لا تشمل أتعاب Bosphoras مصاريف الغير أو الرسوم الإدارية أو أتعاب المحامين أو المحاسبين أو الأطباء أو شركات التأمين أو الفنادق أو الناقلين أو وكلاء العقارات أو غيرهم.'] },
      { title: 'العمولات والتعارف', paragraphs: ['قد يتلقى Bosphoras عمولة أو مقابل جلب أعمال أو هامشاً أو مقابل تنسيق عند التعريف بمقدم خدمة أو شريك.', 'عند الضرورة أو الملاءمة، يمكن توضيح الشروط الاقتصادية للعميل أو إدراجها في الاقتراح التجاري.', 'لا يغيّر تلقي العمولة التزام Bosphoras باختيار المتدخلين بجدية وحذر وبما يتماشى مع مصلحة العميل.'] },
      { title: 'الدفع والعربون', paragraphs: ['تحدد شروط الدفع في عرض السعر أو الاقتراح التجاري أو الفاتورة أو الاتفاق المكتوب المطبق.', 'يمكن لـ Bosphoras طلب عربون أو دفع مسبق أو provision أو دفع كامل أو ضمان قبل بدء المهمة أو تحمل مصاريف لحساب العميل.', 'قد يؤدي التأخر في الدفع إلى تعليق المهمة أو بعض الإجراءات أو استحقاق المبالغ المستحقة دون الإخلال بحقوق Panorama Grup الأخرى.'] },
      { title: 'المصاريف الخارجية والتعديلات', paragraphs: ['قد تتطلب بعض الخدمات مصاريف خارجية مثل النقل والفنادق والحجوزات والترجمة والإجراءات والودائع وأتعاب المهنيين والرسوم الإدارية والبنكية ومصاريف مقدمي الخدمات.', 'يمكن دفع هذه المصاريف مباشرة من العميل إلى مقدم الخدمة أو دفعها مقدماً من Bosphoras بشرط اتفاق كتابي مسبق.', 'أي تعديل في النطاق أو الاستعجال أو عدد الأشخاص أو الوجهة أو المتدخلين أو مستوى الخدمة أو الأهداف قد يؤدي إلى مراجعة الأتعاب والآجال.'] },
      { title: 'الإلغاء والتأجيل والإيقاف', paragraphs: ['تعتمد شروط الإلغاء أو التأجيل على طبيعة الخدمة والمصاريف المتكبدة والشروط التي يفرضها مقدمو الخدمات الخارجيون.', 'قد تبقى مستحقة المبالغ المتعلقة بالخدمات المنجزة أو الوقت المخصص أو المصاريف المدفوعة أو الحجوزات غير القابلة للاسترداد أو أتعاب الغير.', 'يجوز لـ Bosphoras إيقاف المهمة في حالة عدم الدفع أو غياب التعاون أو المعلومات الكاذبة أو المخاطر القانونية أو السلوك غير اللائق أو الطلب غير المشروع أو المساس بأمن المتدخلين.'] },
      { title: 'مقدمو الخدمات الخارجيون وعدم ضمان النتيجة', paragraphs: ['يبقى المهنيون ومقدمو الخدمات الخارجيون وحدهم مسؤولين عن خدماتهم ونصائحهم وتراخيصهم وتأميناتهم وشروطهم وعروضهم وآجالهم والتزاماتهم التنظيمية.', 'يمكن لـ Bosphoras التنسيق أو التوصية أو التنظيم أو تسهيل العلاقة دون ضمان النتيجة النهائية للغير أو الحلول محل التزاماته المهنية.', 'يلتزم Bosphoras ببذل وسائل معقولة ومتناسبة ومهنية ضمن المهمة المقبولة، لكنه لا يضمن أي نتيجة إدارية أو ضريبية أو قانونية أو طبية أو مالية أو مصرفية أو عقارية أو قنصلية أو هجرية أو تجارية.'] },
      { title: 'التزامات العميل', paragraphs: ['يتعهد العميل بتقديم معلومات صحيحة وكاملة ومحدثة، وكذلك المستندات اللازمة لتحليل وتنفيذ طلبه.', 'يتعهد العميل بالتعاون بحسن نية والرد ضمن آجال معقولة وإبلاغ Bosphoras بأي تغيير مهم في وضعه.', 'يبقى العميل مسؤولاً عن قراراته النهائية وعن التحقق من المعلومات لدى المهنيين المؤهلين.'] },
      { title: 'السرية والمسؤولية', paragraphs: ['قد تكون المعلومات المتبادلة ضمن المهمة سرية أو حساسة أو شخصية أو عائلية أو مهنية أو ضريبية أو متعلقة بالثروة.', 'يعتمد Bosphoras سرية معززة، ويتعهد العميل أيضاً بعدم إفشاء الاتصالات أو الشروط أو المستندات أو العروض أو التعارفات أو المعلومات السرية المقدمة من Bosphoras دون إذن.', 'لا تقوم مسؤولية Panorama Grup إلا في حال خطأ مثبت ومنسوب مباشرة إلى Bosphoras في تنفيذ المهمة.', 'لا يكون Bosphoras مسؤولاً عن قرارات العميل أو أفعال أو إغفالات مقدمي الخدمات الخارجيين أو القرارات الإدارية أو التغييرات التنظيمية أو الرفض أو التأخير أو عدم التوفر المنسوب للغير.'] },
      { title: 'القانون المطبق والمراجعة القانونية', paragraphs: ['تخضع شروط البيع هذه للقانون الفرنسي، مع مراعاة القواعد الإلزامية المطبقة حسب صفة العميل أو بلد إقامته أو مكان تنفيذ الخدمة.', 'في حال النزاع، تسعى الأطراف أولاً إلى حل ودي.', 'تشكل هذه الشروط قاعدة عمل قانونية لموقع Bosphoras. يوصى بمراجعتها من قبل مختص قانوني قبل النشر النهائي والاستخدام التعاقدي.'] },
    ],
  },
};

function isSupportedLocale(value: string): value is SupportedLocale {
  return supportedLocales.includes(value as SupportedLocale);
}

interface PageProps { params: { locale: string } }

export function generateStaticParams() { return supportedLocales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!isSupportedLocale(params.locale)) return {};
  const c = copy[params.locale];
  return buildMetadata({ locale: params.locale, path: '/cgv', title: c.title, description: c.description });
}

export default function TermsOfSalePage({ params }: PageProps) {
  if (!isSupportedLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = copy[locale];

  return <LegalContentPage locale={locale as Locale} currentPath={c.path} eyebrow={c.eyebrow} title={c.h1} intro={c.intro} updatedAt={c.updatedAt} sections={c.sections} />;
}
