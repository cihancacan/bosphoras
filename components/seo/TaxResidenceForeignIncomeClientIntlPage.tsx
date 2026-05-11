import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, FileText, Landmark, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import type { Locale } from '@/lib/i18n';

type SupportedLocale = Extract<Locale, 'en' | 'ru' | 'ar'>;

const paths: Record<SupportedLocale, string> = {
  en: '/en/turkey-tax-residence-foreign-income',
  ru: '/ru/nalogovaya-rezidentsiya-turtsiya-inostrannye-dohody',
  ar: '/ar/turkey-tax-residence-foreign-income',
};

const assessmentHref: Record<SupportedLocale, string> = {
  en: '/en/private-assessment',
  ru: '/ru/chastnaya-konsultatsiya',
  ar: '/ar/تقييم-خاص',
};

type PageContent = {
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  hero: string;
  cta: string;
  asideTitle: string;
  finalTitle: string;
  finalText: string;
  faqTitle: string;
  checklist: string[];
  sections: Array<[string, string]>;
  faq: Array<[string, string]>;
};

const content: Record<SupportedLocale, PageContent> = {
  en: {
    title: 'Turkey tax residence and foreign income: what investors should verify before relocating',
    metaTitle: 'Turkey tax residence and foreign income: investor guide 2026',
    description: 'Understand Turkish tax residence, foreign income, the potential 20-year exemption, Turkish-source income and the checks investors should make before relocating.',
    eyebrow: 'International tax · Turkey',
    hero: 'Turkey is becoming increasingly attractive for entrepreneurs, investors and international families. Before relocating, one question must be reviewed carefully: how will your foreign income be treated if you become a Turkish tax resident?',
    cta: 'Request a private assessment',
    asideTitle: 'Before deciding',
    finalTitle: 'A tax relocation should be prepared, not improvised',
    finalText: 'Before transferring your residence, family, income or assets, Bosphoras can organize a private review of your situation: current residence, foreign income, companies, banking, real estate, insurance, compliance and your relocation strategy in Turkey.',
    faqTitle: 'Frequently asked questions',
    checklist: ['Your current tax residence and exit risks', 'Your Turkish tax history over the previous three years', 'The exact nature of your foreign income', 'Any Turkish-source income you keep or create', 'Applicable tax treaties', 'Your companies, bank accounts, properties and financial assets', 'Your family situation and real future place of life', 'Documents needed to support your relocation'],
    sections: [
      ['Why this question matters before moving to Turkey', 'Relocating to Turkey can be a strong decision for an entrepreneur, investor, wealth family or expatriate. But before moving your residence, income or part of your assets, you need to understand one essential point: taxation rarely depends on one single rule. It depends on your real place of life, family, companies, bank accounts, income, former country of residence and applicable tax treaties. Turkey can become a highly attractive base only if your situation is structured properly from the beginning.'],
      ['What Turkish tax residence really means', 'Tax residence is not simply a residence permit, an apartment in Istanbul or a Turkish bank account. It is a global factual situation. Authorities look at where you actually live, where your home is located, where you make important decisions, where you earn income and where your economic interests are centered. In Turkey, the general principle is that a tax resident may be taxed on worldwide income, while a non-resident is mainly taxed on certain Turkish-source income. This is why no relocation should be based only on a headline or simplified promise.'],
      ['What the new exemption could change', 'Turkey wants to attract more investors, entrepreneurs, talent and families living abroad. The announced measure could allow qualifying new Turkish tax residents to benefit from a long-term exemption on certain foreign-source income. This may make Turkey much more competitive compared with destinations such as Dubai, Italy, Monaco, Portugal or Cyprus. But it should not be understood as a full exemption on every type of income: Turkish-source income would still need separate review and may remain taxable in Turkey.'],
      ['The previous three-year condition', 'One of the most important points is the condition linked to the three calendar years before relocation. Based on the announced framework, the regime is aimed at people who have not been Turkish tax residents or Turkish taxpayers during that period. Before relocating, you should review your history carefully: did you recently live in Turkey, file Turkish tax returns, own income-producing Turkish real estate, run a Turkish company, have a local activity or hold any local tax obligation? This prevents building a relocation plan on an uncertain assumption.'],
      ['Foreign income is not one single category', 'The expression foreign income sounds simple, but it covers very different realities. Foreign dividends, capital gains, pensions, rental income, consulting fees, bank interest, holding distributions or the sale of a company may not be treated in the same way. The country where the income is generated may keep taxing rights. Withholding tax may apply. A tax treaty may change the outcome. This is precisely why a personalized review is essential.'],
      ['Foreign dividends: a key issue for entrepreneurs', 'If you own a company in France, the United Kingdom, the UAE, Kazakhstan, Switzerland, the United States or another country, dividends are a central topic. You need to review where the company is effectively managed, where it generates profits, whether withholding tax applies, which treaty is relevant and when dividends are distributed. For a founder or shareholder, the relocation calendar can have a major impact on the tax treatment.'],
      ['Foreign capital gains: timing matters', 'An investor may sell shares, company interests, a financial portfolio, a property outside Turkey or a holding participation. The timing of the sale is often decisive. A gain realized before relocation, during the transition period or after becoming a Turkish tax resident may not create the same consequences. Purchase price, sale price, source country, custodian bank, treaty position and proof of residence should all be documented.'],
      ['Professional income, consultants and digital nomads', 'A consultant, executive, freelancer, developer, SaaS entrepreneur or digital nomad may work from Turkey for foreign clients. This must be reviewed carefully. You need to know where the work is actually performed, where clients are located, where the company is registered, where contracts are signed, where payments arrive and where effective management sits. Income paid by a foreign client is not automatically exempt foreign income if the activity is performed from Turkey in a way that creates local tax consequences.'],
      ['Foreign real estate income and pensions', 'Many investors keep real estate in their former country of residence. In many cases, the country where the property is located keeps taxing rights over rent or capital gains. Foreign pensions also require caution: public pensions, private pensions, occupational pensions and social benefits may follow different treaty rules. For retirees or families considering Istanbul, Bodrum, Antalya or Izmir, this analysis is essential.'],
      ['What may remain taxable in Turkey', 'Even if the final regime is favorable, foreign income and Turkish-source income must not be confused. A salary paid by a Turkish company, local activity, fees billed to a Turkish client, rent from property located in Turkey, dividends from a Turkish company or a gain on a Turkish asset may remain taxable in Turkey. A proper strategy separates foreign income, Turkish income and mixed situations.'],
      ['Your former country may still consider you tax resident', 'Leaving a country is not always enough to leave its tax system. If your family remains there, if your companies are still managed from there, if your main assets remain there, if you still spend significant time there or if your economic center remains there, the former tax authority may challenge your departure. This is why residence, family, assets, companies, management, days of presence and tax treaties must be reviewed together.'],
      ['Examples of profiles concerned', 'An entrepreneur with a foreign company should review the company, clients, effective management and dividends. An investor with a financial portfolio should review dividends, interest, capital gains, custodian banks and source countries. A wealth family should include succession, gifts, life insurance, real estate, family companies and the residence of each member. A digital nomad should review the real source of the activity, contracts, company, bank and requalification risk.'],
      ['How Bosphoras can support the process', 'Bosphoras does not replace a tax lawyer and does not promise an automatic exemption. Its role is to organize a serious private review: understand your situation, identify sensitive points, prepare the right questions and coordinate tax advisors, lawyers, banks, accountants, insurance, real estate and relocation partners in Turkey. The goal is to determine whether Turkey can become a compliant and useful base for you, your family and your assets.'],
    ],
    faq: [
      ['Does Turkey tax residents on worldwide income?', 'In principle, a Turkish tax resident may be taxed on worldwide income. The announced regime could create an exception for certain foreign income of new residents, but the final conditions must be reviewed carefully.'],
      ['Is the 20-year exemption automatic?', 'No. It would depend on precise criteria, including the previous three-year tax history, the type of income and the taxpayer’s personal situation.'],
      ['Would income earned in Turkey be exempt?', 'No. Foreign income and Turkish-source income must be separated. Income linked to a Turkish activity, company, property or client requires separate review.'],
      ['Can I move to Turkey and stop paying tax in my former country?', 'Not automatically. Your former country may still claim tax residence depending on home, family, companies, assets, economic interests, days of presence and treaties.'],
      ['Can foreign dividends be covered?', 'Potentially, if the final text covers this income and the profile qualifies. Source country, withholding tax, treaty and timing must also be checked.'],
      ['Can foreign capital gains be covered?', 'Potentially, but the answer depends on the final law, the location of the asset, sale date, asset type and your tax residence at the time of the transaction.'],
      ['Why work with Bosphoras?', 'Because tax relocation is not only about one tax rule. Residence, banking, insurance, property, family, compliance, tax advisors and lawyers must be coordinated before taking a decision.'],
    ],
  },
  ru: {
    title: 'Налоговая резиденция Турции и иностранные доходы: что проверить инвестору до переезда',
    metaTitle: 'Налоговая резиденция Турции и иностранные доходы: гид для инвесторов 2026',
    description: 'Как работает налоговая резиденция Турции, иностранные доходы, потенциальное освобождение на 20 лет, турецкие доходы и что проверить инвестору перед переездом.',
    eyebrow: 'Международные налоги · Турция',
    hero: 'Турция становится все более привлекательной для предпринимателей, инвесторов и международных семей. Но перед переездом нужно серьезно ответить на главный вопрос: как будут рассматриваться ваши иностранные доходы, если вы станете налоговым резидентом Турции?',
    cta: 'Запросить частный анализ',
    asideTitle: 'Перед решением',
    finalTitle: 'Налоговый переезд нужно готовить, а не импровизировать',
    finalText: 'До переноса резиденции, семьи, доходов или активов Bosphoras может организовать частный анализ вашей ситуации: текущая резиденция, иностранные доходы, компании, банки, недвижимость, страхование, compliance и стратегия переезда в Турцию.',
    faqTitle: 'Частые вопросы',
    checklist: ['Текущая налоговая резиденция и риски выхода', 'Налоговая история в Турции за предыдущие три года', 'Точная природа иностранных доходов', 'Возможные доходы из турецкого источника', 'Применимые налоговые соглашения', 'Компании, банковские счета, недвижимость и финансовые активы', 'Семейная ситуация и реальное будущее место жизни', 'Документы, необходимые для подтверждения переезда'],
    sections: [
      ['Почему этот вопрос важен до переезда в Турцию', 'Переезд в Турцию может быть сильным решением для предпринимателя, инвестора, состоятельной семьи или экспата. Но до переноса резиденции, доходов или части активов нужно понимать главное: налогообложение редко зависит от одного критерия. Оно зависит от реального места жизни, семьи, компаний, банковских счетов, доходов, прежней страны резиденции и применимых налоговых соглашений. Турция может стать привлекательной базой только если ситуация структурирована правильно с самого начала.'],
      ['Что на самом деле означает налоговая резиденция Турции', 'Налоговая резиденция — это не просто ВНЖ, квартира в Стамбуле или турецкий банковский счет. Это фактическая совокупность обстоятельств. Важны место реального проживания, дом, семья, экономические интересы, место принятия важных решений, компании, счета, активы и источники дохода. В Турции общий принцип заключается в том, что налоговый резидент может облагаться по мировому доходу, а нерезидент — в основном по отдельным доходам из турецкого источника.'],
      ['Что может изменить новое освобождение', 'Турция хочет привлечь больше инвесторов, предпринимателей, талантов и семей, живущих за рубежом. Объявленная мера может дать новым квалифицированным резидентам долгосрочное освобождение по отдельным иностранным доходам. Это может усилить позиции Турции по сравнению с Дубаем, Италией, Монако, Португалией или Кипром. Но это не означает полного освобождения всех доходов: доходы из турецкого источника требуют отдельного анализа и могут оставаться облагаемыми в Турции.'],
      ['Условие предыдущих трех лет', 'Один из ключевых пунктов связан с тремя календарными годами до переезда. По заявленной логике режим ориентирован на лиц, которые не были налоговыми резидентами или налогоплательщиками в Турции в этот период. Перед переездом нужно проверить историю: жили ли вы недавно в Турции, подавали ли декларации, владели ли доходной недвижимостью, имели ли турецкую компанию, локальную деятельность или налоговые обязанности.'],
      ['Иностранные доходы не являются одной категорией', 'Выражение иностранные доходы кажется простым, но включает разные ситуации. Иностранные дивиденды, прирост капитала, пенсии, аренда, консультационные доходы, банковские проценты, распределения холдинга или продажа компании могут иметь разный режим. Страна источника может сохранять право налогообложения, может применяться удержание у источника, а налоговое соглашение может изменить результат.'],
      ['Иностранные дивиденды: ключевой вопрос для предпринимателей', 'Если у вас есть компания во Франции, Великобритании, ОАЭ, Казахстане, Швейцарии, США или другой стране, дивиденды становятся центральной темой. Нужно проверить, где компания фактически управляется, где она получает прибыль, есть ли удержание у источника, какое соглашение применяется и когда распределяются дивиденды. Для основателя или акционера календарь переезда может иметь серьезное значение.'],
      ['Иностранный прирост капитала: важен момент сделки', 'Инвестор может продавать акции, доли компаний, финансовый портфель, недвижимость за пределами Турции или участие в холдинге. Момент продажи часто определяет последствия. Сделка до переезда, во время переходного периода или после получения налоговой резиденции Турции может иметь разный результат. Цена покупки, цена продажи, страна источника, банк, соглашение и доказательства резиденции должны быть подготовлены.'],
      ['Профессиональные доходы, консультанты и digital nomads', 'Консультант, руководитель, фрилансер, разработчик, SaaS-предприниматель или digital nomad может работать из Турции на иностранных клиентов. Такая ситуация требует точного анализа. Нужно понимать, где фактически выполняется работа, где находятся клиенты, где зарегистрирована компания, где подписываются контракты, куда поступают платежи и где находится фактическое управление.'],
      ['Иностранная недвижимость и пенсии', 'Многие инвесторы сохраняют недвижимость в прежней стране. Часто страна расположения объекта сохраняет право налогообложения аренды или прироста капитала. Пенсии также требуют осторожности: государственная, частная, профессиональная пенсия или социальная выплата могут регулироваться по-разному в зависимости от налогового соглашения. Для семей, рассматривающих Стамбул, Бодрум, Анталью или Измир, это важно.'],
      ['Что может оставаться облагаемым в Турции', 'Даже если финальный режим будет благоприятным, нельзя смешивать иностранные доходы и доходы из турецкого источника. Зарплата от турецкой компании, локальная деятельность, счета турецким клиентам, аренда турецкой недвижимости, дивиденды турецкой компании или прирост по турецкому активу могут оставаться облагаемыми в Турции.'],
      ['Прежняя страна может продолжать считать вас резидентом', 'Выезд из страны не всегда означает прекращение налоговой резиденции. Если семья остается там, компании управляются оттуда, основные активы находятся там, вы проводите там много времени или центр экономических интересов остается в прежней стране, налоговая администрация может оспорить ваш выезд. Резиденцию, семью, активы, компании, управление, дни присутствия и соглашения нужно анализировать вместе.'],
      ['Какие профили чаще всего затронуты', 'Предприниматель с иностранной компанией должен проверить компанию, клиентов, фактическое управление и дивиденды. Инвестор с портфелем — дивиденды, проценты, прирост капитала, банки и страны источника. Состоятельная семья — наследование, дарение, страхование жизни, недвижимость, семейные компании и резиденцию каждого члена семьи. Digital nomad — источник деятельности, договоры, компанию, банк и риск переквалификации.'],
      ['Как Bosphoras сопровождает этот процесс', 'Bosphoras не заменяет налогового юриста и не обещает автоматическое освобождение. Наша роль — организовать серьезный частный анализ: понять вашу ситуацию, выявить чувствительные точки, подготовить правильные вопросы и координировать налоговых специалистов, юристов, банки, бухгалтеров, страхование, недвижимость и партнеров по переезду в Турцию.'],
    ],
    faq: [
      ['Облагает ли Турция резидентов по мировому доходу?', 'В принципе, налоговый резидент Турции может облагаться по мировому доходу. Объявленный режим может создать исключение для отдельных иностранных доходов новых резидентов, но финальные условия нужно проверять.'],
      ['Освобождение на 20 лет автоматическое?', 'Нет. Оно будет зависеть от точных критериев, включая налоговую историю за предыдущие три года, тип дохода и личную ситуацию налогоплательщика.'],
      ['Будут ли освобождены доходы, полученные в Турции?', 'Нет. Нужно разделять иностранные доходы и доходы из турецкого источника. Доход, связанный с турецкой деятельностью, компанией, недвижимостью или клиентом, требует отдельного анализа.'],
      ['Можно ли переехать в Турцию и перестать платить налог в прежней стране?', 'Не автоматически. Прежняя страна может сохранять права в зависимости от дома, семьи, компаний, активов, экономических интересов, дней присутствия и соглашений.'],
      ['Могут ли иностранные дивиденды быть затронуты?', 'Потенциально, если финальный текст охватит такой доход и профиль будет соответствовать условиям. Нужно также проверить страну источника, удержание у источника, соглашение и момент выплаты.'],
      ['Может ли иностранный прирост капитала быть затронут?', 'Потенциально, но ответ зависит от финального закона, местонахождения актива, даты продажи, типа актива и вашей налоговой резиденции на момент сделки.'],
      ['Почему работать с Bosphoras?', 'Потому что налоговый переезд — это не одна налоговая норма. Нужно координировать резиденцию, банк, страхование, недвижимость, семью, compliance, налоговых специалистов и юристов.'],
    ],
  },
  ar: {
    title: 'الإقامة الضريبية في تركيا والدخل الأجنبي: ما يجب على المستثمر التحقق منه قبل الانتقال',
    metaTitle: 'الإقامة الضريبية في تركيا والدخل الأجنبي: دليل المستثمرين 2026',
    description: 'فهم الإقامة الضريبية في تركيا، الدخل الأجنبي، الإعفاء المحتمل لمدة 20 سنة، الدخل من مصدر تركي وما يجب التحقق منه قبل الانتقال.',
    eyebrow: 'ضرائب دولية · تركيا',
    hero: 'أصبحت تركيا وجهة أكثر جاذبية لرواد الأعمال والمستثمرين والعائلات الدولية. قبل الانتقال، يجب دراسة سؤال أساسي بجدية: كيف سيتم التعامل مع دخلك الأجنبي إذا أصبحت مقيماً ضريبياً في تركيا؟',
    cta: 'طلب تحليل خاص',
    asideTitle: 'قبل اتخاذ القرار',
    finalTitle: 'الانتقال الضريبي يجب أن يُحضّر، لا أن يتم بعشوائية',
    finalText: 'قبل نقل إقامتك أو عائلتك أو دخلك أو أصولك، يمكن لـ Bosphoras تنظيم مراجعة خاصة لوضعك: الإقامة الحالية، الدخل الأجنبي، الشركات، البنوك، العقار، التأمين، الامتثال واستراتيجية الانتقال إلى تركيا.',
    faqTitle: 'الأسئلة الشائعة',
    checklist: ['إقامتك الضريبية الحالية ومخاطر الخروج', 'تاريخك الضريبي في تركيا خلال السنوات الثلاث السابقة', 'الطبيعة الدقيقة لدخلك الأجنبي', 'أي دخل من مصدر تركي تحتفظ به أو تنشئه', 'الاتفاقيات الضريبية المطبقة', 'شركاتك وحساباتك البنكية وعقاراتك وأصولك المالية', 'وضع عائلتك ومكان حياتك الفعلي مستقبلاً', 'الوثائق اللازمة لدعم انتقالك'],
    sections: [
      ['لماذا هذا السؤال مهم قبل الانتقال إلى تركيا', 'قد يكون الانتقال إلى تركيا قراراً قوياً لرائد أعمال أو مستثمر أو عائلة ذات ثروة أو مغترب. لكن قبل نقل الإقامة أو الدخل أو جزء من الأصول، يجب فهم نقطة أساسية: الضرائب نادراً ما تعتمد على قاعدة واحدة فقط. إنها تعتمد على مكان حياتك الفعلي، عائلتك، شركاتك، حساباتك البنكية، دخلك، بلد الإقامة السابق والاتفاقيات الضريبية المطبقة.'],
      ['ما معنى الإقامة الضريبية في تركيا فعلياً', 'الإقامة الضريبية ليست مجرد تصريح إقامة أو شقة في إسطنبول أو حساب بنكي تركي. إنها وضع واقعي شامل. تنظر السلطات إلى مكان إقامتك الفعلية، منزلك، مصالحك الاقتصادية، مكان اتخاذ القرارات المهمة، الشركات، الحسابات، الأصول ومصادر الدخل. في تركيا، المبدأ العام هو أن المقيم الضريبي قد يخضع للضريبة على الدخل العالمي، بينما غير المقيم يخضع غالباً لبعض الدخل من مصدر تركي.'],
      ['ما الذي قد يغيره الإعفاء الجديد', 'تريد تركيا جذب المزيد من المستثمرين ورواد الأعمال والمواهب والعائلات المقيمة في الخارج. قد تسمح التدابير المعلنة للمقيمين الجدد المؤهلين بالاستفادة من إعفاء طويل الأجل على بعض الدخل الأجنبي. هذا يمكن أن يجعل تركيا أكثر تنافسية مقارنة بدبي وإيطاليا وموناكو والبرتغال وقبرص. لكن ذلك لا يعني إعفاءً كاملاً لكل أنواع الدخل: الدخل من مصدر تركي يحتاج إلى مراجعة منفصلة وقد يبقى خاضعاً للضريبة في تركيا.'],
      ['شرط السنوات الثلاث السابقة', 'أحد أهم النقاط يتعلق بالسنوات التقويمية الثلاث السابقة للانتقال. وفق الإطار المعلن، يستهدف النظام الأشخاص الذين لم يكونوا مقيمين ضريبياً أو مكلفين ضريبياً في تركيا خلال تلك الفترة. قبل الانتقال، يجب مراجعة تاريخك: هل عشت مؤخراً في تركيا، قدمت تصريحات ضريبية، امتلكت عقاراً مدراً للدخل، أدرت شركة تركية، كان لديك نشاط محلي أو أي التزام ضريبي محلي؟'],
      ['الدخل الأجنبي ليس فئة واحدة', 'تعبير الدخل الأجنبي يبدو بسيطاً، لكنه يغطي حالات مختلفة جداً. الأرباح الأجنبية، المكاسب الرأسمالية، المعاشات، الإيجارات، أتعاب الاستشارة، الفوائد البنكية، توزيعات الهولدينغ أو بيع شركة قد لا تخضع لنفس المعاملة. قد يحتفظ بلد المصدر بحق ضريبي، وقد توجد ضريبة مقتطعة، وقد تغير الاتفاقية الضريبية النتيجة.'],
      ['الأرباح الأجنبية: موضوع رئيسي لرواد الأعمال', 'إذا كنت تملك شركة في فرنسا أو بريطانيا أو الإمارات أو كازاخستان أو سويسرا أو الولايات المتحدة أو بلد آخر، فإن الأرباح موضوع أساسي. يجب مراجعة مكان الإدارة الفعلية للشركة، أين تحقق الأرباح، هل توجد ضريبة مقتطعة، ما الاتفاقية المطبقة ومتى يتم توزيع الأرباح. بالنسبة لمؤسس أو مساهم، يمكن أن يؤثر جدول الانتقال كثيراً.'],
      ['المكاسب الرأسمالية الأجنبية: التوقيت مهم', 'قد يبيع المستثمر أسهماً أو حصص شركة أو محفظة مالية أو عقاراً خارج تركيا أو مشاركة في holding. توقيت البيع غالباً حاسم. المكسب المحقق قبل الانتقال أو خلال الفترة الانتقالية أو بعد أن تصبح مقيماً ضريبياً في تركيا قد لا يؤدي إلى نفس النتائج. يجب توثيق سعر الشراء والبيع وبلد المصدر والبنك والاتفاقية وإثبات الإقامة.'],
      ['الدخل المهني والاستشاريون وdigital nomads', 'قد يعمل مستشار أو مدير أو فريلانسر أو مطور أو رائد SaaS أو digital nomad من تركيا لصالح عملاء أجانب. يجب تحليل هذه الحالة بدقة. يجب معرفة أين يتم العمل فعلياً، أين يوجد العملاء، أين الشركة مسجلة، أين توقع العقود، أين تصل المدفوعات وأين توجد الإدارة الفعلية.'],
      ['الدخل العقاري والمعاشات الأجنبية', 'يحتفظ كثير من المستثمرين بعقار في بلد الإقامة السابق. في حالات كثيرة يحتفظ بلد وجود العقار بحق ضريبي على الإيجار أو المكاسب. المعاشات الأجنبية تحتاج أيضاً إلى حذر: المعاشات العامة والخاصة والمهنية والاجتماعية قد تتبع قواعد مختلفة حسب الاتفاقية الضريبية.'],
      ['ما قد يبقى خاضعاً للضريبة في تركيا', 'حتى إذا كان النظام النهائي مناسباً، لا يجب الخلط بين الدخل الأجنبي والدخل من مصدر تركي. راتب من شركة تركية، نشاط محلي، فواتير لعميل تركي، إيجار عقار في تركيا، أرباح شركة تركية أو مكسب على أصل تركي قد يبقى خاضعاً للضريبة في تركيا.'],
      ['قد يستمر بلدك السابق في اعتبارك مقيماً ضريبياً', 'مغادرة بلد لا تعني دائماً مغادرة نظامه الضريبي. إذا بقيت العائلة هناك، أو بقيت الشركات تدار من هناك، أو بقيت الأصول الرئيسية هناك، أو كنت تقضي وقتاً مهماً هناك، أو بقي مركز المصالح الاقتصادية هناك، يمكن للإدارة الضريبية السابقة أن تنازع في خروجك.'],
      ['أمثلة على الملفات المعنية', 'رائد أعمال بشركة أجنبية يجب أن يراجع الشركة والعملاء والإدارة الفعلية والأرباح. مستثمر بمحفظة مالية يجب أن يراجع الأرباح والفوائد والمكاسب والبنوك وبلدان المصدر. عائلة ذات ثروة يجب أن تدمج الإرث والهبات والتأمين على الحياة والعقار والشركات العائلية وإقامة كل فرد. Digital nomad يجب أن يراجع مصدر النشاط والعقود والشركة والبنك ومخاطر إعادة التصنيف.'],
      ['كيف يرافق Bosphoras هذه العملية', 'لا يحل Bosphoras محل المحامي الضريبي ولا يعد بإعفاء تلقائي. دوره هو تنظيم مراجعة خاصة جدية: فهم وضعك، تحديد النقاط الحساسة، إعداد الأسئلة الصحيحة وتنسيق المستشارين الضريبيين والمحامين والبنوك والمحاسبين والتأمين والعقار وشركاء الانتقال في تركيا.'],
    ],
    faq: [
      ['هل تفرض تركيا الضريبة على الدخل العالمي للمقيمين؟', 'من حيث المبدأ، قد يخضع المقيم الضريبي في تركيا للضريبة على الدخل العالمي. النظام المعلن قد ينشئ استثناءً لبعض الدخل الأجنبي للمقيمين الجدد، لكن الشروط النهائية يجب مراجعتها.'],
      ['هل إعفاء 20 سنة تلقائي؟', 'لا. سيعتمد على معايير دقيقة، منها التاريخ الضريبي خلال السنوات الثلاث السابقة، نوع الدخل والوضع الشخصي للمكلف.'],
      ['هل يعفى الدخل المكتسب في تركيا؟', 'لا. يجب فصل الدخل الأجنبي عن الدخل من مصدر تركي. الدخل المرتبط بنشاط أو شركة أو عقار أو عميل في تركيا يحتاج إلى مراجعة منفصلة.'],
      ['هل يمكنني الانتقال إلى تركيا والتوقف عن دفع الضرائب في بلدي السابق؟', 'ليس تلقائياً. قد يحتفظ البلد السابق بحقوق ضريبية حسب المنزل والعائلة والشركات والأصول والمصالح الاقتصادية وأيام الحضور والاتفاقيات.'],
      ['هل يمكن أن تكون الأرباح الأجنبية مشمولة؟', 'محتمل إذا شمل النص النهائي هذا الدخل وكان الملف مؤهلاً. يجب أيضاً مراجعة بلد المصدر والضريبة المقتطعة والاتفاقية والتوقيت.'],
      ['هل يمكن أن تكون المكاسب الرأسمالية الأجنبية مشمولة؟', 'محتمل، لكن الجواب يعتمد على القانون النهائي ومكان الأصل وتاريخ البيع ونوع الأصل وإقامتك الضريبية وقت العملية.'],
      ['لماذا العمل مع Bosphoras؟', 'لأن الانتقال الضريبي ليس قاعدة ضريبية واحدة. يجب تنسيق الإقامة والبنك والتأمين والعقار والعائلة والامتثال والمستشارين الضريبيين والمحامين قبل اتخاذ القرار.'],
    ],
  },
};

