import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, Landmark, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/exoneration-fiscale-turquie-revenus-etrangers';
const title = 'Exonération fiscale en Turquie sur les revenus étrangers | Loi 7582 | Bosphoras';
const description = 'Guide privé Bosphoras sur la loi turque n°7582 publiée au Resmî Gazete n°33270 : exonération de 20 ans sur certains revenus étrangers, conditions, limites, héritage à 1 %, résidence fiscale et installation en Turquie.';
const updatedAt = '2026-06-05';
const updatedLabel = 'Mis à jour le 5 juin 2026';

const measures = [
  ['Loi publiée au Resmî Gazete', 'La loi n°7582, publiée au Resmî Gazete n°33270 du 4 juin 2026, introduit le nouvel article Mükerrer 20/D dans le Gelir Vergisi Kanunu n°193. La page ne traite donc plus d’un projet, mais d’un texte publié à analyser avec méthode.'],
  ['Exonération possible pendant 20 ans', 'Le texte vise les personnes physiques considérées comme installées en Turquie et prévoit une exonération d’impôt sur les revenus et gains obtenus hors de Turquie pendant vingt ans, sous conditions strictes.'],
  ['Condition des trois années précédentes', 'Le point central est l’absence de domicile et d’assujettissement fiscal en Turquie pendant les trois années civiles précédant l’installation fiscale en Turquie. Cette condition doit être documentée avant toute décision.'],
  ['Pas de déclaration annuelle pour les revenus exonérés', 'Les revenus et gains étrangers entrant dans le champ de l’article 20/D ne font pas l’objet d’une déclaration annuelle en Turquie. Si une déclaration est déposée pour d’autres revenus, ces revenus exonérés ne sont pas intégrés.'],
  ['Limites et contrôle fiscal', 'Les frais liés aux revenus exonérés ne peuvent pas réduire des revenus imposables. Les impôts payés à l’étranger sur ces revenus ne sont pas imputables en Turquie. Si les conditions ne sont pas réunies, les impôts non établis peuvent être considérés comme une perte fiscale.'],
  ['Application à partir du 1er janvier 2026', 'L’article 4 s’applique aux personnes considérées comme installées en Turquie à partir du 1er janvier 2026, à compter de la publication. Les modalités pratiques restent à lire avec les textes d’application et les professionnels qualifiés.'],
];

const audiences = [
  ['Nouveaux résidents internationaux', 'Personnes physiques qui envisagent une installation en Turquie après plusieurs années sans domicile ni obligation fiscale turque.'],
  ['Entrepreneurs et dirigeants mobiles', 'Fondateurs, consultants, dirigeants ou investisseurs dont les dividendes, plus-values, honoraires, intérêts ou revenus professionnels proviennent principalement de l’étranger.'],
  ['Familles patrimoniales', 'Familles qui comparent Istanbul, Bodrum ou Antalya avec Dubaï, Monaco, Londres, Lisbonne ou Milan pour résidence, qualité de vie, succession et organisation patrimoniale.'],
  ['Family offices et investisseurs privés', 'Structures qui doivent analyser résidence fiscale, banque, actifs financiers, sociétés étrangères, immobilier, assurance, héritage et confidentialité.'],
  ['Talents internationaux', 'Profils qualifiés qui veulent utiliser la Turquie comme base entre Europe, Golfe, Asie centrale et marchés émergents.'],
  ['Groupes internationaux', 'Entreprises qui envisagent parallèlement une base régionale, un centre de services qualifié, une structure de transit trade ou un bureau de coordination en Turquie.'],
];

const businessModels = [
  ['Résidence privée en Turquie', 'Préparer résidence, banque, assurance santé, logement, école, sécurité familiale et fiscalité avant une installation à Istanbul, Bodrum ou Antalya.'],
  ['Structuration des revenus étrangers', 'Cartographier dividendes, plus-values, intérêts, revenus professionnels, management fees, actifs financiers et sociétés étrangères avant d’appliquer la réforme.'],
  ['Family office à Istanbul', 'Créer un point de coordination discret pour patrimoine, fiscalité, banque, immobilier, assurance, santé privée, déplacements et relations de confiance.'],
  ['Analyse succession et héritage', 'Étudier l’interaction entre l’article 20/D et le taux de 1 % prévu pour certaines transmissions par héritage pendant la période d’exonération.'],
  ['Centre régional ou service hub', 'Analyser si une société turque peut aussi servir de base régionale pour finance, reporting, juridique, RH, data, technologie ou support commercial.'],
  ['Plan d’installation sécurisé', 'Transformer la réforme en feuille de route : documents, calendrier, fiscaliste, avocat, banque, logement, assurances et contrôle de cohérence pays par pays.'],
];

const verificationPoints = [
  'date réelle d’installation et résidence fiscale effective',
  'absence de domicile et d’assujettissement fiscal en Turquie sur les trois années civiles précédentes',
  'source exacte des revenus : Turquie ou étranger',
  'conventions fiscales applicables avec le pays d’origine',
  'documentation bancaire, preuves de résidence et origine des fonds',
  'impact sur succession, donation, société étrangère et déclarations dans les autres pays',
];

