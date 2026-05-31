import type { Locale } from '@/lib/i18n';
import type { MainPageContent } from './types';

const page: MainPageContent = {
  id: 'private-club',
  locale: 'fr',
  slug: '/cercle-prive',
  title: 'Bosphoras Private Access 2026 : cercle privé Turquie | Bosphoras',
  h1: 'Bosphoras Private Access : une seule adhésion, un seul niveau de service',
  metaDescription:
    'Bosphoras Private Access 2026 : admission annuelle 15 000 USD, retainer mensuel 3 500 USD, bureau Bosphoras, The Peninsula Istanbul, conciergerie, immobilier et lifestyle.',
  shortIntro:
    'Pour certains clients, la Turquie demande un accès permanent à un bureau privé capable de coordonner les bons interlocuteurs avec méthode et continuité.',
  sections: [
    {
      heading: 'Une seule adhésion. Un seul niveau de service.',
      body:
        'Le cercle privé Bosphoras donne accès au même niveau de service, de suivi et de traitement prioritaire. Les demandes diffèrent, pas le niveau du membre.',
      bullets: [
        'Admission annuelle 2026 : 15 000 USD',
        'Retainer mensuel 2026 : 3 500 USD',
        'Cycle de 12 mois à compter de la validation du profil',
        'Sur parrainage, recommandation ou validation du profil',
      ],
    },
    {
      heading: 'Admission annuelle 2026',
      body:
        'L’admission annuelle de 15 000 USD ouvre le cycle membre, valide l’entrée dans le cercle et donne accès au cadre Bosphoras Private Access.',
      bullets: ['15 000 USD', 'Validation du profil', 'Entrée dans le cercle membre', 'Ouverture du cycle annuel'],
    },
    {
      heading: 'Retainer mensuel 2026',
      body:
        'Le retainer mensuel de 3 500 USD donne accès au bureau Bosphoras, au traitement prioritaire et au suivi continu des demandes membres.',
      bullets: ['3 500 USD par mois', 'Accès au bureau Bosphoras', 'Traitement prioritaire', 'Suivi continu'],
    },
    {
      heading: 'Adresse membre à Istanbul : The Peninsula Istanbul',
      body:
        'The Peninsula Istanbul devient un point d’ancrage Bosphoras Premium : wellness, fitness, hospitality, rendez-vous privés et coordination membre, inclus dans la mensualité selon le cadre validé.',
      bullets: ['The Peninsula Istanbul', 'Wellness', 'Fitness', 'Hospitality', 'Rendez-vous privés'],
    },
    {
      heading: 'Demande classique',
      body:
        'Les clients qui ne souhaitent pas rejoindre le cercle peuvent formuler une demande classique via Bosphoras Private Desk.',
      bullets: ['Mission ponctuelle', 'Accompagnement ciblé', 'Sans statut membre', 'Sans priorité Private Access'],
    },
  ],
  faqs: [
    { question: 'Combien coûte Private Access en 2026 ?', answer: 'Admission annuelle : 15 000 USD. Retainer mensuel : 3 500 USD. Cycle de 12 mois.' },
    { question: 'The Peninsula Istanbul est-il inclus ?', answer: 'Oui, l’accès premium coordonné est inclus dans la mensualité selon le cadre membre validé.' },
    { question: 'Existe-t-il une demande classique ?', answer: 'Oui, via Bosphoras Private Desk, sans statut membre Private Access.' },
  ],
  cta: { label: 'Demander une adhésion', href: '/adhesion/demande-membre', secondaryLabel: 'Demande classique', secondaryHref: '/diagnostic-prive' },
  jsonLdType: 'Service',
  internalLinks: [
    { pageId: 'luxury-concierge', label: 'Conciergerie de luxe' },
    { pageId: 'transport', label: 'Transport VIP' },
    { pageId: 'istanbul', label: 'Istanbul premium' },
    { pageId: 'private-assessment', label: 'Demande classique' },
  ],
};

export const privateClubSeoOverrides: Partial<Record<Locale, MainPageContent[]>> = {
  fr: [page],
  en: [{ ...page, locale: 'en', slug: '/private-access-club' }],
  ru: [{ ...page, locale: 'ru', slug: '/chastnyy-klub' }],
  ar: [{ ...page, locale: 'ar', slug: '/النادي-الخاص' }],
};
