#!/usr/bin/env python3
"""Collect Luang Prabang #86 candidates only; no visual approval or publication."""
import os, json, re, hashlib, io, time, html, unicodedata
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen
from PIL import Image, ImageOps, ImageDraw
ROOT=Path.cwd()
OUT=ROOT/'public/images/travel/luang-prabang-premium'
REPORT=ROOT/'data/travel/luangPrabangAssetCollection.json'
AGENT='BosphorasTravelEditorial/1.0 (https://bosphoras.com; photo attribution review)'
def get(url,headers=None):
    with urlopen(Request(url,headers={'User-Agent':AGENT,**(headers or {})}),timeout=35) as response:
        return response.read()
def getjson(url,h=None): return json.loads(get(url,h))
def digest(b): return hashlib.sha256(b).hexdigest()
def clean(s): return html.unescape(re.sub('<[^>]+>',' ',str(s))).strip()
def norm(s): return re.sub('[^a-z0-9]+','',unicodedata.normalize('NFKD',str(s)).encode('ascii','ignore').decode().lower())
def save(raw, relative):
    im=ImageOps.exif_transpose(Image.open(io.BytesIO(raw))).convert('RGB')
    im.thumbnail((1280,850),Image.Resampling.LANCZOS)
    if im.width<650 or im.height<400: raise ValueError('image below resolution threshold')
    target=OUT/relative;target.parent.mkdir(parents=True,exist_ok=True)
    for width in [1280,1100,950,800,700]:
        im.thumbnail((width,850),Image.Resampling.LANCZOS)
        for quality in [83,76,69,62,55]:
            im.save(target,'WEBP',quality=quality,method=6)
            if target.stat().st_size<=150000:break
        if target.stat().st_size<=150000:break
    data=target.read_bytes()
    if len(data)>150000 or len(data)<5000: target.unlink();raise ValueError('image fails size threshold')
    return dict(localPath='/'+str(target.relative_to(ROOT/'public')),webpSHA256=digest(data),sourceSHA256=digest(raw),webpBytes=len(data),webpPixels=list(im.size),visuallyVerified=False,previewVisualApproved=False)
scenes=[
 ('scene-1','Panoramic view of Mount Phou Si seen from Wat Chomphet in Luang Prabang Laos.jpg','Le Mékong et le mont Phousi','Mekong and Mount Phousi'),
 ('scene-2','Luang Prabang - Wat Xieng Thong.jpg','Le temple Wat Xieng Thong','Wat Xieng Thong temple'),
 ('scene-3','Kuang Si waterfalls in Luang Prabang, Laos.jpg','Les cascades de Kuang Si','Kuang Si waterfalls'),
 ('scene-4','Luang Prabang Royal Palace.jpg','L’ancien palais royal','The former royal palace'),
 ('scene-5','Luang Prabang Rue.JPG','Une rue du centre historique','A street in the historic centre'),
 ('scene-6','Nam Khan river.JPG','La rivière Nam Khan','The Nam Khan River'),
 ('scene-7','Wat Mai Luang Prabang.jpg','Le monastère Wat Mai','Wat Mai monastery'),
 ('scene-8','Mekong-River-Near-Luang-Prabang.jpg','Navigation sur le Mékong près de Luang Prabang','Boats on the Mekong near Luang Prabang'),
 ('scene-9','Kuang Si Falls with submerged tree in turquoise water near Luang Prabang Laos.jpg','Bassins de Kuang Si','Kuang Si pools')
]
hotels=[
 ('amantaka','Amantaka',['Amantaka']),
 ('rosewood','Rosewood Luang Prabang',['Rosewood Luang Prabang']),
 ('phouvao','La Résidence Phou Vao, a Luxury Collection Resort & Spa',['La Residence Phou Vao a Luxury Collection Resort and Spa','La Residence Phou Vao a Luxury Collection Resort & Spa','La Residence Phou Vao','La Residence Phou Vao a Belmond Hotel','La Residence Phou Vao a Belmond Hotel Luang Prabang']),
 ('avani','Avani+ Luang Prabang Hotel',['Avani+ Luang Prabang Hotel','Avani+ Luang Prabang','Avani Luang Prabang Hotel'])
]
report=dict(destination='luang-prabang',destinationNumber=86,status='candidates_pending_review',previewApproved=False,productionApproved=False,destinationScenes=[],hotels=[],supplierMatches=[],errors=[])
for key,title,fr,en in scenes:
    try:
        api='https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url%7Cextmetadata&iiurlwidth=1280&titles='+quote('File:'+title)
        page=next(iter(getjson(api)['query']['pages'].values()))
        info=page['imageinfo'][0];m=info['extmetadata']
        license_name=clean(m['LicenseShortName']['value'])
        if not re.fullmatch(r'CC BY(?:-SA)? [234](?:\.\d)?|CC0|Public domain',license_name,re.I): raise ValueError('license not allowed: '+license_name)
        license_url=m.get('LicenseUrl',{}).get('value','')
        credit=clean(m.get('Artist',{}).get('value',''))
        if not credit or not license_url:raise ValueError('missing creator/license URL')
        url=info.get('thumburl') or info['url']
        raw=get(url)
        report['destinationScenes'].append(dict(key=key,sourcePage=info['descriptionurl'],sourceResolvedUrl=url,credit=credit,license=license_name,licenseUrl=license_url,frCaption=fr,enCaption=en,commercialRightsCleared=True,**save(raw,'destination/'+key+'.webp')))
    except Exception as e:report['errors'].append({'key':key,'reason':str(e)})
    time.sleep(0.7)
