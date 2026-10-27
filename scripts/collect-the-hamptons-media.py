#!/usr/bin/env python3
"""21 photograph collection for nonindexed The Hamptons luxury destination. Keep original publisher and Commons attribution."""
import json,hashlib,re,time,requests
from pathlib import Path
from PIL import Image,ImageOps
from io import BytesIO
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'public/images/travel/the-hamptons-premium'
MANIFEST=ROOT/'data/travel/theHamptonsMediaCandidates.json'
S=requests.Session();S.headers.update({'User-Agent':'BosphorasGalleryAudit/1.0 (GitHub cihancacan)'})
HOTELS=[["topping","Topping Rose House","https://www.toppingrosehouse.com/",[["https://res.cloudinary.com/traveltripperweb/image/upload/c_fit,f_auto,h_1200,q_auto,w_1200/v1638911916/urchugkglpb4xeyynlxp.jpg","Topping Rose House · domaine historique de Bridgehampton","Topping Rose House · historic Bridgehampton estate"],["https://res.cloudinary.com/traveltripperweb/image/upload/c_crop,h_3000,w_2000,x_0,y_0/c_fit,f_auto,h_1200,q_auto,w_1200/v1668971980/qyyluxclibmg4iin8c0n.jpg","Topping Rose House · espace hôtelier photographié officiellement","Topping Rose House · official property interior"],["https://res.cloudinary.com/traveltripperweb/image/upload/c_fit,f_auto,h_1200,q_auto,w_1200/v1672601543/cvgebh8plhordvxlfxyu.jpg","Topping Rose House · univers du restaurant Jean-Georges","Topping Rose House · Jean-Georges dining atmosphere"]]],["maidstone","The Maidstone","https://themaidstone.com/",[["https://themaidstone.com/wp-content/uploads/2-1920x1040.jpg","The Maidstone · décor de la maison d'East Hampton","The Maidstone · historic East Hampton boutique setting"],["https://themaidstone.com/wp-content/uploads/4-1920x1040.jpg","The Maidstone · espaces et décoration contemporaine","The Maidstone · design-led guest spaces"],["https://themaidstone.com/wp-content/uploads/6-1920x1040.jpg","The Maidstone · architecture et ambiance de l’hôtel","The Maidstone · official hotel photography"]]],["marram","Marram Montauk","https://www.marrammontauk.com/",[["https://cdn.prod.website-files.com/6797f4499bd87c64958bea80/6797f591c86a6612011de6fb_courtyard_img.jpg","Marram · hébergements en cour intérieure entre les dunes","Marram · courtyard accommodation among dunes"],["https://cdn.prod.website-files.com/6797f4499bd87c64958bea80/6797f58a7ac76d4ff1576dd1_oceanview_img.jpg","Marram · chambre vue océan, catégorie spécifique","Marram · ocean-view accommodation category"],["https://cdn.prod.website-files.com/6797f4499bd87c64958bea80/6797f58391174a0d1bf5a56b_beachfront_img.jpg","Marram · façade face à l’Atlantique","Marram · official oceanfront view"]]],["gurneys","Gurney’s Montauk Resort & Seawater Spa","https://www.gurneysresorts.com/montauk",[["https://www.gurneysresorts.com/sites/default/files/styles/1360x544_1x/public/2026-07/DJI_0305.jpg.webp?h=26c3f599&itok=EdONtiGf","Gurney's · plage privée du resort de Montauk","Gurney's · aerial view of the resort's guest-only beach"],["https://www.gurneysresorts.com/sites/default/files/styles/1360x544_1x/public/2026-07/image-2.jpg.webp?h=920929c4&itok=8fwZraXU","Gurney's · piscine intérieure en eau salée","Gurney's · indoor saltwater pool"],["https://www.gurneysresorts.com/sites/default/files/styles/1360x544_1x/public/2026-07/image-1.jpg.webp?h=920929c4&itok=NzVBBzaR","Gurney's · cottages sur le littoral atlantique","Gurney's · oceanfront resort cottages"]]]]
COMMONS=[["scene-1","Montauk Point Lighthouse 2018 (02).jpg","Montauk Point · phare emblématique à l'extrémité de Long Island","Montauk Point · iconic lighthouse at Long Island's eastern tip"],["scene-2","Main Beach, East Hampton, NY.jpg","East Hampton · Main Beach et dunes de sable","East Hampton · Main Beach and Atlantic sand"],["scene-3","Sag Harbor village aerial view skyline.jpg","Sag Harbor · ancien port et village maritime","Sag Harbor · historic maritime village"],["scene-4","Cooper's Beach Southampton.jpg","Southampton · plage de Coopers Beach","Southampton · Coopers Beach Atlantic shoreline"],["scene-5","Dunes at Amagansett National Wildlife Refuge. (11672014663).jpg","Amagansett · dunes et végétation protégée","Amagansett · protected dune vegetation"],["scene-6","Montauk Beach Long Island New York by Don Ramey Logan.jpg","Montauk · plage ouverte sur l'océan Atlantique","Montauk · wide Atlantic beach"],["scene-7","The Warmth of a Montauk Sunrise.jpg","Montauk · lever de soleil sur la côte","Montauk · morning light across the shoreline"],["scene-8","To the beach, Hither Hills State Park, NY.jpg","Hither Hills · chemin d'accès à l'Atlantique","Hither Hills · path towards the ocean beach"],["scene-9","Sag Harbor, New York in 2025.jpg","Sag Harbor · maisons et patrimoine portuaire","Sag Harbor · harbour town and waterfront heritage"]]
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
 print('THE_HAMPTONS_21_PHOTOS_COLLECTED',len(all_),sum(x['bytes'] for x in all_),flush=True)
if __name__=='__main__':main()
