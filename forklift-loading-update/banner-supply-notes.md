# Banner 2: forklift loading and Palm Bright packaging

The orange truck and container retain transparent off-white IMOKO logos. The larger warehouse has dark lettering directly on its front wall: no sign backing, border or shadow. The text follows the facade's perspective and sits above the loading-door lintel:

Imoko warehouse

Plot 8, Block H, Cowbell Road, Isolo, Industrial estate, Isolo-Lagos.

The full address is also included in the artwork's accessible description.

## Packaging and operator assets

Image 18, the original Palm Bright white packaging from the extracted IMOKO images, supplied the packaging reference. The new white pallet stack uses the black NIMIR name, gold Palm Bright mark, green Pure White Soap Noodles band and 25 kg presentation. This replaces the previous generic text overlays and uses the reference's correct Palm spelling.

Two assets were created with the built-in Imagegen tool, one request each:

- public/images/banner-palm-bright-pallet.png: 1254 x 1254 PNG with native transparency. The white stacked bags and wooden pallet retain the original scene's overall presentation, with a generated packaging treatment based on image 18.
- public/images/banner-forklift-operator.png: 1254 x 1254 PNG showing an orange forklift with a seated operator in a hard hat and high-visibility vest. The original raster is preserved; a separate native vector mask removes its generated checkerboard during display, including the cage openings.
- public/images/banner-forklift-mask.svg: functional display mask for the forklift image.

The exact built-in generation prompts are saved as design/forklift-operator-prompt.txt and design/palm-bright-pallet-prompt.txt.

## Six-second loading sequence

The truck first moves forward to open the loading gap. The forklift and its pallet move together from the warehouse, then stop at the rear of the truck. The pallet slides off the forks and is occluded by the truck during handoff. The operator reverses the unloaded forklift before the truck pulls away. The pallet then resets for the next cycle.

Truck: forward by 18%, stationary through 84%, departs at 90% of the cycle. Forklift: approaches from 18% to 48%, holds through 67%, reverses by 84%. Cargo: stays attached through 49%, transfers by 65%. Motion runs only on the active supply slide and respects pause, page visibility and reduced-motion settings. Reduced motion retains a still forklift/operator with its load. Banner dimensions and all other slides remain unchanged.