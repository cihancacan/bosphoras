import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { getPageBySlug } from '@/data/pages';
import { PropertyDeskPage } from '@/components/PropertyDeskPage';

export const dynamic = 'force-dynamic';

const page = getPageBySlug('ar' as const, '/عقارات-تركيا');

export const metadata: Metadata = page
  ? buildMetadata({
      locale: 'ar' as const,
      path: '/عقارات-تركيا',
      title: page.title,
      description: page.metaDescription,
    })
  : {};

export default async function Page() {
  if (!page) notFound();
  return <PropertyDeskPage page={page} />;
}
