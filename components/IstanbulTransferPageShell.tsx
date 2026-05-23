import type { Metadata } from 'next';
import { StructuredData } from '@/components/StructuredData';
import { TransferBookingClient } from '@/components/TransferBookingClient';
import { TransferQuoteEnhancer } from '@/components/TransferQuoteEnhancer';
import { TransferCheckoutEnhancer } from '@/components/TransferCheckoutEnhancer';
import { TransferComplianceNotice } from '@/components/TransferComplianceNotice';
import { TransferOnlyHeader } from '@/components/TransferOnlyHeader';
import { TransferOnlyFooter } from '@/components/TransferOnlyFooter';
import { TransferSeoContent } from '@/components/TransferSeoContent';
import { breadcrumbSchema, faqSchema, organizationSchema, serviceSchema, websiteSchema } from '@/lib/seo';
import { siteUrl } from '@/lib/routes';

type TransferLocale = 'fr' | 'en' | 'ru' | 'ar' | 'zh' | 'de' | 'es' | 'it' | 'pt';

const paths: Record<TransferLocale, string> = {
  fr: '/transferts-istanbul',
  en: '/en/istanbul-airport-transfer',
  ru: '/ru/transfer-aeroport-stambul',
  ar: '/ar/istanbul-airport-transfer',
  zh: '/zh/istanbul-airport-transfer',
  de: '/de/flughafentransfer-istanbul',
  es: '/es/traslado-aeropuerto-estambul',
  it: '/it/transfer-aeroporto-istanbul',
  pt: '/pt/transfer-aeroporto-istambul',
};

const extendedAlternates: Record<string, string> = {
  fr: `${siteUrl}${paths.fr}`,
  en: `${siteUrl}${paths.en}`,
  ru: `${siteUrl}${paths.ru}`,
  ar: `${siteUrl}${paths.ar}`,
  zh: `${siteUrl}${paths.zh}`,
  de: `${siteUrl}${paths.de}`,
  es: `${siteUrl}${paths.es}`,
  it: `${siteUrl}${paths.it}`,
  pt: `${siteUrl}${paths.pt}`,
  'x-default': `${siteUrl}${paths.en}`,
};

const titles: Record<TransferLocale, string> = {
  fr: 'Transfert aéroport Istanbul IST & SAW | Chauffeur privé Istanbul',
  en: 'Istanbul Airport Transfer IST & SAW | Private Chauffeur Istanbul',
  ru: 'Трансфер аэропорт Стамбул IST и SAW | Личный водитель Стамбул',
  ar: 'نقل مطار إسطنبول IST و SAW | سائق خاص إسطنبول',
  zh: '伊斯坦布尔机场接送 IST & SAW | 伊斯坦布尔私人司机',
  de: 'Flughafentransfer Istanbul IST & SAW | Privater Chauffeur Istanbul',
  es: 'Traslado aeropuerto Estambul IST & SAW | Chófer privado Estambul',
  it: 'Transfer aeroporto Istanbul IST & SAW | Autista privato Istanbul',
  pt: 'Transfer aeroporto Istambul IST & SAW | Motorista privado Istambul',
};

