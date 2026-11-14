import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BookOpenText, CalendarClock, CheckCircle2, Clock3, Coins, FileCheck2, FolderSearch, Landmark, LockKeyhole, ShieldAlert, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { breadcrumbSchema, faqSchema } from '@/lib/seo';
import { investmentVentures } from '@/data/investmentVentures';

type Lang = 'fr' | 'en';
const copy = {
  fr: {
    eyebrow: 'Bosphoras Investment / Investisseurs',
    title: 'Investir dans les entreprises. Comprendre avant de décider.',
    lead: 'Une centrale industrielle, un acteur de la santé, une technologie numérique ou un projet énergétique : derrière chaque opportunité doit se trouver une entreprise identifiable, un besoin financier précis et des risques clairement expliqués. Bosphoras prépare un espace pour découvrir ces projets avec méthode.',
    status: 'Des entreprises réelles. Une approche structurée de l’investissement privé.',
    explore: 'Découvrir les projets', access: 'Créer mon accès investisseur', entrepreneur: 'Vous êtes entrepreneur ?',
    introLabel: 'Notre conviction', introTitle: 'Un bon investissement commence par de bonnes questions.',
    intro: 'Un rendement annoncé ne raconte jamais toute l’histoire. Avant toute opération, un investisseur doit comprendre comment l’entreprise gagne de l’argent, pourquoi elle recherche des capitaux, ce qu’elle offre en contrepartie et comment elle prévoit de faire face à ses engagements. Notre rôle envisagé est de faciliter la lecture et la préparation de ces informations, pas de remplacer l’analyse personnelle ou un conseiller habilité.',
    methodsTitle: 'Trois manières de financer une entreprise.',
    methods: [
      { title: 'Prêts & obligations', subtitle: 'Intérêts prévus au contrat', body: 'Une entreprise peut emprunter pour acquérir une machine, augmenter sa production ou développer son activité. Le financement peut prévoir un taux, des échéances et une durée définis. Les paiements dépendent cependant de la capacité réelle de l’émetteur à rembourser ; le capital n’est pas garanti.', details: 'Avant d’investir : comptes, trésorerie, sûretés, rang de créance et risque de défaut.' },
      { title: 'Actions & parts', subtitle: 'Devenir associé', body: 'En entrant au capital, l’investisseur participe à la valeur future de la société. Il peut bénéficier de dividendes lorsqu’ils sont décidés, ou d’une plus-value si ses titres peuvent être vendus. La croissance n’est pas certaine et des années peuvent s’écouler avant une sortie.', details: 'Avant d’investir : valorisation, dilution, droits, gouvernance, dividendes et liquidité.' },
      { title: 'Projets structurés', subtitle: 'Financements de plus grande taille', body: 'Usines, parcs solaires, acquisitions et infrastructures requièrent parfois une combinaison de fonds propres et de dette, avec des investisseurs professionnels. Chaque transaction doit être organisée en fonction de ses actifs, autorisations et contrats.', details: 'Avant d’investir : viabilité technique, calendrier, construction, exploitation, réglementation et contreparties.' }
    ],
    portfolioLabel: 'Perspectives de développement', portfolioTitle: 'Découvrez nos projets.',
    portfolioIntro: 'Des entreprises et initiatives dans le bâtiment, la santé, le numérique, l’énergie et l’hôtellerie. Explorez leur activité et suivez celles qui vous intéressent.',
    projectStatus: '', financing: 'Financement envisagé', inquire: 'Suivre ce projet', projectRisk: '',
    viewAll: 'Je demande un accès investisseur',
    readingTitle: 'Ce que toute fiche de projet devra montrer.',
    readingLead: 'Nous ne voulons pas afficher un simple taux attractif. Le document d’investissement doit permettre de comprendre ce qui sera réellement détenu, attendu et éventuellement perdu.',
    checklist: [
      ['Identité et activité','Société juridique porteuse, pays, dirigeants, bénéficiaires effectifs, métier et clients.'],
      ['Finances et valorisation','États financiers disponibles, trésorerie, dette, hypothèses et valorisation lorsqu’il s’agit d’actions.'],
      ['Utilisation des fonds','Détail du budget, besoins en fonds de roulement, équipements, recrutement et jalons.'],
      ['Revenus et échéances','Calendrier contractuel éventuel des intérêts, dividendes non garantis, capital à rembourser.'],
      ['Risques et protections','Risque de perte totale ou partielle, garanties éventuelles, sûretés et rang de remboursement.'],
      ['Sortie et frais','Durée, possibilités réelles de cession, frais de souscription, de suivi et autres coûts.']
    ],
    dashboardTitle: 'Votre espace investisseur, sans chiffres inventés.',
    dashboardBody: 'Dès maintenant, créez un compte pour enregistrer les projets qui vous intéressent et préciser vos domaines d’investissement. À mesure que les opérations seront établies avec des professionnels habilités, cet espace pourra évoluer vers un suivi des titres réellement détenus et des paiements confirmés. Il ne présente aujourd’hui aucun faux solde, rendement ou revenu.',
    dashboard1: 'Liste personnalisée de projets', dashboard2: 'Profil et préférences de contact', dashboard3: 'Suivi des opportunités et des informations disponibles',
    riskTitle: 'Ce n’est pas un livret bancaire.',
    riskBody: 'Les investissements non cotés et les prêts privés peuvent entraîner une perte totale ou partielle du capital. Les intérêts attendus ne sont pas des gains encaissés. Aucun retrait à la demande, rendement mensuel ou remboursement anticipé n’est promis. Les offres ne seront proposées que via les opérateurs habilités concernés et après vérification des règles applicables aux investisseurs, projets et pays.',
    faqsTitle: 'Questions fréquentes des investisseurs',
    faqs: [
      { question: 'Un investissement minimum de 1 000 € sera-t-il possible ?', answer: 'Nous étudions des opérations potentiellement accessibles dès 1 000 €, mais le minimum dépendra du projet, du véhicule juridique, du pays et des critères du partenaire habilité. Aucune offre n’est actuellement ouverte.' },
      { question: 'Puis-je percevoir des intérêts deux mois après mon investissement ?', answer: 'Certains contrats de prêt ou titres de dette peuvent prévoir un premier versement au deuxième mois. Ce calendrier ne constitue pas une garantie ; il dépend des modalités du financement et de la capacité de l’entreprise à payer.' },
      { question: 'Quelle différence entre un prêt et une action ?', answer: 'Le prêteur dispose d’une créance avec échéances contractuelles et supporte le risque de défaut. L’actionnaire possède une part de la société, sans intérêt contractuel ni dividende garanti, et supporte le risque de valorisation ou de dilution.' },
      { question: 'Puis-je récupérer mes 1 000 € quand je veux ?', answer: 'Non, pas par défaut. La sortie dépend du contrat de dette, de l’échéance, des éventuelles facultés de remboursement anticipé ou de l’existence d’un acheteur pour des titres non cotés.' },
      { question: 'Qui encaisse et conserve les fonds ?', answer: 'Bosphoras Investment ne collecte aucun fonds sur ce site. Si des investissements sont lancés, les souscriptions et flux financiers devront être pris en charge par des intermédiaires ou établissements habilités pour les opérations concernées.' },
      { question: 'Comment suivre un projet qui m’intéresse ?', answer: 'Créez un compte investisseur et ajoutez un projet à votre liste de suivi. Vous retrouverez votre sélection dans votre espace personnel.' },
      { question: 'Des investisseurs américains ou du Golfe pourront-ils participer ?', answer: 'L’éligibilité dépendra du pays de résidence, du type de placement et des autorisations des opérateurs. La présence d’un projet sur un site accessible mondialement n’implique pas qu’il puisse être commercialisé partout.' },
      { question: 'Que contient un accès investisseur ?', answer: 'La première version permet de créer un compte privé, enregistrer les projets à suivre et mettre à jour ses préférences. Aucun compte bancaire, actif détenu ou portefeuille de rendement n’est simulé comme réel.' }
    ]
  },
  en: {
    eyebrow: 'Bosphoras Investment / Investors',
    title: 'Invest in businesses. Understand before you decide.',
    lead: 'Industrial manufacturing, healthcare, software or renewable energy: every potential transaction should start with a real company, a specific funding need and a candid explanation of risk. Bosphoras is developing a space to examine these businesses with care.',
    status: 'Real businesses. A disciplined approach to private capital.',
    explore: 'Explore the projects', access: 'Create investor access', entrepreneur: 'Looking for business funding?',
    introLabel: 'Our perspective', introTitle: 'Good investing begins with better questions.',
    intro: 'A headline yield never tells the whole story. Investors need to understand how the company generates cash, why capital is required, which rights they receive and how financial obligations might be met. Our proposed role is to organise information and prepare documentation—not replace individual diligence or authorised financial advice.',
    methodsTitle: 'Three ways to finance a business.',
    methods: [
      { title: 'Loans & bonds', subtitle: 'Contractual interest may apply', body: 'A business may borrow to finance equipment, production capacity or expansion. Terms can specify interest, maturity and repayment dates, but all scheduled payments depend on the borrower’s ability to pay. Principal is at risk.', details: 'Assess statements, cash flow, collateral, claim priority and default exposure.' },
      { title: 'Equity & shares', subtitle: 'Become a shareholder', body: 'Equity investors participate in a company’s potential growth. Dividends may be paid if declared; capital gains require a viable exit. Shares may be illiquid, future rounds can dilute ownership and capital can be lost.', details: 'Assess valuation, shareholder rights, governance, dilution and liquidity.' },
      { title: 'Structured private capital', subtitle: 'For larger transactions', body: 'Factories, solar developments, acquisitions and infrastructure often require project-specific combinations of equity and debt, sometimes involving professional investors and licensed intermediaries.', details: 'Assess feasibility, permits, contracts, construction and operating risks.' }
    ],
    portfolioLabel: 'Business development pipeline', portfolioTitle: 'Explore our projects.',
    portfolioIntro: 'Explore businesses across construction, healthcare, technology, energy and hospitality. Follow the companies that interest you.',
    projectStatus: '', financing: 'Financing approach', inquire: 'Follow this venture', projectRisk: '',
    viewAll: 'Request investor access',
    readingTitle: 'What every investment dossier must explain.',
    readingLead: 'An attractive number alone is not enough. Documentation should make clear what an investor would own, what payments might be due and what could be lost.',
    checklist: [
      ['Issuer and business','Legal issuer, jurisdiction, management, beneficial ownership, customers and business model.'],
      ['Financial position','Available statements, cash runway, borrowing, forecasts and equity valuation where relevant.'],
      ['Use of proceeds','Capital allocation across equipment, working capital, staffing and operating milestones.'],
      ['Payments and maturity','Any contractual coupon schedule, non-guaranteed dividends and intended principal repayment.'],
      ['Risks and safeguards','Possible partial or total loss, collateral where available and ranking of claims.'],
      ['Exit and fees','Term, realistic secondary-sale options, subscription, servicing and exit costs.']
    ],
    dashboardTitle: 'Your investor space, without invented balances.',
    dashboardBody: 'Create an account to follow businesses and describe your interests. If appropriate authorised investment operations are launched later, the space may be expanded to report verified ownership and payments. No fictitious portfolio returns or account balances are shown today.',
    dashboard1: 'Personal project watchlist', dashboard2: 'Private investor profile', dashboard3: 'Company information and updates',
    riskTitle: 'This is not a bank savings account.',
    riskBody: 'Private loans and unlisted investments may lose part or all of their value. Expected interest is not received income. No instant withdrawals, guaranteed monthly returns or automatic exits are offered. Any future subscriptions would require suitable authorised operators and eligibility checks for each investor, issuer and jurisdiction.',
    faqsTitle: 'Investor questions',
    faqs: [
      { question: 'Will the minimum investment be €1,000?', answer: 'We aim to investigate accessible funding structures, potentially starting at €1,000 where suitable. Actual minimums depend on the transaction, jurisdiction and relevant operator. No offer is currently open.' },
      { question: 'Can I receive interest after two months?', answer: 'Some private debt instruments schedule a first coupon in month two. Those payments depend on the issuer honouring its contractual obligations and must not be mistaken for guaranteed income.' },
      { question: 'How does a loan differ from an equity investment?', answer: 'Debt creates a contractual claim with repayment dates and default risk. Equity confers ownership rights but no guaranteed interest or dividends and may be diluted or illiquid.' },
      { question: 'Can I withdraw whenever I want?', answer: 'Usually not. Liquidity depends on maturity, any early repayment provisions and whether privately held securities can actually be sold.' },
      { question: 'Who handles investment money?', answer: 'Bosphoras does not currently collect investment funds. Any future subscription and fund flows must be operated by appropriately authorised financial service providers.' },
      { question: 'How can I follow a company I am interested in?', answer: 'Create an investor account and save the company to your watchlist. You can manage your selection in your personal space.' },
      { question: 'Can US and Gulf investors participate?', answer: 'Investor eligibility depends on residence, transaction type and the authorisations of relevant intermediaries. Worldwide website access does not make an offer legal everywhere.' },
      { question: 'What does an investor account offer now?', answer: 'A private profile, venture watchlist and contact preferences. No live investments, banking balances or projected returns are presented as real.' }
    ]
  }
};

