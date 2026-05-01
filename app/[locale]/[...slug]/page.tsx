import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { MainPageRenderer } from '@/components/MainPageRenderer';
import { HighPotentialGuideRenderer } from '@/components/HighPotentialGuideRenderer';
import { ProgrammaticPageRenderer } from '@/components/ProgrammaticPageRenderer';
import { getPageBySlug, allPages } from '@/data/pages';
import { getHighPotentialGuideBySlug, highPotentialGuides } from '@/data/highPotentialPages';
import { getProgrammaticPageBySlug, getProgrammaticPagesForLocale } from '@/data/programmatic/pages';
import { ENABLE_ALL_PROGRAMMATIC_PAGES } from '@/lib/launchConfig';
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
  }
  return params;
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) return {};
  const slug = resolveSlug(params.slug);

  const programmaticPage = getProgrammaticPageBySlug(params.locale, slug);
  if (programmaticPage) {
    return buildMetadata({
      locale: params.locale,
      path: programmaticPage.slug,
      title: programmaticPage.title,
      description: programmaticPage.metaDescription,
      noIndex: !programmaticPage.isIndexable,
    });
  }

  const guide = getHighPotentialGuideBySlug(params.locale, slug);
  if (guide) {
    return buildMetadata({ locale: params.locale, path: guide.slug, title: guide.title, description: guide.metaDescription });
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

export default function LocaleCatchAllPage({ params }: PageProps) {
  if (!isLocale(params.locale)) notFound();
  const slug = resolveSlug(params.slug);

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
  return <MainPageRenderer page={page} />;
}
