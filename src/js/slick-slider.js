$("#main-slider").slick({
  arrows: true,
  autoplay: true,
  fade: true,
  speed: 1000,
  autoplaySpeed: 5000,
  appendArrows: ".main-slider__arrows",
  prevArrow: `<span class="main-slider__arrow main-slider__arrow_prev"><i class="fa-solid fa-angle-left"></i></span>`,
  nextArrow: `<span class="main-slider__arrow main-slider__arrow_next"><i class="fa-solid fa-angle-left"></i></span>`,
});

$(`#main-slider`).on(`beforeChange`, function () {
  $(`.main-slider__text_title, .main-slider__text_content`).attr(
    "style",
    "top: 400px; opacity: 0"
  );
  $(`.main-slider__text_question`).attr("style", "top: -100px; opacity: 0");
  $(`.main-slider__link`).attr("style", "opacity: 0");

  $(`.main-slider__text_title`).animate({
    opacity: 1,
    top: 0,
    transition: `1.3s`,
  });
  $(`.main-slider__text_question, .main-slider__text_content`).animate({
    opacity: 1,
    top: 0,
    transition: `1s`,
  });
  $(`.main-slider__link`).animate({
    opacity: 1,
    transition: `0.3s`,
  });
});

$("#catadopt__slider").slick({
  arrows: false,
  autoplay: false,
  dots: true,
  dotsClass: "catadopt__slider-dots-box",
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

function createSvg() {
  const svgSlick = $(
    `<svg class="catadopt__slider-svg" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#999" stroke-width="2px" cx="7" cy="7" r="6.215"></svg>`
  );
  $("#catadopt__slider button").append(svgSlick);
  $("#catadopt__slider button").addClass("catadopt__slider_svg");
}

createSvg();

$("#catadopt__slider").on("setPosition", function () {
  if ($("#catadopt__slider button").hasClass("catadopt__slider_svg")) {
    return;
  }
  createSvg();
});

$("#catproduct-slider").slick({
  arrows: false,
  autoplay: false,
  infinite: false,
  edgeFriction: 0.3,
  slidesToShow: 2,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});
