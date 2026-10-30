#!/usr/bin/env python3
"""Koh Yao Noi #62: accurate island media candidates and four CURRENT official hotels.
Create provenance, hash, contact sheet, and protected noindex review material.
Never claim copyright permission for hotel-publisher photos.
"""
import hashlib,html,io,json,pathlib,re,urllib.parse
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps,ImageDraw
B=pathlib.Path('public/images/travel/koh-yao-noi-premium')
S=requests.Session();S.headers.update({'User-Agent':'Bosphoras Luxury Stays (private editorial source verification)'})
SCENES=[
 ('scene-1','Koh Yao Noi, Limestone formations in Phang Nga Bay, Thailand.jpg','Koh Yao Noi · les îlots calcaires de la baie','Koh Yao Noi · limestone islands of Phang Nga Bay'),
 ('scene-2','Koh Yao Noi, Palm on the beach, Phang Nga Bay, Thailand.jpg','Koh Yao Noi · palmier et sable de la baie','Koh Yao Noi · shoreline palm and sand'),
 ('scene-3','Sunrise on the beach, Koh Yao Noi (island), Phang Nga Bay, Thailand.jpg',"L'aube se lève sur les îlots de la baie","Sunrise over the limestone islands"),
 ('scene-4','Koyao Island Resort Beach - panoramio.jpg','La plage de Koyao Island Resort','Koyao Island Resort beach'),
 ('scene-5','Pier in the NE corner of Yao Noi - panoramio.jpg',"L'embarcadère du nord-est de l'île",'The northeastern island pier'),
 ('scene-6','Palms in Koh Yao Noi, Phang Nga Bay, Thailand.jpg','La végétation littorale de Koh Yao Noi','The coastal palms of Koh Yao Noi'),
 ('scene-7','Koyao Island Resort from the beachfront - panoramio.jpg','La côte habitée et la mer à Koyao Island Resort','Island life and waterfront near Koyao Island Resort'),
 ('scene-8','Sunrise 2, Koh Yao Noi (island), Phang Nga Bay, Thailand.jpg',"Une seconde lumière d'aube sur Phang Nga Bay","Another dawn over Phang Nga Bay"),
 ('scene-9','Koh Yao Noi, Limestone formations of Phang Nga Bay, Thailand.jpg',"Koh Yao Noi · autres reliefs de la baie","Koh Yao Noi · another view of the limestone bay")
]
PROPERTIES=[
 ('six-senses','Six Senses Yao Noi','https://www.sixsenses.com/en/hotels-resorts/asia-the-pacific/thailand/yao-noi/'),
 ('cape-kudu','Cape Kudu Hotel','https://www.capekuduhotel.com/'),
 ('treehouse','TreeHouse Villas Koh Yao','https://www.treehouse-villas.com/'),
 ('nine-hornbills','9 Hornbills Tented Camp','https://9hornbills.com/')
]
def fetch(url,timeout=22):
 r=S.get(url,timeout=timeout);r.raise_for_status()
 if len(r.content)>15000000:raise ValueError('oversized')
 return r
def save(u,path):
 r=fetch(u)
 if 'text/html' in r.headers.get('content-type','').lower():raise ValueError('html')
 im=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content))).convert('RGB')
 orig=list(im.size)
 if im.width<770 or im.height<450:raise ValueError('too small')
 im.thumbnail((1600,1200),Image.Resampling.LANCZOS)
 pixels=hashlib.sha256(im.resize((48,48)).tobytes()).hexdigest()
 output=io.BytesIO();im.save(output,'WEBP',quality=85,method=4)
 b=output.getvalue()
 if len(b)<17000:raise ValueError('tiny')
 path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(b)
 return dict(originalSize=orig,outputSize=list(im.size),bytes=len(b),
 sha256=hashlib.sha256(b).hexdigest(),pixelFingerprint=pixels)
