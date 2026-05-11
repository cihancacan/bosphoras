import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, FileText, Landmark, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const path = '/residence-fiscale-turquie-revenus-etrangers';

const title = 'Résidence fiscale en Turquie et revenus étrangers : ce qu’un investisseur doit vérifier avant de s’installer';
const metaTitle = 'Résidence fiscale Turquie et revenus étrangers : guide investisseurs 2026';
const description = 'Comprendre la résidence fiscale en Turquie, les revenus étrangers, l’exonération potentielle de 20 ans, les revenus turcs imposables et les vérifications à faire avant une installation.';

const sections: Array<[string, string]> = [
  [
    'Pourquoi cette question est décisive avant de venir en Turquie',
    'S’installer en Turquie peut être une excellente décision pour un entrepreneur, un investisseur, une famille patrimoniale ou un expatrié. Mais avant de transférer sa résidence, ses revenus ou une partie de son patrimoine, il faut comprendre une chose essentielle : la fiscalité dépend rarement d’un seul critère. Elle dépend de votre lieu de vie réel, de votre famille, de vos sociétés, de vos comptes bancaires, de vos revenus, de votre pays d’origine et des conventions fiscales applicables. La Turquie peut devenir une base très intéressante, mais seulement si votre situation est structurée proprement dès le départ.',
  ],
  [
    'Devenir résident fiscal en Turquie : ce que cela signifie réellement',
    'La résidence fiscale n’est pas simplement une carte de résidence, un appartement à Istanbul ou un compte bancaire turc. C’est une situation globale. Un pays regarde où vous vivez réellement, où se trouve votre foyer, où vous prenez vos décisions importantes, où vous gagnez vos revenus et où se trouve le centre de vos intérêts économiques. En Turquie, le principe général est qu’un résident fiscal peut être imposé sur son revenu mondial, tandis qu’un non-résident est imposé principalement sur certains revenus de source turque. C’est pour cela qu’il ne faut jamais s’installer uniquement sur la base d’une information lue dans un article ou d’une promesse simplifiée.',
  ],
  [
    'Ce que la nouvelle exonération pourrait changer',
    'La Turquie souhaite attirer davantage d’investisseurs, d’entrepreneurs, de talents et de familles vivant à l’étranger. La mesure annoncée prévoit une exonération pouvant aller jusqu’à 20 ans sur certains revenus obtenus hors de Turquie par des personnes qui deviennent résidentes fiscales turques, sous conditions. C’est une évolution importante, car elle peut rendre la Turquie beaucoup plus compétitive face à des destinations comme Dubaï, l’Italie, Monaco, le Portugal ou Chypre. Mais ce régime ne doit pas être compris comme une exonération totale de tous les revenus : les revenus de source turque resteraient à analyser et pourraient rester imposables en Turquie.',
  ],
  [
    'La condition des trois années précédentes',
    'L’un des points les plus importants est la condition liée aux trois années civiles précédant l’installation. D’après les éléments annoncés, le régime viserait les personnes qui n’ont pas été résidentes fiscales ou contribuables en Turquie pendant cette période. Avant d’envisager une installation, il faut donc vérifier votre historique : avez-vous déjà vécu en Turquie récemment ? Avez-vous déclaré des revenus en Turquie ? Avez-vous eu une société, un bien locatif, une activité ou une obligation fiscale locale ? Ce contrôle permet d’éviter de construire un projet sur une hypothèse fragile.',
  ],
  [
    'Les revenus étrangers ne se traitent pas tous de la même façon',
    'Le terme “revenus étrangers” paraît simple, mais il recouvre des réalités très différentes. Un dividende étranger, une plus-value sur actions, une pension de retraite, un revenu immobilier, une prestation de conseil, des intérêts bancaires, une distribution de holding ou une vente de société ne se traitent pas forcément de la même manière. Le pays où le revenu est généré peut conserver un droit d’imposition. Une retenue à la source peut s’appliquer. Une convention fiscale peut modifier le résultat. C’est précisément pour cette raison qu’un diagnostic personnalisé est indispensable.',
  ],
  [
    'Dividendes étrangers : un sujet central pour les entrepreneurs',
    'Si vous possédez une société en France, au Royaume-Uni, aux Émirats, au Kazakhstan, en Suisse, aux États-Unis ou ailleurs, la question des dividendes est essentielle. Il faut vérifier où la société est réellement dirigée, où elle réalise ses bénéfices, quel pays prélève éventuellement une retenue à la source, quelle convention fiscale s’applique et à quel moment les dividendes sont distribués. Pour un entrepreneur ou un actionnaire, le calendrier d’installation peut avoir un impact important sur le traitement fiscal.',
  ],
  [
    'Plus-values étrangères : attention au calendrier',
    'Un investisseur peut vendre des actions, des parts de société, un portefeuille financier, un bien immobilier situé hors de Turquie ou une participation dans une holding. Le moment de la vente est souvent déterminant. Une plus-value réalisée avant l’installation, pendant la phase de transition ou après le changement de résidence fiscale peut produire des conséquences différentes. Il faut documenter le prix d’achat, le prix de vente, le pays de source, la banque dépositaire, les conventions fiscales et les preuves de résidence.',
  ],
  [
    'Revenus professionnels, consultants et digital nomads',
    'Un consultant, un dirigeant, un freelance, un développeur, un entrepreneur SaaS ou un digital nomad peut travailler depuis la Turquie pour des clients étrangers. Cette situation doit être analysée avec précision. Il faut savoir où le travail est réellement effectué, où sont les clients, où la société est enregistrée, où les contrats sont signés, où les paiements arrivent et où se trouve la direction effective de l’activité. Un revenu payé par un client étranger n’est pas automatiquement un revenu étranger exonéré si l’activité est exercée depuis la Turquie dans des conditions particulières.',
  ],
  [
    'Revenus immobiliers et pensions étrangères',
    'De nombreux investisseurs conservent des biens immobiliers dans leur pays d’origine. Dans beaucoup de cas, le pays où se trouve le bien garde un droit d’imposition sur les loyers ou la plus-value. Les pensions et retraites étrangères doivent aussi être étudiées avec prudence : une retraite publique, une retraite privée, une pension professionnelle ou une prestation sociale peuvent avoir des traitements différents selon la convention fiscale applicable. Pour les retraités ou les familles qui souhaitent vivre à Istanbul, Bodrum, Antalya ou Izmir, cette analyse est essentielle.',
  ],
  [
    'Ce qui resterait imposable en Turquie',
    'Même si le régime final est favorable, il ne faut pas confondre revenus étrangers et revenus de source turque. Un salaire payé par une société turque, une activité locale, des honoraires facturés à un client turc, un loyer provenant d’un bien situé en Turquie, des dividendes d’une société turque ou une plus-value sur un actif turc peuvent rester imposables en Turquie. La bonne stratégie consiste donc à séparer clairement les revenus étrangers, les revenus turcs et les revenus mixtes.',
  ],
  [
    'Le pays d’origine peut encore vous considérer comme résident fiscal',
    'Quitter son pays ne suffit pas toujours à quitter sa résidence fiscale. Si votre famille reste dans le pays d’origine, si vos sociétés sont toujours dirigées depuis ce pays, si votre patrimoine principal y demeure, si vous y passez encore beaucoup de temps ou si votre centre d’intérêts économiques y reste établi, l’administration fiscale locale peut contester votre départ. Pour un Français, par exemple, il faut étudier le foyer, le lieu de séjour principal, l’activité professionnelle, le centre des intérêts économiques, les sociétés françaises, l’immobilier, les dividendes, les plus-values et la convention fiscale France-Turquie.',
  ],
  [
    'Exemples de profils concernés',
    'Un entrepreneur avec une société étrangère devra analyser la société, les clients, la direction effective et les dividendes. Un investisseur avec un portefeuille financier devra analyser dividendes, intérêts, plus-values, banque dépositaire et pays de source. Une famille patrimoniale devra intégrer succession, donations, assurance-vie, immobilier, sociétés familiales et résidence de chaque membre. Un digital nomad devra vérifier la source réelle de son activité, ses contrats, sa société, sa banque et le risque de requalification. Chaque profil demande une réponse différente.',
  ],
  [
    'Comment Bosphoras accompagne cette analyse',
    'Bosphoras ne remplace pas un avocat fiscaliste et ne promet pas automatiquement une exonération. Notre rôle est de préparer une analyse privée sérieuse : comprendre votre situation, identifier les points sensibles, organiser les bons interlocuteurs et coordonner fiscalistes, avocats, banques, comptables, assurances, immobilier et installation en Turquie. L’objectif est simple : savoir si la Turquie peut devenir une base réellement adaptée, conforme et utile pour vous, votre famille et votre patrimoine.',
  ],
];

