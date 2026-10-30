#!/usr/bin/env python3
"""Chiang Mai #64 — conservative integration into established shared Travel pages.
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
change('import FAQ','import {bangkokDraftFaq}',
 "import {chiangMaiDraftFaq} from '@/data/travel/chiangMaiDraftFaq';\nimport {chiangMaiHotelEditorial,chiangMaiAreaVisuals,confirmedChiangMaiAssets,chiangMaiPhotoLicenses} from '@/data/travel/chiangMaiPremiumEditorial';\nimport {bangkokDraftFaq}")
change('hotel registry','={bangkok:bangkokHotelEditorial',
 "={'chiang-mai':chiangMaiHotelEditorial,bangkok:bangkokHotelEditorial")
change('hotel assets',"const photos=city==='bangkok' ?",
 "const photos=city==='chiang-mai' ? entry.photos.filter(photo=>confirmedChiangMaiAssets.has(photo.src)) : city==='bangkok' ?")
change('area scenes',"const photo=city==='bangkok' ?",
 "const photo=city==='chiang-mai' ? chiangMaiAreaVisuals[index] : city==='bangkok' ?")
change('area rights',"if(!photo || ((city==='bangkok'",
 "if(!photo || ((city==='chiang-mai' && !confirmedChiangMaiAssets.has(photo.src)) || (city==='bangkok'")
change('area photo attribution',"{city==='bangkok' && bangkokPhotoLicenses",
 """{city==='chiang-mai' && chiangMaiPhotoLicenses[photo.src] && <> · <a href={chiangMaiPhotoLicenses[photo.src].url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{chiangMaiPhotoLicenses[photo.src].name}</a></>}
      {city==='bangkok' && bangkokPhotoLicenses""")
change('destination asset set',"const destinationAssets=city.slug==='bangkok'?",
 "const destinationAssets=city.slug==='chiang-mai'?confirmedChiangMaiAssets:city.slug==='bangkok'?")
change('hero contrast',"""city.slug==='bangkok' ? <div className="absolute inset-0 bg-gradient""",
 """city.slug==='chiang-mai' ? <div className="absolute inset-0 bg-gradient-to-r from-[#09252b]/91 via-[#13483c]/55 to-[#174738]/8"/> : city.slug==='bangkok' ? <div className="absolute inset-0 bg-gradient""")
change('all compact slug checks',"city.slug==='bangkok'||","city.slug==='chiang-mai'||city.slug==='bangkok'||")
change('all spaced slug checks',"city.slug === 'bangkok'||","city.slug === 'chiang-mai'||city.slug === 'bangkok'||")
change('FAQ selection',"(city.slug==='bangkok'?bangkokDraftFaq",
 "(city.slug==='chiang-mai'?chiangMaiDraftFaq:city.slug==='bangkok'?bangkokDraftFaq")
change('landscape nav','{city.slug===\'bangkok\' && <a href="#panoramas-bangkok"',
 '{city.slug===\'chiang-mai\' && <a href="#panoramas-chiang-mai" className="shrink-0 hover:text-[#9e794a]">{fr?\'Panoramas\':\'Landscapes\'}</a>}\n        {city.slug===\'bangkok\' && <a href="#panoramas-bangkok"')
change('attribution hero',
 '{city.slug===\'bangkok\' && hero && <p className="mt-4 text-xs leading-6 text-[#f3dfb9]">',
 '''{city.slug==='chiang-mai' && hero && <p className="mt-4 text-xs leading-6 text-[#f3dfb9]">{fr?'Photo : ':'Photograph: '}<a href={hero.sourcePage} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{hero.author}</a>{' · '}<a href={hero.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{hero.license}</a>{' · '}{fr?'WebP redimensionnée':'Resized WebP'}</p>}
        {city.slug==='bangkok' && hero && <p className="mt-4 text-xs leading-6 text-[#f3dfb9]'>''')
panel="""    {city.slug==='chiang-mai' && <section id="panoramas-chiang-mai" className="scroll-mt-24 bg-[#e5ece8] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#8e7045]">{fr?'Chiang Mai · temples et paysages du Nord':'Chiang Mai · northern landscapes and temples'}</p>
        <h2 className="mt-4 max-w-4xl font-serif text-3xl leading-tight sm:text-5xl">{fr?'De l’or des temples au vert des rizières.':'From golden temples to rice-field greens.'}</h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#4e626b]">{fr?'Un temple sur Doi Suthep, les rizières de la région et une autre lecture du Nord thaïlandais. Ce sont des lieux réels, pas des vues garanties depuis chaque suite.':'Doi Suthep and rice fields near Chiang Mai reveal Northern Thailand beyond hotel walls. These scenes are real, not a promise of the view from a booked suite.'}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {([{key:'scene-3',frTitle:'Wat Phra Singh · l’héritage Lanna',enTitle:'Wat Phra Singh · Lanna heritage'},
             {key:'scene-7',frTitle:'Rizières · le rythme de la région',enTitle:'Rice fields · the region’s slower rhythm'}] as const).map(v=>{
              const pic=city.photos[v.key];
              return pic && confirmedChiangMaiAssets.has(pic.src) && <article key={v.key} className="bg-white p-4 shadow-sm sm:p-5">
                <CityPhoto photo={pic} locale={locale}/>
                <h3 className="mt-5 font-serif text-2xl text-[#19323e]">{fr?v.frTitle:v.enTitle}</h3>
              </article>;
          })}
        </div>
      </div>
    </section>}
"""
change('dedicated landscape panel',
 '    {city.slug===\'bangkok\' && <section id="panoramas-bangkok"',
 panel+'    {city.slug===\'bangkok\' && <section id="panoramas-bangkok"')
# The original Bangkok script introduced a malformed quoted className on another branch;
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
ch('imports','import {bangkokDraftFaq}',
   "import {chiangMaiDraftFaq} from '@/data/travel/chiangMaiDraftFaq';\nimport {chiangMaiSchemaSafePhotos} from '@/data/travel/chiangMaiPremiumEditorial';\nimport {bangkokDraftFaq}")
ch('active slug',"'krabi','koh-yao-noi','bangkok','bali'",
   "'krabi','koh-yao-noi','bangkok','chiang-mai','bali'")
ch('hotel metadata',"featureGuide.slug==='bangkok' ? (locale==='fr'?'Hôtels",
   "featureGuide.slug==='chiang-mai' ? (locale==='fr'?'Hôtels de luxe à Chiang Mai : quatre refuges Lanna':'Chiang Mai Luxury Hotels: Four Distinct Lanna Retreats') : featureGuide.slug==='bangkok' ? (locale==='fr'?'Hôtels")
ch('city metadata',"featureGuide.slug==='bangkok' ? (locale==='fr'?'Bangkok",
   "featureGuide.slug==='chiang-mai' ? (locale==='fr'?'Chiang Mai : hôtels de luxe, temples et rizières':'Chiang Mai: Luxury Hotels, Temples and Rice Paddies') : featureGuide.slug==='bangkok' ? (locale==='fr'?'Bangkok")
ch('unique description',"featureGuide.slug==='bangkok' ? (locale==='fr'?'Mandarin Oriental",
   "featureGuide.slug==='chiang-mai' ? (locale==='fr'?'137 Pillars House, Anantara, Raya Heritage et Four Seasons : quatre maisons pour découvrir le Nord, du Ping aux rizières de Mae Rim.':'Explore 137 Pillars, Anantara, Raya Heritage and Four Seasons through Chiang Mai’s river, temples and Mae Rim rice fields.') : featureGuide.slug==='bangkok' ? (locale==='fr'?'Mandarin Oriental")
ch('openGraph',"featureGuide?.slug==='bangkok'||",
   "featureGuide?.slug==='chiang-mai'||featureGuide?.slug==='bangkok'||")
ch('FAQ discriminator',"const isBangkokGuide =",
   "const isChiangMaiGuide = kohGuide?.slug==='chiang-mai' && (locale==='fr'||locale==='en');\n  const isBangkokGuide =")
ch('rights whitelist',"kohGuide?.slug==='bangkok' ? bangkokSchemaSafePhotos",
   "kohGuide?.slug==='chiang-mai' ? chiangMaiSchemaSafePhotos : kohGuide?.slug==='bangkok' ? bangkokSchemaSafePhotos")
ch('FAQ JSON-LD',"isBangkokGuide?bangkokDraftFaq",
   "isChiangMaiGuide?chiangMaiDraftFaq:isBangkokGuide?bangkokDraftFaq")
p.write_text(s);print('TravelPages updated',len(s))
