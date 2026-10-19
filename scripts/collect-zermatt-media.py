#!/usr/bin/env python3
"""Bosphoras Zermatt: collect image CANDIDATES from exact hotels and named landscape locations.

Never auto-approve or publish a photo. Existing reviewed images remain unchanged.
Commit of any candidate is handled separately by GitHub Actions; no Vercel build.
"""
from __future__ import annotations
import hashlib
import html
import json
import re
from io import BytesIO
from pathlib import Path
from urllib.parse import urljoin, urlparse
import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageOps

ROOT=Path("data/travel/zermattMediaCandidates.json")
OUTPUT=Path("public/images/travel/zermatt-premium")
S=requests.Session()
S.headers.update({"User-Agent":"BosphorasLuxuryStays/2.0 (photo source review, bosphoras.com)",
                  "Accept":"text/html,application/json,image/webp,image/jpeg,image/*;q=.8"})
COMMONS="https://commons.wikimedia.org/w/api.php"
SOURCE_DIAGNOSTICS={}

OFFICIAL={
 "the-omnia":{
  "view-1":[("https://the-omnia.com/en/","exterior","outside","zermatt","omnia")],
  "view-2":[("https://the-omnia.com/en/rooms/roof-suite","suite","roof","bedroom","interior")],
  "view-3":[("https://the-omnia.com/en/relax","pool","spa","wellness","water")],
 },
 "mont-cervin-palace":{
  "view-1":[("https://www.montcervinpalace.ch/en/gallery/","hotel","exterior","mont-cervin","facade"),
            ("https://www.montcervinpalace.ch/en/hotel/","palace","hotel","exterior"),
            ("https://www.europeexpress.com/hotels/mont-cervin-palace/","mont","cervin","exterior")],
  "view-2":[("https://www.montcervinpalace.ch/en/accommodation/castor-suite/","suite","room","castor","bed"),
            ("https://www.montcervinpalace.ch/en/accommodation/matterhorn-suite/","matterhorn","suite","bedroom"),
            ("https://www.montcervinpalace.ch/en/rooms/","room","suite","interior"),
            ("https://www.fivestaralliance.com/gallery/mont-cervin-palace-gallery-images","suite","room","bedroom")],
  "view-3":[("https://www.montcervinpalace.ch/en/spa-wellness/","pool","spa","indoor","wellness"),
            ("https://www.montcervinpalace.ch/en/gallery/","spa","pool","wellness"),
            ("https://www.fivestaralliance.com/gallery/mont-cervin-palace-gallery-images","indoor","pool","spa")],
 },
 "riffelalp":{
  "view-1":[("https://www.riffelalp.com/en/gallery/?L=1","riffelalp","hotel","resort","outdoors","exterior")],
  "view-2":[("https://www.riffelalp.com/en/rooms-and-suites/","room","suite","chambre","monte-rosa","bed")],
  "view-3":[("https://www.riffelalp.com/en/gallery/?L=1","spa","pool","wellness","swimming")],
 }
}
# Prefer exact hotel and location source photographs before generic searches.
# Any downloaded file is STILL blocked pending individual visual approval.
EXACT_HOTELS={
 "the-omnia/view-1":[("https://www.yonder.fr/sites/default/files/destinations/OMNIA_Outside_Summer_q%C2%A9Bruno%20Augsburger%2C%20THE%20OMNIA.jpg",
  "https://www.yonder.fr/hotels/chambres-avec-vues/zermatt-the-omnia-reinterpete-codes-montagne",
  "THE OMNIA daylit summer exterior · Bruno Augsburger")],
 "mont-cervin-palace/view-1":[("https://cdn2.indagare.com/i/41710/w3840","https://indagare.com/article/zermatt-guide",
  "Mont Cervin Palace main winter exterior with pool"),
  ("https://pics.tui.com/pics/pics1600x1200/tui/7/748a3e47d24de3fb1d75c875389b1039_ocpprod.jpg",
  "https://www.tui.com/hotels/mont-cervin-palace-26481/hotelinformation/","Mont Cervin Palace winter exterior")],
}
# Additional publisher-identified resort photographs with distinct subjects:
EXACT_HOTELS.update({
 "mont-cervin-palace/view-2":[
  ("https://assets.cntraveller.in/photos/60ba066bee63ec1fe6ee8308/master/w_1600%2Cc_limit/3.Mont-Cervin-Palace.jpg",
   "https://www.cntraveller.in/story/your-guide-to-switzerlands-prettiest-ski-resort/",
   "Mont Cervin Palace panoramic Matterhorn Duplex Suite living room"),
  ("https://www.thehotelguru.com/_images/2f/4b/2f4b8d0aa386d63f44a0f043ef4b6881/s1654x900.jpg",
   "https://www.thehotelguru.com/hotel/mont-cervin-palace-zermatt",
   "Mont Cervin Palace suite living area with Matterhorn outlook")],
 "mont-cervin-palace/view-3":[
  ("https://cdn.oxfordski.com/media/72071/pool-resized-2.png?quality=85&scale=downscaleonly&width=1500",
   "https://www.oxfordski.com/luxury-ski-chalets-hotels/switzerland/zermatt/mont-cervin-palace/",
   "Mont Cervin Palace authentic indoor spa swimming pool with arched bridge"),
  ("https://www.redsavannah.com/-/media/countries/switzerland/accommodation/mont-cervin-palace/mont-cervin-palace-switzerland-pool.jpg?cropregion=36%2C374%2C1800%2C1141&h=610&hash=AD1FB8454B7F40EE8D8394F1970115E2&udi=1&w=1400",
   "https://www.redsavannah.com/europe/switzerland/hotels/mont-cervin-palace",
   "Mont Cervin Palace indoor pool with wooden beams and natural light")],
})
EXACT_SCENES={
 "scene-9":[
  ("https://theplanetd.com/images/5-lakes-hike-zermatt-Switzerland-Stellisee-Lake-1536x1024.jpg",
   "https://theplanetd.com/5-lakes-hike-zermatt/",
   "Stellisee reflecting Matterhorn in warm sunrise light, travel photographer")
 ],
}
# Precisely described Zermatt village and Matterhorn scenes.
EXACT_SCENES.update({
 "scene-2":[
  ("https://i0.wp.com/onholidaysagain.com/wp-content/uploads/2020/06/Balade-%C3%A0-Zermatt-et-vue-sur-le-Cervin-scaled.jpg?resize=1536%2C1002&ssl=1",
   "https://onholidaysagain.com/europe/suisse/week-end-a-zermatt-que-faire/",
   "Zermatt historic timber chalets and the Matterhorn in sunlight")
 ],
 "scene-3":[
  ("https://www.derbyzermatt.ch/assets/Images/64846748-E13E-44BD-8B6D-FA207A874046-v2__FocusFillWzY0MCw1MTIsIngiLDY0XQ.jpeg",
   "https://www.derbyzermatt.ch/",
   "Bahnhofstrasse in Zermatt illuminated at snowy winter twilight")
 ],
})
EXACT_SCENES.update({
 "scene-5":[("https://commons.wikimedia.org/wiki/Special:Redirect/file/Panorama_vom_Gornergrat-Zermatt.jpg?width=1600",
  "https://commons.wikimedia.org/wiki/File:Panorama_vom_Gornergrat-Zermatt.jpg",
  "Gornergrat panorama over Monte Rosa mountain ridge")],
 "scene-6":[("https://commons.wikimedia.org/wiki/Special:Redirect/file/3809_-_Zermatt_-_View_from_Gornergratbahn.JPG?width=1600",
  "https://commons.wikimedia.org/wiki/File:3809_-_Zermatt_-_View_from_Gornergratbahn.JPG",
  "Alpine view from Gornergratbahn near Riffelberg")],
})
EXACT_COMMONS={
 "scene-3":[("File:4022 - Zermatt - Matterhorn from Bahnhofstrasse.JPG",
             "The Matterhorn viewed from Bahnhofstrasse in Zermatt")],
 "scene-6":[("File:Gornergrat panorama.jpg",
             "Gornergrat glacier and alpine summit panorama, 2021")],
 "scene-5":[("File:Grenzgletscher & Gornergletscher.JPG",
             "Gorner and Grenz glaciers viewed from the Gornergrat summit")],
 "scene-6":[("File:3873 - View from Gornergrat.JPG",
             "Bright true Swiss alpine panorama from Gornergrat")],
 "scene-7":[("File:Matterhorn Glacier Paradise, Theodulglacier - panoramio.jpg",
             "Matterhorn Glacier Paradise and Theodul Glacier summit panorama")],
 "scene-9":[("File:Sunrise on the Matterhorn.jpg",
             "Orange first light on the Matterhorn reflected in Stellisee, 2018")],
}
SCENES={
 "scene-1":("Riffelsee Matterhorn lake Zermatt",("riffelsee",)),
 "scene-2":("Zermatt village old town Matterhorn panoramic",("zermatt",)),
 "scene-3":("Zermatt Bahnhofstrasse old village chalets winter",("zermatt",)),
 "scene-4":("Sunnegga Zermatt mountain panorama Matterhorn",("sunnegga",)),
 "scene-5":("Gornergrat glacier mountain 2024 Zermatt",("gornergrat",)),
 "scene-6":("Gornergrat Riffelberg view Matterhorn Zermatt",("riffelberg","gornergrat")),
 "scene-7":("Klein Matterhorn Glacier Paradise mountain panorama",("klein matterhorn","glacier paradise")),
 "scene-8":("Findeln Zermatt old chalets Matterhorn",("findeln",)),
 "scene-9":("Stellisee Matterhorn alpine reflection",("stellisee",)),
}
BAD=("portrait","selfie","advert","map","poster","logo","sign","menu","train","station",
     "ticket","staff","brochure","chef","tram","screenshot","restaurant menu","infographic")

