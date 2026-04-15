# Decision Log

## 2026-04-15

- Created a feature branch scaffold to preserve the requested branch model while implementing the initial repo structure.
- Chose a Vite SPA scaffold instead of a framework-heavy rewrite because the repository started as a bare static placeholder and needed a minimal, reliable base.
- Implemented route-aware rendering for `/`, `/rods`, `/reels`, `/checkout`, and `/checkout-test`.
- Added noindex and test-route gating for hidden verification paths.
- Added `VITE_*` client mirrors for environment variables so the browser app can consume the environment safely.

## Follow-up Required

- Confirm GitHub branch protection rules for `main`, `staging`, and `dev`.
- Confirm Cloudflare deployment mapping for each environment.
- Confirm whether `/cart-test` should be implemented later or kept as a reserved pattern only.
