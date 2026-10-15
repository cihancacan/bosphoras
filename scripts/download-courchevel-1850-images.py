#!/usr/bin/env python3
"""Import Courchevel 1850 photo references from real, attributable sources.
Hotel candidates are pulled only from named property pages and an explicit
hand-curated hotel-specific image seed. Destination candidates are from the
Courchevel tourist office. PREVIEW only: independent commercial rights review
remains required before publication.
"""
from __future__ import annotations
import re, html, json, hashlib
from pathlib import Path
from io import BytesIO
from urllib.parse import urlparse, urljoin
from datetime import datetime, timezone
import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageOps

ROOT = Path("public/images/travel/courchevel-1850-premium")
OUT_H = Path("data/travel/courchevel1850PremiumImageSources.json")
OUT_D = Path("data/travel/courchevel1850DestinationImageSources.json")
S = requests.Session()
S.headers.update({"User-Agent":"BosphorasLuxuryStays/1.0 (official-media-asset-audit)", "Accept":"text/html,image/avif,image/webp,image/jpeg,image/*;q=.8"})
USED: set[str] = set()

PROPERTIES = [
  {"key":"les-airelles","name":"Les Airelles Courchevel",
   "pages":["https://airelles.com/en/destination/courchevel-hotel","https://airelles.com/en/destination/courchevel-hotel/suites"],
   "allowed":["airelles.com","images.ctfassets.net","images.eu.ctfassets.net","media.tatler.com"],
   "seeds":["https://media.tatler.com/photos/62065838a9f25b3e44961bd9/3%3A2/w_1920%2Ch_1280%2Cc_limit/LESAIRELLESCOURCHEVEL_11022022_Les%20Airelles%20-%20Fac%CC%A7ade%202.jpg"]},
  {"key":"cheval-blanc","name":"Cheval Blanc Courchevel",
   "pages":["https://www.chevalblanc.com/en/maison/courchevel/","https://www.chevalblanc.com/en/maison/courchevel/rooms-and-suites/"],
   "allowed":["chevalblanc.com","prismic.io","cdn.oxfordski.com","lvmh.com"],
   "seeds":["https://cdn.oxfordski.com/media/88496/oxford-ski-hotel-cheval-blanc-courchevel-hotel-2.jpg?height=698&mode=crop&quality=85&scale=downscaleonly&width=1240"]},
  {"key":"lapogee","name":"L'Apogée Courchevel",
   "pages":["https://www.oetkerhotels.com/hotels/lapogee-courchevel/","https://www.oetkerhotels.com/hotels/lapogee-courchevel/rooms-suites/"],
   "allowed":["oetkerhotels.com","ctfassets.net"],
   "seeds":["https://images.eu.ctfassets.net/og3b0tarlg4b/2tfd7tKIoiaj4azQNu42HT/7ced0449e1cb31568f3b861b0e93be61/05_FACADE_JOUR_4_copie.jpg?fit=fill&fm=jpg&h=906&w=2340"]},
  {"key":"k2-palace","name":"Le K2 Palace",
   "pages":["https://www.lek2palace.com/en/","https://www.lek2palace.com/en/stay/hotel-and-facilities.html"],
   "allowed":["lek2palace.com"],
   "seeds":["https://www.lek2palace.com/media/cache/jadro_resize/rc/F8uJarf61751615440/jadroRoot/medias/5c114a0d69f63/k2p_drone_exterieur_-11_stephane_berthe.jpg"]},
]
DESTINATION_PAGES=[
 "https://courchevel.com/en/",
 "https://courchevel.com/en/le-domaine-skiable-des-3-vallees/",
 "https://courchevel.com/en/activites/nos-activites-hiver/",
 "https://courchevel.com/en/where-to-go-in-courchevel/",
]


def is_allowed(url: str, allowed: list[str]) -> bool:
    parsed=urlparse(url)
    if parsed.scheme != "https" or not parsed.hostname:
        return False
    return any(parsed.hostname == d or parsed.hostname.endswith("." + d) for d in allowed)


def candidates(page: str, allowed: list[str]) -> list[str]:
    print("Inspecting source", page, flush=True)
    try:
        response=S.get(page,timeout=22)
        response.raise_for_status()
        soup=BeautifulSoup(response.text,"html.parser")
    except requests.RequestException as exc:
        print("Source temporarily unreachable", str(exc)[:160], flush=True)
        return []
    found: list[str]=[]
    def add(raw):
        if not isinstance(raw,str): return
        for part in raw.split(","):
            part=html.unescape(part).strip().strip("'\"")
            part=part.split(" ")[0]
            if not part or part.startswith("data:"): continue
            url=urljoin(page,part)
            if is_allowed(url,allowed) and (
                re.search(r"\.(?:jpg|jpeg|png|webp|avif)(?:[/?#]|$)",url,re.I) or
                any(z in url for z in ("prismic.io/","ctfassets.net/","/media/cache/"))
            ) and url not in found:
                found.append(url)
    for tag in soup.select("meta[property='og:image'],meta[name='twitter:image']"):
        add(tag.get("content"))
    for tag in soup.find_all(["img","source","a","picture","div","section"]):
        for key in ["src","data-src","data-lazy","data-original","srcset","data-srcset","href"]:
            add(tag.get(key))
        style=tag.get("style","")
        if "url(" in style:
            for x in re.findall(r"url\(([^)]+)\)",style): add(x)
    for value in re.findall(r'https?://[^\s"<>]+?\.(?:jpg|jpeg|png|webp)(?:\?[^\s"<>]*)?',response.text,re.I):
        add(value)
    print("Found",len(found),"candidates",flush=True)
    return found


