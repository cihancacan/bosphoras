import type { Metadata } from 'next';
import { LegalContentPage } from '@/components/LegalContentPage';
import { buildMetadata } from '@/lib/seo';

const locale = 'fr' as const;

export const metadata: Metadata = buildMetadata({
  locale,
  path: '/cgv',
  title: 'Conditions générales de vente | Bosphoras',
  description:
    'Conditions générales de vente de Bosphoras, marque de Panorama Grup : prestations, devis, honoraires, commissions, paiement, annulation, prestataires tiers, responsabilité et confidentialité.',
});

const sections = [
  {
    title: 'Objet des CGV',
    paragraphs: [
      'Les présentes Conditions générales de vente encadrent les conditions dans lesquelles Panorama Grup, exploitant la marque Bosphoras, peut proposer des prestations de bureau privé, coordination, conciergerie, accompagnement, conseil opérationnel et mise en relation.',
      'Elles s’appliquent aux prestations proposées en France, en Turquie ou à l’international, sauf conditions particulières, devis, contrat, lettre de mission ou accord écrit spécifique conclu avec le client.',
    ],
  },
  {
    title: 'Identification du prestataire',
    paragraphs: [
      'Bosphoras est une marque exploitée par Panorama Grup.',
      'Adresse : 88 Avenue des Ternes, 75017 Paris, France.',
      'SIRET : 80962988400036.',
      'Téléphone : 01 88 84 22 22.',
      'Email : contact@bosphoras.com.',
    ],
  },
  {
    title: 'Nature des prestations',
    paragraphs: [
      'Bosphoras intervient comme bureau privé, coordinateur, facilitateur, concierge, conseiller opérationnel et intermédiaire de mise en relation selon la nature de la demande du client.',
      'Les prestations peuvent porter notamment sur l’installation en Turquie, la relocation, la création d’entreprise, la comptabilité, la fiscalité, l’assurance, la santé, l’immobilier, les bureaux, le transport VIP, l’hôtellerie, les événements, les services lifestyle et l’accès privé.',
      'Bosphoras ne se substitue pas aux professions réglementées et ne fournit pas de conseil juridique, fiscal, médical, financier, bancaire, assurantiel ou immobilier réglementé lorsque cela relève de professionnels habilités.',
    ],
  },
  {
    title: 'Devis, proposition commerciale et acceptation',
    paragraphs: [
      'Toute prestation peut faire l’objet d’un devis, d’une proposition commerciale, d’une lettre de mission, d’un bon de commande, d’un email d’accord ou de conditions particulières selon la nature et le niveau d’urgence de la demande.',
      'L’acceptation peut résulter d’une signature, d’un accord écrit, d’un paiement, d’un acompte ou de toute confirmation claire du client.',
      'Aucune prestation complexe, sensible ou engageante ne doit être considérée comme définitivement acceptée sans validation écrite des éléments essentiels : périmètre, prix, délai, responsabilités et conditions d’exécution.',
    ],
  },
  {
    title: 'Honoraires et rémunération',
    paragraphs: [
      'Les prestations de Bosphoras peuvent être rémunérées sous forme d’honoraires fixes, forfaits, abonnement, frais de coordination, frais de conciergerie, frais de succès, commission de mise en relation ou combinaison de plusieurs modes de rémunération.',
      'Les prix peuvent varier selon la complexité, l’urgence, la confidentialité, le niveau de service demandé, le nombre d’intervenants, la ville concernée, le pays de résidence du client et les frais engagés.',
      'Sauf mention contraire, les frais de tiers, frais administratifs, honoraires d’avocats, comptables, médecins, assureurs, hôteliers, transporteurs, agents immobiliers ou autres prestataires ne sont pas inclus dans les honoraires de Bosphoras.',
    ],
  },
  {
    title: 'Commissions et mise en relation',
    paragraphs: [
      'Bosphoras peut percevoir une commission, une rémunération d’apport d’affaires, une marge ou une rémunération de coordination lors d’une mise en relation avec un prestataire ou partenaire.',
      'Lorsque cela est nécessaire ou approprié, les modalités économiques peuvent être précisées au client ou intégrées dans la proposition commerciale.',
      'La perception d’une commission ne modifie pas l’obligation de Bosphoras de sélectionner les intervenants avec sérieux, prudence et cohérence avec l’intérêt du client.',
    ],
  },
  {
    title: 'Paiement et acompte',
    paragraphs: [
      'Les modalités de paiement sont précisées dans le devis, la proposition commerciale, la facture ou l’accord écrit applicable.',
      'Bosphoras peut demander un acompte, un paiement préalable, une provision, un paiement intégral ou une garantie avant de commencer une mission ou d’engager des frais pour le client.',
      'Tout retard de paiement peut entraîner la suspension de la mission, la suspension de certaines démarches ou l’exigibilité des sommes dues, sans préjudice des autres droits de Panorama Grup.',
    ],
  },
  {
    title: 'Frais externes et avances',
    paragraphs: [
      'Certaines prestations peuvent nécessiter des frais externes : transports, hôtels, réservations, traductions, formalités, dépôts, honoraires de professionnels, frais administratifs, frais bancaires ou frais liés à des prestataires tiers.',
      'Ces frais peuvent être payés directement par le client au prestataire concerné ou avancés par Bosphoras sous réserve d’un accord écrit préalable.',
      'Toute avance de frais par Bosphoras peut être conditionnée à une provision préalable versée par le client.',
    ],
  },
  {
    title: 'Modification de mission',
    paragraphs: [
      'Toute modification du périmètre, de l’urgence, du nombre de personnes accompagnées, de la destination, des intervenants, du niveau de service ou des objectifs peut entraîner une révision des honoraires et délais.',
      'Les demandes supplémentaires non prévues initialement peuvent faire l’objet d’un devis complémentaire ou d’une validation écrite séparée.',
    ],
  },
  {
    title: 'Annulation, report et interruption',
    paragraphs: [
      'Les conditions d’annulation ou de report dépendent de la nature de la prestation, des frais déjà engagés et des conditions imposées par les prestataires tiers.',
      'Les sommes correspondant à des prestations déjà réalisées, du temps mobilisé, des frais engagés, des réservations non remboursables ou des honoraires de tiers peuvent rester dues.',
      'Bosphoras peut interrompre une mission en cas de non-paiement, manque de coopération, informations fausses, risque juridique, comportement inapproprié, demande illicite ou atteinte à la sécurité des intervenants.',
    ],
  },
  {
    title: 'Prestataires tiers',
    paragraphs: [
      'Les professionnels et prestataires tiers demeurent seuls responsables de leurs prestations, conseils, autorisations, assurances, conditions, devis, délais et obligations réglementaires.',
      'Bosphoras peut coordonner, recommander, organiser ou faciliter la relation, sans garantir le résultat final d’un tiers ni se substituer à ses obligations professionnelles.',
      'Le client doit lire, comprendre et accepter les conditions propres à chaque prestataire tiers avant de s’engager avec lui.',
    ],
  },
  {
    title: 'Absence de garantie de résultat',
    paragraphs: [
      'Bosphoras s’engage à mettre en œuvre des moyens raisonnables, proportionnés et professionnels dans le cadre de la mission acceptée.',
      'Bosphoras ne garantit aucun résultat administratif, fiscal, juridique, médical, financier, bancaire, immobilier, consulaire, migratoire, patrimonial ou commercial.',
      'Les résultats peuvent dépendre de tiers, d’administrations, de règles locales, de délais, de documents, de décisions professionnelles, de conditions de marché ou d’éléments hors du contrôle de Bosphoras.',
    ],
  },
  {
    title: 'Obligations du client',
    paragraphs: [
      'Le client s’engage à transmettre des informations exactes, complètes et à jour, ainsi que les documents nécessaires à l’analyse et à l’exécution de sa demande.',
      'Il s’engage à coopérer de bonne foi, à répondre dans des délais raisonnables et à informer Bosphoras de tout changement important de situation.',
      'Le client demeure responsable de ses décisions finales et de la validation des informations auprès des professionnels habilités.',
    ],
  },
  {
    title: 'Confidentialité',
    paragraphs: [
      'Les informations échangées dans le cadre d’une mission peuvent être confidentielles, sensibles, personnelles, patrimoniales, fiscales, familiales ou professionnelles.',
      'Bosphoras applique une logique de confidentialité renforcée. Le client s’engage également à ne pas divulguer sans autorisation les contacts, conditions, documents, propositions, introductions ou informations confidentielles communiqués par Bosphoras.',
    ],
  },
  {
    title: 'Responsabilité',
    paragraphs: [
      'La responsabilité de Panorama Grup ne peut être engagée qu’en cas de faute prouvée directement imputable à Bosphoras dans l’exécution de sa mission.',
      'Bosphoras ne peut être tenue responsable des décisions du client, des actes ou omissions de prestataires tiers, des décisions administratives, des évolutions réglementaires, des refus, retards ou indisponibilités imputables à des tiers.',
      'Les dommages indirects, pertes d’opportunité, pertes de chance, pertes d’image, pertes financières indirectes ou conséquences liées à une décision non validée par un professionnel compétent sont exclus dans les limites permises par la loi.',
    ],
  },
  {
    title: 'Droit applicable et règlement des différends',
    paragraphs: [
      'Les présentes CGV sont soumises au droit français, sous réserve des règles impératives applicables selon la qualité du client, son pays de résidence ou le lieu d’exécution de la prestation.',
      'En cas de différend, les parties privilégieront une solution amiable avant toute procédure.',
    ],
  },
  {
    title: 'Validation juridique',
    paragraphs: [
      'Ces CGV constituent une base de travail juridique destinée au site Bosphoras. Une validation par un professionnel du droit est recommandée avant publication définitive et avant toute utilisation contractuelle.',
    ],
  },
];

export default function TermsOfSalePage() {
  return (
    <LegalContentPage
      locale={locale}
      currentPath="/cgv"
      eyebrow="Bosphoras · Conditions de vente"
      title="Conditions générales de vente"
      intro="Conditions applicables aux prestations de bureau privé, coordination, conciergerie, accompagnement et mise en relation proposées par Bosphoras, marque de Panorama Grup."
      sections={sections}
    />
  );
}
