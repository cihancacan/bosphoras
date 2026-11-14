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
    summary: 'Cliniqeo accompagne les patients francophones dans leur parcours de soins dentaires en Turquie, de la préparation du séjour à la coordination avec les équipes cliniques, avec une approche centrée sur le suivi et la qualité de service.',
    englishSummary: 'Cliniqeo helps French-speaking patients organise dental-care journeys in Turkey, coordinating clinic appointments, travel logistics and ongoing support through a patient-focused service model.'
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
    summary: 'Medsestra.kz développe une activité de coordination de services médicaux et d’assistance au Kazakhstan, avec l’ambition de simplifier l’accès aux prestations pour les entreprises, les organisateurs d’événements et leurs équipes.',
    englishSummary: 'Medsestra.kz develops medical support and assistance coordination services in Kazakhstan, connecting companies and event organisers with suitable healthcare service providers.'
  },
  {
    code: 'lovelockparis',
    name: 'LoveLockParis',
    region: 'France / international',
    sector: 'Tourisme & technologies numériques',
    englishSector: 'Travel & digital technology',
    financing: 'Capital innovation à étudier',
    summary: 'LoveLockParis développe un concept numérique autour des souvenirs, des émotions et des lieux emblématiques, à la rencontre du tourisme et de nouvelles expériences digitales.',
    englishSummary: 'LoveLockParis explores digital experiences centred on memories, meaningful places and travel, connecting tourism with personalised online interactions.'
  },
  {
    code: 'qenerzy',
    name: 'Qenerzy — Kus Solar Park 1',
    region: 'Région d’Almaty, Kazakhstan',
    sector: 'Énergie solaire & infrastructures',
    englishSector: 'Solar energy & infrastructure',
    financing: 'Capital projet et dette structurée à étudier',
    summary: 'Qenerzy porte Kus Solar Park 1, un projet de parc photovoltaïque d’environ 30 MW dans la région d’Almaty, avec l’ambition de développer une infrastructure de production d’électricité renouvelable au Kazakhstan.',
    englishSummary: 'Qenerzy is developing Kus Solar Park 1, a proposed 30 MW photovoltaic power project in the Almaty region, targeting new renewable electricity production capacity in Kazakhstan.'
  },
  {
    code: 'bosphoras-luxury-stays',
    name: 'Bosphoras Luxury Stays',
    region: 'International',
    sector: 'Hôtellerie & travel tech',
    englishSector: 'Hospitality & travel technology',
    financing: 'Capital de développement à étudier',
    summary: 'Bosphoras Luxury Stays développe une sélection internationale d’hôtels remarquables, de séjours et de guides de destinations, avec un modèle orienté vers la distribution digitale, la réservation et les partenariats hôteliers.',
    englishSummary: 'Bosphoras Luxury Stays curates exceptional hotels, travel stays and destination guides, pursuing an international digital-distribution and hospitality-partnership strategy.'
  }
];
