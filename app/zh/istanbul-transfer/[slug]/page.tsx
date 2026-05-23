import { TransferKeywordLandingPage, buildTransferKeywordMetadata } from '@/components/TransferKeywordLandingPage';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return buildTransferKeywordMetadata('zh', params.slug);
}

export default function Page({ params }: { params: { slug: string } }) {
  return <TransferKeywordLandingPage locale="zh" slug={params.slug} />;
}
