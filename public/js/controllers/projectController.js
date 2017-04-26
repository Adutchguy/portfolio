'use strict';

(function(module) {
  const projectController = {};

  projectController.init = () => {
    $('#about-me-section').fadeOut();
    $('#education-section').fadeOut()
    $('footer').fadeOut();
    $('#project-section').fadeIn()
  }
  module.projectController = projectController;
}(window));
