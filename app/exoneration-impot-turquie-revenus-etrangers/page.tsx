import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, ShieldCheck, Scale, Globe2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { buildMetadata, faqSchema, serviceSchema } from '@/lib/seo';

const locale = 'fr' as const;
const path = '/exoneration-impot-turquie-revenus-etrangers';

const title = 'Exonération impôt Turquie revenus étrangers | Investisseurs étrangers';
const description =
  'Projet d’exonération fiscale en Turquie sur certains revenus étrangers : conditions, profils concernés, risques à vérifier et accompagnement privé Bosphoras.';

const faqs = [
  {
    question: 'La Turquie prévoit-elle une exonération d’impôt sur les revenus étrangers ?',
    answer:
      'Un projet de loi présenté à la TBMM prévoit une exonération de l’impôt sur le revenu pendant 20 ans pour certains revenus et gains obtenus hors de Turquie par des personnes physiques devenant résidentes en Turquie, sous conditions.',
  },
  {
    question: 'Qui pourrait être concerné par cette mesure ?',
    answer:
      'Les profils potentiellement concernés sont les investisseurs internationaux, entrepreneurs, consultants, familles fortunées, dirigeants, rentiers, détenteurs de revenus financiers étrangers et personnes n’ayant pas été résidentes ou contribuables en Turquie durant les trois années civiles précédentes.',
  },
  {
    question: 'Peut-on déjà s’installer en Turquie uniquement pour cette exonération ?',
    answer:
      'Non. La mesure doit être confirmée après adoption définitive, publication officielle et analyse individuelle par un avocat fiscaliste qualifié. Bosphoras aide à structurer cette analyse avant toute décision.',
  },
  {
    question: 'Bosphoras remplace-t-il un avocat fiscaliste ?',
    answer:
      'Non. Bosphoras coordonne le diagnostic, les interlocuteurs qualifiés et l’exécution locale, mais ne remplace pas les professions réglementées.',
  },
];

export const metadata: Metadata = buildMetadata({
  locale,
  path,
  title,
  description,
  image: 'https://bosphoras.com/images/og-default.jpg',
  alternates: {
    fr: `https://bosphoras.com${path}`,
    en: 'https://bosphoras.com/en/turkey-tax-exemption-foreign-income',
    ru: 'https://bosphoras.com/ru/nalogovoe-osvobozhdenie-turtsiya-inostrannye-dohody',
    ar: 'https://bosphoras.com/ar/turkey-tax-exemption-foreign-income',
    'x-default': `https://bosphoras.com${path}`,
  },
});

const concernedProfiles = [
  'Investisseurs étrangers avec revenus financiers ou patrimoniaux hors de Turquie',
  'Entrepreneurs et dirigeants percevant des revenus internationaux',
  'Consultants, experts et indépendants facturant hors de Turquie',
  'Familles fortunées souhaitant une base privée entre Europe, Golfe et Asie centrale',
  'Clients de banque privée comparant Istanbul, Dubaï, Lisbonne, Monaco ou Londres',
  'Diaspora ou étrangers n’ayant pas été résidents fiscaux turcs récemment',
];

const verificationPoints = [
  'Absence de résidence et de qualité de contribuable en Turquie durant les trois années civiles précédentes',
  'Nature exacte des revenus étrangers : dividendes, intérêts, plus-values, honoraires, patrimoine, société ou portefeuille',
  'Interaction avec la résidence fiscale dans le pays d’origine ou le pays actuel',
  'Conventions fiscales internationales, obligations déclaratives et risques de double résidence',
  'Date d’installation, preuve de résidence, banque, assurance, santé, logement et structure familiale',
  'Adoption finale du texte, publication officielle et doctrine d’application du ministère turc des Finances',
];

