const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.mobile-menu');

function closeMenu() {
  if (!toggle || !menu) return;
  toggle.setAttribute('aria-expanded', 'false');
  menu.hidden = true;
  document.body.style.overflow = '';
}

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    menu.hidden = open;
    document.body.style.overflow = open ? '' : 'hidden';
  });
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      toggle.focus();
    }
  });
}
