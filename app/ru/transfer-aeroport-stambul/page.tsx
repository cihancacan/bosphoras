import { IstanbulTransferPageShell, buildTransferMetadata } from '@/components/IstanbulTransferPageShell';

export const metadata = buildTransferMetadata('ru');

export default function IstanbulAirportTransferRuPage() {
  return <IstanbulTransferPageShell locale="ru" />;
}
