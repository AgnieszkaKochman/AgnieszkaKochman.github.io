var slider = $('#slider');
var slideList = $('#slide-list');
var slide = $('#slider li');
var numberOfSlides = 4;
var currentSlide = 0; // first image default


$(document).ready( function() {
	initSlider();
	setArrowNavigation();
	setDotsNavigation();

	$('#arrow-left').on('click', function() {
		move(currentSlide - 1)
	});
	$('#arrow-right').on('click', function() {
		move(currentSlide + 1)
	});

	$('.dot').each( function() {
		$(this).on('click', function() {
			var thisIndex = parseInt($(this).attr('id').slice(4,5));
			move(thisIndex);
		});
	} );
} );


/**
* Function calculates and sets slide width, paddings and distance from left
*/
function initSlider() {
	var slideWidth = 0.9 * (100 / numberOfSlides);
	var slidePadding = 0.05 * (100 / numberOfSlides);
	var index = 0;

	slide.each( function() {
		$(this).attr('data-id', index);
		$(this).css( {
			'width' : slideWidth + '%', 
			'padding-left' : slidePadding + '%',
			'padding-right' : slidePadding + '%',
			'left' : (100 / numberOfSlides) * index + '%'
		} );
		index++;
	} );
}


/**
* Function adds arrow navigation to slider
*/
function setArrowNavigation() {
	slider.append('<span id="arrow-left" class="fa fa-angle-left arrow arrow-left"></span>');
	slider.append('<span id="arrow-right" class="fa fa-angle-right arrow arrow-right"></span>');
}


/**
* Function adds dots navigation to slider
*/
function setDotsNavigation() {
	slider.append('<div id="dots-nav" class="dots-nav"></div>');
	var dotsNav = $('#dots-nav');

	for (i = 0; i <= numberOfSlides - 1; i++ ) {
		dotsNav.append('<span id="nav-' + i + '" class="fa fa-circle-o dot"></span>');
	}

	$('#nav-0').addClass('fa-circle');
}


/**
* Function moves slider to selected image
*/
function move(newSlide) {
	if (newSlide < 0 || newSlide >= numberOfSlides) return;

	var marginLeft = newSlide * (-100) + '%';
	slideList.animate({'margin-left' : marginLeft}, 500, function() {
		currentSlide = newSlide;
		changeActiveDot();
	});
}


/**
* Function sets active dot for current slide
*/
function changeActiveDot() {
	$('.dot').each( function() {
		$(this).removeClass('fa-circle');
	} );

	$('#nav-' + currentSlide).addClass('fa-circle');
}