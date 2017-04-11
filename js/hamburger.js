'use strict'

$(document).ready(function(){
  var icon = $('.icon-menu');
  var ul = $('.navigation-list');
  ul.hide();
  icon.click(function(event){
    event.preventDefault();
    ul.show();
  })
})
