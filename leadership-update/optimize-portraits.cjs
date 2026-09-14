// Lossy web delivery copies only; generated PNG masters remain unchanged.
const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('../vercel-preview/node_modules/sharp');

async function main() {
  const dir = path.resolve(__dirname, '../vercel-preview/public/images/leadership');
  const files = (await fs.readdir(dir)).filter(file => file.endsWith('.png'));
  const results = await Promise.all(files.map(async file => {
    const output = path.join(dir, file.replace(/\.png$/, '.webp'));
    await sharp(path.join(dir, file)).resize({width: 960, withoutEnlargement: true}).webp({quality: 90}).toFile(output);
    return {file: path.basename(output), bytes: (await fs.stat(output)).size};
  }));
  console.log(JSON.stringify(results, null, 2));
}

main().catch(error => { console.error(error); process.exitCode = 1; });
