import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Home, Landmark, Plane, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { siteUrl } from '@/lib/routes';

const pageUrl = `${siteUrl}/relocation-corporate-turquie`;
const serviceName = 'Corporate Relocation Desk Turquie';
const description = 'Service premium de relocation corporate en Turquie pour entreprises, cadres dirigeants, salaries expatries et familles : logement, titre de sejour, immigration, installation, ecole, assurance, banque et accompagnement local.';

const problems = [
  'Un cadre mal installe perd du temps avant meme de commencer sa mission.',
  'Le service RH ne peut pas gerer seul logement, titre de sejour, banque, assurance, ecole et demarches locales dans un autre pays.',
  'Un mauvais quartier, un bail mal negocie ou un dossier de residence incomplet peut fragiliser toute la mission.',
  'Le conjoint et les enfants ont souvent besoin d autant d accompagnement que le salarie mute.',
];

const beforeArrival = ['brief entreprise et profil collaborateur', 'analyse visa, residence, permis de travail ou ikamet', 'liste des documents a preparer', 'calendrier d arrivee', 'budget logement', 'quartiers recommandes', 'besoins famille et ecole'];
const arrival = ['accueil aeroport VIP', 'hebergement temporaire', 'visites logements', 'aide a la signature du bail', 'installation internet et utilities', 'numero fiscal', 'adresse locale', 'rendez-vous administratifs'];
const immigration = ['titre de sejour / ikamet', 'coordination avocat si necessaire', 'assurance sante', 'renouvellement', 'changement d adresse', 'suivi du dossier', 'permis de travail via partenaires competents'];
const family = ['ecoles internationales ou locales', 'quartier adapte a la famille', 'medecin et assurance', 'chauffeur et mobilite', 'activites enfants', 'support conjoint', 'installation quotidienne'];
const process = ['Brief RH ou direction', 'Profil collaborateur et famille', 'Plan d installation', 'Preparation immigration et logement', 'Arrivee et accompagnement terrain', 'Suivi post-installation'];
const links = [
  ['/visa-travail-turquie', 'Visa travail Turquie'],
  ['/titre-sejour-turquie', 'Titre de sejour Turquie'],
  ['/ikamet-turquie', 'Ikamet Turquie'],
  ['/residence-courte-duree-turquie', 'Residence courte duree'],
  ['/visa-business-turquie', 'Visa business Turquie'],
  ['/residence-turquie-investisseur', 'Residence investisseur'],
  ['/residence-turquie-achat-immobilier', 'Residence achat immobilier'],
  ['/transferts-istanbul', 'Transferts & chauffeur'],
];

const faq = [
  ['A qui font appel les grandes entreprises pour installer leurs expatries en Turquie ?', 'Elles font appel a un bureau de relocation local capable de coordonner immigration, logement, installation familiale, assurance, banque, ecole, chauffeur et support administratif. Bosphoras se positionne comme interlocuteur prive unique pour ce type de mission.'],
  ['Bosphoras peut-il s occuper du logement d un cadre superieur ?', 'Oui. Bosphoras peut organiser house hunting, logement temporaire, selection de quartiers, visites, negociation du bail, verification pratique du logement et installation des services essentiels.'],
  ['Bosphoras gere-t-il le titre de sejour des salaries expatries ?', 'Bosphoras coordonne la preparation du dossier de residence / ikamet avec les partenaires juridiques et administratifs adaptes. Pour permis de travail ou sujets juridiques sensibles, le dossier est traite avec des partenaires competents.'],
  ['Le service couvre-t-il la famille du salarie ?', 'Oui. La relocation corporate doit souvent inclure conjoint, enfants, ecole, assurance sante, logement familial, quartiers, mobilite et adaptation quotidienne.'],
  ['Dans quelles villes Bosphoras peut-il accompagner ?', 'Priorite a Istanbul, Bodrum et Antalya, avec un niveau de service adapte aux cadres, dirigeants, familles d expatries, investisseurs et entreprises internationales.'],
];

export const metadata = {
  title: 'Corporate Relocation Desk Turquie | Installation cadres expatries | Bosphoras',
  description,
  alternates: { canonical: pageUrl },
  openGraph: { title: 'Corporate Relocation Desk Turquie', description, url: pageUrl, type: 'website' },
};

