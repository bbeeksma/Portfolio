'use strict';
var app = app || {};

(function(module) {
  const portfolioController = {};

  portfolioController.showAbout = () => {
    $('.tab-content').hide();
    $('#portfolio').fadeIn();
  }

  module.portfolioController = portfolioController;
})(app);
