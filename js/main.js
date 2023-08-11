// 'use strict'


// Product part slider

let swiperProduct = new Swiper(".product-swiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination-product",
      clickable: true,
    },
    loop: true,
  breakpoints: {
    0:{
        slidesPerView: 1,
    },
    691:{
        slidesPerView: 2,
    },
    1025:{
        slidesPerView: 3,
    }

  },
  });

  //   Doctor  Part Slider

  let swiperDoctor = new Swiper(".doctor-swiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
  pagination: {
    el: ".swiper-pagination-doctor",
    clickable: true,
  },
  });


  //   Ambassadors Part Slider

  let swiperBrands = new Swiper(".img-brand", {
    spaceBetween: 24,
    loop: true,
    breakpoints: {
      0:{
          slidesPerView: 3.6,
      },
      550:{
        slidesPerView: 4.6,
      },
      750:{
          slidesPerView: 7,
      },
  }
  });


  //   Rating Reviews Part Slider

  let swiperRating = new Swiper(".rating-swiper", {
    spaceBetween: 16,
    loop: true,
    keyboard: {
      enabled: true,
      },
    breakpoints: {
      0:{
          slidesPerView: 1.9,
      },
      550:{
          slidesPerView: 3,
      },
  }
  });


//   Reviews Part Slider

  let swiperReviews = new Swiper(".reviews-swiper", {
    spaceBetween: 30,
    loop: true,
    keyboard: {
    enabled: true,
    },
    breakpoints: {
      0:{
          slidesPerView: 1.2,
          centeredSlides: false,
      },
      1250:{
          slidesPerView: 1.5,
          centeredSlides: true,
      },
  },
  pagination: {
    el: ".swiper-pagination-review",
    clickable: true,
  },
  });


// Blog Part Slider

  let swiperBlog = new Swiper(".blog-swiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination-blog",
      clickable: true,
    },
    loop: true,
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        675:{
            slidesPerView: 2,
        },
        1025:{
            slidesPerView: 3,
        }
    }
  });


// burger menu function


  const iconMenu = document.querySelector('.menu-icon');

if (iconMenu) {
  const menuBody = document.querySelector('.burger');
  const header = document.querySelector('header');
  iconMenu.addEventListener("click", function(){
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    header.classList.toggle('_active');

  });
}


// change color on sticky header
window.addEventListener('scroll',()=>{
  const header = document.querySelector('header');
  
    header.classList.toggle('sticky', window.scrollY > 100);
  

})


// console.log(window.innerWidth);