#!/usr/bin/env python3
"""Bangkok #63: discover ORIGINAL Commons image identities; private hotel publisher photographs.
No licence inference from official hotel websites. Only protected noindex owner Preview.
"""
import hashlib,html,io,json,pathlib,re,urllib.parse
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps,ImageDraw
from concurrent.futures import ThreadPoolExecutor

ROOT=pathlib.Path('public/images/travel/bangkok-premium')
MAN=pathlib.Path('data/travel/bangkokMediaCandidates.json')
REP=pathlib.Path('docs/travel-bangkok-acquisition-report.json')
HEADERS={'User-Agent':'Bosphoras Luxury Stays (source provenance for private visual QA; no automated rights assumption)'}
CITY=[
 ('scene-1','Bangkok Chao Phraya river Wat Arun night panorama','Wat Arun et le Chao Phraya au coucher du soleil','Wat Arun and Chao Phraya at sunset'),
 ('scene-2','Bangkok Wat Arun temple sunrise','Wat Arun et ses prangs depuis le fleuve','Wat Arun and its spires seen from the river'),
 ('scene-3','Grand Palace Bangkok Thai architecture','Le Grand Palais et les toits royaux de Bangkok','The Grand Palace and Bangkok royal roofs'),
 ('scene-4','Charoen Krung Bangkok old town street','Charoen Krung et la ville ancienne','Charoen Krung and Bangkok old town'),
 ('scene-5','Bangkok Dusit Ananta Samakhom Throne Hall','Dusit et son architecture historique','Dusit and its historic architecture'),
 ('scene-6','Bangkok Lumpini Park skyscrapers skyline','Les arbres de Lumphini devant les tours centrales','Lumphini trees beside the central skyline'),
 ('scene-7','Chinatown Bangkok Yaowarat night street','Les enseignes de Yaowarat la nuit','Yaowarat street lights at night'),
 ('scene-8','Bangkok long tail boat Chao Phraya river','La vie fluviale et les bateaux de Bangkok','Working boats on the Chao Phraya'),
 ('scene-9','Bangkok skyline King Power Mahanakhon skyscraper','La silhouette des tours de Bangkok','Bangkok contemporary skyline')
]
HOTELS=[
 ('mandarin-oriental','Mandarin Oriental, Bangkok',[
 'https://www.mandarinoriental.com/en/bangkok/chao-phraya-river/gallery',
 'https://www.mandarinoriental.com/en/bangkok/chao-phraya-river']),
 ('capella','Capella Bangkok',[
 'https://capellahotels.com/en/capella-bangkok',
 'https://capellahotels.com/en/capella-bangkok/accommodation']),
 ('the-siam','The Siam Bangkok',[
 'https://www.thesiamhotel.com/',
 'https://www.thesiamhotel.com/riverside-pool-villa/',
 'https://www.thesiamhotel.com/river-view-suite/']),
 ('aman-nai-lert','Aman Nai Lert Bangkok',[
 'https://www.aman.com/hotels/aman-nai-lert-bangkok/gallery',
 'https://www.aman.com/hotels/aman-nai-lert-bangkok'])
]
def req(url,timeout=25):
 r=requests.get(url,headers=HEADERS,timeout=timeout)
 r.raise_for_status()
 if len(r.content)>15000000:raise ValueError('oversized response')
 return r
def plain(s):return BeautifulSoup(html.unescape(s or ''),'html.parser').get_text(' ',strip=True)
def save(url,path):
 r=req(url)
 if 'html' in r.headers.get('Content-Type','').lower():raise ValueError('image returned HTML')
 im=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content))).convert('RGB')
 original=list(im.size)
 if im.width<790 or im.height<480:raise ValueError('undersized media '+str(original))
 im.thumbnail((1600,1200),Image.Resampling.LANCZOS)
 fingerprint=hashlib.sha256(im.resize((48,48),Image.Resampling.LANCZOS).tobytes()).hexdigest()
 buf=io.BytesIO();im.save(buf,'WEBP',quality=84,method=5)
 raw=buf.getvalue()
 if len(raw)<17000:raise ValueError('invalid output size')
 path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(raw)
 return {'originalSize':original,'outputSize':list(im.size),'bytes':len(raw),'sha256':hashlib.sha256(raw).hexdigest(),'pixelFingerprint':fingerprint}
