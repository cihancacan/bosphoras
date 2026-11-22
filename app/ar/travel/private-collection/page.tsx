import type { Metadata } from 'next';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata: Metadata = { title:'رحلات خاصة | فلل وشاليهات وطائرات ويخوت | Bosphoras', description:'فنادق فاخرة وفلل وشاليهات وطائرات خاصة ومروحيات ويخوت. خطط لرحلتك مع بوسفوراس.', robots:{index:false,follow:true} };
export default function Page() {return <PrivateTravelCollection locale="ar"/>;}
