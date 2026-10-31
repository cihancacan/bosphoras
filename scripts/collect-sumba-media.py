#!/usr/bin/env python3
"""Sumba #64 media sourcing for protected owner staging only.
Commons scene licence metadata + first-party hotel publisher media only.
No automatic human visual verification or commercial hotel-photo clearance.
"""
import hashlib,html,io,json,pathlib,re,urllib.parse
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps,ImageDraw
S=requests.Session(); S.headers.update({"User-Agent":"Bosphoras luxury editorial provenance review (private staging)"})
ROOT=pathlib.Path("public/images/travel/sumba-premium")
OUT=pathlib.Path("data/travel/sumbaMediaCandidates.json")
REPORT=pathlib.Path("docs/travel-sumba-acquisition-report.json")
SCENES=[
 [
  "scene-1",
  "Danau Weekuri, Sumba Barat Daya.jpg",
  "Weekuri · lagon salin turquoise",
  "Weekuri · turquoise saline lagoon"
 ],
 [
  "scene-2",
  "Kampung Adat Ratenggaro - Sumba Barat Daya.jpg",
  "Ratenggaro · maisons à hauts toits",
  "Ratenggaro · high-roofed traditional houses"
 ],
 [
  "scene-3",
  "Bukit Wairinding-Sumba Timur.jpg",
  "Wairinding · collines de Sumba orientale",
  "Wairinding · East Sumba hills"
 ],
 [
  "scene-4",
  "Pantai Walakiri, Sumba Timur, Nusa Tenggara Timur 20170610.jpg",
  "Walakiri · arbres et rivage",
  "Walakiri · coastal trees and shallows"
 ],
 [
  "scene-5",
  "Air Terjun Lapopu, Sumba Barat.jpg",
  "Lapopu · cascade de Sumba occidentale",
  "Lapopu · West Sumba forest waterfall"
 ],
 [
  "scene-6",
  "Tanggedu Waterfall.jpg",
  "Tanggedu · cascades orientales",
  "Tanggedu · East Sumba waterfall"
 ],
 [
  "scene-7",
  "Ratenggaro Beach.jpg",
  "Ratenggaro · plage du sud-ouest",
  "Ratenggaro · southwestern beach"
 ],
 [
  "scene-8",
  "KodiEastcoastSumba.JPG",
  "Kodi · littoral sauvage",
  "Kodi · dramatic wild coastline"
 ],
 [
  "scene-9",
  "The Magnificent Sunset from Sumba Island.jpg",
  "Sumba · ciel du couchant",
  "Sumba · golden island sunset"
 ]
]
HOTELS=[
 [
  "nihi",
  "NIHI Sumba",
  [
   "https://nihi.com/sumba/",
   "https://nihi.com/sumba/villas/"
  ]
 ],
 [
  "cap-karoso",
  "Cap Karoso",
  [
   "https://capkaroso.com/en/",
   "https://capkaroso.com/en/rooms-and-villas/studios/"
  ]
 ],
 [
  "sanubari",
  "The Sanubari",
  [
   "https://www.thesanubari.com/",
   "https://www.thesanubari.com/stay"
  ]
 ],
 [
  "lelewatu",
  "Lelewatu Resort Sumba",
  [
   "https://lelewatu.com/",
   "https://lelewatu.com/accommodations/"
  ]
 ]
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
 args={'action':'query','titles':'File:'+phrase,'prop':'imageinfo','iiprop':'url|extmetadata|size','iiurlwidth':1600,'format':'json'}
 d=request('https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode(args)).json()
 pages=sorted(d.get('query',{}).get('pages',{}).values(),key=lambda p:p.get('index',999))
 fails=[]
 for p in pages:
  i=(p.get('imageinfo') or [None])[0]
  if not i:continue
  title=p.get('title','').removeprefix('File:')
  if not re.search(r'\.(jpe?g|png|webp)$',title,re.I):continue
  if any(t in title.lower() for t in ['map','logo','poster','painting','diagram','drawing','icon','advert','screenshot','render','sketch','2020_collage']):continue
  if i.get('width',0)<950 or i.get('height',0)<550:continue
  meta=i.get('extmetadata',{});license=txt(meta.get('LicenseShortName',{}).get('value',''))
  if not re.match(r'^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)',license,re.I):continue
  url=i.get('thumburl') or i.get('url')
  try:
   props=photo(url,ROOT/'destination'/(key+'.webp'))
   return {**props,'key':key,'localPath':'/images/travel/sumba-premium/destination/'+key+'.webp',
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
 allow=['nihi.com','capkaroso.com','thesanubari.com','lelewatu.com','lelawatu.com','cdn.shopify.com','images.contentstack.io','cdn.prod.website-files.com','images.ctfassets.net','cloudinary.com','akamaized.net','scene7.com','imgix.net','imagekit.io','cdn.sanity.io','bstatic.com']
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
 for k in ['sumba','nihi','karoso','sanubari','lelewatu','suite','room','villa','terrace','resort','pool','house','hotel','heritage','spa','garden','beach','ocean','cliff']:
  if k in v:n+=3
 return n
def one_hotel(row):
 key,name,pages=row
 candidates=[]
 for p in pages:candidates+=harvest(p)
 ranked=sorted(candidates,key=score,reverse=True)
 # Prefer different facilities, rather than three resized versions of one hero.
 priority={
 'nihi':[('villa','estate','resort'),('pool','marangga','treehouse'),('beach','spa','surf')],
  'cap-karoso':[('hotel','karoso','exterior'),('studio','room','villa'),('pool','beach','farm')],
  'sanubari':[('beach','coast','resort'),('studio','villa','room'),('pool','garden','surf')],
  'lelewatu':[('resort','exterior','cliff'),('villa','room','ocean'),('pool','lagoon','spa')]
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
    'localPath':'/images/travel/sumba-premium/'+key+'/'+key2+'.webp',
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
  sheet.paste(pic,(x,y));draw.text((x,y+238),str(i+1)+' '+p.get('property','Sumba')+' · '+p['key'],fill='#182e36')
  draw.text((x,y+256),p['sourcePage'][:52],fill='#5b6971')
 sheet.save('docs/travel-sumba-contact-sheet.jpg','JPEG',quality=80)
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
 manifest={'destination':'sumba','scope':'owner_protected_preview_only',
  'rightsNotice':'Hotel publisher photos cannot be commercially republished without independently verified authorization.',
  'cityCount':len(scenes),'hotelCount':len(hotels),'destinationScenes':scenes,'hotels':hotels,
  'visualQA':'PENDING_INDIVIDUAL_PHOTO_REVIEW','publicUseApproved':False}
 OUT.parent.mkdir(parents=True,exist_ok=True);OUT.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
 REPORT.parent.mkdir(parents=True,exist_ok=True);REPORT.write_text(json.dumps({'cityCount':len(scenes),'hotelCount':len(hotels),'hotelReports':report,'errors':failures,
   'allImagesVisuallyApproved':False,'commercialHotelRights':False},ensure_ascii=False,indent=2)+'\n')
 contact(scenes+hotels)
 print('SUMBA_SOURCED',len(scenes),len(hotels),'target 9 + 12',flush=True)
if __name__=='__main__':main()
