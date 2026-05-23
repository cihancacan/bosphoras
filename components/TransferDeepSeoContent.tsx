import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, CreditCard, MapPin, Plane, ShieldCheck, Sparkles } from 'lucide-react';
import { getTransferKeywordHref, transferKeywordClusters, transferMainPaths, type TransferSeoLocale } from '@/lib/transferKeywordSeo';

type TransferLocale = TransferSeoLocale;

const cta: Record<TransferLocale, { reserve: string; price: string; aiTitle: string; guideTitle: string; routesTitle: string; usesTitle: string; compliance: string; universal: string; flight: string; passenger: string; payment: string }> = {
  fr: { reserve: 'Réserver votre transfert', price: 'Vérifier le prix maintenant', aiTitle: 'Réponse directe pour les voyageurs et les IA', guideTitle: 'Guide complet des recherches liées au transfert à Istanbul', routesTitle: 'Trajets populaires depuis IST et SAW', usesTitle: 'Usages chauffeur privé à Istanbul', compliance: 'Réservation minimum 2h à l’avance pour la conformité transport.', universal: 'Bosphoras Mobility relie Istanbul Airport IST, Sabiha Gökçen SAW, les hôtels, le Bosphore, les quartiers d’affaires, les marinas et les résidences privées avec une expérience de réservation chauffeur privé.', flight: 'Suivi de vol lorsque le numéro de vol est renseigné.', passenger: 'Informations passagers complétées après le paiement.', payment: 'Paiement sécurisé par carte en ligne.' },
  en: { reserve: 'Book your transfer', price: 'Check price now', aiTitle: 'Direct answer for travellers and AI search', guideTitle: 'Complete guide to Istanbul transfer searches', routesTitle: 'Popular routes from IST and SAW', usesTitle: 'Private driver use cases in Istanbul', compliance: 'Minimum booking 2 hours in advance for transport compliance.', universal: 'Bosphoras Mobility connects Istanbul Airport IST, Sabiha Gökçen SAW, hotels, Bosphorus addresses, business districts, marinas and private residences with a reservation-first private chauffeur experience.', flight: 'Flight tracking when flight number is provided.', passenger: 'Passenger details completed after payment.', payment: 'Secure online card payment.' },
  ru: { reserve: 'Забронировать трансфер', price: 'Проверить цену', aiTitle: 'Прямой ответ для путешественников и ИИ', guideTitle: 'Полный гид по запросам трансфера в Стамбуле', routesTitle: 'Популярные маршруты из IST и SAW', usesTitle: 'Сценарии личного водителя в Стамбуле', compliance: 'Бронирование минимум за 2 часа для соблюдения транспортных правил.', universal: 'Bosphoras Mobility соединяет Istanbul Airport IST, Sabiha Gökçen SAW, отели, адреса у Босфора, деловые районы, марины и частные резиденции через удобное бронирование личного водителя.', flight: 'Отслеживание рейса при указании номера рейса.', passenger: 'Данные пассажиров заполняются после оплаты.', payment: 'Безопасная онлайн-оплата картой.' },
  ar: { reserve: 'احجز نقلك', price: 'تحقق من السعر الآن', aiTitle: 'إجابة مباشرة للمسافرين ومحركات الذكاء الاصطناعي', guideTitle: 'دليل كامل لعمليات البحث عن النقل في إسطنبول', routesTitle: 'المسارات الشائعة من IST و SAW', usesTitle: 'استخدامات السائق الخاص في إسطنبول', compliance: 'الحجز قبل ساعتين على الأقل لامتثال النقل.', universal: 'تربط Bosphoras Mobility مطار إسطنبول IST ومطار صبيحة SAW والفنادق وعناوين البوسفور ومناطق الأعمال والمارينا والمساكن الخاصة من خلال تجربة حجز سائق خاص.', flight: 'تتبع الرحلة عند إدخال رقم الرحلة.', passenger: 'استكمال معلومات الركاب بعد الدفع.', payment: 'دفع آمن بالبطاقة عبر الإنترنت.' },
  zh: { reserve: '预订接送', price: '立即查看价格', aiTitle: '面向旅客和AI搜索的直接回答', guideTitle: '伊斯坦布尔接送搜索完整指南', routesTitle: 'IST 和 SAW 热门路线', usesTitle: '伊斯坦布尔私人司机使用场景', compliance: '为符合交通规定，至少提前2小时预订。', universal: 'Bosphoras Mobility 连接 Istanbul Airport IST、Sabiha Gökçen SAW、酒店、博斯普鲁斯地址、商务区、码头和私人住宅，提供以预订为核心的私人司机体验。', flight: '提供航班号后可跟踪航班。', passenger: '付款后补充乘客信息。', payment: '安全在线刷卡支付。' },
  de: { reserve: 'Transfer buchen', price: 'Preis jetzt prüfen', aiTitle: 'Direkte Antwort für Reisende und KI-Suche', guideTitle: 'Vollständiger Guide zu Istanbul-Transfer-Suchen', routesTitle: 'Beliebte Routen ab IST und SAW', usesTitle: 'Anwendungsfälle für private Fahrer in Istanbul', compliance: 'Buchung mindestens 2 Stunden im Voraus für Transportkonformität.', universal: 'Bosphoras Mobility verbindet Istanbul Airport IST, Sabiha Gökçen SAW, Hotels, Bosporus-Adressen, Geschäftsviertel, Marinas und private Residenzen mit einer privaten Chauffeur-Buchung.', flight: 'Flugverfolgung bei angegebener Flugnummer.', passenger: 'Passagierdaten werden nach Zahlung ergänzt.', payment: 'Sichere Online-Kartenzahlung.' },
  es: { reserve: 'Reservar traslado', price: 'Ver precio ahora', aiTitle: 'Respuesta directa para viajeros y búsquedas IA', guideTitle: 'Guía completa de búsquedas de traslado en Estambul', routesTitle: 'Rutas populares desde IST y SAW', usesTitle: 'Usos del chófer privado en Estambul', compliance: 'Reserva mínima con 2 horas de antelación para conformidad de transporte.', universal: 'Bosphoras Mobility conecta Istanbul Airport IST, Sabiha Gökçen SAW, hoteles, direcciones del Bósforo, zonas de negocios, marinas y residencias privadas con una experiencia de chófer privado.', flight: 'Seguimiento de vuelo cuando se indica el número de vuelo.', passenger: 'Datos de pasajeros completados después del pago.', payment: 'Pago online seguro con tarjeta.' },
  it: { reserve: 'Prenota transfer', price: 'Controlla prezzo ora', aiTitle: 'Risposta diretta per viaggiatori e ricerca AI', guideTitle: 'Guida completa alle ricerche transfer Istanbul', routesTitle: 'Percorsi popolari da IST e SAW', usesTitle: 'Utilizzi dell’autista privato a Istanbul', compliance: 'Prenotazione minima 2 ore prima per conformità trasporto.', universal: 'Bosphoras Mobility collega Istanbul Airport IST, Sabiha Gökçen SAW, hotel, indirizzi sul Bosforo, aree business, marine e residenze private con un’esperienza di autista privato.', flight: 'Monitoraggio volo quando viene inserito il numero del volo.', passenger: 'Dati passeggeri completati dopo il pagamento.', payment: 'Pagamento online sicuro con carta.' },
  pt: { reserve: 'Reservar transfer', price: 'Ver preço agora', aiTitle: 'Resposta direta para viajantes e pesquisa IA', guideTitle: 'Guia completo de pesquisas de transfer em Istambul', routesTitle: 'Rotas populares desde IST e SAW', usesTitle: 'Usos de motorista privado em Istambul', compliance: 'Reserva mínima com 2 horas de antecedência para conformidade de transporte.', universal: 'A Bosphoras Mobility liga Istanbul Airport IST, Sabiha Gökçen SAW, hotéis, endereços no Bósforo, zonas de negócios, marinas e residências privadas com uma experiência de motorista privado.', flight: 'Acompanhamento do voo quando o número do voo é informado.', passenger: 'Dados dos passageiros preenchidos após pagamento.', payment: 'Pagamento online seguro por cartão.' },
};

