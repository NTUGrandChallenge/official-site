/* Skrollr init */
$(document).ready(function(){
	var s = skrollr.init({forceHeight:false});
	window.onload = function() {
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

/* SVG */
var flow = $('#flow');
var fromOffset = flow.attr('stroke-dashoffset');
var maxHeight = $('#flow-base')[0].getBoundingClientRect().height - $(window).height();

$(window).scroll(function() {
	var currentProgress = ($(window).scrollTop() < maxHeight) ? fromOffset * (1 - $(window).scrollTop() / maxHeight) : 0;
	// currentProgress getting lessened
	flow.attr('stroke-dashoffset', currentProgress);

	/* Scroll Anchor Respond */
	if($(window).scrollTop() >= $('#stage1').offset().top &&
		$(window).scrollTop() < $('#stage2').offset().top) {
		anchorColorChange('#anchor-stage1');
	}
	if($(window).scrollTop() >= $('#stage2').offset().top &&
		$(window).scrollTop() < $('#stage3').offset().top) {
		anchorColorChange('#anchor-stage2');
	}
	if($(window).scrollTop() >= $('#stage3').offset().top &&
		$(window).scrollTop() < $('#stage4').offset().top) {
		anchorColorChange('#anchor-stage3');
	}
	if($(window).scrollTop() >= $('#stage4').offset().top &&
		$(window).scrollTop() < $('#stage5').offset().top) {
		anchorColorChange('#anchor-stage4');
	}
	if($(window).scrollTop() >= $('#stage5').offset().top) {
		anchorColorChange('#anchor-stage5');
	}
})