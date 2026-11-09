import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CareersContent } from './CareersContent';
import { careerLanguageNames, type CareerLocale } from '@/lib/careers/copy';
import type { Locale } from '@/lib/i18n';

export function CareersPage({ headerLocale, language }: { headerLocale: Locale; language: CareerLocale }) {
  const selected:CareerLocale = language in careerLanguageNames ? language : headerLocale;
  return <>
    <Header locale={headerLocale} currentPath={headerLocale==='fr'?'/carrieres':'/'+headerLocale+'/carrieres'}/>
    <CareersContent initialLanguage={selected} />
    <Footer locale={headerLocale}/>
  </>;
}