def fetch(url,**kwargs):
 try:
  r=S.get(url,timeout=18,**kwargs);r.raise_for_status()
  if len(r.content)>15_000_000:return None
  return r
 except requests.RequestException as exc:
  print("SOURCE_SKIP",url[:85],str(exc)[:100],flush=True)
  return None

def page_images(url,want):
 result=[]
 r=fetch(url)
 if r is None:return result
 soup=BeautifulSoup(r.text,"html.parser")
 elements=soup.select("img,source,a[href],meta[property='og:image'],meta[name='twitter:image'],picture")
 if "montcervinpalace.ch" in url:
  tagged=[{"tag":t.name,"src":t.get("src"),"srcset":t.get("srcset"),"dataSrc":t.get("data-src"),
           "dataBackground":t.get("data-bg"),"href":t.get("href"),"alt":t.get("alt"),
           "style":t.get("style")} for t in soup.select("img,source,picture,video,figure")[:50]]
  raw_urls=list(dict.fromkeys(re.findall(r"""(?:https?:)?//[^"'s<>]{2,190}(?:webp|jpg|jpeg|png|avif)[^"'s<>]*""",r.text,re.I)))[:60]
  SOURCE_DIAGNOSTICS[url]={"bytes":len(r.text),"media_tags":tagged,"raw_urls":raw_urls,
                           "script_count":len(soup.find_all("script"))}
 for t in elements:
  lab=" ".join(str(t.get(k) or "") for k in ("alt","title","aria-label","data-caption","data-name"))
  for k in ("src","srcset","data-src","data-srcset","data-lazy-src","data-original","href","content"):
   raw=html.unescape(str(t.get(k) or ""))
   for chunk in re.split(r",\s*(?=https?://|/)",raw):
    source=chunk.strip().split(" ")[0].strip("'\"")
    if not source:continue
    u=urljoin(url,source);fn=urlparse(u).path.lower()
    if not u.startswith("https://") or not re.search(r"\.(jpe?g|png|webp|avif)$",fn):continue
    clue=(u+" "+lab).lower()
    if any(b in clue for b in BAD):continue
    score=sum(w in clue for w in want)*4
    if score==0 and not t.name in ("img","source"):continue
    result.append((score,u,url,(lab or fn.rsplit("/",1)[-1]),"Official hotel page / image"))
 # Background images embedded by CMS/JSON not present as HTML <img>
 for match in re.finditer(r"""(?:https?:)?(?:\\?/\\?/|//)[^"'\s<>\\]{5,230}\.(?:jpg|jpeg|png|webp)(?:\?[^"'\s<>]*)?""",r.text,re.I):
  raw=html.unescape(match.group(0)).replace("\\/","/")
  u="https:"+raw if raw.startswith("//") else raw
  if not u.startswith("https://"):continue
  clue=u.lower()
  if any(b in clue for b in BAD):continue
  result.append((sum(w in clue for w in want)*4,u,url,urlparse(u).path.rsplit("/",1)[-1],"Official CMS image link"))
 # Deterministic, distinguish best matching files, prefer property original photographs
 return sorted(set(result),key=lambda x:(-x[0],x[1]))

