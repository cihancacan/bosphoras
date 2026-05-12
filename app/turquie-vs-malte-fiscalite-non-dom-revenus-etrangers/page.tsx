import { getTurkeyVsMaltaNonDomMetadata, TurkeyVsMaltaNonDomClientPage } from '@/components/seo/TurkeyVsMaltaNonDomClientPage';

export const metadata = getTurkeyVsMaltaNonDomMetadata('fr');

export default function Page() {
  return <TurkeyVsMaltaNonDomClientPage locale="fr" />;
}
