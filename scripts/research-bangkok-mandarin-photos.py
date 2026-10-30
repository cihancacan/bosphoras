#!/usr/bin/env python3
"""Find actual Bangkok Mandarin Oriental property photographs, not fan/branding graphics."""
import io,json,pathlib,requests
from bs4 import BeautifulSoup
from PIL import Image,ImageDraw
S=requests.Session();S.headers.update({'User-Agent':'Bosphoras private property imagery review'})
page='https://www.mandarinoriental.com/en/bangkok/chao-phraya-river/gallery'
soup=BeautifulSoup(S.get(page,timeout=30).text,'html.parser')
raw=[]
for n in soup.select('img,source'):
 for prop in ['src','data-src','data-original','data-lazy-src','srcset','data-srcset']:
  z=n.get(prop)
  if not z:continue
  if 'srcset' in prop:z=str(z).split(',')[-1].strip().split()[0]
  if 'media.ffycdn.net/eu/mandarin-oriental-hotel-group/' not in z or '.jpg' not in z.lower():continue
  if z not in [x[0] for x in raw]:raw.append((z,n.get('alt') or n.get('title') or ''))
print('SOURCE_IMAGE_LINKS',len(raw),flush=True)
docs=[];tiles=[]
for u,alt in raw[:50]:
 try:
  r=S.get(u,timeout=22);r.raise_for_status()
  pic=Image.open(io.BytesIO(r.content)).convert('RGB')
  if pic.width<500 or pic.height<300:continue
  pic.thumbnail((340,200),Image.Resampling.LANCZOS)
  docs.append({'id':len(docs)+1,'url':u,'alt':alt,'page':page,'originalSize':[pic.width,pic.height]})
  tiles.append(pic)
 except Exception as e:print('IMG_FAIL',u,str(e)[:60])
cols=4;W,H=358,240
out=Image.new('RGB',(W*cols,H*((len(tiles)+cols-1)//cols)),'#f6f5f1');draw=ImageDraw.Draw(out)
for i,p in enumerate(tiles):
 x=(i%cols)*W+8;y=(i//cols)*H+3;out.paste(p,(x,y))
 draw.text((x,y+207),str(i+1)+' '+docs[i]['alt'][:34],fill='#19323b')
 draw.text((x,y+222),docs[i]['url'].split('/')[-1][:24],fill='#55666f')
pathlib.Path('docs/travel-bangkok-mandarin-candidates.json').write_text(json.dumps(docs,ensure_ascii=False,indent=2)+'\n')
out.save('docs/travel-bangkok-mandarin-candidates.jpg','JPEG',quality=80)
print('CANDIDATES_READY',len(docs),flush=True)
