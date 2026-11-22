import type { Metadata } from 'next';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata:Metadata={
 title:"Bosphoras | Hoteles, vuelos, villas, coches y experiencias",
 description:"Explore hoteles, vuelos, villas, chalets, traslados y actividades. Organice su próximo viaje con Bosphoras.",
 robots:{index:false,follow:true}
};
export default function Page(){return <PrivateTravelCollection locale="es"/>;}
