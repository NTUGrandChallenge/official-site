/* Skrollr init */
$(document).ready(function(){
	var s = skrollr.init({forceHeight:false});
	window.onload = function() {
		s.refresh();
	};
});

/* Anchors */
var originalColor = '#ffffff',
	selectedColor = '#ffeb32',
	anchorNum = $('.anchor').length;

function anchorColorChange(anchor) {
	var i = 1;
	for(i; i <= anchorNum; i++) {
		$('#anchor-stage' + i).css('background-color', originalColor);
	}
	$(anchor).css('background-color', selectedColor);
}

function toContent(selector) {
	var selector = selector,
		$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	$body.animate({
		scrollTop: $(selector).offset().top + 1
	}, 700);
	return false;
}

(function() {
	// Add scroll-to anchor on li
	$('#anchor-stage1').click(function() {
		anchorColorChange('#anchor-stage1');
	    toContent('#stage1');
	});
	$('#anchor-stage2').click(function() {
		anchorColorChange('#anchor-stage2');
	    toContent('#stage2');
	});
	$('#anchor-stage3').click(function() {
	    anchorColorChange('#anchor-stage3');
	    toContent('#stage3');
	});
	$('#anchor-stage4').click(function() {
	    anchorColorChange('#anchor-stage4');
	    toContent('#stage4');
	});
	$('#anchor-stage5').click(function() {
	    anchorColorChange('#anchor-stage5');
	    toContent('#stage5');
	});
	// to top
	$('#to-top').click(function() {
	    toContent('#page-top');
	});
})();

/* SVG */
var flow = $('#flow'),
	fromOffset = flow.attr('stroke-dashoffset'),
	// Height of svg: $('#flow-base')[0].getBoundingClientRect().height
	maxHeight = $(document).height() - $(window).height();

var stage1Top = $('#stage1').offset().top,
	stage2Top = $('#stage2').offset().top,
	stage3Top = $('#stage3').offset().top,
	stage4Top = $('#stage4').offset().top,
	stage5Top = $('#stage5').offset().top;
	
$(window).scroll(function() {
	console.log($(window).scrollTop());
	var currentProgress = ($(window).scrollTop() <= maxHeight) ? fromOffset * (1 - $(window).scrollTop() / maxHeight) : 0;
	// CurrentProgress getting lessened
	flow.attr('stroke-dashoffset', currentProgress);

	/* Scroll Anchor Respond */
	var windowTop = $(window).scrollTop();

	if(windowTop >= stage1Top &&
		windowTop < stage2Top) {
		anchorColorChange('#anchor-stage1');
	}
	if(windowTop >= stage2Top &&
		windowTop < stage3Top) {
		anchorColorChange('#anchor-stage2');
	}
	if(windowTop >= stage3Top &&
		windowTop < stage4Top) {
		anchorColorChange('#anchor-stage3');
	}
	if(windowTop >= stage4Top &&
		windowTop < stage5Top) {
		anchorColorChange('#anchor-stage4');
	}
	if(windowTop >= stage5Top) {
		anchorColorChange('#anchor-stage5');
	}
});