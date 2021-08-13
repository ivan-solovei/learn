$('.header-menu__button').click(function (e) {
  e.preventDefault();
  $('.header-menu__nav').toggleClass('active');
  $('.header-menu__button').toggleClass('active');
  $('.header-menu__overlay').toggleClass('back-dark');
  $('body').toggleClass('lock');
})

 $(".active").click(function(){
      $(".header-menu__nav").animate({
      }, 1500 );
   });

  $('.header-menu__overlay').click(function() {
  $('.header-menu__nav').removeClass('active');
  $('.header-menu__button').removeClass('active');
  $('.header-menu__overlay').removeClass('back-dark');
  $('body').removeClass('lock');
})

$('.header-menu__link').click(function() {
  $('.header-menu__nav').removeClass('active');
  $('.header-menu__button').removeClass('active');
  $('.header-menu__overlay').removeClass('back-dark');
  $('body').removeClass('lock');
})

if ( $(window).width < 768) {
  $('a.header-menu__link').click(function (e) {
    e.preventDefault();
    $('.header-menu__list').toggleClass('show');
  });
};

$(".content-info__links a").click(function() {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top
  jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 1800);
  return false;
});

$("a.header-menu__link").click(function() {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top
  jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 1800);
  return false;
});

$(".breadcrumbs__element").click(function() {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top
  jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 1300);
  return false;
});

$(".button__link").click(function() {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top
  jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 1300);
  return false;
});

// Button to Top
var btn = $('.scroll-to-top');
var btnI = $('.scroll-to-top__fa-angle-up');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
    btnI.addClass('show');
  }else {
    btn.removeClass('show');
    btnI.removeClass('show');
  }
});

btnI.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '9990');
});