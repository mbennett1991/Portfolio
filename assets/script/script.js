$(document).ready(function () {
  $("#ab-me-btn").on("click", function () {
    $("#l-pg").addClass("d-none");
    $("#projects-pg").addClass("d-none");
    $("#contact-pg").addClass("d-none");
    $("#about-me").removeClass("d-none");
  });
  $("#projects-btn").on("click", function () {
    $("#l-pg").addClass("d-none");
    $("#about-me").addClass("d-none");
    $("#contact-pg").addClass("d-none");
    $("#projects-pg").removeClass("d-none");
  });
  $("#contact-btn").on("click", function () {
    $("#l-pg").addClass("d-none");
    $("#about-me").addClass("d-none");
    $("#projects-pg").addClass("d-none");
    $("#contact-pg").removeClass("d-none");
  });
  $("#home-pg-btn").on("click", function () {
    $("#about-me").addClass("d-none");
    $("#projects-pg").addClass("d-none");
    $("#contact-pg").addClass("d-none");
    $("#l-pg").removeClass("d-none");
  });
  $('.navbar-collapse').click(function () {
    $(".navbar-collapse").collapse('hide');
  });
});