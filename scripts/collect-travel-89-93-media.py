#!/usr/bin/env python3
"""Collect official-publisher photo CANDIDATES only; no final guide registration.
Owner states permission to use photos. Independently verify identity and credits before release.
"""
import hashlib, html, io, json, re, threading
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from urllib.parse import urljoin, urlparse, unquote
import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageOps, ImageStat, ImageDraw

Image.MAX_IMAGE_PIXELS=75_000_000
CONFIG=json.loads(Path('data/travel/media89to93Sources.json').read_text())
ROOT=Path('public/images/travel')
REPORT=Path('data/travel/media89to93Candidates.json')
THREAD=threading.local()
BAD=re.compile(r'logo|favicon|sprite|placeholder|avatar|cookie|badge|award|tracking|qr.code|icon|map[._/-]|banner.ad|newsletter|social.share|\.svg|\.gif|\.pdf|\.mp4',re.I)
ROOM=re.compile(r'bedroom|guest.?room|suite|king.?room|deluxe|premier|accommodation|chambre|habita|camera|zimmer',re.I)
EXTERIOR=re.compile(r'exterior|facade|façade|aerial|arrival|entrance|building|front.?view|panorama|hotel.?view',re.I)
FACILITY=re.compile(r'pool|spa|lobby|terrace|garden|lounge|courtyard|conservatory|piscin',re.I)
OTHER=re.compile(r'chef|cocktail|menu|dish|food|wine|drink|wedding|meeting|conference|portrait|staff|person|model|gift|brochure|floor.?plan|render|illustration|virtual.?tour|360.?tour|video',re.I)
CDN=('cloudinary.com','imgix.net','cloudfront.net','akamaihd.net','contentful.com','ctfassets.net','s3.amazonaws.com','scene7.com','adobeaemcloud.com','simpleviewinc.com','simpleviewcms.com','simpleviewcdn.com','sanity.io','squarespace-cdn.com','wixstatic.com','webflow.com','cdn-website.com','imgix.com','fastly.net','azureedge.net','sitecorecontenthub.cloud','digitaloceanspaces.com')
def get(url, limit=24_000_000):
 if urlparse(url).scheme!='https': raise ValueError('not HTTPS')
 if not hasattr(THREAD,'session'):
  THREAD.session=requests.Session()
  THREAD.session.headers.update({'User-Agent':'BosphorasTravelMediaReview/1.0 (official publisher photo sourcing)','Accept':'text/html,application/xhtml+xml,image/avif,image/webp,image/jpeg,image/png,*/*'})
 with THREAD.session.get(url,timeout=(8,16),stream=True) as r:
  r.raise_for_status()
  if urlparse(r.url).scheme!='https':raise ValueError('insecure redirect')
  chunks=[];n=0
  for part in r.iter_content(65536):
   n+=len(part)
   if n>limit: raise ValueError('response too large')
   chunks.append(part)
  return r.url,b''.join(chunks)
def hostmatch(host,root):
 return host==root or host.endswith('.'+root)
def domain(url):
 host=urlparse(url).hostname or ''
 return host.removeprefix('www.')
def publisher_cdn(host,pagehost):
 return ((hostmatch(pagehost,'visitbritain.com') and host=='dam-cdn.vb0.orangelogic.com') or
         (hostmatch(pagehost,'thesavoylondon.com') and hostmatch(host,'website-files.com')))
