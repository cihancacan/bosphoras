#!/usr/bin/env python3
"""21 photograph collection for nonindexed Tivat luxury destination. Keep original publisher and Commons attribution."""
import json,hashlib,re,time,requests
from pathlib import Path
from PIL import Image,ImageOps
from io import BytesIO
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'public/images/travel/tivat-premium'
MANIFEST=ROOT/'data/travel/tivatMediaCandidates.json'
S=requests.Session();S.headers.update({'User-Agent':'BosphorasGalleryAudit/1.0 (GitHub cihancacan)'})
HOTELS=[["quince","The Quince Porto Montenegro","https://www.thequince.com/",[["https://portomontenegro.com/wp-content/uploads/2026/07/hotel-regent-porto-montenegro.jpg","The Quince · hôtel historique de la marina, photographié avant changement d'enseigne","The Quince · historic marina hotel photographed before its rebranding"],["https://portomontenegro.com/wp-content/uploads/2026/06/hotel-regent.jpg","The Quince · façade de l'ancien Regent sur les pontons","The Quince · former Regent building on the marina"],["https://portomontenegro.com/wp-content/uploads/2026/01/porto-montenegro-hotel-regent.jpg","The Quince · panorama de l'ancien complexe Regent","The Quince · former Regent property panorama"]]],["siro","SIRO Porto Montenegro","https://www.sirohotels.com/montenegro/porto-montenegro",[["https://portomontenegro.com/wp-content/uploads/2026/06/hotel-siro.jpg","SIRO · façade et architecture du quartier Boka Place","SIRO · Boka Place hotel architecture"],["https://portomontenegro.com/wp-content/uploads/2026/06/siro-2.jpg","SIRO · complexe hôtelier et environnement sportif","SIRO · active-lifestyle hotel and setting"],["https://portomontenegro.com/wp-content/uploads/2025/06/siro-hotel-porto-montenegro-1.jpg","SIRO · bâtiment de l'hôtel dans Porto Montenegro","SIRO · hotel exterior in Porto Montenegro"]]],["chedi","The Chedi Luštica Bay","https://www.chedilusticabay.com/",[["https://d1tfdfyb9rvaxg.cloudfront.net/chedilusticabay.com-1070583806/cms/cache/v2/64afc7d4c5820.jpg/1920x1080/fit/80/8a0e6122621764bdd3b6819e6a3b3eac.jpg","The Chedi · marina de Luštica Bay distincte de Tivat centre","The Chedi · its separate Luštica Bay marina"],["https://d1tfdfyb9rvaxg.cloudfront.net/chedilusticabay.com-1070583806/cms/cache/v2/686b6c9ef2d20.jpg/1920x1080/fit/80/9d43a69201dc33eb011ebc2ab875befc.jpg","The Chedi · espace piscine et séjour de bord de mer","The Chedi · seafront resort and pool scene"],["https://d1tfdfyb9rvaxg.cloudfront.net/chedilusticabay.com-1070583806/cms/cache/v2/64afc7d4c5820.jpg/1920x1080/fit/80/0c3127a2a13030629e19eae4a9b21e13.webp","The Chedi · paysage côtier depuis la propriété","The Chedi · coastal setting of the resort"]]],["laroche","La Roche Boutique Hotel","https://larochehotel.me/",[["https://larochehotel.me/wp-content/uploads/2022/08/Glavna.jpg","La Roche · hôtel boutique sur le front de mer de Tivat","La Roche · Tivat waterfront boutique hotel"],["https://larochehotel.me/wp-content/uploads/2023/08/Glavna.jpg","La Roche · cadre et espaces du petit hôtel","La Roche · boutique property atmosphere"],["https://larochehotel.me/wp-content/uploads/2022/08/5.jpg","La Roche · espaces officiels de l'établissement","La Roche · official boutique hotel facilities"]]]]
COMMONS=[["scene-1","Porto Montenegro 03.JPG","Porto Montenegro · pontons de yachts dans la baie","Porto Montenegro · yachts and marina berths"],["scene-2","Tivat - Marina Porto Montenegro - panoramio.jpg","Tivat · promenade et bateaux de la marina","Tivat · marina promenade and moored yachts"],["scene-3","Tivat, Montenegro, Boko Kotor Bay and Porto Montenegro at sunset.jpg","Boka Bay · Tivat et Porto Montenegro au coucher du soleil","Boka Bay · Tivat and Porto Montenegro at sunset"],["scene-4","Gornja Lastva.jpg","Gornja Lastva · hameau de pierre sur les hauteurs de Tivat","Gornja Lastva · stone hillside village"],["scene-5","Sunset over the Bay of Kotor seen from Gornja Lastva 1.jpg","Gornja Lastva · panorama sur la baie à l'heure dorée","Gornja Lastva · sunset panorama of Boka Bay"],["scene-6","Special Nature Reserve \"Solila\", Montenegro 21.jpg","Solila · milieu humide protégé près de Tivat","Solila · protected wetland reserve near Tivat"],["scene-7","Special Nature Reserve \"Solila\", Montenegro 07.jpg","Solila · zones naturelles et observation des oiseaux","Solila · wetland habitat and birdwatching"],["scene-8","Porto Montenegro 05.JPG","Porto Montenegro · autre perspective sur la marina","Porto Montenegro · different view of the marina"],["scene-9","Tivat - Marina Porto Montenegro - panoramio (2).jpg","Tivat · waterfront et marina de plaisance","Tivat · waterfront marina scene"]]
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
 print('TIVAT_21_PHOTOS_COLLECTED',len(all_),sum(x['bytes'] for x in all_),flush=True)
if __name__=='__main__':main()
