$(document).ready(function(){
  $("#menu-button").click(function(){
    $(this).toggleClass("typcn-times").toggleClass("typcn-th-menu");
    $("#menu").slideToggle("medium");
  });

  $("#report").click(function(){
    $("#report-menu").slideToggle("medium");
  });
});
