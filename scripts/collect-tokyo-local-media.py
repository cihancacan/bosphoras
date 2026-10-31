#!/usr/bin/env python3
"""Tokyo 67: reproduce exact-first-party hotel and Commons source WebPs locally.
Does NOT grant publisher photo reuse rights, approve images visually, or publish them.
Run from repository root. Output remains private until rights and manual approval.
"""
import hashlib,io,json,pathlib,urllib.parse
import requests
from PIL import Image,ImageOps
repo=pathlib.Path(__file__).resolve().parents[1]
m=json.loads((repo/'data/travel/tokyoMediaCandidates.json').read_text())
assert m['destination']=='tokyo' and m['publicUseApproved'] is False
all_=m['destinationScenes']+m['hotels']
assert len(m['destinationScenes'])==9 and len(m['hotels'])==12
assert len({x['publicPreviewUrl'] for x in all_})==21
allowed={'thumb.wikimedia.org','upload.wikimedia.org','www.aman.com','prcdn.freetls.fastly.net','newsroom.hyatt.com','www.1hotels.com'}
s=requests.Session()
s.headers['User-Agent']='BosphorasEditorial/1.0 (https://bosphoras.com)'
for i,p in enumerate(all_):
 assert p['visuallyVerified'] is False
 assert p['sourcePage'].startswith('https://')
 assert p['localPath'].startswith('/images/travel/tokyo-premium/')
 u=p['downloadUrl'];host=urllib.parse.urlparse(u).hostname
 assert urllib.parse.urlparse(u).scheme=='https' and host in allowed,(i,host)
 if i<9:
  assert p['commercialRightsCleared'] is True
  assert p['sourcePage'].startswith('https://commons.wikimedia.org/wiki/File:')
 else:
  assert p['commercialRightsCleared'] is False
  assert p['rightsEvidenceType']=='hotel_official_publisher_not_licensed'
 r=s.get(u,timeout=55);r.raise_for_status()
 assert len(r.content)<45_000_000 and r.headers.get('content-type','').startswith('image/')
 im=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content))).convert('RGB')
 assert min(im.size)>350
 im.thumbnail((1500,1100),Image.Resampling.LANCZOS)
 path=repo/'public'/p['localPath'].lstrip('/')
 path.parent.mkdir(parents=True,exist_ok=True)
 im.save(path,'WEBP',quality=84,method=5)
 blob=path.read_bytes()
 digest=hashlib.sha256(blob).hexdigest()
 if digest != p['sha256']:
  # Different Pillow/libwebp versions can produce different bytes from the same photo.
  # Preserve clear source lineage and require subsequent image QA, not auto-approval.
  print('ENCODER_VARIANCE',p['key'],digest,'expected',p['sha256'])
 print('SAVED',p['key'],len(blob),p['sourcePage'])
print('Collected',len(all_),'private Tokyo WebPs; manual image approval and publisher rights still pending')
