#!/usr/bin/env python3
"""Import two Six Senses Kaplankaya property photographs for Bodrum Preview.

Sources are hotel editorial suppliers (easyJet Holidays, Planet Escape), not official
Six Senses distribution. Do not conflate source with copyright permissions.
The third editorial image is already a local sunset-terrace WebP in this repo.
"""
import io
import json
import hashlib
import sys
import time
from pathlib import Path
from urllib.parse import urlparse

import requests
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / "public/images/travel/bodrum-premium/six-senses-kaplankaya"
REPORT = ROOT / "data/travel/sixSensesPhotoSources.json"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; BosphorasLuxuryStaysEditorial/1.0)",
    "Accept": "image/jpeg,image/webp,image/png,*/*",
}
IMAGES = [
    {
        "id": "aerial",
        "filename": "six-senses-bays-aerial-v2.webp",
        "sourceUrl": "https://ejh-web-prod-images.s3-eu-west-1.amazonaws.com/TRBD0078_81/Large/TRBD0078_52.jpg",
        "sourcePage": "https://www.easyjet.com/en/holidays/turkey/bodrum/bozbuk/six-senses-kaplankaya",
        "sourceCredit": "easyJet Holidays, Six Senses Kaplankaya gallery",
        "altFr": "Vue aérienne du Six Senses Kaplankaya et de sa baie turquoise",
        "altEn": "Aerial view of Six Senses Kaplankaya and its turquoise bay",
    },
    {
        "id": "suite",
        "filename": "six-senses-pool-suite-v2.webp",
        "sourceUrl": "https://planetescape.pl/app/uploads/2025/01/Six-Senses-Kaplankaya-Kaplankaya-Suite-with-Pool-Sea-View-Salon.jpg",
        "sourcePage": "https://planetescape.pl/en/luxury/hotel/turcja-six-senses-kaplankaya/",
        "sourceCredit": "Planet Escape, Six Senses Kaplankaya suite gallery",
        "altFr": "Salon de la suite avec piscine et vue mer du Six Senses Kaplankaya",
        "altEn": "Living room of a Six Senses Kaplankaya pool suite with sea view",
    },
]
HOSTS = {
    "ejh-web-prod-images.s3-eu-west-1.amazonaws.com",
    "planetescape.pl",
    "www.planetescape.pl",
}
def fetch_image(item):
    url = item["sourceUrl"]
    if urlparse(url).scheme != "https" or urlparse(url).hostname not in HOSTS:
        raise ValueError("Source URL not on selected allowlist")
    err = ""
    for trial in range(3):
        response = None
        try:
            response = requests.get(url, headers={**HEADERS, "Referer": item["sourcePage"]},
                                    timeout=(12, 40), stream=True)
            response.raise_for_status()
            if urlparse(response.url).scheme != "https" or urlparse(response.url).hostname not in HOSTS:
                raise ValueError("Unapproved image redirect")
            if not response.headers.get("Content-Type", "").lower().startswith("image/"):
                raise ValueError("Source did not return an image")
            chunks = []
            nbytes = 0
            for chunk in response.iter_content(128 * 1024):
                nbytes += len(chunk)
                if nbytes > 18_000_000:
                    raise ValueError("Image exceeded 18MB limit")
                chunks.append(chunk)
            image_bytes = b"".join(chunks)
            with Image.open(io.BytesIO(image_bytes)) as original:
                original.verify()
            with Image.open(io.BytesIO(image_bytes)) as original:
                original = ImageOps.exif_transpose(original)
                width, height = original.size
                if width < 800 or height < 450:
                    raise ValueError(f"Low source resolution: {width}x{height}")
                original.thumbnail((1800, 1350), Image.Resampling.LANCZOS)
                output = io.BytesIO()
                original.convert("RGB").save(output, "WEBP", quality=85, method=5)
            DEST.mkdir(parents=True, exist_ok=True)
            binary = output.getvalue()
            filename = DEST / item["filename"]
            filename.write_bytes(binary)
            return {**item, "status": "downloaded",
                    "localPath": "/" + filename.relative_to(ROOT / "public").as_posix(),
                    "width": width, "height": height, "bytes": len(binary),
                    "sha256": hashlib.sha256(binary).hexdigest(),
                    "transformations": "EXIF orientation applied, resized and saved as WebP",
                    "rightsNote": "User reports reuse authorization; third-party image rights not independently validated."}
        except Exception as e:
            err = (type(e).__name__ + ": " + str(e))[:230]
            time.sleep(2 * (trial + 1))
        finally:
            if response:
                response.close()
    return {**item, "status": "unavailable", "error": err}

def main():
    results = [fetch_image(item) for item in IMAGES]
    for result in results:
        print(result["id"], result["status"], result.get("width"), "x",
              result.get("height"), result.get("error", ""), flush=True)
    report = {
        "scope": "Bosphoras Luxury Stays, Bodrum Travel preview only",
        "downloaded": sum(x["status"] == "downloaded" for x in results),
        "total": len(results), "items": results
    }
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("SUMMARY", report["downloaded"], "/", report["total"], flush=True)
    if report["downloaded"] != len(results):
        sys.exit(1)

if __name__ == "__main__":
    main()
