#!/usr/bin/env python3
"""Download 12 hand-identified photos of the FOUR EXACT Saint-Tropez hotels.

Every image URL is identified on an owner/press/gallery page with its provenance.
Avoid generic city photos in hotel cards. Log errors; no false positive placeholder.
Commercial usage authorisation was declared by project owner; third-party licence
evidence must be independently checked before production.
"""
from pathlib import Path
from datetime import datetime,timezone
from io import BytesIO
import hashlib,json
import requests
from PIL import Image,ImageOps,ImageStat

JOBS=[
("cheval-blanc","cheval-beachfront","Cheval Blanc St-Tropez directly on Bouillabaisse beach",
 "https://images.prismic.io/lvmh-chevalblanc/Z-FsNXdAxsiBvz_r_WebRGB-ChevalBlancSt-Tropez-DroneHeroShot-Fa%C3%A7ade-OliverFly2024.jpg?auto=format%2Ccompress",
 "https://www.chevalblanc.com/en/maison/st-tropez/careers/careers-st-tropez/","Cheval Blanc St-Tropez · Oliver Fly",[]),
("cheval-blanc","cheval-pool-sea","Cheval Blanc St-Tropez pool and private beach facing the bay",
 "https://qtxasset.com/quartz/qcloud1/media/image/luxurytraveladvisor/1558537493/pool.jpg?VersionId=inDlXWFZpvRcOM0s6jHKJGN2zKTo2qD1",
 "https://www.luxurytraveladvisor.com/hotels/cheval-blanc-st-tropez-now-open","Luxury Travel Advisor · Cheval Blanc St-Tropez",
 ["https://www.travelbeyond.se/media/eutderpv/fra-cheval-blanc-st-tropez-pool-view-junior-suite.jpg?height=900&quality=90&rmode=crop&width=1600"]),
("cheval-blanc","cheval-duplex-sea-suite","Cheval Blanc St-Tropez Duplex Sea Suite bedroom with balcony",
 "https://images.prismic.io/lvmh-chevalblanc/aLBzi2GNHVfTOaRc_Light-ChevalBlancSt-Tropez-DuplexSeaSuiteBedroom-V.Mati-2018.jpg?auto=format%2Ccompress",
 "https://www.chevalblanc.com/en/maison/st-tropez/rooms-and-suites/duplex-sea-suite-st-tropez/","Cheval Blanc St-Tropez · V. Mati",[]),
("byblos","byblos-terrace-exterior","Hôtel Byblos Saint-Tropez white Mediterranean facades and lush outdoor terraces",
 "https://www.byblos.com/wp-content/uploads/Hotel-Byblos_Saint-Tropez-%C2%A9Stephan-Julliard-3-1-1920x1280.jpg",
 "https://www.byblos.com/en/","Hôtel Byblos · Stephan Julliard",
 ["https://www.byblos.com/wp-content/uploads/hotel-byblos-saint-tropez-1.jpg"]),
("byblos","byblos-pool","Byblos Saint-Tropez leafy garden outdoor pool",
 "https://www.byblos.com/wp-content/uploads/hotel-byblos-piscine-cotedazur-saint-tropez-french-riviera-1-1024x680.jpg",
 "https://www.byblos.com/en/galerie-photos/","Hôtel Byblos · galerie officielle",[]),
("byblos","byblos-laura-gonzalez-duplex","Hotel Byblos Saint-Tropez suite decorated by Laura Gonzalez",
 "https://www.byblos.com/wp-content/uploads/Hotel-Byblos-Saint-Tropez-Laura-Gonzalez-Duplex-4-1024x680.jpg",
 "https://www.byblos.com/en/galerie-photos/","Hôtel Byblos · Laura Gonzalez",[]),
("la-reserve","reserve-sea-entrance","La Réserve Ramatuelle minimalist entrance framing a sea view",
 "https://images.squarespace-cdn.com/content/v1/6759e39af1e34e5398aebf04/9017a8aa-94db-498c-be4c-14677377a40e/2_Hotel%2Bentrance%2B%282%29.jpg",
 "https://www.fourhundred.com/march-2025/blog-post-title-four-7zg3y-34hjs","Four Hundred · La Réserve Ramatuelle",[]),
("la-reserve","reserve-pool-sea","La Réserve Ramatuelle outdoor pool overlooking the Mediterranean",
 "https://www.the-family-project.com/hs-fs/hubfs/Website/europa/europa-fertig/8-frankreich/la-reserve-ramatuelle/la-reserve-ramatuelle-frankreich-familienluxusreisen-pool%282%29.jpg?name=la-reserve-ramatuelle-frankreich-familienluxusreisen-pool%282%29.jpg&width=1620",
 "https://www.the-family-project.com/reiseziele/europa/frankreich/la-reserve-ramatuelle","The Family Project · La Réserve Ramatuelle",
 ["https://www.journaldespalaces.com/formulaires/photos/hotels/908_La_Reserve_Ramatuelle_Piscine_2.jpg"]),
("la-reserve","reserve-junior-suite-terrace","La Réserve Ramatuelle Deluxe Junior Suite terrace overlooking the Gulf",
 "https://www.lareserve-ramatuelle.com/wp-content/uploads/2020/11/lrr_junior_suite_deluxe_terrasse_03-800x600.jpg",
 "https://www.lareserve-ramatuelle.com/en/accommodation/deluxe-junior-suite-sea-view-with-garden/","La Réserve Ramatuelle · galerie officielle",
 ["https://www.hiphideouts.com/images/hotels/55/first_1.jpg"]),
("messardiere","messardiere-estate-aerial","Airelles Château de La Messardière hillside estate and French Riviera gardens",
 "https://assets.airelles.com/images/airelles2023/aNKUyp5xUNkB1BB0_CDM-Vuedrone%C2%A9Jetlag-2.jpg?auto=format%2Ccompress&rect=0%2C80%2C1920%2C1280&w=1920&h=1280",
 "https://airelles.com/en/destination/chateau-de-la-messardiere-hotel","Airelles · Jetlag",[]),
("messardiere","messardiere-garden-pool","Airelles Château de La Messardière sunlit pool above garden terraces",
 "https://assets.airelles.com/images/airelles2023/ch8ggBai77o_RYeC_Moyen-CDM-PiscinevueJardins-%40MarcoArguello.jpg?auto=format%2Ccompress&rect=0%2C235%2C2000%2C1000&w=2000&h=1000",
 "https://airelles.com/fr/destination/chateau-de-la-messardiere-hotel/la-plage-acces-prive-saint-tropez","Airelles · Marco Arguello",[]),
("messardiere","messardiere-victoire-suite","Airelles Château de La Messardière Suite Victoire interiors",
 "https://images.prismic.io/airelles2023/Zeo8TnUurf2G3NBV_CDM-Suite-Victoire.jpg?auto=format%2Ccompress&rect=0%2C32%2C1728%2C907&w=2400&h=1260",
 "https://airelles.com/en/destination/chateau-de-la-messardiere-hotel/suites","Airelles · Suite Victoire",[])
]
ROOT=Path("public/images/travel/saint-tropez-premium")
REPORT=Path("data/travel/saintTropezPremiumImageSources.json")
S=requests.Session()
H={"User-Agent":"Mozilla/5.0 (compatible; BosphorasTravelSaintTropezMedia/1.0; source and rights audited)","Accept":"image/avif,image/webp,image/jpeg,image/png,image/*;q=0.8"}
USED=set();items=[]
def download(url):
 r=S.get(url,headers=H,timeout=30,stream=True);r.raise_for_status()
 data=bytearray()
 for p in r.iter_content(131072):
  data.extend(p)
  if len(data)>27000000:raise ValueError("image >27 MB")
 with Image.open(BytesIO(data)) as image:
  im=ImageOps.exif_transpose(image).convert("RGB")
  if im.width<640 or im.height<430:raise ValueError(f"too small: {im.size}")
  if im.width/im.height<1.12:raise ValueError(f"not landscape: {im.size}")
  orig=list(im.size)
  im.thumbnail((2000,1550),Image.Resampling.LANCZOS)
  avg=sum(ImageStat.Stat(im.resize((100,70))).mean)/3
  if avg<42:raise ValueError("too dark")
  output=BytesIO()
  im.save(output,format="WEBP",quality=86,method=6)
  return output.getvalue(),orig,list(im.size),avg,r.url
