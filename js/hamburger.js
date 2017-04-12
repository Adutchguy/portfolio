'use strict'

var icon = document.getElementById('icon-menu');
var ul = document.getElementById('navigation-list');
ul.style.display = 'none';
icon.addEventListener('mouseover',function(event) {
  event.preventDefault();
  icon.style.display = 'none';
  ul.style.display = 'block';
})

ul.addEventListener('mouseleave',function(event) {
  event.preventDefault();
  icon.style.display = 'block';
  ul.style.display = 'none';
})
