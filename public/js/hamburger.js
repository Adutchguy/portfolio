'use strict'

let icon = $('.icon-menu');
let ul = $('#navigation-list');

ul.hide();
icon.on('mouseover', () => {
    icon.hide();
    ul.fadeIn(500);
  })
ul.on('mouseleave',() => {
  ul.slideUp(500);
  icon.delay(250).slideDown(500);
})
