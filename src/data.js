const defaultOrigin = 'https://niteowlangling.co.za';
const fallbackOrigin = typeof window !== 'undefined' ? window.location.origin : defaultOrigin;

export const publicPaths = ['/', '/rods', '/reels', '/checkout'];
export const reservedTestPaths = ['/checkout-test', '/cart-test'];

export const routeMetadata = {
  '/': {
    title: 'Command Center',
    description: 'Branch, release, and environment overview for the Nite Owl Angling scaffold.',
  },
  '/rods': {
    title: 'Rods',
    description: 'Catalog scaffold for rods with filters, product cards, and release states.',
  },
  '/reels': {
    title: 'Reels',
    description: 'Catalog scaffold for reels with filters, product cards, and release states.',
  },
  '/checkout': {
    title: 'Checkout',
    description: 'Checkout scaffold with form blocks, CTA states, and release safeguards.',
  },
  '/checkout-test': {
    title: 'Checkout Test',
    description: 'Hidden test route for checkout verification and safeguard checks.',
  },
};

export const routeInventory = [
  {
    path: '/',
    kind: 'public',
    purpose: 'Project command center and implementation overview.',
  },
  {
    path: '/rods',
    kind: 'public',
    purpose: 'Product listing scaffold for rod collections.',
  },
  {
    path: '/reels',
    kind: 'public',
    purpose: 'Product listing scaffold for reel collections.',
  },
  {
    path: '/checkout',
    kind: 'public',
    purpose: 'Primary checkout scaffold for order completion.',
  },
  {
    path: '/checkout-test',
    kind: 'test-only',
    purpose: 'Hidden verification route for checkout flows and high-risk changes.',
  },
  {
    path: '/cart-test',
    kind: 'reserved-test',
    purpose: 'Reserved hidden test route pattern for cart verification if needed later.',
  },
];

export const productCatalog = {
  rods: [
    {
      name: 'Tideglass 7"6" Travel Rod',
      spec: 'Medium-fast, 4-piece, braid-friendly',
      price: 'R 2,480',
      notes: 'Salt-ready travel blank for long weekends and mobile rigs.',
      tags: ['travel', 'saltwater', 'mid-weight'],
    },
    {
      name: 'Reefline 6"9" Boat Rod',
      spec: 'Fast action, composite spine, durable guides',
      price: 'R 1,920',
      notes: 'Scaffold card for boat work, live bait, and precision retrieves.',
      tags: ['boat', 'composite', 'durable'],
    },
    {
      name: 'Nightcast 8"2" Distance Rod',
      spec: 'Progressive cast load, graphite blank',
      price: 'R 2,950',
      notes: 'Long-distance option for surf and estuary work.',
      tags: ['distance', 'surf', 'graphite'],
    },
  ],
  reels: [
    {
      name: 'Moonwake 3000 Reel',
      spec: 'Sealed drag, shallow spool, braid ready',
      price: 'R 1,780',
      notes: 'Balanced for light spinning setups and daily use.',
      tags: ['spinning', 'braid-ready', 'sealed'],
    },
    {
      name: 'Harborline 5000 Reel',
      spec: 'High-capacity spool, corrosion resistant',
      price: 'R 2,240',
      notes: 'A workhorse option for mixed freshwater and saltwater fishing.',
      tags: ['capacity', 'corrosion', 'workhorse'],
    },
    {
      name: 'Lowlight 4000 Reel',
      spec: 'Smooth retrieve, carbon drag, compact frame',
      price: 'R 2,060',
      notes: 'Designed for controlled retrieves and neat balancing.',
      tags: ['carbon-drag', 'compact', 'smooth'],
    },
  ],
};

export const pageStates = [
  {
    name: 'loading',
    label: 'Loading',
    copy: 'Use skeletons and muted placeholders while catalogue data is fetched.',
  },
  {
    name: 'error',
    label: 'Error',
    copy: 'Show a recovery path, not a dead end, when product data or checkout fails.',
  },
  {
    name: 'empty',
    label: 'Empty',
    copy: 'State for filtered results or a new category with no items yet.',
  },
  {
    name: 'success',
    label: 'Success',
    copy: 'Use after form submission, order confirmation, or route completion.',
  },
];

export const filters = {
  rods: ['Length', 'Action', 'Species', 'Budget'],
  reels: ['Size', 'Drag', 'Ratio', 'Price'],
  checkout: ['Shipping', 'Payment', 'Review'],
};

