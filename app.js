'use strict';

function Project(name, dateCompleted, client, description, colaborators, pageLink, repoLink, imgSrc){
  this.name = name;
  this.dateCompleted = dateCompleted;
  this.client = client;
  this.description = description;
  this.colaborators = colaborators;
  this.pageLink = pageLink;
  this.repoLink = repoLink;
  this.imgSrc = imgSrc;
}
console.log(Project);
