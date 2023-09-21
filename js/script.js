(function () {
    //Бургер меню
    const body = document.querySelector('body');
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__right');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const menuLinks = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
        body.classList.add('noScroll');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
        body.classList.remove('noScroll');
    });

    if (window.innerWidth<970) {
        for (let i = 0; i < menuLinks.length; i += 1){
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav-active');
                body.classList.remove('noScroll');
            });
        }
    }

    //"переключение" языка
    const languageMenu = document.querySelector('.header__language');
    const languageItems = document.querySelectorAll('.language__item');

    languageMenu.addEventListener('click', function(){
        languageMenu.classList.toggle('open');
    })

    languageMenu.addEventListener('click', (event) => {
        // Отлавливаем элемент в родителе, на который нажали
        let target = event.target;
        // Проверяем, тот ли это элемент, который нам нужен
        if(target.classList.contains('language__item')) {
            for(let i = 0; i < languageItems.length; i++) {
                // Убираем класс у других
                languageItems[i].classList.remove('language__item-selected');
            }
            // Добавляем тому, на который нажали
            target.classList.add('language__item-selected');
        }

    });

    //Активные пункты меню
    let url=document.location.href;
    $.each($("#header__nav a"),function(){
        if(this.href === url){
            $(this).addClass('active');
        };
    });

    //аккордеон
    $(".question").click(function(){
        let $answer = $(this).next('.answer');
        $answer.slideToggle();
    });


    //анимация
    var rellax = new Rellax('.rellax', {
        speed: -1,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });

    //Скролл к блоку Контакты
    $('#toContacts').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 400);
        e.preventDefault();
    });

    //галерея
    if(document.querySelector('.mySwiper')){
        let swiper = new Swiper(".mySwiper", {
            centeredSlides:true,
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper__arrow-next",
                prevEl: ".swiper__arrow-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                // when window width is >= 320px
                760: {
                    slidesPerView: 2
                },
                970: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1240: {
                    slidesPerView: 3
                },
            }
        });
    }

    //модальные окна
    const getFree = document.querySelectorAll('.goal__card-get');
    const popup = document.querySelector('#popup');
    const showThank = document.querySelector('#showThank');
    const thankPopup = document.querySelector('#thankPopup');
    const closePopup = document.querySelectorAll('.popup__close');
    const popupBackgrounds = document.querySelectorAll('.popup__background');
    const sendContact = document.querySelector('#sendContact');

    if(getFree){
        for (let btn of getFree) {
            btn.addEventListener('click', function(){
                togglePopup(popup);
            });
        }
    }
    if(sendContact){
        sendContact.addEventListener('click', function(){
            togglePopup(thankPopup);
        });
    }
    if(showThank){
        showThank.addEventListener('click', function(){
            togglePopup(popup);
            togglePopup(thankPopup);
        });
    }

    if(closePopup){
        for(let closeBtn of closePopup){
            closeBtn.addEventListener('click', function(){
                let parentPopup = closeBtn.closest('.popup');
                togglePopup(parentPopup);
            });
        }
    }

    if(popupBackgrounds){
        for(let popupBackground of popupBackgrounds){
            popupBackground.addEventListener('click', function(){
                let parentPopup = popupBackground.closest('.popup');
                togglePopup(parentPopup);
            });
        }
    }
    function togglePopup(popup){
        popup.classList.toggle('active');
        body.classList.toggle('noScroll');
    }


    //переключение карты
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
    if(offices){
        offices.addEventListener('click', function (event) {
            if(event.target.closest('.contact__right-office')) {
                addClassActive();
                changeMap();
            }
        });
    }
}());
