import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, Clock, CreditCard, MapPin, Plane, ShieldCheck } from 'lucide-react';
import { StructuredData } from '@/components/StructuredData';
import { TransferOnlyHeader } from '@/components/TransferOnlyHeader';
import { TransferOnlyFooter } from '@/components/TransferOnlyFooter';
import { breadcrumbSchema, faqSchema, organizationSchema, serviceSchema, websiteSchema } from '@/lib/seo';
import { siteUrl } from '@/lib/routes';
import { findTransferKeyword, getTransferKeywordHref, transferKeywordClusters, transferKeywordCopy, transferKeywordBases, transferMainPaths, type TransferSeoLocale } from '@/lib/transferKeywordSeo';

function titleFor(term: string, locale: TransferSeoLocale) {
  const suffix: Record<TransferSeoLocale, string> = {
    fr: 'à Istanbul | Réservation chauffeur privé',
    en: 'in Istanbul | Private transfer booking',
    ru: 'в Стамбуле | Бронирование трансфера',
    ar: 'في إسطنبول | حجز نقل خاص',
    zh: '伊斯坦布尔 | 私人接送预订',
    de: 'in Istanbul | Privater Transfer buchen',
    es: 'en Estambul | Reserva traslado privado',
    it: 'a Istanbul | Prenota transfer privato',
    pt: 'em Istambul | Reserva transfer privado',
  };
  return `${term} ${suffix[locale]}`;
}

function descriptionFor(term: string, locale: TransferSeoLocale) {
  const text: Record<TransferSeoLocale, string> = {
    fr: `Réservez ${term} avec Bosphoras Mobility : chauffeur privé, suivi de vol, véhicules Mercedes, paiement sécurisé et confirmation immédiate à Istanbul.`,
    en: `Book ${term} with Bosphoras Mobility: private chauffeur, flight tracking, Mercedes vehicles, secure card payment and instant confirmation in Istanbul.`,
    ru: `Забронируйте ${term} с Bosphoras Mobility: личный водитель, отслеживание рейса, автомобили Mercedes, безопасная оплата картой и подтверждение.`,
    ar: `احجز ${term} مع Bosphoras Mobility: سائق خاص، تتبع الرحلة، سيارات Mercedes، دفع آمن وتأكيد فوري في إسطنبول.`,
    zh: `通过 Bosphoras Mobility 预订 ${term}：私人司机、航班跟踪、Mercedes 车辆、安全刷卡支付和即时确认。`,
    de: `Buchen Sie ${term} mit Bosphoras Mobility: privater Chauffeur, Flugverfolgung, Mercedes-Fahrzeuge, sichere Kartenzahlung und sofortige Bestätigung in Istanbul.`,
    es: `Reserve ${term} con Bosphoras Mobility: chófer privado, seguimiento de vuelo, vehículos Mercedes, pago seguro y confirmación inmediata en Estambul.`,
    it: `Prenota ${term} con Bosphoras Mobility: autista privato, monitoraggio volo, veicoli Mercedes, pagamento sicuro e conferma immediata a Istanbul.`,
    pt: `Reserve ${term} com Bosphoras Mobility: motorista privado, acompanhamento do voo, veículos Mercedes, pagamento seguro e confirmação imediata em Istambul.`,
  };
  return text[locale];
}

