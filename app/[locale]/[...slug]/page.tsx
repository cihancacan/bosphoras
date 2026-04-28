import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { MainPageRenderer } from '@/components/MainPageRenderer';
import { getPageBySlug, allPages } from '@/data/pages';

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
      params.push({
        locale,
        slug: page.slug.replace(/^\//, '').split('/'),
      });
    }
  }
  return params;
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) return {};
  const slug = resolveSlug(params.slug);
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
  const page = getPageBySlug(params.locale, slug);
  if (!page) notFound();
  return <MainPageRenderer page={page} />;
}
