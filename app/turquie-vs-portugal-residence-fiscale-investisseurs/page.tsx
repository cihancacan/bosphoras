import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('turkeyVsPortugal', 'fr');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="turkeyVsPortugal" locale="fr" />; }
