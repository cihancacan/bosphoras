import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('turkeyVsMonaco', 'ru');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="turkeyVsMonaco" locale="ru" />; }
