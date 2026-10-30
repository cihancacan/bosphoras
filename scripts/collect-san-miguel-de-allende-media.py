#!/usr/bin/env python3
"""Rehydrate the 21 manually selected source photos; never discover/substitute images.
Publisher images remain private-owner Preview, without commercial clearance.
Requires Pillow. A source change stops regeneration until a new visual review.
"""
import hashlib,io,json,pathlib,urllib.request
from PIL import Image
manifest=json.loads(pathlib.Path('data/travel/sanMiguelDeAllendeMediaCandidates.json').read_text())
for p in manifest['destinationScenes']+manifest['hotels']:
 target=pathlib.Path('public'+p['localPath'])
 if target.exists() and hashlib.sha256(target.read_bytes()).hexdigest()==p['sha256']:
  continue
 req=urllib.request.Request(p['downloadUrl'],headers={'User-Agent':'Mozilla/5.0 (Bosphoras private owner source review)'})
 image=Image.open(io.BytesIO(urllib.request.urlopen(req,timeout=30).read())).convert('RGB')
 image.thumbnail((1600,1200))
 data=io.BytesIO();image.save(data,'WEBP',quality=88)
 if hashlib.sha256(data.getvalue()).hexdigest()!=p['sha256']:
  raise SystemExit('Source or image encoder changed; manual review required: '+p['key'])
 target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(data.getvalue())
print('San Miguel: all 21 reviewed source files present with exact verified hashes.')