def collect_pages(pages):
 result=[];errors=[];seen=set()
 for page in pages:
  try:
   final,raw=get(page,12_000_000)
   soup=BeautifulSoup(raw,'html.parser'); pairs=[]
   for tag in soup.find_all(['img','source','meta']):
    if tag.name=='meta' and tag.get('property') not in ('og:image','og:image:secure_url') and tag.get('name')!='twitter:image':continue
    alt=tag.get('alt') or tag.get('title') or ''
    parent=tag.find_parent('figure')
    cap=parent.find('figcaption') if parent else None
    credit=cap.get_text(' ',strip=True)[:350] if cap else ''
    if not alt and tag.parent:
     alt=tag.parent.get('aria-label') or tag.parent.get('title') or ''
    if tag.name=='source' and tag.parent:
     img=tag.parent.find('img');alt=alt or (img.get('alt','') if img else '')
    for attr in ('src','data-src','data-lazy-src','data-original','data-image','data-url','data-full','data-large','data-lazy','srcset','data-srcset','content'):
     value=tag.get(attr)
     if not isinstance(value,str):continue
     if 'srcset' in attr:
      variants=[v.strip().split()[0] for v in value.split(',') if v.strip()]
      value=variants[-1] if variants else ''
     pairs.append((value,alt,credit))
   rawtext=html.unescape(raw.decode('utf-8','replace')).replace('\\/','/').replace('\\u0026','&')
   for url in re.findall(r'https?://[^\s"<>\\]+?\.(?:jpe?g|webp|png|avif)(?:\?[^\s"<>\\]*)?',rawtext,re.I):
    pairs.append((url,'',''))
   for path,alt,credit in pairs:
    if not path or path.startswith(('data:','javascript:','#')):continue
    path=html.unescape(path)
    # Simpleview publishes transformation-relative paths that belong to its image CDN.
    if re.match(r'^(?:[a-z]_[^/]+/)+v1/clients/',path) and hostmatch(domain(final),'visitlasvegas.com'):
     path='https://assets.simpleviewcms.com/simpleview/image/upload/'+path
    u=urljoin(final,path);u=u.replace(' ','%20')
    h=domain(u); pagehost=domain(final)
    if not (hostmatch(h,pagehost) or hostmatch(pagehost,h) or any(hostmatch(h,c) for c in CDN) or publisher_cdn(h,pagehost) or h.split('.')[-2:]==pagehost.split('.')[-2:]):continue
    if BAD.search(u+' '+alt) or not (publisher_cdn(h,pagehost) or re.search(r'jpe?g|webp|png|avif|image|media|photo|asset|/img/',u,re.I)):continue
    identity=re.sub(r'[-_]\d{2,4}x\d{2,4}(?=\.)','',u.split('?')[0],flags=re.I)
    if identity in seen:continue
    seen.add(identity)
    result.append({'url':u,'sourcePage':final,'originalAlt':str(alt)[:350],'originalCaption':credit})
   print('SOURCE',page,'candidates',len(result),flush=True)
  except Exception as e:
   errors.append({'page':page,'error':str(e)[:300]});print('PAGE_GAP',page,str(e)[:200],flush=True)
 return result,errors
