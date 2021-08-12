$('.header-menu__button').click(function (e) {
  e.preventDefault();
  $('.header-menu__nav').toggleClass('active');
  $('.header-menu__button').toggleClass('active');
  $('.header-menu__overlay').toggleClass('back-dark');
  $('.header-menu__nav').toggleClass('color');
  $('body').toggleClass('lock');
})

 $(".active").click(function(){
      $(".header-menu__nav").animate({
      }, 1500 );
   });

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


const menuBtn = $('.header-menu__button'),
      menu    = $('.header-menu__nav');

// $(document).click(function (e) {
//   if ( !menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
//       menu.slideUp();
//       menuBtn.removeClass('is-active');
//   };
// });

// Button to Top
var btn = $('.scroll-to-top');
var btnI = $('.fa-angle-up');

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