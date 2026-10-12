#!/usr/bin/env python3
"""Import selected, individually identified Antalya resort photos into Travel preview.
All assets are editorial-only. Hotel/agency photographs are user-authorised for the project;
third-party licensing has not been independently established, so production publication
requires a rights check. Never imply a different hotel or room type from the image.
"""
from __future__ import annotations
import hashlib, io, json
from datetime import datetime, timezone
from pathlib import Path
import requests
from PIL import Image, ImageOps, UnidentifiedImageError

ROOT=Path("public/images/travel/antalya-premium")
REPORT=Path("data/travel/antalyaPremiumImageSources.json")
UA={"User-Agent":"Mozilla/5.0 (compatible; BosphorasTravelEditorial/1.0; image attribution retained)","Accept":"image/avif,image/webp,image/jpeg,image/png,image/*;q=0.8"}
# Each URL has been individually selected by hotel name + scene, NOT a generic image search.
ASSETS=[
("regnum-carya","regnum-resort","https://www.pointholiday.com/files/IMG-1775146428.jpg","https://www.pointholiday.com/tr/oteller/regnum-carya","Point Holiday Travel · Regnum Carya","resort panorama"),
("regnum-carya","regnum-main-pool","https://www.regnumhotels.com/media/v55oobq4/regnumcarya_pearlpoolrooms_generalview-02-card.jpg","https://www.regnumhotels.com/en/hotels/regnum-carya/","Regnum Carya official · Pearl pool rooms","pool accommodation"),
("regnum-carya","regnum-pool-suite","https://www.regnumcarya.co.uk/media/t24npr3f/jade-suite-6.jpg","https://www.regnumcarya.co.uk/accommodation/main-building-rooms/jade-suite/","Regnum Carya official · Jade Suite","suite interior"),
("cullinan-belek","cullinan-resort","https://image-tc.galaxy.tf/wijpeg-2xvc1jdz3mnv4lf40agrcil2n/009-cullinan-belek-exterior.jpg","https://www.cullinanhotels.com/gallery","Cullinan Belek official gallery","resort exterior"),
("cullinan-belek","cullinan-pools","https://eu-images.contentstack.com/v3/assets/blte218090c2a6fb1e2/blt5d7df68e6ed488c0/659dd3ea001c56040aa582f7/tuerkei-antalya-cullinan-belek-1307679-l-pool-w-bar-c10-TUR00414.jpg?auto=webp&quality=80&width=1800","https://www.dertour.de/hotel/cullinan-belek-12mGQx","DERTOUR · Cullinan Belek","main pool"),
("cullinan-belek","cullinan-suite","https://image-tc.galaxy.tf/wijpeg-50k64hqjy77lxqmri1af3y4g3/055-cullinan-belek-family-duplex-swim-up_standard.jpg?crop=107%2C0%2C1707%2C1280","https://www.cullinanhotels.com/accommodation/superior-duplex-swim-up","Cullinan Belek official · Superior Duplex Swim-up","duplex suite interior"),
("rixos-premium-belek","rixos-resort","https://lastradar.pl/uploads/hotele/5000/rixos-premium-belek-the-land-of-legends-theme-park-free-access-87ff9145.webp","https://lastradar.pl/hotele/rixos-premium-belek-the-land-of-legends-theme-park-free-access/","LastRadar · Rixos Premium Belek","resort aerial"),
("rixos-premium-belek","rixos-beach-pool","https://www.kelioniulaikas.lt/files/2020-11/3855_large.jpg","https://www.kelioniulaikas.lt/kelione/turkija-rixos-premium-belek-5","Kelioniu Laikas · Rixos Premium Belek","outdoor pool"),
("rixos-premium-belek","rixos-room","https://www.ahstatic.com/photos/b1j5_rokga_00_p_1024x768.jpg","https://all.accor.com/hotel/B1J5/index.en.shtml","Accor / Rixos Premium Belek · deluxe room","deluxe room"),
("maxx-royal-kemer","maxx-kemer-coast","https://www.easy-reisen.ch/imgproxy/background-md/www.easy-reisen.ch/storage/18893/maxx_royal_kemer_resort_aerial_view.jpg","https://www.easy-reisen.ch/hotel/maxx-royal-kemer-resort/","Easy Reisen · Maxx Royal Kemer","resort aerial"),
("maxx-royal-kemer","maxx-kemer-pools","https://www.maxxroyal.com/media/ai5lzogi/mrk_maxx_laguna_1_bedroom_1.jpg","https://www.maxxroyal.com/kemer-resort/stay/lagoon-suites","Maxx Royal Kemer official · Lagoon Suite","private lagoon pool"),
("maxx-royal-kemer","maxx-kemer-villa","https://www.maxxroyal.com/media/uagaiakp/maxx-royal-kemer-beach-villa-3-bedrooms-01.jpg?height=894&width=1440","https://www.maxxroyal.com/kemer-resort/stay/villas","Maxx Royal Kemer official · Beach Villa","beach villa living room"),
("destination","kemer-panorama","https://commons.wikimedia.org/wiki/Special:FilePath/Kemer_-_Panorama.jpg","https://commons.wikimedia.org/wiki/File:Kemer_-_Panorama.jpg","ViseMoD · Wikimedia Commons · CC BY-SA 4.0","Kemer coastal landscape"),
]
def download(session, hotel, stem, url, source, credit, scene):
    path=ROOT/hotel/(stem+".webp")
    result={"hotel":hotel,"file":stem+".webp","localPath":"/images/travel/antalya-premium/"+hotel+"/"+stem+".webp",
            "sourcePage":source,"downloadUrl":url,"credit":credit,"scene":scene,
            "rights":"user reports project permission; third-party restrictions not independently verified",
            "status":"pending"}
    try:
        resp=session.get(url,headers=UA,timeout=38,stream=True,allow_redirects=True)
        resp.raise_for_status()
        blob=bytearray()
        for chunk in resp.iter_content(131072):
            blob.extend(chunk)
            if len(blob)>22000000: raise ValueError("Remote image exceeds 22MB")
        with Image.open(io.BytesIO(blob)) as im:
            im=ImageOps.exif_transpose(im).convert("RGB")
            w,h=im.size
            if w<700 or h<420: raise ValueError(f"Too small: {w}x{h}")
            if w/h<1.14: raise ValueError(f"Not landscape: {w}x{h}")
            if w>1800: im.thumbnail((1800,1400),Image.Resampling.LANCZOS)
            path.parent.mkdir(parents=True,exist_ok=True)
            im.save(path,format="WEBP",quality=86,method=6)
            result.update(status="downloaded",sourceWidth=w,sourceHeight=h,outputWidth=im.width,outputHeight=im.height,
                          bytes=path.stat().st_size,sha256=hashlib.sha256(path.read_bytes()).hexdigest(),
                          transformations="EXIF orientation, aspect validation, resized and WebP quality 86")
    except Exception as e:
        result.update(status="failed",error=str(e)[:250])
        print(f"FAILED {hotel}/{stem}: {e}",flush=True)
    else:
        print(f"OK {hotel}/{stem}: {result['bytes']} bytes",flush=True)
    return result
def main():
    session=requests.Session()
    items=[download(session,*asset) for asset in ASSETS]
    REPORT.parent.mkdir(parents=True,exist_ok=True)
    REPORT.write_text(json.dumps({"scope":"Antalya editorial images; staging feature branch only",
       "timestamp":datetime.now(timezone.utc).isoformat(),
       "expected":len(ASSETS),"downloaded":sum(i["status"]=="downloaded" for i in items),
       "items":items},indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
    failed=[i for i in items if i["status"]!="downloaded"]
    print("Downloaded",len(ASSETS)-len(failed),"of",len(ASSETS),flush=True)
    if failed: raise SystemExit(f"{len(failed)} images need source repair; see {REPORT}")
if __name__=="__main__": main()
