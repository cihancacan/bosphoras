// Public editorial descriptions only. These are projects to be documented,
// not securities, approved funding campaigns, commitments or offers.
export type InvestmentVentureCode = 'cliniqeo' | 'aqma' | 'medsestra' | 'lovelockparis' | 'qenerzy' | 'bosphoras-luxury-stays';
export type InvestmentVenture = {
  code: InvestmentVentureCode;
  name: string;
  region: string;
  sector: string;
  financing: string;
  summary: string;
  englishSummary: string;
  englishSector: string;
};

export const investmentVentures: InvestmentVenture[] = [
  {
    code: 'cliniqeo',
    name: 'Cliniqeo',
    region: 'France / Turquie',
    sector: 'Santé & services internationaux',
    englishSector: 'Healthcare & international services',
    financing: 'Capital / croissance à étudier',
    summary: 'Activité d’accompagnement francophone en tourisme dentaire. Le dossier doit préciser le modèle commercial, les partenariats cliniques, la marge et les besoins de développement.',
    englishSummary: 'French-speaking dental tourism coordination business. Its dossier will need documented commercial economics, clinic partnerships, margins and expansion requirements.'
  },
  {
    code: 'aqma',
    name: 'AQMA',
    region: 'France',
    sector: 'Construction & rénovation',
    englishSector: 'Construction & renovation',
    financing: 'Financement d’équipements ou de développement à étudier',
    summary: 'AQMA développe un modèle de réseau national dans le bâtiment : acquisition des demandes clients, qualification, rendez-vous et orientation vers des partenaires locaux qui établissent les devis, réalisent les travaux et encaissent les règlements. Les partenaires reversent à AQMA une commission contractuelle de 20 % sur leurs encaissements éligibles. L’ambition est de déployer 15 agences en France, avec une priorité initiale à l’acquisition de clients en Île-de-France.',
    englishSummary: 'AQMA is expanding a construction-services network: it acquires customer enquiries, qualifies requests and arranges appointments with local partners who quote, perform and invoice the works. Under the intended commercial model, partners remit a 20% commission on eligible receipts. The national expansion plan targets 15 agencies, with customer acquisition in the Paris region as the initial priority.'
  },
  {
    code: 'medsestra',
    name: 'Medsestra.kz',
    region: 'Kazakhstan',
    sector: 'Services médicaux',
    englishSector: 'Medical services',
    financing: 'Capital de développement à étudier',
    summary: 'Projet de coordination de services médicaux et d’assistance au Kazakhstan. Le dossier devra distinguer les activités propres de l’entreprise de celles de ses partenaires opérationnels.',
    englishSummary: 'Kazakhstan-based medical services and assistance coordination initiative. The dossier must separate its own business economics from those of its operational partners.'
  },
  {
    code: 'lovelockparis',
    name: 'LoveLockParis',
    region: 'France / international',
    sector: 'Tourisme & technologies numériques',
    englishSector: 'Travel & digital technology',
    financing: 'Capital innovation à étudier',
    summary: 'Projet d’expérience digitale autour des souvenirs et des lieux emblématiques. Le dossier devra préciser le produit opérationnel, les revenus, la propriété intellectuelle et le plan commercial.',
    englishSummary: 'Digital experience project focused on memories and meaningful places. Its investment dossier must substantiate the working product, revenue model, intellectual property and go-to-market plan.'
  },
  {
    code: 'qenerzy',
    name: 'Qenerzy — Kus Solar Park 1',
    region: 'Région d’Almaty, Kazakhstan',
    sector: 'Énergie solaire & infrastructures',
    englishSector: 'Solar energy & infrastructure',
    financing: 'Capital projet et dette structurée à étudier',
    summary: 'Projet de parc photovoltaïque de 30 MW envisagé dans la région d’Almaty. Le foncier, les autorisations, le raccordement, le budget et le contrat d’achat d’électricité restent à documenter avant tout financement.',
    englishSummary: 'Proposed 30 MW photovoltaic development in the Almaty region. Land rights, permits, grid connection, project costs and any power-purchase agreement must be evidenced before financing.'
  },
  {
    code: 'bosphoras-luxury-stays',
    name: 'Bosphoras Luxury Stays',
    region: 'International',
    sector: 'Hôtellerie & travel tech',
    englishSector: 'Hospitality & travel technology',
    financing: 'Capital de développement à étudier',
    summary: 'Développement du département hôtels et séjours : distribution, partenariats et croissance commerciale. Les revenus, les commissions effectivement réalisées et les coûts d’acquisition devront être vérifiés.',
    englishSummary: 'Expansion of the hotels and stays division through distribution, partnerships and marketing. Actual revenue, earned commissions and customer acquisition costs will need validation.'
  }
];
