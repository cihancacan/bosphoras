import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, CreditCard, Plane, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { TransferBookingClient } from '@/components/TransferBookingClient';
import { buildMetadata, breadcrumbSchema, faqSchema, serviceSchema, organizationSchema, websiteSchema } from '@/lib/seo';
import { siteUrl } from '@/lib/routes';

const locale = 'fr' as const;
const path = '/transferts-istanbul';

const faqs = [
  {
    question: 'Peut-on réserver un transfert privé à Istanbul en ligne ?',
    answer: 'Oui. Bosphoras Private Mobility permet de réserver un transfert privé à Istanbul, un chauffeur à l’heure ou un accueil aéroport avec paiement par carte et confirmation immédiate après paiement.',
  },
  {
    question: 'Combien de temps à l’avance faut-il réserver ?',
    answer: 'La réservation est possible au minimum 2 heures avant la prise en charge, sous réserve de disponibilité opérationnelle.',
  },
  {
    question: 'Quels véhicules sont disponibles ?',
    answer: 'Les véhicules proposés sont Mercedes Classe E ou équivalent, Mercedes Classe S ou équivalent, Mercedes Viano VIP pour 6 à 7 personnes et Mercedes Sprinter VIP jusqu’à 12 personnes.',
  },
  {
    question: 'Comment le prix est-il calculé ?',
    answer: 'Pour les transferts, le prix est calculé selon la durée estimée du trajet avec un minimum d’une heure, puis par tranche de 30 minutes engagées. Pour les réservations à l’heure, les deux premières heures sont au tarif standard puis les heures suivantes bénéficient de 20% de réduction.',
  },
  {
    question: 'Le suivi de vol est-il inclus ?',
    answer: 'Oui. Pour les transferts aéroport, le suivi du vol et l’accueil à l’aéroport sont inclus lorsque le numéro de vol est renseigné.',
  },
  {
    question: 'Le paiement peut-il se faire en espèces au chauffeur ?',
    answer: 'Non. Les réservations Bosphoras Private Mobility sont confirmées uniquement après paiement sécurisé par carte bancaire.',
  },
];

const mobilitySchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bosphoras Private Mobility - Transfert privé aéroport Istanbul',
  serviceType: ['Istanbul airport transfer', 'Private chauffeur Istanbul', 'VIP transfer Istanbul', 'Hourly chauffeur Istanbul'],
  description: 'Réservation immédiate de transferts privés à Istanbul avec chauffeur, Mercedes Classe E, Classe S, Viano VIP ou Sprinter VIP, suivi de vol, accueil aéroport et paiement par carte.',
  url: `${siteUrl}${path}`,
  provider: {
    '@type': 'ProfessionalService',
    name: 'Bosphoras',
    url: siteUrl,
  },
  areaServed: [
    { '@type': 'City', name: 'Istanbul' },
    { '@type': 'Airport', name: 'Istanbul Airport IST' },
    { '@type': 'Airport', name: 'Sabiha Gökçen International Airport SAW' },
  ],
  offers: [
    { '@type': 'Offer', name: 'Mercedes Classe E ou équivalent', priceCurrency: 'EUR', price: '250', unitText: 'hour', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: 'Mercedes Classe S ou équivalent', priceCurrency: 'EUR', price: '400', unitText: 'hour', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: 'Mercedes Viano VIP', priceCurrency: 'EUR', price: '150', unitText: 'hour', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: 'Mercedes Sprinter VIP', priceCurrency: 'EUR', price: '200', unitText: 'hour', availability: 'https://schema.org/InStock' },
  ],
};

export const metadata: Metadata = buildMetadata({
  locale,
  path,
  title: 'Transfert privé aéroport Istanbul | Chauffeur privé Bosphoras',
  description: 'Réservez un transfert privé à Istanbul avec chauffeur, suivi de vol, accueil aéroport, Mercedes Classe E, Classe S, Viano VIP ou Sprinter VIP. Paiement carte et confirmation immédiate.',
  alternates: {
    fr: `${siteUrl}/transferts-istanbul`,
    en: `${siteUrl}/en/istanbul-airport-transfer`,
    ru: `${siteUrl}/ru/transfer-aeroport-stambul`,
    ar: `${siteUrl}/ar/istanbul-airport-transfer`,
  },
});

