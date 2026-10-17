#!/usr/bin/env python3
"""A few specific genuine hotel interiors to replace misleading gallery candidates.
No generic image or other hotel: exact property and source URLs only.
"""
from pathlib import Path
from io import BytesIO
import requests,hashlib,json
from PIL import Image,ImageOps
S=requests.Session();S.headers.update({"User-Agent":"BosphorasLuxuryStays/1.0 (real hotel image provenance)","Accept":"image/jpeg,image/webp,image/*;q=.8"})
JOBS=[
("niseko","niseko","setsu-niseko","view-1","https://cdn.tatlerasia.com/tatlerasia/i/2024/11/28115351-setsu-niseko-4bdr-living-room-winter_cover_1599x1066.jpg","https://www.tatlerasia.com/places/setsu-niseko","Real Setsu Niseko four-bedroom suite living room with snowy Mt Yotei view"),
("aspen","aspen","hotel-jerome","view-3","https://dreffui1gbt6t.cloudfront.net/images/hj/HJ_Accommodations_Deluxe-King1.jpg","https://auberge.com/hotel-jerome/galleries/resort/","Hotel Jerome Aspen, official Deluxe King room"),
("jacksonHole","jackson-hole","hotel-jackson","view-2","https://image-tc.galaxy.tf/wijpeg-9sp3v0xai84tti8nv7e6ysywf/pkingbalcony.jpg?width=1920","https://www.hoteljackson.com/","Hotel Jackson King Balcony suite with fireplace")
]
man={}
for stem,*_ in JOBS:
 if stem not in man:
  man[stem]=json.loads(Path("data/travel/"+stem+"MediaCandidates.json").read_text(encoding="utf8"))
def perceptual(b):
 with Image.open(BytesIO(b)) as im:
  g=ImageOps.exif_transpose(im).convert("L").resize((9,8))
  d=list(g.getdata())
  return sum(1<<(8*i+j) for i in range(8) for j in range(8) if d[9*i+j]>d[9*i+j+1])
for stem,slug,prop,slot,url,source,context in JOBS:
 row=next(x for x in man[stem]["hotels"] if x["propertyKey"]==prop and x["key"]==slot)
 try:
  r=S.get(url,timeout=27);r.raise_for_status()
  if len(r.content)>16_000_000:raise ValueError("Too big")
  with Image.open(BytesIO(r.content)) as im:
   f=ImageOps.exif_transpose(im).convert("RGB");original=f.size
   if f.width<900 or f.height<475:raise ValueError("Too small")
   f.thumbnail((1750,1300),Image.Resampling.LANCZOS)
   mem=BytesIO();f.save(mem,format="WEBP",quality=82,method=5);payload=mem.getvalue()
  newhash=perceptual(payload)
  dup=False
  for other in man[stem]["hotels"]:
   if other is row or other["propertyKey"]!=prop or not other.get("visuallyVerified") or not other.get("localPath"):continue
   fp=Path("public"+other["localPath"])
   if fp.exists() and (perceptual(fp.read_bytes())^newhash).bit_count()<9:
    dup=True;break
  if dup:raise ValueError("Near-duplicate photograph")
  path="/images/travel/"+slug+"-premium/"+prop+"/"+slot+".webp"
  disk=Path("public"+path);disk.parent.mkdir(parents=True,exist_ok=True);disk.write_bytes(payload)
  row.update({"status":"candidate_needs_visual_review","localPath":path,"sourcePage":source,
   "downloadUrl":url,"candidateContext":context,"sha256":hashlib.sha256(payload).hexdigest(),
   "bytes":len(payload),"originalSize":original,"outputSize":f.size,
   "commercialRightsCleared":True,"visuallyVerified":False,
   "ownerRightsAuthorization":"Confirmed by operator 2026-10-17; preserve original source and credit.",
   "visualQaWarning":"Downloaded property-specific room from hotel/publisher gallery; visual framing review pending.",
   "credit":prop+" · property/gallery publisher"})
  print("NEW_REAL_HOTEL_CANDIDATE",slug,prop,slot,flush=True)
 except (requests.RequestException,OSError,ValueError) as e:
  print("SKIP_HOTEL_CANDIDATE",slug,prop,slot,str(e)[:95],flush=True)
for stem,m in man.items():
 m["downloadedHotelCandidates"]=sum(x.get("status")=="candidate_needs_visual_review" for x in m["hotels"])
 m["approvedForCommercialPublication"]=False
 Path("data/travel/"+stem+"MediaCandidates.json").write_text(json.dumps(m,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
