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
  var theTemplateScript = $('#article-template').html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  var theCompiledHtml = theTemplate(this);
  $('#portfolio').append(theCompiledHtml);
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