def commons_images(search,terms):
 r=fetch(COMMONS,params={"action":"query","generator":"search","gsrsearch":search,
  "gsrnamespace":6,"gsrlimit":40,"prop":"imageinfo","iiprop":"url|extmetadata",
  "iiurlwidth":1700,"format":"json"})
 if not r:return []
 try:items=r.json().get("query",{}).get("pages",{}).values()
 except (ValueError,TypeError):return []
 found=[]
 for x in items:
  title=x.get("title","");info=(x.get("imageinfo") or [{}])[0];md=info.get("extmetadata") or {}
  description=BeautifulSoup(md.get("ImageDescription",{}).get("value",""),"html.parser").get_text(" ",strip=True)
  searchable=(title+" "+description).casefold()
  if not any(word.casefold() in searchable for word in terms):continue
  if any(w in searchable for w in BAD):continue
  url=info.get("thumburl") or info.get("url")
  if not url or not re.search(r"\.(jpe?g|png|webp)(?:$|[?])",url,re.I):continue
  author=BeautifulSoup(md.get("Artist",{}).get("value",""),"html.parser").get_text(" ",strip=True)
  license=md.get("LicenseShortName",{}).get("value","unverified")
  source="https://commons.wikimedia.org/wiki/"+title.replace(" ","_")
  found.append((sum(word.casefold() in searchable for word in terms)*3,url,source,title,
                f"{author or 'Commons author'} · {license}"))
 return sorted(found,key=lambda x:(-x[0],x[2]))

