import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { bosphorasProgrammaticSeoPages, findProgrammaticSeoPage, getProgrammaticSeoStaticParams } from '@/data/bosphorasProgrammaticSeoPages';
import { BosphorasProgrammaticSeoPage, getBosphorasProgrammaticSeoMetadata } from '@/components/seo/BosphorasProgrammaticSeoPage';

export function generateStaticParams() {
  return getProgrammaticSeoStaticParams('fr');
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = findProgrammaticSeoPage('fr', params.slug);
  if (!page) return {};
  return getBosphorasProgrammaticSeoMetadata(page, 'fr');
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = findProgrammaticSeoPage('fr', params.slug);
  if (!page) notFound();
  return <BosphorasProgrammaticSeoPage page={page} locale="fr" />;
}
