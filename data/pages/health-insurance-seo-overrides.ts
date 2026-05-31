import type { Locale } from '@/lib/i18n';
import type { MainPageContent } from './types';

export const healthInsuranceSeoOverrides: Partial<Record<Locale, MainPageContent[]>> = {
  fr: [
    {
      id: 'health-insurance',
      locale: 'fr',
      slug: '/services/sante-assurance',
      title: 'Santé et assurance en Turquie : cliniques, médecins, couverture | Bosphoras',
      h1: 'Santé et assurance en Turquie : protéger sa famille avant l’urgence',
      metaDescription:
        'Santé et assurance en Turquie pour familles, expatriés et investisseurs : hôpitaux privés, médecins, assurance santé, check-up, urgences et coordination Bosphoras.',
      shortIntro:
        `Quand une famille s’installe en Turquie, la santé ne doit jamais être traitée après le logement ou la banque. Le vrai confort commence lorsque l’on sait qui appeler, dans quel hôpital aller, quelle assurance utiliser, quel médecin consulter et comment réagir en cas d’urgence. Bosphoras ne remplace pas les médecins, les cliniques ni les courtiers réglementés. Notre rôle est de coordonner un cadre fiable, discret et compréhensible pour que la santé et l’assurance deviennent une sécurité, pas une source d’angoisse.`,
      sections: [
        {
          heading: 'Le sujet que les familles découvrent trop tard',
          body:
            `Beaucoup de clients arrivent en Turquie avec un logement, une voiture, une carte bancaire et une idée de quartier. Mais ils n’ont pas encore de médecin référent, ne savent pas quelle clinique appeler, ne comprennent pas leur assurance, ignorent les exclusions ou n’ont pas préparé les dossiers médicaux de la famille. Le problème apparaît souvent le jour où un enfant tombe malade, où une urgence arrive, ou lorsqu’un contrôle médical devient nécessaire. Bosphoras place la santé dans la feuille de route dès le départ.`,
          bullets: [
            'Cartographie des besoins santé de la famille avant l’installation',
            'Lecture des options entre assurance locale, assurance internationale et couverture existante',
            'Identification de cliniques privées, spécialistes, pédiatres, dentistes et centres de check-up',
            'Organisation des contacts utiles avant l’urgence, pas après',
          ],
        },
        {
          heading: 'Assurance santé : comprendre avant de signer',
          body:
            `Une assurance santé n’est pas seulement un prix mensuel. Il faut comprendre les plafonds, exclusions, délais de carence, réseaux hospitaliers, soins à l’étranger, prise en charge des enfants, maternité, pathologies existantes et modalités de remboursement. Bosphoras aide à poser les bonnes questions aux courtiers et assureurs sélectionnés afin que le client ne découvre pas les limites du contrat au mauvais moment.`,
          bullets: [
            'Analyse des besoins : famille, expatriation, voyages, traitements, maternité, urgences',
            'Coordination avec courtiers ou assureurs lorsque le profil le nécessite',
            'Comparaison entre couverture locale turque et couverture internationale',
            'Vérification des exclusions, franchises, plafonds, délais et réseaux de soins',
          ],
        },
        {
          heading: 'Médecins, hôpitaux privés et parcours de soins',
          body:
            `La Turquie dispose d’un système privé puissant, notamment à Istanbul, Antalya et dans les grandes villes. Mais l’abondance d’offres crée aussi de la confusion. Tous les établissements ne répondent pas au même niveau d’exigence, toutes les spécialités ne sont pas adaptées à un client international, et la barrière linguistique peut compliquer les décisions. Bosphoras coordonne les introductions et la logistique, tout en laissant les décisions médicales aux professionnels de santé.`,
          bullets: [
            'Orientation vers hôpitaux privés, médecins, pédiatres, spécialistes et centres de diagnostic',
            'Coordination des rendez-vous, traductions, transferts et documents utiles',
            'Organisation de check-up préventifs, bilans familiaux ou parcours de soins spécialisés',
            'Respect strict du rôle médical : Bosphoras ne donne pas d’avis médical',
          ],
        },
        {
          heading: 'Santé, résidence et vie quotidienne sont liées',
          body:
            `Une famille qui s’installe en Turquie doit relier plusieurs sujets : assurance, résidence, école, quartier, distance avec l’hôpital, pharmacie, pédiatre, chauffeur, urgence de nuit, langue, documents médicaux et couverture internationale. La santé n’est pas une rubrique isolée. Elle fait partie de la qualité de vie et de la sécurité globale du projet d’installation.`,
          bullets: [
            'Choix de quartier tenant compte des écoles, cliniques, transports et rythme familial',
            'Préparation des dossiers médicaux importants et traductions si nécessaire',
            'Organisation des services de santé autour du logement et du mode de vie',
            'Coordination possible avec les pages installation, immobilier, chauffeur et conciergerie',
          ],
        },
        {
          heading: 'Une coordination privée pour les profils exigeants',
          body:
            `Pour certains clients, la santé et l’assurance entrent dans une logique plus large de Private Desk ou de Private Access : rendez-vous rapides, check-up confidentiel, accompagnement d’un parent, coordination avec chauffeur, suivi hôtelier, protection d’une famille en déplacement, gestion d’une urgence ou recherche d’un spécialiste fiable. Bosphoras apporte un interlocuteur unique, une méthode et un niveau de discrétion adapté aux familles internationales.`,
          bullets: [
            'Support santé dans le cadre d’une installation en Turquie ou d’un séjour long',
            'Coordination avec chauffeurs, hôtels, assistants, traducteurs et établissements privés',
            'Accompagnement possible pour Istanbul, Bodrum, Antalya et autres villes selon le besoin',
            'Traitement prioritaire pour les membres Bosphoras Private Access selon le cadre validé',
          ],
        },
      ],
      faqs: [
        { question: 'Bosphoras donne-t-il des conseils médicaux ?', answer: 'Non. Bosphoras ne donne aucun avis médical et ne remplace jamais un médecin. Nous coordonnons les rendez-vous, les introductions, la logistique et les documents avec des professionnels compétents.' },
        { question: 'Pouvez-vous aider à choisir une assurance santé en Turquie ?', answer: 'Oui. Bosphoras peut vous aider à poser les bonnes questions, comparer les besoins et coordonner les échanges avec des courtiers ou assureurs sélectionnés. Le choix final doit être fait après lecture des conditions du contrat.' },
        { question: 'Faut-il une assurance locale ou internationale ?', answer: 'Cela dépend du statut, du pays de résidence, des voyages, de la famille, des antécédents médicaux et du budget. Dans certains cas, une assurance internationale est plus adaptée ; dans d’autres, une solution locale peut suffire.' },
        { question: 'Pouvez-vous organiser un check-up médical à Istanbul ?', answer: 'Oui, Bosphoras peut coordonner des rendez-vous dans des établissements privés selon le profil, la langue, les disponibilités et les besoins médicaux exprimés par le client.' },
        { question: 'Travaillez-vous avec les familles avec enfants ?', answer: 'Oui. Les enfants changent complètement l’organisation : pédiatre, urgence, école, quartier, assurance, pharmacie, traducteur et transport doivent être pensés ensemble.' },
        { question: 'La santé peut-elle être intégrée à une installation complète en Turquie ?', answer: 'Oui. Pour une installation sérieuse, santé et assurance doivent être intégrées avec logement, résidence, fiscalité, banque, école et vie quotidienne.' },
      ],
      cta: { label: 'Organiser mon cadre santé en Turquie', href: '/diagnostic-prive', secondaryLabel: 'Voir l’installation en Turquie', secondaryHref: '/services/installation-en-turquie' },
      jsonLdType: 'Service',
      internalLinks: [
        { pageId: 'relocate', label: 'Installation en Turquie' },
        { pageId: 'property', label: 'Immobilier et relocation' },
        { pageId: 'istanbul', label: 'Vivre à Istanbul' },
        { pageId: 'private-club', label: 'Bosphoras Private Access' },
        { pageId: 'private-assessment', label: 'Diagnostic privé' },
      ],
    },
  ],
  en: [
    {
      id: 'health-insurance',
      locale: 'en',
      slug: '/services/health-insurance',
      title: 'Health and insurance in Turkey: doctors, clinics, coverage | Bosphoras',
      h1: 'Health and insurance in Turkey: protect the family before urgency',
      metaDescription:
        'Health and insurance support in Turkey for families, expatriates and investors: private hospitals, doctors, health insurance, check-ups, emergencies and Bosphoras coordination.',
      shortIntro:
        `When a family relocates to Turkey, healthcare should never come after housing or banking. Real comfort begins when you know who to call, which hospital to use, what your insurance covers, which doctor to contact and how to react in an emergency. Bosphoras does not replace doctors, clinics or regulated brokers. Our role is to coordinate a reliable, discreet and understandable framework so health and insurance become security, not anxiety.`,
      sections: [
        { heading: 'The subject families discover too late', body: `Many clients arrive in Turkey with housing, a car, a bank card and a neighborhood in mind. But they do not yet have a reference doctor, do not know which clinic to call, do not understand insurance exclusions and have not prepared the family medical files. The issue often appears when a child gets sick, an emergency occurs or a medical check-up becomes necessary. Bosphoras places health in the relocation roadmap from the start.`, bullets: ['Mapping family healthcare needs before relocation', 'Reviewing local, international and existing insurance options', 'Identifying private clinics, specialists, pediatricians, dentists and check-up centers', 'Organizing useful contacts before the emergency, not after'] },
        { heading: 'Health insurance: understand before signing', body: `Health insurance is not only a monthly price. You must understand limits, exclusions, waiting periods, hospital networks, international coverage, children, maternity, pre-existing conditions and reimbursement processes. Bosphoras helps ask the right questions to selected brokers and insurers so the client does not discover the contract limits at the wrong moment.`, bullets: ['Needs analysis: family, expatriation, travel, treatments, maternity and emergencies', 'Coordination with brokers or insurers when the profile requires it', 'Comparison between Turkish local coverage and international coverage', 'Review of exclusions, deductibles, limits, waiting periods and care networks'] },
        { heading: 'Doctors, private hospitals and care pathways', body: `Turkey has a strong private healthcare system, especially in Istanbul, Antalya and major cities. But abundant options can create confusion. Not every provider meets the same standard, not every specialty is suitable for an international client, and language barriers can complicate decisions. Bosphoras coordinates introductions and logistics while medical decisions remain with healthcare professionals.`, bullets: ['Introductions to private hospitals, doctors, pediatricians, specialists and diagnostic centers', 'Appointment coordination, translations, transfers and useful documents', 'Preventive check-ups, family assessments or specialized care pathways', 'Strict boundaries: Bosphoras does not provide medical advice'] },
        { heading: 'Health, residence and daily life are connected', body: `A family settling in Turkey must connect insurance, residence, school, neighborhood, distance to hospital, pharmacy, pediatrician, driver, night emergency, language, medical documents and international coverage. Health is not an isolated topic. It is part of quality of life and the overall safety of the relocation project.`, bullets: ['Neighborhood choice that considers schools, clinics, transport and family rhythm', 'Preparation of important medical files and translations when needed', 'Healthcare services organized around housing and lifestyle', 'Coordination with relocation, property, chauffeur and concierge services'] },
        { heading: 'Private coordination for demanding profiles', body: `For some clients, health and insurance are part of a wider Private Desk or Private Access logic: fast appointments, confidential check-ups, support for a parent, coordination with a driver, hotel follow-up, protection of a traveling family, emergency management or access to a reliable specialist. Bosphoras provides one point of contact, method and discretion for international families.`, bullets: ['Healthcare support during relocation or long stays in Turkey', 'Coordination with drivers, hotels, assistants, translators and private facilities', 'Support in Istanbul, Bodrum, Antalya and other cities depending on need', 'Priority handling for Bosphoras Private Access members under the validated framework'] },
      ],
      faqs: [
        { question: 'Does Bosphoras provide medical advice?', answer: 'No. Bosphoras never provides medical advice and never replaces a doctor. We coordinate appointments, introductions, logistics and documents with qualified professionals.' },
        { question: 'Can you help choose health insurance in Turkey?', answer: 'Yes. Bosphoras can help ask the right questions, compare needs and coordinate discussions with selected brokers or insurers. The final choice should be made after reviewing the contract terms.' },
        { question: 'Do I need local or international health insurance?', answer: 'It depends on status, residence country, travel, family, medical history and budget. International insurance may be better in some cases, while local coverage may be sufficient in others.' },
        { question: 'Can you organize a medical check-up in Istanbul?', answer: 'Yes. Bosphoras can coordinate appointments in private facilities depending on profile, language, availability and the medical needs expressed by the client.' },
        { question: 'Do you support families with children?', answer: 'Yes. Children change the organization: pediatrician, emergency, school, neighborhood, insurance, pharmacy, translator and transport must be considered together.' },
        { question: 'Can healthcare be part of a full relocation plan?', answer: 'Yes. For a serious relocation, health and insurance should be integrated with housing, residence, tax, banking, schools and daily life.' },
      ],
      cta: { label: 'Organize my health framework in Turkey', href: '/private-assessment', secondaryLabel: 'Relocate to Turkey', secondaryHref: '/services/relocate-to-turkey' },
      jsonLdType: 'Service',
      internalLinks: [
        { pageId: 'relocate', label: 'Relocation to Turkey' },
        { pageId: 'property', label: 'Property and relocation' },
        { pageId: 'istanbul', label: 'Living in Istanbul' },
        { pageId: 'private-club', label: 'Bosphoras Private Access' },
        { pageId: 'private-assessment', label: 'Private assessment' },
      ],
    },
  ],
  ru: [
    {
      id: 'health-insurance',
      locale: 'ru',
      slug: '/uslugi/zdorove-strakhovanie',
      title: 'Здоровье и страхование в Турции: клиники, врачи, покрытие | Bosphoras',
      h1: 'Здоровье и страхование в Турции: защитить семью до срочной ситуации',
      metaDescription:
        'Здоровье и страхование в Турции для семей, экспатов и инвесторов: частные больницы, врачи, медицинская страховка, check-up, emergency и координация Bosphoras.',
      shortIntro:
        `Когда семья переезжает в Турцию, здоровье нельзя оставлять на потом после жилья или банка. Настоящий комфорт начинается, когда вы знаете, кому звонить, в какую клинику ехать, что покрывает страховка, какого врача выбрать и как действовать в срочной ситуации. Bosphoras не заменяет врачей, клиники или регулируемых брокеров. Наша роль — скоординировать надёжную, конфиденциальную и понятную систему.`,
      sections: [
        { heading: 'Тема, которую семьи часто замечают слишком поздно', body: `Многие клиенты приезжают в Турцию с жильём, машиной, банковской картой и выбранным районом. Но у них ещё нет врача, непонятно, в какую клинику обращаться, не изучены исключения страховки и не подготовлены медицинские документы семьи. Проблема часто появляется, когда ребёнок заболел, случилась emergency или нужен check-up. Bosphoras включает здоровье в дорожную карту с самого начала.`, bullets: ['Карта медицинских потребностей семьи до переезда', 'Сравнение локальной, международной и существующей страховки', 'Поиск частных клиник, специалистов, педиатров, стоматологов и check-up центров', 'Организация полезных контактов до срочной ситуации'] },
        { heading: 'Медицинская страховка: понять до подписания', body: `Страховка — это не только ежемесячная цена. Нужно понимать лимиты, исключения, waiting periods, сеть больниц, международное покрытие, детей, maternity, pre-existing conditions и порядок reimbursement. Bosphoras помогает задать правильные вопросы брокерам и страховщикам.`, bullets: ['Анализ потребностей: семья, переезд, поездки, лечение, maternity, emergency', 'Координация с брокерами или страховщиками при необходимости', 'Сравнение турецкой локальной и международной страховки', 'Проверка исключений, франшиз, лимитов, сроков ожидания и сети клиник'] },
        { heading: 'Врачи, частные больницы и медицинский маршрут', body: `В Турции сильная частная медицина, особенно в Стамбуле, Анталье и крупных городах. Но большое количество вариантов создаёт путаницу. Не каждое учреждение подходит международному клиенту, и язык может усложнить решение. Bosphoras координирует introductions и логистику, но медицинские решения остаются за врачами.`, bullets: ['Ориентация к частным больницам, врачам, педиатрам, специалистам и диагностическим центрам', 'Координация встреч, переводов, трансферов и документов', 'Организация профилактических check-up и специализированных маршрутов', 'Строгие границы: Bosphoras не даёт медицинских заключений'] },
        { heading: 'Здоровье, резиденция и быт связаны', body: `Семья в Турции должна связать страховку, резиденцию, школу, район, расстояние до больницы, аптеку, педиатра, водителя, night emergency, язык, медицинские документы и international coverage. Здоровье — часть качества жизни и безопасности всего проекта переезда.`, bullets: ['Выбор района с учётом школ, клиник, транспорта и семейного ритма', 'Подготовка важных медицинских документов и переводов', 'Организация медицинских сервисов вокруг жилья и образа жизни', 'Координация с relocation, property, chauffeur и concierge services'] },
        { heading: 'Частная координация для требовательных профилей', body: `Для некоторых клиентов здоровье и страхование входят в более широкий Private Desk или Private Access: быстрые приёмы, конфиденциальный check-up, сопровождение родителя, водитель, отель, защита семьи в поездке, emergency management или поиск надёжного специалиста. Bosphoras даёт один контакт, метод и дискретность.`, bullets: ['Поддержка здоровья при переезде или долгом пребывании в Турции', 'Координация с водителями, отелями, ассистентами, переводчиками и частными клиниками', 'Поддержка в Стамбуле, Бодруме, Анталье и других городах по необходимости', 'Приоритетная обработка для участников Bosphoras Private Access'] },
      ],
      faqs: [
        { question: 'Bosphoras даёт медицинские советы?', answer: 'Нет. Bosphoras не даёт медицинских советов и не заменяет врача. Мы координируем встречи, introductions, логистику и документы с компетентными специалистами.' },
        { question: 'Можно ли помочь выбрать медицинскую страховку?', answer: 'Да. Bosphoras помогает задавать правильные вопросы, сравнить потребности и скоординировать общение с выбранными брокерами или страховщиками.' },
        { question: 'Нужна локальная или международная страховка?', answer: 'Это зависит от статуса, страны резиденции, поездок, семьи, медицинской истории и бюджета. Иногда лучше international coverage, иногда достаточно локального решения.' },
        { question: 'Можно организовать check-up в Стамбуле?', answer: 'Да. Bosphoras может скоординировать встречи в частных учреждениях с учётом профиля, языка, доступности и медицинских запросов клиента.' },
        { question: 'Работаете ли вы с семьями с детьми?', answer: 'Да. Дети меняют организацию: педиатр, emergency, школа, район, страховка, аптека, переводчик и транспорт должны рассматриваться вместе.' },
        { question: 'Можно включить здоровье в полный план переезда?', answer: 'Да. Для серьёзного переезда здоровье и страхование нужно связать с жильём, резиденцией, налогами, банком, школой и бытом.' },
      ],
      cta: { label: 'Организовать здоровье и страховку в Турции', href: '/chastnaya-konsultatsiya', secondaryLabel: 'Переезд в Турцию', secondaryHref: '/uslugi/pereezd-v-turtsiyu' },
      jsonLdType: 'Service',
      internalLinks: [
        { pageId: 'relocate', label: 'Переезд в Турцию' },
        { pageId: 'property', label: 'Недвижимость и relocation' },
        { pageId: 'istanbul', label: 'Жизнь в Стамбуле' },
        { pageId: 'private-club', label: 'Bosphoras Private Access' },
        { pageId: 'private-assessment', label: 'Частная консультация' },
      ],
    },
  ],
  ar: [
    {
      id: 'health-insurance',
      locale: 'ar',
      slug: '/خدمات/الصحة-والتأمين',
      title: 'الصحة والتأمين في تركيا: أطباء، عيادات، تغطية | Bosphoras',
      h1: 'الصحة والتأمين في تركيا: حماية العائلة قبل الطوارئ',
      metaDescription:
        'تنسيق الصحة والتأمين في تركيا للعائلات والمقيمين والمستثمرين: مستشفيات خاصة، أطباء، تأمين صحي، فحوصات، طوارئ وتنسيق Bosphoras.',
      shortIntro:
        `عندما تنتقل عائلة إلى تركيا، لا يجب أن تأتي الصحة بعد السكن أو البنك. يبدأ الراحة الحقيقية عندما تعرف من تتصل به، إلى أي مستشفى تذهب، ماذا يغطي التأمين، أي طبيب تختار وكيف تتصرف عند الطوارئ. Bosphoras لا يحل محل الأطباء أو العيادات أو الوسطاء المنظمين. دورنا هو تنسيق إطار موثوق وهادئ ومفهوم حتى تصبح الصحة والتأمين مصدر أمان لا قلق.`,
      sections: [
        { heading: 'الموضوع الذي تكتشفه العائلات متأخراً', body: `يصل كثير من العملاء إلى تركيا ومعهم سكن وسيارة وبطاقة بنكية وفكرة عن الحي. لكنهم لا يملكون طبيباً مرجعياً، ولا يعرفون أي عيادة يتصلون بها، ولا يفهمون حدود التأمين، ولم يحضروا ملفات العائلة الطبية. تظهر المشكلة غالباً عندما يمرض طفل أو تحدث حالة طارئة أو يصبح الفحص الطبي ضرورياً. يضع Bosphoras الصحة في خارطة الانتقال منذ البداية.`, bullets: ['رسم احتياجات العائلة الصحية قبل الانتقال', 'قراءة الخيارات بين التأمين المحلي والدولي والتغطية الحالية', 'تحديد عيادات خاصة، أطباء، أطباء أطفال، أسنان ومراكز check-up', 'تنظيم جهات الاتصال المهمة قبل الطوارئ لا بعدها'] },
        { heading: 'التأمين الصحي: الفهم قبل التوقيع', body: `التأمين الصحي ليس سعراً شهرياً فقط. يجب فهم السقوف، الاستثناءات، فترات الانتظار، شبكة المستشفيات، التغطية الدولية، الأطفال، الأمومة، الحالات السابقة وآلية التعويض. يساعد Bosphoras في طرح الأسئلة الصحيحة على الوسطاء وشركات التأمين المختارة.`, bullets: ['تحليل الاحتياجات: العائلة، الانتقال، السفر، العلاج، الأمومة والطوارئ', 'تنسيق مع الوسطاء أو شركات التأمين عند الحاجة', 'مقارنة التغطية المحلية التركية والتغطية الدولية', 'فحص الاستثناءات، الخصومات، السقوف، فترات الانتظار وشبكات العلاج'] },
        { heading: 'الأطباء والمستشفيات الخاصة ومسار العلاج', body: `لدى تركيا نظام صحي خاص قوي، خصوصاً في إسطنبول وأنطاليا والمدن الكبرى. لكن كثرة الخيارات قد تخلق ارتباكاً. ليست كل المؤسسات بنفس المستوى، وليست كل التخصصات مناسبة للعميل الدولي، وقد يصعب القرار بسبب اللغة. ينسق Bosphoras التعارف واللوجستيك مع إبقاء القرارات الطبية للأطباء.`, bullets: ['توجيه نحو مستشفيات خاصة، أطباء، أطباء أطفال، متخصصين ومراكز تشخيص', 'تنسيق المواعيد، الترجمات، التنقلات والمستندات', 'تنظيم check-up وقائي أو مسارات علاج متخصصة', 'حدود واضحة: Bosphoras لا يعطي رأياً طبياً'] },
        { heading: 'الصحة والإقامة والحياة اليومية مترابطة', body: `العائلة التي تستقر في تركيا تحتاج إلى ربط التأمين، الإقامة، المدرسة، الحي، المسافة إلى المستشفى، الصيدلية، طبيب الأطفال، السائق، طوارئ الليل، اللغة، الملفات الطبية والتغطية الدولية. الصحة ليست موضوعاً منفصلاً، بل جزء من جودة الحياة وأمان مشروع الانتقال.`, bullets: ['اختيار الحي مع مراعاة المدارس والعيادات والنقل وإيقاع العائلة', 'تحضير الملفات الطبية المهمة والترجمات عند الحاجة', 'تنظيم الخدمات الصحية حول السكن ونمط الحياة', 'تنسيق ممكن مع خدمات الانتقال والعقار والسائق والكونسيرج'] },
        { heading: 'تنسيق خاص للملفات الراقية', body: `لبعض العملاء، تدخل الصحة والتأمين ضمن منطق أوسع من Private Desk أو Private Access: مواعيد سريعة، check-up سري، مرافقة أحد الوالدين، تنسيق مع سائق، متابعة فندقية، حماية عائلة مسافرة، إدارة طوارئ أو البحث عن متخصص موثوق. يقدم Bosphoras جهة واحدة ومنهجية وخصوصية مناسبة للعائلات الدولية.`, bullets: ['دعم صحي أثناء الانتقال أو الإقامة الطويلة في تركيا', 'تنسيق مع السائقين والفنادق والمساعدين والمترجمين والمؤسسات الخاصة', 'مرافقة في إسطنبول وبودروم وأنطاليا ومدن أخرى حسب الحاجة', 'معالجة أولوية لأعضاء Bosphoras Private Access ضمن الإطار المعتمد'] },
      ],
      faqs: [
        { question: 'هل يقدم Bosphoras نصائح طبية؟', answer: 'لا. Bosphoras لا يقدم أي رأي طبي ولا يحل محل الطبيب. نحن ننسق المواعيد والتعارف واللوجستيك والمستندات مع مهنيين مؤهلين.' },
        { question: 'هل تساعدون في اختيار التأمين الصحي في تركيا؟', answer: 'نعم. يساعد Bosphoras في طرح الأسئلة الصحيحة، مقارنة الاحتياجات وتنسيق النقاش مع الوسطاء أو شركات التأمين المختارة.' },
        { question: 'هل أحتاج إلى تأمين محلي أم دولي؟', answer: 'يعتمد ذلك على الوضع، بلد الإقامة، السفر، العائلة، التاريخ الطبي والميزانية. في بعض الحالات تكون التغطية الدولية أفضل، وفي حالات أخرى يكفي حل محلي.' },
        { question: 'هل يمكن تنظيم check-up طبي في إسطنبول؟', answer: 'نعم. يمكن لـ Bosphoras تنسيق المواعيد في مؤسسات خاصة حسب الملف واللغة والتوفر والاحتياجات الطبية التي يعبّر عنها العميل.' },
        { question: 'هل تعملون مع العائلات التي لديها أطفال؟', answer: 'نعم. الأطفال يغيرون التنظيم بالكامل: طبيب أطفال، طوارئ، مدرسة، حي، تأمين، صيدلية، مترجم ونقل يجب التفكير فيها معاً.' },
        { question: 'هل يمكن دمج الصحة في خطة انتقال كاملة؟', answer: 'نعم. في أي انتقال جدي، يجب دمج الصحة والتأمين مع السكن والإقامة والضرائب والبنك والمدرسة والحياة اليومية.' },
      ],
      cta: { label: 'تنظيم الصحة والتأمين في تركيا', href: '/تقييم-خاص', secondaryLabel: 'الانتقال إلى تركيا', secondaryHref: '/خدمات/الانتقال-إلى-تركيا' },
      jsonLdType: 'Service',
      internalLinks: [
        { pageId: 'relocate', label: 'الانتقال إلى تركيا' },
        { pageId: 'property', label: 'العقار والانتقال' },
        { pageId: 'istanbul', label: 'الحياة في إسطنبول' },
        { pageId: 'private-club', label: 'Bosphoras Private Access' },
        { pageId: 'private-assessment', label: 'تقييم خاص' },
      ],
    },
  ],
};
