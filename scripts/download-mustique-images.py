#!/usr/bin/env python3
"""Preview-only Mustique media importer.
Every downloaded image must originate on the official Mustique site.
Images from property pages stay attributed to THAT property. Destination
scenes are kept geographically generic until individually reviewed.
The user's project authorisation is not proof of third-party commercial rights.
"""
from __future__ import annotations
from pathlib import Path
from io import BytesIO
from urllib.parse import urljoin, urlparse
from datetime import datetime, timezone
import hashlib
import json
import re
import time
import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageOps

BASE = "https://www.mustique-island.com"
ROOT = Path("public/images/travel/mustique-premium")
PROPERTY_REPORT = Path("data/travel/mustiquePremiumImageSources.json")
ISLAND_REPORT = Path("data/travel/mustiqueDestinationImageSources.json")
S = requests.Session()
S.headers.update({"User-Agent": "Bosphoras-Luxury-Stays/1.0 (official property image attribution review)", "Accept": "text/html,image/webp,image/jpeg,image/*;q=.8"})
PROPERTIES = [
    ("cotton-house", BASE + "/villas-and-hotel/the-cotton-house"),
    ("the-beach-house", BASE + "/villa/the-beach-house"),
    ("macaroni-beach-house", BASE + "/villa/macaroni-beach-house"),
    ("cottonwick", BASE + "/villa/cottonwick"),
]
DESTINATION_PAGES = [
    BASE + "/",
    BASE + "/activities",
    BASE + "/dining",
    BASE + "/conservation",
]
used_hashes: set[str] = set()


def official_image_url(raw: str, page: str) -> str | None:
    raw = raw.strip().strip("'\"")
    if not raw or raw.startswith("data:"):
        return None
    url = urljoin(page, raw)
    parsed = urlparse(url)
    if parsed.scheme != "https" or parsed.hostname not in ("www.mustique-island.com", "mustique-island.com"):
        return None
    if "/img/containers/assets/" not in parsed.path:
        return None
    return url


def collect_gallery(page: str) -> list[str]:
    print("Page:", page, flush=True)
    try:
        response = S.get(page, timeout=24)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, "html.parser")
    except (requests.RequestException, ValueError) as exc:
        print("Could not fetch page:", str(exc)[:180], flush=True)
        return []
    candidates: list[str] = []
    def add(value: str):
        for part in value.split(","):
            if "url(" in part:
                part = part.partition("url(")[-1].partition(")")[0]
            part = part.strip().split(" ")[0]
            url = official_image_url(part, page)
            if url and url not in candidates:
                candidates.append(url)
    for tag in soup.select("meta[property='og:image'], meta[name='twitter:image']"):
        add(tag.get("content", ""))
    for tag in soup.find_all(["img", "source", "a", "video", "div", "section"]):
        for attr in ("src", "data-src", "srcset", "data-srcset", "data-lazy", "data-background", "href", "poster"):
            value = tag.get(attr)
            if isinstance(value, str):
                add(value)
        style = tag.get("style", "")
        if isinstance(style, str) and "url(" in style:
            for result in re.findall(r"url\(([^)]+)\)", style):
                add(result)
    for value in re.findall(r'(?:https?:)?//(?:www\.)?mustique-island\.com/img/containers/assets/[^\s"<>]+', response.text):
        add(value.replace("&amp;", "&"))
    print("Property-specific image candidates:", len(candidates), flush=True)
    return candidates


def fetch_webp(url: str) -> tuple[bytes, tuple[int, int], tuple[int, int]] | None:
    try:
        response = S.get(url, timeout=25)
        response.raise_for_status()
        if len(response.content) > 19_000_000:
            return None
        with Image.open(BytesIO(response.content)) as img:
            img = ImageOps.exif_transpose(img).convert("RGB")
            size = img.size
            if size[0] < 780 or size[1] < 450:
                return None
            ratio = size[0] / size[1]
            if not 1.1 < ratio < 2.8:
                return None
            img.thumbnail((1950, 1500), Image.Resampling.LANCZOS)
            output = BytesIO()
            img.save(output, "WEBP", quality=81, method=5)
            return output.getvalue(), size, img.size
    except (requests.RequestException, OSError, ValueError) as exc:
        print("Image rejected:", url[:100], str(exc)[:100], flush=True)
    return None


