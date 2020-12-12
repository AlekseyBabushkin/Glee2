$(function(){

 $('.slider__top').slick({
   dots: true,
   arrows:false,
 });

 $('.button-nav__item').click(function(){
   $('.button-nav__item').toggleClass('button-nav__item--active')
 });
  

//  $('.products').on('click', function(){
//    $('.button-nav__item').toggleClass('button-nav__item--active')
//  })

});