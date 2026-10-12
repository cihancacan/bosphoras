#!/usr/bin/env python3
"""Read-only tourism image candidate audit. Never publish unreviewed images."""
import json,re
from urllib.parse import urljoin
from pathlib import Path
import requests
from bs4 import BeautifulSoup
PAGES={
"hero-beach":"https://www.visitdubai.com/en/places-to-visit/palm-west-beach",
"hero-beach-alt":"https://www.visitdubai.com/en/explore-dubai/dubai-neighbourhoods/palm-jumeirah",
"palm-aerial":"https://www.visitdubai.com/en/explore-dubai/dubai-neighbourhoods/palm-jumeirah",
"downtown":"https://www.visitdubai.com/en/explore-dubai/dubai-neighbourhoods/downtown-dubai",
"business-bay":"https://www.visitdubai.com/en/explore-dubai/dubai-neighbourhoods/business-bay",
"marina":"https://www.visitdubai.com/en/explore-dubai/dubai-neighbourhoods/dubai-marina"
}
output={}
for key,page in PAGES.items():
    try:
        r=requests.get(page,headers={"User-Agent":"Mozilla/5.0 (compatible; BosphorasTravel/1.0)","Accept-Language":"en-US,en;q=0.9"},timeout=26)
        html=r.text
        soup=BeautifulSoup(html,"html.parser")
        cands=[]
        def add(url,alt,kind):
            if not url: return
            url=url.strip()
            if not url or url.startswith(("data:","javascript:")):return
            full=urljoin(r.url,url)
            if len(full)>1200 or not full.startswith("https://"): return
            if "/-/" not in full and "/media/" not in full and "image" not in full.lower() and not re.search(r"\.(jpg|jpeg|png|webp)(\?|$)",full,re.I): return
            if any(full==x["url"] for x in cands):return
            cands.append({"url":full,"alt":alt[:220] if alt else "","kind":kind})
        for el in soup.find_all("meta"):
            if el.get("property","").startswith("og:image") or el.get("name","").startswith("twitter:image"): add(el.get("content"),el.get("property") or el.get("name"),"meta")
        for el in soup.find_all("img"):
            alt=el.get("alt") or el.get("title") or el.get("data-alt") or ""
            for attr in ("src","data-src","data-original","data-lazy-src","data-srcset","srcset"):
                v=el.get(attr)
                if v:
                    if attr.endswith("srcset"):
                        v=v.split(",")[-1].strip().split(" ")[0]
                    add(v,alt,"img:"+attr)
        for el in soup.find_all("source"):
            add((el.get("srcset") or "").split(" ")[0].split(",")[0],el.get("type"),"source")
        # Include the first CMS media references if site defers imagery to JS
        for u in re.findall(r"""(?:https?:)?(?:\\/\\/)?[^"'<>\s]+?\.(?:jpe?g|webp|png)(?:\?[^"'<>\s]*)?""",html,re.I)[:150]:
            add(u.replace("\\u0026","&").replace("\\/","/"),"raw HTML image reference","html")
        print("PAGE",key,"status",r.status_code,"bytes",len(r.content),"candidates",len(cands),"final",r.url,flush=True)
        for cand in cands[:22]:
            print("CAND",key,cand["kind"],cand["alt"][:90],cand["url"][:220],flush=True)
        output[key]={"page":page,"status":r.status_code,"candidateCount":len(cands),"candidates":cands[:90]}
    except Exception as exc:output[key]={"page":page,"error":str(exc)[:270]}
out=Path("data/travel/dubaiVisitDubaiCandidateAudit.json")
out.parent.mkdir(parents=True,exist_ok=True)
out.write_text(json.dumps(output,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
