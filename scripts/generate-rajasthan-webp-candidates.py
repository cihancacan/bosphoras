#!/usr/bin/env python3
"""Rajasthan #78: prepare licensed geographic photo WebP CANDIDATES, not approved assets.

Requires Pillow and requests. Run from repository root:
    python -m pip install Pillow requests
    python scripts/generate-rajasthan-webp-candidates.py

This never modifies Preview/public-use approval flags and never scrapes hotel imagery.
A separate visual and source-hash review is mandatory before any destination release.
"""
from __future__ import annotations
import hashlib
import io
import json
import os
import time
from pathlib import Path
from urllib.parse import unquote

import requests
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PLAN = ROOT / "data/travel/rajasthanPhotoProductionPlan.json"
REPORT = ROOT / "data/travel/rajasthanWebpCandidateReport.json"
plan = json.loads(PLAN.read_text(encoding="utf-8"))
scenes = plan["sceneCandidates"]
assert plan["destination"] == "rajasthan"
assert len(scenes) == 9 and len(plan["hotelPhotoSlots"]) == 12
assert not plan["previewApproved"] and not plan["publicUseApproved"]
assert all(p["license"] == "CC BY-SA 4.0" and p["sourcePage"].startswith("https://commons.wikimedia.org/wiki/File:") for p in scenes)
assert len({p["sourcePage"] for p in scenes}) == 9

s = requests.Session()
s.headers.update({"User-Agent": "BosphorasEditorialImageResearch/1.0 (Wikimedia attribution retained)"})

def candidate_urls(item):
    title = unquote(item["sourcePage"].split("/wiki/", 1)[1]).replace("_", " ")
    params = {"action":"query","titles":title,"prop":"imageinfo",
              "iiprop":"url|sha1","iiurlwidth":"1280","format":"json"}
    response = s.get("https://commons.wikimedia.org/w/api.php",params=params,timeout=35)
    response.raise_for_status()
    pages = response.json()["query"]["pages"]
    info = next(iter(pages.values())).get("imageinfo", [])
    if not info:
        raise RuntimeError(f"No Commons imageinfo for {title}")
    metadata = info[0]
    urls = [metadata.get("thumburl"), metadata.get("url")]
    return [u for u in dict.fromkeys(urls) if u and u.startswith("https://")], metadata

def download_image(item):
    urls, metadata = candidate_urls(item)
    last = None
    for url in urls:
        for attempt in range(3):
            try:
                response = s.get(url,timeout=45)
                response.raise_for_status()
                if not response.headers.get("Content-Type","").startswith("image/"):
                    raise ValueError("Wikimedia returned non-image response")
                raw = response.content
                with Image.open(io.BytesIO(raw)) as im:
                    normalized = ImageOps.exif_transpose(im).convert("RGB")
                    normalized.load()
                if normalized.width < 760 or normalized.height < 440:
                    raise ValueError(f"source too small {normalized.size}")
                return normalized, raw, metadata, url
            except (ValueError, requests.RequestException, OSError) as exc:
                last = exc
                time.sleep(min(2+attempt,4))
    raise RuntimeError(f"Cannot download {item['key']}: {last}")

results = []
for item in scenes:
    print("SOURCE",item["key"],item["sourcePage"],flush=True)
    image,original,info,used = download_image(item)
    old_size = list(image.size)
    image.thumbnail((1280,850),Image.Resampling.LANCZOS)
    target = item["webpLocalPath"]
    assert target.startswith("/images/travel/rajasthan-premium/destination/")
    path = ROOT / "public" / target.lstrip("/")
    path.parent.mkdir(parents=True,exist_ok=True)
    quality=78
    while quality>=56:
        buffer=io.BytesIO()
        image.save(buffer,format="WEBP",quality=quality,method=6)
        content=buffer.getvalue()
        if len(content)<=350_000:
            break
        quality-=4
    else:
        raise RuntimeError(f"{item['key']}: WebP still larger than 350 KB")
    path.write_bytes(content)
    with Image.open(path) as verified:
        assert verified.format=="WEBP" and verified.width<=1280 and verified.height<=850
    original_sha=hashlib.sha256(original).hexdigest()
    sha=hashlib.sha256(content).hexdigest()
    results.append({"key":item["key"],"sourcePage":item["sourcePage"],
        "credit":item["credit"],"license":item["license"],
        "licenseUrl":item["licenseUrl"],"downloadUrl":used,
        "wikimediaOriginalSHA1":info.get("sha1"),
        "downloadedOriginalSHA256":original_sha,
        "WebPSHA256":sha,"originalPixels":old_size,
        "WebPPixels":list(image.size),"originalBytes":len(original),
        "WebPBytes":len(content),"WebPQuality":quality,
        "localPath":target,"visuallyApproved":False,
        "publicationApproved":False})
    print("CANDIDATE_WEBP",item["key"],len(content),str(path),flush=True)

assert len(results)==9 and len({x["WebPSHA256"] for x in results})==9
REPORT.write_text(json.dumps({
    "destination":"rajasthan","status":"CANDIDATE_ONLY_PENDING_VISUAL_AND_HOTEL_REVIEW",
    "regionalSceneCount":len(results),"hotelPhotosReady":0,"publicUseApproved":False,
    "previewApproved":False,
    "copyrightNote":"CC BY-SA photos require proper credit, source links and compliant sharing of adaptations.",
    "photos":results},ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
print("RAJASTHAN_9_WEBP_CANDIDATES_GENERATED_NOT_PUBLISHABLE",flush=True)
