#!/usr/bin/env python3
"""Original identity-backed photo fallback sources from verified exact hotel listings.
User confirmed photo rights. Do not bypass 403, do not relabel hotels, do not fabricate.
Every newly downloaded image is awaiting manual visual check before publication.
"""
import json, hashlib, re, time
from pathlib import Path
from urllib.parse import urlparse
from io import BytesIO
import requests
from PIL import Image, ImageOps

S=requests.Session()
S.headers.update({"User-Agent":"BosphorasLuxuryStays/2.0 (official hotel gallery provenance; https://www.bosphoras.com/)",
 "Accept":"image/avif,image/webp,image/jpeg,image/png,image/*;q=.8"})
ROOT=Path("data/travel")
HOTELS={
 "megeve":{"stem":"megeve","key":"four-seasons-megeve","name":"Four Seasons Resort Megève","slots":[
  [("https://static.hurlinghamtravel.co.uk/photos/1470/four-seasons-hotel-megeve-exterior-winter.jpg","https://hurlinghamtravel.co.uk/hotel/four-seasons-hotel-megeve","Winter exterior confirmed at property"),
   ("https://www.fourseasons.com/content/dam/fourseasons/images/web/MVE/MVE_399_aspect16x9.jpg","https://press.fourseasons.com/megeve/hotel-news/2026/summer-season","Actual hotel pool terrace, summer")],
  [("https://www.momondo.in/himg/bc/67/86/leonardo-3148531-519889-865723.jpg","https://www.momondo.in/hotels/megeve/Four-Seasons-Hotel-Megeve.mhd3148531.ksp","Interior suite photographed at exact Four Seasons Megeve"),
   ("https://www.fourseasons.com/alt/img-opt/~75.701.0%2C0000-215%2C1346-2999%2C4755-1687%2C2050/publish/content/dam/fourseasons/images/web/MVE/MVE_249_original.jpg","https://www.fourseasons.com/fr/megeve/accommodations/","Exact official accommodation photograph")],
  [("https://four-seasons.hotelsmegeve.com/data/Photos/OriginalPhoto/17254/1725405/1725405736/four-seasons-resort-megeve-megeve-photo-39.JPEG","https://four-seasons.hotelsmegeve.com/","Exact resort indoor pool photograph"),
   ("https://www.fourseasons.com/alt/img-opt/~75.701.0%2C0000-174%2C2500-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/MVE/MVE_662_original.jpg","https://www.fourseasons.com/fr/megeve/accommodations/","Exact official Four Seasons room")]
 ]},
 "jackson-hole":{"stem":"jacksonHole","key":"four-seasons-jackson","name":"Four Seasons Resort and Residences Jackson Hole","slots":[
  [("https://static.citylifestyle.com/articles/four-seasons-four-ways/JAC_462-1200.jpg?v=1","https://citylifestyle.com/articles/four-seasons-four-ways","Four Seasons Teton Village exterior, winter")],
  [("https://www.oxfordski.com/media/47503/fpo_jac_694.jpg?bgcolor=&height=698&mode=crop&quality=80&scale=downscaleonly&width=1240","https://www.oxfordski.com/luxury-ski-chalets-hotels/united-states/jackson-hole-wyoming/four-seasons-resort-jackson-hole/","Four Seasons Jackson Hole suite living room")],
  [("https://www.fourseasons.com/alt/img-opt/~70.880.0%2C0000-247%2C7425-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/JAC/JAC_1602_original.jpg","https://www.fourseasons.com/residences/residence_clubs/","Four Seasons Jackson Hole residence interior"),
   ("https://static.citylifestyle.com/articles/four-seasons-four-ways/JAC_462-1200.jpg?v=1","https://citylifestyle.com/articles/four-seasons-four-ways","Duplicate candidate deliberately rejected")]
 ]},
 "big-sky":{"stem":"bigSky","key":"oneonly-moonlight","name":"One&Only Moonlight Basin","slots":[
  [("https://assets.kerzner.com/api/public/content/af091957228f4d8298207ad423b22647?t=w2880&v=d6b088f2","https://www.oneandonlyresorts.com/moonlight-basin/accommodation/suites","Official One&Only suite interior")],
  [("https://dam.kerzner.com/i/kerzner/One%26Only_MoonlightBasin_P2_30_Six_Bed_Master_Wide-7353_MASTER?poi=0.3813%2C0.6158%2C0%2C0&scaleFit=poi","https://www.oneandonlyresorts.com/moonlight-basin/stays/private-home-rentals/signature-six-bedroom","Official One&Only six bedroom home master"),
   ("https://images.squarespace-cdn.com/content/v1/6759e39af1e34e5398aebf04/d5b3c238-d94b-4933-a18d-b4b1f2ba7ca2/%2311%2BSky%2BLodge.jpg","https://www.fourhundred.com/november-2025/one-only-moonlight-basin","One&Only Sky Lodge living room")],
  [("https://dam.kerzner.com/i/kerzner/One-Only_MoonlightBasin_P2_30_Six_Bed_Living_View-6843_MASTER--1--jpg?crop=%7B0%25%7D%2C%7B9.29%25%7D%2C%7B100%25%7D%2C%7B84.37%25%7D","https://www.oneandonlyresorts.com/moonlight-basin/offers/book-now-and-save","Official One&Only residential living area"),
   ("https://images.squarespace-cdn.com/content/v1/6759e39af1e34e5398aebf04/d5b3c238-d94b-4933-a18d-b4b1f2ba7ca2/%2311%2BSky%2BLodge.jpg","https://www.fourhundred.com/november-2025/one-only-moonlight-basin","One&Only Sky Lodge living room")]
 ]}
}
SUMMIT=[
 ("https://cdn.sanity.io/images/8ts88bij/big-sky/a845df737f5e22583e27d7758ff7b70e13903234-5397x3600.jpg?auto=format&q=70&w=1920","https://www.bigskyresort.com/lodging/hotels/summit-hotel/rooms-and-suites/three-bedroom","Summit 3-bedroom suite living area"),
 ("https://cdn.sanity.io/images/8ts88bij/big-sky/d0fd2a815d2c31c232c5a7a52d2c48e3b1912926-5561x3600.jpg?auto=format&q=70&w=1920","https://www.bigskyresort.com/lodging/hotels/summit-hotel/rooms-and-suites/king","Summit Hotel king room")
]
def fetch(url):
 try:
  r=S.get(url,timeout=28)
  r.raise_for_status()
  if len(r.content)>17_000_000:return None
  with Image.open(BytesIO(r.content)) as original:
   im=ImageOps.exif_transpose(original).convert("RGB")
   if im.width<800 or im.height<450 or im.width/im.height<1.05 or im.width/im.height>3.4:return None
   old=im.size
   im.thumbnail((1800,1400),Image.Resampling.LANCZOS)
   out=BytesIO();im.save(out,"WEBP",quality=82,method=5)
   if len(out.getvalue())<15000:return None
   return out.getvalue(),old,im.size
 except (requests.RequestException,OSError,ValueError) as exc:
  print("SOURCE_FAILED",url[:120],str(exc)[:90],flush=True)
  return None
