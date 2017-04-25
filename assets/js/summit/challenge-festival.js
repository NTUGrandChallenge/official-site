/*
 * 切換挑戰賽嘉年華版面
 */

var act1 = $('#fest-act1');
var act2 = $('#fest-act2');
var act3 = $('#fest-act3');
var act4 = $('#fest-act4');
var acts = [act1, act2, act3, act4];

// Initialize view when enter the page
act2.hide();
act3.hide();
act4.hide();

// Apply function to show only the act clicked
function toggleAct( index ) {
	var acts_to_hide = acts.slice();
	acts_to_hide[index - 1].show();
	// Pop the act to toggle, the remaining should be hidden
	acts_to_hide.splice( index - 1, 1 );
	$.each(acts_to_hide, function(key, val) {
		val.hide();
	});
}

$('#btn-act1').click(function() {
	toggleAct(1);
});

$('#btn-act2').click(function() {
	toggleAct(2);
});

$('#btn-act3').click(function() {
	toggleAct(3);
});

$('#btn-act4').click(function() {
	toggleAct(4);
});
