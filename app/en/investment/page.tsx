import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { InvestmentLanding } from '@/components/InvestmentLanding';

export const metadata: Metadata = buildMetadata({
  locale: 'en',
  path: '/investment',
  title: 'Business Investment Opportunities & Project Funding | Bosphoras Investment',
  description: 'Bosphoras Investment Partners: submit your business for funding, prepare an investor-ready dossier and explore how private equity, bonds and project finance work across industry, technology and energy.',
  alternates: { fr: 'https://www.bosphoras.com/investissement', en: 'https://www.bosphoras.com/en/investment', 'x-default': 'https://www.bosphoras.com/en/investment' }
});

export default function InvestmentPageEnglish() {
  return <InvestmentLanding locale="en" />;
}
