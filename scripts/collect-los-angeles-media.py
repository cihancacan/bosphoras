#!/usr/bin/env python3
"""Los Angeles premium #58 owner-review source-photo collector.
No unrelated hotel photos, no stock, no uncredited photographs.
City images require Wikimedia CC attribution; hotel images remain publisher rights-unverified.
"""
import io,json,os,re,time,hashlib,pathlib,urllib.parse,html
import requests
from PIL import Image,ImageOps,ImageStat
from bs4 import BeautifulSoup
ROOT=pathlib.Path('public/images/travel/los-angeles-premium')
OUT=pathlib.Path('data/travel/losAngelesMediaCandidates.json')
API='https://commons.wikimedia.org/w/api.php'
SESSION=requests.Session()
SESSION.headers.update({'User-Agent':'BosphorasLuxuryStays/1.0 (editorial photo provenance owner-only; info@bosphoras.com)'})
SCENES=[
('scene-1',['Griffith Observatory skyline Los Angeles sunset','Los Angeles Griffith Observatory panorama'],'Griffith Observatory above the Los Angeles basin','Griffith Observatory au-dessus de Los Angeles',['griffith','los angeles']),
('scene-2',['Getty Center Los Angeles museum gardens','Getty Center Los Angeles aerial'],'The Getty Center and hills of Los Angeles','Le Getty Center sur les collines de Los Angeles',['getty']),
('scene-3',['Beverly Hills California palm tree street','Rodeo Drive Beverly Hills palm trees'],'Palm-lined Beverly Hills streets','Les palmiers de Beverly Hills',['beverly hills','rodeo']),
('scene-4',['Sunset Strip West Hollywood California street','West Hollywood Sunset Boulevard'],'Sunset Boulevard and the West Hollywood atmosphere','Sunset Boulevard à West Hollywood',['west hollywood','sunset strip','sunset boulevard']),
('scene-5',['Santa Monica California beach pier aerial','Santa Monica Pier beach California'],'Santa Monica Pacific beachfront','La plage de Santa Monica côté Pacifique',['santa monica']),
('scene-6',['Griffith Park Los Angeles trails hiking hills','Griffith Observatory Hollywood sign Los Angeles'],'Griffith Park and the Hollywood Hills','Griffith Park et les collines de Hollywood',['griffith','hollywood hills']),
('scene-7',['Downtown Los Angeles skyline night','Los Angeles downtown skyline twilight'],'Downtown Los Angeles skyline after dark','Skyline de Downtown Los Angeles à la tombée du jour',['downtown los angeles','los angeles skyline','la skyline']),
('scene-8',['Malibu California coastline beach Pacific','Malibu coastline California seashore'],'Malibu's Pacific coast and open beach','La côte Pacifique de Malibu',['malibu']),
('scene-9',['Venice canals Los Angeles California','Venice Beach canals Los Angeles'],'The Venice Canals in Los Angeles','Les canaux de Venice à Los Angeles',['venice canals','venice california','venice canal'])
]
HOTELS=[
('bel-air','Hotel Bel-Air',[
'https://www.dorchestercollection.com/los-angeles/hotel-bel-air',
'https://www.dorchestercollection.com/los-angeles/hotel-bel-air/rooms-and-suites',
'https://www.dorchestercollection.com/los-angeles/hotel-bel-air/gallery'],['dorchestercollection.com'],['bel-air','belair','hba']),
('beverly-hills','The Beverly Hills Hotel',[
'https://www.dorchestercollection.com/los-angeles/the-beverly-hills-hotel',
'https://www.dorchestercollection.com/los-angeles/the-beverly-hills-hotel/rooms-and-suites',
'https://www.dorchestercollection.com/los-angeles/the-beverly-hills-hotel/gallery'],['dorchestercollection.com'],['beverly-hills','bhh','pink-palace']),
('sunset-tower','Sunset Tower Hotel',[
'https://www.sunsettowerhotel.com/rooms-suites',
'https://www.sunsettowerhotel.com/gallery',
'https://www.sunsettowerhotel.com/'],['sunsettowerhotel.com'],['sunset-tower','sunsettower','tower']),
('shutters','Shutters on the Beach',[
'https://www.shuttersonthebeach.com/accommodations/',
'https://www.shuttersonthebeach.com/accommodations/ocean-front-suite/',
'https://www.shuttersonthebeach.com/gallery/'],['shuttersonthebeach.com'],['shutters','oceanfront','ocean-front','beach','santa-monica'])
]
def get(url,timeout=19):
 for i in range(2):
  try:
   r=SESSION.get(url,timeout=timeout)
   r.raise_for_status()
   return r
  except Exception:
   if i==1:raise
   time.sleep(1)
def clean(s):
 try:return BeautifulSoup(str(s or ''),'html.parser').get_text(' ',strip=True)[:280]
 except:return str(s or '')[:280]
def save(raw,path):
 im=Image.open(io.BytesIO(raw))
 im=ImageOps.exif_transpose(im).convert('RGB')
 if im.width<720 or im.height<440:raise ValueError('too-small '+str(im.size))
 original=list(im.size)
 im.thumbnail((1800,1400),Image.Resampling.LANCZOS)
 if sum(ImageStat.Stat(im.resize((110,80),Image.Resampling.LANCZOS)).stddev)/3<12:raise ValueError('flat image')
 path.parent.mkdir(parents=True,exist_ok=True)
 im.save(path,'WEBP',quality=82,method=5)
 b=path.read_bytes()
 if len(b)<18000:raise ValueError('placeholder')
 return dict(originalSize=original,outputSize=list(im.size),bytes=len(b),sha256=hashlib.sha256(b).hexdigest())
def commons_search(term):
 q=dict(action='query',generator='search',gsrsearch=term,gsrnamespace='6',gsrlimit='25',prop='imageinfo',iiprop='url|extmetadata|size|mime',iiurlwidth='1800',format='json',formatversion='2')
 return get(API+'?'+urllib.parse.urlencode(q),timeout=16).json().get('query',{}).get('pages',[])
def city_images():
 output=[];seen=set()
 for key,terms,en,fr,required in SCENES:
  found=None
  for term in terms:
   try:pages=commons_search(term)
   except Exception as e:print('Commons query failed',term,str(e)[:120],flush=True);continue
   for page in pages:
    info=(page.get('imageinfo') or [{}])[0];title=page.get('title','')
    if title in seen or info.get('width',0)<850 or info.get('height',0)<520:continue
    if not info.get('mime','').startswith('image/') or info.get('mime') in ('image/svg+xml','image/gif'):continue
    meta=info.get('extmetadata',{})
    desc=(title+' '+clean(meta.get('ImageDescription',{}).get('value',''))).lower()
    if not any(t in desc for t in required):continue
    licence=clean(meta.get('LicenseShortName',{}).get('value',''))
    if not (licence.startswith('CC BY') or licence in ('CC0','Public domain')):continue
    author=clean(meta.get('Artist',{}).get('value',''))
    if not author:continue
    url=info.get('thumburl') or info.get('url')
    try:
     dest=ROOT/'destination'/(key+'.webp')
     props=save(get(url,15).content,dest)
     found={**props,'key':key,'localPath':'/'+str(dest).removeprefix('public/'),
       'sourcePage':'https://commons.wikimedia.org/wiki/'+title.replace(' ','_'),
       'downloadUrl':url,'credit':author,'license':licence,
       'licenseUrl':clean(meta.get('LicenseUrl',{}).get('value','')) or 'https://creativecommons.org/licenses/',
       'status':'source_identified_private_preview','rightsEvidenceType':'wikimedia_cc_attribution',
       'commercialRightsCleared':True,'visuallyVerified':False,
       'frCaption':fr,'enCaption':en,'commonsTitle':title}
     seen.add(title);print('CITY',key,title,props['bytes'],flush=True);break
    except Exception as e:print('Reject city image',title,str(e)[:110],flush=True)
   if found:break
  if found:output.append(found)
  else:print('CITY MISSING',key,flush=True)
 return output
def candidates(page,soup):
 urls=[]
 for tag in soup.find_all(['img','source']):
  alt=clean(tag.get('alt','') or tag.get('title',''))
  for attr in ['data-src','data-lazy-src','data-original','src','data-srcset','srcset']:
   ss=tag.get(attr)
   if not ss:continue
   u=str(ss).split(',')[-1].strip().split(' ')[0]
   if not u.startswith('data:'):urls.append((urllib.parse.urljoin(page,html.unescape(u)),alt))
 for tag in soup.find_all('meta'):
  if tag.get('property') in ['og:image','twitter:image']:
   urls.append((urllib.parse.urljoin(page,tag.get('content','')),'Hotel page featured image'))
 for sc in soup.find_all('script',type='application/ld+json'):
  try:
   obj=json.loads(sc.string or sc.text)
   if isinstance(obj,dict) and isinstance(obj.get('image'),str):urls.append((urllib.parse.urljoin(page,obj['image']),'Hotel image'))
  except:pass
 return urls
def hotel_images():
 result=[]
 for key,name,pages,allowed,identity in HOTELS:
  choices=[];seen=set()
  for page in pages:
   try:
    soup=BeautifulSoup(get(page,12).text,'html.parser')
    urls=candidates(page,soup)
    for url,alt in urls:
     host=urllib.parse.urlparse(url).hostname or ''
     if not url.startswith('https://') or url in seen:continue
     seen.add(url)
     if not any(h in host for h in allowed+['cloudinary','akamai','cdn','cloudfront','contentful','imgix','wpengine','fastly','wp.com','s3.amazonaws','sanity','imagekit','azureedge','media.dorchestercollection.com']):continue
     u=url.lower(); label=(u+' '+alt.lower())
     if any(x in label for x in ('logo','favicon','icon','sprite','badge','map','headshot','portrait','team','chef','people','staff','awards','tripadvisor','svg','.gif','social-media')):continue
     if key=='bel-air' and any(x in label for x in ('beverly-hills-hotel','/bhh/','polo-lounge')):continue
     if key=='beverly-hills' and any(x in label for x in ('hotel-bel-air','/hba/','stone-canyon')):continue
     score=2+6*any(x in label for x in ('suite','room','pool','hotel','bedroom','lobby','bungalow','facade','terrace','garden','outdoor'))
     score+=6*any(x in label for x in identity)
     score+=3 if page==pages[0] else 0
     score-=3*any(x in label for x in ('dining','food','drink','restaurant','bar','menu'))
     choices.append((score,url,alt,page))
    print('HOTEL SEARCH',name,page,len(choices),flush=True)
   except Exception as e:print('HOTEL PAGE ERROR',name,page,str(e)[:130],flush=True)
  choices.sort(reverse=True)
  used_path=set();used_hash=set();saved=[]
  for score,url,alt,page in choices[:85]:
   if len(saved)>=3:break
   if score<2:continue
   canonical=urllib.parse.urlsplit(url).path.lower()
   canonical=re.sub(r'/styles/[^/]+/public/','/public/',canonical)
   if canonical in used_path:continue
   used_path.add(canonical)
   try:
    dest=ROOT/key/('view-'+str(len(saved)+1)+'.webp')
    props=save(get(url,9).content,dest)
    if props['sha256'] in used_hash:continue
    used_hash.add(props['sha256'])
    saved.append({**props,'key':'view-'+str(len(saved)+1),'propertyKey':key,'property':name,
      'localPath':'/'+str(dest).removeprefix('public/'),'sourcePage':page,
      'downloadUrl':url,'credit':name+' - official publisher photograph (creator licence not independently cleared)',
      'license':'Publisher photo; private owner Preview only, no independent commercial republication licence',
      'licenseUrl':page,'status':'source_identified_private_preview','rightsEvidenceType':'operator_publisher_not_commercially_cleared',
      'commercialRightsCleared':False,'visuallyVerified':False,
      'frCaption':name+' - photographie officielle, identification de la chambre à confirmer',
      'enCaption':name+' - official hotel photograph; individual room identity pending review','originalAlt':alt})
   except Exception as e:print('HOTEL IMAGE REJECTED',name,str(e)[:115],flush=True)
  result+=saved
  print('HOTEL SAVED',key,len(saved),'of 3',flush=True)
 return result
def main():
 city=city_images();hotels=hotel_images()
 out={'destination':'los-angeles','scope':'private_owner_noindex_preview',
      'note':'Publisher photos do not have independently cleared commercial reuse rights',
      'cityCount':len(city),'hotelCount':len(hotels),'destinationScenes':city,'hotels':hotels}
 OUT.parent.mkdir(parents=True,exist_ok=True)
 OUT.write_text(json.dumps(out,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
 print('LA PHOTO SUMMARY',len(city),len(hotels),flush=True)
 if len(city)<9 or len(hotels)<12:raise SystemExit('Los Angeles image QA pending: keep private; no Vercel trigger')
if __name__=='__main__':main()
