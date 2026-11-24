import type { Metadata } from 'next';
import { collectionMetadata } from '@/lib/travel/collectionMetadata';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata: Metadata = { description:'Commercial flights, exceptional hotels, villas, chalets, private jets, helicopters, yachts and activities. Plan your journey with Bosphoras.', ...collectionMetadata('en') };
export default function Page() {return <PrivateTravelCollection locale="en"/>;}
