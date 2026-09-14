# IMOKO temporary Vercel preview

Complete copy of the maintained site at `C:/Users/ejiog/Documents/imokong/redesign`, prepared on 14 September 2026.

At the initial migration, all 128 application and public files matched the maintained source by SHA-256. Only build configuration was adapted from Vinext/Cloudflare to Next.js 16.3.5 for Vercel. Subsequent leadership changes are synchronized with the maintained source as described below.

## Run and deploy

```powershell
npm ci
npm run build
npm run start
npx vercel login
npx vercel deploy --yes
```

Deploy from this folder. The temporary deployment does not require attaching the existing IMOKO domain. Search indexing is disabled by metadata and the Vercel response header.

Before every deployment, compare `app`, `components`, `hooks`, `lib`, and `public` against the maintained source path above and synchronize newer application changes. Keep this folder's Vercel/Next.js configuration and preview-only portrait masters. The maintained source may be newer even when this folder has a recent successful build.

## Verification

- Production build and TypeScript checking passed.
- All 13 pages returned HTTP 200, including all eight product detail pages.
- Both catalogue division filters and contact query parameters returned HTTP 200.
- An unknown product returned HTTP 404.
- All referenced local assets are present, including the brochure.

The enquiry form preserves existing behavior: it prepares a downloadable or copyable draft and does not send messages.

## Published deployment

Published successfully on 14 September 2026.

- Public URL: https://vercel-preview-six-indol.vercel.app
- Deployment URL: https://vercel-preview-30lyw6j9t-emekasteevs-5569.vercel.app
- Dashboard: https://vercel.com/emekasteevs-5569/vercel-preview/GXu7uFWUDtgeHVHsvv2JbDe7v7Y1
- Deployment ID: `dpl_GXu7uFWUDtgeHVHsvv2JbDe7v7Y1`
- Vercel project: `emekasteevs-5569/vercel-preview`

Vercel created this project's first deployment as its production deployment on the supplied Vercel subdomain. No custom domain was attached. The published deployment is account-owned and no automatic expiry or deletion was configured. Future previews can use `npx vercel deploy`; use `npx vercel deploy --prod` to update the public alias above.

## Leadership update — 14 September 2026

Added Board of Directors and Executive Management at their existing `/leadership/...` paths, integrated under About IMOKO. Includes complete source biographies, profile dialogs, desktop/mobile/footer links, and eight portraits with matching neutral backgrounds. Application changes and optimized portraits are synchronized to the maintained redesign. Both builds, TypeScript, responsive browser checks and local production HTTP checks passed. See `../leadership-update/README.md` for sources, image prompts and verification records. This update is now published at the Vercel URL above. The production Vercel build and TypeScript checks passed; both new routes are included in the build.

## Latest Vercel update — 14 September 2026

Published the orange header with white logo and navigation, reduced header heights (84px desktop and 68px mobile), coordinated hero and mobile-menu sizing, updated About dropdown styling, and removal of leadership portrait number overlays. Synchronized six changed files and added `components/site-header.css` from the maintained source; 155 other shared runtime and asset files matched. All 162 canonical runtime and asset files are included, with eight preview-only portrait masters preserved. The 24-month shelf-life correction, soap-packaging gallery, About warehouse sketch, leadership profiles, and contact-number updates are retained. Vercel's production build and TypeScript checks passed. Browser checks confirmed the new header, working About dropdown, portrait cards without number overlays, and profile dialog opening and closing. The public address remains unchanged.
