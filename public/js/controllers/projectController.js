'use strict';

(function(module) {
  const projectController = {};

  projectController.init = () => {
    $('#about-me-section').fadeOut();
    $('#project-section').slideIn()
    $('#education-section').fadeOut()
  }
  module.projectController = projectController;
}(window));
