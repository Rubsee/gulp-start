import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.banners__swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
        el: '.banners__pagination-list',
        bulletActiveClass: 'banners__pagination-item--active',
        bulletClass: 'banners__pagination-item',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.banners__arrow--right',
        prevEl: '.banners__arrow--left',
    },
});

const swiperPopular = new Swiper('.most-popular__swiper', {
    // Optional parameters
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 55,
        },
        1728: {
            slidesPerView: 3,
            spaceBetween: 35,
        }
    },
    // If we need pagination
    pagination: {
        el: '.most-popular__pagination-list',
        bulletActiveClass: 'most-popular__pagination-item--active',
        bulletClass: 'most-popular__pagination-item',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.most-popular__arrow--right',
        prevEl: '.most-popular__arrow--left',
    },
});