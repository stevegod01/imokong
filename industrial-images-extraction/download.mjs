import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const root = path.dirname(fileURLToPath(import.meta.url));
const candidates = [
  ['/refinery.jpg','Homepage refinery banner','/'],
  ['/warehouse2.jpg','Homepage warehouse banner','/'],
  ['/shipment-manager-asking-warehouse-workers.jpg','Warehouse team banner','/'],
  ['/truck with pellets.png','Truck carrying soap noodles','/'],
  ['/packing2.jpg','Homepage reliability background','/'],
  ['/warehouse.jpg','Warehouse on the partners page','/partners'],
  ['/image 3.jpg','Company and soap product showcase','/product-detail/raw/soap-making-noodles'],
  ['/Frame-1618873018@3x.png','Glycerine','/product-detail/raw/glycerine'],
  ['/paint solvent.jpg','Paint solvents','/product-detail/raw/paint-making-solvents'],
  ['/paint making solvent.jpg','Paint solvents product hero','/product-detail/raw/paint-making-solvents'],
  ['/soap noodle.png','Soap noodles','/product-detail/raw/soap-making-noodles'],
  ['/stearic acid.jpg','Stearic acid','/product-detail/raw/stearic-acid'],
  ['/brand-carex.png 1.jpg','Palm Bright 85-15','/product-detail/raw/soap-making-noodles'],
  ['/brand-carex.png 1-1.jpg','Swing 85:15 / 80:20 / 90:10','/product-detail/raw/soap-making-noodles'],
  ['/brand-carex.png 1-2.jpg','Capella 80:20','/product-detail/raw/soap-making-noodles'],
  ['/brand-carex.png 1-3.jpg','Palm Bright 90:10 - first site variant','/product-detail/raw/soap-making-noodles'],
  ['/brand-carex.png 1-4.jpg','Palm Bright 90:10 - second site variant','/product-detail/raw/soap-making-noodles'],
  ['/brand-carex.png 1-5.jpg','Palm Bright 80:20','/product-detail/raw/soap-making-noodles'],
  ['/about imoko.webp','About company image','/about'],
  ['/image 9.png','Reliability illustration','/about'],
  ['/image 10.png','Quality illustration','/about'],
  ['/image 13.png','Technical excellence illustration','/about'],
  ['/image 14.png','Partner gallery image','/partners'],
  ['/image 15.png','Partner gallery image','/partners'],
  ['/image 16.png','Partner gallery image','/partners'],
  ['/image 22.png','Global partnership image','/about'],
  ['/image 30.jpg','NIMIR partner image','/partners'],
  ['/Rectangle-34624205@2x.png','Products page showcase','/products'],
  ['/Rectangle-38@2x.jpg','Technology and distribution news image','/news/tech-workplace'],
  ['/Rectangle-381@2x.png','Supply chain news image','/news/supply-resilience'],
  ['/Rectangle-382@2x.png','Quality assurance news image','/news/quality-control'],
  ['/image 2.png','Distribution technology article image','/news/tech-workplace'],
];
await fs.mkdir(path.join(root, '_candidates'),{recursive:true});
const results=[];
for(let i=0;i<candidates.length;i+=4) {
  results.push(...await Promise.all(candidates.slice(i,i+4).map(async ([src,label,page])=>{
    const sourceUrl = new URL(src,'https://imokong.com').href;
    try {
      const response=await fetch(sourceUrl,{signal:AbortSignal.timeout(60000)});
      if(!response.ok) throw new Error(`HTTP ${response.status}`);
      const contentType=response.headers.get('content-type')??'';
      if(!contentType.startsWith('image/')) throw new Error(`Unexpected type ${contentType}`);
      const buffer=Buffer.from(await response.arrayBuffer());
      const filename=path.basename(src);
      await fs.writeFile(path.join(root,'_candidates',filename),buffer);
      return {filename,label,sourceUrl,sourcePage:new URL(page,'https://imokong.com').href,contentType,bytes:buffer.length,sha256:createHash('sha256').update(buffer).digest('hex')};
    } catch(error) {return {src,label,sourceUrl,error:error.message};}
  })));
}
await fs.writeFile(path.join(root,'_source/download-inventory.json'),JSON.stringify(results,null,2));
console.log(JSON.stringify({downloaded:results.filter(r=>!r.error).length,totalBytes:results.reduce((s,r)=>s+(r.bytes??0),0),errors:results.filter(r=>r.error)},null,2));
