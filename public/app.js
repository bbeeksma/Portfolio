'use strict';
var app = app || {};

(function(module){
  var page = {};

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
        app.Project.buildProjects(data);
      });
    }
  }

  page.siteNavTabs = () => {
    $('.siteNav .tabItem a').on('click', function() {
      $('.tabBox').hide();
      var activeTab = $(this).data('tab');
      var makeIdForSelection = '#' + activeTab;
      $(makeIdForSelection).fadeIn();
    });

    $('.siteNav .tabItem a:first').click();
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
  module.Project = Project;
  module.page = page;
}(app));
