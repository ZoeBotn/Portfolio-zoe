/* ============================================================
   LANGUAGE TOGGLE
   ============================================================ */
function getLang() {
  return localStorage.getItem('lang') || 'fr';
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateLangToggle(lang);
  updateCVLinks(lang);
}

function updateCVLinks(lang) {
  const fr = 'cv-zoe-bouton-fr.pdf';
  const en = 'cv-zoe-bouton-en.pdf';
  const file = lang === 'en' ? en : fr;
  const download = lang === 'en' ? 'cv-zoe-bouton-en.pdf' : 'cv-zoe-bouton-fr.pdf';
  document.querySelectorAll('[data-cv]').forEach(el => {
    el.setAttribute('href', file);
    el.setAttribute('download', download);
  });
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Ticker: duplicate content for seamless loop
  const tickerContent = document.querySelector('.ticker-content');
  if (tickerContent && t['ticker']) {
    const text = t['ticker'];
    tickerContent.innerHTML = text + text;
  }
}

function updateLangToggle(lang) {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  btn.textContent = lang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR';
  btn.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!burger || !mobileMenu) return;

  burger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
    });
  });
}

/* ============================================================
   NAVBAR SCROLL SHADOW
   ============================================================ */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

/* ============================================================
   SCROLL ANIMATIONS (IntersectionObserver)
   ============================================================ */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-up');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

/* ============================================================
   LANGUAGE PROGRESS BARS
   ============================================================ */
function initLangBars() {
  const bars = document.querySelectorAll('.lang-bar');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const fill = bar.querySelector('.lang-fill');
        const target = bar.getAttribute('data-width');
        if (fill && target) {
          fill.style.width = target + '%';
        }
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
}

/* ============================================================
   ACTIVE NAV LINK
   ============================================================ */
function setActiveNavLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const lang = getLang();
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateLangToggle(lang);
  updateCVLinks(lang);

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setLang(getLang() === 'fr' ? 'en' : 'fr');
    });
  }

  initMobileMenu();
  initNavbarScroll();
  initScrollAnimations();
  initLangBars();
  setActiveNavLink();
});
