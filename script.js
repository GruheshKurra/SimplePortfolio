// Certificates start collapsed to eight; the button reveals the rest.
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
