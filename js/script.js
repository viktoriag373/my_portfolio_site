'use strict'


let iconMenu = document.querySelector('.icon-menu');

iconMenu.addEventListener('click', function() {
	iconMenu.classList.toggle('active');
	let menuBody = document.querySelector('.menu__body');
	menuBody.classList.toggle('active');
	document.body.classList.toggle('lock');
})




function ibg(){
	document.querySelectorAll(".ibg").forEach(el => {
		if(el.querySelector('img')){
			el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
		}
	});
}

ibg();

 


$(document).ready(function(){
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
    









