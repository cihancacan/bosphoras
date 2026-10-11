import { TravelExperiencePage, travelPageMetadata } from '@/components/travel/TravelPages';
type Props = { params: { slug?: string[] } };
export function generateMetadata({ params }: Props) { return travelPageMetadata('zh', params.slug || []); }
export default function Page({ params }: Props) { return <TravelExperiencePage locale="zh" parts={params.slug || []} />; }