export function InvestmentInvestorsPage({ locale }: { locale: Lang }) {
  const c=copy[locale], fr=locale==='fr';
  const base=fr?'/investissement':'/en/investment';
  const investorPath=fr?'/investissement/investisseurs':'/en/investment/investors';
  const accessPath=fr?'/investissement/acces/investisseur':'/en/investment/access/investor';
  const entrepreneurPath=fr?'/investissement/entrepreneurs':'/en/investment/entrepreneurs';
  return <>
    <StructuredData data={breadcrumbSchema([{name:'Bosphoras',url:'https://www.bosphoras.com/'},{name:'Investment',url:'https://www.bosphoras.com'+base},{name:fr?'Investisseurs':'Investors',url:'https://www.bosphoras.com'+investorPath}])}/>
    <StructuredData data={faqSchema(c.faqs)}/>
    <StructuredData data={{'@context':'https://schema.org','@type':'CollectionPage',name:c.title,url:'https://www.bosphoras.com'+investorPath,about:{'@type':'Thing',name:'Private company investment education and project research'},mainEntity:{'@type':'ItemList',itemListElement:investmentVentures.map((p,i)=>({'@type':'ListItem',position:i+1,item:{'@type':'Thing',name:p.name,description:fr?p.summary:p.englishSummary}}))}}}/>
    <Header locale={locale} currentPath={investorPath} localizedPaths={{fr:'/investissement/investisseurs',en:'/en/investment/investors',ru:'/en/investment/investors',ar:'/en/investment/investors'}}/>
    <main lang={locale} className="bg-white pt-[4.85rem] text-[#202629]">
      <section className="bg-[#193344] px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto grid max-w-[1370px] gap-14 lg:grid-cols-[1.5fr_.5fr]">
          <div><p className="text-xs uppercase tracking-[.21em] text-[#a5bac5]">{c.eyebrow}</p><h1 className="mt-8 max-w-[1100px] text-[clamp(3rem,5.7vw,6.7rem)] font-normal leading-[1.08] tracking-[-.065em]">{c.title}</h1><p className="mt-9 max-w-3xl text-lg leading-9 text-[#d4e0e6]">{c.lead}</p><div className="mt-10 flex flex-wrap gap-3"><a href="#projets" className="inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-medium text-[#193344] hover:bg-[#e6ecee]">{c.explore}<ArrowRight size={16}/></a><Link href={accessPath} className="inline-flex items-center gap-3 border border-[#8098a5] px-6 py-4 text-sm text-white hover:border-white">{c.access}<ArrowRight size={16}/></Link></div></div>
          <aside className="flex flex-col justify-end border-t border-[#6f8997] pt-8 lg:border-l lg:border-t-0 lg:pl-10"><ShieldAlert size={31} strokeWidth={1.2}/><p className="mt-6 text-base leading-7 text-[#d4e0e6]">{c.status}</p><Link href={entrepreneurPath} className="mt-8 inline-flex items-center gap-2 text-sm underline underline-offset-8">{c.entrepreneur}<ArrowUpRight size={16}/></Link></aside>
        </div>
      </section>
      <section className="px-6 py-20 md:px-12 md:py-24"><div className="mx-auto grid max-w-[1340px] gap-10 md:grid-cols-[.85fr_1.15fr] md:gap-20"><div><p className="text-xs uppercase tracking-[.17em] text-[#53616b]">{c.introLabel}</p><h2 className="mt-5 text-4xl leading-tight tracking-[-.05em] text-[#193344] md:text-5xl">{c.introTitle}</h2></div><p className="text-lg leading-9 text-[#53616b]">{c.intro}</p></div></section>
      <section className="border-y border-[#dde3e4] bg-[#f5f5f3] px-6 py-20 md:px-12 md:py-24"><div className="mx-auto max-w-[1340px]"><h2 className="max-w-4xl text-4xl leading-tight tracking-[-.05em] text-[#193344] md:text-5xl">{c.methodsTitle}</h2><div className="mt-12 grid gap-4 lg:grid-cols-3">{c.methods.map((m,i)=><article key={m.title} className="border border-[#d5dfe2] bg-white p-7 md:p-8"><p className="text-sm text-[#73838b]">0{i+1}</p><h3 className="mt-6 text-2xl tracking-[-.04em] text-[#193344]">{m.title}</h3><p className="mt-2 text-sm font-medium text-[#5c6e78]">{m.subtitle}</p><p className="mt-6 text-base leading-8 text-[#53616b]">{m.body}</p><p className="mt-7 border-t border-[#d8e0e3] pt-5 text-sm leading-7 text-[#193344]">{m.details}</p></article>)}</div></div></section>
      <section id="projets" className="scroll-mt-24 px-6 py-20 md:px-12 md:py-28"><div className="mx-auto max-w-[1340px]"><p className="text-xs uppercase tracking-[.17em] text-[#53616b]">{c.portfolioLabel}</p><h2 className="mt-5 max-w-5xl text-4xl leading-tight tracking-[-.05em] text-[#193344] md:text-6xl">{c.portfolioTitle}</h2><p className="mt-7 max-w-4xl text-base leading-8 text-[#52616b]">{c.portfolioIntro}</p>
      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{investmentVentures.map((p,i)=><article id={'project-'+p.code} key={p.code} className="scroll-mt-28 flex flex-col border border-[#dce2e4] bg-[#fbfbfa] p-7 md:p-8"><div className="flex items-start justify-between gap-3"><p className="text-xs uppercase tracking-[.12em] text-[#586971]">{fr?p.sector:p.englishSector}</p><span className="text-sm tabular-nums text-[#89969c]">0{i+1}</span></div><h3 className="mt-7 text-3xl font-normal tracking-[-.05em] text-[#193344]">{p.name}</h3><p className="mt-2 text-sm text-[#64737b]">{p.region}</p><p className="mt-6 flex-1 text-sm leading-8 text-[#4b5b63]">{fr?p.summary:p.englishSummary}</p><div className="mt-8 border-t border-[#dce2e4] pt-5"><p className="text-[12px] text-[#64747d]">{c.financing}</p><p className="mt-2 text-sm font-medium leading-6 text-[#193344]">{fr?p.financing:'Equity or debt, depending on the project'}</p><Link href={(fr?'/investissement/demande/':'/en/investment/request/')+p.code} className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#193344] px-4 py-3 text-sm font-medium text-white">{fr?'Demander un placement':'Request investment'}<ArrowRight size={15}/></Link></div></article>)}</div>
      <div className="mt-10"><Link href={accessPath} className="inline-flex items-center gap-3 bg-[#193344] px-6 py-4 text-sm text-white">{c.viewAll}<ArrowRight size={16}/></Link></div></div></section>
      <section className="border-y border-[#d9e0e2] bg-[#f5f5f3] px-6 py-20 md:px-12 md:py-24"><div className="mx-auto max-w-[1340px]"><h2 className="max-w-4xl text-4xl leading-tight tracking-[-.05em] text-[#193344] md:text-5xl">{c.readingTitle}</h2><p className="mt-6 max-w-4xl text-lg leading-9 text-[#52616b]">{c.readingLead}</p><div className="mt-12 grid gap-x-14 lg:grid-cols-2">{c.checklist.map(([title,body],i)=><div key={title} className="grid grid-cols-[40px_1fr] gap-4 border-t border-[#cbd5d9] py-7"><span className="text-sm text-[#7d8b92]">{String(i+1).padStart(2,'0')}</span><div><h3 className="text-xl font-medium text-[#193344]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#58666d]">{body}</p></div></div>)}</div></div></section>
      <section className="px-6 py-20 md:px-12 md:py-24"><div className="mx-auto grid max-w-[1340px] gap-12 lg:grid-cols-[1fr_1fr]"><div><LockKeyhole size={31} strokeWidth={1.2} className="text-[#193344]"/><h2 className="mt-7 text-4xl leading-tight tracking-[-.05em] text-[#193344] md:text-5xl">{c.dashboardTitle}</h2><p className="mt-7 text-base leading-9 text-[#52616b]">{c.dashboardBody}</p><Link href={accessPath} className="mt-8 inline-flex items-center gap-3 bg-[#193344] px-6 py-4 text-sm text-white">{c.access}<ArrowRight size={16}/></Link></div><div className="border-t-2 border-[#193344] bg-[#f5f5f3] p-9"><BookOpenText size={29} strokeWidth={1.2} className="text-[#193344]"/>{[c.dashboard1,c.dashboard2,c.dashboard3].map((t)=><div key={t} className="mt-7 flex items-center gap-4 border-b border-[#d6dfe2] pb-6"><CheckCircle2 size={17} className="shrink-0 text-[#193344]"/><span className="text-base text-[#465863]">{t}</span></div>)}</div></div></section>
      <section className="border-y border-[#dbe1e3] bg-[#f5f5f3] px-6 py-20 md:px-12 md:py-24"><div className="mx-auto grid max-w-[1340px] gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><h2 className="text-4xl tracking-[-.05em] text-[#193344] md:text-5xl">{c.faqsTitle}</h2><div className="mt-10 border-l-2 border-[#193344] pl-5"><h3 className="text-xl text-[#193344]">{c.riskTitle}</h3><p className="mt-5 text-sm leading-8 text-[#53616b]">{c.riskBody}</p></div></div><div className="divide-y divide-[#cbd5d9] border-t border-[#cbd5d9]">{c.faqs.map(f=><details key={f.question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-medium leading-8 text-[#193344]">{f.question}<span className="text-xl group-open:rotate-45" aria-hidden="true">+</span></summary><p className="mt-4 text-base leading-8 text-[#53616b]">{f.answer}</p></details>)}</div></div></section>
      <section className="px-6 py-16 md:px-12"><div className="mx-auto flex max-w-[1340px] flex-wrap items-center justify-between gap-6"><Link href={base} className="text-sm text-[#193344] underline underline-offset-4">{fr?'Présentation de Bosphoras Investment':'About Bosphoras Investment'}</Link><Link href={entrepreneurPath} className="inline-flex gap-2 text-sm text-[#193344] underline underline-offset-4">{c.entrepreneur}<ArrowRight size={15}/></Link></div></section>
    </main><Footer locale={locale}/>
  </>;
}
