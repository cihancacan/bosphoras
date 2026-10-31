#!/usr/bin/env python3
"""Palawan #66: exact Commons landscape licensing + official hotel publisher media.
Owner-only noindex Preview until photographer/source rights and visual review pass.
Do not auto-mark hotel publisher imagery as commercial-use-cleared.
"""
import hashlib,html,io,json,pathlib,re,urllib.parse
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps,ImageDraw
S=requests.Session();S.headers.update({'User-Agent':'BosphorasLuxuryStaysEditorial/1.0 contact bosphoras.com'})
ROOT=pathlib.Path('public/images/travel/palawan-premium')
OUT=pathlib.Path('data/travel/palawanMediaCandidates.json')
BOARD=pathlib.Path('docs/travel-palawan-contact-sheet.jpg')
SCENES=[
('Big Lagoon at El Nido, Palawan, Philippines.jpg','Big Lagoon à El Nido, Bacuit','Big Lagoon in El Nido, Bacuit'),
('Limestone islands in Bacuit Bay, El Nido, Palawan, Philippines.jpg','Karsts des îles de Bacuit','Karst islands of Bacuit Bay'),
('Boat in Bacuit Bay, Palawan, Philippines.jpg','Bateau dans la baie de Bacuit','Boat in Bacuit Bay'),
('Twin Lagoon, Coron, Palawan, Philippines - panoramio.jpg','Twin Lagoon de Coron','Twin Lagoon in Coron'),
('Port Barton, Bay coastline, Sunset on the beach, Palawan, Philippines.jpg','Côte de Port Barton au couchant','Port Barton coastline at sunset'),
('San Vicente, Twilight on the beach, Palawan, Philippines.jpg','Plage de San Vicente le soir','San Vicente beach at twilight'),
('The beach of Sabang near Puerto Princesa Subterranean River, Palawan, Philippines.jpg','Plage de Sabang à Puerto Princesa','Sabang beach near Puerto Princesa'),
('Beach in El Nido Bay, Palawan, Philippines.jpg','Baie d’El Nido et son rivage','El Nido Bay shoreline'),
('Entrance lagoon to Barracuda Lake, Coron, Palawan - panoramio.jpg','Entrée du lagon du lac Barracuda à Coron','Barracuda Lake lagoon entrance, Coron')
]
HOTELS={
'lagen':('El Nido Resorts Lagen Island','https://ayalalandhospitality.com/en/el-nido/hotels/lagen',[
('A bird\'s eye view of the new Lagen','Vue aérienne de Lagen Island rénovée','Newly renovated Lagen Island aerial'),
('The Lagen Clubhouse','Clubhouse de Lagen Island','Lagen Island clubhouse'),
('Spa','Spa du Lagen Island Resort','Lagen Island Resort spa')]),
'pangulasian':('El Nido Resorts Pangulasian Island','https://ayalalandhospitality.com/en/el-nido/hotels/pangulasian-el-nido',[
('Pool Villa Room Exterior','Pool Villa à Pangulasian Island','Pangulasian Island Pool Villa exterior'),
('Pool Villa View','Vue depuis une Pool Villa de Pangulasian','View from a Pangulasian Pool Villa'),
('Pangulasian Island Sunset View','Coucher de soleil à Pangulasian Island','Pangulasian Island sunset')]),
'cauayan':('Cauayan Boutique Private Island','https://www.cauayanresort.com/cauayan-boutique-private-island',[
('337d4f4b-e997-4441-8cfd-8d15170af229','Cauayan Boutique Private Island · vue du resort','Cauayan Boutique Private Island resort view'),
('defdda91-8438-484b-ae89-b9c25f3aa919','Cauayan Boutique Private Island · atmosphère','Cauayan Boutique Private Island atmosphere'),
('cd1a84f9-bfed-4c82-be2e-a9dd8c4e2789','Cauayan Boutique Private Island · plage et nature','Cauayan Boutique Private Island beach and nature')]),
'discovery':('Discovery Coron','https://www.discoverycoron.com/',[
('metaQmFubmVyIDEu','Discovery Coron · île de Dimakya','Discovery Coron on Dimakya Island'),
('TWFpbiBCYW5uZXIgUG9vbC','Piscine du Discovery Coron','Discovery Coron pool'),
('TWFpbiBCYW5uZXIgT2NlYW52aWV3','Suite Oceanview de Discovery Coron','Discovery Coron Oceanview Suite')])
}
def txt(value): return BeautifulSoup(html.unescape(value or ''),'html.parser').get_text(' ',strip=True)
def req(url):
 r=S.get(url,timeout=35);r.raise_for_status()
 if len(r.content)>18_000_000:raise ValueError('oversize '+url)
 return r
def photo(uri,path):
 r=req(uri)
 if 'text/html' in r.headers.get('content-type',''):raise ValueError('HTML not image')
 img=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content))).convert('RGB')
 originalSize=[img.width,img.height]
 if min(img.width,img.height)<450:raise ValueError('Small photo '+str(originalSize))
 img.thumbnail((1500,1100),Image.Resampling.LANCZOS)
 path.parent.mkdir(parents=True,exist_ok=True)
 img.save(path,'WEBP',quality=82,method=5)
 b=path.read_bytes()
 if len(b)<17000:raise ValueError('WebP too small')
 return {'originalSize':originalSize,'outputSize':[img.width,img.height],
 'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),
 'pixelFingerprint':hashlib.sha256(img.resize((48,48),Image.Resampling.LANCZOS).tobytes()).hexdigest()}
