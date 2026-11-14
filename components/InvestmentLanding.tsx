import Link from 'next/link';
import { ArrowRight, Building2, ChartNoAxesCombined, Clock3, FileSearch, Globe2, Handshake, ShieldCheck, Landmark, MoveUpRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { InvestmentInquiryForm } from '@/components/InvestmentInquiryForm';
import { breadcrumbSchema, faqSchema } from '@/lib/seo';

type InvestmentLocale = 'fr' | 'en';

const content = {
  fr: {
    eyebrow: 'Bosphoras Investment Partners',
    h1: 'Le capital rencontre les entreprises qui construisent demain.',
    intro: 'Industrie, énergie, intelligence artificielle, santé, services et hôtellerie : Bosphoras accompagne les entreprises dans la préparation de leur financement et les investisseurs dans la découverte de projets à examiner avec exigence.',
    ctaProject: 'Soumettre un projet', ctaInvestor: 'Je suis investisseur',
    note: 'Accompagnement international · Études & structuration · Accès aux opportunités selon éligibilité',
    editorialTitle: 'Une approche sélective, pas un catalogue de promesses.',
    editorialText: 'Notre ambition est de rapprocher des entrepreneurs ayant un projet économique identifiable et des investisseurs qui souhaitent comprendre précisément où leur argent serait engagé. Chaque dossier doit expliquer l’activité, l’équipe, l’utilisation des fonds, les perspectives et les risques. La transparence prime sur l’effet d’annonce.',
    pathsTitle: 'Deux portes d’entrée. Une même exigence.',
    founder: 'Entreprises & porteurs de projets', founderTitle: 'Vous cherchez des capitaux pour une ambition concrète.',
    founderText: 'Création d’un site industriel, extension d’une entreprise rentable, financement de nouveaux équipements, croissance d’une société technologique ou acquisition stratégique : nous étudions le besoin, la structure et la présentation de votre projet.',
    investor: 'Investisseurs privés & professionnels', investorTitle: 'Découvrir des entreprises, comprendre les engagements.',
    investorText: 'Explorez notre démarche de sélection et faites-nous connaître vos domaines d’intérêt. Les opportunités futures préciseront le type de titre, la durée, la rémunération éventuelle, le risque de perte et les modalités de sortie. Aucun placement n’est ouvert sur cette page.',
    servicesEyebrow: 'Pour les entreprises', servicesTitle: 'De la première analyse à un dossier prêt à être examiné.',
    services: [
      { title: 'Diagnostic & faisabilité', desc: 'Analyse du besoin de capitaux, de la maturité de l’entreprise et du modèle économique. Une première décision claire sur la pertinence d’aller plus loin.' },
      { title: 'Étude financière & business plan', desc: 'Hypothèses documentées, flux de trésorerie, besoin de financement, scénarios et capacité prévisionnelle de remboursement lorsque pertinente.' },
      { title: 'Dossier investisseurs & structuration', desc: 'Note de présentation, documentation, préparation de la data room, comparaison des options : actions, obligations ou financement de projet.' },
      { title: 'Développement & suivi', desc: 'Appui stratégique, suivi des jalons et rapports de gestion. Pour certaines opérations importantes, une participation minoritaire de Bosphoras peut être étudiée, avec transparence et accords distincts.' }
    ],
    processEyebrow: 'Notre méthode', processTitle: 'Le parcours d’un projet.',
    steps: [
      { title: '01 — Candidature', desc: 'L’entreprise décrit son activité, son pays d’implantation, son équipe et ses besoins.' },
      { title: '02 — Analyse', desc: 'Nous examinons les données disponibles, les besoins et les principaux risques avant de proposer une mission.' },
      { title: '03 — Préparation', desc: 'Le dossier financier, la documentation et les conditions de financement sont préparés avec les experts concernés.' },
      { title: '04 — Partenaires', desc: 'Si le projet est éligible, sa distribution et les souscriptions sont confiées à des intermédiaires dûment habilités.' },
      { title: '05 — Suivi', desc: 'Les investisseurs reçoivent les informations et échéanciers prévus par l’opération, avec un suivi des réalisations et incidents.' }
    ],
    formatsEyebrow: 'Comprendre les possibilités', formatsTitle: 'Financement par dette, participation au capital ou opérations privées.',
    formats: [
      { title: 'Dette & obligations', tag: 'Revenus contractuels éventuels', desc: 'Le contrat peut prévoir des intérêts périodiques et un remboursement à une échéance déterminée. Les montants restent exposés au défaut de l’entreprise ; les versements ne sont pas garantis.' },
      { title: 'Capital & actions', tag: 'Potentiel de croissance', desc: 'L’investisseur devient actionnaire. Les dividendes ne sont jamais automatiques ; la sortie dépend de la possibilité de céder les titres, parfois après plusieurs années.' },
      { title: 'Grands projets & capital privé', tag: 'Montage sur mesure', desc: 'Industrie, énergie, infrastructures ou acquisitions : financement structuré avec investisseurs professionnels et partenaires spécialisés, selon les autorisations applicables.' }
    ],
    trustTitle: 'Ce que nous voulons rendre visible avant toute décision.',
    trust: [
      'La société porteuse du projet et ses bénéficiaires effectifs',
      'L’usage précis des fonds et les chiffres disponibles',
      'Les hypothèses financières, les risques et les frais',
      'Le calendrier des versements contractuellement prévus',
      'La durée, les restrictions et les conditions de sortie',
      'Les liens économiques et les éventuels conflits d’intérêts'
    ],
    riskTitle: 'Une plateforme d’information, pas un compte bancaire.',
    riskText: 'L’investissement en entreprise peut entraîner une perte partielle ou totale du capital. Un taux affiché correspond à une obligation contractuelle éventuelle, non à un rendement certain. Les titres non cotés et les prêts ne sont généralement pas remboursables à volonté. Les offres et souscriptions ne seront possibles qu’après validation juridique et intervention des opérateurs habilités appropriés.',
    faqTitle: 'Questions fréquentes',
    faqs: [
      { question: 'Puis-je investir à partir de 1 000 € ?', answer: 'L’objectif de Bosphoras est d’étudier des tickets accessibles, potentiellement dès 1 000 € pour certaines opérations. Le minimum réel dépendra de chaque projet, de son montage et des règles d’éligibilité. Aucune souscription n’est disponible actuellement.' },
      { question: 'Peut-on recevoir des intérêts dès le deuxième mois ?', answer: 'Certains prêts ou titres de dette peuvent prévoir des échéances mensuelles ou trimestrielles, éventuellement à partir du deuxième mois. Les versements dépendent des contrats et de la capacité de paiement de l’émetteur ; ils ne sont pas garantis.' },
      { question: 'Quand puis-je récupérer mon argent ?', answer: 'La durée et les conditions de sortie sont propres à chaque opération. Un prêt peut prévoir un remboursement à l’échéance ; une action non cotée peut ne pas trouver d’acheteur. Il ne faut pas assimiler ces placements à un compte épargne librement retirable.' },
      { question: 'Comment soumettre une entreprise à financer ?', answer: 'Remplissez le formulaire en indiquant le pays, l’activité, la somme recherchée et l’utilisation prévue des fonds. L’examen initial ne vaut ni acceptation ni promesse d’accès à un réseau d’investisseurs.' },
      { question: 'Quels services sont facturés à l’entreprise ?', answer: 'Selon le dossier : diagnostic approfondi, étude financière, business plan, documentation investisseurs, structuration et suivi. Une proposition d’honoraires est fournie avant chaque mission. Aucune collecte de fonds n’est proposée par ce formulaire.' },
      { question: 'Bosphoras gère-t-il mon argent ?', answer: 'Non. Cette page présente un projet de branche de services et reçoit des demandes d’information. Les futures opérations financières, lorsqu’elles seront autorisées, devront passer par des prestataires habilités, selon les pays concernés.' }
    ],
    founderFormTitle: 'Présentez votre projet.',
    founderFormText: 'Quelques informations suffisent pour un premier examen confidentiel. Aucun règlement ni frais ne vous sont demandés à ce stade.',
    investorFormTitle: 'Échangeons sur votre profil d’investisseur.',
    investorFormText: 'Indiquez-nous les secteurs qui vous intéressent. Ce formulaire est une demande d’information : il ne constitue ni un ordre de souscription ni une recommandation financière.',
    footerTitle: 'Le développement d’une entreprise commence par une conversation sérieuse.',
    footerText: 'Bosphoras Investment Partners est une activité en préparation. Les missions de conseil aux entreprises et les opérations d’investissement obéissent à des cadres distincts. Aucune offre de titres ou de prêt n’est ouverte au public sur cette page.'
  },
  en: {
    eyebrow: 'Bosphoras Investment Partners',
    h1: 'Connecting capital with the businesses building tomorrow.',
    intro: 'Industry, energy, artificial intelligence, healthcare, services and hospitality: Bosphoras helps companies prepare their funding strategy and helps investors discover businesses worth examining in depth.',
    ctaProject: 'Submit a project', ctaInvestor: 'I am an investor',
    note: 'International perspective · Financial preparation · Opportunities subject to eligibility',
    editorialTitle: 'A selective approach. Not a catalogue of promises.',
    editorialText: 'We aim to bring together entrepreneurs with a real economic activity and investors who want to understand where their capital may be committed. Every proposal should explain its business model, team, use of funds, outlook and risks. Clarity matters more than marketing claims.',
    pathsTitle: 'Two ways to connect. One standard of diligence.',
    founder: 'Companies & project owners', founderTitle: 'Looking for capital to develop a real business?',
    founderText: 'A new industrial facility, an expansion of a trading business, new equipment, technology growth or a strategic acquisition: we study the need, financial structure and presentation of your project.',
    investor: 'Private & professional investors', investorTitle: 'Discover businesses. Understand the commitments.',
    investorText: 'Explore our approach and tell us about your interests. Future opportunities will specify the instrument, term, potential payments, risks and exit restrictions. No investment is open for subscription on this page.',
    servicesEyebrow: 'For companies', servicesTitle: 'From initial assessment to an investment-ready dossier.',
    services: [
      { title: 'Assessment & feasibility', desc: 'Review of the funding need, company maturity and economic model, with an initial decision on whether a more detailed assignment makes sense.' },
      { title: 'Financial analysis & business plan', desc: 'Evidence-based assumptions, cash-flow planning, capital requirements, scenarios and projected debt-servicing capacity where relevant.' },
      { title: 'Investment memo & structuring', desc: 'Company presentation, documentation, data-room preparation and a comparison of equity, debt and project-finance alternatives.' },
      { title: 'Strategic support & reporting', desc: 'Operating milestones and reporting. For selected substantial engagements, a minority strategic equity interest may be discussed separately and transparently.' }
    ],
    processEyebrow: 'Our process', processTitle: 'How a project progresses.',
    steps: [
      { title: '01 — Application', desc: 'The company describes its business, location, team and capital requirements.' },
      { title: '02 — Review', desc: 'We assess the information available, financial needs and key risks before proposing an engagement.' },
      { title: '03 — Preparation', desc: 'Financial materials, supporting documents and funding terms are prepared with appropriate specialists.' },
      { title: '04 — Regulated partners', desc: 'Where eligible, distribution and subscriptions are entrusted to properly authorised financial intermediaries.' },
      { title: '05 — Reporting', desc: 'Investors receive the contractual disclosures and schedules for their operation, including updates and incident reporting.' }
    ],
    formatsEyebrow: 'Investment structures', formatsTitle: 'Debt, equity and privately structured transactions.',
    formats: [
      { title: 'Debt & bonds', tag: 'Potential contractual income', desc: 'Agreements may schedule interest and repayment at a set maturity. Issuer default can prevent payment, and capital is not guaranteed.' },
      { title: 'Equity & shares', tag: 'Growth potential', desc: 'Investors become shareholders. Dividends are discretionary, while selling privately held shares may be difficult or impossible for years.' },
      { title: 'Private capital & large projects', tag: 'Tailored structures', desc: 'Industrial, energy, infrastructure and acquisition transactions may require specialist investors, bespoke financing and authorised partners.' }
    ],
    trustTitle: 'What investors deserve to know before deciding.',
    trust: [
      'The legal issuer and ultimate ownership',
      'Specific use of proceeds and available financial statements',
      'Assumptions, material risks and all fees',
      'Contractually scheduled payments, if any',
      'Maturity, restrictions and exit conditions',
      'Related-party interests and potential conflicts'
    ],
    riskTitle: 'Investment information, not a bank account.',
    riskText: 'Private investments may result in partial or total capital loss. A contractual interest rate is not a guaranteed return. Unlisted shares and private loans are generally illiquid. Investments will only be made available after legal validation and through appropriately authorised operators.',
    faqTitle: 'Frequently asked questions',
    faqs: [
      { question: 'Can I invest from €1,000?', answer: 'Our ambition is to explore accessible tickets, potentially from €1,000 on suitable transactions. Actual minimums depend on the issuer, structure and eligibility rules. No subscription is currently offered.' },
      { question: 'Can interest start arriving in month two?', answer: 'Some debt instruments may schedule monthly or quarterly payments, possibly as early as month two. Payments depend on the issuer meeting its obligations and are not guaranteed.' },
      { question: 'When can I withdraw my capital?', answer: 'Each investment has its own maturity and exit rules. Private debt may be repaid at maturity; private shares may have no ready buyer. These investments are not instant-access savings accounts.' },
      { question: 'How do I submit my company for funding?', answer: 'Use the project form and describe your location, business, amount sought and intended use of funds. Initial consideration does not guarantee acceptance or investor access.' },
      { question: 'What fees do companies pay?', answer: 'Depending on the engagement, services may include financial assessment, business planning, investor materials, structuring and reporting. A written quotation is supplied before the engagement.' },
      { question: 'Does Bosphoras hold investor funds?', answer: 'No. This page is an information and enquiry service. Any future regulated investment services must be delivered by appropriately authorised parties in the relevant jurisdictions.' }
    ],
    founderFormTitle: 'Tell us about your project.',
    founderFormText: 'A few facts are enough for an initial confidential review. There is no fee or payment at this stage.',
    investorFormTitle: 'Tell us how you invest.',
    investorFormText: 'Share the sectors that interest you. This is an information enquiry, not a subscription order or investment recommendation.',
    footerTitle: 'Every substantial business starts with a serious conversation.',
    footerText: 'Bosphoras Investment Partners is a developing service. Corporate advisory and investment transactions are separate activities subject to their respective requirements. No securities or lending offer is open to the public here.'
  }
};

export function InvestmentLanding({ locale }: { locale: InvestmentLocale }) {
  const c = content[locale];
  const path = locale === 'fr' ? '/investissement' : '/en/investment';
  const isFr = locale === 'fr';
  return (
    <>
      <StructuredData data={breadcrumbSchema([{name: 'Bosphoras', url: 'https://www.bosphoras.com/'}, {name: 'Investment Partners', url: 'https://www.bosphoras.com' + path}])}/>
      <StructuredData data={faqSchema(c.faqs)}/>
      <StructuredData data={{
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'Bosphoras Investment Partners — Corporate Finance Preparation',
        description: c.intro,
        url: 'https://www.bosphoras.com' + path,
        provider: { '@type': 'Organization', name: 'Bosphoras', url: 'https://www.bosphoras.com' },
        serviceType: ['Business plan preparation', 'Financial feasibility assessment', 'Investment documentation', 'Corporate advisory']
      }}/>
      <Header locale={locale} currentPath={path} localizedPaths={{ fr: '/investissement', en: '/en/investment', ru: '/en/investment', ar: '/en/investment' }}/>
      <main lang={locale} className="pt-[4.85rem] bg-white text-[#202629]">
        <section className="border-b border-[#dbe0e1] bg-[#f5f5f3]">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-6 pb-20 pt-20 md:px-12 md:pb-28 md:pt-28 lg:grid-cols-[1.45fr_.55fr] lg:gap-20">
            <div>
              <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.22em] text-[#193344]">{c.eyebrow}</p>
              <h1 className="max-w-[1000px] text-[clamp(3rem,6vw,6.8rem)] font-normal leading-[1.05] tracking-[-0.063em] text-[#193344]">{c.h1}</h1>
              <p className="mt-10 max-w-3xl text-lg leading-9 text-[#4a5961] md:text-xl">{c.intro}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-3 bg-[#193344] px-6 py-4 text-sm text-white hover:bg-[#2c4d61]" href="#soumettre-projet">{c.ctaProject}<ArrowRight size={16}/></a>
                <a className="inline-flex items-center gap-3 border border-[#a3adb2] px-6 py-4 text-sm text-[#193344] hover:border-[#193344]" href="#investisseurs">{c.ctaInvestor}<ArrowRight size={16}/></a>
              </div>
            </div>
            <div className="flex flex-col justify-end border-t border-[#b5bfc3] pt-8 lg:border-l lg:border-t-0 lg:pl-10">
              <Globe2 size={31} strokeWidth={1.1} className="text-[#193344]" aria-hidden="true"/>
              <p className="mt-8 max-w-sm text-[clamp(1.6rem,2.6vw,2.5rem)] font-normal leading-[1.24] tracking-[-0.04em] text-[#193344]">{c.editorialTitle}</p>
              <p className="mt-6 text-sm leading-7 text-[#53616b]">{c.note}</p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#e2e6e7] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto grid max-w-[1340px] gap-10 md:grid-cols-[.75fr_1.25fr] md:gap-20">
            <h2 className="text-3xl font-normal leading-tight tracking-[-0.05em] text-[#193344] md:text-5xl">{c.editorialTitle}</h2>
            <p className="max-w-3xl text-lg leading-9 text-[#495962]">{c.editorialText}</p>
          </div>
        </section>

        <section id="investisseurs" className="scroll-mt-24 bg-white px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-[1340px]">
            <h2 className="max-w-4xl text-4xl font-normal tracking-[-0.05em] text-[#193344] md:text-6xl">{c.pathsTitle}</h2>
            <div className="mt-12 grid gap-0 border-t border-[#d9e0e2] lg:grid-cols-2">
              <article className="border-b border-[#d9e0e2] py-10 lg:border-r lg:pr-12">
                <Building2 size={27} strokeWidth={1.2} className="text-[#193344]"/>
                <p className="mt-8 text-xs uppercase tracking-[0.14em] text-[#53616b]">{c.founder}</p>
                <h3 className="mt-5 max-w-xl text-3xl font-normal leading-tight tracking-[-0.045em] md:text-4xl">{c.founderTitle}</h3>
                <p className="mt-6 max-w-xl text-base leading-8 text-[#53616b]">{c.founderText}</p>
                <a href="#soumettre-projet" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#193344] underline underline-offset-8">{c.ctaProject}<MoveUpRight size={16}/></a>
              </article>
              <article className="border-b border-[#d9e0e2] py-10 lg:pl-12">
                <Landmark size={27} strokeWidth={1.2} className="text-[#193344]"/>
                <p className="mt-8 text-xs uppercase tracking-[0.14em] text-[#53616b]">{c.investor}</p>
                <h3 className="mt-5 max-w-xl text-3xl font-normal leading-tight tracking-[-0.045em] md:text-4xl">{c.investorTitle}</h3>
                <p className="mt-6 max-w-xl text-base leading-8 text-[#53616b]">{c.investorText}</p>
                <a href="#contact-investisseur" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#193344] underline underline-offset-8">{c.ctaInvestor}<MoveUpRight size={16}/></a>
              </article>
            </div>
          </div>
        </section>

        <section id="entreprises" className="scroll-mt-24 border-y border-[#dce1e3] bg-[#f5f5f3] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-[1340px]">
            <p className="text-xs uppercase tracking-[0.18em] text-[#53616b]">{c.servicesEyebrow}</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-normal tracking-[-0.05em] text-[#193344] md:text-6xl">{c.servicesTitle}</h2>
            <div className="mt-14 grid gap-x-12 lg:grid-cols-2">
              {c.services.map((s, i) => <article key={s.title} className="grid grid-cols-[auto_1fr] gap-7 border-t border-[#cbd4d8] py-9">
                <span className="pt-1 text-sm tabular-nums text-[#74838b]">{String(i + 1).padStart(2, '0')}</span>
                <div><h3 className="text-2xl font-normal tracking-[-0.035em] text-[#193344]">{s.title}</h3><p className="mt-4 max-w-xl text-base leading-8 text-[#4e5e68]">{s.desc}</p></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-[1340px]">
            <p className="text-xs uppercase tracking-[0.18em] text-[#53616b]">{c.processEyebrow}</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-normal tracking-[-0.05em] text-[#193344] md:text-6xl">{c.processTitle}</h2>
            <div className="mt-12 grid gap-0 border-t border-[#d9e0e2] md:grid-cols-2 xl:grid-cols-5">
              {c.steps.map((s) => <article key={s.title} className="border-b border-[#d9e0e2] px-4 py-8 first:pl-0 xl:border-r xl:last:border-r-0"><h3 className="text-lg font-normal tracking-[-0.025em] text-[#193344]">{s.title}</h3><p className="mt-4 text-sm leading-7 text-[#58656c]">{s.desc}</p></article>)}
            </div>
          </div>
        </section>

        <section className="border-y border-[#dce1e3] bg-[#f5f5f3] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-[1340px]">
            <p className="text-xs uppercase tracking-[0.18em] text-[#53616b]">{c.formatsEyebrow}</p>
            <h2 className="mt-5 max-w-5xl text-4xl font-normal tracking-[-0.05em] text-[#193344] md:text-6xl">{c.formatsTitle}</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {c.formats.map((f) => <article key={f.title} className="border border-[#d8dfe1] bg-white p-7 md:p-9">
                <p className="text-xs text-[#64747d]">{f.tag}</p>
                <h3 className="mt-5 text-3xl font-normal tracking-[-0.04em] text-[#193344]">{f.title}</h3>
                <p className="mt-6 text-sm leading-7 text-[#53616b]">{f.desc}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto grid max-w-[1340px] gap-16 lg:grid-cols-2">
            <div>
              <ShieldCheck size={30} strokeWidth={1.2} className="text-[#193344]"/>
              <h2 className="mt-7 max-w-xl text-4xl font-normal tracking-[-0.05em] text-[#193344] md:text-5xl">{c.trustTitle}</h2>
              <ul className="mt-10 space-y-5">{c.trust.map((item) => <li key={item} className="flex gap-4 border-b border-[#e1e5e6] pb-5 text-base leading-7"><span className="mt-1 text-[#193344]" aria-hidden="true">✓</span><span>{item}</span></li>)}</ul>
            </div>
            <div className="border-t-2 border-[#193344] bg-[#f5f5f3] p-8 md:p-12">
              <Clock3 size={30} strokeWidth={1.2} className="text-[#193344]"/>
              <h3 className="mt-7 text-3xl font-normal leading-tight tracking-[-0.04em] text-[#193344]">{c.riskTitle}</h3>
              <p className="mt-7 text-base leading-9 text-[#4e5c65]">{c.riskText}</p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#dce1e3] bg-[#f5f5f3] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto grid max-w-[1340px] gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <h2 className="text-4xl font-normal tracking-[-0.05em] text-[#193344] md:text-5xl">{c.faqTitle}</h2>
            <div className="divide-y divide-[#d1d9dc] border-t border-[#d1d9dc]">
              {c.faqs.map((f) => <details key={f.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium leading-7 text-[#193344]">{f.question}<span aria-hidden="true" className="text-xl group-open:rotate-45">+</span></summary>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[#55636c]">{f.answer}</p>
              </details>)}
            </div>
          </div>
        </section>

        <section id="soumettre-projet" className="scroll-mt-24 px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto grid max-w-[1340px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div><FileSearch size={31} strokeWidth={1.2} className="text-[#193344]"/><h2 className="mt-8 text-4xl font-normal tracking-[-0.05em] text-[#193344] md:text-5xl">{c.founderFormTitle}</h2><p className="mt-7 max-w-lg text-base leading-8 text-[#53616b]">{c.founderFormText}</p></div>
            <div className="border border-[#dce1e3] bg-[#fbfbfa] p-6 md:p-10"><InvestmentInquiryForm locale={locale} kind="investment-project"/></div>
          </div>
        </section>

        <section id="contact-investisseur" className="scroll-mt-24 border-y border-[#dce1e3] bg-[#f5f5f3] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto grid max-w-[1340px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div><Handshake size={31} strokeWidth={1.2} className="text-[#193344]"/><h2 className="mt-8 text-4xl font-normal tracking-[-0.05em] text-[#193344] md:text-5xl">{c.investorFormTitle}</h2><p className="mt-7 max-w-lg text-base leading-8 text-[#53616b]">{c.investorFormText}</p></div>
            <div className="border border-[#dce1e3] bg-white p-6 md:p-10"><InvestmentInquiryForm locale={locale} kind="investment-investor"/></div>
          </div>
        </section>

        <section className="bg-[#193344] px-6 py-20 text-white md:px-12 md:py-24">
          <div className="mx-auto max-w-[1340px]">
            <ChartNoAxesCombined size={28} strokeWidth={1.2} aria-hidden="true"/>
            <h2 className="mt-8 max-w-4xl text-4xl font-normal tracking-[-0.05em] md:text-6xl">{c.footerTitle}</h2>
            <p className="mt-8 max-w-4xl text-sm leading-8 text-[#cbd6db]">{c.footerText}</p>
            <div className="mt-8 flex flex-wrap gap-8 text-sm">
              <Link className="inline-flex items-center gap-2 underline underline-offset-8" href="/services">{isFr ? 'Tous les services Bosphoras' : 'Bosphoras services'}<ArrowRight size={16}/></Link>
              <a className="inline-flex items-center gap-2 underline underline-offset-8" href="mailto:contact@bosphoras.com">contact@bosphoras.com<ArrowRight size={16}/></a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale}/>
    </>
  );
}