def pick(candidates,patterns,folder,prefix,publisher,property_name=None,existing=(),avoid=()):
 results=list(existing)
 used={r['sourceRequestedUrl'] for r in list(existing)+list(avoid)}
 fingerprints=[int(r['pixelFingerprint'],16) for r in existing]
 errors=[];seen_bytes={r['sourceSHA256'] for r in existing}
 next_index=max([int(p.stem.rsplit('-',1)[-1]) for p in folder.glob(prefix+'-*.webp') if p.stem.rsplit('-',1)[-1].isdigit()]+[0])+1
 patterns=[p for p in patterns if p not in {r.get('candidateSubject') for r in existing}]
 for pattern in patterns:
  ranked=[]
  for r in candidates:
   label=unquote(r['url']+' '+r['originalAlt']+' '+r['originalCaption'])
   if OTHER.search(label) or not re.search(pattern,label,re.I):continue
   if not property_name and re.search(r'selfie|group of friends|tourist[s]? (?:in|at|admiring|taking)|people (?:walking|buying|standing)|friends buying|person (?:in|standing|riding)|portrait',r['originalAlt'],re.I):continue
   if property_name and re.search(r'il.palazzetto|salon.?entrance|registration desk|/salon/|(?:beauty|hair).?salon',label,re.I):continue
   if property_name=='Wynn Las Vegas' and re.search(r'\bencore\b',label,re.I):continue
   if property_name and re.search(r'sant.?pau|/dining/|/restaurants?/|city.?attraction|city.?guide|/explore/|destination.?guide',label,re.I):continue
   if property_name and pattern==EXTERIOR.pattern and (ROOM.search(label) or re.search(r'\b(?:lobby|salon|spa|interior|restaurant|bar|terrace|reception|registration|desk)\b',label,re.I)):continue
   if property_name and pattern==FACILITY.pattern and ROOM.search(label):continue
   # Group-wide galleries require property identity in the actual asset label.
   if property_name and (('press.mandarinoriental.com' in r['sourcePage'] and 'barcelona' not in label.lower()) or ('leblancsparesorts.com/gallery' in r['sourcePage'] and 'cancun' not in label.lower() and 'cancún' not in label.lower())):continue
   score=8*bool(re.search(pattern,r['originalAlt'],re.I))+4*bool(re.search(pattern,unquote(r['url']),re.I))+2*bool(r['originalCaption'])
   if re.search(r'night|dusk|sunset|evening|nuit|notte',label,re.I):score-=3
   ranked.append((score,r))
  ranked.sort(key=lambda x:-x[0])
  for _,r in ranked[:18]:
   if r['url'] in used:continue
   used.add(r['url'])
   try:
    resolved,raw=get(r['url'])
    with Image.open(io.BytesIO(raw)) as original:
     im=ImageOps.exif_transpose(original).convert('RGB')
    w,h=im.size
    if w<800 or h<450 or not 1.05<=w/h<=3.2:continue
    sample=im.resize((9,8),Image.Resampling.LANCZOS).convert('L')
    pix=list(sample.getdata()); dh=sum((1<<i)*int(pix[(i//8)*9+i%8]>pix[(i//8)*9+i%8+1]) for i in range(64))
    if any((dh^old).bit_count()<11 for old in fingerprints):continue
    if sum(ImageStat.Stat(im.resize((100,100))).stddev)/3<14:continue
    sourcehash=hashlib.sha256(raw).hexdigest()
    if sourcehash in seen_bytes:continue
    # Local images: 1600px hero; 1280px all other photographs; never upscale.
    maxsize=(1600,1100) if not property_name and not results else (1280,850)
    im.thumbnail(maxsize,Image.Resampling.LANCZOS)
    buf=io.BytesIO()
    for quality in (82,78,74,70):
     buf=io.BytesIO();im.save(buf,'WEBP',quality=quality,method=6)
     if len(buf.getvalue())<=260000:break
    b=buf.getvalue()
    if len(b)<12000:continue
    key=f'{prefix}-{next_index}'; dest=folder/f'{key}.webp'
    dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(b)
    seen_bytes.add(sourcehash);fingerprints.append(dh)
    row={'key':key,'sourcePage':r['sourcePage'],'sourceResolvedUrl':resolved,'sourceRequestedUrl':r['url'],'originalAlt':r['originalAlt'],'originalCaption':r['originalCaption'],'credit':publisher,'publisher':publisher,'hotel':property_name,'localPath':'/'+str(dest).removeprefix('public/'),'sourceSHA256':sourcehash,'webpSHA256':hashlib.sha256(b).hexdigest(),'sourcePixels':[w,h],'webpPixels':list(im.size),'webpBytes':len(b),'pixelFingerprint':f'{dh:016x}','candidateSubject':pattern,'rightsEvidenceType':'owner declaration of permission; original source and caption retained; individual licence and named photo credit must be confirmed','ownerPermissionDeclared':True,'commercialRightsCleared':False,'visuallyVerified':False,'previewVisualApproved':False,'status':'candidate_pending_visual_review_and_credit'}
    results.append(row)
    next_index+=1
    print('WEBP',property_name or publisher,key,w,h,len(b),flush=True)
    break
   except Exception as e:
    errors.append({'url':r['url'],'error':str(e)[:180]})
  else: print('MISSING_SUBJECT',property_name or publisher,pattern,flush=True)
 return results,errors
def city_job(c):
 base=ROOT/(c['slug']+'-premium')
 old=PREVIOUS.get(c['slug'],{})
 existing=[r for r in old.get('destinationScenes',[]) if not (c['slug']=='las-vegas' and r['key']=='scene-5') and not (c['slug']=='cancun' and r['key']=='scene-4') and not (c['slug']=='rome' and r['key']=='scene-3')]
 if len(existing)>=9:return c['slug'],'city',existing,[]
 cand,errors=collect_pages(c['cityPages'])
 result,failed=pick(cand,c['subjects'],base/'destination','scene',c['publisher'],existing=existing,avoid=[r for r in old.get('destinationScenes',[]) if r not in existing])
 return c['slug'],'city',result,errors+failed
def hotel_job(c,h):
 key,name,pages=h
 old=PREVIOUS.get(c['slug'],{})
 allprevious=[r for r in old.get('hotels',[]) if r['hotel']==name]
 # These were specifically identified by source filenames/alt as unsuitable or ambiguous.
 bad={'claridges-1','wynn-1','fontainebleau-1','arts-1','nizuc-2','majestic-2','bellagio-1','hassler-2','majestic-3'}
 rejected=[r for r in allprevious if r['key'] in bad]
 existing=[r for r in allprevious if r['key'] not in bad]
 if len(existing)>=3:return c['slug'],key,existing,[]
 cand,errors=collect_pages(pages)
 patterns=[EXTERIOR.pattern,ROOM.pattern,FACILITY.pattern]
 result,failed=pick(cand,patterns,ROOT/(c['slug']+'-premium')/key,key,name,name,existing=existing,avoid=rejected)
 return c['slug'],key,result,errors+failed
def contact_sheet(slug,rows):
 if not rows:return
 cell=(300,218);cols=4;lines=(len(rows)+cols-1)//cols
 sheet=Image.new('RGB',(cols*cell[0],lines*cell[1]),'white');draw=ImageDraw.Draw(sheet)
 for i,r in enumerate(rows):
  im=Image.open('public'+r['localPath']).convert('RGB');im.thumbnail((292,180))
  x=(i%cols)*cell[0];y=(i//cols)*cell[1]
  sheet.paste(im,(x+(300-im.width)//2,y))
  draw.text((x+4,y+183),r['key']+' '+str(r['webpPixels']),fill='black')
  draw.text((x+4,y+198),(r['hotel'] or slug)[:38],fill='black')
 path=ROOT/(slug+'-premium')/'source-review-contact-sheet.webp'
 sheet.save(path,'WEBP',quality=82)
PREVIOUS=json.loads(REPORT.read_text()) if REPORT.exists() else {}
def main():
 audit={c['slug']:{'destinationScenes':[],'hotels':[],'gaps':[],'errors':[],'publicUseApproved':False,'ownerPermissionDeclared':True} for c in CONFIG}
 with ThreadPoolExecutor(max_workers=6) as ex:
  jobs=[ex.submit(city_job,c) for c in CONFIG]+[ex.submit(hotel_job,c,h) for c in CONFIG for h in c['hotels']]
  for task in jobs:
   slug,key,rows,errors=task.result()
   a=audit[slug];a['destinationScenes' if key=='city' else 'hotels'].extend(rows);a['errors'].extend(errors)
   wanted=9 if key=='city' else 3
   if len(rows)<wanted:a['gaps'].append({'group':key,'expected':wanted,'found':len(rows)})
 for c in CONFIG:
  a=audit[c['slug']]
  old=PREVIOUS.get(c['slug'],{})
  keys={r['localPath'] for r in a['destinationScenes']+a['hotels']}
  a['excludedCandidates']=old.get('excludedCandidates',[])+[r for r in old.get('destinationScenes',[])+old.get('hotels',[]) if r['localPath'] not in keys]
  a['cityCount']=len(a['destinationScenes']);a['hotelCount']=len(a['hotels'])
  allrows=a['destinationScenes']+a['hotels'];a['totalBytes']=sum(x['webpBytes'] for x in allrows)
  # Reject byte-identical or visually near-identical images across property groups.
  seen=[];rejected=[]
  for r in allrows:
   fp=int(r['pixelFingerprint'],16)
   if any((fp^f).bit_count()<9 for f in seen):rejected.append(r)
   else:seen.append(fp)
  for r in rejected:
   a['gaps'].append({'duplicateRejected':r['key']})
   (a['destinationScenes'] if r['hotel'] is None else a['hotels']).remove(r)
   a['excludedCandidates'].append(r) # retain source file on the draft branch
  a['cityCount']=len(a['destinationScenes']);a['hotelCount']=len(a['hotels']);a['totalBytes']=sum(x['webpBytes'] for x in a['destinationScenes']+a['hotels'])
  contact_sheet(c['slug'],a['destinationScenes']+a['hotels'])
  print('MEDIA_SUMMARY',c['slug'],a['cityCount'],a['hotelCount'],a['totalBytes'],json.dumps(a['gaps']),flush=True)
 REPORT.write_text(json.dumps(audit,ensure_ascii=False,indent=2)+'\n')
if __name__=='__main__':main()
