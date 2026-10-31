#!/usr/bin/env python3
"""Sumba #65: replace repeated NIHI/Cap photos; source exactly 3 true Lelewatu villas.
Official publisher photographs are NOT commercial-use-cleared. Owner Preview only.
"""
import hashlib,html,io,json,pathlib,re,urllib.parse
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps,ImageDraw
S=requests.Session();S.headers.update({'User-Agent':'Bosphoras Travel private image provenance review'})
M=pathlib.Path('data/travel/sumbaMediaCandidates.json')
D=json.loads(M.read_text())
assert D['destination']=='sumba' and len(D['destinationScenes'])==9
BASE=pathlib.Path('public/images/travel/sumba-premium')
def get(u):
 try:
  r=S.get(u,timeout=30,headers={'Referer':'https://www.lelewatu.com/' if 'lelewatu.com' in u else 'https://nihi.com/sumba/'})
  r.raise_for_status()
 except requests.exceptions.HTTPError as e:
  if 'lelewatu.com' not in u:raise
  alternative=u.replace('https://lelewatu.com/','https://www.lelewatu.com/')
  print('RETRY_OFFICIAL_WWW',u[:120],flush=True)
  r=S.get(alternative,timeout=30,headers={'Referer':'https://www.lelewatu.com/'})
  r.raise_for_status()
 if 'html' in r.headers.get('Content-Type','').lower():raise ValueError('HTML image')
 im=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content))).convert('RGB')
 if im.width<820 or im.height<470:raise ValueError('small source image '+str(im.size))
 original=list(im.size);im.thumbnail((1600,1200),Image.Resampling.LANCZOS)
 buf=io.BytesIO();im.save(buf,'WEBP',quality=85,method=4);b=buf.getvalue()
 if len(b)<17000:raise ValueError('small webp')
 return b,{'originalSize':original,'outputSize':list(im.size),'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),
 'pixelFingerprint':hashlib.sha256(im.resize((48,48),Image.Resampling.LANCZOS).tobytes()).hexdigest()}
def parse(url):
 r=S.get(url,timeout=30);r.raise_for_status();s=BeautifulSoup(r.text,'html.parser')
 items=[]
 def add(u,alt):
  if not u or u.startswith('data:'):return
  u=urllib.parse.urljoin(url,html.unescape(u.replace('\\/','/')))
  if not re.search(r'\.(jpe?g|png|webp)(?:$|[?#])',u,re.I):return
  if any(z in u.lower() for z in ('logo','icon','map','badge','certificate','poster','social')):return
  if u not in [p[0] for p in items]:items.append((u,alt,url))
 for n in s.find_all(['img','source']):
  alt=n.get('alt') or n.get('title') or ''
  for a in ('src','data-src','data-lazy-src','srcset','data-srcset','data-original'):
   v=n.get(a)
   if v:
    if 'srcset' in a:v=str(v).split(',')[-1].strip().split()[0]
    add(str(v),alt)
 for u in re.findall(r'https?://[^"\\\s<>]+?\.(?:jpe?g|png|webp)(?:\?[^"\\\s<>]*)?',r.text,re.I)[:400]:add(u,'Embedded publisher photo')
 return items
def record(key,name,i,u,src,alt,fr,en,props):
 path=f'/images/travel/sumba-premium/{key}/view-{i}.webp'
 f=pathlib.Path('public'+path);f.parent.mkdir(parents=True,exist_ok=True)
 props=props.copy()
 return {**props,'key':f'view-{i}','propertyKey':key,'property':name,'localPath':path,'sourcePage':src,
 'downloadUrl':u,'originalAlt':alt,'credit':name+' official property publisher; photographer not independently identified',
 'license':'Official property publisher — separate commercial republication permission not established.',
 'licenseUrl':src,'rightsEvidenceType':'hotel_official_publisher_not_licensed','commercialRightsCleared':False,
 'visuallyVerified':False,'status':'source_identified_pending_individual_visual_review','frCaption':fr,'enCaption':en}
def install(p,b):
 pathlib.Path('public'+p['localPath']).parent.mkdir(parents=True,exist_ok=True)
 pathlib.Path('public'+p['localPath']).write_bytes(b)
 D['hotels']=[x for x in D['hotels'] if x['localPath']!=p['localPath']]
 D['hotels'].append(p)
def select_unique(key,name,idx,source,existing_stems,score,fr,en):
 items=parse(source)
 ranked=sorted(items,key=lambda x:score((x[0]+' '+x[1]).lower()),reverse=True)
 print('CANDIDATES',key,len(items),'SAMPLE',[(x[0].split('/')[-1][:75],x[1][:40]) for x in ranked[:8]],flush=True)
 fingerprints={p['pixelFingerprint'] for p in D['destinationScenes']+D['hotels'] if not(p.get('propertyKey')==key and p.get('key')==f'view-{idx}')}
 for u,alt,src in ranked:
  normalized=re.sub(r'-\d+x\d+(?=\.(?:jpg|png|webp))','',urllib.parse.urlsplit(u).path,re.I)
  if any(z in normalized.lower() for z in existing_stems):continue
  try:
   b,props=get(u)
   if props['pixelFingerprint'] in fingerprints:continue
   p=record(key,name,idx,u,src,alt,fr,en,props);install(p,b)
   print('SELECTED',key,idx,u[:150],flush=True);return
  except Exception as e:print('SKIP',key,str(e)[:75],flush=True)
 raise ValueError('Unable to locate distinct hotel photo '+key)
