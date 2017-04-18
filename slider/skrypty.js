var slider = document.getElementById('slider');
var slideList = document.getElementById('slide-list');
var slide = document.querySelectorAll('.slide');
var numberOfSlides = 4;
var currentSlide = 0; // first image default
var index = 0;



function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}


function fn() {
	initSlider();
	setArrowNavigation();
	setDotsNavigation();
}



document.getElementById('arrow-left').addEventListener('click', function() {
	move(currentSlide - 1)
});

document.getElementById('arrow-right').addEventListener('click', function() {
	move(currentSlide + 1)
});


function clickDot() {
	var thisIndex = parseInt(this.getAttribute('id').slice(4,5));
	move(thisIndex);
}


/**
* Function calculates and sets slide width, paddings and distance from left
*/
function initSlider() {
	slide.forEach(setImage);
}

function setImage(item) {
	var slideWidth = 0.9 * (100 / numberOfSlides);
	var slidePadding = 0.05 * (100 / numberOfSlides);
	

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
	spanLeft.classList.add('fa');
	spanLeft.classList.add('fa-angle-left');
	spanLeft.classList.add('arrow');
	spanLeft.classList.add('arrow-left');
	slider.appendChild(spanLeft);

	var spanRight = document.createElement('span');
	spanRight.setAttribute('id', 'arrow-right');
	spanRight.classList.add('fa');
	spanRight.classList.add('fa-angle-right');
	spanRight.classList.add('arrow');
	spanRight.classList.add('arrow-right');
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
		span.classList.add('fa');
		span.classList.add('fa-circle-o');
		span.classList.add('dot');
		dotsNav.appendChild(span);
	}

	var nav0 = document.getElementById('nav-0');
	nav0.classList.add('fa-circle');

	var dots = document.querySelectorAll('.dot');
	dots.forEach(dot => dot.addEventListener('click', clickDot));
}


/**
* Function moves slider to selected image
*/
function move(newSlide) {
	if (newSlide < 0 || newSlide >= numberOfSlides) return;

	var marginLeft = newSlide * (-100);
	var marginLeftProc = marginLeft + '%';
	var tmp = currentSlide * (-100);
	var id = setInterval(frame, 10);
	var step;

	if (currentSlide < newSlide) step = 2;
	else step = -2;

    function frame() {
        if (tmp == marginLeft) {
            clearInterval(id);
            currentSlide = newSlide;
			changeActiveDot();
        } else {
            tmp -= step;
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