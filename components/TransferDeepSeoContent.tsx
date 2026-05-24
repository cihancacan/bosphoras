import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronDown, Clock, CreditCard, MapPin, Plane, ShieldCheck, Sparkles } from 'lucide-react';
import { getTransferKeywordHref, transferKeywordClusters, transferMainPaths, type TransferSeoLocale } from '@/lib/transferKeywordSeo';

type TransferLocale = TransferSeoLocale;

type Copy = {
  reserve: string;
  price: string;
  heroTitle: string;
  guideTitle: string;
  routesTitle: string;
  usesTitle: string;
  compliance: string;
  universal: string;
  flight: string;
  passenger: string;
  payment: string;
  open: string;
};

const cta: Record<TransferLocale, Copy> = {
  fr: { reserve: 'Réserver votre transfert', price: 'Vérifier le prix maintenant', heroTitle: 'Votre transfert privé à Istanbul, organisé avant votre arrivée', guideTitle: 'Choisir le bon transfert à Istanbul', routesTitle: 'Routes populaires pour les transferts aéroport à Istanbul', usesTitle: 'Chauffeur privé, chauffeur à l’heure et mobilité VIP à Istanbul', compliance: 'Réservation minimum 2h à l’avance pour la conformité transport.', universal: 'Bosphoras Mobility relie Istanbul Airport IST, Sabiha Gökçen SAW, les hôtels, le Bosphore, les quartiers d’affaires, les marinas et les résidences privées avec une expérience de réservation chauffeur privé simple et sécurisée.', flight: 'Suivi de vol lorsque le numéro de vol est renseigné.', passenger: 'Informations passagers complétées après le paiement.', payment: 'Paiement sécurisé par carte en ligne.', open: 'Ouvrir' },
  en: { reserve: 'Book your transfer', price: 'Check price now', heroTitle: 'Your private transfer in Istanbul, arranged before arrival', guideTitle: 'Choose the right transfer in Istanbul', routesTitle: 'Popular Istanbul airport transfer routes', usesTitle: 'Private driver, hourly chauffeur and VIP mobility in Istanbul', compliance: 'Minimum booking 2 hours in advance for transport compliance.', universal: 'Bosphoras Mobility connects Istanbul Airport IST, Sabiha Gökçen SAW, hotels, Bosphorus addresses, business districts, marinas and private residences with a simple and secure private chauffeur booking experience.', flight: 'Flight tracking when flight number is provided.', passenger: 'Passenger details completed after payment.', payment: 'Secure online card payment.', open: 'Open' },
  ru: { reserve: 'Забронировать трансфер', price: 'Проверить цену', heroTitle: 'Ваш частный трансфер в Стамбуле, организованный до прибытия', guideTitle: 'Выберите подходящий трансфер в Стамбуле', routesTitle: 'Популярные маршруты трансфера из аэропортов Стамбула', usesTitle: 'Личный водитель, водитель на час и VIP-передвижение в Стамбуле', compliance: 'Бронирование минимум за 2 часа для соблюдения транспортных правил.', universal: 'Bosphoras Mobility соединяет Istanbul Airport IST, Sabiha Gökçen SAW, отели, адреса у Босфора, деловые районы, марины и частные резиденции через удобное и безопасное бронирование личного водителя.', flight: 'Отслеживание рейса при указании номера рейса.', passenger: 'Данные пассажиров заполняются после оплаты.', payment: 'Безопасная онлайн-оплата картой.', open: 'Открыть' },
  ar: { reserve: 'احجز نقلك', price: 'تحقق من السعر الآن', heroTitle: 'نقلك الخاص في إسطنبول، منظم قبل وصولك', guideTitle: 'اختر خدمة النقل المناسبة في إسطنبول', routesTitle: 'أشهر مسارات النقل من مطارات إسطنبول', usesTitle: 'سائق خاص، سائق بالساعة وتنقل VIP في إسطنبول', compliance: 'الحجز قبل ساعتين على الأقل لامتثال النقل.', universal: 'تربط Bosphoras Mobility مطار إسطنبول IST ومطار صبيحة SAW والفنادق وعناوين البوسفور ومناطق الأعمال والمارينا والمساكن الخاصة من خلال تجربة حجز سائق خاص بسيطة وآمنة.', flight: 'تتبع الرحلة عند إدخال رقم الرحلة.', passenger: 'استكمال معلومات الركاب بعد الدفع.', payment: 'دفع آمن بالبطاقة عبر الإنترنت.', open: 'فتح' },
  zh: { reserve: '预订接送', price: '立即查看价格', heroTitle: '抵达前安排好的伊斯坦布尔私人接送', guideTitle: '选择合适的伊斯坦布尔接送服务', routesTitle: '伊斯坦布尔机场接送热门路线', usesTitle: '私人司机、按小时司机和伊斯坦布尔VIP出行', compliance: '为符合交通规定，至少提前2小时预订。', universal: 'Bosphoras Mobility 连接 Istanbul Airport IST、Sabiha Gökçen SAW、酒店、博斯普鲁斯地址、商务区、码头和私人住宅，提供简单安全的私人司机预订体验。', flight: '提供航班号后可跟踪航班。', passenger: '付款后补充乘客信息。', payment: '安全在线刷卡支付。', open: '打开' },
  de: { reserve: 'Transfer buchen', price: 'Preis jetzt prüfen', heroTitle: 'Ihr privater Transfer in Istanbul, vor der Ankunft organisiert', guideTitle: 'Den passenden Transfer in Istanbul wählen', routesTitle: 'Beliebte Flughafentransfer-Routen in Istanbul', usesTitle: 'Privater Fahrer, stundenweiser Fahrer und VIP-Mobilität in Istanbul', compliance: 'Buchung mindestens 2 Stunden im Voraus für Transportkonformität.', universal: 'Bosphoras Mobility verbindet Istanbul Airport IST, Sabiha Gökçen SAW, Hotels, Bosporus-Adressen, Geschäftsviertel, Marinas und private Residenzen mit einer einfachen und sicheren privaten Chauffeur-Buchung.', flight: 'Flugverfolgung bei angegebener Flugnummer.', passenger: 'Passagierdaten werden nach Zahlung ergänzt.', payment: 'Sichere Online-Kartenzahlung.', open: 'Öffnen' },
  es: { reserve: 'Reservar traslado', price: 'Ver precio ahora', heroTitle: 'Su traslado privado en Estambul, organizado antes de llegar', guideTitle: 'Elegir el traslado adecuado en Estambul', routesTitle: 'Rutas populares de traslado del aeropuerto en Estambul', usesTitle: 'Conductor privado, chófer por horas y movilidad VIP en Estambul', compliance: 'Reserva mínima con 2 horas de antelación para conformidad de transporte.', universal: 'Bosphoras Mobility conecta Istanbul Airport IST, Sabiha Gökçen SAW, hoteles, direcciones del Bósforo, zonas de negocios, marinas y residencias privadas con una reserva de chófer privado sencilla y segura.', flight: 'Seguimiento de vuelo cuando se indica el número de vuelo.', passenger: 'Datos de pasajeros completados después del pago.', payment: 'Pago online seguro con tarjeta.', open: 'Abrir' },
  it: { reserve: 'Prenota transfer', price: 'Controlla prezzo ora', heroTitle: 'Il tuo transfer privato a Istanbul, organizzato prima dell’arrivo', guideTitle: 'Scegliere il transfer giusto a Istanbul', routesTitle: 'Percorsi popolari per i transfer aeroportuali a Istanbul', usesTitle: 'Autista privato, autista a ore e mobilità VIP a Istanbul', compliance: 'Prenotazione minima 2 ore prima per conformità trasporto.', universal: 'Bosphoras Mobility collega Istanbul Airport IST, Sabiha Gökçen SAW, hotel, indirizzi sul Bosforo, aree business, marine e residenze private con una prenotazione autista privato semplice e sicura.', flight: 'Monitoraggio volo quando viene inserito il numero del volo.', passenger: 'Dati passeggeri completati dopo il pagamento.', payment: 'Pagamento online sicuro con carta.', open: 'Aprire' },
  pt: { reserve: 'Reservar transfer', price: 'Ver preço agora', heroTitle: 'O seu transfer privado em Istambul, organizado antes da chegada', guideTitle: 'Escolher o transfer certo em Istambul', routesTitle: 'Rotas populares de transfer do aeroporto em Istambul', usesTitle: 'Motorista privado, motorista por hora e mobilidade VIP em Istambul', compliance: 'Reserva mínima com 2 horas de antecedência para conformidade de transporte.', universal: 'A Bosphoras Mobility liga Istanbul Airport IST, Sabiha Gökçen SAW, hotéis, endereços no Bósforo, zonas de negócios, marinas e residências privadas com uma reserva de motorista privado simples e segura.', flight: 'Acompanhamento do voo quando o número do voo é informado.', passenger: 'Dados dos passageiros preenchidos após pagamento.', payment: 'Pagamento online seguro por cartão.', open: 'Abrir' },
};

