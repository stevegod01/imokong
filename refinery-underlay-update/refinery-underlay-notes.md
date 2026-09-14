# Banner 1 refinery sketch underlay

The user selected image 01, “Refinery and processing plant,” from the extracted original-site image collection. The source is `https://imokong.com/refinery.jpg` and its preserved local copy is `industrial-images-extraction/IMOKO-industrial-images/industrial-photos/refinery.jpg` in the workspace.

Built-in Imagegen converted the photograph to an architectural line sketch. The initial generation painted a checkerboard into the image and was rejected. A targeted background correction preserves the sketch while producing clean white negative space. Exact generation and correction prompts are stored alongside these notes.

The selected asset is `public/images/banner-refinery-sketch.png`. It appears only inside the `company` slide, which is banner 1. CSS multiply blending makes white areas merge with the existing background, while layer opacity creates the translucent underlay. The source image itself is not represented as a PNG with native alpha.

The absolute decorative layer sits above the existing grid and behind the banner text, links and animated foreground artwork. It does not participate in layout, intercept clicks or appear in the accessibility tree. Desktop opacity is 22%, softened further by horizontal and vertical masks. Mobile opacity is 15%, with a lighter area behind the copy.

The existing copy, foreground object animations, banner dimensions and six-second carousel interval are preserved.
