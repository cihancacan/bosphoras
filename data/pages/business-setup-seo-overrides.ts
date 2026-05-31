import type { Locale } from '@/lib/i18n';
import type { MainPageContent } from './types';

export const businessSetupSeoOverrides: Partial<Record<Locale, MainPageContent[]>> = {
  fr: [
    {
      id: 'business-setup',
      locale: 'fr',
      slug: '/services/creation-entreprise',
      title: 'Création d’entreprise en Turquie : société, banque, comptabilité | Bosphoras',
      h1: 'Créer une entreprise en Turquie avec structure, banque et conformité',
      metaDescription:
        'Création d’entreprise en Turquie pour entrepreneurs et investisseurs étrangers : société, fiscalité, banque, comptabilité, bureaux, paie, conformité et coordination privée.',
      shortIntro:
        'Créer une entreprise en Turquie peut sembler rapide. Créer la bonne structure, utilisable par un entrepreneur international, un investisseur ou une famille, demande une méthode. Le vrai sujet n’est pas seulement l’immatriculation : c’est la banque, la comptabilité, la fiscalité, les flux, les contrats, les bureaux, l’équipe, la conformité et la cohérence avec votre résidence personnelle. Bosphoras coordonne la création d’entreprise comme un bureau privé : avant de signer, on structure.',
      sections: [
        {
          heading: 'Avant la société : comprendre l’activité réelle',
          body:
            'La première erreur consiste à créer une société avant de savoir exactement ce qu’elle doit faire. Une société de conseil, une activité import-export, une holding familiale, une structure de services, un bureau régional, une activité industrielle ou une présence commerciale ne se construisent pas de la même manière. Bosphoras commence par clarifier l’activité, les associés, les pays impliqués, les clients, les flux financiers, les besoins bancaires, les locaux et le niveau d’exposition fiscale.',
          bullets: [
            'Analyse du modèle économique, des pays de facturation et des flux attendus',
            'Choix entre présence commerciale, société opérationnelle, holding, bureau ou structure de services',
            'Lecture des besoins bancaires, comptables, juridiques et administratifs avant création',
            'Coordination avec avocats, fiscalistes et comptables qualifiés selon la situation',
          ],
        },
        {
          heading: 'Créer une société qui fonctionne, pas seulement une société enregistrée',
          body:
            'Une immatriculation seule ne suffit pas. Une société doit pouvoir facturer, encaisser, payer, recruter, louer, signer, justifier ses flux, tenir une comptabilité propre et répondre aux questions d’une banque ou d’un partenaire international. Bosphoras coordonne les étapes opérationnelles pour que la société ne reste pas un document administratif, mais devienne un outil utilisable.',
          bullets: [
            'Coordination de la création de société avec les professionnels habilités',
            'Mise en place comptable, fiscale, sociale et documentaire',
            'Préparation du dossier bancaire et des justificatifs d’activité',
            'Bureaux, adresse, assurance, contrats, traductions et organisation de démarrage',
          ],
        },
        {
          heading: 'Banque, compliance et origine des fonds',
          body:
            'L’ouverture bancaire est souvent le point le plus sensible. Les banques ne regardent pas seulement les statuts : elles regardent le profil des associés, l’origine des fonds, le pays de résidence, l’activité réelle, les clients, les montants, les devises et la cohérence du dossier. Bosphoras prépare le terrain, sans jamais promettre une décision bancaire. Le but est de présenter un dossier lisible, prudent et professionnel.',
          bullets: [
            'Préparation du narratif bancaire : qui vous êtes, ce que fait la société, pourquoi la Turquie',
            'Documentation de l’origine des fonds, des flux prévus et des activités attendues',
            'Coordination avec banques, private bankers ou interlocuteurs financiers lorsque possible',
            'Approche prudente : aucune garantie d’ouverture bancaire, aucune promesse irréaliste',
          ],
        },
        {
          heading: 'Fiscalité, TVA, paie et comptabilité : éviter l’improvisation',
          body:
            'Une entreprise mal structurée peut coûter cher : mauvaise lecture de la TVA, paie non anticipée, contrats incomplets, fiscalité personnelle oubliée, incohérence entre résidence et activité. Bosphoras coordonne les questions clés avec les comptables, fiscalistes et avocats afin que le dirigeant comprenne ce qu’il crée et les obligations qui suivront.',
          bullets: [
            'Comptabilité, déclarations, TVA, retenues, paie et obligations courantes',
            'Coordination entre fiscalité de l’entreprise et situation personnelle du dirigeant',
            'Contrats clients, fournisseurs, salariés, associés et prestataires',
            'Mise en place d’une discipline documentaire dès le premier jour',
          ],
        },
        {
          heading: 'Pour quels profils ?',
          body:
            'Bosphoras accompagne les clients pour lesquels la société turque s’inscrit dans un projet plus large : installation, investissement, import-export, services internationaux, immobilier, bureau régional, activité familiale ou présence privée. Le bureau privé permet de relier la société à la vie réelle du client : banque, résidence, fiscalité, logement, bureaux, assurance, transport et réseau local.',
          bullets: [
            'Entrepreneurs étrangers souhaitant développer une présence en Turquie',
            'Investisseurs cherchant une structure propre pour opérations ou participations',
            'Familles et dirigeants organisant une présence durable entre plusieurs pays',
            'Activités de conseil, services, commerce international, immobilier, industrie ou bureaux régionaux',
          ],
        },
      ],
      faqs: [
        { question: 'Un étranger peut-il créer une entreprise en Turquie ?', answer: 'Dans de nombreux cas, oui, sous réserve de l’activité, des règles applicables et des vérifications nécessaires. Bosphoras coordonne l’analyse avec les professionnels compétents avant de lancer la création.' },
        { question: 'Quel type de société choisir en Turquie ?', answer: 'Le choix dépend de l’activité, des associés, de la fiscalité, de la banque, du niveau de responsabilité et des projets futurs. Il faut comparer les options avec un avocat et un comptable avant décision.' },
        { question: 'Bosphoras garantit-il l’ouverture d’un compte bancaire professionnel ?', answer: 'Non. Les banques décident seules. Bosphoras aide à préparer un dossier cohérent, documenté et professionnel pour améliorer la lisibilité du projet.' },
        { question: 'Faut-il créer une société avant de demander une résidence ?', answer: 'Pas automatiquement. La société et la résidence sont deux sujets différents qui doivent être coordonnés selon le profil du dirigeant, son pays de résidence et son projet réel.' },
        { question: 'Pouvez-vous coordonner comptable, avocat, banque et bureaux ?', answer: 'Oui. C’est précisément le rôle de Bosphoras : organiser les bons interlocuteurs, suivre les étapes et garder une cohérence entre juridique, fiscal, bancaire et opérationnel.' },
        { question: 'Une société turque est-elle adaptée à l’import-export ou aux services internationaux ?', answer: 'Elle peut l’être, mais seulement après analyse de l’activité, des pays concernés, des contrats, de la banque, de la TVA, de la logistique et de la fiscalité du dirigeant.' },
      ],
      cta: { label: 'Structurer mon entreprise en Turquie', href: '/diagnostic-prive', secondaryLabel: 'Voir le conseil juridique et fiscal', secondaryHref: '/services/conseil-juridique-fiscal' },
      jsonLdType: 'Service',
      internalLinks: [
        { pageId: 'legal-tax', label: 'Conseil juridique et fiscal' },
        { pageId: 'relocate', label: 'Installation en Turquie' },
        { pageId: 'offices', label: 'Bureaux en Turquie' },
        { pageId: 'compliance', label: 'Conformité et confiance' },
        { pageId: 'private-assessment', label: 'Diagnostic privé' },
      ],
    },
  ],
  en: [
    {
      id: 'business-setup',
      locale: 'en',
      slug: '/services/business-setup',
      title: 'Company formation in Turkey: bank, accounting, compliance | Bosphoras',
      h1: 'Set up a company in Turkey with structure, banking and compliance',
      metaDescription:
        'Company formation in Turkey for foreign entrepreneurs and investors: legal structure, tax, banking, accounting, offices, payroll, compliance and private coordination.',
      shortIntro:
        'Creating a company in Turkey can look fast. Creating the right structure for an international entrepreneur, investor or family requires method. The real subject is not only registration: it is banking, accounting, tax, flows, contracts, offices, team, compliance and the link with your personal residence. Bosphoras coordinates company formation as a private desk: before registration, we structure.',
      sections: [
        { heading: 'Before the company: understand the real activity', body: 'The first mistake is to create a company before knowing exactly what it must do. Consulting, import-export, a family holding, a service company, a regional office, manufacturing or a commercial presence do not require the same structure. Bosphoras first clarifies the activity, shareholders, countries involved, clients, flows, banking needs, premises and tax exposure.', bullets: ['Business model, countries of invoicing and expected flows', 'Commercial presence, operating company, holding, office or service structure', 'Banking, accounting, legal and administrative needs before incorporation', 'Coordination with qualified lawyers, tax advisors and accountants'] },
        { heading: 'A company that works, not only a company that exists', body: 'Registration is not enough. A company must invoice, receive funds, pay, hire, rent, sign, justify flows, keep clean accounting and answer questions from a bank or international partner. Bosphoras coordinates operational steps so the company becomes a usable tool, not just an administrative document.', bullets: ['Company formation coordinated with qualified professionals', 'Accounting, tax, payroll and documentation setup', 'Banking file preparation and business evidence', 'Offices, address, insurance, contracts, translations and launch organization'] },
        { heading: 'Banking, compliance and source of funds', body: 'Banking is often the sensitive point. Banks do not only look at company documents: they review shareholders, source of funds, residence country, real activity, clients, amounts, currencies and coherence. Bosphoras prepares the ground without promising the bank decision. The objective is a clear, prudent and professional file.', bullets: ['Banking narrative: who you are, what the company does and why Turkey', 'Source of funds, expected flows and activity documentation', 'Coordination with banks, private bankers or financial contacts when possible', 'Prudent approach: no bank account guarantee and no unrealistic promise'] },
        { heading: 'Tax, VAT, payroll and accounting without improvisation', body: 'A poorly structured company can become expensive: VAT misunderstood, payroll not anticipated, incomplete contracts, personal tax forgotten, inconsistency between residence and activity. Bosphoras coordinates key questions with accountants, tax advisors and lawyers so the founder understands what is being created and what obligations follow.', bullets: ['Accounting, filings, VAT, withholding, payroll and recurring obligations', 'Coordination between company tax and founder personal tax exposure', 'Client, supplier, employee, shareholder and service provider contracts', 'Document discipline from day one'] },
        { heading: 'Who is it for?', body: 'Bosphoras supports clients for whom a Turkish company is part of a wider project: relocation, investment, import-export, international services, property, regional office, family activity or private presence. The private desk connects the company with the client’s real life: banking, residence, tax, housing, offices, insurance, transport and local network.', bullets: ['Foreign entrepreneurs building a presence in Turkey', 'Investors seeking a clean structure for operations or participations', 'Families and directors organizing a long-term presence across countries', 'Consulting, services, international trade, property, industry or regional offices'] },
      ],
      faqs: [
        { question: 'Can a foreigner create a company in Turkey?', answer: 'In many cases, yes, depending on activity, applicable rules and required checks. Bosphoras coordinates the analysis with qualified professionals before launching the setup.' },
        { question: 'Which company type should I choose in Turkey?', answer: 'The choice depends on activity, shareholders, tax, banking, liability and future plans. Options should be reviewed with a lawyer and accountant before a decision.' },
        { question: 'Does Bosphoras guarantee a business bank account?', answer: 'No. Banks decide independently. Bosphoras helps prepare a coherent, documented and professional file to make the project readable.' },
        { question: 'Should I create a company before applying for residence?', answer: 'Not automatically. Company and residence are different topics and must be coordinated according to the founder profile, residence country and real project.' },
        { question: 'Can you coordinate accountant, lawyer, bank and offices?', answer: 'Yes. Bosphoras organizes the right contacts, follows the steps and keeps legal, tax, banking and operational decisions aligned.' },
        { question: 'Is a Turkish company suitable for import-export or international services?', answer: 'It can be, but only after reviewing activity, countries involved, contracts, banking, VAT, logistics and founder tax exposure.' },
      ],
      cta: { label: 'Structure my Turkish company', href: '/private-assessment', secondaryLabel: 'Legal and tax advisory', secondaryHref: '/services/legal-tax-advisory' },
      jsonLdType: 'Service',
      internalLinks: [
        { pageId: 'legal-tax', label: 'Legal and tax advisory' },
        { pageId: 'relocate', label: 'Relocate to Turkey' },
        { pageId: 'offices', label: 'Offices in Turkey' },
        { pageId: 'compliance', label: 'Compliance and trust' },
        { pageId: 'private-assessment', label: 'Private assessment' },
      ],
    },
  ],
  ru: [
    {
      id: 'business-setup',
      locale: 'ru',
      slug: '/uslugi/sozdanie-kompanii',
      title: 'Создание компании в Турции: банк, бухгалтерия, compliance | Bosphoras',
      h1: 'Создать компанию в Турции со структурой, банком и compliance',
      metaDescription:
        'Создание компании в Турции для иностранных предпринимателей и инвесторов: структура, налоги, банк, бухгалтерия, офисы, payroll, compliance и частная координация.',
      shortIntro:
        'Создать компанию в Турции может казаться быстрым процессом. Создать правильную структуру для международного предпринимателя, инвестора или семьи — это другой уровень. Вопрос не только в регистрации: важны банк, бухгалтерия, налоги, потоки, договоры, офис, команда, compliance и связь с личной резиденцией. Bosphoras координирует создание компании как частный офис: сначала структура, потом регистрация.',
      sections: [
        { heading: 'До компании: понять реальную деятельность', body: 'Первая ошибка — открыть компанию до того, как понятно, что именно она должна делать. Consulting, import-export, family holding, сервисная компания, региональный офис, производство или коммерческое присутствие требуют разных решений. Bosphoras сначала уточняет деятельность, участников, страны, клиентов, финансовые потоки, банковские потребности, офис и налоговую экспозицию.', bullets: ['Анализ бизнес-модели, стран выставления счетов и ожидаемых потоков', 'Выбор между коммерческим присутствием, операционной компанией, holding, офисом или сервисной структурой', 'Банковские, бухгалтерские, юридические и административные потребности до регистрации', 'Координация с квалифицированными юристами, налоговыми консультантами и бухгалтерами'] },
        { heading: 'Компания, которая работает, а не просто зарегистрирована', body: 'Регистрации недостаточно. Компания должна выставлять счета, получать средства, платить, нанимать, арендовать, подписывать договоры, объяснять потоки, вести бухгалтерию и отвечать на вопросы банка или международного партнёра. Bosphoras координирует операционные шаги, чтобы компания стала рабочим инструментом.', bullets: ['Координация создания компании с компетентными специалистами', 'Бухгалтерская, налоговая, payroll и документальная настройка', 'Подготовка банковского файла и доказательств деятельности', 'Офис, адрес, страховка, договоры, переводы и организация запуска'] },
        { heading: 'Банк, compliance и происхождение средств', body: 'Банк часто самый чувствительный этап. Банки смотрят не только на документы компании: они анализируют участников, происхождение средств, страну резиденции, реальную деятельность, клиентов, суммы, валюты и логичность файла. Bosphoras готовит основу, не обещая банковского решения.', bullets: ['Банковский narrative: кто вы, что делает компания и почему Турция', 'Документация происхождения средств, ожидаемых потоков и деятельности', 'Координация с банками, private bankers или финансовыми контактами, когда возможно', 'Осторожный подход: без гарантии открытия счёта и без нереалистичных обещаний'] },
        { heading: 'Налоги, НДС, payroll и бухгалтерия без импровизации', body: 'Неправильно структурированная компания может дорого стоить: неверное понимание НДС, payroll не подготовлен, договоры неполные, личные налоги забыты, связь между резиденцией и активностью не продумана. Bosphoras координирует ключевые вопросы с бухгалтерами, налоговыми консультантами и юристами.', bullets: ['Бухгалтерия, отчётность, НДС, удержания, payroll и регулярные обязательства', 'Связь налогов компании и личной налоговой экспозиции основателя', 'Договоры с клиентами, поставщиками, сотрудниками, участниками и подрядчиками', 'Документальная дисциплина с первого дня'] },
        { heading: 'Для каких профилей?', body: 'Bosphoras работает с клиентами, для которых турецкая компания является частью более широкой стратегии: переезд, инвестиции, import-export, международные услуги, недвижимость, региональный офис, семейная деятельность или private presence. Частный офис связывает компанию с реальной жизнью клиента: банк, резиденция, налоги, жильё, офисы, страховка, транспорт и локальная сеть.', bullets: ['Иностранные предприниматели, создающие присутствие в Турции', 'Инвесторы, которым нужна чистая структура для операций или участий', 'Семьи и руководители, организующие долгосрочное присутствие между странами', 'Consulting, услуги, международная торговля, недвижимость, индустрия или региональные офисы'] },
      ],
      faqs: [
        { question: 'Может ли иностранец создать компанию в Турции?', answer: 'Во многих случаях да, в зависимости от деятельности, применимых правил и проверок. Bosphoras координирует анализ с компетентными специалистами до запуска.' },
        { question: 'Какой тип компании выбрать в Турции?', answer: 'Выбор зависит от деятельности, участников, налогов, банка, ответственности и будущих планов. Варианты нужно изучить с юристом и бухгалтером.' },
        { question: 'Гарантирует ли Bosphoras открытие бизнес-счёта?', answer: 'Нет. Банки принимают решения самостоятельно. Bosphoras помогает подготовить логичный, документированный и профессиональный файл.' },
        { question: 'Нужно ли создать компанию до подачи на резиденцию?', answer: 'Не автоматически. Компания и резиденция — разные темы, которые нужно координировать по профилю основателя, стране резиденции и реальному проекту.' },
        { question: 'Можете ли вы координировать бухгалтера, юриста, банк и офис?', answer: 'Да. Bosphoras организует правильных специалистов, следит за этапами и связывает юридические, налоговые, банковские и операционные решения.' },
        { question: 'Подходит ли турецкая компания для import-export или international services?', answer: 'Может подходить, но только после анализа деятельности, стран, договоров, банка, НДС, логистики и налоговой экспозиции основателя.' },
      ],
      cta: { label: 'Структурировать компанию в Турции', href: '/chastnaya-konsultatsiya', secondaryLabel: 'Юридическая и налоговая координация', secondaryHref: '/uslugi/yuridicheskie-nalogovye-konsultatsii' },
      jsonLdType: 'Service',
      internalLinks: [
        { pageId: 'legal-tax', label: 'Юридическая и налоговая координация' },
        { pageId: 'relocate', label: 'Переезд в Турцию' },
        { pageId: 'offices', label: 'Офисы в Турции' },
        { pageId: 'compliance', label: 'Compliance и доверие' },
        { pageId: 'private-assessment', label: 'Частная консультация' },
      ],
    },
  ],
  ar: [
    {
      id: 'business-setup',
      locale: 'ar',
      slug: '/خدمات/تأسيس-الشركات',
      title: 'تأسيس شركة في تركيا: بنك، محاسبة، امتثال | Bosphoras',
      h1: 'تأسيس شركة في تركيا بهيكل واضح وبنك وامتثال',
      metaDescription:
        'تأسيس شركة في تركيا لرواد الأعمال والمستثمرين الأجانب: الهيكل القانوني، الضرائب، البنك، المحاسبة، المكاتب، الرواتب، الامتثال والتنسيق الخاص.',
      shortIntro:
        'قد يبدو تأسيس شركة في تركيا سريعاً. لكن بناء الهيكل الصحيح لرائد أعمال دولي أو مستثمر أو عائلة يحتاج إلى منهجية. الموضوع الحقيقي ليس التسجيل فقط: البنك، المحاسبة، الضرائب، التدفقات، العقود، المكاتب، الفريق، الامتثال والعلاقة مع الإقامة الشخصية كلها عناصر أساسية. ينسق Bosphoras تأسيس الشركة كمكتب خاص: قبل التسجيل، نضع الهيكل.',
      sections: [
        { heading: 'قبل الشركة: فهم النشاط الحقيقي', body: 'الخطأ الأول هو تأسيس شركة قبل معرفة ما يجب أن تقوم به فعلاً. الاستشارات، import-export، holding عائلي، شركة خدمات، مكتب إقليمي، نشاط صناعي أو حضور تجاري لا تحتاج إلى نفس الهيكل. يبدأ Bosphoras بتوضيح النشاط، الشركاء، البلدان، العملاء، التدفقات المالية، احتياجات البنك، المقر والتعرض الضريبي.', bullets: ['تحليل نموذج العمل، بلدان الفوترة والتدفقات المتوقعة', 'الاختيار بين حضور تجاري، شركة تشغيلية، holding، مكتب أو هيكل خدمات', 'قراءة الاحتياجات البنكية والمحاسبية والقانونية والإدارية قبل التأسيس', 'تنسيق مع محامين ومستشارين ضريبيين ومحاسبين مؤهلين'] },
        { heading: 'شركة تعمل، لا شركة مسجلة فقط', body: 'التسجيل وحده لا يكفي. يجب أن تستطيع الشركة إصدار فواتير، استلام الأموال، الدفع، التوظيف، الإيجار، التوقيع، تبرير التدفقات، إدارة محاسبة نظيفة والإجابة عن أسئلة بنك أو شريك دولي. ينسق Bosphoras الخطوات التشغيلية حتى تصبح الشركة أداة قابلة للاستخدام.', bullets: ['تنسيق تأسيس الشركة مع المهنيين المؤهلين', 'إعداد المحاسبة والضرائب والرواتب والملفات', 'تحضير الملف البنكي وإثباتات النشاط', 'مكاتب، عنوان، تأمين، عقود، ترجمات وتنظيم الانطلاق'] },
        { heading: 'البنك والامتثال ومصدر الأموال', body: 'غالباً يكون البنك المرحلة الأكثر حساسية. البنوك لا تنظر إلى المستندات فقط: تراجع الشركاء، مصدر الأموال، بلد الإقامة، النشاط الحقيقي، العملاء، المبالغ، العملات ومنطق الملف. Bosphoras يجهز الأرضية دون وعد بقرار البنك.', bullets: ['رواية بنكية واضحة: من أنتم، ماذا تفعل الشركة، ولماذا تركيا', 'توثيق مصدر الأموال والتدفقات المتوقعة والنشاط', 'تنسيق مع بنوك أو private bankers أو جهات مالية عند الإمكان', 'نهج حذر: لا ضمان لفتح الحساب ولا وعود غير واقعية'] },
        { heading: 'الضرائب وVAT والرواتب والمحاسبة دون ارتجال', body: 'الشركة غير المنظمة قد تصبح مكلفة: فهم خاطئ لـ VAT، رواتب غير متوقعة، عقود ناقصة، ضرائب شخصية منسية، وعدم انسجام بين الإقامة والنشاط. ينسق Bosphoras الأسئلة الأساسية مع المحاسبين والمستشارين الضريبيين والمحامين.', bullets: ['محاسبة، تصريحات، VAT، اقتطاعات، رواتب والتزامات دورية', 'تنسيق بين ضرائب الشركة والوضع الضريبي الشخصي للمؤسس', 'عقود العملاء والموردين والموظفين والشركاء ومقدمي الخدمات', 'انضباط مستندي منذ اليوم الأول'] },
        { heading: 'لأي ملفات؟', body: 'يرافق Bosphoras العملاء الذين تكون الشركة التركية جزءاً من مشروع أوسع: انتقال، استثمار، import-export، خدمات دولية، عقار، مكتب إقليمي، نشاط عائلي أو حضور خاص. يربط المكتب الخاص الشركة بالحياة الواقعية للعميل: البنك، الإقامة، الضرائب، السكن، المكاتب، التأمين، النقل والشبكة المحلية.', bullets: ['رواد أعمال أجانب يبنون حضوراً في تركيا', 'مستثمرون يبحثون عن هيكل نظيف للعمليات أو المشاركات', 'عائلات ومديرون ينظمون حضوراً طويل الأمد بين عدة بلدان', 'استشارات، خدمات، تجارة دولية، عقارات، صناعة أو مكاتب إقليمية'] },
      ],
      faqs: [
        { question: 'هل يمكن للأجنبي تأسيس شركة في تركيا؟', answer: 'في كثير من الحالات نعم، حسب النشاط والقواعد والفحوصات المطلوبة. ينسق Bosphoras التحليل مع المهنيين المؤهلين قبل الإطلاق.' },
        { question: 'ما نوع الشركة المناسب في تركيا؟', answer: 'يعتمد الاختيار على النشاط، الشركاء، الضرائب، البنك، المسؤولية والخطط المستقبلية. يجب مراجعة الخيارات مع محام ومحاسب قبل القرار.' },
        { question: 'هل يضمن Bosphoras فتح حساب بنكي للشركة؟', answer: 'لا. البنوك تقرر بشكل مستقل. يساعد Bosphoras في إعداد ملف واضح وموثق ومهني يجعل المشروع مفهوماً.' },
        { question: 'هل يجب تأسيس الشركة قبل طلب الإقامة؟', answer: 'ليس بالضرورة. الشركة والإقامة موضوعان مختلفان ويجب تنسيقهما حسب ملف المؤسس وبلد الإقامة والمشروع الحقيقي.' },
        { question: 'هل تنسقون المحاسب والمحامي والبنك والمكتب؟', answer: 'نعم. هذا هو دور Bosphoras: تنظيم الجهات المناسبة، متابعة الخطوات والحفاظ على الانسجام بين القانون والضرائب والبنك والتشغيل.' },
        { question: 'هل الشركة التركية مناسبة لـ import-export أو الخدمات الدولية؟', answer: 'قد تكون مناسبة، ولكن بعد تحليل النشاط والبلدان والعقود والبنك وVAT واللوجستيك والوضع الضريبي للمؤسس.' },
      ],
      cta: { label: 'هيكلة شركتي في تركيا', href: '/تقييم-خاص', secondaryLabel: 'الاستشارات القانونية والضريبية', secondaryHref: '/خدمات/استشارات-قانونية-ضريبية' },
      jsonLdType: 'Service',
      internalLinks: [
        { pageId: 'legal-tax', label: 'التنسيق القانوني والضريبي' },
        { pageId: 'relocate', label: 'الانتقال إلى تركيا' },
        { pageId: 'offices', label: 'مكاتب في تركيا' },
        { pageId: 'compliance', label: 'الامتثال والثقة' },
        { pageId: 'private-assessment', label: 'تقييم خاص' },
      ],
    },
  ],
};
