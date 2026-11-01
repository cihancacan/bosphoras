#!/usr/bin/env python3
"""Hoi An #72 private photo archives. Image rights must be cleared before public launch.
Requires python -m pip install requests Pillow. Never mark publishers' photos commercial-use approved.
"""
import json,requests,hashlib,io
from pathlib import Path
from urllib.parse import urlparse
from PIL import Image,ImageOps
root=Path(__file__).resolve().parents[1]
m=json.loads((root/'data/travel/hoiAnMediaCandidates.json').read_text())
items=m['destinationScenes']+m['hotels']
assert len(items)==21 and m['publicUseApproved'] is False
assert m['internalReviewedPhotoCount']==12
for p in items:
 u=urlparse(p['publicPreviewUrl'])
 assert u.scheme=='https' and u.netloc and p['visuallyVerified'] and p['previewVisualApproved']
 assert p['localPath'].startswith('/images/travel/hoi-an-premium/')
 assert p['publicUseApproved'] is False
 r=requests.get(p['publicPreviewUrl'],headers={'User-Agent':'Mozilla/5.0'},timeout=60)
 r.raise_for_status()
 image=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content))).convert('RGB')
 image.thumbnail((1500,1100),Image.Resampling.LANCZOS)
 dest=root/'public'/p['localPath'].lstrip('/')
 dest.parent.mkdir(parents=True,exist_ok=True)
 image.save(dest,'WEBP',quality=84,method=5)
 sha=hashlib.sha256(dest.read_bytes()).hexdigest()
 if sha!=p['sha256']:print('ORIGIN_OR_ENCODER_CHANGED_REVIEW',p['key'],sha)
 else:print('PRIVATE_ARCHIVE_OK',p['key'])
print('HOI_AN_OWNER_PREVIEW_ARCHIVE_READY',len(items))
