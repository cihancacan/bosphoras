import { conversionCopy } from '@/data/conversion';
import { HomeHero } from '@/components/HomeHero';
import { HomeProjectPaths, HomeFinalContact } from '@/components/HomeProjectPaths';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Bell, Building2, CalendarDays, Globe, Home, KeyRound, Lock, Plane, Scale, Shield, ShieldCheck } from 'lucide-react';
import { buildMetadata, faqSchema, organizationSchema, websiteSchema } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const locale = 'fr' as const;

const homeFaqs = [
  { question: 'Bosphoras est-il une agence immobilière en Turquie ?', answer: 'Non. Bosphoras est un bureau privé international. L’immobilier peut faire partie du parcours, mais seulement après la stratégie : ville, résidence, fiscalité, avocat, santé, assurance, banque, société, bureaux et niveau de vie recherché.' },
  { question: 'Bosphoras accompagne-t-il les investisseurs étrangers à Istanbul, Bodrum et Antalya ?', answer: 'Oui. Bosphoras coordonne l’installation, les démarches, les services privés et les professionnels sélectionnés à Istanbul, Bodrum et Antalya pour des investisseurs, entrepreneurs, familles et clients internationaux.' },
  { question: 'Bosphoras Private Access est-il une carte de réduction ?', answer: 'Non. Bosphoras Private Access n’est pas une carte de réduction. C’est un accès privé au bureau Bosphoras, aux introductions qualifiées, au traitement prioritaire et à la coordination confidentielle des demandes en Turquie.' },
  { question: 'Peut-on solliciter Bosphoras sans devenir membre ?', answer: 'Oui. L’accompagnement complet Private Desk démarre à partir de 7 500 USD pour une année, ou sur devis personnalisé selon la mission.' },
];

export const metadata: Metadata = buildMetadata({
  locale,
  path: '/',
  title: 'Bosphoras | Bureau privé en Turquie, Istanbul, Bodrum, Antalya',
  description: 'Bosphoras, marque de Panorama Grup, est votre bureau privé en Turquie : avocat, fiscalité, société, comptabilité, santé, assurance, immobilier, bureaux, transport VIP, hôtels, événements et accès privé.',
});

const expertises = [
  { icon: Scale, title: 'Legal & Tax', text: 'Coordination juridique et fiscale avec des professionnels habilités.' },
  { icon: Building2, title: 'Business Setup', text: 'Création de société, comptabilité, bureaux premium et structuration opérationnelle.' },
  { icon: Shield, title: 'Health & Insurance', text: 'Assurance santé, médecins, cliniques privées et parcours familial sécurisé.' },
  { icon: Home, title: 'Property & Relocation', text: 'Immobilier, relocation, installation familiale et gestion de la vie locale.' },
  { icon: Bell, title: 'VIP Hospitality', text: 'Chauffeurs, hôtels, villas, restaurants, événements, yachts et services privés.' },
  { icon: KeyRound, title: 'Private Access', text: 'Adhésion privée sur sélection, accès prioritaire et coordination continue.' },
];

const memberBenefits = [
  { icon: KeyRound, title: 'Accès prioritaire', text: 'Les demandes membres sont traitées avec priorité par le bureau Bosphoras et son réseau.' },
  { icon: ShieldCheck, title: 'Introductions qualifiées', text: 'Avocats, fiscalistes, assureurs, médecins, banquiers privés, agents immobiliers et partenaires sélectionnés.' },
  { icon: Plane, title: 'Conciergerie de luxe', text: 'Coordination voyages, jets privés, hélicoptères, yachts, chauffeurs privés, villas, hôtels et transferts VIP.' },
  { icon: CalendarDays, title: 'Vie privée & accès membres', text: 'Dîners privés, soirées discrètes, activités entre membres, accès prioritaire aux clubs, restaurants, billetterie et adresses sélectionnées.' },
];

const cities = [
  { title: 'Istanbul', subtitle: 'Business · Droit · Fiscalité · Santé privée', text: 'Le cœur économique et juridique de la Turquie : banques, bureaux premium, hôpitaux privés, quartiers internationaux et réseau d’affaires.' },
  { title: 'Bodrum', subtitle: 'Villas · Yachts · Lifestyle discret', text: 'Une destination patrimoniale et confidentielle pour les résidences secondaires, marinas, séjours privés et art de vivre méditerranéen.' },
  { title: 'Antalya', subtitle: 'Famille · Santé · Qualité de vie', text: 'Une base de vie rationnelle pour les familles : climat, mer, santé privée, communautés internationales et installation longue durée.' },
];

const method = [
  'Diagnostic confidentiel du profil, du pays de résidence, de la famille, du budget et des priorités.',
  'Choix de la ville, stratégie résidence/fiscalité, arbitrage entre location, achat, société ou présence privée.',
  'Coordination des professionnels : avocat, fiscaliste, comptable, assureur, médecin, clinique, bureau, banque, hôtel ou transport.',
  'Exécution locale : rendez-vous, visites, transferts, documents, traductions, réservations, négociation et suivi.',
  'Support continu : membership privé, préférences client, accès prioritaire, événements, relations qualifiées et services récurrents.',
];

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationSchema()} />
      <StructuredData data={websiteSchema()} />
      <StructuredData data={faqSchema(conversionCopy[locale].faqs)} />
      <Header locale={locale} currentPath="/" />

      <main lang={locale} dir="ltr" className="bg-[#f8f1e7] text-[#101827]">
<HomeHero locale={locale} />
<HomeProjectPaths locale={locale} />
<section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24"><div><p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">Questions fréquentes</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Avant de venir en Turquie.</h2></div><div className="grid gap-px bg-[#d8c7a1]">{conversionCopy[locale].faqs.map((faq) => <article key={faq.question} className="bg-[#f8f1e7] p-8"><h3 className="font-serif text-3xl leading-snug text-[#121826]">{faq.question}</h3><p className="mt-4 text-base leading-8 text-[#3e4857]">{faq.answer}</p></article>)}</div></div></section>
<HomeFinalContact locale={locale} />
</main>
      <Footer locale={locale} />
    </>
  );
}
