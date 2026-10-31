#!/usr/bin/env python3
"""Reconstruct Palawan #66 21 WebPs from the exact already-source-reviewed media URLs.
Private owner preview only: official publisher photos do NOT carry public redistribution rights.
Never sets visuallyVerified=True. Do not publish until manual contact-sheet approval.
"""
import hashlib,io,json,pathlib,re,time,urllib.parse
import requests
from PIL import Image,ImageOps,ImageDraw
R=pathlib.Path('.')
root=R/'public/images/travel/palawan-premium'
scenes=json.loads((R/'data/travel/palawanRemoteScenes.json').read_text())
hotels=json.loads((R/'data/travel/palawanRemoteHotels.json').read_text())
assert len(scenes)==9 and len(hotels)==12
allowed={'thumb.wikimedia.org','upload.wikimedia.org','cdn.sanity.io','r.profitroom.com','www.discovery.s14-host.com','discovery.s14-host.com'}
session=requests.Session()
session.headers['User-Agent']='BosphorasLuxuryStaysEditorial/1.0 (private photo source verification)'
allphotos=[]
for index,p in enumerate(scenes+hotels,1):
 url=p['downloadUrl']
 parsed=urllib.parse.urlparse(url)
 assert parsed.scheme=='https' and parsed.hostname in allowed,(index,parsed.hostname)
 assert p['publicPreviewUrl'].startswith('https://') and p['sourcePage'].startswith('https://')
 assert p['localPath'].startswith('/images/travel/palawan-premium/')
 if index<=9:
  assert p['sourcePage'].startswith('https://commons.wikimedia.org/wiki/File:')
  assert p['commercialRightsCleared'] is True
  assert re.match(r'^(CC BY(?:-SA)? [234]\\.0|CC0|Public domain)',p['license'],re.I)
 else:
  assert p['commercialRightsCleared'] is False
  assert p['property'] in {'El Nido Resorts Lagen Island','El Nido Resorts Pangulasian Island','Cauayan Boutique Private Island','Discovery Coron'}
 response=None
 for retry in range(3):
  try:
   response=session.get(url,timeout=45,headers={'Accept':'image/avif,image/webp,image/jpeg,image/png,image/*'})
   response.raise_for_status()
   assert len(response.content)<=20_000_000,'oversized source'
   assert response.headers.get('content-type','').lower().startswith('image/'),'not an image'
   break
  except Exception:
   if retry==2: raise
   time.sleep(2*(retry+1))
 img=ImageOps.exif_transpose(Image.open(io.BytesIO(response.content))).convert('RGB')
 original=[img.width,img.height]
 assert min(original)>=400,(index,original)
 img.thumbnail((1500,1100),Image.Resampling.LANCZOS)
 file=R/'public'/p['localPath'].lstrip('/')
 file.parent.mkdir(parents=True,exist_ok=True)
 img.save(file,'WEBP',quality=82,method=5)
 b=file.read_bytes()
 assert b[:4]==b'RIFF' and b[8:12]==b'WEBP'
 assert len(b)>17000,(file,len(b))
 props=dict(p,originalSize=original,outputSize=[img.width,img.height],bytes=len(b),
   sha256=hashlib.sha256(b).hexdigest(),
   pixelFingerprint=hashlib.sha256(img.resize((48,48),Image.Resampling.LANCZOS).tobytes()).hexdigest(),
   visuallyVerified=False,status='source_identified_private_preview',
   rightsEvidenceType=('wikimedia_license_metadata' if index<=9 else 'hotel_official_publisher_not_licensed'),
   visualReviewNote='HUMAN_CONTACT_SHEET_REVIEW_PENDING')
 allphotos.append(props)
 print('FETCHED',index,p['key'],len(b),flush=True)
assert len({p['sha256'] for p in allphotos})==21,'duplicate binary image'
assert len({p['pixelFingerprint'] for p in allphotos})==21,'duplicate pixel fingerprint'
assert len({p['localPath'] for p in allphotos})==21,'duplicate path'
manifest={'destination':'palawan','scope':'private_owner_preview_only',
 'rightsNotice':'Publisher hotel photos lack independent public commercial redistribution permission',
 'cityCount':9,'hotelCount':12,'destinationScenes':allphotos[:9], 'hotels':allphotos[9:],
 'visualQA':'PENDING_MANUAL_21_PHOTO_IDENTITY_REVIEW','publicUseApproved':False,'internalReviewedPhotoCount':0}
out=R/'data/travel/palawanMediaCandidates.json'
out.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\\n')
cols=4;rows=6;w=320;h=242
board=Image.new('RGB',(cols*w,rows*h),'white')
d=ImageDraw.Draw(board)
for k,p in enumerate(allphotos):
 im=Image.open(R/'public'/p['localPath'].lstrip('/')).convert('RGB')
 im.thumbnail((w-8,210),Image.Resampling.LANCZOS)
 x=(k%cols)*w;y=(k//cols)*h
 board.paste(im,(x,y));d.text((x+4,y+216),p['key']+' '+p.get('propertyKey','landscape'),fill='black')
board.save(R/'docs/travel-palawan-contact-sheet.jpg',quality=83)
print('SUCCESS 9 Commons + 12 publisher Palawan WebPs, 21 hashes; NO manual QA or commercial hotel license inferred')
