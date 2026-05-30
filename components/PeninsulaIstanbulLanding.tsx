import Link from 'next/link';
import { ArrowRight, Dumbbell, Lock, MapPin, ShieldCheck, Sparkles, Utensils, Waves } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { organizationSchema, serviceSchema } from '@/lib/seo';

const img = {
  pool: '/images/Peninsula.pool.andwiew.jpg',
  historic: '/images/peninsula.pool.and.saint-sophie.jpg',
  interior: '/images/peninsula.interior.pool.jpg',
  hammam: '/images/peninsula.hammam.jpg',
  fitness: '/images/peninsula.fitness.jpg',
  lobby: '/images/peninsula.lobby.jpg',
  spa: '/images/waiting.area.spa.jpg',
  abelia: '/images/Abelia.Pool.Bar.jpg',
  logo: '/images/logo.Peninsula.Istanbul.Grey021.svg',
};

export const peninsulaCopy: Record<Locale, any> = {
  fr: {
    metaTitle: 'Accès Premium Peninsula Istanbul | Bosphoras',
    metaDescription: 'Accès premium au Peninsula Istanbul pour les membres Bosphoras Premium : spa, wellness, fitness, hospitality et coordination privée à Istanbul.',
    eyebrow: 'Bosphoras Premium Members',
    title: 'Accès premium au Peninsula Istanbul',
    intro: 'Une adresse choisie pour nos membres : là où le Bosphore rencontre la Corne d’Or, face à la péninsule historique.',
    join: 'Demander une adhésion', back: 'Retour Bosphoras', why: 'Pourquoi cette adresse',
    memory: 'La meilleure vue d’Istanbul n’est pas seulement une vue. C’est une mémoire.',
    whyText: 'Depuis Karaköy, le regard traverse Galata, Byzance, Constantinople, la conquête ottomane et l’Istanbul contemporaine.',
    choiceLabel: 'Le choix Bosphoras', choiceTitle: 'Faire partie d’Istanbul, pas seulement y séjourner.',
    choice1: 'Le Peninsula a été choisi pour son emplacement à Karaköy, ancienne Galata, face à la péninsule historique.',
    choice2: 'Pour un membre Bosphoras, cette adresse devient un point d’ancrage au cœur d’une histoire vivante.',
    exp: 'Expérience membre', expTitle: 'Wellness, fitness, hospitality et accès privés.', frame: 'Cadre membre', frameTitle: 'Un privilège intégré à l’expérience Bosphoras Premium.',
    gallery: 'Galerie privée', galleryTitle: 'L’adresse principale des membres Bosphoras à Istanbul.', finalTitle: 'Demander l’accès membre Bosphoras Premium.', finalText: 'Le Peninsula Istanbul devient l’une des adresses principales de l’expérience Bosphoras Premium.', concierge: 'Conciergerie de luxe',
    benefits: ['Spa & Wellness|Piscine intérieure, hammams, sauna, vapeur et soins sélectionnés.', 'Fitness|Salle de sport premium selon les horaires de l’établissement.', 'Hospitality|Restaurants, Gallada, rendez-vous privés et demandes accompagnées.', 'Privilèges membres|Soins, cours privés, Abelia Pool, valet et avantages selon disponibilité.'],
    rules: ['Accès réservé aux membres Bosphoras Premium validés.', 'Modalités communiquées uniquement dans le cadre de la relation membre.', 'Coordination assurée par le bureau Bosphoras.', 'Sous réserve de disponibilité, validation et règles de l’établissement.'],
    cards: ['Karaköy · Galataport|Une adresse centrale entre histoire, promenade contemporaine et vue impériale.', 'Discrétion|Les modalités sont traitées dans la relation membre.', 'Bosphoras Premium|Une présence concrète dans l’une des meilleures adresses d’Istanbul.'],
  },
  en: {
    metaTitle: 'Peninsula Istanbul Premium Access | Bosphoras', metaDescription: 'Premium access to The Peninsula Istanbul for Bosphoras Premium members: spa, wellness, fitness, hospitality and private coordination in Istanbul.',
    eyebrow: 'Bosphoras Premium Members', title: 'Premium access to The Peninsula Istanbul', intro: 'A selected address for our members, where the Bosphorus meets the Golden Horn facing the historic peninsula.',
    join: 'Apply for membership', back: 'Back to Bosphoras', why: 'Why this address', memory: 'The best view in Istanbul is not only a view. It is a memory.', whyText: 'From Karaköy, the view crosses Galata, Byzantium, Constantinople, the Ottoman conquest and contemporary Istanbul.',
    choiceLabel: 'The Bosphoras choice', choiceTitle: 'Be part of Istanbul, not just a visitor.', choice1: 'The Peninsula was selected for its Karaköy location, old Galata, facing the historic peninsula.', choice2: 'For a Bosphoras member, this address becomes an anchor inside a living history.',
    exp: 'Member experience', expTitle: 'Wellness, fitness, hospitality and private access.', frame: 'Member framework', frameTitle: 'A privilege integrated into the Bosphoras Premium experience.', gallery: 'Private gallery', galleryTitle: 'The main Bosphoras member address in Istanbul.', finalTitle: 'Apply for Bosphoras Premium member access.', finalText: 'The Peninsula Istanbul becomes one of the main addresses of the Bosphoras Premium experience.', concierge: 'Luxury Concierge',
    benefits: ['Spa & Wellness|Indoor pool, hammams, sauna, steam rooms and selected treatments.', 'Fitness|Premium gym according to the venue schedule.', 'Hospitality|Restaurants, Gallada, private meetings and coordinated requests.', 'Member privileges|Treatments, private classes, Abelia Pool, valet and benefits subject to availability.'],
    rules: ['Access reserved for validated Bosphoras Premium members.', 'Terms shared only within the member relationship.', 'Coordination handled by the Bosphoras office.', 'Subject to availability, validation and venue rules.'],
    cards: ['Karaköy · Galataport|A central address between history, contemporary promenade and imperial views.', 'Discretion|Terms are handled within the member relationship.', 'Bosphoras Premium|A real presence in one of Istanbul’s finest addresses.'],
  },
  ru: {
    metaTitle: 'Premium-доступ Peninsula Istanbul | Bosphoras', metaDescription: 'Premium-доступ в The Peninsula Istanbul для участников Bosphoras Premium: spa, wellness, fitness, hospitality и частная координация в Стамбуле.',
    eyebrow: 'Bosphoras Premium Members', title: 'Premium-доступ в Peninsula Istanbul', intro: 'Адрес, выбранный для наших участников: там, где Босфор встречается с Золотым Рогом, напротив исторического полуострова.',
    join: 'Подать заявку', back: 'Вернуться', why: 'Почему этот адрес', memory: 'Лучший вид на Стамбул — это не просто вид. Это память.', whyText: 'Из Каракёя взгляд проходит через Галату, Византию, Константинополь, османское завоевание и современный Стамбул.',
    choiceLabel: 'Выбор Bosphoras', choiceTitle: 'Стать частью Стамбула, а не просто остановиться в нём.', choice1: 'Peninsula выбран за расположение в Каракёе, старой Галате, напротив исторического полуострова.', choice2: 'Для участника Bosphoras этот адрес становится точкой опоры внутри живой истории.',
    exp: 'Опыт участника', expTitle: 'Wellness, fitness, hospitality и private access.', frame: 'Формат доступа', frameTitle: 'Привилегия, встроенная в опыт Bosphoras Premium.', gallery: 'Private gallery', galleryTitle: 'Главный адрес участников Bosphoras в Стамбуле.', finalTitle: 'Запросить доступ Bosphoras Premium.', finalText: 'Peninsula Istanbul становится одним из главных адресов опыта Bosphoras Premium.', concierge: 'Luxury Concierge',
    benefits: ['Spa & Wellness|Бассейн, хаммамы, сауна, паровые зоны и выбранные процедуры.', 'Fitness|Premium-зал согласно расписанию объекта.', 'Hospitality|Рестораны, Gallada, private meetings и координируемые запросы.', 'Привилегии|Процедуры, private classes, Abelia Pool, valet и преимущества при доступности.'],
    rules: ['Доступ только для подтверждённых участников Bosphoras Premium.', 'Условия сообщаются только в рамках отношений с участником.', 'Координация через офис Bosphoras.', 'С учётом доступности, проверки и правил объекта.'],
    cards: ['Karaköy · Galataport|Центральный адрес между историей, современной набережной и имперским видом.', 'Дискретность|Условия обсуждаются в рамках членских отношений.', 'Bosphoras Premium|Реальное присутствие в одном из лучших адресов Стамбула.'],
  },
  ar: {
    metaTitle: 'دخول Premium إلى Peninsula Istanbul | Bosphoras', metaDescription: 'دخول Premium إلى The Peninsula Istanbul لأعضاء Bosphoras Premium: spa، wellness، fitness، hospitality وتنسيق خاص في إسطنبول.',
    eyebrow: 'Bosphoras Premium Members', title: 'دخول Premium إلى Peninsula Istanbul', intro: 'عنوان مختار لأعضائنا، حيث يلتقي البوسفور بالقرن الذهبي مقابل شبه الجزيرة التاريخية.',
    join: 'طلب العضوية', back: 'العودة', why: 'لماذا هذا العنوان', memory: 'أفضل إطلالة في إسطنبول ليست مجرد إطلالة. إنها ذاكرة.', whyText: 'من كاراكوي، يمر النظر عبر غلطة وبيزنطة والقسطنطينية والفتح العثماني وإسطنبول الحديثة.',
    choiceLabel: 'اختيار Bosphoras', choiceTitle: 'أن تكون جزءاً من إسطنبول، لا مجرد زائر لها.', choice1: 'تم اختيار Peninsula لموقعه في كاراكوي، غلطة القديمة، مقابل شبه الجزيرة التاريخية.', choice2: 'بالنسبة لعضو Bosphoras، يصبح هذا العنوان نقطة ارتكاز داخل تاريخ حي.',
    exp: 'تجربة العضو', expTitle: 'Wellness، fitness، hospitality ودخول خاص.', frame: 'إطار العضوية', frameTitle: 'امتياز مدمج في تجربة Bosphoras Premium.', gallery: 'معرض خاص', galleryTitle: 'العنوان الرئيسي لأعضاء Bosphoras في إسطنبول.', finalTitle: 'طلب دخول Bosphoras Premium.', finalText: 'يصبح Peninsula Istanbul أحد العناوين الرئيسية في تجربة Bosphoras Premium.', concierge: 'كونسيرج فاخر',
    benefits: ['Spa & Wellness|مسبح وحمامات وساونا وبخار وعلاجات مختارة.', 'Fitness|نادي رياضي premium حسب أوقات المنشأة.', 'Hospitality|مطاعم وGallada واجتماعات خاصة وطلبات منسقة.', 'امتيازات الأعضاء|علاجات ودروس خاصة وAbelia Pool وvalet حسب التوفر.'],
    rules: ['الدخول مخصص لأعضاء Bosphoras Premium المعتمدين.', 'تتم مشاركة الشروط فقط ضمن علاقة العضوية.', 'التنسيق يتم عبر مكتب Bosphoras.', 'حسب التوفر والتحقق وقواعد المنشأة.'],
    cards: ['Karaköy · Galataport|عنوان مركزي بين التاريخ والممشى الحديث والإطلالة الإمبراطورية.', 'الخصوصية|تتم معالجة الشروط ضمن علاقة العضوية.', 'Bosphoras Premium|حضور حقيقي في أحد أفضل عناوين إسطنبول.'],
  },
};

