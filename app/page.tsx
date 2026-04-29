import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Bell, Building2, Globe, Home, KeyRound, Lock, MapPin, Scale, Shield, ShieldCheck } from 'lucide-react';
import { buildMetadata, faqSchema, organizationSchema, websiteSchema } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const locale = 'fr' as const;

const homeFaqs = [
  { question: 'Bosphoras est-il une agence immobilière en Turquie ?', answer: 'Non. Bosphoras est un bureau privé international. L’immobilier peut faire partie du parcours, mais seulement après la stratégie : ville, résidence, fiscalité, avocat, santé, assurance, banque, société, bureaux et niveau de vie recherché.' },
  { question: 'Bosphoras accompagne-t-il les investisseurs étrangers à Istanbul, Bodrum et Antalya ?', answer: 'Oui. Bosphoras coordonne l’installation, les démarches, les services privés et les professionnels sélectionnés à Istanbul, Bodrum et Antalya pour des investisseurs, entrepreneurs, familles et clients internationaux.' },
  { question: 'Bosphoras Private Access est-il une carte de réduction ?', answer: 'Non. Bosphoras Private Access n’est pas une carte de réduction. C’est un accès privé au bureau Bosphoras, aux introductions qualifiées, au traitement prioritaire et à la coordination confidentielle des demandes en Turquie.' },
  { question: 'Peut-on solliciter Bosphoras sans devenir membre ?', answer: 'Oui. L’accompagnement complet Private Desk démarre à partir de 6 000 USD pour une année, ou sur devis personnalisé selon la mission.' },
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
      <StructuredData data={faqSchema(homeFaqs)} />
      <Header locale={locale} currentPath="/" />

      <main className="bg-[#f8f1e7] text-[#101827]">
        <section className="relative min-h-[92vh] overflow-hidden bg-[radial-gradient(circle_at_78%_16%,rgba(196,151,84,0.22),transparent_27%),linear-gradient(135deg,#f8f1e7_0%,#fffaf0_48%,#efe4d2_100%)] pt-24 md:pt-32">
          <div className="absolute inset-0 opacity-[0.24]" style={{ backgroundImage: 'linear-gradient(#d8c7a1 1px, transparent 1px), linear-gradient(90deg, #d8c7a1 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
          <div className="container-editorial relative z-10 grid min-h-[calc(92vh-7rem)] items-center gap-10 pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <h1 className="max-w-4xl font-serif text-4xl leading-[1.02] tracking-[-0.045em] text-[#121826] md:text-6xl lg:text-7xl">Votre bureau privé en Turquie</h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-[#3e4857] md:text-xl md:leading-10">Un seul interlocuteur pour organiser votre installation, vos affaires et votre vie privée : avocat, fiscalité, société, comptabilité, santé, assurance, immobilier, bureaux, transport VIP, hôtels, événements et accès privé à Istanbul, Bodrum et Antalya.</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/diagnostic-prive" className="inline-flex items-center justify-center bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#263246]">Recevoir mon diagnostic privé</Link>
                <Link href="/services" className="inline-flex items-center justify-center border border-[#a77a35] bg-[#fffaf0]/50 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#8a6728] transition hover:bg-[#fffaf0]">Découvrir nos services</Link>
              </div>
              <Link href="/adhesion/demande-membre" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8a6728] transition hover:text-[#121826]">Bosphoras Private Access · Demander une adhésion privée<ArrowRight className="h-4 w-4" /></Link>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <div className="border border-[#d8c7a1] bg-[#fffaf0]/80 p-5"><MapPin className="mb-4 h-5 w-5 text-[#b0813e]" /><p className="text-[0.62rem] uppercase leading-6 tracking-[0.16em] text-[#5c6676]">Paris · Istanbul · Londres · Almaty · Moscou · Dubai</p></div>
                <div className="border border-[#d8c7a1] bg-[#fffaf0]/80 p-5"><Globe className="mb-4 h-5 w-5 text-[#b0813e]" /><p className="text-[0.62rem] uppercase leading-6 tracking-[0.16em] text-[#5c6676]">Français · English · Русский · العربية</p></div>
              </div>
            </div>
            <aside className="relative hidden md:block">
              <div className="absolute -inset-4 border border-[#d8c7a1]" />
              <div className="relative border border-[#d8c7a1] bg-[#121826] p-10 text-[#fffaf0] shadow-[0_40px_120px_rgba(16,24,39,0.22)]">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#d2a863]">Bosphoras Private Desk</p>
                <p className="mt-10 font-serif text-4xl leading-tight tracking-[-0.03em] md:text-5xl">One trusted desk. Everything Turkey.</p>
                <p className="mt-8 text-base leading-8 text-[#d8cfbf]">Pas de bruit. Pas d’improvisation. Un bureau privé pour filtrer, coordonner et sécuriser les bonnes personnes au bon moment.</p>
                <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#d2a863] to-transparent" />
                <div className="grid gap-4 text-sm leading-7 text-[#d8cfbf] sm:grid-cols-2"><p>Avocat · fiscalité · société · comptabilité</p><p>Santé · assurance · immobilier · bureaux</p><p>Chauffeur · hôtels · yachts · événements</p><p>Accès privé · relation long terme</p></div>
              </div>
              <div className="relative mt-8 border border-[#d8c7a1] bg-[#fffaf0] px-8 py-7 shadow-[0_22px_70px_rgba(16,24,39,0.10)]"><p className="font-serif text-2xl leading-snug text-[#121826]">“En Turquie, la vraie difficulté n’est pas de trouver un service. C’est de savoir à qui faire confiance.”</p></div>
            </aside>
          </div>
        </section>

        <section className="border-y border-[#d8c7a1] bg-[#fffaf0] py-8"><div className="container-editorial grid gap-4 md:grid-cols-6">{['Paris', 'Istanbul', 'Londres', 'Almaty', 'Moscou', 'Dubai'].map((location) => <div key={location} className="text-center text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#8a6728]">{location}</div>)}</div></section>

        <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24"><div><p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">Notre différence</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Pas une agence. Un bureau privé.</h2></div><div className="space-y-7 text-lg leading-9 text-[#3e4857]"><p>Un investisseur sérieux ne commence pas par acheter un appartement. Il commence par comprendre où vivre, comment structurer sa résidence, quelle fiscalité vérifier, quel avocat consulter, quelle assurance choisir, quel médecin contacter, quel bureau utiliser et qui peut réellement exécuter sur place.</p><p>Bosphoras rend la Turquie lisible, sûre et actionnable : un seul interlocuteur, un réseau sélectionné, une logique de confidentialité et une coordination locale entre Paris, Istanbul, Londres, Almaty, Moscou et Dubai.</p></div></div></section>

        <section className="bg-[#fffaf0] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-[1500px]"><div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div className="border border-[#d8c7a1] bg-[#121826] p-8 text-[#fffaf0] shadow-[0_40px_120px_rgba(16,24,39,0.18)] md:p-10"><p className="text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#d2a863]">Bosphoras Private Access</p><h2 className="mt-8 font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Une seule adhésion. Un seul niveau de service.</h2><p className="mt-7 text-base leading-8 text-[#d8cfbf]">Pour certains clients, la Turquie ne se gère pas demande par demande. Elle se gère avec un accès permanent à un bureau privé, capable de filtrer, coordonner et activer les bons interlocuteurs avec discrétion.</p><div className="my-9 h-px bg-gradient-to-r from-transparent via-[#d2a863] to-transparent" /><div className="grid gap-5 sm:grid-cols-2"><div><p className="text-[0.62rem] uppercase tracking-[0.22em] text-[#d2a863]">Admission annuelle</p><p className="mt-2 font-serif text-4xl text-white">10 000 USD</p></div><div><p className="text-[0.62rem] uppercase tracking-[0.22em] text-[#d2a863]">Retainer mensuel</p><p className="mt-2 font-serif text-4xl text-white">1 000 USD</p></div></div><p className="mt-7 text-sm leading-7 text-[#d8cfbf]">Sur parrainage, recommandation ou validation du profil. Cycle de 12 mois à compter de la validation. Conditions révisables chaque année.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/adhesion/demande-membre" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827] transition hover:bg-[#e0bc78]">Demander une adhésion<ArrowRight size={15} /></Link><Link href="/diagnostic-prive" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863] transition hover:bg-white/5">Demande classique</Link></div></div><div className="grid gap-4 md:grid-cols-2">{[{ title: 'Accès prioritaire', text: 'Les demandes membres sont traitées avec priorité par le bureau Bosphoras.' },{ title: 'Introductions qualifiées', text: 'Avocats, fiscalistes, assureurs, médecins, bureaux, hôtels, chauffeurs et partenaires sélectionnés.' },{ title: 'Confidentialité renforcée', text: 'Un cadre discret pour les demandes privées, familiales, patrimoniales ou professionnelles.' },{ title: 'Coordination continue', text: 'Une relation active avec le desk Bosphoras pour avancer en Turquie tout au long de l’année.' }].map((item) => <article key={item.title} className="border border-[#d8c7a1] bg-white p-7 shadow-[0_18px_55px_rgba(16,24,39,0.045)]"><KeyRound className="h-7 w-7 text-[#8a6728]" strokeWidth={1.4} /><h3 className="mt-8 font-serif text-3xl text-[#121826]">{item.title}</h3><p className="mt-5 text-sm leading-7 text-[#3e4857]">{item.text}</p></article>)}<article className="border border-[#d8c7a1] bg-[#f8f1e7] p-7 md:col-span-2"><p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#8a6728]">Bosphoras Private Desk</p><p className="mt-4 font-serif text-3xl leading-tight text-[#121826]">Accompagnement complet Private Desk à partir de 6 000 USD pour une année.</p><p className="mt-5 text-sm leading-7 text-[#3e4857]">Pour les clients qui souhaitent organiser une demande structurée sans accéder au cercle membre, Bosphoras Private Desk permet de cadrer, coordonner et suivre une mission sur 12 mois, ou sur devis personnalisé selon la complexité, l’urgence et les services demandés.</p><Link href="/diagnostic-prive" className="mt-6 inline-flex items-center justify-center gap-3 border border-[#8a6728] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#8a6728] transition hover:bg-[#fffaf0]">Demander un accompagnement Private Desk<ArrowRight size={14} /></Link></article></div></div></div></section>

        <section className="bg-[#121826] px-5 py-20 text-[#fffaf0] md:px-8 md:py-28"><div className="mx-auto max-w-[1500px]"><div className="mb-12 max-w-4xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d2a863]">Nos expertises</p><h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] md:text-6xl">Une approche globale. Une exécution locale.</h2></div><div className="grid gap-px bg-[#d2a863]/25 md:grid-cols-2 xl:grid-cols-6">{expertises.map((item) => { const Icon = item.icon; return <article key={item.title} className="bg-[#121826] p-7 transition hover:bg-[#192237]"><Icon className="h-8 w-8 text-[#d2a863]" strokeWidth={1.45} /><h3 className="mt-8 font-serif text-3xl text-[#fffaf0]">{item.title}</h3><p className="mt-5 text-sm leading-7 text-[#d8cfbf]">{item.text}</p></article>; })}</div></div></section>
        <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-[1500px]"><div className="mb-12 text-center"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6728]">Nos destinations</p><h2 className="mt-4 font-serif text-3xl tracking-[-0.025em] text-[#172032] md:text-5xl">Trois villes. Un même niveau d’exigence.</h2></div><div className="grid gap-4 lg:grid-cols-3">{cities.map((item, index) => <article key={item.title} className="border border-[#d8c7a1] bg-[#fffaf0] p-8 shadow-[0_18px_55px_rgba(16,24,39,0.05)]"><p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-[#8a6728]">0{index + 1}</p><h3 className="mt-10 font-serif text-5xl tracking-[-0.04em] text-[#172032]">{item.title}</h3><p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#4a5260]">{item.subtitle}</p><p className="mt-6 text-base leading-8 text-[#3e4857]">{item.text}</p></article>)}</div></div></section>
        <section className="bg-[#fffaf0] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24"><div><p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">Confiance</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Le vrai luxe, c’est de protéger le client.</h2></div><div className="grid gap-4 text-base leading-8 text-[#3e4857] md:grid-cols-2">{['Confidentialité renforcée et limitation des accès aux informations sensibles.','KYC, origine des fonds, documents et préférences privées traités avec prudence.','Coordination avec avocats, fiscalistes, comptables, assureurs, médecins et prestataires habilités.','Aucune promesse de résultat fiscal, juridique, administratif, médical ou financier.','Introductions privées uniquement avec consentement mutuel.','Bosphoras coordonne et filtre sans se substituer aux professions réglementées.'].map((item) => <div key={item} className="border border-[#d8c7a1] bg-white p-6"><ShieldCheck className="mb-5 text-[#8a6728]" size={24} strokeWidth={1.3} /><p>{item}</p></div>)}</div></div></section>
        <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24"><div><p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">Questions fréquentes</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Avant de venir en Turquie.</h2></div><div className="grid gap-px bg-[#d8c7a1]">{homeFaqs.map((faq) => <article key={faq.question} className="bg-[#f8f1e7] p-8"><h3 className="font-serif text-3xl leading-snug text-[#121826]">{faq.question}</h3><p className="mt-4 text-base leading-8 text-[#3e4857]">{faq.answer}</p></article>)}</div></div></section>
        <section className="bg-[#121826] px-5 py-20 text-[#fffaf0] md:px-8 md:py-28"><div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"><div><p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d2a863]">Méthode</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Une exécution calme, claire, confidentielle.</h2></div><div className="border-l border-[#d2a863]/25">{method.map((step, index) => <div key={step} className="grid grid-cols-[5rem_1fr] border-b border-[#d2a863]/15 py-7 last:border-b-0"><span className="font-serif text-3xl text-[#d2a863]">0{index + 1}</span><p className="text-base leading-8 text-[#d8cfbf]">{step}</p></div>)}</div></div></section>
        <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-[1500px] border border-[#24334a] bg-[linear-gradient(90deg,#121826_0%,#1d2940_45%,#121826_100%)] p-6 md:p-10"><div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center"><div className="text-white"><p className="font-serif text-3xl tracking-[-0.025em] md:text-5xl">Parlons de vos projets en toute confidentialité.</p><p className="mt-4 max-w-xl text-base leading-8 text-white/80">Un entretien privé pour comprendre vos besoins et vous proposer des solutions sur mesure.</p></div><div className="flex flex-col gap-3 md:items-end"><Link href="/diagnostic-prive" className="inline-flex items-center justify-center bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#101827] transition hover:bg-[#e0bc78]">Recevoir mon diagnostic privé</Link><Link href="/adhesion/demande-membre" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#d2a863] transition hover:bg-white/5">Demander une adhésion privée</Link><div className="mt-3 inline-flex items-center gap-2 text-sm text-white/80"><Lock className="h-4 w-4 text-[#d2a863]" />Confidentialité absolue garantie</div></div></div></div></section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