def transform(url):
    try:
        r=S.get(url,timeout=27)
        r.raise_for_status()
        if len(r.content)>20_000_000:return None
        with Image.open(BytesIO(r.content)) as img:
            img=ImageOps.exif_transpose(img).convert("RGB")
            size=img.size
            if size[0]<800 or size[1]<430 or not 1.0<size[0]/size[1]<3.0: return None
            img.thumbnail((1950,1500),Image.Resampling.LANCZOS)
            b=BytesIO()
            img.save(b,"WEBP",quality=81,method=5)
            return b.getvalue(),size,img.size
    except (OSError,requests.RequestException,ValueError) as exc:
        print("Rejected image",url[:85],str(exc)[:70],flush=True)
    return None


def save(item,urls,used,source_page):
    for url in urls:
        result=transform(url)
        if not result:continue
        payload,original,out=result
        digest=hashlib.sha256(payload).hexdigest()
        if digest in used:continue
        used.add(digest)
        local=Path(item["localPath"].lstrip("/"))
        local.parent.mkdir(parents=True,exist_ok=True)
        local.write_bytes(payload)
        item.update(status="downloaded",downloadUrl=url,sourcePage=source_page,
          originalSize=original,outputSize=out,bytes=len(payload),sha256=digest,
          credit="Source image documented in sourcePage; third-party rights subject to review")
        return
    print("MISSING",item["localPath"],flush=True)


def report(path,scope,items):
    data={"scope":scope,"generatedAt":datetime.now(timezone.utc).isoformat(),
          "expected":len(items),"downloaded":sum(i["status"]=="downloaded" for i in items),"items":items}
    path.write_text(json.dumps(data,indent=2,ensure_ascii=False)+"\n",encoding="utf8")
    print(str(path),data["downloaded"],"/",len(items),flush=True)


def main():
    hotel_entries=[]
    for prop in PROPERTIES:
        found=list(prop["seeds"])
        for page in prop["pages"]:
            found.extend(candidates(page,prop["allowed"]))
        found=list(dict.fromkeys(found))
        for n in range(1,4):
            item={"hotel":prop["key"],"key":f"view-{n}",
                  "localPath":f"/images/travel/courchevel-1850-premium/{prop['key']}/view-{n}.webp",
                  "status":"failed","sourcePage":prop["pages"][0],
                  "rights":"Preview only; commercial reuse approval must be verified"}
            # Never use an image chosen for another hotel, and never reuse an image
            # from another entry even if both properties share one CDN.
            for url in list(found):
                if url not in found:continue
                img=transform(url)
                if img is None:continue
                data,original,size=img
                digest=hashlib.sha256(data).hexdigest()
                if digest in USED:continue
                USED.add(digest)
                local=Path(item["localPath"].lstrip("/"))
                local.parent.mkdir(parents=True,exist_ok=True)
                local.write_bytes(data)
                item.update(status="downloaded",downloadUrl=url,sourcePage=prop["pages"][0],
                            originalSize=original,outputSize=size,bytes=len(data),sha256=digest,
                            credit=prop["name"]+" · official listing / selected property-specific source")
                found.remove(url)
                break
            hotel_entries.append(item)
    report(OUT_H,"Courchevel 1850: four genuine hotels, exact-property photographs, preview only",hotel_entries)
    source_map={}
    for page in DESTINATION_PAGES:
        for url in candidates(page,["courchevel.com"]):
            if url not in source_map:source_map[url]=page
    available=list(source_map)
    city_entries=[]
    for n in range(1,10):
        item={"key":f"alps-{n}",
              "localPath":f"/images/travel/courchevel-1850-premium/destination/alps-{n}.webp",
              "sourcePage":"https://courchevel.com/en/","status":"failed",
              "rights":"Preview only; photographer and exact scene to be checked"}
        while available:
            url=available.pop(0)
            result=transform(url)
            if result is None:continue
            data,original,size=result
            digest=hashlib.sha256(data).hexdigest()
            if digest in USED:continue
            USED.add(digest)
            loc=Path(item["localPath"].lstrip("/"))
            loc.parent.mkdir(parents=True,exist_ok=True)
            loc.write_bytes(data)
            item.update(status="downloaded",downloadUrl=url,sourcePage=source_map[url],
                        originalSize=original,outputSize=size,bytes=len(data),sha256=digest,
                        credit="Courchevel Tourisme · exact scene and rights to confirm")
            break
        city_entries.append(item)
    report(OUT_D,"Courchevel 1850 tourism office photographs, precise scene/rights review pending",city_entries)


if __name__=="__main__":
    main()
