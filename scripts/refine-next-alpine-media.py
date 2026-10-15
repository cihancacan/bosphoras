#!/usr/bin/env python3
"""Second pass: replace verified wrong/duplicate alpine image candidates.
Official Hyatt URLs are visually associated with the exact hotel. Exact Commons
titles prevent conflating Niseko Annupuri with Hanazono or Aspen with aspen trees.
Remains unapproved until the independent human visual and licensing QA.
"""
from __future__ import annotations
import hashlib,json,re,runpy
from pathlib import Path
from urllib.parse import quote
import requests
from PIL import Image

m=runpy.run_path("scripts/download-next-alpine-media.py")
S=m["S"];picture=m["picture"];direct_assets=m["direct_assets"]
ROOT=Path("data/travel")
def d_hash(data):
 from io import BytesIO
 with Image.open(BytesIO(data)) as im:
  g=im.convert("L").resize((9,8))
  a=list(g.getdata())
  return sum((1<<i) for i,(x,y) in enumerate(( (a[row*9+col],a[row*9+col+1]) for row in range(8) for col in range(8))) if x>y)
def hashes(photos,exclude=""):
 seen=[]
 for item in photos:
  if item["status"]!="candidate_needs_visual_review" or item.get("localPath")==exclude:continue
  path=Path("public"+item["localPath"])
  if path.exists():seen.append(d_hash(path.read_bytes()))
 return seen
def store(slug,item,url,source,credit="",license="",licence_url="",context=""):
 pic=picture(url)
 if not pic:return False
 binary,source_size,output=pic
 digest=d_hash(binary)
 people=ALL.get(slug,[])
 if any((digest^prior).bit_count()<12 for prior in hashes(people,item.get("localPath",""))):return False
 path=Path("public/images/travel")/(slug+"-premium")/(item["propertyKey"] if "propertyKey" in item else "destination")/(item["key"]+".webp")
 path.parent.mkdir(parents=True,exist_ok=True)
 path.write_bytes(binary)
 item.update(status="candidate_needs_visual_review",localPath="/"+str(path).removeprefix("public/"),
  sourcePage=source,downloadUrl=url,credit=credit,license=license,licenseUrl=licence_url,
  candidateContext=context,originalSize=source_size,outputSize=output,
  sha256=hashlib.sha256(binary).hexdigest(),bytes=len(binary),
  visuallyVerified=False,commercialRightsCleared=False)
 return True
def by_title(title):
 api="https://commons.wikimedia.org/w/api.php"
 try:
  r=S.get(api,params={"action":"query","titles":title,"prop":"imageinfo","iiprop":"url|extmetadata","iiurlwidth":1700,"format":"json"},timeout=25)
  r.raise_for_status()
  for result in r.json().get("query",{}).get("pages",{}).values():
   if "missing" in result:continue
   inf=(result.get("imageinfo") or [{}])[0]
   meta=inf.get("extmetadata") or {}
   lic=(meta.get("LicenseShortName") or {}).get("value","")
   if not re.search("CC BY|CC0|Public domain|PD-",lic,re.I):continue
   url=inf.get("thumburl")
   if not url:return None
   return url,"https://commons.wikimedia.org/wiki/"+title.replace(" ","_"),meta,lic
 except (requests.RequestException,ValueError) as e:print("COMMONS_LOOKUP_FAIL",title,str(e)[:90],flush=True)
 return None
ALL={}
for slug,key in (("st-moritz","stMoritz"),("aspen","aspen"),("niseko","niseko")):
 path=ROOT/(key+"MediaCandidates.json")
 ALL[slug]=json.loads(path.read_text(encoding="utf8"))
def select(slug,group,propkey,k):
 target=ALL[slug][group]
 return next((p for p in target if p.get("propertyKey")==propkey and p["key"]==k),None)
def hotel_gallery(slug,prop,official_page,slots,context_exclusion=()):
 candidates=direct_assets(official_page)
 candidates=[p for p in candidates if not any(x in (p["url"]+" "+p.get("context","")).lower() for x in context_exclusion)]
 print("OFFICIAL_GALLERY",slug,prop,len(candidates),flush=True)
 for slot in slots:
  item=select(slug,"hotels",prop,slot)
  if not item:continue
  for c in candidates:
   if store(slug,item,c["url"],c["sourcePage"],context=c.get("context","")):break
  print("SLOT",slug,prop,slot,item["status"],flush=True)

