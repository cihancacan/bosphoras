import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { StructuredData } from '@/components/StructuredData';
import { TransferBookingClient } from '@/components/TransferBookingClient';
import { TransferQuoteEnhancer } from '@/components/TransferQuoteEnhancer';
import { TransferCheckoutEnhancer } from '@/components/TransferCheckoutEnhancer';
import { TransferOnlyHeader } from '@/components/TransferOnlyHeader';
import { TransferOnlyFooter } from '@/components/TransferOnlyFooter';
import { TransferSeoContent } from '@/components/TransferSeoContent';
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
  fr: 'Transfert aéroport Istanbul IST & SAW | Chauffeur privé Istanbul',
  en: 'Istanbul Airport Transfer IST & SAW | Private Chauffeur Istanbul',
  ru: 'Трансфер аэропорт Стамбул IST и SAW | Личный водитель Стамбул',
  ar: 'Istanbul Airport Transfer IST & SAW | Private Chauffeur Istanbul',
};

const descriptions: Record<Locale, string> = {
  fr: 'Réservez un transfert aéroport Istanbul IST ou Sabiha Gökçen SAW avec chauffeur privé, suivi de vol, accueil aéroport, Mercedes Classe E, Classe S, Viano VIP ou Sprinter VIP. Paiement carte et confirmation immédiate.',
  en: 'Book an Istanbul Airport IST or Sabiha Gökçen SAW transfer with private chauffeur, flight tracking, airport meet and greet, Mercedes E-Class, S-Class, Viano VIP or Sprinter VIP. Card payment and instant confirmation.',
  ru: 'Забронируйте трансфер из аэропорта Стамбула IST или SAW с личным водителем, отслеживанием рейса, встречей в аэропорту и оплатой картой.',
  ar: 'Book an Istanbul Airport IST or Sabiha Gökçen SAW transfer with private chauffeur, flight tracking, premium vehicles, card payment and instant confirmation.',
};

const faqs = [
  { question: 'Can I book a private airport transfer online?', answer: 'Yes. Choose your route, vehicle and options, then confirm by card payment.' },
  { question: 'How far in advance should I book?', answer: 'Bookings are available at least 2 hours before pickup, subject to operational availability.' },
  { question: 'Which airports are covered in Istanbul?', answer: 'The booking service covers Istanbul Airport IST and Sabiha Gökçen Airport SAW for private airport transfers, hotel transfers and chauffeur services.' },
  { question: 'Can I book a private chauffeur by the hour in Istanbul?', answer: 'Yes. Hourly chauffeur booking is available for business meetings, shopping, events, restaurants, sightseeing or private appointments in Istanbul.' },
  { question: 'Which vehicles are available?', answer: 'Mercedes E-Class, Mercedes S-Class, Mercedes Viano VIP and Mercedes Sprinter VIP.' },
  { question: 'How is the price calculated?', answer: 'Transfers use a one-hour minimum, then each started 30-minute period. Hourly bookings get 20% off after the first two hours.' },
  { question: 'Is flight tracking included?', answer: 'Yes. When a flight number is provided, the service can include airport greeting and flight tracking for the pickup.' },
  { question: 'Can I pay by card?', answer: 'Yes. The reservation is confirmed online by secure card payment.' },
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
        <TransferSeoContent locale={locale} />
        <section id="transfer-faq" className="bg-white px-5 pb-16 md:px-8 md:pb-24">
          <div className="mx-auto max-w-[1180px]">
            <h2 className="text-3xl font-black tracking-[-0.04em] text-[#111827] md:text-5xl">FAQ transfert aéroport Istanbul</h2>
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
