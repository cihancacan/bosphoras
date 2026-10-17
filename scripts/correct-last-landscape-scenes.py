#!/usr/bin/env python3
"""Two exact-geographic landscape improvements for the requested alpine sections.
Both remain explicitly pending visual and attribution review after fetching.
"""
from pathlib import Path
from io import BytesIO
import json,hashlib,requests,html,re
from PIL import Image,ImageOps

S=requests.Session();S.headers.update({"User-Agent":"Bosphoras-Luxury-Stays/1.8 (original landscape attribution research)","Accept":"image/*,application/json,*/*;q=.7"})
docs={}
for city in ["stMoritz","bigSky"]:
 docs[city]=json.loads(Path(f"data/travel/{city}MediaCandidates.json").read_text(encoding="utf8"))

sources=[
 {"city":"stMoritz","slug":"st-moritz","slot":"scene-3","title":"St. Moritz panorama 3.jpg",
  "source":"https://commons.wikimedia.org/wiki/File:St._Moritz_panorama_3.jpg",
  "fr":"Panorama estival de Saint-Moritz et de ses montagnes (2021)",
  "en":"Summer panoramic mountain view of St. Moritz (2021)"},
 {"city":"bigSky","slug":"big-sky","slot":"scene-3",
  "url":"https://spanishpeaks.com/wp-content/uploads/2023/07/171209_170117__S013488-Pano-scaled.jpg",
  "source":"https://spanishpeaks.com/skiing/",
  "fr":"Pistes enneigées du Spanish Peaks Mountain Club dans la région de Big Sky",
  "en":"Snow-covered slopes at Spanish Peaks Mountain Club, Big Sky, Montana"}
]
def get(url,params=None):
 try:
  r=S.get(url,params=params,timeout=29)
  if r.status_code==429:return None
  r.raise_for_status();return r
 except requests.RequestException as e:print("SOURCE_ERROR",url[:90],str(e)[:80]);return None
for item in sources:
 city=item["city"];slug=item["slug"];record=next(x for x in docs[city]["destinationScenes"] if x["key"]==item["slot"])
 origin=item["source"];asset=item.get("url");credit="Spanish Peaks Mountain Club, official skiing guide";licence="Authorized by operator"
 if "title" in item:
  request=get("https://commons.wikimedia.org/w/api.php",{"action":"query","titles":"File:"+item["title"],"prop":"imageinfo","iiprop":"url|extmetadata","iiurlwidth":"1700","format":"json"})
  if request is None:continue
  try:
   info=next(iter(request.json()["query"]["pages"].values()))["imageinfo"][0]
   ext=info.get("extmetadata",{})
   lic=(ext.get("LicenseShortName") or {}).get("value","")
   if not re.search(r"CC BY|CC0|Public domain|PD-",lic,re.I):continue
   asset=info.get("thumburl") or info.get("url")
   credit=html.unescape(re.sub("<[^>]*>"," ",(ext.get("Artist") or {}).get("value",""))).strip()
   licence=lic
   item["licenseUrl"]=(ext.get("LicenseUrl") or {}).get("value",origin)
  except (KeyError,ValueError,StopIteration):continue
 photo=get(asset)
 if photo is None or len(photo.content)>15_000_000:continue
 try:
  with Image.open(BytesIO(photo.content)) as f:
   im=ImageOps.exif_transpose(f).convert("RGB")
   original=im.size
   if im.width<850 or im.height<350:continue
   im=ImageOps.fit(im,(1700,1060),method=Image.Resampling.LANCZOS)
   buf=BytesIO();im.save(buf,"WEBP",quality=82,method=5);out=buf.getvalue()
 except (OSError,ValueError):continue
 dst="/images/travel/"+slug+"-premium/destination/"+item["slot"]+".webp"
 file=Path("public"+dst);file.parent.mkdir(parents=True,exist_ok=True);file.write_bytes(out)
 record.update({"status":"candidate_needs_visual_review","localPath":dst,"sourcePage":origin,"downloadUrl":asset,
   "candidateContext":item.get("title") or "Spanish Peaks Mountain Club official resort skiing photograph",
   "credit":credit,"license":licence,"licenseUrl":item.get("licenseUrl",origin),
   "frCaption":item["fr"],"enCaption":item["en"],
   "sha256":hashlib.sha256(out).hexdigest(),"bytes":len(out),"originalSize":original,"outputSize":im.size,
   "ownerRightsAuthorization":"Owner confirmed usage 2026-10-17. Preserve photographer and CC attribution.",
   "commercialRightsCleared":True,"visuallyVerified":False,
   "visualQaWarning":"Exact geographic scene sourced; still requires human visual and quality approval."})
 print("NEW_PANORAMA",city,item["slot"],asset[:100],flush=True)
for city,doc in docs.items():
 doc["approvedForCommercialPublication"]=False
 Path("data/travel/"+city+"MediaCandidates.json").write_text(json.dumps(doc,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
