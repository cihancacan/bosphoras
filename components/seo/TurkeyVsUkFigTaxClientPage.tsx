import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import type { Locale } from '@/lib/i18n';

const paths: Record<Locale, string> = {
  fr: '/turquie-vs-royaume-uni-fin-non-dom-fiscalite',
  en: '/en/turkey-vs-uk-non-dom-fig-tax-regime',
  ru: '/ru/turtsiya-vs-velikobritaniya-non-dom-fig-nalogi',
  ar: '/ar/turkey-vs-uk-non-dom-fig-tax-regime',
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
    title: 'Turquie vs Royaume-Uni : fin du non-dom, fiscalite, revenus etrangers et residence',
    description: 'Comparaison pour entrepreneurs, investisseurs et familles patrimoniales apres la reforme non-dom UK : FIG regime, fiscalite, revenus etrangers, banque privee, immobilier, succession et installation en Turquie.',
    cta: 'Demander une analyse privee',
    eyebrow: 'Comparaison fiscale · Turquie vs Royaume-Uni',
    sections: [
      ['Royaume-Uni : toujours puissant, mais moins favorable pour certains profils', 'Le Royaume-Uni conserve Londres, les banques privees, les marches financiers, le droit anglais, les ecoles, les universites, l immobilier premium et un reseau international tres fort. Mais depuis la fin de l ancien regime non-dom, certains profils internationaux doivent revoir leur strategie de residence, de banque, de revenus et de patrimoine.'],
      ['FIG regime UK : une logique limitee dans le temps', 'Le nouveau regime britannique de Foreign Income and Gains est base sur la residence et non plus sur l ancien domicile. Il vise principalement des nouveaux residents fiscaux eligibles pendant une periode limitee. Cela change la situation des familles installees depuis longtemps a Londres par rapport aux nouveaux arrivants.'],
      ['Turquie : une alternative pour certains profils mobiles', 'La Turquie ne remplace pas Londres pour tous les profils, mais elle peut interesser des entrepreneurs, investisseurs, rentiers et familles qui recherchent Istanbul comme base business, Bodrum ou Antalya pour la qualite de vie, un cout plus flexible, un immobilier varie, une medecine privee developpee et un acces a l Europe, au Moyen-Orient, au Caucase et a l Asie centrale.'],
      ['Fiscalite : FIG UK vs regime turc annonce', 'La comparaison doit porter sur la residence fiscale reelle, dividendes etrangers, plus-values, interets, revenus locatifs, pension, revenus professionnels, societe etrangere, holding, trust, fondation, immobilier, succession, banque, conventions fiscales et pays d origine. Un titre fiscal ne suffit jamais : il faut verifier la vie reelle et le dossier bancaire.'],
      ['Banque privee : Londres ou Turquie ?', 'Londres reste un centre mondial de private banking et wealth management. Les banques demandent origine des fonds, declarations fiscales, source de richesse, structures offshore, trusts, holdings, societes, beneficiaires effectifs, residence fiscale et conformite. La Turquie repond davantage a une logique d installation, immobilier, activite, comptes locaux, transferts, assurance et coordination familiale.'],
      ['Entrepreneurs, actionnaires et familles patrimoniales', 'Un entrepreneur doit regarder ou la societe est dirigee, ou sont les clients, ou les contrats sont signes, ou les decisions sont prises, ou la banque accepte la structure et ou les dividendes et plus-values apparaissent. Une famille doit comparer banque, ecoles, universites, sante, assurance, logement, cout de vie, succession, statut du conjoint et qualite de vie.'],
      ['Immobilier, sante et vie quotidienne', 'Au Royaume-Uni, Londres, Mayfair, Knightsbridge, Chelsea, Kensington, Marylebone, Canary Wharf, Oxford, Cambridge ou Surrey peuvent entrer dans la strategie. En Turquie, Istanbul, Bodrum, Antalya, Izmir, Alanya, Fethiye ou Mersin repondent a des objectifs differents : residence, investissement, retraite, famille, revente, succession ou acces aux soins.'],
      ['Pays d origine et erreurs a eviter', 'La premiere erreur est de croire que l ancien non-dom britannique existe encore comme avant. La deuxieme est de choisir la Turquie uniquement parce qu un regime fiscal est annonce. Il faut eviter de comparer seulement l impot sans analyser banque, sante, ecole, immobilier, famille, succession, substance, sortie fiscale et pays d origine.'],
      ['Comment Bosphoras peut vous accompagner', 'Bosphoras ne remplace pas un avocat fiscaliste ou un conseiller patrimonial. Notre role est de coordonner une analyse privee, de comparer la Turquie avec le Royaume-Uni et d organiser la partie turque si elle est coherente : residence, banque, immobilier, assurance sante, famille, succession et partenaires locaux.'],
    ],
    faq: [['Le regime non-dom britannique existe-t-il encore ?', 'L ancien regime non-dom base sur le domicile a ete remplace par un regime base sur la residence, souvent appele Foreign Income and Gains regime ou FIG regime.'], ['La Turquie peut-elle devenir une alternative au Royaume-Uni ?', 'Oui, pour certains profils cherchant une base plus flexible, operationnelle et proche de plusieurs regions : Istanbul, Bodrum, Antalya, Europe, Moyen-Orient, Caucase et Asie centrale.'], ['Faut-il choisir uniquement selon la fiscalite ?', 'Non. Il faut comparer banque, sante, ecole, immobilier, famille, cout de vie, residence reelle, societe, succession, mobilite et pays d origine.'], ['Bosphoras peut-il comparer Turquie et Royaume-Uni ?', 'Oui. Bosphoras peut coordonner une analyse privee pour comprendre si la Turquie est coherente par rapport au Royaume-Uni et aux autres alternatives.']],
  },
  en: {
    title: 'Turkey vs UK: non-dom reform, FIG regime, foreign income and relocation',
    description: 'Turkey vs UK for international clients after the non-dom reform: FIG regime, foreign income, private banking, property, family, estate planning and relocation to Turkey.',
    cta: 'Request a private assessment',
    eyebrow: 'Turkey vs UK · Non-dom reform and FIG regime',
    sections: [
      ['The UK remains powerful, but the non-dom landscape has changed', 'The UK still offers London, private banks, financial markets, English law, schools, universities, premium property and a global network. But the end of the old non-dom regime changes how internationally mobile families, entrepreneurs and investors should think about residence, banking, income and wealth planning.'],
      ['UK FIG regime: a residence-based and time-limited approach', 'The Foreign Income and Gains regime is based on residence rather than the historic domicile concept. It is mainly relevant for eligible new UK tax residents during a limited period. Long-established UK residents and new arrivals do not face the same planning reality.'],
      ['Turkey: an alternative for certain mobile profiles', 'Turkey will not replace London for every profile. But it may appeal to entrepreneurs, investors and families seeking Istanbul as a business base, Bodrum or Antalya for lifestyle, more flexible living costs, varied property, private healthcare and access to Europe, the Middle East, the Caucasus and Central Asia.'],
      ['Tax comparison: UK FIG vs Turkey announced regime', 'The comparison should include real tax residence, foreign dividends, capital gains, interest, rental income, pensions, professional income, foreign companies, holdings, trusts, foundations, property, inheritance, banking, treaties and former-country rules. A tax headline is never enough without real-life substance and banking readiness.'],
      ['Private banking: London or Turkey?', 'London remains a global wealth management center. Banks ask for source of funds, tax filings, source of wealth, offshore structures, trusts, holdings, companies, beneficial owners, tax residence and compliance. Turkey plays a different role: local life, property, business activity, local accounts, transfers, insurance and family coordination.'],
      ['Entrepreneurs, shareholders and families', 'Business owners should review where the company is managed, where clients are located, where contracts are signed, where decisions are made, where banks accept the structure and where dividends or gains arise. Families should compare banking, schools, universities, healthcare, insurance, housing, cost of living, estate planning, spouse status and daily quality of life.'],
      ['Property, healthcare and daily life', 'In the UK, London, Mayfair, Knightsbridge, Chelsea, Kensington, Marylebone, Canary Wharf, Oxford, Cambridge or Surrey may be relevant. In Turkey, Istanbul, Bodrum, Antalya, Izmir, Alanya, Fethiye or Mersin serve different goals: residence, investment, retirement, family life, resale, inheritance or healthcare access.'],
      ['Former country and mistakes to avoid', 'Do not assume the former UK non-dom regime still exists as before. Do not choose Turkey only because a tax regime has been announced. Do not compare only tax without reviewing banking, healthcare, schools, property, family, inheritance, substance, exit planning and former-country rules.'],
      ['How Bosphoras can support you', 'Bosphoras does not replace tax lawyers or wealth advisors. Its role is to coordinate a private review, compare Turkey with the UK and organize the Turkey side if suitable: residence, banking, property, healthcare insurance, family, estate planning and local partners.'],
    ],
    faq: [['Does the UK non-dom regime still exist ?', 'The old domicile-based non-dom regime has been replaced by a residence-based approach commonly referred to as the Foreign Income and Gains or FIG regime.'], ['Can Turkey be an alternative to the UK ?', 'Yes, for certain profiles seeking a more flexible operational base connected to Europe, the Middle East, the Caucasus and Central Asia.'], ['Should the choice be only tax-based ?', 'No. Banking, healthcare, schools, property, family, cost of living, real residence, companies, estate planning, mobility and former-country rules matter.'], ['Can Bosphoras compare Turkey and the UK ?', 'Yes. Bosphoras can coordinate a private review to assess whether Turkey is coherent compared with the UK and other alternatives.']],
  },
  ru: {
    title: 'Турция vs Великобритания: non-dom, FIG, налоги и иностранные доходы',
    description: 'Сравнение для инвесторов и семей после реформы non-dom UK: FIG regime, иностранные доходы, банки, недвижимость, семья, наследство и переезд в Турцию.',
    cta: 'Запросить частный анализ',
    eyebrow: 'Турция vs Великобритания · Non-dom и FIG',
    sections: [
      ['Великобритания остается сильной, но правила изменились', 'Лондон сохраняет банки, финансовые рынки, английское право, школы, университеты, premium-недвижимость и международную сеть. Но окончание старого non-dom режима меняет стратегию резиденции, банков, доходов и капитала для международных семей и предпринимателей.'],
      ['FIG regime: новая логика по резиденции', 'Новый режим Foreign Income and Gains основан на резиденции, а не на старой концепции domicile. Он в основном важен для eligible новых налоговых резидентов UK в ограниченный период. Старые резиденты Лондона и новые arrivals находятся в разных ситуациях.'],
      ['Турция: альтернатива для мобильных профилей', 'Турция не заменяет Лондон для всех. Но она может быть интересна предпринимателям, инвесторам и семьям, которым нужны Стамбул, Бодрум, Анталья, более гибкая стоимость жизни, недвижимость, частная медицина и доступ к Европе, Ближнему Востоку, Кавказу, Казахстану и Центральной Азии.'],
      ['Налоги: UK FIG vs турецкий объявленный режим', 'Нужно сравнивать реальную резиденцию, иностранные дивиденды, gains, проценты, аренду, пенсии, профессиональные доходы, иностранные компании, holdings, trusts, недвижимость, наследство, банки, соглашения и прежнюю страну.'],
      ['Банки: Лондон или Турция', 'Лондон остается центром wealth management. Банки требуют источник средств, декларации, source of wealth, offshore structures, trusts, holdings, компании, бенефициаров, резиденцию и compliance. Турция решает другие задачи: жизнь, недвижимость, бизнес, счета, переводы, страховка и семья.'],
      ['Предприниматели и семьи', 'Бизнесу нужно понять, где управляется компания, где клиенты, где подписываются договоры, где принимаются решения и где появляются дивиденды или gains. Семьи сравнивают банки, школы, университеты, медицину, жилье, стоимость жизни, наследство и daily life.'],
      ['Недвижимость, медицина и жизнь', 'В UK это может быть London, Mayfair, Knightsbridge, Chelsea, Kensington, Oxford, Cambridge или Surrey. В Турции — Istanbul, Bodrum, Antalya, Izmir, Alanya, Fethiye или Mersin.'],
      ['Прежняя страна и ошибки', 'Не думайте, что старый UK non-dom работает как раньше. Не выбирайте Турцию только из-за объявленного режима. Нельзя сравнивать только налог без банков, медицины, школы, недвижимости, семьи, наследства, substance и выхода из прежней страны.'],
      ['Как Bosphoras может помочь', 'Bosphoras координирует частный анализ, сравнение Турции с UK и турецкую часть, если она подходит: резиденция, банк, недвижимость, страховка, семья, наследство и местные партнеры.'],
    ],
    faq: [['Старый UK non-dom еще существует ?', 'Старый режим на базе domicile заменен резидентским режимом, часто называемым Foreign Income and Gains или FIG regime.'], ['Может ли Турция быть альтернативой UK ?', 'Да, для некоторых профилей, которым нужна более гибкая база между Европой, Ближним Востоком, Кавказом и Центральной Азией.'], ['Выбирать только по налогам ?', 'Нет. Важны банки, медицина, школы, недвижимость, семья, стоимость жизни, резиденция, компании, наследство и прежняя страна.'], ['Bosphoras может сравнить Турцию и UK ?', 'Да. Bosphoras может координировать частный анализ и понять, подходит ли Турция по сравнению с UK.']],
  },
  ar: {
    title: 'Turkey vs UK: non-dom reform, FIG regime and foreign income',
    description: 'Comparison for investors and families after the UK non-dom reform: FIG regime, foreign income, private banking, property, family, estate planning and relocation to Turkey.',
    cta: 'Request a private assessment',
    eyebrow: 'Turkey vs UK · Non-dom and FIG',
    sections: [
      ['The UK remains powerful, but the rules changed', 'London still offers private banks, financial markets, English law, schools, universities, premium property and a global network. But the end of the old non-dom regime changes planning for international families and entrepreneurs.'],
      ['FIG regime: a new residence-based approach', 'The new Foreign Income and Gains regime is based on residence rather than the former domicile concept. It is mainly relevant for eligible new UK tax residents during a limited period.'],
      ['Turkey: an alternative for mobile profiles', 'Turkey may fit investors and families seeking Istanbul, Bodrum, Antalya, flexible living costs, varied property, private healthcare and access to Europe, the Middle East, the Caucasus and Central Asia.'],
      ['Tax comparison', 'Real tax residence, dividends, gains, interest, rental income, pensions, professional income, companies, holdings, trusts, property, inheritance, banking, treaties and former-country rules should be reviewed separately.'],
      ['Banking and wealth', 'London remains a wealth management center. Banks require source of funds, tax filings, wealth structures, companies, beneficial owners, residence and compliance. Turkey plays a different role around life, property, business, transfers, insurance and family.'],
      ['Families and private clients', 'Families should compare private banking, schools, universities, healthcare, insurance, housing, cost of living, estate planning, spouse status, children and daily quality of life.'],
      ['Property and healthcare', 'The UK may mean London, Mayfair, Knightsbridge, Chelsea, Oxford or Cambridge. Turkey may mean Istanbul, Bodrum, Antalya, Izmir, Alanya, Fethiye or Mersin.'],
      ['Mistakes to avoid', 'Do not assume the former UK non-dom regime still works as before. Do not choose Turkey only because a tax regime has been announced. Banking, schools, healthcare, property, family, inheritance and exit planning matter.'],
      ['How Bosphoras can support you', 'Bosphoras coordinates a private review and relevant advisors to assess whether Turkey is coherent compared with the UK and other alternatives.'],
    ],
    faq: [['Does the old UK non-dom still exist ?', 'The former domicile-based regime has been replaced by a residence-based FIG regime.'], ['Can Turkey be an alternative to the UK ?', 'Yes, for some investors and families seeking a flexible base connected to Europe, the Middle East and Central Asia.'], ['Should the choice be only tax-based ?', 'No. Banking, schools, healthcare, property, family, estate planning and former-country rules matter.'], ['Can Bosphoras compare Turkey and the UK ?', 'Yes. Bosphoras can coordinate a private review.']],
  },
};

export function getTurkeyVsUkFigTaxMetadata(locale: Locale): Metadata {
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

export function TurkeyVsUkFigTaxClientPage({ locale }: { locale: Locale }) {
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