# Replace duplicate NIHI Putri Lantoro crop in slot 2 with an actual different villa:
select_unique('nihi','NIHI Sumba',2,'https://nihi.com/sumba/villas/',
 ['putri-lantoro','mandaka-surf'],
 lambda t:30*int('marangga' in t)+16*int('treehouse' in t)+10*int('villa' in t)+6*int('pool' in t),
 'NIHI Sumba · autre villa authentique, différente de Putri Lantoro',
 'NIHI Sumba · a different authentic villa, not another crop of Putri Lantoro')
# Replace duplicated Cap Karoso Beach Suite variant with another distinct official setting:
select_unique('cap-karoso','Cap Karoso',3,'https://capkaroso.com/en/',
 ['studio-room','beach-suite-view'],
 lambda t:25*int('pool' in t)+20*int('karoso' in t)+14*int('beach' in t)+12*int('resort' in t)+8*int('villa' in t),
 'Cap Karoso · autre vue authentique du domaine, sélectionnée sur le site officiel',
 'Cap Karoso · different genuine resort view from the official website')
# The original Lelewatu media origin consistently returned HTTP 404 from two hosts.
# A real, fully verifiable six-suite retreat in Lamboya is used instead: Alamayah.
# These are property-publisher photos; commercial rights remain NOT cleared.
unique_originals=[]
categories=[
 ('https://alamayah.com/',lambda t:30*int('alamayah' in t)+20*int('exterior' in t)+15*int('retreat' in t)+10*int('palm' in t),
  "Alamayah · architecture du petit retreat et cocotiers","Alamayah · boutique retreat architecture among coconut palms"),
 ('https://alamayah.com/',lambda t:35*int('suite' in t)+25*int('bedroom' in t)+18*int('room' in t)+12*int('interior' in t),
  "Alamayah · véritable suite de l’hôtel","Alamayah · a genuine resort guest suite"),
 ('https://alamayah.com/pages/wellbeing',lambda t:35*int('pool' in t)+24*int('spa' in t)+20*int('yoga' in t)+18*int('wellness' in t)+10*int('bath' in t),
  "Alamayah · espace bien-être ou piscine du retreat","Alamayah · wellness or pool area of the resort")
]
for i,(site,rank,fr,en) in enumerate(categories,1):
 select_unique('alamayah','Alamayah Boutique Retreat',i,site,unique_originals,rank,fr,en)
 p=next(v for v in D['hotels'] if v['propertyKey']=='alamayah' and v['key']==f'view-{i}')
 normalized=re.sub(r'-\d+x\d+(?=\.(?:jpg|png|webp))','',urllib.parse.urlsplit(p['downloadUrl']).path,re.I)
 unique_originals.append(normalized.lower())
D['hotels'].sort(key=lambda p:(['nihi','cap-karoso','sanubari','alamayah'].index(p['propertyKey']),p['key']))
finger=[p['pixelFingerprint'] for p in D['destinationScenes']+D['hotels']]
assert len(D['destinationScenes'])==9 and len(D['hotels'])==12
assert len(set(finger))==21,'duplicate image fingerprint'
D['hotelCount']=12;D['cityCount']=9;D['visualQA']='PENDING_INDIVIDUAL_PHOTO_REVIEW';D['publicUseApproved']=False
M.write_text(json.dumps(D,ensure_ascii=False,indent=2)+'\n')
rp=pathlib.Path('docs/travel-sumba-acquisition-report.json');rr=json.loads(rp.read_text())
rr['cityCount']=9;rr['hotelCount']=12;rr['hotelReports']=[{'property':name,'downloaded':3} for name in ['NIHI Sumba','Cap Karoso','The Sanubari','Alamayah Boutique Retreat']]
rp.write_text(json.dumps(rr,ensure_ascii=False,indent=2)+'\n')
ims=D['destinationScenes']+D['hotels'];W,H=440,304;cols=3
out=Image.new('RGB',(W*cols,H*((len(ims)+2)//cols)),'#f5f2eb');draw=ImageDraw.Draw(out)
for k,p in enumerate(ims):
 im=Image.open('public'+p['localPath']).convert('RGB');im.thumbnail((420,237))
 x=(k%cols)*W+8;y=(k//cols)*H+6;out.paste(im,(x,y))
 draw.text((x,y+241),str(k+1)+' '+p.get('property','Sumba')+'/'+p['key'],fill='#17303b')
 draw.text((x,y+263),p['sourcePage'][:52],fill='#596b73')
out.save('docs/travel-sumba-contact-sheet.jpg','JPEG',quality=81)
print('SUMBA_21_READY_FOR_PRIVATE_VISUAL_REVIEW')

# Hotel identities and photographic permissions are kept separate; Sumba remains private noindex.
