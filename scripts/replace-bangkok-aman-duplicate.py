#!/usr/bin/env python3
"""Replace ONE duplicate Aman Nai Lert exterior crop with a true hotel pool photo.
Never touch any other hotel or destination images, and never auto-clear publisher rights.
"""
import io,json,hashlib,re,pathlib,requests,urllib.parse,html
from bs4 import BeautifulSoup
from PIL import Image,ImageOps
M=pathlib.Path('data/travel/bangkokMediaCandidates.json')
m=json.loads(M.read_text())
p=next(x for x in m['hotels'] if x['propertyKey']=='aman-nai-lert' and x['key']=='view-2')
assert p['commercialRightsCleared'] is False
source='https://www.aman.com/hotels/aman-nai-lert-bangkok/gallery'
r=requests.get(source,timeout=35,headers={'User-Agent':'Bosphoras media QA source verification'});r.raise_for_status()
soup=BeautifulSoup(r.text,'html.parser');items=[];seen=set()
for node in soup.find_all(['img','source']):
 for a in ('src','data-src','data-lazy-src','srcset','data-srcset'):
  z=node.get(a)
  if not z:continue
  if 'srcset' in a:z=str(z).split(',')[-1].strip().split()[0]
  u=urllib.parse.urljoin(source,html.unescape(str(z)).replace('\\/','/'))
  if 'aman.com/sites/default/files' not in u or not re.search(r'\.(?:jpg|jpeg|png|webp)(?:[?#]|$)',u,re.I):continue
  if u in seen:continue
  seen.add(u)
  stem=re.search(r'/public/([^?]+)',u)
  canonical=stem.group(1) if stem else u
  if any(word in canonical.lower() for word in ('pool','spa','wellness')) and 'exterior_03524' not in canonical.lower():
   items.append((u,canonical,node.get('alt') or ''))
print('POOL_CANDIDATES',len(items),[(v[:90],a[:70]) for v,a,_ in items[:8]],flush=True)
if not items:raise ValueError('no official swimming pool/spa image')
existing={x['pixelFingerprint'] for x in m['hotels']+m['destinationScenes']}
for u,canonical,alt in items:
 try:
  rr=requests.get(u,timeout=30,headers={'User-Agent':'Bosphoras private editorial QA'});rr.raise_for_status()
  im=ImageOps.exif_transpose(Image.open(io.BytesIO(rr.content))).convert('RGB')
  if im.width<790 or im.height<480:continue
  orig=list(im.size);im.thumbnail((1600,1200),Image.Resampling.LANCZOS)
  fingerprint=hashlib.sha256(im.resize((48,48),Image.Resampling.LANCZOS).tobytes()).hexdigest()
  if fingerprint in existing:continue
  buf=io.BytesIO();im.save(buf,'WEBP',quality=84,method=5)
  data=buf.getvalue()
  if len(data)<17000:continue
  fn=pathlib.Path('public'+p['localPath']);fn.write_bytes(data)
  p.update({'sourcePage':source,'downloadUrl':u,'credit':'Aman Nai Lert Bangkok official publisher, photographer not separately identified',
    'license':'Official property publisher, independent commercial republication licence not established.',
    'licenseUrl':source,'originalAlt':alt or canonical,
    'originalSize':orig,'outputSize':list(im.size),'bytes':len(data),
    'sha256':hashlib.sha256(data).hexdigest(),'pixelFingerprint':fingerprint,
    'frCaption':'Aman Nai Lert Bangkok · espace piscine ou bien-être réellement photographié',
    'enCaption':'Aman Nai Lert Bangkok · authentic property pool or wellness space',
    'visuallyVerified':False,'status':'source_identified_pending_individual_visual_review'})
  M.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
  print('AMAN_POOL_REPLACED',canonical,flush=True)
  break
 except Exception as e:print('POOL_SKIP',str(e)[:120],flush=True)
else:raise ValueError('no valid unique pool/spa photo')
