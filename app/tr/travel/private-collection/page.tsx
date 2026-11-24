import type { Metadata } from 'next';
import { collectionMetadata } from '@/lib/travel/collectionMetadata';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata:Metadata={
 description:"Otelleri, uçuşları, villaları, dağ evlerini ve özel seyahat seçeneklerini Bosphoras ile keşfedin.",
 ...collectionMetadata('tr')
};
export default function Page(){return <PrivateTravelCollection locale="tr"/>;}
