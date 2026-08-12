document.getElementById('year').textContent = new Date().getFullYear();

const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('cv-theme', theme);
}

const savedTheme = localStorage.getItem('cv-theme');
if (savedTheme) applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

document.querySelectorAll('.section-nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

const langToggle = document.getElementById('langToggle');
const pageTitle = document.getElementById('pageTitle');
const pageDescription = document.getElementById('pageDescription');

function applyLanguage(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  pageTitle.textContent = dict.title;
  pageDescription.setAttribute('content', dict.metaDescription);
  langToggle.textContent = lang === 'en' ? 'KZ' : 'EN';
  localStorage.setItem('cv-lang', lang);
}

const savedLang = localStorage.getItem('cv-lang');
applyLanguage(savedLang === 'kk' ? 'kk' : 'en');

langToggle.addEventListener('click', () => {
  const current = document.documentElement.lang === 'kk' ? 'kk' : 'en';
  applyLanguage(current === 'en' ? 'kk' : 'en');
});
