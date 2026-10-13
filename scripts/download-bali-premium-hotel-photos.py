#!/usr/bin/env python3
"""Download only personally identified Four Seasons Sayan, Bvlgari Bali,
Raffles Bali and The Legian Seminyak photographs (three per property).
Each downloaded original must pass size, landscape, duplicate and brightness
checks. User says photo usage permitted; legal proof for non-CC images remains
to be confirmed before deploying to production.
"""
from datetime import datetime,timezone
from io import BytesIO
from pathlib import Path
from PIL import Image,ImageOps,ImageStat
import json,requests,hashlib
JOBS=[
 ("sayan","sayan-rooftop-lotus","Four Seasons Sayan iconic lotus pond rooftop surrounded by rainforest",
  "https://www.sophibee.com/wp-content/uploads/2023/12/Ubud-Bali-Family-Vacation-at-Four-Seasons-Sayan-Resort-Overview.jpg",
  "https://www.sophibee.com/travel/bali-family-vacation-ubud/","SophiBee · Four Seasons Sayan",
  []),
 ("sayan","sayan-riverfront-villa","Four Seasons Sayan Riverfront Villa entrance and tropical setting",
  "https://www.uniqhotels.com/media/hotels/cd/12._riverfront_villa_-_top_entrance_view.jpg",
  "https://www.uniqhotels.com/four-seasons-resort-bali-at-sayan/","UNIQ Hotels · Four Seasons Sayan",
  []),
 ("sayan","sayan-spa-villa","Four Seasons Sayan private spa villa surrounded by lotus ponds",
  "https://cdn.spafinder.com/2016/09/Four-Seasons-Sayan-Bali-spa-villa-.jpg",
  "https://www.spafinder.com/blog/spa-travel/aerial-yoga-exotic-retreats/","Spafinder · Four Seasons Sayan",
  []),
 ("bvlgari","bvlgari-cliff-pool","Bvlgari Resort Bali clifftop pool estate above Indian Ocean",
  "https://images.harpersbazaar.co.id/unsafe/0x0/smart/media/body_0bdb93d8b889452a9bb513c6c23424dc.jpg",
  "https://harpersbazaar.co.id/articles/read/4/2025/22066/bvlgari-resort-bali-masuk-dalam-daftar-prestisius-50-best-discovery","Harper's Bazaar Indonesia · Bvlgari Resort Bali",
  []),
 ("bvlgari","bvlgari-cliff-villa","Bvlgari Bali two-bedroom ocean cliff villa with private pool",
  "https://www.travelplusstyle.com/wp-content/gallery/bulgari-bali/two-bedroom-villa-cliff.jpg",
  "https://www.travelplusstyle.com/hotels/bulgari-resort-bali","TravelPlusStyle · Bvlgari two-bedroom villa",
  []),
 ("bvlgari","bvlgari-ocean-suite","Bvlgari Resort Bali One Bedroom Ocean Cliff Villa bedroom",
  "https://cdn.tatlerasia.com/tatlerasia/i/2026/04/05101921-one-bedroom-ocean-cliff-villa-2_cover_1600x1067.jpg",
  "https://www.tatlerasia.com/lifestyle/travel/20-hotel-terbaik-tatler-best-indonesia-2026-hi","Tatler Asia · Bvlgari Ocean Cliff Villa",
  []),
 ("raffles","raffles-ocean-estate","Raffles Bali secluded coastal estate looking out to Jimbaran Bay",
  "https://m.ahstatic.com/is/image/accorhotels/met_p_a122-45?wid=1920",
  "https://www.raffles.com/bali/","Raffles Bali · official image, Accor",
  ["https://m.ahstatic.com/is/image/accorhotels/met_p_a072-66?wid=1920"]),
 ("raffles","raffles-panoramic-pool-villa","Raffles Bali Panoramic One Bedroom Pool Villa private plunge pool",
  "https://www.ahstatic.com/photos/b695_rovca_00_p_1024x768.jpg",
  "https://www.raffles.com/bali/private-villas/vca/","Raffles Bali · Panoramic One Bedroom Pool Villa",
  []),
 ("raffles","raffles-villa-interior","Raffles Bali Panoramic One Bedroom Pool Villa interior",
  "https://www.ahstatic.com/photos/b695_rovca_02_p_1024x768.jpg",
  "https://www.raffles.com/bali/private-villas/vca/","Raffles Bali · same Panoramic One Bedroom Pool Villa",
  ["https://www.ahstatic.com/photos/b695_rovca_03_p_1024x768.jpg"]),
 ("legian","legian-infinity-pool","The Legian Seminyak oceanfront three-tier infinity pool and palm-lined coastline",
  "https://www.myboutiquehotel.com/photos/5761/the-legian-bali-seminyak-001-01916-900x570.jpg",
  "https://www.myboutiquehotel.com/en/boutique-hotels-seminyak/the-legian-bali.html","MyBoutiqueHotel · The Legian Seminyak",
  []),
 ("legian","legian-resort-terrace","The Legian Seminyak resort Tunjung terrace",
  "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5d89cb1f9dae8c37de0d36db/web/17339898112591/raw/LEG-Tunjung_JPG.jpg",
  "https://lhm-hotels.com/legian-seminyak/","LHM Hotels · The Legian Seminyak",
  []),
 ("legian","legian-ocean-balcony","The Legian Seminyak ocean-view hotel balcony overlooking infinity pool",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/225367043.jpg?k=dd1c46419b5be222bcb50f54f0665f7d2ffe8f18c4ce9cdb7aeaf22041cd7102&o=",
  "https://www.booking.com/hotel/id/the-legian-bali.html","Booking.com · The Legian Seminyak guestroom",
  ["https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5d89cb1f9dae8c37de0d36db/home/15771605409511/big.jpg"])
]
ROOT=Path("public/images/travel/bali-premium")
REPORT=Path("data/travel/baliPremiumImageSources.json")
HEADERS={"User-Agent":"Mozilla/5.0 (compatible; BosphorasBaliHotelEditorial/1.0; source tracking)","Accept":"image/jpeg,image/webp,image/png,image/*;q=0.8"}
S=requests.Session();used=set();results=[]
def get(u):
 r=S.get(u,headers=HEADERS,timeout=30,stream=True)
 r.raise_for_status()
 content=bytearray()
 for chunk in r.iter_content(180000):
  content.extend(chunk)
  if len(content)>25000000:raise ValueError("image exceeds 25MB")
 with Image.open(BytesIO(content)) as imorig:
  im=ImageOps.exif_transpose(imorig).convert("RGB")
  if im.width<680 or im.height<450 or im.width/im.height<1.1:raise ValueError(f"Unsuitable photo {im.size}")
  origSize=[im.width,im.height]
  im.thumbnail((1900,1450),Image.Resampling.LANCZOS)
  lum=sum(ImageStat.Stat(im.resize((96,64))).mean)/3
  if lum<32:raise ValueError("Very dark photo")
  out=BytesIO();im.save(out,"WEBP",quality=86,method=6)
  return out.getvalue(),origSize,[im.width,im.height],round(lum,1),r.url