const icons = [Waves, Dumbbell, Utensils, Sparkles];
const links: Record<Locale, { join: string; home: string; concierge: string }> = {
  fr: { join: '/adhesion/demande-membre', home: '/', concierge: '/services/conciergerie-luxe-turquie' },
  en: { join: '/en/membership/application', home: '/en', concierge: '/en/services/luxury-concierge-turkey' },
  ru: { join: '/ru/chlenstvo/zayavka', home: '/ru', concierge: '/ru/uslugi/luxury-concierge-turkey' },
  ar: { join: '/ar/عضوية/طلب', home: '/ar', concierge: '/ar/خدمات/luxury-concierge-turkey' },
};

export function PeninsulaIstanbulLanding({ locale, currentPath }: { locale: Locale; currentPath: string }) {
  const c = peninsulaCopy[locale];
  const l = links[locale];
  const rtl = locale === 'ar';
  return (
    <>
      <StructuredData data={organizationSchema()} />
      <StructuredData data={serviceSchema({ name: c.title, description: c.metaDescription, url: `https://bosphoras.com${currentPath}` })} />
      <Header locale={locale} currentPath={currentPath} />
      <main dir={rtl ? 'rtl' : 'ltr'} className="bg-[#f8f1e7] text-[#101827]">
        <section className="relative overflow-hidden bg-[#121826] pt-20 text-[#fffaf0] md:pt-28">
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(58,62,68,0.50)_0%,rgba(58,62,68,0.34)_46%,rgba(58,62,68,0.16)_100%),url('/images/vue.penincula.ciel.jpg')] bg-[length:auto_52%] bg-top bg-no-repeat md:bg-cover md:bg-center" />
          <div className="absolute inset-0 bg-[#3a3f46]/24" />
          <div className="container-editorial relative z-10 grid min-h-[64vh] items-start gap-6 pb-8 pt-8 md:min-h-[76vh] md:pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div className="max-w-3xl drop-shadow-[0_10px_28px_rgba(0,0,0,0.42)]">
              <img src={img.logo} alt="The Peninsula Istanbul" className="mb-5 h-9 w-auto brightness-0 invert drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)] md:mb-6 md:h-12" />
              <p className="mb-4 text-[0.62rem] font-bold uppercase tracking-[0.26em] text-[#f0c979] md:text-xs md:tracking-[0.34em]">{c.eyebrow}</p>
              <h1 className="font-serif text-3xl leading-[1.02] tracking-[-0.045em] text-white md:text-6xl lg:text-7xl">{c.title}</h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#fff4df] md:mt-7 md:text-xl md:leading-10">{c.intro}</p>
              <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:flex-wrap md:mt-9 md:gap-3">
                <Link href={l.join} className="inline-flex w-full max-w-full items-center justify-center gap-2 bg-[#d2a863] px-5 py-3 text-center text-[0.58rem] font-bold uppercase leading-4 tracking-[0.10em] text-[#101827] transition hover:bg-[#e0bc78] sm:w-auto md:px-8 md:py-4 md:text-xs md:tracking-[0.16em]">{c.join}<ArrowRight size={14} /></Link>
                <Link href={l.home} className="inline-flex w-full max-w-full items-center justify-center border border-[#d2a863]/80 bg-[#121826]/35 px-5 py-3 text-center text-[0.58rem] font-bold uppercase leading-4 tracking-[0.10em] text-[#ffe4ae] transition hover:bg-white/10 sm:w-auto md:px-8 md:py-4 md:text-xs md:tracking-[0.16em]">{c.back}</Link>
              </div>
            </div>
            <aside className="border border-[#d2a863]/45 bg-[#121826]/46 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.22)] backdrop-blur-md md:p-9 lg:mt-28">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-[#f0c979]">{c.why}</p>
              <p className="mt-5 font-serif text-2xl leading-tight text-white md:mt-6 md:text-3xl">{c.memory}</p>
              <p className="mt-4 text-sm leading-7 text-[#fff4df] md:mt-5">{c.whyText}</p>
            </aside>
          </div>
        </section>
        <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24"><div><p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">{c.choiceLabel}</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">{c.choiceTitle}</h2></div><div className="space-y-7 text-lg leading-9 text-[#3e4857]"><p>{c.choice1}</p><p>{c.choice2}</p></div></div></section>
        <section className="bg-[#fffaf0] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-[1500px]"><div className="mb-12 max-w-4xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6728]">{c.exp}</p><h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] md:text-6xl">{c.expTitle}</h2></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{c.benefits.map((b: string, i: number) => { const [title, text] = b.split('|'); const Icon = icons[i]; return <article key={b} className="border border-[#d8c7a1] bg-white p-7 shadow-[0_18px_55px_rgba(16,24,39,0.045)]"><Icon className="h-8 w-8 text-[#8a6728]" strokeWidth={1.35} /><h3 className="mt-8 font-serif text-3xl text-[#121826]">{title}</h3><p className="mt-5 text-sm leading-7 text-[#3e4857]">{text}</p></article>; })}</div></div></section>
        <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-[1500px] overflow-hidden border border-[#d8c7a1] bg-[#121826] text-[#fffaf0] lg:grid-cols-[1.05fr_0.95fr]"><div className="p-8 md:p-12 lg:p-16"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">{c.frame}</p><h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">{c.frameTitle}</h2><div className="mt-8 grid gap-3 text-sm leading-7 text-[#f3e4c7] sm:grid-cols-2">{c.rules.map((rule: string) => <div key={rule} className="border border-[#d2a863]/25 p-4"><ShieldCheck className="mb-4 h-5 w-5 text-[#d2a863]" strokeWidth={1.35} /><p>{rule}</p></div>)}</div></div><div className="min-h-[360px] bg-[linear-gradient(135deg,rgba(58,62,68,0.16),rgba(58,62,68,0.36)),url('/images/peninsula.interior.pool.jpg')] bg-cover bg-center md:min-h-[420px]" /></div></section>
        <section className="bg-[#fffaf0] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-[1500px]"><div className="mb-12 max-w-4xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6728]">{c.gallery}</p><h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] md:text-6xl">{c.galleryTitle}</h2></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{[img.pool,img.historic,img.hammam,img.fitness,img.spa,img.abelia,img.lobby,img.interior].map((src) => <figure key={src} className="group overflow-hidden border border-[#d8c7a1] bg-white shadow-[0_18px_55px_rgba(16,24,39,0.045)]"><div className="aspect-[4/5] overflow-hidden"><img src={src} alt="The Peninsula Istanbul" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div></figure>)}</div></div></section>
        <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-3">{c.cards.map((card: string, i: number) => { const [title, text] = card.split('|'); const Icon = i === 0 ? MapPin : i === 1 ? Lock : Sparkles; return <article key={card} className="border border-[#d8c7a1] bg-white p-8"><Icon className="mb-8 h-8 w-8 text-[#8a6728]" strokeWidth={1.35} /><h3 className="font-serif text-3xl text-[#121826]">{title}</h3><p className="mt-5 text-sm leading-7 text-[#3e4857]">{text}</p></article>; })}</div></section>
        <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-[1500px] border border-[#24334a] bg-[linear-gradient(90deg,#121826_0%,#1d2940_45%,#121826_100%)] p-6 md:p-10"><div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center"><div className="text-white"><p className="font-serif text-3xl tracking-[-0.025em] md:text-5xl">{c.finalTitle}</p><p className="mt-4 max-w-xl text-base leading-8 text-white/80">{c.finalText}</p></div><div className="flex flex-col gap-3 md:items-end"><Link href={l.join} className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#101827] transition hover:bg-[#e0bc78]">{c.join}<ArrowRight size={15} /></Link><Link href={l.concierge} className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#d2a863] transition hover:bg-white/5">{c.concierge}</Link></div></div></div></section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
