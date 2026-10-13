/**
 * Temporary sanitized staging connectivity probe for one Vercel Preview build.
 * Does not log OAuth credentials, tokens, account IDs, entity names or guest data.
 * Executes only in Vercel Preview for the dedicated Travel feature branch.
 * Any error is surfaced as a stage + numeric code; never breaks a web deployment.
 */
const path = require('node:path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const tls = require('node:tls');

function safeLog(event) { console.log('[wink-safe-preview-smoke] ' + JSON.stringify(event)); }
const requiredBranch='feature/luxury-travel-seo-destinations-20261012';
if(process.env.VERCEL_ENV !== 'preview' || process.env.VERCEL_GIT_COMMIT_REF !== requiredBranch) {
  safeLog({status:'skipped',reason:'not-the-authorized-travel-preview'});
  process.exit(0);
}
const now = new Date();
const itineraryDate=new Date(now.getTime()+30*24*60*60*1000).toISOString().slice(0,10);
let stage='credentials';
function unary(client, names, request, metadata) {
  const fn=names.find(name=>typeof client[name] === 'function');
  if(!fn)throw new Error('missing-rpc-method');
  return new Promise((resolve,reject)=>{
    client[fn](request,metadata,{deadline:Date.now()+33000},(err,result)=>err?reject(err):resolve(result));
  });
}
async function check(){
 const id=process.env.WINK_CLIENT_ID_V3?.trim();
 const secret=process.env.WINK_CLIENT_SECRET_V3?.trim();
 if(!id||!secret){safeLog({status:'failed',stage,reason:'credentials-not-set'});return;}
 stage='oauth-token';
 const res=await fetch('https://staging-iam.wink.travel/oauth2/token',{
   method:'POST',headers:{'content-type':'application/x-www-form-urlencoded'},
   body:new URLSearchParams({grant_type:'client_credentials',client_id:id,client_secret:secret,scope:'inventory.read'}),
   signal:AbortSignal.timeout(16000)});
 if(!res.ok){safeLog({status:'failed',stage,httpStatus:res.status});return;}
 const token=(await res.json()).access_token;
 if(!token){safeLog({status:'failed',stage,reason:'no-token-returned'});return;}
 safeLog({status:'passed',stage});
 stage='tls-h2-connectivity';
 const tlsResult=await new Promise(resolve=>{
   let finished=false;
   const socket=tls.connect({
      host:'staging-partner.wink.travel',port:443,servername:'staging-partner.wink.travel',
      ALPNProtocols:['h2','http/1.1'],timeout:11000,rejectUnauthorized:true
   });
   const finish=(value)=>{if(finished)return;finished=true;socket.destroy();resolve(value)};
   socket.once('secureConnect',()=>finish({status:'passed',alpn:socket.alpnProtocol||'none',authorized:socket.authorized}));
   socket.once('error',()=>finish({status:'failed',reason:'tls-connect-error'}));
   socket.once('timeout',()=>finish({status:'failed',reason:'tls-connect-timeout'}));
 });
 safeLog({stage,...tlsResult});
 if(tlsResult.status!=='passed')return;
 const protoRoot=path.join(process.cwd(),'lib','wink-proto');
 stage='proto-schema';
 const defs=protoLoader.loadSync([
   path.join(protoRoot,'wink','partner','v1','partner_account.proto'),
   path.join(protoRoot,'wink','partner','v1','partner_search.proto')
 ],{includeDirs:[protoRoot],keepCase:false,longs:String,enums:String,defaults:true,oneofs:true});
 const p=grpc.loadPackageDefinition(defs).wink.partner.v1;
 const headers=new grpc.Metadata();headers.set('authorization','Bearer '+token);
 stage='list-accounts';
 const accountsClient=new p.Accounts('staging-partner.wink.travel:443',grpc.credentials.createSsl());
 let accountsResponse;
 stage='grpc-channel-ready';
 let channelReady=true;
 try{
   await new Promise((resolve,reject)=>accountsClient.waitForReady(Date.now()+14500,err=>err?reject(err):resolve()));
   safeLog({status:'passed',stage});
 }catch(err){
   channelReady=false;
   safeLog({status:'failed',stage,reason:'grpc-not-ready'});
 }
 if(!channelReady){accountsClient.close();return;}
 stage='list-accounts';
 try{accountsResponse=await unary(accountsClient,['listAccounts','ListAccounts'],{},headers);}
 finally{accountsClient.close();}
 const accounts=Array.isArray(accountsResponse.accounts)?accountsResponse.accounts:[];
 const bosphoras=accounts.find(a=>/bosphoras luxury stays/i.test(String(a.name||'')))||accounts[0];
 if(!bosphoras?.accountId){safeLog({status:'failed',stage,reason:'no-managing-account',returnedAccounts:accounts.length});return;}
 safeLog({status:'passed',stage,returnedAccounts:accounts.length,bosphorasNamedMatch:accounts.some(a=>/bosphoras luxury stays/i.test(String(a.name||'')))});
 stage='search-by-city';
 const meta=new grpc.Metadata();meta.set('authorization','Bearer '+token);meta.set('managing-entity-id',String(bosphoras.accountId));
 const searchClient=new p.Search('staging-partner.wink.travel:443',grpc.credentials.createSsl());
 let response;
 try{response=await unary(searchClient,['searchByCity','SearchByCity'],{
   geoNameId:'745044',
   userSession:{itinerary:{startDate:itineraryDate,nights:2,room:{adults:2,quantity:1}},currencyCode:'EUR',languageCode:'en'},
   page:0,size:1,imageFormat:'image/webp'
 },meta);}
 finally{searchClient.close();}
 const page=response.page||response;
 const matches=Array.isArray(page.content)?page.content:[];
 safeLog({status:'passed',stage,city:'Istanbul',returnedProperties:matches.length,queryWasExecuted:true});
}
check().catch(err=>{
 const grpcCode=typeof err?.code==='number'?err.code:undefined;
 const httpStatus=typeof err?.status==='number'?err.status:undefined;
 safeLog({status:'failed',stage,
   ...(grpcCode===undefined?{}:{grpcCode}),
   ...(httpStatus===undefined?{}:{httpStatus}),
   failureType:grpcCode!==undefined?'grpc-error':(err?.name==='TimeoutError'?'timeout':'connectivity-or-config')});
 process.exitCode=0;
});
