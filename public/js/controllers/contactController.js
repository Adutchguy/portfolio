'use strict';

(function(module) {
  const contactController = {};

  contactController.init = () => {
    $('#about-me-section').fadeOut();
    $('#project-section').fadeOut()
    $('#education-section').fadeOut()
    $('footer').fadeIn();
  }
  module.contactController = contactController;
}(window));
