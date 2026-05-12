import { getTurkeyVsMaltaNonDomMetadata, TurkeyVsMaltaNonDomClientPage } from '@/components/seo/TurkeyVsMaltaNonDomClientPage';

export const metadata = getTurkeyVsMaltaNonDomMetadata('ar');

export default function Page() {
  return <TurkeyVsMaltaNonDomClientPage locale="ar" />;
}
