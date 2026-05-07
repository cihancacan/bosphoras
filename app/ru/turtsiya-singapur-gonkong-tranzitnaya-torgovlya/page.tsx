import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('turkeyVsSingapore', 'ru');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="turkeyVsSingapore" locale="ru" />; }
