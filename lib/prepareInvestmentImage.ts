// Browser-side image preparation. Preserve valid small images; convert other decodable
// images or oversized photos to a supported format. No external service or network.
const maxSize=10*1024*1024;
function sniff(data:Uint8Array):string{
 if(data[0]===255&&data[1]===216&&data[2]===255)return 'image/jpeg';
 if(data[0]===137&&data[1]===80&&data[2]===78&&data[3]===71&&data[4]===13&&data[5]===10&&data[6]===26&&data[7]===10)return 'image/png';
 if(String.fromCharCode(...data.slice(0,4))==='RIFF'&&String.fromCharCode(...data.slice(8,12))==='WEBP')return 'image/webp';
 return '';
}
export async function prepareInvestmentImage(file:File):Promise<File>{
 if(!file.size)throw new Error('EMPTY');
 if(file.size>30*1024*1024)throw new Error('TOO_LARGE');
 const mime=sniff(new Uint8Array(await file.slice(0,16).arrayBuffer()));
 if(mime&&file.size<=maxSize)return file.type===mime?file:new File([file],file.name,{type:mime});
 // Do not decode SVG or arbitrary documents. Raster images only, including AVIF/HEIC when the browser supports them.
 if(!mime&&!/\.(jpe?g|png|webp|avif|heic|heif|gif|bmp)$/i.test(file.name)&&!['image/avif','image/heic','image/heif','image/gif','image/bmp','image/jpeg','image/png','image/webp'].includes(file.type))throw new Error('FORMAT');
 const bitmap=await createImageBitmap(file).catch(()=>{throw new Error('DECODE');});
 try{
  if(!bitmap.width||!bitmap.height||bitmap.width*bitmap.height>80000000)throw new Error('TOO_LARGE');
  const scale=Math.min(1,2400/Math.max(bitmap.width,bitmap.height));
  const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(bitmap.width*scale));canvas.height=Math.max(1,Math.round(bitmap.height*scale));
  const ctx=canvas.getContext('2d');if(!ctx)throw new Error('DECODE');
  ctx.drawImage(bitmap,0,0,canvas.width,canvas.height);
  const blob=await new Promise<Blob|null>(resolve=>canvas.toBlob(resolve,'image/webp',0.86));
  if(!blob||blob.size>maxSize||!blob.size||!['image/webp','image/png','image/jpeg'].includes(blob.type))throw new Error('TOO_LARGE');
  return new File([blob],file.name.replace(/\.[^.]+$/,'')+'.'+(blob.type==='image/png'?'png':blob.type==='image/jpeg'?'jpg':'webp'),{type:blob.type});
 }finally{bitmap.close();}
}
export function investmentImageError(e:unknown):string{
 const message=typeof e==='object'&&e&&'message' in e?String(e.message):String(e);
 switch(message){case 'EMPTY':return 'Fichier vide.';case 'TOO_LARGE':return 'Image trop volumineuse (30 Mo maximum avant optimisation, 10 Mo après).';case 'FORMAT':return 'Format non pris en charge. Utilisez JPG, PNG ou WebP.';case 'DECODE':return 'Ce navigateur ne peut pas lire cette image. Exportez-la en JPG ou PNG (notamment les photos HEIC).';default:return message;}
}
