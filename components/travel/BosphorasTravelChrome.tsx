'use client';

import Link from 'next/link';
import Image from 'next/image';
import { rememberTravelLanguage } from '@/lib/travel/languagePreference';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, BookOpenText, ChevronDown, Compass, Globe2, Headphones, Home, Menu, Plane, Search, X } from 'lucide-react';
import { travelLanguageInfo, type TravelLocale, travelHref, travelKeywordTitles } from '@/lib/travel/i18n';

const labels:Record<TravelLocale,{
  search:string;explore:string;private:string;menu:string;close:string;
  languages:string;destinations:string;guides:string;contact:string;support:string;book:string;
  stays:string;flights:string;cars:string;activities:string;about:string;footer:string;
  legal:string;privacy:string;terms:string;partner:string;privateDesc:string;partnerInfo:string;
}>={
 fr:{search:'Rechercher',explore:'Explorer',private:'Privé',menu:'Menu',close:'Fermer',languages:'Langues',destinations:'Destinations',guides:'Guides',contact:'Contact',support:'Aide & contact',book:'Réserver',stays:'Séjours',flights:'Vols',cars:'Voitures',activities:'Activités',about:'Bosphoras',footer:'Navigation du pied de page',legal:'Informations légales',privacy:'Confidentialité',terms:'Conditions d’utilisation',partner:'Réservation auprès de partenaires',privateDesc:'Jets, hélicoptères et yachts',partnerInfo:'Les tarifs, les disponibilités et les paiements sont gérés selon les conditions du fournisseur de réservation.'},
 en:{search:'Search',explore:'Explore',private:'Private',menu:'Menu',close:'Close',languages:'Languages',destinations:'Destinations',guides:'Guides',contact:'Contact',support:'Help & contact',book:'Book',stays:'Stays',flights:'Flights',cars:'Cars',activities:'Activities',about:'Bosphoras',footer:'Footer navigation',legal:'Legal information',privacy:'Privacy',terms:'Terms of use',partner:'Booking with partners',privateDesc:'Jets, helicopters and yachts',partnerInfo:'Prices, availability and payment are subject to the booking provider’s terms.'},
 ru:{search:'Поиск',explore:'Обзор',private:'Частное',menu:'Меню',close:'Закрыть',languages:'Языки',destinations:'Направления',guides:'Гиды',contact:'Контакты',support:'Помощь и контакты',book:'Бронирование',stays:'Проживание',flights:'Авиабилеты',cars:'Авто',activities:'Экскурсии',about:'Bosphoras',footer:'Навигация внизу страницы',legal:'Правовая информация',privacy:'Конфиденциальность',terms:'Условия использования',partner:'Бронирование через партнёров',privateDesc:'Частные самолёты, вертолёты и яхты',partnerInfo:'Цены, наличие и оплата регулируются условиями поставщика услуг бронирования.'},
 ar:{search:'بحث',explore:'اكتشف',private:'خاص',menu:'القائمة',close:'إغلاق',languages:'اللغات',destinations:'الوجهات',guides:'الأدلة',contact:'اتصل بنا',support:'المساعدة والاتصال',book:'احجز',stays:'الإقامات',flights:'الرحلات',cars:'السيارات',activities:'الأنشطة',about:'Bosphoras',footer:'روابط أسفل الصفحة',legal:'معلومات قانونية',privacy:'الخصوصية',terms:'شروط الاستخدام',partner:'الحجز عبر الشركاء',privateDesc:'طائرات خاصة ومروحيات ويخوت',partnerInfo:'تخضع الأسعار والتوافر والدفع لشروط شريك الحجز.'},
 de:{search:'Suchen',explore:'Entdecken',private:'Privat',menu:'Menü',close:'Schließen',languages:'Sprachen',destinations:'Reiseziele',guides:'Reiseführer',contact:'Kontakt',support:'Hilfe & Kontakt',book:'Buchen',stays:'Unterkünfte',flights:'Flüge',cars:'Autos',activities:'Aktivitäten',about:'Bosphoras',footer:'Fußzeilennavigation',legal:'Rechtliches',privacy:'Datenschutz',terms:'Nutzungsbedingungen',partner:'Buchung über Partner',privateDesc:'Privatjets, Hubschrauber und Yachten',partnerInfo:'Preise, Verfügbarkeit und Zahlungen unterliegen den Bedingungen des jeweiligen Buchungspartners.'},
 tr:{search:'Ara',explore:'Keşfet',private:'Özel',menu:'Menü',close:'Kapat',languages:'Diller',destinations:'Destinasyonlar',guides:'Rehberler',contact:'İletişim',support:'Yardım ve iletişim',book:'Rezervasyon',stays:'Konaklama',flights:'Uçuşlar',cars:'Araçlar',activities:'Aktiviteler',about:'Bosphoras',footer:'Alt menü',legal:'Yasal bilgiler',privacy:'Gizlilik',terms:'Kullanım koşulları',partner:'İş ortaklarımızla rezervasyon',privateDesc:'Özel jetler, helikopterler ve yatlar',partnerInfo:'Fiyatlar, müsaitlik ve ödemeler rezervasyon sağlayıcısının koşullarına tabidir.'},
 es:{search:'Buscar',explore:'Explorar',private:'Privado',menu:'Menú',close:'Cerrar',languages:'Idiomas',destinations:'Destinos',guides:'Guías',contact:'Contacto',support:'Ayuda y contacto',book:'Reservar',stays:'Estancias',flights:'Vuelos',cars:'Coches',activities:'Actividades',about:'Bosphoras',footer:'Navegación del pie de página',legal:'Información legal',privacy:'Privacidad',terms:'Condiciones de uso',partner:'Reservas con socios',privateDesc:'Jets, helicópteros y yates privados',partnerInfo:'Los precios, la disponibilidad y los pagos se rigen por las condiciones del proveedor de reservas.'},
 zh:{search:'搜索',explore:'探索',private:'私人',menu:'菜单',close:'关闭',languages:'语言',destinations:'目的地',guides:'指南',contact:'联系',support:'帮助与联系',book:'预订',stays:'住宿',flights:'航班',cars:'租车',activities:'活动',about:'Bosphoras',footer:'页脚导航',legal:'法律信息',privacy:'隐私',terms:'使用条款',partner:'合作伙伴预订',privateDesc:'私人飞机、直升机与游艇',partnerInfo:'价格、房态和付款均以预订服务商的条款为准。'},
 pt:{search:'Buscar',explore:'Explorar',private:'Privado',menu:'Menu',close:'Fechar',languages:'Idiomas',destinations:'Destinos',guides:'Guias',contact:'Contato',support:'Ajuda e contato',book:'Reservar',stays:'Estadias',flights:'Voos',cars:'Carros',activities:'Atividades',about:'Bosphoras',footer:'Navegação do rodapé',legal:'Informações legais',privacy:'Privacidade',terms:'Termos de uso',partner:'Reserva com parceiros',privateDesc:'Jatos, helicópteros e iates particulares',partnerInfo:'Preços, disponibilidade e pagamentos seguem as condições do parceiro de reservas.'},
 it:{search:'Cerca',explore:'Esplora',private:'Privato',menu:'Menu',close:'Chiudi',languages:'Lingue',destinations:'Destinazioni',guides:'Guide',contact:'Contatti',support:'Assistenza e contatti',book:'Prenota',stays:'Soggiorni',flights:'Voli',cars:'Auto',activities:'Attività',about:'Bosphoras',footer:'Navigazione a piè di pagina',legal:'Informazioni legali',privacy:'Privacy',terms:'Condizioni d’uso',partner:'Prenotazione con partner',privateDesc:'Jet, elicotteri e yacht privati',partnerInfo:'Prezzi, disponibilità e pagamenti sono soggetti alle condizioni del fornitore della prenotazione.'}
};

