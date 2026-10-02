import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { fetchPropertyBySlug } from '@/lib/propertyStore';
import { getPropertyPath } from '@/data/propertyDesk';
import { getLocalePath, siteUrl } from '@/lib/routes';
import { PropertyDetailPage } from '@/components/PropertyDetailPage';

export const dynamic = 'force-dynamic';

const locale = 'fr' as const;
type PageProps = { params: { slug: string } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const property = await fetchPropertyBySlug(locale, decodeURIComponent(params.slug));
  if (!property) return {};
  return buildMetadata({
    locale,
    path: getPropertyPath(locale, property, true),
    title: property.seoTitle[locale] || property.title[locale],
    description: property.seoDescription[locale] || property.summary[locale],
    image: property.heroImage || property.images[0],
    alternates: Object.fromEntries(
      (['fr','en','ru','ar'] as const).map((targetLocale) => [
        targetLocale,
        siteUrl + getLocalePath(targetLocale, getPropertyPath(targetLocale, property, true)),
      ])
    ),
  });
}

export default async function Page({ params }: PageProps) {
  const property = await fetchPropertyBySlug(locale, decodeURIComponent(params.slug));
  if (!property) notFound();
  return <PropertyDetailPage locale={locale} property={property} globalMode />;
}