function Card({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) {
  return <article className="border border-[#d8c7a1] bg-white p-7"><div className="flex items-center gap-3">{icon}<h3 className="font-serif text-2xl text-[#121826]">{title}</h3></div><div className="mt-6 grid gap-3">{items.map((item) => <p key={item} className="flex gap-3 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</p>)}</div></article>;
}

export default function CorporateRelocationPage() {
  return <>
    <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Service', name: serviceName, description, provider: { '@type': 'Organization', name: 'Bosphoras', url: siteUrl }, areaServed: ['Istanbul', 'Bodrum', 'Antalya', 'Turkey'], serviceType: ['Corporate relocation', 'Expatriate relocation', 'Residence permit coordination', 'House hunting'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
    <Header locale="fr" currentPath="/relocation-corporate-turquie" />
    <main className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1300px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Bosphoras Services · Corporate Relocation Desk</p><h1 className="mt-6 max-w-6xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Relocation corporate en Turquie pour cadres dirigeants, salaries expatries et familles internationales</h1><p className="mt-8 max-w-4xl text-lg leading-9 text-white/80">Quand une entreprise envoie un cadre superieur, un salarie cle ou une famille expatriee en Turquie, le sujet ne se limite pas a trouver un logement. Il faut securiser l entree, le titre de sejour, l adresse, l assurance, l ecole, la banque, les demarches locales, la logistique d arrivee et l integration quotidienne. Bosphoras agit comme bureau prive local avec un interlocuteur unique.</p><div className="mt-10 flex flex-wrap gap-4"><Link href="/diagnostic-prive" className="inline-flex items-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Organiser l installation d un collaborateur<ArrowRight size={16} /></Link></div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="max-w-4xl font-serif text-4xl tracking-[-0.03em] md:text-5xl">Pourquoi les grandes entreprises externalisent l installation de leurs expatries</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{problems.map((item) => <div key={item} className="border border-[#d8c7a1] bg-white p-6 text-base leading-8 text-[#3e4857]"><CheckCircle2 className="mb-4 h-5 w-5 text-[#8a6728]" />{item}</div>)}</div><p className="mt-10 border-l-4 border-[#8a6728] bg-white p-7 text-xl font-semibold leading-9 text-[#121826]">Un cadre mal installe est un cadre moins disponible pour sa mission. Une relocation corporate bien organisee protege le collaborateur, sa famille et la performance de l entreprise.</p></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="font-serif text-4xl tracking-[-0.03em] md:text-5xl">Un accompagnement complet avant, pendant et apres l arrivee</h2><div className="mt-10 grid gap-6 md:grid-cols-2"><Card title="Avant l arrivee" items={beforeArrival} icon={<Plane className="h-7 w-7 text-[#8a6728]" />} /><Card title="Arrivee & installation" items={arrival} icon={<Home className="h-7 w-7 text-[#8a6728]" />} /><Card title="Immigration & residence" items={immigration} icon={<Landmark className="h-7 w-7 text-[#8a6728]" />} /><Card title="Famille & settling-in" items={family} icon={<Users className="h-7 w-7 text-[#8a6728]" />} /></div></div></section>
      <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><BriefcaseBusiness className="h-9 w-9 text-[#d2a863]" /><h2 className="mt-6 max-w-4xl font-serif text-4xl tracking-[-0.03em] md:text-5xl">Un bureau prive, pas une simple agence de relocation</h2><p className="mt-8 max-w-4xl text-lg leading-9 text-white/75">Bosphoras coordonne l installation comme un projet global : immigration, logement, famille, banque, assurance, chauffeur, bureaux, immobilier, fiscalite et support local. Le service s adresse aux directions, RH, family offices, groupes internationaux, investisseurs et dirigeants qui veulent un seul point de contact en Turquie.</p><div className="mt-10 grid gap-4 md:grid-cols-3">{['Interlocuteur unique', 'Istanbul, Bodrum, Antalya', 'Coordination juridique si necessaire', 'Logement premium et house hunting', 'Support famille et ecole', 'Discretion et niveau executif'].map((item) => <div key={item} className="border border-white/15 bg-white/5 p-5 text-sm font-semibold uppercase tracking-[0.12em] text-white/80">{item}</div>)}</div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="font-serif text-4xl tracking-[-0.03em] md:text-5xl">Process corporate en 6 etapes</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{process.map((step, index) => <article key={step} className="border border-[#d8c7a1] bg-white p-7"><span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a6728]">0{index + 1}</span><h3 className="mt-4 font-serif text-2xl">{step}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">Chaque etape permet de reduire les erreurs, clarifier les responsabilites et donner au collaborateur un parcours d arrivee fluide, discret et comprehensible.</p></article>)}</div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="font-serif text-4xl tracking-[-0.03em] md:text-5xl">Pages utiles liees a la relocation corporate</h2><div className="mt-10 grid gap-3 md:grid-cols-4">{links.map(([href, label]) => <Link key={href} href={href} className="border border-[#d8c7a1] bg-white p-5 text-sm font-semibold leading-7 text-[#121826] hover:bg-[#f8f1e7]">{label}</Link>)}</div></div></section>
      <section className="px-5 pb-20 md:px-8 md:pb-28"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em] md:text-5xl">Questions frequentes</h2><div className="mt-10 grid gap-px bg-[#d8c7a1]">{faq.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
    </main><Footer locale="fr" />
  </>;
}
