#!/usr/bin/env python3
"""Download real Porto Cervo imagery for a PREVIEW-only editorial site.
4 specifically identified luxury hotel properties (3 photos each) + 9 documented Porto Cervo landscapes.
Do not replace an unavailable image with another hotel or another island.
This is source discovery and technical QA, NOT confirmation of commercial photo rights.
"""
from __future__ import annotations
from pathlib import Path
from io import BytesIO
from urllib.parse import quote, unquote, urljoin, urlparse
from datetime import datetime, timezone
import hashlib, html, json, re, requests, time
from bs4 import BeautifulSoup
from PIL import Image, ImageOps, ImageStat

ROOT=Path("public/images/travel/porto-cervo-premium")
HOTEL_REPORT=Path("data/travel/portoCervoPremiumImageSources.json")
CITY_REPORT=Path("data/travel/portoCervoDestinationImageSources.json")
HEAD={"User-Agent":"BosphorasLuxuryTravelMediaReview/1.0 (attribution and hotel property verification)","Accept":"text/html,application/json,image/avif,image/webp,image/jpeg,image/png,image/*;q=.8"}
S=requests.Session()
S.headers.update(HEAD)
USED=set()
HOTELS={
  "cala-di-volpe": {
    "name": "Hotel Cala di Volpe, a Luxury Collection Hotel",
    "source": "https://www.marriott.com/en-us/hotels/olblc-hotel-cala-di-volpe-a-luxury-collection-hotel-costa-smeralda/overview/",
    "pages": [
      "https://www.marriott.com/en-us/hotels/olblc-hotel-cala-di-volpe-a-luxury-collection-hotel-costa-smeralda/photos/",
      "https://www.uniqhotels.com/hotel-cala-di-volpe/",
      "https://www.smeraldaholding.com/en/portfolio-asset/"
    ],
    "scenes": [
      [
        "bay-architecture",
        [
          "aerial",
          "bay",
          "hotel"
        ]
      ],
      [
        "pool-and-sea",
        [
          "pool",
          "beach",
          "sea"
        ]
      ],
      [
        "suite-terrace",
        [
          "suite",
          "terrace",
          "room"
        ]
      ]
    ],
    "seeds": []
  },
  "romazzino-belmond": {
    "name": "Romazzino, A Belmond Hotel",
    "source": "https://www.belmond.com/en/hotels/europe/italy/romazzino-costa-smeralda",
    "pages": [
      "https://www.belmond.com/en/hotels/europe/italy/romazzino-costa-smeralda/accommodation",
      "https://www.audleytravel.com/us/italy/accommodation/hotel-romazzino",
      "https://www.belmond.com/en/hotels/europe/italy/romazzino-costa-smeralda/experiences"
    ],
    "scenes": [
      [
        "beach-hotel",
        [
          "beach",
          "aerial",
          "hotel"
        ]
      ],
      [
        "garden-pool",
        [
          "pool",
          "gardens"
        ]
      ],
      [
        "villa-sea",
        [
          "villa",
          "seaview",
          "balcony"
        ]
      ]
    ],
    "seeds": []
  },
  "pitrizza": {
    "name": "Hotel Pitrizza",
    "source": "https://www.hotelpitrizza.com/en/",
    "pages": [
      "https://www.hotelpitrizza.com/en/beach-pool/",
      "https://www.hotelpitrizza.com/en/roccia-pool-suite/",
      "https://www.hotelpitrizza.com/en/press/",
      "https://www.hotelpitrizza.com/en/villas/"
    ],
    "scenes": [
      [
        "granite-coast",
        [
          "rock",
          "coast",
          "beach"
        ]
      ],
      [
        "private-pool-suite",
        [
          "pool",
          "suite",
          "villa"
        ]
      ],
      [
        "hotel-terrace",
        [
          "terrace",
          "sea",
          "restaurant"
        ]
      ]
    ],
    "seeds": []
  },
  "cervo-hotel": {
    "name": "Cervo Hotel, Costa Smeralda Resort",
    "source": "https://www.marriott.com/en-us/hotels/olbsi-cervo-hotel-costa-smeralda-resort/overview/",
    "pages": [
      "https://www.marriott.com/en-us/hotels/olbsi-cervo-hotel-costa-smeralda-resort/photos/",
      "https://www.marriott.com/en-us/hotels/olbsi-cervo-hotel-costa-smeralda-resort/dining/",
      "https://www.charmingsardinia.com/sardaigne/cervo"
    ],
    "scenes": [
      [
        "piazzetta-facade",
        [
          "piazzetta",
          "facade",
          "exterior"
        ]
      ],
      [
        "marina-view",
        [
          "marina",
          "aerial",
          "view"
        ]
      ],
      [
        "pool-terrace",
        [
          "pool",
          "terrace"
        ]
      ]
    ],
    "seeds": []
  }
}
PREFERRED_MEDIA={
 ("cala-di-volpe","bay-architecture"): ["https://www.1golf.eu/images/hotels/hotel-cala-di-volpe-a-luxury-collection-hotel-costa-smeralda_108947_full.jpg","https://www.1golf.eu/en/hotel/hotel-cala-di-volpe-a-luxury-collection-hotel-costa-smeralda/","1Golf · Hotel Cala di Volpe aerial bay"],
 ("cala-di-volpe","pool-and-sea"): ["https://www.uniqhotels.com/media/hotels/a9/1_jzDZmxl.jpg","https://www.uniqhotels.com/hotel-cala-di-volpe/","UNIQ Hotels · Cala di Volpe pool, bay and bridge"],
 ("romazzino-belmond","beach-hotel"): ["https://cdn.audleytravel.com/1400/999/60/15997369-hotel-romazzino-a-luxury-collection-hotel.jpg","https://www.audleytravel.com/us/italy/accommodation/hotel-romazzino","Audley Travel · Romazzino beachfront aerial"],
 ("romazzino-belmond","garden-pool"): ["https://assets.basehub.com/95f6dbe5/a8f843caf6b3b905ffed73d2b6957bbf/rom-ext-250325-02.jpg?format=auto&quality=80&width=1920","https://www.84rooms.com/collections/15-of-our-favourite-italian-beach-hotels","84 Rooms · Romazzino beach pools and gardens"],
 ("pitrizza","private-pool-suite"): ["https://media.luxeglobalawards.com/cdn-cgi/image/format%3Dauto%2Cwidth%3D1920/production/EyByjfA2oh4rBAWt8FFDpWAhhKX2RCDb-Infinity_Pool%20%285%29%20%28Large%29.jpg","https://www.luxeglobalawards.com/hotel/hotel-pitrizza-a-luxury-collection-hotel-costa-smeralda-udgfrH","Luxe Global Awards · Hotel Pitrizza saltwater pool"],
 ("cervo-hotel","pool-terrace"): ["https://cache.marriott.com/content/dam/marriott-renditions/OLBSI/olbsi-outdoor-pools-seasonal-8752-hor-clsc.jpg?downsize=1720px%3A%2A&interpolation=progressive-bilinear&output-quality=70","https://www.marriott.com/en-us/hotels/olbsi-cervo-hotel-costa-smeralda-resort/overview/","Marriott · Cervo Hotel seasonal pool"],
 ("cervo-hotel","marina-view"): ["https://static.charmingsardinia.com/hotels/7553/gallery/files/hotel-cervo-portcervo05.jpg","https://www.charmingsardinia.com/sardaigne/cervo","Charming Sardinia · Cervo Hotel overlooking Porto Cervo marina"],
}
DIRECT_DEST={}
DEST=[
  [
    "porto-cervo-marina",
    "Porto Cervo marina Sardinia aerial",
    [
      "porto cervo",
      "marina"
    ]
  ],
  [
    "cala-di-volpe-bay",
    "Cala di Volpe Sardinia bay",
    [
      "cala di volpe"
    ]
  ],
  [
    "porto-cervo-piazzetta",
    "Piazzetta Porto Cervo Sardinia",
    [
      "porto cervo",
      "piazzetta"
    ]
  ],
  [
    "romazzino-beach",
    "Spiaggia del Romazzino Sardinia",
    [
      "romazzino"
    ]
  ],
  [
    "liscia-di-vacca",
    "Liscia di Vacca Sardinia",
    [
      "liscia di vacca"
    ]
  ],
  [
    "pevero-beach",
    "Spiaggia Grande Pevero Costa Smeralda",
    [
      "pevero"
    ]
  ],
  [
    "spiaggia-del-principe",
    "Spiaggia del Principe Sardinia",
    [
      "spiaggia del principe",
      "principe"
    ]
  ],
  [
    "capriccioli-beach",
    "Spiaggia Capriccioli Sardinia",
    [
      "capriccioli"
    ]
  ],
  [
    "sardinia-sailing",
    "Porto Cervo sailing boats",
    [
      "porto cervo",
      "sailing"
    ]
  ]
]

