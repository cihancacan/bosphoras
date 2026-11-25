import type { TravelLocale } from './i18n';

export const bookingSearchCopy: Record<TravelLocale, {
  hotelSearch: string;
  placePlaceholder: string;
  flightSearch: string;
  airportPlaceholder: string;
  chooseDates: string;
  checkGuests: string;
  searchFailed: string;
  engineFailed: string;
  childAgeRequired: string;
  airportRequired: string;
  invalidFlight: string;
}> = {
  fr: {
    "hotelSearch": "Rechercher",
    "placePlaceholder": "Ville, région ou hôtel",
    "flightSearch": "Rechercher des vols",
    "airportPlaceholder": "Ville ou code IATA",
    "chooseDates": "Choisissez une destination proposée et vos dates.",
    "checkGuests": "Veuillez vérifier les voyageurs et les chambres.",
    "searchFailed": "La recherche n’a pas abouti. Réessayez ou ouvrez la réservation.",
    "engineFailed": "Le moteur de recherche n’a pas pu être chargé.",
    "childAgeRequired": "Indiquez l’âge de chaque enfant dans le menu Passagers.",
    "airportRequired": "Choisissez un aéroport proposé ou saisissez son code IATA, par exemple CDG.",
    "invalidFlight": "Vérifiez les aéroports et l’ordre des dates."
  },
  en: {
    "hotelSearch": "Search",
    "placePlaceholder": "City, region or hotel",
    "flightSearch": "Search flights",
    "airportPlaceholder": "City or IATA code",
    "chooseDates": "Choose a suggested destination and your dates.",
    "checkGuests": "Please check your guests and rooms.",
    "searchFailed": "Search could not complete. Try again or open the booking engine.",
    "engineFailed": "The search engine could not load.",
    "childAgeRequired": "Enter each child’s age in the Passengers menu.",
    "airportRequired": "Choose a suggested airport or enter its IATA code, for example CDG.",
    "invalidFlight": "Check the airports and date order."
  },
  de: {
    "hotelSearch": "Suchen",
    "placePlaceholder": "Stadt, Region oder Hotel",
    "flightSearch": "Flüge suchen",
    "airportPlaceholder": "Stadt oder IATA-Code",
    "chooseDates": "Wählen Sie einen vorgeschlagenen Ort und Ihre Reisedaten.",
    "checkGuests": "Prüfen Sie die Gäste und Zimmer.",
    "searchFailed": "Die Suche ist fehlgeschlagen. Versuchen Sie es erneut oder öffnen Sie die Buchungsseite.",
    "engineFailed": "Die Suchfunktion konnte nicht geladen werden.",
    "childAgeRequired": "Geben Sie das Alter jedes Kindes unter Reisende an.",
    "airportRequired": "Wählen Sie einen vorgeschlagenen Flughafen oder geben Sie den IATA-Code ein, z. B. CDG.",
    "invalidFlight": "Prüfen Sie die Flughäfen und die Reihenfolge der Reisedaten."
  },
  tr: {
    "hotelSearch": "Ara",
    "placePlaceholder": "Şehir, bölge veya otel",
    "flightSearch": "Uçuş ara",
    "airportPlaceholder": "Şehir veya IATA kodu",
    "chooseDates": "Önerilen bir destinasyonu ve tarihlerinizi seçin.",
    "checkGuests": "Misafirleri ve odaları kontrol edin.",
    "searchFailed": "Arama tamamlanamadı. Tekrar deneyin veya rezervasyon sayfasını açın.",
    "engineFailed": "Arama motoru yüklenemedi.",
    "childAgeRequired": "Yolcular menüsünde her çocuğun yaşını belirtin.",
    "airportRequired": "Önerilen bir havalimanını seçin veya CDG gibi IATA kodunu girin.",
    "invalidFlight": "Havalimanlarını ve tarihlerin sırasını kontrol edin."
  },
  es: {
    "hotelSearch": "Buscar",
    "placePlaceholder": "Ciudad, región u hotel",
    "flightSearch": "Buscar vuelos",
    "airportPlaceholder": "Ciudad o código IATA",
    "chooseDates": "Elige un destino sugerido y tus fechas.",
    "checkGuests": "Revisa los huéspedes y las habitaciones.",
    "searchFailed": "No se pudo completar la búsqueda. Inténtalo de nuevo o abre la página de reservas.",
    "engineFailed": "No se pudo cargar el buscador.",
    "childAgeRequired": "Indica la edad de cada niño en el menú de pasajeros.",
    "airportRequired": "Elige un aeropuerto sugerido o introduce su código IATA, por ejemplo CDG.",
    "invalidFlight": "Revisa los aeropuertos y el orden de las fechas."
  },
  it: {
    "hotelSearch": "Cerca",
    "placePlaceholder": "Città, regione o hotel",
    "flightSearch": "Cerca voli",
    "airportPlaceholder": "Città o codice IATA",
    "chooseDates": "Scegli una destinazione suggerita e le date.",
    "checkGuests": "Controlla gli ospiti e le camere.",
    "searchFailed": "La ricerca non è riuscita. Riprova o apri la pagina di prenotazione.",
    "engineFailed": "Impossibile caricare il motore di ricerca.",
    "childAgeRequired": "Indica l’età di ogni bambino nel menu passeggeri.",
    "airportRequired": "Scegli un aeroporto suggerito o inserisci il codice IATA, ad esempio CDG.",
    "invalidFlight": "Controlla gli aeroporti e l’ordine delle date."
  },
  pt: {
    "hotelSearch": "Pesquisar",
    "placePlaceholder": "Cidade, região ou hotel",
    "flightSearch": "Pesquisar voos",
    "airportPlaceholder": "Cidade ou código IATA",
    "chooseDates": "Escolha um destino sugerido e as datas.",
    "checkGuests": "Confira os hóspedes e os quartos.",
    "searchFailed": "Não foi possível concluir a pesquisa. Tente novamente ou abra a página de reservas.",
    "engineFailed": "Não foi possível carregar o mecanismo de pesquisa.",
    "childAgeRequired": "Informe a idade de cada criança no menu de passageiros.",
    "airportRequired": "Escolha um aeroporto sugerido ou digite o código IATA, por exemplo CDG.",
    "invalidFlight": "Confira os aeroportos e a ordem das datas."
  },
  ru: {
    "hotelSearch": "Найти",
    "placePlaceholder": "Город, регион или отель",
    "flightSearch": "Найти авиабилеты",
    "airportPlaceholder": "Город или код IATA",
    "chooseDates": "Выберите направление из подсказок и даты.",
    "checkGuests": "Проверьте гостей и номера.",
    "searchFailed": "Не удалось выполнить поиск. Повторите попытку или откройте страницу бронирования.",
    "engineFailed": "Не удалось загрузить поиск.",
    "childAgeRequired": "Укажите возраст каждого ребёнка в меню пассажиров.",
    "airportRequired": "Выберите аэропорт из подсказок или введите код IATA, например CDG.",
    "invalidFlight": "Проверьте аэропорты и порядок дат."
  },
  ar: {
    "hotelSearch": "بحث",
    "placePlaceholder": "مدينة أو منطقة أو فندق",
    "flightSearch": "البحث عن رحلات",
    "airportPlaceholder": "مدينة أو رمز IATA",
    "chooseDates": "اختر وجهة من الاقتراحات وتواريخ السفر.",
    "checkGuests": "تحقّق من الضيوف والغرف.",
    "searchFailed": "تعذّر إكمال البحث. حاول مجددًا أو افتح صفحة الحجز.",
    "engineFailed": "تعذّر تحميل محرك البحث.",
    "childAgeRequired": "حدّد عمر كل طفل في قائمة المسافرين.",
    "airportRequired": "اختر مطارًا من الاقتراحات أو أدخل رمز IATA مثل CDG.",
    "invalidFlight": "تحقّق من المطارات وترتيب التواريخ."
  },
  zh: {
    "hotelSearch": "搜索",
    "placePlaceholder": "城市、地区或酒店",
    "flightSearch": "搜索航班",
    "airportPlaceholder": "城市或 IATA 代码",
    "chooseDates": "请选择建议中的目的地和出行日期。",
    "checkGuests": "请检查旅客人数和房间。",
    "searchFailed": "搜索未完成，请重试或打开预订页面。",
    "engineFailed": "无法加载搜索。",
    "childAgeRequired": "请在旅客菜单中填写每位儿童的年龄。",
    "airportRequired": "请选择建议中的机场或输入 IATA 代码，例如 CDG。",
    "invalidFlight": "请检查机场和日期顺序。"
  },
};
