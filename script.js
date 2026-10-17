// Light / dark switch; the choice is remembered when storage is available.
const toggle = document.querySelector('.theme-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const root = document.documentElement;
    const dark = root.dataset.theme
      ? root.dataset.theme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });
}

// Show a hairline under the sticky bar once the page scrolls.
const bar = document.querySelector('.topnav');
if (bar) {
  const onScroll = () => { bar.style.borderBottomColor = window.scrollY > 8 ? 'var(--line)' : 'transparent'; };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Certificates start collapsed to six; the button reveals the rest.
document.querySelectorAll('.more').forEach(button => {
  const list = document.querySelector(button.dataset.target);
  if (!list) return;
  const label = button.textContent;
  list.classList.add('is-collapsed');
  button.hidden = false;
  button.addEventListener('click', () => {
    const collapsed = list.classList.toggle('is-collapsed');
    button.textContent = collapsed ? label : 'Show fewer';
  });
});

// Keep the existing analytics provider on the public domain only.
if (['gruheshkurra.com', 'www.gruheshkurra.com'].includes(window.location.hostname)) {
  const analytics = document.createElement('script');
  analytics.defer = true;
  analytics.dataset.domain = 'gruheshkurra.com';
  analytics.src = 'https://plausible.io/js/script.js';
  document.head.append(analytics);
}
