$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.nav__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

function navMenu(selector) {
    let menu =$(selector);
    let button = menu.find('.header__burger');
    let links = menu.find('.nav__menu');
    let overlay = menu.find('.header__menu__overlay');


button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.toggleClass('.active');
    
    if (menu.hasClass('.active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

headerBurger('.header__burger');