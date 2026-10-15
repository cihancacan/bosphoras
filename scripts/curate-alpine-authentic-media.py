#!/usr/bin/env python3
"""Third, source-specific media QA pass for the alpine trio.
Exact Wikimedia Commons File titles were checked against on-page descriptions.
A downloadable image is NEVER an automatic approval to publish commercially.
Photograph source, pixel dimensions, attribution and review state are retained.
"""
from __future__ import annotations
import hashlib, html, json, re, runpy
from io import BytesIO
from pathlib import Path
from urllib.parse import urlparse
import requests
from PIL import Image, ImageOps

old=runpy.run_path("scripts/download-next-alpine-media.py")
session=old["S"]
fetch_images=old["direct_assets"]
root=Path("data/travel")
CITY_FILES={"st-moritz":"stMoritz","aspen":"aspen","niseko":"niseko"}
data={slug:json.loads((root/(stem+"MediaCandidates.json")).read_text(encoding="utf8")) for slug,stem in CITY_FILES.items()}
def sharp_hash(binary):
 with Image.open(BytesIO(binary)) as image:
  im=ImageOps.exif_transpose(image).convert("L").resize((9,8))
  values=list(im.getdata())
  return sum(1<<(8*y+x) for y in range(8) for x in range(8) if values[y*9+x]>values[y*9+x+1])
def image_bytes(url,allow_small=False):
 try:
  res=session.get(url,timeout=24)
  res.raise_for_status()
  if len(res.content)>14000000 or not res.headers.get("content-type","").startswith(("image/","application/octet-stream")):return None
  with Image.open(BytesIO(res.content)) as im:
   im=ImageOps.exif_transpose(im).convert("RGB")
   width,height=im.size
   if width<900 or height<470 or not (1.10 < width/height < 3.5):return None
   im.thumbnail((1800,1350),Image.Resampling.LANCZOS)
   b=BytesIO();im.save(b,"WEBP",quality=82,method=5)
   return b.getvalue(),(width,height),im.size
 except (requests.RequestException,OSError,ValueError) as e:
  print("SKIP",url[:105],str(e)[:70],flush=True)
  return None
def candidate_item(slug,kind,key):
 group=data[slug]["destinationScenes" if kind=="destination" else "hotels"]
 return next(x for x in group if x["key"]==key and (kind=="destination" or x["propertyKey"]==kind))
def put(slug,kind,key,url,source,desc,credit="",license="",license_url=""):
 item=candidate_item(slug,kind,key)
 result=image_bytes(url)
 if result is None:return False
 binary,original,output=result
 p_hash=sharp_hash(binary)
 group=data[slug]
 for other in group["hotels"]+group["destinationScenes"]:
  if other is item or other["status"]!="candidate_needs_visual_review":continue
  filename=other.get("localPath")
  if filename and Path("public"+filename).exists():
   try:
    other_hash=sharp_hash(Path("public"+filename).read_bytes())
    if (p_hash^other_hash).bit_count()<10:
     print("NEAR_DUPLICATE",slug,kind,key,filename,flush=True)
     return False
   except (OSError,ValueError):pass
 path=Path("public/images/travel")/(slug+"-premium")/(kind if kind!="destination" else "destination")/(key+".webp")
 path.parent.mkdir(parents=True,exist_ok=True)
 path.write_bytes(binary)
 item.update({"status":"candidate_needs_visual_review","localPath":"/"+str(path).removeprefix("public/"),
   "downloadUrl":url,"sourcePage":source,"candidateContext":desc,
   "credit":credit,"license":license,"licenseUrl":license_url,
   "sha256":hashlib.sha256(binary).hexdigest(),"bytes":len(binary),
   "originalSize":original,"outputSize":output,
   "visuallyVerified":False,"commercialRightsCleared":False,
   "rights":"Source and licence disclosed; independent editorial accuracy and commercial licence obligations still need human confirmation."})
 item.pop("visualQaWarning",None)
 print("IMPORTED",slug,kind,key,desc[:65],flush=True)
 return True
