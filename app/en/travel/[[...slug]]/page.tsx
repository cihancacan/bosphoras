import { TravelExperiencePage, travelPageMetadata } from '@/components/travel/TravelPages';
type Props = { params: { slug?: string[] } };
export function generateMetadata({ params }: Props) { return travelPageMetadata('en', params.slug || []); }
export default function Page({ params }: Props) { return <TravelExperiencePage locale="en" parts={params.slug || []} />; }
