import type { Locale } from '@/lib/i18n';
import type { MainPageContent } from './types';

const p = (page: MainPageContent): MainPageContent => page;

export const formPagesOverrides: Record<Locale, MainPageContent[]> = {
  fr: [
    p({
      id: 'private-assessment',
      locale: 'fr',
      slug: '/diagnostic-prive',
      title: 'Diagnostic privé | Bosphoras',
      h1: 'Demander un diagnostic privé',
      metaDescription: 'Envoyez votre demande confidentielle à Bosphoras pour une première analyse de votre projet en Turquie.',
      shortIntro: 'Présentez votre situation, votre pays de résidence, votre objectif et votre calendrier. Bosphoras vous recontacte pour cadrer la suite avec discrétion.',
      sections: [
        {
          heading: 'Informations à préparer',
          body: 'Nom complet, email, WhatsApp, nationalité, pays de résidence, langue préférée, ville d’intérêt en Turquie, objectif principal, budget indicatif, calendrier et message libre.',
          bullets: ['Nom complet', 'Email', 'WhatsApp', 'Nationalité', 'Pays de résidence', 'Langue préférée', 'Ville d’intérêt : Istanbul, Bodrum, Antalya ou pas encore décidé', 'Objectif principal : relocation, fiscalité, résidence, société, immobilier, santé, assurance, bureaux, lifestyle ou adhésion', 'Budget indicatif', 'Calendrier', 'Message confidentiel'],
        },
        {
          heading: 'Ce que Bosphoras analyse',
          body: 'Le diagnostic sert à comprendre si votre demande relève d’une mission Private Desk classique, d’une adhésion Private Access, ou d’une coordination ponctuelle sur devis personnalisé.',
          bullets: ['Clarté du besoin', 'Pays de départ et pays de résidence', 'Ville la plus adaptée en Turquie', 'Niveau d’urgence', 'Professionnels à mobiliser', 'Limites juridiques, fiscales, médicales ou assurantielles à vérifier'],
        },
        {
          heading: 'Confidentialité et limites',
          body: 'Votre demande est traitée avec discrétion. Bosphoras ne remplace pas les professionnels réglementés. Les décisions juridiques, fiscales, médicales, bancaires, d’assurance ou immobilières doivent être confirmées avec des professionnels qualifiés.',
        },
      ],
      faqs: [
        { question: 'Est-ce un engagement ?', answer: 'Non. Le diagnostic permet de comprendre votre besoin avant toute proposition ou mission.' },
        { question: 'Combien coûte un accompagnement Private Desk ?', answer: 'L’accompagnement complet Private Desk démarre à partir de 6 000 USD pour une année, ou sur devis personnalisé selon la mission.' },
        { question: 'Puis-je demander directement une adhésion membre ?', answer: 'Oui. Si votre demande concerne Bosphoras Private Access, vous pouvez passer par la page de demande d’adhésion.' },
      ],
      cta: { label: 'Envoyer ma demande', href: '/diagnostic-prive', secondaryLabel: 'Demander une adhésion', secondaryHref: '/adhesion/demande-membre' },
      jsonLdType: 'ContactPage',
      internalLinks: [{ pageId: 'services', label: 'Services' }, { pageId: 'compliance', label: 'Conformité & confiance' }, { pageId: 'membership-application', label: 'Demande d’adhésion' }],
    }),
    p({
      id: 'membership-application',
      locale: 'fr',
      slug: '/adhesion/demande-membre',
      title: 'Demande d’adhésion privée | Bosphoras',
      h1: 'Demande d’adhésion au Bosphoras Private Access',
      metaDescription: 'Formulaire de demande d’adhésion privée au cercle Bosphoras Private Access.',
      shortIntro: 'L’adhésion est étudiée sur profil, parrainage éventuel, niveau de besoin et compatibilité avec le cercle privé Bosphoras.',
      sections: [
        {
          heading: 'Informations demandées',
          body: 'Identité, email, WhatsApp, nationalité, pays de résidence, activité, entreprise, fonction, niveau de revenus annuels ou patrimoine indicatif, objectif en Turquie, ville d’intérêt, calendrier et message confidentiel.',
          bullets: ['Nom complet', 'Email', 'WhatsApp', 'Nationalité', 'Pays de résidence', 'Activité professionnelle', 'Entreprise', 'Fonction ou rôle', 'Revenus annuels ou patrimoine indicatif', 'Objectif en Turquie', 'Ville d’intérêt', 'Calendrier', 'Message confidentiel'],
        },
        {
          heading: 'Parrainage et sélection',
          body: 'Si vous avez un parrain, son nom peut être indiqué dans la demande. Le parrainage aide à qualifier le dossier, mais ne garantit pas l’acceptation. Bosphoras peut accepter, reporter ou refuser une demande.',
        },
        {
          heading: 'Admission',
          body: 'Bosphoras Private Access fonctionne avec un seul niveau de service pour éviter toute hiérarchie entre membres : admission annuelle de 10 000 USD + retainer mensuel de 1 000 USD, sous réserve d’acceptation. Le retainer mensuel est payé en plus de l’admission annuelle.',
        },
        {
          heading: 'Services membres',
          body: 'L’adhésion peut donner accès à un traitement prioritaire, des introductions qualifiées, des dîners privés, soirées discrètes, activités entre membres, réservations prioritaires, billetterie, restaurants, clubs, chauffeurs privés, jets, hélicoptères, yachts, villas et coordination de demandes confidentielles.',
        },
      ],
      faqs: [
        { question: 'L’adhésion est-elle automatique ?', answer: 'Non. Chaque demande est étudiée et peut être refusée.' },
        { question: 'Le retainer mensuel est-il inclus dans les 10 000 USD ?', answer: 'Non. Les 1 000 USD mensuels sont payés en plus de l’admission annuelle.' },
        { question: 'Peut-on travailler avec Bosphoras sans devenir membre ?', answer: 'Oui. L’accompagnement Private Desk classique démarre à partir de 6 000 USD pour une année, ou sur devis personnalisé.' },
      ],
      cta: { label: 'Demander une adhésion', href: '/adhesion/demande-membre', secondaryLabel: 'Demande classique Private Desk', secondaryHref: '/diagnostic-prive' },
      jsonLdType: 'ContactPage',
      internalLinks: [{ pageId: 'private-club', label: 'Cercle privé' }, { pageId: 'private-assessment', label: 'Diagnostic privé' }, { pageId: 'compliance', label: 'Conformité & confiance' }],
    }),
  ],
  en: [
    p({
      id: 'private-assessment',
      locale: 'en',
      slug: '/private-assessment',
      title: 'Private Assessment | Bosphoras',
      h1: 'Request a private assessment',
      metaDescription: 'Send a confidential request to Bosphoras for a first assessment of your Turkey project.',
      shortIntro: 'Present your situation, country of residence, objective and timeline. Bosphoras will contact you to frame the next steps discreetly.',
      sections: [
        {
          heading: 'Information to prepare',
          body: 'Full name, email, WhatsApp, nationality, country of residence, preferred language, city of interest in Turkey, main objective, indicative budget, timeline and private message.',
          bullets: ['Full name', 'Email', 'WhatsApp', 'Nationality', 'Country of residence', 'Preferred language', 'City of interest: Istanbul, Bodrum, Antalya or not decided yet', 'Main objective: relocation, tax, residence, company, property, healthcare, insurance, offices, lifestyle or membership', 'Indicative budget', 'Timeline', 'Confidential message'],
        },
        {
          heading: 'What Bosphoras reviews',
          body: 'The assessment helps determine whether your request falls under a classic Private Desk mission, a Private Access membership, or a tailored one-off coordination quoted separately.',
          bullets: ['Clarity of the need', 'Departure country and country of residence', 'Most suitable Turkish city', 'Level of urgency', 'Professionals to involve', 'Legal, tax, medical or insurance boundaries to verify'],
        },
        {
          heading: 'Confidentiality and boundaries',
          body: 'Your request is handled with discretion. Bosphoras does not replace regulated professionals. Legal, tax, medical, banking, insurance or property decisions must be confirmed with qualified professionals.',
        },
      ],
      faqs: [
        { question: 'Is this a commitment?', answer: 'No. The assessment helps understand your needs before any proposal or mission.' },
        { question: 'How much does Private Desk support cost?', answer: 'Complete Private Desk support starts from 6,000 USD for one year, or by tailored quote depending on the mission.' },
        { question: 'Can I apply directly for membership?', answer: 'Yes. If your request concerns Bosphoras Private Access, you can use the membership application page.' },
      ],
      cta: { label: 'Send my request', href: '/private-assessment', secondaryLabel: 'Apply for membership', secondaryHref: '/membership/application' },
      jsonLdType: 'ContactPage',
      internalLinks: [{ pageId: 'services', label: 'Services' }, { pageId: 'compliance', label: 'Compliance & Trust' }, { pageId: 'membership-application', label: 'Membership application' }],
    }),
    p({
      id: 'membership-application',
      locale: 'en',
      slug: '/membership/application',
      title: 'Private Membership Application | Bosphoras',
      h1: 'Apply for Bosphoras Private Access',
      metaDescription: 'Private membership application form for Bosphoras Private Access.',
      shortIntro: 'Membership is reviewed according to profile, possible referral, level of need and compatibility with the Bosphoras private circle.',
      sections: [
        {
          heading: 'Requested information',
          body: 'Identity, email, WhatsApp, nationality, country of residence, activity, company, position, annual income level or indicative wealth, objective in Turkey, city of interest, timeline and confidential message.',
          bullets: ['Full name', 'Email', 'WhatsApp', 'Nationality', 'Country of residence', 'Professional activity', 'Company', 'Position or role', 'Annual income or indicative wealth', 'Objective in Turkey', 'City of interest', 'Timeline', 'Confidential message'],
        },
        {
          heading: 'Referral and selection',
          body: 'If you have a referrer, their name may be included in the application. A referral helps qualify the file but does not guarantee acceptance. Bosphoras may accept, postpone or decline an application.',
        },
        {
          heading: 'Admission',
          body: 'Bosphoras Private Access operates with one service level to avoid hierarchy between members: 10,000 USD annual admission + 1,000 USD monthly retainer, subject to acceptance. The monthly retainer is paid in addition to the annual admission.',
        },
        {
          heading: 'Member services',
          body: 'Membership may provide access to priority handling, qualified introductions, private dinners, discreet evenings, member activities, priority reservations, ticketing, restaurants, clubs, private chauffeurs, jets, helicopters, yachts, villas and coordination of confidential requests.',
        },
      ],
      faqs: [
        { question: 'Is membership automatic?', answer: 'No. Each application is reviewed and may be declined.' },
        { question: 'Is the monthly retainer included in the 10,000 USD?', answer: 'No. The 1,000 USD monthly retainer is paid in addition to the annual admission.' },
        { question: 'Can I work with Bosphoras without becoming a member?', answer: 'Yes. Classic Private Desk support starts from 6,000 USD for one year, or by tailored quote.' },
      ],
      cta: { label: 'Apply for membership', href: '/membership/application', secondaryLabel: 'Classic Private Desk request', secondaryHref: '/private-assessment' },
      jsonLdType: 'ContactPage',
      internalLinks: [{ pageId: 'private-club', label: 'Private Access Club' }, { pageId: 'private-assessment', label: 'Private Assessment' }, { pageId: 'compliance', label: 'Compliance & Trust' }],
    }),
  ],
  ru: [
    p({
      id: 'private-assessment',
      locale: 'ru',
      slug: '/chastnaya-konsultatsiya',
      title: 'Частная консультация | Bosphoras',
      h1: 'Запросить частную консультацию',
      metaDescription: 'Отправьте конфиденциальный запрос в Bosphoras для первичного анализа вашего проекта в Турции.',
      shortIntro: 'Опишите вашу ситуацию, страну проживания, цель и сроки. Bosphoras свяжется с вами, чтобы конфиденциально определить следующие шаги.',
      sections: [
        {
          heading: 'Информация для подготовки',
          body: 'Полное имя, email, WhatsApp, гражданство, страна проживания, предпочтительный язык, интересующий город в Турции, главная цель, ориентировочный бюджет, сроки и конфиденциальное сообщение.',
          bullets: ['Полное имя', 'Email', 'WhatsApp', 'Гражданство', 'Страна проживания', 'Предпочтительный язык', 'Город интереса: Стамбул, Бодрум, Анталья или ещё не решено', 'Главная цель: переезд, налоги, резиденция, компания, недвижимость, здоровье, страхование, офисы, lifestyle или членство', 'Ориентировочный бюджет', 'Сроки', 'Конфиденциальное сообщение'],
        },
        {
          heading: 'Что анализирует Bosphoras',
          body: 'Консультация помогает понять, относится ли запрос к классической миссии Private Desk, членству Private Access или разовой координации по индивидуальному предложению.',
          bullets: ['Ясность запроса', 'Страна отправления и страна проживания', 'Наиболее подходящий город в Турции', 'Уровень срочности', 'Профессионалы, которых нужно подключить', 'Юридические, налоговые, медицинские или страховые границы для проверки'],
        },
        {
          heading: 'Конфиденциальность и границы',
          body: 'Ваш запрос обрабатывается дискретно. Bosphoras не заменяет регулируемых специалистов. Юридические, налоговые, медицинские, банковские, страховые или имущественные решения должны подтверждаться квалифицированными профессионалами.',
        },
      ],
      faqs: [
        { question: 'Это обязательство?', answer: 'Нет. Консультация помогает понять ваш запрос до любого предложения или миссии.' },
        { question: 'Сколько стоит сопровождение Private Desk?', answer: 'Полное сопровождение Private Desk начинается от 6 000 USD за один год или рассчитывается индивидуально в зависимости от миссии.' },
        { question: 'Можно сразу подать заявку на членство?', answer: 'Да. Если ваш запрос касается Bosphoras Private Access, вы можете перейти на страницу заявки на членство.' },
      ],
      cta: { label: 'Отправить запрос', href: '/chastnaya-konsultatsiya', secondaryLabel: 'Подать заявку на членство', secondaryHref: '/chlenstvo/zayavka' },
      jsonLdType: 'ContactPage',
      internalLinks: [{ pageId: 'services', label: 'Услуги' }, { pageId: 'compliance', label: 'Compliance & Trust' }, { pageId: 'membership-application', label: 'Заявка на членство' }],
    }),
    p({
      id: 'membership-application',
      locale: 'ru',
      slug: '/chlenstvo/zayavka',
      title: 'Заявка на частное членство | Bosphoras',
      h1: 'Заявка на Bosphoras Private Access',
      metaDescription: 'Форма заявки на частное членство в Bosphoras Private Access.',
      shortIntro: 'Членство рассматривается по профилю, возможной рекомендации, уровню потребности и совместимости с частным кругом Bosphoras.',
      sections: [
        {
          heading: 'Запрашиваемая информация',
          body: 'Личность, email, WhatsApp, гражданство, страна проживания, деятельность, компания, должность, годовой доход или ориентировочный капитал, цель в Турции, город интереса, сроки и конфиденциальное сообщение.',
          bullets: ['Полное имя', 'Email', 'WhatsApp', 'Гражданство', 'Страна проживания', 'Профессиональная деятельность', 'Компания', 'Должность или роль', 'Годовой доход или ориентировочный капитал', 'Цель в Турции', 'Город интереса', 'Сроки', 'Конфиденциальное сообщение'],
        },
        {
          heading: 'Рекомендация и отбор',
          body: 'Если у вас есть рекомендатель, его имя можно указать в заявке. Рекомендация помогает квалифицировать файл, но не гарантирует принятие. Bosphoras может принять, отложить или отклонить заявку.',
        },
        {
          heading: 'Admission',
          body: 'Bosphoras Private Access работает с одним уровнем сервиса, чтобы избежать иерархии между участниками: 10 000 USD ежегодный вступительный взнос + 1 000 USD ежемесячный retainer, при условии принятия. Ежемесячный retainer оплачивается дополнительно к ежегодному взносу.',
        },
        {
          heading: 'Сервисы для участников',
          body: 'Членство может давать доступ к приоритетной обработке, квалифицированным знакомствам, частным ужинам, дискретным вечерам, активностям между участниками, приоритетным бронированиям, билетам, ресторанам, клубам, частным водителям, джетам, вертолётам, яхтам, виллам и координации конфиденциальных запросов.',
        },
      ],
      faqs: [
        { question: 'Членство автоматическое?', answer: 'Нет. Каждая заявка рассматривается и может быть отклонена.' },
        { question: 'Ежемесячный retainer входит в 10 000 USD?', answer: 'Нет. 1 000 USD в месяц оплачивается дополнительно к ежегодному вступительному взносу.' },
        { question: 'Можно работать с Bosphoras без членства?', answer: 'Да. Классическое сопровождение Private Desk начинается от 6 000 USD за один год или рассчитывается индивидуально.' },
      ],
      cta: { label: 'Подать заявку на членство', href: '/chlenstvo/zayavka', secondaryLabel: 'Классический запрос Private Desk', secondaryHref: '/chastnaya-konsultatsiya' },
      jsonLdType: 'ContactPage',
      internalLinks: [{ pageId: 'private-club', label: 'Private Access Club' }, { pageId: 'private-assessment', label: 'Частная консультация' }, { pageId: 'compliance', label: 'Compliance & Trust' }],
    }),
  ],
  ar: [
    p({
      id: 'private-assessment',
      locale: 'ar',
      slug: '/تقييم-خاص',
      title: 'تقييم خاص | Bosphoras',
      h1: 'طلب تقييم خاص',
      metaDescription: 'أرسلوا طلبكم السري إلى Bosphoras لتحليل أولي لمشروعكم في تركيا.',
      shortIntro: 'اعرضوا وضعكم وبلد إقامتكم وهدفكم وجدولكم الزمني. سيتواصل معكم Bosphoras لتحديد الخطوات التالية بسرية.',
      sections: [
        {
          heading: 'المعلومات التي يجب تحضيرها',
          body: 'الاسم الكامل، البريد الإلكتروني، WhatsApp، الجنسية، بلد الإقامة، اللغة المفضلة، المدينة محل الاهتمام في تركيا، الهدف الرئيسي، الميزانية التقريبية، الجدول الزمني ورسالة سرية.',
          bullets: ['الاسم الكامل', 'البريد الإلكتروني', 'WhatsApp', 'الجنسية', 'بلد الإقامة', 'اللغة المفضلة', 'المدينة محل الاهتمام: إسطنبول، بودروم، أنطاليا أو لم يتم القرار بعد', 'الهدف الرئيسي: الانتقال، الضرائب، الإقامة، الشركة، العقار، الصحة، التأمين، المكاتب، lifestyle أو العضوية', 'الميزانية التقريبية', 'الجدول الزمني', 'رسالة سرية'],
        },
        {
          heading: 'ما الذي يحلله Bosphoras',
          body: 'يساعد التقييم على فهم ما إذا كان الطلب يدخل ضمن مهمة Private Desk كلاسيكية، أو عضوية Private Access، أو تنسيق محدد بعرض مخصص.',
          bullets: ['وضوح الحاجة', 'بلد الانطلاق وبلد الإقامة', 'المدينة التركية الأنسب', 'درجة الاستعجال', 'المهنيون المطلوب إشراكهم', 'الحدود القانونية أو الضريبية أو الطبية أو التأمينية التي يجب التحقق منها'],
        },
        {
          heading: 'السرية والحدود',
          body: 'يتم التعامل مع طلبكم بسرية. لا يحل Bosphoras محل المهنيين المنظمين. يجب تأكيد القرارات القانونية والضريبية والطبية والمصرفية والتأمينية والعقارية مع مهنيين مؤهلين.',
        },
      ],
      faqs: [
        { question: 'هل هذا التزام؟', answer: 'لا. يساعد التقييم على فهم احتياجاتكم قبل أي عرض أو مهمة.' },
        { question: 'كم تكلفة دعم Private Desk؟', answer: 'يبدأ الدعم الكامل Private Desk من 6,000 USD لمدة سنة، أو بعرض مخصص حسب المهمة.' },
        { question: 'هل يمكنني طلب العضوية مباشرة؟', answer: 'نعم. إذا كان طلبكم يتعلق بـ Bosphoras Private Access، يمكنكم استخدام صفحة طلب العضوية.' },
      ],
      cta: { label: 'إرسال الطلب', href: '/تقييم-خاص', secondaryLabel: 'طلب عضوية', secondaryHref: '/عضوية/طلب' },
      jsonLdType: 'ContactPage',
      internalLinks: [{ pageId: 'services', label: 'الخدمات' }, { pageId: 'compliance', label: 'الامتثال والثقة' }, { pageId: 'membership-application', label: 'طلب عضوية' }],
    }),
    p({
      id: 'membership-application',
      locale: 'ar',
      slug: '/عضوية/طلب',
      title: 'طلب عضوية خاصة | Bosphoras',
      h1: 'طلب عضوية Bosphoras Private Access',
      metaDescription: 'نموذج طلب عضوية خاصة في Bosphoras Private Access.',
      shortIntro: 'تتم دراسة العضوية حسب الملف الشخصي، وجود مُرشح إن وجد، مستوى الحاجة ومدى التوافق مع الدائرة الخاصة لـ Bosphoras.',
      sections: [
        {
          heading: 'المعلومات المطلوبة',
          body: 'الهوية، البريد الإلكتروني، WhatsApp، الجنسية، بلد الإقامة، النشاط، الشركة، المنصب، الدخل السنوي أو الثروة التقريبية، الهدف في تركيا، المدينة محل الاهتمام، الجدول الزمني ورسالة سرية.',
          bullets: ['الاسم الكامل', 'البريد الإلكتروني', 'WhatsApp', 'الجنسية', 'بلد الإقامة', 'النشاط المهني', 'الشركة', 'المنصب أو الدور', 'الدخل السنوي أو الثروة التقريبية', 'الهدف في تركيا', 'المدينة محل الاهتمام', 'الجدول الزمني', 'رسالة سرية'],
        },
        {
          heading: 'الترشيح والاختيار',
          body: 'إذا كان لديكم مُرشح، يمكن ذكر اسمه في الطلب. يساعد الترشيح على تأهيل الملف، لكنه لا يضمن القبول. يمكن لـ Bosphoras قبول الطلب أو تأجيله أو رفضه.',
        },
        {
          heading: 'القبول',
          body: 'يعمل Bosphoras Private Access بمستوى خدمة واحد لتجنب أي تراتبية بين الأعضاء: 10,000 USD رسوم قبول سنوية + 1,000 USD retainer شهري، مع خضوع الطلب للموافقة. يتم دفع retainer الشهري بالإضافة إلى رسوم القبول السنوية.',
        },
        {
          heading: 'خدمات الأعضاء',
          body: 'قد تمنح العضوية إمكانية الوصول إلى معالجة أولوية، تعارفات مؤهلة، عشاءات خاصة، أمسيات سرية، أنشطة بين الأعضاء، حجوزات أولوية، تذاكر، مطاعم، نوادٍ، سائقين خاصين، طائرات خاصة، مروحيات، يخوت، فيلات وتنسيق طلبات سرية.',
        },
      ],
      faqs: [
        { question: 'هل العضوية تلقائية؟', answer: 'لا. تتم دراسة كل طلب ويمكن رفضه.' },
        { question: 'هل retainer الشهري مشمول في 10,000 USD؟', answer: 'لا. يتم دفع 1,000 USD شهرياً بالإضافة إلى رسوم القبول السنوية.' },
        { question: 'هل يمكن العمل مع Bosphoras بدون عضوية؟', answer: 'نعم. يبدأ دعم Private Desk الكلاسيكي من 6,000 USD لمدة سنة، أو بعرض مخصص.' },
      ],
      cta: { label: 'طلب العضوية', href: '/عضوية/طلب', secondaryLabel: 'طلب Private Desk كلاسيكي', secondaryHref: '/تقييم-خاص' },
      jsonLdType: 'ContactPage',
      internalLinks: [{ pageId: 'private-club', label: 'النادي الخاص' }, { pageId: 'private-assessment', label: 'تقييم خاص' }, { pageId: 'compliance', label: 'الامتثال والثقة' }],
    }),
  ],
};
