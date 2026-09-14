from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps
import csv, hashlib, html, json, math, shutil, zipfile

root = Path(__file__).resolve().parent
output = root / 'IMOKO-industrial-images'
output.mkdir(exist_ok=True)
verified = {item['filename']:item for item in json.loads((root/'_source/verified-images.json').read_text())}
selection = [
 ('refinery.jpg','industrial-photos','refinery.jpg','Refinery and processing plant'),
 ('warehouse2.jpg','industrial-photos','factory-floor.jpg','Factory production floor'),
 ('shipment-manager-asking-warehouse-workers.jpg','industrial-photos','warehouse-team.jpg','Warehouse team planning shipments'),
 ('truck with pellets.png','industrial-photos','truck-soap-noodles.png','Truck loaded with bagged raw materials'),
 ('packing2.jpg','industrial-photos','packing-station.jpg','Packing and fulfilment station'),
 ('image 3.jpg','industrial-photos','bulk-materials-warehouse.jpg','Bulk materials warehouse'),
 ('about imoko.webp','industrial-photos','industrial-site-team.webp','Team at an industrial processing site'),
 ('image 9.png','industrial-photos','supplier-partnership.png','Supplier partnership'),
 ('image 10.png','industrial-photos','laboratory-quality-control.png','Laboratory quality control'),
 ('image 13.png','industrial-photos','plant-technician.png','Technician with processing equipment'),
 ('image 2.png','industrial-photos','industrial-warehouse-exterior.png','Industrial warehouse exterior'),
 ('Frame-1618873018@3x.png','chemical-products','glycerine-drums.png','Glycerine drums'),
 ('paint solvent.jpg','chemical-products','paint-solvent-drums.jpg','Paint solvent drums'),
 ('soap noodle.png','chemical-products','soap-noodles.png','Soap noodles'),
 ('stearic acid.jpg','chemical-products','stearic-acid.jpg','Stearic acid containers and bags'),
 ('brand-carex.png 1.jpg','soap-packaging','capella-soap-noodles.jpg','Capella soap noodles packaging'),
 ('brand-carex.png 1-1.jpg','soap-packaging','palm-bright-green.jpg','Palm Bright green packaging'),
 ('brand-carex.png 1-2.jpg','soap-packaging','palm-bright-white.jpg','Palm Bright white packaging'),
 ('brand-carex.png 1-3.jpg','soap-packaging','soap-base-78-tfm.jpg','Soap Base 78 TFM packaging'),
 ('brand-carex.png 1-4.jpg','soap-packaging','soap-base-ultra.jpg','Soap Base Ultra packaging'),
 ('brand-carex.png 1-5.jpg','soap-packaging','zivo-soap-noodles.jpg','Zivo soap noodles packaging'),
 ('image 22.png','supply-visuals','pakistan-nigeria-supply-map.png','Pakistan to Nigeria supply map'),
 ('image 30.jpg','supply-visuals','nimir-products-and-warehouse.jpg','NIMIR products and warehouse collage'),
]
manifest=[]
for original, category, filename, description in selection:
    item=verified[original].copy()
    folder=output/category
    folder.mkdir(exist_ok=True)
    dest=folder/filename
    shutil.copyfile(root/'_candidates'/original,dest)
    assert hashlib.sha256(dest.read_bytes()).hexdigest()==item['sha256'],filename
    item.update(originalFilename=original,filename=filename,category=category,description=description,relativePath=f'{category}/{filename}',originalSiteLabel=item.pop('label'))
    manifest.append(item)
assert len({x['sha256'] for x in manifest})==len(manifest),'Duplicate image content'
(output/'manifest.json').write_text(json.dumps({'sourceSite':'https://imokong.com/','extractedOn':'2026-09-10','images':manifest},indent=2),encoding='utf-8')
columns=['filename','category','description','width','height','format','bytes','originalFilename','sourceUrl','sourcePage','originalSiteLabel','sha256']
with (output/'manifest.csv').open('w',newline='',encoding='utf-8-sig') as f:
    writer=csv.DictWriter(f,fieldnames=columns,extrasaction='ignore');writer.writeheader();writer.writerows(manifest)

