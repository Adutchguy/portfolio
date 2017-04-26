'use strict';

(function(module) {
  const homeController = {};

  homeController.init = () => {
    $('#about-me-section').fadeIn();
    $('#project-section').fadeOut()
    $('#education-section').fadeOut()
    $('footer').fadeOut();
  }
  module.homeController = homeController;
}(window));
