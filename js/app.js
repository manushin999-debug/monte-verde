/* ============================================================
   MONTE VERDE — App JS
   Cart · Language · GSAP · Nav · Shared utils
   ============================================================ */

/* ── Language ──────────────────────────────────────────────── */
const LANG = {
  nl: {
    nav_home:       'Over Ons',
    nav_menu:       'Menu',
    nav_bestelling: 'Bestelling Afhalen',
    nav_locatie:    'Locatie',
    nav_contact:    'Contact',
    cart_title:     'Mijn Bestelling',
    cart_empty:     'Uw winkelwagen is leeg',
    cart_empty_sub: 'Voeg gerechten toe vanuit het menu',
    cart_total:     'Totaal',
    cart_continue:  'Doorgaan met winkelen',
    cart_checkout:  'Afrekenen',
    checkout_title: 'Bestelling Plaatsen',
    checkout_sub:   'Vul uw gegevens in voor afhalen',
    checkout_fname: 'Voornaam',
    checkout_lname: 'Achternaam',
    checkout_phone: 'Telefoonnummer',
    checkout_time:  'Over hoelang haalt u op?',
    checkout_times: ['15 minuten','30 minuten','45 minuten','1 uur','1,5 uur','2 uur'],
    checkout_back:  'Terug naar winkelwagen',
    checkout_place: 'Bestelling Bevestigen',
    checkout_stripe:'(Betaling via Stripe volgt)',
    success_title:  'Bestelling Ontvangen!',
    success_sub:    'Bedankt! Wij bereiden uw bestelling met liefde.',
    success_close:  'Sluiten',
    toast_added:    'Toegevoegd aan bestelling',
    toast_removed:  'Verwijderd uit bestelling',
    summary_title:  'Overzicht bestelling',
  },
  en: {
    nav_home:       'About Us',
    nav_menu:       'Menu',
    nav_bestelling: 'Takeaway Order',
    nav_locatie:    'Location',
    nav_contact:    'Contact',
    cart_title:     'My Order',
    cart_empty:     'Your cart is empty',
    cart_empty_sub: 'Add dishes from the menu',
    cart_total:     'Total',
    cart_continue:  'Continue shopping',
    cart_checkout:  'Checkout',
    checkout_title: 'Place Your Order',
    checkout_sub:   'Fill in your details for pickup',
    checkout_fname: 'First name',
    checkout_lname: 'Last name',
    checkout_phone: 'Phone number',
    checkout_time:  'When will you pick up?',
    checkout_times: ['15 minutes','30 minutes','45 minutes','1 hour','1.5 hours','2 hours'],
    checkout_back:  'Back to cart',
    checkout_place: 'Confirm Order',
    checkout_stripe:'(Payment via Stripe coming soon)',
    success_title:  'Order Received!',
    success_sub:    'Thank you! We are preparing your order with love.',
    success_close:  'Close',
    toast_added:    'Added to order',
    toast_removed:  'Removed from order',
    summary_title:  'Order summary',
  }
};

/* ── State ─────────────────────────────────────────────────── */
let currentLang = localStorage.getItem('mv_lang') || 'nl';
let cart = JSON.parse(localStorage.getItem('mv_cart') || '[]');

/* ── Save helpers ──────────────────────────────────────────── */
function saveCart() {
  localStorage.setItem('mv_cart', JSON.stringify(cart));
}
function saveLang() {
  localStorage.setItem('mv_lang', currentLang);
}

/* ── Cart helpers ──────────────────────────────────────────── */
function getCartCount() {
  return cart.reduce((sum, i) => sum + i.qty, 0);
}
function getCartTotal() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}
function addToCart(id, name, price) {
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, name, price, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(LANG[currentLang].toast_added + ': ' + name);
  animateCartBadge();
}
function removeFromCart(id) {
  const name = cart.find(i => i.id === id)?.name || '';
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
  showToast(LANG[currentLang].toast_removed + ': ' + name);
}
function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  updateCartUI();
  renderCartItems();
}

