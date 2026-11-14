import { NextRequest, NextResponse } from 'next/server';
import { createIsolatedPortalSupabase } from '@/lib/portalSupabase';

export const runtime='nodejs';
const codes=new Set(['aqma','cliniqeo','medsestra','lovelockparis','qenerzy','bosphoras-luxury-stays']);
const emails=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function clean(v:unknown,limit:number){return typeof v==='string'?v.trim().slice(0,limit):'';}
export async function POST(request:NextRequest){
  const origin=request.headers.get('origin');
  if(origin && origin!==request.nextUrl.origin)return NextResponse.json({ok:false,error:'ORIGIN'}, {status:403});
  if(!(request.headers.get('content-type')||'').includes('application/json'))return NextResponse.json({ok:false,error:'CONTENT_TYPE'},{status:415});
  let data:any;
  try{
    const body=await request.text();
    if(body.length>6500)return NextResponse.json({ok:false,error:'PAYLOAD_TOO_LARGE'},{status:413});
    data=JSON.parse(body);
  }catch{return NextResponse.json({ok:false,error:'INVALID_JSON'},{status:400});}
  if(data?.website_confirmation)return NextResponse.json({ok:true}); // honeypot, no database insertion
  const kind=data?.kind;
  const code=clean(data?.project_code,40);
  const name=clean(data?.full_name,130);
  const email=clean(data?.email,180).toLowerCase();
  const phone=clean(data?.phone,50);
  const country=clean(data?.country,90);
  const notes=clean(data?.notes,3000);
  const source=clean(data?.source_path,300);
  const currency=data?.currency==='USD'?'USD':data?.currency==='AED'?'AED':'EUR';
  const amount=data?.requested_amount===null||data?.requested_amount===''||data?.requested_amount===undefined?null:Number(data.requested_amount);
  if(!['placement','project_access','company_finance'].includes(kind)||!name||name.length<2||!emails.test(email)||!data.consent
    ||(kind!=='company_finance'&&!codes.has(code))
    ||(amount!==null&&(!Number.isFinite(amount)||amount<1000||amount>100000000))
    ||(kind==='placement'&&amount===null)
  )return NextResponse.json({ok:false,error:'INVALID_REQUEST'},{status:400});
  const db:any=createIsolatedPortalSupabase();
  const {error}=await db.from('investment_leads').insert({
    kind,project_code:code||null,full_name:name,email,phone,country,
    requested_amount:amount,currency,notes,consent:true,source_path:source
  });
  if(error){
    if(error.message.toLowerCase().includes('too many'))return NextResponse.json({ok:false,error:'RATE_LIMIT'},{status:429});
    return NextResponse.json({ok:false,error:'SUBMISSION_FAILED'},{status:503});
  }
  return NextResponse.json({ok:true},{status:201,headers:{'Cache-Control':'no-store'}});
}
