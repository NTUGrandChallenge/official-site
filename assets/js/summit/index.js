// top animation
$(window).on("load", function(){
	$('#top').addClass('animation-start');
})

//five activity
for(var i = 1; i <= $('#five .activity').length; i++){
    $('#five .activity:nth-child('+ i +')').hover(function(){
        $('#five .description:nth-child('+ ($(this).index()+1) +')').addClass('active');
    },function(){
        $('#five .description:nth-child('+ ($(this).index()+1) +')').removeClass('active');
    })
}