import { HotelSearchPreparationPage, hotelSearchMetadata } from '@/components/travel/HotelSearchPreparationPage';

export const dynamic = 'force-dynamic';
export const metadata = hotelSearchMetadata('fr');
export default function Page() { return <HotelSearchPreparationPage locale="fr" />; }
