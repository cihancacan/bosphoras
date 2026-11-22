import type { Metadata } from 'next';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata:Metadata={
 title:"Bosphoras | 酒店、机票、别墅、租车与体验",
 description:"通过 Bosphoras 探索酒店、国际航班、海滨别墅、山间木屋、租车和当地体验。",
 robots:{index:false,follow:true}
};
export default function Page(){return <PrivateTravelCollection locale="zh"/>;}
