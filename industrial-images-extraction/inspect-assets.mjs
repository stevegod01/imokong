import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const index = await fs.readFile(path.join(root, '_source/index-CZoyhH2Z.js'), 'utf8');
const assetPaths = [...new Set([...index.matchAll(/assets\/(?:About|Home|RawMaterials|ProductDetail|Products|PageHero|Sustainability|Partners)[A-Za-z0-9_-]*\.(?:js|css)/g)].map(m => m[0]))];
const results = [];
for (let i = 0; i < assetPaths.length; i += 4) {
  results.push(...await Promise.all(assetPaths.slice(i, i + 4).map(async asset => {
    const response = await fetch('https://imokong.com/' + asset, {signal: AbortSignal.timeout(30000)});
    if (!response.ok) throw new Error(`${asset}: ${response.status}`);
    const text = await response.text();
    await fs.writeFile(path.join(root, '_source', path.basename(asset)), text);
    const images = [...text.matchAll(/["'`]([^"'`]*\.(?:jpe?g|png|webp|svg|avif))["'`]/g)].map(m => ({path:m[1],context:text.slice(Math.max(0,m.index-90),m.index+m[0].length+120)}));
    const cssImages = [...text.matchAll(/url\(([^)]+\.(?:jpe?g|png|webp|svg|avif))\)/g)].map(m => m[1]);
    return {asset, images, cssImages};
  })));
}
await fs.writeFile(path.join(root, '_source/module-inventory.json'), JSON.stringify(results,null,2));
console.log(JSON.stringify(results.filter(r=>r.images.length||r.cssImages.length),null,2));
