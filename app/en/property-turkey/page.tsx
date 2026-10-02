import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { getPageBySlug } from '@/data/pages';
import { PropertyDeskPage } from '@/components/PropertyDeskPage';

export const dynamic = 'force-dynamic';

const page = getPageBySlug('en' as const, '/property-turkey');

export const metadata: Metadata = page
  ? buildMetadata({
      locale: 'en' as const,
      path: '/property-turkey',
      title: page.title,
      description: page.metaDescription,
    })
  : {};

export default async function Page() {
  if (!page) notFound();
  return <PropertyDeskPage page={page} />;
}