def phash(data):
 with Image.open(BytesIO(data)) as im:
  p=list(im.convert("L").resize((9,8)).getdata())
  return sum(1<<(r*8+c) for r in range(8) for c in range(8) if p[r*9+c]>p[r*9+c+1])
def known_phashes(doc):
 arr=[]
 for x in doc["hotels"]+doc["destinationScenes"]:
  pp=x.get("localPath")
  if pp and Path("public"+pp).exists():
   try:arr.append(phash(Path("public"+pp).read_bytes()))
   except (OSError,ValueError):pass
 return arr
def install(slug,record,choices,known):
 if record["status"]!="missing":return
 for url,source,desc in choices:
  data=fetch(url)
  if not data:continue
  payload,old,size=data; digest=phash(payload)
  if any((digest ^ h).bit_count()<11 for h in known):
   print("NEAR_DUPLICATE_REFUSED",slug,record["propertyKey"],record["key"],flush=True);continue
  local=f"/images/travel/{slug}-premium/{record['propertyKey']}/{record['key']}.webp"
  disk=Path("public"+local);disk.parent.mkdir(parents=True,exist_ok=True);disk.write_bytes(payload)
  known.append(digest)
  record.update(status="candidate_needs_visual_review",localPath=local,downloadUrl=url,
    sourcePage=source,candidateContext=desc,
    credit=record["property"]+" — hotel/source gallery",
    sha256=hashlib.sha256(payload).hexdigest(),bytes=len(payload),originalSize=old,outputSize=size,
    visuallyVerified=False,commercialRightsCleared=True,
    ownerRightsAuthorization="Confirmed by Bosphoras operator on 2026-10-15; source origin retained.",
    visualQaWarning="Exact hotel source is documented; pending manual inspection before the photo enters premium galleries.")
  print("RECOVERED",slug,record["propertyKey"],record["key"],url[:94],flush=True)
  return
 print("REMAINS_MISSING",slug,record["propertyKey"],record["key"],flush=True)
for slug,setup in HOTELS.items():
 path=ROOT/(setup["stem"]+"MediaCandidates.json")
 doc=json.loads(path.read_text(encoding="utf8"))
 rows=[x for x in doc["hotels"] if x["propertyKey"]==setup["key"]]
 assert len(rows)==3,(slug,len(rows))
 seen=known_phashes(doc)
 for row,sources in zip(rows,setup["slots"]):install(slug,row,sources,seen)
 if slug=="big-sky":
  ss=[x for x in doc["hotels"] if x["propertyKey"]=="summit-hotel" and x["status"]=="missing"]
  for x in ss:install(slug,x,SUMMIT,seen)
 doc["downloadedHotelCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in doc["hotels"])
 doc["visuallyVerified"]=False;doc["approvedForCommercialPublication"]=False
 path.write_text(json.dumps(doc,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 print("RESULT",slug,doc["downloadedHotelCandidates"],"/12 hotel candidate photos",flush=True)
