#!/usr/bin/env python3
"""Chiang Mai #64 media sourcing for protected owner staging only.
Commons scene licence metadata + first-party hotel publisher media only.
No automatic human visual verification or commercial hotel-photo clearance.
"""
import hashlib,html,io,json,pathlib,re,urllib.parse
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps,ImageDraw
S=requests.Session(); S.headers.update({"User-Agent":"Bosphoras luxury editorial provenance review (private staging)"})
ROOT=pathlib.Path("public/images/travel/chiang-mai-premium")
OUT=pathlib.Path("data/travel/chiangMaiMediaCandidates.json")
REPORT=pathlib.Path("docs/travel-chiang-mai-acquisition-report.json")
SCENES=[
 ("scene-1","Wat Phra That Doi Suthep Chiang Mai temple panorama","Doi Suthep · temple doré sur les montagnes","Doi Suthep golden mountain temple"),
 ("scene-2","Chiang Mai Wat Chedi Luang temple ruins","Wat Chedi Luang · pierre et temples de la vieille ville","Wat Chedi Luang in Chiang Mai's Old City"),
 ("scene-3","Chiang Mai Wat Phra Singh golden temple","Wat Phra Singh et l'architecture Lanna","Wat Phra Singh and Lanna architecture"),
 ("scene-4","Chiang Mai Old City moat Tha Phae Gate","Les douves de la vieille ville et Tha Phae Gate","Chiang Mai Old City moat and Tha Phae Gate"),
 ("scene-5","Wat Ket Chiang Mai Ping River","Wat Gate et les bords du Ping","Wat Gate along the Ping River"),
 ("scene-6","Chiang Mai Mae Ping River bridge","Les ponts et la rivière Ping en ville","Bridges over the Ping River in central Chiang Mai"),
 ("scene-7","Mae Rim Chiang Mai rice field","Les rizières de Mae Rim","Mae Rim rice paddies"),
 ("scene-8","Mae Rim Chiang Mai mountain forest","Les montagnes et forêts de Mae Rim","Mountains and forests near Mae Rim"),
 ("scene-9","Chiang Mai night market street","Les lumières de Chiang Mai au marché du soir","Chiang Mai evening market lights")
]
HOTELS=[
 ("pillars","137 Pillars House Chiang Mai",[
 "https://137pillarshotels.com/en/chiangmai/",
 "https://137pillarshotels.com/en/chiangmai/suites/",
 "https://137pillarshotels.com/en/chiangmai/about/"]),
 ("anantara","Anantara Chiang Mai Resort",[
 "https://www.anantara.com/en/chiang-mai",
 "https://www.anantara.com/en/chiang-mai/rooms",
 "https://www.anantara.com/en/chiang-mai/dining"]),
 ("raya","Raya Heritage",[
 "https://www.rayaheritage.com/en/",
 "https://www.rayaheritage.com/en/accommodation.php",
 "https://www.rayaheritage.com/en/kramm-pool-suite.php"]),
 ("four-seasons","Four Seasons Resort Chiang Mai",[
 "https://www.fourseasons.com/chiangmai/",
 "https://www.fourseasons.com/chiangmai/photos-and-videos/",
 "https://www.fourseasons.com/chiangmai/accommodations/"])
]
def request(url):
 r=S.get(url,timeout=25);r.raise_for_status()
 if len(r.content)>16_000_000:raise ValueError("file oversized")
 return r
def txt(value):return BeautifulSoup(html.unescape(value or ""),"html.parser").get_text(" ",strip=True)
def photo(uri,out):
 r=request(uri)
 if 'text/html' in r.headers.get('content-type','').lower():raise ValueError("HTML as photo")
 im=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content))).convert("RGB")
 original=[im.width,im.height]
 if im.width<820 or im.height<470:raise ValueError("small picture "+str(original))
 im.thumbnail((1600,1200),Image.Resampling.LANCZOS)
 fingerprint=hashlib.sha256(im.resize((48,48),Image.Resampling.LANCZOS).tobytes()).hexdigest()
 b=io.BytesIO();im.save(b,"WEBP",quality=83,method=4);raw=b.getvalue()
 if len(raw)<17000:raise ValueError("tiny WebP")
 out.parent.mkdir(parents=True,exist_ok=True);out.write_bytes(raw)
 return dict(originalSize=original,outputSize=[im.width,im.height],bytes=len(raw),
 sha256=hashlib.sha256(raw).hexdigest(),pixelFingerprint=fingerprint)
