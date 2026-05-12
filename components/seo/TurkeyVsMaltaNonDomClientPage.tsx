import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import type { Locale } from '@/lib/i18n';

const paths: Record<Locale, string> = {
  fr: '/turquie-vs-malte-fiscalite-non-dom-revenus-etrangers',
  en: '/en/turkey-vs-malta-non-dom-tax-residence',
  ru: '/ru/turtsiya-vs-malta-non-dom-nalogi-rezidentsiya',
  ar: '/ar/turkey-vs-malta-non-dom-tax-residence',
};

const assessmentHref: Record<Locale, string> = {
  fr: '/diagnostic-prive',
  en: '/en/private-assessment',
  ru: '/ru/chastnaya-konsultatsiya',
  ar: '/ar/private-assessment',
};

const content: Record<Locale, { title: string; description: string; cta: string; sections: string[] }> = {
  fr: {
    title: 'Turquie vs Malte : fiscalite, non-dom et revenus etrangers',
    description: 'Comparaison pour entrepreneurs, investisseurs et familles patrimoniales : residence fiscale, revenus etrangers, banque, immobilier, sante, societe et installation.',
    cta: 'Demander une analyse privee',
    sections: [
      'Malte attire par son cadre europeen, anglophone, corporate et financier, mais il faut verifier le cout du logement, la banque, la substance, la vie familiale et la documentation fiscale.',
      'La Turquie offre une logique differente avec Istanbul, Bodrum, Antalya, Izmir, un cout de vie plus flexible, un immobilier varie, une medecine privee developpee et une forte connectivite regionale.',
      'Il faut comparer chaque revenu separement : dividendes, plus-values, interets, consulting, pension, loyers, societe etrangere, holding, succession et immobilier.',
      'La banque demandera un dossier clair : origine des fonds, declarations, contrats, societes, beneficiaires effectifs, preuve de residence et explication de l activite.',
      'Bosphoras peut coordonner une analyse privee pour verifier si la Turquie est coherente par rapport a Malte et aux autres alternatives.',
    ],
  },
  en: {
    title: 'Turkey vs Malta Non-Dom: tax residence, foreign income and relocation',
    description: 'Comparison for international entrepreneurs, investors and families: tax residence, foreign income, banking, property, healthcare, company structure and relocation.',
    cta: 'Request a private assessment',
    sections: [
      'Malta attracts through its EU, English-speaking, corporate and financial environment, but housing cost, banking, substance, family life and documentation must be reviewed.',
      'Turkey offers a different proposition with Istanbul, Bodrum, Antalya, Izmir, flexible cost of living, varied property, private healthcare and strong regional connectivity.',
      'Every income category should be reviewed separately: dividends, capital gains, interest, consulting, pension, rental income, foreign company, holding, inheritance and property.',
      'Banks require a clear file: source of funds, tax filings, contracts, companies, beneficial owners, proof of residence and explanation of real activity.',
      'Bosphoras can coordinate a private review to assess whether Turkey is coherent compared with Malta and other alternatives.',
    ],
  },
  ru: {
    title: 'Turkey vs Malta Non-Dom: tax residence and foreign income',
    description: 'Comparison for international clients: tax residence, foreign income, banking, property, healthcare, company structure and relocation.',
    cta: 'Request a private assessment',
    sections: ['Malta can be attractive for international structures, but housing, banking, substance, healthcare, documentation and family life must be reviewed.', 'Turkey offers Istanbul, Bodrum, Antalya, Izmir, flexible living costs, varied property, private healthcare and access to Europe, the Middle East, the Caucasus and Central Asia.', 'Dividends, capital gains, interest, professional income, pension, rental income, foreign companies, holdings, inheritance and property should be reviewed separately.', 'Banks may ask for source of funds, tax filings, contracts, companies, beneficial owners, proof of residence and explanation of real activity.', 'Bosphoras can coordinate a private review to assess whether Turkey is coherent compared with Malta and other alternatives.'],
  },
  ar: {
    title: 'Turkey vs Malta Non-Dom: tax residence and foreign income',
    description: 'Comparison for international clients: tax residence, foreign income, banking, property, healthcare, company structure and relocation.',
    cta: 'Request a private assessment',
    sections: ['Malta can be attractive for international structures, but housing, banking, substance, healthcare, documentation and family life must be reviewed.', 'Turkey offers Istanbul, Bodrum, Antalya, Izmir, flexible living costs, varied property, private healthcare and access to Europe, the Middle East, the Caucasus and Central Asia.', 'Dividends, capital gains, interest, professional income, pension, rental income, foreign companies, holdings, inheritance and property should be reviewed separately.', 'Banks may ask for source of funds, tax filings, contracts, companies, beneficial owners, proof of residence and explanation of real activity.', 'Bosphoras can coordinate a private review to assess whether Turkey is coherent compared with Malta and other alternatives.'],
  },
};

export function getTurkeyVsMaltaNonDomMetadata(locale: Locale): Metadata {
  const c = content[locale];
  return {
    title: `${c.title} | Bosphoras`,
    description: c.description,
    alternates: {
      canonical: `https://bosphoras.com${paths[locale]}`,
      languages: {
        fr: `https://bosphoras.com${paths.fr}`,
        en: `https://bosphoras.com${paths.en}`,
        ru: `https://bosphoras.com${paths.ru}`,
        ar: `https://bosphoras.com${paths.ar}`,
        'x-default': `https://bosphoras.com${paths.fr}`,
      },
    },
  };
}

export function TurkeyVsMaltaNonDomClientPage({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <>
      <Header locale={locale} currentPath={paths[locale]} />
      <main dir={locale === 'ar' ? 'rtl' : 'ltr'} className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Turkey vs Malta</p>
            <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">{c.title}</h1>
            <p className="mt-8 max-w-4xl text-lg leading-9 text-white/80">{c.description}</p>
            <Link href={assessmentHref[locale]} className="mt-10 inline-flex bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">{c.cta}</Link>
          </div>
        </section>
        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-5">
            {c.sections.map((text, index) => (
              <article key={text} className="border border-[#d8c7a1] bg-white p-7 md:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6728]">{String(index + 1).padStart(2, '0')}</p>
                <p className="mt-5 text-base leading-8 text-[#3e4857]">{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
