import type { Metadata } from 'next';
import { BackofficePropertyPreview } from '@/components/BackofficePropertyPreview';

export const metadata: Metadata = {
  title: 'Aperçu immobilier | Bosphoras Partner Desk',
  robots: { index: false, follow: false, noarchive: true, nocache: true },
};

export default function PropertyPreviewPage({
  searchParams,
}: {
  searchParams: { listing?: string; submission?: string };
}) {
  return (
    <BackofficePropertyPreview
      listingId={searchParams.listing || null}
      submissionId={searchParams.submission || null}
    />
  );
}
