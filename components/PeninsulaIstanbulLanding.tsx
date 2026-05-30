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
    metaDescription: 'Accès premium au Peninsula Istanbul pour les membres Bosphoras Premium : spa, wellness, fitness, hospitality, restaurants, Abelia Pool et coordination privée à Istanbul.',
    eyebrow: 'Bosphoras Premium Members',
    title: 'Accès premium au Peninsula Istanbul',
    intro: 'Une adresse choisie pour nos membres : là où le Bosphore rencontre la Corne d’Or, face à la péninsule historique, dans un quartier où Istanbul raconte à chaque pas son passé impérial et son énergie moderne.',
    join: 'Demander une adhésion', back: 'Retour Bosphoras', why: 'Pourquoi cette adresse',
    memory: 'La meilleure vue d’Istanbul n’est pas seulement une vue. C’est une mémoire.',
    whyText: 'Depuis Karaköy, le regard traverse les siècles : Galata, les routes marchandes, Byzance, Constantinople, la conquête ottomane et l’Istanbul contemporaine. Ici, le membre n’est pas seulement de passage : il entre dans une ville qui a vu se croiser les empires, les marchands, les ambassadeurs et les puissances du monde.',
    choiceLabel: 'Le choix Bosphoras', choiceTitle: 'Faire partie d’Istanbul, pas seulement y séjourner.',
    choice1: 'Nous n’avons pas choisi le Peninsula uniquement pour son confort. Nous l’avons choisi parce qu’il se trouve à l’un des points les plus narratifs d’Istanbul : Karaköy, l’ancienne Galata, face à la péninsule historique, entre la Corne d’Or et le Bosphore.',
    choice2: 'Depuis cette rive, on comprend pourquoi Istanbul a attiré les Romains, les Byzantins, les Génois, les Ottomans, les voyageurs, les familles puissantes et les grandes maisons de commerce. Pour un membre Bosphoras, cette adresse devient un point d’ancrage au cœur d’une histoire vivante : un lieu où l’on vient s’entraîner, se détendre, recevoir, réfléchir et ressentir Istanbul avec le bon niveau de discrétion.',
    exp: 'Expérience membre', expTitle: 'Wellness, fitness, hospitality et accès privés.', frame: 'Ce que comprend l’accès membre', frameTitle: 'Un privilège intégré à l’expérience Bosphoras Premium.',
    gallery: 'Galerie privée', galleryTitle: 'L’adresse principale des membres Bosphoras à Istanbul.', finalTitle: 'Demander l’accès membre Bosphoras Premium.', finalText: 'Le Peninsula Istanbul devient l’une des adresses principales de l’expérience Bosphoras Premium : un lieu pour prendre soin de soi, recevoir, travailler et vivre Istanbul avec élégance.', concierge: 'Conciergerie de luxe',
    benefits: ['Spa & Wellness Centre|Accès coordonné au centre Spa & Wellness du Peninsula Istanbul : piscine intérieure de 25 mètres, hammams, sauna, espaces vapeur, salles de relaxation et soins sélectionnés.', 'Fitness quotidien|Salle de sport premium, cardio et renforcement, accessible selon les horaires de l’établissement.', 'Abelia Pool & Hospitality|Accès à Abelia Pool en saison, restaurants, Gallada, rendez-vous privés, moments de représentation et demandes accompagnées.', 'Privilèges membres|Soins de 90 minutes, cours privés, service voiturier et avantages selon disponibilité et cadre membre.'],
    rules: ['Accès réservé aux membres Bosphoras Premium validés.', 'Modalités communiquées uniquement dans le cadre de la relation membre.', 'Coordination assurée par le bureau Bosphoras pour préserver la confidentialité et la fluidité du parcours.', 'Sous réserve de disponibilité, validation et règles de l’établissement.'],
    cards: ['Karaköy · Galataport|Une adresse centrale, entre quartier historique, promenade contemporaine, institutions culturelles et vue sur la péninsule impériale.', 'Discrétion|Les modalités sont traitées dans la relation membre, avec coordination confidentielle par le bureau Bosphoras.', 'Bosphoras Premium|Un privilège qui donne une présence concrète dans l’une des meilleures adresses d’Istanbul.'],
  },
  en: {
    metaTitle: 'Peninsula Istanbul Premium Access | Bosphoras', metaDescription: 'Premium access to The Peninsula Istanbul for Bosphoras Premium members: spa, wellness, fitness, hospitality, restaurants, Abelia Pool and private coordination in Istanbul.',
    eyebrow: 'Bosphoras Premium Members', title: 'Premium access to The Peninsula Istanbul', intro: 'A selected address for our members: where the Bosphorus meets the Golden Horn, facing the historic peninsula, in a district where Istanbul tells its imperial past and modern energy at every step.',
    join: 'Apply for membership', back: 'Back to Bosphoras', why: 'Why this address', memory: 'The best view in Istanbul is not only a view. It is a memory.', whyText: 'From Karaköy, the eye crosses centuries: Galata, trade routes, Byzantium, Constantinople, the Ottoman conquest and contemporary Istanbul. Here, a member is not simply passing through; they step into a city shaped by empires, merchants, ambassadors and world powers.',
    choiceLabel: 'The Bosphoras choice', choiceTitle: 'Be part of Istanbul, not just a visitor.', choice1: 'We did not choose The Peninsula only for its comfort. We selected it because it stands in Karaköy, old Galata, facing the historic peninsula, between the Golden Horn and the Bosphorus.', choice2: 'From this shore, one understands why Istanbul attracted Romans, Byzantines, Genoese, Ottomans, travellers, powerful families and great trading houses. For a Bosphoras member, this address becomes an anchor inside a living history: a place to train, recover, receive, think and experience Istanbul with the right level of discretion.',
    exp: 'Member experience', expTitle: 'Wellness, fitness, hospitality and private access.', frame: 'What member access includes', frameTitle: 'A privilege integrated into the Bosphoras Premium experience.', gallery: 'Private gallery', galleryTitle: 'The main Bosphoras member address in Istanbul.', finalTitle: 'Apply for Bosphoras Premium member access.', finalText: 'The Peninsula Istanbul becomes one of the main addresses of the Bosphoras Premium experience: a place to recover, receive, work and live Istanbul with elegance.', concierge: 'Luxury Concierge',
    benefits: ['Spa & Wellness Centre|Coordinated access to The Peninsula Istanbul Spa & Wellness Centre: 25-metre indoor pool, hammams, sauna, steam rooms, relaxation areas and selected treatments.', 'Daily fitness|Premium gym, cardio and strength training, accessible according to the venue schedule.', 'Abelia Pool & Hospitality|Seasonal access to Abelia Pool, restaurants, Gallada, private meetings, representation moments and coordinated requests.', 'Member privileges|90-minute treatments, private classes, valet service and benefits subject to availability and member framework.'],
    rules: ['Access reserved for validated Bosphoras Premium members.', 'Terms shared only within the member relationship.', 'Coordination handled by the Bosphoras office to preserve confidentiality and fluidity.', 'Subject to availability, validation and venue rules.'],
    cards: ['Karaköy · Galataport|A central address between historic district, contemporary promenade, cultural institutions and views of the imperial peninsula.', 'Discretion|Terms are handled within the member relationship, with confidential coordination by the Bosphoras office.', 'Bosphoras Premium|A privilege that gives members a real presence in one of Istanbul’s finest addresses.'],
  },
  ru: {
    metaTitle: 'Premium-доступ Peninsula Istanbul | Bosphoras', metaDescription: 'Premium-доступ в The Peninsula Istanbul для участников Bosphoras Premium: spa, wellness, fitness, hospitality, рестораны, Abelia Pool и частная координация в Стамбуле.',
    eyebrow: 'Bosphoras Premium Members', title: 'Premium-доступ в Peninsula Istanbul', intro: 'Адрес, выбранный для наших участников: там, где Босфор встречается с Золотым Рогом, напротив исторического полуострова, в районе, где Стамбул на каждом шагу рассказывает свою имперскую историю и современную энергию.',
    join: 'Подать заявку', back: 'Вернуться', why: 'Почему этот адрес', memory: 'Лучший вид на Стамбул — это не просто вид. Это память.', whyText: 'Из Каракёя взгляд проходит сквозь века: Галата, торговые пути, Византия, Константинополь, османское завоевание и современный Стамбул. Здесь участник не просто приезжает в город — он входит в пространство, где встречались империи, купцы, послы и мировые силы.',
    choiceLabel: 'Выбор Bosphoras', choiceTitle: 'Стать частью Стамбула, а не просто остановиться в нём.', choice1: 'Мы выбрали Peninsula не только за комфорт. Этот адрес находится в Каракёе, старой Галате, напротив исторического полуострова, между Золотым Рогом и Босфором.', choice2: 'С этого берега понятно, почему Стамбул веками притягивал римлян, византийцев, генуэзцев, османов, путешественников, влиятельные семьи и торговые дома. Для участника Bosphoras этот адрес становится точкой опоры внутри живой истории: местом для спорта, восстановления, встреч, размышления и ощущения Стамбула с правильным уровнем дискретности.',
    exp: 'Опыт участника', expTitle: 'Wellness, fitness, hospitality и private access.', frame: 'Что включает доступ участника', frameTitle: 'Привилегия, встроенная в опыт Bosphoras Premium.', gallery: 'Private gallery', galleryTitle: 'Главный адрес участников Bosphoras в Стамбуле.', finalTitle: 'Запросить доступ Bosphoras Premium.', finalText: 'Peninsula Istanbul становится одним из главных адресов опыта Bosphoras Premium: место для восстановления, встреч, работы и элегантного ощущения Стамбула.', concierge: 'Luxury Concierge',
    benefits: ['Spa & Wellness Centre|Координированный доступ в Spa & Wellness Centre Peninsula Istanbul: 25-метровый крытый бассейн, хаммамы, сауна, паровые зоны, зоны отдыха и выбранные процедуры.', 'Ежедневный fitness|Premium-зал, cardio и силовые тренировки согласно расписанию объекта.', 'Abelia Pool & Hospitality|Сезонный доступ к Abelia Pool, рестораны, Gallada, private meetings, представительские встречи и координируемые запросы.', 'Привилегии участников|Процедуры 90 минут, private classes, valet service и преимущества при наличии доступности.'],
    rules: ['Доступ только для подтверждённых участников Bosphoras Premium.', 'Условия сообщаются только в рамках отношений с участником.', 'Координация через офис Bosphoras для конфиденциальности и плавного процесса.', 'С учётом доступности, проверки и правил объекта.'],
    cards: ['Karaköy · Galataport|Центральный адрес между историческим районом, современной набережной, культурными местами и видом на имперский полуостров.', 'Дискретность|Условия обсуждаются в рамках членских отношений и конфиденциально координируются офисом Bosphoras.', 'Bosphoras Premium|Привилегия, которая даёт реальное присутствие в одном из лучших адресов Стамбула.'],
  },
  ar: {
    metaTitle: 'دخول Premium إلى Peninsula Istanbul | Bosphoras', metaDescription: 'دخول Premium إلى The Peninsula Istanbul لأعضاء Bosphoras Premium: spa، wellness، fitness، hospitality، مطاعم، Abelia Pool وتنسيق خاص في إسطنبول.',
    eyebrow: 'Bosphoras Premium Members', title: 'دخول Premium إلى Peninsula Istanbul', intro: 'عنوان مختار لأعضائنا: حيث يلتقي البوسفور بالقرن الذهبي، مقابل شبه الجزيرة التاريخية، في حي يروي تاريخ إسطنبول الإمبراطوري وطاقتها الحديثة في كل خطوة.',
    join: 'طلب العضوية', back: 'العودة', why: 'لماذا هذا العنوان', memory: 'أفضل إطلالة في إسطنبول ليست مجرد إطلالة. إنها ذاكرة.', whyText: 'من كاراكوي، يعبر النظر قروناً من التاريخ: غلطة، طرق التجارة، بيزنطة، القسطنطينية، الفتح العثماني وإسطنبول المعاصرة. هنا لا يكون العضو مجرد زائر، بل يدخل مدينة عبرت منها الإمبراطوريات والتجار والسفراء وقوى العالم.',
    choiceLabel: 'اختيار Bosphoras', choiceTitle: 'أن تكون جزءاً من إسطنبول، لا مجرد زائر لها.', choice1: 'لم نختر Peninsula للراحة فقط. اخترناه لأنه يقع في كاراكوي، غلطة القديمة، مقابل شبه الجزيرة التاريخية، بين القرن الذهبي والبوسفور.', choice2: 'من هذه الضفة نفهم لماذا جذبت إسطنبول الرومان والبيزنطيين والجنويين والعثمانيين والمسافرين والعائلات المؤثرة وبيوت التجارة الكبرى. بالنسبة لعضو Bosphoras، يصبح هذا العنوان نقطة ارتكاز داخل تاريخ حي: مكاناً للرياضة، الاسترخاء، الاستقبال، التفكير وعيش إسطنبول بالمستوى الصحيح من الخصوصية.',
    exp: 'تجربة العضو', expTitle: 'Wellness، fitness، hospitality ودخول خاص.', frame: 'ما يشمله دخول العضو', frameTitle: 'امتياز مدمج في تجربة Bosphoras Premium.', gallery: 'معرض خاص', galleryTitle: 'العنوان الرئيسي لأعضاء Bosphoras في إسطنبول.', finalTitle: 'طلب دخول Bosphoras Premium.', finalText: 'يصبح Peninsula Istanbul أحد العناوين الرئيسية في تجربة Bosphoras Premium: مكاناً للاستعادة، الاستقبال، العمل وعيش إسطنبول بأناقة.', concierge: 'كونسيرج فاخر',
    benefits: ['Spa & Wellness Centre|دخول منسق إلى Spa & Wellness Centre في Peninsula Istanbul: مسبح داخلي بطول 25 متراً، حمامات، ساونا، بخار، مناطق استراحة وعلاجات مختارة.', 'Fitness يومي|نادي رياضي premium، cardio وتمارين قوة حسب أوقات المنشأة.', 'Abelia Pool & Hospitality|دخول موسمي إلى Abelia Pool، مطاعم، Gallada، اجتماعات خاصة، لحظات تمثيلية وطلبات منسقة.', 'امتيازات الأعضاء|علاجات 90 دقيقة، دروس خاصة، valet service ومزايا حسب التوفر وإطار العضوية.'],
    rules: ['الدخول مخصص لأعضاء Bosphoras Premium المعتمدين.', 'تتم مشاركة الشروط فقط ضمن علاقة العضوية.', 'التنسيق يتم عبر مكتب Bosphoras للحفاظ على الخصوصية وسلاسة التجربة.', 'حسب التوفر والتحقق وقواعد المنشأة.'],
    cards: ['Karaköy · Galataport|عنوان مركزي بين الحي التاريخي والممشى المعاصر والمؤسسات الثقافية وإطلالة شبه الجزيرة الإمبراطورية.', 'الخصوصية|تتم معالجة الشروط ضمن علاقة العضوية وبتنسيق خاص من مكتب Bosphoras.', 'Bosphoras Premium|امتياز يمنح العضو حضوراً حقيقياً في أحد أفضل عناوين إسطنبول.'],
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
        <section className="relative overflow-hidden bg-[#121826] pt-24 text-[#fffaf0] md:pt-32">
          <div className="absolute inset-0 hidden bg-[linear-gradient(110deg,rgba(0,0,0,0.54)_0%,rgba(0,0,0,0.40)_44%,rgba(0,0,0,0.26)_100%),url('/images/vue.penincula.ciel.jpg')] bg-cover bg-center md:block" />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(0,0,0,0.64)_0%,rgba(0,0,0,0.46)_48%,rgba(0,0,0,0.30)_100%),url('/images/Abelia.Pool.Bar.jpg')] bg-cover bg-center md:hidden" />
          <div className="absolute inset-0 bg-[#20242a]/28" />
          <div className="container-editorial relative z-10 grid min-h-[72vh] items-start gap-8 pb-12 pt-6 md:min-h-[80vh] md:pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div className="max-w-3xl drop-shadow-[0_10px_28px_rgba(0,0,0,0.48)]">
              <img src={img.logo} alt="The Peninsula Istanbul" className="mb-7 h-10 w-auto brightness-0 invert drop-shadow-[0_4px_18px_rgba(0,0,0,0.70)] md:h-12" />
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#f0c979]">{c.eyebrow}</p>
              <h1 className="font-serif text-4xl leading-[1.02] tracking-[-0.045em] text-white md:text-6xl lg:text-7xl">{c.title}</h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#fff4df] md:text-xl md:leading-10">{c.intro}</p>
              <div className="mt-9 flex flex-row flex-wrap gap-3 md:flex-nowrap">
                <Link href={l.join} className="inline-flex items-center justify-center gap-3 whitespace-nowrap bg-[#d2a863] px-6 py-3 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#101827] transition hover:bg-[#e0bc78] md:px-8 md:py-4 md:text-xs md:tracking-[0.16em]">{c.join}<ArrowRight size={15} /></Link>
                <Link href={l.home} className="inline-flex items-center justify-center whitespace-nowrap border border-[#d2a863]/80 bg-[#121826]/35 px-6 py-3 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#ffe4ae] transition hover:bg-white/10 md:px-8 md:py-4 md:text-xs md:tracking-[0.16em]">{c.back}</Link>
              </div>
            </div>
            <aside className="border border-[#d2a863]/45 bg-[#121826]/48 p-7 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-md md:p-9 lg:mt-28">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-[#f0c979]">{c.why}</p>
              <p className="mt-6 font-serif text-3xl leading-tight text-white">{c.memory}</p>
              <p className="mt-5 text-sm leading-7 text-[#fff4df]">{c.whyText}</p>
            </aside>
          </div>
        </section>
        <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24"><div><p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">{c.choiceLabel}</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">{c.choiceTitle}</h2></div><div className="space-y-7 text-lg leading-9 text-[#3e4857]"><p>{c.choice1}</p><p>{c.choice2}</p></div></div></section>
        <section className="bg-[#fffaf0] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-[1500px]"><div className="mb-12 max-w-4xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6728]">{c.exp}</p><h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] md:text-6xl">{c.expTitle}</h2></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{c.benefits.map((b: string, i: number) => { const [title, text] = b.split('|'); const Icon = icons[i]; return <article key={b} className="border border-[#d8c7a1] bg-white p-7 shadow-[0_18px_55px_rgba(16,24,39,0.045)]"><Icon className="h-8 w-8 text-[#8a6728]" strokeWidth={1.35} /><h3 className="mt-8 font-serif text-3xl text-[#121826]">{title}</h3><p className="mt-5 text-sm leading-7 text-[#3e4857]">{text}</p></article>; })}</div></div></section>
        <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-[1500px] overflow-hidden border border-[#d8c7a1] bg-[#121826] text-[#fffaf0] lg:grid-cols-[1.05fr_0.95fr]"><div className="p-8 md:p-12 lg:p-16"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">{c.frame}</p><h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">{c.frameTitle}</h2><div className="mt-8 grid gap-3 text-sm leading-7 text-[#f3e4c7] sm:grid-cols-2">{c.rules.map((rule: string) => <div key={rule} className="border border-[#d2a863]/25 p-4"><ShieldCheck className="mb-4 h-5 w-5 text-[#d2a863]" strokeWidth={1.35} /><p>{rule}</p></div>)}</div></div><div className="min-h-[360px] bg-[linear-gradient(135deg,rgba(18,24,38,0.12),rgba(18,24,38,0.42)),url('/images/peninsula.interior.pool.jpg')] bg-cover bg-center md:min-h-[420px]" /></div></section>
        <section className="bg-[#fffaf0] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-[1500px]"><div className="mb-12 max-w-4xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6728]">{c.gallery}</p><h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] md:text-6xl">{c.galleryTitle}</h2></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{[img.pool,img.historic,img.hammam,img.fitness,img.spa,img.abelia,img.lobby,img.interior].map((src) => <figure key={src} className="group overflow-hidden border border-[#d8c7a1] bg-white shadow-[0_18px_55px_rgba(16,24,39,0.045)]"><div className="aspect-[4/5] overflow-hidden"><img src={src} alt="The Peninsula Istanbul" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div></figure>)}</div></div></section>
        <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-3">{c.cards.map((card: string, i: number) => { const [title, text] = card.split('|'); const Icon = i === 0 ? MapPin : i === 1 ? Lock : Sparkles; return <article key={card} className="border border-[#d8c7a1] bg-white p-8"><Icon className="mb-8 h-8 w-8 text-[#8a6728]" strokeWidth={1.35} /><h3 className="font-serif text-3xl text-[#121826]">{title}</h3><p className="mt-5 text-sm leading-7 text-[#3e4857]">{text}</p></article>; })}</div></section>
        <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-[1500px] border border-[#24334a] bg-[linear-gradient(90deg,#121826_0%,#1d2940_45%,#121826_100%)] p-6 md:p-10"><div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center"><div className="text-white"><p className="font-serif text-3xl tracking-[-0.025em] md:text-5xl">{c.finalTitle}</p><p className="mt-4 max-w-xl text-base leading-8 text-white/80">{c.finalText}</p></div><div className="flex flex-col gap-3 md:items-end"><Link href={l.join} className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#101827] transition hover:bg-[#e0bc78]">{c.join}<ArrowRight size={15} /></Link><Link href={l.concierge} className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#d2a863] transition hover:bg-white/5">{c.concierge}</Link></div></div></div></section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
