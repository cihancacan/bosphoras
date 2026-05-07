import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('turkeyVsSingapore', 'en');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="turkeyVsSingapore" locale="en" />; }
