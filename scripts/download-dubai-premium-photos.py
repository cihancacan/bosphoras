#!/usr/bin/env python3
"""Curated Dubai editorial media acquisition, feature preview ONLY.

Hotel photos must depict the exact named establishment. References are editorial:
neither redistribution rights nor accommodation inventory is automatically granted.
Failed media is never replaced with a generic stock hotel photo.
"""
from __future__ import annotations

from collections import defaultdict
from datetime import datetime, timezone
from io import BytesIO
from pathlib import Path
from urllib.parse import urljoin, urlsplit, unquote
import hashlib
import json
import re

import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageOps

ROOT = Path("public/images/travel/dubai-premium")
REPORT = Path("data/travel/dubaiPremiumImageSources.json")
H = {"User-Agent":"Mozilla/5.0 (compatible; BosphorasTravelEditorial/1.0; source-attribution retained)","Accept":"image/avif,image/webp,image/jpeg,image/png,image/*;q=0.8"}
# A direct image must come from an identified property feature, not keyword-guesswork.
JOBS = [
 ("the-lana","lana-marasi-exterior","exterior",
 "https://www.dorchestercollection.com/dubai/the-lana/gallery",
 ["https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1381604.jpg"],["lana","exterior","building","canal"]),
 ("the-lana","lana-rooftop-pool","pool",
 "https://www.dorchestercollection.com/dubai/the-lana/pool",
 ["https://theroomscollection.com/wp-content/themes/yootheme/cache/09/The-Lana-High-Society-pool-Burj-DorchesterCollection-09aefa9f.jpeg"],["high society","pool","rooftop","sunloungers"]),
 ("the-lana","lana-marina-suite","suite",
 "https://www.dorchestercollection.com/dubai/the-lana/rooms-suites/lana-suite",
 [],["lana suite","suite interior","living","marina junior"]),
 ("one-only-zaabeel","zaabeel-exterior","exterior",
 "https://www.oneandonlyresorts.com/one-zaabeel/overview",
 ["https://media.admagazine.fr/photos/66b38cc953137dc7cb13091c/master/w_1024%2Cc_limit/231128-oooz-p3-aerial-morning-2235-master.jpg"],["aerial","exterior","one zaabeel","link"]),
 ("one-only-zaabeel","zaabeel-infinity-pool","pool",
 "https://www.oneandonlyresorts.com/one-zaabeel/experiences/pools",
 ["https://assets.kerzner.com/api/public/content/33afcebbf4e44c5c96c0f06c6663ffad?t=w1600&v=6e4e0814"],["infinity pool","pool","tap","link"]),
 ("one-only-zaabeel","zaabeel-suite","suite",
 "https://www.oneandonlyresorts.com/one-zaabeel/accommodation",
 ["https://dam.kerzner.com/i/kerzner/One%26Only_One_Za%27abeel_Wellness_Suite_Livingroom_Wide-1623_MASTER?poi=0.1361%2C0.4678%2C0%2C0&scaleFit=poi"],["suite","room","living"]),
 ("atlantis-the-royal","atlantis-architecture","exterior",
 "https://www.atlantis.com/dubai/atlantis-the-royal",
 ["https://www.ssyenc.com/upload/project/9ddb7b5e65bf44f28dc6dfa52072d686.jpg"],["aerial","exterior","architecture","royal"]),
 ("atlantis-the-royal","atlantis-cloud22-pool","pool",
 "https://www.atlantis.com/dubai/atlantis-the-royal",
 ["https://cdn.squaremeal.ae/article/62/images/best-atlantis-the-royal-dubai-restaurants-and-bars-guide-cloud-22_15022023113046.jpg?w=1400"],["cloud 22","pool","sky","infinity"]),
 ("atlantis-the-royal","atlantis-sky-pool-villa","suite",
 "https://www.atlantis.com/dubai/atlantis-the-royal/stay/rooms-and-suites/suites/sky-pool-villa",
 [],["sky pool","villa","suite","private pool"]),
 ("jumeirah-al-naseem","al-naseem-resort","exterior",
 "https://www.jumeirah.com/en/stay/dubai/jumeirah-al-naseem/experiences/pool-and-beach",
 ["https://cdn.jumeirah.com/api/public/content/1af0bcc6bf6e4b819d341974a63b7f33?v=b0e252c1"],["al naseem","aerial","exterior","resort"]),
 ("jumeirah-al-naseem","al-naseem-beach","pool",
 "https://www.jumeirah.com/en/stay/dubai/jumeirah-al-naseem/experiences/pool-and-beach",
 [],["beach","pool","sun loungers","private beach"]),
 ("jumeirah-al-naseem","al-naseem-ocean-suite","suite",
 "https://www.jumeirah.com/en/stay/dubai/jumeirah-al-naseem/accommodation",
 [],["ocean suite","room","suite","interior"]),
]

BAD = ("logo","icon","avatar","sprite","signature","favicon","placeholder","map","svg","button","arrow","cookie","profile","restaurant dish","food","portrait")
S = requests.Session()
CACHE={}

