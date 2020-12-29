$(function () {

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

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
