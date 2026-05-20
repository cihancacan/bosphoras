import { IstanbulTransferPageShell, buildTransferMetadata } from '@/components/IstanbulTransferPageShell';

export const metadata = buildTransferMetadata('en');

export default function IstanbulAirportTransferPage() {
  return <IstanbulTransferPageShell locale="en" />;
}
