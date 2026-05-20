import { IstanbulTransferPageShell, buildTransferMetadata } from '@/components/IstanbulTransferPageShell';

export const metadata = buildTransferMetadata('ar');

export default function IstanbulAirportTransferArPage() {
  return <IstanbulTransferPageShell locale="ar" />;
}
