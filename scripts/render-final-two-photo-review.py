#!/usr/bin/env python3
"""Generate image-by-image inspection sheets readable on GitHub without Vercel.
Image candidates are NEVER reported as visually or commercially approved.
"""
from __future__ import annotations
import html, json
from collections import Counter
from pathlib import Path
from urllib.parse import urlparse

ROOT=Path("data/travel")
DOC=Path("docs")
REGISTRY=[("val-disere","valDisere","Val d'Isère"),("verbier","verbier","Verbier")]
def safe(s):
 return html.escape(str(s or ""),quote=True).replace("|","&#124;").replace("\n"," ")
def link(url,label="Source originale"):
 if not isinstance(url,str) or not url.startswith("https://"):return "À identifier"
 return '<a href="'+safe(url)+'">'+safe(label)+'</a>'
def img(row):
 f=row.get("localPath","")
 if not f or not Path("public"+f).is_file():return "Image absente"
 return '<img src="../public'+safe(f)+'" width="280" alt="'+safe(row.get("candidateContext") or row.get("placeLabel") or row.get("property") or "")+'">'
def row_md(row):
 candidate=row.get("status")=="candidate_needs_visual_review"
 cause=[]
 if not candidate:cause.append("PHOTO ABSENTE")
 if not row.get("visuallyVerified"):cause.append("Visuel non approuvé")
 if not row.get("commercialRightsCleared"):cause.append("Droits de publication à contrôler")
 if row.get("visualQaWarning"):cause.append(row["visualQaWarning"])
 flag="; ".join(cause)
 origin=row.get("sourcePage","")
 lic=row.get("license","") or "Licence indépendante non confirmée"
 loc=row.get("placeLabel") or row.get("property") or row.get("propertyKey") or ""
 return "| "+safe(loc)+" · "+safe(row.get("key"))+" | "+img(row)+" | "+link(origin)+" / "+safe(lic)+" | "+safe(flag)+" |"
report=["# Bosphoras Luxury Stays — contrôle des photographies alpines","","Ces planches **ne constituent pas une Preview Vercel**. Les photographies sont des candidates réelles dont la provenance est documentée, pas des images automatiquement validées. Les légendes, la licence effective et la correspondance exacte hôtel/lieu doivent être vérifiées avant tout affichage public.",""]
for slug,key,name in REGISTRY:
 manifest=json.loads((ROOT/(key+"MediaCandidates.json")).read_text(encoding="utf8"))
 hotels=manifest["hotels"];places=manifest["destinationScenes"]
 hotel_count=sum(x["status"]=="candidate_needs_visual_review" for x in hotels)
 place_count=sum(x["status"]=="candidate_needs_visual_review" for x in places)
 src_seen=Counter(urlparse(x.get("downloadUrl","")).path for x in hotels+places if x.get("downloadUrl"))
 duplicate_urls={u:n for u,n in src_seen.items() if n>1 and u}
 s=[
  "# "+name+" — galerie de vérification",
  "",
  "> **INTERNE — Images candidates uniquement. Aucune image n'est encore approuvée pour publication.**",
  "",
  "**Couverture :** "+str(hotel_count)+"/12 photographies des établissements, "+str(place_count)+"/9 scènes locales, "+str(hotel_count+place_count)+"/21 en tout.",
  "",
  "**Statut de publication :** aucune validation visuelle globale, aucun feu vert de publication commerciale. Le guide reste en brouillon et non indexable.",
  "",
  "## Hôtels : 4 adresses × 3 images",
  "",
  "| Établissement et emplacement | Photo WebP authentique à examiner | Source / licence déclarée | Contrôles restants |",
  "|---|---|---|---|"
 ]
 s.extend(row_md(x) for x in hotels)
 s.extend(["","## Destination : 9 scènes à identifier précisément","","| Site ou quartier | Photo WebP authentique à examiner | Source / licence déclarée | Contrôles restants |","|---|---|---|---|"])
 s.extend(row_md(x) for x in places)
 s.extend(["","## Contrôles complémentaires","",
   "- [ ] Confirmer que chaque photo montre effectivement l'établissement ou l'endroit annoncé, et qu'il ne s'agit pas de variantes recadrées du même cliché.",
   "- [ ] Contrôler la source, l'auteur, la licence commerciale et les obligations CC BY/CC BY-SA ou de marques.",
   "- [ ] Vérifier les vues et les catégories de chambre pour éviter toute promesse implicite d'inventaire.",
   "- [ ] Rédiger les descriptions alternatives FR/EN sur la base de chaque image effectivement contrôlée.",
   "- [ ] Ne jamais activer ces trois pages premium, les photos ou le SEO indexable avant le contrôle final.",
   ""])
 if duplicate_urls:
  s.extend(["**Alerte :** plusieurs fichiers dérivent de la même image d'origine :"]+["- "+safe(u)+" ("+str(n)+")" for u,n in duplicate_urls.items()]+[""])
 destination=DOC/("travel-final-two-photo-review-"+slug+".md")
 destination.write_text("\n".join(s),encoding="utf8")
 report.append("- ["+name+"]("+destination.name+") : **"+str(hotel_count+place_count)+"/21** WebP candidats (hôtels "+str(hotel_count)+"/12 ; sites "+str(place_count)+"/9). Contrôle visuel et droits toujours en attente.")
report.extend(["","### Règle de production","","Aucune Preview Vercel avant que les dix destinations du lot soient vraiment validées. Les 88 destinations du catalogue restent intactes."])
(DOC/"travel-final-two-photo-review-index.md").write_text("\n".join(report)+"\n",encoding="utf8")
print("Photo review boards written for "+", ".join(x[2] for x in REGISTRY),flush=True)
