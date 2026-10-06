import { CorporateRelocationServicePage, getCorporateRelocationMetadata } from '@/components/services/CorporateRelocationServicePage';

export const metadata = getCorporateRelocationMetadata('en');

export default function Page() {
  return <CorporateRelocationServicePage locale="en" />;
}
