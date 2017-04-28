'use strict';

(function(module) {
  const contactController = {};

  contactController.init = () => {
    $('#about-me-section').hide();
    $('#project-section').hide()
    $('#education-section').hide()
    $('footer').fadeIn();
  }
  module.contactController = contactController;
}(window));
