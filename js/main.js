const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
    hideOnClick: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});