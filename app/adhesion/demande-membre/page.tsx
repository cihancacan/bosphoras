import { MembershipApplicationLocalizedPage } from '@/components/MembershipApplicationLocalizedPage';
import { PrivateAccessApplicationNotice } from '@/components/PrivateAccessApplicationNotice';

export const metadata = {
  title: 'Demande membre | Bosphoras Private Access',
  description: 'Demande membre Bosphoras Private Access.',
};

export default function DemandeMembrePage() {
  return <><MembershipApplicationLocalizedPage locale="fr" /><PrivateAccessApplicationNotice locale="fr" /></>;
}
