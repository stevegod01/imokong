# IMOKO quality and portfolio update

Prepared 18 September 2026 against baseline commit `2586f18e48fa75e7d6dac71a5f04bdae8b177b07`. Changes remain local for review; this work did not publish or operate the live company website.

## Changes

- Added a root package and lockfile for shared Playwright/http-server tooling, with a GitHub Actions matrix that installs, type-checks, builds and browser-tests both application copies.
- Added catalogue-filter/product-navigation, local enquiry-download/stale-draft and mobile-overflow smoke coverage. Test data is fictional. The enquiry test checks downloaded contents and asserts that no POST/PUT/PATCH/DELETE requests were made.
- Added case-study, validation and development-history documentation, plus local production-build screenshots. Historical source/assets remain in place and are linked through an index.
- Corrected initial test failures caused by ambiguous accessible names: the product quote link is now scoped to the main landmark, and form controls use exact textbox names rather than matching footer navigation labels.
- Added a validated optional `IMOKO_PORT` (default 4173) and per-application report/output folders. Tests continue refusing to reuse an existing server. Screenshot capture is restricted to the static production build so preview captures cannot silently replace production evidence.

No application behavior, content, deployment configuration or product data was changed to make these tests pass.

## Validation

| Check | Result |
| --- | --- |
| `npm ci`, TypeScript check and production build for both applications | Passed in the preceding implementation step under Node 24.16, as reported by the coordinating task; not repeated after test-only edits |
| Static export Chromium suite, Node 24.19.0, Playwright 1.63.0 | **3 passed**, 1 intentionally skipped opt-in screenshot capture; localhost port 4181 |
| Next.js server preview Chromium suite, Node 24.19.0, Playwright 1.63.0 | **3 passed**, 1 intentionally skipped opt-in screenshot capture; localhost port 4182 |
| Homepage/catalogue screenshot review | Both existing production-build captures visually inspected; content/images loaded and no visible clipping in the captured desktop views |
| `git diff --check` | Passed |

The occupied default port 4173 was left untouched. Separate test servers were selected through `IMOKO_PORT`; no arbitrary process was terminated. Browser checks used the existing local production builds and downloaded an enquiry text file locally. No enquiry was sent to a company endpoint.

## Limits

These are focused Chromium smoke tests, not exhaustive accessibility, cross-browser, performance, mobile-navigation or visual-regression coverage. They do not verify the public production URL or establish a successful remote Actions run. Preview startup emits a non-fatal Next.js workspace-root/lockfile warning because the repository now also has root test tooling; the suite passes without changing application tracing settings. Keep the two app copies checked independently when changing application source.

See [validation commands](docs/VALIDATION.md) and [case study](docs/CASE-STUDY.md) for the maintained user-facing documentation.
