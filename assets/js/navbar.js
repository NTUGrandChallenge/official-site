/*
var trape_right = $('#navbar .navbar-right').width() + ($(window).width() - $('#navbar .navbar-right').offset().left);
$('.fixed .row::after').css('width', trape_right);
*/

// Navbar div centered
var as = $('#navbar-sign');
var ai = $('#navbar-introduce');
var aa = $('#navbar-about');
var ds = $('#dropdown-sign');
var di = $('#dropdown-introduce');
var da = $('#dropdown-about');

function navCenter(a, dd) {
	var liWidth = a.outerWidth();
	var dWidth = dd.outerWidth();
	dd.css('right', (liWidth - dWidth) / 2);
}

$(function() {
	navCenter(as, ds);
	navCenter(ai, di);
	navCenter(aa, da);
})