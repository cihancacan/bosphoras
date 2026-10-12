#!/usr/bin/env python3
"""Fetch FOUR hand-selected REAL Dubai destination photos, with provenance and quality checks.
Scope: Travel preview feature branch. These are location photographs, never hotel interiors.
Official Visit Dubai is editorial location reference; direct media scraping returns HTTP 403.
The user's claimed commercial permissions are NOT independently validated.
"""
from __future__ import annotations
from datetime import datetime,timezone
from pathlib import Path
from io import BytesIO
import json,hashlib
import requests
from PIL import Image,ImageOps,ImageStat,UnidentifiedImageError

ROOT=Path("public/images/travel/dubai-premium/destination")
REPORT=Path("data/travel/dubaiReplacementMediaSources.json")
IMAGES=[
 {
   "key":"west-beach-hero",
   "url":"https://media.cntravellerme.com/photos/6532393cb5ada0792cba9dae/16%3A9/w_2560%2Cc_limit/Palm%2520West%2520Beach.jpg",
   "sourcePage":"https://www.cntravellerme.com/story/dubai-sunset-spots-best-places-with-a-view",
   "referencePage":"https://www.visitdubai.com/en/places-to-visit/palm-west-beach",
   "author":"Condé Nast Traveller Middle East · Palm West Beach",
   "fr":"Palm West Beach à Palm Jumeirah, plage animée et skyline au soleil couchant",
   "en":"Palm West Beach on Palm Jumeirah with beachfront lounges and the skyline at golden hour",
   "scene":"Palm West Beach, a genuine coastline photo (no hotel gallery content)",
   "license":"Photographie éditoriale. Droits commerciaux déclarés par le client, justification indépendante à obtenir avant production.",
   "fallbackUrls":[
     "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/12/14/BZ0aBcqs-February-30-1.jpg",
     "https://www.timeoutdubai.com/cloud/timeoutdubai/2023/02/24/Koko_Bay_Dubai-3.jpg"
   ]
 },
 {
   "key":"palm-aerial-bright",
   "url":"https://images.pexels.com/photos/10593605/pexels-photo-10593605.jpeg?auto=compress&cs=tinysrgb&w=2200",
   "sourcePage":"https://www.pexels.com/photo/aerial-view-of-palm-jumeirah-10593605/",
   "referencePage":"https://www.visitdubai.com/en/explore-dubai/dubai-neighbourhoods/palm-jumeirah",
   "author":"Abid Ali · Pexels",
   "fr":"Vue aérienne lumineuse des branches de Palm Jumeirah entourées par le golfe Persique",
   "en":"Sunny aerial photograph of Palm Jumeirah fronds surrounded by the Arabian Gulf",
   "scene":"Palm Jumeirah iconic artificial island",
   "license":"Pexels free-use licence https://www.pexels.com/license/",
   "fallbackUrls":[
     "https://images.pexels.com/photos/29212693/pexels-photo-29212693.jpeg?auto=compress&cs=tinysrgb&w=2200"
   ]
 },
 {
   "key":"downtown-fountain-day",
   "url":"https://thewanderingquinn.com/wp-content/uploads/2023/08/IMG_1820-1440x1080.jpg",
   "sourcePage":"https://thewanderingquinn.com/5-day-dubai-itinerary/",
   "referencePage":"https://www.visitdubai.com/en/explore-dubai/dubai-neighbourhoods/downtown-dubai",
   "author":"The Wandering Quinn · Downtown Dubai",
   "fr":"Burj Khalifa dominant les eaux turquoise de la fontaine de Downtown Dubai en plein jour",
   "en":"Burj Khalifa towering above Downtown Dubai's turquoise fountain lake in daylight",
   "scene":"Downtown Dubai fountain lake and Burj Khalifa (not Business Bay)",
   "license":"Photographie éditoriale. Droits commerciaux déclarés par le client, justification indépendante à obtenir avant production.",
   "fallbackUrls":[
     "https://images.squarespace-cdn.com/content/v1/60c24df3cc9ba96fab5519a2/36d0fc36-eb82-47cb-9324-a409d34d160a/IMG_2429.jpg"
   ]
 },
 {
   "key":"marina-yachts-bright",
   "url":"https://cdn.prod.website-files.com/680f5ba5f94d370766130d73/68a81696115fc5e6e28cfc90_Exploring%20Dubai%20Marina%20Beyond%20the%20Usual.jpg",
   "sourcePage":"https://www.dubaicelebrations.com/blogs/dubai-marina-hidden-gems",
   "referencePage":"https://www.visitdubai.com/en/explore-dubai/dubai-neighbourhoods/dubai-marina",
   "author":"Dubai Celebrations · Dubai Marina",
   "fr":"Yachts sur l'eau calme de Dubai Marina devant les tours baignées de soleil",
   "en":"Luxury yachts at Dubai Marina with bright waterfront skyscrapers",
   "scene":"Dubai Marina skyline, basin and moored yachts (not Jumeirah Beach)",
   "license":"Photographie éditoriale. Droits commerciaux déclarés par le client, justification indépendante à obtenir avant production.",
   "fallbackUrls":[
     "https://res.cloudinary.com/https-www-isango-com/image/upload/f_auto/t_p_card_v1/v1753078470/middle%20east/uae/dubai/dubai_morning_yacht_tour_1.jpg"
   ]
 },
]
S=requests.Session()
HEADERS={"User-Agent":"Mozilla/5.0 (compatible; BosphorasLuxuryStaysEditorial/1.0; attribution preserved)","Accept":"image/avif,image/webp,image/jpeg,image/png,image/*;q=0.8"}
USED=set()
def convert(raw,key):
    with Image.open(BytesIO(raw)) as source:
        im=ImageOps.exif_transpose(source).convert("RGB")
        original=(im.width,im.height)
        if im.width<950 or im.height<560:raise ValueError(f"Low resolution {original}")
        if im.width/im.height<1.15:raise ValueError(f"Not landscape ratio {original}")
        # mild natural-toned processing, never create a false view
        if im.width>2100: im.thumbnail((2100,1450),Image.Resampling.LANCZOS)
        luminance=ImageStat.Stat(im.resize((128,72))).mean
        if max(luminance)<35: raise ValueError("Unacceptably dark source image")
        buf=BytesIO()
        im.save(buf,format="WEBP",quality=87,method=6)
        b=buf.getvalue()
        return b,original,(im.width,im.height),sum(luminance)/3
