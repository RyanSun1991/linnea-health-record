# Linnea legacy legal site — redirect stubs

This repository is the deployed source of the GitHub Pages site at
`https://ryansun1991.github.io/linnea-health-record/`. Since 16 September 2026
it serves only redirect stubs: every page that used to live here has moved to
the company site of Arctura Technologies Inc., which owns and operates Linnea.

| Old path | Redirects to |
|---|---|
| `/` | https://arcturatech.com/products.html |
| `/privacy/` | https://arcturatech.com/linnea/privacy.html |
| `/terms/` | https://arcturatech.com/linnea/terms.html |
| `/consumer-health/` | https://arcturatech.com/linnea/consumer-health-data.html |
| `/support/` | https://arcturatech.com/contact.html |
| `/disclaimers/` | https://arcturatech.com/linnea/ai-notices.html |
| anything else (`404.html`) | https://arcturatech.com/products.html |

Each stub is a static HTML file under `site/` with a `<meta http-equiv="refresh">`,
a canonical link, a `location.replace()` script and `noindex, nofollow`. There is
no build step: `.github/workflows/pages.yml` uploads `site/` as the Pages artifact
on every push to `main`.

## Rules

- **Never delete this repository or any of these paths.** The Linnea 1.2.0 iOS
  binary and App Store Connect's 1.2.0 version metadata still link to them; the
  stubs keep those links landing on the current company documents.
- Keep the repository public (GitHub Pages requirement).
- The legal documents themselves are maintained in the `nourish` repository
  (`docs/legal/*.md`, mirrored in-app and on `arcturatech.com/linnea/*.html`).
  Do not publish document text here.

## Where this tree lives

- `RyanSun1991/linnea-health-record` — the deployed copy (GitHub Pages).
- `nourish/sites/linnea/` — a byte-identical mirror kept for review; it is not
  deployed (GitHub ignores workflows under a subdirectory).
