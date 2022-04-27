// The Most Modern Mobile Touch Slider
const swiper = new Swiper('.swiper', {
   slidesPerView: 1,
   spaceBetween: 20,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   pagination: {
      el: '.swiper-pagination'
   },
   breakpoints: {
      700: {
         slidesPerView: 2
      },
      1200: {
         slidesPerView: 3
      }
   }
});