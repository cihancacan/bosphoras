import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('importExport', 'en');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="importExport" locale="en" />; }
