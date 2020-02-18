'use strict'


let iconMenu = document.querySelector('.icon-menu');

iconMenu.addEventListener('click', function() {
	iconMenu.classList.toggle('active');
	let menuBody = document.querySelector('.menu__body');
	menuBody.classList.toggle('active');
	document.body.classList.toggle('lock');
})
 


$(document).ready(function(){

	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}

	ibg();


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
    









