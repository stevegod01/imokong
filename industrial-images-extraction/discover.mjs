import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1'));
const base = 'https://imokong.com';
const routes = ['/', '/about', '/products', '/partners', '/sustainability', '/site-map', '/product-detail/raw/soap-making-noodles', '/product-detail/raw/paint-making-solvents', '/product-detail/raw/glycerine', '/product-detail/raw/stearic-acid'];
const decode = value => value.replaceAll('&quot;', '"').replaceAll('&amp;', '&').replaceAll('&#39;', "'");
const findings = [];
for (let start = 0; start < routes.length; start += 4) {
  const batch = await Promise.all(routes.slice(start, start + 4).map(async route => {
    const response = await fetch(base + route, {signal: AbortSignal.timeout(30000)});
    if (!response.ok) throw new Error(`${route}: ${response.status}`);
    const html = await response.text();
    await fs.writeFile(path.join(root, '_source', (route === '/' ? 'home' : route.slice(1).replaceAll('/', '_')) + '.html'), html);
    const main = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? html;
    const images = [...main.matchAll(/<img\b[^>]*>/gi)].map(([tag]) => ({src: decode(tag.match(/\bsrc="([^"]+)"/)?.[1] ?? ''), alt: decode(tag.match(/\balt="([^"]*)"/)?.[1] ?? '')}));
    const backgrounds = [...main.matchAll(/url\(([^)]+)\)/g)].map(m => decode(m[1]).replace(/^["']|["']$/g, ''));
    const assets = [...new Set([...html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+\.(?:js|css))"/g)].map(m => m[1]))];
    const links = route === '/site-map' ? [...new Set([...main.matchAll(/href="(\/[^"]*)"/g)].map(m => m[1]))] : undefined;
    return {route, images, backgrounds, assets, links};
  }));
  findings.push(...batch);
}
await fs.writeFile(path.join(root, '_source', 'page-inventory.json'), JSON.stringify(findings, null, 2));
console.log(JSON.stringify(findings, null, 2));
