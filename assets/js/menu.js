const menuMobile = document.querySelector('.menu-mobile');
const menuMobileBtn = document.querySelector('.nav-menu-mobile');
const menuMobileOverlay = document.querySelector('.menu-mobile-overlay');

menuMobileOverlay.addEventListener('click', function() {
  menuMobile.style.display = 'none';
  
});

menuMobileBtn.addEventListener('click', function() {
  menuMobile.style.display = 'block';
});
