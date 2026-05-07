import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('holding', 'en');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="holding" locale="en" />; }
