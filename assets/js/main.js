const swiperMain = new Swiper('.main-swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay : {
        delay: 2000
    },
    slidesPerView: 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay : {
      delay: 3000
  },
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



/* JS code to handle responsive header */
function myFunction() {
  let menus = document.getElementById("menus");
  let menus_items = document.getElementsByClassName("menus__item");

  if (menus.className == "menus") {
    menus.className += " responsive";

    for (const menu of menus_items) {
      menu.className += " visible";
    }
  } 
  else {
    menus.className = "menus";

    for (const menu of menus_items) {
      menu.className = "menus__item";
    }
  }
}