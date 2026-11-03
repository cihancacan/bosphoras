#!/usr/bin/env python3
"""Galle #79: fetch 21 named source originals and create owner-preview-only WebPs.

No destination or hotel image is substituted on network failure.
Copyright is read from Commons image metadata when available and never
inferred from a hotel's marketing site. Private previews only.
"""
import hashlib,html,io,json,pathlib,re,time
from urllib.parse import unquote,quote
import requests
from PIL import Image,ImageOps

ROOT=pathlib.Path(__file__).resolve().parents[1]
SOURCE=ROOT/'data/travel/galleMediaSources.json'
data=json.loads(SOURCE.read_text(encoding='utf-8'))
items=data['destinationScenes']+data['hotels']
assert len(data['destinationScenes'])==9 and len(data['hotels'])==12 and len(items)==21
assert len({x['sourcePage'] for x in items})==21
assert not data['publicUseApproved']
s=requests.Session()
s.headers.update({'User-Agent':'BosphorasLuxuryStays/1.0 (editorial asset research; contact via github.com/cihancacan/bosphoras)','Accept':'image/jpeg,image/png,image/webp,image/avif,*/*'})
SUPPORTED=('CC BY-SA','CC BY ','CC0','Public domain')
meta_cache={}

def metadata(item):
    if item['type']!='wikimedia':
        return {}, [item['sourceUrl']]
    title='File:'+unquote(item['sourcePage'].split('File:',1)[1]).replace('_',' ')
    info=None
    try:
        resp=s.get('https://commons.wikimedia.org/w/api.php',
            params={'action':'query','titles':title,'prop':'imageinfo',
                    'iiprop':'url|sha1|extmetadata','iiurlwidth':1280,'format':'json'},timeout=35)
        resp.raise_for_status()
        page=next(iter(resp.json()['query']['pages'].values()))
        info=page.get('imageinfo',[None])[0]
    except Exception as err:
        print('COMMONS_METADATA_FAILURE',item['key'],str(err)[:160],flush=True)
    if not info:
        raise RuntimeError('Cannot verify Commons source metadata: '+item['sourcePage'])
    ext=info.get('extmetadata',{})
    lic=ext.get('LicenseShortName',{}).get('value','')
    lic_url=ext.get('LicenseUrl',{}).get('value','')
    credit_raw=ext.get('Artist',{}).get('value','') or ext.get('Credit',{}).get('value','')
    artist=html.unescape(re.sub('<[^>]+>',' ',credit_raw))
    artist=' '.join(artist.split())[:280] or 'Wikimedia Commons contributor (see file page)'
    if not lic.startswith(SUPPORTED) or not lic_url.startswith('https://'):
        raise RuntimeError('Unsupported or unverifiable Commons photo license: '+item['key']+' / '+lic)
    canonical='https://commons.wikimedia.org/wiki/'+quote(title.replace(' ','_'),safe=':/(),-_')
    m={'license':lic,'licenseUrl':lic_url,'credit':artist,'sourcePage':canonical,
       'commercialRightsCleared':True,'rightsEvidenceType':'Commons extmetadata LicenseShortName and LicenseUrl',
       'commonsSHA1':info.get('sha1')}
    urls=list(dict.fromkeys(x for x in (info.get('thumburl'),info.get('url')) if x and x.startswith('https://')))
    return m,urls

def fetch(item,urls):
    errors=[]
    for u in urls:
        for attempt in range(2):
            try:
                r=s.get(u,timeout=50)
                r.raise_for_status()
                if not r.headers.get('Content-Type','').startswith('image/'):
                    raise RuntimeError('Non-image response '+r.headers.get('Content-Type',''))
                if len(r.content)>19000000:
                    raise RuntimeError('Image over 19MB')
                with Image.open(io.BytesIO(r.content)) as f:
                    im=ImageOps.exif_transpose(f).convert('RGB')
                    im.load()
                if min(im.size)<400 or max(im.size)<700: raise RuntimeError('Photo resolution too low '+str(im.size))
                if max(im.size)/min(im.size)>5: raise RuntimeError('Extreme aspect ratio')
                return im,r.content,r.url
            except Exception as exc:
                errors.append(str(exc)[:120])
                time.sleep(1+attempt)
    raise RuntimeError('Cannot download '+item['key']+': '+' | '.join(errors[-4:]))

def dhash(im):
    p=list(ImageOps.grayscale(im).resize((9,8),Image.Resampling.LANCZOS).getdata())
    v=0
    for y in range(8):
        for x in range(8):
            v=(v<<1)|(p[y*9+x]>p[y*9+x+1])
    return v

