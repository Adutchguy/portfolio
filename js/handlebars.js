'use strict'

let source   = $("#edu-template").html();
let template = Handlebars.compile(source);
let education = JSON.parse(localStorage.rawData);

$.get('data/rawData.json', function(data){
  let education = data;
  localStorage.rawData = JSON.stringify(education);
})
createArticle();

function createArticle() {
  education.forEach(function(education){
    let context = {organization: education.organization, topicOfStudy: education.topicOfStudy, startDate: education.startDate, endDate: education.endDate};
    let html = template(context);
    $('.edu-div').append(html);
  });
}
