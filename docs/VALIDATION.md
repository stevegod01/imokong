# Validate both applications

Use Node.js 24. The root package contains only shared test tooling.

~~~sh
npm ci
npm ci --prefix main-hosting
npm run typecheck --prefix main-hosting
npm run build --prefix main-hosting
npx playwright install chromium
npm test
~~~

The default server serves the actual static export from main-hosting/out, binds only to localhost, rejects an occupied port and is stopped by Playwright.

Port 4173 is the default. If another process already uses it, set `IMOKO_PORT` to a free port (1024–65535); the suite still refuses to reuse an unrelated server. Results and HTML reports are separated by application under `test-results/` and `playwright-report/`.

For the separate server preview:

~~~sh
npm ci --prefix vercel-preview
npm run typecheck --prefix vercel-preview
npm run build --prefix vercel-preview
IMOKO_APP=vercel-preview npm test
~~~

PowerShell: set $env:IMOKO_APP='vercel-preview', run npm test, then Remove-Item Env:IMOKO_APP.

Checks cover catalogue filtering/navigation, query prefill, downloaded draft contents, absence of submission requests, invalidation after edits, and mobile overflow. No messages are sent or live company endpoint required. Tests use fictional example data.

GitHub Actions runs typecheck, production build and browser checks for both applications. Local results do not establish a passing remote workflow; use the workflow results as evidence.

Set CAPTURE_CASE_STUDY=1 when running main-hosting tests to refresh committed local-build screenshots. Normal tests skip that documentation-only step.
