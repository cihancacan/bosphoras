#!/usr/bin/env python3
"""Authenticated provenance-first media *candidates* for 3 alpine guides.
This does NOT approve copyright, visual hotel identity or publication.
Only HTML assets linked from the exact property official page can enter a
property gallery. Commons file metadata is retained for destination photos.
Images with unresolved identity, attribution or size are never fake-labelled.
"""
from __future__ import annotations
import hashlib, html, json, re, time
from collections import defaultdict
from datetime import datetime, timezone
from io import BytesIO
from pathlib import Path
from urllib.parse import urljoin, urlparse
import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageOps

S=requests.Session()
S.headers.update({"User-Agent":"BosphorasLuxuryStays/1.0 (media provenance research; contact via site)", "Accept":"text/html,image/webp,image/jpeg,image/png,image/*;q=.8"})
OUT=Path("data/travel")
ROOT=Path("public/images/travel")
TOPICS={
"st-moritz":{
 "properties":[
  ("badrutts-palace","Badrutt's Palace Hotel",["https://badruttspalace.com/en/winter/","https://badruttspalace.com/en/winter/accommodation/rooms/"]),
  ("kulm-hotel","Kulm Hotel St. Moritz",["https://www.kulm.com/en/winter/hotel","https://www.kulm.com/en/winter/"]),
  ("suvretta-house","Suvretta House",["https://suvrettahouse.ch/en/startseite-winter","https://suvrettahouse.ch/en/rooms-suites"]),
  ("carlton-hotel","Carlton Hotel St. Moritz",["https://tschuggencollection.ch/en/hotel/carlton-hotel","https://tschuggencollection.ch/en/hotel/carlton-hotel/rooms-suites"])
 ],
 "areas":[("St. Moritz lake","Lake St Moritz"),("St. Moritz Dorf","St Moritz village"),
          ("St. Moritz Bad","St Moritz Bad"),("Suvretta","Suvretta St Moritz"),
          ("Corviglia","Corviglia St Moritz"),("Celerina","Celerina Switzerland"),
          ("Pontresina","Pontresina Engadin"),("St. Moritz winter","St Moritz winter"),
          ("Engadin landscape","Engadin Swiss Alps")]
},
"aspen":{
 "properties":[
  ("the-little-nell","The Little Nell",["https://www.thelittlenell.com/","https://www.thelittlenell.com/stay/rooms"]),
  ("hotel-jerome","Hotel Jerome",["https://auberge.com/hotel-jerome/","https://auberge.com/hotel-jerome/stay/"]),
  ("st-regis-aspen","The St. Regis Aspen Resort",["https://www.marriott.com/en-us/hotels/asexr-the-st-regis-aspen-resort/overview/","https://www.marriott.com/en-us/hotels/asexr-the-st-regis-aspen-resort/rooms/"]),
  ("w-aspen","W Aspen",["https://www.marriott.com/en-us/hotels/asewh-w-aspen/overview/","https://www.marriott.com/en-us/hotels/asewh-w-aspen/rooms/"])
 ],
 "areas":[("Aspen Mountain","Aspen Mountain Colorado"),("Aspen downtown","Aspen Colorado town"),
          ("Silver Queen Gondola","Aspen Silver Queen Gondola"),("Aspen Main Street","Aspen Main Street"),
          ("Aspen West End","Aspen historic houses Colorado"),("Aspen Highlands","Aspen Highlands Colorado"),
          ("Buttermilk ski mountain","Buttermilk Aspen Colorado"),("Snowmass Village","Snowmass Colorado"),
          ("Maroon Bells","Maroon Bells Aspen Colorado")]
},
"niseko":{
 "properties":[
  ("park-hyatt-hanazono","Park Hyatt Niseko Hanazono",["https://www.hyatt.com/park-hyatt/en-US/ctsph-park-hyatt-niseko-hanazono","https://www.hyatt.com/park-hyatt/en-US/ctsph-park-hyatt-niseko-hanazono/rooms"]),
  ("ritz-carlton-reserve","Higashiyama Niseko Village, a Ritz-Carlton Reserve",["https://www.ritzcarlton.com/en/hotels/ctsrz-higashiyama-niseko-village-a-ritz-carlton-reserve/overview/","https://www.ritzcarlton.com/en/hotels/ctsrz-higashiyama-niseko-village-a-ritz-carlton-reserve/rooms/"]),
  ("setsu-niseko","Setsu Niseko",["https://setsuniseko.com/en/","https://setsuniseko.com/en/suites/"]),
  ("aya-niseko","AYA Niseko",["https://www.ayaniseko.com/","https://www.ayaniseko.com/accommodation/residences"])
 ],
 "areas":[("Mount Yotei","Mount Yotei Hokkaido"),("Niseko Grand Hirafu","Niseko Grand Hirafu"),
          ("Niseko Hanazono","Niseko Hanazono Hokkaido"),("Niseko Village","Niseko Village"),
          ("Niseko Annupuri","Niseko Annupuri"),("Kutchan","Kutchan Hokkaido"),
          ("Niseko winter","Niseko Hokkaido winter"),("Niseko forest","Niseko Hokkaido forest"),
          ("Hokkaido onsen","Niseko Hokkaido onsen")]
}}
IMG_HINT=re.compile(r"\.(?:jpe?g|png|webp|avif)(?:$|[?#])|(?:im\.marriott\.com|cdn\.sanity\.io|cloudinary\.com|ctfassets\.net|prismic\.io|images\.squarespace-cdn\.com|imagekit\.io|images\.unsplash\.com|img\.hyatt\.com)",re.I)
SKIP=re.compile(r"logo|favicon|icon|flag|svg|avatar|instagram|youtube|map-|placeholder|favicon|facebook|sitemap",re.I)
USED=set()

