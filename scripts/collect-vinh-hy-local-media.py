#!/usr/bin/env python3
"""Vinh Hy Bay #70 source-image archival for owner review only.
Requires: python -m pip install requests Pillow
Never infer commercial image rights from a reachable remote URL.
"""
from pathlib import Path
from urllib.parse import urlparse
from PIL import Image,ImageOps
import requests,json,io,hashlib
root=Path(__file__).resolve().parents[1]
m=json.loads((root/'data/travel/vinhHyBayMediaCandidates.json').read_text())
all_images=m['destinationScenes']+m['hotels']
assert len(m['destinationScenes'])==9 and len(m['hotels'])==12
assert m['publicUseApproved'] is False
assert len({p['sha256'] for p in all_images})==21
approved_hosts={'upload.wikimedia.org','thumb.wikimedia.org','www.aman.com','swiss-belvillasbinhtien.com','casamayaresort.vn','resortvinhhy.com'}
s=requests.Session()
s.headers['User-Agent']='BosphorasTravelEditorial/1.0 (https://bosphoras.com)'
for i,p in enumerate(all_images):
 u=urlparse(p['publicPreviewUrl'])
 assert u.scheme=='https' and u.hostname in approved_hosts
 assert p['localPath'].startswith('/images/travel/vinh-hy-bay-premium/')
 assert p['sourcePage'].startswith('https://')
 if i<9:
  assert p['commercialRightsCleared'] is True
  assert p['sourcePage'].startswith('https://commons.wikimedia.org/wiki/File:')
 else:
  assert p['commercialRightsCleared'] is False
 r=s.get(p['publicPreviewUrl'],timeout=50);r.raise_for_status()
 assert len(r.content)<40000000
 img=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content))).convert('RGB')
 img.thumbnail((1500,1100),Image.Resampling.LANCZOS)
 dest=root/'public'/p['localPath'].lstrip('/')
 dest.parent.mkdir(parents=True,exist_ok=True)
 img.save(dest,'WEBP',quality=84,method=5)
 digest=hashlib.sha256(dest.read_bytes()).hexdigest()
 if digest!=p['sha256']:print('SOURCE_OR_ENCODER_CHANGED',p['key'],digest)
 print('ARCHIVED_PRIVATE',p['key'])
print('PRIVATE_21_SOURCES_ARCHIVED')
