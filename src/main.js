import './styles.css';
import {
  branchModel,
  buildCanonicalUrl,
  buildEnv,
  canAccessRoute,
  checkoutBlocks,
  checkoutSummary,
  filters,
  getRobotsDirective,
  getRouteMeta,
  isTestRoute,
  normalizePath,
  pageStates,
  productCatalog,
  publicPaths,
  releaseChecklistPreview,
  routeInventory,
  environmentMap,
} from './data.js';

const app = document.querySelector('#app');
const env = buildEnv();

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function slugify(pathname) {
  return normalizePath(pathname).replaceAll('/', '-').replaceAll('--', '-').replace(/^-/, '') || 'home';
}

function setMetaTag(selector, value) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement('meta');
    const nameMatch = selector.match(/name="([^"]+)"/);
    const propertyMatch = selector.match(/property="([^"]+)"/);
    if (nameMatch) {
      node.setAttribute('name', nameMatch[1]);
    } else if (propertyMatch) {
      node.setAttribute('property', propertyMatch[1]);
    }
    document.head.appendChild(node);
  }
  node.setAttribute('content', value);
}

function setCanonical(url) {
  let node = document.head.querySelector('link[rel="canonical"]');
  if (!node) {
    node = document.createElement('link');
    node.setAttribute('rel', 'canonical');
    document.head.appendChild(node);
  }
  node.setAttribute('href', url);
}

function renderRouteLinks(activePath) {
  return publicPaths
    .map((path) => {
      const route = getRouteMeta(path);
      const active = normalizePath(activePath) === path ? ' is-active' : '';
      return `
        <a class="nav-link${active}" href="${path}" data-router-link="true">
          <span>${escapeHtml(route.title)}</span>
          <small>${escapeHtml(route.description)}</small>
        </a>
      `;
    })
    .join('');
}

function renderStateStrip() {
  return pageStates
    .map(
      (state) => `
        <article class="state-card">
          <p class="eyebrow">${escapeHtml(state.label)}</p>
          <p>${escapeHtml(state.copy)}</p>
        </article>
      `
    )
    .join('');
}

function renderProductCard(item) {
  return `
    <article class="product-card">
      <div class="product-card__top">
        <div>
          <p class="eyebrow">Product card</p>
          <h3>${escapeHtml(item.name)}</h3>
        </div>
        <strong class="product-price">${escapeHtml(item.price)}</strong>
      </div>
      <p class="product-spec">${escapeHtml(item.spec)}</p>
      <p class="product-copy">${escapeHtml(item.notes)}</p>
      <div class="tag-row">
        ${item.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
      </div>
    </article>
  `;
}

function renderFilters(category) {
  return `
    <section class="panel filter-panel" aria-label="${escapeHtml(category)} filters">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Filter controls</p>
          <h2>${escapeHtml(category)} refinement</h2>
        </div>
        <span class="panel-chip">Hidden from public nav</span>
      </div>
      <div class="filter-row">
        ${filters[category].map((filter) => `<button class="filter-chip" type="button">${escapeHtml(filter)}</button>`).join('')}
      </div>
    </section>
  `;
}

function renderHero(pathname, title, description, kicker) {
  return `
    <section class="hero panel">
      <div class="hero-copy">
        <p class="eyebrow">${escapeHtml(kicker)}</p>
        <h1>${escapeHtml(title)}</h1>
        <p class="lede">${escapeHtml(description)}</p>
      </div>
      <aside class="hero-aside">
        <div class="metric">
          <span>Branch model</span>
          <strong>feature / dev / staging / main</strong>
        </div>
        <div class="metric">
          <span>Environment</span>
          <strong>${escapeHtml(env.appEnv)}</strong>
        </div>
        <div class="metric">
          <span>Route</span>
          <strong>${escapeHtml(pathname)}</strong>
        </div>
      </aside>
    </section>
  `;
}

