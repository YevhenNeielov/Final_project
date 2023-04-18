//fixed header + post
$(window).scroll(function () {
  const header = $(".header");
  const catPost = $(".cattips__fixed");
  let scrollTop = $(document).scrollTop();
  let catFixedStart = document
    .querySelector(".cattips__article_1")
    .getBoundingClientRect();
  let catFixedStartLength = catFixedStart.top + window.pageYOffset - 81;
  let catFixedEnd =
    window.innerWidth > 1200
      ? document.querySelector(".cattips__article_3").getBoundingClientRect()
      : document.querySelector(".cattips__article_6").getBoundingClientRect();
  let catFixedEndLength =
    window.innerWidth > 1200
      ? catFixedEnd.top + window.pageYOffset + 20
      : catFixedEnd.top + window.pageYOffset - 140;
  console.log(scrollTop);
  scrollTop > 500 && header.addClass("fixed");
  scrollTop < 500 && header.removeClass("fixed");
  scrollTop > 940 && header.addClass("fixed-go");
  scrollTop < 940 && header.removeClass("fixed-go");

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
function initTablet() {
  console.log("is-tablet");
}

function initDesktop() {
  console.log("is-desktop");
  resetMobileMenu();
}

ssm.addStates([
  {
    id: "tablet",
    query: "(max-width: 992px)",
    onEnter: function () {
      initTablet();
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
