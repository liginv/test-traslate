$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
});
$(document).ready(function () {
  $(".mobileMenu").click(function () {
    $(this).parent("nav").toggleClass("active");
  });
});

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top - 50;
  var elementBottom = elementTop + $(this).outerHeight() / 2;
  var viewportTop = $(window).scrollTop();
  var viewportHalf = viewportTop + $(window).height() / 2;
  return elementBottom > viewportTop && elementTop < viewportHalf;
};

$(window).on("load resize scroll", function () {
  $(".animateNergy").each(function () {
    if ($(this).isInViewport()) {
      $(this).addClass("viewport");
    } else {
      // $(this).removeClass("viewport");
    }
  });
});
