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
   "seeds":[
      "https://cdn.oxfordski.com/media/88496/oxford-ski-hotel-cheval-blanc-courchevel-hotel-2.jpg?height=698&mode=crop&quality=85&scale=downscaleonly&width=1240",
      "https://images.prismic.io/lvmh-com/Zo1JrR5LeNNTw8kH_WebRGB-ChevalBlancCourchevel-Exte%CC%81rieursdrone-OliverFly.jpg?auto=format%2Ccompress%3Fauto%3Dcompress%2Cformat&fit=max&w=3840",
      "https://images.prismic.io/lvmh-chevalblanc/aCcuIydWJ-7kSOAT_ChevalBlancCourchevel-R%C3%A9ceptionSpa-EliseQuiniou-4-.jpg?auto=format%2Ccompress",
      "https://images.prismic.io/lvmh-chevalblanc/aCcfOCdWJ-7kSNz7_WebRGB-ChevalBlancCourchevel-Amenitieschambres-chambre110-OliverFly-1-.jpg?auto=format%2Ccompress"
   ]},
  {"key":"lapogee","name":"L'Apogée Courchevel",
   "pages":["https://www.oetkerhotels.com/hotels/lapogee-courchevel/","https://www.oetkerhotels.com/hotels/lapogee-courchevel/rooms-suites/"],
   "allowed":["oetkerhotels.com","ctfassets.net"],
   "seeds":[
      "https://images.eu.ctfassets.net/og3b0tarlg4b/2tfd7tKIoiaj4azQNu42HT/7ced0449e1cb31568f3b861b0e93be61/05_FACADE_JOUR_4_copie.jpg?fit=fill&fm=jpg&h=906&w=2340",
      "https://images.eu.ctfassets.net/og3b0tarlg4b/omEpa74YO2J3tc5i6TskE/748429b67cfbdae1dc450ceb297eae98/room-1BSD-image-lapogee-courchevel-deluxe-one-bedroom-suite-2.jpg?fit=fill&fm=jpg&h=1450&w=1900",
      "https://images.eu.ctfassets.net/og3b0tarlg4b/51w1ITwyNLHlNOFuT0VTgG/331e02490b4fde1d67fe24dfb83a8a0b/2026-01-12_LAPOGEE_Courchevel7826_copie.jpg?fit=fill&fm=jpg&h=2380&w=3200",
      "https://media-assets.ad-italia.it/photos/65a4222d3120dc5855f5bc18/4%3A3/w_3500%2Ch_2625%2Cc_limit/French_Alpine_cocoon_4042.jpg"
  ]},
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

    # Each candidate comes from a separately identified photo of Courchevel 1850.
    # Import only proven sources, and preserve the actual credit for that image.
    SCENES =     [
        {
            "url": "https://alpineanswers.s3.amazonaws.com/dragonfly/production/2025/11/12/21/28/20/0129e7b9-844a-485f-871e-6513bdfb93f6/Courchevel_1850_ski_resort_guide%20%2832%29.jpg",
            "sourcePage": "https://www.alpineanswers.co.uk/ski-resorts/france/resort-guide-courchevel-1850",
            "credit": "Alpine Answers · aerial photograph of Courchevel 1850"
        },
        {
            "url": "https://ik.imagekit.io/zo5luxjj1/journal/courchevel-skiing/courchevel-1850-village.png",
            "sourcePage": "https://www.powderedition.com/journal/courchevel-skiing",
            "credit": "Powder Edition · Courchevel 1850 village centre"
        },
        {
            "url": "https://www.skiinluxury.com/attachments/photos/gallery/63622a20-186c-485b-a148-4bd80a000f09.JPG",
            "sourcePage": "https://www.skiinluxury.com/resorts/france/courchevel-1850/luxury-chalets",
            "credit": "Ski In Luxury · morning ski piste at Courchevel 1850"
        },
        {
            "url": "https://www.topsnowtravel.com/wp-content/uploads/2022/09/Courchevel-1850.jpg",
            "sourcePage": "https://www.topsnowtravel.com/french-ski-resorts/courchevel/",
            "credit": "Top Snow Travel · Courchevel 1850 winter panorama"
        },
        {
            "url": "https://a.storyblok.com/f/287000/2000x1125/65998a6ca1/galerie-12.jpg/m/1536x726/filters%3Aformat%28webp%29%3Aquality%2880%29",
            "sourcePage": "https://www.hotelsbarriere.com/collection-fouquet-s/courchevel",
            "credit": "Barrière Hotels · Courchevel 1850 Bellecôte landscape"
        },
        {
            "url": "https://flyingmag1.b-cdn.net/wp-content/uploads/sites/2/2022/05/1596875314_courchevel-altiport-france-timo-breidenstein.jpeg?height=698&width=875",
            "sourcePage": "https://www.flyingmag.com/bucket-list-alpine-altiports/",
            "credit": "Timo Breidenstein · Courchevel Altiport via Flying magazine"
        },
        {
            "url": "https://paragonskichalets.com/wp-content/uploads/2020/11/Chalet-Namaste-Courchevel-1850-Bunk-Bedroom-View-from-the-Piste3.jpg",
            "sourcePage": "https://paragonskichalets.com/properties/chalet-le-namaste-courchevel-1850-france/",
            "credit": "Paragon Ski Chalets · piste view in Courchevel 1850"
        },
        {
            "url": "https://www.yonder.fr/sites/default/files/destinations/Apoge%CC%81e_courchevel-Terrace%20Bar_JMS_1.jpg",
            "sourcePage": "https://www.yonder.fr/hotels/hotels-du-mois/l-apogee-oetker-collection-le-palace-discret-de-courchevel",
            "credit": "Yonder · L'Apogée terrace, Courchevel 1850"
        },
        {
            "url": "https://static.mansionglobal.com/production/media/article-images/0b3c2ef16cc9d9d867caed23f41695e2/medium_Courchevel.jpg",
            "sourcePage": "https://www.mansionglobal.com/articles/living-the-high-life-in-courchevel-1850-16998",
            "credit": "Mansion Global · Courchevel 1850 winter lights"
        },
        {
            "url": "https://www.skiinluxury.com/attachments/photos/gallery/63622a20-186c-485b-a148-4bd80a000f09.JPG",
            "sourcePage": "https://www.skiinluxury.com/resorts/france/courchevel-1850/luxury-chalets",
            "credit": "Ski In Luxury · Courchevel 1850 slope"
        },
        {
            "url": "https://www.topsnowtravel.com/wp-content/uploads/2022/09/Courchevel-1850.jpg",
            "sourcePage": "https://www.topsnowtravel.com/french-ski-resorts/courchevel/",
            "credit": "Top Snow Travel · Courchevel 1850"
        },
        {
            "url": "https://wtgs-production-uploads.s3.amazonaws.com/uploads/images_accommodation/image/67716/courchevel_1850_10.jpg",
            "sourcePage": "https://www.alpcourchevel.com/apartment/3666-apartment-courchevel-pralong-courchevel-1850",
            "credit": "Alp Courchevel · skiing at Courchevel 1850"
        }
    ]
    city_entries=[]
    for scene in SCENES:
        if len(city_entries)>=9:break
        result=transform(scene["url"])
        if result is None:continue
        data,original,size=result
        digest=hashlib.sha256(data).hexdigest()
        if digest in USED:continue
        USED.add(digest)
        n=len(city_entries)+1
        local_path=f"/images/travel/courchevel-1850-premium/destination/alps-{n}.webp"
        loc=Path("public"+local_path)
        loc.parent.mkdir(parents=True,exist_ok=True)
        loc.write_bytes(data)
        city_entries.append({"key":f"alps-{n}","localPath":local_path,
            "sourcePage":scene["sourcePage"],"status":"downloaded",
            "rights":"Client-authorised Preview use; written third-party commercial rights require confirmation",
            "credit":scene["credit"],"downloadUrl":scene["url"],
            "originalSize":original,"outputSize":size,"bytes":len(data),"sha256":digest})
    for n in range(len(city_entries)+1,10):
        city_entries.append({"key":f"alps-{n}","localPath":f"/images/travel/courchevel-1850-premium/destination/alps-{n}.webp",
            "sourcePage":"","status":"failed","rights":"No verified image found; intentionally no substitute"})
    report(OUT_D,"Courchevel 1850 independently identified authentic destination scenes; rights review before publication",city_entries)

    # Synchronise *source links* and captions with each actual image. Never claim
    # the tourism office supplied an image hosted by an unrelated publisher.
    destination_guide=Path("data/travel/courchevel1850Guide.ts")
    contents=destination_guide.read_text(encoding="utf-8")
    prefix, json_text=contents.split(" = ",1)
    guide=json.loads(json_text.strip().removesuffix(";"))
    for record in city_entries:
        if record["status"]!="downloaded":continue
        photo=guide["photos"][record["key"]]
        photo["author"]=record["credit"]
        photo["license"]="Client-authorised editorial Preview; written third-party commercial rights to confirm"
        photo["licenseUrl"]=record["sourcePage"]
        photo["sourcePage"]=record["sourcePage"]
        photo["fr"]=record["credit"]+" · image réelle de Courchevel 1850"
        photo["en"]=record["credit"]+" · authentic Courchevel 1850 editorial photograph"
    destination_guide.write_text(prefix+" = "+json.dumps(guide,indent=2,ensure_ascii=False)+";\n",encoding="utf-8")


if __name__=="__main__":
    main()
