'use strict'

var nav = $('nav');
var ul = $('.navigation-list');

$(document).ready(function(){
  nav.click(function(event){
    event.preventDefault();
    nav.style.display = 'none';
    ul.style.display = 'block';
  })
})