def commons(row):
 key,phrase,fr,en=row
 # Wikimedia fulltext search only identifies candidates: the contact sheet is mandatory.
 args={'action':'query','generator':'search','gsrsearch':'filetype:bitmap '+phrase,
   'gsrnamespace':6,'gsrlimit':40,'prop':'imageinfo','iiprop':'url|extmetadata|size',
   'iiurlwidth':1600,'format':'json'}
 d=request('https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode(args)).json()
 pages=sorted(d.get('query',{}).get('pages',{}).values(),key=lambda p:p.get('index',999))
 fails=[]
 for p in pages:
  i=(p.get('imageinfo') or [None])[0]
  if not i:continue
  title=p.get('title','').removeprefix('File:')
  if not re.search(r'\.(jpe?g|png|webp)$',title,re.I):continue
  if any(t in title.lower() for t in ['map','logo','poster','painting','diagram','drawing','icon','advert','screenshot','render','sketch','2020_collage']):continue
  if i.get('width',0)<1000 or i.get('height',0)<580:continue
  meta=i.get('extmetadata',{});license=txt(meta.get('LicenseShortName',{}).get('value',''))
  if not re.match(r'^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)',license,re.I):continue
  url=i.get('thumburl') or i.get('url')
  try:
   props=photo(url,ROOT/'destination'/(key+'.webp'))
   return {**props,'key':key,'localPath':'/images/travel/chiang-mai-premium/destination/'+key+'.webp',
    'sourcePage':'https://commons.wikimedia.org/wiki/File:'+urllib.parse.quote(title.replace(' ','_'),safe='(),-._'),
    'downloadUrl':url,'credit':txt(meta.get('Artist',{}).get('value','')) or 'Wikimedia Commons photographer; review source file',
    'license':license,'licenseUrl':meta.get('LicenseUrl',{}).get('value','https://creativecommons.org/licenses/'),
    'rightsEvidenceType':'wikimedia_license_metadata','commercialRightsCleared':True,
    'visuallyVerified':False,'status':'source_identified_pending_individual_visual_review',
    'frCaption':fr,'enCaption':en,'originalAlt':title,'searchIntent':phrase}
  except Exception as e:fails.append(str(e)[:100])
 raise ValueError('No licensed image for '+phrase+': '+repr(fails[:3]))
def harvest(page):
 try:r=request(page)
 except Exception as e:print('PAGE_FAIL',page,str(e)[:120],flush=True);return []
 soup=BeautifulSoup(r.text,'html.parser');data=[];seen=set()
 # Images must be served by official hotel pages/known official image CDNs; reject stock sources.
 allow=['137pillarshotels.com','137pillarshouse.com','anantara.com','minorhotels.com',
 'rayaheritage.com','fourseasons.com','four-seasons.com','fourseasonscdn.com',
 'images.contentstack.io','cdn.prod.website-files.com','images.ctfassets.net',
 'cloudinary.com','akamaized.net','scene7.com','imgix.net','imagekit.io','cdn.sanity.io','bstatic.com']
 def candidate(raw,alt):
  if not raw:return
  if raw.startswith('//'):raw='https:'+raw
  u=urllib.parse.urljoin(page,html.unescape(str(raw).replace('\\/','/')))
  domain=urllib.parse.urlsplit(u).netloc.lower()
  if urllib.parse.urlsplit(u).scheme!='https' or not re.search(r'\.(?:jpg|jpeg|webp|png)(?:$|[?#])',u,re.I):return
  if not any(domain==host or domain.endswith('.'+host) for host in allow):return
  if domain.endswith('bstatic.com'):return
  if any(k in u.lower() for k in ['logo','icon','social','award','badge','certificate','favicon','map-','instagram','qr-code','placeholder','avatar']):return
  if u in seen:return
  seen.add(u);data.append((u,alt,page))
 for node in soup.find_all(['img','source']):
  alt=node.get('alt') or node.get('title') or ''
  for att in ('src','data-src','data-original','data-lazy-src','data-image','srcset','data-srcset','data-bg'):
   raw=node.get(att)
   if not raw:continue
   if 'srcset' in att:raw=str(raw).split(',')[-1].strip().split()[0]
   candidate(raw,alt)
 for node in soup.find_all('meta'):
  if node.get('property') in ('og:image','twitter:image'):candidate(node.get('content'),'publisher hero')
 for raw in re.findall(r'https?://[^"\\\s<>]+?\.(?:jpg|jpeg|webp|png)(?:\?[^"\\\s<>]*)?',r.text,re.I)[:400]:
  candidate(raw,'publisher embedded photograph')
 print('HOTEL_PAGE',page,'IMAGES',len(data),flush=True)
 return data
def score(row):
 uri,alt,_=row
 v=(uri+' '+alt).lower()
 if any(k in v for k in ['logo','badge','icon','thumbnail','certificate','map','promo','wedding','award']):return -500
 n=5
 for k in ['chiang','suite','room','villa','terrace','rice','resort','pool','house','hotel','heritage','anantara','raya','pillar','spa','garden','lobby','river','four-seasons']:
  if k in v:n+=3
 return n
def one_hotel(row):
 key,name,pages=row
 candidates=[]
 for p in pages:candidates+=harvest(p)
 ranked=sorted(candidates,key=score,reverse=True)
 # Prefer different facilities, rather than three resized versions of one hero.
 priority={
 'pillars':[('house','exterior','building'),('rajah','suite','room'),('pool','garden')],
 'anantara':[('river','resort','exterior'),('suite','room'),('pool','heritage')],
 'raya':[('resort','river','garden'),('rin','huen','suite'),('kraam','pool')],
 'four-seasons':[('rice','paddy','resort'),('pavilion','room','villa'),('pool','spa','cooking')]
 }[key]
 ordered=[]
 for terms in priority:
  for a in ranked:
   if any(w in (a[0]+' '+a[1]).lower() for w in terms) and a not in ordered:
    ordered.append(a);break
 for a in ranked:
  if a not in ordered:ordered.append(a)
 seen=set();seen_canonical=set();pictures=[];failed=[]
 for u,alt,source in ordered:
  if len(pictures)>=3:break
  if u in seen or score((u,alt,source))<3:continue
  seen.add(u)
  canonical=re.sub(r'/styles/[^/]+/public/','/public/',urllib.parse.urlsplit(u).path,re.I)
  if canonical in seen_canonical:continue
  seen_canonical.add(canonical)
  key2='view-'+str(len(pictures)+1);dest=ROOT/key/(key2+'.webp')
  try:
   props=photo(u,dest)
   if props['pixelFingerprint'] in {p['pixelFingerprint'] for p in pictures}:
    dest.unlink(missing_ok=True);continue
   pictures.append({**props,'key':key2,'propertyKey':key,'property':name,
    'localPath':'/images/travel/chiang-mai-premium/'+key+'/'+key2+'.webp',
    'sourcePage':source,'downloadUrl':u,
    'credit':name+' official publisher; photographer not independently identified',
    'license':'Official hotel photo; no independent commercial redistribution rights.',
    'licenseUrl':source,'rightsEvidenceType':'hotel_official_publisher_not_licensed',
    'commercialRightsCleared':False,'visuallyVerified':False,
    'status':'source_identified_pending_individual_visual_review',
    'originalAlt':alt,'frCaption':name+' · photographie officielle à vérifier',
    'enCaption':name+' · official publisher photo pending visual check'})
   print('HOTEL_SAVED',key,key2,props['bytes'],flush=True)
  except Exception as e:failed.append(str(e)[:130])
 return pictures,dict(property=name,candidates=len(candidates),downloaded=len(pictures),errors=failed[:8])
def contact(items):
 if not items:return
 W,H=440,302;col=3
 sheet=Image.new('RGB',(W*col,H*((len(items)+col-1)//col)),'#f4f2ec')
 draw=ImageDraw.Draw(sheet)
 for i,p in enumerate(items):
  file=pathlib.Path('public'+p['localPath']);pic=Image.open(file).convert('RGB');pic.thumbnail((418,232))
  x=(i%col)*W+8;y=(i//col)*H+5
  sheet.paste(pic,(x,y));draw.text((x,y+238),str(i+1)+' '+p.get('property','Chiang Mai')+' · '+p['key'],fill='#182e36')
  draw.text((x,y+256),p['sourcePage'][:52],fill='#5b6971')
 sheet.save('docs/travel-chiang-mai-contact-sheet.jpg','JPEG',quality=80)
def main():
 scenes=[];hotels=[];failures=[];report=[]
 for scene in SCENES:
  try:
   p=commons(scene)
   if p['pixelFingerprint'] in {x['pixelFingerprint'] for x in scenes}:raise ValueError('duplicate pixels')
   scenes.append(p);print('LANDSCAPE',p['key'],p['originalAlt'],flush=True)
  except Exception as e:failures.append({'key':scene[0],'error':str(e)[:300]});print('LANDSCAPE_FAIL',scene[0],str(e)[:170],flush=True)
 for h in HOTELS:
  photos,stats=one_hotel(h);hotels+=photos;report.append(stats)
 manifest={'destination':'chiang-mai','scope':'owner_protected_preview_only',
  'rightsNotice':'Hotel publisher photos cannot be commercially republished without independently verified authorization.',
  'cityCount':len(scenes),'hotelCount':len(hotels),'destinationScenes':scenes,'hotels':hotels,
  'visualQA':'PENDING_INDIVIDUAL_PHOTO_REVIEW','publicUseApproved':False}
 OUT.parent.mkdir(parents=True,exist_ok=True);OUT.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
 REPORT.parent.mkdir(parents=True,exist_ok=True);REPORT.write_text(json.dumps({'cityCount':len(scenes),'hotelCount':len(hotels),'hotelReports':report,'errors':failures,
   'allImagesVisuallyApproved':False,'commercialHotelRights':False},ensure_ascii=False,indent=2)+'\n')
 contact(scenes+hotels)
 print('CHIANG_MAI_SOURCED',len(scenes),len(hotels),'target 9 + 12',flush=True)
if __name__=='__main__':main()
