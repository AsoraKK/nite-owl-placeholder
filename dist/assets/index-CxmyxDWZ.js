(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const m={},$="https://niteowlangling.co.za",w=typeof window<"u"?window.location.origin:$,u=["/","/rods","/reels","/checkout"],E=["/checkout-test","/cart-test"],v={"/":{title:"Command Center",description:"Branch, release, and environment overview for the Nite Owl Angling scaffold."},"/rods":{title:"Rods",description:"Catalog scaffold for rods with filters, product cards, and release states."},"/reels":{title:"Reels",description:"Catalog scaffold for reels with filters, product cards, and release states."},"/checkout":{title:"Checkout",description:"Checkout scaffold with form blocks, CTA states, and release safeguards."},"/checkout-test":{title:"Checkout Test",description:"Hidden test route for checkout verification and safeguard checks."}},T=[{path:"/",kind:"public",purpose:"Project command center and implementation overview."},{path:"/rods",kind:"public",purpose:"Product listing scaffold for rod collections."},{path:"/reels",kind:"public",purpose:"Product listing scaffold for reel collections."},{path:"/checkout",kind:"public",purpose:"Primary checkout scaffold for order completion."},{path:"/checkout-test",kind:"test-only",purpose:"Hidden verification route for checkout flows and high-risk changes."},{path:"/cart-test",kind:"reserved-test",purpose:"Reserved hidden test route pattern for cart verification if needed later."}],A={rods:[{name:'Tideglass 7"6" Travel Rod',spec:"Medium-fast, 4-piece, braid-friendly",price:"R 2,480",notes:"Salt-ready travel blank for long weekends and mobile rigs.",tags:["travel","saltwater","mid-weight"]},{name:'Reefline 6"9" Boat Rod',spec:"Fast action, composite spine, durable guides",price:"R 1,920",notes:"Scaffold card for boat work, live bait, and precision retrieves.",tags:["boat","composite","durable"]},{name:'Nightcast 8"2" Distance Rod',spec:"Progressive cast load, graphite blank",price:"R 2,950",notes:"Long-distance option for surf and estuary work.",tags:["distance","surf","graphite"]}],reels:[{name:"Moonwake 3000 Reel",spec:"Sealed drag, shallow spool, braid ready",price:"R 1,780",notes:"Balanced for light spinning setups and daily use.",tags:["spinning","braid-ready","sealed"]},{name:"Harborline 5000 Reel",spec:"High-capacity spool, corrosion resistant",price:"R 2,240",notes:"A workhorse option for mixed freshwater and saltwater fishing.",tags:["capacity","corrosion","workhorse"]},{name:"Lowlight 4000 Reel",spec:"Smooth retrieve, carbon drag, compact frame",price:"R 2,060",notes:"Designed for controlled retrieves and neat balancing.",tags:["carbon-drag","compact","smooth"]}]},S=[{name:"loading",label:"Loading",copy:"Use skeletons and muted placeholders while catalogue data is fetched."},{name:"error",label:"Error",copy:"Show a recovery path, not a dead end, when product data or checkout fails."},{name:"empty",label:"Empty",copy:"State for filtered results or a new category with no items yet."},{name:"success",label:"Success",copy:"Use after form submission, order confirmation, or route completion."}],_={rods:["Length","Action","Species","Budget"],reels:["Size","Drag","Ratio","Price"],checkout:["Shipping","Payment","Review"]},R=[{title:"Contact",summary:"Checkout form block for customer details and order updates.",fields:["Name","Email","Phone"]},{title:"Delivery",summary:"Scaffold for shipping address, delivery choice, and notes.",fields:["Address","City","Province","Postal code"]},{title:"Payment",summary:"Placeholder for gateway selection and payment verification.",fields:["Payment provider","Card holder","Reference"]}],P=[{label:"Items",value:"3"},{label:"Shipping",value:"Calculated later"},{label:"Protection",value:"Test routes hidden"}],C=["Build passes","Lint passes","Tests pass","Visible pages checked on mobile and desktop","Checkout flow verified","Hidden test access verified for risky changes"],I=[{label:"main",value:"Production"},{label:"staging",value:"Staging"},{label:"dev",value:"Development"}],L=[{env:"development",branch:"dev",domain:"dev.niteowlangling.co.za",database:"development-only test data",credentials:"sandbox only"},{env:"staging",branch:"staging",domain:"staging.niteowlangling.co.za",database:"isolated realistic test data",credentials:"sandbox only"},{env:"production",branch:"main",domain:"niteowlangling.co.za",database:"production data only",credentials:"live only"}];function N(){const e=typeof import.meta<"u"&&m?m:{};return{appEnv:e.VITE_APP_ENV??"development",appBaseUrl:e.VITE_APP_BASE_URL??w,apiBaseUrl:e.VITE_API_BASE_URL??"",databaseUrl:e.VITE_DATABASE_URL??"",assetsBaseUrl:e.VITE_ASSETS_BASE_URL??"",paymentProvider:e.VITE_PAYMENT_PROVIDER??"sandbox",paymentPublicKey:e.VITE_PAYMENT_PUBLIC_KEY??"",paymentSecretKey:e.VITE_PAYMENT_SECRET_KEY??"",paymentWebhookSecret:e.VITE_PAYMENT_WEBHOOK_SECRET??"",cloudflareAccountId:e.VITE_CLOUDFLARE_ACCOUNT_ID??"",cloudflareProjectName:e.VITE_CLOUDFLARE_PROJECT_NAME??"nite-owl-placeholder",cloudflareApiToken:e.VITE_CLOUDFLARE_API_TOKEN??"",sessionSecret:e.VITE_SESSION_SECRET??"",adminEmailAllowlist:e.VITE_ADMIN_EMAIL_ALLOWLIST??"",enableAdminTestRoutes:String(e.VITE_ENABLE_ADMIN_TEST_ROUTES??"false")==="true",noindexTestRoutes:String(e.VITE_NOINDEX_TEST_ROUTES??"true")!=="false"}}function l(e="/"){const t=e.split("?")[0].split("#")[0].trim()||"/";return t!=="/"&&t.endsWith("/")?t.slice(0,-1):t}function f(e){return E.includes(l(e))}function d(e){return v[l(e)]??v["/"]}function O(e,t){return!f(e)||!!(t!=null&&t.enableAdminTestRoutes)}function B(e,t){return f(e)&&((t==null?void 0:t.noindexTestRoutes)??!0)?"noindex, nofollow, noarchive":"index, follow"}function U(e,t){const a=l(e);return`${String((t==null?void 0:t.appBaseUrl)??w).replace(/\/+$/,"")}${a==="/"?"/":a}`}const M=document.querySelector("#app"),r=N();function s(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function k(e){return l(e).replaceAll("/","-").replaceAll("--","-").replace(/^-/,"")||"home"}function g(e,t){let a=document.head.querySelector(e);if(!a){a=document.createElement("meta");const o=e.match(/name="([^"]+)"/),n=e.match(/property="([^"]+)"/);o?a.setAttribute("name",o[1]):n&&a.setAttribute("property",n[1]),document.head.appendChild(a)}a.setAttribute("content",t)}function V(e){let t=document.head.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.setAttribute("rel","canonical"),document.head.appendChild(t)),t.setAttribute("href",e)}function D(e){return u.map(t=>{const a=d(t);return`
        <a class="nav-link${l(e)===t?" is-active":""}" href="${t}" data-router-link="true">
          <span>${s(a.title)}</span>
          <small>${s(a.description)}</small>
        </a>
      `}).join("")}function x(){return S.map(e=>`
        <article class="state-card">
          <p class="eyebrow">${s(e.label)}</p>
          <p>${s(e.copy)}</p>
        </article>
      `).join("")}function j(e){return`
    <article class="product-card">
      <div class="product-card__top">
        <div>
          <p class="eyebrow">Product card</p>
          <h3>${s(e.name)}</h3>
        </div>
        <strong class="product-price">${s(e.price)}</strong>
      </div>
      <p class="product-spec">${s(e.spec)}</p>
      <p class="product-copy">${s(e.notes)}</p>
      <div class="tag-row">
        ${e.tags.map(t=>`<span class="tag">${s(t)}</span>`).join("")}
      </div>
    </article>
  `}function H(e){return`
    <section class="panel filter-panel" aria-label="${s(e)} filters">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Filter controls</p>
          <h2>${s(e)} refinement</h2>
        </div>
        <span class="panel-chip">Hidden from public nav</span>
      </div>
      <div class="filter-row">
        ${_[e].map(t=>`<button class="filter-chip" type="button">${s(t)}</button>`).join("")}
      </div>
    </section>
  `}function c(e,t,a,o){return`
    <section class="hero panel">
      <div class="hero-copy">
        <p class="eyebrow">${s(o)}</p>
        <h1>${s(t)}</h1>
        <p class="lede">${s(a)}</p>
      </div>
      <aside class="hero-aside">
        <div class="metric">
          <span>Branch model</span>
          <strong>feature / dev / staging / main</strong>
        </div>
        <div class="metric">
          <span>Environment</span>
          <strong>${s(r.appEnv)}</strong>
        </div>
        <div class="metric">
          <span>Route</span>
          <strong>${s(e)}</strong>
        </div>
      </aside>
    </section>
  `}function F(){return`
    ${c("/","Nite Owl Angling scaffold","A branch-disciplined starting point for rods, reels, checkout, and hidden test routes.","Operating brief")}
    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Route inventory</p>
          <h2>Public pages and test routes</h2>
        </div>
        <span class="panel-chip">Source of truth in docs</span>
      </div>
      <div class="route-grid">
        ${T.filter(e=>e.kind!=="reserved-test").map(e=>`
              <article class="route-card">
                <p class="eyebrow">${s(e.kind)}</p>
                <h3>${s(e.path)}</h3>
                <p>${s(e.purpose)}</p>
              </article>
            `).join("")}
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
        ${I.map(e=>`
              <article class="status-card">
                <strong>${s(e.label)}</strong>
                <p>${s(e.value)}</p>
              </article>
            `).join("")}
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
        ${C.map(e=>`<li>${s(e)}</li>`).join("")}
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
        ${L.map(e=>`
              <article class="status-card">
                <strong>${s(e.env)}</strong>
                <p>${s(e.branch)} → ${s(e.domain)}</p>
                <small>${s(e.database)}</small>
                <small>${s(e.credentials)}</small>
              </article>
            `).join("")}
      </div>
    </section>
  `}function b(e){const t=A[e];return`
    ${c(`/${e}`,`${e[0].toUpperCase()}${e.slice(1)} collection`,`Scaffold layout for ${e} browsing, product cards, filter controls, and state handling.`,"Catalog")}
    ${H(e)}
    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Product cards</p>
          <h2>Reusable catalog card</h2>
        </div>
      </div>
      <div class="product-grid">
        ${t.map(a=>j(a)).join("")}
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
        ${x()}
      </div>
    </section>
  `}function y(e=!1){return`
    ${c("/checkout","Checkout scaffold","Form blocks, CTA states, and minimal safeguards for high-risk payment work.","Checkout")}
    ${e?'<div class="test-banner panel">Hidden test route: this path stays noindex, excluded from navigation, and reserved for admin or verification access.</div>':""}
    <section class="checkout-grid">
      <form class="panel form-panel">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Forms</p>
            <h2>Checkout blocks</h2>
          </div>
        </div>
        <div class="form-stack">
          ${R.map(t=>`
                <fieldset class="form-block">
                  <legend>${s(t.title)}</legend>
                  <p>${s(t.summary)}</p>
                  <div class="field-grid">
                    ${t.fields.map(a=>`<label><span>${s(a)}</span><input type="text" placeholder="${s(a)}" /></label>`).join("")}
                  </div>
                </fieldset>
              `).join("")}
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
            ${P.map(t=>`<div class="summary-row"><span>${s(t.label)}</span><strong>${s(t.value)}</strong></div>`).join("")}
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
  `}function K(e){return`
    ${c(e,"Restricted test route","This route is hidden until admin or verification access is explicitly enabled in the environment.","Test route")}
    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Access control</p>
          <h2>Hidden by default</h2>
        </div>
      </div>
      <div class="blocked-copy">
        <p><strong>${s(e)}</strong> is reserved for validation work and is not linked from the public navigation.</p>
        <p>Enable <code>VITE_ENABLE_ADMIN_TEST_ROUTES=true</code> in the appropriate environment to render the test-only checkout scaffold.</p>
      </div>
    </section>
  `}function q(e){return`
    ${c(e,"Route not found","The requested path is not part of the current scaffold.","404")}
    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Recovery</p>
          <h2>Use a defined route</h2>
        </div>
      </div>
      <div class="route-grid">
        ${u.filter(t=>t!=="/").map(t=>`
              <a class="route-card route-card--link" href="${t}" data-router-link="true">
                <p class="eyebrow">${s(t)}</p>
                <h3>${s(d(t).title)}</h3>
                <p>${s(d(t).description)}</p>
              </a>
            `).join("")}
      </div>
    </section>
  `}function z(){return`
    <footer class="site-footer">
      <div>
        <p class="eyebrow">Source of truth</p>
        <p>Docs live in <code>/docs</code> and should be updated whenever a decision changes.</p>
      </div>
      <div class="footer-meta">
        <span>Test routes: ${r.enableAdminTestRoutes?"enabled in this environment":"blocked unless explicitly enabled"}</span>
        <span>Visible routes: ${u.join(", ")}</span>
      </div>
    </footer>
  `}function Y(e,t){return`
    <div class="app-shell route-${k(t)}">
      <header class="site-header panel">
        <a class="brand" href="/" data-router-link="true" aria-label="Nite Owl Angling home">
          <span class="brand-mark">NOA</span>
          <span class="brand-text">
            <strong>Nite Owl Angling</strong>
            <small>Branch-disciplined scaffold</small>
          </span>
        </a>
        <nav class="site-nav" aria-label="Primary navigation">
          ${D(t)}
        </nav>
        <div class="header-meta">
          <span class="env-pill">${s(r.appEnv)}</span>
          <span class="branch-pill">main / staging / dev rules documented</span>
        </div>
      </header>
      <main class="site-main" id="main">
        ${e}
      </main>
      ${z()}
    </div>
  `}function W(e){const t=B(e,r),a=d(e);document.title=`${a.title} | Nite Owl Angling`,g('meta[name="description"]',a.description),g('meta[name="robots"]',t),V(U(e,r)),document.body.dataset.route=k(e),document.body.dataset.testRoute=f(e)?"true":"false"}function h(){const e=l(window.location.pathname);W(e);let t;e==="/"?t=F():e==="/rods"?t=b("rods"):e==="/reels"?t=b("reels"):e==="/checkout"?t=y(!1):e==="/checkout-test"?t=O(e,r)?y(!0):K(e):t=q(e),M.innerHTML=Y(t,e)}function J(e){const t=e.target.closest('[data-router-link="true"]');if(!t)return;const a=new URL(t.href,window.location.origin);a.origin===window.location.origin&&(e.preventDefault(),history.pushState({},"",a.pathname),h())}window.addEventListener("popstate",h);document.addEventListener("click",J);h();
