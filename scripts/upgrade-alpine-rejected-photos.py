#!/usr/bin/env python3
"""Correct select alpine photos strictly by documented original sources.
Only hotel galleries from the exact property's web pages or licensed Commons.
No invented links, hotel substitutions, or automatic rights approval.
"""
from __future__ import annotations
import html, hashlib, json, re, time
from io import BytesIO
from pathlib import Path
from urllib.parse import urljoin, urlparse
import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageOps

session=requests.Session()
session.headers.update({"User-Agent":"BosphorasLuxuryStays/1.2 (authentic image source matching)","Accept":"text/html,image/webp,image/jpeg,image/*;q=.8"})
ROOT=Path("data/travel")
MANIFESTS={name:json.loads((ROOT/(key+"MediaCandidates.json")).read_text(encoding="utf8")) for name,key in (("st-moritz","stMoritz"),("aspen","aspen"),("niseko","niseko"))}
def get(url):
 try:
  r=session.get(url,timeout=25);r.raise_for_status()
  return r
 except requests.RequestException as e:
  print("UNAVAILABLE",url[:100],str(e)[:90],flush=True)
  return None
def source_candidates(page,terms):
 response=get(page)
 if response is None or "html" not in response.headers.get("content-type",""):return []
 soup=BeautifulSoup(response.text,"html.parser")
 candidates=[]
 for element in soup.select("img,source"):
  desc=element.get("alt") or element.get("title") or element.get("aria-label") or ""
  if not any(term in desc.lower() for term in terms):continue
  for prop in ("data-src","src","data-lazy-src","srcset","data-srcset"):
   text=element.get(prop)
   if not text:continue
   for raw in text.split(","):
    url=urljoin(page,html.unescape(raw.strip().split(" ")[0]))
    if url.startswith("https://") and re.search(r"\.(?:jpg|jpeg|png|webp)(?:[?#]|$)",url,re.I):
     if urlparse(url).hostname not in ("setsuniseko.com","www.setsuniseko.com","media.kulm.com","www.kulm.com","kulm.com"):continue
     if url not in [i["url"] for i in candidates]:
      candidates.append({"url":url,"alt":desc,"sourcePage":page})
 return candidates
def webp(url):
 response=get(url)
 if response is None or len(response.content)>18_000_000:return None
 try:
  with Image.open(BytesIO(response.content)) as img:
   img=ImageOps.exif_transpose(img).convert("RGB")
   if img.width<900 or img.height<480 or not 1.05<img.width/img.height<3.3:return None
   original=img.size
   img.thumbnail((1900,1400),Image.Resampling.LANCZOS)
   output=img.size
   data=BytesIO();img.save(data,"WEBP",quality=84,method=5)
   return data.getvalue(),original,output
 except (OSError,ValueError):return None
def slot(city,prop,key):
 return next(x for x in MANIFESTS[city]["hotels" if prop!="destination" else "destinationScenes"] if x["key"]==key and (prop=="destination" or x.get("propertyKey")==prop))
def rewrite(city,prop,key,image,source,desc,credit,lic="",licurl=""):
 item=slot(city,prop,key)
 asset=webp(image)
 if asset is None:return False
 payload,original,output=asset
 digest=hashlib.sha256(payload).hexdigest()
 others=MANIFESTS[city]["hotels"]+MANIFESTS[city]["destinationScenes"]
 if any(z is not item and z.get("sha256")==digest for z in others):
  print("EXACT_DUPLICATE",city,prop,key);return False
 path=Path("public/images/travel")/(city+"-premium")/prop/(key+".webp")
 path.parent.mkdir(parents=True,exist_ok=True)
 path.write_bytes(payload)
 item.update({"status":"candidate_needs_visual_review",
   "sourcePage":source,"downloadUrl":image,
   "candidateContext":desc,"credit":credit,"license":lic,"licenseUrl":licurl,
   "localPath":"/"+str(path).removeprefix("public/"),
   "sha256":digest,"bytes":len(payload),"originalSize":original,"outputSize":output,
   "visuallyVerified":False,"commercialRightsCleared":False,
   "rights":"Source documented and precise identity suggested; manual visual and legal approval still required"})
 item.pop("visualQaWarning",None)
 print("REPLACED",city,prop,key,desc[:80],flush=True)
 return True

