# About IMOKO warehouse sketch

The supplied warehouse photograph was converted to a light graphite and fine-ink sketch using one built-in image generation edit. The racks, bag stacks, forklift and workers retain the reference composition.

- Reference: `warehouse-reference.jpg`
- Generated master: `warehouse-sketch.png` (1721 × 914)
- Exact prompt and generation record: [warehouse-sketch-edit.json](./warehouse-sketch-edit.json)
- Served asset: `../vercel-preview/public/images/about-warehouse-sketch.webp` (438,354 bytes)

The sketch sits behind the “International production. Local market knowledge” section on `/about#industrial-partnership`. A warm neutral surface, 20% background opacity (15% on small screens), and darker body text keep the copy readable. The decorative layer ignores pointer events and is scoped to this section.

The About page, styles and WebP asset were synced to the maintained source at `C:/Users/ejiog/Documents/imokong/redesign`; file hashes match in both copies.

Validation: the Next.js preview production build passed, including TypeScript; the maintained Vinext production build passed. After restarting the local preview, `/about` and `/images/about-warehouse-sketch.webp` both returned HTTP 200, and the About HTML contains the partnership section and requested heading. No public deployment is included.
