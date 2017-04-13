'use strict'

var icon = $('.icon-menu');
var ul = $('#navigation-list');
ul.hide();
icon.on('mouseover',function() {
    icon.fadeOut(800);
    ul.fadeIn(800);
  })
ul.on('mouseleave',function(){
  icon.slideDown(800);
  ul.slideUp(800);
})
