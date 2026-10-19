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
 used_urls={x.get("downloadUrl","").split("?")[0] for x in all_items if x.get("downloadUrl")}
 used_urls.update(x.get("rejectedSource","").split("?")[0] for x in all_items if x.get("rejectedSource"))
 digests={x["sha256"] for x in all_items if x.get("sha256")}
 changed=False
 for item in hotel:
  group=item["propertyKey"];key=item["key"]
  if group not in OFFICIAL:continue
  sources=OFFICIAL[group].get(key,[])
  options=[]
  if group=="mont-cervin-palace" and key=="view-1":
   options.extend(commons_images("Mont Cervin Palace Zermatt hotel 2019",("mont cervin palace",)))
  for source in sources:
   page,*want=source
   possibilities=page_images(page,want)
   print("HOTEL_SOURCE",group,key,page,"candidate links",len(possibilities),flush=True)
   options.extend(possibilities)
  changed|=candidate(item,options,used_urls,digests)
 for item in scenes:
  query,terms=SCENES[item["key"]]
  options=commons_images(query,terms)
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
 if changed:ROOT.write_text(json.dumps(m,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 print("ZERMATT_CANDIDATES",m["downloadedHotelCandidates"],"/12 hotel",m["downloadedDestinationCandidates"],"/9 scenes; approval unchanged.",flush=True)

if __name__=="__main__":main()
