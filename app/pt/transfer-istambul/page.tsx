import { IstanbulTransferPageShell, buildTransferMetadata } from '@/components/IstanbulTransferPageShell';

export const metadata = buildTransferMetadata('pt');

export default function PtTransferPage() {
  return <IstanbulTransferPageShell locale="pt" />;
}
