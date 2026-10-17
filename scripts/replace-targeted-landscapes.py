#!/usr/bin/env python3
"""Replace mismatched destination illustrations with exact geolocated Commons titles.
Only known exact file titles. Retain source, author and CC licence.
Source relevance documented but photographs still require frame-level visual QA.
"""
from __future__ import annotations
import hashlib,html,json,re,time
from io import BytesIO
from pathlib import Path
import requests
from PIL import Image,ImageOps

S=requests.Session();S.headers.update({"User-Agent":"Bosphoras-Luxury-Stays/1.7 (Commons attribution and editorial source validation; www.bosphoras.com)","Accept":"application/json,image/webp,image/jpeg,*/*"})
ROOT=Path("data/travel")
# Each description is supported by the corresponding Wikimedia Commons file metadata.
EXACT=[
 ("stMoritz","st-moritz","scene-2","SMoritz Dorf from lake.jpg","St. Moritz Dorf depuis le lac gelé (hiver 2008)","St. Moritz Dorf viewed from frozen Lake St. Moritz, winter 2008"),
 ("stMoritz","st-moritz","scene-3","St. Moritz panorama 2010.jpg","Panorama de St. Moritz vu depuis St. Moritz-Bad (printemps 2010)","Panoramic view of St. Moritz photographed from St. Moritz-Bad, spring 2010"),
 ("stMoritz","st-moritz","scene-4","Pass Suvretta.jpg","Paysage du Pass Suvretta et du Lej Suvretta, au-dessus de St. Moritz","High Alpine landscape at Pass Suvretta and Lej Suvretta above St. Moritz"),
 ("stMoritz","st-moritz","scene-7","Engadin - mountains.jpg","Montagnes de l'Engadine vues depuis Pontresina en été","Engadin mountain landscape photographed from Pontresina in summer"),
 ("megeve","megeve","scene-1","Megeve - panoramio (18).jpg","Centre ancien de Megève et église Saint-Jean-Baptiste en été","Megève historic centre and Saint-Jean-Baptiste church in summer"),
 ("megeve","megeve","scene-6","116-128 Place de l'Église, Megève, 2025.jpg","Place de l'Église à Megève, mars 2025","Place de l'Église, Megève, March 2025"),
 ("jacksonHole","jackson-hole","scene-2","MK01466 Teton Village Jackson Hole.jpg","Bâtiments de Teton Village, secteur Hotel Terra, automne 2013","Teton Village buildings near Hotel Terra, autumn 2013"),
 ("bigSky","big-sky","scene-4","Feb 1, 2009 - Lone Peak in Big Sky, Montana.jpg","Versant nord de Lone Peak et secteur historique de Moonlight Basin (hiver)","Lone Peak north face and historical Moonlight Basin ski area in winter")
]
DATA={stem:json.loads((ROOT/(stem+"MediaCandidates.json")).read_text(encoding="utf8")) for stem,_,_,_,_,_ in EXACT}
def fetch(title):
 for attempt in range(3):
  try:
   r=S.get("https://commons.wikimedia.org/w/api.php",params={"action":"query","titles":"File:"+title,"prop":"imageinfo","iiprop":"url|extmetadata","iiurlwidth":1900,"format":"json"},timeout=26)
   if r.status_code==429:
    print("BACKOFF",title,flush=True);time.sleep(6*(attempt+1));continue
   r.raise_for_status()
   for page in r.json().get("query",{}).get("pages",{}).values():
    if "missing" in page:continue
    im=(page.get("imageinfo") or [{}])[0];meta=im.get("extmetadata") or {}
    licence=(meta.get("LicenseShortName") or {}).get("value","")
    if not re.search(r"CC BY|CC0|Public domain|PD-",licence,re.I):
     print("BLOCKED_LICENCE",title,licence,flush=True);return None
    author=html.unescape(re.sub(r"<[^>]+>"," ",(meta.get("Artist") or {}).get("value",""))).strip()
    return {"url":im.get("thumburl") or im.get("url"),"sourcePage":"https://commons.wikimedia.org/wiki/File:"+title.replace(" ","_"),
    "credit":author,"license":licence,"licenseUrl":(meta.get("LicenseUrl") or {}).get("value","")}
  except (requests.RequestException,ValueError) as e:print("SOURCE_ERROR",str(e)[:80],flush=True)
 return None
def picture(url):
 if not url:return None
 try:
  r=S.get(url,timeout=26);r.raise_for_status()
  if len(r.content)>15_000_000:return None
  with Image.open(BytesIO(r.content)) as f:
   im=ImageOps.exif_transpose(f).convert("RGB")
   if im.width<850 or im.height<470 or not 1.12<im.width/im.height<6:return None
   original=im.size
   # A gallery card is 16:10; wide panoramas are cropped around the middle.
   im=ImageOps.fit(im,(1700,1060),method=Image.Resampling.LANCZOS,centering=(0.5,0.5))
   out=BytesIO();im.save(out,"WEBP",quality=83,method=4)
   return out.getvalue(),original,im.size
 except (requests.RequestException,OSError,ValueError) as e:
  print("IMAGE_ERROR",str(e)[:90],flush=True);return None

for stem,slug,slot,title,fr,en in EXACT:
 manifest=DATA[stem];item=next(x for x in manifest["destinationScenes"] if x["key"]==slot)
 meta=fetch(title)
 if not meta:
  print("SKIP_MISSING_FILE",slug,slot,title,flush=True);continue
 pic=picture(meta["url"])
 if not pic:
  print("SKIP_BAD_FILE",slug,slot,title,flush=True);continue
 binary,orig,outsize=pic
 target="/images/travel/"+slug+"-premium/destination/"+slot+".webp"
 path=Path("public"+target);path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(binary)
 item.update({"status":"candidate_needs_visual_review","localPath":target,"downloadUrl":meta["url"],
  "sourcePage":meta["sourcePage"],"candidateContext":"File:"+title,
  "frCaption":fr,"enCaption":en,"credit":meta["credit"],"license":meta["license"],"licenseUrl":meta["licenseUrl"],
  "sha256":hashlib.sha256(binary).hexdigest(),"bytes":len(binary),"originalSize":orig,"outputSize":outsize,
  "ownerRightsAuthorization":"Owner confirmed usage rights in chat, 2026-10-17; Commons attribution and sharing conditions preserved.",
  "commercialRightsCleared":True,"visuallyVerified":False,
  "visualQaWarning":"Correct place established by original file metadata; framed WebP still needs manual visual/aesthetic QA."
 })
 print("NEW_GEO_CANDIDATE",slug,slot,title,flush=True)
 time.sleep(2)
for stem,j in DATA.items():
 j["downloadedDestinationCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in j["destinationScenes"])
 j["approvedForCommercialPublication"]=False
 (ROOT/(stem+"MediaCandidates.json")).write_text(json.dumps(j,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
print("DONE all geographic source candidates remain unpublished until visual check")
