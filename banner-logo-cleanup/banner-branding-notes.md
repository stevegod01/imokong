# Banner 1 branding and Capella bag

Only the company introduction slide uses the new branding and bag. The existing transparent IMOKO logo sits directly on the truck's orange side panel and the chemical drum's metal body, with no background plates or shadows. The truck logo is rendered in grey with a CSS filter. Each logo lives inside the same animated wrapper as its object, so it follows every movement.

For banner 1, `public/images/banner-steel-drum.png` replaces the drum with a matching unpainted stainless-steel version. The orange band is removed from the artwork, and the original IMOKO logo is overlaid directly on its clean middle surface. The industrial-materials banner retains its separate original artwork. The exact built-in Imagegen edit prompt is saved as `steel-drum-prompt.txt`.

`public/images/banner-capella-soap-bag.png` is the authentic 457 x 712 pixel Capella packaging image extracted at native resolution from page 2 of the user-supplied IMOKO soap brochure. Its label is preserved directly in the asset: NIMIR, CAPELLA, SOAP NOODLES, manufacturer/contact details, handling symbols and NET WEIGHT 25 KG WHEN PACKED. No label text or artwork was generated. Extraction details are in `capella-reference-notes.md`.

CSS clips the white page margin around the bag while retaining its opaque pale-blue material and printed label. The bag is an independently floating foreground item, sharing the existing pause, visibility, reduced-motion and active-slide behavior.

The bag stays inside the existing illustration stage; all banners retain their shared viewport sizing and six-second rotation interval. The refinery sketch underlay remains on banner 1.