for hotel,key,scene,url,sourcePage,credit,fallbacks in JOBS:
 entry={"hotel":hotel,"key":key,"scene":scene,"sourcePage":sourcePage,"credit":credit,
        "localPath":f"/images/travel/bali-premium/{hotel}/{key}.webp","status":"failed",
        "commercialRights":"User says permission granted; third-party licence documentary proof unverified (PREVIEW only)"}
 errors=[]
 for candidate in [url]+fallbacks:
  try:
   data,inputSize,outputSize,brightness,downloadUrl=get(candidate)
   checksum=hashlib.sha256(data).hexdigest()
   if checksum in used:raise ValueError("Duplicate gallery image")
   used.add(checksum)
   target=ROOT/hotel/(key+".webp")
   target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(data)
   entry.update(status="downloaded",downloadUrl=downloadUrl,sourceSize=inputSize,outputSize=outputSize,
       brightness=brightness,bytes=len(data),sha256=checksum,
       edit="EXIF orientation normalized, resized up to 1900 px, WebP q86")
   print("OK",hotel,key,inputSize,len(data),flush=True)
   break
  except Exception as e:errors.append(str(e)[:180])
 if entry["status"]!="downloaded":
  entry["errors"]=errors
  print("FAILED",hotel,key,errors,flush=True)
 results.append(entry)
REPORT.parent.mkdir(parents=True,exist_ok=True)
REPORT.write_text(json.dumps({"scope":"Bali four resort-specific gallery sources only; no city images; preview branch",
    "updatedAt":datetime.now(timezone.utc).isoformat(),"expected":len(JOBS),
    "downloaded":sum(x["status"]=="downloaded" for x in results),"items":results},
    ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
