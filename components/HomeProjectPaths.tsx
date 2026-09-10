import Link from 'next/link';
import { ArrowRight, Building2, Home, Compass, Scale } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { conversionCopy, projectIds } from '@/data/conversion';
import { getSlugForPage } from '@/data/pages/types';
import { getLocalePath } from '@/lib/routes';
import { annualAdmissionLine, monthlyRetainerLine, privateDeskStartingText } from '@/lib/pricingText';
const icons = [Home, Building2, Scale, Compass];
const button = 'inline-flex min-h-[48px] items-center justify-center gap-3 bg-[#d2a863] px-6 py-4 text-sm font-semibold text-[#101827] transition hover:bg-[#e0bc78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8a6728]';
export function HomeProjectPaths({ locale }: { locale: Locale }) {
  const c = conversionCopy[locale];
  const href = (id: Parameters<typeof getSlugForPage>[0]) => getLocalePath(locale, getSlugForPage(id, locale));
  const assessment = href('private-assessment');
  return <>
    <section id="votre-projet" className="scroll-mt-24 px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm tracking-wide text-[#786032]">Istanbul · Bodrum · Antalya</p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl md:text-5xl">{c.choose}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{c.projects.map((project, i) => { const Icon = icons[i]; return <Link key={projectIds[i]} href={assessment + '?project=' + projectIds[i]} data-cta-id={'project_' + projectIds[i]} className="group flex flex-col border border-[#d8c7a1] bg-[#fffaf0] p-6 transition hover:border-[#8a6728] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8a6728]">
          <Icon aria-hidden="true" className="h-6 w-6 text-[#8a6728]" /><h3 className="mt-6 font-serif text-2xl">{project[0]}</h3><p className="mb-6 mt-3 text-base leading-7 text-[#46505f]">{project[1]}</p><span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#795a22]">{c.projectCta}<ArrowRight aria-hidden="true" size={16} className="rtl:rotate-180" /></span>
        </Link>; })}</div>
        <Link href={href('services')} className="mt-6 inline-flex min-h-[44px] items-center text-sm font-semibold underline underline-offset-4">{c.allServices}</Link>
      </div>
    </section>
    <section className="bg-white px-5 py-14 md:px-8 md:py-20"><div className="mx-auto max-w-6xl"><h2 className="max-w-3xl font-serif text-3xl md:text-5xl">{c.methodTitle}</h2><ol className="mt-10 grid gap-8 md:grid-cols-3">{c.steps.map((step, i) => <li key={step[0]} className="border-t border-[#d8c7a1] pt-5"><span className="text-sm font-semibold text-[#8a6728]">0{i + 1}</span><h3 className="mt-4 font-serif text-2xl">{step[0]}</h3><p className="mt-3 text-base leading-7 text-[#46505f]">{step[1]}</p></li>)}</ol><Link href={assessment} data-cta-id="home_method" className={button + ' mt-8'}>{c.cta}<ArrowRight aria-hidden="true" size={16} className="rtl:rotate-180" /></Link></div></section>
    <section className="px-5 py-14 md:px-8 md:py-20"><div className="mx-auto max-w-6xl"><h2 className="font-serif text-3xl md:text-5xl">{c.offersTitle}</h2><div className="mt-8 grid gap-5 md:grid-cols-2">
      <article className="flex flex-col border border-[#d8c7a1] bg-[#fffaf0] p-7 md:p-9"><h3 className="font-serif text-3xl">Private Desk</h3><p className="mt-4 text-base leading-7 text-[#46505f]">{c.deskText}</p><p className="mb-7 mt-6 text-xl font-semibold">{privateDeskStartingText(locale)}</p><Link href={assessment} data-cta-id="home_private_desk" className={button + ' mt-auto self-start'}>{c.cta}</Link></article>
      <article className="flex flex-col border border-[#d8c7a1] bg-[#121826] p-7 text-[#fffaf0] md:p-9"><h3 className="font-serif text-3xl">Private Access</h3><p className="mt-4 text-base leading-7 text-[#e0d8c9]">{c.accessText}</p><p className="mt-6 font-semibold">{annualAdmissionLine(locale)}</p><p className="mb-7 mt-2 font-semibold">{monthlyRetainerLine(locale)}</p><Link href={href('membership-application')} className="mt-auto inline-flex min-h-[48px] items-center self-start text-sm font-semibold text-[#e0bc78] underline underline-offset-4">{c.membership}</Link></article>
    </div><p className="mt-5 max-w-4xl text-sm leading-6 text-[#46505f]">{c.fees}</p></div></section>
    <section className="bg-white px-5 py-14 md:px-8 md:py-20"><div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2"><h2 className="font-serif text-3xl md:text-4xl">{c.trustTitle}</h2><div><p className="text-base leading-8 text-[#46505f]">{c.trustText}</p><Link href={href('about')} className="mt-5 inline-flex min-h-[44px] items-center text-sm font-semibold underline underline-offset-4">{c.about}</Link></div></div></section>
  </>;
}
export function HomeFinalContact({ locale }: { locale: Locale }) {
 const c = conversionCopy[locale];
 const href = getLocalePath(locale, getSlugForPage('private-assessment', locale));
 return <section className="bg-[#121826] px-5 py-14 text-[#fffaf0] md:px-8 md:py-20"><div className="mx-auto max-w-4xl text-center"><h2 className="font-serif text-3xl md:text-5xl">{c.formTitle}</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#e0d8c9]">{c.formIntro}</p><Link href={href} data-cta-id="home_final" className={button + ' mt-7'}>{c.cta}<ArrowRight aria-hidden="true" size={16} className="rtl:rotate-180" /></Link><p className="mt-4 text-sm leading-6 text-[#e0d8c9]">{c.reassurance}</p></div></section>;
}
