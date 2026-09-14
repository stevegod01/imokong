# IMOKO local redesign

Local-only preview of the Kropmann-inspired redesign. No Site was registered or published, and the original production site is unchanged.

## Run locally

From this folder:

```powershell
npm.cmd install
npm.cmd run dev -- --hostname 127.0.0.1
```

Open the Local URL printed by the server (normally http://127.0.0.1:3000). Keep the terminal running. `start-local.cmd` is a convenient launcher once dependencies are installed. The preview binds to this computer only.

## Included

- Responsive homepage using IMOKO orange, a light layout, supplier imagery and a dark-green supply-process section.
- Catalogue with industrial/food navigation and seven product pages.
- Soap-noodle grade tabs and granola variant tabs; selected products/variants carry into the enquiry.
- About and partner pages, with Lagos and Abuja contact information.
- Labelled enquiry fields with browser validation, a visible draft, download and copy actions. The form makes no server submission and does not store customer data.
- A local-only, optional `stage_enquiry_product` WebMCP tool shares the enquiry form's visible state where the browser supports it. Registration and interaction have not been verified in a supported WebMCP context.
- Page titles/descriptions, noindex for this preview, keyboard focus styles, a skip link, mobile navigation and reduced-motion support.

## Validation

Production build and TypeScript checks completed successfully. Local HTTP checks returned 200 for homepage, catalogue, food filter, soap-noodles, granola, About, Partners and prefilled Contact. Browser interaction and visual breakpoint QA remain to be completed with the user; responsive styles are implemented but not browser-verified.

## Before a public launch

- Review the design and confirm product data, partner wording, asset rights, office information and claims.
- Confirm the wine/gin classification; that category is intentionally omitted from this preview until resolved.
- Replace enquiry draft handling with approved delivery, abuse protection and tested success/error handling.
- Complete remaining production content such as leadership, responsibility, resources and appropriate policy pages.
- Add a redirect map for existing URLs, review metadata and remove noindex only when publication is intended.
- Verify mobile layouts, keyboard interactions, variant selection, enquiry/download behaviour, image loading and performance in a browser.
- Review the starter dependency audit before release. Initial installation reported 11 advisories (1 low, 2 moderate, 8 high); no forced dependency upgrades have been applied.

## Assets

Images are local copies of the supplied IMOKO site's public assets, reused for the user's redesign review. Sources:

- Logo: `https://imokong.com/Imoko-Logo-png-2@2x.png`
- Logistics: `https://imokong.com/truck%20with%20pellets.png`
- Soap: `https://imokong.com/soap%20noodle.png`
- Glycerine: `https://imokong.com/Frame-1618873018@3x.png`
- Solvents: `https://imokong.com/paint%20solvent.jpg`
- Stearic acid: `https://imokong.com/stearic%20acid.jpg`
- Oatmeal: `https://imokong.com/oatmeal2.webp`
- Granola: `https://imokong.com/Almond%20Granola-1.jpg`
- Tropical granola: `https://imokong.com/Tropical%20Fruit%20Granola.jpg`
- Margarine: `https://imokong.com/nutee.jpg`
- Partner logos: `image-33@2x.png`, `image-34@2x.png`, `DHL-express-logo.png`, `JAZGLO-jpg-1@2x.png` on the supplied domain.

The presence of an asset on the current site does not establish ownership or independently verify a supplier relationship. No new certification, stock, pack-size or delivery-time claims were invented.
