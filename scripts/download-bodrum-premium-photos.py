#!/usr/bin/env python3
"""Fetch selected hospitality photography for Bodrum preview, with file provenance.

Do not assert licences or supplier partnerships. Each local photo is manually tied
to its source's named property, never to another hotel. Failure keeps UI unchanged.
"""
import hashlib, io, json, sys, time
from pathlib import Path
from urllib.parse import urlparse
import requests
from PIL import Image, ImageOps

ROOT=Path(__file__).resolve().parents[1]
MANIFEST=ROOT/"data/travel/bodrumHotelPhotoCandidates.json"
OUT=ROOT/"public/images/travel/bodrum-premium"
REPORT=ROOT/"data/travel/bodrumPremiumImageSources.json"
HEADER={"User-Agent":"Mozilla/5.0 (compatible; BosphorasLuxuryStaysEditorial/1.0)","Accept":"image/webp,image/avif,image/jpeg,image/png,*/*"}
BEHANCE="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/987af397152533.5ebea9db8f39c.jpg"
BEHANCE_PAGE="https://www.behance.net/gallery/97152533/Six-Senses-Kaplankaya-Resort-Spa-Wayfinding-Design"
SPECS=[
 {"hotel":"mandarin-oriental","filename":"mandarin-paradise-bay-terrace.webp","contains":"KkeV2ndoShmTc1B42m31.jpg","credit":"Mandarin Oriental, Bodrum — official gallery"},
 {"hotel":"mandarin-oriental","filename":"mandarin-bodrum-resort.webp","contains":"bjqno34XYwY8nnPcgtki.jpg","credit":"Mandarin Oriental, Bodrum — official gallery"},
 {"hotel":"the-bodrum-edition","filename":"edition-infinity-pool.webp","contains":"bjveb-infiniy-pool-8219:Wide-Hor?wid=1336","credit":"The Bodrum EDITION — Marriott official gallery"},
 {"hotel":"the-bodrum-edition","filename":"edition-beach-club.webp","contains":"bjveb-beach-5095-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336","credit":"The Bodrum EDITION — Marriott official gallery"},
 {"hotel":"the-bodrum-edition","filename":"edition-yalikavak-terrace.webp","contains":"bjveb-terrace-5567-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336","credit":"The Bodrum EDITION — Marriott official gallery"},
 {"hotel":"maxx-royal-bodrum","filename":"maxx-royal-pool.webp","contains":"maxx-royal-bodrum-mainpage-pools.jpg?width=996&height=750","credit":"Maxx Royal Bodrum — official gallery"},
 {"hotel":"maxx-royal-bodrum","filename":"maxx-royal-island-villa.webp","contains":"mbo_maxx_island_villa_3.jpg?width=896&height=448","credit":"Maxx Royal Bodrum — official gallery"},
 {"hotel":"maxx-royal-bodrum","filename":"maxx-royal-suites.webp","contains":"maxx_royal_bodrum_suites.jpg?width=896&height=448","credit":"Maxx Royal Bodrum — official gallery"},
 {"hotel":"six-senses-kaplankaya","filename":"six-senses-sunset-terrace.webp","sourceUrl":BEHANCE,"sourcePage":BEHANCE_PAGE,"credit":"Six Senses Kaplankaya — design project by Kemalcan Başaran on Behance, not official hotel marketing"},
]
HOSTS={
 "mandarin-oriental":{"media.ffycdn.net"},
 "the-bodrum-edition":{"cache.marriott.com"},
 "maxx-royal-bodrum":{"www.maxxroyal.com"},
 "six-senses-kaplankaya":{"mir-s3-cdn-cf.behance.net"},
}
def resolve(spec, candidates):
    if "sourceUrl" in spec:return spec["sourceUrl"],spec["sourcePage"]
    matches=[x for x in candidates[spec["hotel"]]["candidates"] if spec["contains"] in x["url"]]
    matches=sorted(matches,key=lambda x:len(x["url"]))
    if not matches:raise ValueError("Curated candidate no longer present in the verified source-page report")
    return matches[0]["url"],matches[0]["sourcePage"]
def download(spec,candidates):
    url,page=resolve(spec,candidates)
    domain=urlparse(url).hostname
    if domain not in HOSTS[spec["hotel"]] or urlparse(url).scheme!="https":raise ValueError("Unapproved host")
    response=requests.get(url,headers={**HEADER,"Referer":page},timeout=(12,45),stream=True)
    try:
        response.raise_for_status()
        if urlparse(response.url).scheme!="https" or urlparse(response.url).hostname not in HOSTS[spec["hotel"]]:
            raise ValueError("Unapproved image redirect")
        chunks=[];total=0
        for block in response.iter_content(65536):
            total+=len(block)
            if total>15_000_000:raise ValueError("Image too large")
            chunks.append(block)
        raw=b"".join(chunks)
    finally:response.close()
    with Image.open(io.BytesIO(raw)) as im:im.verify()
    with Image.open(io.BytesIO(raw)) as im:
        image=ImageOps.exif_transpose(im)
        w,h=image.size
        if w<750 or h<360:raise ValueError(f"Image too small: {w}x{h}")
        image.thumbnail((1700,1350),Image.Resampling.LANCZOS)
        stream=io.BytesIO()
        image.convert("RGB").save(stream,format="WEBP",quality=85,method=5)
    local=OUT/spec["hotel"]/spec["filename"]
    local.parent.mkdir(parents=True,exist_ok=True)
    local.write_bytes(stream.getvalue())
    return {**spec,"sourceUrl":url,"sourcePage":page,"status":"downloaded",
            "localPath":"/"+local.relative_to(ROOT/"public").as_posix(),
            "width":w,"height":h,"bytes":local.stat().st_size,
            "sha256":hashlib.sha256(stream.getvalue()).hexdigest(),
            "rightsNote":"User reported project-wide authorisation; independent image rights not confirmed.",
            "transformation":"EXIF orientation normalized, resized, converted to WebP"}
def main():
    candidates=json.loads(MANIFEST.read_text(encoding="utf-8"))["hotels"]
    results=[]
    for spec in SPECS:
        try:
            item=download(spec,candidates)
            print("DOWNLOADED",spec["hotel"],spec["filename"],item["width"],"x",item["height"],flush=True)
        except Exception as e:
            item={**spec,"status":"unavailable","error":type(e).__name__+": "+str(e)[:220]}
            print("FAILED",spec["hotel"],spec["filename"],item["error"],flush=True)
        results.append(item)
    REPORT.parent.mkdir(parents=True,exist_ok=True)
    summary={"scope":"Bodrum premium photography pilot only — Preview; 4 named hotels","attempted":len(results),
             "downloaded":sum(x["status"]=="downloaded" for x in results),
             "unavailable":sum(x["status"]!="downloaded" for x in results),
             "rightsNote":"Content owner claims use authorization; photo rights were not independently verified.",
             "items":results}
    REPORT.write_text(json.dumps(summary,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("SUMMARY",summary["downloaded"],"/",summary["attempted"],flush=True)
    if summary["downloaded"]<4:sys.exit(1)
if __name__=="__main__":main()
