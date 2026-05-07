import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('turkeyVsPortugal', 'en');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="turkeyVsPortugal" locale="en" />; }
