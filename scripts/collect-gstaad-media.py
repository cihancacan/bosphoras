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
RUN_DIAGNOSTICS = []
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
]
ULTIMA = [
    ("view-1", ["https://www.ultimacollection.com/our-collection/ultima-hotel-gstaad/gallery"],
     ["gstaad", "exterior"], ["exterior_summer", "ultima-courchevel", "ultima_crans"]),
    ("view-2", ["https://www.ultimacollection.com/our-collection/ultima-hotel-gstaad/accommodation/four-bedroom-residence",
                "https://www.ultimacollection.com/our-collection/ultima-hotel-gstaad/accommodation",
                "https://www.ultimacollection.com/our-collection/ultima-hotel-gstaad/gallery"],
     ["residence", "living", "suite", "interior"], ["exterior_summer", "exterior_image", "ultima-courchevel", "ultima_crans"]),
    ("view-3", ["https://www.ultimacollection.com/our-collection/ultima-hotel-gstaad/wellness",
                "https://www.ultimacollection.com/our-collection/ultima-hotel-gstaad/gallery"],
     ["spa", "pool", "wellness", "jacuzzi", "gstaad-98", "gstaad-108"], ["exterior_summer", "exterior_image", "ultima-courchevel", "ultima_crans"]),
]
BELLEVUE = [
 ("view-3", ["https://bellevue-gstaad.ch/spa/", "https://bellevue-gstaad.ch/gallery/",
             "https://bellevue-gstaad.ch/rooms-suites/"],
  ["spa", "suite", "pool", "bedroom", "room"], ["restaurant", "tobias.kaser_photo.5852"]),
]
SCENES = {
    "scene-1": ("Gstaad promenade", ("gstaad",)),
    "scene-2": ("Gstaad village panorama", ("gstaad",)),
    "scene-3": ("Saanen village Switzerland", ("saanen",)),
    "scene-4": ("Eggli Gstaad Alps", ("eggli",)),
    "scene-5": ("Wispile Gstaad mountain", ("wispile",)),
    "scene-6": ("Wasserngrat Gstaad", ("wasserngrat",)),
    "scene-7": ("Schönried village Saanen", ("schönried",)),
    "scene-8": ("Saanenmöser Gstaad", ("saanenmöser",)),
    "scene-9": ("Lauenensee Switzerland", ("lauenensee",)),
}
EXCLUDE = ("portrait", "selfie", "advert", "poster", "plan", "map", "logo",
           "chef", "lindner", "politician", "airport", "advertisement",
           "train", "railway", "bahn", "locomotive", "station", "interview")

def get(url: str, **kwargs):
    try:
        r = SESSION.get(url, timeout=28, **kwargs)
        r.raise_for_status()
        return r
    except requests.RequestException as exc:
        RUN_DIAGNOSTICS.append({"type":"source_error","url":url[:250],"error":str(exc)[:220]})
        print("SOURCE_ERROR", url[:160], str(exc)[:180], flush=True)
        return None

def images_from_official(page: str, wanted: list[str], unwanted: list[str], domain_filter: str = "palace.ch"):
    response = get(page)
    if response is None:
        return []
    soup = BeautifulSoup(response.text, "html.parser")
    result = []
    for tag in soup.select("img,source,a[href],meta[property='og:image'],meta[name='twitter:image']"):
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
                if not url.startswith("https://") or not (domain == domain_filter or domain.endswith("."+domain_filter)):
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
        if any(word in (title+" "+description).casefold() for word in EXCLUDE):
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

