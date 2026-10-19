#!/usr/bin/env python3
"""Bosphoras Luxury Stays Monaco media acquisition.

Extract original image candidates from exact hotel pages and geographically
specific Commons files. Never label a new photo approved or publish it.
Human image review, duplication, season, attribution and authenticity are mandatory.
"""
from __future__ import annotations
import hashlib, html, json, re
from urllib.parse import quote
from io import BytesIO
from pathlib import Path
from urllib.parse import urljoin,urlparse
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps

MANIFEST=Path("data/travel/monacoMediaCandidates.json")
OUT=Path("public/images/travel/monaco-premium")
COMMONS="https://commons.wikimedia.org/w/api.php"
S=requests.Session()
S.headers.update({"User-Agent":"BosphorasLuxuryStays/2.0 (source attribution, bosphoras.com)",
                  "Accept":"text/html,application/json,image/avif,image/webp,image/jpeg,image/*;q=0.8"})
HOTELS={
 "hotel-de-paris":{
  "view-1":[("https://www.montecarlosbm.com/en/hotel-monaco/hotel-paris-monte-carlo",["hotel","paris","facade","exterior","casino"])],
  "view-2":[("https://www.montecarlosbm.com/en/hotel-monaco/hotel-paris-monte-carlo/accommodation",["suite","room","terrace"])],
  "view-3":[("https://www.montecarlosbm.com/en/restaurant-monaco/le-bar-americain",["bar","americain","interior","ambience"]),("https://www.montecarlosbm.com/en/hotel-monaco/hotel-paris-monte-carlo",["american","bar","louis","dining"])],
 },
 "hotel-hermitage":{
  "view-1":[("https://www.montecarlosbm.com/en/hotel-monaco/hotel-hermitage-monte-carlo",["hermitage","facade","exterior","front"])],
  "view-2":[("https://www.montecarlosbm.com/en/hotel-monaco/hotel-hermitage-monte-carlo/accommodation",["suite","room","diamond","terrace"])],
  "view-3":[("https://www.montecarlosbm.com/en/hotel-monaco/hotel-hermitage-monte-carlo",["winter","garden","verriere","jardin","eiffel"]),("https://www.montecarlosbm.com/en/hotel-monaco/hotel-hermitage-monte-carlo/le-jardin-d-hiver",["verriere","winter","jardin","garden"])],
 },
 "hotel-metropole":{
  "view-1":[("https://www.metropole.com/",["metropole","exterior","courtyard","facade","entrance"]),("https://www.metropole.com/article/the-art-of-a-grand-entrance",["entrance","facade","courtyard"])],
  "view-2":[("https://www.metropole.com/rooms-suites/carre-d-or-suite",["suite","carre","lounge","interior","room"]),("https://www.metropole.com/rooms-suites/deluxe-suite",["suite","living","interior"]),("https://www.metropole.com/rooms-suites",["suite","deluxe","room","bedroom","carré"])],
  "view-3":[("https://www.metropole.com/odyssey-pool-by-karl-lagerfeld",["pool","odyssey","terrace","mural"]),("https://www.metropole.com/",["odyssey","pool","guerlain","spa"])],
 },
 "monte-carlo-bay":{
  "view-1":[("https://www.montecarlosbm.com/en/bar-nightclub-monaco/lhippocampe-bar-lagon",["lagoon","lagon","pool","sand"]),("https://www.montecarlosbm.com/en/hotel-monaco/monte-carlo-bay-hotel-resort",["lagoon","lagon","pool","garden"])],
  "view-2":[("https://www.montecarlosbm.com/en/hotel-monaco/monte-carlo-bay-hotel-resort/accommodation",["suite","room","bedroom","balcony","sea"])],
  "view-3":[("https://www.montecarlosbm.com/en/hotel-monaco/monte-carlo-bay-hotel-resort",["garden","blue","bay","restaurant","marcel"])],
 }}
LANDSCAPES={
"scene-1":("Place du Casino Monte Carlo Monaco architecture",("casino","monaco")),
"scene-2":("Port Hercule Monaco harbor aerial yachts",("hercule","monaco")),
"scene-3":("Palais princier Monaco Ville rock panorama",("palais","monaco")),
"scene-4":("Larvotto beach Monaco Mediterranean promenade",("larvotto",)),
"scene-5":("Port de Fontvieille Monaco panoramic harbour",("fontvieille",)),
"scene-6":("Hôtel Hermitage Monte Carlo gardens exterior",("hermitage","monaco")),
"scene-7":("Jardin Japonais Monaco landscape",("japonais","monaco")),
"scene-8":("Oceanographic museum Monaco sea cliff daylight",("oceanographique","monaco")),
"scene-9":("Mareterra Monaco new waterfront park 2025",("mareterra",))
}
COMMONS_EXACT={
 "scene-1":"Casino de Monte-Carlo, Monaco (53968726718).jpg",
 "scene-2":"Monaco Rocher de Monaco Vue sur le Port Hercule 30.jpg",
 "scene-3":"Princely Palace of Monaco.JPG",
 "scene-4":"Monaco03.JPG",
 "scene-5":"Monaco Port de Fontvieille 25.jpg",
 "scene-7":"Japanese garden Monaco (pond and bridge).jpg",
 "scene-8":"Musée Océanographique de Monaco cliff view.jpg",
 "scene-9":"Mareterra drone shot in 2024.png"
}
BLOCK=("logo","advert","banner","brochure","map","poster","screenshot","face portrait",
       "wikipedia-logo","svg","icon","watermark","grand prix car","football","yacht interior")

