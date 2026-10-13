#!/usr/bin/env python3
"""Download 12 specifically named Phuket luxury resort images and preserve attribution.
Only images sourced from hotel owners; do not fill failed images with unrelated photos.
Image usage stated authorized by client; third party commercial rights must be documented.
"""
from pathlib import Path
from datetime import datetime,timezone
from io import BytesIO
import requests,hashlib,json
from PIL import Image, ImageOps, ImageStat
HOTELS=[
("amanpuri","resort-sea-terrace","Amanpuri's beach dining terrace overlooking Andaman Sea",
"https://www.aman.com/sites/default/files/styles/masonry_extra_large/public/2025-09/Amanpuri-_Thailand_-_Dining-_The_Beach_Terrace-_Upper_Deck-_Table_Set_Up-_Andaman_Sea.webp?itok=bVn8fG7q",
"https://www.aman.com/resorts/amanpuri/gallery","Amanpuri · site officiel",
["https://www.aman.com/sites/default/files/styles/masonry_extra_large/public/2025-09/Amanpuri-_Thailand_-_Resort-_Andaman_Sea-_Beach-_Sunset.webp?itok=50RmAxtD"]),
("amanpuri","resort-main-pool","Amanpuri main pool with teak pavilions and palm grove",
"https://www.aman.com/sites/default/files/styles/masonry_extra_large/public/2025-09/Amanpuri-_Thailand_-_Resort-_Pool_Terrace-_Pool.webp?itok=hrkayQHL",
"https://www.aman.com/resorts/amanpuri/gallery","Amanpuri · site officiel",
["https://www.aman.com/sites/default/files/styles/masonry_extra_large/public/2025-09/Amanpuri-_Thailand_-_Resorts-_Exterior-_Beach-_Stairs.webp?itok=DsVq5f5c"]),
("amanpuri","ocean-pool-pavilion","Amanpuri Ocean Pool Pavilion specific guestroom category",
"https://www.aman.com/sites/default/files/styles/listing_teaser_extra_large/public/2022-10/Amanpuri_Ocean_Pool_Pavilion%202.webp?itok=PYxyxoJB",
"https://www.aman.com/resorts/amanpuri/accommodation/pavilions","Amanpuri · Ocean Pool Pavilion",
["https://www.aman.com/sites/default/files/styles/listing_teaser_extra_large/public/2024-04/amanpuri_pool_pavilion_original.webp?itok=65AS669G"]),
("trisara","ocean-pool-villa","Trisara Ocean View Pool Villa private pool and sea beyond",
"https://trisara.com/wp-content/uploads/2025/01/Trisara-OPV-FMG-91-1-scaled.jpg",
"https://trisara.com/suite/ocean-view-pool-villa/","Trisara · photo officielle",
["https://trisara.com/wp-content/uploads/2024/08/ocean_view_pool_villa_4.jpg"]),
("trisara","villa-terrace","Trisara Ocean View Pool Villa terrace and outdoor scenery",
"https://trisara.com/wp-content/uploads/2024/08/ocean_view_pool_villa_3.jpg",
"https://trisara.com/suite/ocean-view-pool-villa/","Trisara · Ocean View Pool Villa",
["https://trisara.com/wp-content/uploads/2024/08/ocean_view_pool_villa_4.jpg"]),
("trisara","villa-pool-deck","Trisara Ocean View Pool Villa private pool deck",
"https://trisara.com/wp-content/uploads/2024/08/ocean_view_pool_villa_4.jpg",
"https://trisara.com/suite/ocean-view-pool-villa/","Trisara · Ocean View Pool Villa",
["https://trisara.com/wp-content/uploads/2024/09/58.jpg"]),
("rosewood","emerald-bay-pool","Rosewood Phuket outdoor pool and beach at Emerald Bay",
"https://images.rosewoodhotels.com/is/image/rwhg/pool-001-1",
"https://www.rosewoodhotels.com/en/phuket/overview/gallery","Rosewood Phuket · image officielle",
["https://www.rosewoodhotels.com/content/dam/rosewoodhotels/property/phuket/en/images/overview/pool-001.jpg"]),
("rosewood","partial-ocean-pavilion","Rosewood Phuket Partial Ocean View Pool Pavilion",
"https://images.rosewoodhotels.com/is/image/rwhg/partial-oceanview-pool-pavilion-001-1",
"https://www.rosewoodhotels.com/en/phuket/accommodation/pavilions/partial-ocean-view-pool","Rosewood Phuket · Partial Ocean View Pool Pavilion",
["https://images.rosewoodhotels.com/is/image/rwhg/garden-pool-pavilion-3"]),
("rosewood","beachfront-villa","Rosewood Phuket Beachfront Pool Villa exterior",
"https://images.rosewoodhotels.com/is/image/rwhg/beachfront-pool-villa-003",
"https://www.rosewoodhotels.com/en/phuket/overview/gallery","Rosewood Phuket · Beachfront Pool Villa",
["https://picasso.rosewoodhotelgroup.com/transform/b6d09ff3-65ec-446e-a2fd-1fc7920f1b05/RWPKT_3-0_Brand-com_Assets_rwpkt-wedding-ceremony-setup-garden-1"]),
("keemala","birds-nest-villa-exterior","Keemala Bird's Nest Pool Villa exterior in Kamala rainforest",
"https://www.keemala.com/wp-content/uploads/2022/11/08_BirdNestPoolVillas.jpg",
"https://www.keemala.com/villa/birds-nest-pool-villas/","Keemala · Bird’s Nest Pool Villas",
["https://www.keemala.com/wp-content/uploads/2022/11/photosm-bird-nest-pool-villas-1.jpg"]),
("keemala","birds-nest-pool","Keemala Bird's Nest Pool Villa private terrace pool",
"https://www.keemala.com/wp-content/uploads/2022/11/06_BirdNestPoolVillas.jpg",
"https://www.keemala.com/villa/birds-nest-pool-villas/","Keemala · Bird’s Nest Pool Villas",
["https://www.keemala.com/wp-content/uploads/2022/11/10_BirdNestPoolVillas.jpg"]),
("keemala","birds-nest-interior","Keemala Bird's Nest Pool Villa interiors and tropical view",
"https://www.keemala.com/wp-content/uploads/2022/11/10_BirdNestPoolVillas.jpg",
"https://www.keemala.com/villa/birds-nest-pool-villas/","Keemala · Bird’s Nest Pool Villas",
["https://www.keemala.com/wp-content/uploads/2022/11/photosm-bird-nest-pool-villas-2.jpg"])
]
ROOT=Path("public/images/travel/phuket-premium")
REPORT=Path("data/travel/phuketPremiumImageSources.json")
HEADERS={"User-Agent":"Mozilla/5.0 (compatible; BosphorasPhuketCuratedHotelPhotos/1.0; photo attribution)","Accept":"image/avif,image/webp,image/jpeg,image/png,image/*;q=0.8"}
S=requests.Session();seen=set();results=[]
def download(url):
 r=S.get(url,headers=HEADERS,timeout=30,stream=True);r.raise_for_status()
 b=bytearray()
 for c in r.iter_content(150000):
  b.extend(c)
  if len(b)>26000000:raise ValueError("Over 26 MB")
 with Image.open(BytesIO(b)) as source:
  im=ImageOps.exif_transpose(source).convert("RGB")
  original=[im.width,im.height]
  if im.width<700 or im.height<460 or im.width/im.height<1.09:raise ValueError(f"unsuitable landscape {original}")
  im.thumbnail((1950,1450),Image.Resampling.LANCZOS)
  light=round(sum(ImageStat.Stat(im.resize((100,72))).mean)/3,1)
  if light<37:raise ValueError("too dark")
  buf=BytesIO();im.save(buf,"WEBP",quality=86,method=6)
  return buf.getvalue(),original,list(im.size),r.url,light
