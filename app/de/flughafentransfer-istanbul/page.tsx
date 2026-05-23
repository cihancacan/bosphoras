import { IstanbulTransferPageShell, buildTransferMetadata } from '@/components/IstanbulTransferPageShell';

export const metadata = buildTransferMetadata('de');

export default function IstanbulAirportTransferDePage() {
  return <IstanbulTransferPageShell locale="de" />;
}