def fetch_page(url):
 try:
  r=S.get(url,timeout=20); r.raise_for_status()
  if "html" not in r.headers.get("content-type",""):return ""
  return r.text
 except requests.RequestException as e:
  print("page-unavailable",url,str(e)[:120],flush=True);return ""

def direct_assets(page):
 body=fetch_page(page)
 if not body:return []
 soup=BeautifulSoup(body,"html.parser")
 found=[]
 def add(raw,context,weight=0):
  if not raw or not isinstance(raw,str):return
  raw=html.unescape(raw).strip().strip("'\"")
  if not raw or raw.startswith(("data:","blob:")):return
  # srcsets contain URLs plus width, split before width or x only
  for segment in re.split(r",\s*(?=https?://|/|[^\s,]+\.(?:webp|png|jpg|jpeg))",raw):
   item=segment.strip().split(" ")[0]
   u=urljoin(page,item)
   if urlparse(u).scheme!="https" or not IMG_HINT.search(u) or SKIP.search(urlparse(u).path):continue
   if u not in [z["url"] for z in found]:
    found.append({"url":u,"sourcePage":page,"context":context[:200],"weight":weight})
 for tag in soup.select("meta[property='og:image'],meta[name='twitter:image']"):
  add(tag.get("content"),"Official page sharing image",8)
 for tag in soup.select("img,source,picture"):
  alt=tag.get("alt","") or ""
  for key in ("src","data-src","data-original","data-lazy-src","srcset","data-srcset"):
   add(tag.get(key),alt,5 if alt else 2)
 for tag in soup.select("[style]"):
  for raw in re.findall(r"url\(([^)]*)\)",tag.get("style") or ""):
   add(raw,"CSS image from official property page",1)
 # A site can store its gallery in JSON; preserve its origin but do not accept
 # unrelated domains unless the image appeared in the hotel's own HTML.
 for raw in re.findall(r'https?:\\?/\\?/[^"' + "'" + r'\s<>]+?\.(?:jpg|jpeg|webp|png)(?:\?[^"' + "'" + r'\s<>]*)?',body,re.I):
  add(raw.replace("\\/","/"),"Embedded image in official property source",1)
 return found

def picture(url):
 try:
  r=S.get(url,timeout=22);r.raise_for_status()
  if len(r.content)>14_000_000:return None
  with Image.open(BytesIO(r.content)) as im:
   im=ImageOps.exif_transpose(im).convert("RGB")
   size=im.size
   if size[0]<900 or size[1]<470 or not 1.13 < size[0]/size[1] < 3.2:return None
   im.thumbnail((1700,1250),Image.Resampling.LANCZOS)
   mem=BytesIO();im.save(mem,format="WEBP",quality=80,method=5)
   return mem.getvalue(),size,im.size
 except (requests.RequestException,OSError,ValueError) as e:
  print("image-failed",url[:95],str(e)[:65],flush=True);return None

def save(slug,key,group,item,asset):
 url=asset["url"]
 pic=picture(url)
 if not pic:return False
 data,size,output=pic
 sha=hashlib.sha256(data).hexdigest()
 if sha in USED:return False
 USED.add(sha)
 path=f"/images/travel/{slug}-premium/{group}/{key}.webp"
 physical=Path("public"+path)
 physical.parent.mkdir(parents=True,exist_ok=True)
 physical.write_bytes(data)
 item.update({"status":"candidate_needs_visual_review","localPath":path,
              "downloadUrl":url,"sourcePage":asset["sourcePage"],
              "candidateContext":asset.get("context",""),
              "sha256":sha,"bytes":len(data),"originalSize":size,"outputSize":output,
              "visuallyVerified":False,
              "commercialRightsCleared":False})
 return True

