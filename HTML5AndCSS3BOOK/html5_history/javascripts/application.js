/***
 * Excerpted from "HTML5 and CSS3 Second Edition",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/bhh52e for more book information.
***/
// HTML5 structural element support for IE 6, 7, and 8
document.createElement("header");
document.createElement("footer");
document.createElement("section");
document.createElement("aside");
document.createElement("article");
document.createElement("nav");

var configureTabSelection = function(){  
  $("#services, #about, #contact").hide().attr("aria-hidden", true); 
  $("#welcome").attr("aria-hidden",false);

  $("nav ul").click(function(event){
    var target = $(event.target);
    if(target.is("a")){   
      event.preventDefault();      
      if ( $(target.attr("href")).attr("aria-hidden")){          
        addTabToHistory(target);
        activateTab(target.attr("href"));
      };
    };
  });
}

var activateTab = function(selector){
  $("[aria-hidden=false]").hide().attr("aria-hidden", true);
  $(selector).show().attr("aria-hidden", false);
}

var addTabToHistory = function(target){
  var tab = target.attr("href");  
  var stateObject = {tab: tab};
  window.history.pushState(stateObject, "", tab);  
}

var configurePopState = function(){
  window.onpopstate = function(event) {  
    if(event.state){
      var tab = (event.state["tab"]);
      activateTab(tab);
    }
  };
};


var activateDefaultTab = function(){
  tab = window.location.hash || "#welcome";
  activateTab(tab);
  window.history.replaceState( {tab: tab}, "", tab);
};



var init = function(){
  configureTabSelection();
  configurePopState();
  activateDefaultTab();
};

init();

