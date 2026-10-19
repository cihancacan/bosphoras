#!/usr/bin/env python3
"""Inspect images embedded in THE OMNIA hotel's official press PDF.

No new file enters public city galleries until it is individually visually
verified; this research-only output is not indexed or published in Next.js.
"""
import hashlib
import json
from io import BytesIO
from pathlib import Path
import fitz
import requests
from PIL import Image,ImageOps

SOURCE="https://the-omnia.com/files/OMNIA_press_2025_E_2025-04-22-141039_ecfl.pdf"
OUT=Path("public/images/travel/zermatt-premium/the-omnia-research")
INDEX=Path("docs/travel-zermatt-omnia-official-pdf-media.json")
OUT.mkdir(parents=True,exist_ok=True)
INDEX.parent.mkdir(parents=True,exist_ok=True)
photos=[]
try:
 response=requests.get(SOURCE,timeout=35,headers={"User-Agent":"BosphorasLuxuryStays/2.0 press kit provenance QA"})
 response.raise_for_status()
 document=fitz.open(stream=response.content,filetype="pdf")
 seen=set()
 for index,page in enumerate(document):
  text=" ".join(page.get_text().lower().split())
  for image in page.get_images(full=True):
   xref=image[0]
   try:
    raw=document.extract_image(xref)["image"]
    with Image.open(BytesIO(raw)) as original:
     frame=ImageOps.exif_transpose(original).convert("RGB")
     width,height=frame.size
     if width<950 or height<510 or not 1.1<width/height<3.2:continue
     frame.thumbnail((1700,1200),Image.Resampling.LANCZOS)
     buf=BytesIO();frame.save(buf,"WEBP",quality=83,method=5)
     data=buf.getvalue()
    sha=hashlib.sha256(data).hexdigest()
    if sha in seen or len(data)<28000:continue
    seen.add(sha)
    file=OUT/f"omnia-p{index+1:02d}-im{xref:04d}.webp"
    file.write_bytes(data)
    photos.append({"sourcePage":SOURCE,"pdfPage":index+1,"xref":xref,
     "file":"/"+file.as_posix().removeprefix("public/"),
     "sha256":sha,"bytes":len(data),"originalSize":[width,height],
     "pageContext":text[:250],
     "visuallyVerified":False,"commercialRightsCleared":False,
     "usage":"Research-only candidate, no commercial display until checked"})
    print("OMNIA_PDF_CANDIDATE",file,"page",index+1,flush=True)
    if len(photos)>=35:break
   except Exception as exc:
    print("IMAGE_SKIP",xref,str(exc)[:90],flush=True)
  if len(photos)>=35:break
 document.close()
except Exception as exc:
 print("OMNIA_PDF_SOURCE_UNAVAILABLE",str(exc)[:220],flush=True)
INDEX.write_text(json.dumps({"hotel":"THE OMNIA","source":SOURCE,
 "status":"not approved for display","photos":photos},ensure_ascii=False,indent=2)+"\n",encoding="utf8")
print("OMNIA_PDF_RESEARCH_PHOTOS",len(photos),"all fail-closed")
