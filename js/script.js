//burger menu
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__right');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const menuLinks = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
        // console.log("menu.classList.add('header__nav-active');");
    });
    menuCloseItem.addEventListener('click', () => {
        // console.log("menu.classList.remove('header__nav-active');");
        menu.classList.remove('header__nav-active');
    });

    if (window.innerWidth<970) {
        for (let i = 0; i < menuLinks.length; i += 1){
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav-active');
            });
        }
    }
}());


//slider
let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    centeredSlides:true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        // when window width is >= 320px
        970: {
            slidesPerView: 2
        },
        1240: {
            slidesPerView: 3
        },

    }
});


//contacts
const contactButtons = document.querySelectorAll('.contact__right-office');
const contactMaps = document.querySelectorAll('.contact__right-map');
const offices = document.querySelector('.contact__right-offices');

function addClassActive() {
    for (let contactButton of contactButtons) {
        contactButton.classList.toggle('office-active');
    }
}

function changeMap() {
    for (let contactMap of contactMaps) {
        contactMap.classList.toggle('hidden');
    }
}

offices.addEventListener('click', function (event) {
    if(event.target.closest('.contact__right-office')) {
        addClassActive();
        changeMap();
    }
});