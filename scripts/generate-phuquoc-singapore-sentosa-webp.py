#!/usr/bin/env python3
"""Bosphoras #73–75: real local WebP import of exactly 21 PRE-REVIEWED photos per destination.
No rights escalation: HOTEL photos stay owner Preview only, noindex. A source photo that
does not match its recorded original SHA-256 or reviewed 80x80 pixel hash is REJECTED.
"""
import argparse
import hashlib
import io
import json
import re
import time
from pathlib import Path
from urllib.parse import quote

import requests
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
CONFIG = {
    "phu-quoc": "phuQuoc",
    "singapore": "singapore",
    "sentosa": "sentosa",
}
parser = argparse.ArgumentParser()
parser.add_argument("--destination", choices=CONFIG.keys(), required=True)
args = parser.parse_args()
slug = args.destination
stem = CONFIG[slug]
manifest = json.loads((ROOT / f"data/travel/{stem}MediaCandidates.json").read_text(encoding="utf8"))
photos = manifest["destinationScenes"] + manifest["hotels"]
assert len(manifest["destinationScenes"]) == 9
assert len(manifest["hotels"]) == 12
assert len(photos) == 21
assert len({p["sha256"] for p in photos}) == 21
assert len({p["pixelFingerprint"] for p in photos}) == 21
assert all(p["visuallyVerified"] and p["previewVisualApproved"] for p in photos)
assert all(p["commercialRightsCleared"] for p in manifest["destinationScenes"])
assert all(not p["commercialRightsCleared"] for p in manifest["hotels"])
assert manifest["publicUseApproved"] is False
reviewed = json.loads((ROOT / "data/travel/reviewedPhotoDhash73-75.json").read_text(encoding="utf8"))["hashes"].get(slug,{})
def perceptual_dhash(image):
    sm=ImageOps.grayscale(image).resize((9,8),Image.Resampling.LANCZOS)
    a=list(sm.getdata());v=0
    for y in range(8):
        for x in range(8):
            v=(v<<1)|(a[y*9+x]>a[y*9+x+1])
    return v

client = requests.Session()
client.headers.update({"User-Agent":"Mozilla/5.0"})

def checked_download(p):
    urls = [p["publicPreviewUrl"]]
    if p["sourcePage"].startswith("https://commons.wikimedia.org/wiki/File:"):
        name=p["sourcePage"].split("File:",1)[1].replace("_"," ")
        urls += [
          "https://commons.wikimedia.org/wiki/Special:FilePath/"+quote(name)+"?width=1280",
          p["publicPreviewUrl"].split("?utm_",1)[0],
        ]
    errors=[]
    for url in dict.fromkeys(urls):
        for trial in range(3):
            try:
                response=client.get(url, timeout=30, allow_redirects=True)
                response.raise_for_status()
                raw=response.content
                with Image.open(io.BytesIO(raw)) as im:
                    im=ImageOps.exif_transpose(im).convert("RGB")
                    im.load()
                    assert im.width>=760 and im.height>=430
                    exact=hashlib.sha256(raw).hexdigest()==p["sha256"]
                    pixels=hashlib.sha256(im.resize((80,80)).tobytes()).hexdigest()==p["pixelFingerprint"]
                    review_hash=reviewed.get(p["key"])
                    distance=(perceptual_dhash(im)^int(review_hash,16)).bit_count() if review_hash else 64
                    assert exact or pixels or distance<=5, (
                        f"source image differs from approved photo: visual hash distance={distance}/64"
                    )
                    return im, len(raw), exact, pixels, distance
            except Exception as exc:
                errors.append(str(exc)[:130])
                if trial<2: time.sleep(min(trial+1,2))
    raise RuntimeError(f"REVIEW_BLOCK {slug}/{p['key']}: "+str(errors[-4:]))

stats=[]
for p in photos:
    assert re.fullmatch("/images/travel/"+re.escape(slug)+r"-premium/[a-z0-9/-]+\.webp",p["localPath"])
    destination=ROOT/"public"/p["localPath"].lstrip("/")
    destination.parent.mkdir(parents=True,exist_ok=True)
    im,src_bytes,sha_ok,pixel_ok,visual_distance=checked_download(p)
    source_size=list(im.size)
    im.thumbnail((1280,850),Image.Resampling.LANCZOS)
    im.save(destination,"WEBP",quality=76,method=6)
    b=destination.read_bytes()
    with Image.open(io.BytesIO(b)) as check:
        assert check.format=="WEBP"
        width,height=check.size
        assert width<=1280 and height<=850 and width>=760 and height>=430
        assert len(b)<350000, f"too large {p['key']}"
    stats.append({
        "key":p["key"],"localPath":p["localPath"],"property":p["property"],
        "originalPixels":source_size,"webpPixels":[width,height],
        "originalBytes":src_bytes,"webpBytes":len(b),
        "webpSha256":hashlib.sha256(b).hexdigest(),
        "reviewedOriginalSha256":p["sha256"],
        "originalShaMatched":sha_ok,"originalPixelsMatched":pixel_ok,"visualDhashDistance":visual_distance,
        "commercialRightsCleared":p["commercialRightsCleared"],
    })
    print("WEBP_OK",slug,p["key"],f"{width}x{height}",len(b),"bytes",flush=True)

assert len(stats)==21
assert len({x["webpSha256"] for x in stats})==21
assert sum(x["webpBytes"] for x in stats)<6000000
audit={
    "destination":slug,"format":"WEBP","quality":76,"maxDimensions":[1280,850],
    "totalPhotos":21,"landscapes":9,"propertyPhotos":12,"publicUseApproved":False,
    "rightsNotice":"Hotel commercial photo rights not approved: protected noindex owner Preview only.",
    "totalOriginalBytes":sum(x["originalBytes"] for x in stats),
    "totalWebpBytes":sum(x["webpBytes"] for x in stats),
    "photos":stats,
}
(ROOT/f"data/travel/{stem}WebpOptimization.json").write_text(json.dumps(audit,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
print("BOSPHORAS_WEBP_SUCCESS",slug,"original",audit["totalOriginalBytes"],"webp",audit["totalWebpBytes"],flush=True)
