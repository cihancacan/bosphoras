#!/usr/bin/env python3
"""Sumba #65 — conservative integration into established shared Travel pages.
Change exactly two component files on the feature branch; no production side effects.
This script intentionally fails when a known anchor changes instead of attempting global substitutions.
"""
from pathlib import Path
p=Path('components/travel/FeaturedCityGuide.tsx')
s=p.read_text()
def change(key,a,b):
 global s
 count=s.count(a)
 if count==0:raise RuntimeError('FeaturedCityGuide missing '+key+' '+a[:65])
 s=s.replace(a,b)
 print('COMPONENT',key,count)
change('import FAQ','import {chiangMaiDraftFaq}',
 "import {sumbaDraftFaq} from '@/data/travel/sumbaDraftFaq';\nimport {sumbaHotelEditorial,sumbaAreaVisuals,confirmedSumbaAssets,sumbaPhotoLicenses} from '@/data/travel/sumbaPremiumEditorial';\nimport {chiangMaiDraftFaq}")
change('hotel registry',"={'chiang-mai':chiangMaiHotelEditorial",
 "={'sumba':sumbaHotelEditorial,'chiang-mai':chiangMaiHotelEditorial")
change('hotel assets',"const photos=city==='chiang-mai' ?",
 "const photos=city==='sumba' ? entry.photos.filter(photo=>confirmedSumbaAssets.has(photo.src)) : city==='chiang-mai' ?")
change('area scenes',"const photo=city==='chiang-mai' ?",
 "const photo=city==='sumba' ? sumbaAreaVisuals[index] : city==='chiang-mai' ?")
change('area rights',"if(!photo || ((city==='chiang-mai'",
 "if(!photo || ((city==='sumba' && !confirmedSumbaAssets.has(photo.src)) || (city==='chiang-mai'")
change('area photo attribution',"{city==='chiang-mai' && chiangMaiPhotoLicenses",
 """{city==='sumba' && sumbaPhotoLicenses[photo.src] && <> · <a href={sumbaPhotoLicenses[photo.src].url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{sumbaPhotoLicenses[photo.src].name}</a></>}
      {city==='chiang-mai' && chiangMaiPhotoLicenses""")
change('destination asset set',"const destinationAssets=city.slug==='chiang-mai'?",
 "const destinationAssets=city.slug==='sumba'?confirmedSumbaAssets:city.slug==='chiang-mai'?")
change('hero contrast',"""city.slug==='chiang-mai' ? <div className="absolute inset-0 bg-gradient""",
 """city.slug==='sumba' ? <div className="absolute inset-0 bg-gradient-to-r from-[#09252b]/91 via-[#13483c]/55 to-[#174738]/8"/> : city.slug==='chiang-mai' ? <div className="absolute inset-0 bg-gradient""")
change('all compact slug checks',"city.slug==='chiang-mai'||","city.slug==='sumba'||city.slug==='chiang-mai'||")
change('all spaced slug checks',"city.slug === 'chiang-mai'||","city.slug === 'sumba'||city.slug === 'chiang-mai'||")
change('FAQ selection',"(city.slug==='chiang-mai'?chiangMaiDraftFaq",
 "(city.slug==='sumba'?sumbaDraftFaq:city.slug==='chiang-mai'?chiangMaiDraftFaq")
change('landscape nav','{city.slug===\'chiang-mai\' && <a href="#panoramas-chiang-mai"',
 '{city.slug===\'sumba\' && <a href="#panoramas-sumba" className="shrink-0 hover:text-[#9e794a]">{fr?\'Panoramas\':\'Landscapes\'}</a>}\n        {city.slug===\'chiang-mai\' && <a href="#panoramas-chiang-mai"')
change('attribution hero',
 '{city.slug===\'chiang-mai\' && hero && <p className="mt-4 text-xs leading-6 text-[#f3dfb9]">',
 '''{city.slug==='sumba' && hero && <p className="mt-4 text-xs leading-6 text-[#f3dfb9]">{fr?'Photo : ':'Photograph: '}<a href={hero.sourcePage} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{hero.author}</a>{' · '}<a href={hero.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{hero.license}</a>{' · '}{fr?'WebP redimensionnée':'Resized WebP'}</p>}
        {city.slug==='chiang-mai' && hero && <p className="mt-4 text-xs leading-6 text-[#f3dfb9]">''')
