$(document).ready(function () {
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

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function () {
  console.log("Клик по кнопке меню");
  document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible');
});
  
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  function closeModalKey(event) {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
		    closeModalKey();
		}
  });
    // Закрытие модального окна по клику за его пределами  
  $(document).mouseup(function (e) {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    if (!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0){
    closeModalKey();
    }
  });
});