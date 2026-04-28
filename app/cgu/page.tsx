import type { Metadata } from 'next';
import { LegalContentPage } from '@/components/LegalContentPage';
import { buildMetadata } from '@/lib/seo';

const locale = 'fr' as const;

export const metadata: Metadata = buildMetadata({
  locale,
  path: '/cgu',
  title: 'CGU | Bosphoras',
  description: 'Conditions générales d’utilisation du site Bosphoras : accès, usage, responsabilité, confidentialité et propriété intellectuelle.',
});

const sections = [
  {
    title: 'Objet',
    paragraphs: [
      'Les présentes conditions générales d’utilisation encadrent l’accès et l’utilisation du site Bosphoras.',
      'En consultant le site, l’utilisateur accepte les présentes conditions, sans préjudice des conditions particulières pouvant s’appliquer à certains services.',
    ],
  },
  {
    title: 'Accès au site',
    paragraphs: [
      'Le site est accessible librement, sous réserve d’interruptions liées à la maintenance, à la sécurité, à l’hébergement ou à des contraintes techniques indépendantes de Bosphoras.',
      'Bosphoras peut modifier, suspendre ou retirer tout ou partie du site sans préavis.',
    ],
  },
  {
    title: 'Utilisation autorisée',
    paragraphs: [
      'L’utilisateur s’engage à utiliser le site de manière loyale, licite et conforme à sa destination.',
      'Toute tentative d’extraction massive, de copie, de détournement, d’altération, d’accès non autorisé ou d’usage frauduleux est interdite.',
    ],
  },
  {
    title: 'Informations publiées',
    paragraphs: [
      'Les informations du site sont générales et indicatives. Elles ne constituent pas un conseil juridique, fiscal, médical, financier ou patrimonial personnalisé.',
      'Les informations relatives à la Turquie, à la résidence, à la fiscalité, à la santé, à l’assurance, à l’immobilier ou à la création d’entreprise peuvent évoluer.',
    ],
  },
  {
    title: 'Formulaires et demandes privées',
    paragraphs: [
      'L’utilisateur peut transmettre des informations via les formulaires, par email, téléphone ou messagerie. Il s’engage à transmettre des informations exactes, sincères et nécessaires au traitement de sa demande.',
      'Bosphoras peut refuser une demande incomplète, incohérente, contraire à ses principes de conformité ou ne correspondant pas à son périmètre d’intervention.',
    ],
  },
  {
    title: 'Propriété intellectuelle',
    paragraphs: [
      'Les contenus du site restent la propriété de Bosphoras, Panorama Grup ou de leurs titulaires respectifs. Toute reproduction ou exploitation non autorisée est interdite.',
    ],
  },
  {
    title: 'Validation juridique',
    paragraphs: [
      'Ces conditions sont un modèle de travail et doivent être relues et validées par un professionnel du droit avant publication définitive.',
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalContentPage
      locale={locale}
      currentPath="/cgu"
      eyebrow="Conditions du site"
      title="Conditions générales d’utilisation"
      intro="Les présentes conditions encadrent l’accès, la consultation et l’utilisation du site Bosphoras."
      sections={sections}
    />
  );
}
