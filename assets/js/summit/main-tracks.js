/*
 * 選取主題論壇按鈕hover效果
 */


/*
 * 切換領域主題論壇版面
 */

var talk1 = $('#talk1');
var talk2 = $('#talk2');
var talk3 = $('#talk3');
var talk4 = $('#talk4');
var talks = [talk1, talk2, talk3, talk4];

// Initialize view when enter the page
talk2.hide();
talk3.hide();
talk4.hide();

// Apply function to show only the talk clicked
function toggleTalk( index ) {
	var talks_to_hide = talks.slice();
	talks_to_hide[index - 1].show();
	// Pop the talk to toggle, the remaining should be hidden
	if( index > -1 ) {
		talks_to_hide.splice( index - 1, 1 );
	}
	$.each(talks_to_hide, function(key, val) {
		val.hide();
	});
}

$('#btn-talk1').click(function() {
	toggleTalk(1);
});

$('#btn-talk2').click(function() {
	toggleTalk(2);
});

$('#btn-talk3').click(function() {
	toggleTalk(3);
});

$('#btn-talk4').click(function() {
	toggleTalk(4);
});
