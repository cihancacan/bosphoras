#!/usr/bin/env python3
"""Discover photographic candidates from each hotel's own official media gallery.

This is a research-only first pass, not an automatic page publication.
Do not substitute another hotel's photographs or treat access as usage permission.
"""
import html, json, re, time
from urllib.parse import urljoin,urlparse
from pathlib import Path
import requests
from bs4 import BeautifulSoup

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"data/travel/bodrumHotelPhotoCandidates.json"
HOTELS={
"mandarin-oriental":[
 "https://www.mandarinoriental.com/en/bodrum/paradise-bay/gallery",
 "https://www.mandarinoriental.com/en/bodrum/paradise-bay",
 "https://press.mandarinoriental.com/bodrum/?lang=eng"],
"the-bodrum-edition":[
 "https://www.marriott.com/en-us/hotels/bjveb-the-bodrum-edition/photos/",
 "https://www.marriott.com/en-us/hotels/bjveb-the-bodrum-edition/overview/"],
"maxx-royal-bodrum":[
 "https://www.maxxroyal.com/maxx-royal-bodrum/gallery",
 "https://www.maxxroyal.com/maxx-royal-bodrum"],
"six-senses-kaplankaya":[
 "https://www.sixsenses.com/en/hotels-resorts/europe/turkey/kaplankaya/gallery",
 "https://www.sixsenses.com/en/hotels-resorts/europe/turkey/kaplankaya",
 "https://www.ihg.com/turkey",
 "https://www.ihg.com/destined/properties",
 "https://dev.sixsensesplace.com/en/hotels-resorts/europe/turkey/kaplankaya/gallery/"],
}
HEADERS={"User-Agent":"Mozilla/5.0 (compatible; BosphorasTravelEditorial/1.0)", "Accept":"text/html,application/xhtml+xml"}
URL_RE=re.compile(r"https?:\\?/\\?/[^\\s\"'<>\\]+?\\.(?:jpeg|jpg|png|webp|avif)(?:\\?[^\\s\"'<>\\]+)?",re.I)
NEGATIVE=re.compile(r"logo|icon|favicon|avatar|flag|map|qr|spa-brand|sprite|placeholder|svg|award|tripadvisor|loading",re.I)
POSITIVE=re.compile(r"bodrum|edition|mandarin|kaplankaya|resort|pool|beach|sea|view|villa|suite|terrace|aerial|sunset|sunrise|lounge|restaurant|deck|garden|gallery|exterior|maxx|shore",re.I)
def clean(raw,base):
    if not raw:return None
    raw=html.unescape(raw.strip()).replace("\\/","/")
    raw=raw.split(" ")[0] if " " in raw and not raw.startswith("https://") else raw
    if raw.startswith("//"):raw="https:"+raw
    if raw.startswith("data:") or raw.startswith("blob:"):return None
    candidate=urljoin(base,raw)
    p=urlparse(candidate)
    if p.scheme!="https" or not p.netloc:return None
    if re.search(r"\\.(svg|gif|ico)(\\?|$)",p.path,re.I):return None
    return candidate
def srcset_best(val):
    vals=[]
    for item in val.split(","):
        bits=item.strip().split()
        if bits:
            try:width=int(bits[-1][:-1]) if bits[-1].endswith("w") else 0
            except ValueError:width=0
            vals.append((width,bits[0]))
    return max(vals)[1] if vals else None
def main():
    result={}
    for hotel, pages in HOTELS.items():
        urls={}; page_stats=[]
        def add(raw,alt,page,source):
            link=clean(raw,page)
            if not link:return
            context=(alt+" "+urlparse(link).path).lower()
            if NEGATIVE.search(context):return
            score=(8 if POSITIVE.search(context) else 0)+(8 if source in ("og:image","twitter:image") else 0)
            score+=(3 if source in ("img", "picture", "srcset") else 0)
            score+=(3 if "gallery" in page else 0)
            if re.search(r"\\.(jpg|jpeg|png|webp|avif)(\\?|$)",urlparse(link).path,re.I):score+=2
            if source=="html-url":score-=3
            old=urls.get(link)
            if not old or score>old["score"]:
                urls[link]={"url":link,"alt":alt[:220],"score":score,"source":source,"sourcePage":page}
        for page in pages:
            try:
                response=requests.get(page,headers=HEADERS,timeout=(12,28))
                response.raise_for_status()
                soup=BeautifulSoup(response.content,"html.parser")
                page_stats.append({"page":page,"status":response.status_code,"bytes":len(response.content)})
                for tag in soup.find_all("meta"):
                    prop=(tag.get("property") or tag.get("name") or "").lower()
                    if prop in ("og:image","og:image:url","twitter:image","twitter:image:src"):
                        add(tag.get("content",""),prop,page,prop)
                for tag in soup.find_all(["img","source"]):
                    label=str(tag.get("alt") or tag.get("title") or tag.get("aria-label") or "")
                    for key in ("src","data-src","data-original","data-lazy-src","data-image","data-image-url","data-srcset","srcset"):
                        value=tag.get(key)
                        if value:
                            if "srcset" in key:value=srcset_best(value)
                            add(value,label,page,"srcset" if "srcset" in key else ("picture" if tag.name=="source" else "img"))
                for match in URL_RE.findall(response.text[:1_500_000]):
                    add(match,"",page,"html-url")
            except Exception as e:
                page_stats.append({"page":page,"error":(type(e).__name__+": "+str(e))[:250]})
            time.sleep(.3)
        ranked=sorted(urls.values(),key=lambda r:(-r["score"],r["url"]))
        result[hotel]={"pages":page_stats,"candidateCount":len(ranked),"candidates":ranked[:90]}
        print(hotel,"candidates",len(ranked),"top",[(z["score"],z["alt"][:40],z["url"][:100]) for z in ranked[:5]],flush=True)
    OUT.parent.mkdir(parents=True,exist_ok=True)
    OUT.write_text(json.dumps({"scope":"Bodrum only; official hospitality sites; review before publishing","hotels":result},indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
    print("SUMMARY",json.dumps({k:v["candidateCount"] for k,v in result.items()}),flush=True)
if __name__=="__main__":main()
