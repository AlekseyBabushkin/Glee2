$(function () {

  $('.slider__top').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 3000,
  });

  var products = mixitup('.products__items', {
    selectors: {
      control: 'products__btn'
    }
  });

  var design = mixitup('.design__items'{
    selectors: {
      control: 'design__btn'
    }
  });

});
