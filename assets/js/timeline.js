/* Skrollr init */
// var s = skrollr.init();
// skrollr.get().refresh();
$(document).ready(function(){
	var s = skrollr.init({forceHeight:false});
	window.onload=function() {
		s.refresh();
	};
});

/* Anchors */
var originalColor = '#ffffff',
	selectedColor = '#ffeb32';

function anchorColorChange(anchor) {
	var i = 1;
	for(i; i <= $('.anchor').length; i++) {
		$('#anchor-stage' + i).css('background-color', originalColor);
	}
	$(anchor).css('background-color', selectedColor);
}

function toContent(selector) {
	var selector = selector,
		$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	$body.animate({
		scrollTop: $(selector).offset().top
	}, 600);
	return false;
}

(function() {
	// Add scroll-to anchor on li
	$('#anchor-stage1').click(function() {
		anchorColorChange(this);
	    toContent('#stage1');
	});
	$('#anchor-stage2').click(function() {
		anchorColorChange(this);
	    toContent('#stage2');
	});
	$('#anchor-stage3').click(function() {
	    anchorColorChange(this);
	    toContent('#stage3');
	});
	$('#anchor-stage4').click(function() {
	    anchorColorChange(this);
	    toContent('#stage4');
	});
	$('#anchor-stage5').click(function() {
	    anchorColorChange(this);
	    toContent('#stage5');
	});
	// to top
	$('#to-top').click(function() {
	    toContent('#page-top');
	});
})();

/* SVG
var flow = $('#flow');
var fromOffset = flow.attr('stroke-dashoffset');
var maxHeight = $('#flow')[0].getBoundingClientRect().height - $(window).height();
*/

var $window = $(window),
	stage1 = $('#stage1'),
	stage2 = $('#stage2'),
	stage3 = $('#stage3'),
	stage4 = $('#stage4'),
	stage5 = $('#stage5'),
	events1 = $('#stage1 > .events'),
	events2 = $('#stage2 > .events'),
	events3 = $('#stage3 > .events'),
	events4 = $('#stage4 > .events'),
	events5 = $('#stage5 > .events');

$(window).scroll(function() {
	/*
	var currentProgress = ($(window).scrollTop() < maxHeight) ? fromOffset * (1 - $(window).scrollTop() / maxHeight) : 0;
	// currentProgress getting lessened
	flow.attr('stroke-dashoffset', currentProgress);
	*/

	/* Content Div Animation */
	if($window.scrollTop() >= stage1.offset().top &&
		$window.scrollTop() < stage2.offset().top) {
		anchorColorChange('#anchor-stage1');
		events1.addClass('left-animated');
	}
	if($window.scrollTop() >= stage2.offset().top &&
		$window.scrollTop() < stage3.offset().top) {
		anchorColorChange('#anchor-stage2');
		events2.addClass('right-animated-1');
	}
	if($window.scrollTop() >= stage3.offset().top &&
		$window.scrollTop() < stage4.offset().top) {
		anchorColorChange('#anchor-stage3');
		events3.addClass('left-animated');
	}
	if($window.scrollTop() >= stage4.offset().top &&
		$window.scrollTop() < stage5.offset().top) {
		anchorColorChange('#anchor-stage4');
		events4.addClass('right-animated-1');
	}
	if($window.scrollTop() >= stage5.offset().top) {
		anchorColorChange('#anchor-stage5');
		events5.addClass('right-animated-2');
	}
});