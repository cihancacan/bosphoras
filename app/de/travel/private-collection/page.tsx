import type { Metadata } from 'next';
import { collectionMetadata } from '@/lib/travel/collectionMetadata';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata:Metadata={
 description:"Hotels, internationale Flüge, Villen, Chalets, Transfers und besondere Erlebnisse entdecken. Bosphoras: Ihre Auswahl für die nächste Reise.",
 ...collectionMetadata('de')
};
export default function Page(){return <PrivateTravelCollection locale="de"/>;}
