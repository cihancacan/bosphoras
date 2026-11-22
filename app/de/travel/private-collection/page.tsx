import type { Metadata } from 'next';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata:Metadata={
 title:"Bosphoras | Hotels, Flüge, Villen, Mietwagen und Erlebnisse",
 description:"Hotels, internationale Flüge, Villen, Chalets, Transfers und besondere Erlebnisse entdecken. Bosphoras: Ihre Auswahl für die nächste Reise.",
 robots:{index:false,follow:true}
};
export default function Page(){return <PrivateTravelCollection locale="de"/>;}
