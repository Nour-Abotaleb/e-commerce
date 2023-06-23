// Selectors

let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');
let icon = document.querySelector('#icon');
let scrollUp = document.querySelector('.scroll-up');

window.addEventListener('scroll', function() {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('active', windowPosition)
});

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
});
icon.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.src = 'cookimages/sun.png';
    } else {
        icon.src = 'cookimages/moon.png';
    }
});

window.addEventListener('scroll', function () {
    'use strict';

    if (window.pageYOffset >= 400) {
        scrollUp.style.display = 'block';
    } else {
        scrollUp.style.display = 'none';
    }
});

scrollUp.addEventListener('click', function () {
    'use strict';

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});