# Exact hotel-image assets linked from Ultima Gstaad official galleries:
PALACE_EXACT = {
 "view-1": (
  "https://resc.deskline.net/images/GRI/1/a2291c76-f5c2-4d8a-a94f-2bc06e9ad6b2/99/image.jpg",
  "https://www.gstaad.ch/en/plan-book/booking/accommodation/detail/gstaad-palace-7566ljvf",
  "Gstaad Palace, sunny garden exterior from the official regional listing"),
 "view-2": (
  "https://cms.inspirato.com/ImageGen.ashx?image=%2Fmedia%2F9461967%2Fcopyright-gstaad-palace_stefano-scata_deluxe-junior-suite-mountain-view_n-18_549489_300dpi_rgb_cut-as-per-as.jpg&width=1440",
  "https://www.inspirato.com/destinations/gstaad-switzerland/residences/gstaad-deluxe-junior-suite-mountain-view/",
  "Gstaad Palace Deluxe Junior Suite; publisher identifies hotel photo credit"),
 "view-3": (
  "https://cdn.oxfordski.com/media/72542/copyright-gstaad-palace_indoor-pool.jpg?height=900&mode=crop&quality=90&scale=downscaleonly&width=1440",
  "https://www.oxfordski.com/luxury-ski-chalets-hotels/switzerland/gstaad/gstaad-palace/",
  "Gstaad Palace indoor swimming pool in winter, source credits hotel"),
}
PALACE_ALTERNATES = {
 "view-3": [
  ("https://media.tatler.com/photos/64ae821d2d2f64fb4d90b470/master/w_1600%2Cc_limit/Travel_120723_Copyright%2520Gstaad%2520Palace_Indoor%2520Pool.jpg",
   "https://www.tatler.com/article/forget-st-tropez-why-gstaad-is-the-most-glamorous-summer-hotspot",
   "Gstaad Palace true refurbished indoor pool, original hotel photo credited"),
  ("https://cdn.oxfordski.com/media/72542/copyright-gstaad-palace_indoor-pool.jpg?height=698&mode=crop&quality=85&scale=downscaleonly&width=1240",
   "https://www.oxfordski.com/luxury-ski-chalets-hotels/switzerland/gstaad/gstaad-palace/",
   "Gstaad Palace genuine indoor pool showing timber beams and snowy garden"),
  ("https://cms.inspirato.com/ImageGen.ashx?image=%2Fmedia%2F9461972%2F9copyright-gstaad-palace_stefano-scata_indoor-pool-palace-spa_570396_300dpi_rgb_favourite.jpg&width=1440",
   "https://www.inspirato.com/destinations/gstaad-switzerland/residences/gstaad-superior-room-mountain-view/",
   "Gstaad Palace indoor spa pool, hotel photography credited to Stefano Scatà"),
  ("https://static-new.lhw.com/HotelImages/Final/LW1606/lw1606_202074221_1400x600.jpg",
   "https://www.lhw.com/hotel/Gstaad-Palace-Gstaad-Switzerland",
   "Gstaad Palace renovated spa with indoor pool and lounge"),
  ("https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2022/02/IMG_6593.jpeg?ssl=1",
   "https://theluxurytravelexpert.com/review-gstaad-palace/",
   "Gstaad Palace true indoor pool and timber-beam spa; travel review source"),
  ("https://cdn.oxfordski.com/media/72542/copyright-gstaad-palace_indoor-pool.jpg?width=1240",
   "https://www.oxfordski.com/luxury-ski-chalets-hotels/switzerland/gstaad/gstaad-palace/",
   "Gstaad Palace indoor pool with snow outside; hotel credited"),
 ]
}
SCENES_EXACT = {
 "scene-6": [
  ("https://madeinbern.com/fileadmin/_processed_/f/8/csm_6_8_f_2_68f286a5a219113204b1e8b9dce4c1321b911e8f_25-03f9d784f61163777ed2dfd2d5697d95_e0225c805f.jpg",
   "https://madeinbern.com/en/business/venue-finder/wasserngrat-mountain-restaurant-gstaad",
   "Wasserngrat mountain restaurant at evening with warmly lit glass terrace and surrounding Alps"),
  ("https://img.oastatic.com/img2/59563467/source/variant.jpg",
   "https://lenk-simmental.ch/erlebnisse-touren/tour/detail/vom-leiterli-auf-den-wasserngrat",
   "Genuine Wasserngrat ridge trail panorama, hikers on summit at sunset"),
  ("https://img.welt.de/img/reise/nah/mobile189889565/9640247907-coriginal-w1200/Wasserngrat-Terrasse-jpg.jpg",
   "https://www.welt.de/reise/nah/article189738501/Gstaad-Heli-Yoga-und-Warhol-Kuehe-in-der-Tiefgarage.html",
   "Wasserngrat alpine restaurant terrace with laid tables and distant snowy mountain skyline"),
  ("https://www.gaultmillau.ch/sites/default/files/restaurant_wasserngrat_gstaad.jpg",
   "https://www.gaultmillau.ch/pop/gstaad/wasserngrat-der-gipfel-des-genusses",
   "Wasserngrat terrace with Swiss flag, panorama, and tables"),
 ],
 "scene-1": [
  ("https://cdn.globeair.com/website/m/Gstaad-Header.jpg",
   "https://www.globeair.com/b/best-ski-resorts-in-europe-for-2024",
   "Gstaad pedestrian street in winter, blue sky and chalet architecture"),
  ("https://assets01.sdd1.ch/assets/lbwp-cdn/newhome-blog/files/1487002687/gstaad_promenade_nacht.jpg",
   "https://www.newhome.ch/blog/fr/acheter/achat-immobilier/de-vraies-vacances-chez-vous/",
   "Gstaad pedestrian promenade illuminated at dusk"),
 ],
 "scene-3": [
  ("https://i.pinimg.com/originals/39/99/73/399973ef9b9b0c0d2929c43f083828ec.jpg",
   "https://uk.pinterest.com/pin/saanen-village--262334747027836080/",
   "Saanen historic timber chalet street; source attribution to check"),
 ],
 "scene-4": [
  ("https://www.bergbahnen.org/gallery/albums/gstaad/gstaad028.jpg",
   "https://www.bergbahnen.org/en/multimedia/pic/19605/",
   "Eggli–Sanetschpass winter Alpine panorama, 2018"),
 ],
 "scene-6": [
  ("https://media.myswitzerland.com/image/fetch/c_lfill%2Cg_auto%2Cw_3200%2Ch_1800/f_auto%2Cq_80%2Cfl_keep_iptc/https%3A/www.myswitzerland.com/-/media/st/gadmin/images/destinations/winter/vantage%20point/alpenbeizli_wasserngrat-gstaad-terrasse_239273.jpg",
   "https://www.myswitzerland.com/de-ch/erlebnisse/essen-trinken/restaurant/bergrestaurant-wasserngrat/",
   "Bergrestaurant Wasserngrat, sunny mountain-facing wooden terrace"),
 ],
 "scene-7": [
  ("https://files.bergwelten.com/t_image/c_fill%2Cf_auto%2Cq_auto%2Cw_1807%2Ch_1200/tour/images/Wandern-Rellerli-2.JPG",
   "https://www.bergwelten.com/t/w/23924",
   "Panoramic summer route from Schönried to Rellerli"),
 ],
 "scene-8": [
  ("https://web4.cdn-magicpass.ch/media/image/0/base/winterwandern.JPG?version=14",
   "https://www.magicpass.ch/en/offers/hornberg--gstaad-winter-hike-5203",
   "Hornberg–Gstaad snowy winter hiking trail with mountain panorama"),
 ],
 "scene-9": [
  ("https://resc.deskline.net/images/GRI/1/6d721143-64b4-4096-ad1a-5af0bc2a3f75/99/image.jpg",
   "https://www.gstaad.ch/en/plan-book/events/detail/lauenensee-discovery-tour-e9mo8fon",
   "Lauenensee alpine lake reflection with small wooden landing"),
 ],
}
ULTIMA_EXACT = {
 "view-1": ("https://www.ultimacollection.com/media/feupntnc/ultima-collection-gstaad-exterior-09.jpg?width=1536",
             "https://www.ultimacollection.com/our-collection/ultima-hotel-gstaad/gallery",
             "Ultima Hotel Gstaad · winter season exterior"),
 "view-2": ("https://www.ultimacollection.com/media/50kfr2v3/10_ultimacollection_ultimahotelgstaad_interior_signaturesuite01.jpg?width=1536",
             "https://www.ultimacollection.com/our-collection/ultima-hotel-gstaad/gallery",
             "Ultima Hotel Gstaad · Signature Suite interior"),
 "view-3": ("https://www.ultimacollection.com/media/kqwh2tr3/202502-gstaad-98-5.jpg?width=1536",
             "https://www.ultimacollection.com/our-collection/ultima-hotel-gstaad/wellness",
             "Ultima Hotel Gstaad · spa setting — identity to confirm visually"),
}
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
    RUN_DIAGNOSTICS.append({"type":"still_missing","slot":(item.get("propertyKey") or "destination")+"/"+item["key"],"urls_tried":[x[1][:250] for x in candidates[:25]]})
    print("STILL_MISSING", item.get("propertyKey", "destination"), item["key"], flush=True)
    return False

