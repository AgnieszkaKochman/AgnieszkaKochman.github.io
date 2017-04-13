$(document).ready( function() {
	$( 'nav a' ).on( 'click', scrollToHref );
	$( '.menu-button' ).on( 'click', toggleMenu );
} );


/* Scroll to location i n href attribute */
function scrollToHref() {
	var href = $( this ).attr( 'href' );
	var navHeight = $( 'nav' ).innerHeight();

	$( 'html, body' ).animate( { scrollTop: $( href ).offset().top-navHeight }, 1000 );
}


/* Check if email is correct */
function validateEmail(email) {
	var testEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/;

	return testEmail.test(email);
}


/* Check if form is correct */
function validateForm() {
	var name = document.forms['contact']['name'].value,
		email = document.forms['contact']['email'].value;

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


/* Show and hide menu */
function toggleMenu() {
	$('nav ul').toggleClass('showMenu');
}