$(document).ready(function () {
  $(".bannerSlide").owlCarousel({
    items: 1,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    smartSpeed: 1000,
    loop: true,
    margin: 50,
    mouseDrag: false,
  });

  $(".partnersLogos").owlCarousel({
    items: 7,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 500,
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });

  $(".testimonialSlide").owlCarousel({
    items: 3,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 500,
    loop: true,
    margin: 30,
    autoHeight: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".eventSlide").owlCarousel({
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 500,
    loop: true,
    margin: 25,
    loop: false,
    autoHeight: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Blog Feed
  // $("#divRss").FeedEk({
  //   FeedUrl: "https://blog.nergyindia.com/feed/",
  //   MaxCount: 2,
  //   ShowDesc: true,
  //   DateFormat: "D",
  //   DescCharacterLimit: 150,
  //   ShowPubDate: true,
  // });
  // $("#divRssnews").FeedEk({
  //   FeedUrl: "https://blog.nergyindia.com/newsfeed/",
  //   MaxCount: 2,
  //   ShowDesc: true,
  //   DateFormat: "D",
  //   DescCharacterLimit: 150,
  //   ShowPubDate: true,
  // });

  $(".studentCouncilbtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#studentCouncil").offset().top,
      },
      1000
    );
  });
  $(".nergyAcademicCouncilBtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#nergyAcademicCouncil").offset().top,
      },
      2000
    );
  });
  $(".nergyOneAllianceBtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#nergyOneAlliance").offset().top,
      },
      1000
    );
  });

  (function ($) {
    $(".techToolsSec select").change(function () {
      var getValue = $(this).val();
      window.open(getValue, "_self");
    });
  })(jQuery);
});

$(document).ready(function () {
  // Handler for .ready() called.
  $("html, body").animate(
    {
      scrollTop: $("#tab").offset().top,
    },
    "slow"
  );
});
