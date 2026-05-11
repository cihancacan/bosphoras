import { getNonDomTurkeyClientMetadata, NonDomTurkeyClientPage } from '@/components/seo/NonDomTurkeyClientPage';

export const metadata = getNonDomTurkeyClientMetadata('ar');

export default function Page() {
  return <NonDomTurkeyClientPage locale="ar" />;
}