const checklist = [
  'Votre pays de résidence fiscale actuel et les risques de sortie',
  'Votre historique fiscal en Turquie sur les trois dernières années',
  'La nature exacte de vos revenus étrangers',
  'Vos éventuels revenus de source turque',
  'Les conventions fiscales applicables à votre situation',
  'Vos sociétés, comptes bancaires, biens immobiliers et actifs financiers',
  'La situation de votre famille et votre futur lieu de vie réel',
  'Les preuves documentaires nécessaires pour sécuriser votre installation',
];

const faq: Array<[string, string]> = [
  ['La Turquie taxe-t-elle les revenus mondiaux des résidents ?', 'En principe, un résident fiscal turc peut être imposé sur son revenu mondial. Le régime annoncé pourrait créer une exception pour certains revenus étrangers de nouveaux résidents, mais les conditions exactes doivent être vérifiées avec les textes définitifs.'],
  ['L’exonération de 20 ans est-elle automatique ?', 'Non. Elle dépendrait de critères précis, notamment l’historique fiscal des trois années précédentes, la nature des revenus et la situation personnelle du contribuable.'],
  ['Les revenus gagnés en Turquie seraient-ils exonérés ?', 'Non, il faut distinguer les revenus étrangers et les revenus de source turque. Les revenus liés à une activité, une société, un bien ou un client en Turquie doivent être analysés séparément.'],
  ['Un Français peut-il devenir résident fiscal turc et ne plus payer d’impôt en France ?', 'Pas automatiquement. Il faut analyser le foyer, le centre des intérêts économiques, les sociétés, l’immobilier, les revenus, les jours de présence et la convention fiscale France-Turquie.'],
  ['Les dividendes étrangers peuvent-ils être concernés ?', 'Potentiellement, si le texte final couvre ce type de revenu et si le profil respecte les conditions. Il faut aussi vérifier le pays de source, la retenue à la source, la convention fiscale et le moment de la distribution.'],
  ['Les plus-values étrangères peuvent-elles être concernées ?', 'Potentiellement, mais la réponse dépend du texte final, du pays où l’actif est situé, de la date de vente, de la nature de l’actif et de votre résidence fiscale au moment de l’opération.'],
  ['Pourquoi passer par Bosphoras ?', 'Parce qu’un projet d’installation fiscale ne se limite pas à une règle d’impôt. Il faut coordonner résidence, banque, assurance, immobilier, famille, conformité, fiscalistes et avocats pour prendre une décision sécurisée.'],
];