const descriptions: Record<TransferLocale, string> = {
  fr: 'Réservez un transfert aéroport Istanbul IST ou Sabiha Gökçen SAW avec chauffeur privé, suivi de vol, accueil aéroport, Mercedes Classe E, Classe S, Viano VIP ou Sprinter VIP. Paiement carte et confirmation immédiate.',
  en: 'Book an Istanbul Airport IST or Sabiha Gökçen SAW transfer with private chauffeur, flight tracking, airport meet and greet, Mercedes E-Class, S-Class, Viano VIP or Sprinter VIP. Card payment and instant confirmation.',
  ru: 'Забронируйте трансфер из аэропорта Стамбула IST или SAW с личным водителем, отслеживанием рейса, встречей в аэропорту, автомобилями Mercedes и оплатой картой.',
  ar: 'احجز نقل مطار إسطنبول IST أو صبيحة SAW مع سائق خاص، تتبع الرحلة، استقبال في المطار، سيارات Mercedes ودفع آمن بالبطاقة.',
  zh: '预订伊斯坦布尔 IST 或 SAW 机场接送服务，包含私人司机、航班跟踪、机场迎接、Mercedes 车型、安全刷卡支付和即时确认。',
  de: 'Buchen Sie einen Flughafentransfer Istanbul IST oder Sabiha Gökçen SAW mit privatem Chauffeur, Flugverfolgung, Meet & Greet am Flughafen, Mercedes-Fahrzeugen und Kartenzahlung.',
  es: 'Reserve un traslado del aeropuerto de Estambul IST o Sabiha Gökçen SAW con chófer privado, seguimiento de vuelo, recepción en aeropuerto, vehículos Mercedes y pago con tarjeta.',
  it: 'Prenota un transfer dall’aeroporto di Istanbul IST o Sabiha Gökçen SAW con autista privato, monitoraggio volo, accoglienza in aeroporto, veicoli Mercedes e pagamento con carta.',
  pt: 'Reserve um transfer do aeroporto de Istambul IST ou Sabiha Gökçen SAW com motorista privado, monitorização do voo, receção no aeroporto, veículos Mercedes e pagamento com cartão.',
};

const faqTitle: Record<TransferLocale, string> = {
  fr: 'FAQ transfert aéroport Istanbul',
  en: 'Istanbul airport transfer FAQ',
  ru: 'FAQ трансфер аэропорт Стамбул',
  ar: 'أسئلة شائعة حول نقل مطار إسطنبول',
  zh: '伊斯坦布尔机场接送常见问题',
  de: 'FAQ Flughafentransfer Istanbul',
  es: 'FAQ traslado aeropuerto Estambul',
  it: 'FAQ transfer aeroporto Istanbul',
  pt: 'FAQ transfer aeroporto Istambul',
};

