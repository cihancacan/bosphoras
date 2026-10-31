#!/usr/bin/env python3
"""Archive 21 Kyoto editorial source photographs, preserving all licence flags.
Run explicitly from repo root in a private work environment; never assume rights or visual QA.
Install: pip install requests Pillow
"""
from pathlib import Path
from urllib.parse import urlparse
from PIL import Image,ImageOps,ImageDraw
import requests,json,io,hashlib
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'data/travel/kyotoMediaCandidates.json').read_text())
all_photos=data['destinationScenes']+data['hotels']
assert len(data['destinationScenes'])==9 and len(data['hotels'])==12
assert data['publicUseApproved'] is False
allowed={'thumb.wikimedia.org','upload.wikimedia.org','www.aman.com','assets.hyatt.com','cache.marriott.com','www.sophibee.com','cf.bstatic.com'}
session=requests.Session()
session.headers['User-Agent']='BosphorasLuxuryStaysEditorial/1.0 (https://bosphoras.com)'
for idx,p in enumerate(all_photos):
 url=p['downloadUrl'];host=urlparse(url).hostname
 assert urlparse(url).scheme=='https' and host in allowed,(idx,host)
 assert p['visuallyVerified'] is False and p['sourcePage'].startswith('https://')
 assert p['localPath'].startswith('/images/travel/kyoto-premium/')
 if idx<9:
  assert p['commercialRightsCleared'] is True and p['sourcePage'].startswith('https://commons.wikimedia.org/wiki/File:')
 else:
  assert p['commercialRightsCleared'] is False
 r=session.get(url,timeout=55);r.raise_for_status()
 assert len(r.content)<45_000_000 and r.headers.get('content-type','').startswith('image/')
 img=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content))).convert('RGB')
 assert min(img.size)>=350
 img.thumbnail((1500,1100),Image.Resampling.LANCZOS)
 dest=root/'public'/p['localPath'].lstrip('/')
 dest.parent.mkdir(parents=True,exist_ok=True)
 img.save(dest,'WEBP',quality=84,method=5)
 digest=hashlib.sha256(dest.read_bytes()).hexdigest()
 if digest!=p['sha256']:
  # A source may be recoded differently by another Pillow version.
  print('HASH_DIFF_REVIEW_REQUIRED',p['key'],digest,'original',p['sha256'])
 print('SOURCED',p['key'],len(dest.read_bytes()),'private rights only')
print('KYOTO_PRIVATE_MEDIA_ARCHIVED',len(all_photos),'public rights and manual identity review still pending')
