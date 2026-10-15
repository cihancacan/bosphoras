#!/usr/bin/env python3
"""Rate-limited Wikimedia QA completion: only five exact grounded images.
Never mark candidates as legally cleared or visually approved.
"""
from __future__ import annotations
import hashlib, html, json, re, time
from io import BytesIO
from pathlib import Path
from urllib.parse import quote
import requests
from PIL import Image, ImageOps

SESSION=requests.Session()
SESSION.headers.update({"User-Agent":"BosphorasLuxuryStays-MediaAudit/1.2 (https://www.bosphoras.com; gallery source provenance)", "Accept":"application/json,image/webp,image/jpeg,image/*;q=.8"})
META=Path("data/travel")
FILES={"st-moritz":"stMoritz","aspen":"aspen","niseko":"niseko"}
JSONS={slug:json.loads((META/(name+"MediaCandidates.json")).read_text(encoding="utf8")) for slug,name in FILES.items()}
QUEUE=[
 ("st-moritz","kulm-hotel","view-2",["Kulm Hotel Sankt Moritz 2022-09-25 01.jpg","Kulm Hotel Sankt Moritz 2022-09-25 02.jpg"]),
 ("st-moritz","kulm-hotel","view-3",["Kulm Hotel Sankt Moritz 2022-09-25 03.jpg","Kulm Hotel Sankt Moritz 2022-09-25 04.jpg"]),
 ("aspen","destination","scene-9",["Maroon Bells, Aspen Colorado (35486985686).jpg","Maroon Bells seen from Aspen Highlands, 2017.jpg"]),
 ("niseko","destination","scene-6",["Kutchan-STA 2024.jpg","Kutchan town from Asahigaoka.JPG"]),
 ("niseko","destination","scene-9",["Goshiki spa roten.JPG","Niseko Yumoto Koyunuma 2007.jpg"])
]
def get(url,params=None):
 for attempt in range(4):
  try:
   r=SESSION.get(url,params=params,timeout=30)
   if r.status_code==429:
    delay=min(20,5*(attempt+1))
    print("MEDIAWIKI_RATE_LIMIT retry in",delay,"seconds",flush=True)
    time.sleep(delay)
    continue
   r.raise_for_status();return r
  except requests.RequestException as exc:
   print("SOURCE_UNAVAILABLE",str(exc)[:100],flush=True)
   if attempt<3:time.sleep(2*(attempt+1))
 return None
def metadata(title):
 api="https://commons.wikimedia.org/w/api.php"
 params={"action":"query","titles":"File:"+title,"prop":"imageinfo","iiprop":"url|extmetadata","iiurlwidth":1700,"format":"json"}
 res=get(api,params)
 if res is None:return None
 try:
  obj=res.json()
  for item in obj.get("query",{}).get("pages",{}).values():
   if "missing" in item:continue
   inf=(item.get("imageinfo") or [{}])[0]
   meta=inf.get("extmetadata") or {}
   lic=(meta.get("LicenseShortName") or {}).get("value","")
   if not re.search("CC BY|CC0|Public domain|PD-",lic,re.I):
    print("BLOCKED_LICENSE",title,lic,flush=True);return None
   url=inf.get("thumburl")
   if not url:return None
   artist=html.unescape(re.sub(r"<[^>]*>"," ",(meta.get("Artist") or {}).get("value",""))).strip()
   license_link=(meta.get("LicenseUrl") or {}).get("value","")
   return {"url":url,"sourcePage":"https://commons.wikimedia.org/wiki/File:"+title.replace(" ","_"),
     "credit":artist,"license":lic,"licenseUrl":license_link,"title":title}
 except (ValueError,TypeError,KeyError) as exc:print("INVALID_METADATA",title,str(exc)[:90],flush=True)
 return None
def picture(url):
 r=get(url)
 if r is None or len(r.content)>16_000_000:return None
 try:
  with Image.open(BytesIO(r.content)) as image:
   im=ImageOps.exif_transpose(image).convert("RGB")
   size=im.size
   if size[0]<900 or size[1]<460 or not (1.10 < size[0]/size[1] < 3.3):return None
   im.thumbnail((1800,1350),Image.Resampling.LANCZOS)
   mem=BytesIO();im.save(mem,"WEBP",quality=82,method=5)
   return mem.getvalue(),size,im.size
 except (OSError,ValueError) as exc:print("CORRUPT_FILE",str(exc)[:90],flush=True)
 return None
def hash64(data):
 with Image.open(BytesIO(data)) as image:
  grey=image.convert("L").resize((9,8))
  vals=list(grey.getdata())
  return sum(1<<(row*8+col) for row in range(8) for col in range(8) if vals[row*9+col]>vals[row*9+col+1])
def save(slug,group,key,entry):
 manifest=JSONS[slug]
 records=manifest["destinationScenes" if group=="destination" else "hotels"]
 record=next(x for x in records if x["key"]==key and (group=="destination" or x.get("propertyKey")==group))
 result=picture(entry["url"])
 if result is None:return False
 data,size,output=result
 current_hash=hash64(data)
 for other in manifest["hotels"]+manifest["destinationScenes"]:
  if other is record or other["status"]!="candidate_needs_visual_review":continue
  path=other.get("localPath")
  if path and Path("public"+path).exists() and (current_hash^hash64(Path("public"+path).read_bytes())).bit_count()<8:
   print("DUPLICATE_REFUSED",slug,key,path,flush=True)
   return False
 destination=Path("public/images/travel")/(slug+"-premium")/group/(key+".webp")
 destination.parent.mkdir(parents=True,exist_ok=True)
 destination.write_bytes(data)
 record.update({"status":"candidate_needs_visual_review",
   "localPath":"/"+str(destination).removeprefix("public/"),
   "downloadUrl":entry["url"],"sourcePage":entry["sourcePage"],
   "candidateContext":entry["title"],"credit":entry["credit"],
   "license":entry["license"],"licenseUrl":entry["licenseUrl"],
   "rights":"Commons photo licence verified at source; any attribution, share-alike, adaptation and trademark rules need compliance. Visual QA still required.",
   "sha256":hashlib.sha256(data).hexdigest(),"bytes":len(data),
   "originalSize":size,"outputSize":output,"commercialRightsCleared":False,
   "visuallyVerified":False})
 record.pop("visualQaWarning",None)
 print("ADDED",slug,group,key,entry["title"],entry["license"],flush=True)
 return True

for slug,group,key,titles in QUEUE:
 ok=False
 for title in titles:
  record=metadata(title)
  if record and save(slug,group,key,record):ok=True;break
  time.sleep(3)
 if not ok:print("REMAINS_BLOCKED",slug,group,key,flush=True)
 # Be gentle with Wikimedia's API; backoff handles any 429 responses
 time.sleep(4)
for slug,manifest in JSONS.items():
 manifest["downloadedHotelCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in manifest["hotels"])
 manifest["downloadedDestinationCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in manifest["destinationScenes"])
 manifest["visuallyVerified"]=False
 manifest["approvedForCommercialPublication"]=False
 (META/(FILES[slug]+"MediaCandidates.json")).write_text(json.dumps(manifest,indent=2,ensure_ascii=False)+"\n",encoding="utf8")
 print("REPORT",slug,manifest["downloadedHotelCandidates"],"/12 +",manifest["downloadedDestinationCandidates"],"/9; blocked for independent visual and rights QA",flush=True)
