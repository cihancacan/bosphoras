import type { Metadata } from 'next';
import { CareersPage } from '@/components/careers/CareersPage';
import { careerLanguageNames, type CareerLocale } from '@/lib/careers/copy';

export const metadata:Metadata={
  title:'Carrières et recrutement | Bosphoras Istanbul',
  description:'Rejoignez Bosphoras à Istanbul : relations clients premium, immobilier, conciergerie et coordination. Candidatures en plusieurs langues.',
  alternates:{canonical:'https://www.bosphoras.com/carrieres',
    languages:{'fr':'/carrieres','en':'/en/carrieres','ru':'/ru/carrieres','ar':'/ar/carrieres'}},
};
export default function Page({searchParams}:{searchParams?:{lang?:string}}){
  const candidate=searchParams?.lang;
  const language:CareerLocale=candidate && candidate in careerLanguageNames?candidate as CareerLocale:'fr';
  return <CareersPage headerLocale="fr" language={language}/>;
}
