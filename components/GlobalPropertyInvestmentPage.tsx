import Link from 'next/link';
import { ArrowRight, BarChart3, Building2, Globe2, ShieldCheck } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { localeDir } from '@/lib/i18n';
import { globalPropertyHubPaths } from '@/data/propertyDesk';
import { fetchPublishedProperties } from '@/lib/propertyStore';
import { getLocalePath, siteUrl } from '@/lib/routes';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { organizationSchema, breadcrumbSchema } from '@/lib/seo';
import { PropertyDeskBrowser } from '@/components/PropertyDeskBrowser';

function copy(locale: Locale) {
  if (locale === 'fr') return {
    label:'BOSPHORAS GLOBAL PROPERTY & INVESTMENT',
    title:'Investir dans l’immobilier international avec un seul bureau.',
    text:'Turquie, Dubaï, Batumi, Almaty, Paris et autres marchés sélectionnés : Bosphoras centralise les opportunités de ses partenaires et les présente avec la même méthode de lecture.',
    browse:'Voir les opportunités',
    search:'Définir ma recherche',
    markets:'Marchés internationaux',
    marketsText:'Les pays et villes apparaissent à mesure que des opportunités validées entrent dans le Property Desk.',
    payment:'Accès & financement promoteur',
    paymentText:'Prix comptant, remise cash, échéancier 0 % ou paiement avec surcoût lorsqu’ils sont réellement proposés.',
    review:'Lecture investissement',
    reviewText:'Capital requis, rendement simulé, technique du produit, points de vigilance et coordination de la transaction.',
    disclaimer:'Bosphoras ne présente pas un marché comme meilleur par principe. Chaque opportunité est analysée selon son emplacement, son produit, son prix, ses conditions et le profil de l’investisseur.',
  };
  if (locale === 'ru') return {
    label:'BOSPHORAS GLOBAL PROPERTY & INVESTMENT',
    title:'Международная недвижимость через один инвестиционный офис.',
    text:'Турция, Дубай, Батуми, Алматы, Париж и другие отобранные рынки — единая структура Bosphoras для партнёрских предложений и анализа.',
    browse:'Смотреть предложения',search:'Описать поиск',
    markets:'Международные рынки',marketsText:'Страны и города появляются по мере добавления проверенных возможностей.',
    payment:'Доступ и планы оплаты',paymentText:'Цена cash, скидка, рассрочка 0% или удорожание — только если это реально предложено.',
    review:'Инвестиционный анализ',reviewText:'Капитал, сценарии доходности, техническая оценка, риски и координация сделки.',
    disclaimer:'Bosphoras не называет один рынок лучшим автоматически. Каждый объект оценивается по локации, продукту, цене, условиям и профилю инвестора.',
  };
  if (locale === 'ar') return {
    label:'BOSPHORAS GLOBAL PROPERTY & INVESTMENT',
    title:'استثمار عقاري دولي من خلال مكتب استثماري واحد.',
    text:'تركيا ودبي وباتومي وألماتي وباريس وأسواق مختارة أخرى ضمن منهج Bosphoras نفسه للعرض والتحليل.',
    browse:'عرض الفرص',search:'تحديد البحث',
    markets:'أسواق دولية',marketsText:'تظهر الدول والمدن مع إضافة فرص موثقة ومعتمدة إلى Property Desk.',
    payment:'الدخول وخطط الدفع',paymentText:'سعر نقدي وخصم وتقسيط 0٪ أو تكلفة إضافية فقط عندما تكون شروطاً فعلية.',
    review:'قراءة استثمارية',reviewText:'رأس المال والسيناريوهات والتحليل الفني ونقاط الحذر وتنسيق الصفقة.',
    disclaimer:'لا يعتبر Bosphoras سوقاً واحداً الأفضل تلقائياً. يتم تقييم كل فرصة حسب الموقع والمنتج والسعر والشروط وملف المستثمر.',
  };
  return {
    label:'BOSPHORAS GLOBAL PROPERTY & INVESTMENT',
    title:'International property investing through one private investment desk.',
    text:'Turkey, Dubai, Batumi, Almaty, Paris and other selected markets brought into one Bosphoras framework for sourcing, presentation and analysis.',
    browse:'View opportunities',search:'Define my search',
    markets:'International markets',marketsText:'Countries and cities appear as validated opportunities enter the Property Desk.',
    payment:'Access & developer payment',paymentText:'Cash price, cash discount, 0% instalments or priced instalments only when genuinely offered.',
    review:'Investment reading',reviewText:'Capital required, yield scenarios, technical product review, watchpoints and transaction coordination.',
    disclaimer:'Bosphoras does not assume one market is universally better. Each opportunity is assessed by location, product, price, terms and investor profile.',
  };
}

