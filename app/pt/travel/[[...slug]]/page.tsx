import { TravelExperiencePage, travelPageMetadata } from '@/components/travel/TravelPages';
type Props = { params: { slug?: string[] } };
export function generateMetadata({ params }: Props) { return travelPageMetadata('pt', params.slug || []); }
export default function Page({ params }: Props) { return <TravelExperiencePage locale="pt" parts={params.slug || []} />; }
