var slider = document.getElementById('slider');
var slideList = document.getElementById('slide-list');
var slide = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');
var numberOfSlides = 4;
var currentSlide = 0; // first image default

initSlider();
setArrowNavigation();
setDotsNavigation();

document.getElementById('arrow-left').addEventListener('click', function() {
	move(currentSlide - 1)
});

document.getElementById('arrow-right').addEventListener('click', function() {
	move(currentSlide + 1)
});

dots.forEach(dot => dot.addEventListener('click', clickDot));

function clickDot() {
	var thisIndex = parseInt(this.getAttribute('id').slice(4,5));
	move(thisIndex);
}


/**
* Function calculates and sets slide width, paddings and distance from left
*/
function initSlider() {
	var slideWidth = 0.9 * (100 / numberOfSlides);
	var slidePadding = 0.05 * (100 / numberOfSlides);
	var index = 0;

	slide.forEach(setImage);
}

function setImage(item) {
	item.setAttribute('data-id', index);
	item.style.width = slideWidth + '%';
	item.style.paddingLeft = slidePadding + '%';
	item.style.paddingRight = slidePadding + '%';
	item.style.left = (100 / numberOfSlides) * index + '%';

	index++;
}


/**
* Function adds arrow navigation to slider
*/
function setArrowNavigation() {
	var spanLeft = document.createElement('span');
	spanLeft.setAttribute('id', 'arrow-left');
	spanLeft.classList.add('fa fa-angle-left arrow arrow-left');
	slider.appendChild(spanLeft);

	var spanRight = document.createElement('span');
	spanRight.setAttribute('id', 'arrow-right');
	spanRight.classList.add('fa fa-angle-right arrow arrow-right');
	slider.appendChild(spanRight);
}


/**
* Function adds dots navigation to slider
*/
function setDotsNavigation() {
	var dotsDiv = document.createElement('div');
	dotsDiv.setAttribute('id', 'dots-nav');
	dotsDiv.classList.add('dots-nav');
	slider.appendChild(dotsDiv);

	var dotsNav = document.getElementById('dots-nav');

	for (i = 0; i <= numberOfSlides - 1; i++ ) {
		var span = document.createElement('span');
		span.setAttribute('id', 'nav-' + i);
		span.classList.add('fa fa-circle-o dot');
		dotsNav.appendChild(span);
	}

	var nav0 = document.getElementById('nav-0');
	nav0.classList.add('fa-circle');
}


/**
* Function moves slider to selected image
*/
function move(newSlide) {
	if (newSlide < 0 || newSlide >= numberOfSlides) return;

	var marginLeft = newSlide * (-100) + '%';
	var tmp = 0;
	var id = setInterval(frame, 5);

    function frame() {
        if (tmp == marginLeft) {
            clearInterval(id);
            currentSlide = newSlide;
			changeActiveDot();
        } else {
            tmp -= newSlide;
            slideList.style.marginLeft = tmp + '%';
        }
    }
}


/**
* Function sets active dot for current slide
*/
function changeActiveDot() {
	var dots = document.querySelectorAll('.dot');

	dots.forEach(removeActiveClass);

	var dot = document.getElementById('nav-' + currentSlide);
	dot.classList.add('fa-circle');
}

function removeActiveClass(item) {
	item.classList.remove('fa-circle');
}