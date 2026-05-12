import { getTurkeyVsItalyNonDomMetadata, TurkeyVsItalyNonDomClientPage } from '@/components/seo/TurkeyVsItalyNonDomClientPage';

export const metadata = getTurkeyVsItalyNonDomMetadata('ar');

export default function Page() {
  return <TurkeyVsItalyNonDomClientPage locale="ar" />;
}
