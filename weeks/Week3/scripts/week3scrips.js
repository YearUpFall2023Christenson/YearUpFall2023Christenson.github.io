// header scroll
let header = document.querySelector('header');

window.addEventListener('scroll',() => {
    header.classList.toggle('shadow', window.scrollY > 0);
});



// Swiper
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.home', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        
        // If you need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
