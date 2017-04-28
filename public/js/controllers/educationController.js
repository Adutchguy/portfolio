'use strict';

(function(module) {
  const educationController = {};

  educationController.init = () => {
    $('#about-me-section').hide();
    $('#project-section').hide()
    $('footer').hide();
    $('#education-section').fadeIn()
  }
  module.educationController = educationController;
}(window));
