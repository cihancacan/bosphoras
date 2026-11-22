import type { Metadata } from 'next';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata: Metadata = { title:'السفر | رحلات جوية وفنادق وفلل ويخوت وأنشطة | Bosphoras', description:'رحلات جوية وفنادق وفلل وشاليهات وطائرات خاصة ومروحيات ويخوت وأنشطة. خطط لرحلتك مع بوسفوراس.', robots:{index:false,follow:true} };
export default function Page() {return <PrivateTravelCollection locale="ar"/>;}
