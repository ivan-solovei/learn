const cart = [];
const goods = ['cakes', 'cookies', 'croissants', 'cupcakes'];


$('.header-menu__button').click(function (e) {
  e.preventDefault();
  $('.header-menu__nav').toggleClass('active');
  $('.header-menu__button').toggleClass('active');
  $('.header-menu__overlay').toggleClass('back-dark');
  $('body').toggleClass('lock');
})

$(".active").click(function(){
  $(".header-menu__nav-desktop").animate({
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
var btnI = $('.scroll-to-top__finger-area');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
    btnI.addClass('show');
  } else {
    btn.removeClass('show');
    btnI.removeClass('show');
  }
});

btnI.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '9990');
});

// Shopping Basket

// Click on icon and show me basket
$('.header-menu__basket-icon').click(function (e) {
  e.preventDefault();
  $('.shopping-basket').toggleClass('show');
  $('.header-menu__overlay').toggleClass('back-dark');
  $('body').toggleClass('lock');
})

// Click outside of block
$('.header-menu__overlay').click(function() {
  $('.shopping-basket').removeClass('show');
  $('.header-menu__overlay').removeClass('back-dark');
  $('body').removeClass('lock');
});

// Click on btn
$('.shopping-basket__button').click(function() {
  $('.shopping-basket').removeClass('show');
  $('.header-menu__overlay').removeClass('back-dark');
  $('body').removeClass('lock');
});

// Click on info__icon
goods.forEach(goodName => {
  $(`.info__icon--${goodName}`).click(function() {
    $(`.info__icon--${goodName} + .info__icon-check `).toggleClass('show');
  });
})

// ON/OFF
const renderCart = () => {
  const cartElement = document.querySelector('.shopping-basket__content');

  cartElement.innerHTML = '';

  cart.forEach((className) => {
    const good = document.querySelector(className);
    cartElement.appendChild(good.cloneNode(true));
  });
}

// Into basket
goods.forEach(goodName => {
  $(`.info__icon--${goodName}`).click(function () {
    const goodClass = '.' + goodName;
    const index = cart.findIndex(el => el === goodClass);

    if (index === -1) {
      cart.unshift(goodClass);
    }else {
      cart.splice(index, 1);
    }
    renderCart();
  });
});

// Basket Counter

const shoppingBasketMenu = document.querySelector('shopping-basket-menu');

const ACTION = {
  PLUS: 'plus',
  MINUS: 'minus'
};

const getItemSubTotalPrice = (input) => Number(input.value ) * Number(input.dataset.price);

const init = () => {
  let totalCost = 0;
  const totalPriceWrapper = document.getElementById('total-price-val');

  [...document.querySelectorAll('.counter')].forEach((counter) => {
      totalCost += getItemSubTotalPrice(counter.querySelector('.input'));
  });

  totalPriceWrapper.textContent = totalCost;
};

const CalculateSaeparateItem = (shoppingBasketMenu, action) => {
  const input = counter.querySelector('.input');

  switch (action) {
    case ACTION.PLUS:
        input.value++;
          break;
    case ACTION.MINUS:
        input.value--;
          break;
  }

  document.querySelector('total-price-val').textContent = getItemSubTotalPrice(input);
};

document.getElementById('counter').addEventListener('click', (event) => {
  if (event.target.classList.contains('counter__minus-btn')) {
    CalculateSaeparateItem(
      event.target.closest('.counter'),
      ACTION.MINUS
    );
  }

  if (event.target.classList.contains('counter__plus-btn')) {
    CalculateSaeparateItem(
      event.target.closest('.counter'),
      ACTION.PLUS
    );
  }
});


init();