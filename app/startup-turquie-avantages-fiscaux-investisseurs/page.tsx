import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Rocket, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/startup-turquie-avantages-fiscaux-investisseurs';
const title = 'Startups en Turquie : fiscalité, stock-options et investisseurs | Bosphoras';
const description = 'Guide Bosphoras pour startups en Turquie : fiscalité, stock-options, investisseurs étrangers, technopark, R&D, société, banque, levée de fonds, équipes, IP, contrats, résidence et substance.';
const updatedAt = '2026-06-05';

const points = [
  ['Pourquoi la Turquie ?', 'La Turquie peut être une base intéressante pour startups régionales : talents, coûts maîtrisés, marché local, accès Europe, Golfe, Asie centrale et écosystème tech d’Istanbul.'],
  ['Fiscalité à vérifier', 'Les avantages liés à R&D, technopark, export de services ou revenus étrangers doivent être analysés selon activité, structure, substance et règles d’application.'],
  ['Stock-options et équipes', 'Les plans d’intéressement doivent être structurés proprement : vesting, contrats, fiscalité, droits des fondateurs, salariés, consultants et investisseurs.'],
  ['Investisseurs étrangers', 'Le dossier doit rassurer : cap table, banque, KYC, IP, contrats, comptabilité, reporting, fiscalité et gouvernance locale.'],
];

const checks = ['structure société et cap table','statut des fondateurs, salariés et consultants','IP, logiciels, marques, contrats et licences','banque, KYC, origine des fonds et reporting','R&D, technopark, export de services et fiscalité','avocat, fiscaliste, comptable et pacte d’associés'];

const faqs = [
  ['La Turquie est-elle intéressante pour une startup ?', 'Oui pour certains profils, notamment tech, SaaS, services digitaux, fintech, e-commerce, healthtech ou export de services, mais la structure doit être étudiée avant lancement.'],
  ['Les avantages fiscaux sont-ils automatiques ?', 'Non. Ils dépendent de l’activité, du lieu, du statut R&D ou technopark éventuel, de la facturation, de la substance et des règles d’application.'],
  ['Peut-on mettre en place des stock-options ?', 'Il faut analyser le mécanisme adapté : actions, options, vesting, bonus, contrats, droits des fondateurs et fiscalité personnelle.'],
  ['Quel est le rôle de Bosphoras ?', 'Bosphoras coordonne le diagnostic avec avocat, fiscaliste, comptable, banque, bureaux, recrutement et partenaires locaux.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: url, en: 'https://bosphoras.com/en/startup-turkey-tax-benefits-investors', ru: 'https://bosphoras.com/ru/startup-turtsiya-nalogovye-lgoty-investory', ar: 'https://bosphoras.com/ar/startup-turkey-tax-benefits-investors', 'x-default': url } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'fr_FR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'fr-FR', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['startup Turkey', 'tax benefits Turkey', 'stock options', 'foreign investors', 'technopark'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="fr" currentPath="/startup-turquie-avantages-fiscaux-investisseurs" /><main className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1200px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Guide privé · Startups Turquie · Mis à jour le 5 juin 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Startups en Turquie : fiscalité, stock-options et investisseurs</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">La Turquie peut être une base de lancement ou de développement pour certaines startups : talents, coûts, marché régional, bureaux, banque, technopark, R&D, export de services et investisseurs étrangers. Le sujet doit être structuré avec prudence avant de promettre un avantage fiscal.</p><Link href="/diagnostic-prive" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Demander une analyse privée<ArrowRight size={16} /></Link></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><Rocket className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">Les 4 points essentiels</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{points.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-4 leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist avant création ou levée</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">Une startup attractive pour investisseurs doit être lisible : cap table, IP, banque, contrats, comptabilité, fiscalité et gouvernance doivent être propres avant la levée.</p></div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Questions fréquentes</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main><Footer locale="fr" /></>
  );
}