function renderHome() {
  return `
    ${renderHero('/', 'Nite Owl Angling scaffold', 'A branch-disciplined starting point for rods, reels, checkout, and hidden test routes.', 'Operating brief')}
    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Route inventory</p>
          <h2>Public pages and test routes</h2>
        </div>
        <span class="panel-chip">Source of truth in docs</span>
      </div>
      <div class="route-grid">
        ${routeInventory
          .filter((route) => route.kind !== 'reserved-test')
          .map(
            (route) => `
              <article class="route-card">
                <p class="eyebrow">${escapeHtml(route.kind)}</p>
                <h3>${escapeHtml(route.path)}</h3>
                <p>${escapeHtml(route.purpose)}</p>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Branch discipline</p>
          <h2>Promotion path</h2>
        </div>
        <span class="panel-chip">No shortcuts</span>
      </div>
      <div class="branch-grid">
        ${branchModel
          .map(
            (branch) => `
              <article class="status-card">
                <strong>${escapeHtml(branch.label)}</strong>
                <p>${escapeHtml(branch.value)}</p>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Release checklist</p>
          <h2>Minimum merge gate</h2>
        </div>
      </div>
      <ul class="checklist">
        ${releaseChecklistPreview.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>
    </section>
    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Environment matrix</p>
          <h2>Branch to domain mapping</h2>
        </div>
      </div>
      <div class="matrix">
        ${environmentMap
          .map(
            (item) => `
              <article class="status-card">
                <strong>${escapeHtml(item.env)}</strong>
                <p>${escapeHtml(item.branch)} → ${escapeHtml(item.domain)}</p>
                <small>${escapeHtml(item.database)}</small>
                <small>${escapeHtml(item.credentials)}</small>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderCatalog(category) {
  const items = productCatalog[category];
  return `
    ${renderHero(`/${category}`, `${category[0].toUpperCase()}${category.slice(1)} collection`, `Scaffold layout for ${category} browsing, product cards, filter controls, and state handling.`, 'Catalog')}
    ${renderFilters(category)}
    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Product cards</p>
          <h2>Reusable catalog card</h2>
        </div>
      </div>
      <div class="product-grid">
        ${items.map((item) => renderProductCard(item)).join('')}
      </div>
    </section>
    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">States</p>
          <h2>Loading, error, empty, success</h2>
        </div>
      </div>
      <div class="state-grid">
        ${renderStateStrip()}
      </div>
    </section>
  `;
}

function renderCheckout(isTest = false) {
  return `
    ${renderHero('/checkout', 'Checkout scaffold', 'Form blocks, CTA states, and minimal safeguards for high-risk payment work.', 'Checkout')}
    ${isTest ? '<div class="test-banner panel">Hidden test route: this path stays noindex, excluded from navigation, and reserved for admin or verification access.</div>' : ''}
    <section class="checkout-grid">
      <form class="panel form-panel">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Forms</p>
            <h2>Checkout blocks</h2>
          </div>
        </div>
        <div class="form-stack">
          ${checkoutBlocks
            .map(
              (block) => `
                <fieldset class="form-block">
                  <legend>${escapeHtml(block.title)}</legend>
                  <p>${escapeHtml(block.summary)}</p>
                  <div class="field-grid">
                    ${block.fields.map((field) => `<label><span>${escapeHtml(field)}</span><input type="text" placeholder="${escapeHtml(field)}" /></label>`).join('')}
                  </div>
                </fieldset>
              `
            )
            .join('')}
        </div>
        <div class="cta-row">
          <button class="button button--primary" type="button">Place order</button>
          <button class="button button--ghost" type="button">Save draft</button>
        </div>
      </form>
      <aside class="checkout-aside">
        <section class="panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">Summary</p>
              <h2>Order review</h2>
            </div>
          </div>
          <div class="summary-list">
            ${checkoutSummary.map((item) => `<div class="summary-row"><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></div>`).join('')}
          </div>
        </section>
        <section class="panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">CTA states</p>
              <h2>Primary, secondary, disabled</h2>
            </div>
          </div>
          <div class="cta-samples">
            <button class="button button--primary" type="button">Primary CTA</button>
            <button class="button button--ghost" type="button">Secondary CTA</button>
            <button class="button button--disabled" type="button" disabled>Disabled CTA</button>
          </div>
        </section>
        <section class="panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">Safeguards</p>
              <h2>Minimal production controls</h2>
            </div>
          </div>
          <ul class="checklist">
            <li>Hidden test routes stay out of public navigation.</li>
            <li>Routes are marked noindex when they are test-only.</li>
            <li>Test access is controlled by environment flags.</li>
            <li>Checkout parity is verified before production release.</li>
          </ul>
        </section>
      </aside>
    </section>
  `;
}

function renderBlockedTestRoute(pathname) {
  return `
    ${renderHero(pathname, 'Restricted test route', 'This route is hidden until admin or verification access is explicitly enabled in the environment.', 'Test route')}
    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Access control</p>
          <h2>Hidden by default</h2>
        </div>
      </div>
      <div class="blocked-copy">
        <p><strong>${escapeHtml(pathname)}</strong> is reserved for validation work and is not linked from the public navigation.</p>
        <p>Enable <code>VITE_ENABLE_ADMIN_TEST_ROUTES=true</code> in the appropriate environment to render the test-only checkout scaffold.</p>
      </div>
    </section>
  `;
}

function renderNotFound(pathname) {
  return `
    ${renderHero(pathname, 'Route not found', 'The requested path is not part of the current scaffold.', '404')}
    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Recovery</p>
          <h2>Use a defined route</h2>
        </div>
      </div>
      <div class="route-grid">
        ${publicPaths
          .filter((path) => path !== '/')
          .map(
            (path) => `
              <a class="route-card route-card--link" href="${path}" data-router-link="true">
                <p class="eyebrow">${escapeHtml(path)}</p>
                <h3>${escapeHtml(getRouteMeta(path).title)}</h3>
                <p>${escapeHtml(getRouteMeta(path).description)}</p>
              </a>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div>
        <p class="eyebrow">Source of truth</p>
        <p>Docs live in <code>/docs</code> and should be updated whenever a decision changes.</p>
      </div>
      <div class="footer-meta">
        <span>Test routes: ${env.enableAdminTestRoutes ? 'enabled in this environment' : 'blocked unless explicitly enabled'}</span>
        <span>Visible routes: ${publicPaths.join(', ')}</span>
      </div>
    </footer>
  `;
}

function renderShell(content, pathname) {
  return `
    <div class="app-shell route-${slugify(pathname)}">
      <header class="site-header panel">
        <a class="brand" href="/" data-router-link="true" aria-label="Nite Owl Angling home">
          <span class="brand-mark">NOA</span>
          <span class="brand-text">
            <strong>Nite Owl Angling</strong>
            <small>Branch-disciplined scaffold</small>
          </span>
        </a>
        <nav class="site-nav" aria-label="Primary navigation">
          ${renderRouteLinks(pathname)}
        </nav>
        <div class="header-meta">
          <span class="env-pill">${escapeHtml(env.appEnv)}</span>
          <span class="branch-pill">main / staging / dev rules documented</span>
        </div>
      </header>
      <main class="site-main" id="main">
        ${content}
      </main>
      ${renderFooter()}
    </div>
  `;
}

function setDocumentState(pathname) {
  const robots = getRobotsDirective(pathname, env);
  const meta = getRouteMeta(pathname);
  document.title = `${meta.title} | Nite Owl Angling`;
  setMetaTag('meta[name="description"]', meta.description);
  setMetaTag('meta[name="robots"]', robots);
  setCanonical(buildCanonicalUrl(pathname, env));
  document.body.dataset.route = slugify(pathname);
  document.body.dataset.testRoute = isTestRoute(pathname) ? 'true' : 'false';
}

function render() {
  const pathname = normalizePath(window.location.pathname);
  setDocumentState(pathname);

  let content;
  if (pathname === '/') {
    content = renderHome();
  } else if (pathname === '/rods') {
    content = renderCatalog('rods');
  } else if (pathname === '/reels') {
    content = renderCatalog('reels');
  } else if (pathname === '/checkout') {
    content = renderCheckout(false);
  } else if (pathname === '/checkout-test') {
    content = canAccessRoute(pathname, env) ? renderCheckout(true) : renderBlockedTestRoute(pathname);
  } else {
    content = renderNotFound(pathname);
  }

  app.innerHTML = renderShell(content, pathname);
}

function handleNavigation(event) {
  const link = event.target.closest('[data-router-link="true"]');
  if (!link) {
    return;
  }

  const url = new URL(link.href, window.location.origin);
  if (url.origin !== window.location.origin) {
    return;
  }

  event.preventDefault();
  history.pushState({}, '', url.pathname);
  render();
}

window.addEventListener('popstate', render);
document.addEventListener('click', handleNavigation);

render();
