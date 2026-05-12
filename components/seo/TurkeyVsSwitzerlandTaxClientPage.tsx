import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import type { Locale } from '@/lib/i18n';

const paths: Record<Locale, string> = {
  fr: '/turquie-vs-suisse-fiscalite-revenus-etrangers',
  en: '/en/turkey-vs-switzerland-tax-residence-foreign-income',
  ru: '/ru/turtsiya-vs-shveytsariya-nalogi-rezidentsiya',
  ar: '/ar/turkey-vs-switzerland-tax-residence-foreign-income',
};

const assessmentHref: Record<Locale, string> = {
  fr: '/diagnostic-prive',
  en: '/en/private-assessment',
  ru: '/ru/chastnaya-konsultatsiya',
  ar: '/ar/private-assessment',
};

type PageData = { title: string; description: string; cta: string; eyebrow: string; sections: Array<[string, string]>; faq: Array<[string, string]> };

const content: Record<Locale, PageData> = {
  fr: {
    title: 'Turquie vs Suisse : fiscalite, residence, revenus etrangers et patrimoine',
    description: 'Comparaison pour entrepreneurs, investisseurs et familles patrimoniales : residence fiscale, banque privee, revenus etrangers, immobilier, sante, succession et installation en Turquie.',
    cta: 'Demander une analyse privee',
    eyebrow: 'Comparaison fiscale · Turquie vs Suisse',
    sections: [
      ['Suisse : une reference patrimoniale, mais exigeante', 'La Suisse reste une reference mondiale pour la stabilite, la banque privee, la gestion de patrimoine, la qualite de vie et la securite juridique. Mais elle demande un dossier solide : cout de vie eleve, logement cher, assurance sante couteuse, banques exigeantes, fiscalite cantonale variable, documentation patrimoniale, substance de residence et niveau de patrimoine coherent.'],
      ['Turquie : une alternative plus accessible et operationnelle', 'La Turquie peut interesser les entrepreneurs, investisseurs, rentiers et familles qui recherchent Istanbul comme base business, Bodrum ou Antalya pour la qualite de vie, un immobilier plus varie, une medecine privee developpee, une forte connectivite aerienne et une proximite avec l Europe, le Moyen-Orient, le Caucase et l Asie centrale.'],
      ['Fiscalite : ne pas comparer seulement les taux', 'Il faut analyser la residence fiscale reelle, les dividendes, plus-values, pensions, revenus locatifs, revenus professionnels, societes etrangeres, holdings, portefeuille financier, succession, immobilier, conventions fiscales et obligations declaratives. La Suisse peut etre tres structuree, tandis que la Turquie peut devenir competitive si le regime annonce est confirme et si l installation est coherente.'],
      ['Banque privee : Suisse ou Turquie ?', 'La Suisse reste une reference pour la banque privee internationale. Les banques suisses sont tres exigeantes sur l origine des fonds, les declarations fiscales, les societes, les beneficiaires effectifs, les holdings, la conformite et la residence fiscale. La Turquie repond davantage a une logique de vie locale, immobilier, activite, transferts, assurance et installation familiale.'],
      ['Entrepreneurs, actionnaires et familles patrimoniales', 'Un dirigeant doit verifier ou la societe est dirigee, ou les contrats sont signes, ou les dividendes et plus-values apparaissent et ou la residence est reelle. Une famille doit comparer banque privee, securite, ecoles, sante, logement, cout de vie, succession, transmission, conjoint, enfants et qualite de vie.'],
      ['Immobilier, sante et vie quotidienne', 'La Suisse peut signifier Geneve, Zurich, Lausanne, Montreux, Lugano, Zoug, Gstaad ou Saint-Moritz. La Turquie peut signifier Istanbul, Bodrum, Antalya, Izmir, Alanya, Fethiye ou Mersin. Le choix depend du budget, de la sante, de la mobilite, de la succession, de la revente et de la vraie vie familiale.'],
      ['Pays d origine et erreurs a eviter', 'Que vous choisissiez la Suisse ou la Turquie, le pays d origine peut continuer a vous considerer resident fiscal si votre foyer, votre famille, vos actifs, vos revenus ou votre societe y restent principalement. Il faut eviter de choisir uniquement pour l image patrimoniale, un slogan fiscal, ou sans preparer banque, assurance, logement et sortie fiscale.'],
      ['Comment Bosphoras peut vous accompagner', 'Bosphoras ne remplace pas un fiscaliste ou un conseiller patrimonial. Notre role est de coordonner une analyse privee, de comparer la Turquie avec la Suisse et d organiser la partie turque si elle est coherente : residence, banque, immobilier, assurance sante, famille, succession et partenaires locaux.'],
    ],
    faq: [['La Suisse est-elle plus sure que la Turquie pour le patrimoine ?', 'La Suisse reste une reference pour la stabilite et la banque privee. La Turquie peut etre pertinente pour certains profils qui cherchent une base de vie, d affaires et d investissement plus flexible.'], ['La Turquie peut-elle remplacer la Suisse ?', 'Pas pour tous les profils, mais elle peut devenir une alternative partielle ou complementaire pour certains entrepreneurs, familles, investisseurs et rentiers.'], ['Faut-il choisir uniquement selon la fiscalite ?', 'Non. Il faut comparer banque, sante, immobilier, famille, cout de vie, residence reelle, societe, succession et pays d origine.'], ['Bosphoras peut-il comparer Turquie et Suisse ?', 'Oui. Bosphoras peut coordonner une analyse privee pour comprendre si la Turquie est coherente par rapport a la Suisse et aux autres alternatives.']],
  },
  en: {
    title: 'Turkey vs Switzerland: tax residence, foreign income and wealth planning',
    description: 'Comparison for international investors and families: private banking, tax residence, foreign income, property, healthcare, estate planning and relocation to Turkey.',
    cta: 'Request a private assessment',
    eyebrow: 'Turkey vs Switzerland · Wealth and tax residence',
    sections: [
      ['Switzerland: a global wealth reference, but demanding', 'Switzerland is associated with stability, private banking, wealth management, legal security and quality of life. But it requires a strong file: high cost of living, expensive housing, health insurance, demanding banks, canton-level tax differences, wealth documentation, residence substance and a coherent level of assets or income.'],
      ['Turkey: a more accessible operational base', 'Turkey may appeal to entrepreneurs, investors and families seeking Istanbul as a business base, Bodrum or Antalya for lifestyle, varied property, developed private healthcare, strong air connectivity and access to Europe, the Middle East, the Caucasus and Central Asia.'],
      ['Tax: do not compare only headline rates', 'Tax residence, dividends, capital gains, pensions, rental income, professional income, foreign companies, holdings, investment portfolios, inheritance, property, treaties and reporting obligations should be reviewed separately. Switzerland can be highly structured; Turkey may become competitive if final rules support the announced regime and real relocation is coherent.'],
      ['Private banking: Switzerland or Turkey?', 'Swiss private banks are highly demanding on source of funds, tax filings, wealth structures, beneficial owners, companies, holdings, compliance and tax residence. Turkey has a different role: local life, property, business activity, transfers, insurance and family relocation.'],
      ['Entrepreneurs, shareholders and families', 'Business owners should review where the company is managed, where contracts are signed, where dividends and gains arise and where real residence is located. Families should compare private banking, safety, schools, healthcare, housing, cost of living, estate planning, spouse status, children and daily quality of life.'],
      ['Property, healthcare and daily life', 'Switzerland may mean Geneva, Zurich, Lausanne, Montreux, Lugano, Zug, Gstaad or St Moritz. Turkey may mean Istanbul, Bodrum, Antalya, Izmir, Alanya, Fethiye or Mersin. The right choice depends on budget, healthcare, mobility, estate planning, resale and family life.'],
      ['Former country and mistakes to avoid', 'Moving to Switzerland or Turkey does not automatically end former-country tax obligations. Avoid choosing only for the wealth image, a tax headline or without preparing banking, source of funds, insurance, housing, family and exit planning.'],
      ['How Bosphoras can support you', 'Bosphoras does not replace tax lawyers or wealth advisors. Its role is to coordinate a private review, compare Turkey with Switzerland and organize the Turkey side if suitable: residence, banking, property, healthcare insurance, family, estate planning and local partners.'],
    ],
    faq: [['Is Switzerland safer for wealth than Turkey ?', 'Switzerland remains a reference for stability and private banking. Turkey may suit certain profiles seeking a more flexible living, business and investment base.'], ['Can Turkey replace Switzerland ?', 'Not for every profile, but it can be a partial or complementary alternative for some entrepreneurs, families, investors and rentiers.'], ['Should the choice be only tax-based ?', 'No. Banking, healthcare, property, family, cost of living, real residence, companies, estate planning and former-country rules matter.'], ['Can Bosphoras compare Turkey and Switzerland ?', 'Yes. Bosphoras can coordinate a private review to assess whether Turkey is coherent compared with Switzerland and other alternatives.']],
  },
  ru: {
    title: 'Турция vs Швейцария: налоги, резиденция, банки и капитал',
    description: 'Сравнение для инвесторов и семей: private banking, налоговая резиденция, иностранные доходы, недвижимость, медицина, наследство и переезд в Турцию.',
    cta: 'Запросить частный анализ',
    eyebrow: 'Турция vs Швейцария · Капитал и резиденция',
    sections: [
      ['Швейцария: мировая reference для капитала', 'Швейцария ассоциируется со стабильностью, private banking, управлением капиталом, юридической безопасностью и качеством жизни. Но нужны сильный файл, высокая стоимость жизни, дорогая недвижимость, страховка, требовательные банки, документы по происхождению средств и реальная substance резиденции.'],
      ['Турция: более доступная и операционная база', 'Турция может подойти предпринимателям, инвесторам и семьям, которым нужны Стамбул, Бодрум, Анталья, разнообразная недвижимость, частная медицина, авиасвязь и доступ к Европе, Ближнему Востоку, Кавказу, Казахстану и Центральной Азии.'],
      ['Налоги: не сравнивать только ставки', 'Нужно отдельно анализировать резиденцию, дивиденды, gains, пенсии, аренду, профессиональные доходы, иностранные компании, holdings, портфель, наследство, недвижимость, соглашения и отчетность.'],
      ['Банки: Швейцария или Турция', 'Швейцарские банки очень требовательны к источнику средств, декларациям, структуре капитала, бенефициарам, компаниям, compliance и резиденции. Турция чаще решает вопросы локальной жизни, недвижимости, бизнеса, переводов, страховки и семьи.'],
      ['Предприниматели и семьи', 'Владельцам бизнеса нужно понять, где управляется компания, где подписываются договоры, где появляются дивиденды и gains, и где реальная резиденция. Семьям важно сравнить безопасность, школы, медицину, жилье, стоимость жизни, наследство и daily life.'],
      ['Недвижимость, медицина и жизнь', 'Швейцария может означать Geneva, Zurich, Lausanne, Montreux, Lugano, Zug, Gstaad или St Moritz. Турция может означать Istanbul, Bodrum, Antalya, Izmir, Alanya, Fethiye или Mersin.'],
      ['Прежняя страна и ошибки', 'Переезд в Швейцарию или Турцию не отменяет автоматически обязанности в прежней стране. Нельзя выбирать только по имиджу, налоговому заголовку или без подготовки банка, источника средств, страховки, жилья и семьи.'],
      ['Как Bosphoras может помочь', 'Bosphoras координирует частный анализ, сравнение Турции со Швейцарией и турецкую часть, если она подходит: резиденция, банк, недвижимость, страховка, семья, наследство и местные партнеры.'],
    ],
    faq: [['Швейцария безопаснее для капитала ?', 'Швейцария остается reference для стабильности и private banking. Турция может подойти как более гибкая база для жизни, бизнеса и инвестиций.'], ['Может ли Турция заменить Швейцарию ?', 'Не для всех, но для некоторых предпринимателей, семей и инвесторов может быть частичной или дополнительной альтернативой.'], ['Выбирать только по налогам ?', 'Нет. Важны банки, медицина, недвижимость, семья, стоимость жизни, реальная резиденция, компании, наследство и прежняя страна.'], ['Bosphoras может сравнить Турцию и Швейцарию ?', 'Да. Bosphoras может координировать частный анализ и понять, подходит ли Турция по сравнению со Швейцарией.']],
  },
  ar: {
    title: 'Turkey vs Switzerland: tax residence, private banking and wealth planning',
    description: 'Comparison for investors and families: private banking, tax residence, foreign income, property, healthcare, estate planning and relocation to Turkey.',
    cta: 'Request a private assessment',
    eyebrow: 'Turkey vs Switzerland · Wealth planning',
    sections: [
      ['Switzerland: a global wealth reference', 'Switzerland is known for stability, private banking, wealth management, legal security and quality of life. But it requires a strong file, high living costs, expensive housing, health insurance, demanding banks, wealth documentation and real residence substance.'],
      ['Turkey: a broader lifestyle and business base', 'Turkey may fit investors and families seeking Istanbul, Bodrum, Antalya, varied property, private healthcare, strong flights and access to Europe, the Middle East, the Caucasus and Central Asia.'],
      ['Tax: compare every income category', 'Tax residence, dividends, gains, pensions, rental income, professional income, companies, holdings, portfolio, inheritance, property, treaties and reporting should be reviewed separately.'],
      ['Banking and source of funds', 'Swiss banks are demanding on source of funds, filings, wealth structures, beneficial owners, companies, compliance and residence. Turkey has a different role: local life, property, business, transfers, insurance and family relocation.'],
      ['Families and private clients', 'Families should compare safety, schools, healthcare, housing, cost of living, banking, estate planning, spouse status, children, flights and daily quality of life.'],
      ['Property and healthcare', 'Switzerland may mean Geneva, Zurich, Lausanne, Lugano, Zug or Gstaad. Turkey may mean Istanbul, Bodrum, Antalya, Izmir, Alanya, Fethiye or Mersin.'],
      ['Former country and mistakes', 'Moving country does not automatically end former-country tax obligations. Avoid choosing only because of image or tax headlines without banking, source of funds, insurance, housing and family planning.'],
      ['How Bosphoras can support you', 'Bosphoras coordinates a private review and relevant advisors to assess whether Turkey is coherent compared with Switzerland and other alternatives.'],
    ],
    faq: [['Is Switzerland safer for wealth ?', 'Switzerland is a global reference for private banking. Turkey may suit certain clients seeking a flexible lifestyle and investment base.'], ['Can Turkey replace Switzerland ?', 'Not for every profile, but it can be a partial or complementary alternative.'], ['Should the choice be only tax-based ?', 'No. Banking, healthcare, property, family, cost of living, residence, companies, estate planning and former-country rules matter.'], ['Can Bosphoras compare Turkey and Switzerland ?', 'Yes. Bosphoras can coordinate a private review.']],
  },
};

