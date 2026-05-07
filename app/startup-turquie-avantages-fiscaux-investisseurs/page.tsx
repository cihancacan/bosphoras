import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('startup', 'fr');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="startup" locale="fr" />; }
