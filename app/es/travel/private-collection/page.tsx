import type { Metadata } from 'next';
import { collectionMetadata } from '@/lib/travel/collectionMetadata';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata:Metadata={
 description:"Explore hoteles, vuelos, villas, chalets, traslados y actividades. Organice su próximo viaje con Bosphoras.",
 ...collectionMetadata('es')
};
export default function Page(){return <PrivateTravelCollection locale="es"/>;}
