import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { fetchPropertyBySlug } from '@/lib/propertyStore';
import { PropertyDetailPage } from '@/components/PropertyDetailPage';
import { globalPropertyHubPaths } from '@/data/propertyDesk';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const property = await fetchPropertyBySlug('ar' as const, decodeURIComponent(params.slug));
  if (!property) return {};
  return buildMetadata({
    locale: 'ar' as const,
    path: globalPropertyHubPaths['ar' as const] + '/' + property.slugs['ar' as const].replace(/^\//,''),
    title: property.seoTitle['ar' as const],
    description: property.seoDescription['ar' as const],
    image: property.heroImage || property.images[0],
    alternates: Object.fromEntries(
      (['fr','en','ru','ar'] as const).map((targetLocale) => [
        targetLocale,
        'https://www.bosphoras.com' + (targetLocale === 'fr' ? '' : '/' + targetLocale) + globalPropertyHubPaths[targetLocale] + '/' + property.slugs[targetLocale].replace(/^\//,''),
      ])
    ),
  });
}

export default async function Page({ params }: { params: { slug: string } }) {
  const property = await fetchPropertyBySlug('ar' as const, decodeURIComponent(params.slug));
  if (!property) notFound();
  return <PropertyDetailPage locale="ar" property={property} globalMode />;
}
