// Mobile nav toggle
const navToggleButton = document.querySelector('.nav-toggle');
const primaryMenu = document.getElementById('primary-menu');

if (navToggleButton && primaryMenu) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = primaryMenu.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scrolling enhancement for in-page anchors
document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute('href');
  if (!id || id === '#') return;
  const target = document.querySelector(id);
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // Close mobile menu after navigation
  if (primaryMenu && primaryMenu.classList.contains('open')) {
    primaryMenu.classList.remove('open');
    navToggleButton?.setAttribute('aria-expanded', 'false');
  }
});

// Set current year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = String(new Date().getFullYear());
}