def main():
    data = json.loads(ROOT.read_text(encoding="utf-8"))
    hotel_items = data["hotels"]
    scene_items = data["destinationScenes"]
    used_hashes = {x.get("sha256") for x in hotel_items + scene_items if x.get("sha256")}
    used_urls = {url.split("?")[0].replace("https://thumb.wikimedia.org", "https://upload.wikimedia.org")
        for x in hotel_items + scene_items
        for url in (x.get("downloadUrl"), x.get("rejectedSource"))
        if isinstance(url,str) and url.startswith("https://")}
    changed = False
    for key, pages, good, bad in PALACE:
        item = next(x for x in hotel_items if x.get("propertyKey") == "gstaad-palace" and x["key"] == key)
        hits = []
        exact = PALACE_EXACT.get(key)
        if exact:
            url, source, caption = exact
            hits.append((30, url, source, caption, "Exact Gstaad Palace hotel image; publisher attribution"))
        for url, source, caption in PALACE_ALTERNATES.get(key, []):
            hits.append((29, url, source, caption, "Gstaad Palace hotel photograph sourced from attributed travel publisher"))
        for page in pages:
            hits.extend(images_from_official(page, good, bad))
        changed |= write_candidate(item, hits, used_hashes, used_urls)
    # Existing three Ultima slots reuse the same summer exterior in different sizes.
    # Keep the original in view-1, replace view-2 and view-3 ONLY from exact
    # Ultima Gstaad accommodation/wellness pages. Do not call duplicates distinct.
    originals = [next(x for x in hotel_items if x.get("propertyKey")=="ultima-hotel"
                 and x["key"]==f"view-{i}") for i in (1, 2, 3)]
    reference = (originals[0].get("downloadUrl") or "").split("?")[0]
    for item in originals[1:]:
        if (item.get("downloadUrl") or "").split("?")[0] == reference and reference:
            item["rejectedDuplicateSource"] = item.get("downloadUrl")
            item["status"] = "missing"
            item["visuallyVerified"] = False
            item["commercialRightsCleared"] = False
            item["visualQaWarning"] = "Same photograph as Ultima view-1, not a new gallery frame."
            for field in ("localPath","downloadUrl","sha256","bytes","outputSize","originalSize"):
                item.pop(field, None)
            changed = True
    for key, pages, good, bad in ULTIMA:
        item = next(x for x in hotel_items if x.get("propertyKey")=="ultima-hotel" and x["key"]==key)
        hits = []
        candidate = ULTIMA_EXACT.get(key)
        if candidate:
            url, source, caption = candidate
            hits.append((20, url, source, caption, "Ultima Collection official hotel gallery"))
        for page in pages:
            hits.extend(images_from_official(page, good, bad, "ultimacollection.com"))
        changed |= write_candidate(item, hits, used_hashes, used_urls)
    for key, pages, good, bad in BELLEVUE:
        item = next(x for x in hotel_items if x.get("propertyKey")=="le-grand-bellevue" and x["key"]==key)
        hits = []
        for page in pages:
            hits.extend(images_from_official(page, good, bad, "bellevue-gstaad.ch"))
        changed |= write_candidate(item, hits, used_hashes, used_urls)
    for key, (query, terms) in SCENES.items():
        item = next(x for x in scene_items if x["key"] == key)
        candidates = [(30, url, source, caption, "Bosphoras operator authorized usage; credited source page")
                      for url, source, caption in SCENES_EXACT.get(key, [])]
        candidates.extend(images_from_commons(query, terms))
        changed |= write_candidate(item, candidates, used_hashes, used_urls)
        time.sleep(0.2)
    data["downloadedHotelCandidates"] = sum(x["status"]=="candidate_needs_visual_review" for x in hotel_items)
    data["downloadedDestinationCandidates"] = sum(x["status"]=="candidate_needs_visual_review" for x in scene_items)
    # No auto QA / publication even when all 21 files have been recovered.
    data["visuallyVerified"] = False
    data["approvedForCommercialPublication"] = False
    if changed:
        ROOT.write_text(json.dumps(data, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")
    report = Path("docs/travel-gstaad-download-report.json")
    report.parent.mkdir(exist_ok=True, parents=True)
    report.write_text(json.dumps({
      "workflow": "travel-gstaad-media", "collector_revision": "2026-10-19-v3-luxury-two-assets", "scope": "Gstaad authentic assets, no public preview",
      "hotel_candidates": data["downloadedHotelCandidates"],
      "landscape_candidates": data["downloadedDestinationCandidates"],
      "missing": [("destination" if "propertyKey" not in x else x["propertyKey"])+"/"+x["key"]
                  for x in hotel_items+scene_items if x["status"]=="missing"],
      "diagnostics": RUN_DIAGNOSTICS[:80]
    },ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("GSTAAD_ASSET_COUNTS",data["downloadedHotelCandidates"],"/12 hotels,",
          data["downloadedDestinationCandidates"],"/9 landscape candidates; all new assets remain hidden")

if __name__ == "__main__":
    main()
