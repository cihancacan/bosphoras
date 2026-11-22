import type { Metadata } from 'next';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata:Metadata={
 title:"Bosphoras | Hotel, voli, ville, auto ed esperienze",
 description:"Esplorate hotel, voli, ville, chalet, trasferimenti ed esperienze. Pianificate il prossimo viaggio con Bosphoras.",
 robots:{index:false,follow:true}
};
export default function Page(){return <PrivateTravelCollection locale="it"/>;}
