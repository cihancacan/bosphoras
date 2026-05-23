import { IstanbulTransferPageShell, buildTransferMetadata } from '@/components/IstanbulTransferPageShell';

export const metadata = buildTransferMetadata('it');

export default function IstanbulAirportTransferItPage() {
  return <IstanbulTransferPageShell locale="it" />;
}
