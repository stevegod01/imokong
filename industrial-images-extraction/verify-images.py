from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps
import json, math

root = Path(__file__).resolve().parent
items = json.loads((root / '_source/download-inventory.json').read_text())
valid, invalid = [], []
for item in items:
    if 'error' in item:
        invalid.append(item)
        continue
    try:
        with Image.open(root / '_candidates' / item['filename']) as im:
            im.load()
            item.update(width=im.width, height=im.height, format=im.format)
        valid.append(item)
    except Exception as error:
        item['error'] = str(error)
        invalid.append(item)

(root / '_source/verified-images.json').write_text(json.dumps(valid, indent=2), encoding='utf-8')
(root / '_source/unavailable-images.json').write_text(json.dumps(invalid, indent=2), encoding='utf-8')
font = ImageFont.truetype('C:/Windows/Fonts/arial.ttf', 15)
sheet = Image.new('RGB', (1200, math.ceil(len(valid) / 4) * 235), '#f0f0ec')
draw = ImageDraw.Draw(sheet)
for idx, item in enumerate(valid):
    x, y = (idx % 4) * 300, (idx // 4) * 235
    with Image.open(root / '_candidates' / item['filename']) as im:
        thumb = ImageOps.contain(im.convert('RGB'), (286, 195))
        sheet.paste(thumb, (x + (300-thumb.width)//2, y + (195-thumb.height)//2))
    label = f"{idx+1:02d}. {item['filename']}"
    if len(label)>35: label=label[:32]+'...'
    draw.text((x+8,y+198), label, fill='#202020', font=font)
    draw.text((x+8,y+217),f"{item['width']} x {item['height']}", fill='#666666', font=font)
sheet.save(root / '_source/candidate-contact-sheet.jpg',quality=88)
print(json.dumps({'valid':len(valid),'invalid':invalid,'numbered':[{'number':i+1,'filename':item['filename'],'dimensions':f"{item['width']}x{item['height']}"} for i,item in enumerate(valid)]},indent=2))
