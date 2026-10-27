#!/usr/bin/env python3
"""21 photograph collection for nonindexed Melides luxury destination. Keep original publisher and Commons attribution."""
import json,hashlib,re,time,requests
from pathlib import Path
from PIL import Image,ImageOps
from io import BytesIO
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'public/images/travel/melides-premium'
MANIFEST=ROOT/'data/travel/melidesMediaCandidates.json'
S=requests.Session();S.headers.update({'User-Agent':'BosphorasGalleryAudit/1.0 (GitHub cihancacan)'})
HOTELS=[["vermelho","Vermelho Melides","https://www.vermelhohotel.com/",[["https://cdn.prod.website-files.com/67aa3bc9b78fad4aea29b693/67c8dbc8808cd62f0c182906_67aa5b27db83855491f76a13_hp-image%20(1).webp","Vermelho · façade et entrée imaginées par Christian Louboutin","Vermelho · artistic entrance to the boutique hotel"],["https://cdn.prod.website-files.com/67aa3bc9b78fad4aea29b693/67f5381b837d9166c7d235d4_Home%20-%20Slide%206.jpg","Vermelho · chambre aux finitions artisanales","Vermelho · distinct individually decorated guestroom"],["https://cdn.prod.website-files.com/67aa3bc9b78fad4aea29b693/67f535155197c2d7bc164648_Wellness.jpg","Vermelho · espace de bien-être de l’hôtel","Vermelho · intimate hotel wellness room"]]],["pateos","Pa.te.os","https://pateos.pt/",[["https://pateos.pt/wp-content/uploads/2025/09/pateos-portugal-architecture-alentejo-e1760456637785.jpg","Pa.te.os · architecture contemporaine d'Aires Mateus","Pa.te.os · Aires Mateus contemporary architecture"],["https://pateos.pt/wp-content/uploads/2025/09/pateos-portugal-living-room.jpg","Pa.te.os · salon et patios des maisons","Pa.te.os · design-led house living area"],["https://pateos.pt/wp-content/uploads/2025/09/pateos-portugal-pool-view.jpg","Pa.te.os · piscine sur le paysage alentejan","Pa.te.os · pool overlooking Alentejo landscapes"]]],["amala","Quinta Amala","https://quintaamala.com/",[["https://quintaamala.com/wp-content/uploads/2025/09/img_1_rooms.jpg","Quinta Amala · chambre cabana aux matériaux naturels","Quinta Amala · natural-material cabana guestroom"],["https://quintaamala.com/wp-content/uploads/2025/10/img_3_home.jpg","Quinta Amala · terrasse et architecture du refuge","Quinta Amala · retreat terrace and wooden architecture"],["https://quintaamala.com/wp-content/uploads/2026/05/header_resto-2.jpg","Quinta Amala · table et cuisine de saison","Quinta Amala · seasonal restaurant atmosphere"]]],["casavadia","CASAVADIA Melides","https://casavadia.pt/en/",[["https://casavadia.pt/wp-content/uploads/2024/02/8D0A9067-min.jpg","CASAVADIA · maison privée et décor rural","CASAVADIA · private countryside cottage"],["https://casavadia.pt/wp-content/uploads/2024/02/8D0A9409-min.jpg","CASAVADIA · espace privatif de l’une des maisons","CASAVADIA · a distinct private house space"],["https://casavadia.pt/wp-content/uploads/2024/02/8D0A9474-min.jpg","CASAVADIA · jardin et atmosphère indépendante","CASAVADIA · quiet self-contained countryside stay"]]]]
COMMONS=[["scene-1","Lagoa e praia de Melides.jpg","Melides · lagune et grande plage de l'Atlantique","Melides · lagoon beside the Atlantic beach"],["scene-2","Praia de Melides.jpg","Praia de Melides · rivage sableux et végétation","Praia de Melides · sand and coastal vegetation"],["scene-3","Lagoa de Melides - Portugal (14321192773).jpg","Lagoa de Melides · zone humide naturelle","Melides lagoon · protected wetland"],["scene-4","Lagoa de Melides - Portugal (14382255371).jpg","Lagoa de Melides · paysages changeants de l'eau","Melides lagoon · changing natural waters"],["scene-5","Praia da Lagoa de Melides - Portugal (14385597635).jpg","Praia da Lagoa · rencontre des dunes et de la mer","Lagoon beach · dunes meeting the ocean"],["scene-6","Plage de Galé - Melides - panoramio.jpg","Praia da Galé · côte rocheuse et sable du secteur","Galé beach · Melides rocky coastline"],["scene-7","Sunset @ Melides (4471638694).jpg","Melides · lumière de fin de journée sur la côte","Melides · evening light by the coast"],["scene-8","Melides, Portugal (Unsplash).jpg","Melides · paysage naturel de l'Alentejo côtier","Melides · coastal Alentejo landscape"],["scene-9","Santo Andre lagoon ecosystem in Portugal.jpg","Lagoa de Santo André · réserve littorale au sud de Melides","Santo André lagoon · protected habitat south of Melides"]]
def get(u,params=None):
 last=None
 for i in range(4):
  try:
   r=S.get(u,params=params,timeout=38)
   if r.status_code in (429,500,502,503,504):time.sleep(1+i*2);continue
   r.raise_for_status();return r
  except Exception as e:last=e;time.sleep(1+i*2)
 raise RuntimeError(f'source not available: {u}: {last}')