export async function GlobalPropertyInvestmentPage({ locale }:{ locale:Locale }) {
  const c=copy(locale);
  const properties=await fetchPublishedProperties();
  const hub=getLocalePath(locale,globalPropertyHubPaths[locale]);
  const assessment=locale==='fr'?'/diagnostic-prive?subject=global-property':locale==='en'?'/en/private-assessment?subject=global-property':locale==='ru'?'/ru/chastnaya-konsultatsiya?subject=global-property':'/ar/تقييم-خاص?subject=global-property';
  const localizedPaths=Object.fromEntries((['fr','en','ru','ar'] as const).map((l)=>[l,getLocalePath(l,globalPropertyHubPaths[l])])) as Record<Locale,string>;
  const countries=Array.from(new Set(properties.map((p)=>p.countryName).filter(Boolean)));

  return (
    <main dir={localeDir[locale]} className="min-h-screen bg-[#f5f3ef] text-[#1a1d22] [font-family:'Avenir_Next','Helvetica_Neue',Arial,sans-serif]">
      <Header locale={locale} currentPath={hub} localizedPaths={localizedPaths}/>
      <StructuredData data={organizationSchema()}/>
      <StructuredData data={breadcrumbSchema([{name:'Bosphoras',url:siteUrl},{name:c.label,url:siteUrl+hub}])}/>

      <section className="relative overflow-hidden bg-[#171a1f] px-5 pb-16 pt-32 text-white md:px-8 md:pb-20 md:pt-40">
        <div className="absolute inset-0 opacity-40" style={{background:'radial-gradient(circle at 85% 15%, rgba(201,170,122,.30), transparent 30%), radial-gradient(circle at 15% 85%, rgba(53,107,89,.35), transparent 35%)'}}/>
        <div className="relative mx-auto max-w-[1540px]">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[#b28b5a]">{c.label}</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-0.055em] md:text-7xl">{c.title}</h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-[#c9c7c2] md:text-lg">{c.text}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#selection" className="inline-flex min-h-[50px] items-center gap-2 rounded-sm bg-[#b28b5a] px-6 text-sm font-semibold text-[#171a1f]">{c.browse}<ArrowRight size={16}/></a>
            <Link href={assessment} className="inline-flex min-h-[50px] items-center gap-2 rounded-sm border border-white/20 px-6 text-sm font-semibold text-white">{c.search}<ArrowRight size={16}/></Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-2">
            {(countries.length?countries:['Turkey','United Arab Emirates','Georgia','Kazakhstan','France','United States']).slice(0,10).map((country)=><span key={country} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-[#c9c7c2]">{country}</span>)}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1540px] gap-px bg-[#d8d4cc] md:grid-cols-3">
          {[[Globe2,c.markets,c.marketsText],[Building2,c.payment,c.paymentText],[BarChart3,c.review,c.reviewText]].map(([Icon,title,text])=>{const I=Icon as typeof Globe2;return <article key={title as string} className="bg-white p-7 md:p-8"><I size={21} className="text-[#9a7447]"/><h2 className="mt-5 text-lg font-semibold">{title as string}</h2><p className="mt-2 text-sm leading-6 text-[#6b7078]">{text as string}</p></article>;})}
        </div>
      </section>

      <PropertyDeskBrowser locale={locale} properties={properties} globalMode/>

      <section className="bg-white px-5 py-14 md:px-8">
        <div className="mx-auto flex max-w-[1200px] items-start gap-4 rounded-sm border border-[#d8d4cc] bg-[#faf9f6] p-6 md:p-8">
          <ShieldCheck size={22} className="mt-1 shrink-0 text-[#8a683f]"/>
          <p className="text-sm leading-7 text-[#6b7078]">{c.disclaimer}</p>
        </div>
      </section>

      <Footer locale={locale}/>
    </main>
  );
}
