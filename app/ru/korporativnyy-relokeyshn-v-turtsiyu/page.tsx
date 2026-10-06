import { CorporateRelocationServicePage, getCorporateRelocationMetadata } from '@/components/services/CorporateRelocationServicePage';

export const metadata = getCorporateRelocationMetadata('ru');

export default function Page() {
  return <CorporateRelocationServicePage locale="ru" />;
}