panel="""    {city.slug==='sumba' && <section id="panoramas-sumba" className="scroll-mt-24 bg-[#e5ece8] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#8e7045]">{fr?'Sumba · des paysages qui se méritent':'Sumba · landscapes worth travelling for'}</p>
        <h2 className="mt-4 max-w-4xl font-serif text-3xl leading-tight sm:text-5xl">{fr?'Entre le lagon turquoise et les collines de l’est.':'Between the turquoise lagoon and the eastern hills.'}</h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#4e626b]">{fr?'Les maisons de Ratenggaro et les collines de Wairinding racontent deux visages d’une île immense. Ces photographies ne représentent pas des vues garanties depuis les chambres.':'Ratenggaro’s extraordinary roofs and Wairinding’s hills show two distinct sides of a vast island. These are authentic local photos, not a promise of any specific room view.'}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {([{key:'scene-2',frTitle:'Ratenggaro · architecture vivante',enTitle:'Ratenggaro · living heritage'},
             {key:'scene-3',frTitle:'Wairinding · collines de Sumba',enTitle:'Wairinding · Sumba’s rolling hills'}] as const).map(v=>{
              const pic=city.photos[v.key];
              return pic && confirmedSumbaAssets.has(pic.src) && <article key={v.key} className="bg-white p-4 shadow-sm sm:p-5">
                <CityPhoto photo={pic} locale={locale}/>
                <h3 className="mt-5 font-serif text-2xl text-[#19323e]">{fr?v.frTitle:v.enTitle}</h3>
              </article>;
          })}
        </div>
      </div>
    </section>}
"""
change('dedicated landscape panel',
 '    {city.slug===\'chiang-mai\' && <section id="panoramas-chiang-mai"',
 panel+'    {city.slug===\'chiang-mai\' && <section id="panoramas-chiang-mai"')
# The original Chiang Mai script introduced a malformed quoted className on another branch;
# refuse to commit if it reappears.
assert """className="mt-4 text-xs leading-6 text-[#f3dfb9]'>""" not in s
p.write_text(s)
print('FeaturedCityGuide updated',len(s))

p=Path('components/travel/TravelPages.tsx');s=p.read_text()
def ch(key,a,b):
 global s
 n=s.count(a)
 if not n:raise RuntimeError('TravelPages missing '+key+' '+a[:70])
 s=s.replace(a,b);print('PAGES',key,n)
ch('imports','import {chiangMaiDraftFaq}',
   "import {sumbaDraftFaq} from '@/data/travel/sumbaDraftFaq';\nimport {sumbaSchemaSafePhotos} from '@/data/travel/sumbaPremiumEditorial';\nimport {chiangMaiDraftFaq}")
ch('active slug',"'bangkok','chiang-mai','bali'",
   "'bangkok','chiang-mai','sumba','bali'")
ch('hotel metadata',"featureGuide.slug==='chiang-mai' ? (locale==='fr'?'Hôtels",
   "featureGuide.slug==='sumba' ? (locale==='fr'?'Hôtels de luxe à Sumba : quatre domaines entre falaises et plages':'Sumba Luxury Hotels: Four Distinct Island Retreats') : featureGuide.slug==='chiang-mai' ? (locale==='fr'?'Hôtels")
ch('city metadata',"featureGuide.slug==='chiang-mai' ? (locale==='fr'?'Chiang Mai",
   "featureGuide.slug==='sumba' ? (locale==='fr'?'Sumba : hôtels de luxe, lagon Weekuri et villages':'Sumba: Luxury Villas, Weekuri Lagoon and Villages') : featureGuide.slug==='chiang-mai' ? (locale==='fr'?'Chiang Mai")
ch('unique description',"featureGuide.slug==='chiang-mai' ? (locale==='fr'?'137 Pillars House",
   "featureGuide.slug==='sumba' ? (locale==='fr'?'NIHI, Cap Karoso, The Sanubari et Lelewatu : quatre adresses, cinq secteurs et une île brute, du lagon Weekuri à Nihiwatu.':'Explore NIHI, Cap Karoso, The Sanubari and Lelewatu on Sumba: wild beaches, Weekuri lagoon and island traditions.') : featureGuide.slug==='chiang-mai' ? (locale==='fr'?'137 Pillars House")
ch('openGraph',"featureGuide?.slug==='chiang-mai'||",
   "featureGuide?.slug==='sumba'||featureGuide?.slug==='chiang-mai'||")
ch('FAQ discriminator',"const isChiangMaiGuide =",
   "const isSumbaGuide = kohGuide?.slug==='sumba' && (locale==='fr'||locale==='en');\n  const isChiangMaiGuide =")
ch('rights whitelist',"kohGuide?.slug==='chiang-mai' ? chiangMaiSchemaSafePhotos",
   "kohGuide?.slug==='sumba' ? sumbaSchemaSafePhotos : kohGuide?.slug==='chiang-mai' ? chiangMaiSchemaSafePhotos")
ch('FAQ JSON-LD',"isChiangMaiGuide?chiangMaiDraftFaq",
   "isSumbaGuide?sumbaDraftFaq:isChiangMaiGuide?chiangMaiDraftFaq")
p.write_text(s);print('TravelPages updated',len(s))
