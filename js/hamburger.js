'use strict'

var icon = $('#icon-menu');
var ul = $('#navigation-list');
ul.hide();
icon.on('mouseover',function() {
    icon.slideUp().fadeOut(800);
    ul.slideDown().fadeIn(800);
  })
ul.on('mouseleave',function(){
  icon.slideDown().fadeIn(800);
  ul.slideUp().fadeOut(800);
})
