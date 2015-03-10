$(document).ready(function() {

	// Masonry Grid View
	var	container = $('#streamGrid');
	var	msnry = new Masonry( container[0], {
		itemSelector: '.stream-grid-item'
	});

	// View Switch
	$('.view-tab').each(function(){
		var tab = $(this).attr('href');

		console.log(tab);
		
		$(this).on('click', function(event) {
			event.preventDefault();

			$('.view-tab .icon-list, .view-tab .icon-grid').removeClass('active');
			$(this).children('.icon-list, .icon-grid').addClass('active');

			$('.view-display').removeClass('active');
			$(tab).addClass('active');
		});

	});
});