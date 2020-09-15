import '../node_modules/normalize.css/normalize.css'
import './assets/sass/style.sass'

import $ from 'jquery'

$(function () {
  $('.header__burger').on('click', function () {
    $(this).toggleClass('active'); 
    $('.header-menu__wrap').toggleClass('active');
  });
});