export const checkoutBlocks = [
  {
    title: 'Contact',
    summary: 'Checkout form block for customer details and order updates.',
    fields: ['Name', 'Email', 'Phone'],
  },
  {
    title: 'Delivery',
    summary: 'Scaffold for shipping address, delivery choice, and notes.',
    fields: ['Address', 'City', 'Province', 'Postal code'],
  },
  {
    title: 'Payment',
    summary: 'Placeholder for gateway selection and payment verification.',
    fields: ['Payment provider', 'Card holder', 'Reference'],
  },
];

export const checkoutSummary = [
  { label: 'Items', value: '3' },
  { label: 'Shipping', value: 'Calculated later' },
  { label: 'Protection', value: 'Test routes hidden' },
];

export const releaseChecklistPreview = [
  'Build passes',
  'Lint passes',
  'Tests pass',
  'Visible pages checked on mobile and desktop',
  'Checkout flow verified',
  'Hidden test access verified for risky changes',
];

export const branchModel = [
  { label: 'main', value: 'Production' },
  { label: 'staging', value: 'Staging' },
  { label: 'dev', value: 'Development' },
];

export const environmentMap = [
  {
    env: 'development',
    branch: 'dev',
    domain: 'dev.niteowlangling.co.za',
    database: 'development-only test data',
    credentials: 'sandbox only',
  },
  {
    env: 'staging',
    branch: 'staging',
    domain: 'staging.niteowlangling.co.za',
    database: 'isolated realistic test data',
    credentials: 'sandbox only',
  },
  {
    env: 'production',
    branch: 'main',
    domain: 'niteowlangling.co.za',
    database: 'production data only',
    credentials: 'live only',
  },
];

export function buildEnv() {
  const metaEnv = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env : {};

  return {
    appEnv: metaEnv.VITE_APP_ENV ?? 'development',
    appBaseUrl: metaEnv.VITE_APP_BASE_URL ?? fallbackOrigin,
    apiBaseUrl: metaEnv.VITE_API_BASE_URL ?? '',
    databaseUrl: metaEnv.VITE_DATABASE_URL ?? '',
    assetsBaseUrl: metaEnv.VITE_ASSETS_BASE_URL ?? '',
    paymentProvider: metaEnv.VITE_PAYMENT_PROVIDER ?? 'sandbox',
    paymentPublicKey: metaEnv.VITE_PAYMENT_PUBLIC_KEY ?? '',
    paymentSecretKey: metaEnv.VITE_PAYMENT_SECRET_KEY ?? '',
    paymentWebhookSecret: metaEnv.VITE_PAYMENT_WEBHOOK_SECRET ?? '',
    cloudflareAccountId: metaEnv.VITE_CLOUDFLARE_ACCOUNT_ID ?? '',
    cloudflareProjectName: metaEnv.VITE_CLOUDFLARE_PROJECT_NAME ?? 'nite-owl-placeholder',
    cloudflareApiToken: metaEnv.VITE_CLOUDFLARE_API_TOKEN ?? '',
    sessionSecret: metaEnv.VITE_SESSION_SECRET ?? '',
    adminEmailAllowlist: metaEnv.VITE_ADMIN_EMAIL_ALLOWLIST ?? '',
    enableAdminTestRoutes: String(metaEnv.VITE_ENABLE_ADMIN_TEST_ROUTES ?? 'false') === 'true',
    noindexTestRoutes: String(metaEnv.VITE_NOINDEX_TEST_ROUTES ?? 'true') !== 'false',
  };
}

export function normalizePath(pathname = '/') {
  const path = pathname.split('?')[0].split('#')[0].trim() || '/';
  if (path !== '/' && path.endsWith('/')) {
    return path.slice(0, -1);
  }
  return path;
}

export function isVisibleRoute(pathname) {
  return publicPaths.includes(normalizePath(pathname));
}

export function isTestRoute(pathname) {
  return reservedTestPaths.includes(normalizePath(pathname));
}

export function getRouteMeta(pathname) {
  return routeMetadata[normalizePath(pathname)] ?? routeMetadata['/'];
}

export function canAccessRoute(pathname, env) {
  return !isTestRoute(pathname) || Boolean(env?.enableAdminTestRoutes);
}

export function getRobotsDirective(pathname, env) {
  if (isTestRoute(pathname) && (env?.noindexTestRoutes ?? true)) {
    return 'noindex, nofollow, noarchive';
  }
  return 'index, follow';
}

export function buildCanonicalUrl(pathname, env) {
  const path = normalizePath(pathname);
  const base = String(env?.appBaseUrl ?? fallbackOrigin).replace(/\/+$/, '');
  return `${base}${path === '/' ? '/' : path}`;
}
