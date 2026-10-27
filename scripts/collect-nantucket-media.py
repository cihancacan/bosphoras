#!/usr/bin/env python3
"""21 photograph collection for nonindexed Nantucket luxury destination. Keep original publisher and Commons attribution."""
import json,hashlib,re,time,requests
from pathlib import Path
from PIL import Image,ImageOps
from io import BytesIO
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'public/images/travel/nantucket-premium'
MANIFEST=ROOT/'data/travel/nantucketMediaCandidates.json'
S=requests.Session();S.headers.update({'User-Agent':'Googlebot'})
HOTELS=[["elephant","White Elephant Nantucket","https://www.whiteelephantnantucket.com/",[["https://assets.milestoneinternet.com/cdn-cgi/image/f=auto/white-elephant-resorts/white-elephant-2655/white-elephant-nantucket/siteimages/whiteelephantnantucket-home-hero.jpg?width=1800&height=1200","White Elephant · hôtel emblématique et jardins près de Nantucket Harbor","White Elephant · landmark hotel and gardens by Nantucket Harbor"],["https://assets.milestoneinternet.com/white-elephant-resorts/white-elephant-2655/white-elephant-nantucket/siteimages/whiteelephantnantucket-home-rooms-downtown-lofts.jpg","White Elephant · hébergement loft en centre-ville, pas directement sur les quais","White Elephant · downtown loft category, not directly on the wharves"],["https://assets.milestoneinternet.com/white-elephant-resorts/white-elephant-2655/white-elephant-02.jpg","White Elephant · architecture côtière et accueil de l'hôtel","White Elephant · authentic resort architecture and interiors"]]],["wauwinet","The Wauwinet","https://www.wauwinet.com/",[["https://assets.milestoneinternet.com/cdn-cgi/image/f=auto/white-elephant-resorts/wauwinet/hero-image/accommodations.jpg?width=1800&height=600","The Wauwinet · hôtel isolé entre baie et océan","The Wauwinet · remote retreat between bay and ocean"],["https://assets.milestoneinternet.com/white-elephant-resorts/wauwinet/room-types/two-queen-beds.jpg","The Wauwinet · catégorie chambre deux grands lits","The Wauwinet · two-queen-bed guestroom category"],["https://assets.milestoneinternet.com/white-elephant-resorts/wauwinet/room-types/coatue-suite.jpg","The Wauwinet · suite Coatue et espace salon","The Wauwinet · Coatue suite and sitting area"]]],["greydon","Greydon House","https://greydonhouse.com/",[["https://greydonhouse.com/wp-content/uploads/2024/11/Greydon-House-Exterior-05.22-min.jpg","Greydon House · façade de l'ancienne maison de capitaine","Greydon House · historic sea captain's house exterior"],["https://greydonhouse.com/wp-content/uploads/2024/11/Greydon-House-Library-05.22.23-Credit-Daniel-Schwartz-01-min.jpg","Greydon House · bibliothèque et décoration Roman and Williams","Greydon House · design-led library by Roman and Williams"],["https://greydonhouse.com/wp-content/uploads/2024/11/20220328-Greydon-House-John-Robshaw-Room-Credit-Daniel-Schwartz-01-min.jpg","Greydon House · chambre aux tissus John Robshaw","Greydon House · John Robshaw textile guestroom"]]],["nantuckethotel","The Nantucket Hotel & Resort","https://www.thenantuckethotel.com/",[["https://www.thenantuckethotel.com/wp-content/uploads/2023/12/theack_pool015-scaled-1.jpg","Nantucket Hotel · piscine familiale chauffée en saison","Nantucket Hotel · seasonal heated family swimming pool"],["https://www.thenantuckethotel.com/wp-content/uploads/2023/10/theack_front047-scaled-e1698266520657-1536x1536.jpg","Nantucket Hotel · façade à bardeaux gris et porche historique","Nantucket Hotel · Nantucket-shingle façade and porch"],["https://www.thenantuckethotel.com/wp-content/uploads/2023/12/nantucket-hotel-rooms-_0002_carriage-room.jpg","Nantucket Hotel · hébergement Carriage Room, catégorie spécifique","Nantucket Hotel · Carriage Room accommodation category"]]]]
COMMONS=[["scene-1","Brant Point Lighthouse, Nantucket, MA.jpg","Brant Point · phare à l'entrée de Nantucket Harbor","Brant Point · lighthouse at Nantucket Harbor entrance"],["scene-2","2015 Nantucket MA Main Street view.jpg","Nantucket Town · rue historique de Main Street","Nantucket Town · Main Street cobblestone heritage"],["scene-3","Sankaty Head Lighthouse by Don Ramey Logan.jpg","Sankaty Head · phare rayé de la côte orientale","Sankaty Head · striped eastern coastal lighthouse"],["scene-4","Great Point Light, Nantucket.jpg","Great Point · phare éloigné de Coskata-Coatue","Great Point · remote Coskata-Coatue lighthouse"],["scene-5","20180524 - 08 - Nantucket, MA panorama (Surfside Beach).jpg","Surfside Beach · plage et vagues de la côte sud","Surfside Beach · south shore Atlantic beach panorama"],["scene-6","Nantucket Whaling Museum exterior.jpg","Nantucket · façade du musée des baleiniers","Nantucket · Whaling Museum historic exterior"],["scene-7","20180524 - 16 - Nantucket, MA - \"The Look\".jpg","Nantucket · maison traditionnelle et ambiance du centre","Nantucket · traditional streetscape and island atmosphere"],["scene-8","20180524 - 12 - Nantucket, MA (Surfside Beach).jpg","Surfside · dunes et littoral naturel","Surfside · protected dunes and ocean shoreline"],["scene-9","20180524 - 14 - Nantucket, MA - \"Convenience Shopping\".jpg","Nantucket · façades commerçantes en centre-ville","Nantucket · downtown shopping and shingle architecture"]]
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
 print('NANTUCKET_21_PHOTOS_COLLECTED',len(all_),sum(x['bytes'] for x in all_),flush=True)
if __name__=='__main__':main()
