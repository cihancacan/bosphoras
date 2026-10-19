#!/usr/bin/env python3
"""Collect EXACT Gstaad image candidates. Never approve images or publish a page.

Sources: official Gstaad Palace galleries and Wikimedia Commons with location
matching the requested sector. Missing/uncertain frames remain QA-blocked.
This does not build, deploy, or modify Next.js routes.
"""
from __future__ import annotations

import hashlib
import html
import json
import re
import time
from io import BytesIO
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageOps

ROOT = Path("data/travel/gstaadMediaCandidates.json")
OUT = Path("public/images/travel/gstaad-premium")
SESSION = requests.Session()
SESSION.headers.update({
    "User-Agent": "BosphorasLuxuryStays/2.0 (Gstaad provenance and QA; contact via bosphoras.com)",
    "Accept": "application/json,text/html,image/avif,image/webp,image/jpeg,image/*;q=0.8",
})
COMMONS = "https://commons.wikimedia.org/w/api.php"
PALACE = [
    ("view-1", ["https://www.palace.ch/en/gallery", "https://www.palace.ch/en/"],
     ["palace", "winter", "exterior"], ["portrait", "history", "people", "bride", "wedding"]),
    ("view-2", ["https://www.palace.ch/en/rooms-suites/tower-junior-suite-mountain-view/",
                "https://www.palace.ch/en/gallery"],
     ["junior", "suite", "room"], ["portrait", "history", "staff", "wedding"]),
    ("view-3", ["https://www.palace.ch/en/gallery"],
     ["spa", "indoor", "pool"], ["portrait", "history", "wedding"]),
])
SCENES = {
    "scene-1": ("Gstaad pedestrian promenade", ("gstaad", "promenade")),
    "scene-2": ("Gstaad Palace village panorama", ("gstaad", "palace")),
    "scene-3": ("Saanen village old town Switzerland", ("saanen",)),
    "scene-4": ("Eggli Gstaad mountain panorama", ("eggli",)),
    "scene-5": ("Wispile Gstaad mountain", ("wispile",)),
    "scene-6": ("Wasserngrat Gstaad mountain", ("wasserngrat",)),
    "scene-7": ("Schönried village Saanen", ("schönried",)),
    "scene-8": ("Saanenmöser Swiss Alps", ("saanenmöser",)),
    "scene-9": ("Lauenensee Lauenen landscape", ("lauenensee",)),
}
EXCLUDE = ("portrait", "selfie", "advert", "poster", "plan", "map", "logo",
           "chef", "politician", "airport", "advertisement", "railway map")

def get(url: str, **kwargs):
    try:
        r = SESSION.get(url, timeout=28, **kwargs)
        r.raise_for_status()
        return r
    except requests.RequestException as exc:
        print("SOURCE_ERROR", url[:160], str(exc)[:180], flush=True)
        return None

def images_from_official(page: str, wanted: list[str], unwanted: list[str]):
    response = get(page)
    if response is None:
        return []
    soup = BeautifulSoup(response.text, "html.parser")
    result = []
    for tag in soup.select("img,source,a[href],meta[property='og:image']"):
        label = " ".join(str(tag.get(k) or "") for k in
                         ("alt","title","aria-label","data-caption"))
        for attr in ("src", "data-src", "data-lazy-src", "data-original",
                     "data-image", "srcset", "data-srcset", "href", "content"):
            raw = tag.get(attr) or ""
            for chunk in re.split(r",\s*(?=https?://|/)", html.unescape(str(raw))):
                candidate = chunk.strip().split(" ")[0].strip("'\"")
                if not candidate:
                    continue
                url = urljoin(page, candidate)
                domain = (urlparse(url).hostname or "").lower()
                if not url.startswith("https://") or "palace.ch" not in domain:
                    continue
                if not re.search(r"\.(jpg|jpeg|png|webp)(?:$|[?])", url, re.I):
                    continue
                lower = (label + " " + url).lower()
                if any(word in lower for word in unwanted):
                    continue
                score = sum(word in lower for word in wanted)
                if score < 1:
                    continue
                result.append((score, url, page, label or "Gstaad Palace official gallery", "Official hotel media; exact subject must be checked"))
    return sorted(result, key=lambda x: (-x[0], x[1]))