def commons(title):
 try:
  api="https://commons.wikimedia.org/w/api.php"
  params={"action":"query","titles":"File:"+title,"prop":"imageinfo","iiprop":"url|extmetadata","iiurlwidth":1800,"format":"json"}
  r=session.get(api,params=params,timeout=27);r.raise_for_status()
  for page in r.json().get("query",{}).get("pages",{}).values():
   if "missing" in page:continue
   info=(page.get("imageinfo") or [{}])[0]
   meta=info.get("extmetadata",{})
   licence=(meta.get("LicenseShortName") or {}).get("value","")
   if not re.search(r"CC BY|CC0|Public domain|PD-",licence,re.I):
    print("LICENCE_UNRESOLVED",title,licence,flush=True)
    return None
   url=info.get("thumburl") or info.get("url")
   if not url:return None
   source="https://commons.wikimedia.org/wiki/File:"+title.replace(" ","_")
   author=html.unescape(re.sub("<[^>]+>"," ",(meta.get("Artist") or {}).get("value",""))).strip()
   return url,source,author,licence,(meta.get("LicenseUrl") or {}).get("value","")
 except (requests.RequestException,ValueError) as e:
  print("WIKIMEDIA_ERROR",title,str(e)[:90],flush=True)
 return None
def put_commons(slug,kind,key,*titles):
 for title in titles:
  info=commons(title)
  if info and put(slug,kind,key,info[0],info[1],title,info[2],info[3],info[4]):return True
 print("STILL_MISSING_OR_UNSUITABLE",slug,kind,key,list(titles),flush=True)
 return False

SCENES={
 "st-moritz":{
  "scene-1":["Blick über den Sankt Moritzersee auf Sankt Moritz.jpg","St. Moritzersee 2006.jpg"],
  "scene-5":["St. Moritz Corviglia 2.jpg","Corviglia StMoritz.jpg"],
  "scene-6":["Celerina Engadin.jpg"],
  "scene-7":["Pontresina-01.jpg","Pontresina.jpg"],
  "scene-9":["St. Moritz - Pontresina.jpg","Engadin St. Moritzersee I 01.JPG"]
 },
 "aspen":{
  "scene-1":["Aspen Mountain Silver Queen Gondola over Silver dip run.jpg"],
  "scene-3":["Silver Queen Gondola base station, Gondola Plaza, Aspen, 2009.jpg","Aspen Mountain Silver Queen Gondola.jpg"],
  "scene-4":["La Fave Block, Aspen, CO.jpg","Main Street in Aspen.jpg"],
  "scene-5":["Shilling-Lamb House.JPG","Wheeler-Stallard House, Aspen, CO.jpg"],
  "scene-6":["Aspen Highlands bowl from Loge Peak .jpg","Aspen Highlands base area.jpg"],
  "scene-9":["Maroon Bells seen from Aspen Highlands, 2017.jpg","Maroon Bells, Aspen, CO during Labor Day weekend 2016.jpg"]
 },
 "niseko":{
  "scene-1":["Mount Yōtei from Niseko Annupuri (33253188670).jpg","Mount Yōtei and Mount Niseko-Annupuri.jpg"],
  "scene-5":["Niseko-Annupuri.JPG","Niseko Annupuri (East side).jpg"],
  "scene-6":["Kutchan-STA 2024.jpg","Kutchan town from Asahigaoka.JPG"],
  "scene-9":["Goshiki spa roten.JPG","Niseko Yumoto Koyunuma 2007.jpg"]
 }
}
for slug,mapping in SCENES.items():
 for slot,titles in mapping.items():
  put_commons(slug,"destination",slot,*titles)

# Two Kulm house exteriors as source-verified short-term visual candidates.
# These Wikimedia works are photographs of the exact establishment, NOT
# generic St. Moritz destination photos and not substitute interiors.
for slot,choices in [
 ("view-2",["Kulm Hotel Sankt Moritz 2022-09-25 01.jpg","Kulm Hotel Sankt Moritz 2022-09-25 02.jpg"]),
 ("view-3",["Kulm Hotel Sankt Moritz 2022-09-25 03.jpg","Kulm Hotel Sankt Moritz 2022-09-25 04.jpg"])
]:
 put_commons("st-moritz","kulm-hotel",slot,*choices)