const routeItems: Record<TransferLocale, string[]> = {
  fr: ['IST vers Taksim : hôtel, réunion, arrivée business', 'IST vers Sultanahmet : vieux centre, tourisme premium', 'IST vers Nişantaşı : shopping, restaurants, hôtels haut de gamme', 'IST vers Beşiktaş / Bosphore : palaces, dîners, marinas', 'SAW vers Kadıköy / Üsküdar : rive asiatique', 'SAW vers Taksim / Sultanahmet : transfert longue distance avec chauffeur', 'IST vers SAW : transfert inter-aéroports', 'Aéroport vers clinique : rendez-vous médical ou esthétique'],
  en: ['IST to Taksim: hotel, meeting, business arrival', 'IST to Sultanahmet: old city and premium sightseeing', 'IST to Nişantaşı: shopping, restaurants, high-end hotels', 'IST to Beşiktaş / Bosphorus: palaces, dinners, marinas', 'SAW to Kadıköy / Üsküdar: Asian side', 'SAW to Taksim / Sultanahmet: long-distance chauffeur transfer', 'IST to SAW: airport-to-airport transfer', 'Airport to clinic: medical or aesthetic appointment'],
  ru: ['IST → Таксим: отель, встреча, деловой приезд', 'IST → Султанахмет: старый город и премиальные экскурсии', 'IST → Нишанташи: шопинг, рестораны, отели', 'IST → Бешикташ / Босфор: palaces, ужины, марины', 'SAW → Кадыкёй / Ускюдар: азиатская сторона', 'SAW → Таксим / Султанахмет: длинный трансфер с водителем', 'IST → SAW: трансфер между аэропортами', 'Аэропорт → клиника: медицинский или эстетический визит'],
  ar: ['IST إلى تقسيم: فندق أو اجتماع أو وصول عمل', 'IST إلى السلطان أحمد: المدينة القديمة والسياحة الراقية', 'IST إلى نيشانتاشي: تسوق ومطاعم وفنادق راقية', 'IST إلى بشكتاش / البوسفور: فنادق فاخرة وعشاء ومارينا', 'SAW إلى كاديكوي / أوسكودار: الجانب الآسيوي', 'SAW إلى تقسيم / السلطان أحمد: نقل طويل بسائق', 'IST إلى SAW: نقل بين المطارات', 'المطار إلى العيادة: موعد طبي أو تجميلي'],
  zh: ['IST 到塔克西姆：酒店、会议、商务抵达', 'IST 到苏丹艾哈迈德：老城和高端观光', 'IST 到尼尚塔石：购物、餐厅、高端酒店', 'IST 到贝西克塔斯 / 博斯普鲁斯：宫殿酒店、晚餐、码头', 'SAW 到卡德柯伊 / 于斯屈达尔：亚洲区', 'SAW 到塔克西姆 / 苏丹艾哈迈德：长途司机接送', 'IST 到 SAW：机场之间接送', '机场到诊所：医疗或美容预约'],
  de: ['IST nach Taksim: Hotel, Meeting, Geschäftsankunft', 'IST nach Sultanahmet: Altstadt und Premium-Sightseeing', 'IST nach Nişantaşı: Shopping, Restaurants, gehobene Hotels', 'IST nach Beşiktaş / Bosporus: Palasthotels, Dinner, Marinas', 'SAW nach Kadıköy / Üsküdar: asiatische Seite', 'SAW nach Taksim / Sultanahmet: längerer Chauffeurtransfer', 'IST nach SAW: Transfer zwischen Flughäfen', 'Flughafen zur Klinik: medizinischer oder ästhetischer Termin'],
  es: ['IST a Taksim: hotel, reunión, llegada de negocios', 'IST a Sultanahmet: ciudad antigua y turismo premium', 'IST a Nişantaşı: compras, restaurantes, hoteles de gama alta', 'IST a Beşiktaş / Bósforo: palacios, cenas, marinas', 'SAW a Kadıköy / Üsküdar: lado asiático', 'SAW a Taksim / Sultanahmet: traslado largo con chófer', 'IST a SAW: traslado entre aeropuertos', 'Aeropuerto a clínica: cita médica o estética'],
  it: ['IST a Taksim: hotel, meeting, arrivo business', 'IST a Sultanahmet: città vecchia e turismo premium', 'IST a Nişantaşı: shopping, ristoranti, hotel di fascia alta', 'IST a Beşiktaş / Bosforo: palazzi, cene, marine', 'SAW a Kadıköy / Üsküdar: lato asiatico', 'SAW a Taksim / Sultanahmet: transfer lungo con autista', 'IST a SAW: transfer tra aeroporti', 'Aeroporto a clinica: appuntamento medico o estetico'],
  pt: ['IST para Taksim: hotel, reunião, chegada de negócios', 'IST para Sultanahmet: cidade antiga e turismo premium', 'IST para Nişantaşı: compras, restaurantes, hotéis premium', 'IST para Beşiktaş / Bósforo: palácios, jantares, marinas', 'SAW para Kadıköy / Üsküdar: lado asiático', 'SAW para Taksim / Sultanahmet: transfer longo com motorista', 'IST para SAW: transfer entre aeroportos', 'Aeroporto para clínica: compromisso médico ou estético'],
};