function paragraphs(term: string, groupTitle: string, locale: TransferSeoLocale) {
  const main = transferMainPaths[locale];
  const copy: Record<TransferSeoLocale, string[]> = {
    fr: [`${term} est une recherche précise pour les voyageurs qui veulent une prise en charge fiable à Istanbul, sans attente inutile et avec un prix clair avant paiement.`, `Bosphoras Mobility couvre Istanbul Airport IST, Sabiha Gökçen SAW, les hôtels, les quartiers d’affaires, les adresses du Bosphore, les marinas et les résidences privées.`, `Le tunnel de réservation vous permet de saisir votre trajet, choisir un véhicule disponible, confirmer le prix et réserver en ligne.`],
    en: [`${term} is a precise search for travellers who want reliable pickup in Istanbul, no unnecessary waiting and a clear price before payment.`, `Bosphoras Mobility covers Istanbul Airport IST, Sabiha Gökçen SAW, hotels, business districts, Bosphorus addresses, marinas and private residences.`, `The booking flow lets you enter your route, select an available vehicle, confirm the price and book online.`],
    ru: [`${term} — точный запрос для путешественников, которым нужна надежная встреча в Стамбуле, без лишнего ожидания и с понятной ценой до оплаты.`, `Bosphoras Mobility покрывает Istanbul Airport IST, Sabiha Gökçen SAW, отели, деловые районы, адреса у Босфора, марины и частные резиденции.`, `Форма бронирования позволяет указать маршрут, выбрать доступный автомобиль, подтвердить цену и оплатить онлайн.`],
    ar: [`${term} هو بحث دقيق للمسافرين الذين يريدون استقبالاً موثوقاً في إسطنبول، دون انتظار غير ضروري وبسعر واضح قبل الدفع.`, `تغطي Bosphoras Mobility مطار إسطنبول IST ومطار صبيحة SAW والفنادق ومناطق الأعمال وعناوين البوسفور والمارينا والمساكن الخاصة.`, `يسمح مسار الحجز بإدخال الرحلة واختيار السيارة المتاحة وتأكيد السعر والحجز عبر الإنترنت.`],
    zh: [`${term} 适合希望在伊斯坦布尔获得可靠接送、减少等待并在付款前确认清晰价格的旅客。`, `Bosphoras Mobility 覆盖 Istanbul Airport IST、Sabiha Gökçen SAW、酒店、商务区、博斯普鲁斯地址、码头和私人住宅。`, `预订流程可输入路线、选择可用车辆、确认价格并在线预订。`],
    de: [`${term} ist eine präzise Suche für Reisende, die eine zuverlässige Abholung in Istanbul, keine unnötige Wartezeit und einen klaren Preis vor der Zahlung wünschen.`, `Bosphoras Mobility deckt Istanbul Airport IST, Sabiha Gökçen SAW, Hotels, Geschäftsviertel, Bosporus-Adressen, Marinas und private Residenzen ab.`, `Der Buchungsprozess ermöglicht Route eingeben, verfügbares Fahrzeug wählen, Preis bestätigen und online buchen.`],
    es: [`${term} es una búsqueda precisa para viajeros que quieren una recogida fiable en Estambul, sin esperas innecesarias y con precio claro antes del pago.`, `Bosphoras Mobility cubre Istanbul Airport IST, Sabiha Gökçen SAW, hoteles, zonas de negocios, direcciones del Bósforo, marinas y residencias privadas.`, `El flujo de reserva permite introducir la ruta, elegir un vehículo disponible, confirmar el precio y reservar online.`],
    it: [`${term} è una ricerca precisa per viaggiatori che desiderano un’accoglienza affidabile a Istanbul, senza attese inutili e con prezzo chiaro prima del pagamento.`, `Bosphoras Mobility copre Istanbul Airport IST, Sabiha Gökçen SAW, hotel, aree business, indirizzi sul Bosforo, marine e residenze private.`, `Il flusso di prenotazione permette di inserire il percorso, scegliere un veicolo disponibile, confermare il prezzo e prenotare online.`],
    pt: [`${term} é uma pesquisa precisa para viajantes que querem uma recolha fiável em Istambul, sem espera desnecessária e com preço claro antes do pagamento.`, `A Bosphoras Mobility cobre Istanbul Airport IST, Sabiha Gökçen SAW, hotéis, zonas de negócios, endereços no Bósforo, marinas e residências privadas.`, `O fluxo de reserva permite inserir a rota, escolher um veículo disponível, confirmar o preço e reservar online.`],
  };
  return copy[locale].map((p) => p.replace(main, main).replace(groupTitle, groupTitle));
}