const faqs = [
  ['L’exonération de 20 ans est-elle désormais publiée ?', 'Oui. Le texte transmis correspond à la loi n°7582 publiée au Resmî Gazete n°33270 du 4 juin 2026. Il introduit l’article Mükerrer 20/D dans le Gelir Vergisi Kanunu. Cela ne signifie pas que l’exonération est automatique pour tous les étrangers.'],
  ['Qui peut être concerné ?', 'Les personnes physiques considérées comme installées en Turquie, à condition notamment de ne pas avoir eu de domicile ni d’assujettissement fiscal en Turquie pendant les trois années civiles précédentes. Le dossier doit être vérifié individuellement.'],
  ['Les revenus étrangers doivent-ils être déclarés chaque année en Turquie ?', 'Le texte prévoit que les revenus et gains entrant dans l’exonération ne font pas l’objet d’une déclaration annuelle et ne sont pas inclus dans une déclaration déposée pour d’autres revenus. Une confirmation professionnelle reste nécessaire avant application.'],
  ['Tous les revenus sont-ils couverts ?', 'Non. La page vise les revenus et gains obtenus hors de Turquie dans le cadre de l’article 20/D. Les revenus de source turque, les sociétés locales, les activités exercées en Turquie, les frais et les crédits d’impôt étrangers doivent être analysés séparément.'],
  ['Quel est le rôle de Bosphoras ?', 'Bosphoras ne donne pas de conseil fiscal. Bosphoras coordonne le diagnostic privé, prépare les questions utiles, organise les échanges avec les professionnels qualifiés et aide les investisseurs étrangers à construire une feuille de route claire en Turquie.'],
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url, languages: { fr: url, en: 'https://bosphoras.com/en/turkey-tax-exemption-foreign-income', ru: 'https://bosphoras.com/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody', ar: 'https://bosphoras.com/ar/turkey-tax-exemption-foreign-income', 'x-default': url } },
  openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'fr_FR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] },
};

export default function Page() {
  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'fr-FR', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Turkey tax exemption', 'foreign income', 'Resmî Gazete 33270', 'Law 7582', 'Mükerrer Madde 20/D', 'tax residence in Turkey'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
      <Header locale="fr" currentPath="/exoneration-fiscale-turquie-revenus-etrangers" />
      <main className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Guide privé · Fiscalité Turquie 2026 · {updatedLabel}</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">Exonération fiscale en Turquie sur les revenus étrangers : loi 7582 et article 20/D</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">La loi turque n°7582 publiée au Resmî Gazete n°33270 du 4 juin 2026 introduit une exonération de vingt ans sur certains revenus et gains étrangers pour des nouveaux résidents fiscaux, sous conditions. Cette page explique le texte, ses limites, les profils concernés et les vérifications à mener avant toute installation en Turquie.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/diagnostic-prive" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Demander une analyse privée<ArrowRight size={16} /></Link><Link href="/services/conseil-juridique-fiscal" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">Voir l’accompagnement fiscal</Link></div></div></section>

        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.85fr_1.15fr]"><aside className="border border-[#d8c7a1] bg-[#fffaf0] p-8"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-3xl">Le signal officiel envoyé par la Turquie</h2><p className="mt-5 leading-8 text-[#3e4857]">Le texte publié confirme une stratégie d’attraction des nouveaux résidents internationaux, capitaux étrangers, familles patrimoniales, centres de services, groupes internationaux et profils mobiles. Le sujet doit toutefois être traité comme un dossier fiscal, pas comme une promesse commerciale.</p></aside><div><h2 className="font-serif text-4xl tracking-[-0.03em] text-[#121826]">Ce que la loi publiée prévoit</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{measures.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><Sparkles className="mb-5 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></div></section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Investisseurs, familles, dirigeants, groupes internationaux</p><h2 className="mt-4 max-w-4xl font-serif text-4xl tracking-[-0.035em] md:text-6xl">Qui doit étudier cette réforme en priorité ?</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{audiences.map(([t, d]) => <div key={t} className="border border-[#d8c7a1] bg-white p-6"><CheckCircle2 className="mb-4 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-xl text-[#121826]">{t}</h3><p className="mt-3 text-sm leading-7 text-[#3e4857]">{d}</p></div>)}</div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Applications concrètes</p><h2 className="mt-4 max-w-5xl font-serif text-4xl tracking-[-0.035em] md:text-6xl">Comment transformer la réforme en projet d’installation ou d’affaires</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{businessModels.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-7"><Building2 className="mb-6 h-6 w-6 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
        <section className="bg-white px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Vérifications à préparer avant de demander l’exonération</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{verificationPoints.map((point) => <div key={point} className="flex gap-3 border border-[#d8c7a1] bg-[#fffaf0] p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{point}</div>)}</div></div></section>
        <section className="px-5 pb-16 md:px-8 md:pb-24"><div className="mx-auto max-w-[1000px]"><div className="border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">À vérifier avant toute décision</h2><p className="mt-5 text-lg leading-9 text-[#3e4857]">Cette page ne constitue pas un conseil fiscal. L’article 20/D doit être analysé selon la résidence réelle, l’origine des revenus, les conventions fiscales, les obligations déclaratives dans les autres pays et les futures précisions de l’administration turque.</p></div></div></section>
        <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] md:text-6xl">Un profil international doit être analysé avant d’agir</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">Bosphoras coordonne une lecture confidentielle du dossier : résidence fiscale, revenus étrangers, patrimoine, société, banque, assurance, immobilier et feuille de route d’installation en Turquie.</p></div><Link href="/diagnostic-prive" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Demander un diagnostic privé<ArrowRight size={16} /></Link></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Questions fréquentes</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main>
      <Footer locale="fr" />
    </>
  );
}
