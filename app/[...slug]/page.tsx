import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { MainPageRenderer } from '@/components/MainPageRenderer';
import { HighPotentialGuideRenderer } from '@/components/HighPotentialGuideRenderer';
import { ProgrammaticPageRenderer } from '@/components/ProgrammaticPageRenderer';
import { PropertyDeskPage } from '@/components/PropertyDeskPage';
import { PropertyDetailPage } from '@/components/PropertyDetailPage';
import { getPageBySlug, allPages } from '@/data/pages';
import { getHighPotentialGuideBySlug, highPotentialGuides } from '@/data/highPotentialPages';
import { getProgrammaticPageBySlug, getProgrammaticPagesForLocale } from '@/data/programmatic/pages';
import { ENABLE_ALL_PROGRAMMATIC_PAGES } from '@/lib/launchConfig';
import { getPublishedProperties, propertyHubPaths } from '@/data/propertyDesk';
import { fetchPropertyBySlug } from '@/lib/propertyStore';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface PageProps {
  params: { slug: string[] };
}

const locale = 'fr' as const;

function resolveSlug(slugSegments: string[]): string {
  return '/' + slugSegments.map((s) => decodeURIComponent(s)).join('/');
}

export function generateStaticParams() {
  const mainParams = allPages[locale]
    .filter((p) => p.slug !== '/')
    .map((p) => ({ slug: p.slug.replace(/^\//, '').split('/') }));

  const guideParams = highPotentialGuides
    .filter((guide) => guide.locale === locale)
    .map((guide) => ({ slug: guide.slug.replace(/^\//, '').split('/') }));

  const programmaticParams = ENABLE_ALL_PROGRAMMATIC_PAGES
    ? getProgrammaticPagesForLocale(locale).map((page) => ({ slug: page.slug.replace(/^\//, '').split('/') }))
    : [];

  const propertyParams = getPublishedProperties().map((property) => ({
    slug: `${propertyHubPaths[locale].replace(/^\//, '')}/${property.slugs[locale].replace(/^\//, '')}`.split('/'),
  }));

  return [...mainParams, ...guideParams, ...programmaticParams, ...propertyParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = resolveSlug(params.slug);

  if (slug.startsWith(`${propertyHubPaths[locale]}/`)) {
    const propertySlug = slug.slice(propertyHubPaths[locale].length + 1);
    const property = await fetchPropertyBySlug(locale, propertySlug);
    if (property) {
      return buildMetadata({
        locale,
        path: slug,
        title: property.seoTitle[locale],
        description: property.seoDescription[locale],
        image: property.heroImage || property.images[0],
        alternates: Object.fromEntries(
          (['fr', 'en', 'ru', 'ar'] as const).map((targetLocale) => [
            targetLocale,
            `https://www.bosphoras.com${targetLocale === 'fr' ? '' : `/${targetLocale}`}${propertyHubPaths[targetLocale]}/${property.slugs[targetLocale].replace(/^\//, '')}`,
          ])
        ),
      });
    }
  }

  const programmaticPage = getProgrammaticPageBySlug(locale, slug);
  if (programmaticPage) {
    return buildMetadata({
      locale,
      path: programmaticPage.slug,
      title: programmaticPage.title,
      description: programmaticPage.metaDescription,
      noIndex: !programmaticPage.isIndexable,
      alternates: null,
    });
  }

  const guide = getHighPotentialGuideBySlug(locale, slug);
  if (guide) {
    return buildMetadata({ locale, path: guide.slug, title: guide.title, description: guide.metaDescription, alternates: Object.fromEntries(highPotentialGuides.filter((item) => item.id === guide.id).map((item) => [item.locale, `https://www.bosphoras.com${item.locale === 'fr' ? '' : `/${item.locale}`}${item.slug}`])) });
  }

  const page = getPageBySlug(locale, slug);
  if (!page) return {};
  return buildMetadata({
    locale,
    path: page.slug,
    title: page.title,
    description: page.metaDescription,
  });
}

export default async function CatchAllPage({ params }: PageProps) {
  const slug = resolveSlug(params.slug);

  if (slug.startsWith(`${propertyHubPaths[locale]}/`)) {
    const propertySlug = slug.slice(propertyHubPaths[locale].length + 1);
    const property = await fetchPropertyBySlug(locale, propertySlug);
    if (property) return <PropertyDetailPage locale={locale} property={property} />;
  }

  const programmaticPage = ENABLE_ALL_PROGRAMMATIC_PAGES ? getProgrammaticPageBySlug(locale, slug) : undefined;
  if (programmaticPage) {
    return (
      <>
        <Header locale={locale} currentPath={programmaticPage.slug} />
        <ProgrammaticPageRenderer page={programmaticPage} />
        <Footer locale={locale} />
      </>
    );
  }

  const guide = getHighPotentialGuideBySlug(locale, slug);
  if (guide) {
    return (
      <>
        <Header locale={locale} currentPath={guide.slug} />
        <HighPotentialGuideRenderer guide={guide} />
        <Footer locale={locale} />
      </>
    );
  }

  const page = getPageBySlug(locale, slug);
  if (!page) notFound();
  if (page.id === 'property') return <PropertyDeskPage page={page} />;
  return <MainPageRenderer page={page} />;
}