def get(url, timeout=30, bytes_max=20000000):
 r=S.get(url,timeout=timeout,stream=True);r.raise_for_status()
 data=bytearray()
 for chunk in r.iter_content(120000):
  data.extend(chunk)
  if len(data)>bytes_max: raise ValueError("Oversized download")
 return bytes(data),r.url

def convert(data, min_width=850):
 with Image.open(BytesIO(data)) as photo:
  p=ImageOps.exif_transpose(photo).convert("RGB")
  if p.width<min_width or p.height<460 or p.width/p.height<1.1:raise ValueError("not a landscape editorial image")
  dims=[p.width,p.height];p.thumbnail((1950,1450),Image.Resampling.LANCZOS)
  light=round(sum(ImageStat.Stat(p.resize((96,64))).mean)/3,1)
  if light<35:raise ValueError("too dark")
  buf=BytesIO();p.save(buf,"WEBP",quality=86,method=6)
  result=buf.getvalue()
  sha=hashlib.sha256(result).hexdigest()
  if sha in USED:raise ValueError("duplicate photograph")
  return result,dims,[p.width,p.height],light,sha

def persist(rel,content,sha):
 dest=ROOT/rel
 dest.parent.mkdir(parents=True,exist_ok=True)
 dest.write_bytes(content);USED.add(sha)