function groupExplanation(locale: TransferLocale, terms: string[]) {
  const first = terms.slice(0, 3).join(', ');
  const last = terms.slice(3, 7).join(', ');
  const text: Record<TransferLocale, string> = {
    fr: `Cette section vous aide à choisir entre ${first}. Vous pouvez comparer les transferts depuis IST, SAW, les hôtels, les quartiers d’affaires et les adresses du Bosphore, puis réserver directement votre chauffeur privé. Les options comme ${last} couvrent les demandes les plus fréquentes des voyageurs à Istanbul.`,
    en: `This section helps you choose between ${first}. You can compare transfers from IST, SAW, hotels, business districts and Bosphorus addresses, then book your private chauffeur directly. Options such as ${last} cover the most common traveller needs in Istanbul.`,
    ru: `Этот раздел помогает выбрать между ${first}. Вы можете сравнить трансферы из IST, SAW, отелей, деловых районов и адресов у Босфора, затем сразу забронировать личного водителя. Варианты ${last} покрывают самые частые запросы путешественников в Стамбуле.`,
    ar: `يساعدك هذا القسم على الاختيار بين ${first}. يمكنك مقارنة النقل من IST و SAW والفنادق ومناطق الأعمال وعناوين البوسفور، ثم حجز سائقك الخاص مباشرة. الخيارات مثل ${last} تغطي أكثر احتياجات المسافرين شيوعاً في إسطنبول.`,
    zh: `本节帮助您在 ${first} 之间选择。您可以比较从 IST、SAW、酒店、商务区和博斯普鲁斯地址出发的接送服务，然后直接预订私人司机。${last} 等选项覆盖伊斯坦布尔旅客最常见的需求。`,
    de: `Dieser Abschnitt hilft Ihnen bei der Auswahl zwischen ${first}. Sie können Transfers ab IST, SAW, Hotels, Geschäftsvierteln und Bosporus-Adressen vergleichen und direkt Ihren privaten Chauffeur buchen. Optionen wie ${last} decken die häufigsten Bedürfnisse von Istanbul-Reisenden ab.`,
    es: `Esta sección le ayuda a elegir entre ${first}. Puede comparar traslados desde IST, SAW, hoteles, zonas de negocios y direcciones del Bósforo, y reservar directamente su chófer privado. Opciones como ${last} cubren las necesidades más frecuentes de los viajeros en Estambul.`,
    it: `Questa sezione ti aiuta a scegliere tra ${first}. Puoi confrontare transfer da IST, SAW, hotel, aree business e indirizzi sul Bosforo, poi prenotare direttamente il tuo autista privato. Opzioni come ${last} coprono le richieste più comuni dei viaggiatori a Istanbul.`,
    pt: `Esta secção ajuda a escolher entre ${first}. Pode comparar transfers desde IST, SAW, hotéis, zonas de negócios e endereços no Bósforo, depois reservar diretamente o seu motorista privado. Opções como ${last} cobrem as necessidades mais frequentes dos viajantes em Istambul.`,
  };
  return text[locale];
}

