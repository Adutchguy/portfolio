(function() {
  'use strict';

  let source   = $("#edu-template").html();
  let template = Handlebars.compile(source);

  $.get('data/rawData.json').then((data) => {
    localStorage.rawData = JSON.stringify(data);
  })

  let education = JSON.parse(localStorage.rawData);

  createArticle();

  function createArticle() {
    education.forEach((education) => {
      let context = {organization: education.organization, topicOfStudy: education.topicOfStudy, startDate: education.startDate, endDate: education.endDate};
      let html = template(context);
      $('.edu-div').append(html);
    });
  }

}())
