import { getTurkeyVsMaltaNonDomMetadata, TurkeyVsMaltaNonDomClientPage } from '@/components/seo/TurkeyVsMaltaNonDomClientPage';

export const metadata = getTurkeyVsMaltaNonDomMetadata('ru');

export default function Page() {
  return <TurkeyVsMaltaNonDomClientPage locale="ru" />;
}
