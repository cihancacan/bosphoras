import type { Locale } from '@/lib/i18n';
import type { MainPageContent } from './types';

const p = (page: MainPageContent): MainPageContent => page;

export const uxSeoCleanupOverrides: Record<Locale, MainPageContent[]> = {
  fr: [
    p({
      id: 'faq',
      locale: 'fr',
      slug: '/questions-frequentes',
      title: 'Questions fréquentes | Bosphoras',
      h1: 'Questions fréquentes',
      metaDescription: 'Questions fréquentes sur Bosphoras, le private desk pour relocation, fiscalité, société, santé, assurance, immobilier, conciergerie et accès privé en Turquie.',
      shortIntro: 'Cette page répond aux questions les plus fréquentes avant une demande confidentielle auprès de Bosphoras. Les réponses restent prudentes : les décisions juridiques, fiscales, médicales, bancaires, assurantielles ou immobilières doivent toujours être confirmées avec les professionnels qualifiés concernés.',
      sections: [
        { heading: 'Ce que fait Bosphoras', body: 'Bosphoras est un private desk pour la Turquie. Nous coordonnons des professionnels, des prestataires et des interlocuteurs sélectionnés autour de projets privés : installation, fiscalité, société, immobilier, santé, assurance, bureaux, conciergerie de luxe et accès privé.' },
        { heading: 'Ce que Bosphoras ne fait pas', body: 'Bosphoras ne remplace pas les avocats, fiscalistes, médecins, assureurs, banquiers, agents immobiliers ou autres professionnels réglementés. Notre rôle est de filtrer, organiser, coordonner et protéger le parcours client.' },
        { heading: 'Comment commencer', body: 'Le point d’entrée recommandé est le diagnostic privé. Il permet de comprendre votre profil, votre pays de résidence, votre calendrier, votre budget, vos priorités et les professionnels à mobiliser.' },
      ],
      faqs: [
        { question: 'Bosphoras est-il une agence immobilière ?', answer: 'Non. Bosphoras peut coordonner des agents immobiliers sélectionnés, mais notre rôle est plus large : private desk, coordination et accompagnement confidentiel.' },
        { question: 'Bosphoras donne-t-il des conseils juridiques ou fiscaux ?', answer: 'Non. Les conseils juridiques ou fiscaux sont donnés par des professionnels qualifiés. Bosphoras coordonne et structure les échanges.' },
        { question: 'Peut-on travailler avec Bosphoras sans devenir membre ?', answer: 'Oui. L’accompagnement Private Desk classique peut être proposé à partir de 6 000 USD pour une année ou sur devis personnalisé.' },
        { question: 'Combien coûte l’adhésion Private Access ?', answer: 'L’adhésion Private Access fonctionne avec une admission annuelle de 10 000 USD et un retainer mensuel de 1 000 USD, sous réserve d’acceptation du profil.' },
        { question: 'Les accès restaurants, clubs, yachts ou jets sont-ils garantis ?', answer: 'Non. Bosphoras peut coordonner et prioriser les demandes lorsque cela est possible, mais les disponibilités, autorisations et conditions restent confirmées par les prestataires concernés.' },
      ],
      cta: { label: 'Demander un diagnostic privé', href: '/diagnostic-prive', secondaryLabel: 'Demande d’adhésion', secondaryHref: '/adhesion/demande-membre' },
      jsonLdType: 'FAQPage',
      internalLinks: [{ pageId: 'private-assessment', label: 'Diagnostic privé' }, { pageId: 'membership-application', label: 'Demande d’adhésion' }, { pageId: 'compliance', label: 'Conformité & confiance' }],
    }),
    p({
      id: 'offices',
      locale: 'fr',
      slug: '/services/bureaux',
      title: 'Bureaux privés et business en Turquie | Bosphoras',
      h1: 'Bureaux privés et solutions business en Turquie',
      metaDescription: 'Bosphoras coordonne bureaux privés, bureaux partagés premium, salles de réunion, domiciliation et solutions business à Istanbul, Bodrum et Antalya.',
      shortIntro: 'Pour les entrepreneurs, dirigeants et investisseurs internationaux, l’installation professionnelle en Turquie nécessite plus qu’une adresse. Bosphoras coordonne des solutions de bureaux, espaces premium, salles de réunion, domiciliation et interlocuteurs business adaptés au niveau du dossier.',
      sections: [
        { heading: 'Bureaux privés et espaces premium', body: 'Selon le projet, Bosphoras peut orienter vers des bureaux équipés, espaces de travail premium, bureaux partagés haut de gamme et solutions adaptées à une présence discrète ou active en Turquie.', bullets: ['Bureaux privés', 'Espaces premium', 'Salles de réunion', 'Solutions flexibles'] },
        { heading: 'Domiciliation et structure opérationnelle', body: 'Pour une création d’entreprise ou une présence locale, la question de l’adresse doit être cohérente avec l’activité, la banque, la comptabilité et la conformité.' },
        { heading: 'Coordination avec les autres services', body: 'Les bureaux sont souvent liés à la société, la comptabilité, les banques, les contrats, la fiscalité, les assurances et la relocation. Bosphoras garde une vision d’ensemble.' },
        { heading: 'Cadre et prudence', body: 'Les disponibilités, conditions locatives, autorisations, contrats et prix sont toujours confirmés directement avec les opérateurs et professionnels concernés.' },
      ],
      faqs: [
        { question: 'Bosphoras loue-t-il directement des bureaux ?', answer: 'Non. Bosphoras coordonne des solutions et interlocuteurs sélectionnés selon le dossier.' },
        { question: 'Peut-on lier bureau et création d’entreprise ?', answer: 'Oui. C’est souvent recommandé pour garder une structure cohérente entre société, banque, comptabilité et présence locale.' },
      ],
      cta: { label: 'Étudier une solution bureau', href: '/diagnostic-prive', secondaryLabel: 'Créer une entreprise', secondaryHref: '/services/creation-entreprise' },
      jsonLdType: 'Service',
      internalLinks: [{ pageId: 'business-setup', label: 'Création d’entreprise' }, { pageId: 'legal-tax', label: 'Conseil juridique & fiscal' }, { pageId: 'private-assessment', label: 'Diagnostic privé' }],
    }),
  ],
  en: [
    p({
      id: 'faq', locale: 'en', slug: '/faq', title: 'Frequently Asked Questions | Bosphoras', h1: 'Frequently asked questions', metaDescription: 'FAQ about Bosphoras private desk in Turkey: relocation, tax, company formation, healthcare, insurance, property, luxury concierge and private access.', shortIntro: 'This page answers the most common questions before a confidential request to Bosphoras. Answers remain cautious: legal, tax, medical, banking, insurance or property decisions must always be confirmed with qualified professionals.',
      sections: [
        { heading: 'What Bosphoras does', body: 'Bosphoras is a private desk for Turkey. We coordinate selected professionals, providers and contacts around private projects: relocation, tax, company, property, healthcare, insurance, offices, luxury concierge and private access.' },
        { heading: 'What Bosphoras does not do', body: 'Bosphoras does not replace lawyers, tax advisors, doctors, insurers, bankers, real estate agents or other regulated professionals. Our role is to filter, organise, coordinate and protect the client journey.' },
        { heading: 'How to start', body: 'The recommended entry point is the private assessment. It helps clarify your profile, country of residence, timeline, budget, priorities and the professionals to involve.' },
      ],
      faqs: [
        { question: 'Is Bosphoras a real estate agency?', answer: 'No. Bosphoras may coordinate selected real estate agents, but our role is broader: private desk, coordination and confidential support.' },
        { question: 'Does Bosphoras provide legal or tax advice?', answer: 'No. Legal or tax advice is delivered by qualified professionals. Bosphoras coordinates and structures the exchanges.' },
        { question: 'Can I work with Bosphoras without becoming a member?', answer: 'Yes. Classic Private Desk support may start from 6,000 USD for one year or by tailored quote.' },
        { question: 'How much does Private Access membership cost?', answer: 'Private Access membership has an annual admission of 10,000 USD and a monthly retainer of 1,000 USD, subject to profile acceptance.' },
        { question: 'Are restaurants, clubs, yachts or jets guaranteed?', answer: 'No. Bosphoras may coordinate and prioritise requests where possible, but availability, authorisations and conditions are confirmed by the relevant providers.' },
      ],
      cta: { label: 'Request a private assessment', href: '/private-assessment', secondaryLabel: 'Membership application', secondaryHref: '/membership/application' }, jsonLdType: 'FAQPage', internalLinks: [{ pageId: 'private-assessment', label: 'Private Assessment' }, { pageId: 'membership-application', label: 'Membership application' }, { pageId: 'compliance', label: 'Compliance & Trust' }],
    }),
    p({
      id: 'offices', locale: 'en', slug: '/services/offices', title: 'Private Offices and Business Solutions in Turkey | Bosphoras', h1: 'Private offices and business solutions in Turkey', metaDescription: 'Bosphoras coordinates private offices, premium shared offices, meeting rooms, domiciliation and business solutions in Istanbul, Bodrum and Antalya.', shortIntro: 'For international entrepreneurs, executives and investors, setting up a professional presence in Turkey requires more than an address. Bosphoras coordinates office solutions, premium spaces, meeting rooms, domiciliation and business contacts adapted to the level of the file.',
      sections: [
        { heading: 'Private offices and premium spaces', body: 'Depending on the project, Bosphoras may direct clients toward serviced offices, premium workspaces, high-end shared offices and solutions adapted to a discreet or active presence in Turkey.', bullets: ['Private offices', 'Premium spaces', 'Meeting rooms', 'Flexible solutions'] },
        { heading: 'Domiciliation and operational structure', body: 'For company formation or local presence, the address must be consistent with the activity, bank, accounting and compliance.' },
        { heading: 'Coordination with other services', body: 'Offices are often linked to company formation, accounting, banks, contracts, tax, insurance and relocation. Bosphoras keeps the overall view.' },
        { heading: 'Framework and prudence', body: 'Availability, rental terms, authorisations, contracts and prices are always confirmed directly with the relevant operators and professionals.' },
      ],
      faqs: [{ question: 'Does Bosphoras rent offices directly?', answer: 'No. Bosphoras coordinates selected solutions and contacts according to the file.' }, { question: 'Can office setup be linked to company formation?', answer: 'Yes. It is often recommended to keep consistency between company, bank, accounting and local presence.' }],
      cta: { label: 'Study an office solution', href: '/private-assessment', secondaryLabel: 'Company formation', secondaryHref: '/services/business-setup' }, jsonLdType: 'Service', internalLinks: [{ pageId: 'business-setup', label: 'Company formation' }, { pageId: 'legal-tax', label: 'Legal & Tax Advisory' }, { pageId: 'private-assessment', label: 'Private Assessment' }],
    }),
  ],
  ru: [
    p({
      id: 'faq', locale: 'ru', slug: '/voprosy-otvety', title: 'Вопросы и ответы | Bosphoras', h1: 'Часто задаваемые вопросы', metaDescription: 'FAQ о Bosphoras private desk в Турции: переезд, налоги, компания, здоровье, страхование, недвижимость, luxury concierge и private access.', shortIntro: 'Эта страница отвечает на частые вопросы перед конфиденциальным запросом в Bosphoras. Ответы остаются осторожными: юридические, налоговые, медицинские, банковские, страховые и имущественные решения должны подтверждаться с квалифицированными специалистами.',
      sections: [
        { heading: 'Что делает Bosphoras', body: 'Bosphoras — private desk для Турции. Мы координируем выбранных профессионалов, провайдеров и контакты вокруг частных проектов: переезд, налоги, компания, недвижимость, здоровье, страхование, офисы, luxury concierge и private access.' },
        { heading: 'Чего Bosphoras не делает', body: 'Bosphoras не заменяет юристов, налоговых консультантов, врачей, страховщиков, банкиров, агентов недвижимости или других регулируемых специалистов. Наша роль — фильтровать, организовывать, координировать и защищать путь клиента.' },
        { heading: 'Как начать', body: 'Рекомендуемая точка входа — частная консультация. Она помогает уточнить профиль, страну проживания, сроки, бюджет, приоритеты и специалистов, которых нужно подключить.' },
      ],
      faqs: [
        { question: 'Bosphoras — агентство недвижимости?', answer: 'Нет. Bosphoras может координировать выбранных агентов, но наша роль шире: private desk, координация и конфиденциальное сопровождение.' },
        { question: 'Bosphoras даёт юридические или налоговые советы?', answer: 'Нет. Юридические и налоговые советы дают квалифицированные специалисты. Bosphoras координирует и структурирует обмены.' },
        { question: 'Можно работать без членства?', answer: 'Да. Классическое сопровождение Private Desk может начинаться от 6 000 USD за год или по индивидуальному предложению.' },
        { question: 'Сколько стоит Private Access?', answer: 'Private Access включает ежегодный вступительный взнос 10 000 USD и ежемесячный retainer 1 000 USD, при условии одобрения профиля.' },
        { question: 'Рестораны, клубы, яхты или jets гарантированы?', answer: 'Нет. Bosphoras может координировать и приоритизировать запросы, но доступность, разрешения и условия подтверждаются соответствующими поставщиками.' },
      ],
      cta: { label: 'Получить частную консультацию', href: '/chastnaya-konsultatsiya', secondaryLabel: 'Заявка на членство', secondaryHref: '/chlenstvo/zayavka' }, jsonLdType: 'FAQPage', internalLinks: [{ pageId: 'private-assessment', label: 'Частная консультация' }, { pageId: 'membership-application', label: 'Заявка на членство' }, { pageId: 'compliance', label: 'Compliance & Trust' }],
    }),
    p({
      id: 'offices', locale: 'ru', slug: '/uslugi/ofisy', title: 'Частные офисы и business solutions в Турции | Bosphoras', h1: 'Частные офисы и business solutions в Турции', metaDescription: 'Bosphoras координирует частные офисы, premium shared offices, переговорные, domiciliation и business solutions в Стамбуле, Бодруме и Анталье.', shortIntro: 'Для международных предпринимателей, руководителей и инвесторов профессиональное присутствие в Турции требует больше, чем адрес. Bosphoras координирует офисные решения, premium spaces, переговорные, domiciliation и business contacts, адаптированные к уровню дела.',
      sections: [
        { heading: 'Частные офисы и premium spaces', body: 'В зависимости от проекта Bosphoras может направить к serviced offices, premium workspaces, high-end shared offices и решениям для дискретного или активного присутствия в Турции.', bullets: ['Частные офисы', 'Premium spaces', 'Переговорные', 'Гибкие решения'] },
        { heading: 'Domiciliation и операционная структура', body: 'Для создания компании или локального присутствия адрес должен быть согласован с деятельностью, банком, бухгалтерией и compliance.' },
        { heading: 'Координация с другими услугами', body: 'Офисы часто связаны с созданием компании, бухгалтерией, банками, контрактами, налогами, страхованием и переездом. Bosphoras сохраняет общую картину.' },
        { heading: 'Рамки и осторожность', body: 'Доступность, условия аренды, разрешения, контракты и цены всегда подтверждаются напрямую с соответствующими операторами и профессионалами.' },
      ],
      faqs: [{ question: 'Bosphoras арендует офисы напрямую?', answer: 'Нет. Bosphoras координирует выбранные решения и контакты согласно делу.' }, { question: 'Можно связать офис с созданием компании?', answer: 'Да. Это часто рекомендуется для согласованности между компанией, банком, бухгалтерией и локальным присутствием.' }],
      cta: { label: 'Изучить офисное решение', href: '/chastnaya-konsultatsiya', secondaryLabel: 'Создание компании', secondaryHref: '/uslugi/sozdanie-kompanii' }, jsonLdType: 'Service', internalLinks: [{ pageId: 'business-setup', label: 'Создание компании' }, { pageId: 'legal-tax', label: 'Право и налоги' }, { pageId: 'private-assessment', label: 'Частная консультация' }],
    }),
  ],
  ar: [
    p({
      id: 'faq', locale: 'ar', slug: '/أسئلة-شائعة', title: 'الأسئلة الشائعة | Bosphoras', h1: 'الأسئلة الشائعة', metaDescription: 'أسئلة شائعة حول Bosphoras private desk في تركيا: الانتقال، الضرائب، الشركة، الصحة، التأمين، العقار، luxury concierge وprivate access.', shortIntro: 'تجيب هذه الصفحة عن الأسئلة الأكثر شيوعاً قبل إرسال طلب سري إلى Bosphoras. تبقى الإجابات حذرة: يجب تأكيد القرارات القانونية والضريبية والطبية والمصرفية والتأمينية والعقارية مع مهنيين مؤهلين.',
      sections: [
        { heading: 'ما الذي يقوم به Bosphoras', body: 'Bosphoras هو private desk لتركيا. ننسق مهنيين ومزودين وجهات مختارة حول مشاريع خاصة: الانتقال، الضرائب، الشركة، العقار، الصحة، التأمين، المكاتب، luxury concierge وprivate access.' },
        { heading: 'ما الذي لا يقوم به Bosphoras', body: 'Bosphoras لا يحل محل المحامين أو المستشارين الضريبيين أو الأطباء أو شركات التأمين أو المصرفيين أو وكلاء العقار أو غيرهم من المهنيين المنظمين. دورنا هو التصفية والتنظيم والتنسيق وحماية رحلة العميل.' },
        { heading: 'كيف تبدأ', body: 'نقطة البداية الموصى بها هي التقييم الخاص. يساعد على توضيح الملف وبلد الإقامة والجدول الزمني والميزانية والأولويات والمهنيين المطلوب إشراكهم.' },
      ],
      faqs: [
        { question: 'هل Bosphoras وكالة عقارية؟', answer: 'لا. يمكن لـ Bosphoras تنسيق وكلاء عقاريين مختارين، لكن دوره أوسع: private desk وتنسيق ودعم سري.' },
        { question: 'هل يقدم Bosphoras استشارات قانونية أو ضريبية؟', answer: 'لا. تقدم الاستشارات القانونية والضريبية من مهنيين مؤهلين. يقوم Bosphoras بتنسيق وتنظيم التبادلات.' },
        { question: 'هل يمكن العمل مع Bosphoras بدون عضوية؟', answer: 'نعم. يمكن أن يبدأ دعم Private Desk الكلاسيكي من 6,000 USD لمدة سنة أو بعرض مخصص.' },
        { question: 'كم تكلفة عضوية Private Access؟', answer: 'تتضمن عضوية Private Access رسوم قبول سنوية 10,000 USD وretainer شهري 1,000 USD، مع خضوع الملف للموافقة.' },
        { question: 'هل المطاعم أو النوادي أو اليخوت أو الطائرات الخاصة مضمونة؟', answer: 'لا. يمكن لـ Bosphoras التنسيق وإعطاء الأولوية عندما يكون ذلك ممكناً، لكن التوفر والتراخيص والشروط تؤكدها الجهات المعنية.' },
      ],
      cta: { label: 'طلب تقييم خاص', href: '/تقييم-خاص', secondaryLabel: 'طلب عضوية', secondaryHref: '/عضوية/طلب' }, jsonLdType: 'FAQPage', internalLinks: [{ pageId: 'private-assessment', label: 'تقييم خاص' }, { pageId: 'membership-application', label: 'طلب عضوية' }, { pageId: 'compliance', label: 'الامتثال والثقة' }],
    }),
    p({
      id: 'offices', locale: 'ar', slug: '/خدمات/المكاتب', title: 'مكاتب خاصة وحلول أعمال في تركيا | Bosphoras', h1: 'مكاتب خاصة وحلول أعمال في تركيا', metaDescription: 'ينسق Bosphoras مكاتب خاصة، premium shared offices، غرف اجتماعات، domiciliation وحلول أعمال في إسطنبول وبودروم وأنطاليا.', shortIntro: 'بالنسبة لرواد الأعمال والمديرين والمستثمرين الدوليين، يتطلب الحضور المهني في تركيا أكثر من عنوان. ينسق Bosphoras حلول المكاتب، premium spaces، غرف الاجتماعات، domiciliation وجهات الأعمال المناسبة لمستوى الملف.',
      sections: [
        { heading: 'مكاتب خاصة وpremium spaces', body: 'حسب المشروع، يمكن لـ Bosphoras توجيه العملاء نحو serviced offices، premium workspaces، high-end shared offices وحلول مناسبة لحضور سري أو نشط في تركيا.', bullets: ['مكاتب خاصة', 'Premium spaces', 'غرف اجتماعات', 'حلول مرنة'] },
        { heading: 'Domiciliation وهيكلة تشغيلية', body: 'بالنسبة لتأسيس شركة أو حضور محلي، يجب أن يكون العنوان منسجماً مع النشاط والبنك والمحاسبة والامتثال.' },
        { heading: 'تنسيق مع الخدمات الأخرى', body: 'غالباً ما ترتبط المكاتب بتأسيس الشركة والمحاسبة والبنوك والعقود والضرائب والتأمين والانتقال. يحافظ Bosphoras على الرؤية الشاملة.' },
        { heading: 'الإطار والحذر', body: 'يتم دائماً تأكيد التوفر وشروط الإيجار والتراخيص والعقود والأسعار مباشرةً مع المشغلين والمهنيين المعنيين.' },
      ],
      faqs: [{ question: 'هل يؤجر Bosphoras المكاتب مباشرة؟', answer: 'لا. ينسق Bosphoras حلولاً وجهات مختارة حسب الملف.' }, { question: 'هل يمكن ربط المكتب بتأسيس الشركة؟', answer: 'نعم. غالباً ما يوصى بذلك للحفاظ على التناسق بين الشركة والبنك والمحاسبة والحضور المحلي.' }],
      cta: { label: 'دراسة حل مكتبي', href: '/تقييم-خاص', secondaryLabel: 'تأسيس شركة', secondaryHref: '/خدمات/تأسيس-الشركات' }, jsonLdType: 'Service', internalLinks: [{ pageId: 'business-setup', label: 'تأسيس الشركة' }, { pageId: 'legal-tax', label: 'القانون والضرائب' }, { pageId: 'private-assessment', label: 'تقييم خاص' }],
    }),
  ],
};