# Bad or missing gallery items: retain an unreviewed state on every replacement.
hotel_gallery("st-moritz","kulm-hotel","https://www.kulm.com/en/image-gallery",["view-2","view-3"],("logo","icon"))
hotel_gallery("niseko","setsu-niseko","https://setsuniseko.com/en/gallery/",["view-1","view-2","view-3"],("shinonome","sushi kato","ramen","coffee","deer","hot air balloon","golf"))
hotel_gallery("aspen","st-regis-aspen","https://www.marriott.com/en-us/hotels/asexr-the-st-regis-aspen-resort/overview/",["view-1","view-3"],("credit card","cobrand","bonvoy","loyalty"))

# Official Hyatt CDN asset URLs, independently identified as THIS Park Hyatt.
HYATT=[
 "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2021/05/24/2329/CTSPH-P0221-Hotel-Exterior.jpg/CTSPH-P0221-Hotel-Exterior.16x9.jpg",
 "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2021/04/30/0122/CTSPH-P0199-Hotel-Exterior-Landscape.jpg/CTSPH-P0199-Hotel-Exterior-Landscape.16x9.jpg",
 "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2023/08/31/0124/CTSPH-P0572-Twin-Suite-With-Mountain-View-Green-Season.jpg/CTSPH-P0572-Twin-Suite-With-Mountain-View-Green-Season.16x9.jpg"
]
for i,url in enumerate(HYATT,1):
 item=select("niseko","hotels","park-hyatt-hanazono","view-"+str(i))
 if item:store("niseko",item,url,"https://www.hyatt.com/park-hyatt/en-US/ctsph-park-hyatt-niseko-hanazono/gallery",credit="Park Hyatt Niseko Hanazono / Hyatt official hotel gallery",context="Verified property gallery asset")

# Explicit photo titles from Commons descriptions rather than vague keyword search.
SCENES={
"aspen":{
 "scene-2":"File:Main Street, Aspen, CO.jpg",
 "scene-7":"File:Buttermilk in Winter.jpg",
 "scene-8":"File:Snowmass gondola and Ski area.jpg"
},
"niseko":{
 "scene-1":"File:Mount Yōtei and Mount Niseko-Annupuri.jpg",
 "scene-2":"File:Grand HIRAFU Mountain Center and Annex.jpg",
 "scene-3":"File:HANAZONO 1st Lift (6-seater).jpg",
 "scene-4":"File:Niseko-Higashiyama.JPG",
 "scene-5":"File:Niseko-Annupuri.JPG",
 "scene-7":"File:2018 skiing in niseko.jpg",
 "scene-8":"File:2010-02.niseko annupuri.jpg"
},
"st-moritz":{
 "scene-1":"File:St. Moritzersee 2005.jpg",
 "scene-5":"File:Corviglia.jpg",
 "scene-7":"File:Pontresina.jpg"
}}
for slug,scene_map in SCENES.items():
 for key,title in scene_map.items():
  result=by_title(title)
  if not result:
   print("TITLE_NOT_FOUND",slug,key,title,flush=True);continue
  url,source,meta,license=result
  item=next(i for i in ALL[slug]["destinationScenes"] if i["key"]==key)
  artist=(meta.get("Artist") or {}).get("value","")
  liclink=(meta.get("LicenseUrl") or {}).get("value","")
  if store(slug,item,url,source,credit=artist,license=license,licence_url=liclink,context=title):
   print("REPLACED_SCENE",slug,key,title,flush=True)
# Manual QA rejections: images without accurate location are deliberately marked
# as needing replacement, even if downloaded; do not silently publish them.
for slug,scene_key,reason in [
 ("st-moritz","scene-6","Candidate Lake Staz is not a geographically exact Celerina village scene"),
 ("st-moritz","scene-9","Corvatsch rock glacier is not a neutral town Engadin panorama"),
 ("niseko","scene-6","Lake Hangetsu photo is not documented as a Kutchan town scene")]:
 item=next(i for i in ALL[slug]["destinationScenes"] if i["key"]==scene_key)
 item["visualQaWarning"]=reason
for slug,data in ALL.items():
 data["downloadedHotelCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in data["hotels"])
 data["downloadedDestinationCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in data["destinationScenes"])
 data["visuallyVerified"]=False
 data["approvedForCommercialPublication"]=False
 key={"st-moritz":"stMoritz","aspen":"aspen","niseko":"niseko"}[slug]
 (ROOT/(key+"MediaCandidates.json")).write_text(json.dumps(data,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 print("QA_LOCKED",slug,data["downloadedHotelCandidates"],data["downloadedDestinationCandidates"],flush=True)
