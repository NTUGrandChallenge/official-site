// top animation
$(window).on("load", function(){
	$('#top').addClass('animation-start');
})

//about carousel
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("about-slide");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

//five activity
for(var i = 1; i <= $('#five .activity').length; i++){
    $('#five .activity:nth-child('+ i +')').hover(function(){
        $('#five .description:nth-child('+ ($(this).index()+1) +')').addClass('active');
    },function(){
        $('#five .description:nth-child('+ ($(this).index()+1) +')').removeClass('active');
    })
}