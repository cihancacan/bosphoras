#!/usr/bin/env python3
"""Read the account's public booking storefront. No private API key, no checkout, no bookings."""
import json,re,unicodedata,os,io,hashlib,base64
from pathlib import Path
from urllib.parse import urlparse
from playwright.sync_api import sync_playwright
from PIL import Image,ImageOps
ROOT=Path.cwd(); OUT=ROOT/'public/images/travel/luang-prabang-premium'
REPORT=ROOT/'data/travel/luangPrabangWhiteLabelReview.json'
HOST='bosphoras.nuitee.link'; ORIGIN='https://'+HOST
HOTELS=[('amantaka','Amantaka',['Amantaka']),('rosewood','Rosewood Luang Prabang',['Rosewood Luang Prabang']),('phouvao','La Résidence Phou Vao, a Luxury Collection Resort & Spa',['La Résidence Phou Vao, a Luxury Collection Resort & Spa','La Residence Phou Vao','La Residence Phou Vao a Belmond Hotel','La Residence Phou Vao a Belmond Hotel Luang Prabang']),('avani','Avani+ Luang Prabang Hotel',['Avani+ Luang Prabang Hotel','Avani+ Luang Prabang','Avani Luang Prabang Hotel'])]
def norm(s):return re.sub('[^a-z0-9]','',unicodedata.normalize('NFKD',str(s)).encode('ascii','ignore').decode().lower())
def nodes(j,depth=0):
 if depth>12:return
 if isinstance(j,dict):
  yield j
  for v in j.values():yield from nodes(v,depth+1)
 elif isinstance(j,list):
  for v in j:yield from nodes(v,depth+1)
def field(d,*keys):
 for key in keys:
  if d.get(key) is not None:return d[key]
 return ''
def hotel_id(d):
 for k in ['hotelId','hotel_id','id','liteApiHotelId','liteapiHotelId']:
  v=d.get(k)
  if isinstance(v,str) and re.fullmatch(r'lp[a-z0-9]+',v,re.I):return v
 return None
def name_of(d):return field(d,'name','hotelName','hotel_name','title','propertyName')
def exact(d,aliases):return norm(name_of(d)) in aliases
def laos(d):
 c=field(d,'countryCode','country','country_code')
 if isinstance(c,dict):c=field(c,'code','name','iso2')
 return norm(c) in ['la','laos','laopeoplesdemocraticrepublic'] or ('luangprabang' in norm(field(d,'city','address','formattedAddress')) and 'laos' in norm(field(d,'address','formattedAddress')))
def collect_images(d):
 result=[]
 for k in ['hotelImages','images','photos','gallery','hotel_images']:
  ar=d.get(k)
  if not isinstance(ar,list):continue
  for item in ar:
   url=item if isinstance(item,str) else field(item,'url','urlHd','imageUrl','image_url','src') if isinstance(item,dict) else ''
   if not isinstance(url,str):continue
   p=urlparse(url)
   if p.scheme!='https' or p.hostname not in ['nuitee-hotels.b-cdn.net','static.cupid.travel']:continue
   cap=field(item,'caption','description','category','roomName') if isinstance(item,dict) else ''
   if url not in [a[0] for a in result]:result.append((url,str(cap)[:140]))
 return result
def save_photo(context,code,index,url):
 res=context.request.get(url,timeout=25000)
 if not res.ok:raise ValueError('photo HTTP '+str(res.status))
 b=res.body(); im=ImageOps.exif_transpose(Image.open(io.BytesIO(b))).convert('RGB')
 target=OUT/'hotels'/f'{code}-review-{index}.webp';target.parent.mkdir(parents=True,exist_ok=True)
 for width in [1200,1050,900,800,700]:
  im.thumbnail((width,850),Image.Resampling.LANCZOS)
  for q in [82,74,66,58]:
   im.save(target,format='WEBP',quality=q,method=5)
   if target.stat().st_size<=150000:break
  if target.stat().st_size<=150000:break
 if im.width<650 or im.height<400 or target.stat().st_size>150000:target.unlink();raise ValueError('photo threshold')
 return dict(localPath='/'+str(target.relative_to(ROOT/'public')),webpBytes=target.stat().st_size,webpPixels=list(im.size),webpSHA256=hashlib.sha256(target.read_bytes()).hexdigest(),sourceSHA256=hashlib.sha256(b).hexdigest())
