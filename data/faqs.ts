export interface FAQ {
  id: string;
  questions: Record<string, string>;
  answers: Record<string, string>;
  category: 'general' | 'legal' | 'investment' | 'relocation' | 'membership';
}

export const faqs: FAQ[] = [
  {
    id: 'what-is-bosphoras',
    category: 'general',
    questions: {
      fr: "Qu'est-ce que Bosphoras ?",
      en: 'What is Bosphoras?',
      ru: 'Что такое Bosphoras?',
      ar: 'ما هو بوسفوراس؟',
    },
    answers: {
      fr: "Bosphoras est un bureau privé basé en Turquie, dédié aux investisseurs internationaux, familles et entrepreneurs. Nous coordonnons un réseau de professionnels qualifiés pour vous accompagner dans chaque aspect de votre vie et de vos projets en Turquie, avec une discrétion et une qualité de service sans compromis.",
      en: "Bosphoras is a private office based in Turkey, dedicated to international investors, families and entrepreneurs. We coordinate a network of qualified professionals to support you in every aspect of your life and projects in Turkey, with uncompromising discretion and quality of service.",
      ru: 'Bosphoras — это частный офис, базирующийся в Турции, предназначенный для международных инвесторов, семей и предпринимателей. Мы координируем сеть квалифицированных специалистов для поддержки вас во всех аспектах вашей жизни и проектов в Турции с неизменной дискретностью и качеством обслуживания.',
      ar: 'بوسفوراس هو مكتب خاص مقره تركيا، مخصص للمستثمرين الدوليين والعائلات ورجال الأعمال. ننسق شبكة من المتخصصين المؤهلين لدعمكم في كل جانب من جوانب حياتكم ومشاريعكم في تركيا، بسرية وجودة خدمة لا تتنازل.',
    },
  },
  {
    id: 'citizenship-investment',
    category: 'investment',
    questions: {
      fr: "La citoyenneté turque par l'investissement est-elle accessible ?",
      en: 'Is Turkish citizenship by investment accessible?',
      ru: 'Доступно ли турецкое гражданство через инвестиции?',
      ar: 'هل الجنسية التركية عن طريق الاستثمار متاحة؟',
    },
    answers: {
      fr: "Le programme de citoyenneté turque par l'investissement immobilier est actif, sous réserve du respect de conditions légales précises. Les montants et critères en vigueur doivent être vérifiés avec un professionnel juridique habilité. Bosphoras vous oriente vers les conseils compétents pour une analyse confidentielle de votre situation.",
      en: "The Turkish citizenship by real estate investment programme is active, subject to compliance with precise legal conditions. The current amounts and criteria must be verified with a qualified legal professional. Bosphoras directs you to competent advisors for a confidential analysis of your situation.",
      ru: 'Программа турецкого гражданства через инвестиции в недвижимость действует при соблюдении точных юридических условий. Действующие суммы и критерии должны быть проверены квалифицированным юристом. Bosphoras направляет вас к компетентным консультантам для конфиденциального анализа вашей ситуации.',
      ar: 'برنامج الجنسية التركية عن طريق الاستثمار العقاري نشط، مع الالتزام بشروط قانونية دقيقة. يجب التحقق من المبالغ والمعايير المعمول بها مع متخصص قانوني مؤهل. توجهكم بوسفوراس إلى مستشارين أكفاء لتحليل وضعكم بسرية.',
    },
  },
  {
    id: 'tax-residency',
    category: 'legal',
    questions: {
      fr: "Quels sont les avantages fiscaux en Turquie pour les non-résidents ?",
      en: 'What are the tax benefits in Turkey for non-residents?',
      ru: 'Каковы налоговые преимущества в Турции для нерезидентов?',
      ar: 'ما هي المزايا الضريبية في تركيا لغير المقيمين؟',
    },
    answers: {
      fr: "La fiscalité turque comporte plusieurs dispositions favorables pour les résidents fiscaux et les investisseurs étrangers. Ces avantages sont soumis à des conditions précises, des traités internationaux et des textes légaux en constante évolution. Toute planification fiscale doit être validée par un conseiller fiscal agréé. Bosphoras vous connecte aux experts appropriés.",
      en: "Turkish taxation includes several favourable provisions for tax residents and foreign investors. These benefits are subject to precise conditions, international treaties and constantly evolving legal texts. Any tax planning must be validated by an accredited tax advisor. Bosphoras connects you with the appropriate experts.",
      ru: 'Турецкое налогообложение включает несколько благоприятных положений для налоговых резидентов и иностранных инвесторов. Эти преимущества зависят от точных условий, международных договоров и постоянно развивающегося законодательства. Любое налоговое планирование должно быть подтверждено аккредитованным налоговым консультантом. Bosphoras связывает вас с соответствующими экспертами.',
      ar: 'تتضمن الضرائب التركية عدة أحكام مواتية للمقيمين الضريبيين والمستثمرين الأجانب. تخضع هذه المزايا لشروط دقيقة ومعاهدات دولية ونصوص قانونية في تطور مستمر. يجب التحقق من أي تخطيط ضريبي من قِبَل مستشار ضريبي معتمد. تربطكم بوسفوراس بالخبراء المناسبين.',
    },
  },
  {
    id: 'services-scope',
    category: 'general',
    questions: {
      fr: "Quels types de clients accompagnez-vous ?",
      en: 'What types of clients do you serve?',
      ru: 'Каких клиентов вы обслуживаете?',
      ar: 'ما أنواع العملاء الذين تخدمونهم؟',
    },
    answers: {
      fr: "Nous accompagnons principalement des investisseurs privés, des familles fortunées, des entrepreneurs internationaux, des dirigeants d'entreprise et des clients HNWI souhaitant développer une présence en Turquie. Notre approche est individualisée et confidentielle, quel que soit votre pays d'origine.",
      en: 'We primarily serve private investors, affluent families, international entrepreneurs, corporate executives and HNWI clients wishing to develop a presence in Turkey. Our approach is individualised and confidential, regardless of your country of origin.',
      ru: 'Мы в первую очередь обслуживаем частных инвесторов, состоятельные семьи, международных предпринимателей, корпоративных руководителей и клиентов HNWI, желающих развить присутствие в Турции. Наш подход индивидуален и конфиденциален независимо от страны происхождения.',
      ar: 'نخدم بشكل رئيسي المستثمرين الخاصين والعائلات الثرية ورجال الأعمال الدوليين والمديرين التنفيذيين وعملاء HNWI الراغبين في تطوير حضور في تركيا. نهجنا فردي وسري بغض النظر عن بلد المنشأ.',
    },
  },
  {
    id: 'process',
    category: 'general',
    questions: {
      fr: "Comment se déroule une première prise de contact ?",
      en: 'How does an initial contact work?',
      ru: 'Как проходит первый контакт?',
      ar: 'كيف يتم الاتصال الأولي؟',
    },
    answers: {
      fr: "Tout commence par un entretien confidentiel avec un membre de notre équipe. Nous établissons ensemble une carte de vos besoins, contraintes et objectifs, puis nous proposons un plan d'accompagnement sur mesure. Aucun engagement n'est requis lors de ce premier échange.",
      en: "Everything begins with a confidential conversation with a member of our team. Together, we map your needs, constraints and objectives, then propose a bespoke support plan. No commitment is required during this initial exchange.",
      ru: 'Всё начинается с конфиденциальной беседы с членом нашей команды. Вместе мы составляем карту ваших потребностей, ограничений и целей, затем предлагаем индивидуальный план сопровождения. Никаких обязательств при этом первом обмене не требуется.',
      ar: 'يبدأ كل شيء بمحادثة سرية مع أحد أعضاء فريقنا. نضع معاً خريطة لاحتياجاتكم وقيودكم وأهدافكم، ثم نقترح خطة دعم مخصصة. لا يُطلب أي التزام خلال هذا التبادل الأولي.',
    },
  },
  {
    id: 'membership',
    category: 'membership',
    questions: {
      fr: "Qu'est-ce que le cercle Bosphoras ?",
      en: 'What is the Bosphoras circle?',
      ru: 'Что такое круг Bosphoras?',
      ar: 'ما هو دائرة بوسفوراس؟',
    },
    answers: {
      fr: "Le cercle Bosphoras est un programme d'adhésion privé qui offre un accès prioritaire à notre équipe, à notre réseau partenaire et à des événements exclusifs. L'adhésion est sur invitation ou sur demande, après évaluation de votre profil.",
      en: "The Bosphoras circle is a private membership programme offering priority access to our team, partner network and exclusive events. Membership is by invitation or application, following a profile evaluation.",
      ru: 'Круг Bosphoras — это частная членская программа, предлагающая приоритетный доступ к нашей команде, сети партнёров и эксклюзивным мероприятиям. Членство осуществляется по приглашению или по заявке после оценки профиля.',
      ar: 'دائرة بوسفوراس هي برنامج عضوية خاص يوفر وصولاً ذا أولوية إلى فريقنا وشبكة شركائنا والفعاليات الحصرية. العضوية بالدعوة أو الطلب، بعد تقييم الملف الشخصي.',
    },
  },
];
