'use strict'

var icon = $('.icon-menu');
var ul = $('#navigation-list');
ul.hide();
icon.on('mouseover',function() {
    icon.hide();
    ul.fadeIn(500);
  })
ul.on('mouseleave',function(){
  ul.slideUp(500);
  icon.delay(250).slideDown(500);
})