const keyForLanguage=(loc:TravelLocale)=>(loc==='fr'?'FR':loc==='pt'?'PT-BR':loc.toUpperCase());
export function bookingPageHref(locale:TravelLocale,service?:string){
 const url=travelHref(locale,'private-collection');
 return url+(service?'?service='+encodeURIComponent(service):'');
}
function jump(id:string) {
 const target=document.getElementById(id);
 if (target) target.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
}
export function BosphorasTravelHeader({locale,activeService,onPrivate,guideSlug,allowedLanguages}:{
 locale:TravelLocale;activeService:string;onPrivate?:()=>void;
 guideSlug?:string; allowedLanguages?:TravelLocale[];
}){
 const router=useRouter();
 const [menuOpen,setMenuOpen]=useState(false);
 const [languagesOpen,setLanguagesOpen]=useState(false);
 const [menuLanguagesOpen,setMenuLanguagesOpen]=useState(false);
 const label=labels[locale];
 const currentService=activeService==='homes'?'villas':activeService;
 const languageHref=(loc:TravelLocale)=>guideSlug!==undefined?travelHref(loc,guideSlug):bookingPageHref(loc,currentService);
 const exploreHref=travelHref(locale,'destinations');
 const privateClick=()=>{
   setMenuOpen(false);setLanguagesOpen(false);
   if(guideSlug!==undefined){router.push(bookingPageHref(locale,'jets'));return;}
   onPrivate?.();
   jump('travel-private-section');
 };
 const searchClick=()=>{
   setMenuOpen(false);setLanguagesOpen(false);
   if(guideSlug!==undefined){router.push(bookingPageHref(locale));return;}
   jump('private-travel-top');
 };
 useEffect(()=>{
   if(!menuOpen&&!languagesOpen)return;
   const onKey=(event:KeyboardEvent)=>{if(event.key==='Escape'){setMenuOpen(false);setLanguagesOpen(false);}};
   window.addEventListener('keydown',onKey);
   return()=>window.removeEventListener('keydown',onKey);
 },[menuOpen,languagesOpen]);
 const languages=(
   <div className="grid max-h-[60vh] grid-cols-2 gap-1 overflow-y-auto p-2" role="group" aria-label={label.languages}>
    {travelLanguageInfo.filter(item=>!allowedLanguages||allowedLanguages.includes(item.code)).map(item=>(
      <Link href={languageHref(item.code)} key={item.code} lang={item.code} hrefLang={item.hreflang} prefetch={false}
       onClick={()=>{rememberTravelLanguage(item.code);setLanguagesOpen(false);setMenuOpen(false);setMenuLanguagesOpen(false);}}
       className={'flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-[#f5f8fa] '+
         (item.code===locale?'bg-[#fff0f6] font-semibold text-[#922555]':'text-[#26414f]')}>
       <span className="min-w-9 text-[10px] font-semibold tracking-wide text-[#8a9ba5]">{keyForLanguage(item.code)}</span>
       <span>{item.nativeName}</span>
      </Link>
    ))}
   </div>
 );
 return <>
  <header lang={locale} dir={locale==='ar'?'rtl':'ltr'} className="fixed inset-x-0 top-0 z-50 border-b border-[#e5e9ec] bg-white/95 shadow-[0_4px_24px_rgba(20,49,70,0.035)] backdrop-blur-md" aria-label={label.book}>
   <div className="container-editorial flex h-[66px] items-center justify-between gap-3 md:h-[74px]">
    <Link href={bookingPageHref(locale)} className="inline-flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C23674]" aria-label="Bosphoras">
      <span style={{fontFamily:'var(--font-bosphoras-logo),sans-serif'}} className="text-[1.17rem] font-normal uppercase tracking-[0.16em] text-[#172f3f] sm:text-[1.45rem]">BOSPHORAS</span>
      <Image src="/images/brand/bosphoras-mask-rose.svg" width={44} height={22} alt="" aria-hidden="true" className="ms-2 h-[22px] w-[44px] shrink-0 object-contain"/>
    </Link>
    <nav aria-label={label.book} className="hidden items-center gap-7 lg:flex">
      <button type="button" onClick={searchClick} className="min-h-11 text-sm font-semibold text-[#172f3f] hover:text-[#C23674]">{label.search}</button>
      <Link href={exploreHref} className="inline-flex min-h-11 items-center text-sm font-medium text-[#4a6271] hover:text-[#C23674]">{label.destinations}</Link>
      <button type="button" onClick={privateClick} className="min-h-11 text-sm font-medium text-[#4a6271] hover:text-[#C23674]">{label.private}</button>
    </nav>
    <div className="flex items-center gap-2">
     <div className="relative">
      <button type="button" aria-expanded={languagesOpen} aria-label={label.languages} aria-controls="bosphoras-travel-languages"
        onClick={()=>{setLanguagesOpen(v=>!v);setMenuOpen(false);}}
        className="flex min-h-11 items-center gap-1.5 rounded-lg border border-[#e4eaee] px-2.5 text-sm font-medium text-[#26414f] transition-colors hover:border-[#C23674] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C23674] sm:px-3">
       <Globe2 size={17} strokeWidth={1.8} className="text-[#C23674]"/><span>{keyForLanguage(locale)}</span><ChevronDown size={14} className="hidden sm:block"/>
      </button>
      {languagesOpen&&<div id="bosphoras-travel-languages" className={'absolute top-[calc(100%+8px)] z-[60] w-[325px] max-w-[calc(100vw-24px)] overflow-hidden rounded-xl border border-[#e0e8ed] bg-white shadow-[0_18px_45px_rgba(20,49,70,0.13)] '+(locale==='ar'?'left-0':'right-0')}>{languages}</div>}
     </div>
     <a href="mailto:contact@bosphoras.com" aria-label={label.support} title={label.support} className="hidden min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-medium text-[#526c7a] transition-colors hover:bg-[#f5f8fa] lg:flex"><Headphones size={17} className="text-[#C23674]"/>{label.support}</a>
     <button type="button" onClick={()=>{setMenuOpen(v=>!v);setLanguagesOpen(false);setMenuLanguagesOpen(false);}} aria-expanded={menuOpen} aria-controls="bosphoras-travel-mobile-menu" aria-label={menuOpen?label.close:label.menu}
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#203b4c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C23674] lg:hidden">
      {menuOpen?<X size={24}/>:<Menu size={24}/>}
     </button>
    </div>
   </div>
   {menuOpen&&<div id="bosphoras-travel-mobile-menu" className="max-h-[calc(100dvh-130px)] overflow-y-auto border-t border-[#e4ebef] bg-white px-5 pb-5 pt-3 lg:hidden">
    <div className="mx-auto max-w-xl">
     <button type="button" onClick={searchClick} className="flex min-h-12 w-full items-center gap-3 border-b border-[#e8edef] py-2 text-start text-sm font-medium"><Search size={19} className="text-[#C23674]"/>{label.search}</button>
     <Link href={exploreHref} onClick={()=>setMenuOpen(false)} className="flex min-h-12 items-center gap-3 border-b border-[#e8edef] py-2 text-sm font-medium"><Compass size={19} className="text-[#C23674]"/>{label.destinations}</Link>
     <button type="button" onClick={privateClick} className="flex min-h-12 w-full items-center gap-3 border-b border-[#e8edef] py-2 text-start text-sm font-medium"><Plane size={19} className="text-[#C23674]"/>{label.private}</button>
     <a href="mailto:contact@bosphoras.com" className="flex min-h-12 items-center gap-3 py-2 text-sm font-medium"><Headphones size={19} className="text-[#C23674]"/>{label.contact}</a>
     <button type="button" aria-expanded={menuLanguagesOpen} aria-controls="bosphoras-travel-menu-languages"
        onClick={()=>setMenuLanguagesOpen(v=>!v)}
        className="mt-3 flex min-h-12 w-full items-center gap-3 border-t border-[#e8edef] py-2 text-start text-sm font-medium text-[#26414f]">
        <Globe2 size={19} className="text-[#C23674]" aria-hidden="true"/>
        <span>{label.languages}</span>
        <span className="ms-auto rounded-md bg-[#fff0f6] px-2 py-1 text-xs font-semibold text-[#922555]">{keyForLanguage(locale)}</span>
        <ChevronDown size={16} className={menuLanguagesOpen?'rotate-180':''} aria-hidden="true"/>
      </button>
      {menuLanguagesOpen&&<div id="bosphoras-travel-menu-languages" className="mt-1 rounded-lg border border-[#e8edef] bg-[#fafcfd]">{languages}</div>}
    </div>
   </div>}
  </header>
  <nav lang={locale} dir={locale==='ar'?'rtl':'ltr'} aria-label={label.menu}
   className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e0e7ed] bg-white/95 shadow-[0_-4px_30px_rgba(20,49,70,0.06)] backdrop-blur-md lg:hidden"
   style={{paddingBottom:'max(env(safe-area-inset-bottom), 5px)'}}>
   <div className="mx-auto grid max-w-[550px] grid-cols-4 gap-0">
    <button type="button" onClick={searchClick} className="flex min-h-[62px] flex-col items-center justify-center gap-1 px-1 text-[#C23674]" aria-label={label.search}><Search size={22} strokeWidth={1.9}/><span className="text-[11px] font-semibold">{label.search}</span></button>
    <Link href={exploreHref} className="flex min-h-[62px] flex-col items-center justify-center gap-1 px-1 text-[#526878]"><Compass size={22} strokeWidth={1.75}/><span className="text-[11px] font-medium">{label.explore}</span></Link>
    <button type="button" onClick={privateClick} className="flex min-h-[62px] flex-col items-center justify-center gap-1 px-1 text-[#526878]" aria-label={label.private}><Plane size={22} strokeWidth={1.75}/><span className="text-[11px] font-medium">{label.private}</span></button>
    <button type="button" onClick={()=>{setMenuOpen(v=>!v);setLanguagesOpen(false);setMenuLanguagesOpen(false);}} className="flex min-h-[62px] flex-col items-center justify-center gap-1 px-1 text-[#526878]" aria-label={label.menu}><Menu size={22} strokeWidth={1.75}/><span className="text-[11px] font-medium">{label.menu}</span></button>
   </div>
  </nav>
 </>;
}

