import type { Metadata } from 'next';
import { LegalContentPage } from '@/components/LegalContentPage';
import { buildMetadata } from '@/lib/seo';

const locale = 'fr' as const;

export const metadata: Metadata = buildMetadata({
  locale,
  path: '/cookies',
  title: 'Politique cookies | Bosphoras',
  description:
    'Politique cookies de Bosphoras, marque de Panorama Grup : cookies nécessaires, mesure d’audience, préférences, consentement, durée de conservation, paramétrage et contact.',
});

const sections = [
  {
    title: 'Objet de la politique cookies',
    paragraphs: [
      'La présente Politique cookies explique comment le site Bosphoras, marque exploitée par Panorama Grup, peut utiliser des cookies, traceurs ou technologies similaires.',
      'Elle complète la Politique de confidentialité et les Conditions générales d’utilisation du site.',
    ],
  },
  {
    title: 'Qu’est-ce qu’un cookie ?',
    paragraphs: [
      'Un cookie est un petit fichier ou traceur déposé ou lu sur le terminal de l’utilisateur lors de la consultation d’un site internet.',
      'Il peut permettre au site de fonctionner correctement, de mémoriser certains choix, de mesurer l’audience ou d’améliorer l’expérience utilisateur.',
    ],
  },
  {
    title: 'Responsable du site',
    paragraphs: [
      'Le site est édité par Panorama Grup, exploitant la marque Bosphoras.',
      'Adresse : 88 Avenue des Ternes, 75017 Paris, France.',
      'SIRET : 80962988400036.',
      'Email : contact@bosphoras.com.',
      'Téléphone : 01 88 84 22 22.',
    ],
  },
  {
    title: 'Cookies strictement nécessaires',
    paragraphs: [
      'Certains cookies ou traceurs sont nécessaires au fonctionnement technique du site et ne nécessitent pas toujours le consentement préalable de l’utilisateur.',
      'Ils peuvent être utilisés pour assurer la sécurité, la navigation, l’affichage des pages, la mémorisation de préférences essentielles ou la stabilité du site.',
    ],
    bullets: [
      'Sécurité et prévention des usages abusifs.',
      'Fonctionnement technique du site.',
      'Gestion de l’affichage, du responsive et de la navigation.',
      'Mémorisation des choix strictement nécessaires au service demandé.',
    ],
  },
  {
    title: 'Cookies de mesure d’audience',
    paragraphs: [
      'Le site peut utiliser des outils de mesure d’audience afin de comprendre la fréquentation, les pages consultées, les performances du site et les parcours utilisateurs.',
      'Lorsque ces outils ne sont pas strictement exemptés de consentement, ils sont soumis au choix de l’utilisateur.',
      'Les données collectées à cette fin sont utilisées pour améliorer le contenu, la structure, le référencement naturel et l’expérience générale du site.',
    ],
  },
  {
    title: 'Cookies de préférences',
    paragraphs: [
      'Des cookies de préférences peuvent être utilisés pour mémoriser certains choix, comme la langue, la région, l’affichage ou d’autres paramètres de confort.',
      'Ces cookies permettent une navigation plus fluide et personnalisée, sans nécessairement identifier directement l’utilisateur.',
    ],
  },
  {
    title: 'Cookies marketing ou de suivi',
    paragraphs: [
      'Le site peut, à l’avenir, utiliser des cookies marketing, publicitaires ou de suivi destinés à mesurer l’efficacité de campagnes, proposer des contenus adaptés ou analyser les conversions.',
      'Ces cookies ne doivent être déposés qu’avec le consentement de l’utilisateur lorsque la réglementation l’exige.',
      'Bosphoras ne souhaite pas vendre les données personnelles de ses utilisateurs à des annonceurs.',
    ],
  },
  {
    title: 'Services tiers',
    paragraphs: [
      'Certains cookies ou traceurs peuvent être déposés par des services tiers utilisés par le site : hébergement, sécurité, analytics, cartes, vidéos, formulaires, CRM, outils de communication ou services de mesure.',
      'Ces tiers peuvent traiter certaines informations selon leurs propres politiques, dans la limite des paramètres activés sur le site et des choix exprimés par l’utilisateur.',
    ],
  },
  {
    title: 'Consentement',
    paragraphs: [
      'Lorsque le consentement est requis, l’utilisateur doit pouvoir accepter, refuser ou paramétrer les cookies non essentiels.',
      'Le refus de certains cookies non essentiels ne doit pas empêcher l’accès au site, mais peut limiter certaines fonctionnalités, mesures ou personnalisations.',
      'L’utilisateur peut modifier ses choix à tout moment lorsque le mécanisme de gestion du consentement est disponible.',
    ],
  },
  {
    title: 'Durée de conservation',
    paragraphs: [
      'La durée de conservation des cookies varie selon leur finalité et leur nature.',
      'Les cookies strictement nécessaires peuvent être conservés pendant la durée requise pour assurer le fonctionnement du service.',
      'Les cookies soumis à consentement ne doivent pas être conservés au-delà des durées autorisées par la réglementation applicable.',
    ],
  },
  {
    title: 'Paramétrage du navigateur',
    paragraphs: [
      'L’utilisateur peut configurer son navigateur afin d’accepter, refuser, supprimer ou limiter les cookies.',
      'Les paramètres varient selon les navigateurs et appareils utilisés. L’utilisateur peut consulter l’aide de son navigateur pour gérer ses préférences.',
      'La désactivation de certains cookies techniques peut affecter le fonctionnement ou l’affichage du site.',
    ],
  },
  {
    title: 'Données personnelles',
    paragraphs: [
      'Lorsque les cookies permettent de collecter des données personnelles, ces traitements sont encadrés par la Politique de confidentialité du site.',
      'L’utilisateur peut exercer ses droits en écrivant à : contact@bosphoras.com.',
    ],
  },
  {
    title: 'Modification de la politique cookies',
    paragraphs: [
      'Panorama Grup peut modifier la présente Politique cookies afin de tenir compte de l’évolution du site, des outils utilisés, des services proposés ou de la réglementation.',
      'La version applicable est celle publiée sur le site à la date de consultation.',
    ],
  },
  {
    title: 'Validation juridique',
    paragraphs: [
      'Cette Politique cookies constitue une base de travail juridique destinée au site Bosphoras. Une validation par un professionnel du droit est recommandée avant publication définitive, notamment selon les outils de mesure, marketing ou consentement effectivement installés.',
    ],
  },
];

export default function CookiesPolicyPage() {
  return (
    <LegalContentPage
      locale={locale}
      currentPath="/cookies"
      eyebrow="Bosphoras · Cookies"
      title="Politique cookies"
      intro="Cette politique explique l’usage des cookies et traceurs pouvant être utilisés sur le site Bosphoras, ainsi que les choix offerts aux utilisateurs."
      sections={sections}
    />
  );
}