def text(htmlval):return BeautifulSoup(html.unescape(htmlval or ''),'html.parser').get_text(' ',strip=True)
def commons(t):
 key,title,fr,en=t
 req=fetch('https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode({
  'action':'query','prop':'imageinfo','format':'json','iiprop':'url|extmetadata','iiurlwidth':1600,'titles':'File:'+title
 })).json();pages=list(req['query']['pages'].values())
 if not pages or not pages[0].get('imageinfo'):raise ValueError('missing Commons '+title)
 info=pages[0]['imageinfo'][0];meta=info.get('extmetadata',{})
 lic=text(meta.get('LicenseShortName',{}).get('value',''))
 if not re.match(r'^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)',lic,re.I):raise ValueError('unsupported licence '+lic)
 source='https://commons.wikimedia.org/wiki/File:'+urllib.parse.quote(title.replace(' ','_'),safe='(),-._')
 u=info.get('thumburl') or info['url'];path=B/'destination'/(key+'.webp')
 props=save(u,path)
 return {**props,'key':key,'localPath':'/images/travel/koh-yao-noi-premium/destination/'+key+'.webp',
   'downloadUrl':u,'sourcePage':source,'credit':text(meta.get('Artist',{}).get('value','')) or 'Commons author in metadata',
   'license':lic,'licenseUrl':meta.get('LicenseUrl',{}).get('value','https://creativecommons.org/licenses/'),
   'commercialRightsCleared':True,'rightsEvidenceType':'wikimedia_license_metadata',
   'visuallyVerified':False,'status':'source_identified_pending_individual_visual_review',
   'frCaption':fr,'enCaption':en,'originalAlt':title}
def extract(page):
 try:
  r=fetch(page);soup=BeautifulSoup(r.text,'html.parser')
 except Exception as e:print('SOURCE_FAIL',page,str(e)[:100]);return []
 out=[];seen=set()
 def add(raw,alt):
  if not raw or raw.startswith('data:'):return
  u=urllib.parse.urljoin(page,html.unescape(raw).replace('\\/','/'))
  parts=urllib.parse.urlsplit(u);dom=parts.netloc.lower()
  if parts.scheme!='https' or not re.search(r'\.(jpg|jpeg|png|webp)(?:$|[?&#])',u,re.I):return
  if not any(x in dom for x in ('sixsenses.com','ihg.com','capekuduhotel.com','treehouse-villas.com','9hornbills.com','koyao.com','cloudinary.com','contentstack.io','serenatahotels.com')):return
  if u in seen:return
  seen.add(u);out.append((u,alt,page))
 for n in soup.find_all(['img','source']):
  alt=n.get('alt') or n.get('title') or ''
  for k in ('src','data-src','data-lazy-src','data-original','srcset','data-srcset','data-bg','data-image'):
   raw=n.get(k)
   if not raw:continue
   if 'srcset' in k:raw=str(raw).split(',')[-1].strip().split()[0]
   add(str(raw),alt)
 for n in soup.find_all('meta'):
  if n.get('property') in ('og:image','twitter:image'):add(n.get('content'),'official publisher hero')
 for z in re.findall(r'https?://[^"\\\s<>]+?\.(?:jpg|jpeg|webp|png)(?:\?[^"\\\s<>]*)?',r.text,re.I)[:300]:add(z,'embedded publisher photograph')
 print('SOURCE',page,'found',len(out),flush=True)
 return out
def score(p):
 u,alt,_=p;v=(u+' '+alt).lower()
 if any(x in v for x in ('favicon','logo','icon','avatar','badge','svg','map','award','seal','qr','placeholder','celebrity')):return -500
 s=3
 for token in ('villa','pool','resort','aerial','sea','bay','beach','restaurant','spa','hotel','treehouse','tent','hornbill','suite','room','view','gallery'):
  if token in v:s+=3
 return s
