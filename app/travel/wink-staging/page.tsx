import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { WinkStagingSearchLab } from '@/components/travel/WinkStagingSearchLab';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Wink Staging · Recherche privée | Bosphoras',
  description: 'Diagnostic privé de connexion à Wink Staging. Aucun inventaire de production.',
  robots: { index: false, follow: false },
};

export default function WinkStagingPreviewPage() {
  if (process.env.VERCEL_ENV !== 'preview' ||
      process.env.VERCEL_GIT_COMMIT_REF !== 'feature/luxury-travel-seo-destinations-20261012') {
    notFound();
  }
  return <WinkStagingSearchLab />;
}
