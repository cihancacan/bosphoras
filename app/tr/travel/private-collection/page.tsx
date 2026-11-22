import type { Metadata } from 'next';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata:Metadata={
 title:"Bosphoras | Oteller, uçuşlar, villalar, araçlar ve deneyimler",
 description:"Otelleri, uçuşları, villaları, dağ evlerini ve özel seyahat seçeneklerini Bosphoras ile keşfedin.",
 robots:{index:false,follow:true}
};
export default function Page(){return <PrivateTravelCollection locale="tr"/>;}
