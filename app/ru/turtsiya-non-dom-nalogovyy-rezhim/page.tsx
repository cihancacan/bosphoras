import { getNonDomTurkeyClientMetadata, NonDomTurkeyClientPage } from '@/components/seo/NonDomTurkeyClientPage';

export const metadata = getNonDomTurkeyClientMetadata('ru');

export default function Page() {
  return <NonDomTurkeyClientPage locale="ru" />;
}