# Setsu official gallery supplies correctly named individual rooms and suites.
setsu_page="https://setsuniseko.com/en/gallery/"
setsu_targets=[
 ("view-1",("setsu niseko bedroom","studio annupuri winter","setsu niseko kitchen")),
 ("view-2",("2 bedroom courtyard living","3 bedroom yotei master bedroom","4 bedroom onsen yotei winter"))
]
for key,terms in setsu_targets:
 candidates=source_candidates(setsu_page,terms)
 print("SETSU_SEARCH",key,len(candidates),flush=True)
 success=False
 for term in terms:
  for candidate in candidates:
   if term not in candidate["alt"].lower():continue
   if rewrite("niseko","setsu-niseko",key,candidate["url"],candidate["sourcePage"],
     candidate["alt"],"Setsu Niseko, photographie officielle de la chambre / résidence"):
    success=True;break
  if success:break
 if not success:print("SETSU_REPLACEMENT_STILL_REQUIRED",key,flush=True)

# Kulm official media gallery; do not replace with a random photo from St. Moritz.
for key,terms in [
 ("view-2",("pool","spa","indoor pool","wellness")),
 ("view-3",("lobby","suite","kulm hotel winter","hotel exterior"))]:
 done=False
 for page in ("https://www.kulm.com/en/image-gallery/","https://www.kulm.com/en/summer/wellness","https://www.kulm.com/en/"):
  candidates=source_candidates(page,terms)
  print("KULM_SEARCH",key,page,len(candidates),flush=True)
  for candidate in candidates:
   if rewrite("st-moritz","kulm-hotel",key,candidate["url"],candidate["sourcePage"],
      candidate["alt"],"Kulm Hotel St. Moritz, galerie officielle"):
    done=True;break
  if done:break
 if not done:print("KULM_REPLACEMENT_STILL_REQUIRED",key,flush=True)

# Better Maroon Bells reflection, U.S. Department of Agriculture photograph.
# Source explicitly identifies the exact peaks, source photographer and reuse terms.
title="Maroon Bells, two peaks in the Elk Mountains that are less than half-mile apart, are reflected on Maroon Lake.jpg"
commons_api="https://commons.wikimedia.org/w/api.php"
r=get(commons_api+"?action=query&prop=imageinfo&iiprop=url%7Cextmetadata&iiurlwidth=1900&format=json&titles="+requests.utils.quote("File:"+title))
if r:
 try:
  page=next(iter(r.json()["query"]["pages"].values()))
  info=page["imageinfo"][0]
  ext=info.get("extmetadata",{})
  rights=(ext.get("LicenseShortName") or {}).get("value","")
  if re.search("CC BY|CC0|Public domain",rights,re.I):
   source="https://commons.wikimedia.org/wiki/File:"+title.replace(" ","_")
   credit="Scott Mecum, U.S. Forest Service / U.S. Department of Agriculture"
   rewrite("aspen","destination","scene-9",info.get("thumburl") or info["url"],source,
     "Reflets des Maroon Bells dans Maroon Lake, photographie officielle USDA",credit,rights,
     (ext.get("LicenseUrl") or {}).get("value","https://creativecommons.org/licenses/by/2.0/"))
 except (ValueError,KeyError,StopIteration) as e:print("MAROON_BELLS_SKIPPED",e,flush=True)
for name,key in (("st-moritz","stMoritz"),("aspen","aspen"),("niseko","niseko")):
 m=MANIFESTS[name]
 m["downloadedHotelCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in m["hotels"])
 m["downloadedDestinationCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in m["destinationScenes"])
 m["visuallyVerified"]=False
 m["approvedForCommercialPublication"]=False
 (ROOT/(key+"MediaCandidates.json")).write_text(json.dumps(m,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 print("QA_COUNTS",name,m["downloadedHotelCandidates"],m["downloadedDestinationCandidates"],
  "pending_warning",sum(bool(x.get("visualQaWarning")) for x in m["hotels"]+m["destinationScenes"]),flush=True)