# St Regis: specifically identified hotel photo paths only (the current
# advertising cobrand image is NOT of the hotel). One photo per *original
# filename*, so differently resized URLs cannot fill different gallery slots.
marriott="https://www.marriott.com/en-us/hotels/asexr-the-st-regis-aspen-resort/overview/"
candidates=fetch_images(marriott)
candidates+=fetch_images("https://www.marriott.com/en-us/hotels/asexr-the-st-regis-aspen-resort/photos/")
allowed=[]
for c in candidates:
 u=c["url"];src=(u+" "+c.get("context","")).lower()
 if ("asexr" not in src and "/ase" not in src) or any(w in src for w in ["cobrand","credit-card","pdt-0513","bonvoy"]):continue
 allowed.append(c)
existing={"asexr-deluxe-balcony-4667-hor-clsc.jpg"}
for key in ["view-1","view-3"]:
 found=False
 for cand in allowed:
  name=Path(urlparse(cand["url"]).path).name.lower()
  if name in existing or not name.endswith((".jpg",".jpeg",".png",".webp")):continue
  if put("aspen","st-regis-aspen",key,cand["url"],cand["sourcePage"],cand.get("context",""),credit="St. Regis Aspen Resort · Marriott official property website"):
   existing.add(name);found=True;break
 if not found:print("ST_REGIS_NO_VALID_REPLACEMENT",key,flush=True)

# Suvretta picture 1 and picture 2 were only different URLs for the same
# original l1062763.jpg. Select a truly different original asset, or mark
# the repeated frame as unapproved, never count it as unique.
suvretta=data["st-moritz"]["hotels"]
one=candidate_item("st-moritz","suvretta-house","view-1")
two=candidate_item("st-moritz","suvretta-house","view-2")
if one["downloadUrl"].split("?")[0].split("/")[-1]==two["downloadUrl"].split("?")[0].split("/")[-1]:
 extra=[]
 for page in ["https://suvrettahouse.ch/en/startseite-winter","https://suvrettahouse.ch/en/rooms-suites","https://suvrettahouse.ch/en/dining"]:
  extra.extend(fetch_images(page))
 used={"l1062763.jpg","l1063003_.jpg"}
 replaced=False
 for c in extra:
  filename=Path(urlparse(c["url"]).path).name
  # Real CDN image basename is often penultimate decoded URL segment.
  if filename.lower() in used or any(name in c["url"] for name in used):continue
  if put("st-moritz","suvretta-house","view-2",c["url"],c["sourcePage"],c.get("context",""),credit="Suvretta House official property photo"):
   replaced=True;break
 if not replaced:
  two["status"]="missing";two["visualQaWarning"]="Same original Suvretta photograph as view-1. Unique hotel image required."
  print("SURRETTA_DUPLICATE_REJECTED",flush=True)

# Aspen historical district scene depicts West End residential Shilling–Lamb
# property, not an unrelated suburban home.
for slug,content in data.items():
 photos=content["hotels"]+content["destinationScenes"]
 content["downloadedHotelCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in content["hotels"])
 content["downloadedDestinationCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in content["destinationScenes"])
 content["visuallyVerified"]=False
 content["approvedForCommercialPublication"]=False
 content["sourceCuration"]="Third pass: source-specific Wikimedia files and exact hotel-only images, still visually unapproved."
 output=root/(CITY_FILES[slug]+"MediaCandidates.json")
 output.write_text(json.dumps(content,indent=2,ensure_ascii=False)+"\n",encoding="utf8")
 print("SAVED",slug,content["downloadedHotelCandidates"],"/12 properties; ",content["downloadedDestinationCandidates"],"/9 scenes; visual QA blocked",flush=True)
