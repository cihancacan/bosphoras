import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { randomUUID } from 'node:crypto';
import { careerAcknowledgements, careerAreas, careerLanguageNames, type CareerLocale } from '@/lib/careers/copy';

export const runtime='nodejs';
export const dynamic='force-dynamic';

const smtp = require('nodemailer');
const maxCvBytes=2*1024*1024;
const maxRequestBytes=3*1024*1024;
const clean=(v:FormDataEntryValue|null,max:number)=>typeof v==='string'?v.trim().slice(0,max+1):'';
const escapeHtml=(v:string)=>v.replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch] || ch));
const safeHeader=(value:string)=>value.replace(/[\r\n]/g,' ').trim();
const readEnv=(...keys:string[])=>keys.map(k=>(process.env[k]||'').trim()).find(Boolean)||'';

type UploadedFile = { name:string; size:number; arrayBuffer:()=>Promise<ArrayBuffer> };
function isUploadedFile(value:unknown):value is UploadedFile {
  if(!value || typeof value!=='object')return false;
  const file=value as Partial<UploadedFile>;
  return typeof file.name==='string' && file.name.length>0 && typeof file.size==='number'
    && typeof file.arrayBuffer==='function';
}

function emailTransport() {
  const user=readEnv('SMTP_USER','OVH_SMTP_USER','EMAIL_USER');
  const pass=readEnv('SMTP_PASS','SMTP_PASSWORD','OVH_SMTP_PASS','EMAIL_PASS','EMAIL_PASSWORD');
  if(!user||!pass)return null;
  const host=readEnv('SMTP_HOST','OVH_SMTP_HOST')||'ssl0.ovh.net';
  const port=Number(readEnv('SMTP_PORT','OVH_SMTP_PORT')||'465');
  if(!Number.isInteger(port)||port<1||port>65535)return null;
  const secure=(readEnv('SMTP_SECURE','OVH_SMTP_SECURE')||'true')!=='false';
  return {
    transport:smtp.createTransport({
      host,port,secure,auth:{user,pass},tls:{servername:host},
      connectionTimeout:12000,greetingTimeout:12000,socketTimeout:12000,
    }),
    from:safeHeader(readEnv('MAIL_FROM','EMAIL_FROM')||'Bosphoras <'+user+'>'),
    to:safeHeader(readEnv('RECRUITMENT_TO','MAIL_TO','EMAIL_TO')||'contact@bosphoras.com'),
  };
}

