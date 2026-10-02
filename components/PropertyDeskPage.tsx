import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, Globe2, ShieldCheck, WalletCards, Wrench } from 'lucide-react';
import type { MainPageContent } from '@/data/pages/types';
import { getPropertyPath, propertyHubPaths } from '@/data/propertyDesk';
import { fetchPublishedProperties } from '@/lib/propertyStore';
import { getLocalePath, siteUrl } from '@/lib/routes';
import { localeDir } from '@/lib/i18n';
import { faqSchema, organizationSchema, breadcrumbSchema } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { PropertyDeskBrowser } from '@/components/PropertyDeskBrowser';

interface PropertyDeskPageProps {
  page: MainPageContent;
}

function copy(locale: MainPageContent['locale']) {
  if (locale === 'fr') return {
    label: 'PROPERTY & INVESTMENT',
    heroTitle: 'Immobilier en Turquie, présenté comme un investissement.',
    heroText: 'Projets sélectionnés à Istanbul, Bodrum et Antalya. Prix, capital nécessaire aujourd’hui, échéancier, qualité du produit et points de vigilance réunis dans une lecture claire.',
    browse: 'Voir les biens',
    private: 'Recherche privée',
    stat1: 'Prix & apport',
    stat1Text: 'Le prix total et le capital à mobiliser aujourd’hui sont séparés.',
    stat2: 'Paiement promoteur',
    stat2Text: '0 %, échéancier avec surcoût ou remise comptant : uniquement lorsque confirmé.',
    stat3: 'Analyse Bosphoras',
    stat3Text: 'Produit, construction, emplacement, charges et points de vigilance.',
    howTitle: 'Un bureau d’investissement autour de l’immobilier',
    howText: 'Le Property Desk ne se limite pas à montrer des annonces. Nous organisons la sélection, la lecture financière, la coordination du dossier et les professionnels nécessaires autour de l’acquisition.',
    selected: 'Sélection immobilière',
    selectedText: 'Des projets que nous acceptons de présenter à un client Bosphoras, plutôt qu’un catalogue sans filtre.',
    technical: 'Lecture technique',
    technicalText: 'Plans, matériaux, qualité d’exécution, prestations, maintenance et cohérence du prix avec le produit.',
    acquisition: 'Acquisition coordonnée',
    acquisitionText: 'Avocat, partenaire immobilier autorisé, banque, évaluation, fiscalité et relocation selon le dossier.',
    capitalTitle: 'Combien souhaitez-vous engager aujourd’hui ?',
    capitalText: 'Un investisseur raisonne en capital mobilisable, pas seulement en prix affiché. Nous utilisons l’apport initial pour identifier les projets réellement accessibles.',
    capitalOptions: ['€25k–€50k','€50k–€100k','€100k–€250k','€250k+'],
    methodology: 'Méthode d’analyse',
    faqTitle: 'Questions fréquentes',
    finalTitle: 'Définissons le bon investissement avant de choisir le bien.',
    finalText: 'Indiquez votre capital disponible, votre horizon, la ville et l’usage recherché. Bosphoras structure ensuite la recherche et les vérifications.',
  };
  if (locale === 'ru') return {
    label: 'PROPERTY & INVESTMENT',
    heroTitle: 'Недвижимость в Турции как инвестиционный продукт.',
    heroText: 'Отобранные проекты в Стамбуле, Бодруме и Анталье: цена, капитал сегодня, график платежей, качество объекта и риски в одной понятной структуре.',
    browse: 'Смотреть объекты', private: 'Частный поиск',
    stat1:'Цена и первый взнос',stat1Text:'Полная цена отделена от капитала, необходимого сегодня.',
    stat2:'Оплата застройщику',stat2Text:'0%, рассрочка с удорожанием или скидка за оплату наличными — только если подтверждено.',
    stat3:'Анализ Bosphoras',stat3Text:'Продукт, строительство, локация, расходы и точки внимания.',
    howTitle:'Инвестиционный офис вокруг недвижимости',howText:'Property Desk — не просто каталог. Мы координируем подбор, финансовую логику, проверку и нужных специалистов вокруг покупки.',
    selected:'Отбор объектов',selectedText:'Проекты, которые Bosphoras готов представить клиенту, а не неограниченный каталог.',
    technical:'Технический анализ',technicalText:'Планировки, материалы, качество, эксплуатация и соответствие цены продукту.',
    acquisition:'Координация сделки',acquisitionText:'Юрист, лицензированный партнёр, банк, оценка, налоги и relocation по ситуации.',
    capitalTitle:'Какой капитал вы хотите вложить сегодня?',capitalText:'Мы начинаем с доступной ликвидности и показываем проекты, в которые реально можно войти.',
    capitalOptions:['€25k–€50k','€50k–€100k','€100k–€250k','€250k+'],
    methodology:'Метод анализа',faqTitle:'Частые вопросы',
    finalTitle:'Сначала стратегия, потом объект.',finalText:'Укажите капитал, горизонт, город и цель. Bosphoras структурирует поиск и проверку.',
  };
  if (locale === 'ar') return {
    label:'PROPERTY & INVESTMENT',
    heroTitle:'العقار في تركيا كمنتج استثماري واضح.',
    heroText:'مشاريع مختارة في إسطنبول وبودروم وأنطاليا مع السعر ورأس المال المطلوب اليوم وخطة الدفع وجودة المنتج ونقاط الحذر.',
    browse:'عرض العقارات',private:'بحث خاص',
    stat1:'السعر والدفعة الأولى',stat1Text:'نفصل السعر الإجمالي عن رأس المال المطلوب اليوم.',
    stat2:'دفع المطور',stat2Text:'0٪ أو تقسيط بتكلفة إضافية أو خصم نقدي فقط عند تأكيده.',
    stat3:'تحليل Bosphoras',stat3Text:'المنتج والبناء والموقع والرسوم ونقاط الحذر.',
    howTitle:'مكتب استثماري حول العقار',howText:'Property Desk ليس مجرد كتالوج. ننسق الاختيار والقراءة المالية والتحقق والمهنيين اللازمين للشراء.',
    selected:'اختيار العقارات',selectedText:'مشاريع نقبل تقديمها لعميل Bosphoras بدلاً من كتالوج غير محدود.',
    technical:'قراءة فنية',technicalText:'المخططات والمواد وجودة التنفيذ والصيانة ومدى تناسب السعر مع المنتج.',
    acquisition:'تنسيق الشراء',acquisitionText:'محامٍ وشريك عقاري مخول وبنك وتقييم وضرائب وانتقال حسب الملف.',
    capitalTitle:'كم تريد أن تستثمر اليوم؟',capitalText:'نبدأ بالسيولة المتاحة لعرض المشاريع التي يمكن الدخول إليها فعلياً.',
    capitalOptions:['€25k–€50k','€50k–€100k','€100k–€250k','€250k+'],
    methodology:'منهج التحليل',faqTitle:'الأسئلة الشائعة',
    finalTitle:'حدد الاستراتيجية قبل اختيار العقار.',finalText:'أخبرنا برأس المال والمدة والمدينة والهدف، ثم ننظم البحث والتحقق.',
  };
  return {
    label:'PROPERTY & INVESTMENT',
    heroTitle:'Property in Turkey, presented as an investment.',
    heroText:'Selected projects in Istanbul, Bodrum and Antalya with price, capital required today, payment terms, product quality and watchpoints in one clear view.',
    browse:'View properties',private:'Private search',
    stat1:'Price & entry capital',stat1Text:'Total price is separated from the capital required today.',
    stat2:'Developer payment',stat2Text:'0%, priced instalments or cash discount only when confirmed.',
    stat3:'Bosphoras analysis',stat3Text:'Product, construction, location, costs and watchpoints.',
    howTitle:'An investment desk built around property',howText:'The Property Desk is more than a listings page. We coordinate selection, financial reading, due diligence and the professionals required around the acquisition.',
    selected:'Property selection',selectedText:'Projects Bosphoras is prepared to present to a client rather than an unlimited catalogue.',
    technical:'Technical review',technicalText:'Layouts, materials, execution quality, maintenance and price-to-product coherence.',
    acquisition:'Acquisition coordination',acquisitionText:'Lawyer, authorised property partner, bank, valuation, tax and relocation depending on the case.',
    capitalTitle:'How much capital would you like to deploy today?',capitalText:'We start with available liquidity and identify projects that are genuinely accessible.',
    capitalOptions:['€25k–€50k','€50k–€100k','€100k–€250k','€250k+'],
    methodology:'Analysis method',faqTitle:'Frequently asked questions',
    finalTitle:'Define the investment before choosing the property.',finalText:'Tell us your capital, horizon, target city and use. Bosphoras structures the search and verification.',
  };
}

