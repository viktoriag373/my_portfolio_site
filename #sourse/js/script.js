'use strict'

$(document).ready(function(){
	let isMenuOpen = false;
	$('.icon-menu').click(function(event){
		if (isMenuOpen === false) {
			openBurger()
		} else {
			closedBurger()		
		}
		// toggleClassBurger();
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




	// function toggleClassBurger(){
	// 	$('.icon-menu,.menu__body').toggleClass('active');
	// 	$('body').toggleClass('lock');
	// }


	let menuHeight = $('.header__row').height();

	$(function(){
        $("a[href^='#']").click(function(){
        	// toggleClassBurger();
        	closedBurger()
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top-menuHeight+"px"});
            return false;
        });
	});


	// function ibg(){
	// 	$.each($('.ibg'), function(index, val) {
	// 		if($(this).find('img').length>0){
	// 			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	// 		}
	// 	});
	// }

	// ibg();


	$('.slider').slick({
		arrow:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:2,
		slidesToScroll:1,
		speed:1000,
		autoplay:false,
		autoplaySpeed:2500,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			}
		]
	});





});
    








