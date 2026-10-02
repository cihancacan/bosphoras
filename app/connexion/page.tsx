import type { Metadata } from 'next';
import { PortalLogin } from '@/components/PortalLogin';

export const metadata: Metadata = {
  title: 'Connexion partenaire | Bosphoras',
  description: 'Espace sécurisé Bosphoras pour partenaires et administrateurs.',
  robots: { index: false, follow: false, noarchive: true, nocache: true },
};

export default function ConnexionPage() {
  return <PortalLogin />;
}
