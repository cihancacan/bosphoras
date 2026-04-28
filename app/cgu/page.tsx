import type { Metadata } from 'next';
import { LegalContentPage } from '@/components/LegalContentPage';
import { buildMetadata } from '@/lib/seo';

const locale = 'fr' as const;

export const metadata: Metadata = buildMetadata({
  locale,
  path: '/cgu',
  title: 'Conditions générales d’utilisation | Bosphoras',
  description:
    'Conditions générales d’utilisation du site Bosphoras : accès au site, usage autorisé, responsabilité, confidentialité, propriété intellectuelle, formulaires et relation avec les utilisateurs.',
});

const sections = [
  {
    title: 'Objet des CGU',
    paragraphs: [
      'Les présentes Conditions générales d’utilisation encadrent l’accès, la consultation et l’utilisation du site Bosphoras, édité par Panorama Grup.',
      'Le site présente les services de Bosphoras, marque de Panorama Grup, relatifs à l’accompagnement, la coordination, la conciergerie privée et la mise en relation de clients internationaux en Turquie et à l’international.',
      'Toute consultation du site implique l’acceptation des présentes CGU par l’utilisateur.',
    ],
  },
  {
    title: 'Accès au site',
    paragraphs: [
      'Le site est accessible à tout utilisateur disposant d’un accès à internet. Les frais liés à l’accès au site restent à la charge de l’utilisateur.',
      'Panorama Grup peut modifier, suspendre ou interrompre l’accès à tout ou partie du site pour des raisons de maintenance, sécurité, mise à jour, évolution technique ou cas de force majeure.',
      'Panorama Grup ne garantit pas un accès continu, permanent, sans erreur ou sans interruption au site.',
    ],
  },
  {
    title: 'Usage autorisé',
    paragraphs: [
      'L’utilisateur s’engage à utiliser le site de manière loyale, licite, raisonnable et conforme à sa finalité.',
      'Il est interdit d’utiliser le site pour porter atteinte aux droits de Panorama Grup, de Bosphoras, d’un partenaire, d’un prestataire, d’un autre utilisateur ou de tout tiers.',
    ],
    bullets: [
      'Toute tentative d’accès non autorisé aux systèmes, fichiers, bases de données ou espaces privés est interdite.',
      'Toute extraction automatisée, scraping, copie massive ou réutilisation non autorisée du contenu du site est interdite.',
      'Toute diffusion de contenu frauduleux, trompeur, illicite, diffamatoire, injurieux ou portant atteinte à la confidentialité est interdite.',
    ],
  },
  {
    title: 'Formulaires, demandes et informations transmises',
    paragraphs: [
      'Le site peut permettre à l’utilisateur de transmettre une demande de contact, de diagnostic privé, d’évaluation ou d’information.',
      'L’utilisateur garantit que les informations communiquées sont exactes, sincères, actualisées et ne portent pas atteinte aux droits de tiers.',
      'Bosphoras peut refuser, suspendre ou ne pas traiter une demande incomplète, incohérente, frauduleuse, manifestement abusive ou contraire à ses standards de conformité.',
    ],
  },
  {
    title: 'Absence de relation contractuelle automatique',
    paragraphs: [
      'L’utilisation du site, l’envoi d’un formulaire ou la prise de contact ne crée pas automatiquement une relation contractuelle entre l’utilisateur et Panorama Grup.',
      'Toute prestation effective de Bosphoras doit faire l’objet d’une validation, d’un échange, d’un devis, d’un accord écrit, d’une lettre de mission ou de conditions commerciales spécifiques selon la nature du service demandé.',
    ],
  },
  {
    title: 'Nature informative du contenu',
    paragraphs: [
      'Les contenus publiés sur le site sont fournis à titre général. Ils ont pour objectif de présenter l’univers Bosphoras, ses services, son approche et ses domaines de coordination.',
      'Ces contenus ne constituent pas un conseil juridique, fiscal, médical, financier, bancaire, patrimonial, assurantiel ou immobilier personnalisé.',
      'L’utilisateur doit consulter les professionnels habilités avant toute décision engageante.',
    ],
  },
  {
    title: 'Professionnels tiers et partenaires',
    paragraphs: [
      'Bosphoras peut mettre l’utilisateur en relation avec des professionnels ou prestataires tiers : avocats, fiscalistes, comptables, médecins, assureurs, bureaux, hôteliers, transporteurs, agents immobiliers ou autres intervenants.',
      'Chaque professionnel tiers demeure seul responsable de ses conseils, prestations, autorisations, obligations, devis, contrats et assurances.',
      'Bosphoras intervient comme coordinateur, facilitateur ou apporteur de relation, sauf stipulation contraire dans un document contractuel spécifique.',
    ],
  },
  {
    title: 'Propriété intellectuelle',
    paragraphs: [
      'Les éléments du site, notamment textes, visuels, pages, graphismes, structures, éléments éditoriaux, contenus, marques, signes distinctifs et bases de données, sont protégés.',
      'Toute reproduction, extraction, diffusion, modification ou réutilisation sans autorisation écrite préalable de Panorama Grup est interdite.',
    ],
  },
  {
    title: 'Confidentialité',
    paragraphs: [
      'L’utilisateur peut être amené à transmettre des informations confidentielles dans le cadre d’une demande. Bosphoras applique une logique de discrétion et de limitation des accès.',
      'L’utilisateur s’engage également à ne pas divulguer les informations, propositions, contacts, conditions, introductions ou documents confidentiels communiqués par Bosphoras sans accord préalable.',
    ],
  },
  {
    title: 'Responsabilité de l’utilisateur',
    paragraphs: [
      'L’utilisateur est responsable de son usage du site, des informations transmises et des décisions prises à partir des contenus consultés.',
      'Il lui appartient de vérifier l’adéquation des services présentés à sa situation personnelle et d’obtenir les validations nécessaires auprès des professionnels compétents.',
    ],
  },
  {
    title: 'Responsabilité de Panorama Grup',
    paragraphs: [
      'Panorama Grup s’efforce d’assurer la disponibilité et la fiabilité du site, sans garantir l’absence totale d’erreur, interruption, faille, omission ou information devenue obsolète.',
      'Panorama Grup ne saurait être tenue responsable d’une mauvaise interprétation du contenu, d’une décision prise sans validation professionnelle, d’un dommage indirect, d’une perte d’opportunité ou d’un résultat non obtenu auprès d’un tiers.',
    ],
  },
  {
    title: 'Modification des CGU',
    paragraphs: [
      'Panorama Grup peut modifier les présentes CGU à tout moment afin de les adapter à l’évolution du site, des services, de la réglementation ou de son organisation.',
      'La version applicable est celle publiée sur le site à la date de consultation par l’utilisateur.',
    ],
  },
  {
    title: 'Droit applicable',
    paragraphs: [
      'Les présentes CGU sont soumises au droit français, sous réserve des règles impératives applicables selon le pays de résidence de l’utilisateur ou le lieu d’exécution des services.',
      'En cas de difficulté, les parties privilégient une résolution amiable avant toute procédure.',
    ],
  },
  {
    title: 'Validation juridique',
    paragraphs: [
      'Ces conditions constituent une base de travail juridique destinée au site Bosphoras. Une validation par un professionnel du droit est recommandée avant publication définitive.',
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalContentPage
      locale={locale}
      currentPath="/cgu"
      eyebrow="Bosphoras · Conditions d’utilisation"
      title="Conditions générales d’utilisation"
      intro="Règles applicables à l’accès, à la consultation et à l’utilisation du site Bosphoras."
      sections={sections}
    />
  );
}