export default function IstanbulTransfersPage() {
  return (
    <>
      <StructuredData data={[organizationSchema(), websiteSchema(), serviceSchema({ name: 'Transfert privé aéroport Istanbul', description: 'Transfert privé à Istanbul, chauffeur à l’heure, accueil aéroport et véhicules premium avec Bosphoras Private Mobility.', url: `${siteUrl}${path}` }), mobilitySchema, faqSchema(faqs), breadcrumbSchema([{ name: 'Bosphoras', url: siteUrl }, { name: 'Transferts Istanbul', url: `${siteUrl}${path}` }])]} />
      <Header locale={locale} currentPath={path} />
      <main className="bg-[#f8f1e7] text-[#121826]">
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_82%_14%,rgba(196,151,84,0.22),transparent_28%),linear-gradient(135deg,#101827_0%,#1d2940_52%,#101827_100%)] px-5 pb-16 pt-32 text-[#fffaf0] md:px-8 md:pb-24 md:pt-40">
          <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: 'linear-gradient(#d2a863 1px, transparent 1px), linear-gradient(90deg, #d2a863 1px, transparent 1px)', backgroundSize: '78px 78px' }} />
          <div className="container-editorial relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#d2a863]">Bosphoras Private Mobility</p>
              <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.02] tracking-[-0.055em] md:text-7xl">Transfert privé à Istanbul avec chauffeur</h1>
              <p className="mt-8 max-w-3xl text-base leading-8 text-[#d8cfbf] md:text-xl md:leading-10">Réservez en ligne votre transfert aéroport, votre chauffeur privé ou votre véhicule à l’heure. Paiement par carte, confirmation immédiate, suivi de vol inclus et coordination Bosphoras.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#reservation" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827] transition hover:bg-[#e0bc78]">Réserver maintenant<ArrowRight size={15} /></a>
                <Link href="/services" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863] transition hover:bg-white/5">Services Bosphoras</Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Confirmation immédiate', 'Réservation validée après paiement carte.', CreditCard],
                ['Minimum 2h avant', 'Réservez votre prise en charge à l’avance.', Clock],
                ['Suivi de vol inclus', 'Accueil aéroport et suivi de l’arrivée.', Plane],
                ['Service Bosphoras', 'Véhicules premium et coordination privée.', ShieldCheck],
              ].map(([title, text, Icon]) => {
                const LucideIcon = Icon as typeof CreditCard;
                return <article key={String(title)} className="border border-[#d2a863]/25 bg-white/[0.035] p-6 backdrop-blur"><LucideIcon className="mb-6 h-7 w-7 text-[#d2a863]" strokeWidth={1.4} /><h2 className="font-serif text-2xl text-white">{String(title)}</h2><p className="mt-3 text-sm leading-7 text-[#d8cfbf]">{String(text)}</p></article>;
              })}
            </div>
          </div>
        </section>

        <section id="reservation">
          <TransferBookingClient />
        </section>

        <section className="bg-[#fffaf0] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">SEO & service privé</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Airport transfer, chauffeur privé, VIP mobility.</h2>
            </div>
            <div className="grid gap-4 text-base leading-8 text-[#3e4857] md:grid-cols-2">
              {[
                'Transfert aéroport Istanbul vers hôtel, résidence, marina, restaurant ou rendez-vous d’affaires.',
                'Chauffeur privé à Istanbul à l’heure pour shopping, réunions, visites privées ou événements.',
                'Mercedes Classe E, Classe S, Viano VIP et Sprinter VIP selon nombre de passagers et bagages.',
                'Paiement sécurisé par carte, confirmation immédiate et service coordonné par Bosphoras.',
              ].map((item) => <div key={item} className="border border-[#d8c7a1] bg-white p-6"><CheckCircle2 className="mb-5 h-6 w-6 text-[#8a6728]" /><p>{item}</p></div>)}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">Questions fréquentes</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] md:text-6xl">Avant de réserver votre transfert.</h2>
            <div className="mt-10 grid gap-px bg-[#d8c7a1] md:grid-cols-2">
              {faqs.map((faq) => <article key={faq.question} className="bg-[#f8f1e7] p-8"><h3 className="font-serif text-2xl leading-snug text-[#121826]">{faq.question}</h3><p className="mt-4 text-base leading-8 text-[#3e4857]">{faq.answer}</p></article>)}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
