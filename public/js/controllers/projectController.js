'use strict';

(function(module) {
  const projectController = {};

  projectController.init = () => {
    $('#about-me-section').hide();
    $('#education-section').hide()
    $('footer').hide();
    $('#project-section').fadeIn()
  }
  module.projectController = projectController;
}(window));
