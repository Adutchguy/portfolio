'use strict';

var $container = $('.projects');
var $project1 = $('.project1');
var $project2 = $('.project2');
var $project3 = $('.project3');
var projectObjs = [];

// var renderPictures = function(){
//   $project1.append("<img class='pro1' src='img/about_me.jpg'>");
//   $project2.append("<img class='pro2' src='img/cookie_stand.jpg'>");
//   $project3.append("<img class='pro3' src='img/busmall.jpg'>");
// }
// renderPictures();

function Projects(projects) {
  this.title = projects.title,
  this.author = projects.author,
  this.url = projects.url,
  this.date = projects.date
}
.
Projects.prototype.toHtml = function() {
  var $newProject = $('.project1')
}
