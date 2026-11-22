import type { Metadata } from 'next';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata: Metadata = { title:'Travel | Flights, hotels, villas, chalets, jets, yachts & activities | Bosphoras', description:'Commercial flights, exceptional hotels, villas, chalets, private jets, helicopters, yachts and activities. Plan your journey with Bosphoras.', robots:{index:false,follow:true} };
export default function Page() {return <PrivateTravelCollection locale="en"/>;}
