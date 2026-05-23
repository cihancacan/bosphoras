const multilingualTerms = [
  { lang: 'Français', groups: [
    ['Transfert aéroport Istanbul', ['transfert aéroport Istanbul', 'transfert aeroport Istanbul', 'transfert privé aéroport Istanbul', 'navette privée Istanbul', 'taxi privé aéroport Istanbul', 'réserver transfert Istanbul', 'transfert Istanbul hôtel', 'transfert VIP Istanbul']],
    ['Chauffeur privé Istanbul', ['chauffeur privé Istanbul', 'chauffeur à l’heure Istanbul', 'voiture avec chauffeur Istanbul', 'chauffeur VIP Istanbul', 'chauffeur business Istanbul', 'Mercedes avec chauffeur Istanbul']]
  ]},
  { lang: 'English', groups: [
    ['Istanbul airport transfer', ['Istanbul airport transfer', 'airport transfer Istanbul', 'private airport transfer Istanbul', 'Istanbul airport pickup', 'Istanbul hotel transfer', 'VIP airport transfer Istanbul', 'Istanbul airport car service', 'Istanbul airport to hotel transfer']],
    ['Private chauffeur Istanbul', ['private chauffeur Istanbul', 'private driver Istanbul', 'hourly chauffeur Istanbul', 'Istanbul car with driver', 'VIP chauffeur Istanbul', 'executive chauffeur Istanbul', 'limousine service Istanbul']]
  ]},
  { lang: 'Русский', groups: [
    ['Трансфер аэропорт Стамбул', ['трансфер аэропорт Стамбул', 'трансфер из аэропорта Стамбула', 'частный трансфер Стамбул', 'встреча в аэропорту Стамбул', 'трансфер отель Стамбул', 'VIP трансфер Стамбул', 'заказать трансфер Стамбул']],
    ['Личный водитель Стамбул', ['личный водитель Стамбул', 'частный водитель Стамбул', 'водитель на час Стамбул', 'авто с водителем Стамбул', 'VIP водитель Стамбул', 'Mercedes с водителем Стамбул']]
  ]},
  { lang: 'العربية', groups: [
    ['نقل مطار إسطنبول', ['نقل مطار إسطنبول', 'حجز نقل من مطار إسطنبول', 'سيارة خاصة من مطار إسطنبول', 'استقبال مطار إسطنبول', 'نقل من المطار إلى الفندق إسطنبول', 'خدمة نقل VIP إسطنبول']],
    ['سائق خاص إسطنبول', ['سائق خاص إسطنبول', 'سيارة مع سائق إسطنبول', 'سائق بالساعة إسطنبول', 'سائق VIP إسطنبول', 'خدمة ليموزين إسطنبول']]
  ]},
  { lang: '中文', groups: [
    ['伊斯坦布尔机场接送', ['伊斯坦布尔机场接送', '伊斯坦布尔机场私人接送', '伊斯坦布尔机场到酒店', '伊斯坦布尔机场接机', '伊斯坦布尔VIP接送', '伊斯坦布尔机场专车']],
    ['伊斯坦布尔私人司机', ['伊斯坦布尔私人司机', '伊斯坦布尔包车司机', '伊斯坦布尔小时司机', '伊斯坦布尔VIP司机', '伊斯坦布尔奔驰接送']]
  ]},
  { lang: 'Deutsch', groups: [
    ['Flughafentransfer Istanbul', ['Flughafentransfer Istanbul', 'privater Flughafentransfer Istanbul', 'Transfer Flughafen Istanbul Hotel', 'VIP Transfer Istanbul', 'Istanbul Flughafentransfer buchen']],
    ['Privater Chauffeur Istanbul', ['privater Chauffeur Istanbul', 'Privatfahrer Istanbul', 'Chauffeur stundenweise Istanbul', 'Auto mit Fahrer Istanbul', 'Limousinenservice Istanbul']]
  ]},
  { lang: 'Español', groups: [
    ['Traslado aeropuerto Estambul', ['traslado aeropuerto Estambul', 'traslado privado aeropuerto Estambul', 'transfer aeropuerto Estambul', 'traslado aeropuerto hotel Estambul', 'recogida aeropuerto Estambul']],
    ['Chófer privado Estambul', ['chófer privado Estambul', 'conductor privado Estambul', 'coche con conductor Estambul', 'chofer por horas Estambul', 'servicio limusina Estambul']]
  ]},
  { lang: 'Italiano', groups: [
    ['Transfer aeroporto Istanbul', ['transfer aeroporto Istanbul', 'transfer privato aeroporto Istanbul', 'trasferimento aeroporto Istanbul hotel', 'pickup aeroporto Istanbul', 'transfer VIP Istanbul']],
    ['Autista privato Istanbul', ['autista privato Istanbul', 'auto con autista Istanbul', 'chauffeur a ore Istanbul', 'chauffeur VIP Istanbul', 'Mercedes con autista Istanbul']]
  ]},
  { lang: 'Português', groups: [
    ['Transfer aeroporto Istambul', ['transfer aeroporto Istambul', 'transfer privado aeroporto Istambul', 'translado aeroporto Istambul', 'transfer aeroporto hotel Istambul', 'recepção aeroporto Istambul']],
    ['Motorista privado Istambul', ['motorista privado Istambul', 'carro com motorista Istambul', 'chauffeur por hora Istambul', 'chauffeur VIP Istambul', 'Mercedes com motorista Istambul']]
  ]}
];

export function TransferMultilingualSeo() {
  return (
    <section className="bg-white px-5 pb-10 md:px-8 md:pb-14">
      <div className="mx-auto max-w-[1180px] border-y border-slate-200 py-4">
        <details>
          <summary className="cursor-pointer list-none text-base font-normal text-slate-700">Multilingual airport transfer search terms</summary>
          <div className="mt-4 divide-y divide-slate-100">
            {multilingualTerms.map((block) => (
              <details key={block.lang} className="py-3">
                <summary className="cursor-pointer list-none text-sm font-normal text-slate-700">{block.lang}</summary>
                <div className="mt-3 space-y-3 text-sm font-normal leading-7 text-slate-500">
                  {block.groups.map(([title, terms]) => (
                    <details key={title} className="border-l border-slate-200 pl-4">
                      <summary className="cursor-pointer list-none text-slate-600">{title}</summary>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">{terms.map((term) => <span key={term}>{term}</span>)}</div>
                    </details>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
