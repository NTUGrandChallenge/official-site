var nav_width = 300;
var nav_transition_time = 400;

var startSidenav = function(){
// sidenav expand control
	$('#sidenav').hover(function(){
		$(this).find('.list.main').addClass('expanded');
	}, function(){
		$(this).find('.list.main').delay(nav_transition_time).queue(function(next){
			$(this).removeClass('expanded');
			next();
		});
	});
	$('#sidenav .list.main li.hasSub').hover(function(){
		$(this).find('.list.sub').delay(nav_transition_time).queue(function(next){
			$(this).addClass('expanded');
			next();
		});
	}, function(){
		$(this).find('.list.sub').clearQueue();
		$(this).find('.list.sub').removeClass('expanded');
	});

	// sidnav exit and back control on mobile
	$('#sidenav .close_button').click(function(){
		$('#sidenav .list').removeClass('expanded');
		$('#sidenav').trigger('mouseleave');	//not work QQ
	});
	$('#sidenav .list.sub .back_button').click(function(){
		$('#sidenav .list.sub').removeClass('expanded');
	});
};

$('#sidenav').load('_sidenav.html', startSidenav);