report={'destination':'luang-prabang','source':ORIGIN,'status':'review_only_not_released','matches':[],'photos':[],'errors':[]}
with sync_playwright() as p:
 browser=p.chromium.launch(headless=True)
 ctx=browser.new_context(locale='en-US')
 page=ctx.new_page(); records=[]
 def response(r):
  try:
   u=urlparse(r.url)
   if not (u.hostname==HOST or (u.hostname or '').endswith('.nuitee.com') or (u.hostname or '').endswith('.liteapi.travel')):return
   if 'json' not in r.headers.get('content-type',''):return
   j=r.json()
   for d in nodes(j):
    if hotel_id(d) and name_of(d): records.append(d)
  except Exception: pass
 page.on('response',response)
 for code,name,aliases0 in HOTELS:
  aliases={norm(x) for x in aliases0};records.clear()
  try:
   page.goto(ORIGIN+'/?language=en&currency=EUR',wait_until='domcontentloaded',timeout=40000)
   page.wait_for_timeout(2500)
   # Use only the normal public search field, not an unverified private API.
   ins=page.locator('input')
   chosen=None
   for i in range(min(ins.count(),30)):
    inp=ins.nth(i)
    if not inp.is_visible():continue
    placeholder=(inp.get_attribute('placeholder') or '')+' '+(inp.get_attribute('aria-label') or '')
    if re.search('destination|where|hotel|location|search|city',placeholder,re.I):
     chosen=inp;break
   if chosen is None:
    for i in range(min(ins.count(),30)):
     inp=ins.nth(i)
     if inp.is_visible() and (inp.get_attribute('type') or 'text') in ['text','search']: chosen=inp;break
   if chosen is None:raise ValueError('public search input not available')
   chosen.fill(name,timeout=7000)
   page.wait_for_timeout(2200)
   # Select matching autocomplete option; never click payment/booking buttons.
   for alias in [name,*aliases0]:
    opts=page.get_by_text(alias,exact=False)
    picked=False
    for i in range(min(opts.count(),30)):
     opt=opts.nth(i)
     try:
      if opt.is_visible() and opt.inner_text(timeout=1000).strip() and len(opt.inner_text(timeout=1000))<220:
       opt.click(timeout=2000);picked=True;break
     except Exception:pass
    if picked:break
   page.wait_for_timeout(1000)
   btn=page.get_by_role('button',name=re.compile(r'^(search|search hotels|find hotels|show hotels|find accommodation)$',re.I))
   if btn.count() and btn.first.is_visible():
    btn.first.click(timeout=4000);page.wait_for_timeout(5500)
   # Collect only returned supplier IDs or actual property hrefs for exact-name links.
   candidates={hotel_id(x) for x in records if exact(x,aliases)}
   for a in page.locator('a[href*="/hotels/lp"]').all()[:150]:
    try:
     if norm(a.inner_text(timeout=1000)) in aliases:
      match=re.search(r'/hotels/(lp[a-z0-9]+)',a.get_attribute('href') or '',re.I)
      if match:candidates.add(match.group(1))
    except Exception:pass
   if len(candidates)!=1:raise ValueError('exact public supplier candidate count '+str(len(candidates)))
   sid=next(iter(candidates));records.clear()
   page.goto(ORIGIN+'/hotels/'+sid+'?language=en&currency=EUR',wait_until='domcontentloaded',timeout=40000)
   page.wait_for_timeout(4500)
   matches=[x for x in records if hotel_id(x)==sid and exact(x,aliases) and laos(x) and x.get('mapped') is not False and not x.get('deletedAt')]
   if not matches:raise ValueError('exact detail identity and Laos country not independently confirmed')
   item=max(matches,key=lambda x:len(collect_images(x)))
   report['matches'].append(dict(editorialName=name,supplierName=name_of(item),hotelId=sid,country='LA',address=str(field(item,'address','formattedAddress'))[:200],sourcePage=ORIGIN+'/hotels/'+sid,detailIdentityVerified=True))
   for idx,(url,cap) in enumerate(collect_images(item)[:8],1):
    try:
     report['photos'].append(dict(hotel=name,supplierId=sid,sourcePage=ORIGIN+'/hotels/'+sid,sourceResolvedUrl=url,caption=cap,visuallyVerified=False,commercialRightsCleared=False,**save_photo(ctx,code,idx,url)))
    except Exception as e:report['errors'].append(dict(hotel=name,error='photo: '+str(e)[:180]))
  except Exception as e:report['errors'].append(dict(hotel=name,error=str(e)[:200]))
  print(name+': '+str(len([x for x in report['matches'] if x['editorialName']==name]))+' exact identity, '+str(len([x for x in report['photos'] if x['hotel']==name]))+' candidate photos',flush=True)
 browser.close()
REPORT.write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(dict(matches=report['matches'],photoCount=len(report['photos']),errors=report['errors']),ensure_ascii=False),flush=True)
# A reduced contact sheet is review evidence, not an assertion of approval.
sheet=OUT/'candidate-contact-sheet.webp'
if sheet.exists():
 img=Image.open(sheet);img.thumbnail((1050,1050));buf=io.BytesIO();img.save(buf,format='JPEG',quality=65)
 print('SCENE_SHEET_B64='+base64.b64encode(buf.getvalue()).decode('ascii'))