export async function POST(request:NextRequest) {
  const origin=request.headers.get('origin');
  if(origin && origin!==new URL(request.url).origin)return NextResponse.json({ok:false,error:'origin'},{status:403});
  const length=Number(request.headers.get('content-length')||0);
  if(length>maxRequestBytes)return NextResponse.json({ok:false,error:'size'},{status:413});

  try {
    const data=await request.formData();
    if(clean(data.get('website'),200))return NextResponse.json({ok:false,recorded:false,error:'validation'},{status:400});
    const full_name=clean(data.get('full_name'),140);
    const email=clean(data.get('email'),254).toLowerCase();
    const phone=clean(data.get('phone'),50);
    const localeCandidate=clean(data.get('locale'),5);
    const locale:CareerLocale=localeCandidate in careerLanguageNames?localeCandidate as CareerLocale:'fr';
    const spoken_languages=clean(data.get('spoken_languages'),180);
    const role_area=clean(data.get('role_area'),40);
    const experience_summary=clean(data.get('experience_summary'),2000);
    const linkedin_url=clean(data.get('linkedin_url'),400);
    const consent=data.get('consent')==='yes';
    if(full_name.length<2||full_name.length>140
      || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||email.length>254
      || phone.length>50||spoken_languages.length<2||spoken_languages.length>180
      || !careerAreas.includes(role_area as typeof careerAreas[number])
      || experience_summary.length<30||experience_summary.length>2000
      || linkedin_url.length>400|| (linkedin_url && !/^https:\/\/[^\s]+$/i.test(linkedin_url))
      || !consent)
      return NextResponse.json({ok:false,error:'validation'},{status:400});

    const fileValue:unknown=data.get('cv');
    const file:UploadedFile|null=isUploadedFile(fileValue) && fileValue.size>0 ? fileValue : null;
    let cvBuffer:Buffer|null=null;
    let cvName:string|null=null;
    let cvType:string|null=null;
    if(file){
      if(file.size>maxCvBytes)return NextResponse.json({ok:false,error:'file_size'},{status:413});
      const filename=file.name.normalize('NFKC').replace(/[^a-zA-Z0-9._ -]/g,'_').slice(0,140);
      const lower=filename.toLowerCase();
      const isPdf=lower.endsWith('.pdf'),isDocx=lower.endsWith('.docx');
      if(!isPdf&&!isDocx)return NextResponse.json({ok:false,error:'file_type'},{status:415});
      cvBuffer=Buffer.from(await file.arrayBuffer());
      const signature=isPdf?cvBuffer.subarray(0,5).toString('ascii')==='%PDF-'
        : cvBuffer.subarray(0,4).toString('binary')==='PK\x03\x04';
      if(!signature)return NextResponse.json({ok:false,error:'file_type'},{status:415});
      cvName=filename;cvType=isPdf?'application/pdf':'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    }

    const supabaseUrl=process.env.SUPABASE_URL||process.env.NEXT_PUBLIC_SUPABASE_URL||'https://udbzytlmcnljlegmolcx.supabase.co';
    const anonKey=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||'sb_publishable_yQPc71ry-F3aqBLhj6OPig_cFs_u-Pa';
    const client=createClient(supabaseUrl,anonKey,{auth:{persistSession:false,autoRefreshToken:false}});
    const applicationId=randomUUID();
    const {error}=await client.from('recruitment_applications').insert({
      id:applicationId,full_name,email,phone:phone||null,locale,spoken_languages,role_area,
      experience_summary,linkedin_url:linkedin_url||null,cv_filename:cvName,cv_attached:Boolean(cvBuffer),consent:true,
    });
    if(error){
      console.error('[careers] unable to record application',error.code);
      return NextResponse.json({ok:false,error:'storage'},{status:503});
    }

    let notificationSent=false,confirmationSent=false;
    try {
      const mail=emailTransport();
      if(mail) {
        const internalText=[
          'NOUVELLE CANDIDATURE — BOSPHORAS',
          'Référence : '+applicationId,
          'Nom : '+full_name,
          'E-mail : '+email,
          'Téléphone : '+(phone||'—'),
          'Langue de réponse : '+locale,
          'Langues professionnelles : '+spoken_languages,
          'Service : '+role_area,
          'Profil : '+(linkedin_url||'—'),
          'CV : '+(cvName||'Non joint'),
          '',
          'Expérience :',experience_summary,'',
          'Dossier également enregistré dans le CRM Bosphoras.',
        ].join('\n');
        const ack=careerAcknowledgements[locale];
        const bodyHtml=escapeHtml(ack.body).replace(/\n/g,'<br>');
        const clientHtml='<html dir="'+(locale==='ar'?'rtl':'ltr')+'"><body style="margin:0;padding:24px;background:#f7f7f4;font-family:Arial,sans-serif;color:#1c303a"><main style="max-width:620px;margin:auto;padding:32px;border:1px solid #d9dfdc;background:white"><p style="font-size:19px;letter-spacing:.16em;color:#142e3b">BOSPHORAS</p><div style="height:1px;background:#d3dcd9;margin:24px 0"></div><p style="font-size:15px;line-height:1.9">'+bodyHtml+'</p><p style="margin-top:32px;font-size:12px;color:#697a80">bosphoras.com · Galataport, Istanbul</p></main></body></html>';
        const jobs=[
          mail.transport.sendMail({
            from:mail.from,to:mail.to,replyTo:safeHeader(email),
            subject:safeHeader('Candidature Bosphoras — '+full_name+' — '+role_area),
            text:internalText,html:'<pre style="font-family:Arial,sans-serif;white-space:pre-wrap;line-height:1.6">'+escapeHtml(internalText)+'</pre>',
            attachments:cvBuffer&&cvName&&cvType?[{filename:cvName,content:cvBuffer,contentType:cvType}]:[],
          }),
          mail.transport.sendMail({
            from:mail.from,to:safeHeader(email),replyTo:mail.to,
            subject:safeHeader(ack.subject),text:ack.body,html:clientHtml,
          }),
        ];
        const outcomes=await Promise.allSettled(jobs);
        notificationSent=outcomes[0].status==='fulfilled' && (outcomes[0].value.accepted?.length ?? 0)>0;
        confirmationSent=outcomes[1].status==='fulfilled' && (outcomes[1].value.accepted?.length ?? 0)>0;
        if(!notificationSent)console.error('[careers] internal email not delivered');
        if(!confirmationSent)console.error('[careers] acknowledgment not delivered');
        if(typeof mail.transport.close==='function')mail.transport.close();
      }else{
        console.error('[careers] SMTP environment not configured; application securely stored in CRM');
      }
    }catch{
      console.error('[careers] email notifications not confirmed; application remains recorded');
    }
    return NextResponse.json({ok:true,recorded:true,applicationId,notificationSent,confirmationSent},{headers:{'Cache-Control':'no-store'}});
  }catch(error){
    console.error('[careers] application processing failed',error instanceof Error?error.name:'unknown');
    return NextResponse.json({ok:false,error:'server'},{status:500});
  }
}
