# Nite Owl Angling Operating Brief

## Purpose

This repository is the implementation source of truth for the Nite Owl Angling website. The project must keep branch discipline, separate environments, and minimal safeguards for high-risk flows such as checkout.

## Branch Model

- `main` = production
- `staging` = staging
- `dev` = development

## Required Promotion Flow

1. `feature/*` -> `dev`
2. `dev` -> `staging`
3. `staging` -> `main`

No direct feature merges into `staging` or `main`. No direct commits to `main`.

## Environment Mapping

| Environment | Branch | Domain | Purpose |
| --- | --- | --- | --- |
| Development | `dev` | `dev.niteowlangling.co.za` | Active development and integration |
| Staging | `staging` | `staging.niteowlangling.co.za` | Peer review and pre-production verification |
| Production | `main` | `niteowlangling.co.za` | Live customer-facing site |

## Release Strategy

- Default release style is full promotion, not fragmented feature flags.
- Checkout and payment work must use a minimal safeguard before production.
- Hidden test routes such as `/checkout-test` are the preferred safeguard for verification-only flows.

## Source of Truth Rule

This file, the decision log, environment matrix, release checklist, figma deliverables, and inventory docs must be kept in sync when a meaningful implementation decision changes.

## Current Scaffold Status

- The client app is a Vite-based SPA scaffold with route-aware rendering.
- Public routes exist for `/`, `/rods`, `/reels`, and `/checkout`.
- The hidden `/checkout-test` route is present and gated by environment flagging.
- Public navigation excludes test routes.

## Open Decisions

- Final branch protection and deployment wiring still need to be configured in GitHub and Cloudflare.
- The repo currently uses `VITE_*` client mirrors for environment consumption because the UI is browser-rendered.
