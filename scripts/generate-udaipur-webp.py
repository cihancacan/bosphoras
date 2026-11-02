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

# Perceptual dHash of each original image seen and approved in the visual contact sheet.
# Needed because Wikimedia/CDN and hotel servers sometimes recompress the same picture.
# A *different* picture must still be rejected even when its URL is identical.
VISUALLY_REVIEWED_DHASH = {
  "scene-1": "808439929cd992d2",
  "scene-2": "fdeee3d3d2b2b093",
  "scene-3": "f24397b6c6f3f3d3",
  "scene-4": "30c8c4b0f1343070",
  "scene-5": "0807990f060f0f0f",
  "scene-6": "03574e9bc74e2eaf",
  "scene-7": "a72311099b332b29",
  "scene-8": "470f0f0f8f058701",
  "scene-9": "1f1b27e6058734d8",
  "taj-1": "ffff7fb4b6ffffff",
  "taj-2": "d9c2978f89898402",
  "taj-3": "ffffef37b2feffff",
  "oberoi-1": "3363636173757361",
  "oberoi-2": "00432eaed596d696",
  "oberoi-3": "2726cc99ccce4d29",
  "leela-1": "bf9f1bdbd5e5dcff",
  "leela-2": "e58d8981c6c50d6d",
  "leela-3": "4546023333232713",
  "raffles-1": "ee3bc4d6ae8f1786",
  "raffles-2": "cbf0754d4f4ff1b3",
  "raffles-3": "58184034b31355f0"
}

def dhash(image):
    reduced = ImageOps.grayscale(image).resize((9, 8), Image.Resampling.LANCZOS)
    pixels = list(reduced.getdata())
    value = 0
    for row in range(8):
        for col in range(8):
            value = (value << 1) | (pixels[row * 9 + col] > pixels[row * 9 + col + 1])
    return value


session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0"})

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
                    reviewed = int(VISUALLY_REVIEWED_DHASH[item["key"]], 16)
                    visual_distance = (dhash(im) ^ reviewed).bit_count()
                    assert exact or pixels or visual_distance <= 6, (
                        f"reviewed image differs: perceptual distance {visual_distance} / 64"
                    )
                    return im, len(raw), exact, pixels, visual_distance
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
    original, original_bytes, exact, pixels, visual_distance = fetch_checked(item)
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
        originalPixelsMatched=pixels, visualDhashDistance=visual_distance,
        commercialRightsCleared=item["commercialRightsCleared"],
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
