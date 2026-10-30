#!/usr/bin/env python3
"""Private Krabi visual research: exact Commons Klong Muang Beach identity and licensing.
Do not alter published photo manifest. Candidate files live under docs, not public/.
"""
import io, json, pathlib, urllib.parse, requests
from PIL import Image, ImageDraw
S=requests.Session();S.headers.update({'User-Agent':'Bosphoras Luxury Stays private geography image reviewer'})
names=[
 'Beach at Koh Kwang (4463345335).jpg',
 'Beach at Koh Kwang (4463345639).jpg',
 'Beach at Koh Kwang (4464119684).jpg',
 'Beach at Koh Kwang (4464122182).jpg',
 'Beach at Koh Kwang (4464122618).jpg',
 'Beach at Koh Kwang (4464123708).jpg',
 'Beach at Koh Kwang (4464124028).jpg',
 'Klong Muang Beach SF0002.jpg',
 'Klong Muang Beach SF0003.jpg'
]
data=[];thumbs=[]
for name in names:
 try:
  p=S.get('https://commons.wikimedia.org/w/api.php',params={'action':'query','format':'json','prop':'imageinfo','iiprop':'url|extmetadata','iiurlwidth':960,'titles':'File:'+name},timeout=18);p.raise_for_status()
  pages=list(p.json()['query']['pages'].values())
  info=pages[0]['imageinfo'][0]
  url=info.get('thumburl') or info['url']
  r=S.get(url,timeout=20);r.raise_for_status()
  image=Image.open(io.BytesIO(r.content)).convert('RGB');image.thumbnail((460,300))
  meta=info.get('extmetadata',{})
  entry={'name':name,'sourcePage':'https://commons.wikimedia.org/wiki/File:'+urllib.parse.quote(name.replace(' ','_'),safe='(),-._'),'downloadUrl':url,
   'license':meta.get('LicenseShortName',{}).get('value'),'author':meta.get('Artist',{}).get('value'),'size':list(image.size)}
  data.append(entry);thumbs.append((entry,image))
  print('OK',name,len(r.content),flush=True)
 except Exception as e:print('SKIP',name,str(e)[:180],flush=True)
cols=3;w=485;h=370;rows=(len(thumbs)+cols-1)//cols
sheet=Image.new('RGB',(cols*w,rows*h),'#f5f2ec');draw=ImageDraw.Draw(sheet)
for i,(p,im) in enumerate(thumbs):
 x=(i%cols)*w+8;y=(i//cols)*h+5
 sheet.paste(im,(x,y));draw.text((x,y+309),str(i+1)+': '+p['name'][:47],fill='#162b35')
 draw.text((x,y+331),(p.get('license') or '')[:34],fill='#394750')
pathlib.Path('docs/travel-krabi-klong-muang-contact-sheet.jpg').parent.mkdir(parents=True,exist_ok=True)
sheet.save('docs/travel-krabi-klong-muang-contact-sheet.jpg','JPEG',quality=80)
pathlib.Path('docs/travel-krabi-klong-muang-research.json').write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
print('CANDIDATE_FRAMES',len(thumbs))
