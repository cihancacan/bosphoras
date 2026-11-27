#!/usr/bin/env python3
"""Extract embedded photographs from two official property-specific brochures.
No rendered PDF pages, invented subjects or public approval. Preserve page/xref provenance.
"""
import io,json,hashlib
from pathlib import Path
import fitz
from PIL import Image,ImageOps,ImageDraw,ImageStat
from collect_media_adapter import get
SOURCES=[
 ('rome','bvlgari','Bvlgari Hotel Roma','https://www.bulgarihotels.com/dam/jcr%3A17946893-0585-4638-9381-733ec44cc0a9/brochure_bvlgari-hotel-roma.pdf'),
 ('barcelona','mandarin','Mandarin Oriental, Barcelona','https://photos.mandarinoriental.com/is/content/MandarinOriental/barcelona-fact-sheet')
]
root=Path('public/images/travel')
report={}
for slug,key,hotel,url in SOURCES:
 rows=[];errors=[];seen=set();fps=[]
 folder=root/(slug+'-premium')/key/'brochure-review';folder.mkdir(parents=True,exist_ok=True)
 try:
  resolved,raw=get(url,45_000_000)
  doc=fitz.open(stream=raw,filetype='pdf')
  for pi,page in enumerate(doc):
   for info in page.get_images(full=True):
    xref=info[0]
    if xref in seen:continue
    seen.add(xref)
    try:
     obj=doc.extract_image(xref)
     if not obj:continue
     im=ImageOps.exif_transpose(Image.open(io.BytesIO(obj['image']))).convert('RGB')
     sw,sh=im.size
     if sw<800 or sh<450 or not 1.05<=sw/sh<=3.4:continue
     if sum(ImageStat.Stat(im.resize((100,100))).stddev)/3<14:continue
     pix=list(im.resize((9,8)).convert('L').getdata())
     dh=sum((1<<i)*int(pix[(i//8)*9+i%8]>pix[(i//8)*9+i%8+1]) for i in range(64))
     if any((dh^old).bit_count()<11 for old in fps):continue
     fps.append(dh)
     im.thumbnail((1280,850),Image.Resampling.LANCZOS)
     output=folder/f'page-{pi+1}-image-{xref}.webp'
     for q in (82,78,74,70):
      im.save(output,'WEBP',quality=q,method=6)
      if output.stat().st_size<=260000:break
     if output.stat().st_size<12000:output.unlink();continue
     rows.append({'key':output.stem,'hotel':hotel,'sourcePage':url,'sourceResolvedUrl':resolved,'pdfPage':pi+1,'pdfImageXref':xref,'credit':hotel+' official brochure','localPath':'/'+str(output).removeprefix('public/'),'sourcePixels':[sw,sh],'webpPixels':list(im.size),'webpBytes':output.stat().st_size,'webpSHA256':hashlib.sha256(output.read_bytes()).hexdigest(),'ownerPermissionDeclared':True,'commercialRightsCleared':False,'visuallyVerified':False,'previewVisualApproved':False,'status':'embedded_image_pending_visual_review'})
    except Exception as e:errors.append(str(e)[:200])
  doc.close()
 except Exception as e:errors.append(str(e)[:300])
 if rows:
  sheet=Image.new('RGB',(1200,220*((len(rows)+3)//4)),'white');draw=ImageDraw.Draw(sheet)
  for i,r in enumerate(rows):
   im=Image.open('public'+r['localPath']);im.thumbnail((292,180));x=i%4*300;y=i//4*220;sheet.paste(im,(x+(300-im.width)//2,y));draw.text((x+4,y+183),r['key'],fill='black')
  sheet.save(folder/'contact-sheet.webp','WEBP',quality=82)
 report[key]={'hotel':hotel,'candidateCount':len(rows),'images':rows,'errors':errors}
 print('BROCHURE_MEDIA',key,len(rows),errors,flush=True)
Path('data/travel/media89to93BrochureCandidates.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
