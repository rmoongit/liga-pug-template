const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: 'fade',
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true
  }
});

export default { swiper };
