import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { StructuredData } from '@/components/StructuredData';
import { TransferBookingClient } from '@/components/TransferBookingClient';
import { TransferQuoteEnhancer } from '@/components/TransferQuoteEnhancer';
import { TransferCheckoutEnhancer } from '@/components/TransferCheckoutEnhancer';
import { TransferOnlyHeader } from '@/components/TransferOnlyHeader';
import { TransferOnlyFooter } from '@/components/TransferOnlyFooter';
import { buildMetadata, breadcrumbSchema, faqSchema, organizationSchema, serviceSchema, websiteSchema } from '@/lib/seo';
import { siteUrl } from '@/lib/routes';

const paths: Record<Locale, string> = {
  fr: '/transferts-istanbul',
  en: '/en/istanbul-airport-transfer',
  ru: '/ru/transfer-aeroport-stambul',
  ar: '/ar/istanbul-airport-transfer',
};

const extendedAlternates = {
  fr: `${siteUrl}/transferts-istanbul`,
  en: `${siteUrl}/en/istanbul-airport-transfer`,
  ru: `${siteUrl}/ru/transfer-aeroport-stambul`,
  ar: `${siteUrl}/ar/istanbul-airport-transfer`,
  zh: `${siteUrl}/zh/istanbul-airport-transfer`,
  de: `${siteUrl}/de/flughafentransfer-istanbul`,
  es: `${siteUrl}/es/traslado-aeropuerto-estambul`,
  it: `${siteUrl}/it/transfer-aeroporto-istanbul`,
  pt: `${siteUrl}/pt/transfer-aeroporto-istambul`,
};

const titles: Record<Locale, string> = {
  fr: 'Transfert privé aéroport Istanbul | Réservation chauffeur privé',
  en: 'Istanbul Airport Transfer | Private Chauffeur Booking',
  ru: 'Трансфер из аэропорта Стамбула | Бронирование личного водителя',
  ar: 'Istanbul Airport Transfer | Private Chauffeur Booking',
};

const descriptions: Record<Locale, string> = {
  fr: 'Réservez votre transfert privé à Istanbul avec chauffeur, suivi de vol, accueil aéroport, Mercedes Classe E, Classe S, Viano VIP ou Sprinter VIP. Paiement carte et confirmation immédiate.',
  en: 'Book your private Istanbul airport transfer with chauffeur, flight tracking, airport meet and greet, Mercedes E-Class, S-Class, Viano VIP or Sprinter VIP. Card payment and instant confirmation.',
  ru: 'Забронируйте частный трансфер в Стамбуле с водителем, отслеживанием рейса, встречей в аэропорту и оплатой картой.',
  ar: 'Book a private airport transfer in Istanbul with chauffeur, flight tracking, premium vehicles, card payment and instant confirmation.',
};

const seoItems: Record<Locale, string[]> = {
  fr: ['Transfert aéroport Istanbul vers hôtel, résidence, marina, restaurant ou rendez-vous d’affaires.', 'Chauffeur privé à Istanbul à l’heure pour shopping, réunions, visites privées ou événements.', 'Mercedes Classe E, Classe S, Viano VIP et Sprinter VIP selon nombre de passagers et bagages.', 'Paiement sécurisé par carte, confirmation immédiate, suivi de vol et accueil aéroport inclus.'],
  en: ['Istanbul airport transfer to hotel, residence, marina, restaurant or business appointment.', 'Private chauffeur in Istanbul by the hour for shopping, meetings, private visits or events.', 'Mercedes E-Class, S-Class, Viano VIP and Sprinter VIP depending on passengers and luggage.', 'Secure card payment, instant confirmation, flight tracking and airport greeting included.'],
  ru: ['Трансфер из аэропорта Стамбула в отель, резиденцию, марину, ресторан или на деловую встречу.', 'Личный водитель в Стамбуле по часам для шопинга, встреч, частных поездок или мероприятий.', 'Mercedes E-Class, S-Class, Viano VIP и Sprinter VIP в зависимости от пассажиров и багажа.', 'Оплата картой, мгновенное подтверждение, отслеживание рейса и встреча в аэропорту включены.'],
  ar: ['Istanbul airport transfer to hotel, residence, marina, restaurant or business appointment.', 'Private chauffeur in Istanbul by the hour for shopping, meetings, private visits or events.', 'Mercedes E-Class, S-Class, Viano VIP and Sprinter VIP depending on passengers and luggage.', 'Secure card payment, instant confirmation, flight tracking and airport greeting included.'],
};

const faqs = [
  { question: 'Can I book a private airport transfer online?', answer: 'Yes. Choose your route, vehicle and options, then confirm by card payment.' },
  { question: 'How far in advance should I book?', answer: 'Bookings are available at least 2 hours before pickup, subject to operational availability.' },
  { question: 'Which vehicles are available?', answer: 'Mercedes E-Class, Mercedes S-Class, Mercedes Viano VIP and Mercedes Sprinter VIP.' },
  { question: 'How is the price calculated?', answer: 'Transfers use a one-hour minimum, then each started 30-minute period. Hourly bookings get 20% off after the first two hours.' },
];

export function buildTransferMetadata(locale: Locale): Metadata {
  return buildMetadata({
    locale,
    path: paths[locale],
    title: titles[locale],
    description: descriptions[locale],
    alternates: extendedAlternates,
  });
}

export function IstanbulTransferPageShell({ locale }: { locale: Locale }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: titles[locale],
    serviceType: ['Istanbul airport transfer', 'Private chauffeur Istanbul', 'VIP transfer Istanbul', 'Hourly chauffeur Istanbul', 'IST airport transfer', 'SAW airport transfer'],
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
        <section id="airports" className="bg-white px-5 py-12 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1180px] rounded-[2rem] border border-[#e5e7eb] bg-[#fafafa] p-6 md:p-10">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.20em] text-[#6b7280]">SEO / AI friendly</p>
            <h2 className="max-w-4xl text-3xl font-black tracking-[-0.04em] text-[#111827] md:text-5xl">{locale === 'fr' ? 'Transfert aéroport Istanbul, chauffeur privé et réservation à l’heure.' : 'Istanbul airport transfer, private chauffeur and hourly booking.'}</h2>
            <div className="mt-8 grid gap-3 text-base leading-7 text-[#374151] md:grid-cols-2">
              {seoItems[locale].map((item) => <div key={item} className="rounded-3xl border border-[#e5e7eb] bg-white p-5"><CheckCircle2 className="mb-4 h-5 w-5 text-[#111827]" /><p>{item}</p></div>)}
            </div>
          </div>
        </section>
        <section id="transfer-faq" className="bg-white px-5 pb-16 md:px-8 md:pb-24">
          <div className="mx-auto max-w-[1180px]">
            <h2 className="text-3xl font-black tracking-[-0.04em] text-[#111827] md:text-5xl">FAQ</h2>
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
