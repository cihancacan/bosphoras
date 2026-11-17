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
    description: "Loi 7582 en vigueur : exonération fiscale de 20 ans des revenus étrangers éligibles, conditions, calendrier et accompagnement Bosphoras.",
    eyebrow: 'Fiscalité Turquie · Investisseurs étrangers',
    h1: 'Impôts en Turquie : l’exonération des revenus étrangers qui peut changer l’installation des investisseurs',
    subtitle: "La loi 7582, publiée le 4 juin 2026, crée une exonération personnelle de 20 ans pour les revenus de source étrangère des nouveaux résidents répondant à l’article additionnel 20/D. Le certificat fiscal est obligatoire.",
    status: "Loi en vigueur depuis le 4 juin 2026 ; modalités fixées par le communiqué 333 du 4 juillet 2026.",
    sourceLabel: "Loi 7582, article 20/D et guide officiel GİB de septembre 2026.",
    primaryCta: 'Demander une analyse privée',
    secondaryCta: 'Voir les services Bosphoras',
    whoTitle: 'Qui peut être concerné ?',
    whoItems: ['Investisseurs internationaux qui envisagent de s’installer en Turquie', 'Entrepreneurs et dirigeants avec revenus générés hors de Turquie', 'Consultants, créateurs, traders, rentiers ou profils patrimoniaux mobiles', 'Familles fortunées comparant Istanbul, Dubaï, Lisbonne, Monaco ou Londres', 'Groupes internationaux souhaitant créer une base régionale ou un centre de services en Turquie'],
    summaryTitle: "Ce que prévoit la loi",
    summaryItems: [
      { title: 'Exonération potentielle pendant 20 ans', text: 'Les personnes physiques considérées comme résidentes en Turquie pourraient bénéficier d’une exonération d’impôt sur le revenu pour certains revenus et gains obtenus hors de Turquie.' },
      { title: 'Condition des 3 années précédentes', text: 'Le texte vise les personnes qui, avant leur installation, n’ont pas eu de domicile ni d’assujettissement fiscal en Turquie pendant les 3 années civiles précédentes.' },
      { title: 'Pas de déclaration annuelle pour ces revenus', text: 'Les revenus étrangers exonérés ne seraient pas inclus dans la déclaration annuelle turque, sous réserve du respect des conditions prévues.' },
      { title: 'Transmission patrimoniale à surveiller', text: "Un taux de 1 % s’applique aux transmissions par décès relevant du dispositif durant sa période de vingt ans." },
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
    caution: "Information générale, non conseil fiscal individuel. L'éligibilité et les obligations de chaque pays doivent être évaluées par un fiscaliste indépendant.",
    faqTitle: 'Questions fréquentes',
    faqs: [
      { question: 'La Turquie offre-t-elle déjà 20 ans d’exonération fiscale aux étrangers ?', answer: "Oui, pour les revenus étrangers éligibles et les nouveaux résidents répondant aux conditions. Un certificat fiscal obtenu dans les délais est nécessaire." },
      { question: 'Tous les revenus étrangers seraient-ils exonérés ?', answer: 'Non, il faut vérifier la nature exacte des revenus, la résidence fiscale, les conventions fiscales et les conditions prévues par le texte final.' },
      { question: 'Faut-il acheter un bien immobilier pour profiter de cette mesure ?', answer: "Non. L’article 20/D ne requiert pas d’achat immobilier ; les règles de résidence administrative sont distinctes." },
      { question: 'Bosphoras peut-il vérifier mon éligibilité ?', answer: 'Bosphoras peut organiser une analyse privée avec des professionnels qualifiés, mais l’éligibilité doit être confirmée par un avocat fiscaliste compétent.' },
    ],
  },
  en: {
    locale: 'en',
    slug: '/turkey-tax-exemption-foreign-income-investors',
    htmlLang: 'en',
    dir: 'ltr',
    title: 'Turkey tax exemption on foreign income for investors | Bosphoras',
    description: "Law 7582 is in force: the 20-year exemption for qualifying foreign income, conditions, certificate deadlines and Bosphoras relocation support.",
    eyebrow: 'Turkey Tax · Foreign Investors',
    h1: 'Turkey tax exemption on foreign income: what international investors should understand',
    subtitle: "Law 7582, published on 4 June 2026, introduces a 20-year personal exemption for foreign-source income of new residents meeting supplementary Article 20/D. An exemption certificate is required.",
    status: "Law in force since 4 June 2026; implementing Communiqué 333 published on 4 July 2026.",
    sourceLabel: "Law 7582, Article 20/D and official September 2026 GİB guide.",
    primaryCta: 'Request a private assessment',
    secondaryCta: 'Explore Bosphoras services',
    whoTitle: 'Who may be concerned?',
    whoItems: ['International investors considering relocation to Turkey', 'Entrepreneurs and executives with income generated outside Turkey', 'Consultants, creators, traders, wealth holders and mobile professionals', 'Families comparing Istanbul, Dubai, Lisbon, Monaco or London', 'International groups considering a regional base or service center in Turkey'],
    summaryTitle: "What the enacted law provides",
    summaryItems: [
      { title: 'Potential 20-year exemption', text: 'Individuals considered resident in Turkey may benefit from income tax exemption for certain gains and income obtained outside Turkey.' },
      { title: 'Previous 3-year condition', text: 'The text targets individuals who had no domicile and no tax liability in Turkey during the previous 3 calendar years before becoming resident.' },
      { title: 'No annual return for exempt foreign income', text: 'Exempt foreign income would not be included in the annual Turkish income tax return, provided the conditions are met.' },
      { title: 'Wealth transfer point to monitor', text: "A 1% rate applies to qualifying inheritance transfers during the twenty-year exemption period." },
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
    caution: "General information, not individual tax advice. Eligibility and obligations in each country require independent professional assessment.",
    faqTitle: 'Frequently asked questions',
    faqs: [
      { question: 'Does Turkey already offer a 20-year tax exemption to foreigners?', answer: "Yes, for eligible foreign income and qualifying new residents. A timely exemption certificate is required." },
      { question: 'Would all foreign income be exempt?', answer: 'No. The exact income type, tax residence, double-tax treaties and final legal conditions must be checked.' },
      { question: 'Do I need to buy property to benefit from this measure?', answer: "No. Article 20/D imposes no property purchase requirement; immigration residence is separate." },
      { question: 'Can Bosphoras check my eligibility?', answer: 'Bosphoras can organize a private assessment with qualified professionals, but eligibility must be confirmed by a competent tax lawyer.' },
    ],
  },
  ru: {
    locale: 'ru',
    slug: '/nalogi-turtsiya-osvobozhdenie-inostrannye-dokhody',
    htmlLang: 'ru',
    dir: 'ltr',
    title: 'Налоги в Турции: освобождение иностранных доходов для инвесторов | Bosphoras',
    description: "Закон № 7582 действует: освобождение зарубежных доходов на 20 лет, условия, сроки сертификата и помощь Bosphoras при переезде.",
    eyebrow: 'Налоги Турция · Иностранные инвесторы',
    h1: 'Налоги в Турции: освобождение иностранных доходов, которое может изменить релокацию инвесторов',
    subtitle: "Закон № 7582, опубликованный 4 июня 2026 года, вводит двадцатилетнее освобождение иностранных доходов физических лиц, соответствующих дополнительной статье 20/D. Необходим налоговый сертификат.",
    status: "Закон действует с 4 июня 2026 года; разъяснение № 333 опубликовано 4 июля 2026 года.",
    sourceLabel: "Закон № 7582, статья 20/D и руководство GİB за сентябрь 2026 года.",
    primaryCta: 'Запросить частную оценку',
    secondaryCta: 'Услуги Bosphoras',
    whoTitle: 'Кого это может касаться?',
    whoItems: ['Международные инвесторы, рассматривающие переезд в Турцию', 'Предприниматели и руководители с доходами за пределами Турции', 'Консультанты, создатели, трейдеры, владельцы капитала и мобильные специалисты', 'Семьи, сравнивающие Стамбул, Дубай, Лиссабон, Монако или Лондон', 'Международные группы, рассматривающие региональную базу или сервисный центр в Турции'],
    summaryTitle: "Что предусматривает действующий закон",
    summaryItems: [
      { title: 'Потенциальное освобождение на 20 лет', text: 'Физические лица, считающиеся резидентами Турции, могут получить освобождение от подоходного налога по отдельным доходам и прибылям, полученным за пределами Турции.' },
      { title: 'Условие предыдущих 3 лет', text: 'Текст касается лиц, которые до переезда не имели места жительства и налоговой обязанности в Турции в течение предыдущих 3 календарных лет.' },
      { title: 'Без годовой декларации по освобожденным доходам', text: 'Освобожденные иностранные доходы не должны включаться в годовую декларацию в Турции при соблюдении условий.' },
      { title: 'Наследственный аспект', text: "Ставка 1% применяется к соответствующим наследственным переходам в течение двадцатилетнего периода." },
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
    caution: "Общая информация, а не индивидуальная налоговая консультация. Право на льготу и обязательства в каждой стране оценивает независимый специалист.",
    faqTitle: 'Частые вопросы',
    faqs: [
      { question: 'Турция уже предоставляет 20-летнее налоговое освобождение иностранцам?', answer: "Да, для подходящих зарубежных доходов новых резидентов при соблюдении условий и своевременном получении сертификата." },
      { question: 'Все иностранные доходы будут освобождены?', answer: 'Нет. Нужно проверить тип дохода, налоговую резиденцию, налоговые соглашения и финальные условия закона.' },
      { question: 'Нужно ли покупать недвижимость?', answer: "Нет, статья 20/D не требует покупки недвижимости. Миграционные условия проживания рассматриваются отдельно." },
      { question: 'Bosphoras может проверить мою eligibility?', answer: 'Bosphoras может организовать частную оценку с квалифицированными специалистами, но право на применение должно подтвердиться налоговым юристом.' },
    ],
  },
  ar: {
    locale: 'ar',
    slug: '/اعفاء-ضريبي-تركيا-الدخل-الأجنبي',
    htmlLang: 'ar',
    dir: 'rtl',
    title: 'الإعفاء الضريبي في تركيا على الدخل الأجنبي للمستثمرين | Bosphoras',
    description: "القانون 7582 نافذ: إعفاء الدخل الأجنبي المؤهل لعشرين عاماً وشروط الشهادة والمواعيد ودعم Bosphoras للانتقال.",
    eyebrow: 'ضرائب تركيا · المستثمرون الأجانب',
    h1: 'الإعفاء الضريبي في تركيا على الدخل الأجنبي: ما يجب أن يعرفه المستثمرون',
    subtitle: "يمنح القانون 7582 المنشور في 4 يونيو 2026 إعفاءً شخصياً لمدة عشرين عاماً للدخل الأجنبي المؤهل للمقيمين الجدد وفق المادة الإضافية 20/D، مع اشتراط شهادة الإعفاء.",
    status: "القانون نافذ منذ 4 يونيو 2026 ونشر التعميم التنفيذي 333 في 4 يوليو 2026.",
    sourceLabel: "القانون 7582 والمادة 20/D ودليل الإدارة الضريبية الرسمي لسبتمبر 2026.",
    primaryCta: 'طلب تقييم خاص',
    secondaryCta: 'خدمات Bosphoras',
    whoTitle: 'من قد يكون معنيًا؟',
    whoItems: ['المستثمرون الدوليون الذين يدرسون الانتقال إلى تركيا', 'رواد الأعمال والمديرون الذين لديهم دخل خارج تركيا', 'المستشارون والمبدعون والمتداولون وأصحاب الثروات المتنقلة', 'العائلات التي تقارن بين إسطنبول ودبي ولشبونة وموناكو ولندن', 'المجموعات الدولية التي تدرس إنشاء قاعدة إقليمية أو مركز خدمات في تركيا'],
    summaryTitle: "ما ينص عليه القانون النافذ",
    summaryItems: [
      { title: 'إعفاء محتمل لمدة 20 سنة', text: 'قد يستفيد الأشخاص الطبيعيون المقيمون في تركيا من إعفاء ضريبي على بعض الأرباح والدخول المحققة خارج تركيا.' },
      { title: 'شرط السنوات الثلاث السابقة', text: 'يستهدف النص الأشخاص الذين لم يكن لديهم موطن أو التزام ضريبي في تركيا خلال السنوات التقويمية الثلاث السابقة قبل الإقامة.' },
      { title: 'عدم إدراج الدخل الأجنبي المعفى في التصريح السنوي', text: 'الدخل الأجنبي المعفى لا يدرج في التصريح السنوي التركي إذا تم احترام الشروط.' },
      { title: 'نقطة ميراث يجب مراقبتها', text: "يطبق معدل 1% على انتقالات الميراث المؤهلة خلال مدة الإعفاء البالغة عشرين عاماً." },
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
    caution: "معلومات عامة وليست استشارة ضريبية فردية. يجب تقييم الأهلية والالتزامات في كل دولة مع متخصص مستقل.",
    faqTitle: 'أسئلة شائعة',
    faqs: [
      { question: 'هل تقدم تركيا بالفعل إعفاء ضريبياً لمدة 20 سنة للأجانب؟', answer: "نعم للدخل الأجنبي المؤهل للمقيمين الجدد المستوفين للشروط، مع الحصول على شهادة الإعفاء في الموعد." },
      { question: 'هل سيتم إعفاء كل الدخل الأجنبي؟', answer: 'لا. يجب التحقق من نوع الدخل والإقامة الضريبية والاتفاقيات الضريبية والشروط النهائية للقانون.' },
      { question: 'هل يجب شراء عقار للاستفادة؟', answer: "لا، لا تشترط المادة 20/D شراء عقار. تخضع الإقامة الإدارية لقواعد مستقلة." },
      { question: 'هل يمكن لـ Bosphoras التحقق من أهليتي؟', answer: 'يمكن لـ Bosphoras تنظيم تقييم خاص مع مهنيين مؤهلين، لكن الأهلية يجب أن يؤكدها محامٍ ضريبي مختص.' },
    ],
  },
};

export const taxExemptionLocales = Object.keys(taxExemptionPages) as TaxExemptionLocale[];
