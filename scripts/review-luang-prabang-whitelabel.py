#!/usr/bin/env python3
"""Read the account's public booking storefront. No private API key, no checkout, no bookings."""
import json,re,unicodedata,os,io,hashlib,base64
from pathlib import Path
from urllib.parse import urlparse
from playwright.sync_api import sync_playwright
from PIL import Image,ImageOps,ImageDraw
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
report=json.loads(REPORT.read_text(encoding='utf-8')) if REPORT.exists() else {'destination':'luang-prabang','source':ORIGIN,'status':'review_only_not_released','matches':[],'photos':[],'errors':[]}
report['errors']=[]
report['diagnostics']=[]
# Search shorter names first and collect alternatives only if required for the four-hotel shortlist.
HOTELS=[('phouvao','La Résidence Phou Vao, a Luxury Collection Resort & Spa',['La Résidence Phou Vao','La Residence Phou Vao a Luxury Collection Resort & Spa']),('threenagas','3 Nagas Hotel Luang Prabang - MGallery Collection',['3 Nagas Hotel Luang Prabang - MGallery Collection'])]
DIRECT={'phouvao':['lp39d0d','lp657829ff'],'threenagas':['lp741e9']}

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
  aliases={norm(x) for x in [name,*aliases0]};records.clear()
  if code in ['luangsay','threenagas'] and len(report['matches'])>=4: continue
  if any(x['editorialName']==name for x in report['matches']):continue
  try:
   # IDs above were actually returned by the public storefront in the prior run.
   # Check each distinct property detail, including active mapping, geography and photos.
   valid=[]
   for sid in DIRECT[code]:
    records.clear()
    page.goto(ORIGIN+'/hotels/'+sid+'?language=en&currency=EUR',wait_until='domcontentloaded',timeout=40000)
    page.wait_for_timeout(4500)
    matches=[x for x in records if hotel_id(x)==sid and exact(x,aliases) and laos(x) and x.get('mapped') is True and not x.get('deletedAt') and len(collect_images(x))>=3]
    report['diagnostics'].append({'hotel':name,'candidateId':sid,'detail':[{'name':str(name_of(x))[:150],'country':str(field(x,'countryCode','country'))[:90],'mapped':x.get('mapped'),'deleted':bool(x.get('deletedAt')),'imageCount':len(collect_images(x))} for x in records if hotel_id(x)==sid]})
    if matches:valid.append((sid,matches))
   if len(valid)!=1:raise ValueError('active exact-property candidates '+str(len(valid)))
   sid,matches=valid[0]
   item=max(matches,key=lambda x:len(collect_images(x)))
   report['matches'].append(dict(editorialName=name,supplierName=name_of(item),hotelId=sid,country='LA',address=str(field(item,'address','formattedAddress'))[:200],sourcePage=ORIGIN+'/hotels/'+sid,detailIdentityVerified=True))
   for idx,(url,cap) in enumerate(collect_images(item)[:18],1):
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

# Print small JPEG contact sheets in logs, separately from any private response data.
for idx,name in enumerate(dict.fromkeys(p['hotel'] for p in report['photos'])):
 photos=[p for p in report['photos'] if p['hotel']==name]
 canvas=Image.new('RGB',(960,200*((len(photos)+2)//3)), 'white');draw=ImageDraw.Draw(canvas)
 for i,item in enumerate(photos):
  p=ROOT/'public'/item['localPath'].lstrip('/')
  im=Image.open(p).convert('RGB');im.thumbnail((308,168))
  x=(i%3)*320;y=(i//3)*200
  canvas.paste(im,(x+(320-im.width)//2,y));draw.text((x+3,y+170),p.stem+' '+item.get('caption','')[:20],fill='black')
 buf=io.BytesIO();canvas.save(buf,format='JPEG',quality=62)
 print('HOTEL_SHEET_'+str(idx)+'_NAME='+name,flush=True)
 print('HOTEL_SHEET_'+str(idx)+'_B64='+base64.b64encode(buf.getvalue()).decode('ascii'),flush=True)