def fetch(url,**kw):
 try:
  r=S.get(url,timeout=18,**kw);r.raise_for_status()
  if len(r.content)>17000000:return None
  return r
 except requests.RequestException as e:
  print("FETCH_FAIL",url[:115],str(e)[:100],flush=True);return None

def hotels_from_page(url,hints):
 r=fetch(url)
 if r is None:return []
 soup=BeautifulSoup(r.text,"html.parser")
 possibilities=[]
 for el in soup.select("img,source,a[href],meta[property='og:image'],meta[name='twitter:image'],picture"):
  label=" ".join(str(el.get(k) or "") for k in ("alt","title","aria-label","data-caption","data-name"))
  for key in ("src","data-src","srcset","data-srcset","data-lazy-src","data-original","href","content"):
   raw=html.unescape(str(el.get(key) or "")).replace("\\/","/")
   for candidate in re.split(r",\s*(?=https?://|/)",raw):
    src=candidate.strip().split(" ")[0].strip("'\"")
    if not src:continue
    target=urljoin(url,src)
    if not target.startswith("https://"):continue
    txt=(target+" "+label).casefold()
    if any(word in txt for word in BLOCK):continue
    if not re.search(r"\.(?:jpe?g|webp|png|avif)(?:$|[?])",target,re.I):continue
    score=sum(h in txt for h in hints)
    if score>0:
     possibilities.append((score,target,url,label or "Hotel-owned photo, exact subject needs visual review","Official hotel photo"))
 # Many hotel galleries store responsive image URLs in JSON script content.
 for match in re.findall(r"""https?:[^"'<> \n\r]{18,260}?\.(?:jpg|jpeg|webp|png)(?:\?[^"'<> \n\r]{0,95})?""",r.text,re.I):
  target=html.unescape(match).replace("\\/","/")
  text=target.casefold()
  if any(b in text for b in BLOCK):continue
  score=sum(h in text for h in hints)
  if score>0:possibilities.append((score,target,url,"Official CMS image matched by source context","Official hotel CMS"))
 return sorted(set(possibilities),key=lambda x:(-x[0],x[1]))

def commons(query,terms):
 r=fetch(COMMONS,params={"action":"query","generator":"search","gsrsearch":query,
 "gsrnamespace":6,"gsrlimit":50,"prop":"imageinfo","iiprop":"url|extmetadata",
 "iiurlwidth":1800,"format":"json"})
 if not r:return []
 try:pages=r.json().get("query",{}).get("pages",{}).values()
 except (ValueError,TypeError):return []
 choices=[]
 for page in pages:
  title=page.get("title","")
  info=(page.get("imageinfo") or [{}])[0]
  meta=info.get("extmetadata") or {}
  desc=BeautifulSoup(meta.get("ImageDescription",{}).get("value",""),"html.parser").get_text(" ",strip=True)
  hay=(title+" "+desc).casefold()
  if not any(t in hay for t in terms) or any(b in hay for b in BLOCK):continue
  u=info.get("thumburl") or info.get("url")
  if not u or not re.search(r"\.(jpe?g|png|webp)(?:$|[?])",u,re.I):continue
  author=BeautifulSoup(meta.get("Artist",{}).get("value",""),"html.parser").get_text(" ",strip=True)
  lic=meta.get("LicenseShortName",{}).get("value","license to inspect")
  source="https://commons.wikimedia.org/wiki/"+title.replace(" ","_")
  choices.append((sum(t in hay for t in terms)*3,u,source,title,f"{author or 'Commons contributor'} · {lic}"))
 return sorted(choices,key=lambda x:(-x[0],x[2]))

def commons_exact(title):
 full="File:"+title
 r=fetch(COMMONS,params={"action":"query","titles":full,"prop":"imageinfo",
     "iiprop":"url|extmetadata","iiurlwidth":1800,"format":"json"})
 if not r:return []
 try:items=r.json().get("query",{}).get("pages",{}).values()
 except (ValueError,TypeError):return []
 out=[]
 for p in items:
  if "missing" in p:continue
  info=(p.get("imageinfo") or [{}])[0];meta=info.get("extmetadata") or {}
  url=info.get("thumburl") or info.get("url")
  if not url:continue
  author=BeautifulSoup(meta.get("Artist",{}).get("value",""),"html.parser").get_text(" ",strip=True)
  lic=meta.get("LicenseShortName",{}).get("value","license to inspect")
  source="https://commons.wikimedia.org/wiki/"+full.replace(" ","_")
  out.append((40,url,source,title,(author or "Commons author")+" · "+lic))
 return out