/* ── Badge + button ────────────────────────────────────────── */
function updateCartUI() {
  const count = getCartCount();
  const total = getCartTotal();

  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = count;
    el.classList.toggle('visible', count > 0);
  });
  document.querySelectorAll('.cart-total-val').forEach(el => {
    el.textContent = '€' + total.toFixed(2);
  });
}
function animateCartBadge() {
  if (typeof gsap === 'undefined') return;
  gsap.fromTo('.cart-badge', { scale: 1.5 }, { scale: 1, duration: .4, ease: 'back.out(2)' });
}

/* ── Render cart items ─────────────────────────────────────── */
function renderCartItems() {
  const container = document.getElementById('cart-items-list');
  if (!container) return;

  const t = LANG[currentLang];

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="32" cy="32" r="28"/>
          <path d="M20 26h24l-3 12H23L20 26z"/>
          <circle cx="26" cy="42" r="2" fill="currentColor" stroke="none"/>
          <circle cx="38" cy="42" r="2" fill="currentColor" stroke="none"/>
          <path d="M28 20l4-4 4 4"/>
        </svg>
        <strong>${t.cart_empty}</strong>
        <span>${t.cart_empty_sub}</span>
      </div>`;
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item__name">${item.name}</div>
      <div class="qty-control">
        <button class="qty-btn delete" onclick="updateQty('${item.id}', -1)" title="Verwijder">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="updateQty('${item.id}', 1)" title="Voeg toe">+</button>
      </div>
      <div class="cart-item__price">€${(item.price * item.qty).toFixed(2)}</div>
    </div>
  `).join('');

  if (typeof gsap !== 'undefined') {
    gsap.from('.cart-item', { opacity: 0, x: 20, stagger: .06, duration: .3, ease: 'power2.out', clearProps: 'all' });
  }
}

/* ── Cart drawer ───────────────────────────────────────────── */
function openCart() {
  renderCartItems();
  updateCartUI();
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Checkout modal ────────────────────────────────────────── */
function openCheckout() {
  closeCart();
  renderCheckoutSummary();
  document.getElementById('checkout-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCheckout() {
  document.getElementById('checkout-modal').classList.remove('open');
  document.body.style.overflow = '';
}
function renderCheckoutSummary() {
  const el = document.getElementById('checkout-summary-rows');
  if (!el) return;
  const t = LANG[currentLang];
  el.innerHTML = cart.map(item =>
    `<div class="checkout-summary__row">
      <span>${item.name} × ${item.qty}</span>
      <span>€${(item.price * item.qty).toFixed(2)}</span>
    </div>`
  ).join('') + `
    <div class="checkout-summary__row total">
      <span>${t.cart_total}</span>
      <span>€${getCartTotal().toFixed(2)}</span>
    </div>`;
}
function submitOrder(e) {
  e.preventDefault();
  const fname = document.getElementById('cf-fname').value.trim();
  const lname = document.getElementById('cf-lname').value.trim();
  const phone = document.getElementById('cf-phone').value.trim();
  const time  = document.getElementById('cf-time').value;
  if (!fname || !lname || !phone || !time) return;

  // Show success state
  document.getElementById('checkout-form-content').style.display = 'none';
  document.getElementById('order-success').classList.add('show');

  // Clear cart
  cart = [];
  saveCart();
  updateCartUI();
}

/* ── Toast ─────────────────────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.querySelector('.toast__msg').textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

/* ── Language toggle ───────────────────────────────────────── */
function setLang(lang) {
  currentLang = lang;
  saveLang();
  applyLang();
  updateCartUI();
}
function applyLang() {
  const t = LANG[currentLang];
  // Update lang buttons
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langBtn === currentLang);
  });
  // Update all [data-t] elements
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.dataset.t;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  // Swap data-t-nl / data-t-en
  document.querySelectorAll('[data-t-nl]').forEach(el => {
    el.textContent = currentLang === 'nl' ? el.dataset.tNl : el.dataset.tEn;
  });
  // Checkout time options
  const timeSelect = document.getElementById('cf-time');
  if (timeSelect) {
    const currentVal = timeSelect.value;
    timeSelect.innerHTML = `<option value="">${t.checkout_time}</option>` +
      t.checkout_times.map((opt, i) => `<option value="${i+1}">${opt}</option>`).join('');
    timeSelect.value = currentVal;
  }
  // Cart drawer strings
  const cartTitle = document.getElementById('cart-drawer-title');
  if (cartTitle) cartTitle.textContent = t.cart_title;
  const checkoutTitle = document.getElementById('checkout-title');
  if (checkoutTitle) checkoutTitle.textContent = t.checkout_title;
  // Re-render cart
  renderCartItems();
}

