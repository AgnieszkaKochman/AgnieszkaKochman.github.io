var angle = 0;
var windowWidth = window.innerWidth;

var b = document.documentElement;
b.setAttribute('data-useragent',  navigator.userAgent);
b.setAttribute('data-platform', navigator.platform );

// IE 11.0 == Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko 

$(document).ready(function($) {
    var sections = $('.page-section');
    var direction = 'up';
    var currentSection = 0;

    $('nav a').click(toHref);
    $('#menu-button').click(toggleMenu);
    $('#arrow').click(toHref);
    $('.lnr-chevron-left').click(turnLeft);
    $('.lnr-chevron-right').click(turnRight);

    $(window).scroll(scrollWindow);

    $(window).resize(function() {
        $('html, body').scrollTop(sections.eq(currentSection).offset().top);
    });

    // mousewheel animation
    $(document.body).on('DOMMouseScroll mousewheel', function(e) {
        if ( windowWidth > 1024 ) {
            if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
                direction = 'down';
            } else {
                direction = 'up';
            }

            // find currently visible section
            currentSection = -1;
            sections.each( function(i) {
                if (currentSection < 0 && ($(this).offset().top >= $(window).scrollTop())) {
                    currentSection = i;
                }
            });
            if (direction == 'up' && currentSection > 0) {
                currentSection--;
            }
            if (direction == 'down' && currentSection < sections.length) {
                currentSection++;
            }


            if (currentSection < 5) {
                $('html, body').stop().animate({
                        scrollTop: sections.eq(currentSection).offset().top
                    
                }, 1000);
            }
            return false;
        }
    });
});


/*
 * Function is called when the window is scrolling
 */
function scrollWindow() {
    var scrollPos = $(document).scrollTop();
    var windowHeight = $(window).height();
    var offset = 0.4 * windowHeight;
    
    $('nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("data-href"));
        var color = currLink.attr("data-color");
        var colorArr = ['turquoise', 'violet', 'yellow', 'green', 'blue'];
        var firstBlockLeft = $(currLink.attr("data-href") + " .first-block"),
            secondBlockLeft = $(currLink.attr("data-href") + " .second-block"),
            firstBlockRight = $(currLink.attr("data-href") + " .first-block-small"),
            secondBlockRight = $(currLink.attr("data-href") + " .second-block-small");

        // add class active in menu and show color blocks    
        if (refElement.position().top - offset <= scrollPos && refElement.position().top + refElement.height() - offset > scrollPos) {
            $('nav a').removeClass("active");
            currLink.addClass("active");

            for (i = 0; i < 5; i++) {
                $('.lnr-star-half').removeClass(colorArr[i]);
            }
            $('.lnr-star-half').addClass(color);

            if ( windowWidth > 768 ) {
                firstBlockLeft.css({'left': '-90%'});
                secondBlockLeft.css({'left': '-80%'});
                firstBlockRight.css({'right': '-90%'});
                secondBlockRight.css({'right': '-80%'});
            }
        }
        else { // remove class active in menu and hide color blocks
            currLink.removeClass("active");

            if ( windowWidth > 768 ) {
                firstBlockLeft.css({'left': '-130%'});
                secondBlockLeft.css({'left': '-130%'});
                firstBlockRight.css({'right': '-130%'});
                secondBlockRight.css({'right': '-130%'});
            }
        }
    });

}


/*
 * Function animates page to a designated location
 */
function toHref() {
    $('html, body').animate({
        scrollTop: $($(this).attr("data-href")).offset().top
    }, 1000);
}


/*
 * Function turns left carousel with projects
 */
function turnLeft() {
    angle += 72;
    $('#carousel').css('transform', 'translateZ(-367px) rotateY(' + angle + 'deg)');
}

/*
 * Function turns right carousel with projects
 */
function turnRight() {
    angle -= 72;
    $('#carousel').css('transform', 'translateZ(-367px) rotateY(' + angle + 'deg)');
}


/*
 * Function show and hide menu
 */
function toggleMenu() {
    if( !$('.menu-button').hasClass('active-menu') ) {
        $(this).addClass('active-menu');
        $('nav').css('display', 'block');
    } else {
        $(this).removeClass('active-menu');
        $('nav').css('display', 'none');
    }
}


/*
* Function check if email is correct
*/
function validateEmail(email) {
    var testEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/;

    return testEmail.test(email);
}


/*
* Function check contact form
*/
function validateForm() {
    var name = document.forms['contactForm']['formName'].value,
        email = document.forms['contactForm']['formEmail'].value,
        message = document.forms['contactForm']['formText'].value;

    // check name
    if ( name.length < 3 ) {
        $( '#name-error' ).text( 'Name must be at least 3 characters' );
        return false;
    } else {
        $( '#name-error' ).text( '' );
    }

    // check email
    if ( !validateEmail(email) ) {
        $( '#email-error' ).text( 'Type valid email' );
        return false;
    } else {
        $( '#email-error' ).text( '' );
    }
}