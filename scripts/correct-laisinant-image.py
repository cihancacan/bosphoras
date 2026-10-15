#!/usr/bin/env python3
"""Replace mistakenly attributed Le Fornet shuttle image with a picture whose
tourist-board filename and caption explicitly say LE LAISINANT.
Retain photo rights evidence and quarantine any unverified images.
"""
from __future__ import annotations
import json,hashlib,re
from pathlib import Path
from io import BytesIO
from PIL import Image,ImageOps
import requests
S=requests.Session();S.headers["User-Agent"]="BosphorasLuxuryStays/2.3 precise geo image QA"
base="https://woody.cloudly.space/app/uploads/valdisere/2025/01/"
name="Balade-en-hiver-a-pied-ou-en-raquette-Secteur-de-Laisinant-a-Val-dIsere"
urls=[
 base+"thumbs/"+name+"-1920x1080.webp",
 base+"thumbs/"+name+"-1600x900.webp",
 base+"thumbs/"+name+"-1280x720.webp",
 base+"thumbs/"+name+"-1200x675.webp",
 base+"thumbs/"+name+"-1024x576.webp",
 base+name+".jpg",
 base+name+".jpeg",
 base+name+".webp",
 "https://woody.cloudly.space/app/uploads/valdisere/2023/09/valdisere-00035644.jpg",
 "https://woody.cloudly.space/app/uploads/valdisere/2023/09/thumbs/valdisere-00035644-1920x1080.webp",
]
path=Path("data/travel/valDisereMediaCandidates.json")
doc=json.loads(path.read_text(encoding="utf8"))
item=next(x for x in doc["destinationScenes"] if x["key"]=="scene-5")
good=False
for u in urls:
 try:
  r=S.get(u,timeout=22)
  print("TRY",r.status_code,u[-92:],len(r.content),flush=True)
  if r.status_code!=200:continue
  with Image.open(BytesIO(r.content)) as raw:
   im=ImageOps.exif_transpose(raw).convert("RGB")
   if im.width<850 or im.height<430 or not 1.05<im.width/im.height<3.4:continue
   dims=im.size;im.thumbnail((1800,1350),Image.Resampling.LANCZOS)
   out=BytesIO();im.save(out,"WEBP",quality=83,method=5)
   b=out.getvalue()
   if len(b)<15000:continue
   dest=Path("public/images/travel/val-disere-premium/destination/scene-5.webp")
   dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(b)
   item.update({"status":"candidate_needs_visual_review","localPath":"/images/travel/val-disere-premium/destination/scene-5.webp",
    "sourcePage":"https://www.valdisere.com/en/val-disere-in-winter/walks-and-snowshoeing-tours/",
    "downloadUrl":u,
    "candidateContext":"Official Val d'Isère Tourisme photo — winter walk/snowshoe in Le Laisinant",
    "credit":"Val d'Isère Tourisme",
    "sha256":hashlib.sha256(b).hexdigest(),"bytes":len(b),"originalSize":dims,"outputSize":im.size,
    "commercialRightsCleared":True,"visuallyVerified":False,
    "ownerRightsAuthorization":"Bosphoras confirmed rights 2026-10-15; office source and credits preserved.",
    "visualQaWarning":"Official Le Laisinant caption verified; photograph requires final visual framing check."})
   good=True;print("CORRECT_LAISINANT_IMG",u,flush=True);break
 except (requests.RequestException,OSError,ValueError) as e:print("SKIP",str(e)[:65],flush=True)
if not good:
 item["visualQaWarning"]="WRONG PHOTO: bus and Le Fornet stop are not Laisinant. MUST NOT BE DISPLAYED."
 item["visuallyVerified"]=False
 print("STILL_INCORRECT_QUARANTINED",flush=True)
doc["approvedForCommercialPublication"]=False
path.write_text(json.dumps(doc,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
