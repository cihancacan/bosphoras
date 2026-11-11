#!/usr/bin/env python3
"""Read-only Tangalle #80 hotel photo discovery. Lists property-exact source candidates for review."""
import requests, bs4, re, html, urllib.parse
pages={
"aman":"https://www.aman.com/resorts/amanwella/gallery",
"anantara":"https://www.anantara.com/en/peace-haven-tangalle/gallery",
"kayaam":"https://www.resplendentceylon.com/resort/kayaam-wellness/gallery/",
"buckingham":"https://buckinghamplace.lk/"
}
ses=requests.Session()
ses.headers.update({"User-Agent":"Mozilla/5.0 (compatible; Bosphoras Editorial Research/1.0)","Accept-Language":"en"})
for hotel,page in pages.items():
 print("\n===== TANGALLE_HOTEL",hotel,page,flush=True)
 try:
  r=ses.get(page,timeout=35);print("HTTP",r.status_code,"HTML_BYTES",len(r.content),"FINAL",r.url,flush=True)
  r.raise_for_status()
  soup=bs4.BeautifulSoup(r.text,"html.parser")
  photos=[]
  for el in soup.select("img,source,meta[property='og:image'],meta[name='twitter:image']"):
   alt=el.get("alt","") or el.get("title","") or el.get("content","")
   values=[]
   for attr in ("data-src","data-lazy-src","data-original","src","srcset","data-srcset","content"):
    val=el.get(attr)
    if val and isinstance(val,str):
     if attr.endswith("srcset"):
      values += [x.strip().split()[0] for x in val.split(",")]
     else:values.append(val)
   for u in values:
    full=urllib.parse.urljoin(r.url,html.unescape(u))
    if full.startswith("http") and not full.startswith("data:") and full not in [p[1] for p in photos]:
     photos.append((alt.strip()[:100],full))
  print("IMG_CANDIDATES",len(photos),flush=True)
  for alt,url in photos[:100]:
   print("CANDIDATE",repr(alt),url[:410],flush=True)
  # Some galleries carry image records in embedded JSON; these are candidates only and not approved.
  raw=html.unescape(r.text.replace("\\/","/"))
  extra=re.findall(r'https?://[^"\s<>\\]+?\.(?:jpg|jpeg|png|webp)(?:\?[^"\s<>\\]*)?',raw,re.I)
  extras=list(dict.fromkeys(extra))
  print("EMBEDDED_IMAGE_URLS",len(extras),flush=True)
  for url in extras[:60]:print("EMBEDDED",url[:410],flush=True)
 except Exception as ex:print("ERROR",hotel,str(ex),flush=True)
