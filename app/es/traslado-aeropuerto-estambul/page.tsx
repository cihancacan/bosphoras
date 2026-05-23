import { IstanbulTransferPageShell, buildTransferMetadata } from '@/components/IstanbulTransferPageShell';

export const metadata = buildTransferMetadata('es');

export default function IstanbulAirportTransferEsPage() {
  return <IstanbulTransferPageShell locale="es" />;
}
