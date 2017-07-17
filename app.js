'use strict';

function Project(projectDataObject){
  for(var key in projectDataObject){
    this[key] = projectDataObject[key];
  }
}

Project.prototype.toHtml = function(){
  var theTemplateScript = $('#article-template').html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  var theCompiledHtml = theTemplate(this);
  $('#portfolio').append(theCompiledHtml);
}

function buildProjects(){
  $.getJSON('data/projects.json',function(data,message,xhr){
    window.eTag = xhr.getResponseHeader('ETag');
    window.localStorage.projectData = JSON.stringify(data);
    data.forEach(function(item){
      var newProject = new Project(item);
      newProject.toHtml();
    });
  });
}

function siteNavTabs() {
  $('.siteNav .tabItem a').on('click', function() {
    $('.tabBox').hide();
    var activeTab = $(this).data('tab');
    var makeIdForSelection = '#' + activeTab;
    $(makeIdForSelection).fadeIn();
  });

  $('.siteNav .tabItem a:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
}

function accordionButton(){
  $('.tabBox').on('click','.nameButton',function(){
    $(this).siblings('.expandedProject').toggleClass('isExpanded');
  })
  //expand/contractstuff goes here
}

$(document).ready(function(){
  siteNavTabs();
  accordionButton();
  buildProjects();
})
