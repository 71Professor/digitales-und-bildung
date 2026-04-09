// Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const navUl = document.querySelector('nav ul');

  if (toggle && navUl) {
    toggle.addEventListener('click', function () {
      navUl.classList.toggle('open');
      toggle.setAttribute('aria-expanded', navUl.classList.contains('open'));
    });
  }

  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
