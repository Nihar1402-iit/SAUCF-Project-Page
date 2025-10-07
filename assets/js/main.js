(function() {
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const yearEl = document.getElementById('year');

  // Initialize year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    root.classList.add('dark');
    if (themeToggle) themeToggle.textContent = '☀️';
  }
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = root.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      themeToggle.textContent = isDark ? '☀️' : '🌙';
    });
  }

  // Mobile nav
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    // Close on link click
    navMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }));
  }
})();
