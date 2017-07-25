'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.showHome = () => {
    $('.tabBox').hide();
    $('#home').fadeIn();
  }

  module.homeController = homeController;
})(app);
