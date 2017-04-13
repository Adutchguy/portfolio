'use strict';

var projectObjs = [];

function Projects(projects) {
  this.title = projects.title,
  this.author = projects.author,
  this.url = projects.url,
  this.date = projects.date
}

Projects.prototype.toHtml = function() {
  var $newProject = $('.project1')
}

projects.forEach(function(articleObject) {
  projectObjs.push(new Projects(articleObject));
});

$("a.projects").each(function(index) {
  var i = index;
  $(this).attr('href', projectObjs[i].url);
})
