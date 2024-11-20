// Mobile menu functionality
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-button');
const mobileMenu = document.querySelector('.mobile-menu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});