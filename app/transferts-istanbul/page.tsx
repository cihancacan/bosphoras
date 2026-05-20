import { IstanbulTransferPageShell, buildTransferMetadata } from '@/components/IstanbulTransferPageShell';

export const metadata = buildTransferMetadata('fr');

export default function IstanbulTransfersPage() {
  return <IstanbulTransferPageShell locale="fr" />;
}