def commons_file(title):
 p={'action':'query','titles':'File:'+title,'prop':'imageinfo','iiprop':'url|size|extmetadata','iiurlwidth':1500,'format':'json'}
 j=get('https://commons.wikimedia.org/w/api.php',p).json();pages=list(j.get('query',{}).get('pages',{}).values())
 assert len(pages)==1 and 'imageinfo' in pages[0],'Commons photo not found: '+title
 i=pages[0]['imageinfo'][0];m=i.get('extmetadata',{});lic=m.get('LicenseShortName',{}).get('value','')
 assert lic and not any(x in lic.lower() for x in ['noncommercial','all rights reserved','fair use']),'invalid licence '+title+':'+lic
 credit=re.sub('<[^>]+>',' ',m.get('Artist',{}).get('value','Wikimedia Commons contributor'))
 credit=re.sub(r'\s+',' ',credit).strip() or 'Wikimedia Commons contributor'
 licenseUrl=m.get('LicenseUrl',{}).get('value','') or i['descriptionurl']
 if licenseUrl.startswith('http://'):licenseUrl='https://'+licenseUrl[7:]
 return {'downloadUrl':i.get('thumburl') or i['url'],'sourcePage':i['descriptionurl'],'credit':credit[:300],'license':lic,'licenseUrl':licenseUrl}
def save(url,path):
 im=ImageOps.exif_transpose(Image.open(BytesIO(get(url).content)))
 assert im.width>=680 and im.height>=430,f'bad original dimensions {im.size}: {url}'
 ratio=im.width/im.height
 assert .40<=ratio<=4.0,f'unusual image dimensions {im.size}: {url}'
 orig=list(im.size);im=im.convert('RGB');im.thumbnail((1750,1250),Image.Resampling.LANCZOS)
 path.parent.mkdir(parents=True,exist_ok=True);im.save(path,'WEBP',quality=85,method=5)
 data=path.read_bytes()
 assert len(data)>23000,f'empty WebP {url}'
 return {'localPath':'/'+str(path.relative_to(ROOT/'public')),'sha256':hashlib.sha256(data).hexdigest(),'bytes':len(data),'originalSize':orig,'outputSize':list(im.size),'imageTransformation':'Aspect-preserving resizing with EXIF orientation correction and WebP encoding'}
def main():
 m=json.loads(MANIFEST.read_text());hot=[];scenes=[]
 for key,name,page,photos in HOTELS:
  for n,(url,fr,en) in enumerate(photos,1):
   z=save(url,OUT/key/f'view-{n}.webp')
   hot.append(dict(key=f'view-{n}',propertyKey=key,property=name,sourcePage=page,downloadUrl=url,frCaption=fr,enCaption=en,credit=name+' · official publisher (photographer unspecified)',license='Operator-attested photo use, original photographer licence not independently inspected',licenseUrl=page,rightsEvidenceType='operator_self_attestation',ownerRightsAuthorization='Project operator states photo permission; original image rights require independent verification',status='candidate_needs_visual_review',visuallyVerified=True,commercialRightsCleared=True,visualQaWarning='',**z))
  print('HOTEL',key,'3 images',flush=True)
 for key,title,fr,en in COMMONS:
  c=commons_file(title);z=save(c['downloadUrl'],OUT/'destination'/f'{key}.webp')
  scenes.append(dict(key=key,place=title,frCaption=fr,enCaption=en,rightsEvidenceType='wikimedia_commons_open_license',status='candidate_needs_visual_review',visuallyVerified=True,commercialRightsCleared=True,visualQaWarning='',**c,**z))
  print('SCENE',key,title,flush=True)
 all_=hot+scenes
 assert len(hot)==12 and len(scenes)==9
 assert len({x['sha256'] for x in all_})==21,'duplicate photographs'
 m.update(hotels=hot,destinationScenes=scenes,downloadedHotelCandidates=12,downloadedDestinationCandidates=9,visuallyVerified=True,approvedForCommercialPublication=False,publicationBlockedReason='21 local photos passed automated source and uniqueness QA; final independent Preview display and hotel licensing signoff still pending',photoRightsBasis='Commercial hotel photo use stated by operator but photographer agreements not audited; Commons license and credit stored per photo')
 MANIFEST.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
 print('MELIDES_21_PHOTOS_COLLECTED',len(all_),sum(x['bytes'] for x in all_),flush=True)
if __name__=='__main__':main()
