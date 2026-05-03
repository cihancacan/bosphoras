import type { Locale } from '@/lib/i18n';
import type { MainPageContent } from './types';

const p = (page: MainPageContent): MainPageContent => page;

export const luxuryConciergeOverrides: Record<Locale, MainPageContent[]> = {
  fr: [
    p({
      id: 'luxury-concierge',
      locale: 'fr',
      slug: '/services/conciergerie-luxe-turquie',
      title: 'Conciergerie de Luxe en Turquie | Bosphoras',
      h1: 'Conciergerie de luxe en Turquie',
      metaDescription: 'Bosphoras coordonne chauffeurs privés, transferts VIP, hôtels, palaces, villas, restaurants, yachts, jets privés, hélicoptères, événements, soirées privées et demandes confidentielles en Turquie.',
      shortIntro: 'Bosphoras coordonne les demandes privées qui dépassent le simple transport : mobilité VIP, hospitality, villas, meilleures tables, événements, yachts, aviation privée, shopping luxe et demandes confidentielles à Istanbul, Bodrum et Antalya.',
      sections: [
        { heading: 'Une conciergerie privée, pas un simple service de transport', body: 'Le transport VIP fait partie de la conciergerie de luxe Bosphoras, mais il n’est qu’un élément du parcours. L’objectif est de coordonner tout ce qui touche à la mobilité, au séjour, aux accès privés et aux demandes sensibles.', bullets: ['Chauffeurs privés et transferts VIP', 'Berlines, vans et limousines', 'Coordination business, famille ou séjour privé'] },
        { heading: 'Hospitality, séjours et meilleures adresses', body: 'Bosphoras peut coordonner hôtels, palaces, villas privées, restaurants et meilleures tables selon le profil, le calendrier et le niveau de confidentialité attendu.', bullets: ['Hôtels et palaces', 'Villas privées', 'Restaurants et meilleures tables', 'Réservations prioritaires lorsque cela est possible'] },
        { heading: 'Yachts, aviation privée et événements', body: 'Selon disponibilité, réglementation et validation du dossier, Bosphoras peut coordonner yachts, jets privés, hélicoptères, événements, soirées privées et expériences sur mesure.', bullets: ['Yachts et marinas', 'Jets privés et hélicoptères', 'Événements privés', 'Soirées discrètes'] },
        { heading: 'Shopping luxe et demandes confidentielles', body: 'Certaines demandes concernent des achats sensibles ou rares. Bosphoras peut filtrer et orienter les demandes liées au shopping luxe, montres, bijoux, sacs rares et achats confidentiels vers des interlocuteurs sélectionnés.', bullets: ['Montres rares', 'Bijoux', 'Sacs de luxe', 'Personal shopping', 'Demandes confidentielles'] },
        { heading: 'Cadre et limites', body: 'Bosphoras coordonne et filtre les demandes. Les prix, disponibilités, autorisations, contrats, assurances et conditions finales sont confirmés directement avec les prestataires concernés. Les accès privés ne sont jamais garantis à l’avance.' },
      ],
      faqs: [
        { question: 'Le transport VIP est-il inclus dans la conciergerie de luxe ?', answer: 'Oui. Chauffeurs privés, transferts VIP, berlines, vans et limousines font partie de la conciergerie de luxe Bosphoras.' },
        { question: 'Bosphoras peut-il organiser des yachts ou jets privés ?', answer: 'Bosphoras peut coordonner ces demandes avec des prestataires sélectionnés, sous réserve de disponibilité, validation du dossier et conditions contractuelles.' },
        { question: 'Les réservations dans les restaurants et clubs sont-elles garanties ?', answer: 'Non. Bosphoras peut coordonner et prioriser les demandes lorsque cela est possible, mais les accès dépendent toujours des disponibilités et règles des établissements.' },
      ],
      cta: { label: 'Demander une conciergerie privée', href: '/diagnostic-prive', secondaryLabel: 'Découvrir le cercle privé', secondaryHref: '/cercle-prive' },
      jsonLdType: 'Service',
      internalLinks: [{ pageId: 'private-assessment', label: 'Diagnostic privé' }, { pageId: 'private-club', label: 'Cercle privé' }, { pageId: 'istanbul', label: 'Istanbul' }],
    }),
  ],
  en: [
    p({
      id: 'luxury-concierge',
      locale: 'en',
      slug: '/services/luxury-concierge-turkey',
      title: 'Luxury Concierge in Turkey | Bosphoras',
      h1: 'Luxury concierge in Turkey',
      metaDescription: 'Bosphoras coordinates private chauffeurs, VIP transfers, hotels, palaces, villas, restaurants, yachts, private jets, helicopters, events, private evenings and confidential requests in Turkey.',
      shortIntro: 'Bosphoras coordinates private requests that go beyond transport: VIP mobility, hospitality, villas, best tables, events, yachts, private aviation, luxury shopping and confidential requests in Istanbul, Bodrum and Antalya.',
      sections: [
        { heading: 'A private concierge, not just transport', body: 'VIP transport is part of the Bosphoras luxury concierge, but it is only one part of the journey. The goal is to coordinate mobility, stay, private access and sensitive requests.', bullets: ['Private chauffeurs and VIP transfers', 'Sedans, vans and limousines', 'Business, family or private-stay coordination'] },
        { heading: 'Hospitality, stays and best addresses', body: 'Bosphoras may coordinate hotels, palaces, private villas, restaurants and best tables according to profile, timeline and confidentiality level.', bullets: ['Hotels and palaces', 'Private villas', 'Restaurants and best tables', 'Priority reservations where possible'] },
        { heading: 'Yachts, private aviation and events', body: 'Subject to availability, regulations and file validation, Bosphoras may coordinate yachts, private jets, helicopters, private events and tailor-made experiences.', bullets: ['Yachts and marinas', 'Private jets and helicopters', 'Private events', 'Discreet evenings'] },
        { heading: 'Luxury shopping and confidential requests', body: 'Some requests concern sensitive or rare purchases. Bosphoras may filter and direct requests involving luxury shopping, watches, jewellery, rare handbags and confidential purchases to selected contacts.', bullets: ['Rare watches', 'Jewellery', 'Luxury handbags', 'Personal shopping', 'Confidential requests'] },
        { heading: 'Framework and limits', body: 'Bosphoras coordinates and filters requests. Prices, availability, authorisations, contracts, insurance and final conditions are confirmed directly with the relevant providers. Private access is never guaranteed in advance.' },
      ],
      faqs: [
        { question: 'Is VIP transport included in luxury concierge?', answer: 'Yes. Private chauffeurs, VIP transfers, sedans, vans and limousines are part of Bosphoras luxury concierge.' },
        { question: 'Can Bosphoras organise yachts or private jets?', answer: 'Bosphoras may coordinate these requests with selected providers, subject to availability, file validation and contractual conditions.' },
        { question: 'Are restaurant and club reservations guaranteed?', answer: 'No. Bosphoras may coordinate and prioritise requests where possible, but access always depends on availability and venue rules.' },
      ],
      cta: { label: 'Request private concierge', href: '/private-assessment', secondaryLabel: 'Explore Private Access', secondaryHref: '/private-access-club' },
      jsonLdType: 'Service',
      internalLinks: [{ pageId: 'private-assessment', label: 'Private Assessment' }, { pageId: 'private-club', label: 'Private Access Club' }, { pageId: 'istanbul', label: 'Istanbul' }],
    }),
  ],
  ru: [
    p({
      id: 'luxury-concierge',
      locale: 'ru',
      slug: '/uslugi/luxury-concierge-turkey',
      title: 'Luxury Concierge в Турции | Bosphoras',
      h1: 'Luxury concierge в Турции',
      metaDescription: 'Bosphoras координирует частных водителей, VIP-трансферы, отели, palaces, виллы, рестораны, яхты, частные джеты, вертолёты, мероприятия, частные вечера и конфиденциальные запросы в Турции.',
      shortIntro: 'Bosphoras координирует частные запросы, которые выходят за рамки транспорта: VIP mobility, hospitality, виллы, лучшие рестораны, мероприятия, яхты, private aviation, luxury shopping и конфиденциальные запросы в Стамбуле, Бодруме и Анталье.',
      sections: [
        { heading: 'Частная concierge-служба, а не просто транспорт', body: 'VIP transport входит в luxury concierge Bosphoras, но это только часть маршрута. Цель — координировать mobility, séjour, private access и чувствительные запросы.', bullets: ['Частные водители и VIP-трансферы', 'Берлины, vans и лимузины', 'Координация для бизнеса, семьи или частного пребывания'] },
        { heading: 'Hospitality, проживание и лучшие адреса', body: 'Bosphoras может координировать отели, palaces, частные виллы, рестораны и лучшие столы согласно профилю, срокам и уровню конфиденциальности.', bullets: ['Отели и palaces', 'Частные виллы', 'Рестораны и лучшие столы', 'Приоритетные бронирования, когда это возможно'] },
        { heading: 'Яхты, private aviation и мероприятия', body: 'С учётом доступности, правил и проверки дела Bosphoras может координировать яхты, private jets, вертолёты, частные мероприятия и индивидуальные experiences.', bullets: ['Яхты и marinas', 'Private jets и вертолёты', 'Частные мероприятия', 'Дискретные вечера'] },
        { heading: 'Luxury shopping и конфиденциальные запросы', body: 'Некоторые запросы касаются редких или чувствительных покупок. Bosphoras может фильтровать и направлять запросы по luxury shopping, часам, украшениям, редким сумкам и конфиденциальным покупкам к выбранным контактам.', bullets: ['Редкие часы', 'Украшения', 'Luxury handbags', 'Personal shopping', 'Конфиденциальные запросы'] },
        { heading: 'Рамки и ограничения', body: 'Bosphoras координирует и фильтрует запросы. Цены, доступность, разрешения, контракты, страхование и финальные условия подтверждаются напрямую с соответствующими поставщиками. Private access не гарантируется заранее.' },
      ],
      faqs: [
        { question: 'VIP transport входит в luxury concierge?', answer: 'Да. Частные водители, VIP-трансферы, berlines, vans и лимузины входят в luxury concierge Bosphoras.' },
        { question: 'Bosphoras может организовать яхты или private jets?', answer: 'Bosphoras может координировать эти запросы с выбранными поставщиками, при наличии доступности, проверки дела и договорных условий.' },
        { question: 'Бронирования ресторанов и клубов гарантированы?', answer: 'Нет. Bosphoras может координировать и приоритизировать запросы, когда это возможно, но доступ всегда зависит от наличия и правил заведений.' },
      ],
      cta: { label: 'Запросить private concierge', href: '/chastnaya-konsultatsiya', secondaryLabel: 'Изучить Private Access', secondaryHref: '/chastnyy-klub' },
      jsonLdType: 'Service',
      internalLinks: [{ pageId: 'private-assessment', label: 'Частная консультация' }, { pageId: 'private-club', label: 'Private Access Club' }, { pageId: 'istanbul', label: 'Стамбул' }],
    }),
  ],
  ar: [
    p({
      id: 'luxury-concierge',
      locale: 'ar',
      slug: '/خدمات/luxury-concierge-turkey',
      title: 'كونسيرج فاخر في تركيا | Bosphoras',
      h1: 'كونسيرج فاخر في تركيا',
      metaDescription: 'ينسق Bosphoras السائقين الخاصين، النقل VIP، الفنادق، القصور، الفيلات، المطاعم، اليخوت، الطائرات الخاصة، المروحيات، الفعاليات، السهرات الخاصة والطلبات السرية في تركيا.',
      shortIntro: 'ينسق Bosphoras الطلبات الخاصة التي تتجاوز النقل: تنقل VIP، hospitality، فيلات، أفضل الطاولات، فعاليات، يخوت، طيران خاص، shopping luxe وطلبات سرية في إسطنبول وبودروم وأنطاليا.',
      sections: [
        { heading: 'كونسيرج خاص وليس مجرد نقل', body: 'النقل VIP جزء من كونسيرج Bosphoras الفاخر، لكنه عنصر واحد فقط من التجربة. الهدف هو تنسيق التنقل والإقامة والوصول الخاص والطلبات الحساسة.', bullets: ['سائقون خاصون ونقل VIP', 'سيارات سيدان، vans وليموزين', 'تنسيق للأعمال أو العائلة أو الإقامة الخاصة'] },
        { heading: 'Hospitality، الإقامة وأفضل العناوين', body: 'يمكن لـ Bosphoras تنسيق الفنادق، palaces، الفيلات الخاصة، المطاعم وأفضل الطاولات حسب الملف والجدول الزمني ومستوى السرية.', bullets: ['فنادق وpalaces', 'فيلات خاصة', 'مطاعم وأفضل الطاولات', 'حجوزات أولوية عندما يكون ذلك ممكناً'] },
        { heading: 'يخوت، طيران خاص وفعاليات', body: 'حسب التوفر والأنظمة والتحقق من الملف، يمكن لـ Bosphoras تنسيق اليخوت، الطائرات الخاصة، المروحيات، الفعاليات الخاصة والتجارب المصممة حسب الطلب.', bullets: ['يخوت ومارينا', 'طائرات خاصة ومروحيات', 'فعاليات خاصة', 'سهرات سرية'] },
        { heading: 'Shopping luxe وطلبات سرية', body: 'بعض الطلبات تتعلق بمشتريات حساسة أو نادرة. يمكن لـ Bosphoras تصفية وتوجيه طلبات shopping luxe، الساعات، المجوهرات، الحقائب النادرة والمشتريات السرية إلى جهات مختارة.', bullets: ['ساعات نادرة', 'مجوهرات', 'حقائب فاخرة', 'Personal shopping', 'طلبات سرية'] },
        { heading: 'الإطار والحدود', body: 'ينسق Bosphoras الطلبات ويقوم بتصفيتها. الأسعار والتوفر والتراخيص والعقود والتأمين والشروط النهائية يتم تأكيدها مباشرة مع المزودين المعنيين. لا يمكن ضمان الوصول الخاص مسبقاً.' },
      ],
      faqs: [
        { question: 'هل النقل VIP ضمن الكونسيرج الفاخر؟', answer: 'نعم. السائقون الخاصون، النقل VIP، سيارات السيدان، vans والليموزين جزء من كونسيرج Bosphoras الفاخر.' },
        { question: 'هل يمكن لـ Bosphoras تنظيم يخوت أو طائرات خاصة؟', answer: 'يمكن لـ Bosphoras تنسيق هذه الطلبات مع مزودين مختارين، حسب التوفر والتحقق من الملف والشروط التعاقدية.' },
        { question: 'هل حجوزات المطاعم والنوادي مضمونة؟', answer: 'لا. يمكن لـ Bosphoras التنسيق وإعطاء الأولوية عندما يكون ذلك ممكناً، لكن الوصول يعتمد دائماً على التوفر وقواعد الأماكن.' },
      ],
      cta: { label: 'طلب كونسيرج خاص', href: '/تقييم-خاص', secondaryLabel: 'استكشاف Private Access', secondaryHref: '/النادي-الخاص' },
      jsonLdType: 'Service',
      internalLinks: [{ pageId: 'private-assessment', label: 'تقييم خاص' }, { pageId: 'private-club', label: 'النادي الخاص' }, { pageId: 'istanbul', label: 'إسطنبول' }],
    }),
  ],
};