def mediawiki_candidates(query):
 api="https://commons.wikimedia.org/w/api.php"
 params={"action":"query","generator":"search","gsrsearch":'filetype:bitmap "'+query+'"',
         "gsrnamespace":6,"gsrlimit":30,"prop":"imageinfo",
         "iiprop":"url|extmetadata","iiurlwidth":1700,"format":"json"}
 try:
  r=S.get(api,params=params,timeout=24);r.raise_for_status()
  pages=r.json().get("query",{}).get("pages",{})
  items=[]
  for p in pages.values():
   inf=(p.get("imageinfo") or [{}])[0]
   title=p.get("title","")
   if not inf.get("thumburl") or not re.search(r"\.(?:jpg|jpeg|png|webp)$",title,re.I):continue
   meta=inf.get("extmetadata") or {}
   lic=(meta.get("LicenseShortName") or {}).get("value","")
   # Only properly licenced Commons candidates; do not assume an unknown licence.
   if not re.search(r"CC BY|CC0|public domain|PD-",lic,re.I):continue
   url="https://commons.wikimedia.org/wiki/"+title.replace(" ","_")
   items.append({"url":inf["thumburl"],"sourcePage":url,"context":title,
     "author":(meta.get("Artist") or {}).get("value",""),
     "license":lic,"licenseUrl":(meta.get("LicenseUrl") or {}).get("value","")})
  return sorted(items,key=lambda x:(len(x["context"]),x["context"]))
 except (requests.RequestException,ValueError) as e:
  print("commons-failed",query,str(e)[:100],flush=True);return []

def property_gallery(slug,prop):
 key,name,pages=prop
 entries=[]
 candidates=[]
 for page in pages:
  print("PROPERTY",slug,name,page,flush=True)
  candidates.extend(direct_assets(page))
 # Preserve prominent official hero/gallery assets before unrelated footer images.
 candidates.sort(key=lambda d:-d["weight"])
 candidates=list({x["url"]:x for x in reversed(candidates)}.values())[::-1]
 for i in range(1,4):
  item={"property":name,"propertyKey":key,"key":f"view-{i}","status":"missing",
        "visuallyVerified":False,"commercialRightsCleared":False,
        "sourcePages":pages,"rights":"Photographs from official property HTML; independent commercial licence must be verified"}
  for candidate in candidates:
   if candidate.get("_used"):continue
   if save(slug,f"view-{i}",key,item,candidate):
    candidate["_used"]=True;break
  entries.append(item)
 return entries

def destination_gallery(slug,areas):
 entries=[]
 for i,(label,search) in enumerate(areas,1):
  item={"key":f"scene-{i}","placeLabel":label,"searchQuery":search,"status":"missing",
        "visuallyVerified":False,"commercialRightsCleared":False,
        "rights":"Commons attribution/ShareAlike obligations must be checked; precise place identity awaits visual QA"}
  for candidate in mediawiki_candidates(search)[:16]:
   # Commons metadata is necessary, not sufficient, for an accurate caption.
   if save(slug,f"scene-{i}","destination",item,candidate):
    item.update({"credit":candidate["author"],"license":candidate["license"],"licenseUrl":candidate["licenseUrl"]})
    break
  entries.append(item)
  time.sleep(.5)
 return entries

def run(slug,topic):
 hp=[]
 for prop in topic["properties"]:
  hp.extend(property_gallery(slug,prop))
 scenes=destination_gallery(slug,topic["areas"])
 data={"destination":slug,"generatedAt":datetime.now(timezone.utc).isoformat(),
       "scope":"SOURCE CANDIDATES ONLY; NOT READY TO DISPLAY OR COUNT AS COMPLETED",
       "expectedHotelPhotos":12,"expectedDestinationPhotos":9,
       "downloadedHotelCandidates":sum(p["status"]=="candidate_needs_visual_review" for p in hp),
       "downloadedDestinationCandidates":sum(p["status"]=="candidate_needs_visual_review" for p in scenes),
       "visuallyVerified":False,"approvedForCommercialPublication":False,
       "hotels":hp,"destinationScenes":scenes}
 path=OUT/(re.sub(r"-([a-z])",lambda m:m.group(1).upper(),slug)+"MediaCandidates.json")
 path.write_text(json.dumps(data,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
 print("RESULT",slug,data["downloadedHotelCandidates"],"/12 hotel; ",
       data["downloadedDestinationCandidates"],"/9 scenes, QA BLOCKED",flush=True)

def main():
 for slug,topic in TOPICS.items():
  try: run(slug,topic)
  except Exception as e:
   print("UNEXPECTED",slug,type(e).__name__,str(e)[:200],flush=True)
   raise
if __name__=="__main__":main()
