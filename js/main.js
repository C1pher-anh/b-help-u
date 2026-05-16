/* ===== Theme Toggle ===== */
(function() {
  const html = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const iconDark = toggle?.querySelector('.theme-icon-dark');
  const iconLight = toggle?.querySelector('.theme-icon-light');

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (iconDark && iconLight) {
      iconDark.style.display = theme === 'dark' ? 'none' : '';
      iconLight.style.display = theme === 'dark' ? '' : 'none';
    }
  }

  // Init from saved preference or system preference
  const saved = localStorage.getItem('theme');
  if (saved) {
    setTheme(saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  }

  toggle?.addEventListener('click', () => {
    setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  // Listen for system changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
})();

/* ===== Navbar Scroll Effect ===== */
(function() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        navbar.classList.toggle('scrolled', window.scrollY > 10);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

/* ===== Tool Card Mouse Tracking ===== */
(function() {
  document.querySelectorAll('.tool-card:not(.placeholder)').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });
})();
