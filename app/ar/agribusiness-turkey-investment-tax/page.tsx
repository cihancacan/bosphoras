import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('agribusiness', 'ar');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="agribusiness" locale="ar" />; }
