import type { Metadata } from 'next';
import { collectionMetadata } from '@/lib/travel/collectionMetadata';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata:Metadata={
 description:"Explore hotéis, voos, villas, chalés, traslados e experiências especiais. Planeje sua próxima viagem com Bosphoras.",
 ...collectionMetadata('pt')
};
export default function Page(){return <PrivateTravelCollection locale="pt"/>;}
