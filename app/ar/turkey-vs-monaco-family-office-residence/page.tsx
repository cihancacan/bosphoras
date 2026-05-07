import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('turkeyVsMonaco', 'ar');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="turkeyVsMonaco" locale="ar" />; }
