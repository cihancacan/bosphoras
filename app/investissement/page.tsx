import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { InvestmentLanding } from '@/components/InvestmentLanding';

export const metadata: Metadata = buildMetadata({
  locale: 'fr',
  path: '/investissement',
  title: 'Investissement dans les entreprises & financement de projets | Bosphoras Investment',
  description: 'Bosphoras Investment Partners : soumettre un projet, préparer une levée de fonds et découvrir les principes de l’investissement en entreprises, actions et obligations. Industrie, IA, énergie et services à l’international.',
  alternates: { fr: 'https://www.bosphoras.com/investissement', en: 'https://www.bosphoras.com/en/investment', 'x-default': 'https://www.bosphoras.com/en/investment' }
});

export default function InvestmentPage() {
  return <InvestmentLanding locale="fr" />;
}
