import type { Metadata } from 'next';
import { collectionMetadata } from '@/lib/travel/collectionMetadata';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata:Metadata={
 description:"Esplorate hotel, voli, ville, chalet, trasferimenti ed esperienze. Pianificate il prossimo viaggio con Bosphoras.",
 ...collectionMetadata('it')
};
export default function Page(){return <PrivateTravelCollection locale="it"/>;}
