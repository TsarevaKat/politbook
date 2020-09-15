import '../node_modules/normalize.css/normalize.css'
import './assets/sass/style.sass'

import $ from 'jquery'

import '../node_modules/jquery.nicescroll/dist/jquery.nicescroll.min.js'

$(function () {
  $('.header__burger').on('click', function () {
    $(this).toggleClass('active');
    $('.header-menu__wrap').toggleClass('active');
  });

  $('.search__btn').on('click', function () {
    $('.header .search').addClass('active');
  });

  $('.search__close').on('click', function () {
    $('.header .search').removeClass('active');
  });

  const scrollBlock = (block) => {
    $(block).niceScroll({
      cursorcolor: "#be1522",
      background: "#e8e8e8",
      cursorwidth: 5,
      cursorborder: 'none',
      cursorborderradius: 0,
      autohidemode: false,
      zindex: 1
    });
  }

  scrollBlock('.news__blocks');
  scrollBlock('.rating__blocks');

  $(window).scroll(() => {
    if ($(this).scrollTop() > 50) {
      $('.btn-up').addClass('active');
    } else {
      $('.btn-up').removeClass('active');
    }
  });

  $('.btn-up').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
  }, 500);
  });
});