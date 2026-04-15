# Release Checklist

## Before `staging` -> `main`

- Build passes.
- Lint passes.
- Tests pass.
- Key pages render on mobile and desktop.
- Checkout flow is verified.
- Hidden test route or admin-only access is verified for risky changes.
- Environment variables are validated.
- No staging or dev credentials are present in production config.
- Decision log is updated.

## Promotion Rules

- Promotion PRs must preserve exact state.
- No undocumented changes in a promotion PR.
- Production release requires explicit owner approval.

## Rollback Note

If a release is materially risky, include the rollback path before merge.