def images_from_commons(query: str, required: tuple[str, ...]):
    response = get(COMMONS, params={
        "action": "query", "generator": "search", "gsrsearch": query,
        "gsrnamespace": 6, "gsrlimit": 35, "prop": "imageinfo",
        "iiprop": "url|extmetadata", "iiurlwidth": 1700, "format": "json",
    })
    if response is None:
        return []
    try:
        pages = response.json()["query"]["pages"].values()
    except (KeyError, ValueError, AttributeError):
        print("COMMONS_EMPTY", query, flush=True)
        return []
    result = []
    for page in pages:
        title = page.get("title", "")
        data = (page.get("imageinfo") or [{}])[0]
        ext = data.get("extmetadata") or {}
        description = BeautifulSoup(ext.get("ImageDescription", {}).get("value", ""), "html.parser").get_text(" ", strip=True)
        txt = (title+" "+description).casefold().replace("ö", "o")
        tokens = [x.casefold().replace("ö","o") for x in required]
        if not any(token in txt for token in tokens):
            continue
        if any(word in title.casefold() for word in EXCLUDE):
            continue
        url = data.get("thumburl") or data.get("url")
        if not url or not re.search(r"\.(jpe?g|png|webp)(?:$|[?])", url, re.I):
            continue
        author = BeautifulSoup(ext.get("Artist", {}).get("value", ""), "html.parser").get_text(" ", strip=True)
        license_name = ext.get("LicenseShortName", {}).get("value", "Unverified licence")
        credit = (author or "Wikimedia contributor") + " | " + license_name
        source = "https://commons.wikimedia.org/wiki/" + title.replace(" ", "_")
        score = sum(token in txt for token in tokens) * 2
        result.append((score, url, source, title, credit))
    return sorted(result, key=lambda x: (-x[0], x[2]))

def write_candidate(item, candidates, used_hashes, used_urls):
    if item.get("status") == "candidate_needs_visual_review" and item.get("localPath"):
        return False
    for score, url, source, caption, credit in candidates:
        canonical = url.split("?")[0].replace("https://thumb.wikimedia.org", "https://upload.wikimedia.org")
        if canonical in used_urls:
            continue
        response = get(url)
        if response is None or len(response.content) > 16_000_000:
            continue
        try:
            with Image.open(BytesIO(response.content)) as original:
                original = ImageOps.exif_transpose(original)
                width, height = original.size
                if width < 1100 or height < 550 or not (1.15 <= width / height <= 3.4):
                    continue
                frame = original.convert("RGB")
                frame.thumbnail((1700, 1200), Image.Resampling.LANCZOS)
                result = BytesIO()
                frame.save(result, "WEBP", quality=84, method=5)
                payload = result.getvalue()
        except (OSError, ValueError):
            continue
        digest = hashlib.sha256(payload).hexdigest()
        if digest in used_hashes or len(payload) < 20000:
            continue
        if item.get("propertyKey"):
            file = OUT / item["propertyKey"] / (item["key"] + ".webp")
        else:
            file = OUT / "destination" / (item["key"] + ".webp")
        file.parent.mkdir(parents=True, exist_ok=True)
        file.write_bytes(payload)
        item.update({
            "status": "candidate_needs_visual_review",
            "visuallyVerified": False,
            "commercialRightsCleared": False,
            "visualQaWarning": "New candidate; verify exact image content, source attribution, rights and premium quality before use.",
            "localPath": "/" + file.as_posix().removeprefix("public/"),
            "downloadUrl": url, "sourcePage": source,
            "candidateContext": caption, "credit": credit,
            "sha256": digest, "bytes": len(payload),
            "originalSize": [width, height],
            "outputSize": list(frame.size),
        })
        used_hashes.add(digest)
        used_urls.add(canonical)
        print("CANDIDATE_SAVED", item.get("propertyKey", "destination"), item["key"], source, flush=True)
        return True
    print("STILL_MISSING", item.get("propertyKey", "destination"), item["key"], flush=True)
    return False

def main():
    data = json.loads(ROOT.read_text(encoding="utf-8"))
    hotel_items = data["hotels"]
    scene_items = data["destinationScenes"]
    used_hashes = {x.get("sha256") for x in hotel_items + scene_items if x.get("sha256")}
    used_urls = {x.get("downloadUrl", "").split("?")[0].replace("https://thumb.wikimedia.org",
        "https://upload.wikimedia.org") for x in hotel_items + scene_items if x.get("downloadUrl")}
    changed = False
    for key, pages, good, bad in PALACE:
        item = next(x for x in hotel_items if x.get("propertyKey") == "gstaad-palace" and x["key"] == key)
        hits = []
        for page in pages:
            hits.extend(images_from_official(page, good, bad))
        changed |= write_candidate(item, hits, used_hashes, used_urls)
    for key, (query, terms) in SCENES.items():
        item = next(x for x in scene_items if x["key"] == key)
        changed |= write_candidate(item, images_from_commons(query, terms), used_hashes, used_urls)
        time.sleep(0.2)
    data["downloadedHotelCandidates"] = sum(x["status"]=="candidate_needs_visual_review" for x in hotel_items)
    data["downloadedDestinationCandidates"] = sum(x["status"]=="candidate_needs_visual_review" for x in scene_items)
    # No auto QA / publication even when all 21 files have been recovered.
    data["visuallyVerified"] = False
    data["approvedForCommercialPublication"] = False
    if changed:
        ROOT.write_text(json.dumps(data, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")
    print("GSTAAD_ASSET_COUNTS",data["downloadedHotelCandidates"],"/12 hotels,",
          data["downloadedDestinationCandidates"],"/9 landscape candidates; all new assets remain hidden")

if __name__ == "__main__":
    main()
