'use strict';
var app = app || {};

(function(module){
  var page = {};


  page.siteNavTabs = () => {
    /*
    $('.siteNav .tabItem a').on('click', function() {
      $('.tabBox').hide();
      var activeTab = $(this).data('tab');
      var makeIdForSelection = '#' + activeTab;
      $(makeIdForSelection).fadeIn();
    });

    $('.siteNav .tabItem a:first').click();
    */
  }

  page.accordionButton = () => {
    $('.tabBox').on('click','.nameButton',function(){
      $(this).siblings('.expandedProject').toggleClass('isExpanded');
    })
  }

  page.initPage = () => {
    app.page.siteNavTabs();
    app.page.accordionButton();
    app.Project.initProjects();
  }

  module.page = page;
}(app));
