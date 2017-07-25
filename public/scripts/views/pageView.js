'use strict';
var app = app || {};

(function(module){
  var page = {};

  page.accordionButton = () => {
    $('.tabBox').on('click','.nameButton',function(){
      $(this).siblings('.expandedProject').toggleClass('isExpanded');
    })
  }

  page.initPage = () => {
    app.page.accordionButton();
    app.Project.initProjects();
  }

  module.page = page;
}(app));
