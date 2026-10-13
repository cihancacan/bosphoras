#!/usr/bin/env python3
"""Paris hotel-specific photography, 3 hand-identified property images each.
Only use the documented establishment's real photo. Preserve source page, photographer,
rights caveat; reject small/malformed/duplicate images, store compressed WebP in repo.
"""
from datetime import datetime,timezone
from io import BytesIO
from pathlib import Path
import requests,hashlib,json
from PIL import Image,ImageOps,ImageStat

JOBS=[
("cheval-blanc","seine-exterior","historic Samaritaine riverside palace exterior",
 "https://www.theworlds50best.com/hotels/filestore/jpg/Cheval%20Blanc-1_W50BH25-profile.jpg",
 "https://www.theworlds50best.com/hotels/the-list/cheval-blanc.html","The World's 50 Best Hotels · Cheval Blanc Paris",
 ["https://www.theworlds50best.com/hotels/filestore/jpg/Cheval%20Blanc-1_W50BH25-profile.jpg?w=1500"]),
("cheval-blanc","dior-spa-pool","Cheval Blanc Paris Dior Spa infinity pool",
 "https://images.prismic.io/lvmh-chevalblanc/ajqFAVbRV8_QfxE-_Light-ChevalBlancParis_DiorSpa_PiscineInfinie_2026_OliverFly-1-.jpg",
 "https://www.chevalblanc.com/fr/maison/paris/bien-etre/","Cheval Blanc Paris · Oliver Fly / Dior Spa",
 ["https://images.prismic.io/lvmh-chevalblanc/ajqFAVbRV8_QfxE-_Light-ChevalBlancParis_DiorSpa_PiscineInfinie_2026_OliverFly-1-.jpg?auto=format%2Ccompress"]),
("cheval-blanc","seine-suite","Cheval Blanc Paris suite with window and Notre Dame view",
 "https://media.zenfs.com/en/elle_570/5f01b56fd2c09b121064aab99986d487.jpg",
 "https://travel.yahoo.com/hotels/articles/butler-dior-spa-cheval-blanc-130000465.html","ELLE · Cheval Blanc Paris suite",
 ["https://s.yimg.com/lo/mysterio/api/854e668ab6ca62c065b99f5e92eb3fc300f84a0c7f23b3f4bdf7e2d672cf22cc/lightyear_networkapi/resizefill_w960%3Bquality_80%3Bformat_webp/https%3A/media.zenfs.com/en/elle_570/5f01b56fd2c09b121064aab99986d487.jpg"]),
("george-v","paris-entrance","Four Seasons Hotel George V entrance and facade in Paris",
 "https://www.fourseasons.com/content/dam/fourseasons/images/web/PAR/PAR_3352_aspect16x9.jpg",
 "https://press.fourseasons.com/paris/hotel-news/2025/worlds-leading-sustainable-supply-chain-programme/","Four Seasons · George V Paris",
 ["https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-0%2C0000-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/PAR/PAR_3352_aspect16x9.jpg"]),
("george-v","flowers-lobby","Four Seasons Hotel George V lobby with signature floral displays",
 "https://media.joinup.travel/storage/hotel/30634/photos/Four-Seasons-George-V3.jpg",
 "https://joinup.ro/en/hotel/29232","Join UP! · George V Paris interior",
 ["https://media.joinup.travel/storage/hotel/30634/photos/Four-Seasons-George-V36.jpg"]),
("george-v","spa-pool","Four Seasons Hotel George V Paris long mosaic indoor spa pool",
 "https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-3%2C2500-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/PAR/PAR_1390_original.jpg",
 "https://www.fourseasons.com/paris/spa/","Four Seasons · Le Spa George V",
 ["https://www.fourseasons.com/content/dam/fourseasons/images/web/PAR/PAR_1390_original.jpg"]),
("le-bristol","garden-terrace","Le Jardin Français courtyard and outdoor tables at Le Bristol Paris",
 "https://images.eu.ctfassets.net/og3b0tarlg4b/1wfjJyy8HozQOuatmOtjtT/be9519c2d72b9807a250b438b65d085d/Le_Jardin_Fran%C3%83_ais_LBP_x_Schumacher_-_%C3%82_Vincent_Leroux__6rmUd.jpg?fit=fill&fm=jpg&h=1450&w=1900",
 "https://www.oetkerhotels.com/hotels/le-bristol-paris/gallery/","Le Bristol Paris · Vincent Leroux",
 []),
("le-bristol","deluxe-suite","Le Bristol Paris pastel bedroom in a Deluxe Suite",
 "https://images.eu.ctfassets.net/og3b0tarlg4b/46L6ihLlhlmOWswGymkXAu/e5e18e5d57653a02545cd55520d4b535/room-SDLXG-image-le_bristol_paris-suite_deluxe-920_921-bd-4_S.jpg?fit=fill&fm=jpg&h=808&w=1070",
 "https://www.oetkerhotels.com/hotels/le-bristol-paris/accommodations/rooms-suites/deluxe-suite/","Le Bristol Paris · gallery",
 []),
("le-bristol","suite-eden-spa","Suite Eden outdoor private spa at Le Bristol Paris",
 "https://images.eu.ctfassets.net/og3b0tarlg4b/1CT2wpl7Q6Rfo1w5zrTPjH/83520a9ef2dc526401cdce68aa9e52ef/room-10TERX-image-LBP_-_SUITE_EDEN_-_FRANCK_BOHBOT_-_1_S.jpg?fit=fill&fm=jpg&h=1450&w=1900",
 "https://www.oetkerhotels.com/hotels/le-bristol-paris/accommodations/rooms-suites/suite-eden/gallery/","Le Bristol Paris · Franck Bohbot",
 []),
("lutetia","hotel-facade","Mandarin Oriental Lutetia facade by Boulevard Raspail at dusk",
 "https://assets.glamour.de/photos/69c3c592b58a30de792bb4a7/16%3A9/w_2560%2Cc_limit/Hotel_Lutetia_Facade_025.jpg",
 "https://www.glamour.de/artikel/hotel-lutetia-paris-1","GLAMOUR · Mandarin Oriental Lutetia",
 []),
("lutetia","indoor-pool","Mandarin Oriental Lutetia marble blue swimming pool",
 "https://designandcontract.com/files/chunks/5c3f4830a0d55631ec0002d5/big-image_5c3f48c7a0d55632040002ce.jpg",
 "https://designandcontract.com/it/realizzazioni/hotel-lutetia","Design & Contract · Lutetia",
 []),
("lutetia","eiffel-suite","Lutetia Paris suite with Eiffel Tower balcony view",
 "https://s2-casavogue.glbimg.com/uXgwjjEB4IdHpTGXRrMgVLeq2cQ%3D/1200x/smart/filters%3Acover%28%29%3Astrip_icc%28%29/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2025/L/X/uNBXB2QDumtV4WtQVBJQ/hotel-lutetia-6-.jpg",
 "https://casavogue.globo.com/lazer-e-cultura/hoteis/noticia/2025/06/mandarin-oriental-lutetia.ghtml","Casa Vogue · Mandarin Oriental Lutetia",
 ["https://i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2025/L/X/uNBXB2QDumtV4WtQVBJQ/hotel-lutetia-6-.jpg"])
]
ROOT=Path("public/images/travel/paris-premium")
REPORT=Path("data/travel/parisPremiumImageSources.json")
UA={"User-Agent":"Mozilla/5.0 (compatible; BosphorasTravelParisMedia/1.0)","Accept":"image/webp,image/jpeg,image/png,image/*;q=0.8"}
S=requests.Session()
seen=set()
out=[]
def get(url):
 r=S.get(url,headers=UA,timeout=27,stream=True);r.raise_for_status()
 bs=bytearray()
 for ch in r.iter_content(128000):
  bs.extend(ch)
  if len(bs)>26000000:raise ValueError("image exceeds 26MB")
 with Image.open(BytesIO(bs)) as original:
  im=ImageOps.exif_transpose(original).convert("RGB")
  if im.width<640 or im.height<430:raise ValueError(f"under-sized: {im.width}x{im.height}")
  if im.width/im.height<1.1:raise ValueError("not landscape")
  dimensions=[im.width,im.height]
  im.thumbnail((1920,1400),Image.Resampling.LANCZOS)
  buf=BytesIO();im.save(buf,"WEBP",quality=85,method=6)
  return buf.getvalue(),dimensions,[im.width,im.height],r.url