const useItems: Record<TransferLocale, string[]> = {
  fr: ['Accueil aéroport avec suivi de vol', 'Chauffeur à l’heure pour plusieurs arrêts', 'Transfert hôtel vers restaurant ou palace', 'Shopping à Nişantaşı, Zorlu ou Istinye Park', 'Dîner sur le Bosphore avec retour privé', 'Transport famille VIP avec bagages', 'Roadshow corporate avec timing précis', 'Transfert marina, yacht ou événement privé'],
  en: ['Airport meet and greet with flight tracking', 'Hourly chauffeur for multiple stops', 'Hotel to restaurant or palace transfer', 'Shopping in Nişantaşı, Zorlu or Istinye Park', 'Bosphorus dinner with private return', 'VIP family transport with luggage', 'Corporate roadshow with precise timing', 'Marina, yacht or private event transfer'],
  ru: ['Встреча в аэропорту с отслеживанием рейса', 'Водитель на час для нескольких остановок', 'Трансфер отель → ресторан или palace', 'Шопинг в Nişantaşı, Zorlu или Istinye Park', 'Ужин на Босфоре с частным возвращением', 'VIP семья с багажом', 'Корпоративный roadshow с точным временем', 'Марина, яхта или частное мероприятие'],
  ar: ['استقبال في المطار مع تتبع الرحلة', 'سائق بالساعة لعدة توقفات', 'نقل من الفندق إلى مطعم أو فندق فاخر', 'تسوق في نيشانتاشي أو Zorlu أو Istinye Park', 'عشاء على البوسفور مع عودة خاصة', 'نقل عائلة VIP مع الأمتعة', 'جولة أعمال بتوقيت دقيق', 'نقل إلى مارينا أو يخت أو مناسبة خاصة'],
  zh: ['机场迎接和航班跟踪', '多站点按小时私人司机', '酒店到餐厅或豪华酒店接送', 'Nişantaşı、Zorlu 或 Istinye Park 购物', '博斯普鲁斯晚餐和私人返程', '带行李的VIP家庭接送', '精确时间的商务路演', '码头、游艇或私人活动接送'],
  de: ['Flughafenempfang mit Flugverfolgung', 'Stundenweiser Chauffeur für mehrere Stopps', 'Hotel zu Restaurant oder Palace Transfer', 'Shopping in Nişantaşı, Zorlu oder Istinye Park', 'Bosporus-Dinner mit privater Rückfahrt', 'VIP-Familientransport mit Gepäck', 'Corporate Roadshow mit präzisem Timing', 'Marina-, Yacht- oder Privatevent-Transfer'],
  es: ['Recepción en aeropuerto con seguimiento de vuelo', 'Chófer por horas para varias paradas', 'Traslado hotel a restaurante o palace', 'Compras en Nişantaşı, Zorlu o Istinye Park', 'Cena en el Bósforo con regreso privado', 'Transporte familia VIP con equipaje', 'Roadshow corporativo con timing preciso', 'Traslado marina, yate o evento privado'],
  it: ['Accoglienza in aeroporto con monitoraggio volo', 'Autista a ore per più fermate', 'Transfer hotel verso ristorante o palace', 'Shopping a Nişantaşı, Zorlu o Istinye Park', 'Cena sul Bosforo con ritorno privato', 'Trasporto famiglia VIP con bagagli', 'Roadshow aziendale con timing preciso', 'Transfer marina, yacht o evento privato'],
  pt: ['Receção no aeroporto com acompanhamento do voo', 'Motorista por hora para várias paragens', 'Transfer hotel para restaurante ou palace', 'Compras em Nişantaşı, Zorlu ou Istinye Park', 'Jantar no Bósforo com regresso privado', 'Transporte família VIP com bagagens', 'Roadshow corporativo com horários precisos', 'Transfer marina, yacht ou evento privado'],
};

