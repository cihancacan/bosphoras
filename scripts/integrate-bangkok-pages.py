#!/usr/bin/env python3
"""Idempotent Bangkok #63 integration into the EXISTING luxury Travel components.
Strict text anchors ensure nothing else changes. GitHub Action builds nothing and
will commit only two files; no production or other vertical edits.
"""
from pathlib import Path
p=Path("components/travel/FeaturedCityGuide.tsx")
s=p.read_text()
def replace(tag,old,new,at_least=1):
 global s
 n=s.count(old)
 if n<at_least:raise RuntimeError(f"{tag}: missing expected anchor ({n})")
 s=s.replace(old,new)
 print("COMPONENT",tag,n)
replace("imports",
 "import {kohYaoNoiDraftFaq}",
 "import {bangkokDraftFaq} from '@/data/travel/bangkokDraftFaq';\nimport {bangkokHotelEditorial,bangkokAreaVisuals,confirmedBangkokAssets,bangkokPhotoLicenses} from '@/data/travel/bangkokPremiumEditorial';\nimport {kohYaoNoiDraftFaq}")
replace("hotel registry","={'koh-yao-noi':kohYaoNoiHotelEditorial",
 "={bangkok:bangkokHotelEditorial,'koh-yao-noi':kohYaoNoiHotelEditorial")
replace("hotel filter","const photos=city==='koh-yao-noi' ?",
 "const photos=city==='bangkok' ? entry.photos.filter(photo=>confirmedBangkokAssets.has(photo.src)) : city==='koh-yao-noi' ?")
replace("area source","const photo=city==='koh-yao-noi' ?",
 "const photo=city==='bangkok' ? bangkokAreaVisuals[index] : city==='koh-yao-noi' ?")
replace("area gate","if(!photo || ((city==='koh-yao-noi'",
 "if(!photo || ((city==='bangkok' && !confirmedBangkokAssets.has(photo.src)) || (city==='koh-yao-noi'")
replace("licence area","{city==='koh-yao-noi' && kohYaoNoiPhotoLicenses",
 """{city==='bangkok' && bangkokPhotoLicenses[photo.src] && <> · <a href={bangkokPhotoLicenses[photo.src].url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{bangkokPhotoLicenses[photo.src].name}</a></>}
      {city==='koh-yao-noi' && kohYaoNoiPhotoLicenses""")
replace("asset list","const destinationAssets=city.slug==='koh-yao-noi'?",
 "const destinationAssets=city.slug==='bangkok'?confirmedBangkokAssets:city.slug==='koh-yao-noi'?")
replace("hero overlay",'city.slug===\'koh-yao-noi\' ? <div className="absolute inset-0 bg-gradient',
 'city.slug===\'bangkok\' ? <div className="absolute inset-0 bg-gradient-to-r from-[#081c2e]/94 via-[#102f45]/61 to-[#1b3442]/10"/> : city.slug===\'koh-yao-noi\' ? <div className="absolute inset-0 bg-gradient')
replace("slug checks","city.slug==='koh-yao-noi'||",
 "city.slug==='bangkok'||city.slug==='koh-yao-noi'||")
replace("hero readability","city.slug === 'koh-yao-noi'||",
 "city.slug === 'bangkok'||city.slug === 'koh-yao-noi'||")
replace("render FAQs","(city.slug==='koh-yao-noi'?kohYaoNoiDraftFaq",
 "(city.slug==='bangkok'?bangkokDraftFaq:city.slug==='koh-yao-noi'?kohYaoNoiDraftFaq")
replace("landscape link",
 '{city.slug===\'koh-yao-noi\' && <a href="#panoramas-koh-yao-noi"',
 '{city.slug===\'bangkok\' && <a href="#panoramas-bangkok" className="shrink-0 hover:text-[#9e794a]">{fr?\'Panoramas\':\'Landscapes\'}</a>}\n        {city.slug===\'koh-yao-noi\' && <a href="#panoramas-koh-yao-noi"')
replace("hero credit",
 '{city.slug===\'krabi\' && hero && <p className="mt-4 text-xs leading-6 text-[#f3dfb9]">',
 '''{city.slug==='bangkok' && hero && <p className="mt-4 text-xs leading-6 text-[#f3dfb9]">{fr?'Photo : ':'Photograph: '}<a href={hero.sourcePage} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{hero.author}</a>{' · '}<a href={hero.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{hero.license}</a>{' · '}{fr?'WebP redimensionnée':'Resized WebP'}</p>}
        {city.slug==='krabi' && hero && <p className="mt-4 text-xs leading-6 text-[#f3dfb9]'>''')
