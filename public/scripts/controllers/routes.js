'use strict';
var app = app || {};

page('/', app.homeController.showArticle);
page('/portfolio', app.portfolioController.showAbout);
page('/about', app.aboutController.showAdmin);
page('*', function(){
  $('body').text('Not Found');
})
page();