export function getTaxResidenceForeignIncomeClientFrMetadata(): Metadata {
  const canonical = `https://bosphoras.com${path}`;
  return {
    title: `${metaTitle} | Bosphoras`,
    description,
    alternates: {
      canonical,
      languages: {
        fr: 'https://bosphoras.com/residence-fiscale-turquie-revenus-etrangers',
        en: 'https://bosphoras.com/en/turkey-tax-residence-foreign-income',
        ru: 'https://bosphoras.com/ru/nalogovaya-rezidentsiya-turtsiya-inostrannye-dohody',
        ar: 'https://bosphoras.com/ar/turkey-tax-residence-foreign-income',
        'x-default': 'https://bosphoras.com/residence-fiscale-turquie-revenus-etrangers',
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Bosphoras',
      type: 'article',
      images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] },
  };
}

export function TaxResidenceForeignIncomeClientFrPage() {
  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'fr', datePublished: '2026-05-11', dateModified: '2026-05-11', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: `https://bosphoras.com${path}` }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
      <Header locale="fr" currentPath={path} />
      <main className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40">
          <div className="mx-auto max-w-[1400px]">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Fiscalité internationale · Turquie</p>
            <h1 className="mt-6 max-w-6xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">{title}</h1>
            <p className="mt-8 max-w-4xl text-lg leading-9 text-white/80">La Turquie attire de plus en plus d’entrepreneurs, d’investisseurs et de familles internationales. Mais avant de s’y installer, une question doit être traitée sérieusement : comment vos revenus étrangers seront-ils considérés si vous devenez résident fiscal turc ?</p>
            <Link href="/diagnostic-prive" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Demander une analyse privée<ArrowRight size={16} /></Link>
          </div>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="h-fit border border-[#d8c7a1] bg-[#fffaf0] p-8 lg:sticky lg:top-28">
              <Landmark className="h-8 w-8 text-[#8a6728]" />
              <h2 className="mt-6 font-serif text-3xl">Avant de décider</h2>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-[#3e4857]">
                {checklist.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#8a6728]" />{item}</li>)}
              </ul>
            </aside>
            <div className="space-y-5">
              {sections.map(([sectionTitle, text], index) => (
                <article key={sectionTitle} className="border border-[#d8c7a1] bg-white p-7 md:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6728]">{String(index + 1).padStart(2, '0')}</p>
                  <h2 className="mt-4 font-serif text-3xl tracking-[-0.025em] text-[#121826] md:text-4xl">{sectionTitle}</h2>
                  <p className="mt-5 text-base leading-8 text-[#3e4857]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1100px]">
            <ShieldCheck className="h-8 w-8 text-[#8a6728]" />
            <h2 className="mt-6 font-serif text-4xl tracking-[-0.03em] md:text-6xl">Une décision fiscale doit être préparée, pas improvisée</h2>
            <p className="mt-6 text-lg leading-9 text-[#3e4857]">Avant de transférer votre résidence, votre famille, vos revenus ou vos actifs, Bosphoras peut organiser une analyse privée de votre situation : résidence actuelle, revenus étrangers, sociétés, banque, immobilier, assurance, conformité et stratégie d’installation en Turquie.</p>
            <Link href="/diagnostic-prive" className="mt-8 inline-flex items-center justify-center gap-3 bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white">Demander une analyse privée<ArrowRight size={16} /></Link>
          </div>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1100px]">
            <FileText className="h-8 w-8 text-[#8a6728]" />
            <h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">Questions fréquentes</h2>
            <div className="mt-8 grid gap-px bg-[#d8c7a1]">
              {faq.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}
            </div>
          </div>
        </section>
      </main>
      <Footer locale="fr" />
    </>
  );
}
