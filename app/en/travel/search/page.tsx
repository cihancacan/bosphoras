import { HotelSearchPreparationPage, hotelSearchMetadata, type HotelSearchParams } from '@/components/travel/HotelSearchPreparationPage';

export const dynamic = 'force-dynamic';
export const metadata = hotelSearchMetadata('en');
export default function Page({ searchParams }: { searchParams: HotelSearchParams }) { return <HotelSearchPreparationPage locale="en" searchParams={searchParams} />; }
