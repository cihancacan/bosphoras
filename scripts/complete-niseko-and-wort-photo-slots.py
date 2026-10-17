#!/usr/bin/env python3
"""Five tightly scoped original-property photograph replacements.
Owner has affirmed commercial rights to the images in the project. These
are candidates pending exact photographic visual verification, never self-approved.
No fake images, other hotels or generic location shots can enter these slots.
"""
from __future__ import annotations
import hashlib,json,requests
from io import BytesIO
from pathlib import Path
from PIL import Image,ImageOps

JOBS=[
{"stem":"niseko","slug":"niseko","property":"ritz-carlton-reserve","slot":"view-2",
 "name":"Higashiyama Niseko Village Ritz-Carlton Reserve Yotei Twin Room",
 "page":"https://www.ritzcarlton.com/en/hotels/ctsrz-higashiyama-niseko-village-a-ritz-carlton-reserve/rooms/",
 "urls":["https://cache.marriott.com.cn/content/dam/marriott-renditions/dm-static-renditions/rz/apec/hws/c/ctsrz/en_us/photo/unlimited/assets/rz-ctsrz-yotei-reserve-twin-room-36282-classic-hor.jpg?downsize=1336px%3A%2A&interpolation=progressive-bilinear&output-quality=70",
         "https://cache.marriott.com.cn/content/dam/marriott-renditions/dm-static-renditions/rz/apec/hws/c/ctsrz/en_us/photo/unlimited/assets/rz-ctsrz-suite---living-room--29269-classic-hor.jpg?downsize=1300px%3A%2A&interpolation=progressive-bilinear&output-quality=70"]},
{"stem":"niseko","slug":"niseko","property":"setsu-niseko","slot":"view-1",
 "name":"Setsu Niseko Room 709 Japanese Tatami suite",
 "page":"https://setsuniseko.com/en/accommodation/1-bedroom-suite/",
 "urls":["https://setsuniseko.com/wp-content/uploads/Room-709-Tatami-without-sliding-doors.jpeg"]},
{"stem":"niseko","slug":"niseko","property":"setsu-niseko","slot":"view-2",
 "name":"Setsu Niseko bedroom",
 "page":"https://setsuniseko.com/en/gallery/",
 "urls":["https://images.squarespace-cdn.com/content/v1/6420def8e68db247e9a2f052/2c0dc355-8c92-4e8f-9715-dbfd2465d652/NISEKO%2BBlack%2BSetsu%2Bqueen%2Bbedroom.jpg"]},
{"stem":"jacksonHole","slug":"jackson-hole","property":"wort-hotel","slot":"view-1",
 "name":"The Wort Hotel historic fireplace, Jackson",
 "page":"https://www.cntraveler.com/hotels/jackson/the-wort-hotel",
 "urls":["https://media.cntraveler.com/photos/55c0f1c8b72c15d77364d18a/master/w_1200%2Cc_limit/wort-hotel-jackson-wyoming-fireplace.jpg"]},
{"stem":"jacksonHole","slug":"jackson-hole","property":"wort-hotel","slot":"view-3",
 "name":"The Wort Hotel guest accommodation",
 "page":"https://www.thehotelguru.com/en-us/hotel/the-wort-hotel-jackson",
 "urls":["https://www.thehotelguru.com/_images/e4/da/e4da5f95ab64a50a5138fa05114894bf/s1654x900.jpg"]}
]
S=requests.Session();S.headers.update({"User-Agent":"BosphorasLuxuryStays/1.0 (authorized editorial media source audit)","Accept":"image/webp,image/jpeg,image/*;q=.8,*/*;q=.2"})
data={}
for job in JOBS:
 stem=job["stem"]
 if stem not in data:
  data[stem]=json.loads(Path("data/travel/"+stem+"MediaCandidates.json").read_text(encoding="utf8"))
def processed(url):
 try:
  res=S.get(url,timeout=28);res.raise_for_status()
  if len(res.content)>17_000_000:return None
  with Image.open(BytesIO(res.content)) as im:
   f=ImageOps.exif_transpose(im).convert("RGB")
   original=f.size
   if f.width<900 or f.height<450 or not 1.05<f.width/f.height<3.6:return None
   f.thumbnail((1800,1300),Image.Resampling.LANCZOS)
   b=BytesIO();f.save(b,"WEBP",quality=83,method=5)
   return b.getvalue(),original,f.size
 except (requests.RequestException,OSError,ValueError) as e:
  print("IMAGE_UNAVAILABLE",url[:115],str(e)[:85],flush=True);return None
def perceptual(binary):
 with Image.open(BytesIO(binary)) as im:
  d=list(ImageOps.exif_transpose(im).convert("L").resize((9,8)).getdata())
  return sum(1<<(8*r+c) for r in range(8) for c in range(8) if d[9*r+c]>d[9*r+c+1])
for job in JOBS:
 manifest=data[job["stem"]]
 record=next(x for x in manifest["hotels"] if x["propertyKey"]==job["property"] and x["key"]==job["slot"])
 existing=[]
 for other in manifest["hotels"]:
  if other is record or other.get("propertyKey")!=job["property"] or not other.get("localPath") or not other.get("visuallyVerified"):continue
  path=Path("public"+other["localPath"])
  if path.exists():
   try:existing.append(perceptual(path.read_bytes()))
   except (OSError,ValueError):pass
 saved=False
 for url in job["urls"]:
  pic=processed(url)
  if pic is None:continue
  payload,orig,outsize=pic
  fingerprint=perceptual(payload)
  if any((fingerprint^p).bit_count()<10 for p in existing):
   print("DUPLICATE_REJECTED",job["property"],job["slot"],flush=True);continue
  dst="/images/travel/"+job["slug"]+"-premium/"+job["property"]+"/"+job["slot"]+".webp"
  file=Path("public"+dst);file.parent.mkdir(parents=True,exist_ok=True);file.write_bytes(payload)
  old=record.get("downloadUrl","")
  record.update({"status":"candidate_needs_visual_review","localPath":dst,"sourcePage":job["page"],"downloadUrl":url,
   "candidateContext":job["name"],"credit":job["name"]+" · publisher/property source",
   "sha256":hashlib.sha256(payload).hexdigest(),"bytes":len(payload),"originalSize":orig,"outputSize":outsize,
   "ownerRightsAuthorization":"Bosphoras operator confirmed image usage authorization in conversation, 2026-10-17.",
   "commercialRightsCleared":True,"visuallyVerified":False,
   "visualQaWarning":"NEW exact-property photo candidate; inspect the downloaded image before approving this hotel's gallery.",
   "previousImageUrl":old})
  print("REPLACED_IMAGE",job["slug"],job["property"],job["slot"],url[:135],flush=True)
  saved=True;break
 if not saved:print("STILL_MISSING_AUTHENTIC_REPLACEMENT",job["slug"],job["property"],job["slot"],flush=True)
for stem,manifest in data.items():
 manifest["downloadedHotelCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in manifest["hotels"])
 manifest["visuallyVerified"]=False;manifest["approvedForCommercialPublication"]=False
 Path("data/travel/"+stem+"MediaCandidates.json").write_text(json.dumps(manifest,indent=2,ensure_ascii=False)+"\n",encoding="utf8")
print("Original property candidate pass finished; visual and identity QA still required",flush=True)