def commons(title,i,fr,en):
 args={'action':'query','format':'json','prop':'imageinfo','iiprop':'url|size|extmetadata',
 'iiurlwidth':1500,'titles':'File:'+title}
 d=req('https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode(args)).json()
 p=list(d['query']['pages'].values())[0];v=p['imageinfo'][0];ext=v.get('extmetadata',{})
 license=txt(ext.get('LicenseShortName',{}).get('value'))
 if not re.match(r'^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)',license,re.I):
  raise ValueError('Not commercially reusable '+title+' '+license)
 url=v.get('thumburl') or v['url']
 dest=ROOT/'destination'/f'scene-{i}.webp'
 props=photo(url,dest)
 return dict(**props,key=f'scene-{i}',localPath=f'/images/travel/palawan-premium/destination/scene-{i}.webp',
 sourcePage=v['descriptionurl'],downloadUrl=url,credit=txt(ext.get('Artist',{}).get('value')) or 'See Commons attribution',
 license=license,licenseUrl=txt(ext.get('LicenseUrl',{}).get('value')) or v['descriptionurl'],
 rightsEvidenceType='wikimedia_license_metadata',commercialRightsCleared=True,
 visuallyVerified=False,status='source_identified_private_preview',
 frCaption=fr,enCaption=en,visualReviewNote='CONTACT_SHEET_VISUAL_REVIEW_PENDING')
def hotel(key,name,site,need,i,fr,en):
 t=req(site).text
 soup=BeautifulSoup(t,'html.parser')
 candidates=[]
 for tag in soup.select('img[src]'):
  src=html.unescape(tag['src']).split('?')[0]
  candidates.append((tag.get('alt','').strip(),src))
 # CSS/background embeds in the official page sometimes hold the largest JPEG variant
 candidates += [('',html.unescape(z).split('?')[0]) for z in
   re.findall(r'https?://[^"\s<>\\]+?\.(?:jpg|jpeg|webp|png)(?:\?[^"\s<>\\]*)?',t,re.I)]
 if key in ('lagen','pangulasian'): urls=[url for alt,url in candidates if alt==need]
 elif key=='cauayan': urls=[url for _,url in candidates if need.lower() in url.lower() and '/gallery/' in url and '/thumbs/' not in url]
 else: urls=[url for _,url in candidates if need in url]
 if not urls:raise ValueError('Hotel image missing '+key+' '+need)
 uri=urls[0]
 if key in ('lagen','pangulasian') and 'cdn.sanity.io' not in uri:raise ValueError('Unexpected Ayala CDN')
 if key=='cauayan' and 'profitroom.' not in uri:raise ValueError('Unexpected Cauayan CDN')
 if key=='discovery' and 'discovery.s14-host.com' not in uri:raise ValueError('Unexpected Discovery CDN')
 dest=ROOT/key/f'{key}-{i}.webp'
 props=photo(uri,dest)
 return dict(**props,key=f'{key}-{i}',property=name,propertyKey=key,
 localPath=f'/images/travel/palawan-premium/{key}/{key}-{i}.webp',
 sourcePage=site,downloadUrl=uri,credit='© '+name+' / official hotel publisher',
 license='Official hotel publisher; independent commercial reuse not cleared',
 licenseUrl=site,rightsEvidenceType='hotel_official_publisher_not_licensed',commercialRightsCleared=False,
 visuallyVerified=False,status='source_identified_private_preview',
 frCaption=fr,enCaption=en,visualReviewNote='OFFICIAL_PHOTO_VISUAL_REVIEW_PENDING')
manifest={'destination':'palawan','scope':'private_owner_preview_only','rightsNotice':'Hotel publisher images are not licensed for public distribution','cityCount':9,'hotelCount':12,'destinationScenes':[],'hotels':[],
 'visualQA':'PENDING_MANUAL_21_PHOTO_IDENTITY_REVIEW','publicUseApproved':False,'internalReviewedPhotoCount':0}
for i,(title,fr,en) in enumerate(SCENES,1):
 p=commons(title,i,fr,en)
 manifest['destinationScenes'].append(p);print('SCENE',i,p['license'],p['bytes'],flush=True)
for key,(name,site,photos) in HOTELS.items():
 for i,(term,fr,en) in enumerate(photos,1):
  p=hotel(key,name,site,term,i,fr,en)
  manifest['hotels'].append(p);print('HOTEL',key,i,p['bytes'],flush=True)
all_=manifest['destinationScenes']+manifest['hotels']
assert len(all_)==21
for prop in ['sha256','pixelFingerprint','localPath','downloadUrl']:
 assert len({p[prop] for p in all_})==21, 'duplicate '+prop
OUT.parent.mkdir(parents=True,exist_ok=True)
OUT.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
board=Image.new('RGB',(1280,1470),'white')
d=ImageDraw.Draw(board)
for k,p in enumerate(all_):
 im=Image.open(pathlib.Path('public')/p['localPath'].lstrip('/')).convert('RGB')
 im.thumbnail((312,209),Image.Resampling.LANCZOS)
 x=(k%4)*320;y=(k//4)*245
 board.paste(im,(x,y));d.text((x+4,y+215),p['key']+' '+(p.get('propertyKey') or p['license'])[:23],fill='black')
BOARD.parent.mkdir(parents=True,exist_ok=True);board.save(BOARD,quality=82)
print('SUCCESS Palawan',len(manifest['destinationScenes']),'landscapes',len(manifest['hotels']),'hotel photos; manual inspection still pending')
