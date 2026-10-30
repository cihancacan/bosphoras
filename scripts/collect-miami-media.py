#!/usr/bin/env python3
"""Fetch ONLY source-identifiable original Miami images for private owner Preview.
City: Wikimedia Commons CC-BY/CC-BY-SA/CC0 with author and source.
Hotels: publishers' own websites, commercial republication licence NOT proven.
No hotlinks or random stock photos. Never mark hotel images commercially cleared.
"""
import io, re, json, hashlib, html, os, pathlib, time, urllib.parse
import requests
from PIL import Image,ImageOps,ImageStat
from bs4 import BeautifulSoup

ROOT=pathlib.Path('public/images/travel/miami-premium')
OUT=pathlib.Path('data/travel/miamiMediaCandidates.json')
SESSION=requests.Session()
SESSION.headers.update({'User-Agent':'BosphorasLuxuryStaysEditorial/1.0 (private attributed editorial preview; contact: info@bosphoras.com)','Accept':'image/avif,image/webp,image/*;q=0.8,*/*;q=0.5'})
API='https://commons.wikimedia.org/w/api.php'
QUESTIONS=[
 ('scene-1','Miami Beach aerial coastline South Beach skyline','Aerial view of Miami Beach and its Atlantic coastline','Vue aérienne de Miami Beach et de la côte atlantique'),
 ('scene-2','South Beach Miami Florida Art Deco Ocean Drive','Art Deco streets in South Beach','Architecture Art déco de South Beach'),
 ('scene-3','Mid Beach Miami Beach ocean beach Collins Avenue','Miami Beach Atlantic shore','Le front de mer Atlantique à Miami Beach'),
 ('scene-4','Surfside Miami Florida beach coastline','Quiet Surfside coastline near Miami Beach','Littoral paisible de Surfside'),
 ('scene-5','Brickell skyline Miami Florida Biscayne Bay','Brickell towers rising beside Biscayne Bay','La skyline de Brickell sur la baie'),
 ('scene-6','Wynwood Miami murals colorful street','Wynwood street art, Miami','Street art dans le quartier de Wynwood'),
 ('scene-7','Miami Biscayne Bay skyline sunset evening','Miami skyline across Biscayne Bay','Skyline de Miami depuis la baie'),
 ('scene-8','Miami Design District Florida buildings design','Architecture of the Miami Design District','L’architecture du Miami Design District'),
 ('scene-9','South Pointe Park Miami Beach ocean','South Pointe Park and Miami Beach shoreline','South Pointe Park et le rivage de Miami Beach')
]
HOTELS=[
 ('setai','The Setai, Miami Beach',['https://www.thesetaihotel.com/','https://www.thesetaihotel.com/rooms-and-suites'],['thesetaihotel.com']),
 ('faena','Faena Hotel Miami Beach',['https://www.faena.com/miami-beach/accommodations','https://www.faena.com/miami-beach'],['faena.com']),
 ('edition','The Miami Beach EDITION',['https://www.editionhotels.com/miami-beach/rooms-and-suites/','https://www.editionhotels.com/miami-beach/'],['editionhotels.com']),
 ('surf-club','Four Seasons Hotel at The Surf Club',['https://www.fourseasons.com/surfside/accommodations/','https://www.fourseasons.com/surfside/'],['fourseasons.com'])
]
def get(url,timeout=28):
 for attempt in range(3):
  try:
   r=SESSION.get(url,timeout=timeout)
   r.raise_for_status()
   return r
  except requests.RequestException:
   if attempt==2: raise
   time.sleep(1.5*(attempt+1))
def safe(s):return BeautifulSoup(str(s or ''),'html.parser').get_text(' ',strip=True)[:220]
def store(raw,path):
 im=Image.open(io.BytesIO(raw))
 im=ImageOps.exif_transpose(im).convert('RGB')
 if im.width<650 or im.height<420:raise ValueError('too small '+str(im.size))
 dims=list(im.size)
 im.thumbnail((1800,1450),Image.Resampling.LANCZOS)
 v=ImageStat.Stat(im.resize((120,90),Image.Resampling.LANCZOS)).stddev
 if sum(v)/3<11:raise ValueError('flat placeholder')
 path.parent.mkdir(parents=True,exist_ok=True)
 im.save(path,'WEBP',quality=83,method=5)
 raw2=path.read_bytes()
 if len(raw2)<16000:raise ValueError('too small webp')
 return dict(originalSize=dims,outputSize=list(im.size),bytes=len(raw2),sha256=hashlib.sha256(raw2).hexdigest())
