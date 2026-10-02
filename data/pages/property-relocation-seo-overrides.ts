import type { Locale } from '@/lib/i18n';
import type { MainPageContent } from './types';

export const propertyRelocationSeoOverrides: Partial<Record<Locale, MainPageContent[]>> = {
  fr: [
    {
      id: 'property',
      locale: 'fr',
      slug: '/immobilier-turquie',
      title: 'Immobilier en Turquie : investir à Istanbul, Bodrum & Antalya | Bosphoras',
      h1: 'Immobilier en Turquie : des projets sélectionnés pour investir avec méthode',
      metaDescription:
        'Immobilier en Turquie pour investisseurs internationaux : projets sélectionnés à Istanbul, Bodrum et Antalya, plans de paiement, analyse technique, due diligence et accompagnement Bosphoras.',
      shortIntro:
        `Bosphoras Property Desk sélectionne des projets immobiliers en Turquie pour une clientèle internationale qui recherche autre chose qu'un catalogue d'annonces. Nous regardons l'emplacement, la qualité de construction, le prix, le plan de paiement, les coûts réels, le profil du promoteur et les points de vigilance. Notre objectif est de rendre l'investissement immobilier à Istanbul, Bodrum et Antalya plus lisible, plus transparent et plus simple à comparer.`,
      sections: [
        {
          heading: 'Investir en Turquie avec un capital d’entrée clair',
          body:
            `Un bien à 250 000 € ne signifie pas toujours 250 000 € à verser immédiatement. Sur certains projets neufs, le promoteur peut proposer un acompte puis un échéancier jusqu'à la livraison. Bosphoras présente séparément le prix total, le capital nécessaire aujourd'hui, les échéances futures et la date de livraison lorsque ces informations sont disponibles et vérifiées.`,
          bullets: [
            'Prix total du bien et devise de référence',
            'Capital nécessaire à la réservation ou à la signature',
            'Plan de paiement promoteur et échéances documentées',
            'Coût d’acquisition à distinguer du seul prix affiché',
          ],
        },
        {
          heading: 'Bosphoras Selection : moins de biens, plus d’analyse',
          body:
            `Nous ne cherchons pas à afficher des milliers d'annonces. La sélection doit rester lisible : projets neufs, appartements, résidences premium, villas et opportunités privées provenant de partenaires identifiés. Chaque opportunité doit répondre à une logique précise : investissement, résidence, location, usage familial ou conservation patrimoniale.`,
          bullets: [
            'Selected Investments : projets avec logique d’investissement et conditions lisibles',
            'Signature Collection : résidences et villas à forte qualité d’usage ou de localisation',
            'Private Opportunities : opportunités accessibles sur demande selon le profil',
            'Aucune promesse de rendement : hypothèses, coûts et risques doivent être distingués',
          ],
        },
        {
          heading: 'Analyse technique : un beau rendu 3D ne suffit pas',
          body:
            `La valeur d'un projet ne se limite pas à la piscine, au lobby ou à une vue spectaculaire. Bosphoras examine la cohérence du produit : structure, façades, menuiseries, isolation, équipements, parties communes, plan des appartements, qualité des finitions, maintenance future et adéquation entre le niveau de construction et le prix demandé. Les contrôles techniques nécessitant une expertise réglementée sont confiés aux professionnels habilités.`,
          bullets: [
            'Qualité de construction et niveau de finition',
            'Cohérence du prix au m² avec le produit et la localisation',
            'Charges, maintenance et vieillissement probable des prestations',
            'Points forts mais aussi points de vigilance avant décision',
          ],
        },
        {
          heading: 'Istanbul, Bodrum, Antalya : trois stratégies différentes',
          body:
            `Istanbul offre le marché le plus profond pour la vie urbaine, le business et la demande locative à l'année. Bodrum se positionne davantage sur les villas, les marinas, les résidences premium et l'usage patrimonial ou saisonnier. Antalya combine une base de vie internationale, le littoral méditerranéen et des tickets d'entrée parfois plus accessibles. Le choix dépend du profil de l'investisseur, pas d'un classement universel.`,
          bullets: [
            'Immobilier Istanbul : liquidité, quartiers, business, résidence et location longue durée',
            'Immobilier Bodrum : villas, mer, marina, prestige et usage saisonnier',
            'Immobilier Antalya : résidence, famille, littoral et investissements plus accessibles',
            'Comparaison du quartier, du produit et de la stratégie avant comparaison du prix',
          ],
        },
        {
          heading: 'Due diligence et cadre de transaction',
          body:
            `Avant tout paiement, il faut comprendre le titre, le contrat, le promoteur ou vendeur, les autorisations, le calendrier, les charges, la valorisation, la situation juridique et les conséquences fiscales pertinentes. Bosphoras coordonne le dossier et les bons interlocuteurs. Les actes relevant de l'intermédiation immobilière réglementée, du droit, de la fiscalité, de l'évaluation ou de la transaction sont réalisés ou validés par les professionnels autorisés concernés.`,
          bullets: [
            'Partenaire immobilier ou promoteur clairement identifié',
            'Coordination avocat, expert, banque et fiscaliste selon le dossier',
            'Lecture du contrat et du calendrier avant transfert de fonds',
            'Traçabilité des rôles : qui présente, qui vend, qui vérifie et qui encaisse',
          ],
        },
        {
          heading: 'Après l’achat : Property Care et installation',
          body:
            `L'achat n'est que le début. Selon le projet, Bosphoras peut coordonner l'ameublement, les travaux, l'assurance, la mise en location, la maintenance, les abonnements, le chauffeur, la relocation et la gestion pratique. Le Property Desk s'intègre ainsi au bureau privé Bosphoras et à la stratégie globale du client en Turquie.`,
          bullets: [
            'Ameublement, travaux et contrôle de la livraison',
            'Assurance, maintenance et gestion locale',
            'Location et suivi par les partenaires habilités lorsque nécessaire',
            'Relocation, banque, résidence et services privés autour du bien',
          ],
        },
      ],
      faqs: [
        { question: 'Quel est le meilleur investissement immobilier en Turquie ?', answer: 'Il n’existe pas de meilleur bien universel. Istanbul, Bodrum et Antalya répondent à des logiques différentes. Bosphoras compare le produit, le quartier, le prix, le calendrier de paiement, les coûts et l’objectif réel de l’investisseur.' },
        { question: 'Peut-on acheter un appartement en Turquie avec un paiement échelonné ?', answer: 'Certains promoteurs proposent des plans de paiement sur des projets neufs. Les conditions varient selon le projet. Bosphoras affiche uniquement les échéanciers communiqués et confirmés par le partenaire ou le promoteur concerné.' },
        { question: 'Combien faut-il pour investir dans l’immobilier en Turquie ?', answer: 'Le prix total et le capital nécessaire aujourd’hui sont deux informations différentes. Le ticket d’entrée dépend du bien, du promoteur, de l’acompte demandé et du plan de paiement. Notre présentation les distingue clairement.' },
        { question: 'Bosphoras est-il une agence immobilière ?', answer: 'Bosphoras agit comme Property Desk et bureau privé de sélection, mise en relation et coordination. Les prestations réglementées d’intermédiation et la transaction sont réalisées dans le cadre applicable avec les professionnels autorisés concernés.' },
        { question: 'Analysez-vous la qualité de construction ?', answer: 'Oui, dans notre lecture du produit et de sa valeur. Lorsqu’une expertise ou un contrôle réglementé est nécessaire, il est réalisé par un professionnel habilité.' },
        { question: 'Peut-on acheter pour louer ensuite ?', answer: 'Oui, selon le bien et le cadre local. La demande locative, les règles applicables, les charges, la saisonnalité et les coûts de gestion doivent être intégrés avant de calculer un rendement potentiel.' },
      ],
      cta: { label: 'Accéder au Property Desk', href: '/diagnostic-prive', secondaryLabel: 'Conseil juridique et fiscal', secondaryHref: '/services/conseil-juridique-fiscal' },
      jsonLdType: 'CollectionPage',
      internalLinks: [
        { pageId: 'istanbul', label: 'Immobilier à Istanbul' },
        { pageId: 'bodrum', label: 'Immobilier à Bodrum' },
        { pageId: 'antalya', label: 'Immobilier à Antalya' },
        { pageId: 'legal-tax', label: 'Conseil juridique et fiscal' },
        { pageId: 'private-assessment', label: 'Diagnostic privé' },
      ],
    },
  ],
  en: [
    {
      id: 'property',
      locale: 'en',
      slug: '/property-turkey',
      title: 'Property in Turkey: Istanbul, Bodrum & Antalya investments | Bosphoras',
      h1: 'Property in Turkey: selected opportunities for international investors',
      metaDescription:
        'Property in Turkey for international investors: selected projects in Istanbul, Bodrum and Antalya, developer payment plans, technical review, due diligence and Bosphoras coordination.',
      shortIntro:
        `Bosphoras Property Desk is built for international buyers who want more than a property portal. We look at location, build quality, price, payment plan, total acquisition cost, developer profile and the points that deserve caution. The aim is to make property investment in Istanbul, Bodrum and Antalya easier to understand and compare.`,
      sections: [
        {
          heading: 'A clear entry capital, not only a headline price',
          body:
            `A property priced at €250,000 does not always require €250,000 on day one. Some new-build developers offer a deposit followed by scheduled payments up to completion. When verified and available, Bosphoras separates the total property price, capital required today, future instalments and expected completion date.`,
          bullets: ['Total property price and reference currency', 'Capital required at reservation or signing', 'Verified developer payment schedule', 'Total acquisition cost separated from the headline price'],
        },
        {
          heading: 'Bosphoras Selection: fewer properties, deeper analysis',
          body:
            `We do not aim to publish thousands of listings. The selection is intentionally focused: new developments, apartments, premium residences, villas and private opportunities sourced through identified partners. Each opportunity should have a clear use case: investment, residence, rental, family use or long-term wealth preservation.`,
          bullets: ['Selected Investments with a documented investment case', 'Signature Collection for premium residences and villas', 'Private Opportunities available on request', 'No guaranteed returns: assumptions, costs and risks remain explicit'],
        },
        {
          heading: 'Technical review: a beautiful rendering is not enough',
          body:
            `Pools, lobbies and CGI do not define value. Bosphoras reviews the product logic: structure, façade, windows, insulation, equipment, common areas, layouts, finish quality, future maintenance and whether the construction level is coherent with the asking price. Regulated technical inspections are assigned to qualified professionals when required.`,
          bullets: ['Build quality and finish level', 'Price per square metre versus product and location', 'Service charges, maintenance and long-term usability', 'Strengths and watchpoints before a decision'],
        },
        {
          heading: 'Istanbul, Bodrum and Antalya serve different strategies',
          body:
            `Istanbul offers the deepest urban market, business ecosystem and year-round rental demand. Bodrum is more focused on villas, marinas, premium residences and lifestyle or wealth-preservation use. Antalya combines an international coastal lifestyle with entry points that can be more accessible. The right city depends on the investor profile rather than a universal ranking.`,
          bullets: ['Istanbul property: liquidity, districts, business and year-round demand', 'Bodrum property: villas, sea, marina, prestige and seasonal use', 'Antalya property: residence, family, coast and more accessible investment cases', 'Compare location, product and strategy before headline price'],
        },
        {
          heading: 'Due diligence and transaction framework',
          body:
            `Before funds move, the title, contract, developer or seller, permits, payment schedule, charges, valuation, legal position and relevant tax consequences should be understood. Bosphoras coordinates the process and the right professionals. Regulated brokerage, legal, tax, valuation and transaction work is performed or validated by the relevant authorised professionals.`,
          bullets: ['Clearly identified developer or authorised property partner', 'Lawyer, valuer, bank and tax coordination when relevant', 'Contract and payment schedule review before funds are transferred', 'Clear roles: who presents, sells, checks and receives funds'],
        },
        {
          heading: 'After purchase: Property Care and relocation',
          body:
            `The purchase is only the beginning. Depending on the project, Bosphoras can coordinate furnishing, works, insurance, rental management, maintenance, utilities, driver services and relocation. The Property Desk therefore connects directly with the wider Bosphoras private-office relationship.`,
          bullets: ['Furnishing, works and handover coordination', 'Insurance, maintenance and local management', 'Rental support through authorised partners when required', 'Relocation, banking, residence and private services around the property'],
        },
      ],
      faqs: [
        { question: 'What is the best property investment in Turkey?', answer: 'There is no universal best property. Istanbul, Bodrum and Antalya serve different strategies. We compare the asset, district, price, payment schedule, costs and the investor’s actual objective.' },
        { question: 'Can foreigners buy property in Turkey with instalments?', answer: 'Some developers offer instalment plans on new-build projects. Terms vary by development. Bosphoras only presents payment schedules communicated and confirmed by the relevant developer or partner.' },
        { question: 'How much capital do I need to invest in Turkey property?', answer: 'The total purchase price and the capital required today are different figures. The entry amount depends on the property, developer, deposit and payment plan. Our presentation keeps those numbers separate.' },
        { question: 'Is Bosphoras a real estate agency?', answer: 'Bosphoras operates as a Property Desk and private office for selection, introductions and coordination. Regulated brokerage and transaction services are handled within the applicable framework by the relevant authorised professionals.' },
        { question: 'Do you review construction quality?', answer: 'Yes, as part of our product and value assessment. Where a regulated technical inspection is required, it is carried out by a qualified professional.' },
        { question: 'Can the property be rented after purchase?', answer: 'Potentially, depending on the property and local rules. Rental demand, regulation, charges, seasonality and management costs must be included before discussing a potential yield.' },
      ],
      cta: { label: 'Access the Property Desk', href: '/private-assessment', secondaryLabel: 'Legal and tax advisory', secondaryHref: '/services/legal-tax-advisory' },
      jsonLdType: 'CollectionPage',
      internalLinks: [
        { pageId: 'istanbul', label: 'Property in Istanbul' },
        { pageId: 'bodrum', label: 'Property in Bodrum' },
        { pageId: 'antalya', label: 'Property in Antalya' },
        { pageId: 'legal-tax', label: 'Legal and tax advisory' },
        { pageId: 'private-assessment', label: 'Private assessment' },
      ],
    },
  ],
  ru: [
    {
      id: 'property',
      locale: 'ru',
      slug: '/nedvizhimost-v-turtsii',
      title: 'Недвижимость в Турции: Стамбул, Бодрум и Анталья | Bosphoras',
      h1: 'Недвижимость в Турции: отобранные проекты для международных инвесторов',
      metaDescription:
        'Недвижимость в Турции для инвесторов: проекты в Стамбуле, Бодруме и Анталье, рассрочка от застройщика, технический анализ, due diligence и сопровождение Bosphoras.',
      shortIntro:
        `Bosphoras Property Desk создан для международных покупателей, которым нужен не очередной каталог объявлений, а отобранные проекты с понятной логикой. Мы смотрим на локацию, качество строительства, цену, график платежей, полную стоимость покупки, застройщика и риски. Цель — сделать инвестиции в недвижимость Стамбула, Бодрума и Антальи прозрачнее и проще для сравнения.`,
      sections: [
        {
          heading: 'Понятный входной капитал и рассрочка',
          body:
            `Цена объекта и сумма, необходимая сегодня, — не всегда одно и то же. В некоторых новостройках застройщик предлагает первоначальный взнос и дальнейшую рассрочку до сдачи. Bosphoras отдельно показывает общую стоимость, первый платеж, будущие взносы и срок сдачи, когда эти данные подтверждены.`,
          bullets: ['Полная цена и валюта', 'Сумма для бронирования или подписания', 'Подтвержденный график рассрочки от застройщика', 'Полная стоимость приобретения отдельно от рекламной цены'],
        },
        {
          heading: 'Bosphoras Selection: меньше объектов, больше анализа',
          body:
            `Наша задача — не публиковать тысячи квартир. В подборке остаются новостройки, квартиры, премиальные резиденции, виллы и частные предложения от идентифицированных партнеров. У каждого объекта должна быть понятная логика: инвестиции, проживание, аренда, семейное использование или сохранение капитала.`,
          bullets: ['Selected Investments — инвестиционная логика и прозрачные условия', 'Signature Collection — качественные резиденции и виллы', 'Private Opportunities — предложения по запросу', 'Без гарантированной доходности: предположения, расходы и риски разделяются'],
        },
        {
          heading: 'Технический анализ: красивого рендера недостаточно',
          body:
            `Бассейн и эффектный лобби сами по себе не определяют ценность объекта. Bosphoras оценивает логику продукта: конструкцию, фасады, окна, изоляцию, оборудование, общие зоны, планировки, уровень отделки, будущие расходы на обслуживание и соответствие качества запрашиваемой цене. Регулируемые технические проверки выполняют квалифицированные специалисты.`,
          bullets: ['Качество строительства и отделки', 'Цена за м² в контексте продукта и локации', 'Сервисные платежи и будущая эксплуатация', 'Сильные стороны и риски до принятия решения'],
        },
        {
          heading: 'Стамбул, Бодрум и Анталья — разные инвестиционные сценарии',
          body:
            `Стамбул — самый глубокий городской рынок с бизнесом и круглогодичным спросом. Бодрум сильнее в виллах, маринах, премиальных резиденциях и lifestyle-активах. Анталья сочетает международную среду, море и зачастую более доступный вход. Выбор зависит от стратегии инвестора, а не от универсального рейтинга городов.`,
          bullets: ['Недвижимость Стамбула: районы, ликвидность, бизнес и долгосрочная аренда', 'Недвижимость Бодрума: виллы, море, марина и премиальный lifestyle', 'Недвижимость Антальи: семья, побережье и более доступные сценарии', 'Сначала стратегия и продукт, затем сравнение цены'],
        },
        {
          heading: 'Due diligence и структура сделки',
          body:
            `До перевода средств нужно понимать титул, договор, застройщика или продавца, разрешения, график платежей, расходы, оценку, юридическое положение и релевантные налоговые последствия. Bosphoras координирует процесс. Регулируемые брокерские, юридические, налоговые, оценочные и транзакционные действия выполняют или подтверждают соответствующие уполномоченные специалисты.`,
          bullets: ['Понятно, кто является застройщиком или уполномоченным партнером', 'Координация юриста, оценщика, банка и налогового консультанта', 'Проверка договора и графика до оплаты', 'Четкое распределение ролей в сделке'],
        },
        {
          heading: 'После покупки: Property Care и переезд',
          body:
            `После сделки Bosphoras может координировать меблировку, работы, страховку, управление арендой, обслуживание, коммунальные услуги, водителя и relocation. Так недвижимость становится частью более широкой системы частного офиса Bosphoras.`,
          bullets: ['Меблировка, работы и приемка', 'Страхование, обслуживание и локальное управление', 'Аренда через уполномоченных партнеров при необходимости', 'Relocation, банк, резиденция и private services вокруг объекта'],
        },
      ],
      faqs: [
        { question: 'Какую недвижимость лучше купить в Турции для инвестиций?', answer: 'Универсального ответа нет. Стамбул, Бодрум и Анталья работают по-разному. Важно сравнивать объект, район, цену, график платежей, расходы и реальную цель инвестора.' },
        { question: 'Можно ли купить квартиру в Турции в рассрочку?', answer: 'Некоторые застройщики предлагают рассрочку в новостройках. Условия различаются. Bosphoras показывает только подтвержденные условия конкретного проекта.' },
        { question: 'Сколько денег нужно для покупки недвижимости в Турции?', answer: 'Общая цена и сумма, необходимая сегодня, отличаются. Входной капитал зависит от объекта, первоначального взноса и графика платежей.' },
        { question: 'Bosphoras — агентство недвижимости?', answer: 'Bosphoras работает как Property Desk и частный офис по отбору, introductions и координации. Регулируемое посредничество и сама сделка проводятся в применимом порядке с уполномоченными специалистами.' },
        { question: 'Вы оцениваете качество строительства?', answer: 'Да, в рамках анализа продукта и его ценности. Если нужна регулируемая техническая экспертиза, ее выполняет квалифицированный специалист.' },
        { question: 'Можно ли сдавать объект после покупки?', answer: 'Это зависит от объекта и применимых правил. До расчета потенциальной доходности нужно учитывать спрос, регулирование, расходы, сезонность и стоимость управления.' },
      ],
      cta: { label: 'Открыть Property Desk', href: '/chastnaya-konsultatsiya', secondaryLabel: 'Юридическое и налоговое сопровождение', secondaryHref: '/uslugi/yuridicheskie-nalogovye-konsultatsii' },
      jsonLdType: 'CollectionPage',
      internalLinks: [
        { pageId: 'istanbul', label: 'Недвижимость в Стамбуле' },
        { pageId: 'bodrum', label: 'Недвижимость в Бодруме' },
        { pageId: 'antalya', label: 'Недвижимость в Анталье' },
        { pageId: 'legal-tax', label: 'Юридическая и налоговая координация' },
        { pageId: 'private-assessment', label: 'Частная консультация' },
      ],
    },
  ],
  ar: [
    {
      id: 'property',
      locale: 'ar',
      slug: '/عقارات-تركيا',
      title: 'عقارات تركيا: الاستثمار في إسطنبول وبودروم وأنطاليا | Bosphoras',
      h1: 'عقارات تركيا: فرص مختارة للمستثمر الدولي',
      metaDescription:
        'عقارات تركيا للمستثمرين الدوليين: مشاريع مختارة في إسطنبول وبودروم وأنطاليا، خطط دفع من المطور، تحليل فني، تدقيق وتنسيق Bosphoras.',
      shortIntro:
        `تم إنشاء Bosphoras Property Desk للمشترين الدوليين الذين لا يريدون مجرد بوابة إعلانات. نراجع الموقع وجودة البناء والسعر وخطة الدفع والتكلفة الإجمالية وملف المطور ونقاط الحذر. الهدف هو جعل الاستثمار العقاري في إسطنبول وبودروم وأنطاليا أوضح وأسهل للمقارنة.`,
      sections: [
        {
          heading: 'رأس مال أولي واضح وخطة دفع مفهومة',
          body:
            `سعر العقار لا يساوي دائماً المبلغ المطلوب دفعه في اليوم الأول. بعض مشاريع التطوير الجديدة توفر دفعة أولى ثم أقساطاً حتى التسليم. عند توفر معلومات مؤكدة، يعرض Bosphoras السعر الإجمالي والمبلغ المطلوب اليوم والأقساط المستقبلية وتاريخ التسليم بشكل منفصل.`,
          bullets: ['السعر الإجمالي والعملة', 'المبلغ المطلوب للحجز أو التوقيع', 'خطة دفع مؤكدة من المطور', 'التكلفة الإجمالية للشراء منفصلة عن السعر المعلن'],
        },
        {
          heading: 'Bosphoras Selection: عقارات أقل وتحليل أعمق',
          body:
            `لا نهدف إلى عرض آلاف العقارات. نركز على مشاريع جديدة وشقق وإقامات راقية وفلل وفرص خاصة من شركاء معروفين. يجب أن يكون لكل فرصة منطق واضح: استثمار أو سكن أو إيجار أو استخدام عائلي أو حفظ للقيمة على المدى الطويل.`,
          bullets: ['Selected Investments ببيانات وشروط واضحة', 'Signature Collection للإقامات والفلل الراقية', 'Private Opportunities متاحة حسب الملف وعند الطلب', 'لا نضمن العوائد: نفصل بين الفرضيات والتكاليف والمخاطر'],
        },
        {
          heading: 'التحليل الفني: الصورة الجميلة لا تكفي',
          body:
            `المسبح واللوبي والتصاميم ثلاثية الأبعاد لا تحدد وحدها قيمة المشروع. يراجع Bosphoras منطق المنتج: الهيكل والواجهات والنوافذ والعزل والتجهيزات والمناطق المشتركة والمخططات وجودة التشطيبات والصيانة المستقبلية ومدى تناسب الجودة مع السعر المطلوب. الفحوص الفنية المنظمة ينفذها مختصون مؤهلون عند الحاجة.`,
          bullets: ['جودة البناء والتشطيب', 'السعر للمتر مقارنة بالمنتج والموقع', 'رسوم الخدمات والصيانة المستقبلية', 'نقاط القوة ونقاط الحذر قبل القرار'],
        },
        {
          heading: 'إسطنبول وبودروم وأنطاليا: استراتيجيات مختلفة',
          body:
            `إسطنبول تقدم أعمق سوق حضري مع الأعمال والطلب على مدار العام. بودروم تركز أكثر على الفلل والمارينات والإقامات الراقية ونمط الحياة. أنطاليا تجمع بين البيئة الدولية والساحل المتوسطي ونقاط دخول قد تكون أكثر سهولة. الاختيار يعتمد على ملف المستثمر وليس على ترتيب واحد للجميع.`,
          bullets: ['عقارات إسطنبول: الأحياء والسيولة والأعمال والطلب السنوي', 'عقارات بودروم: الفلل والبحر والمارينا والخصوصية', 'عقارات أنطاليا: السكن والعائلة والساحل وفرص أكثر سهولة', 'مقارنة الموقع والمنتج والاستراتيجية قبل السعر'],
        },
        {
          heading: 'التدقيق وإطار الصفقة',
          body:
            `قبل تحويل الأموال يجب فهم سند الملكية والعقد والمطور أو البائع والتراخيص وجدول الدفع والرسوم والتقييم والوضع القانوني والآثار الضريبية ذات الصلة. ينسق Bosphoras العملية مع المختصين المناسبين. أعمال الوساطة المنظمة والقانون والضرائب والتقييم والمعاملة ينفذها أو يؤكدها المهنيون المخولون حسب الحالة.`,
          bullets: ['تحديد المطور أو الشريك العقاري بوضوح', 'تنسيق المحامي والمقيم والبنك والمستشار الضريبي عند الحاجة', 'مراجعة العقد وجدول الدفع قبل تحويل الأموال', 'وضوح من يعرض ومن يبيع ومن يتحقق ومن يستلم الأموال'],
        },
        {
          heading: 'بعد الشراء: Property Care والانتقال',
          body:
            `بعد الشراء يمكن لـ Bosphoras تنسيق التأثيث والأعمال والتأمين وإدارة الإيجار والصيانة والخدمات والسائق والانتقال حسب المشروع. وهكذا يصبح Property Desk جزءاً من علاقة المكتب الخاص الأوسع مع العميل في تركيا.`,
          bullets: ['التأثيث والأعمال والاستلام', 'التأمين والصيانة والإدارة المحلية', 'دعم الإيجار عبر شركاء مخولين عند الحاجة', 'الانتقال والبنوك والإقامة والخدمات الخاصة حول العقار'],
        },
      ],
      faqs: [
        { question: 'ما أفضل استثمار عقاري في تركيا؟', answer: 'لا يوجد عقار واحد هو الأفضل للجميع. تختلف إسطنبول وبودروم وأنطاليا في منطقها. نقارن العقار والمنطقة والسعر وخطة الدفع والتكاليف وهدف المستثمر.' },
        { question: 'هل يمكن شراء عقار في تركيا بالتقسيط؟', answer: 'يقدم بعض المطورين خطط دفع في المشاريع الجديدة. تختلف الشروط حسب المشروع، ويعرض Bosphoras فقط الخطط المؤكدة من المطور أو الشريك المعني.' },
        { question: 'كم أحتاج للاستثمار في عقارات تركيا؟', answer: 'السعر الإجمالي والمبلغ المطلوب اليوم رقمان مختلفان. يعتمد رأس المال الأولي على العقار والدفعة الأولى وخطة الدفع.' },
        { question: 'هل Bosphoras وكالة عقارية؟', answer: 'يعمل Bosphoras كـ Property Desk ومكتب خاص للاختيار والتعريف والتنسيق. الوساطة المنظمة والمعاملة تتم ضمن الإطار المعمول به مع المهنيين المخولين.' },
        { question: 'هل تراجعون جودة البناء؟', answer: 'نعم ضمن تحليل المنتج وقيمته. عندما يلزم فحص فني منظم، ينفذه مختص مؤهل.' },
        { question: 'هل يمكن تأجير العقار بعد الشراء؟', answer: 'يعتمد ذلك على العقار والقواعد المحلية. يجب احتساب الطلب واللوائح والرسوم والموسمية وتكلفة الإدارة قبل مناقشة أي عائد محتمل.' },
      ],
      cta: { label: 'الدخول إلى Property Desk', href: '/تقييم-خاص', secondaryLabel: 'الاستشارات القانونية والضريبية', secondaryHref: '/خدمات/استشارات-قانونية-ضريبية' },
      jsonLdType: 'CollectionPage',
      internalLinks: [
        { pageId: 'istanbul', label: 'عقارات إسطنبول' },
        { pageId: 'bodrum', label: 'عقارات بودروم' },
        { pageId: 'antalya', label: 'عقارات أنطاليا' },
        { pageId: 'legal-tax', label: 'التنسيق القانوني والضريبي' },
        { pageId: 'private-assessment', label: 'تقييم خاص' },
      ],
    },
  ],
};