def discover_images(pages,seeds):
 results=[];added=set()
 def add(url,alt,source):
  url=html.unescape(url.replace("\\/","/")).strip()
  if not url or url.startswith("data:"):return
  url=urljoin(source,url)
  parsed=urlparse(url)
  if parsed.scheme not in ("http","https"):return
  if url in added:return
  if re.search(r"(logo|favicon|icon|avatar|sprite|flag|placeholder|payment)",url+" "+alt,re.I):return
  added.add(url)
  results.append((url,alt,source))
 for seed in seeds:add(seed,"pool villa resort",seed)
 for page in pages:
  try:
   raw,_=get(page,bytes_max=5000000);text=raw.decode("utf-8","replace")
   soup=BeautifulSoup(text,"html.parser")
   for img in soup.find_all("img"):
    alt=str(img.get("alt") or img.get("title") or "")
    for attr in ("data-src","src","data-lazy-src","data-original","data-image","data-srcset","srcset"):
     val=img.get(attr)
     if val:
      for part in str(val).split(",")[:4]:
       add(part.strip().split(" ")[0],alt,page)
   for meta in soup.select('meta[property="og:image"],meta[name="twitter:image"]'):
    val=meta.get("content")
    if val:add(val,"property resort",page)
   # Gallery data sometimes arrive as JSON escaped image URLs.
   pats=re.findall(r'https?:(?:\\?/){2}[^"\\\s<>]+?(?:\.jpe?g|\.webp|\.png)(?:\?[^"\\\s<>]*)?',text,re.I)
   for m in pats[:400]:add(m,"gallery resort",page)
  except Exception as err:print("DISCOVERY FAILED",page,str(err)[:130],flush=True)
 return results

def try_hotel(hotel,info):
 candidates=discover_images([info["source"]]+info["pages"],info["seeds"])
 records=[]
 for key,words in info["scenes"]:
  row={"hotel":hotel,"key":key,"scene":words,"sourcePage":info["source"],"localPath":f"/images/travel/porto-cervo-premium/{hotel}/{key}.webp","rights":"Client states permission; obtain written property/commercial re-use confirmation before production","status":"failed"}
  scored=[]
  preferred=PREFERRED_MEDIA.get((hotel,key))
  if preferred:
   url,page,credit=preferred
   scored.append((1000,url,credit,page))
  for url,alt,source in candidates:
   tag=unquote(url+" "+alt).lower()
   score=sum(7 for word in words if word in tag)
   score+=2 if "cervo" in tag or "volpe" in tag or "pitrizza" in tag or "romazzino" in tag or "sardinia" in tag else 0
   if source==info["source"]:score+=1
   if score>0:scored.append((score,url,alt,source))
  scored.sort(key=lambda v:-v[0])
  errors=[]
  for score,url,alt,source in scored[:45]:
   try:
    binary,actual=get(url,timeout=22)
    image,original,output,light,sha=convert(binary)
    persist(f"{hotel}/{key}.webp",image,sha)
    actual_credit=(preferred[2] if preferred and url==preferred[0] else info["name"]+" · official website")
    row.update(status="downloaded",downloadUrl=actual,sourcePage=source,sourceAlt=alt,originalSize=original,outputSize=output,brightness=light,sha256=sha,bytes=len(image),credit=actual_credit)
    break
   except Exception as err:errors.append(str(err)[:90])
  if row["status"]=="failed":row["errors"]=errors[:4];print("HOTEL FAILED",hotel,key,len(candidates),errors[:2],flush=True)
  else:print("HOTEL OK",hotel,key,row["bytes"],flush=True)
  records.append(row)
 return records

