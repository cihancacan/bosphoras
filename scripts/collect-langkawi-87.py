#!/usr/bin/env python3
"""Collect Langkawi #87 candidates only; no visual approval or publication."""
import os, json, re, hashlib, io, time, html, unicodedata
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen
from PIL import Image, ImageOps, ImageDraw
import base64
ROOT=Path.cwd()
OUT=ROOT/'public/images/travel/langkawi-premium'
REPORT=ROOT/'data/travel/langkawiAssetCollection.json'
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
scenes=[["scene-1","Tanjung Rhu Beach.jpg","Plage de Tanjung Rhu","Tanjung Rhu beach"],["scene-2","Skybrige.jpg","Panorama depuis le SkyBridge","SkyBridge panorama"],["scene-3","Langkawi Mangrove Forest.jpg","Mangrove de Kilim","Kilim mangrove forest"],["scene-4","Pantai Cenang, Langkawi, Malaysia.jpg","Plage de Cenang","Cenang beach"],["scene-5","Langkawi Malaysia Pantai-Kok-Lighthouse-01.jpg","Phare de Pantai Kok","Pantai Kok lighthouse"],["scene-6","Langkawi Malaysia Seven-wells-03.jpg","Cascades de Telaga Tujuh","Telaga Tujuh waterfalls"],["scene-7","Langkawi, Kedah, Malaysia - panoramio (16).jpg","Rivière Kilim","Kilim River"],["scene-8","Dayang Bunting Marble (56351086).jpeg","Île de Dayang Bunting","Dayang Bunting island"],["scene-9","The andaman Beach Langkawi - panoramio.jpg","Côte de Datai Bay","Datai Bay coastline"],["scene-10","Cable car in Langkawi Island.jpg","Téléphérique de Langkawi","Langkawi cable car"],["scene-11","Langkawi, Malaysia - panoramio (5).jpg","Île de Dayang Bunting","Dayang Bunting island"],["scene-12","Pantai Cenang, Langkawi 01.jpg","Littoral de Cenang","Cenang coastline"],["scene-13","Telaga tujoh waterfalls!.jpg","Cascade de Telaga Tujuh","Telaga Tujuh waterfall"],["scene-14","Langkawi, Kedah, Malaysia - panoramio (20).jpg","Rivière Kilim","Kilim River"]]
report=dict(destination='langkawi',destinationNumber=87,status='candidates_pending_review',previewApproved=False,productionApproved=False,destinationScenes=[],hotels=[],supplierMatches=[],errors=[])
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

if (OUT/'candidate-contact-sheet.webp').exists():
    im=Image.open(OUT/'candidate-contact-sheet.webp'); im.thumbnail((1200,1200)); b=io.BytesIO(); im.save(b,format='JPEG',quality=66); print('SCENE_SHEET_B64='+base64.b64encode(b.getvalue()).decode('ascii'),flush=True)
