$(function () {
  $(".navbar-toggler").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth<768) {
        $("#navbarNavAltMarkup").collapse('hide');
    }
  });
});

(function (global) {
  var dc ={};
  var homeHtml= "snippets/home-snippets.html";

  var insertHtml = function (selector,html) {
    var targetElem= document.querySelector(selector);
    targetElem.innerHtml = html;
  };

  var showLoading =function(selector) {
    var html ="<div class='text-center'>";
    html+= "<img src ='   '></div>";
    insertHtml(selector,html);
  };
  document.addEventListener("DOMContentLoaded", function(event) {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      homeHtml,
      function (responseText) {
        document.querySelector("#main-content")
        .innerHTML = responseText; 
      },
      false);
    });


    global.$dc = dc;
})(window);
    )
  }
}