var nav_width = 300;
var nav_transition_time = 400;

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