def exact_commons(title,caption):
 r=fetch(COMMONS,params={"action":"query","titles":title,"prop":"imageinfo",
                           "iiprop":"url|extmetadata","iiurlwidth":1700,"format":"json"})
 if not r:return []
 try:
  pages=list(r.json()["query"]["pages"].values())
  item=pages[0]["imageinfo"][0]
  url=item.get("thumburl") or item.get("url")
  md=item.get("extmetadata") or {}
  artist=BeautifulSoup(md.get("Artist",{}).get("value",""),"html.parser").get_text(" ",strip=True)
  lic=md.get("LicenseShortName",{}).get("value","photographer attribution required")
  page="https://commons.wikimedia.org/wiki/"+title.replace(" ","_")
  return [(110,url,page,caption,f"{artist} | {lic}")]
 except (KeyError,IndexError,TypeError,ValueError):
  return []

def candidate(item, options, used_urls, digests):
 if item.get("visuallyVerified"):return False
 if item.get("status")=="candidate_needs_visual_review" and item.get("localPath"):return False
 for score,url,page,title,credit in options[:70]:
  plain=url.split("?")[0]
  if plain in used_urls:continue
  r=fetch(url)
  if not r:continue
  try:
   with Image.open(BytesIO(r.content)) as original:
    image=ImageOps.exif_transpose(original).convert("RGB")
    size=image.size
    if image.width<960 or image.height<520 or not 1.1<image.width/image.height<3.5:continue
    image.thumbnail((1700,1200),Image.Resampling.LANCZOS)
    output=BytesIO();image.save(output,"WEBP",quality=83,method=5)
    data=output.getvalue()
  except (OSError,ValueError):continue
  digest=hashlib.sha256(data).hexdigest()
  if digest in digests or len(data)<24000:continue
  group=item.get("propertyKey") or "destination"
  file=OUTPUT/group/(item["key"]+".webp")
  file.parent.mkdir(parents=True,exist_ok=True)
  file.write_bytes(data)
  item.update({"status":"candidate_needs_visual_review","visuallyVerified":False,
   "commercialRightsCleared":False,"visualQaWarning":"New image candidate; inspect composition, location, season, uniqueness and source attribution before publishing.",
   "localPath":"/"+file.as_posix().removeprefix("public/"),"sourcePage":page,
   "downloadUrl":url,"candidateContext":title,"credit":credit,
   "sha256":digest,"bytes":len(data),"originalSize":list(size),"outputSize":list(image.size)})
  used_urls.add(plain);digests.add(digest)
  print("RECOVERED",group,item["key"],page,url,flush=True)
  return True
 print("UNFILLED",item.get("propertyKey") or "destination",item["key"],flush=True)
 return False

