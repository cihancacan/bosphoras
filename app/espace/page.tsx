import type { Metadata } from 'next';
import { PartnerWorkspace } from '@/components/PartnerWorkspace';

export const metadata: Metadata = {
  title: 'Espace professionnel | Bosphoras',
  description: 'Espace sécurisé Bosphoras pour partenaires et administration.',
  robots: { index: false, follow: false, noarchive: true, nocache: true },
};

export default function EspacePage() {
  return <PartnerWorkspace />;
}
