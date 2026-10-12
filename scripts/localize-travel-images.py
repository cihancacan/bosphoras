#!/usr/bin/env python3
"""One-shot, verifiable image localization for the Istanbul Travel preview branch.

Read the explicitly curated hotelPhotography.ts entries. Download up to one file per
entry, reject invalid images, resize to WebP, preserve an auditable source manifest,
and only switch a TypeScript source URL once its binary file exists.
No production branch, credentials, or booking endpoints are involved.
"""
import concurrent.futures
import hashlib
import io
import json
import re
from pathlib import Path
from urllib.parse import urlsplit

import requests
from PIL import Image, ImageOps, UnidentifiedImageError

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "data" / "travel" / "hotelPhotography.ts"
OUTPUT_ROOT = ROOT / "public" / "images" / "travel" / "istanbul"
REPORT = ROOT / "data" / "travel" / "downloadReport.json"
PERMITTED_HOSTS = {
    "storage.kempinski.com", "www.fourseasons.com", "cache.marriott.com",
    "m.ahstatic.com", "media.cntraveler.com", "www.pasifika.es",
    "media.assettype.com", "ik.imgkit.net", "istanbulhammam.com",
    "www.turizmajansi.com", "byconnoisseur.com", "bynder.onthebeach.co.uk",
    "sitecore-cd.shangri-la.com", "img.skininc.com",
}
PATTERN = re.compile(r"(?m)^\s*photo\('(?P<filename>[^']+)','(?P<src>https://[^']+)'")
TIMEOUT = (10, 30)
HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; BosphorasEditorialAssetImporter/1.0)",
    "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
}
def attempt_urls(url):
    options = [url]
    if "cache.marriott.com" in url:
        better = url.replace("wid=375", "wid=1200").replace(
            "downsize=375px%3A%2A", "downsize=1200px%3A%2A"
        ).replace("wid=750", "wid=1200")
        if better != url: options.insert(0, better)
    return options

def download(entry):
    name, src = entry
    hotel = name.split("-0", 1)[0]
    if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*-\d\d-[a-z0-9-]+\.jpg", name):
        return dict(filename=name, status="invalid-filename")
    if urlsplit(src).hostname not in PERMITTED_HOSTS:
        return dict(filename=name, status="untrusted-host")
    errors = []
    for candidate in attempt_urls(src):
        try:
            r = requests.get(candidate, headers=HEADERS, timeout=TIMEOUT,
                             allow_redirects=True, stream=True)
            r.raise_for_status()
            if urlsplit(r.url).scheme != "https":
                raise ValueError("insecure-redirect")
            if urlsplit(r.url).hostname not in PERMITTED_HOSTS:
                raise ValueError("redirect-outside-allowlist")
            chunks, total = [], 0
            for chunk in r.iter_content(65536):
                total += len(chunk)
                if total > 12 * 1024 * 1024:
                    raise ValueError("asset-too-large")
                chunks.append(chunk)
            binary = b"".join(chunks)
            if not binary:
                raise ValueError("empty-response")
            with Image.open(io.BytesIO(binary)) as original:
                original.verify()
            with Image.open(io.BytesIO(binary)) as original:
                original = ImageOps.exif_transpose(original)
                if original.width < 350 or original.height < 240:
                    raise ValueError(f"low-resolution:{original.width}x{original.height}")
                width, height = original.size
                original.thumbnail((1800, 1350), Image.Resampling.LANCZOS)
                if original.mode not in ("RGB", "RGBA"):
                    original = original.convert("RGB")
                buf = io.BytesIO()
                original.save(buf, "WEBP", quality=82, method=5)
            output_name = name.rsplit(".", 1)[0] + ".webp"
            output = OUTPUT_ROOT / hotel / output_name
            output.parent.mkdir(parents=True, exist_ok=True)
            content = buf.getvalue()
            output.write_bytes(content)
            return {
                "filename": name, "status": "downloaded", "sourceUrl": src,
                "downloadedFrom": r.url, "localPath": "/" + output.relative_to(ROOT / "public").as_posix(),
                "sourceWidth": width, "sourceHeight": height, "bytes": len(content),
                "sha256": hashlib.sha256(content).hexdigest(),
            }
        except (requests.RequestException, ValueError, OSError, UnidentifiedImageError) as exc:
            errors.append(type(exc).__name__ + ": " + str(exc)[:180])
        finally:
            try: r.close()
            except (NameError, UnboundLocalError): pass
    return {"filename": name, "status": "unavailable", "sourceUrl": src, "errors": errors}

def main():
    text = MANIFEST.read_text(encoding="utf-8")
    entries = [(m.group("filename"), m.group("src")) for m in PATTERN.finditer(text)]
    if len(entries) < 30 or len(entries) > 65:
        raise RuntimeError(f"Unexpected remote image count: {len(entries)}")
    if len({name for name, _ in entries}) != len(entries):
        raise RuntimeError("Duplicate destination filenames")
    print(f"Checking {len(entries)} external image URLs")
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        results = list(pool.map(download, entries))
    for result in results:
        if result["status"] == "downloaded":
            old = "'" + result["sourceUrl"] + "'"
            key = "photo('" + result["filename"] + "'," + old
            if text.count(key) != 1:
                raise RuntimeError("Manifest changed for " + result["filename"])
            text = text.replace(key,
                "photo('" + result["filename"] + "','" + result["localPath"] + "'", 1)
        print(result["status"], result["filename"])
    MANIFEST.write_text(text, encoding="utf-8")
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    report = {
        "source": "Bosphoras Travel Istanbul editorial pilot",
        "scope": "feature branch / 9 selected Istanbul hotels",
        "note": "User stated image reuse is authorized; rights were not independently verified.",
        "attempted": len(entries),
        "downloaded": sum(r["status"] == "downloaded" for r in results),
        "unavailable": sum(r["status"] != "downloaded" for r in results),
        "items": results,
    }
    REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("SUMMARY", json.dumps({k: report[k] for k in ("attempted", "downloaded", "unavailable")}))
    if report["downloaded"] < 1:
        print("WARNING: all hosts rejected downloads. The source URLs remain in Preview.")

if __name__ == "__main__":
    main()
