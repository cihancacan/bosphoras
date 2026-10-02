import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { fetchPropertyBySlug } from '@/lib/propertyStore';
import { PropertyDetailPage } from '@/components/PropertyDetailPage';
import { globalPropertyHubPaths } from '@/data/propertyDesk';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const property = await fetchPropertyBySlug('ru' as const, decodeURIComponent(params.slug));
  if (!property) return {};
  return buildMetadata({
    locale: 'ru' as const,
    path: globalPropertyHubPaths['ru' as const] + '/' + property.slugs['ru' as const].replace(/^\//,''),
    title: property.seoTitle['ru' as const],
    description: property.seoDescription['ru' as const],
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
  const property = await fetchPropertyBySlug('ru' as const, decodeURIComponent(params.slug));
  if (!property) notFound();
  return <PropertyDetailPage locale="ru" property={property} globalMode />;
}
