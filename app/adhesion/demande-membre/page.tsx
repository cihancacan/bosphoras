import { MembershipApplicationLocalizedPage } from '@/components/MembershipApplicationLocalizedPage';

export const metadata = {
  title: 'Demande d’adhésion | Bosphoras Private Access',
  description:
    'Demande d’adhésion confidentielle à Bosphoras Private Access : accès privé, coordination prioritaire, conciergerie de luxe et accompagnement en Turquie.',
};

export default function DemandeMembrePage() {
  return <MembershipApplicationLocalizedPage locale="fr" />;
}
