var swiper = new Swiper(".hero__slider .swiper-container", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 1000,
  },
  loop:"true"
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

AOS.init();