$(function () {

  $('.slider-header__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 3000,
  });

  var products = mixitup('.products__items', {
    selectors: {
      control: '.button-nav__item'
    }
  });

  var design = mixitup('.design__list', {
    selectors: {
      control: '.design__btn'
    }
  });

});
