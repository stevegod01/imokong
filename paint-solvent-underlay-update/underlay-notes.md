# Banner 3 paint-solvent sketch underlay

Source: extracted image 13, `chemical-products/paint-solvent-drums.jpg`, originally https://imokong.com/paint%20solvent.jpg.

One built-in Imagegen style-transfer request preserved the drums, pallets and warehouse composition. The native output is 1698×926 RGB without alpha. Its generated checkerboard is baked into the raster; the source asset is preserved unchanged.

The site displays the raster with `grayscale(1) brightness(1.5) contrast(1.5)`. This lifts both light background tones to white while retaining dark graphite outlines. The existing multiply blend then removes white from the presentation. The underlying file itself is not transparent.

The underlay appears only on banner 3, behind the copy and three individually animated cans. It shares the existing 22% desktop / 15% mobile opacity and edge masks with the other underlays. It is decorative, ignores pointer input, and occupies no layout space.
