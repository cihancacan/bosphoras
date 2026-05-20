import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Clock, CreditCard, Plane, ShieldCheck, Sparkles } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { TransferBookingClient } from '@/components/TransferBookingClient';
import { TransferHeaderSlogan } from '@/components/TransferHeaderSlogan';
import { buildMetadata, breadcrumbSchema, faqSchema, organizationSchema, serviceSchema, websiteSchema } from '@/lib/seo';
import { siteUrl } from '@/lib/routes';

type TransferPageConfig = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  ctaPrimary: string;
  seoTitle: string;
  seoItems: string[];
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
};

export const transferConfigs: Record<Locale, TransferPageConfig> = {
  fr: {
    locale: 'fr',
    path: '/transferts-istanbul',
    title: 'Transfert privé aéroport Istanbul | Réservation chauffeur privé',
    description: 'Réservez votre transfert privé à Istanbul avec chauffeur, suivi de vol, accueil aéroport, Mercedes Classe E, Classe S, Viano VIP ou Sprinter VIP. Paiement carte et confirmation immédiate.',
    eyebrow: 'Réservation transfert Istanbul',
    h1: 'Réservez votre chauffeur privé à Istanbul',
    intro: 'Transfert aéroport, chauffeur à l’heure, véhicule premium et paiement par carte. Choisissez votre trajet, sélectionnez votre voiture, confirmez votre réservation.',
    ctaPrimary: 'Réserver maintenant',
    seoTitle: 'Transfert aéroport Istanbul, chauffeur privé et réservation à l’heure.',
    seoItems: [
      'Transfert aéroport Istanbul vers hôtel, résidence, marina, restaurant ou rendez-vous d’affaires.',
      'Chauffeur privé à Istanbul à l’heure pour shopping, réunions, visites privées ou événements.',
      'Mercedes Classe E, Classe S, Viano VIP et Sprinter VIP selon nombre de passagers et bagages.',
      'Paiement sécurisé par carte, confirmation immédiate, suivi de vol et accueil aéroport inclus.',
    ],
    faqTitle: 'Questions fréquentes avant réservation',
    faqs: [
      { question: 'Peut-on réserver un transfert privé à Istanbul en ligne ?', answer: 'Oui. Vous choisissez votre trajet, votre véhicule, vos options, puis vous confirmez la réservation par carte bancaire.' },
      { question: 'Combien de temps à l’avance faut-il réserver ?', answer: 'La réservation est possible au minimum 2 heures avant la prise en charge, selon disponibilité opérationnelle.' },
      { question: 'Quels véhicules sont disponibles ?', answer: 'Mercedes Classe E ou équivalent, Mercedes Classe S ou équivalent, Mercedes Viano VIP pour 6 à 7 personnes et Mercedes Sprinter VIP jusqu’à 12 personnes.' },
      { question: 'Comment le prix est-il calculé ?', answer: 'Pour un transfert, le prix dépend de la durée estimée du trajet : minimum une heure, puis tranche de 30 minutes engagée. Pour une réservation à l’heure, les deux premières heures sont au tarif normal puis les suivantes bénéficient de 20% de réduction.' },
      { question: 'Le suivi de vol est-il inclus ?', answer: 'Oui. Pour les transferts aéroport, le suivi de vol et l’accueil à l’aéroport sont inclus si le numéro de vol est renseigné.' },
      { question: 'Peut-on payer en espèces ?', answer: 'Non. La confirmation se fait uniquement par paiement sécurisé par carte bancaire.' },
    ],
  },
  en: {
    locale: 'en',
    path: '/en/istanbul-airport-transfer',
    title: 'Istanbul Airport Transfer | Private Chauffeur Booking',
    description: 'Book your private Istanbul airport transfer with chauffeur, flight tracking, airport meet and greet, Mercedes E-Class, S-Class, Viano VIP or Sprinter VIP. Card payment and instant confirmation.',
    eyebrow: 'Istanbul transfer booking',
    h1: 'Book your private chauffeur in Istanbul',
    intro: 'Airport transfer, hourly chauffeur, premium vehicle and card payment. Choose your route, select your car and confirm your booking.',
    ctaPrimary: 'Book now',
    seoTitle: 'Istanbul airport transfer, private chauffeur and hourly booking.',
    seoItems: [
      'Istanbul airport transfer to hotel, residence, marina, restaurant or business appointment.',
      'Private chauffeur in Istanbul by the hour for shopping, meetings, private visits or events.',
      'Mercedes E-Class, S-Class, Viano VIP and Sprinter VIP depending on passengers and luggage.',
      'Secure card payment, instant confirmation, flight tracking and airport greeting included.',
    ],
    faqTitle: 'Frequently asked questions before booking',
    faqs: [
      { question: 'Can I book a private airport transfer in Istanbul online?', answer: 'Yes. Choose your route, vehicle and options, then confirm your booking by card payment.' },
      { question: 'How far in advance should I book?', answer: 'Bookings are available at least 2 hours before pickup, subject to operational availability.' },
      { question: 'Which vehicles are available?', answer: 'Mercedes E-Class or similar, Mercedes S-Class or similar, Mercedes Viano VIP for 6 to 7 passengers and Mercedes Sprinter VIP up to 12 passengers.' },
      { question: 'How is the price calculated?', answer: 'For transfers, the price depends on the estimated journey time: minimum one hour, then each started 30-minute period. For hourly bookings, the first two hours are at the standard rate and the following hours get 20% off.' },
      { question: 'Is flight tracking included?', answer: 'Yes. For airport transfers, flight tracking and airport greeting are included when the flight number is provided.' },
      { question: 'Can I pay cash?', answer: 'No. Bookings are confirmed only by secure card payment.' },
    ],
  },
  ru: {
    locale: 'ru',
    path: '/ru/transfer-aeroport-stambul',
    title: 'Трансфер из аэропорта Стамбула | Бронирование личного водителя',
    description: 'Забронируйте частный трансфер в Стамбуле с водителем, отслеживанием рейса, встречей в аэропорту, Mercedes E-Class, S-Class, Viano VIP или Sprinter VIP. Оплата картой и мгновенное подтверждение.',
    eyebrow: 'Бронирование трансфера в Стамбуле',
    h1: 'Забронируйте личного водителя в Стамбуле',
    intro: 'Трансфер из аэропорта, водитель по часам, премиальный автомобиль и оплата картой. Выберите маршрут, автомобиль и подтвердите бронирование.',
    ctaPrimary: 'Забронировать',
    seoTitle: 'Трансфер из аэропорта Стамбула, личный водитель и почасовое бронирование.',
    seoItems: [
      'Трансфер из аэропорта Стамбула в отель, резиденцию, марину, ресторан или на деловую встречу.',
      'Личный водитель в Стамбуле по часам для шопинга, встреч, частных поездок или мероприятий.',
      'Mercedes E-Class, S-Class, Viano VIP и Sprinter VIP в зависимости от пассажиров и багажа.',
      'Оплата картой, мгновенное подтверждение, отслеживание рейса и встреча в аэропорту включены.',
    ],
    faqTitle: 'Частые вопросы перед бронированием',
    faqs: [
      { question: 'Можно ли забронировать частный трансфер в Стамбуле онлайн?', answer: 'Да. Вы выбираете маршрут, автомобиль и опции, затем подтверждаете бронирование оплатой картой.' },
      { question: 'За сколько времени нужно бронировать?', answer: 'Бронирование возможно минимум за 2 часа до подачи автомобиля, при наличии операционной доступности.' },
      { question: 'Какие автомобили доступны?', answer: 'Mercedes E-Class или аналог, Mercedes S-Class или аналог, Mercedes Viano VIP на 6–7 пассажиров и Mercedes Sprinter VIP до 12 пассажиров.' },
      { question: 'Как рассчитывается цена?', answer: 'Для трансфера цена зависит от предполагаемой длительности поездки: минимум один час, затем каждые начатые 30 минут. Для почасовой аренды первые два часа по стандартному тарифу, следующие часы со скидкой 20%.' },
      { question: 'Включено ли отслеживание рейса?', answer: 'Да. Для трансфера из аэропорта отслеживание рейса и встреча включены, если указан номер рейса.' },
      { question: 'Можно ли оплатить наличными?', answer: 'Нет. Бронирование подтверждается только безопасной оплатой банковской картой.' },
    ],
  },
  ar: {
    locale: 'ar',
    path: '/ar/istanbul-airport-transfer',
    title: 'حجز نقل مطار إسطنبول | سائق خاص',
    description: 'احجز خدمة نقل خاصة في إسطنبول مع سائق، تتبع الرحلة، استقبال في المطار، Mercedes E-Class أو S-Class أو Viano VIP أو Sprinter VIP. الدفع بالبطاقة وتأكيد فوري.',
    eyebrow: 'حجز نقل في إسطنبول',
    h1: 'احجز سائقك الخاص في إسطنبول',
    intro: 'نقل من المطار، سائق بالساعة، سيارة فاخرة ودفع بالبطاقة. اختر المسار والسيارة وأكد الحجز.',
    ctaPrimary: 'احجز الآن',
    seoTitle: 'نقل مطار إسطنبول، سائق خاص وحجز بالساعة.',
    seoItems: [
      'نقل من مطار إسطنبول إلى الفندق أو السكن أو المارينا أو المطعم أو موعد العمل.',
      'سائق خاص في إسطنبول بالساعة للتسوق أو الاجتماعات أو الزيارات الخاصة أو الفعاليات.',
      'Mercedes E-Class و S-Class و Viano VIP و Sprinter VIP حسب عدد الركاب والأمتعة.',
      'دفع آمن بالبطاقة، تأكيد فوري، تتبع الرحلة واستقبال المطار مشمول.',
    ],
    faqTitle: 'أسئلة شائعة قبل الحجز',
    faqs: [
      { question: 'هل يمكن حجز نقل خاص في إسطنبول عبر الإنترنت؟', answer: 'نعم. اختر المسار والسيارة والخيارات ثم أكد الحجز بالدفع بالبطاقة.' },
      { question: 'كم من الوقت يجب الحجز مسبقاً؟', answer: 'يمكن الحجز قبل موعد الاستلام بساعتين على الأقل حسب التوفر التشغيلي.' },
      { question: 'ما السيارات المتاحة؟', answer: 'Mercedes E-Class أو ما يعادلها، Mercedes S-Class أو ما يعادلها، Mercedes Viano VIP من 6 إلى 7 ركاب و Mercedes Sprinter VIP حتى 12 راكباً.' },
      { question: 'كيف يتم احتساب السعر؟', answer: 'بالنسبة للنقل، يعتمد السعر على مدة الرحلة المقدرة: حد أدنى ساعة واحدة ثم كل 30 دقيقة بدأت. للحجز بالساعة، أول ساعتين بالسعر القياسي ثم خصم 20% على الساعات التالية.' },
      { question: 'هل تتبع الرحلة مشمول؟', answer: 'نعم. بالنسبة لنقل المطار، تتبع الرحلة والاستقبال في المطار مشمولان عند إدخال رقم الرحلة.' },
      { question: 'هل يمكن الدفع نقداً؟', answer: 'لا. يتم تأكيد الحجز فقط عن طريق الدفع الآمن بالبطاقة.' },
    ],
  },
};

