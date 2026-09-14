# Food product updates — 14 September 2026

Active project: C:/Users/ejiog/Documents/imokong/redesign

Before editing, review current files and the latest project tasks, especially "imokong", "footer", and "product page". Do not restore staged whole-file copies over newer source.

This update changes only lib/products.ts and components/granola-detail.tsx.
- Retains the latest dedicated granola layout and all its supplied images.
- Aligns the catalogue record with Almond Cranberry, Fruity Delight and Tropical Fruit.
- Adds /products/nutee using the existing shared product-detail template, including the supplied Nutee photograph, serving ideas, packaging and ordering context.
- Links the granola pairing to the Nutee page.
- Leaves margarine as a separate product. Nutee packaging identifies peanut butter.
- Omits margarine2.jpg because it depicts other brands, including sunflower butter.
- Treats image 31.jpg as serving inspiration, not as evidence for Nutee packaging or specifications.
- Does not edit the shared detail template, global CSS, homepage banners or footer; their hashes were verified unchanged.
- Production build passed; both local product URLs returned HTTP 200.

Photos already present in public/images/granola-detail were verified byte-for-byte against the five relevant user uploads.
