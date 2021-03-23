$(document).ready(function () {
		var hotelSlider = new Swiper('.hotel-slider', {
		// Optional parameters
		loop: true,

		// Navigation arrows
		navigation: {
			nextEl: '.hotel-slider__button--next',
			prevEl: '.hotel-slider__button--prev',
		},
		effect: "coverflow"
	});
	var reviewsSlider = new Swiper('.reviews-slider', {
		// Optional parameters
		loop: true,

		// Navigation arrows
		navigation: {
			nextEl: '.reviews-slider__button--next',
			prevEl: '.reviews-slider__button--prev',
		},
		
	});

	var menuButton = $(".menu-button");
	menuButton.on("click", function () {
		$(".navbar-menu").toggleClass("navbar-menu--visible");
	});

	var modalButton = $("[data-toggle=modal]");
	var closeModalButton = $(".modal__close");
	modalButton.on("click", openModal);
	closeModalButton.on("click", closeModal);

	function openModal() {
		var modalOverlay = $(".modal__overlay");
		var modalDialog = $(".modal__dialog");
		modalOverlay.addClass("modal__overlay--visible");
		modalDialog.addClass("modal__dialog--visible");
	}
	function closeModal() {
		event.preventDefault()
		var modalOverlay = $(".modal__overlay");
		var modalDialog = $(".modal__dialog");
		modalOverlay.removeClass("modal__overlay--visible");
		modalDialog.removeClass("modal__dialog--visible");
	}
	// Обработка форм
	$(".form").each(function () {
		$(this).validate({
			errorClass: "invalid",
			messages: {
				name: {
					required: "Please enter a name",
					minlenght: "Name must be at least 2 letters long",
				},
				email: {
					required: "We need your email address to contact you",
					email: "Your email address must be in the format of name@domain.com",
				},
				phone: {
					required: "A telephone is required",
				},
  		},
		});
		$('.phone_us').mask('+7(000) 000-0000');
	});
	AOS.init();
});