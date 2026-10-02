import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { MainPageRenderer } from '@/components/MainPageRenderer';
import { HighPotentialGuideRenderer } from '@/components/HighPotentialGuideRenderer';
import { ProgrammaticPageRenderer } from '@/components/ProgrammaticPageRenderer';
import { PropertyDeskPage } from '@/components/PropertyDeskPage';
import { PropertyDetailPage } from '@/components/PropertyDetailPage';
import { PrivateAssessmentLocalizedPage } from '@/components/PrivateAssessmentLocalizedPage';
import { MembershipApplicationLocalizedPage } from '@/components/MembershipApplicationLocalizedPage';
import { PrivateAccessApplicationNotice } from '@/components/PrivateAccessApplicationNotice';
import { getPageBySlug, allPages } from '@/data/pages';
import { getHighPotentialGuideBySlug, highPotentialGuides } from '@/data/highPotentialPages';
import { getProgrammaticPageBySlug, getProgrammaticPagesForLocale } from '@/data/programmatic/pages';
import { ENABLE_ALL_PROGRAMMATIC_PAGES } from '@/lib/launchConfig';
import { getPublishedProperties, globalPropertyHubPaths, propertyHubPaths } from '@/data/propertyDesk';
import { fetchPropertyBySlug } from '@/lib/propertyStore';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface PageProps {
  params: { locale: string; slug: string[] };
}

const supportedLocales: Locale[] = ['en', 'ru', 'ar'];

function resolveSlug(slugSegments: string[]): string {
  return '/' + slugSegments.map((s) => decodeURIComponent(s)).join('/');
}

function isLocale(value: string): value is Locale {
  return (supportedLocales as string[]).includes(value);
}

export function generateStaticParams() {
  const params: Array<{ locale: string; slug: string[] }> = [];
  for (const locale of supportedLocales) {
    for (const page of allPages[locale]) {
      if (page.slug === '/') continue;
      params.push({ locale, slug: page.slug.replace(/^\//, '').split('/') });
    }
    for (const guide of highPotentialGuides.filter((item) => item.locale === locale)) {
      params.push({ locale, slug: guide.slug.replace(/^\//, '').split('/') });
    }
    if (ENABLE_ALL_PROGRAMMATIC_PAGES) {
      for (const programmaticPage of getProgrammaticPagesForLocale(locale)) {
        params.push({ locale, slug: programmaticPage.slug.replace(/^\//, '').split('/') });
      }
    }
    for (const property of getPublishedProperties()) {
      params.push({
        locale,
        slug: `${propertyHubPaths[locale].replace(/^\//, '')}/${property.slugs[locale].replace(/^\//, '')}`.split('/'),
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const slug = resolveSlug(params.slug);

  const propertyHub = slug.startsWith(`${globalPropertyHubPaths[params.locale]}/`)
    ? globalPropertyHubPaths[params.locale]
    : slug.startsWith(`${propertyHubPaths[params.locale]}/`)
    ? propertyHubPaths[params.locale]
    : null;

  if (propertyHub) {
    const propertySlug = slug.slice(propertyHub.length + 1);
    const property = await fetchPropertyBySlug(params.locale, propertySlug);
    if (property) {
      return buildMetadata({
        locale: params.locale,
        path: slug,
        title: property.seoTitle[params.locale],
        description: property.seoDescription[params.locale],
        image: property.heroImage || property.images[0],
        alternates: Object.fromEntries(
          (['fr', 'en', 'ru', 'ar'] as const).map((targetLocale) => [
            targetLocale,
            `https://www.bosphoras.com${targetLocale === 'fr' ? '' : `/${targetLocale}`}${globalPropertyHubPaths[targetLocale]}/${property.slugs[targetLocale].replace(/^\//, '')}`,
          ])
        ),
      });
    }
  }

  const programmaticPage = getProgrammaticPageBySlug(params.locale, slug);
  if (programmaticPage) {
    return buildMetadata({
      locale: params.locale,
      path: programmaticPage.slug,
      title: programmaticPage.title,
      description: programmaticPage.metaDescription,
      noIndex: !programmaticPage.isIndexable,
      alternates: null,
    });
  }

  const guide = getHighPotentialGuideBySlug(params.locale, slug);
  if (guide) {
    return buildMetadata({ locale: params.locale, path: guide.slug, title: guide.title, description: guide.metaDescription, alternates: Object.fromEntries(highPotentialGuides.filter((item) => item.id === guide.id).map((item) => [item.locale, `https://www.bosphoras.com${item.locale === 'fr' ? '' : `/${item.locale}`}${item.slug}`])) });
  }

  const page = getPageBySlug(params.locale, slug);
  if (!page) return {};
  return buildMetadata({
    locale: params.locale,
    path: page.slug,
    title: page.title,
    description: page.metaDescription,
  });
}

export default async function LocaleCatchAllPage({ params }: PageProps) {
  if (!isLocale(params.locale)) notFound();
  const slug = resolveSlug(params.slug);

  const propertyHub = slug.startsWith(`${globalPropertyHubPaths[params.locale]}/`)
    ? globalPropertyHubPaths[params.locale]
    : slug.startsWith(`${propertyHubPaths[params.locale]}/`)
    ? propertyHubPaths[params.locale]
    : null;

  if (propertyHub) {
    const propertySlug = slug.slice(propertyHub.length + 1);
    const property = await fetchPropertyBySlug(params.locale, propertySlug);
    if (property) return <PropertyDetailPage locale={params.locale} property={property} globalMode={propertyHub === globalPropertyHubPaths[params.locale]} />;
  }

  const programmaticPage = ENABLE_ALL_PROGRAMMATIC_PAGES ? getProgrammaticPageBySlug(params.locale, slug) : undefined;
  if (programmaticPage) {
    const currentPath = `/${params.locale}${programmaticPage.slug}`;
    return (
      <>
        <Header locale={params.locale} currentPath={currentPath} />
        <ProgrammaticPageRenderer page={programmaticPage} />
        <Footer locale={params.locale} />
      </>
    );
  }

  const guide = getHighPotentialGuideBySlug(params.locale, slug);
  if (guide) {
    const currentPath = `/${params.locale}${guide.slug}`;
    return (
      <>
        <Header locale={params.locale} currentPath={currentPath} />
        <HighPotentialGuideRenderer guide={guide} />
        <Footer locale={params.locale} />
      </>
    );
  }

  const page = getPageBySlug(params.locale, slug);
  if (!page) notFound();

  if (page.id === 'private-assessment') {
    return <PrivateAssessmentLocalizedPage locale={params.locale} />;
  }

  if (page.id === 'membership-application') {
    return (
      <>
        <MembershipApplicationLocalizedPage locale={params.locale} />
        <PrivateAccessApplicationNotice locale={params.locale} />
      </>
    );
  }

  if (page.id === 'property') return <PropertyDeskPage page={page} />;
  return <MainPageRenderer page={page} />;
}
