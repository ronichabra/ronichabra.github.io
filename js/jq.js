$(document).ready(function() {
	
	//home
	$(document).on('click', '#HomeJQ', function() {
		$("html, body").animate({scrollTop: '0px' }, 3000, function() {
			// Animation complete.
		});
	});
	
	//gallery
	$(document).on('click', '#3D-GalleryJQ', function() {
		$("html, body").animate({scrollTop: $('#galleryBG').offset().top }, 2000, function() {
			// Animation complete.
		});
	});
	
	//movies
	$(document).on('click', '#moviesJQ', function() {
		$("html, body").animate({scrollTop:$('#moviesBG').offset().top  }, 2000, function() {
			// Animation complete.
		});
	});
	
	//unity
	$(document).on('click', '#UnityJQ', function() {
		$("html, body").animate({scrollTop: $('#unityBG').offset().top  }, 2000, function() {
			// Animation complete.
		});
	});
	//web
	$(document).on('click', '#webJQ', function() {
		$("html, body").animate({scrollTop: $('#webBG').offset().top }, 2000, function() {
			// Animation complete.
		});
	});
	//connect
	$(document).on('click', '#contactJQ', function() {
		$("html, body").animate({scrollTop: $('#connectBG').offset().top }, 2000, function() {
			// Animation complete.
		});
	});
	
});
