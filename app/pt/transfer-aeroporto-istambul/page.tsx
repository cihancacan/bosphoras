import { IstanbulTransferPageShell, buildTransferMetadata } from '@/components/IstanbulTransferPageShell';

export const metadata = buildTransferMetadata('pt');

export default function IstanbulAirportTransferPtPage() {
  return <IstanbulTransferPageShell locale="pt" />;
}
