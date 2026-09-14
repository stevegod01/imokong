# Asset quality notes

Created with two built-in imagegen requests, one per asset. No retry, variant, raster editing, cleanup, crop, resize, or alpha conversion was performed. Saved PNGs are byte-identical copies of native outputs; exact submitted prompts are adjacent in `*.prompt.txt`.

## Forklift with operator

- File: `forklift-with-operator-v1.png`
- Dimensions: 1254 × 1254 pixels.
- Mode: RGB, PNG color type 2, 24-bit RGB. No alpha channel.
- Transparency requirement failed: a grey/white checkerboard is baked into the raster, with some surrounding white glow artifacts. It is not the requested pure-white fallback.
- Visible seated adult operator has orange hard hat, bright high-visibility vest, and hands on controls. Orange body, dark tires, grey metal mast and empty forks are present, with a polished industrial 3D style.
- Front/forks point down-left; rear/operator sit toward upper-right. Entire machine is within frame.
- Approximate pixel geometry from visual inspection: vehicle silhouette `(37,120)`–`(1206,1056)`; fork tip centers `(46,890)` and `(165,972)`; tine roots/elbows `(395,787)` and `(527,856)`; mast rails span roughly x430–652; operator/cab center `(850,520)`.
- Fork tips sit near y71% and78%, lower than the requested y65–70% band; wheel bottom is near84%, above requested90%. Forks are raised but their support surface is lower than the requested loading-height composition.
- Neutral metal highlights overlap checkerboard tones, so grey/white color-key removal would risk losing machinery.
- Native SHA256: `9159BE8CF5549094D40348E5C759BAD49609EC3239621E5F6EC38B018632AFEA`.

## Palm Bright white sack pallet

- File: `palm-bright-stack-v1.png`
- Dimensions: 1254 × 1254 pixels.
- Mode: RGBA, PNG color type 6, 32-bit ARGB in System.Drawing.
- Genuine transparent background: 717,697 fully transparent pixels; image corners alpha0. Bounds of pixels with alpha>128: `(67,138)`–`(1201,1180)`.
- Most object pixels are alpha253 (676,171 pixels); alpha254 has91,608 pixels and alpha255 has801 pixels. The sacks are near opaque, not uniformly fully opaque.
- Only the complete white pillow-sack stack and wooden pallet are included, with four top sacks and broadly retained four-tier stacking. No upright bags or unrelated sheet objects.
- Main labels visibly show black NIMIR, black Palm Bright, gold emblem and border, green PURE WHITE SOAP NOODLES band, manufacturer text and25kg details. Gold/black/green reference appearance is present, not generic green-only marks. Main Palm Bright labels are spelled correctly; tiny repeated manufacturer/contact text is not uniformly faithful or fully legible.
- Perspective and broad arrangement match the source, but the generated bag and pallet geometry was redrawn and appears somewhat fuller/taller. Exact source geometry/pixel preservation was not achieved.
- Native SHA256: `7DAD59E009D7C119C30DEEFD8D91366354FFB4027F800F7C9BD510C918897079`.

Original outputs remain under `C:\Users\ejiog\.codex\generated_images\01a08ada-dc9b-7393-bf19-388ee0884616`.