export function getTurkeyVsSwitzerlandTaxMetadata(locale: Locale): Metadata {
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

export function TurkeyVsSwitzerlandTaxClientPage({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <>
      <Header locale={locale} currentPath={paths[locale]} />
      <main dir={locale === 'ar' ? 'rtl' : 'ltr'} className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">{c.eyebrow}</p>
            <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">{c.title}</h1>
            <p className="mt-8 max-w-4xl text-lg leading-9 text-white/80">{c.description}</p>
            <Link href={assessmentHref[locale]} className="mt-10 inline-flex bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">{c.cta}</Link>
          </div>
        </section>
        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-5">
            {c.sections.map(([title, text], index) => (
              <article key={title} className="border border-[#d8c7a1] bg-white p-7 md:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6728]">{String(index + 1).padStart(2, '0')}</p>
                <h2 className="mt-4 font-serif text-3xl text-[#121826]">{title}</h2>
                <p className="mt-5 text-base leading-8 text-[#3e4857]">{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1000px]">
            <h2 className="font-serif text-4xl">FAQ</h2>
            <div className="mt-8 grid gap-4">
              {c.faq.map(([q, a]) => <article key={q} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl">{q}</h3><p className="mt-3 leading-8 text-[#3e4857]">{a}</p></article>)}
            </div>
            <Link href={assessmentHref[locale]} className="mt-8 inline-flex bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white">{c.cta}</Link>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
