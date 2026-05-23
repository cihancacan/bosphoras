import { IstanbulTransferPageShell, buildTransferMetadata } from '@/components/IstanbulTransferPageShell';

export const metadata = buildTransferMetadata('zh');

export default function IstanbulAirportTransferZhPage() {
  return <IstanbulTransferPageShell locale="zh" />;
}