export function buildTransferKeywordMetadata(locale: TransferSeoLocale, slug: string) {
  const keyword = findTransferKeyword(locale, slug);
  if (!keyword) return { title: 'Istanbul transfer', robots: { index: false, follow: true } };
  const canonical = `${siteUrl}${getTransferKeywordHref(locale, keyword.term)}`;
  return {
    title: titleFor(keyword.term, locale),
    description: descriptionFor(keyword.term, locale),
    metadataBase: new URL(siteUrl),
    alternates: { canonical },
    openGraph: { title: titleFor(keyword.term, locale), description: descriptionFor(keyword.term, locale), url: canonical, siteName: 'Bosphoras Mobility', type: 'website' },
    twitter: { card: 'summary_large_image', title: titleFor(keyword.term, locale), description: descriptionFor(keyword.term, locale) },
    robots: { index: true, follow: true },
  };
}

export function TransferKeywordLandingPage({ locale, slug }: { locale: TransferSeoLocale; slug: string }) {
  const keyword = findTransferKeyword(locale, slug);
  if (!keyword) notFound();
  const text = transferKeywordCopy[locale];
  const mainBookingHref = `${transferMainPaths[locale]}#reservation`;
  const canonical = `${siteUrl}${getTransferKeywordHref(locale, keyword.term)}`;
  const faq = [
    { question: keyword.term, answer: descriptionFor(keyword.term, locale) },
    { question: text.cta, answer: paragraphs(keyword.term, keyword.groupTitle, locale)[2] },
  ];

  return (
    <>
      <StructuredData data={[organizationSchema(), websiteSchema(), serviceSchema({ name: keyword.term, description: descriptionFor(keyword.term, locale), url: canonical }), faqSchema(faq), breadcrumbSchema([{ name: 'Bosphoras Mobility', url: `${siteUrl}${transferMainPaths[locale]}` }, { name: keyword.term, url: canonical }])]} />
      <TransferOnlyHeader locale={locale} />
      <main className="bg-white pt-28 text-slate-950" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <section className="px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">{text.eyebrow}</p>
              <h1 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">{keyword.term}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{descriptionFor(keyword.term, locale)}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={mainBookingHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)]">{text.cta}<ArrowRight size={16} /></Link>
                <Link href={transferMainPaths[locale]} className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-slate-700">{text.reserve}</Link>
              </div>
            </div>
            <aside className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl font-black tracking-[-0.04em]">{text.why}</h2>
              <div className="mt-6 grid gap-3">
                {[['Flight tracking', Plane], ['Secure card payment', CreditCard], ['2h minimum booking', Clock], ['Official passenger details after payment', ShieldCheck], ['IST / SAW / hotels / Bosphorus', MapPin]].map(([label, Icon]) => <div key={String(label)} className="flex items-center gap-3 rounded-2xl bg-white p-4 text-sm font-bold text-slate-700"><Icon className="h-5 w-5 text-slate-950" />{String(label)}</div>)}
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-5 md:grid-cols-3">
              {paragraphs(keyword.term, keyword.groupTitle, locale).map((item) => <article key={item} className="rounded-3xl border border-slate-200 bg-white p-6"><CheckCircle2 className="mb-4 h-5 w-5" /><p className="leading-8 text-slate-600">{item}</p></article>)}
            </div>
          </div>
        </section>

        <section className="px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1180px]">
            <h2 className="text-3xl font-black tracking-[-0.04em] md:text-5xl">{text.faqTitle}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faq.map((item) => <article key={item.question} className="rounded-3xl border border-slate-200 p-6"><h3 className="text-xl font-black tracking-[-0.02em]">{item.question}</h3><p className="mt-4 leading-8 text-slate-600">{item.answer}</p></article>)}
            </div>
            <div className="mt-10 rounded-[2rem] bg-slate-950 p-6 text-white md:p-10">
              <h2 className="text-3xl font-black tracking-[-0.04em]">{text.bookNow}</h2>
              <p className="mt-4 max-w-2xl text-slate-300">{descriptionFor(keyword.term, locale)}</p>
              <Link href={mainBookingHref} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-slate-950">{text.cta}<ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1180px]">
            <h2 className="text-2xl font-black tracking-[-0.03em]">Related searches</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {keyword.related.map((term) => <Link key={term} href={getTransferKeywordHref(locale, term)} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 hover:border-slate-950 hover:text-slate-950">{term}</Link>)}
            </div>
          </div>
        </section>
      </main>
      <TransferOnlyFooter locale={locale} />
    </>
  );
}