def hotel(group):
 key,name,url=group
 if key=='six-senses':
  # Three exact image identities from the Six Senses official Yao Noi gallery (media.sixsenses.com).
  pool=[
   ('https://media.sixsenses.com/B60H3R33/at/bfqgnx5ksxm76hj9rk6b3r6/The_View_Bedroom.jpg?fit=crop&height=900&width=1440','The View official villa bedroom',url),
   ('https://media.sixsenses.com/B60H3R33/at/jptqs2jq8sq2w3mqxjmqm5z/4_The_View_Phang_Nga_Bay.jpg?fit=crop&height=900&width=1440','The View private villa panorama',url),
   ('https://media.sixsenses.com/B60H3R33/at/37xpx73j563c4fzhwq6bjc5/yao-noi-thailand_The_View_Lazy_Trampoline_Net.jpg?fit=crop&height=900&width=1440','The View outdoor hammock over bay',url)
  ]
 elif key=='treehouse':
  pool=[
   ('https://www.treehouse-villas.com/wp-content/uploads/2025/11/06-TreeHouse-Villas_Hero-shot.jpg','Official TreeHouse Villas architecture in canopy',url),
   ('https://www.treehouse-villas.com/wp-content/uploads/2025/01/TreeHouse-Villas_Landscape-5.jpg','TreeHouse Villas authentic island resort landscape',url),
   ('https://www.treehouse-villas.com/wp-content/uploads/2025/01/TreeHouse-Villa-11.jpg','TreeHouse Villa room interior',url)
  ]
 else:pool=extract(url)
 if key=='nine-hornbills':pool+=extract('https://koyao.com/9hornbills')
 if key=='treehouse':pool+=extract('https://www.treehouse-villas.com/koh-yao/rooms-and-villas/')
 if key=='cape-kudu':pool+=extract('https://www.capekuduhotel.com/accommodation/')
 seen=set();pictures=[];errors=[]
 for u,alt,page in sorted(pool,key=score,reverse=True):
  if len(pictures)>=3:break
  if u in seen or score((u,alt,page))<3:continue
  seen.add(u)
  if re.search(r'/favicon|/logo|social-icon',u,re.I):continue
  namekey='view-'+str(len(pictures)+1);f=B/key/(namekey+'.webp')
  try:
   meta=save(u,f)
   if meta['pixelFingerprint'] in {p['pixelFingerprint'] for p in pictures}:f.unlink(missing_ok=True);continue
   pictures.append({**meta,'key':namekey,'propertyKey':key,'property':name,'localPath':'/images/travel/koh-yao-noi-premium/'+key+'/'+namekey+'.webp',
   'sourcePage':page,'downloadUrl':u,'credit':name+' official publisher; photographer rights not independently verified',
   'license':'Publisher image, no independent commercial republication rights.',
   'licenseUrl':page,'commercialRightsCleared':False,'rightsEvidenceType':'hotel_official_publisher_not_licensed',
   'visuallyVerified':False,'status':'source_identified_pending_individual_visual_review','originalAlt':alt,
   'frCaption':name+' · vue officielle à identifier précisément','enCaption':name+' · official property view pending manual review'})
   print('HOTEL_IMG',key,namekey,len(pictures),flush=True)
  except Exception as e:errors.append(str(e)[:100])
 return pictures,dict(property=name,candidates=len(pool),downloaded=len(pictures),errors=errors[:7])
def sheet(items):
 if not items:return
 W,H=440,305;cols=3;dst=Image.new('RGB',(W*cols,H*((len(items)+2)//cols)),(247,244,238));draw=ImageDraw.Draw(dst)
 for i,p in enumerate(items):
  f=pathlib.Path('public'+p['localPath']);img=Image.open(f).convert('RGB');img.thumbnail((420,245))
  x=(i%cols)*W+8;y=(i//cols)*H+5
  dst.paste(img,(x,y));draw.text((x,y+249),p.get('property','Koh Yao Noi')+' / '+p['key'],fill=(26,40,45))
  draw.text((x,y+270),p['sourcePage'][:50],fill=(70,80,90))
 dst.save('docs/travel-koh-yao-noi-contact-sheet.jpg','JPEG',quality=80)
def main():
 sc=[];errors=[]
 for a in SCENES:
  try:
   p=commons(a)
   if p['pixelFingerprint'] in {x['pixelFingerprint'] for x in sc}:raise ValueError('duplicate')
   sc.append(p);print('COMMONS',p['key'],p['credit'][:50],flush=True)
  except Exception as e:errors.append({'key':a[0],'error':str(e)[:200]})
 ht=[];stats=[]
 for t in PROPERTIES:
  p,s=hotel(t);ht+=p;stats.append(s)
 result={'destination':'koh-yao-noi','scope':'protected_owner_preview_only','rightsNotice':'Hotel images have no independent commercial redistribution authorisation.',
  'cityCount':len(sc),'hotelCount':len(ht),'destinationScenes':sc,'hotels':ht,
  'visualQA':'PENDING_INDIVIDUAL_MANUAL_REVIEW','publicUseApproved':False}
 pathlib.Path('data/travel/kohYaoNoiMediaCandidates.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
 pathlib.Path('docs/travel-koh-yao-noi-acquisition-report.json').write_text(json.dumps({'scenes':len(sc),'hotels':len(ht),'hotelStats':stats,'errors':errors,'visualReviewApproved':False},ensure_ascii=False,indent=2)+'\n')
 sheet(sc+ht)
 print('KOH_YAO_NOI_SOURCE_RESULT',len(sc),len(ht),'required 9+12',flush=True)
if __name__=='__main__':main()