DIRECT_WIKIMEDIA={
  "scene-7":"Japanese garden Monaco (pond and bridge).jpg",
  "scene-8":"Musée Océanographique de Monaco cliff view.jpg",
  "scene-9":"Mareterra drone shot in 2024.png",
}
def direct_wikimedia(title):
  filename=title.replace(" ","_")
  digest=hashlib.md5(filename.encode("utf-8")).hexdigest()
  encoded=quote(filename,safe="()'-_.")
  thumb="https://upload.wikimedia.org/wikipedia/commons/thumb/"+digest[0]+"/"+digest[:2]+"/"+encoded+"/1920px-"+encoded
  link="https://commons.wikimedia.org/wiki/File:"+encoded
  return [(45,thumb,link,title,"Wikimedia Commons photo · attribution and license to inspect on linked file page")]

def content_hash(img):
 small=ImageOps.grayscale(img).resize((9,8),Image.Resampling.LANCZOS)
 px=list(small.getdata());return "".join("1" if px[y*9+x]>px[y*9+x+1] else "0"
                                  for y in range(8) for x in range(8))
def hamming(a,b):
 return sum(x!=y for x,y in zip(a,b))

def collect(slot,candidates,sha_used,url_used,visual_used):
 if slot.get("visuallyVerified") or slot.get("localPath"):return False
 group=slot.get("propertyKey") or "destination"
 for _,url,page,label,credit in candidates[:90]:
  canonical=url.split("?")[0]
  if canonical in url_used:continue
  r=fetch(url)
  if not r:continue
  try:
   with Image.open(BytesIO(r.content)) as src:
    img=ImageOps.exif_transpose(src).convert("RGB")
    original=img.size
    if img.width<1050 or img.height<580 or not 1.15<img.width/img.height<3.25:continue
    signature=content_hash(img)
    if any(hamming(signature,k)<=5 for k in visual_used):continue
    img.thumbnail((1800,1200),Image.Resampling.LANCZOS)
    out=BytesIO();img.save(out,"WEBP",quality=86,method=5);data=out.getvalue()
  except (OSError,ValueError):continue
  sha=hashlib.sha256(data).hexdigest()
  if sha in sha_used or len(data)<35000:continue
  p=OUT/group/(slot["key"]+".webp");p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(data)
  slot.update({"status":"candidate_needs_visual_review",
   "visuallyVerified":False,"commercialRightsCleared":False,
   "visualQaWarning":"Identity, photograph distinctness, quality and attribution await human inspection.",
   "localPath":"/"+p.as_posix().removeprefix("public/"),
   "downloadUrl":url,"sourcePage":page,"candidateContext":label,"credit":credit,
   "sha256":sha,"dhash":signature,"bytes":len(data),"originalSize":list(original),
   "outputSize":list(img.size)})
  sha_used.add(sha);url_used.add(canonical);visual_used.add(signature)
  print("FOUND",group,slot["key"],page,flush=True);return True
 print("STILL_EMPTY",group,slot["key"],flush=True)
 return False

def main():
 manifest=json.loads(MANIFEST.read_text(encoding="utf8"))
 slots=manifest["hotels"]+manifest["destinationScenes"]
 url_used={u.split("?")[0] for x in slots for u in (x.get("downloadUrl"),x.get("rejectedSource")) if isinstance(u,str) and u.startswith("https://")}
 sha_used={x["sha256"] for x in slots if x.get("sha256")}
 visual_used={x["dhash"] for x in slots if x.get("dhash")}
 updated=False
 for item in manifest["hotels"]:
  sources=HOTELS.get(item["propertyKey"],{}).get(item["key"],[])
  suggestions=[]
  for p,words in sources:suggestions+=hotels_from_page(p,words)
  updated|=collect(item,suggestions,sha_used,url_used,visual_used)
 for item in manifest["destinationScenes"]:
  q,terms=LANDSCAPES[item["key"]]
  direct=direct_wikimedia(DIRECT_WIKIMEDIA[item["key"]]) if item["key"] in DIRECT_WIKIMEDIA else []
  if not direct and item["key"] in COMMONS_EXACT:direct=commons_exact(COMMONS_EXACT[item["key"]])
  choices=direct or commons(q,terms)
  updated|=collect(item,choices,sha_used,url_used,visual_used)
 manifest["downloadedHotelCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in manifest["hotels"])
 manifest["downloadedDestinationCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in manifest["destinationScenes"])
 manifest["visuallyVerified"]=False;manifest["approvedForCommercialPublication"]=False
 if updated:MANIFEST.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 print("MONACO",manifest["downloadedHotelCandidates"],"/12 hotel candidates;",
       manifest["downloadedDestinationCandidates"],"/9 local candidates; new photos are unapproved.",flush=True)

if __name__=="__main__":main()
