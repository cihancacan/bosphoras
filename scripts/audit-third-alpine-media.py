#!/usr/bin/env python3
"""Bosphoras third alpine image candidate audit and GitHub review sheets.
Source candidates are not automatically visually verified or licensed.
Do not mark photos complete simply because download succeeded.
"""
import html, json, re
from collections import defaultdict
from pathlib import Path
from urllib.parse import urlparse, unquote, parse_qs

BASE=Path("data/travel")
DOC=Path("docs")
CITIES={"megeve":"Megève","gstaad":"Gstaad","zermatt":"Zermatt"}
def normal_source(url):
 raw=unquote(urlparse(url or "").path).lower()
 raw=re.sub(r"-p-\d+(?=\.(?:jpe?g|png|webp)$)","",raw)
 raw=re.sub(r"-(?:1309x785|1600x960|1920x1080)(?=\.(?:jpe?g|png|webp)$)","",raw)
 return raw
def credit(s):
 # Wikimedia descriptions can include HTML anchors; keep author names, not raw markup.
 clean=html.unescape(re.sub("<[^>]+>"," ",str(s or "")))
 return " ".join(clean.split())[:180]
def safe(s):
 return html.escape(str(s or ""),quote=True).replace("|","&#124;")
def link(u):
 if not str(u or "").startswith("https://"):return "À trouver"
 return '<a href="'+safe(u)+'">Voir la source</a>'
def picture(x):
 path=x.get("localPath")
 if not path or not Path("public"+path).is_file():return "À rechercher"
 return '<img alt="'+safe(x.get("property") or x.get("placeLabel") or x.get("candidateContext"))+'" src="../public'+safe(path)+'" width="270">'
