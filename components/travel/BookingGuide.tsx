import type { TravelLocale } from '@/lib/travel/i18n';

const guidance: Record<TravelLocale, [string, string, string, string]> = {
  fr: [
    'Rechercher un vol ou un hôtel',
    'Pour un vol, renseignez les aéroports, les dates et les passagers. Pour un hôtel, recherchez une ville ou un établissement, puis choisissez les dates et les voyageurs.',
    'Consulter les conditions de réservation',
    'Vérifiez le prix total, les prestations incluses et les conditions de modification ou d’annulation de l’offre avant de réserver.',
  ],
  en: [
    'Search for a flight or hotel',
    'For flights, enter your airports, dates and passengers. For hotels, search for a city or property, then choose your dates and guests.',
    'Check booking conditions',
    'Review the total price, what is included and the offer’s change or cancellation conditions before booking.',
  ],
  de: [
    'Flug oder Hotel suchen',
    'Geben Sie für Flüge die Flughäfen, Reisedaten und Reisenden an. Suchen Sie für Hotels nach einer Stadt oder Unterkunft und wählen Sie Ihre Daten und Gäste.',
    'Buchungsbedingungen prüfen',
    'Prüfen Sie vor der Buchung den Gesamtpreis, die enthaltenen Leistungen sowie die Umbuchungs- und Stornobedingungen.',
  ],
  tr: [
    'Uçuş veya otel arayın',
    'Uçuş için havalimanlarını, tarihleri ve yolcuları girin. Otel için şehir veya tesis arayın, ardından tarihleri ve misafirleri seçin.',
    'Rezervasyon koşullarını kontrol edin',
    'Rezervasyondan önce toplam tutarı, fiyata dâhil hizmetleri ve değişiklik veya iptal koşullarını inceleyin.',
  ],
  es: [
    'Buscar un vuelo o un hotel',
    'Para un vuelo, indica los aeropuertos, las fechas y los pasajeros. Para un hotel, busca una ciudad o un alojamiento y elige las fechas y los huéspedes.',
    'Consultar las condiciones de reserva',
    'Antes de reservar, comprueba el precio total, los servicios incluidos y las condiciones de cambio o cancelación.',
  ],
  it: [
    'Cercare un volo o un hotel',
    'Per i voli, indica aeroporti, date e passeggeri. Per gli hotel, cerca una città o una struttura e scegli le date e gli ospiti.',
    'Verificare le condizioni di prenotazione',
    'Prima di prenotare, controlla il prezzo totale, i servizi inclusi e le condizioni di modifica o cancellazione.',
  ],
  pt: [
    'Buscar um voo ou hotel',
    'Para voos, informe os aeroportos, as datas e os passageiros. Para hotéis, busque uma cidade ou hospedagem e selecione as datas e os hóspedes.',
    'Consultar as condições da reserva',
    'Antes de reservar, confira o preço total, os serviços incluídos e as regras de alteração ou cancelamento.',
  ],
  ru: [
    'Как найти рейс или отель',
    'Для рейса укажите аэропорты, даты и пассажиров. Для отеля найдите город или объект размещения, затем выберите даты и гостей.',
    'Где посмотреть условия бронирования',
    'Перед бронированием проверьте итоговую цену, включённые услуги и условия изменения или отмены.',
  ],
  ar: [
    'البحث عن رحلة جوية أو فندق',
    'للرحلات الجوية، حدد المطارات والتواريخ والمسافرين. وللفنادق، ابحث عن مدينة أو مكان إقامة، ثم اختر التواريخ والضيوف.',
    'مراجعة شروط الحجز',
    'راجع السعر الإجمالي والخدمات المشمولة وشروط التعديل أو الإلغاء قبل الحجز.',
  ],
  zh: [
    '如何查找航班或酒店',
    '查找航班时，请填写机场、日期及乘客信息。查找酒店时，可搜索城市或酒店，然后选择日期及入住人数。',
    '如何查看预订条款',
    '预订前，请核对总价、包含的服务以及更改或取消预订的条件。',
  ],
};

export function BookingGuide({ locale }: { locale: TravelLocale }) {
  const [searchTitle, searchDetails, termsTitle, termsDetails] = guidance[locale];

  return (
    <div className="container-editorial grid gap-6 border-t border-[#e2e9ee] py-10 md:grid-cols-2 md:gap-12">
      <section>
        <h2 className="text-lg font-bold text-[#183341]">{searchTitle}</h2>
        <p className="mt-2 text-sm leading-6 text-[#4c6572]">{searchDetails}</p>
      </section>
      <section>
        <h2 className="text-lg font-bold text-[#183341]">{termsTitle}</h2>
        <p className="mt-2 text-sm leading-6 text-[#4c6572]">{termsDetails}</p>
      </section>
    </div>
  );
}
