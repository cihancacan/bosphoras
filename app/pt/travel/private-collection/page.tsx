import type { Metadata } from 'next';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata:Metadata={
 title:"Bosphoras | Hotéis, voos, villas, carros e experiências",
 description:"Explore hotéis, voos, villas, chalés, traslados e experiências especiais. Planeje sua próxima viagem com Bosphoras.",
 robots:{index:false,follow:true}
};
export default function Page(){return <PrivateTravelCollection locale="pt"/>;}
