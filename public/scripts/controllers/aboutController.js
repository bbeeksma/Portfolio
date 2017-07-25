
'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.showAbout = () => {
    $('.tab-content').hide();
    $('#about').fadeIn();
  }

  module.aboutController = aboutController;
})(app);
