"""Structural review of machine drafts. Passing is not editorial approval."""
import json,sys,re
from pathlib import Path
src=json.loads(Path(sys.argv[1]).read_text())
folder=Path(sys.argv[2])
assert len(src)==88
def shape(a,b,path=''):
 if isinstance(a,str):
  if not isinstance(b,str) or (a.strip() and not b.strip()):return [path+' missing text']
  return []
 if isinstance(a,list):
  if not isinstance(b,list) or len(a)!=len(b):return [path+' list mismatch']
  return [x for i,(u,v) in enumerate(zip(a,b)) for x in shape(u,v,path+'/'+str(i))]
 if isinstance(a,dict):
  if not isinstance(b,dict) or set(a)!=set(b):return [path+' field mismatch']
  return [x for k in a for x in shape(a[k],b[k],path+'/'+k)]
 return [] if a==b else [path+' value mismatch']
report={}
for loc in ('de','tr','es','it','pt','zh'):
 p=folder/(loc+'-drafts.json')
 d=json.loads(p.read_text())
 errors={}
 for slug,guide in d.items():
  if slug not in src:errors[slug]=['unknown destination'];continue
  issues=shape(src[slug],guide)
  if not issues:
   for field in ('heading','intro','editorial','hotelIntro','seoDescription'):
    if guide[field].strip()==src[slug][field].strip():issues.append(field+' unchanged')
  if issues:errors[slug]=issues
 report[loc]={'drafts':len(d),'missing':sorted(set(src)-set(d)),'structuralIssues':errors,'structurallyReady':len(d)-len(errors),'editoriallyApproved':0}
(folder/'review-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({l:{'drafts':v['drafts'],'missing':v['missing'],'issues':len(v['structuralIssues'])} for l,v in report.items()},ensure_ascii=False))
