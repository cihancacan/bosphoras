import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { getPage } from '@/data/pages';
import { PropertyDeskPage } from '@/components/PropertyDeskPage';

export const dynamic = 'force-dynamic';

const locale = 'ru' as const;

export function generateMetadata(): Metadata {
  const page = getPage(locale, 'property');
  if (!page) return {};
  return buildMetadata({
    locale,
    path: page.slug,
    title: page.title,
    description: page.metaDescription,
  });
}

export default function Page() {
  const page = getPage(locale, 'property');
  if (!page) notFound();
  return <PropertyDeskPage page={page} />;
}
