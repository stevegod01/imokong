# Factory floor sketch v1

- Asset: `factory-floor-sketch-v1.png`
- Exact prompt: `factory-floor-sketch-v1.prompt.txt`
- Method: built-in Imagegen, exactly one edit call; no retries, variants, CLI fallback, or postprocessing.
- Native output: PNG, 1536 x 1024, 3:2, 24-bit RGB (`Format24bppRgb`), no alpha channel. Alpha transparency was requested but not produced natively.
- Background: visually clean white / near-white negative space. No visible checkerboard, paper texture, or vignette. It is not mathematically uniform #ffffff: sampled negative-space pixels include RGB 253/253/253 and 254/254/254. The established CSS multiply blend can be used by the consuming banner.
- Composition: the generated sketch matches the reference's overall elevated viewpoint, framing, vanishing point, roof trusses, overhead structures, windows, left mezzanine, factory machinery, conveyors and floor arrangement. Fine equipment details are stylized by the generated line rendering; it is not a pixel-exact tracing.
- Appearance: light neutral graphite technical linework, sparse hatching, ample unfilled wall/ceiling/floor space, no visible added people or text/logos.
- Edit target: `C:\Users\ejiog\OneDrive\Documents\imokong\factory-floor-underlay-update\factory-floor-inspection.jpg` (1440 x 960 inspection copy).
- Original photo: `C:\Users\ejiog\OneDrive\Documents\imokong\industrial-images-extraction\IMOKO-industrial-images\industrial-photos\factory-floor.jpg` (6720 x 4480), source `https://imokong.com/warehouse2.jpg`.
- Native generated source retained unchanged at `C:\Users\ejiog\.codex\generated_images\01a08be2-a49d-7b03-a912-62c0d72cf536\exec-7e61f67e-f62b-40e8-aca2-f7549cbf8df5.png`.
- Workspace copy is byte-identical to native result. SHA-256: `EAEB1C5F404DF652B3EF4B241A8864F0EE3D5F22D818368CA5EC5F42209A3C3D`.
- Original photograph and inspection copy were preserved; only asset and documentation files were added to the requested assets directory.
