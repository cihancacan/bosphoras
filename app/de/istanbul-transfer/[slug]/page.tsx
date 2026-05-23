import { TransferKeywordLandingPage, buildTransferKeywordMetadata } from '@/components/TransferKeywordLandingPage';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return buildTransferKeywordMetadata('de', params.slug);
}

export default function Page({ params }: { params: { slug: string } }) {
  return <TransferKeywordLandingPage locale="de" slug={params.slug} />;
}
