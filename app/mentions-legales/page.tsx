import type { Metadata } from 'next';
import { LegalContentPage } from '@/components/LegalContentPage';
import { buildMetadata } from '@/lib/seo';

const locale = 'fr' as const;

export const metadata: Metadata = buildMetadata({
  locale,
  path: '/mentions-legales',
  title: 'Mentions légales | Bosphoras par Panorama Grup',
  description:
    'Mentions légales de Bosphoras, marque de Panorama Grup : éditeur, directeur de publication, adresse, SIRET, hébergement Vercel, propriété intellectuelle, responsabilité, confidentialité et contact.',
});

const sections = [
  {
    title: 'Éditeur du site',
    paragraphs: [
      'Le site Bosphoras est édité par Panorama Grup. Bosphoras est une marque exploitée par Panorama Grup.',
      'Adresse de contact : 88 Avenue des Ternes, 75017 Paris, France.',
      'SIRET : 80962988400036.',
      'Téléphone : 01 88 84 22 22.',
      'Adresse email : contact@bosphoras.com.',
      'Site internet : https://bosphoras.com.',
    ],
  },
  {
    title: 'Directeur de la publication',
    paragraphs: [
      'Le directeur de la publication du site est Panorama Grup, représentée par son représentant légal.',
      'Toute demande relative au contenu du site, à une correction, à un signalement, à une information légale ou à l’exercice d’un droit peut être adressée à : contact@bosphoras.com.',
    ],
  },
  {
    title: 'Hébergement du site',
    paragraphs: [
      'Le site est hébergé par Vercel Inc.',
      'Adresse communiquée par l’hébergeur : 440 N Barranca Ave #4133, Covina, CA 91723, United States.',
      'Site internet de l’hébergeur : https://vercel.com.',
      'Vercel intervient en qualité d’hébergeur technique. L’hébergeur ne participe pas à la direction éditoriale, commerciale ou opérationnelle du site Bosphoras.',
    ],
  },
  {
    title: 'Nature des services présentés',
    paragraphs: [
      'Bosphoras présente des services de bureau privé, coordination, conciergerie, accompagnement, orientation et mise en relation avec des professionnels, partenaires ou prestataires en Turquie et à l’international.',
      'Bosphoras peut intervenir sur des sujets liés à l’installation, la relocation, la création d’entreprise, la comptabilité, l’assurance, la santé, l’immobilier, les bureaux, le transport VIP, l’hôtellerie, les événements, la conciergerie et l’accès privé.',
      'Bosphoras ne se substitue pas à un avocat, fiscaliste, expert-comptable, médecin, assureur, banquier, agent immobilier, transporteur réglementé, agence de voyage réglementée ou tout autre professionnel soumis à autorisation, ordre professionnel, agrément ou obligation réglementaire.',
    ],
  },
  {
    title: 'Absence de conseil réglementé personnalisé',
    paragraphs: [
      'Les informations publiées sur le site sont fournies à titre général, informatif et commercial. Elles ne constituent pas un conseil juridique, fiscal, médical, financier, patrimonial, assurantiel ou immobilier personnalisé.',
      'Toute décision engageante doit être vérifiée et validée directement auprès des professionnels habilités concernés, selon la situation personnelle, familiale, patrimoniale, médicale, fiscale ou professionnelle du client.',
      'Bosphoras ne garantit aucun résultat administratif, juridique, fiscal, médical, financier, bancaire, immobilier, consulaire, migratoire ou patrimonial.',
    ],
  },
  {
    title: 'Propriété intellectuelle',
    paragraphs: [
      'L’ensemble du site Bosphoras, sa structure, ses pages, textes, éléments graphiques, contenus, signes distinctifs, slogans, bases de données, présentations et éléments éditoriaux sont protégés par le droit de la propriété intellectuelle.',
      'Toute reproduction, représentation, extraction, adaptation, diffusion, modification, réutilisation ou exploitation, totale ou partielle, sans autorisation écrite préalable de Panorama Grup, est interdite.',
      'Les marques, noms commerciaux, logos, noms de services et signes distinctifs de tiers éventuellement cités sur le site restent la propriété de leurs titulaires respectifs.',
    ],
  },
  {
    title: 'Responsabilité éditoriale et disponibilité',
    paragraphs: [
      'Panorama Grup s’efforce de publier des informations fiables et mises à jour. Toutefois, les règles applicables en matière de fiscalité, résidence, immigration, santé, assurance, immobilier, transport, banque, société ou investissement peuvent évoluer rapidement.',
      'Bosphoras ne peut garantir l’exactitude permanente, l’exhaustivité ou l’actualité de l’ensemble des informations publiées.',
      'L’accès au site peut être interrompu pour des raisons de maintenance, sécurité, hébergement, mise à jour, incident technique ou cas de force majeure.',
    ],
  },
  {
    title: 'Liens externes, partenaires et professionnels tiers',
    paragraphs: [
      'Le site peut faire référence à des partenaires, professionnels, institutions, hôtels, assureurs, cliniques, avocats, comptables, transporteurs, bureaux ou prestataires tiers.',
      'Sauf mention écrite explicite, ces références ne constituent pas une affiliation officielle, une exclusivité, une garantie, une recommandation réglementée ou une certification.',
      'Chaque professionnel ou prestataire tiers demeure seul responsable de ses conseils, devis, obligations, autorisations, assurances, engagements et conditions contractuelles.',
    ],
  },
  {
    title: 'Données personnelles et confidentialité',
    paragraphs: [
      'Les données transmises à Bosphoras peuvent contenir des informations personnelles, professionnelles, patrimoniales, fiscales, familiales, médicales ou sensibles.',
      'Bosphoras applique une logique de confidentialité renforcée et limite l’accès aux informations aux seules personnes ou entités nécessaires à l’exécution de la demande, sous réserve du consentement du client ou d’une obligation légale.',
      'Les modalités de traitement des données personnelles sont précisées dans la Politique de confidentialité et la Politique de protection des informations confidentielles.',
    ],
  },
  {
    title: 'Droit applicable',
    paragraphs: [
      'Les présentes mentions légales sont soumises au droit français, sous réserve des règles impératives applicables selon le pays du client, du prestataire, du partenaire ou du lieu d’exécution du service.',
      'En cas de difficulté, les parties privilégieront une résolution amiable avant toute démarche contentieuse.',
    ],
  },
  {
    title: 'Note de prudence',
    paragraphs: [
      'Cette page constitue une base de travail juridique destinée au site Bosphoras. Une validation par un professionnel du droit est recommandée avant publication définitive, notamment si les services, pays d’intervention ou conditions commerciales évoluent.',
    ],
  },
];

export default function LegalNoticePage() {
  return (
    <LegalContentPage
      locale={locale}
      currentPath="/mentions-legales"
      eyebrow="Bosphoras · Panorama Grup"
      title="Mentions légales"
      intro="Informations légales relatives au site Bosphoras, marque de Panorama Grup : éditeur, directeur de publication, hébergement, responsabilité, propriété intellectuelle et confidentialité."
      sections={sections}
    />
  );
}
