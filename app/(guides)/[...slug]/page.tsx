import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HighPotentialGuideRenderer } from '@/components/HighPotentialGuideRenderer';
import { getHighPotentialGuideBySlug, highPotentialGuides } from '@/data/highPotentialPages';

interface PageProps { params: { slug: string[] } }
const locale = 'fr' as const;

function resolveSlug(slugSegments: string[]): string {
  return '/' + slugSegments.map((s) => decodeURIComponent(s)).join('/');
}

export function generateStaticParams() {
  return highPotentialGuides
    .filter((guide) => guide.locale === locale)
    .map((guide) => ({ slug: guide.slug.replace(/^\//, '').split('/') }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const guide = getHighPotentialGuideBySlug(locale, resolveSlug(params.slug));
  if (!guide) return {};
  return buildMetadata({ locale, path: guide.slug, title: guide.title, description: guide.metaDescription });
}

export default function FrenchHighPotentialGuidePage({ params }: PageProps) {
  const guide = getHighPotentialGuideBySlug(locale, resolveSlug(params.slug));
  if (!guide) notFound();
  return (
    <>
      <Header locale={locale} currentPath={guide.slug} />
      <HighPotentialGuideRenderer guide={guide} />
      <Footer locale={locale} />
    </>
  );
}
