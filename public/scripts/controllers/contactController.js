
'use strict';
var app = app || {};

(function(module) {
  const contactController = {};

  contactController.showContact = () => {
    $('.tabBox').hide();
    $('#contact').fadeIn();
  }

  module.contactController = contactController;
})(app);
