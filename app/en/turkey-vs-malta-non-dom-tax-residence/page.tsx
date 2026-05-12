import { getTurkeyVsMaltaNonDomMetadata, TurkeyVsMaltaNonDomClientPage } from '@/components/seo/TurkeyVsMaltaNonDomClientPage';

export const metadata = getTurkeyVsMaltaNonDomMetadata('en');

export default function Page() {
  return <TurkeyVsMaltaNonDomClientPage locale="en" />;
}