def build_entries(key: str, url: str, count: int, folder: str, property_slug: str | None = None) -> list[dict]:
    items: list[dict] = []
    candidates = collect_gallery(url)
    if property_slug == "cotton-house":
        # The main page has only one full-size image; these are the hotel's
        # OFFICIAL room-gallery pages, never photos from another property.
        for extra in (
            BASE + "/villas-and-hotel/the-cotton-house/garden-view",
            BASE + "/villas-and-hotel/the-cotton-house/sea-view",
            BASE + "/villas-and-hotel/the-cotton-house/the-residence",
        ):
            for candidate in collect_gallery(extra):
                if candidate not in candidates:
                    candidates.append(candidate)
    index = 0
    for n in range(1, count + 1):
        name = f"view-{n}" if property_slug else f"island-{n}"
        dest = ROOT / folder / (name + ".webp")
        entry = {
            "key": name, "sourcePage": url, "localPath": "/" + str(dest),
            "status": "failed",
            "rights": "Preview only; the client authorises use but independent third-party commercial rights remain unverified",
        }
        if property_slug:
            entry["hotel"] = property_slug
        while index < len(candidates):
            candidate = candidates[index]
            index += 1
            rendered = fetch_webp(candidate)
            if rendered is None:
                continue
            data, original, resized = rendered
            digest = hashlib.sha256(data).hexdigest()
            if digest in used_hashes:
                continue
            used_hashes.add(digest)
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_bytes(data)
            entry.update(status="downloaded", downloadUrl=candidate, credit="The Mustique Company · official site",
                         originalSize=original, outputSize=resized, sha256=digest, bytes=len(data))
            break
        if entry["status"] != "downloaded":
            print("MISSING", folder, name, "— not substituted with another location or villa", flush=True)
        items.append(entry)
    return items


def report(path: Path, label: str, expected: int, items: list[dict]):
    status = {
        "scope": label,
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "expected": expected, "downloaded": sum(i["status"] == "downloaded" for i in items),
        "items": items,
    }
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(status, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(path, "downloaded", status["downloaded"], "of", expected, flush=True)


def main():
    hotel_items: list[dict] = []
    for slug, page in PROPERTIES:
        hotel_items.extend(build_entries(slug, page, 3, slug, property_slug=slug))
        time.sleep(0.4)
    report(PROPERTY_REPORT, "Four official Mustique property galleries (one hotel, three villas); PREVIEW rights pending", 12, hotel_items)
    # Every scene retains its actual sourcePage; no potentially false beach/place labels.
    destination_items: list[dict] = []
    all_urls: list[str] = []
    for page in DESTINATION_PAGES:
        all_urls.extend(collect_gallery(page))
    seen = set()
    all_urls = [x for x in all_urls if not (x in seen or seen.add(x))]
    index = 0
    for n in range(1, 10):
        name = f"island-{n}"
        dest = ROOT / "destination" / (name + ".webp")
        entry = {"key": name, "sourcePage": BASE + "/", "localPath": "/" + str(dest), "status": "failed",
                 "rights": "Preview only; image's precise subject and third-party commercial rights require approval"}
        while index < len(all_urls):
            candidate = all_urls[index]
            index += 1
            rendered = fetch_webp(candidate)
            if rendered is None:
                continue
            data, original, resized = rendered
            digest = hashlib.sha256(data).hexdigest()
            if digest in used_hashes:
                continue
            used_hashes.add(digest)
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_bytes(data)
            entry.update(status="downloaded", downloadUrl=candidate, sourcePage=candidate.split("/img/containers/assets/")[0] + "/",
                         credit="The Mustique Company · official Mustique site", originalSize=original, outputSize=resized,
                         sha256=digest, bytes=len(data))
            break
        if entry["status"] != "downloaded":
            print("MISSING destination", name, flush=True)
        destination_items.append(entry)
    report(ISLAND_REPORT, "Mustique destination photographs from official pages, generic editorial captions, PREVIEW rights pending", 9, destination_items)


if __name__ == "__main__":
    main()
