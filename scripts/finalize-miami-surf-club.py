#!/usr/bin/env python3
"""Complete the Miami Four Seasons Surf Club photo gallery.
Do not overwrite previously verified Miami photos or unrelated hotel inventories.
This is a private owner preview; this publisher photo is NOT commercially licensed.
"""
import pathlib, json, requests, io, hashlib
from PIL import Image,ImageOps,ImageStat

URL='https://five-star-alliance.s3.amazonaws.com/styles/juicebox_large/public/field/image/nodes/2018/46388/0_guest-room-with-views-G.jpg?itok=PH7xGa08'
SOURCE='https://www.fivestaralliance.com/gallery/four-seasons-hotel-at-the-surf-club'
DEST=pathlib.Path('public/images/travel/miami-premium/surf-club/view-3.webp')
MANIFEST=pathlib.Path('data/travel/miamiMediaCandidates.json')

data=json.loads(MANIFEST.read_text(encoding='utf-8'))
assert len(data['destinationScenes'])==9
assert len(data['hotels'])==11
assert sorted({x['propertyKey'] for x in data['hotels']})==['edition','faena','setai','surf-club']
assert len([x for x in data['hotels'] if x['propertyKey']=='surf-club'])==2
assert not DEST.exists()
r=requests.get(URL,headers={'User-Agent':'Mozilla/5.0 (Bosphoras editorial owner preview)'},timeout=32)
r.raise_for_status()
im=Image.open(io.BytesIO(r.content))
im=ImageOps.exif_transpose(im).convert('RGB')
assert im.width>=650 and im.height>=420,(im.width,im.height)
original=list(im.size)
im.thumbnail((1800,1450),Image.Resampling.LANCZOS)
assert sum(ImageStat.Stat(im.resize((120,90))).stddev)/3>11,'Image is an empty placeholder'
DEST.parent.mkdir(parents=True,exist_ok=True)
im.save(DEST,'WEBP',quality=83,method=5)
raw=DEST.read_bytes()
assert len(raw)>16000
digest=hashlib.sha256(raw).hexdigest()
assert digest not in [p['sha256'] for p in data['hotels']+data['destinationScenes']]
photo={'key':'view-3','propertyKey':'surf-club','property':'Four Seasons Hotel at The Surf Club',
       'localPath':'/'+str(DEST).removeprefix('public/'),
       'originalSize':original,'outputSize':list(im.size),'bytes':len(raw),
       'sha256':digest,'sourcePage':SOURCE,'downloadUrl':URL,
       'credit':'Four Seasons Hotel at The Surf Club – Five Star Alliance named hotel photo; creator rights unverified',
       'license':'Publisher photo; private owner Preview only. Commercial republication rights not independently granted.',
       'licenseUrl':SOURCE,'rightsEvidenceType':'operator_publisher_not_commercially_cleared',
       'commercialRightsCleared':False,'status':'source_identified_private_preview','visuallyVerified':False,
       'frCaption':'Four Seasons Hotel at The Surf Club – chambre et vue (catégorie à confirmer)',
       'enCaption':'Four Seasons Hotel at The Surf Club – guest room with views (category to confirm)',
       'originalAlt':'Guest Room at Four Seasons Hotel at The Surf Club, Surfside, FL'}
data['hotels'].append(photo)
data['hotelCount']=len(data['hotels'])
MANIFEST.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('MIAMI_SURF_CLUB_THIRD_PHOTO',json.dumps({'status':'saved','bytes':len(raw),'dimensions':list(im.size),'source':SOURCE,'sha256':digest,'city':len(data['destinationScenes']),'hotel':len(data['hotels'])}))
