$(document).ready(function() {

	// Navigation
	$('.drop-down-trigger').on('click', function(event) {
		event.preventDefault();
		$('.drop-down').toggleClass('active');
	});

	$('.panel-hero').on('click', function(event) {
		event.preventDefault();
		
		$('.drop-down').removeClass('active');

	});

	// Typed Effect
	$('.typed-status').typed({
		strings: ["What's on your mind?"],
		typeSpeed: 100
	});

	$('#status').focus(function(event) {
		$('.typed-wrapper').css('display', 'none');
	});

	$('#status').focusout(function(event) {
		/* Act on the event */
		if( !$(this).val() ) {
			$('.typed-wrapper').css('display', 'block');
		} else {
			$('.typed-wrapper').css('display', 'none');
		}
	});

	// Masonry Grid View
	var	container = $('#streamGrid');
	var	msnry = new Masonry( container[0], {
		itemSelector: '.stream-grid-item'
	});

	// View Switch
	$('.view-tab').each(function(){
		
		var tab = $(this).attr('href');
		
		$(this).on('click', function(events) {
			events.preventDefault();

			$('.view-tab .icon-list, .view-tab .icon-grid').removeClass('active');
			$(this).children('.icon-list, .icon-grid').addClass('active');

			$('.view-display').removeClass('active');
			$(tab).addClass('active');
		});

	});

	// Modal
	$('#modalOpen').on('click', function(event) {
		event.preventDefault();
		$('.modal, .modal-block').addClass('active');
	});

	$('#modalClose, #modal').on('click', function(event) {
		event.preventDefault();
		$('.modal, .modal-block').removeClass('active');
	});

});