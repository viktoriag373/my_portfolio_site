'use strict'

$(document).ready(function(){
    let isMenuOpen = false;
    $('.icon-menu').click(function(event){
        if (isMenuOpen === false) {
            openBurger()
        } else {
            closedBurger()
        }
    })


    function openBurger() {
        isMenuOpen = true;
        $('.icon-menu,.menu__body').addClass('active');
        $('body').addClass('lock');
    }

    function closedBurger() {
        isMenuOpen = false;
        $('.icon-menu,.menu__body').removeClass('active');
        $('body').removeClass('lock');
    }


    let menuHeight = $('.header__row').height();

    $(function(){
        $("a[href^='#']").click(function(){

            closedBurger()
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top-menuHeight+"px"});
            return false;
        });
    });

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: false,
        trueslidesPerView: 1,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});









