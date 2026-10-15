#!/usr/bin/env python3
"""Recover 5 photo locations from EXACT Wikimedia file titles with documented attribution.
Operator confirmed usage rights. No incorrect hotel/source substitution or automatic visual signoff.
"""
from __future__ import annotations
import html,hashlib,json,re,time
from io import BytesIO
from pathlib import Path
import requests
from PIL import Image,ImageOps

S=requests.Session()
S.headers.update({"User-Agent":"BosphorasLuxuryStays-PhotoAudit/2.0 (credit and origin preserved)","Accept":"application/json,image/webp,image/jpeg,*/*"})
FILES={"megeve":"megeve","jackson-hole":"jacksonHole","val-disere":"valDisere"}
SOURCES=[
 ("megeve","scene-5","Megève Côte 2000- Pour village EDT.jpg","Côte 2000, Megève, panorama estival confirmé par la description et le lieu"),
 ("megeve","scene-8","Megève, depuis la chaîne du Mont-Joly.jpg","Village et environs de Megève en été, photographie de juillet 2023"),
 ("jackson-hole","scene-6","Moose lying in grass with light snow and female moose in the background at Grand Teton National Park, Wyoming (27cbf884-c1b0-4e43-8ba0-46e2be45d43a).jpg","Faune du parc national de Grand Teton, orignaux"),
 ("jackson-hole","scene-9","JacksonStreet2.jpg","Rue proche de Town Square, Jackson, Wyoming, photo historique de 2006"),
 ("val-disere","scene-3","Face de Bellevarde 2014.JPG","Face de Bellevarde photographiée en hiver 2013/2014")
]
DATA={city:json.loads(Path("data/travel/"+stem+"MediaCandidates.json").read_text(encoding="utf8")) for city,stem in FILES.items()}
def metadata(title):
 for attempt in range(3):
  try:
   r=S.get("https://commons.wikimedia.org/w/api.php",params={"action":"query","titles":"File:"+title,
    "prop":"imageinfo","iiprop":"url|extmetadata","iiurlwidth":1850,"format":"json"},timeout=28)
   if r.status_code==429:time.sleep(7*(attempt+1));continue
   r.raise_for_status()
   for p in r.json().get("query",{}).get("pages",{}).values():
    if "missing" in p:continue
    i=(p.get("imageinfo") or [{}])[0]
    extra=i.get("extmetadata") or {}
    lic=(extra.get("LicenseShortName") or {}).get("value","")
    if not re.search(r"CC BY|CC0|Public domain|PD-",lic,re.I):return None
    artist=html.unescape(re.sub("<[^>]*>"," ",(extra.get("Artist") or {}).get("value",""))).strip()
    return {"url":i.get("thumburl") or i.get("url"),"source":"https://commons.wikimedia.org/wiki/File:"+title.replace(" ","_"),
      "license":lic,"licenseUrl":(extra.get("LicenseUrl") or {}).get("value",""),"artist":artist}
  except (ValueError,requests.RequestException) as e:print("META_ERROR",title,str(e)[:85],flush=True)
 return None
def webp(url):
 if not url:return None
 try:
  r=S.get(url,timeout=32);r.raise_for_status()
  if len(r.content)>15_000_000:return None
  with Image.open(BytesIO(r.content)) as f:
   im=ImageOps.exif_transpose(f).convert("RGB")
   if im.width<850 or im.height<430 or not 1.08<im.width/im.height<3.45:return None
   orig=im.size;im.thumbnail((1800,1300),Image.Resampling.LANCZOS)
   out=BytesIO();im.save(out,"WEBP",quality=84,method=5)
   return out.getvalue(),orig,im.size
 except (OSError,ValueError,requests.RequestException) as e:print("DOWNLOAD_ERROR",str(e)[:100],flush=True)
 return None
for city,slot,title,context in SOURCES:
 item=next(x for x in DATA[city]["destinationScenes"] if x["key"]==slot)
 if item["status"]!="missing":
  print("SKIP_ALREADY_PRESENT",city,slot);continue
 meta=metadata(title)
 if not meta:
  print("NOT_FOUND",city,slot,title,flush=True);continue
 photo=webp(meta["url"])
 if not photo:
  print("NOT_DOWNLOADED",city,slot,flush=True);continue
 payload,orig,outsize=photo
 path="/images/travel/"+city+"-premium/destination/"+slot+".webp"
 target=Path("public"+path);target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(payload)
 item.update({"status":"candidate_needs_visual_review","localPath":path,"sourcePage":meta["source"],"downloadUrl":meta["url"],
  "candidateContext":"File:"+title,"credit":meta["artist"],"license":meta["license"],"licenseUrl":meta["licenseUrl"],
  "sha256":hashlib.sha256(payload).hexdigest(),"bytes":len(payload),"originalSize":orig,"outputSize":outsize,
  "ownerRightsAuthorization":"Confirmed by Bosphoras operator on 2026-10-15; original author and licence retained.",
  "commercialRightsCleared":True,"visuallyVerified":False,
  "visualQaWarning":"Source place explicitly named, awaiting aesthetic / image-frame manual check; date and season: "+context,
  "rights":"User confirmed rights. Preserve licence, author and share-alike terms when distributing derivative WebP."})
 print("ADDED",city,slot,meta["source"],flush=True)
 time.sleep(2)
for city,stem in FILES.items():
 doc=DATA[city]
 doc["downloadedDestinationCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in doc["destinationScenes"])
 doc["approvedForCommercialPublication"]=False;doc["visuallyVerified"]=False
 Path("data/travel/"+stem+"MediaCandidates.json").write_text(json.dumps(doc,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 print("AFTER",city,doc["downloadedHotelCandidates"],"/12",doc["downloadedDestinationCandidates"],"/9",flush=True)
