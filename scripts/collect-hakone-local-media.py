#!/usr/bin/env python3
"""Download exact Hakone #69 source images, verify rights gates and archive private WebPs.
Requires: requests, Pillow. Never mark private hotel publisher pictures public-use approved.
"""
from pathlib import Path
from urllib.parse import urlparse
import requests,hashlib,io,json
from PIL import Image,ImageOps
root=Path(__file__).resolve().parents[1]
m=json.loads((root/'data/travel/hakoneMediaCandidates.json').read_text())
all_=m['destinationScenes']+m['hotels']
assert m['destination']=='hakone' and m['publicUseApproved'] is False
assert len(m['destinationScenes'])==9 and len(m['hotels'])==12
assert len({p['publicPreviewUrl'] for p in all_})==21
allowed={'thumb.wikimedia.org','upload.wikimedia.org','www.gorakadan.com','www.hakonesuishoen.jp','www.hakoneginyu.co.jp','kinnotake-resorts.com'}
s=requests.Session()
s.headers['User-Agent']='BosphorasLuxuryTravelEditorial/1.0 (https://bosphoras.com)'
for i,p in enumerate(all_):
 url=p['downloadUrl'];u=urlparse(url)
 assert u.scheme=='https' and u.hostname in allowed,(p['key'],u.hostname)
 assert p['visuallyVerified'] is False and p['sourcePage'].startswith('https://')
 assert p['localPath'].startswith('/images/travel/hakone-premium/')
 if i<9:
  assert p['commercialRightsCleared'] is True
  assert p['sourcePage'].startswith('https://commons.wikimedia.org/wiki/File:')
 else:
  assert p['commercialRightsCleared'] is False
  assert p['rightsEvidenceType']=='hotel_official_publisher_not_licensed'
 r=s.get(url,timeout=50);r.raise_for_status()
 assert len(r.content)<40_000_000 and r.headers.get('Content-Type','').startswith('image/')
 img=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content))).convert('RGB')
 assert min(img.size)>=300
 img.thumbnail((1500,1100),Image.Resampling.LANCZOS)
 path=root/'public'/p['localPath'].lstrip('/')
 path.parent.mkdir(parents=True,exist_ok=True)
 img.save(path,'WEBP',quality=84,method=5)
 digest=hashlib.sha256(path.read_bytes()).hexdigest()
 if digest!=p['sha256']:
  print('ENCODER_OR_SOURCE_CHANGE_REVIEW',p['key'],digest,'expected',p['sha256'])
 print('ARCHIVED_PRIVATE',p['key'],path.stat().st_size)
print('HAKONE_PRIVATE_MEDIA_ARCHIVED',len(all_),'human visual review and hotel public photo permissions still pending')
