# Risks and Assumptions

## Risks

- GitHub branch protections are not configured by this scaffold alone.
- Cloudflare deployment wiring is not yet applied in the repository.
- The checkout flow is only a scaffold, not a payment integration.
- The repository started as a bare static placeholder, so some deployment assumptions were made to keep the scaffold lightweight.

## Assumptions

- A browser-rendered Vite app is acceptable as the initial scaffold.
- Client-side environment mirrors are acceptable until a backend or edge layer is introduced.
- `/cart-test` should remain reserved unless the owner asks for it to be implemented.
