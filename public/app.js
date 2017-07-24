'use strict';

function Project(projectDataObject){
  Object.keys(projectDataObject).forEach(key => this[key] = projectDataObject[key]);
}

Project.prototype.toHtml = function(){
  var theTemplateScript = $('#article-template').html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  var theCompiledHtml = theTemplate(this);
  $('#portfolio').append(theCompiledHtml);
}

function buildProjects(data){
  data.forEach(function(item){
    var newProject = new Project(item);
    newProject.toHtml();
  });
}

function initProjects(){
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
    buildProjects(data);
  }
  else{
    $.getJSON('data/projects.json',function(data,message,xhr){
      window.localStorage.eTag = xhr.getResponseHeader('ETag');
      window.localStorage.projectData = JSON.stringify(data);
      buildProjects(data);
    });
  }
}

function siteNavTabs() {
  $('.siteNav .tabItem a').on('click', function() {
    $('.tabBox').hide();
    var activeTab = $(this).data('tab');
    var makeIdForSelection = '#' + activeTab;
    $(makeIdForSelection).fadeIn();
  });

  $('.siteNav .tabItem a:first').click();
}

function accordionButton(){
  $('.tabBox').on('click','.nameButton',function(){
    $(this).siblings('.expandedProject').toggleClass('isExpanded');
  })
}

$(document).ready(function(){
  siteNavTabs();
  accordionButton();
  initProjects();
})
