'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.showAbout = () => {
    $('.tab-content').hide();
    $('#home').fadeIn();
  }

  module.homeController = homeController;
})(app);
