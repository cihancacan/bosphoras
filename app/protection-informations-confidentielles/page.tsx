import type { Metadata } from 'next';
import { LegalContentPage } from '@/components/LegalContentPage';
import { buildMetadata } from '@/lib/seo';

const locale = 'fr' as const;

export const metadata: Metadata = buildMetadata({
  locale,
  path: '/protection-informations-confidentielles',
  title: 'Protection des informations confidentielles | Bosphoras',
  description:
    'Politique de protection des informations confidentielles Bosphoras : données sensibles, patrimoine, fiscalité, santé, KYC, origine des fonds, documents privés, accès limité et partage encadré.',
});

const sections = [
  {
    title: 'Objet de cette politique',
    paragraphs: [
      'La présente politique précise les principes appliqués par Bosphoras, marque exploitée par Panorama Grup, pour protéger les informations confidentielles transmises dans le cadre de ses services de bureau privé, coordination, conciergerie, accompagnement et mise en relation.',
      'Elle s’applique aux informations communiquées par les clients, prospects, partenaires, prestataires ou représentants, quel que soit le canal utilisé : site internet, email, téléphone, WhatsApp, rendez-vous, formulaire, document transmis ou échange privé.',
      'Cette politique complète les Mentions légales, les Conditions générales d’utilisation, les Conditions générales de vente et la Politique de confidentialité du site.',
    ],
  },
  {
    title: 'Identité de l’entité concernée',
    paragraphs: [
      'Bosphoras est une marque exploitée par Panorama Grup.',
      'Adresse : 88 Avenue des Ternes, 75017 Paris, France.',
      'SIRET : 80962988400036.',
      'Téléphone : 01 88 84 22 22.',
      'Email : contact@bosphoras.com.',
    ],
  },
  {
    title: 'Définition des informations confidentielles',
    paragraphs: [
      'Sont considérées comme confidentielles toutes les informations non publiques, sensibles, personnelles, professionnelles, familiales, patrimoniales, fiscales, médicales, financières, contractuelles ou stratégiques communiquées à Bosphoras dans le cadre d’une demande, d’un échange ou d’une mission.',
      'La confidentialité s’applique également aux informations relatives aux préférences privées, aux projets d’installation, aux contacts introduits, aux propositions commerciales, aux conditions négociées, aux partenaires présentés et aux documents transmis.',
    ],
  },
  {
    title: 'Catégories d’informations protégées',
    paragraphs: [
      'Les informations confidentielles peuvent notamment concerner les éléments suivants.',
    ],
    bullets: [
      'Informations d’identité : passeport, carte d’identité, nationalité, pays de résidence, adresse, coordonnées personnelles.',
      'Informations familiales : composition du foyer, scolarité, résidence, sécurité personnelle, contraintes privées, organisation de vie.',
      'Informations patrimoniales : budget, actifs, capacité d’investissement, biens détenus, objectifs patrimoniaux, niveau de fortune déclaré.',
      'Informations financières : origine déclarée des fonds, banque, capacité de financement, justificatifs, contraintes de paiement ou de transfert.',
      'Informations fiscales : résidence fiscale, situation déclarative, projet de structuration, société, holdings, revenus ou obligations locales.',
      'Informations juridiques : contrats, démarches administratives, litiges, sociétés, documents de constitution, mandats ou pouvoirs.',
      'Informations médicales : santé, assurance, besoins de prise en charge, orientation vers médecins, cliniques ou assureurs.',
      'Informations liées au mode de vie : hôtels, chauffeurs, restaurants, événements, yachts, jets privés, préférences de discrétion et habitudes de déplacement.',
      'Informations commerciales : devis, honoraires, commissions, introductions, partenaires, conditions de service et propositions personnalisées.',
    ],
  },
  {
    title: 'Principe de discrétion renforcée',
    paragraphs: [
      'Bosphoras accompagne une clientèle internationale pouvant présenter des enjeux de confidentialité importants. La discrétion, la limitation des accès et la protection des informations sont donc au cœur de son approche.',
      'Les informations confidentielles ne sont utilisées que pour comprendre la demande, préparer une proposition, organiser une mise en relation, coordonner une prestation ou assurer le suivi du client.',
      'Bosphoras évite toute diffusion inutile, tout partage excessif et toute communication non nécessaire des informations transmises.',
    ],
  },
  {
    title: 'Accès limité aux informations',
    paragraphs: [
      'L’accès aux informations confidentielles est limité aux personnes ou intervenants ayant besoin d’en connaître pour traiter la demande du client.',
      'Bosphoras peut compartimenter les informations afin de ne transmettre à chaque intervenant que les éléments strictement nécessaires à son rôle.',
      'Les informations les plus sensibles, notamment les données de santé, documents d’identité, éléments patrimoniaux, origine des fonds ou informations fiscales, font l’objet d’une vigilance renforcée.',
    ],
  },
  {
    title: 'Partage avec des professionnels ou prestataires',
    paragraphs: [
      'Certaines informations confidentielles peuvent être transmises à des professionnels ou prestataires tiers lorsque cela est nécessaire à la demande du client.',
      'Cela peut concerner notamment des avocats, fiscalistes, comptables, assureurs, médecins, cliniques, banques, agents immobiliers, bureaux, hôtels, transporteurs, conciergeries, organisateurs d’événements, yachts, jets privés ou partenaires opérationnels.',
      'Le partage est limité à ce qui est utile pour la mission. Chaque professionnel ou prestataire tiers reste responsable de ses propres obligations de confidentialité, secret professionnel, sécurité et conformité.',
    ],
  },
  {
    title: 'Professionnels réglementés',
    paragraphs: [
      'Bosphoras ne se substitue pas aux professions réglementées. Les avocats, fiscalistes, experts-comptables, médecins, assureurs, banques, notaires, agents immobiliers ou autres professionnels habilités restent seuls responsables de leurs conseils, analyses, obligations, autorisations et décisions.',
      'Lorsque les informations confidentielles sont transmises à un professionnel réglementé, elles sont traitées selon les règles applicables à ce professionnel, notamment secret professionnel, obligations déontologiques, obligations légales ou règles propres à son pays d’exercice.',
    ],
  },
  {
    title: 'KYC, origine des fonds et conformité',
    paragraphs: [
      'Certaines demandes peuvent nécessiter des vérifications de conformité, notamment identification du client, KYC, origine déclarée des fonds, documents bancaires, documents de société, justificatifs de résidence ou informations fiscales.',
      'Bosphoras peut aider à coordonner ces demandes, sans se substituer aux obligations des banques, avocats, comptables, assureurs, autorités ou professionnels habilités.',
      'Le client reste responsable de l’exactitude, de la sincérité et de la licéité des informations et documents transmis.',
      'Bosphoras peut refuser, suspendre ou interrompre une mission en cas de doute sérieux, incohérence documentaire, risque de fraude, blanchiment, corruption, sanctions, fausse déclaration ou demande contraire aux lois applicables.',
    ],
  },
  {
    title: 'Obligations du client',
    paragraphs: [
      'Le client s’engage à transmettre uniquement des informations exactes, sincères, nécessaires et licites.',
      'Il doit signaler toute information particulièrement sensible, confidentielle ou soumise à restriction avant sa transmission.',
      'Le client s’engage également à préserver la confidentialité des informations, contacts, partenaires, conditions commerciales, introductions, devis, propositions ou documents communiqués par Bosphoras.',
    ],
  },
  {
    title: 'Confidentialité des introductions',
    paragraphs: [
      'Les introductions réalisées par Bosphoras auprès de professionnels, partenaires, prestataires, établissements, hôtels, restaurants, clubs privés ou contacts privilégiés sont confidentielles.',
      'Le client s’engage à ne pas contourner abusivement Bosphoras, divulguer les contacts confidentiels, diffuser les conditions négociées ou transmettre les informations reçues à des tiers non autorisés.',
      'Les introductions ne constituent pas une garantie de résultat, d’acceptation, de disponibilité ou de conclusion d’un contrat.',
    ],
  },
  {
    title: 'Sécurité des échanges',
    paragraphs: [
      'Bosphoras met en œuvre des mesures raisonnables de sécurité organisationnelle et technique pour limiter les accès non autorisés, pertes, divulgations, altérations ou usages abusifs des informations confidentielles.',
      'Certains canaux de communication usuels, comme email, téléphone ou messagerie instantanée, peuvent présenter des limites de sécurité. Le client est invité à éviter l’envoi d’informations particulièrement sensibles lorsque cela n’est pas nécessaire.',
      'Lorsque la nature du dossier l’exige, Bosphoras peut recommander un canal plus approprié pour la transmission de documents sensibles.',
    ],
  },
  {
    title: 'Conservation des informations',
    paragraphs: [
      'Les informations confidentielles sont conservées pendant une durée proportionnée à la finalité de la relation, à l’exécution de la mission, aux obligations légales, comptables, fiscales, probatoires ou de conformité.',
      'Lorsque les informations ne sont plus nécessaires, elles peuvent être supprimées, archivées de manière restreinte ou anonymisées selon leur nature et les obligations applicables.',
      'Certaines informations peuvent être conservées plus longtemps lorsqu’elles sont nécessaires à la preuve d’une prestation, au respect d’une obligation légale ou à la défense des intérêts de Panorama Grup.',
    ],
  },
  {
    title: 'Limites à la confidentialité',
    paragraphs: [
      'La confidentialité peut être limitée lorsqu’une divulgation est imposée par la loi, une autorité compétente, une obligation réglementaire, une procédure judiciaire, une obligation fiscale, une demande administrative légitime ou un impératif de sécurité.',
      'Bosphoras peut également divulguer certaines informations lorsque cela est nécessaire pour protéger ses droits, prévenir une fraude, répondre à une obligation de conformité, assurer la sécurité des personnes ou éviter une activité illicite.',
    ],
  },
  {
    title: 'Données personnelles et RGPD',
    paragraphs: [
      'Lorsque les informations confidentielles constituent des données personnelles, elles sont également traitées conformément à la Politique de confidentialité de Bosphoras.',
      'Les personnes concernées peuvent exercer leurs droits d’accès, rectification, effacement, limitation, opposition, portabilité et retrait du consentement lorsque ces droits sont applicables.',
      'Toute demande relative aux données personnelles ou confidentielles peut être envoyée à : contact@bosphoras.com.',
    ],
  },
  {
    title: 'Transferts internationaux',
    paragraphs: [
      'Bosphoras intervient notamment en Turquie et peut coordonner des partenaires ou prestataires situés hors de l’Union européenne.',
      'Certaines informations confidentielles peuvent donc être transmises ou consultées depuis des pays tiers lorsque cela est nécessaire à la mission demandée.',
      'Ces transferts sont limités aux informations nécessaires et réalisés dans une logique de discrétion, proportionnalité et protection des intérêts du client.',
    ],
  },
  {
    title: 'Relation avec les partenaires',
    paragraphs: [
      'Bosphoras sélectionne ses partenaires et prestataires selon des critères de sérieux, professionnalisme, capacité opérationnelle, réputation et pertinence pour la demande du client.',
      'Toutefois, chaque partenaire ou prestataire tiers demeure indépendant et responsable de ses propres obligations, notamment en matière de confidentialité, sécurité, conformité et secret professionnel.',
      'Bosphoras ne peut garantir les pratiques internes de chaque tiers au-delà des informations dont elle dispose et des engagements éventuellement convenus.',
    ],
  },
  {
    title: 'Contact confidentialité',
    paragraphs: [
      'Toute demande relative à la confidentialité, à la protection des informations ou à la suppression de données peut être adressée à : contact@bosphoras.com.',
      'Bosphoras peut demander une vérification d’identité avant de traiter une demande portant sur des informations sensibles ou confidentielles.',
    ],
  },
  {
    title: 'Modification de la politique',
    paragraphs: [
      'Panorama Grup peut modifier la présente politique afin de tenir compte de l’évolution du site, des services proposés, des partenaires, des outils utilisés ou de la réglementation applicable.',
      'La version applicable est celle publiée sur le site à la date de consultation.',
    ],
  },
  {
    title: 'Validation juridique',
    paragraphs: [
      'Cette politique constitue une base de travail juridique destinée au site Bosphoras. Une validation par un professionnel du droit est recommandée avant publication définitive, notamment selon les services effectivement proposés, les pays d’intervention et les partenaires impliqués.',
    ],
  },
];

export default function ConfidentialInformationProtectionPage() {
  return (
    <LegalContentPage
      locale={locale}
      currentPath="/protection-informations-confidentielles"
      eyebrow="Bosphoras · Confidentialité renforcée"
      title="Protection des informations confidentielles"
      intro="Cette politique précise les principes de discrétion, limitation d’accès, partage encadré, sécurité et confidentialité appliqués aux informations sensibles transmises à Bosphoras."
      sections={sections}
    />
  );
}
