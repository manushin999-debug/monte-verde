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

/* ── Cart helpers (cart system disabled — no-op stubs kept for safety) ── */
function getCartCount() { return 0; }
function getCartTotal() { return 0; }
function addToCart() {}
function removeFromCart() {}
function updateQty() {}
function updateCartUI() {}
function animateCartBadge() {}
function renderCartItems() {}
function openCart() {}
function closeCart() {}
function openCheckout() {}
function closeCheckout() {}
function renderCheckoutSummary() {}
function submitOrder(e) { if (e) e.preventDefault(); }

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
        <a href="tel:0206751165" class="cart-btn" style="text-decoration:none;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.91-.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
          </svg>
          <span>020 675 11 65</span>
        </a>
        <button class="nav__hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>`;
  }

  // Mobile nav
  const mobileNavEl = document.getElementById('mobile-nav');
  if (mobileNavEl) {
    mobileNavEl.innerHTML = pages.map(p =>
      `<a href="${p.href}">${t[p.key]}</a>`
    ).join('');
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
