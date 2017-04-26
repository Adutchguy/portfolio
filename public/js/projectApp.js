'use strict';

let projectObjs = [];

function Projects(projects) {
  this.title = projects.title,
  this.author = projects.author,
  this.url = projects.url,
  this.date = projects.date
}

Projects.prototype.toHtml = () => {
  let $newProject = $('.project1')
}

projects.forEach((articleObject) => {
  projectObjs.push(new Projects(articleObject));
});

$("a.projects").each( =>(index) {
  let i = index;
  $(this).attr('href', projectObjs[i].url);
})