def download(url):
    r=S.get(url,headers=HEADERS,timeout=38,stream=True)
    r.raise_for_status()
    data=bytearray()
    for chunk in r.iter_content(131072):
        data.extend(chunk)
        if len(data)>22000000:raise ValueError("Image above 22 MB")
    return bytes(data),r.url
RESULTS=[]
for entry in IMAGES:
    result={k:v for k,v in entry.items() if k not in ("fallbackUrls",)}
    result["status"]="failed"
    errors=[]
    for u in [entry["url"]]+entry["fallbackUrls"]:
        try:
            raw,final=download(u)
            webp,rawsize,size,lightness=convert(raw,entry["key"])
            sha=hashlib.sha256(webp).hexdigest()
            if sha in USED:raise ValueError("Duplicate image content")
            USED.add(sha)
            ROOT.mkdir(parents=True,exist_ok=True)
            local=ROOT/(entry["key"]+".webp")
            local.write_bytes(webp)
            result.update(status="downloaded",downloadUrl=final,localPath="/images/travel/dubai-premium/destination/"+local.name,
                inputSize=rawsize,outputSize=size,meanRGBBrightness=round(lightness,1),
                bytes=len(webp),sha256=sha,optimization="Orientation normalized and WebP quality 87")
            print("OK",entry["key"],"source",final[:170],"size",rawsize,"webp",len(webp),"brightness",round(lightness,1),flush=True)
            break
        except Exception as exc:
            errors.append(f"{u[:75]}: {str(exc)[:125]}")
    if result["status"]=="failed":
        result["errors"]=errors
        print("FAILED",entry["key"]," || ".join(errors),flush=True)
    RESULTS.append(result)
REPORT.parent.mkdir(parents=True,exist_ok=True)
REPORT.write_text(json.dumps({"scope":"Bosphoras Travel PREVIEW, selected Dubai coastal hero and distinct area photos",
    "createdAt":datetime.now(timezone.utc).isoformat(),
    "total":len(RESULTS),"downloaded":sum(x["status"]=="downloaded" for x in RESULTS),
    "note":"Image publishing permissions claimed by user; confirm rights for non-Pexels source photos before production.",
    "items":RESULTS},indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
if any(x["status"]!="downloaded" for x in RESULTS):raise SystemExit("Some selected images require a corrected direct source; see report")
