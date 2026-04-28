import type { Metadata } from 'next';
import { LegalContentPage } from '@/components/LegalContentPage';
import { buildMetadata } from '@/lib/seo';

const locale = 'fr' as const;

export const metadata: Metadata = buildMetadata({
  locale,
  path: '/mentions-legales',
  title: 'Mentions légales | Bosphoras',
  description: 'Mentions légales de Bosphoras, marque de Panorama Grup : éditeur, hébergeur, contact, propriété intellectuelle et responsabilité.',
});

const sections = [
  {
    title: 'Éditeur',
    paragraphs: [
      'Le site Bosphoras est édité par Panorama Grup. Bosphoras est une marque exploitée par Panorama Grup.',
      'Adresse : 88 Avenue des Ternes, 75017 Paris, France. SIRET : 80962988400036. Téléphone : 01 88 84 22 22. Email : contact@bosphoras.com.',
    ],
  },
  {
    title: 'Directeur de publication',
    paragraphs: ['Le directeur de publication est Panorama Grup, représentée par son représentant légal.'],
  },
  {
    title: 'Hébergement',
    paragraphs: [
      'Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States. Site web : vercel.com.',
    ],
  },
  {
    title: 'Nature du site',
    paragraphs: [
      'Bosphoras présente des services de bureau privé, coordination, conciergerie, accompagnement et mise en relation en Turquie et à l’international.',
      'Bosphoras ne se substitue pas aux professionnels réglementés : avocat, fiscaliste, médecin, assureur, comptable, banque, agent immobilier ou autre professionnel habilité.',
    ],
  },
  {
    title: 'Propriété intellectuelle',
    paragraphs: [
      'Les contenus, textes, éléments graphiques, pages, signes distinctifs et structures du site sont protégés. Toute reproduction ou utilisation non autorisée est interdite.',
    ],
  },
  {
    title: 'Responsabilité',
    paragraphs: [
      'Les informations publiées sont fournies à titre général. Elles ne constituent pas un conseil juridique, fiscal, médical, financier ou patrimonial personnalisé.',
      'L’utilisateur doit confirmer toute décision auprès des professionnels compétents avant tout engagement.',
    ],
  },
  {
    title: 'Validation juridique',
    paragraphs: [
      'Ces mentions sont un modèle de travail et doivent être relues et validées par un professionnel du droit avant publication définitive.',
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
      intro="Informations légales relatives au site Bosphoras, marque de Panorama Grup."
      sections={sections}
    />
  );
}
