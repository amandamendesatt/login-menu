const mobileMenu = document.getElementById('mobile-menu');

function toggleMenu() {
const nav = document.getElementById('nav');
nav.classList.toggle('active');
}
mobileMenu.addEventListener('click', toggleMenu);
