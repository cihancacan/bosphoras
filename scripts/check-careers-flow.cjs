const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const ts=require('typescript');

function load(file,requireFn,env={}) {
  const code=ts.transpileModule(fs.readFileSync(path.join(__dirname,'..',file),'utf8'),{
    compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020},
  }).outputText;
  const module={exports:{}};
  vm.runInNewContext(code,{module,exports:module.exports,require:requireFn,process:{env},Buffer,console:{error(){}},URL},{filename:file});
  return module.exports;
}
const copy=load('lib/careers/copy.ts',require);
function setup({storageError=false,smtp=false,outcomes=[true,true],accepted=true,syncMailError=false}={}) {
  const records=[],emails=[];
  const env=smtp?{SMTP_USER:'qa@example.invalid',SMTP_PASS:'test-only'}:{};
  const route=load('app/api/careers/apply/route.ts',name=>{
    if(name==='next/server')return {NextResponse:{json:(body,options={})=>({body,status:options.status||200})}};
    if(name==='@/lib/careers/copy')return copy;
    if(name==='@supabase/supabase-js')return {createClient:()=>({from:()=>({insert:async data=>{records.push(data);return {error:storageError?{code:'test'}:null};}})})};
    if(name==='nodemailer')return {createTransport:()=>{if(syncMailError)throw Error('SMTP setup failed');return {sendMail:async mail=>{const i=emails.push(mail)-1;if(!outcomes[i])throw Error('test');return {accepted:accepted?[mail.to]:[]};},close(){}};}};
    return require(name);
  },env);
  async function submit(overrides={}) {
    const fields={full_name:'QA Applicant',email:'careers-qa@example.invalid',locale:'ar',spoken_languages:'Arabic, Russian',role_area:'travel-hospitality',experience_summary:'Experienced in hotel reservations and guest support.',consent:'yes',...overrides};
    const data=new FormData();for(const [key,value] of Object.entries(fields))data.set(key,value);
    return route.POST({url:'https://www.bosphoras.com/api/careers/apply',headers:new Headers({origin:'https://www.bosphoras.com'}),formData:async()=>data});
  }
  return {submit,records,emails};
}
test('all ten languages have translated application labels, confirmations and travel copy',()=>{
  for(const locale of copy.careerLanguages){
    const text=copy.careerApplicationCopy(locale);
    for(const value of Object.values(text))assert.equal(typeof value,'string');
    assert(Object.values(text).every(value=>value.length>0));
    const terms={fr:['russe','arabe'],en:['Russian','Arabic'],ru:['русский','арабский'],ar:['الروسية','العربية'],tr:['Rusça','Arapça'],de:['Russisch','Arabisch'],es:['ruso','árabe'],it:['russo','arabo'],pt:['russo','árabe'],zh:['俄语','阿拉伯语']};
    for(const term of terms[locale])assert(copy.careerCopy(locale).profileText.includes(term));
  }
  assert(copy.careerAreas.includes('travel-hospitality'));
});
test('validation and honeypot never confirm a recorded application',async()=>{
  const app=setup();
  for(const fields of [{experience_summary:'short'},{consent:''},{website:'bot.example'}]){
    const result=await app.submit(fields);assert.equal(result.status,400);assert.equal(result.body.ok,false);
  }
  assert.equal(app.records.length,0);
});
test('storage failure never sends emails or reports success',async()=>{
  const app=setup({storageError:true,smtp:true});const result=await app.submit();
  assert.equal(result.status,503);assert.equal(result.body.ok,false);assert.equal(app.emails.length,0);
});
test('saved application is successful with an explicit warning state when SMTP is absent',async()=>{
  const app=setup();const result=await app.submit();
  assert.equal(result.body.recorded,true);assert.equal(result.body.notificationSent,false);assert.equal(result.body.confirmationSent,false);
  assert.equal(result.body.applicationId,app.records[0].id);
  assert.equal(app.records[0].locale,'ar');assert.equal(app.records[0].role_area,'travel-hospitality');
});
test('confirmed SMTP acceptance preserves the applicant language',async()=>{
  const app=setup({smtp:true});const result=await app.submit({locale:'ru'});
  assert.equal(result.body.recorded,true);assert.equal(result.body.notificationSent,true);assert.equal(result.body.confirmationSent,true);
  assert.equal(app.emails[1].subject,copy.careerAcknowledgements.ru.subject);
});
test('partial email failure keeps the stored application and separate notification flags',async()=>{
  for(const outcomes of [[true,false],[false,true]]){
    const app=setup({smtp:true,outcomes});const result=await app.submit();
    assert.equal(result.body.recorded,true);assert.equal(result.body.notificationSent,outcomes[0]);assert.equal(result.body.confirmationSent,outcomes[1]);
  }
});
test('a resolved mail job without an accepted recipient is not reported as confirmed',async()=>{
  const app=setup({smtp:true,accepted:false});const result=await app.submit();
  assert.equal(result.body.recorded,true);assert.equal(result.body.notificationSent,false);assert.equal(result.body.confirmationSent,false);
});

test('an unexpected SMTP setup failure after storage still confirms the recorded application',async()=>{
  const app=setup({smtp:true,syncMailError:true});const result=await app.submit();
  assert.equal(result.status,200);assert.equal(result.body.recorded,true);assert.equal(result.body.notificationSent,false);assert.equal(result.body.confirmationSent,false);
});