intro=[
 "# Bosphoras Luxury Stays — troisième sous-lot alpin : galeries internes",
 "",
 "**Statut : photos candidates, NON approuvées pour la publication.**",
 "Les originaux téléchargés proviennent de sites de maisons ou de Wikimedia Commons, mais la correspondance exacte, la variété et les droits commerciaux restent à valider.",
 "",
]
index=intro[:]
for slug,name in CITIES.items():
 file=BASE/(slug+"MediaCandidates.json")
 data=json.loads(file.read_text(encoding="utf8"))
 items=data["hotels"]+data["destinationScenes"]
 seen=defaultdict(list)
 for p in items:
  if p.get("status")!="candidate_needs_visual_review":continue
  key=normal_source(p.get("downloadUrl",""))
  if key:seen[key].append(p)
 for variants in seen.values():
  if len(variants)<2:continue
  for item in variants[1:]:
   warning="Même cliché source que "+variants[0].get("key","autre vue")+" ; le redimensionnement ne constitue pas une nouvelle photo."
   item["visualQaWarning"]=warning
   item["commercialRightsCleared"]=False
   item["visuallyVerified"]=False
 # Prevent known irrelevant graphic assets from being mistaken for photography.
 for p in items:
  lower=(p.get("downloadUrl","")+" "+p.get("candidateContext","")).lower()
  if p.get("status")!="candidate_needs_visual_review":continue
  if "one-michelin-key" in lower or "michelin-key.webp" in lower:
   p["visualQaWarning"]="À REMPLACER : visuel de récompense ou logo, ne représente ni chambre ni espace hôtelier."
  elif p.get("propertyKey")=="zannier-le-chalet" and "warm.webp" in lower:
   p["visualQaWarning"]="À CONTRÔLER : image générique Zannier Warm, aucune chambre Le Chalet clairement identifiée."
  elif p.get("propertyKey")=="lodge-park" and "brunch_lunch" in lower:
   p["visualQaWarning"]="À CONTRÔLER : image de restauration. Ne pas l’utiliser comme façade ou chambre."
  elif p.get("propertyKey")=="ultima-hotel" and "summerseason" in lower:
   if not p.get("visualQaWarning"):p["visualQaWarning"]="Image estivale du vrai hôtel, ne pas la légender comme photo d'hiver."
  elif slug=="gstaad" and p.get("placeLabel")=="Eggli" and "marcus g. lindner" in lower:
   p["visualQaWarning"]="À REMPLACER : portrait d'une personne en station, pas panorama du secteur Eggli."
  elif slug=="zermatt" and p.get("placeLabel")=="Gornergrat" and p.get("candidateContext","").lower().strip()=="file:matterhorn.jpg":
   p["visualQaWarning"]="Photo titrée Matterhorn : vérifier qu'elle montre réellement le Gornergrat, sinon remplacer."
  elif slug=="megeve" and p.get("placeLabel")=="Jaillet" and "tête du torraz" in lower:
   p["visualQaWarning"]="Photo du Tête du Torraz ; n'affirmer le lien exact avec Jaillet qu'après contrôle cartographique."
  if p.get("visualQaWarning"):
   p["commercialRightsCleared"]=False
   p["visuallyVerified"]=False
  p["credit"]=credit(p.get("credit",""))
 
 data["visuallyVerified"]=False
 data["approvedForCommercialPublication"]=False
 data["publicationBlockedReason"]="Missing images, duplicate originals, uncertain visual identity and/or unverified commercial photo rights."
 data["candidateUniquenessAudit"]="Image source URL identity compared, duplicate derivatives warned and hidden from planned galleries."
 file.write_text(json.dumps(data,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 total=sum(x["status"]=="candidate_needs_visual_review" for x in items)
 warns=sum(bool(x.get("visualQaWarning")) for x in items)
 approved=sum(x["status"]=="candidate_needs_visual_review" and not x.get("visualQaWarning") for x in items)
 lines=[
 "# "+name+" — revue photographique interne",
 "",
 "> **PAS ENCORE PUBLIABLE** : source authentique ne signifie pas autorisation commerciale, photo adaptée ou image unique.",
 "",
 f"**Fichiers candidats : {total}/21** ; scènes manquantes : {21-total} ; visuels sous alerte : {warns} ; candidats sans alerte connue : {approved} (toujours non approuvés).",
 "",
 "## Établissements réels — 3 images attendues par maison",
 "",
 "| Hôtel / cliché | WebP récupéré | Origine et droits | Problème à examiner |",
 "|---|---|---|---|",
 ]
 for p in data["hotels"]:
  l=p.get("license") or "Droits de réutilisation indépendants à confirmer"
  lines.append("| "+safe(p.get("property"))+" · "+safe(p.get("key"))+" | "+picture(p)+" | "+link(p.get("sourcePage"))+" ; "+safe(l)+" | "+safe(p.get("visualQaWarning") or ("Vérifier l'identité exacte et la licence" if p.get("status")=="candidate_needs_visual_review" else "FICHIER MANQUANT"))+" |")
 lines.extend(["","## Paysages et secteurs authentiques — 9 scènes attendues","","| Lieu | WebP récupéré | Origine, licence | Problème à examiner |","|---|---|---|"])
 for p in data["destinationScenes"]:
  lines.append("| "+safe(p.get("placeLabel"))+" | "+picture(p)+" | "+link(p.get("sourcePage"))+" ; "+safe(p.get("license") or "Licence à vérifier")+" | "+safe(p.get("visualQaWarning") or ("Vérifier l'identité du site et les attributions" if p.get("status")=="candidate_needs_visual_review" else "SCÈNE MANQUANTE"))+" |")
 lines.extend(["","## Checklist qualité avant routage","","- [ ] 12 photographies distinctes des quatre hôtels EXACTS, sans logos, duplications ou images d'autres maisons","- [ ] 9 scènes locales géographiquement vérifiées et pertinentes pour leur légende","- [ ] Crédits et licences (CC BY, CC BY-SA, œuvres officielles) revus pour réutilisation commerciale","- [ ] Légendes originales FR et EN conformes aux photos et à leur saison","- [ ] Intégration des pages FR/EN + FAQ + SEO Schema sur la branche, avec maintien du noindex","- [ ] Aucune disponibilité Wink fictive ni lien de paiement inventé",""])
 sheet=DOC/("travel-third-alpine-photo-review-"+slug+".md")
 sheet.write_text("\n".join(lines)+"\n",encoding="utf8")
 index.append(f"- [{name}]({sheet.name}) : **{total}/21** candidats, **{21-total} manquants**, **{warns} alertes** ; revue visuelle et commerciale en attente.")
index+=["","Tous ces guides sont des **brouillons** : le catalogue global de 88 destinations reste inchangé. Aucun build Vercel ni approbation automatique.",""]
(DOC/"travel-third-alpine-photo-review-index.md").write_text("\n".join(index),encoding="utf8")
print("Third Alpine photo source audit complete: three source-linked galleries generated; no image rights approved",flush=True)
