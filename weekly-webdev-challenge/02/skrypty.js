$(document).ready(function() {
	$("#nav ul li a[href^='#']").on('click', function(e) {

	   e.preventDefault();

	   var hash = this.hash;

	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 300, function(){
	       window.location.hash = hash;
	     });

	});


	$(window).scroll(function() {
		var scrollPosition = $(document).scrollTop();
		var windowHeight = $(window).height();
		var offset = 0.4 * windowHeight;

		$("#nav ul li a").each(function() {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));

			if (refElement.position().top - offset <= scrollPosition && refElement.position().top + refElement.height() - offset > scrollPosition) {
				$("#nav ul li").removeClass("active");
				currentLink.parent("li").addClass("active");
			} else {
				currentLink.parent("li").removeClass("active");
			}
		});
	});
});