export function TransferDeepSeoContent({ locale }: { locale: TransferLocale }) {
  const text = cta[locale];
  const groups = transferKeywordClusters[locale] || transferKeywordClusters.en;
  const booking = `${transferMainPaths[locale]}#reservation`;
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const routeItems = groups[4]?.terms || [];
  const useItems = groups[5]?.terms || [];

  return (
    <section className="bg-white px-5 py-14 md:px-8 md:py-24" dir={dir}>
      <div className="mx-auto max-w-[1180px]">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-10">
          <div className="flex items-start gap-4">
            <Link href={booking} aria-label={text.reserve} className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-sm transition hover:bg-slate-950 hover:text-white">
              <Sparkles className="h-6 w-6" />
            </Link>
            <div>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">{text.heroTitle}</h2>
              <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">{text.compliance} {text.universal}</p>
              <Link href={booking} className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white">{text.price}<ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">{text.guideTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {groups.map((group) => (
              <details key={group.title} className="group rounded-[1.7rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6">
                  <h3 className="text-2xl font-black tracking-[-0.03em] text-slate-950">{group.title}</h3>
                  <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">
                    {text.open}
                    <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                  </span>
                </summary>
                <div className="border-t border-slate-100 px-6 pb-6">
                  <p className="mt-5 text-sm leading-7 text-slate-600">{groupExplanation(locale, group.terms)}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.terms.map((term) => <Link key={term} href={getTransferKeywordHref(locale, term)} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white">{term}</Link>)}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-slate-950 p-6 text-white md:p-8">
            <h2 className="text-3xl font-black tracking-[-0.04em]">{text.routesTitle}</h2>
            <div className="mt-6 grid gap-3">
              {routeItems.map((item) => <Link key={item} href={getTransferKeywordHref(locale, item)} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-200 transition hover:bg-white hover:text-slate-950"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />{item}</Link>)}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950">{text.usesTitle}</h2>
            <div className="mt-6 grid gap-3">
              {useItems.map((item) => <Link key={item} href={getTransferKeywordHref(locale, item)} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 transition hover:border-slate-950 hover:text-slate-950"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-950" />{item}</Link>)}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {[text.compliance, text.flight, text.passenger, text.payment].map((item, index) => {
            const icons = [Plane, Clock, ShieldCheck, CreditCard];
            const Icon = icons[index];
            return <Link href={booking} key={item} className="rounded-3xl border border-slate-200 bg-white p-5 transition hover:border-slate-950 hover:shadow-[0_18px_55px_rgba(15,23,42,0.08)]"><Icon className="h-6 w-6 text-slate-950" /><p className="mt-4 text-sm font-bold leading-6 text-slate-700">{item}</p></Link>;
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