export function getTaxResidenceForeignIncomeClientIntlMetadata(locale: SupportedLocale): Metadata {
  const c = content[locale];
  const canonical = `https://bosphoras.com${paths[locale]}`;
  return {
    title: `${c.metaTitle} | Bosphoras`,
    description: c.description,
    alternates: {
      canonical,
      languages: {
        fr: 'https://bosphoras.com/residence-fiscale-turquie-revenus-etrangers',
        en: 'https://bosphoras.com/en/turkey-tax-residence-foreign-income',
        ru: 'https://bosphoras.com/ru/nalogovaya-rezidentsiya-turtsiya-inostrannye-dohody',
        ar: 'https://bosphoras.com/ar/turkey-tax-residence-foreign-income',
        'x-default': 'https://bosphoras.com/residence-fiscale-turquie-revenus-etrangers',
      },
    },
    openGraph: { title: c.title, description: c.description, url: canonical, siteName: 'Bosphoras', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: c.title }] },
    twitter: { card: 'summary_large_image', title: c.title, description: c.description, images: ['/images/og-default.jpg'] },
  };
}

export function TaxResidenceForeignIncomeClientIntlPage({ locale }: { locale: SupportedLocale }) {
  const c = content[locale];
  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: c.title, description: c.description, inLanguage: locale, datePublished: '2026-05-11', dateModified: '2026-05-11', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: `https://bosphoras.com${paths[locale]}` }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
      <Header locale={locale} currentPath={paths[locale]} />
      <main dir={locale === 'ar' ? 'rtl' : 'ltr'} className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40">
          <div className="mx-auto max-w-[1400px]">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">{c.eyebrow}</p>
            <h1 className="mt-6 max-w-6xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">{c.title}</h1>
            <p className="mt-8 max-w-4xl text-lg leading-9 text-white/80">{c.hero}</p>
            <Link href={assessmentHref[locale]} className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">{c.cta}<ArrowRight size={16} /></Link>
          </div>
        </section>
        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="h-fit border border-[#d8c7a1] bg-[#fffaf0] p-8 lg:sticky lg:top-28">
              <Landmark className="h-8 w-8 text-[#8a6728]" />
              <h2 className="mt-6 font-serif text-3xl">{c.asideTitle}</h2>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-[#3e4857]">
                {c.checklist.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#8a6728]" />{item}</li>)}
              </ul>
            </aside>
            <div className="space-y-5">
              {c.sections.map(([sectionTitle, text], index) => (
                <article key={sectionTitle} className="border border-[#d8c7a1] bg-white p-7 md:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6728]">{String(index + 1).padStart(2, '0')}</p>
                  <h2 className="mt-4 font-serif text-3xl tracking-[-0.025em] text-[#121826] md:text-4xl">{sectionTitle}</h2>
                  <p className="mt-5 text-base leading-8 text-[#3e4857]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1100px]">
            <ShieldCheck className="h-8 w-8 text-[#8a6728]" />
            <h2 className="mt-6 font-serif text-4xl tracking-[-0.03em] md:text-6xl">{c.finalTitle}</h2>
            <p className="mt-6 text-lg leading-9 text-[#3e4857]">{c.finalText}</p>
            <Link href={assessmentHref[locale]} className="mt-8 inline-flex items-center justify-center gap-3 bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white">{c.cta}<ArrowRight size={16} /></Link>
          </div>
        </section>
        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1100px]">
            <FileText className="h-8 w-8 text-[#8a6728]" />
            <h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">{c.faqTitle}</h2>
            <div className="mt-8 grid gap-px bg-[#d8c7a1]">
              {c.faq.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