out=[]
for item in items:
    m,urls=metadata(item)
    im,raw,resolved=fetch(item,urls)
    raw_size=list(im.size)
    im.thumbnail((1280,850),Image.Resampling.LANCZOS)
    blob=None
    for quality in (78,74,70,66,62,58,54,50):
        buf=io.BytesIO()
        im.save(buf,format='WEBP',quality=quality,method=6)
        if buf.tell()<350000:
            blob=buf.getvalue()
            break
    if blob is None: raise RuntimeError('WebP >350KB: '+item['key'])
    local=item['localPath']
    assert local.startswith('/images/travel/galle-premium/')
    target=ROOT/'public'/local.lstrip('/')
    target.parent.mkdir(parents=True,exist_ok=True)
    target.write_bytes(blob)
    with Image.open(target) as chk:
        assert chk.format=='WEBP' and chk.width<=1280 and chk.height<=850
    result={**item,**m,'sourceResolvedUrl':resolved,
      'sourceSHA256':hashlib.sha256(raw).hexdigest(),
      'webpSHA256':hashlib.sha256(blob).hexdigest(),
      'webpBytes':len(blob),'sourceBytes':len(raw),
      'sourcePixels':raw_size,'webpPixels':list(im.size),
      'visuallyVerified':False,'previewVisualApproved':False,
      'visualReviewScope':'Original image not personally reviewed on contact sheet yet; only named source, metadata and optimized binary verified',
      'pixelFingerprint':hashlib.sha256(im.resize((80,80)).tobytes()).hexdigest(),
      'dhash':format(dhash(im),'016x'),'publicUseApproved':False}
    out.append(result)
    print('GALLE_WEBP_CANDIDATE_OK',result['key'],result['webpPixels'],len(blob),'bytes',flush=True)

assert len(out)==21
assert len({x['sourceSHA256'] for x in out})==21
assert len({x['webpSHA256'] for x in out})==21
assert len({x['pixelFingerprint'] for x in out})==21
near=[(x['key'],y['key']) for i,x in enumerate(out) for y in out[i+1:] if
      (int(x['dhash'],16)^int(y['dhash'],16)).bit_count()<=2]
if near: raise RuntimeError('Near-duplicate photos '+str(near))
if any(not x['commercialRightsCleared'] for x in out[:9]):
    raise RuntimeError('All 9 landscape images require explicit Commons license metadata')
total=sum(x['webpBytes'] for x in out)
assert total<6500000
media={'destination':'galle','destinationNumber':79,'scope':'private_owner_noindex_preview',
  'destinationScenes':out[:9],'hotels':out[9:],
  'cityCount':9,'hotelCount':12,'publicUseApproved':False,
  'photosVerifiedByBuild':21,'photosVisuallyApprovedByOwner':0,
  'rightsNotice':'Commons-licensed photos are attributed. Any third-party hotel marketing photo stays owner-preview-only until rights established; production is forbidden.',
  'qualityNotice':'No photos are automatically marked as visually reviewed. Source-linked contact sheet review required before displaying hotel galleries.'}
(ROOT/'data/travel/galleMediaCandidates.json').write_text(json.dumps(media,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
audit={'total':21,'landscapes':9,'hotelPhotos':12,'originalBytes':sum(x['sourceBytes'] for x in out),
  'totalWebPBytes':total,'publicUseApproved':False,
  'photos':[{k:r.get(k) for k in ('key','localPath','sourcePage','sourceSHA256','webpSHA256','webpBytes','license','credit')} for r in out]}
(ROOT/'data/travel/galleWebpOptimization.json').write_text(json.dumps(audit,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
# Create a small contact sheet that can be inspected privately before approval.
from PIL import ImageDraw
cellw,cellh=224,179
sheet=Image.new('RGB',(cellw*4,cellh*6),'#fafafa')
draw=ImageDraw.Draw(sheet)
for i,p in enumerate(out):
    im=Image.open(ROOT/'public'/p['localPath'].lstrip('/')).convert('RGB')
    im.thumbnail((cellw-12,cellh-34),Image.Resampling.LANCZOS)
    x=(i%4)*cellw+(cellw-im.width)//2
    y=(i//4)*cellh+5
    sheet.paste(im,(x,y))
    draw.text(((i%4)*cellw+6,(i//4)*cellh+cellh-25),p['key'],fill='black')
contact=ROOT/'public/images/travel/galle-premium/source-review-contact-sheet.webp'
sheet.save(contact,'WEBP',quality=75,method=6)
print('GALLE_21_WEBP_CANDIDATES_PENDING_VISUAL_QA',total,'bytes',flush=True)
