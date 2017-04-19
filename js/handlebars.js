'use strict'

var source   = $("#edu-template").html();
var template = Handlebars.compile(source);
var i = 0;
var edu = [];

function createArticle() {
  education.forEach(function(education){
    var context = {organization: education.organization, topicOfStudy: education.topicOfStudy, startDate: education.startDate, endDate: education.endDate};
    var html = template(context);
    $('.edu-div').append(html);
  });
}
createArticle();
