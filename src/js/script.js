//main-slider movement
(function sliderMovement() {
  $(window).mousemove(function (e) {
    if ($(window).width() < 992) {
      return;
    }
    let catMoveCoords = $(".main-slider__box");
    let catBubbleCoords = $(
      ".main-slider__bubble-box, .main-slider__bubble-box-second"
    );

    if (
      $(e.target).is(
        "header, header *, .main-slider__arrow, .main-slider__arrow *"
      ) ||
      $(".catinfo").offset().top < e.clientY + $(document).scrollTop() + 20
    ) {
      catMoveCoords.css({
        marginLeft: "0px",
        marginTop: "0px",
      });
      catBubbleCoords.css({
        marginLeft: "0px",
        marginTop: "0px",
      });
      return;
    }
    let x = e.clientX - $(window).width() / 2;
    let y = e.clientY - $(window).height() / 2;
    catMoveCoords.css({
      marginLeft: -x / 10 + "px",
      marginTop: -y / 10 + "px",
    });
    catBubbleCoords.css({
      marginLeft: -x / 7 + "px",
      marginTop: -y / 7 + "px",
    });
  });
})();

//fixed header + scrollUp + post
$(window).scroll(function () {
  const header = $(".header");
  const catPost = $(".cattips__fixed");
  const scrollUp = $(".scroll-up__svg-box");
  let scrollTop = $(document).scrollTop();
  let catFixedStartLength = $(".cattips__article_1").offset().top - 81;
  let catFixedEndLength =
    $(window).width() > 1200
      ? $(".cattips__article_3").offset().top + 20
      : $(".cattips__article_6").offset().top - 140;
  scrollTop > 500 &&
    header.addClass("fixed") &&
    $(".moving-line").addClass("no-moving-line");
  scrollTop < 500 &&
    header.removeClass("fixed") &&
    $(".moving-line").removeClass("no-moving-line");
  scrollTop > 940 &&
    header.addClass("fixed-go") &&
    scrollUp.css("bottom", "30px");
  scrollTop < 940 &&
    header.removeClass("fixed-go") &&
    scrollUp.css("bottom", "-100%");

  scrollTop < catFixedStartLength && catPost.removeClass("fixedpost");
  scrollTop > catFixedStartLength && catPost.addClass("fixedpost");
  scrollTop < catFixedEndLength && catPost.css("top", "101px");
  scrollTop > catFixedEndLength &&
    catPost.css("top", catFixedEndLength - scrollTop + "px");
});

//menu
const menuButton = $(".mobile-button");
const darkOverlay = $(".dark-overlay");
const mobileMenu = $(".mobile-menu");
const scrollUp = $(".scroll-up");

$(document).on("click", ".mobile-button", handleMenu);
$(document).on("click", ".colorchange", handleToggleMenu);

function handleMenu(e) {
  e.preventDefault();
  darkOverlay.toggleClass("visible");
  mobileMenu.toggleClass("visible");
  scrollUp.toggleClass("close");
  $(".mobile-nav .has-submenu").removeClass("opened").find("ul").hide();
  $(".active").removeClass("active");
}

function handleToggleMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this.toggleClass("active").next("ul").find(".active").removeClass("active");
  $this.parent("li").siblings("li").find(".active").removeClass("active");
  $this.parent(".has-submenu").toggleClass("opened");
  $this.next("ul").slideToggle(500, function () {
    $(this).find(".has-submenu").removeClass("opened").children("ul").hide();
  });
  $this
    .parent(".has-submenu")
    .siblings("li")
    .removeClass("opened")
    .find("ul")
    .hide();
}

function resetMobileMenu() {
  darkOverlay.removeClass("visible");
  mobileMenu.removeClass("visible");
  scrollUp.removeClass("close");
  $(".mobile-nav .has-submenu").removeClass("opened").find("ul").hide();
  $(".active").removeClass("active");
}

//Fancybox
Fancybox.bind("[data-fancybox]", {});

// smooth scroll
let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
});

// smm
function initMobile() {}

function initDesktop() {
  resetMobileMenu();
}

ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 992px)",
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: "desktop",
    query: "(min-width: 993px)",
    onEnter: function () {
      initDesktop();
    },
  },
]);
