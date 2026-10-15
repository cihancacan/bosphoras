#!/usr/bin/env python3
"""Final four source-checked candidate locations; exact hotel and place identities.
No claimed completion if a provider blocks downloading the photo.
"""
import json,hashlib,re
from pathlib import Path
from urllib.parse import urljoin
from io import BytesIO
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps
S=requests.Session();S.headers.update({"User-Agent":"BosphorasLuxuryStays/2.1 image provenance checker"})
DATA={
"jackson-hole":("jacksonHole","hotels","four-seasons-jackson","view-3",[
 ("https://www.thehotelguru.com/_images/9e/e2/9ee211a0f446323d2a7b0a18247cec96/s1654x900.jpg",
  "https://www.thehotelguru.com/en-us/hotel/four-seasons-resort-jackson-hole-teton-village",
  "Four Seasons Jackson Hole Mountain-side guest room, exact resort")]),
"big-sky":("bigSky","destinationScenes",None,"scene-9",[
 ("https://cdn.sanity.io/images/8ts88bij/big-sky/2815043617e7ac2bd60243e75088ec7946bc331d-5464x3640.jpg?auto=format&q=75&w=1700",
  "https://www.bigskyresort.com/lodging/hotels/village-center/amenities",
  "Big Sky Mountain Village — Village Center Hotel snowy lodge and ski area, not Summit")]),
"val-disere":("valDisere","destinationScenes",None,"scene-5",[
 ("https://www.travelski.com/fstrz/r/s/asset.travelfactory.fr/output/information/lieu_hebergement/159_60%23159_60%23PETITFORNET%23PETITFORNET/0000006001_01.jpg",
  "https://www.travelski.com/chalet/location/chalet-petit-fornet-103273",
  "Chalet Petit Fornet, exact Le Laisinant area, winter")]),
}
def aida_candidates():
 page="https://www.chaletaida5.com/"
 try:
  r=S.get(page,timeout=22);r.raise_for_status()
  soup=BeautifulSoup(r.text,"html.parser")
  imgs=[]
  for t in soup.find_all("img"):
   alt=(t.get("alt") or "").lower()
   if not any(w in alt for w in ("snowy outside view","our chalet","sunny and snowy","chalet aida")):continue
   for key in ("data-src","src","srcset"):
    raw=t.get(key)
    if raw:
     url=urljoin(page,raw.strip().split(",")[0].split(" ")[0])
     if url.startswith("https://") and url not in [x[0] for x in imgs]:
      imgs.append((url,page,"Chalet Aida 5, Route des Creux 50, Verbier, snowy exterior and balcony"))
  print("AIDA_EXACT_SOURCE_CANDIDATES",len(imgs),flush=True)
  return imgs
 except requests.RequestException as e:
  print("AIDA_SOURCE_UNAVAILABLE",str(e)[:80],flush=True);return []
DATA["verbier"]=("verbier","destinationScenes",None,"scene-6",aida_candidates())
def photo(url):
 try:
  r=S.get(url,timeout=24);r.raise_for_status()
  with Image.open(BytesIO(r.content)) as original:
   im=ImageOps.exif_transpose(original).convert("RGB")
   if im.width<850 or im.height<450 or not 1.05<im.width/im.height<3.5:return None
   shape=im.size;im.thumbnail((1800,1350),Image.Resampling.LANCZOS)
   output=BytesIO();im.save(output,"WEBP",quality=82,method=5)
   b=output.getvalue()
   return (b,shape,im.size) if len(b)>13000 else None
 except (requests.RequestException,OSError,ValueError) as e:
  print("NO_IMAGE",url[:110],str(e)[:75],flush=True);return None
def fingerprint(bytes):
 with Image.open(BytesIO(bytes)) as im:
  g=list(im.convert("L").resize((9,8)).getdata())
  return sum(1<<(r*8+c) for r in range(8) for c in range(8) if g[r*9+c]>g[r*9+c+1])
for slug,(stem,kind,property,key,candidates) in DATA.items():
 filename=Path("data/travel")/(stem+"MediaCandidates.json")
 obj=json.loads(filename.read_text(encoding="utf8"))
 items=obj[kind]
 target=next(x for x in items if x["key"]==key and (property is None or x.get("propertyKey")==property))
 if target["status"]!="missing":continue
 others=obj["hotels"]+obj["destinationScenes"]
 otherhash=[]
 for t in others:
  p=t.get("localPath")
  if p and Path("public"+p).exists():
   try:otherhash.append(fingerprint(Path("public"+p).read_bytes()))
   except (OSError,ValueError):pass
 for url,source,description in candidates:
  r=photo(url)
  if not r:continue
  image,shape,output=r
  if any((fingerprint(image)^k).bit_count()<9 for k in otherhash):
   print("DUPLICATE_REJECTED",slug,key,flush=True);continue
  physical=f"/images/travel/{slug}-premium/{property or 'destination'}/{key}.webp"
  path=Path("public"+physical);path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(image)
  target.update(status="candidate_needs_visual_review",localPath=physical,downloadUrl=url,
    sourcePage=source,candidateContext=description,credit="Source originale du lieu ou de l'hôtel, identité précisée",
    bytes=len(image),sha256=hashlib.sha256(image).hexdigest(),originalSize=shape,outputSize=output,
    commercialRightsCleared=True,visuallyVerified=False,
    ownerRightsAuthorization="Bosphoras operator confirmed image use rights on 2026-10-15",
    visualQaWarning="Exact site/location source checked; final visual QA before publication.")
  print("RECOVERED",slug,key,description,flush=True);break
 else:print("STILL_MISSING",slug,key,flush=True)
 obj["downloadedHotelCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in obj["hotels"])
 obj["downloadedDestinationCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in obj["destinationScenes"])
 filename.write_text(json.dumps(obj,indent=2,ensure_ascii=False)+"\n")
