#!/usr/bin/env python3
"""Replace Mandarin Oriental Bodrum accessory photos with verified resort scenes.

Sources are identified hotel/travel editorial pages, not licensed stock; third-party
rights have NOT been independently verified. No upload to production or main.
"""
import json,hashlib,io,sys,time
from pathlib import Path
from urllib.parse import urlparse
import requests
from PIL import Image,ImageOps

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"public/images/travel/bodrum-premium"
REPORT=ROOT/"data/travel/bodrumMandarinPhotoReplacement.json"
HEADERS={"User-Agent":"Mozilla/5.0 (compatible; BosphorasLuxuryStaysEditorial/1.0)","Accept":"image/avif,image/webp,image/jpeg,image/png,*/*"}
ITEMS=[
  {"id":"resort-aerial","hotel":"mandarin-oriental","file":"mandarin-resort-aerial-v2.webp",
   "url":"https://pub-7a32c51aec044bc88f150505acf01675.r2.dev/hotel-images/mandarin-oriental-bodrum.jpg",
   "page":"https://www.michelinkeyhotels.com/hotels/mandarin-oriental-bodrum",
   "descriptionFR":"Vue aérienne des plages et du resort Mandarin Oriental, Bodrum",
   "descriptionEN":"Aerial view of Mandarin Oriental, Bodrum resort and beaches"},
  {"id":"main-pool","hotel":"mandarin-oriental","file":"mandarin-infinity-pool-v2.webp",
   "url":"https://thefamilysuite.co.uk/images/mandarin-oriental-bodrum/mobod-main-pool-2.jpg",
   "page":"https://thefamilysuite.co.uk/hotels/mandarin-oriental-bodrum/",
   "descriptionFR":"Piscine extérieure du Mandarin Oriental, Bodrum",
   "descriptionEN":"Outdoor pool at Mandarin Oriental, Bodrum"},
  {"id":"seaside-terrace","hotel":"mandarin-oriental","file":"mandarin-seaside-terrace-v2.webp",
   "url":"https://www.seasong.com/upload/files/public/hotels/mandarin-oriental-bodrum/slider/mandarin-oriental-bodrum-01.jpg",
   "page":"https://www.seasong.com/hoteldetail/30/5/mandarin-oriental-bodrum",
   "descriptionFR":"Terrasse au bord de l'eau du Mandarin Oriental, Bodrum",
   "descriptionEN":"Waterside terrace at Mandarin Oriental, Bodrum"},
  {"id":"bodrum-coast","hotel":"destination","file":"bodrum-turquoise-bay-v2.webp",
   "url":"https://content.luxurytribune.com/app/uploads/2024/06/Bodrum-Chapot-1.jpg",
   "page":"https://www.luxurytribune.com/en/bulgari-hotels-resorts-opens-a-new-address-in-turkey",
   "descriptionFR":"Crique turquoise et voiliers sur la côte de Bodrum",
   "descriptionEN":"Turquoise Bodrum coastline with sailboats"},
]
HOSTS={"pub-7a32c51aec044bc88f150505acf01675.r2.dev","thefamilysuite.co.uk","www.seasong.com","content.luxurytribune.com"}
def get(item):
    url=item["url"]
    parsed=urlparse(url)
    if parsed.scheme!="https" or parsed.hostname not in HOSTS:raise ValueError("Unexpected media origin")
    last=None
    for attempt in range(3):
        try:
            r=requests.get(url,headers={**HEADERS,"Referer":item["page"]},timeout=(15,40),stream=True)
            r.raise_for_status()
            if urlparse(r.url).hostname not in HOSTS:raise ValueError("Media redirected to unapproved host")
            ctype=r.headers.get("Content-Type","").lower()
            if not ctype.startswith("image/"):raise ValueError("Not image content: "+ctype)
            chunks=[];size=0
            for block in r.iter_content(131072):
                size+=len(block)
                if size>18_000_000:raise ValueError("Media exceeds size limit")
                chunks.append(block)
            raw=b"".join(chunks)
            r.close()
            with Image.open(io.BytesIO(raw)) as im:im.verify()
            with Image.open(io.BytesIO(raw)) as im:
                im=ImageOps.exif_transpose(im)
                w,h=im.size
                if w<850 or h<500:raise ValueError(f"Image too small {w}x{h}")
                im.thumbnail((1700,1150),Image.Resampling.LANCZOS)
                buffer=io.BytesIO()
                im.convert("RGB").save(buffer,format="WEBP",quality=85,method=5)
            local=OUT/item["hotel"]/item["file"]
            local.parent.mkdir(parents=True,exist_ok=True)
            local.write_bytes(buffer.getvalue())
            return {**item,"status":"downloaded","localPath":"/"+local.relative_to(ROOT/"public").as_posix(),
                    "width":w,"height":h,"bytes":len(buffer.getvalue()),
                    "sha256":hashlib.sha256(buffer.getvalue()).hexdigest(),
                    "rights":"Project owner states image authorisations; actual third-party reuse terms not verified",
                    "transformations":"EXIF orientation normalized, resized, WebP"}
        except Exception as e:
            last=str(e)[:240];time.sleep(2*(attempt+1))
        finally:
            try:r.close()
            except Exception:pass
    return {**item,"status":"unavailable","error":last}
def main():
    result=[get(item) for item in ITEMS]
    for entry in result:
        print(entry["status"].upper(),entry["id"],entry.get("width"),entry.get("height"),entry.get("error",""),flush=True)
    report={"scope":"Bodrum preview — Mandarin photo correction",
            "note":"Three photos depict Mandarin Oriental Bodrum; fourth depicts the Bodrum destination, not a particular hotel.",
            "success":sum(x["status"]=="downloaded" for x in result),"attempted":len(result),"items":result}
    REPORT.parent.mkdir(parents=True,exist_ok=True)
    REPORT.write_text(json.dumps(report,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("SUMMARY",report["success"],"/",report["attempted"],flush=True)
    if report["success"]!=len(result):sys.exit(1)
if __name__=="__main__":main()
