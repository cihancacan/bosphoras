#!/usr/bin/env python3
"""Da Nang #71: source-by-source reproducible image archive for private review.
Requires pip install requests Pillow. It will NOT approve public image rights, changes to identities, or authorisations.
"""
from pathlib import Path
from urllib.parse import urlparse
from PIL import Image,ImageOps,ImageDraw
import requests,json,io,hashlib
root=Path(__file__).resolve().parents[1]
manifest=json.loads((root/'data/travel/daNangMediaCandidates.json').read_text())
all_images=manifest['destinationScenes']+manifest['hotels']
assert len(manifest['destinationScenes'])==9 and len(manifest['hotels'])==12
assert manifest['publicUseApproved'] is False
assert len({p['sha256'] for p in all_images})==21
assert len({p['pixelFingerprint'] for p in all_images})==21
allowed={'thumb.wikimedia.org','upload.wikimedia.org','www.danang.intercontinental.com','tiawellnessresort.com','dynamic-media-cdn.tripadvisor.com','assets.hyatt.com','namanbackend.mpoint.vn'}
s=requests.Session()
s.headers['User-Agent']='BosphorasLuxuryStaysEditorial/1.0 (https://bosphoras.com)'
for i,p in enumerate(all_images):
 u=urlparse(p['publicPreviewUrl'])
 assert u.scheme=='https' and u.hostname in allowed,(p['key'],u.hostname)
 assert p['visuallyVerified'] is True and p['previewVisualApproved'] is True
 assert p['localPath'].startswith('/images/travel/da-nang-premium/')
 assert p['sourcePage'].startswith('https://')
 if i<9:
  assert p['commercialRightsCleared'] is True and p['sourcePage'].startswith('https://commons.wikimedia.org/wiki/File:')
 else:
  assert p['commercialRightsCleared'] is False and p['publicUseApproved'] is False
 r=s.get(p['publicPreviewUrl'],timeout=55);r.raise_for_status()
 assert len(r.content)<42_000_000 and r.headers.get('Content-Type','').startswith('image/'),p['key']
 im=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content))).convert('RGB')
 assert im.width>=900 and im.height>=500,(p['key'],im.size)
 im.thumbnail((1500,1100),Image.Resampling.LANCZOS)
 dest=root/'public'/p['localPath'].lstrip('/')
 dest.parent.mkdir(parents=True,exist_ok=True)
 im.save(dest,'WEBP',quality=84,method=5)
 digest=hashlib.sha256(dest.read_bytes()).hexdigest()
 if digest!=p['sha256']:
  print('REVIEW_REQUIRED_IMAGE_ENCODER_OR_ORIGIN_CHANGED',p['key'],'new',digest,'original',p['sha256'])
 print('SOURCE_ARCHIVED_PRIVATE',p['key'],dest.stat().st_size)
print('DA_NANG_PRIVATE_IMAGE_ARCHIVE_FINISHED',len(all_images),'commercial rights NOT established')
