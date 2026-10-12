#!/usr/bin/env python3
"""Dubai city and district images: documented Creative Commons files, never hotel photography."""
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import quote
from io import BytesIO
import hashlib,json,requests
from PIL import Image,ImageOps

SOURCES=[
  ("palm-jumeirah","Palm Jumeirah, Dubai (53384749864).jpg",
   "Domenico Convertini","CC BY-SA 2.0","https://creativecommons.org/licenses/by-sa/2.0/"),
  ("downtown-creek-sunset","Sunset Burj Khalifa Horizon View(Down Town Dubai), Dubai Creek Harbour.png",
   "Vamos John","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/"),
  ("dubai-sunset-hero","Dubai skyline at sunset.jpg",
   "Murtblackberry","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/")
]
root=Path("public/images/travel/dubai-premium/destination")
report=Path("data/travel/dubaiDestinationImageSources.json")
items=[]
for slug,file,author,license_name,license_url in SOURCES:
    url="https://commons.wikimedia.org/wiki/Special:FilePath/"+quote(file)
    page="https://commons.wikimedia.org/wiki/File:"+file.replace(" ","_")
    result={"key":slug,"sourcePage":page,"sourceFile":file,"author":author,"license":license_name,
            "licenseUrl":license_url,"status":"failed","localPath":"/images/travel/dubai-premium/destination/"+slug+".webp"}
    try:
        r=requests.get(url,headers={"User-Agent":"BosphorasLuxuryStaysEditorial/1.0 (source details preserved)"},
                       timeout=48,stream=True)
        r.raise_for_status()
        buf=bytearray()
        for ch in r.iter_content(262144):
            buf.extend(ch)
            if len(buf)>35000000: raise ValueError("Image larger than 35 MB")
        with Image.open(BytesIO(buf)) as original:
            im=ImageOps.exif_transpose(original).convert("RGB")
            if im.width<1000 or im.height<600: raise ValueError("Insufficient source resolution")
            if im.width/im.height<1.2: raise ValueError("Not suitable for a landscape card")
            dimensions=[im.width,im.height]
            im.thumbnail((2000,1350),Image.Resampling.LANCZOS)
            root.mkdir(parents=True,exist_ok=True)
            dest=root/(slug+".webp")
            im.save(dest,"WEBP",quality=87,method=6)
            result.update(status="downloaded",downloadUrl=r.url,sourceSize=dimensions,
                outputSize=[im.width,im.height],bytes=dest.stat().st_size,
                sha256=hashlib.sha256(dest.read_bytes()).hexdigest(),
                modifications="EXIF correction; resize; WebP Q87")
        print("OK",slug,result["bytes"],flush=True)
    except Exception as e:
        result["error"]=str(e)[:250]
        print("FAILED",slug,str(e)[:125],flush=True)
    items.append(result)
report.parent.mkdir(parents=True,exist_ok=True)
report.write_text(json.dumps({"scope":"Dubai destination scenes only, not hotel or accommodation photos",
  "checkedAt":datetime.now(timezone.utc).isoformat(),"downloaded":sum(x["status"]=="downloaded" for x in items),
  "expected":len(items),"items":items},indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