for hotel,key,scene,source,webpage,credit,alternatives in JOBS:
 record={"hotel":hotel,"key":key,"scene":scene,"sourcePage":webpage,"credit":credit,
  "localPath":f"/images/travel/saint-tropez-premium/{hotel}/{key}.webp",
  "status":"failed","rights":"Project owner says authorised; third-party commercial licence evidence remains to be verified before production"}
 errors=[]
 for url in [source]+alternatives:
  try:
   out,orig,resized,brightness,actual=download(url)
   sha=hashlib.sha256(out).hexdigest()
   if sha in USED:raise ValueError("Duplicate hotel image")
   USED.add(sha)
   path=ROOT/hotel/(key+".webp")
   path.parent.mkdir(parents=True,exist_ok=True)
   path.write_bytes(out)
   record.update(status="downloaded",downloadUrl=actual,inputSize=orig,outputSize=resized,
     brightness=round(brightness,1),bytes=len(out),sha256=sha,
     transformation="EXIF normalized; max 2000px width; WebP q86")
   print("OK",hotel,key,len(out),"source",actual[:105],flush=True)
   break
  except Exception as e:errors.append(str(e)[:180])
 if record["status"]!="downloaded":
  record["errors"]=errors
  print("FAILED",hotel,key,errors,flush=True)
 items.append(record)
REPORT.parent.mkdir(parents=True,exist_ok=True)
REPORT.write_text(json.dumps({"scope":"Saint-Tropez four individual hotels only; NOT city images; PREVIEW branch",
  "updatedAt":datetime.now(timezone.utc).isoformat(),"expected":len(JOBS),
  "downloaded":sum(x["status"]=="downloaded" for x in items),"items":items},
  ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
