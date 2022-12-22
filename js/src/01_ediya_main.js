// 팝업창 ==============================
window.alert('교육 목적으로 제작된 웹페이지입니다.')

// viewBox ==============================

const swiper = new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});