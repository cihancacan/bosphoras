import {TaxRelocationPage,getTaxRelocationMetadata} from '@/components/services/TaxRelocationPage';
export const metadata=getTaxRelocationMetadata('ru');
export default function Page(){return <TaxRelocationPage locale="ru"/>;}