def commons(q):
 key,query,fr,en=q
 args={'action':'query','generator':'search','gsrsearch':'filetype:bitmap '+query,
 'gsrnamespace':6,'gsrlimit':22,'prop':'imageinfo','iiprop':'url|extmetadata|size','iiurlwidth':1600,'format':'json'}
 data=req('https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode(args)).json()
 pages=list(data.get('query',{}).get('pages',{}).values())
 pages.sort(key=lambda p:p.get('index',999))
 errors=[]
 for page in pages:
  info=(page.get('imageinfo') or [None])[0]
  if not info:continue
  meta=info.get('extmetadata',{})
  licence=plain(meta.get('LicenseShortName',{}).get('value',''))
  if not re.match(r'^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)',licence,re.I):continue
  title=page.get('title','').removeprefix('File:')
  if not re.search(r'\.(jpe?g|png|webp)$',title,re.I):continue
  if any(v in title.lower() for v in ('map','poster','logo','icon','advert','drawing','painting','diagram','banner','collage','render','1865','1900')):continue
  if info.get('width',0)<950 or info.get('height',0)<550:continue
  u=info.get('thumburl') or info.get('url')
  try:
   props=save(u,ROOT/'destination'/(key+'.webp'))
   source='https://commons.wikimedia.org/wiki/File:'+urllib.parse.quote(title.replace(' ','_'),safe='(),-._')
   author=plain(meta.get('Artist',{}).get('value','')) or 'Commons uploader: see file details'
   return {**props,'key':key,'localPath':'/images/travel/bangkok-premium/destination/'+key+'.webp',
    'sourcePage':source,'downloadUrl':u,'credit':author,'license':licence,
    'licenseUrl':meta.get('LicenseUrl',{}).get('value','https://creativecommons.org/licenses/'),
    'rightsEvidenceType':'wikimedia_license_metadata','commercialRightsCleared':True,
    'visuallyVerified':False,'status':'source_identified_pending_individual_visual_review',
    'originalAlt':title,'frCaption':fr,'enCaption':en,'searchIntent':query}
  except Exception as e:errors.append(str(e)[:100])
 raise ValueError('no licensed source for '+query+'; '+str(errors[:3]))
def harvest(page):
 try:r=req(page)
 except Exception as e:print('HOTEL_PAGE_FAILURE',page,str(e)[:130],flush=True);return []
 soup=BeautifulSoup(r.text,'html.parser');seen=set();result=[]
 def add(raw,alt):
  if not raw or raw.startswith('data:'):return
  raw=str(raw).replace('\\/','/')
  if raw.startswith('//'):raw='https:'+raw
  u=urllib.parse.urljoin(page,html.unescape(raw))
  p=urllib.parse.urlsplit(u);dom=p.netloc.lower()
  if p.scheme!='https' or not re.search(r'\.(jpe?g|png|webp)(?:$|[?&#])',u,re.I):return
  # Only actual property publishers and asset hosts that are used by property sites.
  allowed=['mandarinoriental.com','mohg.com','capellahotels.com','capellahotelscdn.com','thesiamhotel.com','aman.com','amanresorts.com','cloudinary.com','scene7.com','contentstack.io','imgix.net','images.ctfassets.net','webflow.com','cdn.sanity.io','canto.global','assets.aman.com','hyatt.com']
  if not any(dom==a or dom.endswith('.'+a) for a in allowed):return
  if any(bad in u.lower() for bad in ('logo','icon','awards','badge','qr-code','flag-','favicon','placeholder','certificate','map-','social','instagram-avatar')):return
  if u in seen:return
  seen.add(u);result.append((u,alt,page))
 for n in soup.find_all(['img','source']):
  alt=n.get('alt') or n.get('title') or ''
  for k in ('data-src','data-original','data-lazy-src','src','data-image','data-bg','srcset','data-srcset'):
   value=n.get(k)
   if not value:continue
   if 'srcset' in k:
    value=str(value).split(',')[-1].strip().split()[0]
   add(value,alt)
 for n in soup.find_all('meta'):
  if n.get('property') in ('og:image','twitter:image'):add(n.get('content'),'official hotel scene')
 for raw in re.findall(r'https?://[^"\\\s<>]+?\.(?:jpg|jpeg|webp|png)(?:\?[^"\\\s<>]*)?',r.text,re.I)[:350]:
  add(raw,'embedded official image')
 print('HOTEL_PAGE',page,'found',len(result),flush=True)
 return result
def score(item):
 url,alt,_=item;txt=(url+' '+alt).lower();n=4
 for k in ('suite','pool','river','villa','exterior','lobby','hotel','resort','spa','guestroom','room','garden','bangkok','gallery','oriental','capella','aman','the-siam'):
  if k in txt:n+=3
 if any(x in txt for x in ('events','wedding','advert','promo','award','badge','logo','map','shutterstock','stock')):n-=300
 return n
def hotel(h):
 key,name,pages=h
 found=[]
 for page in pages:found+=harvest(page)
 # Include only original URLs from official publisher pages; do not substitute booking/stock images.
 seen=set();out=[];errors=[]
 for u,alt,page in sorted(found,key=score,reverse=True):
  if len(out)==3:break
  if u in seen or score((u,alt,page))<3:continue
  seen.add(u)
  idx='view-'+str(len(out)+1);path=ROOT/key/(idx+'.webp')
  try:
   props=save(u,path)
   if props['pixelFingerprint'] in {x['pixelFingerprint'] for x in out}:path.unlink(missing_ok=True);continue
   out.append({**props,'key':idx,'propertyKey':key,'property':name,
    'localPath':'/images/travel/bangkok-premium/'+key+'/'+idx+'.webp',
    'sourcePage':page,'downloadUrl':u,'credit':name+' official publisher; photographer not separately identified',
    'license':'Official publisher image; independent commercial republication rights not verified.',
    'licenseUrl':page,'rightsEvidenceType':'hotel_official_publisher_not_licensed',
    'commercialRightsCleared':False,'visuallyVerified':False,'status':'source_identified_pending_individual_visual_review',
    'originalAlt':alt,'frCaption':name+' · photographie officielle à contrôler',
    'enCaption':name+' · official property photograph for individual review'})
   print('HOTEL_SAVED',key,idx,props['bytes'],flush=True)
  except Exception as e:errors.append(str(e)[:120])
 return out,{'property':name,'found':len(found),'downloaded':len(out),'errors':errors[:6]}
def sheet(items):
 if not items:return
 col=3;w=440;h=307;rows=(len(items)+col-1)//col
 image=Image.new('RGB',(col*w,rows*h),'#f7f3ec');draw=ImageDraw.Draw(image)
 for i,p in enumerate(items):
  f=pathlib.Path('public'+p['localPath']);im=Image.open(f).convert('RGB');im.thumbnail((420,237))
  x=(i%col)*w+7;y=(i//col)*h+6
  image.paste(im,(x,y))
  draw.text((x,y+241),str(i+1)+' '+p.get('property','Bangkok')+'/'+p['key'],fill='#18313a')
  draw.text((x,y+261),p['sourcePage'][:55],fill='#56626d')
 image.save('docs/travel-bangkok-contact-sheet.jpg','JPEG',quality=79)
def main():
 scenes=[];hotels=[];errors=[];report=[]
 for row in CITY:
  try:
   p=commons(row)
   if p['pixelFingerprint'] in {x['pixelFingerprint'] for x in scenes}:
    pathlib.Path('public'+p['localPath']).unlink(missing_ok=True)
    raise ValueError('pixel-duplicate scene')
   scenes.append(p);print('LANDSCAPE',p['key'],p['originalAlt'],flush=True)
  except Exception as e:errors.append({'key':row[0],'reason':str(e)[:200]});print('LANDSCAPE_FAILURE',row[0],str(e)[:140],flush=True)
 for item in HOTELS:
  photos,entry=hotel(item)
  hotels+=photos;report.append(entry)
 result={'destination':'bangkok','scope':'protected_owner_preview_only','rightsNotice':'No hotel publisher photo may be redistributed commercially without separate authorisation.',
  'cityCount':len(scenes),'hotelCount':len(hotels),'destinationScenes':scenes,'hotels':hotels,
  'visualQA':'PENDING_INDIVIDUAL_PHOTO_IDENTITY_REVIEW','publicUseApproved':False}
 MAN.write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 REP.write_text(json.dumps({'cityCount':len(scenes),'hotelCount':len(hotels),'expected':[9,12],'hotels':report,'errors':errors,
  'visuallyApproved':False,'commercialHotelPhotoRights':False},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 sheet(scenes+hotels)
 print('BANGKOK_RESULT',len(scenes),len(hotels),'target 9 + 12',flush=True)
if __name__=='__main__':main()
