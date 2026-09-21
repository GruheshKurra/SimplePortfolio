// Include expanded research and supporting work when printing the portfolio.
let printDetails = [];
window.addEventListener('beforeprint', () => {
  printDetails = [...document.querySelectorAll('details:not([open])')];
  printDetails.forEach(detail => { detail.open = true; });
});
window.addEventListener('afterprint', () => {
  printDetails.forEach(detail => { detail.open = false; });
  printDetails = [];
});

// Keep the existing analytics provider on the public domain only.
if (['gruheshkurra.com', 'www.gruheshkurra.com'].includes(window.location.hostname)) {
  const analytics = document.createElement('script');
  analytics.defer = true;
  analytics.dataset.domain = 'gruheshkurra.com';
  analytics.src = 'https://plausible.io/js/script.js';
  document.head.append(analytics);
}
