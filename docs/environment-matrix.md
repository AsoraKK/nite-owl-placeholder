# Environment Matrix

## Branch and Domain Mapping

| Env | Branch | Domain | Database | Credentials | Test Routes |
| --- | --- | --- | --- | --- | --- |
| Development | `dev` | `dev.niteowlangling.co.za` | Development-only test data | Sandbox only | Enabled in dev only |
| Staging | `staging` | `staging.niteowlangling.co.za` | Isolated realistic test data | Sandbox only | Enabled for verification |
| Production | `main` | `niteowlangling.co.za` | Production data only | Live only | Disabled by default |

## Required Variables

- `APP_ENV`
- `APP_BASE_URL`
- `API_BASE_URL`
- `DATABASE_URL`
- `ASSETS_BASE_URL`
- `PAYMENT_PROVIDER`
- `PAYMENT_PUBLIC_KEY`
- `PAYMENT_SECRET_KEY`
- `PAYMENT_WEBHOOK_SECRET`
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_PROJECT_NAME`
- `CLOUDFLARE_API_TOKEN`
- `SESSION_SECRET`
- `ADMIN_EMAIL_ALLOWLIST`
- `NOINDEX_TEST_ROUTES`
- `ENABLE_ADMIN_TEST_ROUTES`

## Front-End Mirror Assumption

The current app is browser-rendered, so the code reads `VITE_*` mirrors of the canonical environment variables. That keeps the scaffold deployable on Vite while preserving the requested environment schema in the docs.
