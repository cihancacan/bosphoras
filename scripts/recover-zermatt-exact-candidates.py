#!/usr/bin/env python3
"""Exact approved-source retrieval for Zermatt missing images; all new photos remain unapproved."""
from pathlib import Path
from io import BytesIO
import hashlib,json,requests
from PIL import Image,ImageOps
D=Path('data/travel/zermattMediaCandidates.json')
O=Path('public/images/travel/zermatt-premium')
REPORT=Path('docs/travel-zermatt-exact-photo-recovery.json')
ASSETS={
 'destination/scene-3':[
  ('https://commons.wikimedia.org/wiki/Special:Redirect/file/Bahnhofstrasse_%28Zermatt%29_25.jpg?width=1600',
   'https://commons.wikimedia.org/wiki/File:Bahnhofstrasse_(Zermatt)_25.jpg',
   'Bahnhofstrasse in Zermatt · 2022 original photo by Abxbay, Creative Commons')],
 'destination/scene-6':[
  ('https://www.riffelalp.com/fileadmin/documents/riffelalp.ch/images/restaurant-bar/Al_Bosco/Al_Bosco_hiver_2.jpg',
   'https://www.riffelalp.com/de/kulinarik/ristorante-al-bosco/',
   'Riffelalp Al Bosco snowy terrace with Matterhorn and winter sun, official resort')],
 'destination/scene-7':[
  ('https://commons.wikimedia.org/wiki/Special:Redirect/file/Swiss_Alps.jpg?width=1600',
   'https://commons.wikimedia.org/wiki/File:Swiss_Alps.jpg',
   'Swiss Alps from Klein Matterhorn summit, credited Devil Dancer'),
  ('https://commons.wikimedia.org/wiki/Special:Redirect/file/View_to_Zermatt_from_Matterhorn_Glacier_Paradise_-_panoramio.jpg?width=1600',
   'https://commons.wikimedia.org/wiki/File:View_to_Zermatt_from_Matterhorn_Glacier_Paradise_-_panoramio.jpg',
   'Matterhorn Glacier Paradise alpine landscape facing Zermatt, licensed photographer qwesy qwesy')],
 'the-omnia/view-1':[
  ('https://www.yonder.fr/sites/default/files/destinations/OMNIA_Outside_Summer_q%C2%A9Bruno%20Augsburger%2C%20THE%20OMNIA.jpg',
   'https://www.yonder.fr/hotels/chambres-avec-vues/zermatt-the-omnia-reinterpete-codes-montagne',
   'THE OMNIA official sunny exterior, photo Bruno Augsburger')],
 'destination/scene-2':[
  ('https://i0.wp.com/onholidaysagain.com/wp-content/uploads/2020/06/Balade-%C3%A0-Zermatt-et-vue-sur-le-Cervin-scaled.jpg?resize=1536%2C1002&ssl=1',
   'https://onholidaysagain.com/europe/suisse/week-end-a-zermatt-que-faire/',
   'Historic timber chalets of Zermatt with Matterhorn in bright sunshine')],
 'destination/scene-3':[
  ('https://www.derbyzermatt.ch/assets/Images/64846748-E13E-44BD-8B6D-FA207A874046-v2__FocusFillWzY0MCw1MTIsIngiLDY0XQ.jpeg',
   'https://www.derbyzermatt.ch/','Winter evening on Bahnhofstrasse; requires resolution check')],
 'destination/scene-5':[
  ('https://commons.wikimedia.org/wiki/Special:Redirect/file/Panorama_vom_Gornergrat-Zermatt.jpg?width=1600',
   'https://commons.wikimedia.org/wiki/File:Panorama_vom_Gornergrat-Zermatt.jpg',
   'Named Gornergrat panorama with Monte Rosa massif'),
  ('https://upload.wikimedia.org/wikipedia/commons/c/c6/Aerial_panorama_of_the_Matterhorn_from_the_Gornergrat_170622.jpg',
   'https://commons.wikimedia.org/wiki/File:Aerial_panorama_of_the_Matterhorn_from_the_Gornergrat_170622.jpg',
   'Gornergrat aerial panorama and glacial valley')],
 'destination/scene-6':[
  ('https://commons.wikimedia.org/wiki/Special:Redirect/file/3809_-_Zermatt_-_View_from_Gornergratbahn.JPG?width=1600',
   'https://commons.wikimedia.org/wiki/File:3809_-_Zermatt_-_View_from_Gornergratbahn.JPG',
   'Alpine views along the Gornergratbahn')],
 'destination/scene-9':[
  ('https://theplanetd.com/images/5-lakes-hike-zermatt-Switzerland-Stellisee-Lake-1536x1024.jpg',
   'https://theplanetd.com/5-lakes-hike-zermatt/',
   'Matterhorn reflecting at Stellisee during golden sunrise')]
}
def main():
 data=json.loads(D.read_text(encoding='utf8'))
 rows=data['hotels']+data['destinationScenes']
 existing={u.split('?')[0] for x in rows for u in (x.get('downloadUrl'),x.get('rejectedSource')) if isinstance(u,str) and u.startswith('https://')}
 failures=[];saved=[]
 for target,candidates in ASSETS.items():
  group,key=target.split('/')
  row=next((x for x in rows if (x.get('propertyKey') or 'destination')==group and x['key']==key),None)
  if not row or row.get('visuallyVerified') or row.get('localPath'):
   continue
  for url,source,title in candidates:
   if url.split('?')[0] in existing:continue
   try:
    res=requests.get(url,timeout=24,headers={'User-Agent':'Mozilla/5.0 (compatible; BosphorasLuxuryStays/2.0; image source quality check)','Accept':'image/*,*/*'})
    res.raise_for_status()
    pic=ImageOps.exif_transpose(Image.open(BytesIO(res.content))).convert('RGB')
    width,height=pic.size
    if width<850 or height<500 or width/height<1.15:raise ValueError('Too small or wrong aspect: '+str(pic.size))
    pic.thumbnail((1700,1200),Image.Resampling.LANCZOS)
    buffer=BytesIO();pic.save(buffer,'WEBP',quality=85,method=5)
    payload=buffer.getvalue();digest=hashlib.sha256(payload).hexdigest()
    if len(payload)<24000:raise ValueError('Image too small after conversion')
    dest=O/group/(key+'.webp');dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(payload)
    row.update({'status':'candidate_needs_visual_review','visuallyVerified':False,'commercialRightsCleared':False,
      'visualQaWarning':'Downloaded exact publisher source; individual visual and rights review still required.',
      'downloadUrl':url,'sourcePage':source,'candidateContext':title,'credit':'Photograph from the named original publisher; author needs confirmation',
      'localPath':'/'+str(dest).removeprefix('public/'),'sha256':digest,'bytes':len(payload),
      'originalSize':[width,height],'outputSize':list(pic.size)})
    saved.append({'slot':target,'bytes':len(payload),'source':source,'original_size':[width,height]})
    existing.add(url.split('?')[0]);break
   except Exception as error:
    failures.append({'slot':target,'source':url,'error':str(error)[:220]})
 data['downloadedHotelCandidates']=sum(x['status']=='candidate_needs_visual_review' for x in data['hotels'])
 data['downloadedDestinationCandidates']=sum(x['status']=='candidate_needs_visual_review' for x in data['destinationScenes'])
 data['visuallyVerified']=False;data['approvedForCommercialPublication']=False
 if saved:D.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
 REPORT.write_text(json.dumps({'saved':saved,'failure_details':failures},ensure_ascii=False,indent=2)+'\n',encoding='utf8')
 print('RECOVERY_RESULT',len(saved),'images saved; remaining blocked until visual QA')
if __name__=='__main__':main()
