# IMOKO website

Website source and design assets for IMOKO, covering industrial raw materials and food and consumer products for the Nigerian market.

This repository preserves the full project workspace: the production static website, the Vercel preview application, and the component, artwork, and content update folders used to develop them.

## Start here

Use **[`main-hosting/`](./main-hosting/)** for the current production website source. It contains the newer homepage division cards and the changes needed to export the site as static HTML.

Use **[`vercel-preview/`](./vercel-preview/)** for the separate Next.js server/Vercel preview application. It shares much of the website source, but it is a separate copy and does not contain every later change in `main-hosting/`.

There is no root-level application or package manifest. Run application commands inside the chosen app directory.

## Features

- Responsive homepage with industrial and food product divisions, layered illustrated banners, and partner information.
- Catalogue with industrial/food filters and eight product detail pages: soap noodles, glycerine, stearic acid, paint-making solvents, granola, Nutee peanut butter, oatmeal, and margarine.
- Product specifications, grade and variant selection, soap packaging gallery, and downloadable soap product brochure.
- About IMOKO, partners, Board of Directors, and Executive Management pages, including leadership profile dialogs.
- Contact details and an enquiry form that can receive product and variant selections from links.
- Mobile navigation, keyboard-accessible dialogs, and a skip-to-content link.

The enquiry form prepares a local text draft for copying or downloading. It does **not** send email, submit enquiries to a server, or persist customer details.

## Technology

The two complete applications use the versions pinned in their package manifests and lockfiles:

- Next.js 16.3.5 with the App Router
- React 19.2.6
- TypeScript 5.9.3
- Tailwind CSS 4.2.1, custom CSS, and CSS modules
- Base UI / shadcn UI components and Lucide icons
- npm with Node.js **24.x**

## Local development

Install Node.js 24.x and npm, then clone the repository with an account that has access:

```sh
git clone https://github.com/stevegod01/imokong.git
cd imokong
```

From the repository root:

```sh
cd main-hosting
npm ci
npm run dev
```

Open the local URL printed by Next.js, normally `http://localhost:3000`.

The current website code does not require environment variables, an API key, or a database for local development. Images and the product brochure are included under `public/`.

## Check and build

From `main-hosting/`:

```sh
npm run typecheck
npm run build
```

The production configuration uses `output: 'export'`, trailing-slash routes, and unoptimized images. The build generates a static site in `main-hosting/out/`. Serve or upload the **contents** of that directory using a static web server. `npm run start` is present in the shared package manifest, but `next start` does not serve this static-export configuration.

The production public assets include Apache `.htaccess` rules, `robots.txt`, and `sitemap.xml`. The site metadata and sitemap use `https://imokong.com`; update them when adapting the website to another domain.

From `vercel-preview/`, the server application can be run with:

```sh
npm ci
npm run typecheck
npm run build
npm run start
```

For a GitHub-connected Vercel deployment of this preview copy, select `vercel-preview` as the project's Root Directory. Its `vercel.json` specifies the Next.js framework, `npm ci`, and `npm run build`. The preview intentionally disables search indexing in both metadata and response headers. See its [existing README](./vercel-preview/README.md) for deployment history.

## Repository layout

| Path | Purpose |
| --- | --- |
| `main-hosting/` | Complete production application, configured for static hosting. |
| `main-hosting/app/` | Page routes, layout, metadata, and global styles. |
| `main-hosting/components/` | Website components and shared UI primitives. |
| `main-hosting/hooks/` | Shared React hooks. |
| `main-hosting/lib/` | Product, brochure, leadership, gallery, and specification data. |
| `main-hosting/public/` | Website images, brochure PDF, favicon, and static hosting files. |
| `main-hosting/deployment/` | Scripts and checksums from the September 2026 production release. |
| `vercel-preview/` | Complete Next.js application prepared for Vercel, with its own configuration and lockfile. |
| `redesign/` | Earlier redesign source/assets preserved from the workspace; this snapshot does not contain a standalone package manifest. |
| `*-update/` and `banner-logo-cleanup/` | Focused component revisions, previous versions, asset masters, generation prompts, and implementation notes. |
| `industrial-images-extraction/` | Extracted industrial product reference images and supporting documentation. |

The update folders are development records, not additional applications. Some include scripts or notes with original local paths. The historical deployment scripts also contain dated server paths, archive filenames, and checksums that must be adapted for a new release. Their generated deployment ZIP is excluded from source control; the normal way to produce a fresh release is to build `main-hosting/` and deploy its new `out/` directory.

Dependencies, generated build output, caches, local environment files, and machine-specific deployment state are not part of the source upload. Install dependencies and regenerate the output with the commands above.

## Editing the website

Make current production changes in `main-hosting/`:

| Change | Files |
| --- | --- |
| Product catalogue and detail content | `lib/products.ts` |
| Product shelf life and shared specifications | `lib/product-specifications.ts` |
| Soap brochure and grade information | `lib/brochure.ts` |
| Leadership profiles and rosters | `lib/leadership.ts` |
| Soap packaging photos | `lib/soap-bag-photos.ts` and `public/images/soap-bags/` |
| Homepage division cards | `components/home-divisions.tsx` and its CSS module |
| Header, footer, and navigation | `app/layout.tsx` and the corresponding files in `components/` |
| Contact details and enquiry behavior | `app/contact/page.tsx` and `components/quote-form.tsx` |
| General visual styling | `app/globals.css` and component styles |

If a change should also appear on Vercel, synchronize the relevant source and assets to `vercel-preview/` and check that application separately. Preserve each application's hosting configuration; static-export routes and query-parameter handling differ between the two copies.

Before publishing a change, run TypeScript checking and a production build, then review the affected pages in a browser at desktop and mobile widths. When changing products or enquiry components, also check catalogue filtering, product/variant links, and draft copying or downloading. There is currently no automated test command in either application's package scripts.

Read the application-level `AGENTS.md` before making automated code changes; it points to the documentation bundled with the installed Next.js version.

## Design and content records

Useful background includes the [leadership update](./leadership-update/README.md), [About warehouse artwork notes](./partnership-sketch-update/README.md), and the [Vercel preview history](./vercel-preview/README.md). Older records describe the state at the time they were written and may refer to original machine paths.

No open-source license has been declared in this repository. Website copy, company branding, product imagery, and other assets remain subject to their respective owners' rights.
