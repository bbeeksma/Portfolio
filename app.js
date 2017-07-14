'use strict';

function Project(projectDataObject){
  this.name = projectDataObject.name;
  this.dateCompleted = projectDataObject.dateCompleted;
  this.client = projectDataObject.client;
  this.description = projectDataObject.description;
  this.colaborators = projectDataObject.colaborators;
  this.pageLink = projectDataObject.pageLink;
  this.repoLink = projectDataObject.repoLink;
  this.imgSrc = projectDataObject.imgSrc;
}

Project.prototype.toHtml = function(){
  var $newProjectArticle = $('article.template').clone();
  $newProjectArticle.toggleClass('template');
  $newProjectArticle.find('.byline h2').text(this.name);
  $newProjectArticle.find('.projectTextBox p').text(this.description);
  $newProjectArticle.find('.completedDate').text(this.dateCompleted);
  $newProjectArticle.find('.collaborators').text(this.colaborators);
  $newProjectArticle.find('.pageLink a').attr('href',this.pageLink).text(this.name + ' home page');
  $newProjectArticle.find('.repoLink a').attr('href',this.repoLink).text(this.name + ' repository');
  $newProjectArticle.find('.projectPicture').attr('src',this.imgSrc);
  $('#portfolio').append($newProjectArticle);
}

projectData.forEach(function(item){
  var newProject = new Project(item);
  newProject.toHtml();
});

function siteNavTabs() {
  $('.siteNav .tabItem a').on('click', function() {
    $('.tabBox').hide();
    var activeTab = $(this).data('tab');
    var makeIdForSelection = '#' + activeTab;
    $(makeIdForSelection).fadeIn();
  });

  $('.siteNav .tabItem a:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
}

$(document).ready(function(){
  siteNavTabs();
})
