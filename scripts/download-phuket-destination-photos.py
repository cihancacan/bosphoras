#!/usr/bin/env python3
"""Real source-verified Phuket beach and heritage photography, separate from hotel galleries.
Wikimedia authors, CC licences and transformed files are documented.
"""
from pathlib import Path
from datetime import datetime,timezone
from urllib.parse import quote
from io import BytesIO
import json,hashlib,requests
from PIL import Image,ImageOps,ImageStat

PHOTOS=[
("phuket-kata-noi-beach-hero","Kata Noi beach, Katathani resort (40414030520).jpg","Phuket@photographer.net","CC BY 2.0","https://creativecommons.org/licenses/by/2.0/","La plage lumineuse de Kata Noi et l’eau turquoise de Phuket","Sunlit Kata Noi beach and turquoise Andaman Sea"),
("phuket-surin-beach","Surin Beach.JPG","Jpatokal","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/","La plage de Surin au nord-ouest de Phuket","Surin Beach on Phuket's northwest coast"),
("phuket-kamala-beach","Kamala beach.jpg","govertvissers","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/","Vue panoramique de la baie et de la plage de Kamala","Panorama of Kamala Bay and beach"),
("phuket-nai-harn-sunset","Sunset at Nai Harn beach, Phuket, Thailand 05.jpg","Phuket@photographer.net","CC BY 2.0","https://creativecommons.org/licenses/by/2.0/","Lumière chaude du coucher de soleil sur Nai Harn Beach","Warm sunset light at Nai Harn beach"),
("phuket-old-town","Phuket Old Town 1.jpg","Ryomaandres","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/","Façades historiques sino-portugaises de Phuket Old Town","Sino-Portuguese facades in Phuket Old Town"),
("phuket-promthep-cape","Promthep Cape Phuket.jpg","Christophe95","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/","Promthep Cape, les falaises et la mer d’Andaman","Promthep Cape cliffs and the Andaman Sea"),
("phuket-kata-alt","Phuket - Kata Beach 001.jpg","ADwarf","Public domain","https://creativecommons.org/publicdomain/mark/1.0/","Kata Beach et son littoral tropical","Kata Beach and Phuket tropical coast"),
("phuket-bang-tao-beach","Bang Tao Beach (53668069638).jpg","Raita Futo","CC BY 2.0","https://creativecommons.org/licenses/by/2.0/","La plage de Bang Tao sur la côte nord-ouest de Phuket","Bang Tao Beach along Phuket's northwest shoreline"),
("phuket-patong-beach","Patong Beach in Phuket.jpg","Ewong17","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/","La plage de Patong et le front de mer à Phuket","Patong Beach on Phuket's western coastline")
]
ROOT=Path("public/images/travel/phuket-premium/destination")
REPORT=Path("data/travel/phuketDestinationImageSources.json")
H={"User-Agent":"BosphorasLuxuryTravelPhotoAudit/1.0 (copyright attribution preserved)","Accept":"image/jpeg,image/webp,image/*;q=0.8"}
S=requests.Session();out=[];seen=set()
for key,filename,author,license_name,license_url,fr,en in PHOTOS:
 page="https://commons.wikimedia.org/wiki/File:"+filename.replace(" ","_")
 record={"key":key,"sourceFile":filename,"sourcePage":page,"author":author,"license":license_name,
 "licenseUrl":license_url,"fr":fr,"en":en,"localPath":f"/images/travel/phuket-premium/destination/{key}.webp","status":"failed"}
 errors=[]
 for width in (1920,1600,1200,0):
  try:
   u="https://commons.wikimedia.org/wiki/Special:FilePath/"+quote(filename)+(("?width="+str(width)) if width else "")
   r=S.get(u,timeout=37,headers=H,stream=True);r.raise_for_status()
   data=bytearray()
   for chunk in r.iter_content(192000):
    data.extend(chunk)
    if len(data)>28000000:raise ValueError("Oversized 28 MB")
   with Image.open(BytesIO(data)) as original:
    im=ImageOps.exif_transpose(original).convert("RGB")
    src=[im.width,im.height]
    if im.width<960 or im.height<470 or im.width/im.height<1.15:raise ValueError("Not suitable landscape "+str(src))
    # Keep panorama and crop only with CSS, never change the depicted place.
    im.thumbnail((2000,1400),Image.Resampling.LANCZOS)
    lightness=round(sum(ImageStat.Stat(im.resize((96,64))).mean)/3,1)
    if lightness<38:raise ValueError("Low lightness "+str(lightness))
    ROOT.mkdir(parents=True,exist_ok=True)
    dest=ROOT/(key+".webp")
    im.save(dest,"WEBP",quality=86,method=6)
    sha=hashlib.sha256(dest.read_bytes()).hexdigest()
    if sha in seen:
      dest.unlink();raise ValueError("Identical image already used")
    seen.add(sha)
    record.update(status="downloaded",sourceSize=src,outputSize=[im.width,im.height],bytes=dest.stat().st_size,
       downloadedFrom=r.url,brightness=lightness,sha256=sha,
       transformation="Normalized EXIF, resized to 2000px max, WebP Q86, CSS crop only")
    print("OK",key,record["bytes"],flush=True);break
  except Exception as e:errors.append(str(e)[:145])
 if record["status"]=="failed":
  record["errors"]=errors;print("FAILED",key,errors[:2],flush=True)
 out.append(record)
REPORT.parent.mkdir(parents=True,exist_ok=True)
REPORT.write_text(json.dumps({"scope":"Only genuine Phuket landscapes, no hotel galleries",
 "downloaded":sum(x["status"]=="downloaded" for x in out),"expected":len(PHOTOS),
 "updatedAt":datetime.now(timezone.utc).isoformat(),"items":out},ensure_ascii=False,indent=2)+"\n")
