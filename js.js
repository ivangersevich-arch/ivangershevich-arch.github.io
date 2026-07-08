// Автоматический год в футере
document.getElementById('year').textContent = new Date().getFullYear();

// Плавная подсветка активного пункта меню при скролле
const sections = document.querySelectorAll('section[id], #top');
const links = document.querySelectorAll('.menu a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  links.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--acid)' : '';
  });
});
