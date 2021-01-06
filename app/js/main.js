$(function () {
  
  $('.detalis-content__small').slick({
    asNavFor: '.detalis-content__big',
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    draggable: false,
  });

  $('.detalis-content__big').slick({
    asNavFor: '.detalis-content__small',
    draggable: false,
    arrows: false,
    fade: true,
  });

  $('.detalis-related__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  })

  $('.detalis-content__input').styler();

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

  $('.star-product').rateYo({
    starWidth: '18px',
    spacing: "13px",
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
  });

  $('.star').rateYo({
    starWidth: '11px',
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
  });  

  lightbox.option({
    'resizeDuratuon': 200,
    'wrapAround': true,
  })

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
