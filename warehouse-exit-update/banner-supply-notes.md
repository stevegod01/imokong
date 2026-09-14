# Banner 2: forklift loading and Palm Bright packaging

The orange truck and container retain transparent off-white IMOKO logos. The warehouse has an extended blank white fascia above its open loading door. The full address is fitted inside that white area as dark wall lettering, with no sign backing, border or shadow. The text follows the new facade perspective:

Imoko warehouse

Plot 8, Block H, Cowbell Road, Isolo, Industrial estate, Isolo-Lagos.

The full address is also included in the artwork's accessible description.

## Packaging and operator assets

Image 18, the original Palm Bright white packaging from the extracted IMOKO images, supplied the packaging reference. The new white pallet stack uses the black NIMIR name, gold Palm Bright mark, green Pure White Soap Noodles band and 25 kg presentation. This replaces the previous generic text overlays and uses the reference's correct Palm spelling.

The forklift and pallet were created with the built-in Imagegen tool, one request each:

- public/images/banner-palm-bright-pallet.png: 1254 x 1254 PNG with native transparency. The white stacked bags and wooden pallet retain the original scene's overall presentation, with a generated packaging treatment based on image 18.
- public/images/banner-forklift-operator.png: 1254 x 1254 PNG showing an orange forklift with a seated operator in a hard hat and high-visibility vest. The original raster is preserved; a separate native vector mask removes its generated checkerboard during display, including the cage openings.
- public/images/banner-forklift-mask.svg: functional display mask for the forklift image.

The exact built-in generation prompts are saved as design/forklift-operator-prompt.txt and design/palm-bright-pallet-prompt.txt.

## Six-second loading sequence

The truck first moves forward to open the loading gap. The loaded forklift begins inside the warehouse doorway at 58% of its outside scale. It drives out through the doorway, grows with perspective as it approaches, and stops at the rear of the truck. The pallet slides off the forks and is occluded by the truck during handoff. The operator reverses the unloaded forklift before the truck pulls away. The pallet then resets for the next cycle.

Truck: forward by 18%, stationary through 84%, departs at 90% of the cycle. Forklift: starts inside the warehouse through 12%, drives out by 44%, holds through 68%, and reverses back inside by 84%. Cargo: stays attached through 49%, transfers by 65%. Motion runs only on the active supply slide and respects pause, page visibility and reduced-motion settings. Reduced motion retains a still forklift/operator with its load. Banner dimensions and all other slides remain unchanged.
## White fascia and doorway layers

public/images/banner-warehouse-white-fascia.png is the new standalone warehouse artwork (1254 x 1254), created with one built-in Imagegen edit of the original warehouse. The white wall above the door is extended and left free of lights or fixtures. Its prompt is saved as design/warehouse-white-fascia-prompt.txt.

The original RGB raster is unchanged. public/images/banner-warehouse-exterior-mask.svg clips its checkerboard exterior. A second warehouse image uses public/images/banner-warehouse-front-mask.svg to retain the roof, white fascia and jambs while leaving the opening and front threshold transparent. The forklift is between these two warehouse layers, so it starts inside the dark opening and emerges past the door jambs into the loading area. Both warehouse copies share exactly the same position, dimensions and perspective. Wall lettering is on the foreground copy and cannot be painted over by it.

The native text block fits within the white wall's source-coordinate safe quadrilateral [(453,468),(1103,366),(1103,500),(453,608)]. The complete banner keeps its existing viewport dimensions and six-second cycle.