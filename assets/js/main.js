// current year start
document.getElementById("year").innerHTML = new Date().getFullYear();
// current year end

// best seller slider start
$('.best_seller_slider').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  navText: ["<i class='fa-solid fa-arrow-right'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4,
      stagePadding: 60
    }
  }
})
// best seller slider end

// fix header start
$(window).scroll(function () {
  var sticky = $("header"),
    scroll = $(window).scrollTop();
  if (scroll >= 250) sticky.addClass("fixed-top");
  else sticky.removeClass("fixed-top");
});
// fix header end

// viewport animation start
wow = new WOW(
  {
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
  }
)
wow.init();
// viewport animation end

// parallax start
var rellax = new Rellax('.rellax');
// parallax end