for hotel,key,scene,url,sourcePage,credit,backups in HOTELS:
 record={"hotel":hotel,"key":key,"scene":scene,"sourcePage":sourcePage,"credit":credit,
   "localPath":f"/images/travel/phuket-premium/{hotel}/{key}.webp",
   "rights":"User indicates permissions for project; verify third party commercial rights in writing before production",
   "status":"failed"}
 errors=[]
 for u in [url]+backups:
  try:
   data,orig,size,actual,light=download(u)
   h=hashlib.sha256(data).hexdigest()
   if h in seen:raise ValueError("Image duplicated in gallery")
   seen.add(h)
   target=ROOT/hotel/(key+".webp")
   target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(data)
   record.update(status="downloaded",downloadUrl=actual,originalSize=orig,outputSize=size,bytes=len(data),
      sha256=h,brightness=light,processing="EXIF normalised, resized to max 1950px, WebP quality 86")
   print("OK",hotel,key,orig,len(data),flush=True);break
  except Exception as e:errors.append(str(e)[:185])
 if record["status"]=="failed":
  record["errors"]=errors;print("FAILED",hotel,key,errors,flush=True)
 results.append(record)
REPORT.parent.mkdir(parents=True,exist_ok=True)
REPORT.write_text(json.dumps({"scope":"Exact-property Phuket luxury hotel photos, Travel Preview only",
   "createdAt":datetime.now(timezone.utc).isoformat(),"expected":len(HOTELS),
   "downloaded":sum(x["status"]=="downloaded" for x in results),
   "items":results},ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