key=os.environ.get('NUITEE_API_KEY','').strip()
if not key:
    report['errors'].append({'key':'supplier','reason':'No configured NUITEE_API_KEY available to this job; no IDs guessed.'})
else:
    hdr={'X-API-Key':key,'Accept':'application/json'}
    api='https://api.liteapi.travel/v3.0'
    for code,name,aliases in hotels:
        try:
            allowed={norm(x) for x in aliases}
            query=aliases[0]
            rows=getjson(api+'/data/hotels?countryCode=LA&cityName=Luang%20Prabang&hotelName='+quote(query)+'&limit=35&language=en',hdr).get('data',[])
            matches=[x for x in rows if norm(x.get('name')) in allowed and re.fullmatch(r'lp[a-zA-Z0-9]+',str(x.get('id','')))]
            if len(matches)!=1: raise ValueError('expected one exact property; got '+str(len(matches)))
            sid=matches[0]['id']
            details=getjson(api+'/data/hotel?hotelId='+quote(sid)+'&language=en',hdr).get('data',{})
            if isinstance(details,list): details=details[0] if len(details)==1 else {}
            combined={**matches[0],**details}
            country=norm(combined.get('country') or combined.get('countryCode'))
            if country not in ('la','laos','laopeoplesdemocraticrepublic'): raise ValueError('country not verified')
            if norm(combined.get('name')) not in allowed: raise ValueError('detail property name mismatch')
            if combined.get('deletedAt') or combined.get('mapped') is False: raise ValueError('inactive/unmapped property')
            if not (combined.get('address') or combined.get('city')):raise ValueError('property geography missing')
            report['supplierMatches'].append(dict(editorialName=name,supplierName=combined.get('name'),id=sid,country=country,address=combined.get('address'),city=combined.get('city'),sourcePage='https://bosphoras.nuitee.link/hotels/'+sid,requiresManualWhiteLabelCheck=True))
            images=combined.get('hotelImages') or combined.get('images') or combined.get('photos') or []
            candidates=[]
            for item in images:
                if isinstance(item,str):url=item;caption=''
                elif isinstance(item,dict):url=item.get('url') or item.get('urlHd') or item.get('imageUrl') or item.get('image_url');caption=clean(item.get('caption') or item.get('description') or item.get('category') or '')
                else:continue
                if isinstance(url,str) and url.startswith('https://') and url not in [x[0] for x in candidates]:candidates.append((url,caption))
            # Collect a small review set, not pre-approve arbitrary first three as room shots.
            for idx,(url,caption) in enumerate(candidates[:8],1):
                try:
                    raw=get(url)
                    p=save(raw,'hotels/'+code+'-candidate-'+str(idx)+'.webp')
                    report['hotels'].append(dict(key=code+'-candidate-'+str(idx),hotel=name,supplierId=sid,sourcePage='https://bosphoras.nuitee.link/hotels/'+sid,sourceResolvedUrl=url,caption=caption,credit=name+' · Nuitée supplier gallery',commercialRightsCleared=False,**p))
                except Exception as e:report['errors'].append({'key':code+'-candidate-'+str(idx),'reason':str(e)})
            if len(candidates)<3:report['errors'].append({'key':code,'reason':'Fewer than three supplier photo candidates'})
        except Exception as e:report['errors'].append({'key':code,'reason':str(e)})
allphotos=report['destinationScenes']+report['hotels']
if allphotos:
    cols=4; cellw=330; cellh=235
    sheet=Image.new('RGB',(cols*cellw,((len(allphotos)+cols-1)//cols)*cellh),'white'); draw=ImageDraw.Draw(sheet)
    for idx,p in enumerate(allphotos):
        im=Image.open(ROOT/'public'/p['localPath'].lstrip('/')).convert('RGB'); im.thumbnail((310,190))
        x=(idx%cols)*cellw;y=(idx//cols)*cellh
        sheet.paste(im,(x+(cellw-im.width)//2,y+5))
        draw.text((x+8,y+200),p['key'],fill='black')
    sheet.save(OUT/'candidate-contact-sheet.webp','WEBP',quality=82)
REPORT.write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Luang Prabang candidates: '+str(len(report['destinationScenes']))+' geographic photos, '+str(len(report['hotels']))+' hotel photos, '+str(len(report['supplierMatches']))+' supplier matches. No final visual/publication approval.')
for error in report['errors']: print(error['key']+': '+error['reason'])
