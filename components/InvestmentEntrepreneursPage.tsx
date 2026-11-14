import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BarChart3, Building2, ClipboardCheck, FileText, Handshake, LockKeyhole, Scale, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { InvestmentInquiryForm } from '@/components/InvestmentInquiryForm';
import { breadcrumbSchema, faqSchema } from '@/lib/seo';

type Lang = 'fr'|'en';
const content = {
  fr: {
    eyebrow: 'Bosphoras Investment / Entreprises',
    h1: 'Votre projet mérite un dossier solide avant de rencontrer des capitaux.',
    intro: 'Créer une usine, acheter du matériel, développer une entreprise existante, financer l’innovation ou préparer une expansion internationale : Bosphoras accompagne les entrepreneurs dans la définition de leurs besoins et la préparation des informations attendues par des investisseurs sérieux.',
    start: 'Soumettre un projet', access: 'Ouvrir mon accès entrepreneur', investors: 'Découvrir l’espace investisseurs',
    signal: 'Étude et accompagnement sur devis. Aucun financement n’est garanti.',
    benefits: ['Besoin de capitaux documenté','Business plan et prévisions argumentées','Structure de financement adaptée','Présentation claire des risques et des conditions'],
    eligibilityTitle: 'Quels projets peuvent nous intéresser ?',
    eligibilityIntro: 'Nous n’imposons pas un seul secteur ou un seul pays. Nous examinons plutôt la logique économique du projet, sa maturité, l’équipe qui le porte et la possibilité de produire une documentation crédible.',
    sectors: [
      { title: 'Industrie & production', text: 'Centrale à béton, usine de recyclage, ligne de fabrication, extension ou modernisation d’un outil industriel.' },
      { title: 'Énergie & infrastructures', text: 'Centrale photovoltaïque, projets de production ou d’équipements, sous réserve d’études techniques, foncières et d’autorisations.' },
      { title: 'Technologie & IA', text: 'Logiciels, services numériques, plateformes et produits technologiques disposant d’un modèle économique défendable.' },
      { title: 'Services & croissance', text: 'Santé, hôtellerie, BTP, tourisme et entreprises opérationnelles cherchant à accélérer leur développement.' }
    ],
    servicesTitle: 'Les prestations de Bosphoras pour préparer votre financement.',
    services: [
      { title: '01. Diagnostic', body: 'Premier examen de l’activité, de la structure juridique, du besoin de financement, de l’équipe et du calendrier de réalisation.' },
      { title: '02. Étude financière', body: 'Plan d’affaires, analyse des coûts, cash-flow prévisionnel, sensibilité des hypothèses, capacité de service de la dette et scénarios de développement.' },
      { title: '03. Dossier de présentation', body: 'Pitch investisseurs, note de financement, documentation juridique et technique, préparation des pièces de data room et réponses aux questions de due diligence.' },
      { title: '04. Structuration & conseil', body: 'Étude des instruments financiers possibles, de la dette aux actions. Les placements, collectes et souscriptions, s’ils sont possibles, relèveront d’intermédiaires autorisés.' },
      { title: '05. Développement stratégique', body: 'Suivi des indicateurs, reporting opérationnel, accompagnement de la croissance. Sur de grandes missions distinctes, une prise de participation minoritaire de Bosphoras pourra être négociée et divulguée.' }
    ],
    documentsTitle: 'Les informations qui feront la différence.',
    documentsIntro: 'Vous n’avez pas besoin de transmettre des informations bancaires sensibles pour faire une première demande. Voici cependant les documents à préparer pour une analyse approfondie et sécurisée.',
    docs: [
      ['L’entreprise','Dénomination juridique, pays, actionnariat, dirigeants, site et activité réelle.'],
      ['Historique','Chiffre d’affaires et résultats disponibles, bilans, situation de trésorerie et dette existante.'],
      ['Projet','Montant à réunir, budget détaillé, fournisseurs, investissements, calendrier et jalons.'],
      ['Marché','Clients, contrats, concurrence, modèle de revenus, saisonnalité et stratégie commerciale.'],
      ['Financement','Préférence entre emprunt, obligations, actions ou solution mixte ; garanties éventuelles.'],
      ['Risques','Autorisations, obligations, dépendances, scénarios défavorables et mesures d’atténuation.']
    ],
    dealTitle: 'Dette ou capital : une décision stratégique, pas un argument marketing.',
    debt: 'Si vous empruntez, vous devez pouvoir expliquer l’origine des fonds qui rembourseront intérêts et capital. Le calendrier des versements doit résulter de flux de trésorerie plausibles, et non de l’arrivée de nouveaux investisseurs.',
    equity: 'Si vous ouvrez votre capital, il faut expliquer la valorisation, le pourcentage cédé, les droits des nouveaux associés, la dilution potentielle, le calendrier de croissance et les perspectives de sortie.',
    compensationTitle: 'Comment Bosphoras est rémunéré.',
    compensation: 'Le dépôt de votre projet et le premier examen sont gratuits. Si nous pouvons vous accompagner, nous vous proposerons un devis détaillé pour des prestations effectives : étude, business plan, documentation et suivi. Les éventuelles commissions de financement ne peuvent être organisées que dans un cadre habilité et contractuellement validé. Sur certaines missions stratégiques importantes, une participation au capital pourra être discutée séparément, avec transparence.',
    processTitle: 'Les cinq étapes d’une candidature.',
    process: [
      ['01','Décrivez votre projet','Activité, pays, équipe, montant recherché et utilisation des fonds.'],
      ['02','Recevez un premier retour','Nous examinons l’adéquation de votre dossier aux prestations proposées.'],
      ['03','Validez une mission','En cas d’intérêt mutuel, nous précisons livrables, budget, délais et confidentialité.'],
      ['04','Constituez le dossier','L’entreprise rassemble ses données ; les experts réalisent les études retenues.'],
      ['05','Présentez le financement','Toute mise sur le marché, commercialisation ou souscription reste réservée aux opérateurs habilités.']
    ],
    faqTitle: 'Questions des entrepreneurs',
    faqs: [
      { question: 'Quel montant une entreprise peut-elle rechercher ?', answer: 'Il n’existe pas de montant standard pour nos prestations d’étude. Le montant raisonnable dépend du projet, de sa valorisation ou capacité d’endettement et des règles financières applicables. Nous examinons aussi bien les besoins d’une PME que des opérations industrielles plus importantes.' },
      { question: 'Bosphoras garantit-il de trouver des investisseurs ?', answer: 'Non. Une prestation de conseil ne garantit jamais un financement, l’acceptation par une plateforme, un calendrier de levée ou un montant collecté.' },
      { question: 'Combien coûte une étude de financement ?', answer: 'Le dépôt et l’examen initial sont gratuits. Les analyses approfondies, business plans, dossiers investisseurs et missions de conseil sont chiffrés sur devis selon la complexité. Tout honoraire est détaillé avant engagement.' },
      { question: 'Peut-on financer une société déjà existante ?', answer: 'Oui, c’est une possibilité à étudier pour l’achat de matériel, les besoins d’investissement, l’expansion ou une acquisition. Les comptes historiques et les contrats sont alors essentiels pour mesurer le risque.' },
      { question: 'Puis-je obtenir des fonds en gardant 100 % de mon capital ?', answer: 'Un financement par dette n’implique pas nécessairement de céder des actions, mais crée des engagements de remboursement et peut exiger des sûretés. Son opportunité dépend de la capacité de paiement de l’entreprise.' },
      { question: 'Bosphoras peut-il devenir associé dans mon entreprise ?', answer: 'Une participation minoritaire peut être envisagée pour des prestations stratégiques réelles et distinctes, après négociation des droits, valorisation, conflits d’intérêts et conséquences juridiques. Elle n’est ni systématique ni le prix automatique d’une levée de fonds.' },
      { question: 'Acceptez-vous les projets à l’étranger ?', answer: 'Les études peuvent porter sur des entreprises internationales. La possibilité de distribuer un investissement dépendra cependant de la société porteuse, des marchés concernés et des partenaires autorisés.' },
      { question: 'Puis-je protéger mes données et préparer mon dossier progressivement ?', answer: 'Oui. Le formulaire public demande une première description non sensible. Un accès entrepreneur permet de constituer des brouillons privés. Ne téléversez aucun document sensible avant qu’un canal sécurisé et les conditions de confidentialité aient été définis.' }
    ],
    formTitle: 'Déposez une première présentation.',
    formIntro: 'Présentez l’entreprise et le financement envisagé. Ce formulaire déclenche une demande d’examen, pas une campagne publique. Vous pouvez aussi créer votre accès entrepreneur pour conserver des brouillons privés.',
    closing: 'Nous privilégions un dossier compréhensible à une promesse de financement.',
    disclaimer: 'Les services d’étude et de conseil aux entreprises sont distincts des services réglementés de placement, financement participatif, conseil en investissement ou gestion de fonds. Bosphoras ne collecte pas de capitaux sur cette page.'
  },
  en: {
    eyebrow: 'Bosphoras Investment / Companies',
    h1: 'Give your business the financial dossier it deserves.',
    intro: 'A new factory, machinery, business expansion, technology innovation or international growth: Bosphoras helps founders define their needs and prepare the information serious capital providers expect.',
    start: 'Submit a business project', access: 'Create entrepreneur access', investors: 'Explore investor information',
    signal: 'Advisory on quotation. Funding is never guaranteed.',
    benefits: ['Documented capital requirements','Defensible financial projections','Appropriate financing structure','Clear risks and transaction terms'],
    eligibilityTitle: 'Which businesses can we review?',
    eligibilityIntro: 'We are not restricted to one industry or country. Our interest depends on the business case, maturity, management and availability of credible supporting documentation.',
    sectors: [
      { title: 'Manufacturing & industry', text: 'Concrete plants, recycling facilities, new production lines, industrial upgrades and capacity expansion.' },
      { title: 'Energy & infrastructure', text: 'Solar projects and other physical infrastructure, subject to technical, land, permits and feasibility reviews.' },
      { title: 'Technology & AI', text: 'Software, digital services, platforms and technology products backed by a credible business model.' },
      { title: 'Services & expansion', text: 'Healthcare, hospitality, construction, travel and established companies seeking growth capital.' }
    ],
    servicesTitle: 'Our corporate financing preparation services.',
    services: [
      { title: '01. Initial assessment', body: 'Review of the company, legal structure, financing need, management team and delivery timetable.' },
      { title: '02. Financial analysis', body: 'Business planning, cost structure, cash-flow forecasts, sensitivity analysis, debt-service capacity and growth scenarios.' },
      { title: '03. Investor materials', body: 'Investment memo, presentation, financial narrative, technical and legal materials, data-room preparation and diligence responses.' },
      { title: '04. Structuring & advisory', body: 'Analysis of possible debt, bond and equity approaches. Securities placement and subscriptions, if pursued, require duly authorised partners.' },
      { title: '05. Strategic development', body: 'Milestones, reporting and growth advisory. A separate, transparent minority equity interest may be considered for substantial strategic engagements.' }
    ],
    documentsTitle: 'Information that makes a dossier credible.',
    documentsIntro: 'You do not need to disclose sensitive banking information to make an initial enquiry. In-depth analysis, however, will need properly secured documentation.',
    docs: [
      ['The company','Registered entity, jurisdiction, shareholders, leadership, website and actual operations.'],
      ['Financial history','Available revenue, profit, statements, cash position and existing debt.'],
      ['The project','Capital requirement, itemised budget, suppliers, timing and operating milestones.'],
      ['The market','Customers, commercial contracts, competitors, revenue model and sales strategy.'],
      ['Funding approach','Preferred debt, bonds, equity or combination; available collateral if relevant.'],
      ['Risks','Permissions, dependencies, downside cases, operational issues and mitigations.']
    ],
    dealTitle: 'Debt versus equity is a strategic decision.',
    debt: 'A borrower must explain the source of operating cash needed to pay interest and principal. Repayment plans need defensible cash-flow assumptions—not future fundraising to pay prior investors.',
    equity: 'An equity raise needs a justified valuation, dilution analysis, investor rights, governance terms, growth timeline and a realistic view of exit possibilities.',
    compensationTitle: 'How Bosphoras charges businesses.',
    compensation: 'Project submission and initial review are free. If there is a suitable advisory engagement, a detailed quote covers actual work such as feasibility, business planning, investor documentation and reporting. Any transaction-linked compensation must be separately validated within a compliant structure. For certain major strategic assignments, a disclosed minority equity stake may be negotiated independently.',
    processTitle: 'Five stages from enquiry to a prepared dossier.',
    process: [
      ['01','Describe your business','Tell us about the company, location, team, funding needs and intended use of proceeds.'],
      ['02','Receive an initial response','We consider how the project fits the advisory services available.'],
      ['03','Agree an engagement','Where appropriate, we confirm deliverables, pricing, schedule and confidentiality.'],
      ['04','Prepare the dossier','The company assembles materials and specialists carry out the agreed analysis.'],
      ['05','Consider distribution','Any capital raising, securities marketing or subscription requires suitable authorised financial operators.']
    ],
    faqTitle: 'Business financing questions',
    faqs: [
      { question: 'How much capital can a company seek?', answer: 'There is no universal amount for our advisory services. The correct number depends on the project, valuation, debt capacity and applicable rules. Small corporate growth projects and larger industrial transactions both require their own analysis.' },
      { question: 'Does Bosphoras guarantee investors?', answer: 'No. An advisory assignment does not promise funding, acceptance on an investment platform, a fundraising timetable or a minimum raised amount.' },
      { question: 'What does the financing study cost?', answer: 'Submission and initial screening are free. Detailed feasibility work, investor materials, business planning and continuing advisory are priced through a written quote.' },
      { question: 'Can an existing company raise funding?', answer: 'Yes. Growth, equipment purchases and expansion may justify a financing study. Historical accounts, contracts and cash generation are essential to the assessment.' },
      { question: 'Can I retain all my shares?', answer: 'A debt structure may avoid issuing equity but creates repayment obligations and may require collateral. It is not suitable for every business.' },
      { question: 'Can Bosphoras become a minority shareholder?', answer: 'For real, distinct strategic work, a minority stake can be considered subject to negotiation, fair valuation, disclosures, conflicts and legal review. Equity is not automatically exchanged for fundraising.' },
      { question: 'Do you examine projects outside France?', answer: 'International projects may be considered for corporate advisory. Any later marketing of financial instruments must follow issuer, investor and distribution rules in the relevant jurisdictions.' },
      { question: 'Can I save a draft before submitting?', answer: 'Yes. An entrepreneur account lets you save a private project summary. Do not share highly sensitive files until an appropriate secure documentation channel is arranged.' }
    ],
    formTitle: 'Tell us about your funding need.',
    formIntro: 'Submit a preliminary business summary without creating a public investment offer. You can also create an entrepreneur account to save private project drafts.',
    closing: 'A credible dossier matters more than a fundraising promise.',
    disclaimer: 'Corporate advisory is separate from regulated securities placement, crowdfunding, investment advice and fund management. Bosphoras does not collect investment capital through this page.'
  }
};

