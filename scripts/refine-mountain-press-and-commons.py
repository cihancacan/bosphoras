#!/usr/bin/env python3
"""Second-pass candidates for Megeve / Jackson Hole / Big Sky.
Brand pressrooms for ONLY the exact hotels; filename-exact Commons for place
photos. Every image is STAGED, not licence-cleared or certified to be the hotel.
"""
from __future__ import annotations
import hashlib,html,json,re,runpy,time
from io import BytesIO
from pathlib import Path
from urllib.parse import unquote,urlparse
import requests
from PIL import Image,ImageOps
m=runpy.run_path("scripts/collect-western-mountain-photos.py")
S=m["S"];direct_assets=m["direct_assets"];picture=m["picture"]
FILES={"megeve":"megeve","jackson-hole":"jacksonHole","big-sky":"bigSky"}
DATA={s:json.loads(Path("data/travel/"+stem+"MediaCandidates.json").read_text(encoding="utf8")) for s,stem in FILES.items()}
def finger(raw):
 with Image.open(BytesIO(raw)) as im:
  vals=list(ImageOps.exif_transpose(im).convert("L").resize((9,8)).getdata())
  return sum(1<<(r*8+c) for r in range(8) for c in range(8) if vals[r*9+c]>vals[r*9+c+1])
def current_finger(slug):
 result=[]
 for item in DATA[slug]["hotels"]+DATA[slug]["destinationScenes"]:
  p=item.get("localPath")
  if item.get("status")!="candidate_needs_visual_review" or not p:continue
  fp=Path("public"+p)
  if not fp.exists():continue
  try:result.append(finger(fp.read_bytes()))
  except (OSError,ValueError):continue
 return result
def save(slug,group,record,asset,credit="",lic="",licurl=""):
 pic=picture(asset["url"])
 if not pic:return False
 binary,srcsize,outsize=pic
 h=finger(binary)
 if any((h^existing).bit_count()<10 for existing in current_finger(slug)):
  print("NEAR_DUP",slug,group,record["key"],flush=True)
  return False
 local="/images/travel/"+slug+"-premium/"+group+"/"+record["key"]+".webp"
 physical=Path("public"+local)
 physical.parent.mkdir(parents=True,exist_ok=True);physical.write_bytes(binary)
 record.update({"status":"candidate_needs_visual_review","localPath":local,
   "sourcePage":asset["sourcePage"],"downloadUrl":asset["url"],
   "candidateContext":asset.get("context",""),"credit":credit,"license":lic,"licenseUrl":licurl,
   "sha256":hashlib.sha256(binary).hexdigest(),"bytes":len(binary),
   "originalSize":srcsize,"outputSize":outsize,
   "rights":"Photograph or press asset source documented. Independent commercial reuse approval still REQUIRED.",
   "visuallyVerified":False,"commercialRightsCleared":False})
 record.pop("visualQaWarning",None)
 print("ADDED",slug,group,record["key"],asset.get("context","")[:64],flush=True)
 return True

HOTELS={
"megeve":[("four-seasons-megeve",[
 "https://press.fourseasons.com/megeve/hotel-news/2026/french-palace-hotel/",
 "https://press.fourseasons.com/megeve/hotel-news/2026/expanded-spa-offering/",
 "https://www.fourseasons.com/megeve/photos-and-videos/"])],
"jackson-hole":[("four-seasons-jackson",[
 "https://press.fourseasons.com/jacksonhole/","https://www.fourseasons.com/jacksonhole/photos-and-videos/",
 "https://www.fourseasons.com/jacksonhole/"])],
"big-sky":[("oneonly-moonlight",[
 "https://www.kerznercommunications.com/section/our-brands/oneandonly/oneandonly-moonlight-basin-montana/?lang=eng",
 "https://www.oneandonlyresorts.com/moonlight-basin",
 "https://oneandonlybrand.com/asset/oneonly-moonlight-basin-sky-lodge-5/",
 "https://oneandonlybrand.com/asset/oneonly-moonlight-basin-the-landing-25/"])]
}
for slug,properties in HOTELS.items():
 for key,pages in properties:
  needs=[h for h in DATA[slug]["hotels"] if h["propertyKey"]==key and h["status"]=="missing"]
  if not needs:continue
  candidates=[]
  for page in pages:
   imgs=direct_assets(page)
   print("PRESS",slug,key,page,len(imgs),flush=True)
   candidates.extend(imgs)
  candidates.sort(key=lambda x:-x.get("weight",0))
  # Unique originals matter; a 480w and a 1600w derivative are one photo.
  paths=set()
  for item in needs:
   for asset in candidates:
    url=asset["url"]
    base=unquote(urlparse(url).path.lower())
    base=re.sub(r"-p-\d+(?=\.(jpg|png|jpeg|webp)$)","",base)
    if base in paths:continue
    context=(asset.get("context","")+" "+base).lower()
    if any(black in context for black in ["logo","icon","facebook","michelin","newsletter","hotel-jackson","morgans","press contact","headshot"]):continue
    if save(slug,key,item,asset,credit=key+" · official brand press/photo source"):
     paths.add(base);break
    paths.add(base)
  print("HOTEL_RESULT",slug,key,sum(h["status"]=="candidate_needs_visual_review" for h in DATA[slug]["hotels"] if h["propertyKey"]==key),"/3",flush=True)

