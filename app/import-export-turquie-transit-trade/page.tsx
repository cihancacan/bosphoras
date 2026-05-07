import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('importExport', 'fr');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="importExport" locale="fr" />; }
