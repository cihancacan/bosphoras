import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { MainPageRenderer } from '@/components/MainPageRenderer';
import { getPageBySlug, allPages } from '@/data/pages';

interface PageProps {
  params: { slug: string[] };
}

const locale = 'fr' as const;

function resolveSlug(slugSegments: string[]): string {
  return '/' + slugSegments.map((s) => decodeURIComponent(s)).join('/');
}

export function generateStaticParams() {
  return allPages[locale]
    .filter((p) => p.slug !== '/')
    .map((p) => ({
      slug: p.slug.replace(/^\//, '').split('/'),
    }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const slug = resolveSlug(params.slug);
  const page = getPageBySlug(locale, slug);
  if (!page) return {};
  return buildMetadata({
    locale,
    path: page.slug,
    title: page.title,
    description: page.metaDescription,
  });
}

export default function CatchAllPage({ params }: PageProps) {
  const slug = resolveSlug(params.slug);
  const page = getPageBySlug(locale, slug);
  if (!page) notFound();
  return <MainPageRenderer page={page} />;
}
