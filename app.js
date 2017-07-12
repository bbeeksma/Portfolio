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
console.log(Project);

Project.prototype.toHtml = function(){
  //clone the template and fill er in
}

projectData.forEach(function(item){
  //run the toHtml function with each of the objects from the data
});