export function buildTransferMetadata(locale: Locale): Metadata {
  const config = transferConfigs[locale];
  return buildMetadata({
    locale,
    path: config.path,
    title: config.title,
    description: config.description,
    alternates: {
      fr: `${siteUrl}${transferConfigs.fr.path}`,
      en: `${siteUrl}${transferConfigs.en.path}`,
      ru: `${siteUrl}${transferConfigs.ru.path}`,
      ar: `${siteUrl}${transferConfigs.ar.path}`,
    },
  });
}

export function IstanbulTransferPageShell({ locale }: { locale: Locale }) {
  const config = transferConfigs[locale];
  const isRtl = locale === 'ar';
  const mobilitySchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: config.title,
    serviceType: ['Istanbul airport transfer', 'Private chauffeur Istanbul', 'VIP transfer Istanbul', 'Hourly chauffeur Istanbul'],
    description: config.description,
    url: `${siteUrl}${config.path}`,
    provider: { '@type': 'ProfessionalService', name: 'Bosphoras', url: siteUrl },
    areaServed: [
      { '@type': 'City', name: 'Istanbul' },
      { '@type': 'Airport', name: 'Istanbul Airport IST' },
      { '@type': 'Airport', name: 'Sabiha Gökçen International Airport SAW' },
    ],
    offers: [
      { '@type': 'Offer', name: 'Mercedes Classe E or similar', priceCurrency: 'EUR', price: '250', unitText: 'hour', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Mercedes Classe S or similar', priceCurrency: 'EUR', price: '400', unitText: 'hour', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Mercedes Viano VIP', priceCurrency: 'EUR', price: '150', unitText: 'hour', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Mercedes Sprinter VIP', priceCurrency: 'EUR', price: '200', unitText: 'hour', availability: 'https://schema.org/InStock' },
    ],
  };

  return (
    <>
      <StructuredData data={[organizationSchema(), websiteSchema(), serviceSchema({ name: config.title, description: config.description, url: `${siteUrl}${config.path}` }), mobilitySchema, faqSchema(config.faqs), breadcrumbSchema([{ name: 'Bosphoras', url: siteUrl }, { name: config.h1, url: `${siteUrl}${config.path}` }])]} />
      <Header locale={locale} currentPath={config.path} />
      <TransferHeaderSlogan locale={locale} />
      <main className="bg-[#f7f3ec] text-[#121826]" dir={isRtl ? 'rtl' : 'ltr'}>
        <section className="relative overflow-hidden bg-[#f7f3ec] px-4 pb-0 pt-28 md:px-8 md:pt-32">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="relative z-10 py-6 md:py-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8c7a1] bg-white px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#8a6728] shadow-[0_12px_35px_rgba(16,24,39,0.06)]"><Sparkles size={14} />{config.eyebrow}</div>
                <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.06em] text-[#121826] md:text-7xl xl:text-8xl">{config.h1}</h1>
                <p className="mt-7 max-w-2xl text-base leading-8 text-[#4b5565] md:text-xl md:leading-9">{config.intro}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#reservation" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#121826] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_18px_50px_rgba(16,24,39,0.18)] transition hover:-translate-y-0.5 hover:bg-[#263246]">{config.ctaPrimary}<ArrowRight size={15} /></a>
                  <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8c7a1] bg-white px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#4b5565]"><Clock size={15} />2h minimum</span>
                  <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8c7a1] bg-white px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#4b5565]"><CreditCard size={15} />Carte uniquement</span>
                </div>
              </div>

              <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_35px_120px_rgba(16,24,39,0.16)] md:min-h-[560px]">
                <Image src="/images/home.driver.jpg" alt="Private chauffeur Istanbul airport transfer" fill priority className="object-cover" sizes="(min-width: 1024px) 820px, 100vw" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(16,24,39,0.10)_45%,rgba(16,24,39,0.46)_100%)]" />
                <div className="absolute left-5 right-5 top-5 flex flex-wrap gap-2 md:left-8 md:right-8 md:top-8">
                  {['IST Airport', 'SAW Airport', 'Hotel', 'Hourly'].map((item) => <span key={item} className="rounded-full border border-white/35 bg-white/80 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#121826] backdrop-blur">{item}</span>)}
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/20 bg-[#121826]/72 p-5 text-white shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-md md:bottom-8 md:left-8 md:right-8 md:p-6">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#d2a863]">Live booking flow</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div><Plane className="mb-2 h-5 w-5 text-[#d2a863]" /><p className="text-sm font-semibold">Flight tracking</p></div>
                    <div><ShieldCheck className="mb-2 h-5 w-5 text-[#d2a863]" /><p className="text-sm font-semibold">Instant confirmation</p></div>
                    <div><CreditCard className="mb-2 h-5 w-5 text-[#d2a863]" /><p className="text-sm font-semibold">Secure card payment</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reservation" className="relative z-20 -mt-8 md:-mt-14">
          <TransferBookingClient locale={locale} />
        </section>

        <section className="bg-[#fffaf0] px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1500px]">
            <h2 className="font-serif text-3xl leading-tight tracking-[-0.03em] md:text-5xl">{config.seoTitle}</h2>
            <div className="mt-8 grid gap-4 text-base leading-8 text-[#3e4857] md:grid-cols-2 lg:grid-cols-4">
              {config.seoItems.map((item) => <div key={item} className="rounded-[1.25rem] border border-[#d8c7a1] bg-white p-5 shadow-[0_16px_45px_rgba(16,24,39,0.05)]"><CheckCircle2 className="mb-4 h-5 w-5 text-[#8a6728]" /><p>{item}</p></div>)}
            </div>
          </div>
        </section>

        <section className="px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1500px]">
            <h2 className="font-serif text-3xl tracking-[-0.03em] md:text-5xl">{config.faqTitle}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {config.faqs.map((faq) => <article key={faq.question} className="rounded-[1.25rem] border border-[#d8c7a1] bg-[#fffaf0] p-7 shadow-[0_16px_45px_rgba(16,24,39,0.04)]"><h3 className="font-serif text-2xl leading-snug text-[#121826]">{faq.question}</h3><p className="mt-4 text-base leading-8 text-[#3e4857]">{faq.answer}</p></article>)}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