panel="""    {city.slug==='bangkok' && <section id="panoramas-bangkok" className="scroll-mt-24 bg-[#e5ece8] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#8e7045]">{fr?'Bangkok · patrimoine et modernité':'Bangkok · heritage and city life'}</p>
        <h2 className="mt-4 max-w-4xl font-serif text-3xl leading-tight sm:text-5xl">{fr?'Le temple du fleuve et la métropole.':'River temples and a modern metropolis.'}</h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#4e626b]">{fr?'Wat Arun raconte la ville fluviale ; les tours contemporaines en offrent une autre lecture. Ces photos ne garantissent aucune vue depuis les chambres.':'Wat Arun reveals the river city, while contemporary towers show another face. These images do not guarantee hotel room views.'}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {([{key:'scene-2',frTitle:'Wat Arun · le Chao Phraya',enTitle:'Wat Arun · the Chao Phraya'},
             {key:'scene-9',frTitle:'Bangkok · tours contemporaines',enTitle:'Bangkok · skyline'}] as const).map(v=>{
              const photo=city.photos[v.key];
              return photo && confirmedBangkokAssets.has(photo.src) && <article key={v.key} className="bg-white p-4 shadow-sm sm:p-5">
                <CityPhoto photo={photo} locale={locale}/>
                <h3 className="mt-5 font-serif text-2xl text-[#19323e]">{fr?v.frTitle:v.enTitle}</h3>
              </article>;
          })}
        </div>
      </div>
    </section>}
"""
replace("panorama",
 '    {city.slug===\'koh-yao-noi\' && <section id="panoramas-koh-yao-noi"',
 panel+'    {city.slug===\'koh-yao-noi\' && <section id="panoramas-koh-yao-noi"')
p.write_text(s)
print("FeaturedCityGuide.tsx updated")

p=Path("components/travel/TravelPages.tsx")
s=p.read_text()
def change(tag,a,b):
 global s
 if a not in s:raise RuntimeError("TravelPages missing "+tag+" "+a[:70])
 n=s.count(a);s=s.replace(a,b);print("PAGES",tag,n)
change("imports","import {kohYaoNoiDraftFaq}",
 "import {bangkokDraftFaq} from '@/data/travel/bangkokDraftFaq';\nimport {bangkokSchemaSafePhotos} from '@/data/travel/bangkokPremiumEditorial';\nimport {kohYaoNoiDraftFaq}")
change("active destinations","'krabi','koh-yao-noi','bali'","'krabi','koh-yao-noi','bangkok','bali'")
change("hotel seo","featureGuide.slug==='koh-yao-noi' ? (locale==='fr'?'Hôtels",
 "featureGuide.slug==='bangkok' ? (locale==='fr'?'Hôtels de luxe à Bangkok : 4 adresses de caractère':'Bangkok Luxury Hotels: Four Distinctive Stays') : featureGuide.slug==='koh-yao-noi' ? (locale==='fr'?'Hôtels")
change("city seo","featureGuide.slug==='koh-yao-noi' ? (locale==='fr'?'Koh Yao Noi",
 "featureGuide.slug==='bangkok' ? (locale==='fr'?'Bangkok : hôtels de luxe, Chao Phraya et quartiers':'Bangkok: Luxury Hotels, Chao Phraya & Neighbourhoods') : featureGuide.slug==='koh-yao-noi' ? (locale==='fr'?'Koh Yao Noi")
change("description","featureGuide.slug==='koh-yao-noi' ? (locale==='fr'?'Six Senses",
 "featureGuide.slug==='bangkok' ? (locale==='fr'?'Mandarin Oriental, Capella, The Siam et Aman Nai Lert : quatre hôtels d’exception et cinq quartiers pour découvrir Bangkok autrement.':'Compare Mandarin Oriental, Capella, The Siam and Aman Nai Lert across five genuine Bangkok neighbourhoods, river travel and wellness.') : featureGuide.slug==='koh-yao-noi' ? (locale==='fr'?'Six Senses")
change("openGraph","featureGuide?.slug==='koh-yao-noi'||","featureGuide?.slug==='bangkok'||featureGuide?.slug==='koh-yao-noi'||")
change("faq bool","const isKohYaoNoiGuide =",
 "const isBangkokGuide = kohGuide?.slug==='bangkok' && (locale==='fr'||locale==='en');\n  const isKohYaoNoiGuide =")
change("jsonld image filter","kohGuide?.slug==='koh-yao-noi' ? kohYaoNoiSchemaSafePhotos",
 "kohGuide?.slug==='bangkok' ? bangkokSchemaSafePhotos : kohGuide?.slug==='koh-yao-noi' ? kohYaoNoiSchemaSafePhotos")
change("faq jsonld","isKohYaoNoiGuide?kohYaoNoiDraftFaq",
 "isBangkokGuide?bangkokDraftFaq:isKohYaoNoiGuide?kohYaoNoiDraftFaq")
p.write_text(s)
print("TravelPages.tsx updated")
