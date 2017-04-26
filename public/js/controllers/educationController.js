'use strict';

(function(module) {
  const educationController = {};

  educationController.init = () => {
    $('#about-me-section').fadeOut();
    $('#project-section').fadeOut()
    $('#education-section').fadeIn()
  }
  module.educationController = educationController;
}(window));