export default function TurkeyForeignIncomeTaxExemptionPage() {
  return (
    <>
      <StructuredData data={faqSchema(faqs)} />
      <StructuredData
        data={serviceSchema({
          name: 'Analyse privée — exonération fiscale Turquie revenus étrangers',
          description,
          url: `https://bosphoras.com${path}`,
        })}
      />
      <Header locale={locale} currentPath={path} />
      <main className="bg-[#f8f1e7] text-[#101827]">
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_80%_10%,rgba(210,168,99,0.24),transparent_28%),linear-gradient(135deg,#121826_0%,#1d2940_48%,#0b101b_100%)] px-5 pb-20 pt-32 text-[#fffaf0] md:px-8 md:pb-28 md:pt-40">
          <div className="container-editorial grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Fiscalité Turquie · Projet de loi 2026</p>
              <h1 className="mt-6 max-w-5xl font-serif text-4xl leading-[1.02] tracking-[-0.045em] md:text-6xl lg:text-7xl">
                Exonération d’impôt en Turquie sur les revenus étrangers : opportunité pour investisseurs internationaux
              </h1>
              <p className="mt-8 max-w-3xl text-base leading-8 text-[#d8cfbf] md:text-xl md:leading-10">
                La Turquie prépare un dispositif fiscal majeur pour attirer les résidents internationaux : jusqu’à 20 ans d’exonération potentielle sur certains revenus obtenus hors de Turquie, sous conditions strictes.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/diagnostic-prive" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827] transition hover:bg-[#e2bf7a]">
                  Demander une analyse privée <ArrowRight size={15} />
                </Link>
                <Link href="/services/conseil-juridique-fiscal" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863] transition hover:bg-white/5">
                  Conseil fiscal & juridique
                </Link>
              </div>
            </div>
            <aside className="border border-[#d2a863]/35 bg-white/[0.06] p-8 backdrop-blur">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#d2a863]">Réponse courte</p>
              <p className="mt-5 font-serif text-3xl leading-tight text-white">
                Ce n’est pas une promesse fiscale. C’est une fenêtre stratégique à analyser avant le marché.
              </p>
              <p className="mt-6 text-sm leading-7 text-[#d8cfbf]">
                La bonne approche n’est pas de déménager trop vite, mais de vérifier l’éligibilité, la résidence fiscale, la nature des revenus étrangers et la cohérence patrimoniale avec des professionnels qualifiés.
              </p>
            </aside>
          </div>
        </section>

        <section className="px-5 py-18 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]">Ce qu’il faut comprendre</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Une réforme pensée pour attirer capitaux, talents et familles internationales.</h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-[#3e4857] md:text-lg md:leading-9">
              <p>
                Le projet vise les personnes physiques qui deviennent résidentes en Turquie et qui n’avaient pas, durant les trois années civiles précédentes, de résidence ni de qualité de contribuable en Turquie. Les revenus et gains obtenus hors de Turquie pourraient être exclus de l’impôt sur le revenu turc pendant 20 ans.
              </p>
              <p>
                Pour Bosphoras, l’intérêt est clair : Istanbul, Bodrum et Antalya peuvent devenir des bases attractives pour des profils qui veulent combiner optimisation, qualité de vie, accès privé, santé, immobilier, banque, société et mobilité internationale.
              </p>
              <p className="border-l-4 border-[#d2a863] bg-[#fffaf0] p-5 text-sm leading-7">
                Attention : cette page ne constitue pas un conseil fiscal. Les mesures doivent être confirmées après adoption définitive, publication officielle et analyse personnalisée par un avocat fiscaliste qualifié.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf0] px-5 py-18 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]">Profils concernés</p>
              <h2 className="mt-5 font-serif text-4xl tracking-[-0.035em] md:text-6xl">Cette page vise les personnes qui ont vraiment quelque chose à structurer.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {concernedProfiles.map((item) => (
                <article key={item} className="border border-[#d8c7a1] bg-white p-6 shadow-[0_18px_55px_rgba(16,24,39,0.045)]">
                  <CheckCircle2 className="mb-5 h-6 w-6 text-[#8a6728]" />
                  <p className="text-base leading-7 text-[#2f3948]">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-18 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]">Checklist Bosphoras</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Avant de prendre une décision, il faut vérifier les points sensibles.</h2>
            </div>
            <div className="grid gap-px bg-[#d8c7a1]">
              {verificationPoints.map((item, index) => (
                <div key={item} className="grid grid-cols-[4rem_1fr] bg-[#f8f1e7] p-6">
                  <span className="font-serif text-2xl text-[#8a6728]">0{index + 1}</span>
                  <p className="text-base leading-8 text-[#3e4857]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#121826] px-5 py-18 text-[#fffaf0] md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-8 md:grid-cols-3">
            <article className="border border-[#d2a863]/25 p-7">
              <Scale className="mb-6 h-8 w-8 text-[#d2a863]" />
              <h3 className="font-serif text-3xl">Fiscalité</h3>
              <p className="mt-4 text-sm leading-7 text-[#d8cfbf]">Analyse de la résidence fiscale, des revenus étrangers, des conventions et des obligations déclaratives.</p>
            </article>
            <article className="border border-[#d2a863]/25 p-7">
              <Globe2 className="mb-6 h-8 w-8 text-[#d2a863]" />
              <h3 className="font-serif text-3xl">Installation</h3>
              <p className="mt-4 text-sm leading-7 text-[#d8cfbf]">Choix de la ville, logement, assurance, santé, banque, société, famille et stratégie de présence en Turquie.</p>
            </article>
            <article className="border border-[#d2a863]/25 p-7">
              <ShieldCheck className="mb-6 h-8 w-8 text-[#d2a863]" />
              <h3 className="font-serif text-3xl">Confidentialité</h3>
              <p className="mt-4 text-sm leading-7 text-[#d8cfbf]">Coordination discrète des professionnels, filtrage des informations sensibles et suivi privé du dossier.</p>
            </article>
          </div>
        </section>

        <section className="px-5 py-18 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1100px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]">Diagnostic privé</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Vous êtes concerné par des revenus étrangers ? Ne décidez pas seul.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#3e4857] md:text-lg md:leading-9">
              Bosphoras organise une analyse confidentielle de votre profil avec les bons interlocuteurs : fiscalité, résidence, patrimoine, immobilier, santé, assurance, banque, société et installation locale.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/diagnostic-prive" className="inline-flex items-center justify-center gap-3 bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#263246]">
                Demander mon diagnostic privé <ArrowRight size={15} />
              </Link>
              <Link href="/cercle-prive" className="inline-flex items-center justify-center border border-[#8a6728] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#8a6728] transition hover:bg-[#fffaf0]">
                Découvrir Private Access
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
