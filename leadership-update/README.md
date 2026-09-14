# IMOKO leadership pages — 14 September 2026

Added `/leadership/board-of-directors` and `/leadership/executive-management` to the maintained redesign and its Vercel preview copy.

Both pages belong to About IMOKO through the shared section navigation, desktop About disclosure, nested mobile links, About leadership cards, footer links and links between leadership pages. Existing public leadership URL paths are preserved.

## Content

All eight names, roles, published email addresses, complete biographies and both roster orderings match `leadership-source.json`. Four board members and six executives share two profiles. Biographies open in native, labelled dialogs with keyboard focus handling, Escape dismissal, a sticky close button and page scroll locking.

Sources:

- https://imokong.com/leadership/board-of-directors
- https://imokong.com/leadership/executive-management

The chairman's published email is `canyakaora@imokong.com`; retained exactly as supplied by the source site.

## Portraits and prompts

The eight original orange-background portraits remain in `originals/`. Built-in imagegen performed background replacements to warm neutral `#f1f0e9`, with instructions to preserve identity, expression, clothing and pose, use a 4:5 portrait canvas and add no text, props or logos. Generated edits recreate fine image details and are not pixel-identical cutouts.

Exact prompts and generated source paths are in `root-portrait-edits.json` (Kingsley and Fernando) and the six individual `*-edit.json` records. The built-in imagegen tool was used for every edit; no API/CLI generation fallback was used.

PNG masters: `C:/Users/ejiog/OneDrive/Documents/imokong/vercel-preview/public/images/leadership/`.

Final served assets: the eight `[person-id].webp` files in `public/images/leadership/` in both projects. `optimize-portraits.cjs` creates 960px-wide WebP delivery copies without changing the PNG masters. Total WebP size is about 0.96 MB, before Next.js responsive image optimization.

## Verification

- Next.js production build and TypeScript checking passed.
- Maintained Vinext production build passed with both new routes.
- All source profile fields and ordering checked against the capture.
- Browser checks: desktop, 800px tablet, 390px mobile; navigation, image loading, dialog opening, keyboard focus, scrolling and Escape dismissal passed.
- Production HTTP checks: six routes and eight portraits returned 200; see `http-checks.json`.
- 24 application/asset files copied to the maintained redesign and verified with SHA-256; see `synced-files.json`. Existing edited files backed up in `before-maintained/`.

Local production preview: http://127.0.0.1:3011/leadership/executive-management (while the preview server is running). No remote deployment was made in the original authoring task.

## Vercel publication — 14 September 2026

Published in the hosting task after the user requested the latest changes. All 147 shared application/public files matched the maintained redesign by SHA-256. The Vercel production build and TypeScript checks passed.

- Board: https://vercel-preview-six-indol.vercel.app/leadership/board-of-directors
- Executive management: https://vercel-preview-six-indol.vercel.app/leadership/executive-management
- Deployment: `dpl_HBJYxv42P3vftf1ZZbMaBEAncH1h`
