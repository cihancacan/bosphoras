import { IstanbulTransferPageShell, buildTransferMetadata } from '@/components/IstanbulTransferPageShell';

export const metadata = buildTransferMetadata('fr');

export default function IstanbulAirportTransferPage() {
  return <IstanbulTransferPageShell locale="fr" />;
}
