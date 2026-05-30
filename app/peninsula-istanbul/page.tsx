import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PeninsulaIstanbulLanding, peninsulaCopy } from '@/components/PeninsulaIstanbulLanding';

const locale = 'fr' as const;
const path = '/peninsula-istanbul';

export const metadata: Metadata = buildMetadata({
  locale,
  path,
  title: peninsulaCopy[locale].metaTitle,
  description: peninsulaCopy[locale].metaDescription,
});

export default function PeninsulaIstanbulPage() {
  return <PeninsulaIstanbulLanding locale={locale} currentPath={path} />;
}
