#!/usr/bin/env python3
"""Photographs of *Paris neighbourhoods only*, separate from hotel images.
Creative Commons / public domain provenance retained; all WebP files local.
"""
from io import BytesIO
from pathlib import Path
from urllib.parse import quote
from datetime import datetime,timezone
from PIL import Image, ImageOps, ImageStat
import json,hashlib,requests,time

PICS=[
  ("paris-seine-hero","Louvre Pont des Arts.jpg","Jebulon","CC0 1.0","https://creativecommons.org/publicdomain/zero/1.0/",
    "The Louvre river facade and Pont des Arts from the Seine","Le Louvre et le pont des Arts depuis la Seine"),
  ("paris-pont-des-arts","Louvre & pont des Arts.jpg","Tangopaso","Public domain","https://creativecommons.org/publicdomain/mark/1.0/",
    "Louvre and Pont des Arts seen from a boat on the Seine","Le Louvre et le pont des Arts photographiés depuis un bateau"),
  ("paris-champs-elysees","Champs Elysees from the Arch.jpg","ASaber91","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/",
    "Champs-Élysées from the Arc de Triomphe at dusk","Les Champs-Élysées depuis l’Arc de Triomphe au crépuscule"),
  ("paris-saint-germain","Saint-Germain des Prés (3363718209).jpg","Serge Melki","CC BY 2.0","https://creativecommons.org/licenses/by/2.0/",
    "Saint-Germain-des-Prés, the historic church and nearby Parisian café","Saint-Germain-des-Prés, son église historique et les cafés voisins"),
  ("paris-eiffel-seine-wide","Eiffel Tower from Seine river.jpg","Udit Kapoor","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/",
    "Wide view of the Eiffel Tower from the Seine riverbank","Vue panoramique de la tour Eiffel depuis la Seine"),
  ("paris-pont-alexandre","Eiffel Tower and Pont Alexandre III from Seine.jpg","Philippe Alès","CC BY-SA 3.0","https://creativecommons.org/licenses/by-sa/3.0/",
    "Eiffel Tower and Pont Alexandre III from the Seine","La tour Eiffel et le pont Alexandre III vus depuis la Seine")
]
ROOT=Path("public/images/travel/paris-premium/destination")
REPORT=Path("data/travel/parisDestinationImageSources.json")
UA={"User-Agent":"BosphorasTravelParisEditorial/1.0 (documentation and rights tracked)","Accept":"image/avif,image/webp,image/jpeg,image/*;q=0.8"}
S=requests.Session()
out=[]
def fetch_image(file):
    url="https://commons.wikimedia.org/wiki/Special:FilePath/"+quote(file)
    alternatives=[url+"?width=1920",url]
    if file=="Saint-Germain des Prés (3363718209).jpg":
       alternatives.append("https://live.staticflickr.com/3544/3363718209_b860b25817_o.jpg")
    errors=[]
    for u in alternatives:
        try:
            r=S.get(u,headers=UA,timeout=35,stream=True)
            r.raise_for_status()
            buf=bytearray()
            for piece in r.iter_content(128000):
                buf.extend(piece)
                if len(buf)>30000000:raise ValueError("too large")
            with Image.open(BytesIO(buf)) as src:
                im=ImageOps.exif_transpose(src).convert("RGB")
                if im.width<1000 or im.height<600:raise ValueError("source too small")
                width,height=im.size
                im.thumbnail((2000,1400),Image.Resampling.LANCZOS)
                p=BytesIO();im.save(p,"WEBP",quality=86,method=6)
                return p.getvalue(),(width,height),im.size,r.url
        except Exception as e:errors.append(str(e)[:155])
    raise ValueError(" | ".join(errors))
for key,name,author,license_name,license_url,en,fr in PICS:
    page="https://commons.wikimedia.org/wiki/File:"+name.replace(" ","_")
    entry={"key":key,"sourceFile":name,"sourcePage":page,"author":author,"license":license_name,
          "licenseUrl":license_url,"fr":fr,"en":en,"localPath":"/images/travel/paris-premium/destination/"+key+".webp","status":"failed"}
    try:
        data,insize,outsize,origin=fetch_image(name)
        dest=ROOT/(key+".webp")
        dest.parent.mkdir(parents=True,exist_ok=True)
        dest.write_bytes(data)
        entry.update(status="downloaded",downloadUrl=origin,sourceSize=insize,outputSize=outsize,
                     bytes=len(data),sha256=hashlib.sha256(data).hexdigest(),transformations="EXIF normalized, resized, WebP q86")
        print("OK",key,len(data),flush=True)
    except Exception as exc:
        entry["error"]=str(exc)[:350]
        print("FAILED",key,entry["error"],flush=True)
    out.append(entry)
REPORT.parent.mkdir(parents=True,exist_ok=True)
REPORT.write_text(json.dumps({"scope":"Paris destination landscapes only, hotels independent","downloaded":sum(x["status"]=="downloaded" for x in out),"expected":len(PICS),"updatedAt":datetime.now(timezone.utc).isoformat(),"items":out},ensure_ascii=False,indent=2)+"\n")
