#!/usr/bin/env python3
"""Documented authentic Saint-Tropez landscapes, separate from luxury hotel galleries.

All Wikimedia files are by dronepicr, CC BY 2.0, geographically attributed to
the true location depicted. Resized and converted WebP with provenance ledger.
"""
from pathlib import Path
from urllib.parse import quote
from datetime import datetime, timezone
from io import BytesIO
import hashlib, json, time
import requests
from PIL import Image, ImageOps

ITEMS=[
 ("saint-tropez-harbour-hero","Aerial view of the old town and the old port of Saint-Tropez, France (52724205855).jpg","La vieille ville et le port de Saint-Tropez au-dessus de la Méditerranée","The old town and harbour of Saint-Tropez above the Mediterranean"),
 ("saint-tropez-yachts-bay","Aerial view of yachts near Saint-Tropez, France (52723269222).jpg","Yachts mouillant près de Saint-Tropez, sur la Méditerranée azur","Yachts anchored in Mediterranean blue water near Saint-Tropez"),
 ("saint-tropez-old-port","Vieux port de pêche The old port of Saint-Tropez, France (52723272042).jpg","Le Vieux-Port de pêche et les maisons colorées de Saint-Tropez","Historic fishing harbour and colourful Saint-Tropez waterfront houses"),
 ("saint-tropez-pampelonne","Aerial view of Pampelonne Beach, Saint-Tropez, France (52723263302).jpg","La plage de Pampelonne et ses eaux claires sur la commune de Ramatuelle","Sunny Pampelonne beach and the Mediterranean in Ramatuelle"),
 ("saint-tropez-coast-vineyards","Aerial view of vineyards in Pampelonne, Saint-Tropez, France (52724264298).jpg","Vignobles de Ramatuelle et paysages près de Pampelonne","Vineyards and Mediterranean coast landscape near Pampelonne"),
 ("saint-tropez-pampelonne-bay","Aerial view of the Bay of Pampelonne, Saint-Tropez, France (52724196595).jpg","La baie de Pampelonne vue du ciel, ses plages et sa mer turquoise","Aerial Pampelonne bay, soft sandy coastline and turquoise sea")
]
ROOT=Path("public/images/travel/saint-tropez-premium/destination")
REPORT=Path("data/travel/saintTropezDestinationImageSources.json")
S=requests.Session()
H={"User-Agent":"BosphorasTravelSaintTropezEditorial/1.0 (CC BY attribution recorded)","Accept":"image/avif,image/webp,image/jpeg,image/*;q=0.8"}
data=[]
for key,filename,fr,en in ITEMS:
    path="/images/travel/saint-tropez-premium/destination/"+key+".webp"
    page="https://commons.wikimedia.org/wiki/File:"+filename.replace(" ","_")
    record={"key":key,"sourceFile":filename,"sourcePage":page,"author":"dronepicr",
      "license":"CC BY 2.0","licenseUrl":"https://creativecommons.org/licenses/by/2.0/",
      "fr":fr,"en":en,"status":"failed","localPath":path}
    failures=[]
    url="https://commons.wikimedia.org/wiki/Special:FilePath/"+quote(filename)
    for width in (1920,1600,1280,0):
      try:
        request=url+("?width="+str(width) if width else "")
        r=S.get(request,timeout=45,headers=H,stream=True);r.raise_for_status()
        chunks=bytearray()
        for ch in r.iter_content(262144):
          chunks.extend(ch)
          if len(chunks)>25000000:raise ValueError("Image >25 MB")
        with Image.open(BytesIO(chunks)) as source:
          im=ImageOps.exif_transpose(source).convert("RGB")
          if im.width<960 or im.height<600:raise ValueError("Source too small")
          srcsize=[im.width,im.height]
          im.thumbnail((2000,1450),Image.Resampling.LANCZOS)
          ROOT.mkdir(parents=True,exist_ok=True)
          local=ROOT/(key+".webp")
          im.save(local,"WEBP",quality=86,method=6)
          record.update(status="downloaded",downloadUrl=r.url,
           sourceSize=srcsize,outputSize=[im.width,im.height],bytes=local.stat().st_size,
           sha256=hashlib.sha256(local.read_bytes()).hexdigest(),
           transformation="EXIF orientation normalized, max 2000 px width, WebP quality 86")
          print("OK",key,record["bytes"],flush=True)
          break
      except Exception as exc:failures.append(str(exc)[:140])
    if record["status"]!="downloaded":
      record["errors"]=failures
      print("FAILED",key,failures[:2],flush=True)
    data.append(record)
REPORT.parent.mkdir(parents=True,exist_ok=True)
REPORT.write_text(json.dumps({"scope":"Saint-Tropez authentic destination imagery, no hotel depiction",
  "createdAt":datetime.now(timezone.utc).isoformat(),
  "expected":len(ITEMS),"downloaded":sum(x["status"]=="downloaded" for x in data),
  "items":data},ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