function groupExplanation(locale: TransferLocale, terms: string[]) {
  const first = terms.slice(0, 3).join(', ');
  const last = terms.slice(3, 7).join(', ');
  const text: Record<TransferLocale, string> = {
    fr: `Cette section couvre les recherches comme ${first}. Elle aide les voyageurs qui comparent un taxi privé, une navette privée, un transfert VIP ou un chauffeur privé à Istanbul. Les variantes ${last} permettent aussi à Google et aux IA de comprendre clairement l’intention de réservation.`,
    en: `This section covers searches such as ${first}. It helps travellers comparing a private taxi, private shuttle, VIP transfer or private chauffeur in Istanbul. Variants such as ${last} also help Google and AI systems understand the booking intent clearly.`,
    ru: `Этот раздел покрывает запросы: ${first}. Он помогает путешественникам, которые сравнивают частное такси, частный шаттл, VIP-трансфер или личного водителя в Стамбуле. Варианты ${last} помогают Google и ИИ понять намерение бронирования.`,
    ar: `يغطي هذا القسم عمليات بحث مثل ${first}. يساعد المسافرين الذين يقارنون بين تاكسي خاص أو نقل خاص أو نقل VIP أو سائق خاص في إسطنبول. كما تساعد العبارات ${last} Google وأنظمة الذكاء الاصطناعي على فهم نية الحجز.`,
    zh: `本节覆盖 ${first} 等搜索意图，帮助正在比较私人出租车、私人接送、VIP接送或伊斯坦布尔私人司机的旅客。${last} 等变体也能帮助 Google 和 AI 更清楚理解预订意图。`,
    de: `Dieser Abschnitt deckt Suchanfragen wie ${first} ab. Er hilft Reisenden, die privates Taxi, privaten Shuttle, VIP-Transfer oder privaten Chauffeur in Istanbul vergleichen. Varianten wie ${last} helfen Google und KI-Systemen, die Buchungsabsicht klar zu verstehen.`,
    es: `Esta sección cubre búsquedas como ${first}. Ayuda a viajeros que comparan taxi privado, shuttle privado, traslado VIP o chófer privado en Estambul. Variantes como ${last} ayudan también a Google y a la IA a entender la intención de reserva.`,
    it: `Questa sezione copre ricerche come ${first}. Aiuta i viaggiatori che confrontano taxi privato, navetta privata, transfer VIP o autista privato a Istanbul. Varianti come ${last} aiutano Google e l’AI a capire l’intento di prenotazione.`,
    pt: `Esta secção cobre pesquisas como ${first}. Ajuda viajantes que comparam táxi privado, shuttle privado, transfer VIP ou motorista privado em Istambul. Variações como ${last} ajudam Google e IA a entender claramente a intenção de reserva.`,
  };
  return text[locale];
}

