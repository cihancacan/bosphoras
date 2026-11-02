#!/usr/bin/env python3
"""Udaipur #76 photo originals -> local optimized WebP. Preserve visual and rights review gates.

Run only for the feature-branch owner Preview. Hotel commercial rights remain uncleared;
the files MUST NOT be promoted to an indexed production site without separate permission.
"""
import hashlib
import io
import json
import os
import re
import sys
import time
from pathlib import Path
from urllib.parse import quote

import requests
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "data/travel/udaipurMediaCandidates.json"
REPORT = ROOT / "data/travel/udaipurWebpOptimization.json"
manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
images = manifest["destinationScenes"] + manifest["hotels"]

assert len(manifest["destinationScenes"]) == 9
assert len(manifest["hotels"]) == 12
assert len(images) == 21
assert len({p["pixelFingerprint"] for p in images}) == 21
assert all(p["visuallyVerified"] and p["previewVisualApproved"] for p in images)
assert all(p["commercialRightsCleared"] for p in manifest["destinationScenes"])
assert all(not p["commercialRightsCleared"] for p in manifest["hotels"])
assert not manifest["publicUseApproved"]

session = requests.Session()
session.headers.update({
    "User-Agent": "BosphorasLuxuryStays/1.0 (image preservation, source credited)",
    "Referer": "https://commons.wikimedia.org/",
    "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
})

def candidate_urls(item):
    urls = [item["publicPreviewUrl"]]
    if item["sourcePage"].startswith("https://commons.wikimedia.org/wiki/File:"):
        filename = item["sourcePage"].split("File:", 1)[1].replace("_", " ")
        urls.append("https://commons.wikimedia.org/wiki/Special:FilePath/" + quote(filename) + "?width=1280")
        urls.append(item["publicPreviewUrl"].split("?utm_", 1)[0])
    return list(dict.fromkeys(urls))

def fetch_checked(item):
    issues = []
    for url in candidate_urls(item):
        for attempt in range(5):
            try:
                response = session.get(url, timeout=35)
                response.raise_for_status()
                raw = response.content
                with Image.open(io.BytesIO(raw)) as image:
                    im = ImageOps.exif_transpose(image)
                    im.load()
                    im = im.convert("RGB")
                    assert im.width >= 760 and im.height >= 440, f"image is too small: {im.size}"
                    exact = hashlib.sha256(raw).hexdigest() == item["sha256"]
                    pixels = hashlib.sha256(im.resize((80, 80)).tobytes()).hexdigest() == item["pixelFingerprint"]
                    assert exact or pixels, "original-image SHA and pixel fingerprint both differ"
                    return im, len(raw), exact, pixels
            except Exception as exc:
                issues.append(str(exc)[:110])
                if attempt < 4:
                    time.sleep(min(1 + attempt, 4))
    raise RuntimeError(f"{item['key']}: original photo could not be validated against reviewed source; " + " | ".join(issues[-4:]))

stats = []
for item in images:
    destination = item["localPath"]
    assert re.fullmatch(r"/images/travel/udaipur-premium/[a-z0-9/-]+\.webp", destination), destination
    abs_path = ROOT / "public" / destination.lstrip("/")
    abs_path.parent.mkdir(parents=True, exist_ok=True)
    original, original_bytes, exact, pixels = fetch_checked(item)
    old_size = list(original.size)
    original.thumbnail((1280, 850), Image.Resampling.LANCZOS)
    original.save(abs_path, format="WEBP", quality=76, method=6, exact=False)
    b = abs_path.read_bytes()
    with Image.open(io.BytesIO(b)) as check:
        assert check.format == "WEBP"
        width, height = check.size
        assert width <= 1280 and height <= 850
        assert width >= 760 and height >= 440
        assert len(b) < 350000, f"oversized output {item['key']} {len(b)} bytes"
    stats.append(dict(
        key=item["key"], localPath=destination, property=item["property"],
        originalPixels=old_size, webpPixels=[width, height], originalBytes=original_bytes,
        webpBytes=len(b), webpSha256=hashlib.sha256(b).hexdigest(),
        reviewedOriginalSha256=item["sha256"], originalShaMatched=exact,
        originalPixelsMatched=pixels, commercialRightsCleared=item["commercialRightsCleared"],
    ))
    print(f"WEBP_OK {item['key']:<10} {width}x{height} {len(b):>7} B ({original_bytes:,} original) -> {destination}", flush=True)

assert len(stats) == 21
assert len({x["webpSha256"] for x in stats}) == 21
assert sum(p["webpBytes"] for p in stats) < 5000000
REPORT.write_text(json.dumps({
    "destination": "udaipur", "format": "WEBP", "quality": 76,
    "maxDimensions": [1280, 850], "totalPhotos": 21,
    "landscapes": 9, "propertyPhotos": 12,
    "publicUseApproved": False,
    "rightsNotice": "Private owner Preview only. Commercial hotel-photo republication rights have not been independently established.",
    "totalOriginalBytes": sum(x["originalBytes"] for x in stats),
    "totalWebpBytes": sum(x["webpBytes"] for x in stats),
    "photos": stats,
}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print("UDAIPUR_WEBP_GENERATION_SUCCESS", sum(x["webpBytes"] for x in stats), "bytes", flush=True)
