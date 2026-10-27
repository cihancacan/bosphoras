#!/usr/bin/env python3
"""Original-publisher Canouan photo candidates. Commercial rights and actual visual review remain separate."""
import json,hashlib,io,re,html
from pathlib import Path
from urllib.parse import urljoin,urlsplit
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/images/travel/canouan-premium'
MAN=ROOT/'data/travel/canouanMediaCandidates.json'
S=requests.Session()
S.headers.update({'User-Agent':'Mozilla/5.0 (compatible; BosphorasLuxuryStaysEditorialResearch/1.0)'})
HOTELS=[
 ('mandarin','Mandarin Oriental, Canouan','https://www.mandarinoriental.com/en/canouan/caribbean'),
 ('soho','Soho Beach House Canouan','https://www.sohohouse.com/houses/soho-beach-house-canouan'),
 ('bigblue','Canouan Estate — Big Blue Ocean','https://canouan.com/villas/big-blue-ocean'),
 ('silverturtle','Canouan Estate — Silver Turtle','https://canouan.com/villas/silver-turtle')
]
SCENES=[
 ('scene-1','https://canouan.com/','/img/island-estate-2400.jpg','Mount Royal et le domaine au-dessus des baies de Canouan','Canouan Estate and the island ridge above the bays'),
 ('scene-2','https://canouan.com/island/beaches','/img/beach-2400.jpg','Godahl Beach et les eaux des Grenadines','Godahl Beach and the Grenadines sea'),
 ('scene-3','https://canouan.com/island/nature','/img/reef-2400.jpg','Le récif de Canouan vu du ciel','Canouan reef seen from above'),
 ('scene-4','https://canouan.com/island/nature','/img/hike-1-1200.jpg','Mount Royal et la vue depuis les hauteurs','Mount Royal viewpoint and green island ridge'),
 ('scene-5','https://canouan.com/','/img/village-mural-1200.jpg','La vie du village et son décor coloré','Canouan village and colourful local culture'),
 ('scene-6','https://canouan.com/','/img/marina-sunset-1200.jpg','Sandy Lane Yacht Club à la tombée du jour','Sandy Lane Yacht Club marina at dusk'),
 ('scene-7','https://canouan.com/','/img/history-chapel-1200.jpg','La chapelle historique de Canouan','Canouan historic island chapel'),
 ('scene-8','https://canouan.com/island/nature','/img/hike-2-1200.jpg','Les sentiers naturels près du Mount Royal','Nature trail near Mount Royal'),
 ('scene-9','https://canouan.com/','/img/spa-sunset-yoga-1200.jpg','Canouan, lumière du soir et bien-être','Canouan evening light and wellness'),
]
def get(url):
 r=S.get(url,timeout=35);r.raise_for_status();return r
def save(url,path):
 r=get(url);im=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content)))
 if im.width<800 or im.height<440:raise ValueError('not high resolution '+str(im.size))
 if not .45<im.width/im.height<3.6:raise ValueError('unsuitable aspect '+str(im.size))
 orig=list(im.size);im=im.convert('RGB');im.thumbnail((1600,1100),Image.Resampling.LANCZOS)
 path.parent.mkdir(parents=True,exist_ok=True);im.save(path,'WEBP',quality=80,method=5)
 b=path.read_bytes()
 if len(b)<22000:raise ValueError('compressed image too small')
 return dict(localPath='/'+str(path.relative_to(ROOT/'public')),sha256=hashlib.sha256(b).hexdigest(),bytes=len(b),originalSize=orig,outputSize=list(im.size),imageTransformation='Original publisher image; EXIF orientation and aspect-preserving WebP resize')
