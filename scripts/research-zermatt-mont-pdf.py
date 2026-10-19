#!/usr/bin/env python3
"""Research high-resolution photographs embedded in Mont Cervin Palace's OWN PDF brochure.

This saves source-only candidates, NEVER exposes or approves them on the site.
Photographic subject and usage credit must be inspected before moving into
the three approved Mont Cervin image slots.
"""
from pathlib import Path
from io import BytesIO
import hashlib
import json
import requests
import fitz
from PIL import Image,ImageOps

URLS=[
 "https://www.montcervinpalace.ch/wp-content/uploads/mice-brochure-en-fr.pdf",
 "https://www.montcervinpalace.ch/wp-content/uploads/2024/06/mcp-directory-en.pdf",
]
OUT=Path("public/images/travel/zermatt-premium/mont-cervin-research")
INDEX=Path("docs/travel-zermatt-mont-cervin-pdf-media.json")
OUT.mkdir(parents=True,exist_ok=True)
INDEX.parent.mkdir(parents=True,exist_ok=True)
all_images=[]
seen=set()

for pdf_url in URLS:
 try:
  response=requests.get(pdf_url,timeout=34,headers={"User-Agent":"BosphorasLuxuryStays/2.0 photo provenance QA"})
  response.raise_for_status()
  doc=fitz.open(stream=response.content,filetype="pdf")
 except Exception as exc:
  print("PDF_UNAVAILABLE",pdf_url,str(exc)[:220],flush=True)
  continue
 print("PDF_LOADED",pdf_url,"pages",len(doc),flush=True)
 document_label="mcp-brochure" if "brochure" in pdf_url else "mcp-directory"
 for page_no,page in enumerate(doc):
  words=page.get_text().lower()
  priority=any(key in words for key in ("suite","indoor pool","spa","bedroom","room","wellness","piscine"))
  if not priority:continue
  for image_data in page.get_images(full=True):
   xref=image_data[0]
   try:
    binary=doc.extract_image(xref)["image"]
    with Image.open(BytesIO(binary)) as img:
     natural=ImageOps.exif_transpose(img).convert("RGB")
     w,h=natural.size
     if w<900 or h<500 or not (1.14 < w/h < 3.0):continue
     natural.thumbnail((1700,1250),Image.Resampling.LANCZOS)
     buffer=BytesIO()
     natural.save(buffer,format="WEBP",quality=84,method=5)
     data=buffer.getvalue()
    sha=hashlib.sha256(data).hexdigest()
    if sha in seen or len(data)<25000:continue
    seen.add(sha)
    file=OUT/f"{document_label}-p{page_no+1:02d}-im{xref:04d}.webp"
    file.write_bytes(data)
    all_images.append({
     "status":"candidate_needs_visual_review",
     "approved":False,"visuallyVerified":False,"commercialRightsCleared":False,
     "localPath":"/"+file.as_posix().removeprefix("public/"),
     "originalPdfUrl":pdf_url,
     "pageNumber":page_no+1,"xref":xref,
     "pageContext":" ".join(words.split())[:280],
     "sha256":sha,"bytes":len(data),
     "originalSize":[w,h],"outputSize":list(natural.size),
     "attribution":"Mont Cervin Palace official PDF brochure, original photographer credit to be checked"
    })
    print("PHOTO_CANDIDATE",file,"page",page_no+1,"original",w,h,flush=True)
    if len(all_images)>=35:break
   except Exception as exc:
    print("IMAGE_SKIP",xref,str(exc)[:120],flush=True)
  if len(all_images)>=35:break
 doc.close()
 if len(all_images)>=35:break

INDEX.write_text(json.dumps({"destination":"zermatt","property":"Mont Cervin Palace",
 "purpose":"Research candidates only; not ready for Bosphoras galleries",
 "photos":all_images},ensure_ascii=False,indent=2)+"\n",encoding="utf8")
print("MONT_CERVIN_PDF_PHOTOS",len(all_images),"all unapproved; no Vercel build")
