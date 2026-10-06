import { CorporateRelocationServicePage, getCorporateRelocationMetadata } from '@/components/services/CorporateRelocationServicePage';

export const metadata = getCorporateRelocationMetadata('fr');

export default function Page() {
  return <CorporateRelocationServicePage locale="fr" />;
}
