import { getTurkeyVsItalyNonDomMetadata, TurkeyVsItalyNonDomClientPage } from '@/components/seo/TurkeyVsItalyNonDomClientPage';

export const metadata = getTurkeyVsItalyNonDomMetadata('ru');

export default function Page() {
  return <TurkeyVsItalyNonDomClientPage locale="ru" />;
}
