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

var stageTop = [];
stageTop.push($('#stage1').offset().top);
stageTop.push($('#stage2').offset().top);
stageTop.push($('#stage3').offset().top);
stageTop.push($('#stage4').offset().top);
stageTop.push($('#stage5').offset().top);

var display_c1_1 = stageTop[0],
	display_c1_2 = 0.7 * stageTop[0] + 0.3 * stageTop[1],
	display_c2_1 = 0.3 * stageTop[0] + 0.7 * stageTop[1],
	display_c2_2 = stageTop[1],
	display_c3 = stageTop[2],
	display_c4_1 = stageTop[3],
	display_c4_2 = 0.77 * stageTop[3] + 0.23 * stageTop[4],
	display_c5_1 = 0.3 * stageTop[3] + 0.7 * stageTop[4],
	display_c5_2 = stageTop[4];

var content1_1 = $('#content1-1'),
	content1_2 = $('#content1-2'),
	content2_1 = $('#content2-1'),
	content2_2 = $('#content2-2'),
	content3 = $('#content3'),
	content4_1 = $('#content4-1'),
	content4_2 = $('#content4-2'),
	content5_1 = $('#content5-1'),
	content5_2 = $('#content5-2');

$(window).scroll(function() {
	var currentProgress = ($(window).scrollTop() <= maxHeight) ? fromOffset * (1 - $(window).scrollTop() / maxHeight) : 0;
	// CurrentProgress getting lessened
	flow.attr('stroke-dashoffset', currentProgress);

	// Scroll Anchor Respond
	var windowTop = $(window).scrollTop();

	if(windowTop >= stageTop[0] &&
		windowTop < stageTop[1]) {
		anchorColorChange('#anchor-stage1');
	}
	if(windowTop >= stageTop[1] &&
		windowTop < stageTop[2]) {
		anchorColorChange('#anchor-stage2');
	}
	if(windowTop >= stageTop[2] &&
		windowTop < stageTop[3]) {
		anchorColorChange('#anchor-stage3');
	}
	if(windowTop >= stageTop[3] &&
		windowTop < stageTop[4]) {
		anchorColorChange('#anchor-stage4');
	}
	if(windowTop >= stageTop[4]) {
		anchorColorChange('#anchor-stage5');
	}

	// Content display
	if(windowTop >= display_c1_1) {
		content1_1.addClass('fadein');
		content1_1.css('opacity', '1.0');
	}
	if(windowTop >= display_c1_2) {
		content1_2.addClass('fadein');
		content1_2.css('opacity', '1.0');
	}
	if(windowTop >= display_c2_1) {
		content2_1.addClass('fadein');
		content2_1.css('opacity', '1.0');
	}
	if(windowTop >= display_c2_2) {
		content2_2.addClass('fadein');
		content2_2.css('opacity', '1.0');
	}
	if(windowTop >= display_c3) {
		content3.addClass('fadein');
		content3.css('opacity', '1.0');
	}
	if(windowTop >= display_c4_1) {
		content4_1.addClass('fadein');
		content4_1.css('opacity', '1.0');
	}
	if(windowTop >= display_c4_2) {
		content4_2.addClass('fadein');
		content4_2.css('opacity', '1.0');
	}
	if(windowTop >= display_c5_1) {
		content5_1.addClass('fadein');
		content5_1.css('opacity', '1.0');
	}
	if(windowTop >= display_c5_2) {
		content5_2.addClass('fadein');
		content5_2.css('opacity', '1.0');
	}
});