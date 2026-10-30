#!/usr/bin/env python3
"""Replace duplicate proxy Banyan aerial with distinct official beachfront suite photo.
Keep 9 original Mayakoba landscape images and all other hotels untouched; finalize now.
Owner-only noindex, commercial rights NOT cleared.
"""
import json,pathlib,requests,hashlib,io
from PIL import Image,ImageOps,ImageStat
PATH=pathlib.Path('data/travel/mayakobaMediaCandidates.json')
FILE=pathlib.Path('public/images/travel/mayakoba-premium/banyan-tree/view-2.webp')
SOURCE='https://www.banyantree.com/mexico/mayakoba'
URL='https://www.banyantree.com/assets/2021-10/Sands-and-Beachfront-Pool-Suites_Aerial-View.jpg'
data=json.loads(PATH.read_text(encoding='utf-8'))
assert len(data['destinationScenes'])==9 and len(data['hotels'])==12
photo=next(p for p in data['hotels'] if p['propertyKey']=='banyan-tree' and p['key']=='view-2')
assert '_next/image?' in photo['downloadUrl'],'Replacing only the duplicate original Next image proxy'
assert any(p['propertyKey']=='banyan-tree' and p['key']=='view-1' and 'AERIALVIEWLAGOON' in p['downloadUrl'] for p in data['hotels'])
r=requests.get(URL,headers={'User-Agent':'Mozilla/5.0 (Bosphoras owner image source review)'},timeout=36)
r.raise_for_status()
im=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content))).convert('RGB')
assert im.width>=950 and im.height>=600,im.size
orig=list(im.size)
im.thumbnail((1800,1400),Image.Resampling.LANCZOS)
assert sum(ImageStat.Stat(im.resize((110,80))).stddev)/3>11
im.save(FILE,'WEBP',quality=83,method=5)
raw=FILE.read_bytes()
assert len(raw)>18000
digest=hashlib.sha256(raw).hexdigest()
other={p['sha256'] for p in data['destinationScenes']+data['hotels'] if p is not photo}
assert digest not in other
pixel=hashlib.sha256(im.resize((48,48),Image.Resampling.LANCZOS).tobytes()).hexdigest()
assert pixel not in {p['pixelFingerprint'] for p in data['destinationScenes']+data['hotels'] if p is not photo}
photo.update(originalSize=orig,outputSize=list(im.size),bytes=len(raw),sha256=digest,pixelFingerprint=pixel,
 sourcePage=SOURCE,downloadUrl=URL,
 credit='Banyan Tree Mayakoba — official property beachfront pool suites (creator rights not independently verified)',
 license='Publisher photograph; PRIVATE owner Preview only. Commercial republication rights NOT cleared.',
 licenseUrl=SOURCE,commercialRightsCleared=False,visuallyVerified=False,
 frCaption='Banyan Tree Mayakoba · suites avec piscine près de la plage',
 enCaption='Banyan Tree Mayakoba · beachfront pool suites',
 originalAlt='Banyan Tree Mayakoba beachfront pool suites aerial property photo')
PATH.write_text(json.dumps(data,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
print('MAYAKOBA BANYAN REPLACED',len(raw),list(im.size),digest)