def main():
 m=json.loads(ROOT.read_text(encoding="utf8"))
 hotel=m["hotels"];scenes=m["destinationScenes"]
 all_items=hotel+scenes
 used_urls={url.split("?")[0]
  for x in all_items for url in (x.get("downloadUrl"),x.get("rejectedSource"))
  if isinstance(url,str) and url.startswith("https://")}
 used_urls.update(x.get("rejectedSource","").split("?")[0] for x in all_items if x.get("rejectedSource"))
 digests={x["sha256"] for x in all_items if x.get("sha256")}
 changed=False
 for item in hotel:
  if item.get("visuallyVerified") or (item.get("status")=="candidate_needs_visual_review" and item.get("localPath")):continue
  group=item["propertyKey"];key=item["key"]
  if group not in OFFICIAL:continue
  sources=OFFICIAL[group].get(key,[])
  options=[(100,url,source,caption,"Published hotel photograph; identity and rights still QA gated") for url,source,caption in EXACT_HOTELS.get(group+"/"+key,[])]
  if options and candidate(item,options,used_urls,digests):
   changed=True
   continue
  if group=="mont-cervin-palace" and key=="view-1":
   options.extend(commons_images("Mont Cervin Palace Zermatt hotel 2019",("mont cervin palace",)))
  for source in sources:
   page,*want=source
   possibilities=page_images(page,want)
   print("HOTEL_SOURCE",group,key,page,"candidate links",len(possibilities),flush=True)
   options.extend(possibilities)
  changed|=candidate(item,options,used_urls,digests)
 for item in scenes:
  if item.get("visuallyVerified") or (item.get("status")=="candidate_needs_visual_review" and item.get("localPath")):continue
  query,terms=SCENES[item["key"]]
  options=[]
  for filename,caption in EXACT_COMMONS.get(item["key"],[]):
   options.extend(exact_commons(filename,caption))
  options.extend((100,url,source,caption,"Named Commons landscape; still QA gated") for url,source,caption in EXACT_SCENES.get(item["key"],[]))
  if options and candidate(item,options,used_urls,digests):
   changed=True
   continue
  options.extend(commons_images(query,terms))
  if not options:
   fallback={
    "scene-2":("Zermatt Swiss old town Matterhorn",("zermatt",)),
    "scene-3":("Zermatt village main street 2023",("zermatt",)),
    "scene-5":("Gornergrat Gornergletscher glacier Swiss Alps",("gornergrat",)),
    "scene-7":("Klein Matterhorn mountain Alps",("klein matterhorn",)),
    "scene-9":("Stellisee Matterhorn reflection Valais",("stellisee",))
   }.get(item["key"])
   if fallback:options=commons_images(*fallback)
  changed|=candidate(item,options,used_urls,digests)
 m["downloadedHotelCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in hotel)
 m["downloadedDestinationCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in scenes)
 m["visuallyVerified"]=False
 m["approvedForCommercialPublication"]=False
 if SOURCE_DIAGNOSTICS:
  p=Path("docs/travel-zermatt-image-source-debug.json")
  p.parent.mkdir(parents=True,exist_ok=True)
  p.write_text(json.dumps(SOURCE_DIAGNOSTICS,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 if changed:ROOT.write_text(json.dumps(m,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 print("ZERMATT_CANDIDATES",m["downloadedHotelCandidates"],"/12 hotel",m["downloadedDestinationCandidates"],"/9 scenes; approval unchanged.",flush=True)

if __name__=="__main__":main()
