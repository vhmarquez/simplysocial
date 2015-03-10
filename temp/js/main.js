$(document).ready(function() {

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
		$('.modal').addClass('active');
	});

	$('#modalClose').on('click', function(event) {
		event.preventDefault();
		$('.modal').removeClass('active');
	});
});