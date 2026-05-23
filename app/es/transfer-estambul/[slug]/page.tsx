import { TransferKeywordLandingPage, buildTransferKeywordMetadata } from '@/components/TransferKeywordLandingPage';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return buildTransferKeywordMetadata('es', params.slug);
}

export default function Page({ params }: { params: { slug: string } }) {
  return <TransferKeywordLandingPage locale="es" slug={params.slug} />;
}
