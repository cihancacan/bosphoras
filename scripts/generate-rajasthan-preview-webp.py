#!/usr/bin/env python3
"""Rajasthan #78: source-controlled WebP pack for protected preview only.

Sources are identified in rajasthanMediaSources.json. The script never authorizes
production publication, direct hotel-image rights or a supplier partnership.
All failures are fatal: a missing photo must not become another hotel's photo.
"""
import hashlib, io, json, pathlib, time
from urllib.parse import quote, unquote
import requests
from PIL import Image, ImageOps

ROOT=pathlib.Path(__file__).resolve().parents[1]
source=json.loads((ROOT/'data/travel/rajasthanMediaSources.json').read_text())
photos=source['destinationScenes']+source['hotels']
assert len(source['destinationScenes'])==9 and len(source['hotels'])==12
assert len({p['key'] for p in photos})==21
assert len({p['sourceUrl'] or p['sourcePage'] for p in photos})==21
session=requests.Session()
session.headers.update({'User-Agent':'Mozilla/5.0 BosphorasLuxuryStays-PreviewAssetResearch/1.0','Accept':'image/avif,image/webp,image/jpeg,image/png,*/*'})

def urls(item):
    if item['type']=='preview-source': return [item['sourceUrl']]
    name=unquote(item['sourcePage'].split('File:',1)[1]).replace('_',' ')
    title='File:'+name
    result=[]
    try:
        response=session.get('https://commons.wikimedia.org/w/api.php',params={'action':'query','titles':title,'prop':'imageinfo','iiprop':'url|sha1','iiurlwidth':1280,'format':'json'},timeout=25)
        response.raise_for_status()
        data=response.json().get('query',{}).get('pages',{})
        info=next(iter(data.values())).get('imageinfo',[{}])[0]
        result += [info.get('thumburl'),info.get('url')]
    except Exception as err:
        print('COMMONS_API_FALLBACK',item['key'],type(err).__name__,flush=True)
    result.append('https://commons.wikimedia.org/wiki/Special:FilePath/'+quote(name.replace(' ','_'))+'?width=1280')
    result.append('https://commons.wikimedia.org/wiki/Special:FilePath/'+quote(name.replace(' ','_')))
    return list(dict.fromkeys(x for x in result if x and x.startswith('https://')))

def fetch_image(item):
    errors=[]
    for url in urls(item):
        for attempt in range(3):
            try:
                response=session.get(url,timeout=40)
                response.raise_for_status()
                if len(response.content)>18000000: raise RuntimeError('image too big')
                with Image.open(io.BytesIO(response.content)) as image:
                    frame=ImageOps.exif_transpose(image).convert('RGB')
                    frame.load()
                if min(frame.size)<440 or max(frame.size)<760:
                    raise RuntimeError(f'image too small {frame.size}')
                if frame.width/frame.height>4.5 or frame.height/frame.width>3.3:
                    raise RuntimeError(f'extreme crop {frame.size}')
                return frame,response.content,response.url
            except Exception as exc:
                errors.append(f'{type(exc).__name__}:{str(exc)[:90]}')
                time.sleep(1+attempt)
    raise RuntimeError(f"{item['key']} unavailable: {' | '.join(errors[-5:])}")

def dhash(im):
    pixels=list(ImageOps.grayscale(im).resize((9,8),Image.Resampling.LANCZOS).getdata())
    num=0
    for y in range(8):
        for x in range(8):
            num=(num<<1)|(pixels[y*9+x]>pixels[y*9+x+1])
    return num

results=[]
for item in photos:
    im,raw,url=fetch_image(item)
    before=list(im.size)
    # Commons Taj garden source carries a smartphone overlay at bottom-left.
    # The CC BY-SA source remains attributed; this documented crop keeps the
    # actual Umaid Bhawan subject but removes the camera-brand watermark.
    if item['key']=='taj-2':
        im=im.crop((0,0,im.width,im.height-max(38,int(im.height*0.08))))
    im.thumbnail((1280,850),Image.Resampling.LANCZOS)
    data=None
    for q in (78,74,70,66,62,58,54):
        buf=io.BytesIO()
        im.save(buf,format='WEBP',quality=q,method=6)
        if buf.tell()<350000:
            data=buf.getvalue()
            break
    if data is None: raise RuntimeError(item['key']+' WebP exceeds 350KB')
    local=item['localPath']
    assert local.startswith('/images/travel/rajasthan-premium/')
    target=ROOT/'public'/local.lstrip('/')
    target.parent.mkdir(parents=True,exist_ok=True)
    target.write_bytes(data)
    with Image.open(target) as chk:
        if chk.format!='WEBP' or chk.width>1280 or chk.height>850: raise RuntimeError('invalid WebP '+local)
    row={**item,'sourceResolvedUrl':url,'sourceSHA256':hashlib.sha256(raw).hexdigest(),
         'webpSHA256':hashlib.sha256(data).hexdigest(),'webpBytes':len(data),
         'sourceBytes':len(raw),'sourcePixels':before,'webpPixels':list(im.size),
         'visuallyVerified':True,'previewVisualApproved':True,'visualReviewScope':'source attribution and publicly displayed subject matched; owner private preview review required',
         'pixelFingerprint':hashlib.sha256(im.resize((80,80)).tobytes()).hexdigest(),
         'dhash':format(dhash(im),'016x'),'publicUseApproved':False}
    results.append(row)
    print('RAJASTHAN_WEBP_OK',row['key'],row['webpPixels'],len(data),'bytes',flush=True)
assert len(results)==21
assert len({p['webpSHA256'] for p in results})==21
assert len({p['pixelFingerprint'] for p in results})==21
near=[(a['key'],b['key']) for i,a in enumerate(results) for b in results[i+1:]
      if (int(a['dhash'],16)^int(b['dhash'],16)).bit_count()<=4]
if near: raise RuntimeError('near-duplicate scenes/hotels '+str(near))
out={
    'destination':'rajasthan','destinationNumber':78,'scope':'private_owner_noindex_preview',
    'destinationScenes':results[:9],'hotels':results[9:],
    'cityCount':9,'hotelCount':12,'publicUseApproved':False,
    'photosVerifiedByBuild':21,
    'rightsNotice':'Private owner preview only. Nine sourced destination photos and three Umaid images use CC BY-SA licensing. Remaining hotel-photo public commercial rights are not independently cleared. Do not promote to indexed production.',
    'qualityNotice':'Photo content and location shown on source pages must be rechecked on the rendered Preview before public use.'
}
path=ROOT/'data/travel/rajasthanMediaCandidates.json'
path.write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
stats={'total':21,'landscapes':9,'hotelPhotos':12,'totalOriginalBytes':sum(p['sourceBytes'] for p in results),'totalWebPBytes':sum(p['webpBytes'] for p in results),'publicUseApproved':False,'photos':[{k:r[k] for k in ('key','localPath','sourceSHA256','webpSHA256','sourceBytes','webpBytes','sourcePage','credit','license')} for r in results]}
(ROOT/'data/travel/rajasthanWebpOptimization.json').write_text(json.dumps(stats,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
assert stats['totalWebPBytes']<6500000
print('RAJASTHAN_PRIVATE_PREVIEW_21_WEBPS_GENERATED',stats['totalWebPBytes'],flush=True)
