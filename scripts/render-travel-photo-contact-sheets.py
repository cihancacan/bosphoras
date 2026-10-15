#!/usr/bin/env python3
"""Render inspectable, source-linked 21-slot contact sheets directly on GitHub.
No Vercel build; NEVER auto-approve visual accuracy or rights.
"""
from __future__ import annotations
import html,json,math,textwrap
from io import BytesIO
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont,ImageOps

REGISTRY=[
 ("stMoritz","st-moritz","St. Moritz"),
 ("aspen","aspen","Aspen"),
 ("niseko","niseko","Niseko"),
 ("megeve","megeve","Megève"),
 ("jacksonHole","jackson-hole","Jackson Hole"),
 ("bigSky","big-sky","Big Sky"),
 ("valDisere","val-disere","Val d'Isère"),
 ("verbier","verbier","Verbier"),
]
OUT=Path("docs/travel-photo-contact-sheets");OUT.mkdir(parents=True,exist_ok=True)
try:
 FONT=ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",16)
 TITLE=ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",23)
except OSError:FONT=ImageFont.load_default();TITLE=FONT
W=1440;COLUMNS=4;MARGIN=22;GAP=18;CW=(W-2*MARGIN-(COLUMNS-1)*GAP)//COLUMNS
IMAGE_H=220;CARD_H=318;TOP=85
def shorten(s,n=38):
 s=str(s or "").strip()
 return s if len(s)<n else s[:n-1]+"…"
def wrap(text,n=37):
 return textwrap.wrap(str(text or ""),width=n)[:2]
index=["# Bosphoras Luxury Stays — contrôle réel des photos","",
       "Cette galerie n'est **pas** une preuve de validation des droits ni une autorisation de publication. Les photos sont des candidates sourcées ; chaque image doit correspondre à l'établissement ou au lieu nommé. La direction artistique et les alt FR/EN restent à vérifier.","",
       "**Orange** = image candidate à examiner · **Rouge** = manquante ou signalée · **Vert** = validée visuellement, si et seulement si son manifeste l'indique.",""]
for stem,slug,name in REGISTRY:
 p=Path("data/travel")/(stem+"MediaCandidates.json")
 m=json.loads(p.read_text(encoding="utf8"))
 items=m["hotels"]+m["destinationScenes"]
 assert len(items)==21,(slug,len(items))
 height=TOP+math.ceil(len(items)/COLUMNS)*(CARD_H+GAP)+30
 page=Image.new("RGB",(W,height),(245,242,237));pen=ImageDraw.Draw(page)
 pen.text((MARGIN,20),name+" — 21 emplacements photographiques",font=TITLE,fill=(24,48,58))
 got=sum(x.get("status")=="candidate_needs_visual_review" for x in items)
 approved=sum(x.get("visuallyVerified") is True for x in items)
 pen.text((MARGIN,53),str(got)+" sources candidates, "+str(approved)+" approuvées visuellement. Vérifier les droits et les photos indépendamment.",font=FONT,fill=(78,92,101))
 markdown=[f"# {name} — 21 photographies à contrôler","",
          f"**Candidats récupérés : {got}/21 · Validés visuellement : {approved}/21**. Aucune validation ne résulte du seul téléchargement.","",
          f"![Planche de contrôle {name}]({slug}.jpg)","",
          "| No | Etablissement / lieu | Source et métadonnées | État |",
          "|---:|---|---|---|"]
 for idx,x in enumerate(items):
  c=idx%COLUMNS;r=idx//COLUMNS;left=MARGIN+c*(CW+GAP);top=TOP+r*(CARD_H+GAP)
  warn=x.get("visualQaWarning","")
  missing=x.get("status")!="candidate_needs_visual_review"
  approved=x.get("visuallyVerified") is True and x.get("commercialRightsCleared") is True and not warn
  color=(169,50,54) if missing or warn else (38,118,83) if approved else (196,136,42)
  pen.rounded_rectangle((left,top,left+CW,top+CARD_H),radius=10,fill=(255,255,255),outline=color,width=4)
  file=Path("public"+x.get("localPath","")) if x.get("localPath") else None
  if file and file.is_file() and not missing:
   try:
    with Image.open(file) as im:
     preview=ImageOps.fit(ImageOps.exif_transpose(im.convert("RGB")),(CW-14,IMAGE_H),method=Image.Resampling.LANCZOS)
     page.paste(preview,(left+7,top+8))
   except (OSError,ValueError):
    pen.text((left+20,top+80),"IMAGE NON LISIBLE",font=FONT,fill=color)
  else:pen.text((left+20,top+80),"PHOTO MANQUANTE",font=TITLE,fill=color)
  place=x.get("property") or x.get("placeLabel") or x.get("propertyKey") or "Source"
  pen.text((left+12,top+IMAGE_H+12),str(idx+1).zfill(2)+" · "+shorten(place,34),font=FONT,fill=(31,48,59))
  pen.text((left+12,top+IMAGE_H+38),shorten(x.get("key"),34),font=FONT,fill=(70,83,96))
  status="ALERTE : "+shorten(warn,32) if warn else "MANQUANTE" if missing else "SOURCE CANDIDATE"
  pen.text((left+12,top+IMAGE_H+65),shorten(status,39),font=FONT,fill=color)
  source=x.get("sourcePage","")
  origin=(" [Source]("+source+")" if source.startswith("https://") else " Source à trouver")
  markdown.append(f"| {idx+1} | {str(place).replace('|','/')} — {x.get('key')} |{origin} · {html.escape(x.get('candidateContext','')[:120])}| {'Manquante' if missing else 'Candidate'}"+("; **"+warn.replace("|","/")+"**" if warn else "")+" |")
 page.save(OUT/(slug+".jpg"),"JPEG",quality=82,optimize=True,subsampling=2)
 (OUT/(slug+".md")).write_text("\n".join(markdown)+"\n",encoding="utf8")
 index.append(f"- [{name}]({slug}.md) — {got}/21 fichiers candidats, {sum(bool(x.get('visualQaWarning')) for x in items)} alertes ; [ouvrir l'image seule]({slug}.jpg)")
print("REVIEW_BOARD_COMPLETE",len(REGISTRY),"cities; visual approval remains manual",flush=True)
(OUT/"README.md").write_text("\n".join(index)+"\n",encoding="utf8")
