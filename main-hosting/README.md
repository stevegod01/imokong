# IMOKO main hosting deployment

Published to https://imokong.com/ on 14 September 2026 using the existing HOSTAFRICA DirectAdmin account at https://da16.host-ww.net:2222/evo/.

## Source and build

The maintained source is `C:/Users/ejiog/Documents/imokong/redesign`. This folder is an isolated Next.js 16.3.5 static-export adapter for the shared hosting account. It includes the homepage division-card changes captured at 17:35 on 14 September, the latest granola photo, the Chief Executive Officer title correction, and all previously published site updates.

Run `npm ci` and `npm run build`; deploy the complete `out` directory. Do not deploy `node_modules`, source files, local logs, or the `deployment` folder publicly.

Preserve these hosting adaptations when refreshing from the maintained source:

- `next.config.ts`: static export, trailing slashes, unoptimized images (the portrait assets are already optimized WebP files).
- Product and contact page wrappers and their client query components: maintain filters and enquiry prefills without server rendering.
- Product detail route: generated static parameters for all eight products.
- `app/layout.tsx`: production metadata base and indexing enabled.
- `components/quote-form.tsx`: production wording for the existing draft-only form. It prepares, downloads, and copies drafts; it does not send messages.
- `public/.htaccess`, `robots.txt`, and `sitemap.xml`: HTTPS behavior, legacy route mappings, production crawling and the sitemap.

## Backups created before publishing

- DirectAdmin backup: `/home/imokongc/backups/backup-Sep-14-2026-1.tar.zst`, 74,424,851 bytes (70.98 MB displayed by the panel). The panel lists it as restorable with Domains Directory and Subdomains Lists.
- Complete previous document root retained outside the live web root: `/home/imokongc/domains/imokong.com/public_html.before-20260914`.
- Current document root: `/home/imokongc/domains/imokong.com/public_html`.
- HTTPS uses the existing `private_html -> ./public_html` symlink. No DNS, mail-account, or certificate changes were needed.

Use DirectAdmin **Backup and Restore → Restore Backup** to select the named archive when restoring the previous website. The retained previous document root also permits a direct rollback; preserve the current document root before swapping directories.

## Release record

- Private staging and verification records: `/home/imokongc/imoko-release-20260914`.
- Uploaded archive: `deployment/imoko-main-20260914-r2.zip`, 72,140,951 bytes.
- Archive SHA-256: `18a45c49ce6b2f9087b338a32a9da8ed7ab380536fede73701984ecbf840a44c`.
- File manifest: `deployment/SHA256SUMS`, 190 files.
- `stage.sh` verified the upload checksum and archive integrity, copied the complete previous root, retained its index as `legacy-index.html`, overlaid the new export, and verified every file checksum.
- `activate.sh` rechecked the original entrypoints and new file checksums before switching the prepared root into place. It retained the full original root and confirmed activation.

The old assets and `legacy-index.html` preserve `/news`, its four articles, `/sustainability`, and `/site-map`. The old product/category URLs and `/leadership` redirect to corresponding new pages. Keep those assets until these legacy pages have been deliberately migrated or retired.

## Validation

The production build and TypeScript check passed. All 15 main routes exist in the static export, all eight products retain the 24-month shelf life, and referenced local assets resolve. Browser checks passed for food/industrial catalogue filtering, contact product/variant prefills, the final homepage, and the published header menu. Server-side checks verified all 190 exported file hashes before activation.

Post-publication HTTPS checks passed for all 15 redesigned pages, all nine legacy redirects, the retained legacy pages and sampled legacy assets, robots and sitemap, HTTP-to-HTTPS redirects, both apex and www hosts, and the custom 404. Browser checks on the main domain confirmed product filtering, client navigation from Granola to its correctly prefilled enquiry form, and the actual rendered legacy technology article.

The existing temporary Vercel preview remains a separate deployment. Future main-hosting updates should refresh and deploy this adapter with a new dated backup and release record.
