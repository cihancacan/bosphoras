import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { getPageBySlug } from '@/data/pages';
import { PropertyDeskPage } from '@/components/PropertyDeskPage';

export const dynamic = 'force-dynamic';

const page = getPageBySlug('ru' as const, '/nedvizhimost-v-turtsii');

export const metadata: Metadata = page
  ? buildMetadata({
      locale: 'ru' as const,
      path: '/nedvizhimost-v-turtsii',
      title: page.title,
      description: page.metaDescription,
    })
  : {};

export default async function Page() {
  if (!page) notFound();
  return <PropertyDeskPage page={page} />;
}
