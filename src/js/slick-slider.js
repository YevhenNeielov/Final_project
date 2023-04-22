$("#main-slider").slick({
  arrows: true,
  autoplay: true,
  fade: true,
  pauseOnHover: false,
  speed: 1000,
  autoplaySpeed: 5000,
  appendArrows: ".main-slider__arrows",
  prevArrow: `<span class="main-slider__arrow main-slider__arrow_prev"><i class="fa-solid fa-angle-left"></i></span>`,
  nextArrow: `<span class="main-slider__arrow main-slider__arrow_next"><i class="fa-solid fa-angle-left"></i></span>`,
});

$(`#main-slider`).on(`beforeChange`, function () {
  $(`.main-slider__text_title`).toggleClass(`main-slider__text_title-active`);
  $(`.main-slider__text_question`).toggleClass(
    `main-slider__text_question-active`
  );
  $(`.main-slider__text_content`).toggleClass(
    `main-slider__text_content-active`
  );
  $(`.main-slider__link`).toggleClass(`main-slider__link_active`);
  $(`.main-slider__google-box`).toggleClass(`main-slider__google-box_active`);
  $(`.main-slider__bubble-box`).toggleClass(`main-slider__bubble-box_active`);
  $(`.main-slider__bubble-box-second`).toggleClass(
    `main-slider__bubble-box-second_active`
  );
  $(`.moving-line`).css(`animation`, `none`);
});

$(`#main-slider`).on(`afterChange`, function () {
  $(`.moving-line`).css(`animation`, `movingLine 5s linear infinite`);
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