export function InvestmentEntrepreneursPage({locale}:{locale:Lang}){
  const c=content[locale],fr=locale==='fr';
  const base=fr?'/investissement':'/en/investment';
  const path=fr?'/investissement/entrepreneurs':'/en/investment/entrepreneurs';
  const inv=fr?'/investissement/investisseurs':'/en/investment/investors';
  const access=fr?'/investissement/acces/entrepreneur':'/en/investment/access/entrepreneur';
  return <>
    <StructuredData data={breadcrumbSchema([{name:'Bosphoras',url:'https://www.bosphoras.com/'},{name:'Investment',url:'https://www.bosphoras.com'+base},{name:fr?'Entrepreneurs':'Companies',url:'https://www.bosphoras.com'+path}])}/>
    <StructuredData data={faqSchema(c.faqs)}/>
    <StructuredData data={{'@context':'https://schema.org','@type':'Service',name:fr?'Étude de financement et préparation de dossier investisseurs':'Business funding feasibility and investor dossier preparation',description:c.intro,url:'https://www.bosphoras.com'+path,provider:{'@type':'Organization',name:'Bosphoras',url:'https://www.bosphoras.com'},serviceType:['Business feasibility analysis','Financial modelling','Corporate funding preparation','Investor documentation']}}/>
    <Header locale={locale} currentPath={path} localizedPaths={{fr:'/investissement/entrepreneurs',en:'/en/investment/entrepreneurs',ru:'/en/investment/entrepreneurs',ar:'/en/investment/entrepreneurs'}}/>
    <main lang={locale} className="bg-white pt-[4.85rem] text-[#202629]">
      <section className="border-b border-[#dce2e4] bg-[#f5f5f3] px-6 py-20 md:px-12 md:py-28"><div className="mx-auto grid max-w-[1370px] gap-12 lg:grid-cols-[1.35fr_.65fr] lg:gap-20"><div><p className="text-xs uppercase tracking-[.18em] text-[#52656f]">{c.eyebrow}</p><h1 className="mt-8 text-[clamp(3rem,5.6vw,6.5rem)] font-normal leading-[1.07] tracking-[-.06em] text-[#193344]">{c.h1}</h1><p className="mt-9 max-w-3xl text-lg leading-9 text-[#53616b]">{c.intro}</p><div className="mt-10 flex flex-wrap gap-3"><a className="inline-flex items-center gap-3 bg-[#193344] px-6 py-4 text-sm text-white" href="#soumettre-projet">{c.start}<ArrowRight size={15}/></a><Link href={access} className="inline-flex items-center gap-2 border border-[#aebbc1] px-6 py-4 text-sm text-[#193344]">{c.access}<ArrowRight size={15}/></Link></div></div><aside className="self-end border-t border-[#acbabf] pt-7 lg:border-l lg:border-t-0 lg:pl-9"><Building2 size={31} strokeWidth={1.2} className="text-[#193344]"/><p className="mt-5 text-lg leading-8 text-[#193344]">{c.signal}</p><div className="mt-7 space-y-4">{c.benefits.map(t=><p key={t} className="flex items-start gap-3 text-sm leading-6 text-[#54646e]"><span aria-hidden="true">✓</span>{t}</p>)}</div></aside></div></section>
      <section className="px-6 py-20 md:px-12 md:py-24"><div className="mx-auto max-w-[1340px]"><h2 className="max-w-4xl text-4xl tracking-[-.05em] text-[#193344] md:text-5xl">{c.eligibilityTitle}</h2><p className="mt-7 max-w-4xl text-lg leading-9 text-[#52616b]">{c.eligibilityIntro}</p><div className="mt-12 grid gap-5 md:grid-cols-2">{c.sectors.map((s,i)=><div key={s.title} className="border-t border-[#cbd6da] py-7"><span className="text-sm text-[#86929a]">{String(i+1).padStart(2,'0')}</span><h3 className="mt-4 text-2xl tracking-[-.04em] text-[#193344]">{s.title}</h3><p className="mt-4 max-w-xl text-base leading-8 text-[#53616b]">{s.text}</p></div>)}</div></div></section>
      <section className="border-y border-[#dce2e4] bg-[#f5f5f3] px-6 py-20 md:px-12 md:py-24"><div className="mx-auto max-w-[1340px]"><h2 className="max-w-4xl text-4xl tracking-[-.05em] text-[#193344] md:text-5xl">{c.servicesTitle}</h2><div className="mt-12 grid gap-5 lg:grid-cols-3">{c.services.map(s=><article key={s.title} className="border border-[#d7e0e2] bg-white p-8"><h3 className="text-2xl leading-8 tracking-[-.04em] text-[#193344]">{s.title}</h3><p className="mt-6 text-base leading-8 text-[#54636b]">{s.body}</p></article>)}</div></div></section>
      <section className="px-6 py-20 md:px-12 md:py-24"><div className="mx-auto grid max-w-[1340px] gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><ClipboardCheck size={33} strokeWidth={1.2} className="text-[#193344]"/><h2 className="mt-7 text-4xl tracking-[-.05em] text-[#193344] md:text-5xl">{c.documentsTitle}</h2><p className="mt-7 text-base leading-8 text-[#53616b]">{c.documentsIntro}</p></div><div className="grid gap-0 md:grid-cols-2">{c.docs.map(([title,body],i)=><article key={title} className="border-t border-[#dae1e3] px-3 py-7"><span className="text-xs text-[#8b999f]">{String(i+1).padStart(2,'0')}</span><h3 className="mt-3 text-xl text-[#193344]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#53616b]">{body}</p></article>)}</div></div></section>
      <section className="border-y border-[#dce2e4] bg-[#f5f5f3] px-6 py-20 md:px-12 md:py-24"><div className="mx-auto max-w-[1340px]"><h2 className="max-w-4xl text-4xl tracking-[-.05em] text-[#193344] md:text-5xl">{c.dealTitle}</h2><div className="mt-11 grid gap-5 md:grid-cols-2"><article className="border-t-2 border-[#193344] bg-white p-8"><BarChart3 className="text-[#193344]" size={27} strokeWidth={1.2}/><h3 className="mt-6 text-2xl text-[#193344]">Debt / Obligations</h3><p className="mt-5 text-base leading-8 text-[#53616b]">{c.debt}</p></article><article className="border-t-2 border-[#193344] bg-white p-8"><Scale className="text-[#193344]" size={27} strokeWidth={1.2}/><h3 className="mt-6 text-2xl text-[#193344]">Equity / Actions</h3><p className="mt-5 text-base leading-8 text-[#53616b]">{c.equity}</p></article></div><div className="mt-6 border-l-2 border-[#193344] bg-white p-8"><h3 className="text-2xl text-[#193344]">{c.compensationTitle}</h3><p className="mt-5 text-base leading-9 text-[#53616b]">{c.compensation}</p></div></div></section>
      <section className="px-6 py-20 md:px-12 md:py-24"><div className="mx-auto max-w-[1340px]"><h2 className="max-w-4xl text-4xl tracking-[-.05em] text-[#193344] md:text-5xl">{c.processTitle}</h2><div className="mt-12 grid gap-0 border-t border-[#d4dcdf] lg:grid-cols-5">{c.process.map(([n,title,body])=><div key={n} className="border-b border-[#d4dcdf] px-4 py-8 first:pl-0 lg:border-r lg:last:border-r-0"><p className="text-sm text-[#89969c]">{n}</p><h3 className="mt-4 text-xl text-[#193344]">{title}</h3><p className="mt-4 text-sm leading-7 text-[#53616b]">{body}</p></div>)}</div></div></section>
      <section id="soumettre-projet" className="scroll-mt-24 border-y border-[#dce2e4] bg-[#f5f5f3] px-6 py-20 md:px-12 md:py-24"><div className="mx-auto grid max-w-[1340px] gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20"><div><FileText size={32} strokeWidth={1.2} className="text-[#193344]"/><h2 className="mt-8 text-4xl tracking-[-.05em] text-[#193344] md:text-5xl">{c.formTitle}</h2><p className="mt-8 text-base leading-9 text-[#53616b]">{c.formIntro}</p><Link href={access} className="mt-8 inline-flex items-center gap-2 text-sm text-[#193344] underline underline-offset-8">{c.access}<ArrowRight size={16}/></Link></div><div className="border border-[#d9e1e3] bg-white p-6 md:p-10"><InvestmentInquiryForm locale={locale} kind="investment-project"/></div></div></section>
      <section className="px-6 py-20 md:px-12 md:py-24"><div className="mx-auto grid max-w-[1340px] gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><h2 className="text-4xl tracking-[-.05em] text-[#193344] md:text-5xl">{c.faqTitle}</h2><Link href={inv} className="mt-8 inline-flex items-center gap-2 text-sm text-[#193344] underline underline-offset-8">{c.investors}<ArrowUpRight size={16}/></Link></div><div className="divide-y divide-[#d6dfe2] border-t border-[#d6dfe2]">{c.faqs.map(f=><details key={f.question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-medium text-[#193344]">{f.question}<span className="text-xl group-open:rotate-45" aria-hidden="true">+</span></summary><p className="mt-5 text-base leading-8 text-[#53616b]">{f.answer}</p></details>)}</div></div></section>
      <section className="bg-[#193344] px-6 py-16 text-white md:px-12"><div className="mx-auto max-w-[1340px]"><h2 className="max-w-4xl text-3xl tracking-[-.04em] md:text-4xl">{c.closing}</h2><p className="mt-7 max-w-4xl text-sm leading-8 text-[#d0dce2]">{c.disclaimer}</p><Link href={base} className="mt-7 inline-flex items-center gap-2 text-sm underline underline-offset-8">{fr?'Retour à Bosphoras Investment':'Back to Bosphoras Investment'}<ArrowRight size={15}/></Link></div></section>
    </main><Footer locale={locale}/>
  </>;
}
