'use strict'

var source   = $("#edu-template").html();
var template = Handlebars.compile(source);

function createArticle(index) {
  education.each(function(){
    var context = {organization: education[em].organization, topicOfStudy: education[0].topicOfStudy, startDate: education[0].startDate, endDate: education[0].endDate};
    var html    = template(context);
})
}
var edu = [];

function Education (opts) {
  for (key in opts) {
    this[key] = opts[key];
  }
};

Education.prototype.toHtml = function() {
  var context = {organization: this.organization, topicOfStudy: this.topicOfStudy, startDate: this.startDate, endDate: this.endDate};
  var html    = template(context);
};

education.forEach(function(eduObject) {
  edu.push(new Education(eduObject));
});

edu.forEach(function(ourNewEduObject){
  $('#education-section').append(ourNewEduObject.toHtml());
});
