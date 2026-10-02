import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { getPageBySlug } from '@/data/pages';
import { PropertyDeskPage } from '@/components/PropertyDeskPage';

export const dynamic = 'force-dynamic';

const page = getPageBySlug('fr' as const, '/immobilier-turquie');

export const metadata: Metadata = page
  ? buildMetadata({
      locale: 'fr' as const,
      path: '/immobilier-turquie',
      title: page.title,
      description: page.metaDescription,
    })
  : {};

export default async function Page() {
  if (!page) notFound();
  return <PropertyDeskPage page={page} />;
}