const faqsByLocale: Record<TransferLocale, Array<{ question: string; answer: string }>> = {
  fr: [
    { question: 'Puis-je réserver un transfert aéroport privé en ligne ?', answer: 'Oui. Choisissez votre trajet, votre véhicule et vos options, puis confirmez par paiement carte sécurisé.' },
    { question: 'Combien de temps à l’avance faut-il réserver ?', answer: 'Les réservations sont disponibles au minimum 2 heures avant la prise en charge, selon disponibilité opérationnelle.' },
    { question: 'Quels aéroports sont couverts à Istanbul ?', answer: 'Le service couvre Istanbul Airport IST et Sabiha Gökçen Airport SAW pour les transferts privés, hôtels et chauffeurs.' },
    { question: 'Peut-on réserver un chauffeur privé à l’heure ?', answer: 'Oui. La réservation à l’heure est disponible pour rendez-vous d’affaires, shopping, événements, restaurants, visites privées ou déplacements personnels.' },
    { question: 'Quels véhicules sont disponibles ?', answer: 'Mercedes Classe E, Mercedes Classe S, Mercedes Viano VIP et Mercedes Sprinter VIP.' },
    { question: 'Comment le prix est-il calculé ?', answer: 'Les transferts ont un minimum d’une heure puis chaque demi-heure commencée. Pour les réservations à l’heure, les heures suivantes après les deux premières bénéficient de 20% de remise.' },
    { question: 'Le suivi de vol est-il inclus ?', answer: 'Oui. Lorsque le numéro de vol est renseigné, le service peut inclure l’accueil aéroport et le suivi du vol.' },
    { question: 'Peut-on payer par carte ?', answer: 'Oui. La réservation est confirmée en ligne par paiement carte sécurisé.' },
  ],
  en: [
    { question: 'Can I book a private airport transfer online?', answer: 'Yes. Choose your route, vehicle and options, then confirm by secure card payment.' },
    { question: 'How far in advance should I book?', answer: 'Bookings are available at least 2 hours before pickup, subject to operational availability.' },
    { question: 'Which airports are covered in Istanbul?', answer: 'The service covers Istanbul Airport IST and Sabiha Gökçen Airport SAW for private transfers, hotel transfers and chauffeur services.' },
    { question: 'Can I book a private chauffeur by the hour?', answer: 'Yes. Hourly chauffeur booking is available for business meetings, shopping, events, restaurants, private tours or personal appointments.' },
    { question: 'Which vehicles are available?', answer: 'Mercedes E-Class, Mercedes S-Class, Mercedes Viano VIP and Mercedes Sprinter VIP.' },
    { question: 'How is the price calculated?', answer: 'Transfers use a one-hour minimum, then each started 30-minute period. Hourly bookings get 20% off after the first two hours.' },
    { question: 'Is flight tracking included?', answer: 'Yes. When a flight number is provided, airport greeting and flight tracking can be included.' },
    { question: 'Can I pay by card?', answer: 'Yes. The reservation is confirmed online by secure card payment.' },
  ],
  ru: [
    { question: 'Можно ли забронировать трансфер онлайн?', answer: 'Да. Выберите маршрут, автомобиль и опции, затем подтвердите бронирование безопасной оплатой картой.' },
    { question: 'За сколько времени нужно бронировать?', answer: 'Бронирование доступно минимум за 2 часа до подачи автомобиля при наличии операционной возможности.' },
    { question: 'Какие аэропорты покрываются в Стамбуле?', answer: 'Сервис покрывает Istanbul Airport IST и Sabiha Gökçen Airport SAW для частных трансферов, отелей и услуг водителя.' },
    { question: 'Можно ли заказать личного водителя по часам?', answer: 'Да. Почасовой водитель доступен для деловых встреч, шопинга, мероприятий, ресторанов, частных визитов и личных поездок.' },
    { question: 'Какие автомобили доступны?', answer: 'Mercedes E-Class, Mercedes S-Class, Mercedes Viano VIP и Mercedes Sprinter VIP.' },
    { question: 'Как рассчитывается цена?', answer: 'Минимум для трансфера — один час, далее каждые начатые 30 минут. При почасовой аренде после первых двух часов действует скидка 20%.' },
    { question: 'Включено ли отслеживание рейса?', answer: 'Да. Если указан номер рейса, можно организовать встречу в аэропорту и отслеживание рейса.' },
    { question: 'Можно ли оплатить картой?', answer: 'Да. Бронирование подтверждается онлайн безопасной оплатой картой.' },
  ],
  ar: [
    { question: 'هل يمكنني حجز نقل خاص من المطار عبر الإنترنت؟', answer: 'نعم. اختر المسار والسيارة والخيارات ثم قم بالتأكيد عبر دفع آمن بالبطاقة.' },
    { question: 'كم يجب أن أحجز مسبقاً؟', answer: 'الحجز متاح قبل ساعتين على الأقل من موعد الاستقبال، حسب التوفر التشغيلي.' },
    { question: 'ما المطارات المشمولة في إسطنبول؟', answer: 'تشمل الخدمة مطار إسطنبول IST ومطار صبيحة كوكجن SAW للنقل الخاص وخدمات الفنادق والسائقين.' },
    { question: 'هل يمكن حجز سائق خاص بالساعة؟', answer: 'نعم. الحجز بالساعة متاح للاجتماعات والتسوق والفعاليات والمطاعم والزيارات الخاصة.' },
    { question: 'ما السيارات المتاحة؟', answer: 'Mercedes E-Class و Mercedes S-Class و Mercedes Viano VIP و Mercedes Sprinter VIP.' },
    { question: 'كيف يتم حساب السعر؟', answer: 'الحد الأدنى للتحويل ساعة واحدة ثم كل 30 دقيقة تبدأ. في الحجز بالساعة، بعد أول ساعتين يوجد خصم 20%.' },
    { question: 'هل تتبع الرحلة مشمول؟', answer: 'نعم. عند إدخال رقم الرحلة، يمكن تنظيم الاستقبال في المطار وتتبع الرحلة.' },
    { question: 'هل يمكن الدفع بالبطاقة؟', answer: 'نعم. يتم تأكيد الحجز عبر دفع آمن بالبطاقة عبر الإنترنت.' },
  ],
  zh: [
    { question: '可以在线预订私人机场接送吗？', answer: '可以。选择路线、车辆和选项后，通过安全刷卡付款确认预订。' },
    { question: '需要提前多久预订？', answer: '根据运营情况，接送至少需提前2小时预订。' },
    { question: '伊斯坦布尔覆盖哪些机场？', answer: '服务覆盖 Istanbul Airport IST 和 Sabiha Gökçen Airport SAW，适用于私人接送、酒店接送和司机服务。' },
    { question: '可以按小时预订私人司机吗？', answer: '可以。按小时司机服务适用于商务会议、购物、活动、餐厅、私人游览或个人行程。' },
    { question: '有哪些车型？', answer: 'Mercedes E-Class、Mercedes S-Class、Mercedes Viano VIP 和 Mercedes Sprinter VIP。' },
    { question: '价格如何计算？', answer: '接送最低按1小时计费，之后按每开始30分钟计费。按小时预订前2小时后享20%优惠。' },
    { question: '包含航班跟踪吗？', answer: '是的。提供航班号后，可安排机场迎接和航班跟踪。' },
    { question: '可以刷卡付款吗？', answer: '可以。预订通过在线安全刷卡付款确认。' },
  ],
  de: [
    { question: 'Kann ich einen privaten Flughafentransfer online buchen?', answer: 'Ja. Wählen Sie Route, Fahrzeug und Optionen und bestätigen Sie per sicherer Kartenzahlung.' },
    { question: 'Wie früh muss ich buchen?', answer: 'Buchungen sind mindestens 2 Stunden vor Abholung möglich, vorbehaltlich operativer Verfügbarkeit.' },
    { question: 'Welche Flughäfen werden in Istanbul abgedeckt?', answer: 'Der Service deckt Istanbul Airport IST und Sabiha Gökçen Airport SAW für private Transfers, Hoteltransfers und Chauffeurdienste ab.' },
    { question: 'Kann ich einen privaten Chauffeur stundenweise buchen?', answer: 'Ja. Die stundenweise Buchung ist für Meetings, Shopping, Events, Restaurants, private Besuche oder persönliche Termine verfügbar.' },
    { question: 'Welche Fahrzeuge sind verfügbar?', answer: 'Mercedes E-Class, Mercedes S-Class, Mercedes Viano VIP und Mercedes Sprinter VIP.' },
    { question: 'Wie wird der Preis berechnet?', answer: 'Transfers haben ein Minimum von einer Stunde und danach jede angefangene halbe Stunde. Bei stundenweiser Buchung gibt es nach den ersten zwei Stunden 20% Rabatt.' },
    { question: 'Ist Flugverfolgung enthalten?', answer: 'Ja. Wenn die Flugnummer angegeben wird, kann Empfang am Flughafen und Flugverfolgung organisiert werden.' },
    { question: 'Kann ich mit Karte bezahlen?', answer: 'Ja. Die Reservierung wird online per sicherer Kartenzahlung bestätigt.' },
  ],
  es: [
    { question: '¿Puedo reservar un traslado privado del aeropuerto online?', answer: 'Sí. Elija ruta, vehículo y opciones, y confirme con pago seguro con tarjeta.' },
    { question: '¿Con cuánta antelación debo reservar?', answer: 'Las reservas están disponibles al menos 2 horas antes de la recogida, según disponibilidad operativa.' },
    { question: '¿Qué aeropuertos se cubren en Estambul?', answer: 'El servicio cubre Istanbul Airport IST y Sabiha Gökçen Airport SAW para traslados privados, hoteles y servicios de chófer.' },
    { question: '¿Puedo reservar un chófer privado por horas?', answer: 'Sí. La reserva por horas está disponible para reuniones, compras, eventos, restaurantes, visitas privadas o citas personales.' },
    { question: '¿Qué vehículos están disponibles?', answer: 'Mercedes E-Class, Mercedes S-Class, Mercedes Viano VIP y Mercedes Sprinter VIP.' },
    { question: '¿Cómo se calcula el precio?', answer: 'Los traslados tienen un mínimo de una hora y después cada media hora iniciada. En reservas por horas, después de las dos primeras horas se aplica un 20% de descuento.' },
    { question: '¿Incluye seguimiento del vuelo?', answer: 'Sí. Si se introduce el número de vuelo, se puede organizar recepción en aeropuerto y seguimiento del vuelo.' },
    { question: '¿Puedo pagar con tarjeta?', answer: 'Sí. La reserva se confirma online mediante pago seguro con tarjeta.' },
  ],
  it: [
    { question: 'Posso prenotare un transfer aeroportuale privato online?', answer: 'Sì. Scegli percorso, veicolo e opzioni, poi conferma con pagamento sicuro con carta.' },
    { question: 'Quanto prima devo prenotare?', answer: 'Le prenotazioni sono disponibili almeno 2 ore prima del ritiro, in base alla disponibilità operativa.' },
    { question: 'Quali aeroporti sono coperti a Istanbul?', answer: 'Il servizio copre Istanbul Airport IST e Sabiha Gökçen Airport SAW per transfer privati, hotel e servizi chauffeur.' },
    { question: 'Posso prenotare un autista privato a ore?', answer: 'Sì. La prenotazione a ore è disponibile per riunioni, shopping, eventi, ristoranti, visite private o appuntamenti personali.' },
    { question: 'Quali veicoli sono disponibili?', answer: 'Mercedes E-Class, Mercedes S-Class, Mercedes Viano VIP e Mercedes Sprinter VIP.' },
    { question: 'Come viene calcolato il prezzo?', answer: 'I transfer hanno un minimo di un’ora e poi ogni mezz’ora iniziata. Nelle prenotazioni a ore, dopo le prime due ore si applica il 20% di sconto.' },
    { question: 'Il monitoraggio del volo è incluso?', answer: 'Sì. Inserendo il numero del volo, è possibile organizzare accoglienza in aeroporto e monitoraggio del volo.' },
    { question: 'Posso pagare con carta?', answer: 'Sì. La prenotazione è confermata online tramite pagamento sicuro con carta.' },
  ],
  pt: [
    { question: 'Posso reservar um transfer privado do aeroporto online?', answer: 'Sim. Escolha rota, veículo e opções, depois confirme com pagamento seguro por cartão.' },
    { question: 'Com quanta antecedência devo reservar?', answer: 'As reservas estão disponíveis pelo menos 2 horas antes da recolha, conforme disponibilidade operacional.' },
    { question: 'Que aeroportos são cobertos em Istambul?', answer: 'O serviço cobre Istanbul Airport IST e Sabiha Gökçen Airport SAW para transfers privados, hotéis e motorista.' },
    { question: 'Posso reservar motorista privado por hora?', answer: 'Sim. A reserva por hora está disponível para reuniões, compras, eventos, restaurantes, visitas ou compromissos privados.' },
    { question: 'Quais veículos estão disponíveis?', answer: 'Mercedes E-Class, Mercedes S-Class, Mercedes Viano VIP e Mercedes Sprinter VIP.' },
    { question: 'Como o preço é calculado?', answer: 'Os transfers têm mínimo de uma hora e depois cada meia hora iniciada. Nas reservas por hora, após as primeiras duas horas aplica-se 20% de desconto.' },
    { question: 'O acompanhamento do voo está incluído?', answer: 'Sim. Ao fornecer o número do voo, pode ser organizada a receção no aeroporto e monitorização do voo.' },
    { question: 'Posso pagar com cartão?', answer: 'Sim. A reserva é confirmada online por pagamento seguro com cartão.' },
  ],
};

