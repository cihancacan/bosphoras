export type TaxExemptionLocale = 'fr' | 'en' | 'ru' | 'ar';

export type TaxExemptionPageCopy = {
  locale: TaxExemptionLocale;
  slug: string;
  htmlLang: string;
  dir: 'ltr' | 'rtl';
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  subtitle: string;
  status: string;
  sourceLabel: string;
  primaryCta: string;
  secondaryCta: string;
  whoTitle: string;
  whoItems: string[];
  summaryTitle: string;
  summaryItems: Array<{ title: string; text: string }>;
  conditionsTitle: string;
  conditions: string[];
  opportunitiesTitle: string;
  opportunities: Array<{ title: string; text: string }>;
  bosphorasTitle: string;
  bosphorasText: string;
  cautionTitle: string;
  caution: string;
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
};

export const taxExemptionPages: Record<TaxExemptionLocale, TaxExemptionPageCopy> = {
  fr: {
    locale: 'fr',
    slug: '/impots-turquie-exoneration-revenus-etrangers',
    htmlLang: 'fr',
    dir: 'ltr',
    title: 'Impôts Turquie : exonération des revenus étrangers pour investisseurs | Bosphoras',
    description: 'La Turquie prépare une exonération fiscale de 20 ans sur certains revenus étrangers. Conditions, profils concernés et analyse privée Bosphoras pour investisseurs.',
    eyebrow: 'Fiscalité Turquie · Investisseurs étrangers',
    h1: 'Impôts en Turquie : l’exonération des revenus étrangers qui peut changer l’installation des investisseurs',
    subtitle: 'Une page claire pour comprendre le projet d’exonération fiscale de 20 ans, identifier les profils concernés et préparer une analyse privée avec des professionnels qualifiés.',
    status: 'Projet de loi présenté à la TBMM : mesure à confirmer après adoption définitive, publication officielle et doctrine d’application.',
    sourceLabel: 'Basé sur le projet de loi fiscal présenté à la TBMM le 5 mai 2026.',
    primaryCta: 'Demander une analyse privée',
    secondaryCta: 'Voir les services Bosphoras',
    whoTitle: 'Qui peut être concerné ?',
    whoItems: ['Investisseurs internationaux qui envisagent de s’installer en Turquie', 'Entrepreneurs et dirigeants avec revenus générés hors de Turquie', 'Consultants, créateurs, traders, rentiers ou profils patrimoniaux mobiles', 'Familles fortunées comparant Istanbul, Dubaï, Lisbonne, Monaco ou Londres', 'Groupes internationaux souhaitant créer une base régionale ou un centre de services en Turquie'],
    summaryTitle: 'Ce que le projet prévoit',
    summaryItems: [
      { title: 'Exonération potentielle pendant 20 ans', text: 'Les personnes physiques considérées comme résidentes en Turquie pourraient bénéficier d’une exonération d’impôt sur le revenu pour certains revenus et gains obtenus hors de Turquie.' },
      { title: 'Condition des 3 années précédentes', text: 'Le texte vise les personnes qui, avant leur installation, n’ont pas eu de domicile ni d’assujettissement fiscal en Turquie pendant les 3 années civiles précédentes.' },
      { title: 'Pas de déclaration annuelle pour ces revenus', text: 'Les revenus étrangers exonérés ne seraient pas inclus dans la déclaration annuelle turque, sous réserve du respect des conditions prévues.' },
      { title: 'Transmission patrimoniale à surveiller', text: 'Le projet prévoit aussi un taux de 1 % pour certaines transmissions par héritage pendant la période d’exonération.' },
    ],
    conditionsTitle: 'Les points à vérifier avant de décider',
    conditions: ['Le texte final de la loi et sa date d’entrée en vigueur', 'Votre statut de résidence fiscale avant et après installation', 'La nature exacte des revenus étrangers concernés', 'Les conventions fiscales entre la Turquie et votre pays d’origine', 'Le traitement bancaire, patrimonial, successoral et déclaratif', 'L’avis d’un avocat fiscaliste qualifié en Turquie et dans le pays concerné'],
    opportunitiesTitle: 'Pourquoi cette mesure peut attirer les investisseurs',
    opportunities: [
      { title: 'Un signal fort envoyé aux capitaux étrangers', text: 'La Turquie cherche à attirer des résidents internationaux, entrepreneurs, familles et capitaux mobiles avec un dispositif fiscal lisible et compétitif.' },
      { title: 'Istanbul comme base privée et professionnelle', text: 'Istanbul peut devenir une alternative crédible pour les profils qui veulent rester proches de l’Europe, du Golfe, de l’Asie centrale et du marché turc.' },
      { title: 'Un sujet à traiter avant l’achat immobilier', text: 'Le bon ordre n’est pas de commencer par acheter. Il faut d’abord analyser fiscalité, résidence, banque, famille, santé, assurance et structure patrimoniale.' },
    ],
    bosphorasTitle: 'Comment Bosphoras accompagne ce sujet',
    bosphorasText: 'Bosphoras n’émet pas de conseil fiscal. Nous organisons un diagnostic privé, coordonnons les bons interlocuteurs — avocat, fiscaliste, comptable, banque, assurance, immobilier, santé — et aidons le client à structurer une installation conforme, confidentielle et réaliste en Turquie.',
    cautionTitle: 'Important',
    caution: 'Cette page est informative. Elle ne constitue pas un conseil fiscal, juridique, patrimonial ou d’investissement. Toute décision doit être confirmée par des professionnels qualifiés après adoption définitive du texte et analyse de votre situation personnelle.',
    faqTitle: 'Questions fréquentes',
    faqs: [
      { question: 'La Turquie offre-t-elle déjà 20 ans d’exonération fiscale aux étrangers ?', answer: 'Le texte est présenté comme un projet de loi. Il faut attendre l’adoption finale, la publication officielle et les règles d’application avant de considérer la mesure comme applicable.' },
      { question: 'Tous les revenus étrangers seraient-ils exonérés ?', answer: 'Non, il faut vérifier la nature exacte des revenus, la résidence fiscale, les conventions fiscales et les conditions prévues par le texte final.' },
      { question: 'Faut-il acheter un bien immobilier pour profiter de cette mesure ?', answer: 'Le projet concerne d’abord la résidence fiscale et les revenus étrangers. L’immobilier peut faire partie d’une stratégie d’installation, mais ce n’est pas le premier point à analyser.' },
      { question: 'Bosphoras peut-il vérifier mon éligibilité ?', answer: 'Bosphoras peut organiser une analyse privée avec des professionnels qualifiés, mais l’éligibilité doit être confirmée par un avocat fiscaliste compétent.' },
    ],
  },
  en: {
    locale: 'en',
    slug: '/turkey-tax-exemption-foreign-income-investors',
    htmlLang: 'en',
    dir: 'ltr',
    title: 'Turkey tax exemption on foreign income for investors | Bosphoras',
    description: 'Turkey is preparing a 20-year tax exemption on certain foreign income. Conditions, eligible profiles and private Bosphoras assessment for investors.',
    eyebrow: 'Turkey Tax · Foreign Investors',
    h1: 'Turkey tax exemption on foreign income: what international investors should understand',
    subtitle: 'A clear guide to the proposed 20-year tax exemption, the profiles it may concern and the private assessment process with qualified professionals.',
    status: 'Draft bill submitted to the Turkish Parliament: the measure must be confirmed after final adoption, official publication and implementation rules.',
    sourceLabel: 'Based on the tax bill submitted to the Turkish Parliament on May 5, 2026.',
    primaryCta: 'Request a private assessment',
    secondaryCta: 'Explore Bosphoras services',
    whoTitle: 'Who may be concerned?',
    whoItems: ['International investors considering relocation to Turkey', 'Entrepreneurs and executives with income generated outside Turkey', 'Consultants, creators, traders, wealth holders and mobile professionals', 'Families comparing Istanbul, Dubai, Lisbon, Monaco or London', 'International groups considering a regional base or service center in Turkey'],
    summaryTitle: 'What the draft bill provides',
    summaryItems: [
      { title: 'Potential 20-year exemption', text: 'Individuals considered resident in Turkey may benefit from income tax exemption for certain gains and income obtained outside Turkey.' },
      { title: 'Previous 3-year condition', text: 'The text targets individuals who had no domicile and no tax liability in Turkey during the previous 3 calendar years before becoming resident.' },
      { title: 'No annual return for exempt foreign income', text: 'Exempt foreign income would not be included in the annual Turkish income tax return, provided the conditions are met.' },
      { title: 'Wealth transfer point to monitor', text: 'The proposal also mentions a 1% rate for certain inheritance transfers during the exemption period.' },
    ],
    conditionsTitle: 'What must be checked before deciding',
    conditions: ['The final law and effective date', 'Your tax residence status before and after relocation', 'The exact nature of the foreign income concerned', 'Double-tax treaties between Turkey and your country of origin', 'Banking, wealth, inheritance and reporting implications', 'Advice from qualified tax lawyers in Turkey and in the relevant country'],
    opportunitiesTitle: 'Why this may attract investors',
    opportunities: [
      { title: 'A strong signal to foreign capital', text: 'Turkey aims to attract international residents, entrepreneurs, families and mobile capital with a competitive and readable tax framework.' },
      { title: 'Istanbul as a private and professional base', text: 'Istanbul may become a credible alternative for profiles who want to remain close to Europe, the Gulf, Central Asia and the Turkish market.' },
      { title: 'A subject to analyze before buying property', text: 'The right order is not to start with a purchase. Tax, residence, banking, family, healthcare, insurance and wealth structure must come first.' },
    ],
    bosphorasTitle: 'How Bosphoras supports this topic',
    bosphorasText: 'Bosphoras does not provide tax advice. We organize a private assessment, coordinate the right professionals — lawyer, tax advisor, accountant, bank, insurance, property and healthcare — and help clients structure a compliant, confidential and realistic relocation to Turkey.',
    cautionTitle: 'Important',
    caution: 'This page is for information only. It is not tax, legal, wealth or investment advice. Any decision must be confirmed by qualified professionals after final adoption of the text and a review of your personal situation.',
    faqTitle: 'Frequently asked questions',
    faqs: [
      { question: 'Does Turkey already offer a 20-year tax exemption to foreigners?', answer: 'The measure is presented as a draft bill. Final adoption, official publication and implementation rules are required before treating it as applicable.' },
      { question: 'Would all foreign income be exempt?', answer: 'No. The exact income type, tax residence, double-tax treaties and final legal conditions must be checked.' },
      { question: 'Do I need to buy property to benefit from this measure?', answer: 'The proposal is primarily about tax residence and foreign income. Property may be part of a relocation strategy, but it is not the first point to analyze.' },
      { question: 'Can Bosphoras check my eligibility?', answer: 'Bosphoras can organize a private assessment with qualified professionals, but eligibility must be confirmed by a competent tax lawyer.' },
    ],
  },
  ru: {
    locale: 'ru',
    slug: '/nalogi-turtsiya-osvobozhdenie-inostrannye-dokhody',
    htmlLang: 'ru',
    dir: 'ltr',
    title: 'Налоги в Турции: освобождение иностранных доходов для инвесторов | Bosphoras',
    description: 'Турция готовит 20-летнее налоговое освобождение для отдельных иностранных доходов. Условия, профили и частная оценка Bosphoras.',
    eyebrow: 'Налоги Турция · Иностранные инвесторы',
    h1: 'Налоги в Турции: освобождение иностранных доходов, которое может изменить релокацию инвесторов',
    subtitle: 'Понятная страница о проекте 20-летнего налогового освобождения, потенциальных профилях и частной оценке с квалифицированными специалистами.',
    status: 'Законопроект представлен в парламент Турции: мера должна быть подтверждена после окончательного принятия, официальной публикации и правил применения.',
    sourceLabel: 'На основе налогового законопроекта, представленного в парламент Турции 5 мая 2026 года.',
    primaryCta: 'Запросить частную оценку',
    secondaryCta: 'Услуги Bosphoras',
    whoTitle: 'Кого это может касаться?',
    whoItems: ['Международные инвесторы, рассматривающие переезд в Турцию', 'Предприниматели и руководители с доходами за пределами Турции', 'Консультанты, создатели, трейдеры, владельцы капитала и мобильные специалисты', 'Семьи, сравнивающие Стамбул, Дубай, Лиссабон, Монако или Лондон', 'Международные группы, рассматривающие региональную базу или сервисный центр в Турции'],
    summaryTitle: 'Что предусматривает законопроект',
    summaryItems: [
      { title: 'Потенциальное освобождение на 20 лет', text: 'Физические лица, считающиеся резидентами Турции, могут получить освобождение от подоходного налога по отдельным доходам и прибылям, полученным за пределами Турции.' },
      { title: 'Условие предыдущих 3 лет', text: 'Текст касается лиц, которые до переезда не имели места жительства и налоговой обязанности в Турции в течение предыдущих 3 календарных лет.' },
      { title: 'Без годовой декларации по освобожденным доходам', text: 'Освобожденные иностранные доходы не должны включаться в годовую декларацию в Турции при соблюдении условий.' },
      { title: 'Наследственный аспект', text: 'Проект также предусматривает ставку 1% для некоторых наследственных переходов в период освобождения.' },
    ],
    conditionsTitle: 'Что нужно проверить до решения',
    conditions: ['Финальный текст закона и дату вступления в силу', 'Ваш налоговый статус до и после переезда', 'Точный характер иностранных доходов', 'Соглашения об избежании двойного налогообложения', 'Банковские, наследственные и декларационные последствия', 'Мнение квалифицированного налогового юриста в Турции и соответствующей стране'],
    opportunitiesTitle: 'Почему это может привлечь инвесторов',
    opportunities: [
      { title: 'Сильный сигнал иностранному капиталу', text: 'Турция стремится привлечь международных резидентов, предпринимателей, семьи и мобильный капитал конкурентной налоговой рамкой.' },
      { title: 'Стамбул как частная и деловая база', text: 'Стамбул может стать реальной альтернативой для тех, кто хочет оставаться рядом с Европой, Заливом, Центральной Азией и турецким рынком.' },
      { title: 'Сначала анализ, затем недвижимость', text: 'Правильный порядок — не начинать с покупки. Сначала нужны налоги, резиденция, банк, семья, медицина, страхование и структура капитала.' },
    ],
    bosphorasTitle: 'Как Bosphoras сопровождает этот вопрос',
    bosphorasText: 'Bosphoras не дает налоговых консультаций. Мы организуем частную оценку, координируем нужных специалистов — юриста, налогового консультанта, бухгалтера, банк, страхование, недвижимость, медицину — и помогаем структурировать законный, конфиденциальный и реалистичный переезд в Турцию.',
    cautionTitle: 'Важно',
    caution: 'Эта страница носит информационный характер. Это не налоговая, юридическая, имущественная или инвестиционная консультация. Любое решение должно быть подтверждено квалифицированными специалистами после окончательного принятия текста и анализа вашей ситуации.',
    faqTitle: 'Частые вопросы',
    faqs: [
      { question: 'Турция уже предоставляет 20-летнее налоговое освобождение иностранцам?', answer: 'Мера представлена как законопроект. Нужно дождаться окончательного принятия, официальной публикации и правил применения.' },
      { question: 'Все иностранные доходы будут освобождены?', answer: 'Нет. Нужно проверить тип дохода, налоговую резиденцию, налоговые соглашения и финальные условия закона.' },
      { question: 'Нужно ли покупать недвижимость?', answer: 'Проект касается прежде всего налоговой резиденции и иностранных доходов. Недвижимость может быть частью стратегии переезда, но не первым шагом.' },
      { question: 'Bosphoras может проверить мою eligibility?', answer: 'Bosphoras может организовать частную оценку с квалифицированными специалистами, но право на применение должно подтвердиться налоговым юристом.' },
    ],
  },
  ar: {
    locale: 'ar',
    slug: '/اعفاء-ضريبي-تركيا-الدخل-الأجنبي',
    htmlLang: 'ar',
    dir: 'rtl',
    title: 'الإعفاء الضريبي في تركيا على الدخل الأجنبي للمستثمرين | Bosphoras',
    description: 'تستعد تركيا لإعفاء ضريبي لمدة 20 سنة على بعض الدخل الأجنبي. الشروط والفئات المعنية وتقييم خاص مع Bosphoras.',
    eyebrow: 'ضرائب تركيا · المستثمرون الأجانب',
    h1: 'الإعفاء الضريبي في تركيا على الدخل الأجنبي: ما يجب أن يعرفه المستثمرون',
    subtitle: 'صفحة واضحة لفهم مشروع الإعفاء الضريبي لمدة 20 سنة، والفئات التي قد تكون معنية، وطريقة التقييم الخاص مع مهنيين مؤهلين.',
    status: 'مشروع قانون مقدم إلى البرلمان التركي: يجب تأكيد الإجراء بعد الاعتماد النهائي والنشر الرسمي وقواعد التطبيق.',
    sourceLabel: 'استناداً إلى مشروع القانون الضريبي المقدم إلى البرلمان التركي في 5 مايو 2026.',
    primaryCta: 'طلب تقييم خاص',
    secondaryCta: 'خدمات Bosphoras',
    whoTitle: 'من قد يكون معنيًا؟',
    whoItems: ['المستثمرون الدوليون الذين يدرسون الانتقال إلى تركيا', 'رواد الأعمال والمديرون الذين لديهم دخل خارج تركيا', 'المستشارون والمبدعون والمتداولون وأصحاب الثروات المتنقلة', 'العائلات التي تقارن بين إسطنبول ودبي ولشبونة وموناكو ولندن', 'المجموعات الدولية التي تدرس إنشاء قاعدة إقليمية أو مركز خدمات في تركيا'],
    summaryTitle: 'ما الذي ينص عليه مشروع القانون',
    summaryItems: [
      { title: 'إعفاء محتمل لمدة 20 سنة', text: 'قد يستفيد الأشخاص الطبيعيون المقيمون في تركيا من إعفاء ضريبي على بعض الأرباح والدخول المحققة خارج تركيا.' },
      { title: 'شرط السنوات الثلاث السابقة', text: 'يستهدف النص الأشخاص الذين لم يكن لديهم موطن أو التزام ضريبي في تركيا خلال السنوات التقويمية الثلاث السابقة قبل الإقامة.' },
      { title: 'عدم إدراج الدخل الأجنبي المعفى في التصريح السنوي', text: 'الدخل الأجنبي المعفى لا يدرج في التصريح السنوي التركي إذا تم احترام الشروط.' },
      { title: 'نقطة ميراث يجب مراقبتها', text: 'يشير المشروع أيضاً إلى معدل 1% لبعض انتقالات الإرث خلال فترة الإعفاء.' },
    ],
    conditionsTitle: 'ما يجب التحقق منه قبل اتخاذ القرار',
    conditions: ['النص النهائي للقانون وتاريخ دخوله حيز التنفيذ', 'وضع الإقامة الضريبية قبل وبعد الانتقال', 'طبيعة الدخل الأجنبي المعني بالضبط', 'اتفاقيات تجنب الازدواج الضريبي', 'الجوانب البنكية والوراثية والتصريحية', 'رأي محامٍ ضريبي مؤهل في تركيا والبلد المعني'],
    opportunitiesTitle: 'لماذا قد يجذب ذلك المستثمرين',
    opportunities: [
      { title: 'إشارة قوية لرأس المال الأجنبي', text: 'تسعى تركيا إلى جذب المقيمين الدوليين ورواد الأعمال والعائلات ورأس المال المتنقل من خلال إطار ضريبي تنافسي.' },
      { title: 'إسطنبول كقاعدة خاصة ومهنية', text: 'قد تصبح إسطنبول بديلاً جاداً لمن يريد البقاء قريباً من أوروبا والخليج وآسيا الوسطى والسوق التركي.' },
      { title: 'موضوع يجب تحليله قبل شراء العقار', text: 'الترتيب الصحيح ليس البدء بالشراء. يجب أولاً تحليل الضرائب والإقامة والبنوك والعائلة والصحة والتأمين وهيكلة الثروة.' },
    ],
    bosphorasTitle: 'كيف ترافق Bosphoras هذا الموضوع',
    bosphorasText: 'لا تقدم Bosphoras استشارة ضريبية. ننظم تقييماً خاصاً وننسق المهنيين المناسبين — محامٍ، مستشار ضريبي، محاسب، بنك، تأمين، عقار ورعاية صحية — ونساعد العميل على هيكلة انتقال قانوني وسري وواقعي إلى تركيا.',
    cautionTitle: 'مهم',
    caution: 'هذه الصفحة معلوماتية فقط. لا تشكل استشارة ضريبية أو قانونية أو استثمارية أو patrimoniale. يجب تأكيد أي قرار مع مهنيين مؤهلين بعد الاعتماد النهائي للنص وتحليل وضعكم الشخصي.',
    faqTitle: 'أسئلة شائعة',
    faqs: [
      { question: 'هل تقدم تركيا بالفعل إعفاء ضريبياً لمدة 20 سنة للأجانب؟', answer: 'الإجراء مقدم كمشروع قانون. يجب انتظار الاعتماد النهائي والنشر الرسمي وقواعد التطبيق قبل اعتباره قابلاً للتطبيق.' },
      { question: 'هل سيتم إعفاء كل الدخل الأجنبي؟', answer: 'لا. يجب التحقق من نوع الدخل والإقامة الضريبية والاتفاقيات الضريبية والشروط النهائية للقانون.' },
      { question: 'هل يجب شراء عقار للاستفادة؟', answer: 'المشروع يتعلق أولاً بالإقامة الضريبية والدخل الأجنبي. قد يكون العقار جزءاً من استراتيجية الانتقال لكنه ليس أول نقطة للتحليل.' },
      { question: 'هل يمكن لـ Bosphoras التحقق من أهليتي؟', answer: 'يمكن لـ Bosphoras تنظيم تقييم خاص مع مهنيين مؤهلين، لكن الأهلية يجب أن يؤكدها محامٍ ضريبي مختص.' },
    ],
  },
};

export const taxExemptionLocales = Object.keys(taxExemptionPages) as TaxExemptionLocale[];
