
'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.showAbout = () => {
    $('.tabBox').hide();
    $('#about').fadeIn();
  }

  module.aboutController = aboutController;
})(app);
