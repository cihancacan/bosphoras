import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProgrammaticPageRenderer } from '@/components/ProgrammaticPageRenderer';
import { getProgrammaticPageBySlug, programmaticPages } from '@/data/programmatic/pages';
import { ENABLE_ALL_PROGRAMMATIC_PAGES } from '@/lib/launchConfig';

interface PageProps {
  params: { locale: string; slug: string[] };
}

const supportedLocales: Locale[] = ['fr', 'en', 'ru', 'ar'];

function isLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale);
}

function resolveSlug(slugSegments: string[]): string {
  return '/' + slugSegments.map((s) => decodeURIComponent(s)).join('/');
}

export function generateStaticParams() {
  if (!ENABLE_ALL_PROGRAMMATIC_PAGES) return [];
  return programmaticPages.map((page) => ({
    locale: page.locale,
    slug: page.slug.replace(/^\//, '').split('/'),
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) return {};
  const page = getProgrammaticPageBySlug(params.locale, resolveSlug(params.slug));
  if (!page) return {};
  return buildMetadata({
    locale: params.locale,
    path: page.slug,
    title: page.title,
    description: page.metaDescription,
    noIndex: !page.isIndexable,
  });
}

export default function ProgrammaticRoutePage({ params }: PageProps) {
  if (!ENABLE_ALL_PROGRAMMATIC_PAGES) notFound();
  if (!isLocale(params.locale)) notFound();
  const page = getProgrammaticPageBySlug(params.locale, resolveSlug(params.slug));
  if (!page) notFound();
  const currentPath = params.locale === 'fr' ? page.slug : `/${params.locale}${page.slug}`;
  return (
    <>
      <Header locale={params.locale} currentPath={currentPath} />
      <ProgrammaticPageRenderer page={page} />
      <Footer locale={params.locale} />
    </>
  );
}
