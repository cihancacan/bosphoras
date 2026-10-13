#!/usr/bin/env python3
"""Real Bali landscape imagery, independently sourced from Wikimedia Commons.
Rights/license attribution documented; no generic photos in hotel galleries.
"""
from datetime import datetime,timezone
from pathlib import Path
from urllib.parse import quote
from io import BytesIO
import requests,hashlib,json
from PIL import Image,ImageOps
FILES=[
 ("bali-uluwatu-ocean-hero","Uluwatu Cliffs, Bali.jpg","Tiya20","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/","Les falaises d’Uluwatu et l’océan Indien, Bali","Uluwatu limestone cliffs overlooking the blue Indian Ocean"),
 ("bali-ubud-tegallalang","Tegallalang Rice Terraces Bali.jpg","Philip Nalangan","CC BY 4.0","https://creativecommons.org/licenses/by/4.0/","Les rizières en terrasses de Tegallalang près d’Ubud","Lush Tegallalang rice terraces in the Ubud countryside"),
 ("bali-jimbaran-sunset","Jimbaran beach at sunset.jpg","Akmaie Ajam","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/","La plage de Jimbaran au coucher du soleil","Sunset at Jimbaran beach with seaside restaurants"),
 ("bali-seminyak-sunset","Seminyak Beach at sunset.jpg","Christophe95","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/","Plage de Seminyak dans la lumière du coucher du soleil","Seminyak beach in warm sunset light"),
 ("bali-padang-padang","Padang Padang Beach.jpg","TMFalkner","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/","La crique et la plage de Padang Padang dans le sud de Bali","Padang Padang beach cove on Bali's south coast"),
 ("bali-tegallalang-secondary","Tegalalang Rice Terraces.jpg","Freddy eduardo","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/","Autre perspective sur les rizières de Tegallalang près d’Ubud","Another landscape view of Tegallalang's stepped green rice paddies")
]
ROOT=Path("public/images/travel/bali-premium/destination")
REPORT=Path("data/travel/baliDestinationImageSources.json")
H={"User-Agent":"BosphorasBaliLuxuryEditorial/1.0 (license and credit preserved)","Accept":"image/webp,image/jpeg,image/png,image/*;q=0.8"}
S=requests.Session();records=[]
for key,filename,author,license_name,license_url,fr,en in FILES:
 page="https://commons.wikimedia.org/wiki/File:"+filename.replace(" ","_")
 result={"key":key,"sourceFile":filename,"sourcePage":page,"author":author,"license":license_name,
  "licenseUrl":license_url,"fr":fr,"en":en,"localPath":"/images/travel/bali-premium/destination/"+key+".webp","status":"failed"}
 url="https://commons.wikimedia.org/wiki/Special:FilePath/"+quote(filename)
 errors=[]
 for width in (1920,1600,1200,0):
  try:
   u=url+("?width="+str(width) if width else "")
   r=S.get(u,headers=H,timeout=40,stream=True);r.raise_for_status()
   buf=bytearray()
   for chunk in r.iter_content(200000):
    buf.extend(chunk)
    if len(buf)>27000000:raise ValueError("Image exceeds 27 MB")
   with Image.open(BytesIO(buf)) as orig:
    img=ImageOps.exif_transpose(orig).convert("RGB")
    if img.width<980 or img.height<550 or img.width/img.height<1.12:raise ValueError(f"Unsuitable landscape size {img.size}")
    original=[img.width,img.height]
    img.thumbnail((2000,1400),Image.Resampling.LANCZOS)
    ROOT.mkdir(parents=True,exist_ok=True)
    target=ROOT/(key+".webp")
    img.save(target,format="WEBP",quality=87,method=6)
    result.update(status="downloaded",downloadUrl=r.url,originalSize=original,
     outputSize=[img.width,img.height],bytes=target.stat().st_size,
     sha256=hashlib.sha256(target.read_bytes()).hexdigest(),
     edit="Resized to max 2000 px, normalized EXIF orientation, converted to WebP q87")
    print("OK",key,result["bytes"],flush=True);break
  except Exception as e:errors.append(str(e)[:145])
 if result["status"]!="downloaded":
  result["errors"]=errors
  print("FAILED",key,errors,flush=True)
 records.append(result)
REPORT.parent.mkdir(parents=True,exist_ok=True)
REPORT.write_text(json.dumps({"scope":"Six geolocated Bali landscape photos, not accommodation images",
 "createdAt":datetime.now(timezone.utc).isoformat(),"downloaded":sum(r["status"]=="downloaded" for r in records),
 "expected":len(FILES),"items":records},indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
