(function($){
	"use strict";

	document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })

	// Campus slides
	$('.campus-slider').owlCarousel({
		nav: false,
		loop: true,
		dots: false,
		center: true,
		margin: 45,
		autoHeight:true,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			},
			1520: {
				items: 5
			}
		}
	});

}(jQuery));