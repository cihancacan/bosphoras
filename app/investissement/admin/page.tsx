import type {Metadata} from 'next';
import {InvestmentAdminDashboard} from '@/components/InvestmentAdminDashboard';
export const metadata:Metadata={title:'Bosphoras Investment | CRM & Administration',robots:{index:false,follow:false,noarchive:true,nocache:true}};
export default function Page(){return <InvestmentAdminDashboard/>;}