def commons_candidates(q):
 params=dict(action='query',generator='search',gsrsearch=q,gsrnamespace='6',gsrlimit='20',prop='imageinfo',iiprop='url|extmetadata|size|mime',iiurlwidth='1600',format='json',formatversion='2')
 j=get(API+'?'+urllib.parse.urlencode(params)).json()
 pages=j.get('query',{}).get('pages',[])
 return [p for p in pages if p.get('imageinfo')]
def city():
 rows=[];used=set()
 for key,q,en,fr in QUESTIONS:
  search=[q]
  if key=='scene-4':search+=['Surfside beach Florida Miami','Surfside Florida coast']
  if key=='scene-8':search+=['Miami Design District buildings','Miami Florida design district']
  if key=='scene-6':search+=['Wynwood Walls Miami','Wynwood Miami mural']
  if key=='scene-7':search+=['Miami skyline Biscayne Bay','Downtown Miami skyline']
  if key=='scene-1':search+=['Miami beach coastline aerial','South Beach Miami aerial']
  item=None
  for term in search:
   try:pages=commons_candidates(term)
   except Exception as e: print('Commons search failed',term,str(e)[:180],flush=True);continue
   for p in pages:
    ii=p['imageinfo'][0]; meta=ii.get('extmetadata',{})
    mime=ii.get('mime','');title=p.get('title','')
    if not mime.startswith('image/') or 'svg' in mime or 'gif' in mime:continue
    if ii.get('width',0)<700 or ii.get('height',0)<480:continue
    text=(title+' '+safe(meta.get('ImageDescription',{}).get('value',''))).lower()
    if not any(t in text for t in ['miami','south beach','surfside','wynwood','brickell','biscayne']):continue
    license=safe(meta.get('LicenseShortName',{}).get('value',''))
    if not (license.startswith('CC BY') or license in ('CC0','Public domain')):continue
    if key=='scene-6' and not any(x in text for x in ('wynwood','mural','street art')):continue
    if key=='scene-8' and not any(x in text for x in ('design district','miami design','design district')):continue
    if key=='scene-4' and 'surfside' not in text:continue
    if title in used:continue
    artist=safe(meta.get('Artist',{}).get('value','')) or 'Wikimedia Commons contributor (inspect author metadata)'
    if artist.startswith('Wikimedia Commons contributor'):continue
    uri=ii.get('thumburl') or ii.get('url')
    try:
     path=ROOT/'destination'/(key+'.webp')
     metadata=store(get(uri).content,path)
     item={**metadata,'key':key,'localPath':'/'+str(path).removeprefix('public/'),
      'sourcePage':'https://commons.wikimedia.org/wiki/'+title.replace(' ','_'),
      'downloadUrl':uri,'credit':artist,'license':license,
      'licenseUrl':safe(meta.get('LicenseUrl',{}).get('value','')) or 'https://creativecommons.org/licenses/',
      'commercialRightsCleared':True,'rightsEvidenceType':'wikimedia_cc_attribution',
      'status':'source_identified_private_preview','visuallyVerified':False,
      'frCaption':fr,'enCaption':en,'commonsTitle':title}
     used.add(title);break
    except Exception as e:print('Reject Commons',title,str(e)[:150],flush=True)
   if item:break
  if item:rows.append(item);print('City',key,item['commonsTitle'],metadata['bytes'],flush=True)
  else:print('CITY IMAGE MISSING',key,flush=True)
 return rows
