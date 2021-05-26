$(document).ready(function () {
  new Swiper(".hotel-slider", {
    loop: !0,
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
      hideOnClick: !1,
    },
    keyboard: { enabled: !0, onlyInViewport: !1 },
  }),
    new Swiper(".reviews-slider", {
      loop: !0,
      navigation: {
        nextEl: ".reviews-slider__button--next",
        prevEl: ".reviews-slider__button--prev",
        hideOnClick: !1,
      },
      keyboard: { enabled: !0, onlyInViewport: !1 },
    });
  document.querySelector(".menu-button").addEventListener("click", function () {
    console.log("Клик по кнопке меню"),
      document
        .querySelector(".navbar-bottom")
        .classList.toggle("navbar-bottom--visible");
  });
  var e = $("[data-toggle=modal]"),
    o = $(".modal__close");
  function l() {
    var e = $(".modal__overlay"),
      o = $(".modal__dialog");
    e.removeClass("modal__overlay--visible"),
      o.removeClass("modal__dialog--visible");
  }
  e.on("click", function () {
    var e = $(".modal__overlay"),
      o = $(".modal__dialog");
    e.addClass("modal__overlay--visible"), o.addClass("modal__dialog--visible");
  }),
    o.on("click", function (e) {
      e.preventDefault();
      var o = $(".modal__overlay"),
        e = $(".modal__dialog");
      o.removeClass("modal__overlay--visible"),
        e.removeClass("modal__dialog--visible");
    }),
    $(document).keydown(function (e) {
      27 === e.keyCode && l();
    }),
    $(document).mouseup(function (e) {
      $(".modal__overlay");
      var o = $(".modal__dialog");
      o.is(e.target) || 0 !== o.has(e.target).length || l();
    }),
    $(".phone").mask("+0 (000) 000-00-00"),
    $(".form").each(function () {
      $(this).validate({
        errorClass: "invalid",
        rules: {
          name: { required: !0, minlength: 2 },
          phone: { required: !0, minlength: 18 },
        },
        messages: {
          name: {
            required: "Please specify your name",
            minlength: jQuery.validator.format(
              "At least 2 characters required"
            ),
          },
          email: {
            required: "Please, enter your e-mail",
            email:
              "Your email address must be in the format of name@domain.com",
          },
          phone: {
            required: "Please, enter your phone number",
            minlength: jQuery.validator.format("Example: +1 (234) 567-11-11"),
          },
        },
      });
    }),
    AOS.init();
});
