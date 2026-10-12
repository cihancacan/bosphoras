#!/usr/bin/env python3
"""Localise explicitly reviewed Wikimedia photos for Bodrum, Antalya and Dubai.

Run on Travel feature branch only; never change production, bookings or prices.
Validate file identity, Commons license, original dimensions and secure download URL.
Preserve a report with author/source/license and SHA-256 for each converted WebP.
"""
import hashlib, io, json, sys, time
from pathlib import Path
from urllib.parse import urlparse
import requests
from PIL import Image, ImageOps

ROOT=Path(__file__).resolve().parents[1]
OUTPUT=ROOT/"public/images/travel/city-guides"
REPORT=ROOT/"data/travel/featuredCityImageSources.json"
API="https://commons.wikimedia.org/w/api.php"
HEADERS={"User-Agent":"BosphorasTravelEditorialImporter/1.0 (https://www.bosphoras.com)","Accept":"application/json,image/*,*/*"}
ASSETS=[
 dict(city="bodrum",key="marina",title="YalıkavakMarina (5).jpg",author="CeeGee",license="CC0 1.0",licenseUrl="https://creativecommons.org/publicdomain/zero/1.0/"),
 dict(city="bodrum",key="harbour",title="Port de bodrum.jpg",author="Mansevikobora",license="CC BY-SA 3.0",licenseUrl="https://creativecommons.org/licenses/by-sa/3.0/"),
 dict(city="antalya",key="harbour",title="2023-01-17 Antalya Harbour.jpg",author="Maksym Kozlenko",license="CC BY-SA 4.0",licenseUrl="https://creativecommons.org/licenses/by-sa/4.0/"),
 dict(city="antalya",key="beach",title="Konyaaltı Beach.jpg",author="MrEfeS",license="CC BY-SA 4.0",licenseUrl="https://creativecommons.org/licenses/by-sa/4.0/"),
 dict(city="dubai",key="marina",title="Dubai Marina by day.jpg",author="Gfilip",license="CC BY-SA 4.0",licenseUrl="https://creativecommons.org/licenses/by-sa/4.0/"),
 dict(city="dubai",key="panorama",title="DubaiMarinaPanorama.jpg",author="@ferd1graphy",license="CC BY-SA 3.0",licenseUrl="https://creativecommons.org/licenses/by-sa/3.0/"),
]
def safe_get(url, params=None, stream=False):
    for n in range(3):
        try:
            response=requests.get(url,params=params,headers=HEADERS,timeout=(12,40),stream=stream)
            if response.status_code in (429,500,502,503,504):
                response.close(); time.sleep(2+n*2); continue
            response.raise_for_status()
            return response
        except requests.RequestException:
            if n==2: raise
            time.sleep(2+n*2)
    raise RuntimeError("Source unavailable")

def download(item):
    q={"action":"query","prop":"imageinfo","titles":"File:"+item["title"],
       "iiprop":"url|extmetadata|size|mime","iiurlwidth":"1700","format":"json","formatversion":"2"}
    response=safe_get(API,params=q)
    try: info_json=response.json()
    finally: response.close()
    pages=info_json["query"]["pages"]
    if len(pages)!=1 or not pages[0].get("imageinfo"):
        raise ValueError("Image not found on Commons")
    info=pages[0]["imageinfo"][0]
    if not info["mime"].startswith("image/"):
        raise ValueError("Not an image")
    metadata=info.get("extmetadata",{})
    license_url=metadata.get("LicenseUrl",{}).get("value","").replace("http://","https://").rstrip("/")
    expected=item["licenseUrl"].rstrip("/")
    if license_url!=expected and not (item["license"]=="CC0 1.0" and license_url==expected+"/deed.en"):
        raise ValueError(f"License changed: {license_url!r} expected {expected!r}")
    download_url=info.get("thumburl") or info["url"]
    if urlparse(download_url).scheme!="https" or urlparse(download_url).hostname not in ("upload.wikimedia.org","thumb.wikimedia.org"):
        raise ValueError("Untrusted download host")
    image_response=safe_get(download_url,stream=True)
    try:
        if urlparse(image_response.url).hostname not in ("upload.wikimedia.org","thumb.wikimedia.org"):
            raise ValueError("Untrusted redirect")
        if not image_response.headers.get("content-type","").startswith("image/"):
            raise ValueError("Unexpected content type")
        chunks=[]; size=0
        for chunk in image_response.iter_content(65536):
            size+=len(chunk)
            if size>22_000_000: raise ValueError("Image exceeds size limit")
            chunks.append(chunk)
        binary=b"".join(chunks)
    finally: image_response.close()
    with Image.open(io.BytesIO(binary)) as check: check.verify()
    with Image.open(io.BytesIO(binary)) as decoded:
        img=ImageOps.exif_transpose(decoded)
        source_size=img.size
        if img.width<900 or img.height<460: raise ValueError("Image resolution too low")
        img.thumbnail((1700,1300),Image.Resampling.LANCZOS)
        buffer=io.BytesIO()
        img.convert("RGB").save(buffer,format="WEBP",quality=84,method=5)
    dest=OUTPUT/item["city"]/(item["key"]+".webp")
    dest.parent.mkdir(parents=True,exist_ok=True)
    dest.write_bytes(buffer.getvalue())
    return {**item,"status":"downloaded","sourcePage":"https://commons.wikimedia.org/wiki/File:"+item["title"].replace(" ","_"),
            "downloadedFrom":image_response.url,"localPath":"/"+dest.relative_to(ROOT/"public").as_posix(),
            "sourceWidth":source_size[0],"sourceHeight":source_size[1],"bytes":dest.stat().st_size,
            "sha256":hashlib.sha256(dest.read_bytes()).hexdigest(),
            "transformations":"Orientation normalised, resized, WebP conversion"}

def main():
    results=[]
    for item in ASSETS:
        try:
            result=download(item)
            print("DOWNLOADED",item["city"],item["key"],flush=True)
        except Exception as exc:
            result={**item,"status":"unavailable","error":str(exc)[:300]}
            print("FAILED",item["city"],item["key"],result["error"],flush=True)
        results.append(result)
    REPORT.parent.mkdir(parents=True,exist_ok=True)
    report={"scope":"Bosphoras Luxury Stays Travel Preview: 3 new destination city guides",
            "note":"Licensed landscape photos illustrate destinations, not a particular hotel, villa or room view.",
            "downloaded":sum(x["status"]=="downloaded" for x in results),
            "total":len(results),"items":results}
    REPORT.write_text(json.dumps(report,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("SUMMARY",report["downloaded"],"/",report["total"],flush=True)
    if report["downloaded"]!=report["total"]: sys.exit(1)
if __name__=="__main__": main()
