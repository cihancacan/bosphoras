import type { Locale } from '@/lib/i18n';
import type { MainPageContent } from './types';

export const propertyRelocationSeoOverrides: Partial<Record<Locale, MainPageContent[]>> = {
  fr: [
    {
      id: 'property',
      locale: 'fr',
      slug: '/services/immobilier-relocation',
      title: 'Immobilier et relocation en Turquie : achat, location, quartier | Bosphoras',
      h1: 'Immobilier en Turquie : choisir le bon bien, le bon quartier et le bon cadre',
      metaDescription:
        'Immobilier et relocation en Turquie pour familles, expatriés et investisseurs : achat, location, quartier, due diligence, résidence, banque, fiscalité et installation.',
      shortIntro:
        `Acheter ou louer en Turquie ne doit pas commencer par une annonce immobilière. Le bon bien dépend d’abord de votre vie réelle : famille, école, travail, mobilité, fiscalité, banque, sécurité, durée de présence, style de vie et stratégie patrimoniale. Bosphoras n’est pas une agence immobilière classique. Nous agissons comme un bureau privé : comprendre votre projet, filtrer les options, coordonner les professionnels et éviter les décisions prises trop vite sous pression commerciale.`,
      sections: [
        {
          heading: 'Avant de visiter : définir le vrai besoin',
          body:
            `Beaucoup de clients visitent trop tôt, se laissent séduire par une vue, une terrasse, une marina ou un prix affiché, puis découvrent ensuite les contraintes : quartier mal adapté, distance avec l’école, charges, bruit, gestion de copropriété, liquidité, fiscalité, règlement de paiement, titre de propriété, location saisonnière ou difficulté bancaire. Bosphoras commence par cadrer le besoin avant d’ouvrir le marché.`,
          bullets: [
            'Définition du projet : résidence principale, pied-à-terre, investissement, villa, bureau ou base familiale',
            'Analyse du mode de vie : école, santé, transport, chauffeur, sécurité, mer, business et discrétion',
            'Comparaison entre Istanbul, Bodrum, Antalya et autres zones selon le profil',
            'Décision louer avant d’acheter lorsque cela protège mieux le client et son capital',
          ],
        },
        {
          heading: 'Istanbul, Bodrum, Antalya : trois logiques immobilières différentes',
          body:
            `Istanbul est un marché de quartiers : Nişantaşı, Bebek, Etiler, Levent, Maslak, Zekeriyaköy ou la rive asiatique ne répondent pas aux mêmes priorités. Bodrum est un marché de villas, marinas, saisonnalité, vues, accès mer et gestion d’un actif premium. Antalya peut être une base familiale rationnelle, avec un climat doux, des services privés et un coût de vie plus lisible. Le choix du lieu vaut autant que le bien lui-même.`,
          bullets: [
            'Istanbul : appartements premium, résidences sécurisées, écoles, business et santé privée',
            'Bodrum : villas, marina, lifestyle, locations saisonnières, maintenance et confidentialité',
            'Antalya : famille, mer, santé, communauté internationale et installation longue durée',
            'Analyse du quartier avant analyse du prix',
          ],
        },
        {
          heading: 'Due diligence : protéger l’achat avant la signature',
          body:
            `Un bien immobilier en Turquie doit être vérifié avec méthode. Le contrat, le titre, les autorisations, les charges, les servitudes, le promoteur, l’ancien propriétaire, le calendrier de paiement, l’évaluation, la banque et les conséquences fiscales doivent être compris avant toute décision. Bosphoras coordonne les bons professionnels, mais ne remplace pas l’avocat, le notaire, l’expert ou le fiscaliste.`,
          bullets: [
            'Coordination avec avocats, agents sélectionnés, experts, fiscalistes et banques si nécessaire',
            'Vérification du titre, du contrat, du paiement, des risques et des documents disponibles',
            'Lecture des impacts : résidence, succession, fiscalité, location, assurance et gestion',
            'Aucune pression commerciale : le rôle du bureau privé est de protéger la décision',
          ],
        },
        {
          heading: 'Location, installation et relocation : le quotidien compte autant que le bien',
          body:
            `Pour une famille internationale, le logement n’est qu’une partie de l’installation. Il faut organiser l’arrivée, le bail, l’état des lieux, les abonnements, internet, assurance habitation, ameublement, école, médecin, chauffeur, ménage, sécurité, traduction et services de proximité. Bosphoras relie l’immobilier à la relocation pour que le client puisse réellement vivre dans le bien, pas seulement le posséder.`,
          bullets: [
            'Recherche de location sécurisée avant achat si le profil le demande',
            'Coordination du bail, documents, dépôt, état des lieux et installation pratique',
            'Mise en relation avec services utiles : assurance, internet, ménage, chauffeur, maintenance',
            'Suivi post-arrivée pendant les premières semaines ou dans le cadre Private Desk',
          ],
        },
        {
          heading: 'Un immobilier sans pression, intégré à votre stratégie Turquie',
          body:
            `Le bon achat n’est pas toujours le plus spectaculaire. Il doit être cohérent avec votre résidence, votre fiscalité, votre famille, votre banque, votre horizon de détention et votre capacité à gérer le bien. Bosphoras vous aide à éviter le réflexe émotionnel, à comparer les scénarios et à prendre une décision alignée avec votre projet global en Turquie.`,
          bullets: [
            'Approche patrimoniale, familiale et opérationnelle du projet immobilier',
            'Coordination avec conseil juridique et fiscal, banque, assurance et installation',
            'Possibilité d’intégrer conciergerie, chauffeur, maintenance, hôtels, yacht ou lifestyle',
            'Traitement prioritaire pour certains profils via Bosphoras Private Access',
          ],
        },
      ],
      faqs: [
        { question: 'Bosphoras est-il une agence immobilière en Turquie ?', answer: 'Non. Bosphoras est un bureau privé de coordination. Nous pouvons introduire des agents sélectionnés et coordonner les vérifications, mais notre rôle principal est de protéger la cohérence du projet du client.' },
        { question: 'Faut-il acheter ou louer d’abord en Turquie ?', answer: 'Dans beaucoup de cas, louer d’abord est plus prudent. Cela permet de tester un quartier, une école, les trajets, le voisinage et le rythme réel avant d’engager du capital.' },
        { question: 'Pouvez-vous accompagner un achat immobilier à Istanbul ou Bodrum ?', answer: 'Oui. Bosphoras peut coordonner la recherche, les visites, les professionnels, les documents et la due diligence, selon le profil et le cadre de mission.' },
        { question: 'Vérifiez-vous les titres de propriété et contrats ?', answer: 'Les vérifications juridiques doivent être réalisées par des professionnels habilités. Bosphoras coordonne ces intervenants et s’assure que les bonnes questions sont posées avant signature.' },
        { question: 'Pouvez-vous gérer l’installation dans le logement ?', answer: 'Oui. Bosphoras peut coordonner bail, assurance, internet, maintenance, ménage, chauffeur, ameublement, services de proximité et suivi post-arrivée.' },
        { question: 'L’immobilier peut-il être lié à la résidence ou à la fiscalité ?', answer: 'Oui, et c’est précisément pourquoi il faut coordonner immobilier, résidence, fiscalité, banque et succession avant de signer.' },
      ],
      cta: { label: 'Cadrer mon projet immobilier en Turquie', href: '/diagnostic-prive', secondaryLabel: 'Voir le conseil juridique et fiscal', secondaryHref: '/services/conseil-juridique-fiscal' },
      jsonLdType: 'Service',
      internalLinks: [
        { pageId: 'relocate', label: 'Installation en Turquie' },
        { pageId: 'legal-tax', label: 'Conseil juridique et fiscal' },
        { pageId: 'istanbul', label: 'Immobilier à Istanbul' },
        { pageId: 'bodrum', label: 'Vivre et investir à Bodrum' },
        { pageId: 'private-assessment', label: 'Diagnostic privé' },
      ],
    },
  ],
  en: [
    {
      id: 'property',
      locale: 'en',
      slug: '/services/property-relocation',
      title: 'Property and relocation in Turkey: buy, rent, due diligence | Bosphoras',
      h1: 'Property in Turkey: choose the right home, neighborhood and structure',
      metaDescription:
        'Property and relocation in Turkey for families, expatriates and investors: buying, renting, neighborhood selection, due diligence, residence, banking, tax and installation.',
      shortIntro:
        `Buying or renting in Turkey should not begin with a property listing. The right home depends first on real life: family, school, work, mobility, tax, banking, safety, length of stay, lifestyle and patrimonial strategy. Bosphoras is not a classic real estate agency. We act as a private desk: understand the project, filter options, coordinate professionals and avoid rushed decisions under sales pressure.`,
      sections: [
        { heading: 'Before visits: define the real need', body: `Many clients visit too early, fall in love with a view, terrace, marina or asking price, and later discover constraints: wrong neighborhood, school distance, service charges, noise, building management, liquidity, tax, payment plan, title deed, seasonal rental rules or banking difficulty. Bosphoras frames the need before opening the market.`, bullets: ['Main residence, pied-à-terre, investment, villa, office or family base', 'Lifestyle analysis: schools, healthcare, transport, driver, security, sea, business and privacy', 'Comparison between Istanbul, Bodrum, Antalya and other areas by profile', 'Rent before buying when it protects the client and capital better'] },
        { heading: 'Istanbul, Bodrum, Antalya: three different property logics', body: `Istanbul is a neighborhood market: Nişantaşı, Bebek, Etiler, Levent, Maslak, Zekeriyaköy or the Asian side answer different priorities. Bodrum is about villas, marinas, seasonality, views, sea access and premium asset management. Antalya can be a rational family base with climate, private services and clearer daily-life costs. Location matters as much as the property itself.`, bullets: ['Istanbul: premium apartments, secure residences, schools, business and private healthcare', 'Bodrum: villas, marina, lifestyle, seasonal rentals, maintenance and privacy', 'Antalya: family life, sea, healthcare, international community and long-term relocation', 'Neighborhood analysis before price analysis'] },
        { heading: 'Due diligence: protect the purchase before signing', body: `A property in Turkey must be reviewed methodically. Contract, title deed, authorizations, service charges, easements, developer, previous owner, payment timeline, valuation, banking and tax consequences should be understood before any decision. Bosphoras coordinates the right professionals without replacing lawyers, notaries, experts or tax advisors.`, bullets: ['Coordination with lawyers, selected agents, experts, tax advisors and banks when needed', 'Review of title, contract, payment, risks and available documents', 'Impact reading: residence, succession, tax, rental, insurance and management', 'No sales pressure: the private desk protects the decision'] },
        { heading: 'Rental, installation and relocation: daily life matters', body: `For an international family, housing is only one part of relocation. Arrival, lease, handover, utilities, internet, home insurance, furniture, school, doctor, driver, housekeeping, safety, translation and local services must be organized. Bosphoras connects property with relocation so the client can actually live in the home, not just own it.`, bullets: ['Secure rental search before purchase when needed', 'Lease, documents, deposit, handover and practical installation', 'Insurance, internet, housekeeping, driver, maintenance and local services', 'Post-arrival follow-up during the first weeks or under Private Desk support'] },
        { heading: 'Property without pressure, integrated into your Turkey strategy', body: `The right purchase is not always the most spectacular one. It must fit your residence, tax, family, banking, holding horizon and ability to manage the asset. Bosphoras helps avoid emotional decisions, compare scenarios and choose in line with your wider Turkey project.`, bullets: ['Patrimonial, family and operational reading of the property project', 'Coordination with legal-tax, banking, insurance and relocation', 'Concierge, driver, maintenance, hotel, yacht or lifestyle integration when relevant', 'Priority handling for selected profiles through Bosphoras Private Access'] },
      ],
      faqs: [
        { question: 'Is Bosphoras a real estate agency in Turkey?', answer: 'No. Bosphoras is a private coordination desk. We may introduce selected agents and coordinate checks, but our main role is to protect the coherence of the client project.' },
        { question: 'Should I buy or rent first in Turkey?', answer: 'In many cases, renting first is safer. It allows the family to test a neighborhood, school, commute, neighbors and daily rhythm before committing capital.' },
        { question: 'Can you support a property purchase in Istanbul or Bodrum?', answer: 'Yes. Bosphoras can coordinate search, visits, professionals, documents and due diligence depending on the profile and mission scope.' },
        { question: 'Do you verify title deeds and contracts?', answer: 'Legal checks must be performed by qualified professionals. Bosphoras coordinates those professionals and makes sure the right questions are asked before signing.' },
        { question: 'Can you manage the move into the property?', answer: 'Yes. Bosphoras can coordinate lease, insurance, internet, maintenance, housekeeping, driver, furniture, local services and post-arrival follow-up.' },
        { question: 'Can property be linked to residence or tax?', answer: 'Yes. That is why property, residence, tax, banking and succession should be coordinated before signing.' },
      ],
      cta: { label: 'Frame my property project in Turkey', href: '/private-assessment', secondaryLabel: 'Legal and tax advisory', secondaryHref: '/services/legal-tax-advisory' },
      jsonLdType: 'Service',
      internalLinks: [
        { pageId: 'relocate', label: 'Relocation to Turkey' },
        { pageId: 'legal-tax', label: 'Legal and tax advisory' },
        { pageId: 'istanbul', label: 'Property in Istanbul' },
        { pageId: 'bodrum', label: 'Live and invest in Bodrum' },
        { pageId: 'private-assessment', label: 'Private assessment' },
      ],
    },
  ],
  ru: [
    {
      id: 'property',
      locale: 'ru',
      slug: '/uslugi/nedvizhimost-pereezd',
      title: 'Недвижимость и relocation в Турции: покупка, аренда, проверка | Bosphoras',
      h1: 'Недвижимость в Турции: выбрать правильный объект, район и структуру',
      metaDescription:
        'Недвижимость и relocation в Турции для семей, экспатов и инвесторов: покупка, аренда, район, due diligence, резиденция, банк, налоги и установка.',
      shortIntro:
        `Покупка или аренда в Турции не должна начинаться с объявления. Правильный объект зависит от реальной жизни: семья, школа, работа, мобильность, налоги, банк, безопасность, срок пребывания, lifestyle и стратегия капитала. Bosphoras — не классическое агентство недвижимости. Мы работаем как частный офис: понимаем проект, фильтруем варианты, координируем специалистов и защищаем клиента от быстрых решений под давлением продаж.`,
      sections: [
        { heading: 'До просмотров: определить реальную потребность', body: `Многие клиенты начинают просмотры слишком рано, влюбляются в вид, террасу, марину или цену, а потом видят ограничения: неподходящий район, расстояние до школы, charges, шум, управление домом, ликвидность, налоги, график оплаты, title deed, правила seasonal rental или банковские сложности. Bosphoras сначала фиксирует потребность, потом открывает рынок.`, bullets: ['Основное жильё, pied-à-terre, инвестиция, вилла, офис или семейная база', 'Lifestyle-анализ: школа, медицина, транспорт, водитель, безопасность, море, бизнес, приватность', 'Сравнение Стамбула, Бодрума, Антальи и других зон по профилю', 'Аренда до покупки, когда это лучше защищает клиента и капитал'] },
        { heading: 'Стамбул, Бодрум, Анталья: три разные логики рынка', body: `Стамбул — рынок районов: Nişantaşı, Bebek, Etiler, Levent, Maslak, Zekeriyaköy или азиатская сторона отвечают разным приоритетам. Бодрум — виллы, marinas, сезонность, виды, доступ к морю и управление premium asset. Анталья может быть рациональной семейной базой с климатом, частными сервисами и понятной повседневной стоимостью. Локация важна не меньше самого объекта.`, bullets: ['Стамбул: premium apartments, безопасные резиденции, школы, бизнес и частная медицина', 'Бодрум: виллы, marina, lifestyle, сезонная аренда, обслуживание и приватность', 'Анталья: семья, море, медицина, международное окружение и long-term relocation', 'Сначала анализ района, потом анализ цены'] },
        { heading: 'Due diligence: защитить покупку до подписи', body: `Объект в Турции нужно проверять методично. Контракт, title deed, разрешения, charges, ограничения, девелопер, предыдущий владелец, график оплаты, оценка, банк и налоговые последствия должны быть понятны до решения. Bosphoras координирует специалистов, не заменяя юриста, нотариуса, эксперта или налогового консультанта.`, bullets: ['Координация с юристами, выбранными агентами, экспертами, налоговыми консультантами и банками', 'Проверка title, договора, платежей, рисков и доступных документов', 'Анализ влияния: резиденция, наследование, налоги, аренда, страховка, управление', 'Без давления продаж: задача частного офиса — защитить решение'] },
        { heading: 'Аренда, установка и relocation: быт так же важен', body: `Для международной семьи жильё — только часть переезда. Нужно организовать приезд, договор аренды, handover, utilities, интернет, страховку жилья, мебель, школу, врача, водителя, уборку, безопасность, переводы и локальные сервисы. Bosphoras связывает недвижимость и relocation, чтобы клиент мог реально жить в объекте, а не только владеть им.`, bullets: ['Поиск безопасной аренды до покупки при необходимости', 'Договор, документы, депозит, handover и практическая установка', 'Страховка, интернет, уборка, водитель, maintenance и локальные услуги', 'Follow-up после приезда в первые недели или в рамках Private Desk'] },
        { heading: 'Недвижимость без давления, в стратегии Турции', body: `Правильная покупка не всегда самая эффектная. Она должна соответствовать резиденции, налогам, семье, банку, горизонту владения и способности управлять активом. Bosphoras помогает избежать эмоционального решения, сравнить сценарии и выбрать в логике вашего общего проекта в Турции.`, bullets: ['Имущественный, семейный и операционный анализ недвижимости', 'Координация с legal-tax, банком, страхованием и relocation', 'Concierge, водитель, maintenance, hotel, yacht или lifestyle при необходимости', 'Приоритет для выбранных профилей через Bosphoras Private Access'] },
      ],
      faqs: [
        { question: 'Bosphoras является агентством недвижимости?', answer: 'Нет. Bosphoras — частный координационный офис. Мы можем представить выбранных агентов и координировать проверки, но наша главная роль — защитить целостность проекта клиента.' },
        { question: 'Лучше купить или сначала арендовать в Турции?', answer: 'Во многих случаях сначала аренда безопаснее. Семья может проверить район, школу, дорогу, соседей и реальный ритм жизни до вложения капитала.' },
        { question: 'Можете сопровождать покупку в Стамбуле или Бодруме?', answer: 'Да. Bosphoras может координировать поиск, просмотры, специалистов, документы и due diligence в зависимости от профиля и миссии.' },
        { question: 'Вы проверяете title deeds и договоры?', answer: 'Юридические проверки выполняют квалифицированные специалисты. Bosphoras координирует их и следит, чтобы важные вопросы были заданы до подписи.' },
        { question: 'Можете организовать заселение?', answer: 'Да. Bosphoras может координировать аренду, страховку, интернет, maintenance, уборку, водителя, мебель, локальные услуги и follow-up после приезда.' },
        { question: 'Связана ли недвижимость с резиденцией и налогами?', answer: 'Да. Поэтому недвижимость, резиденцию, налоги, банк и наследование нужно координировать до подписания.' },
      ],
      cta: { label: 'Сформировать проект недвижимости в Турции', href: '/chastnaya-konsultatsiya', secondaryLabel: 'Юридическая и налоговая координация', secondaryHref: '/uslugi/yuridicheskie-nalogovye-konsultatsii' },
      jsonLdType: 'Service',
      internalLinks: [
        { pageId: 'relocate', label: 'Переезд в Турцию' },
        { pageId: 'legal-tax', label: 'Юридическая и налоговая координация' },
        { pageId: 'istanbul', label: 'Недвижимость в Стамбуле' },
        { pageId: 'bodrum', label: 'Жить и инвестировать в Бодруме' },
        { pageId: 'private-assessment', label: 'Частная консультация' },
      ],
    },
  ],
  ar: [
    {
      id: 'property',
      locale: 'ar',
      slug: '/خدمات/العقارات-والانتقال',
      title: 'العقار والانتقال في تركيا: شراء، إيجار، فحص قانوني | Bosphoras',
      h1: 'العقار في تركيا: اختيار المنزل والحي والإطار الصحيح',
      metaDescription:
        'العقار والانتقال في تركيا للعائلات والمقيمين والمستثمرين: شراء، إيجار، اختيار الحي، due diligence، إقامة، بنك، ضرائب واستقرار.',
      shortIntro:
        `شراء أو استئجار عقار في تركيا لا يجب أن يبدأ بإعلان. العقار الصحيح يعتمد أولاً على الحياة الحقيقية: العائلة، المدرسة، العمل، التنقل، الضرائب، البنك، الأمان، مدة الإقامة، lifestyle والاستراتيجية المالية. Bosphoras ليس وكالة عقارية تقليدية. نحن نعمل كمكتب خاص: نفهم المشروع، نرشح الخيارات، ننسق المهنيين ونحمي العميل من القرارات السريعة تحت ضغط البيع.`,
      sections: [
        { heading: 'قبل الزيارات: تحديد الحاجة الحقيقية', body: `كثير من العملاء يبدأون الزيارات مبكراً، ينجذبون إلى الإطلالة أو التراس أو المارينا أو السعر، ثم يكتشفون لاحقاً قيوداً: حي غير مناسب، بعد المدرسة، الرسوم، الضجيج، إدارة المبنى، السيولة، الضرائب، خطة الدفع، سند الملكية، قواعد الإيجار الموسمي أو صعوبة البنك. يبدأ Bosphoras بتحديد الحاجة قبل فتح السوق.`, bullets: ['سكن رئيسي، pied-à-terre، استثمار، فيلا، مكتب أو قاعدة عائلية', 'تحليل نمط الحياة: المدارس، الصحة، النقل، السائق، الأمان، البحر، الأعمال والخصوصية', 'مقارنة إسطنبول وبودروم وأنطاليا ومناطق أخرى حسب الملف', 'الإيجار قبل الشراء عندما يحمي العميل ورأس المال بشكل أفضل'] },
        { heading: 'إسطنبول، بودروم، أنطاليا: ثلاث منطق عقاري مختلف', body: `إسطنبول سوق أحياء: Nişantaşı وBebek وEtiler وLevent وMaslak وZekeriyaköy أو الجانب الآسيوي لا تخدم نفس الأولويات. بودروم تعني الفيلات والمارينات والموسمية والإطلالات والوصول إلى البحر وإدارة أصل premium. أنطاليا قد تكون قاعدة عائلية عقلانية مع المناخ والخدمات الخاصة وتكلفة حياة أوضح. الموقع مهم بقدر العقار نفسه.`, bullets: ['إسطنبول: شقق premium، مجمعات آمنة، مدارس، أعمال وصحة خاصة', 'بودروم: فيلات، مارينا، lifestyle، إيجار موسمي، صيانة وخصوصية', 'أنطاليا: عائلة، بحر، صحة، مجتمع دولي واستقرار طويل الأمد', 'تحليل الحي قبل تحليل السعر'] },
        { heading: 'Due diligence: حماية الشراء قبل التوقيع', body: `العقار في تركيا يحتاج إلى مراجعة منهجية. العقد، سند الملكية، التصاريح، الرسوم، القيود، المطور، المالك السابق، جدول الدفع، التقييم، البنك والنتائج الضريبية يجب فهمها قبل القرار. ينسق Bosphoras المهنيين المناسبين دون أن يحل محل المحامي أو الموثق أو الخبير أو المستشار الضريبي.`, bullets: ['تنسيق مع محامين ووكلاء مختارين وخبراء ومستشارين ضريبيين وبنوك عند الحاجة', 'مراجعة السند والعقد والدفع والمخاطر والمستندات المتاحة', 'قراءة الأثر: الإقامة، الميراث، الضرائب، الإيجار، التأمين والإدارة', 'لا ضغط بيع: دور المكتب الخاص حماية القرار'] },
        { heading: 'الإيجار والاستقرار والانتقال: الحياة اليومية مهمة', body: `للعائلة الدولية، السكن جزء واحد فقط من الانتقال. يجب تنظيم الوصول، عقد الإيجار، الاستلام، الخدمات، الإنترنت، تأمين المنزل، الأثاث، المدرسة، الطبيب، السائق، التنظيف، الأمان، الترجمة والخدمات المحلية. يربط Bosphoras العقار بالانتقال حتى يعيش العميل في العقار فعلياً، لا يملكه فقط.`, bullets: ['بحث إيجار آمن قبل الشراء عند الحاجة', 'العقد، المستندات، الوديعة، الاستلام والتنظيم العملي', 'التأمين، الإنترنت، التنظيف، السائق، الصيانة والخدمات المحلية', 'متابعة بعد الوصول خلال الأسابيع الأولى أو ضمن Private Desk'] },
        { heading: 'عقار بلا ضغط، داخل استراتيجية تركيا', body: `الشراء الصحيح ليس دائماً الأكثر إثارة. يجب أن يتناسب مع الإقامة، الضرائب، العائلة، البنك، أفق الاحتفاظ وقدرة إدارة الأصل. يساعد Bosphoras على تجنب القرار العاطفي، مقارنة السيناريوهات واختيار ما يتوافق مع مشروع تركيا الأوسع.`, bullets: ['قراءة مالية وعائلية وتشغيلية للمشروع العقاري', 'تنسيق مع القانون والضرائب والبنك والتأمين والانتقال', 'دمج الكونسيرج، السائق، الصيانة، الفندق، اليخت أو lifestyle عند الحاجة', 'أولوية لبعض الملفات عبر Bosphoras Private Access'] },
      ],
      faqs: [
        { question: 'هل Bosphoras وكالة عقارية في تركيا؟', answer: 'لا. Bosphoras مكتب تنسيق خاص. يمكننا تقديم وكلاء مختارين وتنسيق الفحوصات، لكن دورنا الأساسي هو حماية منطق مشروع العميل.' },
        { question: 'هل الأفضل الشراء أم الإيجار أولاً؟', answer: 'في كثير من الحالات، الإيجار أولاً أكثر أماناً. يتيح للعائلة اختبار الحي والمدرسة والتنقل والجيران والإيقاع اليومي قبل استثمار رأس المال.' },
        { question: 'هل ترافقون شراء عقار في إسطنبول أو بودروم؟', answer: 'نعم. يمكن لـ Bosphoras تنسيق البحث والزيارات والمهنيين والمستندات وdue diligence حسب الملف ونطاق المهمة.' },
        { question: 'هل تتحققون من سند الملكية والعقود؟', answer: 'الفحوصات القانونية يجب أن يقوم بها مهنيون مؤهلون. ينسق Bosphoras هؤلاء المهنيين ويتأكد من طرح الأسئلة الصحيحة قبل التوقيع.' },
        { question: 'هل يمكنكم تنظيم السكن بعد التوقيع؟', answer: 'نعم. يمكن لـ Bosphoras تنسيق الإيجار، التأمين، الإنترنت، الصيانة، التنظيف، السائق، الأثاث، الخدمات المحلية والمتابعة بعد الوصول.' },
        { question: 'هل العقار مرتبط بالإقامة أو الضرائب؟', answer: 'نعم. لذلك يجب تنسيق العقار والإقامة والضرائب والبنك والميراث قبل التوقيع.' },
      ],
      cta: { label: 'تنظيم مشروعي العقاري في تركيا', href: '/تقييم-خاص', secondaryLabel: 'الاستشارات القانونية والضريبية', secondaryHref: '/خدمات/استشارات-قانونية-ضريبية' },
      jsonLdType: 'Service',
      internalLinks: [
        { pageId: 'relocate', label: 'الانتقال إلى تركيا' },
        { pageId: 'legal-tax', label: 'التنسيق القانوني والضريبي' },
        { pageId: 'istanbul', label: 'العقار في إسطنبول' },
        { pageId: 'bodrum', label: 'العيش والاستثمار في بودروم' },
        { pageId: 'private-assessment', label: 'تقييم خاص' },
      ],
    },
  ],
};
