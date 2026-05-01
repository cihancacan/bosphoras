import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HighPotentialGuideRenderer } from '@/components/HighPotentialGuideRenderer';
import { getHighPotentialGuideBySlug, highPotentialGuides } from '@/data/highPotentialPages';

interface PageProps { params: { locale: string; slug: string[] } }
const supportedLocales: Locale[] = ['fr', 'en', 'ru', 'ar'];

function isLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale);
}

function resolveSlug(slugSegments: string[]): string {
  return '/' + slugSegments.map((s) => decodeURIComponent(s)).join('/');
}

export function generateStaticParams() {
  return highPotentialGuides.map((guide) => ({
    locale: guide.locale,
    slug: guide.slug.replace(/^\//, '').split('/'),
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) return {};
  const guide = getHighPotentialGuideBySlug(params.locale, resolveSlug(params.slug));
  if (!guide) return {};
  return buildMetadata({ locale: params.locale, path: guide.slug, title: guide.title, description: guide.metaDescription });
}

export default function HighPotentialGuidePage({ params }: PageProps) {
  if (!isLocale(params.locale)) notFound();
  const guide = getHighPotentialGuideBySlug(params.locale, resolveSlug(params.slug));
  if (!guide) notFound();
  const currentPath = params.locale === 'fr' ? guide.slug : `/${params.locale}${guide.slug}`;
  return (
    <>
      <Header locale={params.locale} currentPath={currentPath} />
      <HighPotentialGuideRenderer guide={guide} />
      <Footer locale={params.locale} />
    </>
  );
}