for hotel,name,scene,url,page,credit,alts in JOBS:
 entry={"hotel":hotel,"key":name,"scene":scene,"credit":credit,"sourcePage":page,
        "localPath":f"/images/travel/paris-premium/{hotel}/{name}.webp",
        "rights":"Project photo usage declared by the user; verify third-party commercial permission before production",
        "status":"failed"}
 failures=[]
 for candidate in [url]+alts:
  try:
   data,original,outsize,final=get(candidate)
   hashvalue=hashlib.sha256(data).hexdigest()
   if hashvalue in seen:raise ValueError("duplicate image")
   seen.add(hashvalue)
   filename=ROOT/hotel/(name+".webp")
   filename.parent.mkdir(parents=True,exist_ok=True);filename.write_bytes(data)
   entry.update(status="downloaded",downloadUrl=final,sourceSize=original,outputSize=outsize,bytes=len(data),
                sha256=hashvalue,transformations="EXIF normalized, resized, WebP q85")
   print("OK",hotel,name,original,len(data),flush=True)
   break
  except Exception as e:failures.append(str(e)[:160])
 if entry["status"]=="failed":
  entry["errors"]=failures
  print("FAILED",hotel,name,failures,flush=True)
 out.append(entry)
REPORT.parent.mkdir(parents=True,exist_ok=True)
REPORT.write_text(json.dumps({"scope":"Only exact named Paris hotel photographs, never district views",
 "createdAt":datetime.now(timezone.utc).isoformat(),"expected":len(JOBS),
 "downloaded":sum(x["status"]=="downloaded" for x in out),"items":out},indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
