import type { Locale } from '@/lib/i18n';
import type { MainPageContent } from './types';

export const istanbulDestinationSeoOverrides: Partial<Record<Locale, MainPageContent[]>> = {
  fr: [
    {
      id: 'istanbul',
      locale: 'fr',
      slug: '/destinations/istanbul',
      title: 'Istanbul luxe, affaires et art de vivre : vivre, investir, séjourner | Bosphoras',
      h1: 'Istanbul : la ville où l’Europe regarde l’Orient et où chaque détail devient une expérience',
      metaDescription:
        'Istanbul premium avec Bosphoras : Bosphore, palaces, restaurants, quartiers de luxe, immobilier, affaires, conciergerie, chauffeur privé, famille et installation en Turquie.',
      shortIntro:
        `Istanbul ne se visite pas seulement, elle se ressent. Au lever du jour, le Bosphore devient argenté, les ferries croisent les yachts, les minarets dessinent la skyline et les tours de Levent rappellent que la ville ne vit pas seulement dans son histoire : elle avance, elle négocie, elle construit, elle séduit. Pour un investisseur, une famille ou un dirigeant international, Istanbul peut être une base, un refuge, un marché, une scène sociale et un art de vivre. Bosphoras transforme cette ville complexe en expérience claire, fluide et privée.`,
      sections: [
        {
          heading: 'Une ville qui raconte deux continents en une seule journée',
          body:
            `Le matin peut commencer dans un palace au bord du Bosphore, continuer par un rendez-vous d’affaires à Levent, se poursuivre par un déjeuner à Nişantaşı, un passage discret à Bebek, puis se terminer par un dîner face aux lumières de la rive asiatique. Istanbul n’est pas une destination linéaire : c’est une ville de contrastes maîtrisés, entre empire et finance, tradition et modernité, famille et réseau, silence privé et énergie mondiale.`,
          bullets: [
            'Bosphore, palaces, yalis, marinas, rooftops, mosquées historiques et tours d’affaires',
            'Vie européenne, âme orientale, énergie commerciale et hospitalité turque',
            'Ville idéale pour relier affaires, famille, immobilier, santé privée et lifestyle',
            'Expérience plus forte lorsque chaque trajet, rendez-vous et réservation est coordonné',
          ],
        },
        {
          heading: 'Les quartiers d’Istanbul ne vendent pas le même rêve',
          body:
            `Choisir Istanbul, ce n’est pas seulement choisir une ville : c’est choisir un rythme. Nişantaşı parle de boutiques, d’élégance urbaine et de vie sociale. Bebek et Arnavutköy racontent le Bosphore, les cafés, les dîners et les vues rares. Etiler et Levent parlent de business, d’écoles, de résidences et d’accès rapide. Zekeriyaköy offre plus d’air, de villas et de famille. La rive asiatique peut donner un équilibre plus résidentiel, plus calme, plus local. Bosphoras aide à traduire ces quartiers en décisions concrètes.`,
          bullets: [
            'Nişantaşı : mode, restaurants, vie sociale, appartements premium et élégance citadine',
            'Bebek, Arnavutköy, Emirgan : Bosphore, vues rares, maisons de caractère et art de vivre',
            'Etiler, Levent, Maslak : business, résidences modernes, écoles, bureaux et mobilité',
            'Zekeriyaköy et rive asiatique : famille, espace, calme, villas, écoles et quotidien plus fluide',
          ],
        },
        {
          heading: 'Istanbul pour vivre : famille, école, santé, sécurité et rythme quotidien',
          body:
            `La beauté d’Istanbul ne suffit pas pour y vivre. Une famille doit penser aux écoles, aux trajets, au pédiatre, aux hôpitaux privés, au chauffeur, au quartier, à la sécurité, à la langue, aux services de maison et à la gestion du temps. Le bon Istanbul n’est pas le même pour un couple sans enfant, une famille avec école internationale, un dirigeant qui voyage ou un investisseur qui reste quelques semaines par mois. Bosphoras organise la ville autour de votre vie réelle.`,
          bullets: [
            'Sélection des quartiers selon école, santé, transport, sécurité et habitudes familiales',
            'Coordination chauffeur privé, logement, assurance, médecins, services et installation',
            'Lecture pratique des temps de trajet, du trafic, des zones et des contraintes de saison',
            'Approche privée pour éviter l’improvisation et transformer Istanbul en base confortable',
          ],
        },
        {
          heading: 'Istanbul pour investir : immobilier, société, banque, réseau et vision long terme',
          body:
            `Istanbul attire parce qu’elle concentre l’histoire, la consommation, les talents, les capitaux, les services privés et une position géographique unique. Mais investir dans la ville demande une lecture fine : quartier, liquidité, titre, fiscalité, banque, usage réel, location, gestion, héritage, devise, timing et partenaires. Bosphoras ne pousse pas un achat par émotion. Nous relions immobilier, juridique, fiscalité, banque, société et stratégie familiale pour que la décision ait du sens.`,
          bullets: [
            'Achat immobilier, location premium, pied-à-terre, résidence familiale ou actif patrimonial',
            'Coordination possible avec avocats, fiscalistes, comptables, banques et experts sélectionnés',
            'Création d’entreprise, bureaux, résidence, assurance, santé privée et réseau professionnel',
            'Vision globale : la ville est belle, mais le montage doit être solide',
          ],
        },
        {
          heading: 'Le luxe à Istanbul : discrétion, accès et précision',
          body:
            `Le luxe à Istanbul n’est pas toujours visible. Il se cache dans un transfert sans attente, une suite préparée, une table réservée au bon endroit, un bateau privé au coucher du soleil, un dîner discret, un assistant qui sait quoi dire et quoi ne pas dire. Avec Bosphoras, l’expérience ne dépend pas de la chance. Elle se prépare : chauffeur, palaces, restaurants, Bosphore, shopping, événements, sécurité, santé, rendez-vous et demandes de dernière minute.`,
          bullets: [
            'Chauffeur privé, transferts VIP, hôtels cinq étoiles, suites, restaurants et réservations privées',
            'Bosphore, yacht, dîner d’affaires, shopping luxe, montres, bijoux, sacs rares et expériences sur mesure',
            'Coordination discrète pour profils publics, familles privées, investisseurs et dirigeants',
            'Un seul interlocuteur pour rendre Istanbul simple, élégante et maîtrisée',
          ],
        },
      ],
      faqs: [
        { question: 'Pourquoi choisir Istanbul pour vivre ou investir ?', answer: 'Istanbul réunit une position unique entre Europe, Asie et Moyen-Orient, un marché actif, des quartiers premium, des services privés, une scène culturelle forte et un art de vivre rare autour du Bosphore.' },
        { question: 'Quels sont les meilleurs quartiers d’Istanbul pour une famille internationale ?', answer: 'Cela dépend de l’école, du rythme de vie, du budget, des trajets et du besoin de calme. Nişantaşı, Etiler, Levent, Bebek, Zekeriyaköy et certains quartiers de la rive asiatique peuvent être étudiés selon le profil.' },
        { question: 'Istanbul est-elle adaptée aux investisseurs étrangers ?', answer: 'Oui, mais l’analyse doit être sérieuse. Il faut coordonner immobilier, fiscalité, banque, titre de propriété, usage du bien, stratégie de résidence et horizon long terme.' },
        { question: 'Bosphoras peut-il organiser un séjour de luxe à Istanbul ?', answer: 'Oui. Bosphoras peut coordonner chauffeur privé, hôtels, restaurants, yachts, shopping, rendez-vous d’affaires, expériences privées et logistique complète selon disponibilité et cadre validé.' },
        { question: 'Peut-on s’installer à Istanbul avec des enfants ?', answer: 'Oui, mais il faut préparer le projet : école, quartier, santé, transport, assurance, logement, langue, sécurité et organisation du quotidien.' },
        { question: 'Bosphoras vend-il des biens immobiliers à Istanbul ?', answer: 'Bosphoras n’est pas une agence immobilière classique. Nous coordonnons la recherche, les interlocuteurs, la due diligence et la cohérence du projet avec des professionnels sélectionnés.' },
      ],
      cta: { label: 'Faire de Istanbul ma base privée', href: '/diagnostic-prive', secondaryLabel: 'Découvrir la conciergerie de luxe', secondaryHref: '/services/conciergerie-luxe-turquie' },
      jsonLdType: 'Place',
      internalLinks: [
        { pageId: 'luxury-concierge', label: 'Conciergerie de luxe à Istanbul' },
        { pageId: 'property', label: 'Immobilier et relocation à Istanbul' },
        { pageId: 'transport', label: 'Transport VIP à Istanbul' },
        { pageId: 'relocate', label: 'Installation en Turquie' },
        { pageId: 'private-assessment', label: 'Diagnostic privé' },
      ],
    },
  ],
  en: [
    {
      id: 'istanbul',
      locale: 'en',
      slug: '/destinations/istanbul',
      title: 'Luxury Istanbul: live, invest and experience the Bosphorus | Bosphoras',
      h1: 'Istanbul: where Europe meets the Orient and every detail becomes an experience',
      metaDescription:
        'Premium Istanbul with Bosphoras: Bosphorus lifestyle, palaces, restaurants, luxury districts, property, business, concierge, private chauffeur, family relocation and Turkey investment.',
      shortIntro:
        `Istanbul is not only visited; it is felt. At sunrise, the Bosphorus turns silver, ferries cross yachts, minarets shape the skyline and the towers of Levent remind you that the city does not live only in its history: it moves, negotiates, builds and seduces. For an investor, family or international executive, Istanbul can be a base, a refuge, a market, a social stage and a lifestyle. Bosphoras turns this complex city into a clear, fluid and private experience.`,
      sections: [
        { heading: 'Two continents in one day', body: `A morning can begin in a palace on the Bosphorus, continue with a business meeting in Levent, a lunch in Nişantaşı, a discreet stop in Bebek and dinner facing the lights of the Asian side. Istanbul is not linear: it is controlled contrast, between empire and finance, tradition and modernity, family and network, private silence and global energy.`, bullets: ['Bosphorus, palaces, yalis, marinas, rooftops, historic mosques and business towers', 'European lifestyle, Oriental soul, commercial energy and Turkish hospitality', 'A city that connects business, family, property, private healthcare and lifestyle', 'The experience becomes stronger when every journey, meeting and reservation is coordinated'] },
        { heading: 'Istanbul neighborhoods sell different dreams', body: `Choosing Istanbul is not just choosing a city: it is choosing a rhythm. Nişantaşı speaks of boutiques, urban elegance and social life. Bebek and Arnavutköy tell the story of the Bosphorus, cafés, dinners and rare views. Etiler and Levent speak of business, schools, residences and fast access. Zekeriyaköy offers more air, villas and family life. The Asian side can bring a more residential, quieter and local balance. Bosphoras translates neighborhoods into practical decisions.`, bullets: ['Nişantaşı: fashion, restaurants, social life, premium apartments and urban elegance', 'Bebek, Arnavutköy, Emirgan: Bosphorus, rare views, character homes and lifestyle', 'Etiler, Levent, Maslak: business, modern residences, schools, offices and mobility', 'Zekeriyaköy and the Asian side: family, space, calm, villas, schools and smoother daily life'] },
        { heading: 'Living in Istanbul: family, school, healthcare, safety and daily rhythm', body: `The beauty of Istanbul is not enough to live there. A family must think about schools, commutes, pediatricians, private hospitals, drivers, neighborhoods, safety, language, home services and time management. The right Istanbul is not the same for a couple without children, a family with an international school, a traveling executive or an investor staying a few weeks per month. Bosphoras organizes the city around real life.`, bullets: ['Neighborhood selection based on school, healthcare, transport, safety and family habits', 'Private chauffeur, housing, insurance, doctors, services and relocation coordination', 'Practical reading of travel time, traffic, areas and seasonal constraints', 'A private approach that avoids improvisation and makes Istanbul comfortable'] },
        { heading: 'Investing in Istanbul: property, company, banking, network and long-term vision', body: `Istanbul attracts because it concentrates history, consumption, talent, capital, private services and a unique geographic position. But investing in the city requires fine reading: neighborhood, liquidity, title, tax, banking, real use, rental, management, succession, currency, timing and partners. Bosphoras does not push emotional purchases. We connect property, legal, tax, banking, company and family strategy so the decision makes sense.`, bullets: ['Property purchase, premium rental, pied-à-terre, family residence or patrimonial asset', 'Coordination with selected lawyers, tax advisors, accountants, banks and experts when required', 'Company formation, offices, residence, insurance, private healthcare and professional network', 'Global vision: the city is beautiful, but the structure must be solid'] },
        { heading: 'Luxury in Istanbul: discretion, access and precision', body: `Luxury in Istanbul is not always visible. It hides in a transfer without waiting, a prepared suite, the right table, a private boat at sunset, a discreet dinner and an assistant who knows what to say and what not to say. With Bosphoras, the experience does not depend on chance. It is prepared: chauffeur, palaces, restaurants, Bosphorus, shopping, events, security, healthcare, meetings and last-minute requests.`, bullets: ['Private chauffeur, VIP transfers, five-star hotels, suites, restaurants and private reservations', 'Bosphorus, yacht, business dinner, luxury shopping, watches, jewelry, rare bags and bespoke experiences', 'Discreet coordination for public profiles, private families, investors and executives', 'One point of contact to make Istanbul simple, elegant and controlled'] },
      ],
      faqs: [
        { question: 'Why choose Istanbul to live or invest?', answer: 'Istanbul combines a unique position between Europe, Asia and the Middle East, an active market, premium neighborhoods, private services, a strong cultural scene and a rare Bosphorus lifestyle.' },
        { question: 'What are the best Istanbul neighborhoods for an international family?', answer: 'It depends on schools, lifestyle, budget, commutes and the need for calm. Nişantaşı, Etiler, Levent, Bebek, Zekeriyaköy and selected Asian side neighborhoods can be considered by profile.' },
        { question: 'Is Istanbul suitable for foreign investors?', answer: 'Yes, but analysis must be serious. Property, tax, banking, title deed, use of the asset, residence strategy and long-term horizon should be coordinated.' },
        { question: 'Can Bosphoras organize a luxury stay in Istanbul?', answer: 'Yes. Bosphoras can coordinate private chauffeur, hotels, restaurants, yachts, shopping, business meetings, private experiences and full logistics depending on availability and validated scope.' },
        { question: 'Can a family relocate to Istanbul with children?', answer: 'Yes, but the project must be prepared: school, neighborhood, healthcare, transport, insurance, housing, language, safety and daily organization.' },
        { question: 'Does Bosphoras sell property in Istanbul?', answer: 'Bosphoras is not a classic real estate agency. We coordinate search, contacts, due diligence and project coherence with selected professionals.' },
      ],
      cta: { label: 'Make Istanbul my private base', href: '/private-assessment', secondaryLabel: 'Explore luxury concierge', secondaryHref: '/services/luxury-concierge-turkey' },
      jsonLdType: 'Place',
      internalLinks: [
        { pageId: 'luxury-concierge', label: 'Luxury concierge in Istanbul' },
        { pageId: 'property', label: 'Property and relocation in Istanbul' },
        { pageId: 'transport', label: 'VIP transport in Istanbul' },
        { pageId: 'relocate', label: 'Relocate to Turkey' },
        { pageId: 'private-assessment', label: 'Private assessment' },
      ],
    },
  ],
  ru: [
    {
      id: 'istanbul',
      locale: 'ru',
      slug: '/napravleniya/stambul',
      title: 'Luxury Istanbul: жить, инвестировать и чувствовать Босфор | Bosphoras',
      h1: 'Стамбул: город, где Европа смотрит на Восток, а каждая деталь становится опытом',
      metaDescription:
        'Премиальный Стамбул с Bosphoras: Босфор, palaces, restaurants, luxury districts, property, business, concierge, private chauffeur, family relocation и инвестиции.',
      shortIntro:
        `Стамбул не просто посещают — его чувствуют. На рассвете Босфор становится серебряным, паромы пересекаются с яхтами, минареты рисуют skyline, а башни Levent напоминают: город живёт не только историей. Он движется, договаривается, строит и притягивает. Для инвестора, семьи или международного руководителя Стамбул может быть базой, убежищем, рынком, социальной сценой и образом жизни. Bosphoras превращает сложный город в понятный, плавный и частный опыт.`,
      sections: [
        { heading: 'Два континента за один день', body: `Утро может начаться в palace на Босфоре, продолжиться деловой встречей в Levent, обедом в Nişantaşı, тихой остановкой в Bebek и ужином с видом на огни азиатской стороны. Стамбул не линейный город. Это управляемый контраст между империей и финансами, традицией и современностью, семьёй и сетью, private silence и global energy.`, bullets: ['Босфор, palaces, yalis, marinas, rooftops, исторические мечети и business towers', 'Европейский стиль жизни, восточная душа, коммерческая энергия и турецкое гостеприимство', 'Город, который соединяет business, family, property, private healthcare и lifestyle', 'Опыт становится сильнее, когда каждый маршрут, встреча и reservation координируются'] },
        { heading: 'Районы Стамбула продают разные мечты', body: `Выбрать Стамбул — значит выбрать ритм. Nişantaşı говорит о бутиках, городской элегантности и social life. Bebek и Arnavutköy рассказывают о Босфоре, cafés, dinners и редких видах. Etiler и Levent — о business, schools, residences и быстром доступе. Zekeriyaköy даёт больше воздуха, villas и family life. Азиатская сторона может дать более спокойный, residential и локальный баланс. Bosphoras переводит районы в конкретные решения.`, bullets: ['Nişantaşı: fashion, restaurants, social life, premium apartments и urban elegance', 'Bebek, Arnavutköy, Emirgan: Босфор, редкие виды, character homes и lifestyle', 'Etiler, Levent, Maslak: business, modern residences, schools, offices и mobility', 'Zekeriyaköy и азиатская сторона: family, space, calm, villas, schools и smoother daily life'] },
        { heading: 'Жить в Стамбуле: семья, школа, медицина, безопасность и ритм', body: `Красоты Стамбула недостаточно для жизни. Семья должна думать о школах, поездках, педиатре, частных больницах, водителе, районе, безопасности, языке, домашних сервисах и управлении временем. Правильный Стамбул для пары без детей, семьи с международной школой, traveling executive или инвестора, который приезжает на несколько недель в месяц, будет разным. Bosphoras организует город вокруг реальной жизни.`, bullets: ['Выбор района по школе, медицине, транспорту, безопасности и привычкам семьи', 'Private chauffeur, housing, insurance, doctors, services и relocation coordination', 'Практическая оценка travel time, traffic, районов и seasonal constraints', 'Private approach, который убирает импровизацию и делает Стамбул комфортной базой'] },
        { heading: 'Инвестировать в Стамбул: недвижимость, компания, банк, сеть и long-term vision', body: `Стамбул привлекает историей, consumption, talent, capital, private services и уникальной географией. Но инвестиции требуют точной оценки: район, liquidity, title, tax, banking, real use, rental, management, succession, currency, timing и partners. Bosphoras не толкает клиента к эмоциональной покупке. Мы связываем property, legal, tax, banking, company и family strategy, чтобы решение имело смысл.`, bullets: ['Property purchase, premium rental, pied-à-terre, family residence или patrimonial asset', 'Координация с выбранными lawyers, tax advisors, accountants, banks и experts', 'Company formation, offices, residence, insurance, private healthcare и professional network', 'Global vision: город красивый, но структура должна быть сильной'] },
        { heading: 'Luxury в Стамбуле: discretion, access и precision', body: `Luxury в Стамбуле не всегда видно. Он скрывается в трансфере без ожидания, подготовленной suite, правильном столе, private boat at sunset, discreet dinner и assistant, который знает, что говорить и что не говорить. С Bosphoras опыт не зависит от случайности. Он готовится: chauffeur, palaces, restaurants, Bosphorus, shopping, events, security, healthcare, meetings и last-minute requests.`, bullets: ['Private chauffeur, VIP transfers, five-star hotels, suites, restaurants и private reservations', 'Bosphorus, yacht, business dinner, luxury shopping, watches, jewelry, rare bags и bespoke experiences', 'Discreet coordination для public profiles, private families, investors и executives', 'Один контакт, чтобы сделать Стамбул simple, elegant и controlled'] },
      ],
      faqs: [
        { question: 'Почему выбрать Стамбул для жизни или инвестиций?', answer: 'Стамбул соединяет уникальную позицию между Европой, Азией и Ближним Востоком, активный рынок, premium districts, private services, сильную культурную сцену и редкий Bosphorus lifestyle.' },
        { question: 'Какие районы Стамбула подходят международной семье?', answer: 'Это зависит от школы, lifestyle, бюджета, поездок и потребности в спокойствии. Nişantaşı, Etiler, Levent, Bebek, Zekeriyaköy и некоторые районы азиатской стороны можно рассматривать по профилю.' },
        { question: 'Подходит ли Стамбул иностранным инвесторам?', answer: 'Да, но анализ должен быть серьёзным. Нужно координировать property, tax, banking, title deed, использование актива, стратегию резиденции и long-term horizon.' },
        { question: 'Может ли Bosphoras организовать luxury stay в Стамбуле?', answer: 'Да. Bosphoras может координировать private chauffeur, hotels, restaurants, yachts, shopping, business meetings, private experiences и full logistics по availability и validated scope.' },
        { question: 'Можно ли переехать в Стамбул с детьми?', answer: 'Да, но проект нужно подготовить: школа, район, healthcare, transport, insurance, housing, language, safety и daily organization.' },
        { question: 'Bosphoras продаёт недвижимость в Стамбуле?', answer: 'Bosphoras не является классическим агентством недвижимости. Мы координируем search, contacts, due diligence и coherence проекта с выбранными профессионалами.' },
      ],
      cta: { label: 'Сделать Стамбул моей private base', href: '/chastnaya-konsultatsiya', secondaryLabel: 'Luxury concierge в Турции', secondaryHref: '/uslugi/luxury-concierge-turkey' },
      jsonLdType: 'Place',
      internalLinks: [
        { pageId: 'luxury-concierge', label: 'Luxury concierge в Стамбуле' },
        { pageId: 'property', label: 'Недвижимость и relocation в Стамбуле' },
        { pageId: 'transport', label: 'VIP transport в Стамбуле' },
        { pageId: 'relocate', label: 'Переезд в Турцию' },
        { pageId: 'private-assessment', label: 'Частная консультация' },
      ],
    },
  ],
  ar: [
    {
      id: 'istanbul',
      locale: 'ar',
      slug: '/وجهات/إسطنبول',
      title: 'إسطنبول الفاخرة: العيش والاستثمار وتجربة البوسفور | Bosphoras',
      h1: 'إسطنبول: المدينة التي تلتقي فيها أوروبا بالشرق وتتحول كل تفصيلة إلى تجربة',
      metaDescription:
        'إسطنبول الراقية مع Bosphoras: البوسفور، palaces، مطاعم، أحياء فاخرة، عقارات، أعمال، كونسيرج، سائق خاص، انتقال عائلي واستثمار.',
      shortIntro:
        `إسطنبول لا تُزار فقط، بل تُحس. عند شروق الشمس يصبح البوسفور فضياً، تعبر العبارات بين اليخوت، ترسم المآذن skyline المدينة، وتذكّر أبراج Levent بأن إسطنبول لا تعيش فقط في تاريخها: إنها تتحرك، تفاوض، تبني وتُغري. بالنسبة للمستثمر أو العائلة أو المدير الدولي، يمكن أن تكون إسطنبول قاعدة، ملاذاً، سوقاً، مسرحاً اجتماعياً وأسلوب حياة. يحول Bosphoras هذه المدينة المعقدة إلى تجربة واضحة وهادئة وخاصة.`,
      sections: [
        { heading: 'قارتان في يوم واحد', body: `يمكن أن يبدأ الصباح في palace على البوسفور، يستمر باجتماع عمل في Levent، غداء في Nişantaşı، توقف هادئ في Bebek، ثم عشاء أمام أضواء الجانب الآسيوي. إسطنبول ليست مدينة خطية؛ إنها توازن بين الإمبراطورية والمال، التقليد والحداثة، العائلة والشبكة، الهدوء الخاص والطاقة العالمية.`, bullets: ['البوسفور، palaces، yalis، marinas، rooftops، مساجد تاريخية وأبراج أعمال', 'أسلوب حياة أوروبي، روح شرقية، طاقة تجارية وضيافة تركية', 'مدينة تربط الأعمال والعائلة والعقار والصحة الخاصة وlifestyle', 'تزداد التجربة قوة عندما يتم تنسيق كل انتقال وموعد وحجز'] },
        { heading: 'أحياء إسطنبول تبيع أحلاماً مختلفة', body: `اختيار إسطنبول ليس اختيار مدينة فقط، بل اختيار إيقاع. Nişantaşı تعني البوتيكات والأناقة الحضرية والحياة الاجتماعية. Bebek وArnavutköy يرويان قصة البوسفور والمقاهي والعشاء والإطلالات النادرة. Etiler وLevent يتحدثان عن business، schools، residences والوصول السريع. Zekeriyaköy يمنح هواءً أكثر وفيلات وحياة عائلية. الجانب الآسيوي قد يعطي توازناً سكنياً أكثر هدوءاً ومحلية.`, bullets: ['Nişantaşı: fashion، restaurants، social life، premium apartments وأناقة حضرية', 'Bebek، Arnavutköy، Emirgan: البوسفور، إطلالات نادرة، character homes وlifestyle', 'Etiler، Levent، Maslak: business، modern residences، schools، offices وmobility', 'Zekeriyaköy والجانب الآسيوي: family، space، calm، villas، schools وحياة يومية أكثر سلاسة'] },
        { heading: 'العيش في إسطنبول: العائلة، المدرسة، الصحة، الأمان والإيقاع اليومي', body: `جمال إسطنبول وحده لا يكفي للعيش فيها. يجب على العائلة التفكير في المدارس، التنقلات، طبيب الأطفال، المستشفيات الخاصة، السائق، الحي، الأمان، اللغة، خدمات المنزل وإدارة الوقت. إسطنبول المناسبة لزوجين بلا أطفال ليست نفسها لعائلة مع مدرسة دولية أو مدير يسافر كثيراً أو مستثمر يقيم بضعة أسابيع في الشهر. ينظم Bosphoras المدينة حول الحياة الحقيقية.`, bullets: ['اختيار الأحياء حسب المدرسة والصحة والنقل والأمان وعادات العائلة', 'تنسيق سائق خاص، سكن، تأمين، أطباء، خدمات وانتقال', 'قراءة عملية للوقت، traffic، المناطق والقيود الموسمية', 'مقاربة خاصة تمنع الارتجال وتجعل إسطنبول قاعدة مريحة'] },
        { heading: 'الاستثمار في إسطنبول: العقار، الشركة، البنك، الشبكة والرؤية الطويلة', body: `تجذب إسطنبول لأنها تجمع التاريخ والاستهلاك والمواهب ورأس المال والخدمات الخاصة وموقعاً جغرافياً فريداً. لكن الاستثمار يحتاج إلى قراءة دقيقة: الحي، السيولة، سند الملكية، الضرائب، البنك، الاستخدام الحقيقي، الإيجار، الإدارة، الميراث، العملة، timing والشركاء. Bosphoras لا يدفع نحو شراء عاطفي؛ بل يربط العقار والقانون والضرائب والبنك والشركة واستراتيجية العائلة.`, bullets: ['شراء عقار، إيجار premium، pied-à-terre، سكن عائلي أو أصل patrimonial', 'تنسيق مع محامين ومستشارين ضريبيين ومحاسبين وبنوك وخبراء مختارين', 'تأسيس شركة، مكاتب، إقامة، تأمين، صحة خاصة وشبكة مهنية', 'رؤية شاملة: المدينة جميلة، لكن الهيكل يجب أن يكون قوياً'] },
        { heading: 'الفخامة في إسطنبول: خصوصية، وصول ودقة', body: `الفخامة في إسطنبول ليست دائماً ظاهرة. تختبئ في transfer بلا انتظار، suite جاهزة، طاولة مناسبة، قارب خاص عند الغروب، عشاء هادئ ومساعد يعرف ما يجب قوله وما لا يجب قوله. مع Bosphoras لا تعتمد التجربة على الحظ. يتم تحضيرها: chauffeur، palaces، restaurants، Bosphorus، shopping، events، security، healthcare، meetings وlast-minute requests.`, bullets: ['سائق خاص، VIP transfers، فنادق خمس نجوم، suites، مطاعم وحجوزات خاصة', 'Bosphorus، yacht، business dinner، luxury shopping، watches، jewelry، rare bags وتجارب bespoke', 'تنسيق هادئ للشخصيات العامة، العائلات الخاصة، المستثمرين والمديرين', 'جهة واحدة لجعل إسطنبول simple، elegant وcontrolled'] },
      ],
      faqs: [
        { question: 'لماذا اختيار إسطنبول للعيش أو الاستثمار؟', answer: 'إسطنبول تجمع موقعاً فريداً بين أوروبا وآسيا والشرق الأوسط، سوقاً نشطاً، أحياء premium، خدمات خاصة، مشهداً ثقافياً قوياً وBosphorus lifestyle نادراً.' },
        { question: 'ما أفضل أحياء إسطنبول للعائلة الدولية؟', answer: 'يعتمد ذلك على المدرسة، lifestyle، الميزانية، التنقل والحاجة إلى الهدوء. يمكن دراسة Nişantaşı، Etiler، Levent، Bebek، Zekeriyaköy وبعض أحياء الجانب الآسيوي حسب الملف.' },
        { question: 'هل إسطنبول مناسبة للمستثمرين الأجانب؟', answer: 'نعم، لكن التحليل يجب أن يكون جدياً. يجب تنسيق العقار والضرائب والبنك وسند الملكية واستخدام الأصل واستراتيجية الإقامة والرؤية الطويلة.' },
        { question: 'هل يمكن لـ Bosphoras تنظيم إقامة فاخرة في إسطنبول؟', answer: 'نعم. يمكن لـ Bosphoras تنسيق سائق خاص، فنادق، مطاعم، يخوت، تسوق، اجتماعات عمل، تجارب خاصة ولوجستيك كامل حسب التوفر والإطار المعتمد.' },
        { question: 'هل يمكن الانتقال إلى إسطنبول مع الأطفال؟', answer: 'نعم، لكن يجب تحضير المشروع: المدرسة، الحي، الصحة، النقل، التأمين، السكن، اللغة، الأمان والتنظيم اليومي.' },
        { question: 'هل يبيع Bosphoras العقارات في إسطنبول؟', answer: 'Bosphoras ليس وكالة عقارية تقليدية. نحن ننسق البحث والجهات والفحص القانوني ومنطق المشروع مع مهنيين مختارين.' },
      ],
      cta: { label: 'اجعل إسطنبول قاعدتي الخاصة', href: '/تقييم-خاص', secondaryLabel: 'اكتشف الكونسيرج الفاخر', secondaryHref: '/خدمات/luxury-concierge-turkey' },
      jsonLdType: 'Place',
      internalLinks: [
        { pageId: 'luxury-concierge', label: 'كونسيرج فاخر في إسطنبول' },
        { pageId: 'property', label: 'العقار والانتقال في إسطنبول' },
        { pageId: 'transport', label: 'نقل VIP في إسطنبول' },
        { pageId: 'relocate', label: 'الانتقال إلى تركيا' },
        { pageId: 'private-assessment', label: 'تقييم خاص' },
      ],
    },
  ],
};
