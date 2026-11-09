const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const read=p=>fs.readFileSync(path.join(__dirname,'..',p),'utf8');

test('careers page and language coverage',()=>{
  const copy=read('lib/careers/copy.ts');
  const page=read('components/careers/CareersContent.tsx');
  for(const locale of ['fr','en','ru','ar','tr','de','es','it','pt','zh']){
    assert(copy.includes(locale+':{subject:') || copy.includes(locale+':{subject:'),'Acknowledgment for '+locale);
    assert(copy.includes(locale+':['),'Page translation for '+locale);
  }
  assert(page.includes('careerLanguages.map'));
  assert(page.includes("fetch('/api/careers/apply'"));
  assert(page.includes('accept=".pdf,.docx'));
  assert(page.includes('name="consent"'));
  assert(!page.includes('<iframe'));
});
test('CRM is write-only to public applicants',()=>{
  const sql=read('supabase/migrations/20261109190000_recruitment_applications.sql');
  assert(sql.includes('enable row level security'));
  assert(sql.includes('grant insert(id,full_name,email'));
  assert(!sql.includes('grant select on public.recruitment_applications to anon'));
  assert(sql.includes('to authenticated'));
  assert(sql.includes('recruitment_private.send_application_to_crm'));
  assert(sql.includes("array['recrutement']"));
});
test('emails and CV are private, language-specific, and do not include API secrets in the browser',()=>{
  const route=read('app/api/careers/apply/route.ts');
  assert(route.includes("from('recruitment_applications').insert"));
  assert(route.includes('cvBuffer'));
  assert(route.includes('maxCvBytes=2*1024*1024'));
  assert(route.includes('careerAcknowledgements[locale]'));
  assert(route.includes("readEnv('RECRUITMENT_TO','MAIL_TO'"));
  assert(route.includes('Promise.allSettled(jobs)'));
  assert(!read('components/careers/CareersContent.tsx').includes('SMTP_PASS'));
});
test('careers accessible from Bosphoras headers and both site footers',()=>{
  for(const name of ['components/Header.tsx','components/Footer.tsx','components/travel/TravelPages.tsx']){
    assert(read(name).includes('/carrieres'),name);
  }
});
