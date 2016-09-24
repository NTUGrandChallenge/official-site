var trape_right = $(window).width() - $('#navbar .navbar-right').offset().left + 50;
$('head').append('<style id="after-width">.fixed .row::after {	width: ' + trape_right + 'px;	}</style>');
$(window).on('resize', function(){
	if($('#after-width').length != 0) {
		$('#after-width').remove();
	}
	trape_right = $(window).width() - $('#navbar .navbar-right').offset().left + 50;
    $('head').append('<style id="after-width">.fixed .row::after {	width: ' + trape_right + 'px;	}</style>');
});

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
	$('.fixed .row::after').css('background-color', 'red');
})