def image_sources(page,soup):
 urls=[]
 for tag in soup.find_all(['img','source']):
  alt=str(tag.get('alt',''))+' '+str(tag.get('title',''))
  for attr in ['data-src','src','data-lazy-src','data-original','data-srcset','srcset']:
   s=tag.get(attr) or ''
   if not s:continue
   candidate=str(s).split(',')[-1].strip().split(' ')[0]
   if candidate.startswith('data:'):continue
   urls.append((urllib.parse.urljoin(page,html.unescape(candidate)),alt))
 for tag in soup.find_all('meta'):
  if tag.get('property') in ['og:image','twitter:image']:
   urls.append((urllib.parse.urljoin(page,tag.get('content','')),'Official hotel hero'))
 for j in soup.find_all('script',type='application/ld+json'):
  try:
   data=json.loads(j.string or j.text)
   if isinstance(data,dict) and isinstance(data.get('image'),str):urls.append((urllib.parse.urljoin(page,data['image']),'Official hotel image'))
  except:pass
 return urls
def hotels():
 rows=[]
 for key,name,pages,allow in HOTELS:
  candidates=[];known=set()
  for page in pages:
   try:
    soup=BeautifulSoup(get(page).text,'html.parser')
    for url,alt in image_sources(page,soup):
     host=urllib.parse.urlparse(url).hostname or ''
     if not url.startswith('http') or url in known:continue
     known.add(url)
     if any(x in url.lower() for x in ['logo','icon','favicon','arrow','flag','badge','award','svg','avatar','map','pixel','gif','youtube']):continue
     if not any(t in host for t in [*allow,'cdn','cloudinary','imgix','contentful','s3.amazonaws','cloudfront','fastly','prismic','wpengine','akamai','sanity','marriott','imagekit','azureedge']):continue
     low=(url+' '+alt).lower()
     score=8*any(s in low for s in ('suite','guestroom','bedroom','hotel','resort','room','lobby'))
     score+=5*any(s in low for s in ('ocean','pool','terrace','beach','surf','faena','setai','edition','four-seasons'))
     score+=2 if page==pages[0] else 0
     score-=8*any(s in low for s in ('portrait','food','cocktail','dish','wine','team','face','headshot','chef'))
     candidates.append((score,url,alt,page))
    print(name,'candidate page',page,'=',len(candidates),flush=True)
   except Exception as e:print(name,'website inaccessible',str(e)[:160],flush=True)
  candidates.sort(key=lambda x:-x[0])
  used=set();digests=set();saved=[]
  for score,url,alt,page in candidates:
   if len(saved)>=3:break
   if score<0:continue
   canonical=urllib.parse.urlsplit(url).path.lower()
   if canonical in used:continue
   used.add(canonical)
   try:
    raw=get(url,17).content
    path=ROOT/key/('view-'+str(len(saved)+1)+'.webp')
    meta=store(raw,path)
    if meta['sha256'] in digests:continue
    digests.add(meta['sha256'])
    saved.append({**meta,'key':'view-'+str(len(saved)+1),'propertyKey':key,'property':name,
       'localPath':'/'+str(path).removeprefix('public/'),'sourcePage':page,
       'downloadUrl':url,'credit':name+' — original hotel publisher (creator licence unverified)',
       'license':'Hotel publisher media; private owner preview only, rights not independently cleared.',
       'licenseUrl':page,'status':'source_identified_private_preview',
       'commercialRightsCleared':False,'rightsEvidenceType':'operator_publisher_not_commercially_cleared',
       'visuallyVerified':False,'frCaption':name+' · photographie de l’établissement (vérification visuelle requise)',
       'enCaption':name+' · property publisher photograph (visual approval pending)','originalAlt':alt[:200]})
   except Exception as e:print('Hotel photo reject',name,str(e)[:110],flush=True)
  print('HOTEL',name,'acquired',len(saved),'of 3',flush=True)
  rows.extend(saved)
 return rows
def main():
 cityPhotos=city();hotelPhotos=hotels()
 out={'destination':'miami','scope':'owner_noindex_preview','note':'Hotel publisher reuse rights unverified; review each photo, no production indexing',
      'cityCount':len(cityPhotos),'hotelCount':len(hotelPhotos),'destinationScenes':cityPhotos,'hotels':hotelPhotos}
 OUT.parent.mkdir(parents=True,exist_ok=True)
 OUT.write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 print('SUMMARY',len(cityPhotos),'city views and',len(hotelPhotos),'hotel images',flush=True)
 if len(cityPhotos)<7: raise SystemExit('Insufficient authentic Miami CC landscape photographs; no release')
if __name__=='__main__':main()
