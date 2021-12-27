$(document).ready(function () {
	$('.slider').slick({
		adaptiveHeight: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
		initialSlide: 1,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			}
		],
		mobileFirst: true,
	});
});
