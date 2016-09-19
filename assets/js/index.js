$(window).load(function(){
    $('body').removeClass('loading');
    $('#loading').fadeOut(800).remove();
})

//$('#overview').css('height', $('#overview .slides img').height())


//scrolling events
var navbar_position = $('#navbar').offset();
//var divider_position = $('#divider').offset();
var slogan_position = $('#slogan').offset();
var talk_position = $('#talk').offset();
$(window).scroll(function(){
//    fixed navbar
    if($(window).scrollTop() > navbar_position.top){
        $('#navbar').addClass('fixed');
        $('#slogan').css('margin-top', $('#navbar').height());
    }
    else{
        $('#navbar').removeClass('fixed');
        $('#slogan').css('margin-top', '0');
    }
    
//    fade in
    if($(window).scrollTop() > (slogan_position.top - 500)){
        $('#slogan h1').fadeTo(600, 1);
        setTimeout(function(){
            $('#slogan p').fadeTo(600, 1);
        }, 600);
    }
    if($(window).scrollTop() > (talk_position.top - 500)){
        $('#talk h2').fadeTo(600, 1);
        setTimeout(function(){
            $('#talk p').fadeTo(600, 1);
        }, 600);
    }
    
//    easing background
//    if($(window).scrollTop() > divider_position.top){
//        var rgb = Math.floor((divider_position.top - $(window).scrollTop())/5 + 256);
//        $('body').css('background-color', 'rgb(' + rgb + ',' + rgb + ',' + rgb + ')');
//    }
//    else{
//        $('body').css('background-color', '#FFF');
//    }
});

//slide down button
$('#scroll_to_navbar').click(function(){
    $('html, body').animate({
        scrollTop: navbar_position.top
    }, 1000);
});


//slide show function
var Slideshow = {
    createNew: function(parent){
        var slideshow = {};
        slideshow.slideIndex = 0;
        slideshow.plusSlides = function(n){
            slideshow.showSlides(slideshow.slideIndex += n);
        }
        slideshow.currentSlide = function(n){
            slideshow.showSlides(slideshow.slideIndex = n);
        }
        slideshow.showSlides = function(n){
            var slides = $(parent).find('.slides');
            if(n >= slides.length){
                slideshow.slideIndex = 0;
            }
            if(n < 0){
                slideshow.slideIndex = slides.length - 1;
            }
            
            $(parent).find('.slides-container').css('transform', 'translateX(' + -slideshow.slideIndex * 10 + '%)');
            $(parent).find('.indicator').removeClass('active');
            $(parent).find('.indicator:nth-child(' + (slideshow.slideIndex + 1) + ')').addClass('active');
            
        }
        slideshow.showSlides(slideshow.slideIndex);
        window.setInterval(function(){
            if(!$(parent).find('.slideshow-container').is(':hover')){
                slideshow.plusSlides(1);
            }
        }, 5000);
        $(parent).find('.slideshow-container').on('swipeleft', slideshow.plusSlides(1));
        $(parent).find('.slideshow-container').on('swiperight', slideshow.plusSlides(-1));
        
        return slideshow;
    }
}
var top_slideshow = Slideshow.createNew('#top');
var ov_slideshow = Slideshow.createNew('#overview');

$(".diamondswrap").diamonds({
    size: 150, // Size of the squares
    gap: 1 // Pixels between squares
});

//question and answer
for(var i = 1; i <= $('.speech-bubble-question').length; i++){
    $('.speech-bubble-question:nth-child('+ i +')').hover(function(){
        $('.speech-bubble-question').addClass('mask');
        $(this).removeClass('mask');
        $('.speech-bubble-answer:nth-child('+ ($(this).index()+1) +')').addClass('active');
    },function(){
        $('.speech-bubble-question').removeClass('mask');
        $('.speech-bubble-answer').removeClass('active');
    })
}
//speecher hover effect
$('.speecher').hover(function(){
    $(this).siblings('.speech-bubble').addClass('active');
},function(){
    $(this).siblings('.speech-bubble').removeClass('active');
})

//number count up
$('#data .counter').counterUp({
    delay: 10,
    time: 500
});

