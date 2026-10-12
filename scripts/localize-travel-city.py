#!/usr/bin/env python3
"""Import six manually reviewed Wikimedia Commons Istanbul city scenes, with verifiable credits.

Runs on the isolated Travel feature branch only. No hotel booking endpoints or secrets.
Only commits media that match a Commons file, expected licence, image type and resolution.
"""
import hashlib, io, json, re, sys, time
from pathlib import Path
from urllib.parse import urlparse

import requests
from PIL import Image, ImageOps

ROOT=Path(__file__).resolve().parents[1]
DEST=ROOT/"public/images/travel/istanbul/city"
REPORT=ROOT/"data/travel/cityImageSources.json"
API="https://commons.wikimedia.org/w/api.php"
HEADERS={"User-Agent":"BosphorasLuxuryStaysEditorial/1.0 (https://www.bosphoras.com; curated Wikimedia Commons attribution)", "Accept":"application/json,image/jpeg,image/png,image/webp,*/*"}
ASSETS=[
    dict(id="karakoy",filename="karakoy-galataport.webp",title="Galataport from Istanbul Museum of Modern Art in 2024 5623.jpg",author="Dosseman",licence="CC BY-SA 4.0",licenceUrl="https://creativecommons.org/licenses/by-sa/4.0/"),
    dict(id="ciragan",filename="ciragan-bosphorus.webp",title="Çırağan Palace from the Bosphorus Strait.jpg",author="flowcomm",licence="CC BY 2.0",licenceUrl="https://creativecommons.org/licenses/by/2.0/"),
    dict(id="kurucesme",filename="ortakoy-bosphorus.webp",title="Ortaköy Mosque and 15th July Bridge.jpg",author="Maurice Flesier",licence="CC BY-SA 4.0",licenceUrl="https://creativecommons.org/licenses/by-sa/4.0/"),
    dict(id="sultanahmet",filename="sultanahmet-skyline.webp",title="Hagia Sophia and Blue Mosque.jpg",author="Husain007",licence="CC BY-SA 4.0",licenceUrl="https://creativecommons.org/licenses/by-sa/4.0/"),
    dict(id="nisantasi",filename="nisantasi-abdi-ipekci.webp",title="Nişantaşı Abdi İpekçi Avenue.jpg",author="Metuboy",licence="CC BY-SA 4.0",licenceUrl="https://creativecommons.org/licenses/by-sa/4.0/"),
    dict(id="dolmabahce",filename="dolmabahce-palace.webp",title="Dolmabahce Istanbul Turkey.jpg",author="flowcomm",licence="CC BY 2.0",licenceUrl="https://creativecommons.org/licenses/by/2.0/"),
]
def get(url,params=None,stream=False):
    err=None
    for i in range(4):
        try:
            r=requests.get(url,params=params,headers=HEADERS,timeout=(12,45),stream=stream)
            if r.status_code in (429,500,502,503,504):
                err=f"HTTP {r.status_code}"; r.close(); time.sleep(2+i*3); continue
            r.raise_for_status()
            return r
        except requests.RequestException as e:
            err=str(e); time.sleep(2+i*3)
    raise RuntimeError(f"Request failed: {url[:120]} — {err}")

def checked_image(asset):
    params={"action":"query","prop":"imageinfo","titles":"File:"+asset["title"],"iiprop":"url|extmetadata|size|mime","iiurlwidth":"2200","format":"json","formatversion":"2"}
    result=get(API,params=params).json()
    page=result["query"]["pages"][0]
    if "missing" in page or not page.get("imageinfo"):
        raise ValueError("Commons file not found: "+asset["title"])
    info=page["imageinfo"][0]
    meta=info.get("extmetadata",{})
    lurl=re.sub(r"/+$","",re.sub(r"^http:", "https:", meta.get("LicenseUrl",{}).get("value","")))
    expected=asset["licenceUrl"].rstrip("/")
    short=meta.get("LicenseShortName",{}).get("value","").lower()
    if asset["licence"]=="Public domain":
        if not any(x in short for x in ("public domain","pd-")):
            raise ValueError("Unexpected public domain claim: "+short)
    elif lurl!=expected:
        raise ValueError(f"Licence changed: {lurl} != {expected}")
    src=info.get("thumburl") or info.get("url")
    host=urlparse(src).hostname
    if host not in {"upload.wikimedia.org","thumb.wikimedia.org"}:
        raise ValueError("Unexpected image host: "+str(host))
    response=get(src,stream=True)
    try:
        if urlparse(response.url).hostname not in {"upload.wikimedia.org","thumb.wikimedia.org"}:
            raise ValueError("Unapproved image redirect")
        chunks=[]; size=0
        for chunk in response.iter_content(131072):
            size+=len(chunk)
            if size>24_000_000:
                raise ValueError("File too large")
            chunks.append(chunk)
        raw=b"".join(chunks)
    finally:
        response.close()
    with Image.open(io.BytesIO(raw)) as im:
        im.verify()
    with Image.open(io.BytesIO(raw)) as im:
        im=ImageOps.exif_transpose(im).convert("RGB")
        w,h=im.size
        if w<900 or (h<460 and not (asset["id"]=="sultanahmet" and h>=300 and (w/h)<=5.5)):
            raise ValueError(f"Source image too small: {w}x{h}")
        im.thumbnail((1700,1200),Image.Resampling.LANCZOS)
        out=io.BytesIO()
        im.save(out,format="WEBP",quality=84,method=5)
    binary=out.getvalue()
    output=DEST/asset["filename"]
    output.parent.mkdir(parents=True,exist_ok=True)
    output.write_bytes(binary)
    return dict(asset, status="downloaded", sourcePage="https://commons.wikimedia.org/wiki/File:"+asset["title"].replace(" ","_"),
                sourceDownloadUrl=src, localPath="/images/travel/istanbul/city/"+asset["filename"],
                sourceWidth=w, sourceHeight=h, bytes=len(binary),sha256=hashlib.sha256(binary).hexdigest(),
                modifications="Resized, EXIF orientation normalized, converted to WebP")

def main():
    prior={}
    if REPORT.exists():
        try:
            prior={a["id"]:a for a in json.loads(REPORT.read_text()).get("items",[]) if a.get("status")=="downloaded"}
        except Exception: pass
    for asset in ASSETS:
        if asset["id"] != "sultanahmet" and asset["id"] in prior:
            continue
        try:
            prior[asset["id"]]=checked_image(asset)
            print("DOWNLOADED",asset["id"],flush=True)
        except Exception as e:
            print("FAILED",asset["id"],str(e),flush=True)
            prior[asset["id"]]=dict(asset,status="unavailable",error=str(e)[:250])
    allitems=[prior[x["id"]] for x in ASSETS]
    report={"scope":"Bosphoras Travel preview — Istanbul city scene photographs","source":"Wikimedia Commons, individually curated",
            "downloaded":sum(a["status"]=="downloaded" for a in allitems),"total":len(allitems),"items":allitems}
    REPORT.parent.mkdir(parents=True,exist_ok=True)
    REPORT.write_text(json.dumps(report,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("SUMMARY",report["downloaded"],"/",report["total"],flush=True)
    if report["downloaded"]!=report["total"]:
        sys.exit(1)

if __name__=="__main__":main()