export function buildTransferMetadata(locale: TransferLocale): Metadata {
  const canonical = `${siteUrl}${paths[locale]}`;
  return {
    title: titles[locale],
    description: descriptions[locale],
    metadataBase: new URL(siteUrl),
    alternates: { canonical, languages: extendedAlternates },
    openGraph: { title: titles[locale], description: descriptions[locale], url: canonical, siteName: 'Bosphoras Transfer', type: 'website' },
    twitter: { card: 'summary_large_image', title: titles[locale], description: descriptions[locale] },
    robots: { index: true, follow: true },
  };
}

export function IstanbulTransferPageShell({ locale }: { locale: TransferLocale }) {
  const faqs = faqsByLocale[locale];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: titles[locale],
    serviceType: ['Istanbul airport transfer', 'Istanbul Airport IST transfer', 'Sabiha Gökçen SAW transfer', 'Private chauffeur Istanbul', 'VIP transfer Istanbul', 'Hourly chauffeur Istanbul', 'IST airport transfer', 'SAW airport transfer', 'private driver Istanbul', 'limousine service Istanbul'],
    description: descriptions[locale],
    url: `${siteUrl}${paths[locale]}`,
    areaServed: [{ '@type': 'City', name: 'Istanbul' }, { '@type': 'Airport', name: 'Istanbul Airport IST' }, { '@type': 'Airport', name: 'Sabiha Gökçen International Airport SAW' }],
    availableLanguage: ['French', 'English', 'Russian', 'Arabic', 'Chinese', 'German', 'Spanish', 'Italian', 'Portuguese'],
    offers: [
      { '@type': 'Offer', name: 'Mercedes Classe E or similar', priceCurrency: 'EUR', price: '250', unitText: 'hour' },
      { '@type': 'Offer', name: 'Mercedes Classe S or similar', priceCurrency: 'EUR', price: '400', unitText: 'hour' },
      { '@type': 'Offer', name: 'Mercedes Viano VIP', priceCurrency: 'EUR', price: '150', unitText: 'hour' },
      { '@type': 'Offer', name: 'Mercedes Sprinter VIP', priceCurrency: 'EUR', price: '200', unitText: 'hour' },
    ],
  };

  return (
    <>
      <StructuredData data={[organizationSchema(), websiteSchema(), serviceSchema({ name: titles[locale], description: descriptions[locale], url: `${siteUrl}${paths[locale]}` }), schema, faqSchema(faqs), breadcrumbSchema([{ name: 'Bosphoras Transfer', url: `${siteUrl}${paths[locale]}` }, { name: titles[locale], url: `${siteUrl}${paths[locale]}` }])]} />
      <TransferOnlyHeader locale={locale} />
      <main className="bg-white text-[#111827]">
        <TransferBookingClient locale={locale} />
        <TransferQuoteEnhancer />
        <TransferCheckoutEnhancer />
        <TransferComplianceNotice locale={locale} />
        <TransferSeoContent locale={locale} />
        <section id="transfer-faq" className="bg-white px-5 pb-16 md:px-8 md:pb-24" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
          <div className="mx-auto max-w-[1180px]">
            <h2 className="text-3xl font-black tracking-[-0.04em] text-[#111827] md:text-5xl">{faqTitle[locale]}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => <article key={faq.question} className="rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-[0_14px_45px_rgba(17,24,39,0.05)]"><h3 className="text-xl font-black tracking-[-0.02em] text-[#111827]">{faq.question}</h3><p className="mt-4 text-base leading-8 text-[#4b5563]">{faq.answer}</p></article>)}
            </div>
          </div>
        </section>
      </main>
      <TransferOnlyFooter locale={locale} />
    </>
  );
}
