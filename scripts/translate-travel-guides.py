#!/usr/bin/env python3
"""Initial offline translation drafts; not an editorial approval or publication."""
import argparse,json,re,os,sys
from pathlib import Path
import ctranslate2
from transformers import MarianTokenizer

parser=argparse.ArgumentParser()
parser.add_argument('--locale',choices=['ru','ar'],required=True)
parser.add_argument('--source',required=True)
parser.add_argument('--model-dir',required=True)
parser.add_argument('--output',required=True)
args=parser.parse_args()
source=json.loads(Path(args.source).read_text())
assert len(source)==88
model_id='Helsinki-NLP/opus-mt-en-'+args.locale
tokenizer=MarianTokenizer.from_pretrained(model_id)
engine=ctranslate2.Translator(args.model_dir,device='cpu',compute_type='int8',inter_threads=1,intra_threads=4)
script=re.compile('[\u0400-\u052f]' if args.locale=='ru' else '[\u0600-\u06ff]')
outpath=Path(args.output);outpath.parent.mkdir(parents=True,exist_ok=True)
result=json.loads(outpath.read_text()) if outpath.exists() else {}
cache={}
# Split long editorial passages without silently truncating any source sentence.
def segments(text):
 paragraphs=re.split(r'(\n\s*\n)',text)
 for i,p in enumerate(paragraphs):
  if not p.strip() or i%2:continue
  chunks=[];current=''
  for sentence in re.split(r'(?<=[.!?])\s+',p):
   words=sentence.split()
   while len(tokenizer.tokenize(sentence))>240:
    limit=max(1,len(words)//2)
    chunks.append(' '.join(words[:limit]));words=words[limit:];sentence=' '.join(words)
   proposed=(current+' '+sentence).strip()
   if current and len(tokenizer.tokenize(proposed))>240:
    chunks.append(current);current=sentence
   else:current=proposed
  if current:chunks.append(current)
  paragraphs[i]=chunks
 return paragraphs
def all_strings(v):
 if isinstance(v,str):
  yield v
 elif isinstance(v,list):
  for ch in v:yield from all_strings(ch)
 elif isinstance(v,dict):
  for ch in v.values():yield from all_strings(ch)
def rebuild(v,m):
 if isinstance(v,str):return m[v]
 if isinstance(v,list):return [rebuild(ch,m) for ch in v]
 if isinstance(v,dict):return {k:rebuild(ch,m) for k,ch in v.items()}
 return v
def translate(city):
 vals=list(dict.fromkeys(all_strings(city)));parts={v:segments(v) for v in vals}
 unique=list(dict.fromkeys(ch for v in vals for p in parts[v] if isinstance(p,list) for ch in p if ch not in cache))
 for step in range(0,len(unique),48):
  batch=unique[step:step+48]
  inp=[tokenizer.convert_ids_to_tokens(tokenizer.encode(s,add_special_tokens=True)) for s in batch]
  outputs=engine.translate_batch(inp,beam_size=2,max_batch_size=48,max_input_length=512,max_decoding_length=512)
  for s,o in zip(batch,outputs):
   translated=tokenizer.decode(tokenizer.convert_tokens_to_ids(o.hypotheses[0]),skip_special_tokens=True).strip()
   if not translated:raise ValueError('Empty translation')
   cache[s]=translated
 mapped={v:''.join(' '.join(cache[ch] for ch in p) if isinstance(p,list) else p for p in parts[v]) for v in vals}
 translated=rebuild(city,mapped)
 for key in ['heading','intro','editorial','hotelIntro','seoDescription']:
  if len(script.findall(translated[key]))<8:raise ValueError('Missing target-language text: '+key)
 return translated
for slug,city in source.items():
 if slug=='desaru-coast' or slug in result:continue
 result[slug]=translate(city)
 # Each completed guide is persisted atomically; no partial guide is published.
 tmp=outpath.with_suffix('.tmp')
 tmp.write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
 tmp.replace(outpath)
 print(args.locale,slug,len(result),'/87',flush=True)
assert len(result)==87
print('Draft generation complete; manual editorial review required.',flush=True)
