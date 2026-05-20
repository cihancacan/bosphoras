import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, CreditCard, Plane, ShieldCheck } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { TransferBookingClient } from '@/components/TransferBookingClient';
import { TransferHeaderSlogan } from '@/components/TransferHeaderSlogan';
import { buildMetadata, breadcrumbSchema, faqSchema, serviceSchema, organizationSchema, websiteSchema } from '@/lib/seo';
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
  ctaSecondary: string;
  cards: Array<{ title: string; text: string }>;
  seoEyebrow: string;
  seoTitle: string;
  seoItems: string[];
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
};

export const transferConfigs: Record<Locale, TransferPageConfig> = {
  fr: {
    locale: 'fr',
    path: '/transferts-istanbul',
    title: 'Transfert privé aéroport Istanbul | Chauffeur privé Bosphoras',
    description: 'Réservez un transfert privé à Istanbul avec chauffeur, suivi de vol, accueil aéroport, Mercedes Classe E, Classe S, Viano VIP ou Sprinter VIP. Paiement carte et confirmation immédiate.',
    eyebrow: 'Bosphoras Private Mobility',
    h1: 'Transfert privé à Istanbul avec chauffeur',
    intro: 'Réservez en ligne votre transfert aéroport, votre chauffeur privé ou votre véhicule à l’heure. Paiement par carte, confirmation immédiate, suivi de vol inclus et coordination Bosphoras.',
    ctaPrimary: 'Réserver maintenant',
    ctaSecondary: 'Services Bosphoras',
    cards: [
      { title: 'Confirmation immédiate', text: 'Réservation validée après paiement carte.' },
      { title: 'Minimum 2h avant', text: 'Réservez votre prise en charge à l’avance.' },
      { title: 'Suivi de vol inclus', text: 'Accueil aéroport et suivi de l’arrivée.' },
      { title: 'Service Bosphoras', text: 'Véhicules premium et coordination privée.' },
    ],
    seoEyebrow: 'SEO & service privé',
    seoTitle: 'Airport transfer, chauffeur privé, VIP mobility.',
    seoItems: [
      'Transfert aéroport Istanbul vers hôtel, résidence, marina, restaurant ou rendez-vous d’affaires.',
      'Chauffeur privé à Istanbul à l’heure pour shopping, réunions, visites privées ou événements.',
      'Mercedes Classe E, Classe S, Viano VIP et Sprinter VIP selon nombre de passagers et bagages.',
      'Paiement sécurisé par carte, confirmation immédiate et service coordonné par Bosphoras.',
    ],
    faqTitle: 'Avant de réserver votre transfert.',
    faqs: [
      { question: 'Peut-on réserver un transfert privé à Istanbul en ligne ?', answer: 'Oui. Bosphoras Private Mobility permet de réserver un transfert privé à Istanbul, un chauffeur à l’heure ou un accueil aéroport avec paiement par carte et confirmation immédiate après paiement.' },
      { question: 'Combien de temps à l’avance faut-il réserver ?', answer: 'La réservation est possible au minimum 2 heures avant la prise en charge, sous réserve de disponibilité opérationnelle.' },
      { question: 'Quels véhicules sont disponibles ?', answer: 'Les véhicules proposés sont Mercedes Classe E ou équivalent, Mercedes Classe S ou équivalent, Mercedes Viano VIP pour 6 à 7 personnes et Mercedes Sprinter VIP jusqu’à 12 personnes.' },
      { question: 'Comment le prix est-il calculé ?', answer: 'Pour les transferts, le prix est calculé selon la durée estimée du trajet avec un minimum d’une heure, puis par tranche de 30 minutes engagées. Pour les réservations à l’heure, les deux premières heures sont au tarif standard puis les heures suivantes bénéficient de 20% de réduction.' },
      { question: 'Le suivi de vol est-il inclus ?', answer: 'Oui. Pour les transferts aéroport, le suivi du vol et l’accueil à l’aéroport sont inclus lorsque le numéro de vol est renseigné.' },
      { question: 'Le paiement peut-il se faire en espèces au chauffeur ?', answer: 'Non. Les réservations Bosphoras Private Mobility sont confirmées uniquement après paiement sécurisé par carte bancaire.' },
    ],
  },
  en: {
    locale: 'en',
    path: '/en/istanbul-airport-transfer',
    title: 'Istanbul Airport Transfer | Private Chauffeur Bosphoras',
    description: 'Book a private airport transfer in Istanbul with chauffeur, flight tracking, airport meet and greet, Mercedes E-Class, S-Class, Viano VIP or Sprinter VIP. Card payment and instant confirmation.',
    eyebrow: 'Bosphoras Private Mobility',
    h1: 'Private airport transfer in Istanbul',
    intro: 'Book your Istanbul airport transfer, hourly chauffeur or private vehicle online. Card payment, instant confirmation, flight tracking included and Bosphoras coordination.',
    ctaPrimary: 'Book now',
    ctaSecondary: 'Bosphoras services',
    cards: [
      { title: 'Instant confirmation', text: 'Reservation confirmed after card payment.' },
      { title: 'Minimum 2h before', text: 'Book your pickup in advance.' },
      { title: 'Flight tracking included', text: 'Airport greeting and arrival tracking.' },
      { title: 'Bosphoras service', text: 'Premium vehicles and private coordination.' },
    ],
    seoEyebrow: 'SEO & private service',
    seoTitle: 'Airport transfer, private chauffeur, VIP mobility.',
    seoItems: [
      'Istanbul airport transfer to hotel, residence, marina, restaurant or business appointment.',
      'Private chauffeur in Istanbul by the hour for shopping, meetings, private visits or events.',
      'Mercedes E-Class, S-Class, Viano VIP and Sprinter VIP depending on passengers and luggage.',
      'Secure card payment, instant confirmation and service coordinated by Bosphoras.',
    ],
    faqTitle: 'Before booking your transfer.',
    faqs: [
      { question: 'Can I book a private airport transfer in Istanbul online?', answer: 'Yes. Bosphoras Private Mobility lets you book a private Istanbul transfer, an hourly chauffeur or an airport meet and greet with card payment and instant confirmation after payment.' },
      { question: 'How far in advance should I book?', answer: 'Bookings are available at least 2 hours before pickup, subject to operational availability.' },
      { question: 'Which vehicles are available?', answer: 'Available vehicles include Mercedes E-Class or similar, Mercedes S-Class or similar, Mercedes Viano VIP for 6 to 7 passengers and Mercedes Sprinter VIP up to 12 passengers.' },
      { question: 'How is the price calculated?', answer: 'For transfers, the price is calculated according to the estimated journey time with a minimum of one hour, then by each started 30-minute period. For hourly bookings, the first two hours are billed at the standard rate, then the following hours receive a 20% discount.' },
      { question: 'Is flight tracking included?', answer: 'Yes. For airport transfers, flight tracking and airport greeting are included when the flight number is provided.' },
      { question: 'Can I pay cash to the driver?', answer: 'No. Bosphoras Private Mobility bookings are confirmed only after secure card payment.' },
    ],
  },
  ru: {
    locale: 'ru',
    path: '/ru/transfer-aeroport-stambul',
    title: 'Трансфер из аэропорта Стамбула | Личный водитель Bosphoras',
    description: 'Забронируйте частный трансфер в Стамбуле с водителем, отслеживанием рейса, встречей в аэропорту, Mercedes E-Class, S-Class, Viano VIP или Sprinter VIP. Оплата картой и мгновенное подтверждение.',
    eyebrow: 'Bosphoras Private Mobility',
    h1: 'Частный трансфер в Стамбуле с водителем',
    intro: 'Забронируйте трансфер из аэропорта Стамбула, личного водителя по часам или премиальный автомобиль онлайн. Оплата картой, мгновенное подтверждение, отслеживание рейса и координация Bosphoras.',
    ctaPrimary: 'Забронировать сейчас',
    ctaSecondary: 'Услуги Bosphoras',
    cards: [
      { title: 'Мгновенное подтверждение', text: 'Бронирование подтверждается после оплаты картой.' },
      { title: 'Минимум за 2 часа', text: 'Бронируйте подачу автомобиля заранее.' },
      { title: 'Отслеживание рейса', text: 'Встреча в аэропорту и контроль прибытия.' },
      { title: 'Сервис Bosphoras', text: 'Премиальные автомобили и частная координация.' },
    ],
    seoEyebrow: 'SEO & частный сервис',
    seoTitle: 'Airport transfer, личный водитель, VIP mobility.',
    seoItems: [
      'Трансфер из аэропорта Стамбула в отель, резиденцию, марину, ресторан или на деловую встречу.',
      'Личный водитель в Стамбуле по часам для шопинга, встреч, частных поездок или мероприятий.',
      'Mercedes E-Class, S-Class, Viano VIP и Sprinter VIP в зависимости от пассажиров и багажа.',
      'Безопасная оплата картой, мгновенное подтверждение и сервис под координацией Bosphoras.',
    ],
    faqTitle: 'Перед бронированием трансфера.',
    faqs: [
      { question: 'Можно ли забронировать частный трансфер в Стамбуле онлайн?', answer: 'Да. Bosphoras Private Mobility позволяет забронировать частный трансфер в Стамбуле, водителя по часам или встречу в аэропорту с оплатой картой и мгновенным подтверждением после оплаты.' },
      { question: 'За сколько времени нужно бронировать?', answer: 'Бронирование возможно минимум за 2 часа до подачи автомобиля, при наличии операционной доступности.' },
      { question: 'Какие автомобили доступны?', answer: 'Доступны Mercedes E-Class или аналог, Mercedes S-Class или аналог, Mercedes Viano VIP на 6–7 пассажиров и Mercedes Sprinter VIP до 12 пассажиров.' },
      { question: 'Как рассчитывается цена?', answer: 'Для трансфера цена рассчитывается по предполагаемому времени поездки: минимум один час, затем каждые начатые 30 минут. Для почасовой аренды первые два часа оплачиваются по стандартному тарифу, затем действует скидка 20%.' },
      { question: 'Включено ли отслеживание рейса?', answer: 'Да. Для трансфера из аэропорта отслеживание рейса и встреча включены, если указан номер рейса.' },
      { question: 'Можно ли оплатить наличными водителю?', answer: 'Нет. Бронирования Bosphoras Private Mobility подтверждаются только после безопасной оплаты картой.' },
    ],
  },
  ar: {
    locale: 'ar',
    path: '/ar/istanbul-airport-transfer',
    title: 'خدمة نقل مطار إسطنبول | سائق خاص Bosphoras',
    description: 'احجز خدمة نقل خاصة في إسطنبول مع سائق، تتبع الرحلة، استقبال في المطار، Mercedes E-Class أو S-Class أو Viano VIP أو Sprinter VIP. الدفع بالبطاقة وتأكيد فوري.',
    eyebrow: 'Bosphoras Private Mobility',
    h1: 'خدمة نقل خاصة في إسطنبول مع سائق',
    intro: 'احجز نقل المطار في إسطنبول أو سائقاً خاصاً بالساعة أو سيارة فاخرة عبر الإنترنت. دفع بالبطاقة، تأكيد فوري، تتبع الرحلة وتنسيق Bosphoras.',
    ctaPrimary: 'احجز الآن',
    ctaSecondary: 'خدمات Bosphoras',
    cards: [
      { title: 'تأكيد فوري', text: 'يتم تأكيد الحجز بعد الدفع بالبطاقة.' },
      { title: 'قبل ساعتين على الأقل', text: 'احجز موعد الاستلام مسبقاً.' },
      { title: 'تتبع الرحلة مشمول', text: 'استقبال في المطار ومتابعة الوصول.' },
      { title: 'خدمة Bosphoras', text: 'سيارات فاخرة وتنسيق خاص.' },
    ],
    seoEyebrow: 'SEO & private service',
    seoTitle: 'Airport transfer, private chauffeur, VIP mobility.',
    seoItems: [
      'نقل من مطار إسطنبول إلى الفندق أو السكن أو المارينا أو المطعم أو موعد العمل.',
      'سائق خاص في إسطنبول بالساعة للتسوق أو الاجتماعات أو الزيارات الخاصة أو الفعاليات.',
      'Mercedes E-Class و S-Class و Viano VIP و Sprinter VIP حسب عدد الركاب والأمتعة.',
      'دفع آمن بالبطاقة، تأكيد فوري وخدمة منسقة من Bosphoras.',
    ],
    faqTitle: 'قبل حجز خدمة النقل.',
    faqs: [
      { question: 'هل يمكن حجز نقل خاص في إسطنبول عبر الإنترنت؟', answer: 'نعم. تتيح Bosphoras Private Mobility حجز نقل خاص في إسطنبول أو سائق بالساعة أو استقبال في المطار مع الدفع بالبطاقة والتأكيد الفوري بعد الدفع.' },
      { question: 'كم من الوقت يجب الحجز مسبقاً؟', answer: 'يمكن الحجز قبل موعد الاستلام بساعتين على الأقل، حسب التوفر التشغيلي.' },
      { question: 'ما السيارات المتاحة؟', answer: 'السيارات المتاحة تشمل Mercedes E-Class أو ما يعادلها، Mercedes S-Class أو ما يعادلها، Mercedes Viano VIP من 6 إلى 7 ركاب و Mercedes Sprinter VIP حتى 12 راكباً.' },
      { question: 'كيف يتم احتساب السعر؟', answer: 'بالنسبة للنقل، يتم احتساب السعر حسب مدة الرحلة المقدرة مع حد أدنى ساعة واحدة، ثم كل 30 دقيقة بدأت. بالنسبة للحجز بالساعة، أول ساعتين بالسعر القياسي ثم خصم 20% على الساعات التالية.' },
      { question: 'هل تتبع الرحلة مشمول؟', answer: 'نعم. بالنسبة لنقل المطار، يتم تضمين تتبع الرحلة والاستقبال في المطار عند إدخال رقم الرحلة.' },
      { question: 'هل يمكن الدفع نقداً للسائق؟', answer: 'لا. يتم تأكيد حجوزات Bosphoras Private Mobility فقط بعد الدفع الآمن بالبطاقة.' },
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
      <main className="bg-[#f8f1e7] text-[#121826]" dir={isRtl ? 'rtl' : 'ltr'}>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_82%_14%,rgba(196,151,84,0.22),transparent_28%),linear-gradient(135deg,#101827_0%,#1d2940_52%,#101827_100%)] px-5 pb-16 pt-32 text-[#fffaf0] md:px-8 md:pb-24 md:pt-40">
          <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: 'linear-gradient(#d2a863 1px, transparent 1px), linear-gradient(90deg, #d2a863 1px, transparent 1px)', backgroundSize: '78px 78px' }} />
          <div className="container-editorial relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#d2a863]">{config.eyebrow}</p>
              <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.02] tracking-[-0.055em] md:text-7xl">{config.h1}</h1>
              <p className="mt-8 max-w-3xl text-base leading-8 text-[#d8cfbf] md:text-xl md:leading-10">{config.intro}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#reservation" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827] transition hover:bg-[#e0bc78]">{config.ctaPrimary}<ArrowRight size={15} /></a>
                <Link href={locale === 'fr' ? '/services' : `/${locale}/services`} className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863] transition hover:bg-white/5">{config.ctaSecondary}</Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {config.cards.map((card, index) => {
                const icons = [CreditCard, Clock, Plane, ShieldCheck];
                const Icon = icons[index] ?? ShieldCheck;
                return <article key={card.title} className="border border-[#d2a863]/25 bg-white/[0.035] p-6 backdrop-blur"><Icon className="mb-6 h-7 w-7 text-[#d2a863]" strokeWidth={1.4} /><h2 className="font-serif text-2xl text-white">{card.title}</h2><p className="mt-3 text-sm leading-7 text-[#d8cfbf]">{card.text}</p></article>;
              })}
            </div>
          </div>
        </section>

        <section id="reservation">
          <TransferBookingClient locale={locale} />
        </section>

        <section className="bg-[#fffaf0] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">{config.seoEyebrow}</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">{config.seoTitle}</h2>
            </div>
            <div className="grid gap-4 text-base leading-8 text-[#3e4857] md:grid-cols-2">
              {config.seoItems.map((item) => <div key={item} className="border border-[#d8c7a1] bg-white p-6"><CheckCircle2 className="mb-5 h-6 w-6 text-[#8a6728]" /><p>{item}</p></div>)}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">FAQ</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] md:text-6xl">{config.faqTitle}</h2>
            <div className="mt-10 grid gap-px bg-[#d8c7a1] md:grid-cols-2">
              {config.faqs.map((faq) => <article key={faq.question} className="bg-[#f8f1e7] p-8"><h3 className="font-serif text-2xl leading-snug text-[#121826]">{faq.question}</h3><p className="mt-4 text-base leading-8 text-[#3e4857]">{faq.answer}</p></article>)}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