def commons_files(query):
 api="https://commons.wikimedia.org/w/api.php"
 params={"action":"query","generator":"search","gsrsearch":"filetype:bitmap "+query,"gsrnamespace":"6","gsrlimit":"25","prop":"imageinfo","iiprop":"url|size|extmetadata","iiurlwidth":"1920","format":"json"}
 r=S.get(api,params=params,timeout=32);r.raise_for_status()
 obj=r.json()
 return list(obj.get("query",{}).get("pages",{}).values())

def try_destination(key,query,matches):
 row={"key":key,"search":query,"localPath":f"/images/travel/porto-cervo-premium/destination/{key}.webp","status":"failed"}
 try:
  allpages=commons_files(query)
  matches_normalized=[m.lower() for m in matches]
  def score(p):
   title=p["title"].lower().replace("_"," ")
   return 10*any(t in title for t in matches_normalized)+2*("sard" in title or "cervo" in title or "sard" in query.lower())+min(p.get("imageinfo",[{}])[0].get("width",0),2500)/1000
  allpages.sort(key=score,reverse=True)
  for page in allpages:
   title=page.get("title","")
   if not any(t in title.lower().replace("_"," ") for t in matches_normalized):continue
   info=page.get("imageinfo",[{}])[0];meta=info.get("extmetadata",{})
   lic=re.sub("<[^>]*>","",meta.get("LicenseShortName",{}).get("value",""))
   if not any(x in lic.lower() for x in ("cc by","cc0","public domain")):continue
   if info.get("width",0)<1100 or info.get("height",0)<500:continue
   url=info.get("thumburl") or info.get("url")
   if not url:continue
   try:
    binary,actual=get(url,timeout=35)
    content,original,output,light,sha=convert(binary,950)
    persist(f"destination/{key}.webp",content,sha)
    author=re.sub("<[^>]*>","",html.unescape(meta.get("Artist",{}).get("value",""))).strip()[:200]
    row.update(status="downloaded",sourceFile=title,sourcePage=info.get("descriptionurl"),author=author,license=lic,licenseUrl=meta.get("LicenseUrl",{}).get("value",""),downloadUrl=actual,originalSize=original,outputSize=output,brightness=light,sha256=sha,bytes=len(content))
    break
   except Exception as err:row["lastError"]=str(err)[:140]
 except Exception as err:row["error"]=str(err)[:180]
 if row["status"]=="failed" and key in DIRECT_DEST:
  url,page,credit=DIRECT_DEST[key]
  try:
   binary,actual=get(url,timeout=30)
   content,original,output,light,sha=convert(binary,850)
   persist(f"destination/{key}.webp",content,sha)
   row.update(status="downloaded",sourceFile=credit,sourcePage=page,author=credit,license="Client-authorised editorial use; written third-party reuse terms to verify before production",licenseUrl=page,downloadUrl=actual,originalSize=original,outputSize=output,brightness=light,sha256=sha,bytes=len(content))
  except Exception as error:row["fallbackError"]=str(error)[:160]
 print("CITY",key,row["status"],row.get("sourceFile",""),flush=True)
 return row

hotel_out=[]
for key,record in HOTELS.items():
 hotel_out.extend(try_hotel(key,record))
dest_out=[try_destination(key,q,terms) for key,q,terms in DEST]
stamp=datetime.now(timezone.utc).isoformat()
HOTEL_REPORT.write_text(json.dumps({"scope":"Porto Cervo official-resort galleries, Preview only; 12 exact-property shots sought","generatedAt":stamp,"expected":12,"downloaded":sum(x["status"]=="downloaded" for x in hotel_out),"items":hotel_out},ensure_ascii=False,indent=2)+"\n")
CITY_REPORT.write_text(json.dumps({"scope":"Porto Cervo destination images from Wikimedia Commons only","generatedAt":stamp,"expected":9,"downloaded":sum(x["status"]=="downloaded" for x in dest_out),"items":dest_out},ensure_ascii=False,indent=2)+"\n")
print("TOTAL",sum(x["status"]=="downloaded" for x in hotel_out),"/12 hotels,",sum(x["status"]=="downloaded" for x in dest_out),"/9 destination",flush=True)
