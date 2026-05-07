import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('turkeyVsSingapore', 'ar');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="turkeyVsSingapore" locale="ar" />; }
