'use strict';

(function(module) {
  const homeController = {};

  homeController.init = () => {
    $('#about-me-section').fadeIn();
    $('#project-section').fadeOut()
    $('#education-section').fadeOut()
  }
  module.homeController = homeController;
}(window));
