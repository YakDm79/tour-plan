const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
    hideOnClick: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});
const reviewSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
    hideOnClick: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});