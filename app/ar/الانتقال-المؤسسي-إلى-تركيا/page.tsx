import { CorporateRelocationServicePage, getCorporateRelocationMetadata } from '@/components/services/CorporateRelocationServicePage';

export const metadata = getCorporateRelocationMetadata('ar');

export default function Page() {
  return <CorporateRelocationServicePage locale="ar" />;
}
