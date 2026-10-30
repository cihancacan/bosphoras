#!/usr/bin/env python3
"""Finish Bangkok scene-5 and three authentic Mandarin Oriental historical photographs.
Uses licensed Wikimedia file identities; never substitutes logos. Maintains honest date/captions.
No assumption that a historic Commons hotel room is identical to a present bookable suite.
"""
import hashlib,html,io,json,pathlib,urllib.parse,re
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps,ImageDraw
S=requests.Session();S.headers.update({'User-Agent':'Bosphoras source/photo provenance review, no license inference'})
M=pathlib.Path('data/travel/bangkokMediaCandidates.json')
D=json.loads(M.read_text())
assert D['destination']=='bangkok' and D['cityCount']==8 and D['hotelCount']==9
def text(v):return BeautifulSoup(html.unescape(v or ''),'html.parser').get_text(' ',strip=True)
def get(title,path,attrs):
 args={'action':'query','format':'json','prop':'imageinfo','iiprop':'url|extmetadata|size','iiurlwidth':1600,'titles':'File:'+title}
 r=S.get('https://commons.wikimedia.org/w/api.php',params=args,timeout=26);r.raise_for_status()
 p=list(r.json()['query']['pages'].values())[0]['imageinfo'][0]
 meta=p.get('extmetadata',{})
 licence=text(meta.get('LicenseShortName',{}).get('value',''))
 if not re.match(r'^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)',licence,re.I):raise ValueError('not verified CC license '+title+' '+licence)
 author=text(meta.get('Artist',{}).get('value',''))
 url=p.get('thumburl') or p['url']
 data=S.get(url,timeout=30);data.raise_for_status()
 im=ImageOps.exif_transpose(Image.open(io.BytesIO(data.content))).convert('RGB')
 if im.width<790 or im.height<480:raise ValueError('source too small '+title+': '+str(im.size))
 orig=list(im.size);im.thumbnail((1600,1200),Image.Resampling.LANCZOS)
 pixel=hashlib.sha256(im.resize((48,48),Image.Resampling.LANCZOS).tobytes()).hexdigest()
 output=io.BytesIO();im.save(output,'WEBP',quality=85,method=5)
 raw=output.getvalue();assert len(raw)>17000
 target=pathlib.Path('public'+path);target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(raw)
 return {**attrs,'originalSize':orig,'outputSize':list(im.size),'bytes':len(raw),'sha256':hashlib.sha256(raw).hexdigest(),
   'pixelFingerprint':pixel,'sourcePage':'https://commons.wikimedia.org/wiki/File:'+urllib.parse.quote(title.replace(' ','_'),safe='(),-._'),
   'downloadUrl':url,'credit':author or 'Wikimedia Commons author in file record','license':licence,
   'licenseUrl':meta.get('LicenseUrl',{}).get('value','https://creativecommons.org/licenses/'),
   'rightsEvidenceType':'wikimedia_license_metadata','commercialRightsCleared':True,
   'visuallyVerified':False,'status':'source_identified_pending_individual_visual_review','originalAlt':title,
   'croppedOrResized':'WebP conversion and resize to 1600 x 1200 maximum'}
# Exact source photo of the historic Dusit throne hall is real, not a replacement from an unrelated district.
scene=get('Bangkok The Ananta Samakhom Throne Hall 1.jpg',
 '/images/travel/bangkok-premium/destination/scene-5.webp',
 {'key':'scene-5','localPath':'/images/travel/bangkok-premium/destination/scene-5.webp',
 'frCaption':'Dusit · le bâtiment historique de l’Ananta Samakhom Throne Hall',
 'enCaption':'Dusit · historic Ananta Samakhom Throne Hall'})
D['destinationScenes'].append(scene)
# Three different real and licensed images of Mandarin Oriental Bangkok. These photographs
# are archival historic property views and must NEVER suggest contemporary room facilities.
selected=[
 ('Mandarin Oriental Bangkok Authors Wing - 01.jpg','view-1',
  "Mandarin Oriental Bangkok · l’Authors’ Wing historique, vue de 2022",
  'Mandarin Oriental Bangkok · historic Authors’ Wing photographed in 2022'),
 ('Oriental Hotel Bangkok Lobby.JPG','view-2',
  "Mandarin Oriental Bangkok · salon du hall photographié historiquement",
  'Mandarin Oriental Bangkok · archival hotel lobby view'),
 ('Another shot of the room at The Oriental Hotel, Bangkok.jpg','view-3',
  "Mandarin Oriental Bangkok · chambre d’archive, non représentative des catégories actuelles",
  'Mandarin Oriental Bangkok · archival room, not a current bookable room representation')
]
for title,key,fr,en in selected:
 photo=get(title,'/images/travel/bangkok-premium/mandarin-oriental/'+key+'.webp',
  {'key':key,'propertyKey':'mandarin-oriental','property':'Mandarin Oriental, Bangkok',
   'localPath':'/images/travel/bangkok-premium/mandarin-oriental/'+key+'.webp',
   'frCaption':fr,'enCaption':en,'visualReviewNote':'Source Commons with attribution, historic genuine property photography; no promise about current room class or hotel facilities.'})
 D['hotels'].append(photo);print('MANDARIN_SOURCED',key,title,photo['license'],flush=True)
D['destinationScenes'].sort(key=lambda p:p['key'])
D['hotels'].sort(key=lambda p:(p['propertyKey'],p['key']))
fingerprints=[p['pixelFingerprint'] for p in D['destinationScenes']+D['hotels']]
assert len(fingerprints)==21 and len(set(fingerprints))==21,'duplicate or insufficient photos'
D['cityCount']=9;D['hotelCount']=12
D['visualQA']='PENDING_FINAL_INDIVIDUAL_VISUAL_REVIEW';D['publicUseApproved']=False
M.write_text(json.dumps(D,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
R=pathlib.Path('docs/travel-bangkok-acquisition-report.json')
report=json.loads(R.read_text())
report['cityCount']=9;report['hotelCount']=12;report['errors']=[]
report['mandarinSourceNotice']='Three authentic archival Mandarin Oriental Bangkok CC images with author and licence; not present-day room category evidence.'
R.write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
# Contact sheet independently reviewable.
imgs=D['destinationScenes']+D['hotels'];cols=3;W,H=440,305
canvas=Image.new('RGB',(cols*W,H*((len(imgs)+cols-1)//cols)),'#f5f2eb');draw=ImageDraw.Draw(canvas)
for i,p in enumerate(imgs):
 im=Image.open('public'+p['localPath']).convert('RGB');im.thumbnail((422,239))
 x=(i%cols)*W+8;y=(i//cols)*H+4
 canvas.paste(im,(x,y))
 draw.text((x,y+243),p.get('property','Bangkok')+'/'+p['key'],fill='#1a313b')
 draw.text((x,y+264),p['sourcePage'][:50],fill='#55646c')
canvas.save('docs/travel-bangkok-contact-sheet.jpg','JPEG',quality=80)
print('BANGKOK_SOURCE_COMPLETE',D['cityCount'],D['hotelCount'],'all photos require individual visual approval')