def candidates(page):
    if page in CACHE: return CACHE[page]
    ans=[]
    try:
        r=S.get(page,headers=H,timeout=25)
        r.raise_for_status()
        soup=BeautifulSoup(r.text,"html.parser")
        for im in soup.select("img, source"):
            desc=" ".join([im.get("alt",""),im.get("title",""),im.get("aria-label",""),str(im.get("data-alt",""))])
            urls=[]
            for att in ("data-src","data-original","data-lazy-src","src","data-image","data-srcset","srcset"):
                x=im.get(att)
                if not x: continue
                if att.endswith("srcset"):
                    urls.extend(part.strip().split(" ")[0] for part in x.split(",") if part.strip())
                else: urls.append(x)
            for url in urls:
                if not isinstance(url,str) or url.startswith("data:"): continue
                full=urljoin(r.url,url)
                if full.startswith("https://"): ans.append((full,desc))
        for im in soup.select('meta[property="og:image"], meta[name="twitter:image"], link[rel="preload"][as="image"]'):
            u=im.get("content") or im.get("href")
            if u and u.startswith(("http","/")): ans.append((urljoin(r.url,u),"hero exterior"))
        # Most official sites provide alt text for room and pool photography in HTML;
        # do not blindly scrape unrelated JS assets.
    except Exception as e:
        print("source page unavailable",page,str(e)[:90],flush=True)
    CACHE[page]=ans
    return ans

def valid_image(payload,kind):
    with Image.open(BytesIO(payload)) as base:
        im=ImageOps.exif_transpose(base).convert("RGB")
        w,h=im.size
        if w<800 or h<450: raise ValueError("low resolution %sx%s"%(w,h))
        if w/h<1.12: raise ValueError("non-landscape image %sx%s"%(w,h))
        im.thumbnail((1920,1600),Image.Resampling.LANCZOS)
        buf=BytesIO()
        im.save(buf,format="WEBP",quality=86,method=6)
        return buf.getvalue(),(w,h),(im.width,im.height)

def fetch_img(url):
    if urlsplit(url).scheme!="https": raise ValueError("Only HTTPS")
    resp=S.get(url,headers=H,timeout=28,stream=True)
    resp.raise_for_status()
    out=bytearray()
    for piece in resp.iter_content(131072):
        out.extend(piece)
        if len(out)>20000000: raise ValueError("Image larger than 20MB")
    return bytes(out)

used_sha=set()
results=[]
for hotel,name,kind,page,direct,cues in JOBS:
    path=ROOT/hotel/(name+".webp")
    record={"hotel":hotel,"scene":kind,"name":name,"localPath":"/images/travel/dubai-premium/"+hotel+"/"+name+".webp","sourcePage":page,"status":"failed","rights":"User-reported project permission; third-party commercial rights need confirmation"}
    # Direct, individually identified imagery is tried before official property-page alt images.
    options=[(url,"Identified property photograph") for url in direct]
    if kind!="exterior":
        options += [(url,desc) for url,desc in candidates(page) if sum(c in (desc+" "+unquote(url)).lower() for c in cues)>0]
    else:
        options += [(url,desc) for url,desc in candidates(page) if sum(c in (desc+" "+unquote(url)).lower() for c in cues)>0]
    scored=[]
    for i,(url,desc) in enumerate(options):
        tag=(desc+" "+unquote(urlsplit(url).path)).lower()
        if any(word in tag for word in BAD): continue
        score=sum(4 if c in desc.lower() else 1 for c in cues if c in tag)
        # Keep priority on manually identified direct images.
        score+=(30 if i<len(direct) else 0)
        scored.append((score,i,url,desc))
    scored.sort(key=lambda row:(-row[0],row[1]))
    errors=[]
    for _,_,url,desc in scored[:15]:
        try:
            raw=fetch_img(url)
            webp,original,out=valid_image(raw,kind)
            hashvalue=hashlib.sha256(webp).hexdigest()
            if hashvalue in used_sha: raise ValueError("duplicate already used in gallery")
            used_sha.add(hashvalue)
            path.parent.mkdir(parents=True,exist_ok=True)
            path.write_bytes(webp)
            record.update(status="downloaded",downloadUrl=url,sourceDescription=desc,
                         inputSize=list(original),outputSize=list(out),bytes=len(webp),
                         sha256=hashvalue,compression="WebP q86 optimized / max width 1920")
            print("OK",hotel,name,len(webp),"via",url[:90],flush=True)
            break
        except Exception as e:
            errors.append(str(e)[:115])
    if record["status"]!="downloaded":
        record["error"]=" | ".join(errors[:4]) or "No eligible exact-property photo source found"
        print("MISSING",hotel,name,record["error"],flush=True)
    results.append(record)

REPORT.parent.mkdir(parents=True,exist_ok=True)
REPORT.write_text(json.dumps({"scope":"Dubai curated hotel photography, Travel feature branch preview only",
    "createdAt":datetime.now(timezone.utc).isoformat(),"expected":len(JOBS),
    "downloaded":sum(r["status"]=="downloaded" for r in results),
    "items":results},ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
print("RESULT",sum(r["status"]=="downloaded" for r in results),"/",len(JOBS),flush=True)
# Missing assets are actionable, but keep successful imports and the report for review.
