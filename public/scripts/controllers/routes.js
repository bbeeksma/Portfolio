'use strict';
var app = app || {};

page('/', app.homeController.showHome);
page('/portfolio', app.portfolioController.showPortfolio);
page('/about', app.aboutController.showAbout);

page('*', function(){
  $('body').text('Not Found');
})

page();
