'use strict';
var app = app || {};

(function(module) {
  const portfolioController = {};

  portfolioController.showPortfolio = () => {
    $('.tabBox').hide();
    $('#portfolio').fadeIn();
  }

  module.portfolioController = portfolioController;
})(app);
