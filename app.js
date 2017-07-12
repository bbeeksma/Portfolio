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
  $newProjectArticle.find('.projectLinks:first-child').text(this.name + ' home Page').attr('href',this.pageLink);
  $newProjectArticle.find('.projectLinks:last-child').text(this.name + ' repository').attr('href',this.repoLink);
  $newProjectArticle.find('.projectPicture').attr('src',this.imgSrc);
}

projectData.forEach(function(item){
  var newProject = new Project(item);
  newProject.toHtml();
});