/* ── Nav active page ───────────────────────────────────────── */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href') || '';
    const isActive = href === path || (path === '' && href === 'index.html');
    link.classList.toggle('active', isActive);
  });
}

/* ── Nav scroll shadow ─────────────────────────────────────── */
function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

/* ── Mobile nav ────────────────────────────────────────────── */
function initMobileNav() {
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;
  let open = false;
  hamburger.addEventListener('click', () => {
    open = !open;
    mobileNav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      open = false;
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── GSAP scroll reveals (disabled) ───────────────────────── */
function initScrollReveals() {}

/* ── Page transition (link clicks) ────────────────────────── */
function initPageTransitions() {
  if (typeof gsap === 'undefined') return;
  const overlay = document.getElementById('page-overlay');
  if (!overlay) return;

  // Fade in on load
  gsap.fromTo(overlay,
    { scaleY: 1, transformOrigin: 'bottom' },
    { scaleY: 0, duration: .6, ease: 'power3.inOut', delay: .1 }
  );

  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('http')) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      gsap.fromTo(overlay,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1, duration: .5, ease: 'power3.inOut',
          onComplete: () => { window.location.href = href; }
        }
      );
    });
  });
}

/* ── Build shared HTML (nav, cart, checkout, toast) ────────── */
function buildSharedUI(activePage) {
  const t = LANG[currentLang];
  const pages = [
    { key: 'nav_home',       href: 'index.html' },
    { key: 'nav_menu',       href: 'menu.html' },
    { key: 'nav_bestelling', href: 'bestelling.html' },
    { key: 'nav_locatie',    href: 'locatie.html' },
    { key: 'nav_contact',    href: 'contact.html' },
  ];

  // Nav
  const navEl = document.getElementById('main-nav');
  if (navEl) {
    navEl.innerHTML = `
      <a class="nav__logo" href="index.html">
        <img src="logo.png" alt="Monte Verde">
        <span>Monte Verde</span>
      </a>
      <nav class="nav__links">
        ${pages.map(p => `<a href="${p.href}" class="${p.href === activePage ? 'active' : ''}">${t[p.key]}</a>`).join('')}
      </nav>
      <div class="nav__right">
        <div class="lang-toggle">
          <button data-lang-btn="nl" onclick="setLang('nl')" class="${currentLang==='nl'?'active':''}">NL</button>
          <button data-lang-btn="en" onclick="setLang('en')" class="${currentLang==='en'?'active':''}">EN</button>
        </div>
        <button class="cart-btn" onclick="openCart()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <span data-t="cart_title">${t.cart_title}</span>
          <span class="cart-badge">${getCartCount() || 0}</span>
        </button>
        <button class="nav__hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>`;
    if (getCartCount() > 0) {
      navEl.querySelector('.cart-badge').classList.add('visible');
    }
  }

  // Mobile nav
  const mobileNavEl = document.getElementById('mobile-nav');
  if (mobileNavEl) {
    mobileNavEl.innerHTML = pages.map(p =>
      `<a href="${p.href}">${t[p.key]}</a>`
    ).join('');
  }

  // Cart drawer
  const cartDrawer = document.getElementById('cart-drawer');
  if (cartDrawer) {
    cartDrawer.innerHTML = `
      <div class="cart-drawer__header">
        <h2 class="cart-drawer__title" id="cart-drawer-title">${t.cart_title}</h2>
        <button class="cart-close" onclick="closeCart()">✕</button>
      </div>
      <div class="cart-items" id="cart-items-list"></div>
      <div class="cart-drawer__footer">
        <div class="cart-total">
          <span data-t="cart_total">${t.cart_total}</span>
          <span class="cart-total-val">€${getCartTotal().toFixed(2)}</span>
        </div>
        <div class="cart-actions">
          <button class="btn btn--outline-dark" onclick="closeCart()" data-t="cart_continue">${t.cart_continue}</button>
          <button class="btn btn--red" onclick="openCheckout()" data-t="cart_checkout">${t.cart_checkout}</button>
        </div>
      </div>`;
  }

  // Checkout modal
  const checkoutModal = document.getElementById('checkout-modal');
  if (checkoutModal) {
    checkoutModal.innerHTML = `
      <div class="checkout-box">
        <div id="checkout-form-content">
          <h2 id="checkout-title">${t.checkout_title}</h2>
          <p>${t.checkout_sub}</p>
          <div class="checkout-summary" id="checkout-summary-rows"></div>
          <form onsubmit="submitOrder(event)">
            <div class="form-row">
              <div class="form-group">
                <label>${t.checkout_fname}</label>
                <input id="cf-fname" type="text" required placeholder="${t.checkout_fname}">
              </div>
              <div class="form-group">
                <label>${t.checkout_lname}</label>
                <input id="cf-lname" type="text" required placeholder="${t.checkout_lname}">
              </div>
            </div>
            <div class="form-group">
              <label>${t.checkout_phone}</label>
              <input id="cf-phone" type="tel" required placeholder="+31 6 00 00 00 00">
            </div>
            <div class="form-group">
              <label>${t.checkout_time}</label>
              <select id="cf-time" required>
                <option value="">${t.checkout_time}</option>
                ${t.checkout_times.map((opt,i) => `<option value="${i+1}">${opt}</option>`).join('')}
              </select>
            </div>
            <p style="font-size:12px;color:var(--text-muted);margin-bottom:16px;">${t.checkout_stripe}</p>
            <div class="checkout-actions">
              <button type="button" class="btn btn--outline-dark btn--sm" onclick="closeCheckout()">${t.checkout_back}</button>
              <button type="submit" class="btn btn--red">${t.checkout_place}</button>
            </div>
          </form>
        </div>
        <div class="order-success" id="order-success">
          <div class="order-success__icon">🎉</div>
          <h2 style="font-family:var(--font-display);font-size:28px;margin-bottom:8px;">${t.success_title}</h2>
          <p>${t.success_sub}</p>
          <button class="btn btn--primary" style="margin-top:20px;" onclick="closeCheckout();document.getElementById('order-success').classList.remove('show');document.getElementById('checkout-form-content').style.display=''">${t.success_close}</button>
        </div>
      </div>`;
  }

  // Toast
  const toastEl = document.getElementById('toast');
  if (toastEl) {
    toastEl.innerHTML = `<span class="toast__dot"></span><span class="toast__msg"></span>`;
  }

  // Footer nav links
  document.querySelectorAll('[data-footer-nav]').forEach(el => {
    el.innerHTML = pages.map(p => `<li><a href="${p.href}">${t[p.key]}</a></li>`).join('');
  });
}

/* ── Init ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Determine active page from filename
  const pageName = window.location.pathname.split('/').pop() || 'index.html';
  buildSharedUI(pageName || 'index.html');
  applyLang();
  updateCartUI();
  initNavScroll();
  initMobileNav();
  initPageTransitions();
  // Give GSAP time to load
  setTimeout(initScrollReveals, 100);
});