export function TransferDeepSeoContent({ locale }: { locale: TransferLocale }) {
  const text = cta[locale];
  const groups = transferKeywordClusters[locale] || transferKeywordClusters.en;
  const booking = `${transferMainPaths[locale]}#reservation`;
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className="bg-white px-5 py-14 md:px-8 md:py-24" dir={dir}>
      <div className="mx-auto max-w-[1180px]">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-10">
          <div className="flex items-start gap-4">
            <Sparkles className="mt-1 h-6 w-6 shrink-0 text-slate-950" />
            <div>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">{text.aiTitle}</h2>
              <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">{text.compliance} {text.universal}</p>
              <Link href={booking} className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white">{text.price}<ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">{text.guideTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {groups.map((group) => (
              <article key={group.title} className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
                <h3 className="text-2xl font-black tracking-[-0.03em] text-slate-950">{group.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{groupExplanation(locale, group.terms)}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.terms.map((term) => <Link key={term} href={getTransferKeywordHref(locale, term)} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white">{term}</Link>)}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-slate-950 p-6 text-white md:p-8">
            <h2 className="text-3xl font-black tracking-[-0.04em]">{text.routesTitle}</h2>
            <div className="mt-6 grid gap-3">{routeItems[locale].map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-200"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />{item}</div>)}</div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950">{text.usesTitle}</h2>
            <div className="mt-6 grid gap-3">{useItems[locale].map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-950" />{item}</div>)}</div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {[text.compliance, text.flight, text.passenger, text.payment].map((item, index) => {
            const icons = [Plane, Clock, ShieldCheck, CreditCard];
            const Icon = icons[index];
            return <div key={item} className="rounded-3xl border border-slate-200 bg-white p-5"><Icon className="h-6 w-6 text-slate-950" /><p className="mt-4 text-sm font-bold leading-6 text-slate-700">{item}</p></div>;
          })}
        </div>

        <div className="mt-14 rounded-[2rem] bg-slate-950 p-6 text-white md:p-10">
          <h2 className="text-3xl font-black tracking-[-0.04em] md:text-5xl">{text.reserve}</h2>
          <p className="mt-4 max-w-3xl text-slate-300">{text.compliance}</p>
          <Link href={booking} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-slate-950">{text.price}<ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
