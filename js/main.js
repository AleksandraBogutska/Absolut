
// Меню бургер

$(document).ready(function() {
	$('.menu__burger').click(function(event) {
		$('.menu__burger,.menu__menu,.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header__list li').click(function(event) {
		$('.menu__burger,.menu__menu,.menu__body').toggleClass('active');
		
	});
});

// Слайдер

$(document).ready(function() {
	$('.slider__wrapper').slick({
		speed:900,
		autoplay:true,
		autoplaySpeed:2000,
		pauseOnHover:true, 
		centerMode:true,
		variableWidth:true,
		adaptiveHeight:true,
		responsive:[
			{
				breakpoint: 1287,
				settings: {
					arrows: false,
					dots: true,
				}
			}
		]
	});
	$('.slider__wrapper').slick('setPosition');
});


// Модальное окно

const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
const modal = document.getElementById('wrapper-modal');
const footer = document.getElementById('footer');
const form = document.getElementById('formWrapper');

btnOpen.addEventListener('click', () => {
	modal.classList.add('active');
	footer.classList.add('active');
	form.classList.add('active')
});

const closeModal = () => {
	modal.classList.remove('active');
	footer.classList.remove('active');
	form.classList.remove('active');
}

btnClose.addEventListener('click', closeModal);

// Анимация картинок на сайте

 $(function () {
	$(window).scroll(function() {
	    $('.animatedImg').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeIn");
	        }
	    });
	});

});

 // Анимация линии в футере

 $(function () {
	$(window).scroll(function() {
	    $('.footer__line').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeftBig");
	        }
	    });
	});

});

 $(function () {
	$(window).scroll(function() {
	    $('.title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeIn");
	        }
	    });
	});

});

 // Перезагрузка страницы



 