COMMONS={
"megeve":{
 "scene-1":["Village @ Megève (51295072586).jpg"],
 "scene-2":["Mont-d'Arbois-Megève (2017).jpg"],
 "scene-6":["Megève - Eglise Saint-Jean-Baptiste 48.jpg"],
 "scene-7":["View of the Mont d'Arbois front de neige, Megève, 2025.jpg"]
},
"jackson-hole":{
 "scene-3":["Elk antler arch at Jackson Square, Jackson, WY 2022-07-11.jpg","Jackson wy.jpg"],
 "scene-4":["Grand Teton from the Snake River Overlook.jpg"],
 "scene-5":["Views at Grand Teton National Park, Wyoming (24029770-4738-47df-8265-9e1d86a09f27).jpg"],
 "scene-8":["Views at Grand Teton National Park, Wyoming (bf832f8c-26f0-46cf-966f-ca7d5959b39b).jpg"]
},
"big-sky":{
 "scene-2":["Big Sky resort.jpg","Swift Current 6 Lift at Big Sky Resort.jpg"],
 "scene-5":["Lone Mountain, January 2018.jpg"]
}}
def commons_exact(title):
 for attempt in range(3):
  try:
   r=S.get("https://commons.wikimedia.org/w/api.php",params={
     "action":"query","titles":"File:"+title,"prop":"imageinfo",
     "iiprop":"url|extmetadata","iiurlwidth":"1700","format":"json"},timeout=27)
   if r.status_code==429:
    time.sleep(5*(attempt+1));continue
   r.raise_for_status()
   for page in r.json().get("query",{}).get("pages",{}).values():
    if "missing" in page:continue
    info=(page.get("imageinfo") or [{}])[0]
    extra=info.get("extmetadata") or {}
    licence=(extra.get("LicenseShortName") or {}).get("value","")
    if not re.search(r"CC BY|CC0|Public domain|PD-",licence,re.I):return None
    source="https://commons.wikimedia.org/wiki/File:"+title.replace(" ","_")
    credit=html.unescape(re.sub("<[^>]+>"," ",(extra.get("Artist") or {}).get("value",""))).strip()
    return {"url":info.get("thumburl") or info.get("url"),
      "sourcePage":source,"context":"File:"+title,"credit":credit,"license":licence,
      "licenseUrl":(extra.get("LicenseUrl") or {}).get("value","")}
  except (requests.RequestException,ValueError) as e:
   print("COMMONS_ERROR",title,str(e)[:100],flush=True)
 return None
for slug,slots in COMMONS.items():
 for key,titles in slots.items():
  item=next(i for i in DATA[slug]["destinationScenes"] if i["key"]==key)
  if item["status"]=="candidate_needs_visual_review":continue
  for title in titles:
   info=commons_exact(title)
   if not info or not info.get("url"):continue
   if save(slug,"destination",item,info,credit=info["credit"],
     lic=info["license"],licurl=info["licenseUrl"]):
    # Human must verify image and ensure caption matches season / location.
    item["visualQaWarning"]="Commons title/source grounded, but manual geographic, season and aesthetic QA required."
    break
  time.sleep(2)
for slug,manifest in DATA.items():
 manifest["downloadedHotelCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in manifest["hotels"])
 manifest["downloadedDestinationCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in manifest["destinationScenes"])
 manifest["visuallyVerified"]=False;manifest["approvedForCommercialPublication"]=False
 manifest["publicationBlockedReason"]="All photo publication requires identity, visual quality and commercial-rights verification."
 Path("data/travel/"+FILES[slug]+"MediaCandidates.json").write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 print("TOTAL",slug,manifest["downloadedHotelCandidates"],"/12",manifest["downloadedDestinationCandidates"],"/9, QA BLOCKED",flush=True)