export function BosphorasTravelFooter({locale}:{locale:TravelLocale}){
 const t=labels[locale];
 const info=travelLanguageInfo.find(item=>item.code===locale)!;
 const home=bookingPageHref(locale);
 const linkClass='flex min-h-10 items-center text-sm text-[#576b77] transition-colors hover:text-[#C23674]';
 const privacy=locale==='fr'?'/confidentialite':locale==='ru'?'/ru/politika-konfidentsialnosti':locale==='ar'?'/ar/privacy-policy':'/en/privacy-policy';
 const legal=locale==='fr'?'/mentions-legales':locale==='ru'?'/ru/pravovaya-informatsiya':locale==='ar'?'/ar/legal-notice':'/en/legal-notice';
 const terms=locale==='fr'?'/cgu':locale==='ru'?'/ru/usloviya-ispolzovaniya':locale==='ar'?'/ar/terms-of-use':'/en/terms-of-use';
 const legalIsEnglish= !['fr','ru','ar'].includes(locale);
 const legalCode=legalIsEnglish?'en':locale;
 const seoLabels:Record<TravelLocale,{collections:string;popular:string}>={
  fr:{collections:'Nos univers',popular:'Destinations populaires'},
  en:{collections:'Our collections',popular:'Popular destinations'},
  ru:{collections:'Наши услуги',popular:'Популярные направления'},
  ar:{collections:'خدماتنا',popular:'وجهات مميزة'},
  de:{collections:'Unsere Reisewelten',popular:'Beliebte Reiseziele'},
  tr:{collections:'Hizmetlerimiz',popular:'Popüler destinasyonlar'},
  es:{collections:'Nuestras colecciones',popular:'Destinos populares'},
  zh:{collections:'旅行服务',popular:'热门目的地'},
  pt:{collections:'Nossos serviços',popular:'Destinos populares'},
  it:{collections:'Le nostre collezioni',popular:'Destinazioni popolari'}
 };
 const serviceCategories=['hotels','villas','chalets','yachts','helicopters','private-jets'] as const;
 const featuredSeoPages=[
   {category:'hotels',slug:'istanbul',city:'Istanbul'},
   {category:'villas',slug:'bodrum',city:'Bodrum'},
   {category:'chalets',slug:'courchevel-1850',city:'Courchevel 1850'},
   {category:'yachts',slug:'istanbul',city:'Istanbul'},
   {category:'helicopters',slug:'saint-tropez',city:'Saint-Tropez'},
   {category:'private-jets',slug:'dubai',city:'Dubai'}
 ] as const;
 return (
  <footer lang={locale} dir={locale==='ar'?'rtl':'ltr'} className="border-t border-[#e2e9ee] bg-[#f5f8fa] text-[#244252] pb-[calc(80px+env(safe-area-inset-bottom))] lg:pb-0" aria-label={t.footer}>
   <div className="container-editorial py-12 md:py-14">
    <div className="grid gap-7 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-10">
     <div>
      <Link href={home} className="inline-flex items-center gap-2" aria-label="Bosphoras"><span style={{fontFamily:'var(--font-bosphoras-logo),sans-serif'}} className="text-xl font-normal uppercase tracking-[0.16em]">BOSPHORAS</span><Image src="/images/brand/bosphoras-mask-rose.svg" width={44} height={22} alt="" aria-hidden="true" className="h-[22px] w-[44px] shrink-0 object-contain"/></Link>
      <p className="mt-4 max-w-[340px] text-sm leading-6 text-[#607684]">{info.slogan}</p>
      <p className="mt-3 max-w-[360px] text-xs leading-6 text-[#768b96]">{t.partnerInfo}</p>
     </div>
     <div className="border-b border-[#e3eaee] pb-4 md:border-0 md:pb-0">
      <h2 className="text-sm font-semibold text-[#203b4d]">{t.book}</h2>
      <div className="mt-2 grid grid-cols-2 gap-x-4 md:block">
       <Link className={linkClass} href={bookingPageHref(locale,'hotels')}>{t.stays}</Link>
       <Link className={linkClass} href={bookingPageHref(locale,'flights')}>{t.flights}</Link>
       <Link className={linkClass} href={bookingPageHref(locale,'cars')}>{t.cars}</Link>
       <Link className={linkClass} href={bookingPageHref(locale,'activities')}>{t.activities}</Link>
      </div>
     </div>
     <div className="border-b border-[#e3eaee] pb-4 md:border-0 md:pb-0">
      <h2 className="text-sm font-semibold text-[#203b4d]">{t.explore}</h2>
      <Link className={'mt-2 '+linkClass} href={travelHref(locale,'destinations')}>{t.destinations}</Link>
      <Link className={linkClass} href={travelHref(locale,'destinations')}>{t.guides}</Link>
      <Link className={linkClass} href={bookingPageHref(locale,'jets')}>{t.private} · {t.privateDesc}</Link>
     </div>
     <div>
      <h2 className="text-sm font-semibold text-[#203b4d]">{t.support}</h2>
      <a className={'mt-2 '+linkClass} href="mailto:contact@bosphoras.com">{t.contact}</a>
      <a className={linkClass} href="mailto:contact@bosphoras.com">contact@bosphoras.com</a>
      <p className="mt-3 text-xs font-medium text-[#657986]">{t.legal}</p>
      <Link className={linkClass} href={privacy} lang={legalCode}>{t.privacy}{legalIsEnglish?' (EN)':''}</Link>
      <Link className={linkClass} href={terms} lang={legalCode}>{t.terms}{legalIsEnglish?' (EN)':''}</Link>
      <Link className={linkClass} href={legal} lang={legalCode}>{t.legal}{legalIsEnglish?' (EN)':''}</Link>
      <Link className={linkClass} href={travelHref(locale,'credits')}>
        {locale==='fr'?'Crédits photos':locale==='ru'?'Авторы фотографий':locale==='ar'?'حقوق الصور':locale==='de'?'Bildnachweise':locale==='tr'?'Fotoğraf kredileri':locale==='es'?'Créditos de fotos':locale==='zh'?'图片来源':locale==='pt'?'Créditos das fotos':locale==='it'?'Crediti fotografici':'Photo credits'}
      </Link>
     </div>
    </div>
     <nav aria-label={seoLabels[locale].collections} className="mt-9 grid gap-7 border-t border-[#e0e8ec] pt-8 md:grid-cols-2">
       <div>
         <h2 className="text-sm font-semibold text-[#203b4d]">{seoLabels[locale].collections}</h2>
         <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3">
           {serviceCategories.map(category=><Link key={category} href={travelHref(locale,category)} className={linkClass}>
             {travelKeywordTitles[category][locale]}
           </Link>)}
         </div>
       </div>
       <div>
         <h2 className="text-sm font-semibold text-[#203b4d]">{seoLabels[locale].popular}</h2>
         <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3">
           {featuredSeoPages.map(({category,slug,city})=><Link key={category+slug} href={travelHref(locale,category+'/'+slug)} className={linkClass}>
             {travelKeywordTitles[category][locale]} · {city}
           </Link>)}
         </div>
       </div>
     </nav>
    <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#e0e8ec] pt-6 text-xs text-[#718591]">
     <span>© {new Date().getFullYear()} BOSPHORAS</span>
     <span>{t.partner}</span>
     <Link className="inline-flex items-center gap-1 text-[#476576] hover:text-[#C23674]" href={home}>{t.search}<ArrowRight size={13}/></Link>
    </div>
   </div>
  </footer>
 );
}


/** Consistent travel-app chrome for destination pages; availability of individual guide
 * translations is determined by the server and passed in allowedLanguages. */
export function BosphorasTravelGuideHeader({locale,slug,allowedLanguages}:{
 locale:TravelLocale;slug:string;allowedLanguages:TravelLocale[];
}){
 return <>
   <BosphorasTravelHeader locale={locale} activeService="hotels" guideSlug={slug} allowedLanguages={allowedLanguages}/>
   <div aria-hidden="true" className="h-[66px] md:h-[74px]"/>
 </>;
}