def photos(key,page):
 soup=BeautifulSoup(get(page).text,'html.parser')
 out=[]
 if key in ('bigblue','silverturtle'):
  for im in soup.find_all('img'):
   alt=(im.get('alt') or '').strip()
   src=im.get('srcset','').split(',')[-1].strip().split(' ')[0] or im.get('src','')
   if not src or '.svg' in src or any(w in alt.lower() for w in ('floor plan','logo','map','leading hotels','island chapel')):continue
   if not any(w in alt.lower() for w in ('big blue ocean','silver turtle')):continue
   out.append((urljoin(page,src),alt))
 elif key=='soho':
  for im in soup.find_all('img'):
   alt=(im.get('alt') or '').strip()
   urls=re.findall(r'https://media\.fastly\.sohohousedigital\.com/[^\s]+(?=\s+\d+w)', im.get('data-srcset',''))
   urls.sort(key=lambda u:max([int(v) for v in re.findall(r'w_(\d+)',u)] or [0]),reverse=True)
   src=urls[0] if urls else ''
   if not src or not 'Canouan' in alt:continue
   out.append((src,alt))
 else:
  # Mandarin's real hotel photos are lazy-loaded from picture[v-lazyload].
  # Do not use the global navigation image or free-floating JSON media IDs:
  # those may depict fans, buildings in other countries or unrelated hotels.
  scenes=['Aerial view of Godahl Beach.','Person relaxing on a beach lounger with a tropical cocktail overlooking turquoise waters.','A couple sharing a candid moment over cocktails at Tides Bar, Mandarin Oriental, Canouan.']
  for description in scenes:
   im=next((im for im in soup.find_all('img') if (im.get('alt') or '').strip()==description),None)
   if im is None:raise RuntimeError('Mandarin true photo missing '+description)
   parent=str(im.parent)
   match=re.search(r"src: '([^']+)'",parent)
   if not match or not match.group(1).startswith('https://media.ffycdn.net/'):raise RuntimeError('Mandarin picture URL unavailable')
   out.append((match.group(1),description))
 unique=[];seen=set()
 for u,alt in out:
  if u.split('?')[0] in seen:continue
  seen.add(u.split('?')[0]);unique.append((u,alt))
 return unique
def download_hotels():
 images=[]
 for key,name,page in HOTELS:
  found=photos(key,page);print('SOURCE',key,len(found),flush=True)
  if key=='soho':found.sort(key=lambda x:(0 if 'jetty' in x[1].lower() else 1 if 'bedroom' in x[1].lower() else 2 if 'dining' in x[1].lower() else 3))
  if key in ('bigblue','silverturtle'):found.sort(key=lambda x:(0 if 'pool' in x[1].lower() else 1 if 'bedroom' in x[1].lower() else 2 if 'villa' in x[1].lower() else 3))
  if key=='mandarin':found.sort(key=lambda x:(0 if x[1]=='Mandarin Oriental, Canouan' else 1))
  seen=set();num=0
  for url,alt in found:
   if num==3:break
   try:
    meta=save(url,OUT/key/f'view-{num+1}.webp')
    if meta['sha256'] in seen:continue
    seen.add(meta['sha256']);num+=1
    images.append(dict(key=f'view-{num}',propertyKey=key,property=name,sourcePage=page,downloadUrl=url,sourceAlt=alt,credit=name+' · original brand/publisher, individual photographer unverified',license='Bosphoras operator-attested photo use; independent rights audit required',licenseUrl=page,rightsEvidenceType='operator_self_attestation',status='candidate_needs_visual_review',visuallyVerified=False,commercialRightsCleared=False,visualQaWarning='Pending human genuine-property identification and photographer licence',frCaption=name+' · photographie éditeur de la résidence à confirmer',enCaption=name+' · publisher property photograph; exact scene to verify',**meta))
    print('HOTEL_OK',key,num,alt[:90],flush=True)
   except Exception as e:print('REJECT',key,str(e)[:85],flush=True)
  if num!=3:raise RuntimeError(f'{key}: only {num} successful images')
 return images
def download_scenes():
 images=[]
 for key,page,local,fr,en in SCENES:
  url=urljoin(page,local)
  meta=save(url,OUT/'destination'/f'{key}.webp')
  images.append(dict(key=key,place='Canouan Island',sourcePage=page,downloadUrl=url,sourceAlt=fr,credit='Canouan Estate · original island publisher, photographer not identified',license='Operator-attested use only; third-party photographer licence to verify',licenseUrl=page,rightsEvidenceType='operator_self_attestation',status='candidate_needs_visual_review',visuallyVerified=False,commercialRightsCleared=False,visualQaWarning='Pending geographic and photographer-rights review',frCaption=fr,enCaption=en,**meta))
  print('SCENE_OK',key,flush=True)
 return images
def main():
 hotel=download_hotels();scenes=download_scenes();all_=hotel+scenes
 if len(hotel)!=12 or len(scenes)!=9 or len({x['sha256'] for x in all_})!=21:raise RuntimeError('21 different photographs required')
 m=dict(destination='canouan',hotels=hotel,destinationScenes=scenes,downloadedHotelCandidates=len(hotel),downloadedDestinationCandidates=len(scenes),visuallyVerified=False,approvedForCommercialPublication=False,publicationBlockedReason='Source candidates present; visual and independent original-creator licence approval pending',photoRightsBasis='Official Canouan Estate, Mandarin Oriental and Soho House publishers; original photographer-level rights not independently verified')
 MAN.parent.mkdir(parents=True,exist_ok=True);MAN.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
 print('CANOUAN_21_UNAPPROVED_CANDIDATES',len(all_),flush=True)
if __name__=='__main__':main()