groups={'industrial-photos':'Industrial and logistics photos','chemical-products':'Chemical products','soap-packaging':'Soap packaging','supply-visuals':'Supply and partner visuals'}
font=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',16)
small=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',13)
title=ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf',30)
sheet=Image.new('RGB',(1200,110+math.ceil(len(manifest)/4)*235),'#f4f3ef')
draw=ImageDraw.Draw(sheet)
draw.text((18,18),'IMOKO / INDUSTRIAL IMAGE COLLECTION',font=title,fill='#c74706')
draw.text((18,62),'23 original assets | imokong.com | 10 September 2026',font=font,fill='#555555')
for idx,item in enumerate(manifest):
    x,y=(idx%4)*300,110+(idx//4)*235
    with Image.open(output/item['relativePath']) as im:
        thumb=ImageOps.contain(im.convert('RGB'),(284,187))
        sheet.paste(thumb,(x+(300-thumb.width)//2,y+(187-thumb.height)//2))
    label=f"{idx+1:02d}. {item['description']}"
    while draw.textlength(label,font=small)>284: label=label[:-4]+'...'
    draw.text((x+8,y+194),label,font=small,fill='#222222')
    draw.text((x+8,y+212),f"{item['width']} x {item['height']} px",font=small,fill='#666666')
sheet.save(output/'preview.jpg',quality=90)

sections=[]
for key,name in groups.items():
    cards=[]
    for item in manifest:
        if item['category']!=key:continue
        esc=html.escape
        cards.append(f'''<article><a class="picture" href="{esc(item['relativePath'])}"><img src="{esc(item['relativePath'])}" alt="{esc(item['description'])}" loading="lazy"></a><div class="details"><h3>{esc(item['description'])}</h3><p>{item['width']} × {item['height']} px · {item['bytes']/1024:.0f} KB</p><a href="{esc(item['relativePath'])}" download>Download image</a> <span>·</span> <a href="{esc(item['sourceUrl'])}">Original source</a></div></article>''')
    sections.append(f'<section id="{key}"><h2>{name}</h2><div class="grid">'+''.join(cards)+'</div></section>')
gallery='''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>IMOKO — Industrial image collection</title><style>*{box-sizing:border-box}body{margin:0;background:#f5f4ef;color:#252823;font-family:Arial,sans-serif}header,main{max-width:1400px;margin:auto;padding:32px}header{border-bottom:1px solid #d6d7d0}header p{color:#62675f;line-height:1.5}h1{font-size:clamp(28px,4vw,48px);margin:10px 0}h2{font-size:25px;margin:34px 0 18px}h3{font-size:17px;margin:0 0 8px}nav{display:flex;gap:20px;flex-wrap:wrap;padding-top:12px}a{color:#b94205;text-underline-offset:4px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px}article{background:white;border:1px solid #deded7;border-radius:8px;overflow:hidden}.picture{display:flex;align-items:center;justify-content:center;height:230px;background:#efefeb;padding:10px}.picture img{max-width:100%;max-height:100%;object-fit:contain}.details{padding:18px}.details p{color:#666;font-size:14px;margin:0 0 16px}.details a,.details span{font-size:14px}footer{padding:35px 0;color:#666;line-height:1.6}@media(max-width:500px){header,main{padding:22px}}</style></head><body><header><p>IMOKO · ORIGINAL WEBSITE ASSETS</p><h1>Industrial image collection</h1><p>23 images extracted from <a href="https://imokong.com/">imokong.com</a> on 10 September 2026. Original image bytes and dimensions preserved.</p><nav>'''
gallery+=''.join(f'<a href="#{key}">{name}</a>' for key,name in groups.items())
gallery+='</nav></header><main>'+''.join(sections)+'''<footer>Use <a href="manifest.csv">manifest.csv</a> for dimensions and original source URLs. Soap packaging images are 194 × 194 pixels; use the larger photos for banners. <a href="README.md">Extraction notes</a>.</footer></main></body></html>'''
(output/'index.html').write_text(gallery,encoding='utf-8')

notes='''# IMOKO industrial image collection

Source: https://imokong.com/
Extracted: 10 September 2026

23 distinct industrial, logistics, chemical product and related supply images. The image files are byte-for-byte copies of the publicly served originals, with readable local filenames. No cropping, enhancement or background removal was applied. Preview.jpg is a separate contact sheet.

## Contents
- industrial-photos: 11 refinery, factory, warehouse, logistics and technical team images.
- chemical-products: 4 chemical/raw-material images.
- soap-packaging: 6 packaging images.
- supply-visuals: 2 supply-chain and partner visuals.
- index.html: local image gallery with downloads and source links.
- manifest.csv and manifest.json: exact source URLs, source page references, original filenames, dimensions, sizes and SHA-256 checksums.

## Image selection and source limitations
The homepage, public page modules/styles and public product data were inspected. Direct HTML requests for other routes return the homepage shell; route-specific provenance comes from the publicly served page modules and product data.

Four downloaded candidates were excluded as unrelated: a star-rating graphic and three travel/lifestyle news images.

Five referenced image paths returned HTML rather than usable images and are not included: /warehouse.jpg, /paint making solvent.jpg, /image 14.png, /image 15.png and /image 16.png. The working warehouse2.jpg and paint solvent.jpg assets are included.

The six soap-packaging originals are only 194 × 194 pixels. They have not been upscaled. Some product labels in the original site's data do not match the brand printed on the packaging; readable filenames follow the visible packaging, and the original site's labels are retained in the manifest for reference.

Image descriptions identify visible subjects, not independently verified ownership of the depicted facilities. Existing redesign pages and assets have not been modified.
'''
(output/'README.md').write_text(notes,encoding='utf-8')
zip_path=root/'IMOKO-industrial-images.zip'
with zipfile.ZipFile(zip_path,'w',zipfile.ZIP_DEFLATED,compresslevel=6) as archive:
    for file in sorted(output.rglob('*')):
        if file.is_file():archive.write(file,Path(output.name)/file.relative_to(output))
with zipfile.ZipFile(zip_path) as archive:
    assert archive.testzip() is None,'Invalid zip archive'
print(json.dumps({'images':len(manifest),'categories':{key:sum(x['category']==key for x in manifest) for key in groups},'imageBytes':sum(x['bytes'] for x in manifest),'archiveBytes':zip_path.stat().st_size,'gallery':str(output/'index.html'),'preview':str(output/'preview.jpg'),'archive':str(zip_path)},indent=2))
