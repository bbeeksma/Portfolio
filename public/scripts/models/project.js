'use strict';

var app = app || {};

(function(module){
  function Project(projectDataObject){
    Object.keys(projectDataObject).forEach(key => this[key] = projectDataObject[key]);
  }

  Project.prototype.toHtml = function() {
    var theTemplateScript = $('#article-template').html();
    var theTemplate = Handlebars.compile(theTemplateScript);
    var theCompiledHtml = theTemplate(this);
    $('#portfolio').append(theCompiledHtml);
  }

  Project.all = []

  Project.buildProjects = (data) => {
    Project.all = data.map((item) => new Project(item));
    console.log(Project.all);
    Project.all.forEach(project => project.toHtml());
  };


  Project.initProjects = () => {
    $.ajax({
      url: '/github/user/repos'
      ,method: 'GET'
    })
    .then(
  // render the data
      data => {
        data.forEach(repo => Project.all.push(new Project(repo)));
        app.Project.buildProjects(data);
      }
    );
    /*
    var eTag;
    $.ajax({
      type: 'HEAD',
      url: 'data/projects.json',
      complete: function(XMLHttpRequest){
        eTag = XMLHttpRequest.getResponseHeader('ETag');
      }
    });
    if (localStorage.projectData && localStorage.eTag === eTag) {
      let data = JSON.parse(localStorage.projectData)
      app.Project.buildProjects(data);
    }
    else{
      $.getJSON('data/projects.json',function(data,message,xhr){
        window.localStorage.eTag = xhr.getResponseHeader('ETag');
        window.localStorage.projectData = JSON.stringify(data);
      });
    } */
  }

  module.Project = Project;
}(app));