export async function PropertyDeskPage({ page }: PropertyDeskPageProps) {
  const locale=page.locale;
  const c=copy(locale);
  const allProperties=await fetchPublishedProperties();
  const properties=allProperties.filter((property)=>!property.countryCode || property.countryCode==='TR');
  const featured=properties[0];
  const assessmentHref=getLocalePath(locale,page.cta.href);
  const homeHref=getLocalePath(locale,'/');
  const hubHref=getLocalePath(locale,propertyHubPaths[locale]);
  const itemList={
    '@context':'https://schema.org',
    '@type':'ItemList',
    name:page.h1,
    url:siteUrl+hubHref,
    numberOfItems:properties.length,
    itemListElement:properties.map((property,index)=>({
      '@type':'ListItem',
      position:index+1,
      name:property.title[locale],
      url:siteUrl+getLocalePath(locale,getPropertyPath(locale,property)),
    })),
  };
  const breadcrumbName=locale==='fr'?'Immobilier Turquie':locale==='en'?'Property Turkey':locale==='ru'?'Недвижимость в Турции':'عقارات تركيا';
  const homeName=locale==='fr'?'Accueil':locale==='en'?'Home':locale==='ru'?'Главная':'الرئيسية';

  return (
    <main dir={localeDir[locale]} className="min-h-screen bg-[#f2f5f4] text-[#12221f] [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <Header locale={locale} currentPath={hubHref}/>
      <StructuredData data={organizationSchema()}/>
      <StructuredData data={itemList}/>
      <StructuredData data={breadcrumbSchema([{name:homeName,url:siteUrl+homeHref},{name:breadcrumbName,url:siteUrl+hubHref}])}/>
      {page.faqs?<StructuredData data={faqSchema(page.faqs)}/>:null}

      <section className="relative overflow-hidden bg-[#10231e] px-5 pb-14 pt-32 text-white md:px-8 md:pb-20 md:pt-40">
        <div className="absolute inset-0 opacity-40" style={{background:'radial-gradient(circle at 80% 20%, rgba(201,170,122,.28), transparent 32%), radial-gradient(circle at 10% 90%, rgba(70,115,99,.28), transparent 30%)'}}/>
        <div className="relative mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="py-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#c9aa7a]">{c.label}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl">{c.heroTitle}</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#c5d0cc] md:text-lg">{c.heroText}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#selection" className="inline-flex min-h-[50px] items-center gap-2 rounded-lg bg-[#c9aa7a] px-6 text-sm font-semibold text-[#10231e]">{c.browse}<ArrowRight size={16}/></a>
              <Link href={assessmentHref} className="inline-flex min-h-[50px] items-center gap-2 rounded-lg border border-white/20 px-6 text-sm font-semibold text-white">{c.private}<ArrowRight size={16}/></Link>
            </div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-white/10 bg-[#173029] shadow-[0_30px_100px_rgba(0,0,0,.28)] lg:min-h-[520px]">
            {featured?.heroImage||featured?.images?.[0]?<img src={featured.heroImage||featured.images[0]} alt={featured.title[locale]} className="absolute inset-0 h-full w-full object-cover"/>:<div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.2em] text-[#8fa49d]">Bosphoras Property Desk</div>}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#091713] via-[#091713]/80 to-transparent p-6 pt-24 md:p-8">
              {featured?<><p className="text-[0.67rem] font-semibold uppercase tracking-[0.13em] text-[#d5b886]">{featured.cityName} · {featured.district}</p><h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">{featured.title[locale]}</h2><div className="mt-4 flex flex-wrap gap-3 text-sm text-[#d8e0dd]"><span>{featured.priceOnRequest?(locale==='fr'?'Prix sur demande':'Price on request'):new Intl.NumberFormat(locale==='fr'?'fr-FR':'en-GB',{style:'currency',currency:featured.currency,maximumFractionDigits:0}).format(featured.totalPrice||0)}</span>{featured.entryCapital?<span>· {locale==='fr'?'Entrée':'Entry'} {new Intl.NumberFormat(locale==='fr'?'fr-FR':'en-GB',{style:'currency',currency:featured.currency,maximumFractionDigits:0}).format(featured.entryCapital)}</span>:null}</div></>:<><p className="text-[0.67rem] font-semibold uppercase tracking-[0.13em] text-[#d5b886]">CURATED PROPERTY</p><h2 className="mt-2 text-2xl font-semibold">Sélection Bosphoras en préparation</h2></>}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7dfdc] bg-white">
        <div className="mx-auto grid max-w-[1540px] gap-px bg-[#d7dfdc] md:grid-cols-3">
          {[[WalletCards,c.stat1,c.stat1Text],[Building2,c.stat2,c.stat2Text],[ShieldCheck,c.stat3,c.stat3Text]].map(([Icon,title,text])=>{const I=Icon as typeof WalletCards;return <article key={title as string} className="bg-white p-6 md:p-8"><I size={20} className="text-[#8a6a45]"/><h2 className="mt-5 text-lg font-semibold">{title as string}</h2><p className="mt-2 text-sm leading-6 text-[#65756f]">{text as string}</p></article>;})}
        </div>
      </section>

      <PropertyDeskBrowser locale={locale} properties={properties}/>

      <section className="bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8a6a45]">BOSPHORAS METHOD</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">{c.howTitle}</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#65756f]">{c.howText}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[[CheckCircle2,c.selected,c.selectedText],[Wrench,c.technical,c.technicalText],[Globe2,c.acquisition,c.acquisitionText]].map(([Icon,title,text])=>{const I=Icon as typeof CheckCircle2;return <article key={title as string} className="rounded-2xl border border-[#d7dfdc] bg-[#f7f9f8] p-6"><I size={20} className="text-[#2f6d59]"/><h3 className="mt-5 text-lg font-semibold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-[#65756f]">{text as string}</p></article>;})}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7dfdc] bg-[#e8efec] px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div><p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8a6a45]">CAPITAL ACCESS</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em]">{c.capitalTitle}</h2><p className="mt-4 text-sm leading-7 text-[#65756f]">{c.capitalText}</p></div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">{c.capitalOptions.map((amount)=><Link key={amount} href={assessmentHref+'?subject=property-desk&capital='+encodeURIComponent(amount)} className="rounded-xl border border-[#cbd7d2] bg-white p-5 transition hover:border-[#8a6a45]"><WalletCards size={18} className="text-[#8a6a45]"/><strong className="mt-6 block text-xl">{amount}</strong><span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#315d7c]">{c.private}<ArrowRight size={13}/></span></Link>)}</div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1150px]">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8a6a45]">{c.methodology}</p>
          <div className="mt-6 divide-y divide-[#d7dfdc] rounded-2xl border border-[#d7dfdc] bg-white px-6 md:px-8">
            {page.sections.map((section)=><details key={section.heading} className="group py-6"><summary className="cursor-pointer list-none text-xl font-semibold tracking-[-0.02em]">{section.heading}</summary><p className="mt-4 max-w-4xl text-sm leading-7 text-[#65756f]">{section.body}</p>{section.bullets?<ul className="mt-4 grid gap-2 md:grid-cols-2">{section.bullets.map((bullet)=><li key={bullet} className="flex gap-2 text-sm text-[#5d6d68]"><CheckCircle2 size={15} className="mt-1 shrink-0 text-[#2f6d59]"/>{bullet}</li>)}</ul>:null}</details>)}
          </div>
        </div>
      </section>

      {page.faqs?.length?<section className="bg-white px-5 py-16 md:px-8"><div className="mx-auto max-w-[1050px]"><h2 className="text-3xl font-semibold tracking-[-0.035em]">{c.faqTitle}</h2><div className="mt-6 divide-y divide-[#d7dfdc]">{page.faqs.map((faq)=><details key={faq.question} className="py-5"><summary className="cursor-pointer text-lg font-semibold">{faq.question}</summary><p className="mt-3 text-sm leading-7 text-[#65756f]">{faq.answer}</p></details>)}</div></div></section>:null}

      <section className="bg-[#10231e] px-5 py-16 text-white md:px-8"><div className="mx-auto max-w-[950px] text-center"><h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-5xl">{c.finalTitle}</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#c5d0cc]">{c.finalText}</p><Link href={assessmentHref} className="mt-8 inline-flex min-h-[50px] items-center gap-2 rounded-lg bg-[#c9aa7a] px-6 text-sm font-semibold text-[#10231e]">{c.private}<ArrowRight size={16}/></Link></div></section>

      <Footer locale={locale}/>
    </main>
  );
}
