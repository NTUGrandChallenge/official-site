// 5 Fields indicators
var field = ['smart', 'health', 'environment', 'society', 'agriculture'];

function getField(fieldNum) {
	return field[fieldNum - 1];
}

// Each field's view more button
function getViewmoreBtn(fieldNum) {
	return $('#' + getField(fieldNum) + ' + .view-more')
}

// Each field's close button
function getCloseBtn(fieldNum) {
	return $('#' + getField(fieldNum) + ' ~ .close-view');
}

// Each field's teams
function getTeams(fieldNum) {
	return $('#' + getField(fieldNum) + ' ~ .teams');
}

// Showing team info
function showcase(field) {
	// setTimeout( function() {
		getTeams(field).show();
		getCloseBtn(field).css('display', 'block');
	// }, 1000 );
}

// Closing team info
function hidecase(field) {
	// setTimeout( function() {
		getTeams(field).hide();
		getCloseBtn(field).css('display', 'none');
	// }, 1000 );
}

// Init current window width
var windowWidth = $(window).width();

// Reset windowWidth value when browser resizes
$(window).resize(function(event) {
	windowWidth = $(window).width();
});

// Init slide width
var slideWidth = Math.floor( 0.74 * windowWidth );

function horizontalScroll(amount) {
	$('html, body').animate({
		scrollLeft: amount
	}, 600);
}

function toSlide(index) {
	horizontalScroll( (index - 1) * slideWidth );
}

// EventListener
for(var fnum = 1; fnum <=5; fnum++) {
	(function(fnum) {
		// Showing team info
		getViewmoreBtn(fnum).click(function() {
			showcase(fnum);
			// Hide view more button
			$(this).toggle();
		});

		// Closing team info
		getCloseBtn(fnum).click(function() {
			hidecase(fnum);
			// Show view more button
			getViewmoreBtn(fnum).toggle();
		});

		// Scrolling Slides
		$('#' + getField(fnum)).click(function() {
			toSlide(fnum);
		});
	}(fnum));
}
