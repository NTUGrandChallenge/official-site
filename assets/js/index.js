//if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//    swal({
//        title: "貼心小提醒：",
//        text: "手機版還在調整中，建議使用電腦瀏覽喔！"
//    })
//}

//scrolling events
//var divider_position = $('#divider').offset();
var navbar = $('#navbar'),
    navbar_position = navbar.offset(),
    wedge = $('#wedge'),
    wedge_position = wedge.offset(),
    talk_position = $('#talk').offset();

$(window).scroll(function(){
//    fixed navbar
    if($(window).scrollTop() > navbar_position.top){
        navbar.addClass('fixed');
        wedge.css('margin-top', $('#navbar').height());
    }
    else{
        navbar.removeClass('fixed');
        wedge.css('margin-top', '0');
    }
});

//top blink
$('#top .blink').on('animationend webkitAnimationEnd oAnimationEnd', function (){
    if($(this).next('.blink').length != 0){
        $(this).next('.blink').addClass('active');
    }
    else{
        $(this).siblings('.blink').first().addClass('active');
    }
    $(this).removeClass('active');
});

//slide down button
$('#scroll_to_navbar').click(function(){
    $('html, body').animate({
        scrollTop: navbar_position.top
    }, 1000);
});

//five
for(var i = 1; i <= $('#five .five').length; i++){
    $('#five .five:nth-child('+ i +')').hover(function(){
        $('#five .description p:nth-child('+ ($(this).index()+1) +')').addClass('active');
    },function(){
        $('#five .description p:nth-child('+ ($(this).index()+1) +')').removeClass('active');
    })
}

//why
$('#why .shake').on('animationend webkitAnimationEnd oAnimationEnd', function (){
    if($(this).hasClass('single')){
        $('#why .shake.team').addClass('active');
    }
    else{
        $('#why .shake.single').addClass('active');
    }
    $(this).removeClass('active');
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
//var top_slideshow = Slideshow.createNew('#top');
var ov_slideshow = Slideshow.createNew('#overview');
$(window).load(function(){
    $('#overview').height($('#overview img:nth-child(1)').height());
})
$(window).on('resize', function(){
    console.log("FF");
    $('#overview').height($('#overview img:nth-child(1)').height());
})

//var overview_height = document.getElementById('overview').getElementsByTagName('img')[0].height;
//document.getElementById('overview').style.height = overview_height;

//speecher hover effect
$('.speecher').hover(function(){
    $(this).siblings('.speech-bubble').addClass('active');
},function(){
    $(this).siblings('.speech-bubble').removeClass('active');
})

