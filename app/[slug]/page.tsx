import { TransferKeywordLandingPage, buildTransferKeywordMetadata } from '@/components/TransferKeywordLandingPage';
import { findTransferKeyword } from '@/lib/transferKeywordSeo';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const keyword = findTransferKeyword('fr', params.slug);
  if (!keyword) return { title: 'Not found', robots: { index: false, follow: false } };
  return buildTransferKeywordMetadata('fr', params.slug);
}

export default function FrenchTransferKeywordRootPage({ params }: { params: { slug: string } }) {
  const keyword = findTransferKeyword('fr', params.slug);
  if (!keyword) notFound();
  return <TransferKeywordLandingPage locale="fr" slug={params.slug} />;
}
