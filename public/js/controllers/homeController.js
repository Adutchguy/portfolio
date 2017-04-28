'use strict';

(function(module) {
  const homeController = {};

  homeController.init = () => {
    $('#about-me-section').fadeIn();
    $('#project-section').hide()
    $('#education-section').hide()
    $('footer').hide();
  }
  module.homeController = homeController;
}(window));
