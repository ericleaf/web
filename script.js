const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

function closeMenu() {
  mobileMenu.classList.remove('active');
}
function scrollToContent() {
  document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
}